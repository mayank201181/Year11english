"""Write lib/sitcom.ts and lib/shorts.ts from common.SEASON + rendered MP4s in public/videos.
Usage:
  /Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python scripts/sitcom/gen_manifest.py
"""
import json, os, re, subprocess
try:
    import static_ffmpeg
    static_ffmpeg.add_paths()
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)

# Read topic icons & strands from lib/topics/meta.ts
meta_src = open(os.path.join(ROOT, "lib", "topics", "meta.ts"), encoding="utf-8").read()
topic_icons = {}
topic_strands = {}
topic_titles = {}
for m in re.finditer(r'id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*strand:\s*"([^"]+)",\s*icon:\s*"([^"]+)"', meta_src):
    tid, ttitle, tstrand, ticon = m.groups()
    topic_titles[tid] = ttitle
    topic_strands[tid] = tstrand
    topic_icons[tid] = ticon

WHO_LABEL = {
    "vani": "Vanishree",
    "dad": "Dad",
    "mum": "Mum",
    "quill": "Quill",
    "teacher": "Ms Lim",
    "uncle": "Uncle Hock",
    "cashier": "Kai",
    "centi": "Centi",
}

rows = []
shorts = []
for num, topic, short, title in ns["SEASON"]:
    mp4 = os.path.join(ROOT, "public", "videos", f"{topic}.mp4")
    ep_file = os.path.join(HERE, "episodes", f"{topic}.py")
    if not (os.path.exists(mp4) and os.path.exists(ep_file)):
        continue
    dur = float(
        subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp4],
            capture_output=True, text=True, check=True,
        ).stdout.strip()
    )
    ep_ns = {}
    exec(open(os.path.join(HERE, "common.py")).read(), ep_ns)
    exec(open(ep_file).read(), ep_ns)
    rows.append(
        dict(
            num=num,
            topicId=topic,
            topicShort=short,
            title=title,
            logline=ep_ns["EP"].get("logline", ""),
            durationSec=round(dur),
            src=f"/videos/{topic}.mp4",
            poster=f"/videos/posters/{topic}.jpg",
        )
    )

    tl_path = os.path.join(HERE, "out", topic, "timeline.json")
    if os.path.exists(tl_path):
        tl = json.load(open(tl_path, encoding="utf-8"))
        segs = [s for s in tl.get("segs", []) if s.get("kind") == "line" and s.get("subs")]
    else:
        lines_b = [b for b in ep_ns.get("B", []) if b.get("type") == "line" and b.get("text")]
        span_start = 6.0
        span_end = max(span_start + 40.0, dur - 5.0)
        total_chars = max(1, sum(len(b["text"]) for b in lines_b))
        cur_t = span_start
        segs = []
        for b in lines_b:
            dt = (len(b["text"]) / total_chars) * (span_end - span_start)
            segs.append(dict(kind="line", who=b["who"], t0=cur_t, t1=cur_t + dt, subs=[dict(t=cur_t, text=b["text"])]))
            cur_t += dt

    if segs:
        # Partition into 4 bite-sized 60-100s vertical shorts per episode
        chunk_target = max(60.0, (dur - 12.0) / 4.2)
        clips_raw = []
        cur_lines = []
        cur_start = None
        for s in segs:
            if cur_start is None:
                cur_start = s["t0"]
            cur_lines.append(s)
            if s["t1"] - cur_start >= chunk_target and len(clips_raw) < 3:
                clips_raw.append((cur_start, min(dur, s["t1"]), cur_lines))
                cur_lines = []
                cur_start = None
        if cur_lines and cur_start is not None:
            clips_raw.append((cur_start, min(dur, cur_lines[-1]["t1"]), cur_lines))
        clips_raw = clips_raw[:4]
        labels = ["Cold Open & Hook", "Core Method", "Examiner Grade-9 Trap", "Final Takeaway"]
        for idx, (s0, s1, csegs) in enumerate(clips_raw, start=1):
            caps = []
            for cs in csegs:
                who = WHO_LABEL.get(cs.get("who", ""), cs.get("who", "Speaker").title())
                for sub in cs.get("subs", []):
                    caps.append(dict(t=round(sub["t"] - s0, 2), who=who, text=sub["text"]))
            first_text = caps[0]["text"] if caps else title
            shorts.append(
                dict(
                    id=f"{topic}-s{idx:02d}",
                    topicId=topic,
                    topicTitle=topic_titles.get(topic, short),
                    topicShort=short,
                    topicIcon=topic_icons.get(topic, "🎬"),
                    strand=topic_strands.get(topic, "Y11 English"),
                    episodeTitle=title,
                    index=idx,
                    totalInTopic=len(clips_raw),
                    title=f"{title} — {labels[min(idx - 1, len(labels) - 1)]}",
                    summary=first_text,
                    startSec=round(s0, 1),
                    endSec=round(s1, 1),
                    durationSec=round(s1 - s0, 1),
                    src=f"/videos/{topic}.mp4",
                    poster=f"/videos/posters/{topic}.jpg",
                    captions=caps,
                )
            )

out = os.path.join(ROOT, "lib", "sitcom.ts")
with open(out, "w", encoding="utf-8") as f:
    f.write("// Generated by scripts/sitcom/gen_manifest.py — do not edit by hand.\n")
    f.write(f'// "Totally Literary: Grade Nine Or Bust" Season {ns["SEASON_NUM"]}: one animated sitcom episode per topic (MP4s in public/videos).\n\n')
    f.write(
        "export interface SitcomEpisode {\n  num: number;\n  topicId: string;\n  topicShort: string;\n  title: string;\n"
        "  logline: string;\n  durationSec: number;\n  src: string;\n  poster: string;\n}\n\n"
    )
    f.write("export const SITCOM_EPISODES: SitcomEpisode[] = " + json.dumps(rows, indent=2, ensure_ascii=False) + ";\n\n")
    f.write(
        "export function sitcomEpisodeFor(topicId: string): SitcomEpisode | undefined {\n"
        "  return SITCOM_EPISODES.find((e) => e.topicId === topicId);\n}\n"
    )
print(f"wrote {out}: {len(rows)} episodes")

if shorts:
    shorts_out = os.path.join(ROOT, "lib", "shorts.ts")
    with open(shorts_out, "w", encoding="utf-8") as f:
        f.write("// Auto-generated concept Shorts manifest — do not edit by hand.\n")
        f.write("export interface ShortCaption {\n  t: number;\n  who: string;\n  text: string;\n}\n\n")
        f.write("export interface ShortPart {\n  src: string;\n  start: number;\n  duration: number;\n}\n\n")
        f.write(
            "export interface ShortClip {\n  id: string;\n  topicId: string;\n  topicTitle: string;\n  topicShort: string;\n"
            "  topicIcon: string;\n  strand: string;\n  episodeTitle: string;\n  index: number;\n  totalInTopic: number;\n"
            "  title: string;\n  summary: string;\n  startSec: number;\n  endSec: number;\n  durationSec: number;\n"
            "  src?: string;\n  parts?: ShortPart[];\n  poster?: string;\n  embedHref?: string;\n  chapterId?: string;\n"
            "  captions: ShortCaption[];\n}\n\n"
        )
        f.write("export const SHORTS: ShortClip[] = " + json.dumps(shorts, indent=2, ensure_ascii=False) + ";\n")
    print(f"wrote {shorts_out}: {len(shorts)} shorts")
