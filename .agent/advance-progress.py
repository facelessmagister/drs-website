#!/usr/bin/env python3
"""
Post-run progress advancement for the DRS Website daily agent.

Reads .agent/progress.json, scans existing chapter directories, computes the
next chapter to process, and updates progress.json back to "ready" state.

Usage:
  python3 advance-progress.py [current_chapter]

If current_chapter is provided, it is used as the just-completed chapter.
Otherwise the script reads it from progress.json['next_chapter'].
"""
import json, re, os, sys

PROJECT = "/root/projects/drs-website"
HFB = os.path.join(PROJECT, "hoffbrand.md")
PRG = os.path.join(PROJECT, ".agent", "progress.json")
CHAPTER_DIR = os.path.join(PROJECT, "app", "quiz", "chapter")


def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def get_chapter_boundaries(hfb_path):
    boundaries = []
    seen = set()
    with open(hfb_path, "r", encoding="utf-8") as f:
        for i, line in enumerate(f, start=1):
            m = re.search(r"Chapter\s+(\d+):\s+(.+)", line.strip())
            if m:
                ch = int(m.group(1))
                raw_title = m.group(2)
                title = re.sub(r"\s+/\s+\d+\s*$", "", raw_title).strip()
                if ch not in seen:
                    boundaries.append({"chapter": ch, "line": i, "title": title})
                    seen.add(ch)
    return boundaries


def get_existing_chapters():
    if not os.path.isdir(CHAPTER_DIR):
        return set()
    existing = set()
    for name in os.listdir(CHAPTER_DIR):
        path = os.path.join(CHAPTER_DIR, name)
        if os.path.isdir(path) and name.isdigit():
            existing.add(name)
    return existing


def get_title(boundaries, ch):
    for b in boundaries:
        if b["chapter"] == ch:
            return b["title"]
    return "Unknown"


def main():
    if not os.path.isfile(PRG):
        print("[ERROR] progress.json not found", file=sys.stderr)
        sys.exit(1)

    prog = load_json(PRG)
    phase = prog.get("phase", "gap_fill")
    total = prog.get("total_chapters", 34)
    current_ch = int(sys.argv[1]) if len(sys.argv) > 1 else prog.get("next_chapter", 1)
    existing = get_existing_chapters()
    boundaries = get_chapter_boundaries(HFB) if os.path.isfile(HFB) else []

    if phase == "gap_fill":
        missing = [i for i in range(1, total + 1) if str(i) not in existing]
        if missing:
            next_ch = missing[0]
            next_title = get_title(boundaries, next_ch)
            # Stay in gap_fill until all chapters are present
            prog["phase"] = "gap_fill"
            prog["cycle_round"] = 1
        else:
            # All chapters filled — switch to cycle
            next_ch = 1
            next_title = get_title(boundaries, next_ch)
            prog["phase"] = "cycle"
            prog["cycle_round"] = 1
    else:
        # cycle phase — advance round-robin
        cycle_round = prog.get("cycle_round", 1)
        next_ch = (current_ch % total) + 1
        next_title = get_title(boundaries, next_ch)
        # If we've wrapped back to 1, increment the cycle round
        if next_ch == 1:
            cycle_round += 1
            prog["cycle_round"] = cycle_round
        prog["phase"] = "cycle"

    prog["next_chapter"] = next_ch
    prog["next_chapter_title"] = next_title
    prog["status"] = "ready"

    save_json(PRG, prog)
    print(f"Advanced progress: next_chapter={next_ch} ({next_title}), phase={prog['phase']}, cycle_round={prog.get('cycle_round',1)}")


if __name__ == "__main__":
    main()
