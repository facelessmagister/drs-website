#!/usr/bin/env python3
"""
Extract the next chapter from hoffbrand.md based on .agent/progress.json.

Logic:
  1. GAP_FILL phase: find the smallest chapter number (1..34) that does NOT yet have
     a quiz directory under app/quiz/chapter/ and process that first.
  2. CYCLE phase: all 34 chapters have at least one batch. Cycle round-robin,
     adding 10 more questions to the existing questions.ts of each chapter.

Writes a trimmed chapter file to /tmp/drs-chapter-{N}.txt for the Claude agent.
Updates progress.json with the line boundaries of the extracted chapter and next
chapter metadata.
"""
import json, re, os, sys

PROJECT = "/root/projects/drs-website"
HFB = os.path.join(PROJECT, "hoffbrand.md")
PRG = os.path.join(PROJECT, ".agent", "progress.json")
CHAPTER_DIR = os.path.join(PROJECT, "app", "quiz", "chapter")


def bail(msg):
    print(f"[ERROR] {msg}", file=sys.stderr)
    sys.exit(1)


def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def get_chapter_boundaries(hfb_path):
    """
    Return list of dicts: { 'chapter': int, 'line': int, 'title': str }
    for the FIRST occurrence of each chapter header in the file.
    We match lines like:
      'Chapter 1: Haemopoiesis / 3'
      '12 / Chapter 2: Erythropoiesis and general aspects of anaemia'
    """
    boundaries = []
    seen = set()
    with open(hfb_path, "r", encoding="utf-8") as f:
        for i, line in enumerate(f, start=1):
            m = re.search(r"Chapter\s+(\d+):\s+(.+)", line.strip())
            if m:
                ch = int(m.group(1))
                raw_title = m.group(2)
                # Strip trailing page numbers like ' / 3' or ' / 13'
                title = re.sub(r"\s+/\s+\d+\s*$", "", raw_title).strip()
                if ch not in seen:
                    boundaries.append({"chapter": ch, "line": i, "title": title})
                    seen.add(ch)
    return boundaries


def get_existing_chapters():
    """Return a set of chapter IDs (as strings) that already have a directory."""
    if not os.path.isdir(CHAPTER_DIR):
        return set()
    existing = set()
    for name in os.listdir(CHAPTER_DIR):
        path = os.path.join(CHAPTER_DIR, name)
        if os.path.isdir(path) and name.isdigit():
            existing.add(name)
    return existing


def count_questions_in_chapter(ch_id):
    """Count how many Question objects exist in a chapter's questions.ts."""
    qpath = os.path.join(CHAPTER_DIR, ch_id, "questions.ts")
    if not os.path.isfile(qpath):
        return 0
    text = open(qpath, "r", encoding="utf-8").read()
    # Each question starts with "num: " followed by a number
    return len(re.findall(r"^\s+num:\s+\d+", text, re.MULTILINE))


def compute_next_target(prog):
    """
    Determine the next chapter to process and the processing mode.

    Returns: (next_ch, title, phase, cycle_round)
      phase  -> "gap_fill" or "cycle"
    """
    total = prog.get("total_chapters", 34)
    phase = prog.get("phase", "gap_fill")
    existing = get_existing_chapters()
    scheduled_next = prog.get("next_chapter")

    # 1. Honor any explicitly scheduled next_chapter that hasn't been built yet.
    if scheduled_next is not None:
        sch = str(scheduled_next)
        if sch not in existing and 1 <= scheduled_next <= total:
            return scheduled_next, None, phase, prog.get("cycle_round", 1)

    # 2. GAP_FILL: find the smallest missing chapter.
    if phase == "gap_fill":
        missing = [i for i in range(1, total + 1) if str(i) not in existing]
        if missing:
            return missing[0], None, "gap_fill", 1
        else:
            # All chapters filled — switch to cycle mode
            phase = "cycle"
            prog["phase"] = "cycle"
            prog["cycle_round"] = 1
            return 1, None, "cycle", 1

    # 3. CYCLE: round-robin through all chapters.
    cycle_round = prog.get("cycle_round", 1)
    next_ch = prog.get("next_chapter", 1)
    if not isinstance(next_ch, int) or next_ch < 1 or next_ch > total:
        next_ch = 1
    return next_ch, None, "cycle", cycle_round


def extract_chapter(hfb_path, start, end, out_path, max_lines=2500):
    """Write chapter lines [start, end] inclusive to out_path, capped at max_lines."""
    lines = []
    with open(hfb_path, "r", encoding="utf-8") as f:
        for i, line in enumerate(f, start=1):
            if i < start:
                continue
            if end is not None and i > end:
                break
            lines.append(line)
            if len(lines) >= max_lines:
                break
    with open(out_path, "w", encoding="utf-8") as f:
        f.writelines(lines)
    return len(lines)


def main():
    if not os.path.isfile(HFB):
        bail(f"hoffbrand.md not found at {HFB}")
    if not os.path.isfile(PRG):
        bail(f"progress.json not found at {PRG}")

    prog = load_json(PRG)
    if prog.get("status") != "ready":
        bail(f"progress.status is '{prog.get('status')}', expected 'ready'. Another run may be in progress or stuck.")

    boundaries = get_chapter_boundaries(HFB)
    if not boundaries:
        bail("Could not find any chapter headers in hoffbrand.md.")

    # Ensure total_chapters is accurate
    max_ch = max(b["chapter"] for b in boundaries)
    if prog.get("total_chapters") != max_ch:
        prog["total_chapters"] = max_ch
        print(f"[INFO] Updated total_chapters to {max_ch} from hoffbrand.md scan.")

    next_ch, _, phase, cycle_round = compute_next_target(prog)

    # Find the index of the target chapter in boundaries
    target_idx = None
    for idx, b in enumerate(boundaries):
        if b["chapter"] == next_ch:
            target_idx = idx
            break

    if target_idx is None:
        bail(f"Could not find Chapter {next_ch} in hoffbrand.md.")

    start = boundaries[target_idx]["line"]
    title = boundaries[target_idx]["title"]

    if target_idx + 1 < len(boundaries):
        end = boundaries[target_idx + 1]["line"] - 1
        next_next_ch = boundaries[target_idx + 1]["chapter"]
        next_next_title = boundaries[target_idx + 1]["title"]
    else:
        end = None  # last chapter -> read to EOF
        next_next_ch = None
        next_next_title = "Done"

    out = f"/tmp/drs-chapter-{next_ch}.txt"
    written = extract_chapter(HFB, start, end, out)
    print(f"Extracted Chapter {next_ch}: lines {start} -> {end or 'EOF'} ({written} lines) -> {out}")
    print(f"  Title: {title}")
    print(f"  Phase: {phase}  (round {cycle_round})")
    print(f"  Next chapter in book: {next_next_ch} — {next_next_title}")

    # Update progress in_progress so overlapping cron runs don't double-process
    prog["hoffbrand_line_start"] = start
    prog["hoffbrand_line_end"] = end
    prog["next_chapter_title"] = title
    prog["next_chapter"] = next_ch
    prog["status"] = "in_progress"
    prog["phase"] = phase
    save_json(PRG, prog)
    print(f"Updated {PRG}: status -> in_progress, phase -> {phase}")


if __name__ == "__main__":
    main()
