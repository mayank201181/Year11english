# Episode 7: Macbeth — "Out, Damned Waffle"
# Pearson Edexcel 4ET1 Paper 2 Section B (AO1 + AO2 + AO4)

EP = dict(
    topic="lit-macbeth",
    logline="Vanishree's Macbeth practice essay turns into a pure plot summary until Quill crashes the living room to put regicide, trochaic equivocation and Lady Macbeth's chiasmic breakdown on trial.",
)

SVG_CHAIN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">GREAT CHAIN OF BEING</text>'
    '<text x="300" y="100" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">1. God &amp; Heavenly Angels</text>'
    '<text x="300" y="152" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f87171">2. Anointed King (RUPTURED!)</text>'
    '<text x="300" y="206" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fef08a">3. Chaos: owl kills falcon</text>'
    '</svg>'
)

SVG_CHIASMUS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#c084fc" stroke-width="3"/>'
    '<text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fef08a">CHIASMIC CROSSOVER</text>'
    '<text x="300" y="104" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff">Lady M: "Unsex me" → prose</text>'
    '<text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fecaca">Macbeth: doubt → tyrant</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#facc15">Pivot: Act 3 Banquet</text>'
    '</svg>'
)

SVG_MOTIFS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#f87171" stroke-width="3"/>'
    '<text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">WHOLE-PLAY MOTIFS</text>'
    '<text x="300" y="98" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">Blood: valour → "damned spot"</text>'
    '<text x="300" y="146" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#c7d2fe">Sleep: murdered → nightwalk</text>'
    '<text x="300" y="194" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fef08a">Light: fires → "brief candle"</text>'
    '<text x="300" y="238" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff">Robes: borrowed → giant robe</text>'
    '</svg>'
)

# --- COLD OPEN ---
scene("living", [("vani", 320), ("dad", 680)], "Tanglin Living Room · Late Evening")
L("vani", "Listen to my Macbeth draft, Dad. First Macbeth meets three witches, then his wife scolds him, so he kills King Duncan.", mood="happy", prop="book", shot="two")
L("dad", "Hold on, Vanishree. That reads like a movie blurb, not an Edexcel Literature essay.", mood="thinking", shot="two")
L("vani", "Wait, I added history at the bottom! King James the First hated witches and survived the Gunpowder Plot.", mood="smug", prop="book", shot="close")
sfx("poof")
poof("quill", 960)
L("quill", "Out, damned waffle! Did someone just staple a history footnote onto a plot retelling?", mood="shock", shot="wide")
freeze("PLOT SUMMARY ALERT", dur=2.4, s="scratch", narrator="Every time a student retells the plot of Macbeth, a royal falcon falls out of the sky.")

title()

# --- SCENE 1: AO4 JACOBEAN CONTEXT & PROSODY ---
scene("classroom", [("vani", 280), ("quill", 640), ("teacher", 960)], "Holo-Stage · Inverness Courtyard")
L("teacher", "Welcome to Paper Two Section B, Vanishree. Macbeth tests critical argument, Shakespearean craft, and Jacobean context together.", mood="teach", shot="wide")
L("vani", "Ms Lim, I know Divine Right of Kings, Great Chain of Being, and Daemonologie. Where do they go?", mood="worried", shot="two")
L("quill", "Never park context in a separate paragraph! Fuse it directly into Shakespeare's metaphors and metre.", mood="determined", shot="close", boardClear=True, board="AO1 Thesis + AO2 Craft + AO4 Context", diagram=SVG_CHAIN)
L("quill", "In Act Two Scene Three, Macduff cries that sacrilegious murder broke open the Lord's anointed temple.", mood="teach", shot="close", board="Duncan = The Lord's anointed temple")
L("vani", "Ooh! Calling Duncan's body an anointed temple makes regicide blasphemy against God under Divine Right!", mood="excited", shot="close")
L("teacher", "Exactly. Next scene, a lowly mousing owl kills a royal falcon — nature's Great Chain snapping in two.", mood="happy", shot="two", board="Equivocation: truths that betray")
L("quill", "Now tap Act One's metre. Noble thanes speak rising iambic pentameter, five steady heartbeats per line.", mood="teach", shot="two", boardClear=True, board="Nobles: da-DUM x five (iambic)")
L("quill", "Yet the Witches chant Fair is foul, and foul is fair in falling trochaic tetrameter!", mood="smug", shot="close", board="Witches: DUM-da x four (trochaic)")
L("vani", "And Macbeth's first line echoes foul and fair before he even sees them! So they awaken his own flaw.", mood="excited", shot="two", board="Banquo = moral foil for James I")
L("teacher", "Which Banquo proves by warning that instruments of darkness tell small truths to betray us — classic post-Gunpowder Plot deceit.", mood="teach", shot="wide")

challenge(
    1,
    "What term names speaking literal half-truths to deceive — practised by the Witches and mocked by the Porter?",
    "equivocation",
    "Witches' half-truths + 1606 Father Garnet trial",
    "Quick check! What term names telling ambiguous half-truths to mislead — used by the Witches and mocked by the Porter?",
    "Equivocation! They keep the word of promise to Macbeth's ear, and break it to his hope.",
)

# --- CONFESSIONAL ---
confess("vani", "Vanishree's Exam Diary")
L("vani", "Key upgrade: the Witches never command murder. Banquo hears the same prophecies without stabbing anyone, honouring King James's ancestor while keeping Macbeth guilty.", mood="determined", shot="close")

# --- SCENE 2: HAMARTIA & THE CHIASMIC MARRIAGE ---
scene("living", [("vani", 280), ("mum", 640), ("quill", 960)], "Living Room · Act Three Crossover")
L("mum", "If Macbeth slaughters Duncan, Banquo, and Macduff's children, why do we still feel tragic terror instead of boredom?", mood="thinking", prop="cushion", shot="wide")
L("quill", "Because seven major soliloquies lock us inside his agonised conscience!", mood="teach", shot="two", boardClear=True, board="Hamartia: Vaulting ambition (Act I.vii)")
L("vani", "In Act One Scene Seven, he repeats the euphemism it because he shrinks from naming regicide aloud.", mood="excited", shot="close", board="Equestrian fall -> self-aware ruin")
L("quill", "And he names his Aristotelian hamartia — vaulting ambition, an over-eager rider crashing over his horse.", mood="determined", shot="close")
L("mum", "Whereas Lady Macbeth starts far tougher, begging spirits to unsex me here and turn milk to gall.", mood="neutral", shot="two")
L("quill", "Wait — why beg spirits to strip away compassion unless compassion lived inside her first?", mood="smug", shot="close", boardClear=True, board="Chiasmus: X-shaped marital arc", diagram=SVG_CHIASMUS)
L("vani", "Right! In Act Two she admits she could not stab Duncan because he resembled her sleeping father!", mood="shock", shot="close")
L("quill", "Their marriage forms a giant chiasmus. In Act Three Scene Two, Macbeth mutters his mind is full of scorpions and shuts out his dearest chuck.", mood="teach", shot="two", board="Act V.i: Blank verse -> broken PROSE")
L("mum", "So while Macbeth hardens into public tyranny, her repressed guilt implodes into sleepwalking.", mood="thinking", shot="two")
L("vani", "And look at form! In Act One she commanded thick night in blank verse; in Act Five she clutches a candle muttering Out, damned spot in broken prose!", mood="happy", shot="wide", board="Little water -> Perfumes of Arabia")

card(
    "EXAMINER GRADE-9 TRAP",
    "Never treat Act 5 Scene 1 as just plot! Dropping from iambic blank verse into fragmented prose signals noble madness on Shakespeare's stage.",
    dur=3.0,
)

challenge(
    2,
    "Does sleepwalking Lady Macbeth speak in blank verse or prose in Act 5 Scene 1?",
    "prose",
    "Noble verse collapses into disjointed prose in madness",
    "Pause and check! When Lady Macbeth sleepwalks in Act Five Scene One, does Shakespeare write her speech in blank verse or in prose?",
    "Prose! Losing iambic pentameter exposes the collapse of her conscious rational control.",
)

# --- SCENE 3: MOTIFS, METATHEATRE & CYCLICAL SYMMETRY ---
scene("hawker", [("vani", 260), ("dad", 600), ("quill", 820), ("uncle", 1020)], "Newton Hawker Centre · Motif Supper")
L("uncle", "One char kway teow, extra chilli! Why is a hologram gentleman waving daggers over my wok?", mood="annoyed", prop="plate", shot="wide")
L("dad", "Sorry Uncle, Vanishree is threading four Macbeth motifs before mock exams.", mood="happy", shot="two")
L("quill", "Pick blood, sleep, light, or robes and track how its meaning mutates across five acts!", mood="excited", shot="close", boardClear=True, board="Four Motifs: Blood, Sleep, Light, Robes", diagram=SVG_MOTIFS)
L("vani", "Clothing! Act One has borrowed robes; by Act Five Angus mocks Macbeth's title hanging loose like a giant's robe upon a dwarfish thief!", mood="determined", shot="close", board="Borrowed robes -> Giant's robe on thief")
L("quill", "Bravo! Stolen majesty shrinks the usurper. Now contrast blood in Act Two versus Act Three!", mood="happy", shot="two")
L("vani", "In Act Two Macbeth fears staining all Neptune's ocean red. After Banquo's Ghost takes his chair in Act Three, wading in blood feels merely tedious!", mood="excited", shot="close", board="Neptune's ocean -> tedious river")
L("dad", "That single word tedious proves moral horror has hardened into numb habit.", mood="thinking", shot="two")
L("uncle", "And when his queen dies in Act Five? Tomorrow, and tomorrow, and tomorrow!", mood="happy", shot="wide")
L("quill", "Polysyndeton drags time to a crawl! Then he cries Out, out, brief candle and calls life a poor player strutting onstage.", mood="teach", shot="close", boardClear=True, board="Tomorrow: polysyndeton + metatheatre")
L("vani", "Metatheatre! Onstage himself, Macbeth feels like a miscast actor whose stolen crown signifies nothing.", mood="excited", shot="two", board="Cyclical: Macdonwald head -> Macbeth head")
L("quill", "Then Birnam Wood marches and Caesarean-born Macduff avenges Fife!", mood="determined", shot="two", board="Macduff: feel it as a man (Act IV.iii)")
L("vani", "Wait — Act One opened with rebel Macdonwald's severed head, and Act Five closes with usurper Macbeth's severed head!", mood="shock", shot="close")
L("dad", "Full cyclical symmetry! The national hero became the exact traitor he once unseamed.", mood="happy", shot="two")

challenge(
    3,
    "Which loyal Thane slays Macbeth in Act 5 Scene 8 because he was 'untimely ripp'd' from his mother's womb?",
    "Macduff",
    "Thane of Fife -> Caesarean birth exposes equivocation",
    "Final challenge! Name the loyal Thane who redefines compassionate manhood in Act Four and slays Macbeth in Act Five.",
    "Macduff! He feels grief as a man, exposes the Witches' equivocation, and restores order.",
)

# --- CODA ---
scene("living", [("vani", 340), ("dad", 680), ("quill", 960)], "Living Room · Essay Upgraded")
L("dad", "All right, read me the upgraded opening thesis before tea goes cold.", mood="happy", shot="two")
L("vani", "Shakespeare presents vaulting ambition as self-consuming: sparked by equivocation yet chosen freely, regicide shatters the Jacobean cosmos.", mood="determined", prop="book", shot="close")
L("dad", "And how do you weave in Lady Macbeth and foil kingship?", mood="thinking", shot="two")
L("vani", "Through chiasmus, her blank-verse command collapses into prose madness, while Macduff and prudent Malcolm heal Scotland's sickly commonwealth.", mood="excited", prop="book", shot="close")
L("quill", "What about Malcolm's final epitaph calling them a dead butcher and fiend-like queen?", mood="teach", shot="close", boardClear=True, board="Foil Kings: Duncan, Edward, Malcolm")
L("vani", "Politically just, yet dramatically incomplete — because only the audience heard their agonised interiority!", mood="happy", shot="two", board="Malcolm = med'cine of sickly weal")
L("dad", "Now that is a Grade Nine Literature critic.", mood="happy", shot="two")
L("quill", "Zero bolted-on history, sharp prosody, and cyclical symmetry. Dunsinane is conquered!", mood="smug", shot="wide")
sfx("ding")

end_card()
