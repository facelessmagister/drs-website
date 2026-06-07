#!/usr/bin/env bash
# DRS Website — Daily Chapter Question Generator (v2: gap-fill + cycle)
# Runs at 12:00 PM daily via Hermes cron.
# Orchestrator: Hermes Cron -> Claude Code (single agent) -> Git push -> Vercel verify.
set -euo pipefail

PROJECT="/root/projects/drs-website"
HFB="$PROJECT/hoffbrand.md"
AGENT_DIR="$PROJECT/.agent"
PROGRESS="$AGENT_DIR/progress.json"
LOG="$AGENT_DIR/run-$(date +%Y%m%d-%H%M%S).log"

tee_log() { tee -a "$LOG"; }
exec > >(tee -a "$LOG")
exec 2>&1

echo "========================================"
echo "DRS Daily Agent Run — $(date)"
echo "========================================"

# --- 1. Environment sanity checks ---
if [[ -f "$HOME/.hermes/.env" ]]; then
    set -a; source "$HOME/.hermes/.env"; set +a
fi
if [[ -z "${VERCEL_TOKEN:-}" ]]; then
    echo "[FATAL] VERCEL_TOKEN not set"
    exit 1
fi
if [[ -z "${ANTHROPIC_API_KEY:-}" && -z "${ANTHROPIC_AUTH_TOKEN:-}" ]]; then
    echo "[FATAL] Neither ANTHROPIC_API_KEY nor ANTHROPIC_AUTH_TOKEN set"
    exit 1
fi

cd "$PROJECT"

# --- 2. Git clean state ---
echo "[1] Ensuring clean git state..."
git stash || true
git checkout main
git pull origin main

# --- 3. Read progress ---
echo "[2] Reading progress.json..."
STATUS=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('status',''))")

if [[ "$STATUS" != "ready" ]]; then
    echo "[SKIP] progress.status='$STATUS' (not ready). Exiting."
    exit 0
fi

# --- 4. Extract chapter text (prepare-chapter.py computes next_ch, phase, etc.) ---
echo "[3] Extracting chapter text..."
python3 "$AGENT_DIR/prepare-chapter.py"

# --- 5. Re-read progress AFTER prepare-chapter.py has updated it ---
echo "[4] Reading updated progress.json..."
NEXT_CH=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('next_chapter',''))")
NEXT_TITLE=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('next_chapter_title',''))")
PHASE=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('phase','gap_fill'))")
CYCLE_ROUND=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('cycle_round',1))")
TOTAL_CHAPTERS=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('total_chapters',34))")

# --- 5b. Save next_chapter so we can restore it after Claude (Claude often resets it) ---
SAVED_NEXT_CHAPTER=$NEXT_CH
SAVED_NEXT_TITLE="$NEXT_TITLE"
SAVED_PHASE=$PHASE
SAVED_CYCLE_ROUND=$CYCLE_ROUND

if [[ -z "$NEXT_CH" ]]; then
    echo "[DONE] No next chapter found. Exiting."
    exit 0
fi

echo "    Phase: $PHASE  |  Round: $CYCLE_ROUND"
echo "    Target chapter: $NEXT_CH — $NEXT_TITLE"

CHAPTER_FILE="/tmp/drs-chapter-${NEXT_CH}.txt"
if [[ ! -f "$CHAPTER_FILE" ]]; then
    echo "[FATAL] Chapter file not created: $CHAPTER_FILE"
    exit 1
fi

echo "    Chapter file: $CHAPTER_FILE ($(wc -l < "$CHAPTER_FILE") lines)"

# --- 6. Build the Claude prompt based on phase ---
echo "[5] Building Claude prompt..."

if [[ "$PHASE" == "gap_fill" ]]; then
    echo "    Mode: GAP_FILL — creating new chapter quiz page"

    PROMPT=$(cat <<EOF
TASK: Generate 10 expert-level SBA questions for Chapter ${NEXT_CH} — "${NEXT_TITLE}" of Hoffbrand's Essential Haematology 9th Edition.

CONTEXT FILES (read these first):
1. CLAUDE.md in the project root — contains all behaviour rules, style guides, and the workflow checklist.
2. /tmp/drs-chapter-${NEXT_CH}.txt — the extracted text of the target chapter.
3. .agent/progress.json — contains last_question_num and other progress state.
4. app/quiz/QuizClient.tsx — existing quiz UI pattern to clone.
5. app/quiz/page.tsx — existing quiz index page.

WORKFLOW (execute in this exact order):
1. Read CLAUDE.md and internalise all rules.
2. Read the chapter text from /tmp/drs-chapter-${NEXT_CH}.txt.
3. Read .agent/progress.json to get last_question_num.
4. Create the new chapter quiz page at app/quiz/chapter/${NEXT_CH}/ with:
   - questions.ts (10 Question objects, globally numbered starting at last_question_num+1)
   - QuizClient.tsx (clone from app/quiz/QuizClient.tsx, but update the hardcoded summary text to say "Chapter ${NEXT_CH}")
   - page.tsx (server wrapper; include generateStaticParams with ALL existing chapter IDs including ${NEXT_CH})
5. Update app/quiz/page.tsx into a Quiz Index listing ALL chapters (read existing chapter dirs under app/quiz/chapter/ to know which exist).
6. Run npm run build. Fix any TypeScript or build errors.
7. Update .agent/progress.json — ONLY change these two fields, leave everything else untouched:
   - Set last_question_num to the number of the last new question.
   - Set status to "ready".
   - Do NOT change next_chapter, next_chapter_title, or phase. The prepare-chapter.py script will recompute the correct next target automatically on the next run by scanning which chapters already exist.
8. Git add -A.
9. Git commit -m "feat: add Chapter ${NEXT_CH} — ${NEXT_TITLE} (10 questions)".
10. Git push origin main.
11. Run python3 .agent/verify-deploy.py to poll Vercel and confirm deployment.

RULES REMINDER:
- 5 clinical vignettes + 5 basic medical sciences.
- Bloom's Apply/Analyse/Evaluate/Create complexity only.
- Explanations must reference Hoffbrand 9th Ed explicitly.
- Reuse existing Tailwind/Lucide UI patterns exactly.
- generateStaticParams is required for static export and MUST include all existing chapter IDs.

Do not proceed past a step until the previous step is fully complete and verified.
EOF
    )

else
    # CYCLE phase — append to existing chapter
    EXISTING_COUNT=$(python3 -c "
import json, os, re
ch_id = '${NEXT_CH}'
ch_dir = '/root/projects/drs-website/app/quiz/chapter/' + ch_id
qpath = os.path.join(ch_dir, 'questions.ts')
if not os.path.isfile(qpath):
    print('0')
else:
    text = open(qpath, 'r', encoding='utf-8').read()
    print(len(re.findall(r'^\s+num:\s+\d+', text, re.MULTILINE)))
")
    NEW_TOTAL=$((EXISTING_COUNT + 10))

    echo "    Mode: CYCLE round ${CYCLE_ROUND} — appending 10 questions to Chapter ${NEXT_CH}"
    echo "    Existing questions: ${EXISTING_COUNT}  ->  New total: ${NEW_TOTAL}"

    PROMPT=$(cat <<EOF
TASK: Append 10 NEW expert-level SBA questions to the existing Chapter ${NEXT_CH} — "${NEXT_TITLE}" quiz in the DRS Website.

This is CYCLE ROUND ${CYCLE_ROUND}. The chapter already has ${EXISTING_COUNT} questions in app/quiz/chapter/${NEXT_CH}/questions.ts. You must append 10 more, bringing the total to ${NEW_TOTAL}.

CONTEXT FILES (read these first):
1. CLAUDE.md in the project root — contains all behaviour rules, style guides, and the workflow checklist.
2. /tmp/drs-chapter-${NEXT_CH}.txt — the extracted text of the target chapter (re-read for fresh topic ideas).
3. .agent/progress.json — contains last_question_num.
4. app/quiz/chapter/${NEXT_CH}/questions.ts — the EXISTING questions file. You MUST read it to understand the numbering, style, and topics already covered.
5. app/quiz/chapter/${NEXT_CH}/QuizClient.tsx — existing quiz UI (no changes needed, just reference).
6. app/quiz/chapter/${NEXT_CH}/page.tsx — existing server wrapper (update the subtitle to say "${NEW_TOTAL} single best answer (SBA) questions · Expert level").
7. app/quiz/page.tsx — quiz index (update the question count for Chapter ${NEXT_CH} from ${EXISTING_COUNT} to ${NEW_TOTAL}).

WORKFLOW (execute in this exact order):
1. Read CLAUDE.md and internalise all rules.
2. Read /tmp/drs-chapter-${NEXT_CH}.txt.
3. Read .agent/progress.json to get last_question_num.
4. Read the existing app/quiz/chapter/${NEXT_CH}/questions.ts to see what topics and question numbers are already used.
5. Append 10 NEW Question objects to the questions array in questions.ts:
   - Global numbering starts at last_question_num + 1.
   - Topics should DIFFER from the existing ${EXISTING_COUNT} questions where possible, or go deeper into subtopics not yet covered.
   - Same 5 clinical vignettes + 5 basic medical sciences split.
   - Same Bloom's complexity rules.
   - Same Hoffbrand 9th Ed citation requirement.
6. Update the page.tsx subtitle to reflect ${NEW_TOTAL} questions total.
7. Update app/quiz/page.tsx to show ${NEW_TOTAL} questions for Chapter ${NEXT_CH}.
8. Run npm run build. Fix any TypeScript or build errors.
9. Update .agent/progress.json — ONLY change these two fields, leave everything else untouched:
   - Set last_question_num to the number of the last newly appended question.
   - Set status to "ready".
   - Do NOT change next_chapter, next_chapter_title, phase, or cycle_round. The prepare-chapter.py script will recompute the correct next target automatically on the next run.
10. Git add -A.
11. Git commit -m "feat: cycle round ${CYCLE_ROUND} — add 10 questions to Chapter ${NEXT_CH} (${NEW_TOTAL} total)".
12. Git push origin main.
13. Run python3 .agent/verify-deploy.py to poll Vercel and confirm deployment.

RULES REMINDER:
- The new questions must be DISTINCT from existing ones — different vignettes, different mechanisms, different conceptual angles.
- 5 clinical vignettes + 5 basic medical sciences per batch.
- Bloom's Apply/Analyse/Evaluate/Create only.
- Explanations must explicitly reference Hoffbrand 9th Ed.
- Do NOT duplicate existing question stems or explanations.

Do not proceed past a step until the previous step is fully complete and verified.
EOF
    )
fi

echo "    Prompt length: ${#PROMPT} chars"

# --- 7. Launch Claude Code ---
echo "[6] Launching Claude Code (print mode)..."
echo "    This may take 5–15 minutes depending on complexity."

export SITE_URL="https://drs-website.vercel.app"

# We run Claude Code with permission-mode auto (root-safe) and a generous turn budget.
# If it fails, we capture the exit code but don't update progress.json to "ready",
# leaving status as "in_progress" so the next run can retry or we can investigate.

set +e
claude -p "$PROMPT" \
    --permission-mode auto \
    --allowedTools "Read,Edit,Write,Bash" \
    --max-turns 100 \
    2>> "$LOG"

CLAUDE_EXIT=$?
set -e

if [[ $CLAUDE_EXIT -ne 0 ]]; then
    echo "[FATAL] Claude Code exited with code $CLAUDE_EXIT."
    echo "        progress.json left at 'in_progress' for manual investigation."
    exit 1
fi

# --- 8. Post-run validation ---
echo "[7] Post-run validation..."

# Check that the chapter directory exists and has questions.ts
if [[ ! -d "app/quiz/chapter/${NEXT_CH}" ]]; then
    echo "[FATAL] Expected directory app/quiz/chapter/${NEXT_CH} not found after Claude run."
    echo "        Manual investigation needed. progress.json remains 'in_progress'."
    exit 1
fi

if [[ ! -f "app/quiz/chapter/${NEXT_CH}/questions.ts" ]]; then
    echo "[FATAL] questions.ts not found in app/quiz/chapter/${NEXT_CH}/ after Claude run."
    exit 1
fi

# Count questions in the file to ensure it grew (for cycle mode)
if [[ "$PHASE" == "cycle" ]]; then
    NEW_COUNT=$(python3 -c "
import os, re
qpath = 'app/quiz/chapter/${NEXT_CH}/questions.ts'
text = open(qpath, 'r', encoding='utf-8').read()
print(len(re.findall(r'^\s+num:\s+\d+', text, re.MULTILINE)))
")
    if [[ "$NEW_COUNT" -le "$EXISTING_COUNT" ]]; then
        echo "[FATAL] questions.ts count did not increase (${EXISTING_COUNT} -> ${NEW_COUNT})."
        echo "        Claude may have failed to append new questions. Manual review needed."
        exit 1
    fi
    echo "    Verified: questions.ts grew from ${EXISTING_COUNT} to ${NEW_COUNT} questions."
fi

# Advance progress.json to the next chapter (fixes any incorrect next_chapter/next_title/phase Claude may have set)
echo "[8] Advancing progress.json..."
# First, restore the saved next_chapter values that prepare-chapter.py set, in case Claude overwrote them.
# advance-progress.py needs the CORRECT "next_chapter" to compute the next one in sequence.
python3 << PYEOF
import json
p = "$PROGRESS"
d = json.load(open(p))
d["next_chapter"] = $SAVED_NEXT_CHAPTER
d["next_chapter_title"] = "$SAVED_NEXT_TITLE"
d["phase"] = "$SAVED_PHASE"
d["cycle_round"] = $SAVED_CYCLE_ROUND
json.dump(d, open(p, "w"), indent=2)
PYEOF
python3 "$AGENT_DIR/advance-progress.py" "$NEXT_CH"

# Commit the advanced progress.json so next run's git pull gets correct next_chapter
git add "$PROGRESS"
git commit -m "infra: advance progress to chapter $(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('next_chapter','?'))")"
git push origin main

# Final sanity check
echo "[9] Final sanity check..."
CURRENT_STATUS=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('status',''))")
if [[ "$CURRENT_STATUS" != "ready" ]]; then
    echo "[WARN] progress.json status is '$CURRENT_STATUS' after Claude run (expected 'ready')."
    echo "       If Claude did not finish cleanly, manual review is needed."
    exit 1
fi

echo "[10] Daily run complete for Chapter $NEXT_CH."
echo "    Log: $LOG"
exit 0
