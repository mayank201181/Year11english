# Episode 1 — Paper 1A Literary Non-Fiction Close Reading: "Read On At Your Own Risk"
EP = dict(
    topic="lang-p1-reading",
    logline="Vanishree tries to survive an OxfordAQA Paper 1A unseen travelogue while Quill banishes every 'makes the reader want to read on' cliché in Tanglin.",
)

DIAG_ICEBERG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
  <rect x="10" y="116" width="580" height="134" rx="12" fill="#0c4a6e"/>
  <line x1="20" y1="116" x2="580" y2="116" stroke="#38bdf8" stroke-width="3" stroke-dasharray="10 6"/>
  <text x="300" y="54" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#f8fafc">EXPLICIT: Stated Fact</text>
  <text x="300" y="96" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Surface detail above water</text>
  <text x="300" y="166" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">IMPLICIT SUBTEXT</text>
  <text x="300" y="216" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#bae6fd">Motive · Attitude · Power</text>
</svg>"""

DIAG_BULLSEYE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
  <text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde68a">WORD-ZOOM BULLSEYE</text>
  <text x="300" y="104" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#c7d2fe">1. Embed 2-5 word quote</text>
  <text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">2. Zoom on 1 word ("scalpels")</text>
  <text x="300" y="212" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#6ee7b7">3. Unpack 2 connotations</text>
</svg>"""

DIAG_SYNTAX = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#1c1917" stroke="#f59e0b" stroke-width="3"/>
  <text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde68a">SYNTAX &amp; PACING</text>
  <text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f8fafc">Periodic buildup → suspense</text>
  <text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">Minor drop → "Dead zero."</text>
  <text x="300" y="212" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fbbf24">(:) reveal · (—) candid aside</text>
</svg>"""

DIAG_ARC = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#052e16" stroke="#4ade80" stroke-width="3"/>
  <text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fef08a">WHOLE-TEXT ARC</text>
  <text x="300" y="100" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#bbf7d0">1. Wide calm → 2. Zoom clue</text>
  <text x="300" y="152" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fef08a">3. Pivot storm → 4. Cycle end</text>
  <text x="300" y="210" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">Track tone shift across text!</text>
</svg>"""

# ---------------------------------------------------------------------------
# COLD OPEN — Living room mock-marking disaster
# ---------------------------------------------------------------------------
scene("living", [("vani", 300), ("dad", 650), ("mum", 930)], "Sunday evening · Tanglin revision table")
L("vani", "Behold my practice answer on this Arctic travelogue, Mum. Every paragraph ends with my secret weapon: this makes the reader want to read on!", mood="smug", prop="book", shot="two")
L("mum", "Four times on one page? Even a cereal box technically wants you to read on to find the sugar.", mood="eyeroll", shot="two")
L("dad", "Hold on, look at line six: the writer uses words to paint a vivid picture in the reader's head.", mood="happy", shot="wide")
sfx("buzzer")
poof("quill", 480)
scene("living", [("vani", 240), ("quill", 500), ("dad", 760), ("mum", 1000)])
L("quill", "Did somebody just utter the forbidden incantation? Every time a candidate writes makes the reader want to read on, an Oxford A Q A examiner weeps!", mood="shock", shot="close")
freeze("WAFFLE DETECTED", dur=2.4, s="scratch", narrator="Zero marks awarded for empty boilerplate.")
L("vani", "Quill! You nearly knocked my highlighters into Dad's chai! What is wrong with saying an opening hooks the reader?", mood="annoyed", shot="two")
L("quill", "You could paste that exact sentence onto Hamlet or a bus timetable without reading a single word!", mood="teach", shot="close")
L("mum", "He has a point, sweetheart.", mood="deadpan", shot="two")
L("quill", "Paper One Section A carries forty marks of surgical close reading, never fortune-cookie compliments.", mood="determined", shot="close")

title()

# ---------------------------------------------------------------------------
# ACT 1 — Explicit vs Implicit & Section Boundaries (Classroom / Holo-Board)
# ---------------------------------------------------------------------------
card("EXAMINER GRADE-9 TRAP", "Ban 'makes the reader want to read on' & 'paints a vivid picture' — name the exact psychological tension!", dur=3.2)

scene("classroom", [("vani", 280), ("quill", 600), ("teacher", 920)], "Ms Lim's English Room · After-school clinic")
L("teacher", "Welcome to Section A clinic, Vanishree. Remember our insert is one literary non-fiction text split into numbered sections.", mood="teach", prop="tablet", shot="wide")
L("vani", "Memoirs, travelogues, journalism. Real people enduring dreadful weather.", mood="deadpan", shot="two")
L("quill", "Rule one: draw a physical box around the exact section named in the question before reading!", mood="teach", boardClear=True, board="Rule 1: Box the named Section first!", shot="two")
L("teacher", "Quote a gem from Section Three on a Section One question and the mark scheme awards clean zero.", mood="determined", board="Wrong section = 0 marks", shot="close")
L("vani", "Stay inside the fence! Now how do I separate explicit retrieval from implicit inference?", mood="thinking", shot="two")
L("quill", "Picture an iceberg! Explicit facts sit above the waterline; implicit inference dives below into unspoken motive without paraphrasing.", mood="teach", boardClear=True, diagram=DIAG_ICEBERG, board="Paraphrase = swapping synonyms (Band 2)", shot="wide")
L("vani", "Wait, test me so I never paraphrase by mistake.", mood="worried", shot="two")
L("teacher", "Text: whenever my aunt visited, my father hid the chipped mugs behind the flour tins. Paraphrase says: he put old cups away.", mood="teach", board="Inference = hidden status anxiety", shot="two")
L("vani", "Aha! Hiding chipped mugs only for her betrays status anxiety and an anxious performance of respectability!", mood="excited", shot="close")
sfx("ding")
L("quill", "Magnificent! You stepped off the surface and named the psychological subtext.", mood="happy", shot="two")

confess("dad", "Living-room hallway")
L("dad", "When my sister visits, I hide the chipped mugs AND leave economics books open on the sofa. Pure subtext.", mood="smug", shot="close")

scene("classroom", [("vani", 280), ("quill", 600), ("teacher", 920)])
L("quill", "Let us test your anti-paraphrase radar on the holo-board.", mood="determined", shot="two")

challenge(
    1,
    "Rewriting a quote in synonyms instead of deducing subtext is called what?",
    "paraphrasing",
    "Surface translation != inference -> paraphrasing",
    "What single analytical word names rewriting a quotation in slightly different words instead of deducing its unstated subtext?",
    "Paraphrasing. Always push past synonyms to uncover unspoken emotion or motive.",
)

# ---------------------------------------------------------------------------
# ACT 2 — Lexical Bullseye, Semantic Fields & Imagery
# ---------------------------------------------------------------------------
L("vani", "Moving up to language analysis! Last mock I copied three whole lines per quote and ran out of time.", mood="worried", shot="two")
L("quill", "Use surgical tweezers! Embed micro-quotations of two to five words, then pull ONE single word into the bullseye.", mood="teach", boardClear=True, diagram=DIAG_BULLSEYE, board="Micro-quote: 2 to 5 words max", shot="wide")
L("teacher", "Try this extract: By noon the salt-flat was an operating theatre of glare, where heat-scalpels peeled our knuckles.", mood="teach", board="Domain: clinical surgery", shot="two")
L("vani", "Operating theatre, scalpels, peeled! That is a semantic field of clinical surgery!", mood="excited", shot="close")
L("quill", "Now pull the single noun scalpels into the centre ring for two connotations.", mood="excited", board="Zoom 1 word -> 2 connotations", shot="two")
L("vani", "Razor-sharp steel slicing skin cleanly, plus sterile, pitiless precision dissecting helpless explorers!", mood="determined", shot="close")
sfx("ding")
L("teacher", "Grade Nine precision! Also separate personification from its weather cousin, pathetic fallacy.", mood="teach", boardClear=True, board="Pathetic fallacy = weather mirrors mood", shot="two")
L("quill", "A parking meter swallowing coins is personification; sullen, weeping rain-clouds mirroring grief is pathetic fallacy!", mood="teach", board="Personification = human agency on objects", shot="two")
L("vani", "And sound effects? Half my class claims sibilance is soothing even during a blizzard!", mood="happy", shot="two")
L("teacher", "Never! Sound follows meaning: in storms, sibilance hisses with menace while plosives burst with impact.", mood="annoyed", board="Sound ALWAYS follows meaning!", shot="close")

challenge(
    2,
    "What two-word term names a cluster of words from one shared domain (e.g. surgery)?",
    "semantic field",
    "Operating theatre + scalpels + veins = semantic field",
    "What two-word literary term names a group of words across an extract drawn from one shared conceptual domain, like surgery or warfare?",
    "A semantic field, also called a lexical field.",
)

# ---------------------------------------------------------------------------
# ACT 3 — Hawker Centre Syntax & Punctuation Hinges
# ---------------------------------------------------------------------------
scene("hawker", [("vani", 260), ("quill", 560), ("mum", 800), ("uncle", 1010)], "Holland Village Hawker Centre · Study break")
L("uncle", "One teh tarik less sweet! Why is a Tudor poet hovering beside my char kway teow?", mood="neutral", prop="plate", shot="wide")
L("quill", "Because Vanishree needs the weapon ninety percent of students forget: syntax and punctuation hinges!", mood="teach", boardClear=True, diagram=DIAG_SYNTAX, board="Periodic = delay main clause (suspense)", shot="wide")
L("mum", "Periodic sentences! Pile up every hazard first and withhold the main clause until the end.", mood="happy", shot="two")
L("vani", "Like: Through sleet and wind and waist-deep drifts, we dragged the sledge... then a minor fragment: Gone!", mood="excited", shot="close")
L("quill", "Repeating the conjunction and is polysyndeton for heavy slog; stripping conjunctions out is asyndeton for speed!", mood="teach", board="Polysyndeton (and..and) vs Asyndeton (a,b,c)", shot="two")
L("uncle", "Like my lunchtime wok rush: chop, fry, plate, serve! Pure asyndeton!", mood="smug", shot="close")
L("vani", "Uncle is a natural! What about colons, semicolons, and dashes?", mood="happy", shot="two")
L("quill", "Colons unveil a stark reveal; semicolons balance parallel clauses; parenthetical dashes insert a candid, ironic aside!", mood="teach", board="Semicolon (;) = poised balance / contrast", shot="two")

challenge(
    3,
    "Omitting conjunctions in a rapid list ('chop, fry, plate, serve') is called what?",
    "asyndeton",
    "Zero 'and' conjunctions -> rapid pace = asyndeton",
    "What single Greek rhetorical term starting with the letter A describes a list that omits conjunctions like and to accelerate pace?",
    "Asyndeton. Stripping out conjunctions makes actions hit in rapid succession.",
)

# ---------------------------------------------------------------------------
# ACT 4 — Structural Shifts, Bathos & Whole-Text Viewpoint
# ---------------------------------------------------------------------------
scene("living", [("vani", 260), ("quill", 580), ("teacher", 900)], "Final whole-text boss fight")
L("teacher", "Now for the high-tariff whole-text evaluation: tracking structure and shifting viewpoint.", mood="teach", boardClear=True, diagram=DIAG_ARC, board="Structure = Why THIS detail HERE?", shot="wide")
L("vani", "How do I keep structure distinct from language analysis?", mood="thinking", shot="two")
L("quill", "Track the camera! Wide panorama in Section One, micro-zoom on a rusted lock in Section Two, flashback analepsis in Section Three!", mood="teach", board="Zoom -> Analepsis -> Cyclical return", shot="two")
L("teacher", "Then Section Four echoes the opening in a transformed cyclical return. And watch for bathos!", mood="teach", board="Tone: sardonic, ambivalent, elegiac, wry", shot="two")
L("vani", "Bathos! Lofty speeches on eternal ice punctured by an exploding camp stove singeing off an eyebrow!", mood="happy", shot="close")
L("quill", "Spot self-deprecating irony and ambivalence, weaving PETAL across opening, pivot, and close!", mood="excited", shot="two")
sfx("ding")

confess("vani", "Study desk")
L("vani", "Goodbye forever, makes the reader want to read on. Hello micro-quotes, semantic fields, periodic syntax, and cyclical arcs!", mood="smug", prop="book", shot="close")

scene("living", [("vani", 300), ("quill", 620), ("dad", 920)])
L("dad", "So if I call my burnt toast a symbol of quiet stoicism...", mood="thinking", prop="plate", shot="two")
L("vani", "I infer explicit kitchen neglect masked by self-deprecating irony, Dad!", mood="happy", shot="two")
L("quill", "Section A conquered! Next up, Paper One Section B before anyone writes five plot twists and wake-up-it-was-all-a-dream!", mood="excited", shot="wide")

end_card()
