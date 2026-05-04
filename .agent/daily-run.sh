#!/usr/bin/env bash
# DRS Website — Daily Chapter Question Generator
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
exec 2>>1

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
NEXT_CH=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('next_chapter',''))")
NEXT_TITLE=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('next_chapter_title',''))")
STATUS=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('status',''))")

if [[ "$STATUS" != "ready" ]]; then
    echo "[SKIP] progress.status='$STATUS' (not ready). Exiting."
    exit 0
fi

if [[ -z "$NEXT_CH" ]]; then
    echo "[DONE] No next chapter found. All chapters complete."
    exit 0
fi

echo "    Next chapter: $NEXT_CH — $NEXT_TITLE"

# --- 4. Extract chapter text ---
echo "[3] Extracting chapter text..."
python3 "$AGENT_DIR/prepare-chapter.py"
CHAPTER_FILE="/tmp/drs-chapter-${NEXT_CH}.txt"
if [[ ! -f "$CHAPTER_FILE" ]]; then
    echo "[FATAL] Chapter file not created: $CHAPTER_FILE"
    exit 1
fi

echo "    Chapter file: $CHAPTER_FILE ($(wc -l < "$CHAPTER_FILE") lines)"

# --- 5. Build the Claude prompt ---
echo "[4] Building Claude prompt..."

PROMPT=$(cat <<EOF
TASK: Generate 10 expert-level SBA questions for Chapter ${NEXT_CH} — "${NEXT_TITLE}" of Hoffbrand's Essential Haematology 9th Edition.

CONTEXT FILES (read these first):
1. CLAUDE.md in the project root — contains all behaviour rules, style guides, and the workflow checklist.
2. /tmp/drs-chapter-${NEXT_CH}.txt — the extracted text of the target chapter.
3. .agent/progress.json — contains last_question_num and other progress state.
4. app/quiz/QuizClient.tsx — existing quiz UI pattern to clone.
5. app/quiz/page.tsx — existing quiz page (currently Chapter 1; transform into an index).

WORKFLOW (execute in this exact order):
1. Read CLAUDE.md and internalise all rules.
2. Read the chapter text from /tmp/drs-chapter-${NEXT_CH}.txt.
3. Read .agent/progress.json to get last_question_num.
4. Create the new chapter quiz page at app/quiz/chapter/${NEXT_CH}/ with:
   - questions.ts (10 Question objects, globally numbered starting at last_question_num+1)
   - QuizClient.tsx (clone from app/quiz/QuizClient.tsx)
   - page.tsx (server wrapper; include generateStaticParams)
5. Update app/quiz/page.tsx into a Quiz Index listing all chapters (read existing chapter dirs under app/quiz/chapter/ to know which exist).
6. Run npm run build. Fix any TypeScript or build errors.
7. Update .agent/progress.json:
   - Set last_question_num to the number of the last new question.
   - Set status to "ready".
   - Set next_chapter to the next chapter number (or null if done).
   - Set next_chapter_title to the next chapter title (or "Done").
8. Git add -A.
9. Git commit -m "feat: add Chapter ${NEXT_CH} — ${NEXT_TITLE} (10 questions)".
10. Git push origin main.
11. Run python3 .agent/verify-deploy.py to poll Vercel and confirm deployment.

RULES REMINDER:
- 5 clinical vignettes + 5 basic medical sciences.
- Bloom's Apply/Analyse/Evaluate/Create complexity only.
- Explanations must reference Hoffbrand 9th Ed explicitly.
- Reuse existing Tailwind/Lucide UI patterns exactly.
- generateStaticParams is required for static export.

Do not proceed past a step until the previous step is fully complete and verified.
EOF
)

echo "    Prompt length: ${#PROMPT} chars"

# --- 6. Launch Claude Code ---
echo "[5] Launching Claude Code (print mode)..."
echo "    This may take 5–15 minutes depending on complexity."

export SITE_URL="https://drs-website.vercel.app"

# We run Claude Code with permission-mode auto (root-safe) and a generous turn budget.
# If it fails, we capture the exit code but don't update progress.json to "ready",
# leaving status as "in_progress" so the next run can retry or we can investigate.

set +e
claude -p "$PROMPT" \
    --permission-mode auto \
    --allowedTools "Read,Edit,Write,Bash" \
    --max-turns 50 \
    2>> "$LOG"

CLAUDE_EXIT=$?
set -e

if [[ $CLAUDE_EXIT -ne 0 ]]; then
    echo "[FATAL] Claude Code exited with code $CLAUDE_EXIT."
    echo "        Result saved to $AGENT_DIR/claude-result-${NEXT_CH}.json"
    echo "        progress.json left at 'in_progress' for manual investigation."
    exit 1
fi

# --- 7. Post-run validation ---
echo "[6] Post-run validation..."

# Check that the new chapter directory was created
if [[ ! -d "app/quiz/chapter/${NEXT_CH}" ]]; then
    echo "[FATAL] Expected directory app/quiz/chapter/${NEXT_CH} not found after Claude run."
    echo "        Manual investigation needed. progress.json remains 'in_progress'."
    exit 1
fi

# Check that progress.json was updated back to ready
CURRENT_STATUS=$(python3 -c "import json,sys; d=json.load(open('$PROGRESS')); print(d.get('status',''))")
if [[ "$CURRENT_STATUS" != "ready" ]]; then
    echo "[WARN] progress.json status is '$CURRENT_STATUS' after Claude run (expected 'ready')."
    echo "       If Claude did not finish cleanly, manual review is needed."
    exit 1
fi

echo "[7] Daily run complete for Chapter $NEXT_CH."
echo "    Log: $LOG"
exit 0
