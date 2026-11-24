"""Render sitcom timeline.json + audio.wav to MP4 + poster JPG using Python Playwright + static_ffmpeg.
Usage:
  /Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python render.py <outdir> <mp4_out> <poster_out> [--workers 4]
"""
import asyncio, base64, http.server, json, math, os, shutil, socketserver, subprocess, sys, threading, time
import static_ffmpeg
static_ffmpeg.add_paths()
from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=HERE, **kwargs)
    def log_message(self, fmt, *args):
        pass

def start_server():
    httpd = socketserver.TCPServer(("127.0.0.1", 0), QuietHandler)
    port = httpd.server_address[1]
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd, port

async def render_all(out_dir: str, mp4_out: str, poster_out: str, workers: int = 1):
    with open(os.path.join(out_dir, "timeline.json"), "r", encoding="utf-8") as f:
        tl = json.load(f)
    fps = int(tl.get("fps") or 24)
    total_frames = math.ceil(tl["duration"] * fps)
    per = math.ceil(total_frames / workers)
    ffmpeg_bin = shutil.which("ffmpeg")
    assert ffmpeg_bin, "ffmpeg not found on PATH"

    httpd, port = start_server()
    url = f"http://127.0.0.1:{port}/render.html"
    t0 = time.time()

    async with async_playwright() as p:
        browser = await p.chromium.launch(args=["--disable-gpu-vsync"])

        async def open_page():
            pg = await browser.new_page(viewport={"width": 1280, "height": 720})
            await pg.goto(url)
            await pg.evaluate("(tl) => window.init(tl)", tl)
            return pg

        # Render poster frame first
        os.makedirs(os.path.dirname(poster_out), exist_ok=True)
        os.makedirs(os.path.dirname(mp4_out), exist_ok=True)
        poster_pg = await open_page()
        poster_t = tl.get("poster_t") or 12
        d_poster = await poster_pg.evaluate("(t) => window.frameJpeg(t, 0.88)", poster_t)
        with open(poster_out, "wb") as pf:
            pf.write(base64.b64decode(d_poster.split(",", 1)[1]))
        await poster_pg.close()

        async def run_worker(w: int):
            a = w * per
            b = min(total_frames, a + per)
            if a >= b:
                return None
            seg = os.path.join(out_dir, f"part{w}.mp4")
            pg = await open_page()
            proc = subprocess.Popen(
                [
                    ffmpeg_bin, "-y", "-loglevel", "error",
                    "-f", "image2pipe", "-framerate", str(fps), "-c:v", "mjpeg", "-i", "-",
                    "-vf", "scale=in_range=full:out_range=tv,format=yuv420p",
                    "-c:v", "libx264", "-preset", "ultrafast", "-crf", "26",
                    "-pix_fmt", "yuv420p", "-color_range", "tv", "-tune", "animation", seg,
                ],
                stdin=subprocess.PIPE,
            )
            assert proc.stdin is not None
            for i in range(a, b):
                d = await pg.evaluate("(t) => window.frameJpeg(t, 0.90)", i / fps)
                buf = base64.b64decode(d.split(",", 1)[1])
                proc.stdin.write(buf)
                if w == 0 and (i - a) % 360 == 0:
                    print(f"  worker0 {i - a}/{b - a} frames (+{time.time() - t0:.0f}s)", flush=True)
            proc.stdin.close()
            rc = proc.wait()
            await pg.close()
            if rc != 0:
                raise RuntimeError(f"ffmpeg worker {w} exited {rc}")
            return f"file 'part{w}.mp4'"

        parts = await asyncio.gather(*[run_worker(w) for w in range(workers)])
        await browser.close()
    httpd.shutdown()

    parts_txt = os.path.join(out_dir, "parts.txt")
    with open(parts_txt, "w", encoding="utf-8") as f:
        f.write("\n".join(x for x in parts if x) + "\n")

    subprocess.run(
        [
            ffmpeg_bin, "-y", "-loglevel", "error",
            "-f", "concat", "-safe", "0", "-i", parts_txt,
            "-i", os.path.join(out_dir, "audio.wav"),
            "-c:v", "copy",
            "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
            "-ar", "48000", "-c:a", "aac", "-b:a", "128k",
            "-movflags", "+faststart", "-shortest",
            mp4_out,
        ],
        check=True,
    )
    for w in range(workers):
        seg = os.path.join(out_dir, f"part{w}.mp4")
        if os.path.exists(seg):
            os.remove(seg)
    print(f"  muxed {mp4_out} + {poster_out} in {time.time() - t0:.1f}s", flush=True)

if __name__ == "__main__":
    out_dir = os.path.abspath(sys.argv[1])
    mp4_out = os.path.abspath(sys.argv[2])
    poster_out = os.path.abspath(sys.argv[3])
    workers = 1
    if "--workers" in sys.argv:
        workers = int(sys.argv[sys.argv.index("--workers") + 1])
    asyncio.run(render_all(out_dir, mp4_out, poster_out, workers))
