#!/usr/bin/env python3
"""
Extract the next chapter from hoffbrand.md based on .agent/progress.json.
Writes a trimmed chapter file to /tmp/drs-chapter-{N}.txt for the Claude agent.
Updates progress.json with the line boundaries of the extracted chapter and next chapter metadata.
"""
import json, re, os, sys

PROJECT = "/root/projects/drs-website"
HFB = os.path.join(PROJECT, "hoffbrand.md")
PRG = os.path.join(PROJECT, ".agent", "progress.json")

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

    next_ch = prog["next_chapter"]
    boundaries = get_chapter_boundaries(HFB)
    
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
    print(f"  Next:  Chapter {next_next_ch} — {next_next_title}")

    # Update progress in_progress so overlapping cron runs don't double-process
    prog["hoffbrand_line_start"] = start
    prog["hoffbrand_line_end"] = end
    prog["next_chapter_title"] = title
    prog["status"] = "in_progress"
    save_json(PRG, prog)
    print(f"Updated {PRG}: status -> in_progress")

if __name__ == "__main__":
    main()
