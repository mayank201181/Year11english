# Sitcom episodes — "Totally Literary: Grade Nine Or Bust"

**Year 11 IGCSE English Language (`9270`) & English Literature (`4ET1`) Season 1.**
Quill, a theatrical crimson-and-gold Globe orb from the bookshelf, guides Vanishree, Mum, Dad, and Ms Lim through all 8 OxfordAQA `9270` & Pearson Edexcel `4ET1` topics — including an **Examiner Grade-9 Trap** beat and three interactive pause challenges in every episode.

Pipeline (all local, no paid APIs):

1. `episodes/<topic>.py` — the script: beats of dialogue, moods, camera shots, holo-board SVGs, SFX, Examiner Grade-9 Trap cards, and pause-challenges.
2. `build.py` — Kokoro neural TTS per line (cached), lip-sync envelopes, synthesized SFX + musical bed with ducking → `out/<topic>/audio.wav` + `timeline.json`.
3. `render.html` + `render.py` — Canvas renderer driven by `renderAt(t)`; Playwright + `static_ffmpeg` renders frames deterministically → H.264 + AAC `.mp4` + `.jpg` poster.
4. `gen_manifest.py` — Generates `lib/sitcom.ts` and `lib/shorts.ts` from `public/videos/*.mp4`.
