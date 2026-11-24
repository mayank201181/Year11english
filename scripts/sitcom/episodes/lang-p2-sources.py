# Episode 3: OxfordAQA 9270 Paper 2A Multi-Source Reading & Synthesis
EP = dict(
    topic="lang-p2-sources",
    logline="Vanishree tries to referee a chaotic family group chat of five clashing screenshots until Professor Quill turns it into a Grade-Nine multi-source synthesis masterclass.",
)

SVG_GAPR = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#facc15">PAPER 2A TRIAGE (GAP-R)</text>'
    '<text x="300" y="104" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Genre · Audience · Purpose</text>'
    '<text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#6ee7b7">Register (Era &amp; Vested Stake)</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">Read italic blurb FIRST!</text>'
    '</svg>'
)

SVG_BRIDGE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#22c55e" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">SILOS vs GRADE-9 BRIDGE</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">✘ Silos: A says X. B says Y.</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">✔ Shared umbrella + hinge</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#dcfce7">Paired quotes: agree vs split</text>'
    '</svg>'
)

SVG_METHODS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#f472b6" stroke-width="3"/>'
    '<text x="300" y="50" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#f8fafc">RIVAL RHETORICAL ENGINES</text>'
    '<text x="300" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">Source B: Macro Logos + data</text>'
    '<text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f9a8d4">Source D: Micro Pathos + zoom</text>'
    '<text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">Logic assent vs moral guilt</text>'
    '</svg>'
)

SVG_WEAVE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260">'
    '<rect x="8" y="8" width="584" height="244" rx="16" fill="#0f172a" stroke="#facc15" stroke-width="3"/>'
    '<text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fef08a">THE WEAVE PARAGRAPH</text>'
    '<text x="300" y="96" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">W: Shared thesis + split</text>'
    '<text x="300" y="142" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">E-A: Quote 1 + Hinge word</text>'
    '<text x="300" y="188" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f9a8d4">V: Quote 2 + rival craft</text>'
    '<text x="300" y="234" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">E: WHY (role, era, stake)</text>'
    '</svg>'
)

# Cold Open
scene("kitchen", [("vani", 320), ("dad", 640), ("mum", 940)], "Tanglin Breakfast Table · Practice Dossier Chaos")
L("vani", "Six separate texts on one table! Oxford A Q A Paper Two Section A feels like an ambush disguised as a booklet.", mood="worried", prop="book", shot="close")
L("dad", "Look at our estate WhatsApp chat on midnight delivery scooters. Five neighbours, five completely different meltdowns!", mood="excited", prop="phone", shot="two")
L("mum", "Let me guess: a nostalgic memoir from Uncle Raj, followed by a frosty spreadsheet from the management committee?", mood="smug", shot="two")
L("vani", "Wait a second. One topic, five rival genres, and everybody pushing a secret agenda?", mood="thinking", shot="close")
freeze("FIVE VOICES, ONE TOPIC", dur=2.4, s="scratch")

title()

# Act 1: GAP-R Triage + Source Boundaries
scene("living", [("vani", 300), ("dad", 920)], "Living Room · Four-Minute Dossier Triage")
poof("quill", 610)
L("quill", "Spot on, Vanishree! Paper Two Section A gives five or six linked non-fiction texts for forty marks.", mood="teach", shot="wide", boardClear=True, board="PAPER 2A: 5-6 LINKED STIMULUS TEXTS", diagram=SVG_GAPR)
L("vani", "Professor Quill! Under exam timing, my brain panics and tries reading all six extracts twice before Question One.", mood="worried", shot="two")
L("quill", "Instead, spend four crisp minutes running GAP-R across the italicised blurbs at the top of each text first.", mood="determined", shot="close", board="GAP-R: GENRE, AUDIENCE, PURPOSE, REGISTER")
L("dad", "Hold on — those tiny italic headers actually matter? I skip them like microwave instructions!", mood="shock", shot="two")
L("quill", "Those headers unlock half your evaluation! They reveal era, audience, and vested interest before line one.", mood="smug", shot="close", board="BLURB = ROLE + ERA + VESTED STAKE")
L("vani", "Like if a bottled-water trade group funds an infographic, its scary tap-water headline serves commercial profit!", mood="happy", shot="close")
L("quill", "Exactly! Even charts and factfiles frame reality through bolded ratios and tiny sample footnotes.", mood="teach", shot="two", boardClear=True, board="DATA SOURCES STILL FRAME & SELECT")
L("dad", "What if I quote a brilliant metaphor from Source E when the stem asks for Source B and Source D?", mood="excited", shot="two")
sfx("buzzer")
L("quill", "Zero credit! Source drift is silent self-sabotage. Box the permitted source letters in every stem first.", mood="annoyed", shot="close", board="BOX PERMITTED SOURCES: ZERO DRIFT")
L("vani", "If Question Three names Sources A and D, then B, C, and E stay invisible to my pen.", mood="determined", shot="two")
L("quill", "Also separate embedded interviewee quotes from the journalist's own conclusion — never mix up foil and author!", mood="teach", shot="close", board="INTERVIEWEE QUOTE != AUTHOR STANCE")

confess("dad", "Kitchen Confessional")
L("dad", "I once quoted a pizza leaflet during a budget meeting. Cross-contaminating sources never ends well.", mood="deadpan", shot="close")

# Act 2: Conceptual Synthesis & Tone Precision
scene("classroom", [("vani", 300), ("quill", 620), ("teacher", 940)], "Tanglin English Lab · Synthesis & Tone Upgrade")
L("teacher", "Morning Vanishree! Suppose Source A is a cyclist dodging vans on painted lines, and Source C is a safety audit.", mood="teach", prop="book", shot="wide", boardClear=True, board="BRIDGE: BUCKET BY CONCEPT, NOT TEXT", diagram=SVG_BRIDGE)
L("vani", "Writing 'Source A mentions vans, and Source C mentions collision numbers' earns your dreaded red margin bracket!", mood="eyeroll", shot="two")
L("teacher", "Too right! That is two isolated summaries, not synthesis. Fuse both texts under one conceptual umbrella.", mood="happy", shot="two", board="SHARED UMBRELLA + PAIRED MICRO-QUOTES")
L("quill", "Both expose how paint-only lanes fail safety — pairing Source A's street hazard with Source C's collision metrics.", mood="teach", shot="close", board="CONVERGE ON CLAIM, DIVERGE ON LENS")
L("vani", "Embed two-to-five-word micro-quotes inside my own grammar, and match my gear to 'what' versus 'how' stems!", mood="determined", shot="close")
L("teacher", "Next, banish lazy tone labels forever! Never write that a writer sounds negative, positive, or sad.", mood="annoyed", shot="two", boardClear=True, board="BANISHED: POSITIVE / NEGATIVE / BIASED")
L("quill", "Use surgical adjectives! When a Victorian mill owner lectures workers 'for their own moral thrift', call it paternalistic.", mood="teach", shot="close", board="PATERNALISTIC = TOP-DOWN MORAL CONTROL")
L("vani", "And when an architect welcomes safe modern flats yet mourns erased dockland history, that is ambivalent!", mood="excited", shot="two", board="AMBIVALENT = PULLED BOTH WAYS")
L("teacher", "Spot on! Indifferent means not caring at all; ambivalent means pulled between two competing loyalties.", mood="happy", shot="two", board="SARDONIC · ELEGIAC · INDIGNANT · CLINICAL")
L("quill", "Even better, track the tonal pivot — where wry opening scepticism melts into reluctant closing awe.", mood="smug", shot="close", board="TRACK OPENING TONE -> CLOSING PIVOT")

challenge(
    1,
    "Torn between two conflicting feelings at once?",
    "ambivalent",
    "ambi = both sides (relief + grief together)",
    "Vocabulary check! Which adjective starting with A describes a writer pulled in two conflicting emotional directions at once?",
    "Ambivalent! Unlike indifferent, an ambivalent writer cares deeply about two competing truths.",
)

# Act 3: Rhetorical Methods
scene("hawker", [("vani", 280), ("quill", 600), ("uncle", 1000)], "Hawker Centre · Rhetorical Engines Under Pressure")
L("uncle", "Two barley waters! Listen to this ferry bulletin: 'Odour thresholds were regrettably exceeded.' Who talks like that?", mood="annoyed", prop="plate", shot="wide", boardClear=True, board="AGENTLESS PASSIVE HIDES CULPABILITY", diagram=SVG_METHODS)
L("vani", "Agentless passive voice plus corporate euphemism! Management hid who spilled the fuel behind sterile jargon.", mood="excited", shot="two")
L("quill", "Contrast that passive evasion against an angler's active verb: 'Executives poisoned our bay.' Syntax carries blame!", mood="teach", shot="close", board="PASSIVE EVASION VS ACTIVE INDICTMENT")
L("uncle", "Then read the columnist below: 'Nine hours wedged beside a broken ferry sink was scarcely a triumph of luxury.'", mood="smug", shot="two")
L("vani", "Calling chaos 'scarcely a triumph' negates the opposite with icy poise — that is litotes!", mood="happy", shot="close", board="LITOTES = IRONIC UNDERSTATEMENT")
L("quill", "Cool litotes contrasts brilliantly against loud hyperbole, forcing the reader to supply the outrage.", mood="teach", shot="two")
L("vani", "What when a summit vows to heal the planet, save humanity, and switch private-jet champagne flutes to bamboo?", mood="thinking", shot="two", boardClear=True, board="BATHOS: GRAND CLIMB -> TRIVIAL DROP")
L("quill", "With a B — bathos! Dropping from planetary grandeur onto bamboo champagne flutes punctures hypocrisy instantly.", mood="excited", shot="close", board="HYPOPHORA: ASK + IMMEDIATELY ANSWER")
L("uncle", "And when an editorial asks, 'Do closed libraries save council cash?' and immediately answers, 'Costs double'?", mood="thinking", shot="two")
L("vani", "Hypophora! Asking the sceptical question yourself and answering immediately to lock down the logic.", mood="determined", shot="close", board="CONCESSION: GRANTED... YET...")
L("quill", "Pair that with concession — opening with 'Granted' to build fair ethos before your 'yet' rebuttal lands.", mood="teach", shot="two")
L("uncle", "If shoppers read contracts like Vanishree reads non-fiction, nobody would ever get trapped in a gym membership!", mood="happy", shot="two")

challenge(
    2,
    "Ironic understatement negating the opposite?",
    "litotes",
    "'scarcely a triumph' / 'not inconsiderable'",
    "Method check! What classical term names deliberate ironic understatement formed by negating the contrary, like scarcely a triumph?",
    "Litotes! Dry understatement projects cool control and contrasts sharply against hyperbole.",
)

# Examiner Trap Card + Act 4 WEAVE Blueprint
card("EXAMINER GRADE-9 TRAP", "Never write 'makes the reader want to read on' or compare 'Source A uses nouns whereas Source B uses verbs'!", dur=3.2)

scene("living", [("vani", 280), ("mum", 610), ("quill", 940)], "Living Room · The High-Tariff WEAVE Blueprint")
L("mum", "Final boss question: high-tariff comparison of perspectives and methods. How do we hit top band cleanly?", mood="thinking", shot="wide", boardClear=True, diagram=SVG_WEAVE)
L("quill", "First, burn empty filler! 'Makes the reader want to read on' and 'vivid picture in their head' score zero.", mood="annoyed", shot="close", board="ZERO CREDIT FOR 'WANT TO READ ON'")
L("vani", "And ditch false symmetry like 'Source A uses nouns whereas Source B uses verbs' — every text uses both!", mood="eyeroll", shot="two", board="COMPARE STRATEGY: LOGOS VS PATHOS")
L("quill", "Build three tight WEAVE paragraphs! W: open with a Woven Thesis uniting shared tension and tonal split.", mood="teach", shot="close", board="W = WOVEN THESIS + E = ZOOM TEXT ONE")
L("mum", "Then E for Evidence Zoom One, plus A — an Analytical Hinge like 'Diametrically opposed' or 'Corroborating this'?", mood="happy", shot="two")
L("vani", "Then V for Viewpoint Zoom Two, and E — the Evaluative Why Clincher tying back to role, era, and audience!", mood="excited", shot="close", boardClear=True, board="A = HINGE · V = ZOOM TWO · E = WHY")
L("quill", "An oceanographer cites ratios for lawmakers, whereas a photographer frames one starving chick to stir public grief.", mood="smug", shot="two", board="WHY = ROLE + AUDIENCE + AGENDA")
L("mum", "Does comparing the closing lines of two extracts work for that third WEAVE paragraph?", mood="thinking", shot="two")
L("quill", "Pure Grade-Nine gold! Contrasting a flood victim's unfinished wait against an agency's upbeat slogan exposes spin.", mood="excited", shot="close", board="COMPARE STRUCTURAL ENDINGS")

challenge(
    3,
    "Sudden satirical drop from grand to trivial?",
    "bathos",
    "Lofty ideals crashing onto trivial detail",
    "Final challenge! With a B, what term names a sudden comic drop from lofty grandeur down to petty everyday detail?",
    "Bathos! Not pathos with a P — bathos with a B punctures pretension in one drop.",
)

L("vani", "Four-minute GAP-R triage, conceptual BRIDGE synthesis, tonal pivots, and woven WEAVE paragraphs — ready!", mood="happy", shot="wide", boardClear=True, board="60 MINS SECTION A · 60 MINS SECTION B")
L("mum", "And keep fifty-five minutes clear for Section B, where you transform those facts into your own rhetoric!", mood="excited", shot="two")
L("quill", "Class dismissed — keep your quotes micro, your hinges sharp, and your eyebrows suitably sardonic!", mood="smug", shot="close")
sfx("ding")

end_card()
