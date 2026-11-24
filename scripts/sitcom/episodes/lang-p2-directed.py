# Episode 4 — lang-p2-directed ("Paper 2B Rhetoric" — "Yours Faithfully, Outraged")
EP = dict(
    topic="lang-p2-directed",
    logline="Vanishree tries to save the neighbourhood Saturday library by writing a furious all-caps petition lifting chunks from a council report, until Quill arrives to forge Paper Two Section B genre poise, Aristotelian rhetoric, steelman rebuttals, and comma-splice-free polish.",
)

DIAG_GENRE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#facc15">LETTER SIGN-OFF LOCK</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Dear Sir/Madam → faithfully</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f9a8d4">Dear Cllr Tan → sincerely</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80">Rule: NEVER two S letters!</text>'
    '</svg>'
)

DIAG_TRIAD = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#a78bfa" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#facc15">RHETORICAL TRIAD</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">ETHOS: Calm fair authority</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80">LOGOS: Re-forged evidence</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f472b6">PATHOS: Human stakes</text>'
    '</svg>'
)

DIAG_ARC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#34d399" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#facc15">STEELMAN + FULCRUM</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">Concede: "Budgets strain;"</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">Rebut: "yet cuts cost more."</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#cbd5e1">(:) Reveal · (;) Antithesis</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("vani", 320), ("dad", 780)], "Saturday Morning · Vanishree's Living Room")
L("vani", "Dad, the council wants to padlock our branch library every Saturday, so I am drafting an emergency letter right now!", mood="determined", shot="two", prop="tablet")
L("dad", "Noble cause! Let me hear your opening line before you hit send.", mood="happy", shot="two", prop="book")
L("vani", "Dear Sir or Madam, listen up! As Source B on page four clearly states, closing libraries is atrocious, terrible, and awful, Yours sincerely, Vanishree!", mood="excited", shot="close", prop="tablet")
sfx("scratch")
freeze("FOUR FELONIES IN ONE!", dur=2.5)
poof("quill", 550)
L("quill", "Put that tablet down immediately! My fountain pen nearly fainted.", mood="shock", shot="wide")
L("vani", "Quill! You teleported right onto our coffee table rug! Was my letter not passionate enough?", mood="annoyed", shot="two")
L("quill", "Passionate? You paired Dear Sir with Yours sincerely, cited an exam insert, stuffed twin adjectives, and spliced a comma!", mood="teach", shot="close")

title()

# ---------------- ACT 1: GENRE & NO LIFTING ----------------
scene("living", [("vani", 260), ("quill", 620), ("mum", 960)], "Act One · Form, Audience & Zero Lifting")
L("mum", "Morning both. Vanishree, Ms Lim emailed to say Oxford A Q A Paper Two Section B is worth forty marks.", mood="neutral", shot="wide", prop="phone")
L("quill", "Half the Paper Two grade! You pick one of two directed tasks linked to the Section A reading pack.", mood="teach", shot="two", boardClear=True, board="Paper 2B: 40 Marks (Choice of 2)")
L("vani", "Wait, if Section B links to Section A, why scold me for quoting Source B?", mood="thinking", shot="close")
L("quill", "Because a real councillor opening their post has no exam booklet! Citing Source B shatters the genre illusion.", mood="teach", shot="close", board="Never write: In Source B...")
L("mum", "Plus, copying phrases word for word is called verbatim lifting, which earns zero original style credit.", mood="deadpan", shot="two")
L("quill", "Harvest the fact, distil the ratio, and re-forge it in your voice! Say audits show Saturday student visits up nearly a third.", mood="excited", shot="close", board="Harvest -> Distil -> Re-Forge")
L("vani", "Aha! Same factual ammunition, zero copied phrasing. Now what went wrong with my letter sign-off?", mood="happy", shot="two")
L("quill", "Behold the golden correspondence law: never put two S words together!", mood="teach", shot="wide", boardClear=True, board="Rule: NEVER Two S Words!", diagram=DIAG_GENRE)
L("quill", "Dear Sir or Madam starts with S, so close with Yours faithfully. Named Dear Councillor Tan takes Yours sincerely.", mood="teach", shot="close", board="Unnamed -> Yours faithfully")
L("vani", "And what if the prompt asks for a broadsheet article or a school speech instead?", mood="thinking", shot="two")
L("quill", "An article wears a crisp headline and a one-sentence strapline. Never waste time drawing newspaper columns!", mood="smug", shot="close", board="Article: Headline + Strapline")
L("mum", "And in a speech, address the room directly, skip bracketed stage cues, and ban Thank you for listening!", mood="happy", shot="two")

confess("vani", "Confessional · Vanishree")
L("vani", "I genuinely used to draw boxes labelled Picture of Sad Teenager in articles. Examiners mark prose craft, not ruler skills.", mood="eyeroll", shot="close")

scene("living", [("vani", 280), ("quill", 680)])
L("quill", "Time to test your Genre Lock reflex on the holo-board!", mood="excited", shot="two")
L("vani", "Bring it on, fountain-pen boy. My correspondence etiquette is locked in!", mood="determined", shot="close")

challenge(
    1,
    "Dear Sir or Madam -> 'Yours ___'?",
    "faithfully",
    "Unnamed Sir/Madam -> never two S's -> Yours faithfully",
    "Challenge One! Your formal Paper Two B letter opens with Dear Sir or Madam. Complete the sign-off: Yours what?",
    "Faithfully! Yours faithfully! Because Sir starts with S, never pair two S words together.",
)

# ---------------- ACT 2: ETHOS, LOGOS, PATHOS & RHETORIC ----------------
scene("classroom", [("vani", 260), ("quill", 620), ("teacher", 980)], "Act Two · Ms Lim's Rhetoric Lab")
L("teacher", "Welcome to lunchtime clinic, Vanishree. Let us upgrade your noisy checklist tricks into Grade Nine Aristotelian balance.", mood="happy", shot="wide", prop="book")
L("vani", "Ms Lim! In my draft I wrote: ninety-nine point nine percent of Oxford brain surgeons agree library cuts are atrocious, horrific, and devastating!", mood="worried", shot="two")
L("teacher", "Inventing comical statistics destroys Ethos, your credibility, in a single breath.", mood="teach", shot="close", boardClear=True, diagram=DIAG_TRIAD, board="Ethos + Logos + Pathos")
L("quill", "Aristotle balanced three pillars: Ethos earns trust through fair authority, Logos proves cause and effect, and Pathos shows dignified human stakes.", mood="teach", shot="two", board="Zero fake stats, zero melodrama")
L("vani", "Okay, how do I upgrade a nagging rhetorical question like Do you not agree libraries matter?", mood="thinking", shot="close")
L("quill", "Deploy hypophora! Pose a sharp question and immediately answer it yourself so the audience cannot wriggle away.", mood="excited", shot="close", board="Hypophora: Ask + Answer")
L("teacher", "Try this: What does padlocking Saturday desks actually save? Barely pennies on the ledger, at the price of student ambition.", mood="teach", shot="two")
L("vani", "Ooh, that snaps shut! What about my atrocious, horrific, and devastating rule of three?", mood="excited", shot="close")
L("teacher", "Replace twin adjectives with an escalating tricolon that widens the lens: it narrows a pupil's curiosity, weakens our schools, and rations opportunity.", mood="happy", shot="close", boardClear=True, board="Escalating Tricolon: Zoom Out")
L("quill", "Pair that with antithesis across balanced clauses: libraries are not a nostalgic luxury for the few, rather they are a study lifeline for the many!", mood="smug", shot="two", board="Antithesis: Not X, but Y")
L("vani", "And if I want cool broadsheet wit instead of shouting?", mood="thinking", shot="two")
L("quill", "Use litotes, ironic understatement that negates the opposite: bolting thirty students out in the rain is scarcely a triumph of civic planning!", mood="teach", shot="close", board="Litotes: Scarcely a triumph")
L("teacher", "Or mirror-flip your words in chiasmus: budgets exist to serve communities, never communities to serve budgets.", mood="excited", shot="two", board="Chiasmus: A-B flips to B-A")

challenge(
    2,
    "Device where a speaker asks a question and immediately answers it?",
    "hypophora",
    "Question posed + immediate self-answer = hypophora",
    "Challenge Two! What single classical rhetorical term names posing a pointed question and immediately answering it yourself?",
    "Hypophora! Asking the question and delivering your own immediate verdict steers the reader cleanly past doubt.",
)

# ---------------- EXAMINER TRAP CARD ----------------
card(
    "EXAMINER GRADE-9 TRAP",
    "Never copy 4+ word runs from Section A, never write 'Firstly / Secondly', and never join two full clauses with a lonely comma!",
    dur=3.2,
)

# ---------------- ACT 3: REBUTTAL & SPAG POLISH ----------------
scene("hawker", [("vani", 280), ("quill", 620), ("uncle", 1000)], "Act Three · Uncle's Hawker Counter")
L("uncle", "Two Kopi teas coming up! Vanishree, why are you muttering Firstly, Secondly, Thirdly into your notebook?", mood="happy", shot="wide", prop="plate")
L("vani", "Uncle, I am trying to link five paragraphs together without sounding like a flat-pack furniture manual!", mood="annoyed", shot="two")
L("quill", "Banish Firstly and Secondly! Stitch paragraphs with echo transitions, picking up the last idea of one paragraph to open the next.", mood="teach", shot="close", boardClear=True, board="Echo Transition > Firstly/Secondly")
L("uncle", "Smart! And to convince a tough treasurer, never pretend budgets are infinite. Respect their headache first!", mood="determined", shot="two")
L("quill", "That is the Paragraph Four steelman rebuttal! Grant their strongest point with Admittedly, then overturn it with Yet.", mood="excited", shot="wide", diagram=DIAG_ARC, board="Steelman: Admittedly... Yet...")
L("vani", "Let me try: Admittedly, councils face fierce fiscal pressure; yet cutting preventative study space costs double tomorrow!", mood="determined", shot="close")
sfx("ding")
L("quill", "Hear that semicolon balancing the clauses? You cured your comma splice and built real poise!", mood="happy", shot="two", board="Zero Comma Splices!")
L("vani", "Remind me of the colon rule versus the semicolon rule for my four-minute proofread!", mood="thinking", shot="close")
L("quill", "A colon follows a full main clause to spotlight a verdict. A semicolon balances two independent clauses as equals.", mood="teach", shot="close", boardClear=True, board="Colon = Reveal | Semicolon = Twin")
L("uncle", "And save four calm minutes to check possessive its without an apostrophe, plural apostrophes, and your cyclical close!", mood="happy", shot="two")

confess("quill", "Confessional · Quill")
L("quill", "When a script echoes its opening image in the final line and lands a clean colon with zero comma splices, examiners weep with joy.", mood="smug", shot="close")

scene("hawker", [("vani", 280), ("quill", 620), ("uncle", 1000)])
L("uncle", "Before you test her, Quill, remember our golden rule at the stall: speak to a teenager like an ally, and to a governor like a statesman!", mood="happy", shot="two")
L("vani", "Got it! Warm shared examples for peers, diplomatic subjunctive steel for boards, and Standard English for both!", mood="determined", shot="close")
L("quill", "Now one final test before we mail Councillor Tan a masterpiece!", mood="excited", shot="wide")

challenge(
    3,
    "Two-word error: 'Fares rose again, commuters protested.'?",
    "comma splice",
    "Two independent clauses + bare comma = comma splice",
    "Final Challenge! Fares rose again, comma, commuters protested. What exact two-word grammatical error joins two complete clauses with only a comma?",
    "A comma splice! Promote that lonely comma to a semicolon, a colon, or a full stop during your final check.",
)

L("vani", "Listen to my rewritten close: Dear Councillor Tan, padlocking Saturday desks saves pennies while rationing ambition; keep those lamps lit. Yours sincerely!", mood="happy", shot="two", prop="tablet")
L("uncle", "Even I want to vote for that, and I only came over with the tea tray!", mood="excited", shot="two", prop="plate")
L("quill", "Named recipient, Yours sincerely, re-forged proof, sharp antithesis, zero comma splices! That is forty-mark Grade Nine rhetoric.", mood="excited", shot="wide")
L("vani", "Watch out, Paper Two Section B. My fountain pen is officially sharper than Quill's!", mood="smug", shot="close")
sfx("ding")

end_card()
