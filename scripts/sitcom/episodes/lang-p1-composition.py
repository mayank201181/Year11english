# Episode 2 — Paper 1B Descriptive, Narrative & Discursive Craft: "Five Twists And Zero Marks"
EP = dict(
    topic="lang-p1-composition",
    logline="Vanishree plans a chaotic five-plot-twist helicopter heist for Paper 1B until Quill and Ms Lim replace melodrama with 5-lens camera zooms, cyclical motifs, semicolons, and discursive steelmanning.",
)

DIAG_ZOOM5 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#60a5fa" stroke-width="3"/>
  <text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde68a">ZOOM-5 CAMERA PLAN</text>
  <text x="300" y="98" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#bfdbfe">1. Sky → 2. Mid metaphor</text>
  <text x="300" y="146" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">3. Macro flaw → 4. Senses</text>
  <text x="300" y="194" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#6ee7b7">5. Altered sky cyclical echo</text>
  <text x="300" y="236" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Zero car chases — pure craft!</text>
</svg>"""

DIAG_CYCLE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#2e1065" stroke="#c084fc" stroke-width="3"/>
  <text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde68a">15-MINUTE REAL-TIME ARC</text>
  <text x="300" y="98" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f5d0fe">1. In medias res + motif</text>
  <text x="300" y="146" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff">2. Brief past-perfect flash</text>
  <text x="300" y="194" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">3. Quiet 1-line fulcrum choice</text>
  <text x="300" y="238" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#6ee7b7">4. Altered cyclical close</text>
</svg>"""

DIAG_SPLICE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#1c1917" stroke="#34d399" stroke-width="3"/>
  <text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fca5a5">KILL THE COMMA SPLICE</text>
  <text x="300" y="102" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#a7f3d0">Semicolon (;) → poised balance</text>
  <text x="300" y="156" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">Colon (:) → dramatic reveal</text>
  <text x="300" y="210" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Dashes (—) → sensory aside</text>
</svg>"""

DIAG_STEELMAN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">
  <rect x="8" y="8" width="584" height="244" rx="16" fill="#042f2e" stroke="#2dd4bf" stroke-width="3"/>
  <text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fef08a">STEELMAN REBUTTAL</text>
  <text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ccfbf1">1. Concede strongest rival case</text>
  <text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#99f6e4">"Admittedly, critics note..."</text>
  <text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">2. Pivot: "; nevertheless..."</text>
</svg>"""

# ---------------------------------------------------------------------------
# COLD OPEN — Kitchen table blockbuster disaster
# ---------------------------------------------------------------------------
scene("kitchen", [("vani", 290), ("dad", 620), ("mum", 930)], "Tuesday night · Paper 1B composition planning")
L("vani", "Listen to my forty-five-minute story plan for Section B! Chapter One: a diamond heist in Monaco.", mood="excited", prop="book", shot="two")
L("dad", "Stylish! Fast cars?", mood="happy", shot="two")
L("vani", "Better! Chapter Two: our helicopter crashes into an active volcano while my evil twin steals the last parachute!", mood="excited", shot="close")
L("mum", "In forty-five minutes? How on earth do you resolve that?", mood="eyeroll", shot="two")
L("vani", "Genius twist: my alarm clock rings and I wake up realising it was all a dream!", mood="smug", shot="close")
sfx("trombone")
poof("quill", 460)
scene("kitchen", [("vani", 230), ("quill", 480), ("dad", 740), ("mum", 990)])
L("quill", "Stop the volcano! Drop the evil twin! If an examiner reads it was all a dream one more time, your mark parachutes straight into Band Two!", mood="shock", shot="close")
freeze("FIVE TWISTS = DOOM", dur=2.5, s="scratch", narrator="Plot bloat kills literary craft in forty-five minutes.")
L("mum", "Told you, Vanishree. Five plot twists in five hundred words reads like a breathless summary.", mood="deadpan", shot="two")
L("vani", "Wait, so examiners hate action-movie plots in Paper One Section B?", mood="worried", shot="two")
L("quill", "Examiners reward forty marks of deliberate prose artistry, sensory immersion, and spotless punctuation!", mood="teach", shot="close")

title()

# ---------------------------------------------------------------------------
# ACT 1 — ZOOM-5 Descriptive Camera Craft & Show-Don't-Tell
# ---------------------------------------------------------------------------
card("EXAMINER GRADE-9 TRAP", "Ban 5-twist plots, 'it was all a dream', fake stats & thesaurus purple prose!", dur=3.2)

scene("classroom", [("vani", 280), ("quill", 600), ("teacher", 920)], "Tanglin Writing Studio · Camera & Motif Lab")
L("teacher", "Let us start with descriptive prompts, Vanishree. In pure Grade Nine description, almost nothing needs to happen in the plot.", mood="teach", prop="tablet", shot="wide")
L("vani", "Zero bank robbers? How do I fill five whole paragraphs without a chase?", mood="thinking", shot="two")
L("quill", "Become a slow cinema camera! Box One: Wide Sky with pathetic fallacy. Box Two: Mid-Ground with one extended metaphor.", mood="teach", boardClear=True, diagram=DIAG_ZOOM5, board="Show, don't tell: ban 'scary' & 'cold'", shot="wide")
L("teacher", "Never tell us a midnight station is cold, empty, and scary. Show chained luggage trolleys as the sole audience to a clicking board!", mood="teach", board="Olfactory = smell | Tactile = touch", shot="two")
L("vani", "Ooh! Then in Box Three I zoom macro-close onto one sodden ticket bleeding purple ink beside a bench leg!", mood="excited", shot="close")
L("quill", "Sublime! What happens when you close your eyes in Box Four?", mood="excited", shot="two")
L("vani", "Non-visual senses! Olfactory diesel and scorched coffee, auditory hum, and tactile frost!", mood="happy", shot="close")
L("teacher", "And when warm rain hits dry tarmac in Box Five, drop the precision noun petrichor as the sky transforms!", mood="happy", board="Petrichor = rain scent on dry earth", shot="two")
sfx("ding")

challenge(
    1,
    "Which nine-letter adjective starting with O means imagery of SMELL?",
    "olfactory",
    "Smell sense (ozone, spices, coffee) = olfactory",
    "Which nine-letter sensory adjective starting with the letter O refers specifically to the sense of smell?",
    "Olfactory. Olfactory detail wires straight into memory and atmosphere.",
)

# ---------------------------------------------------------------------------
# ACT 2 — Tight Cyclical Narratives & Motifs
# ---------------------------------------------------------------------------
L("vani", "What if I pick the narrative prompt instead of pure description?", mood="thinking", shot="two")
L("teacher", "Obey the Rule of One: one protagonist, one central tension, and at most fifteen minutes of real-time action.", mood="teach", boardClear=True, diagram=DIAG_CYCLE, board="Rule of One: 15 mins real time max", shot="wide")
L("quill", "Plunge in medias res right at the doorway and plant one concrete motif object, like a cracked porcelain watch.", mood="teach", board="Flashback entry = Past Perfect ('had')", shot="two")
L("vani", "Then Paragraph Two steps into brief analepsis using past perfect tense: Three winters earlier, she had slammed the lid!", mood="excited", shot="close")
L("teacher", "Keep dialogue brief and oblique, isolate one single-sentence fulcrum paragraph, then revisit that watch at the close!", mood="teach", board="Cyclical close: motif meaning shifts", shot="two")
L("vani", "The glass stays cracked, yet winding it up proves frozen grief can move forward again!", mood="determined", shot="close")
L("quill", "Now compare wooden dialogue against literary subtext!", mood="teach", shot="two")
L("teacher", "Instead of shouting I feel guilty about your birthday, let a character set petrol-station flowers beside cold pasta and stare at the kettle.", mood="teach", shot="two")
L("vani", "Unspoken guilt! Every prop carries emotional weight without soap-opera speeches!", mood="excited", shot="close")
sfx("ding")

confess("dad", "Kitchen doorway")
L("dad", "So my draft novel about seven ninja cousins fighting dinosaurs on a submarine needs... slight trimming?", mood="worried", prop="book", shot="close")

# ---------------------------------------------------------------------------
# ACT 3 — Comma Splices, Punctuation Quartet & Purple Prose
# ---------------------------------------------------------------------------
scene("park", [("vani", 280), ("quill", 600), ("mum", 920)], "Botanic Gardens bench · Syntax & SPaG Clinic")
L("mum", "Now meet the silent assassin of Year Eleven technical marks: the comma splice.", mood="determined", shot="wide")
L("vani", "Test me! The ferry horn echoed across the harbour, gulls rose from the pier.", mood="thinking", shot="two")
L("mum", "Two complete independent clauses glued together by a helpless comma! Instant technical penalty.", mood="annoyed", shot="two")
L("quill", "Cure it with our punctuation quartet: a semicolon for poised balance, a colon after a complete clause for a reveal, or paired dashes!", mood="teach", boardClear=True, diagram=DIAG_SPLICE, board="Vary speed: Long wave -> Short drop!", shot="wide")
L("vani", "And vary sentence rhythm: front a participial opener, build a thirty-word wave, then land a two-word minor drop!", mood="excited", shot="close")
L("mum", "Just watch dangling modifiers! Never write Dripping rainwater onto the rug, the grandfather clock chimed!", mood="happy", board="Exact verbs beat bloated adjectives!", shot="two")
L("vani", "Ha! Walking clocks! What about cramming giant thesaurus adjectives onto every noun?", mood="happy", shot="two")
L("quill", "Ban purple prose and malapropisms! One exact verb like trudged or guttered beats four random adjectives every day.", mood="teach", board="Check: its (possessive) vs it's (it is)", shot="close")
sfx("ding")

challenge(
    2,
    "Joining two complete clauses with only a comma is called a comma ___?",
    "comma splice",
    "Clause A , Clause B = illegal comma splice",
    "What two-word grammatical error occurs when you join two complete independent clauses using only a bare comma?",
    "A comma splice. Fix it with a semicolon, colon, full stop, or conjunction.",
)

# ---------------------------------------------------------------------------
# ACT 4 — Discursive Steelmanning & The 5-Minute PACE Audit
# ---------------------------------------------------------------------------
scene("classroom", [("vani", 280), ("quill", 600), ("teacher", 920)], "Final Round · Discursive Rhetoric & PACE Audit")
L("teacher", "Finally, never overlook the discursive option! When asked to Discuss, avoid angry rants and fake survey numbers.", mood="teach", boardClear=True, diagram=DIAG_STEELMAN, board="Never invent fake '99% of doctors' stats!", shot="wide")
L("vani", "Right, ninety-nine point four percent of professors at Oxford yesterday convinces zero examiners!", mood="deadpan", shot="two")
L("quill", "Never strawman opponents as fools. Steelman their strongest case first with Admittedly, then pivot across a semicolon with nevertheless!", mood="teach", board="Hypophora = ask ? + answer immediately", shot="two")
L("teacher", "Pair hypophora with balanced antithesis and modal qualifiers like risks or seldom for true broadsheet poise.", mood="happy", board="Final 5 mins = P · A · C · E Audit!", shot="two")
L("vani", "And five minutes before pens down, I stop drafting and run my PACE audit!", mood="determined", shot="close")
L("quill", "Recite all four letters for the gallery, Vanishree!", mood="excited", shot="two")
L("vani", "Punctuation and comma splices, Agreement and tense drift, Confusable spellings like definitely and separate, and cutting word Echoes!", mood="excited", shot="close")

challenge(
    3,
    "Presenting the strongest fair version of an opposing view is called what?",
    "steelmanning",
    "Opposite of strawmanning -> steelmanning",
    "What twelve-letter rhetorical term, the opposite of strawmanning, means presenting the strongest, fairest version of the opposing argument before refuting it?",
    "Steelmanning. Honouring the best counter-argument makes your rebuttal unshakeable.",
)

confess("vani", "Exam hall corridor")
L("vani", "Five minutes five-box plan, thirty-five minutes crafting five hundred and fifty words, five minutes PACE audit. Evil volcano twins retired!", mood="smug", prop="tablet", shot="close")

scene("living", [("vani", 260), ("quill", 510), ("dad", 760), ("mum", 1020)])
L("dad", "Fine, I rewrote my submarine dinosaur novel into a twelve-minute scene about a man polishing a chipped teacup.", mood="deadpan", prop="book", shot="two")
L("mum", "Did the teacup wake up realising it was a dream?", mood="smug", shot="two")
L("dad", "No! It ended with a semicolon and deep emotional subtext!", mood="excited", shot="close")
L("vani", "Welcome to Grade Nine, Dad!", mood="happy", shot="two")
L("quill", "Paper One conquered! Next episode, six stimulus texts collide in one group chat for Paper Two Section A!", mood="excited", shot="wide")

end_card()
