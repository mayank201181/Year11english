# Episode 8: Poetry & Unseen — "Sixteen Poems Walk Into An Exam"
# Pearson Edexcel 4ET1 Paper 1 Section A (Part 1 Unseen AO2 + Part 2 Anthology AO2 + AO3)

EP = dict(
    topic="lit-poetry",
    logline="Vanishree tries to memorise poet biographies and write two separate mini-essays for her Anthology mock until Quill reveals the zero-context Hinge Method and the four-pass Unseen Poetry engine.",
)

SVG_HINGE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">BLOCK TRAP vs WOVEN HINGE</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">✘ All Poem A, then all Poem B</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">✔ Poem A → HINGE → Poem B</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#dcfce7">Compare form, imagery &amp; end!</text>'
    '</svg>'
)

SVG_SONNETS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#f472b6" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">TWO SONNET STRUCTURES</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Sonnet 116: 3 quatrains + couplet</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f9a8d4">Remember: octave → L9 volta</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fef08a">Permanence vs tender release</text>'
    '</svg>'
)

SVG_UNSEEN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#a78bfa" stroke-width="3"/>'
    '<text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">4-PASS UNSEEN ENGINE</text>'
    '<text x="300" y="98" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#c7d2fe">1. Title · story · speaker</text>'
    '<text x="300" y="146" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff">2. Shape &amp; volta shift</text>'
    '<text x="300" y="194" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fef08a">3. Imagery &amp; dynamic verbs</text>'
    '<text x="300" y="238" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#6ee7b7">4. Caesura · sound · ending</text>'
    '</svg>'
)

# --- COLD OPEN ---
scene("kitchen", [("vani", 300), ("mum", 680)], "Tanglin Kitchen · Morning Revision")
L("vani", "Quiz me on poet biographies, Mum! Robert Browning lived in Italy and John Keats trained in medicine!", mood="excited", prop="tablet", shot="two")
L("mum", "Impressive memory, sweetheart, though does Edexcel actually award biography marks on Poetry?", mood="thinking", shot="two")
L("vani", "Plus my essay plan is super tidy: half an hour on Poem A, half an hour on Poem B, and enjambment makes them flow!", mood="smug", prop="tablet", shot="close")
sfx("poof")
poof("quill", 960)
L("quill", "Drop that highlighter! Biography waffle, a split block essay, and the word flow in one breath?", mood="shock", shot="wide")
freeze("ZERO BIOGRAPHY MARKS", dur=2.5, s="buzzer", narrator="On Paper One Section A, poet biography scores precisely zero marks.")

title()

# --- SCENE 1: ANTHOLOGY PART 2 — ZERO AO4 & WOVEN HINGE PAIRS ---
scene("classroom", [("vani", 280), ("quill", 640), ("teacher", 960)], "Holo-Library · Anthology Vault")
L("teacher", "Let us clear the fog on Paper One Section A, Vanishree. Part One is Unseen Modern Poetry, testing pure craft.", mood="teach", shot="wide")
L("teacher", "Part Two compares two of your sixteen Anthology poems on craft and comparison — zero context marks!", mood="determined", shot="two")
L("vani", "Zero marks for Browning's Italian holiday? Phew! Wait — why was my Poem A then Poem B plan a trap?", mood="worried", shot="close")
L("quill", "Because while you write twenty minutes on Poem A alone, your comparison score sits frozen at zero!", mood="teach", shot="close", boardClear=True, board="Part II: AO2 Craft + AO3 Comparison", diagram=SVG_HINGE)
L("quill", "Write three woven hinge paragraphs instead: Form and Voice, Imagery and Sound, then Voltas and Endings.", mood="determined", shot="close", board="Both X, yet whereas Poet A..., Poet B...")
L("vani", "Let me test a hinge on parental memory: D.H. Lawrence's Piano versus Alice Walker's Poem at Thirty-Nine!", mood="excited", shot="two")
L("quill", "Go! Contrast their form and attitude side by side!", mood="happy", shot="two", board="Piano (AABB) vs Thirty-Nine (free verse)")
L("vani", "Lawrence's surging rhyming couplets betray his adult poise into childhood tears.", mood="determined", shot="close")
L("vani", "Whereas Walker's relaxed free verse and exclamation-mark turn integrate her father's warmth into independent womanhood!", mood="excited", shot="close")
L("teacher", "Superb! Now try suffering and stanza silhouette: Duffy's War Photographer versus MacNeice's Prayer Before Birth.", mood="teach", shot="two", boardClear=True, board="Duffy: four rigid ABBCDD sestets")
L("vani", "Duffy locks war trauma inside four rigid sestets with shutter-click caesurae — Belfast. Beirut. Phnom Penh.", mood="excited", shot="close", board="MacNeice: cascading steps -> ultimatum")
L("teacher", "And why does her photographer need those neat darkroom rows?", mood="thinking", shot="two")
L("vani", "To hold himself together while comfortable newspaper readers prick with tears between the bath and pre-lunch beers!", mood="determined", shot="close")
L("quill", "Whereas MacNeice's unborn speaker cascades down jagged free-verse steps before snapping shut on Otherwise kill me!", mood="smug", shot="two")

card(
    "EXAMINER GRADE-9 TRAP",
    "Never write 'enjambment makes it flow'! Name the exact psychological effect — like Browning's Duke spilling obsessive ego past his neat rhyming couplets.",
    dur=3.0,
)

challenge(
    1,
    "In My Last Duchess, what form names a single persona speaking to a silent implied listener?",
    "monologue",
    "Browning's Duke speaks to the silent marriage envoy",
    "Quick check! In My Last Duchess, the Duke unwittingly exposes his jealousy to a silent envoy. Is that poetic form a ballad or a monologue?",
    "A dramatic monologue! Browning lets the Duke's own arrogant words convict him.",
)

# --- SCENE 2: ALL FOURTEEN POEMS IN CONSTELLATION ---
scene("park", [("vani", 280), ("dad", 640), ("quill", 960)], "Botanic Gardens · Pairing Walk")
L("dad", "Let us test all sixteen Anthology poems! What if the exam prints Sonnet One Hundred and Sixteen?", mood="happy", prop="book", shot="wide")
L("vani", "I pair Shakespeare's sonnet with Christina Rossetti's Remember! Both test devoted love against mortality.", mood="excited", shot="two")
L("quill", "Show your dad how their two sonnet architectures diverge!", mood="teach", shot="close", boardClear=True, board="Sonnet 116 vs Remember (Rossetti)", diagram=SVG_SONNETS)
L("vani", "Shakespeare builds three quatrains and a wager couplet around an ever-fixed lighthouse mark.", mood="determined", shot="close", board="Petrarchan line-nine turn = VOLTA")
L("vani", "Conversely, Rossetti pivots at her Petrarchan line-nine volta to tell her beloved forget and smile!", mood="happy", shot="close")
L("dad", "Sharp! What about My Last Duchess versus Keats's La Belle Dame sans Merci on destructive power?", mood="thinking", shot="two")
L("vani", "Browning's enjambed couplets indict a jealous Duke whose euphemism — all smiles stopped together — freezes his wife into art.", mood="excited", shot="close", board="Truncated ballad line: And no birds sing")
L("quill", "While Keats truncates every fourth ballad line to starve his palely loitering knight in cyclical thrall!", mood="teach", shot="two")
L("dad", "Now pair childhood time: U.A. Fanthorpe's Half-past Two with Vernon Scannell's Hide and Seek!", mood="happy", shot="two", boardClear=True, board="Half-past Two: eleven airy tercets")
L("vani", "Fanthorpe's eleven tercets and compound words like Gettinguptime free the boy into a clockless land.", mood="determined", shot="close", board="Hide and Seek: single claustrophobic block")
L("vani", "Whereas Scannell's unbroken stanza block traps the hiding child until the darkening garden leaves him abandoned!", mood="excited", shot="close")
L("dad", "Four left! Rudyard Kipling's If, Sujata Bhatt's Search For My Tongue, William Blake's The Tyger, and Imtiaz Dharker's Blessing!", mood="excited", shot="wide")
L("quill", "Pair identity first, then elemental awe!", mood="teach", shot="two", board="Tongue (Gujarati) vs If (conditional)")
L("vani", "Kipling sustains one conditional periodic sentence teaching willpower over Triumph and Disaster.", mood="happy", shot="close")
L("vani", "Whereas Bhatt code-switches into Gujarati script so her mother tongue blossoms out of her mouth!", mood="excited", shot="close")
L("dad", "And our final pair — Blake's The Tyger against Dharker's Blessing?", mood="thinking", shot="two")
L("vani", "Blake's trochaic anvil questions a dread Creator who dared frame terror, whereas Dharker's burst pipe sings like a kindly god!", mood="excited", shot="two", board="Blake: Could -> Dare | Dharker: liquid sun")

challenge(
    2,
    "What five-letter Italian term names the structural turn at line 9 of Rossetti's Remember?",
    "volta",
    "Line 9 pivot: 'Yet if you should forget me'",
    "Pause and check! What five-letter Italian poetic term names the structural turn at line nine of Christina Rossetti's sonnet Remember?",
    "Volta! At Yet if you should forget me, anxious pleading turns into selfless release.",
)

# --- CONFESSIONAL ---
confess("vani", "Vanishree's Exam Diary")
L("vani", "All sixteen Anthology poems locked into woven pairs! Now I need thirty-five calm minutes for the Unseen Modern Poem.", mood="happy", shot="close")

# --- SCENE 3: FOUR-PASS UNSEEN MODERN POETRY ENGINE ---
scene("living", [("vani", 300), ("mum", 640), ("quill", 960)], "Living Room · Unseen Sprint")
L("mum", "Unseen Poetry always worried me at school. What if the poem is just about sorting old coats in a shed?", mood="worried", shot="wide")
L("quill", "Everyday objects are modern poets' favourite launchpads! Never hunt random similes — run four calm passes.", mood="teach", shot="close", boardClear=True, board="Unseen (Part I): pure AO2 craft", diagram=SVG_UNSEEN)
L("vani", "Pass One: read the title, opening, and ending together to grasp the story and pronouns like I versus you!", mood="determined", shot="close", board="Title + Volta + Semantic Fields + Sound")
L("quill", "Pass Two: hold the page back and inspect its visual silhouette! Spot any isolated final line in white space.", mood="teach", shot="two")
L("mum", "And what do Pass Three and Pass Four unlock?", mood="thinking", shot="two")
L("vani", "Pass Three brackets two contrasting semantic fields, and Pass Four checks sound, dash caesurae, and final resonance!", mood="excited", shot="close", board="Caesura = internal cut | Enjamb = spill")
L("quill", "Watch the clock too: thirty-five minutes on Unseen, leaving forty-five to fifty minutes for Anthology Comparison.", mood="determined", shot="two")

challenge(
    3,
    "What seven-letter term names a punctuation pause inside a verse line (like 'Belfast. Beirut.')?",
    "caesura",
    "Internal mid-line pause vs enjambment across line-ends",
    "Final challenge! What seven-letter poetic term names a deliberate punctuation pause inside a line of verse?",
    "Caesura! Mid-line pauses arrest rhythm to enact shock, hesitation, or solemn memorial.",
)

# --- CODA ---
scene("living", [("vani", 320), ("mum", 660), ("quill", 960)], "Living Room · Season Wrap")
L("mum", "Let us check your toolkit: zero poet biographies, sixteen Anthology poems paired by tension, and four Unseen passes.", mood="happy", shot="two")
L("vani", "Every body paragraph weaves both poets across form, imagery, and endings!", mood="excited", prop="tablet", shot="close")
L("mum", "No more splitting essays down the middle.", mood="happy", shot="two")
L("quill", "From non-fiction rhetoric to Macbeth's brief candle and sixteen Anthology gems — go claim that Grade Nine, Vanishree!", mood="happy", shot="wide")
sfx("ding")

end_card()
