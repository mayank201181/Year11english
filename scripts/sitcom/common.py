# Shared cast, season list and beat helpers for "Totally Literary: Grade Nine Or Bust" (Season 1, Y11 IGCSE English).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.

VOICES = {
    "vani":    dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "centi":   dict(voice="am_fenrir", speed=0.95, lang="en-us", pitch=-2.5),
    "quill":   dict(voice="bm_lewis", speed=1.08, lang="en-gb", pitch=-1.2),
    "cashier": dict(voice="am_puck", speed=1.12, lang="en-us"),
    "teacher": dict(voice="af_sarah", speed=1.02, lang="en-us"),
    "uncle":   dict(voice="am_michael", speed=1.0, lang="en-us", pitch=-1.0),
}

SHOW = "TOTALLY LITERARY"
SHOW_TAG = "GRADE NINE OR BUST"
SEASON_NUM = 1
TEACHER = "quill"   # who runs the holo-board and the pause challenges

# Season 1 running order = Year 11 IGCSE English Lab topic order (lib/topics/meta.ts).
SEASON = [
    (1, "lang-p1-reading", "Paper 1A Reading", "Read On At Your Own Risk"),
    (2, "lang-p1-composition", "Paper 1B Writing", "Five Twists And Zero Marks"),
    (3, "lang-p2-sources", "Paper 2A Synthesis", "Six Texts, One Group Chat"),
    (4, "lang-p2-directed", "Paper 2B Rhetoric", "Yours Faithfully, Outraged"),
    (5, "lit-of-mice-and-men", "Of Mice and Men", "Rabbits, Red Shoes And Soledad"),
    (6, "lit-inspector-calls", "An Inspector Calls", "Unsinkable, Absolutely Unsinkable"),
    (7, "lit-macbeth", "Macbeth", "Out, Damned Waffle"),
    (8, "lit-poetry", "Poetry & Unseen", "Sixteen Poems Walk Into An Exam"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park",
        "beach", "desert", "polar", "mountain", "megacity", "reef", "weatherdesk"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller",
         "globe", "umbrella", "sunglasses", "binoculars", "bucket"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.5):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW, tag=SHOW_TAG, sub=f"Season {SEASON_NUM} · Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else f"That's a wrap on Season {SEASON_NUM}!"
    B.append(dict(type="card", text=f"{SHOW}: {SHOW_TAG}", sub=sub, dur=dur))
