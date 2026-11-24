#!/usr/bin/env bash
# Build + render one or more sitcom episodes using the shared read-only .tts-env Python environment.
# Usage: scripts/sitcom/make_episode.sh <topic-id> [<topic-id> ...]
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
PY="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python"
WORKERS="${WORKERS:-1}"
mkdir -p "$ROOT/public/videos/posters"
find tts_cache -name '*.raw.wav' -delete 2>/dev/null || true
find tts_cache -name '*.tmp.wav' -delete 2>/dev/null || true

for T in "$@"; do
  S0=$(date +%s)
  MP4="$ROOT/public/videos/$T.mp4"
  JPG="$ROOT/public/videos/posters/$T.jpg"
  echo "=== $T: lint"
  "$PY" lint_episode.py "episodes/$T.py"

  if [ -s "$MP4" ] && [ -s "$JPG" ] && "$PY" -c "
import subprocess, static_ffmpeg
static_ffmpeg.add_paths()
out = subprocess.check_output(['ffprobe','-v','error','-show_entries','stream=codec_name,pix_fmt,color_range,r_frame_rate','-show_entries','format=duration','-of','compact','$MP4'], text=True)
dur = [float(l.split('duration=')[1]) for l in out.splitlines() if 'duration=' in l][0]
assert 'codec_name=h264' in out and 'codec_name=aac' in out and 'pix_fmt=yuv420p' in out and 'color_range=tv' in out and 'r_frame_rate=24/1' in out and dur > 60
" 2>/dev/null; then
    echo "=== $T: valid MP4 + poster already present, skipping render"
    if [ ! -s "out/$T/timeline.json" ]; then
      echo "=== $T: rebuilding timeline.json for shorts manifest"
      "$PY" build.py "episodes/$T.py" "out/$T"
    fi
    continue
  fi

  rm -f "out/$T"/part*.mp4 "$MP4"
  if [ -s "out/$T/timeline.json" ] && [ -s "out/$T/audio.wav" ]; then
    echo "=== $T: timeline.json + audio.wav already built, skipping TTS"
  else
    echo "=== $T: voices + timeline"
    "$PY" build.py "episodes/$T.py" "out/$T"
  fi
  echo "=== $T: render frames + mux (workers=$WORKERS, ultrafast)"
  "$PY" render.py "out/$T" "$MP4" "$JPG" --workers "$WORKERS"
  echo "=== $T: done in $(( $(date +%s) - S0 ))s"
done
