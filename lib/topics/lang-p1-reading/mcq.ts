import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Explicit Retrieval, Inference & Lexical Micro-Zoom
  // =========================================================================
  {
    id: "lang-p1-reading-m1",
    title: "Paper 1A MCQ 1 — Inference & Lexical Precision",
    questions: [
      {
        id: "lang-p1-reading-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "explicit-implicit-inference",
        question:
          "Read this memoir extract:\n\n*\"At six each morning my grandmother ironed the newspaper before my grandfather unfolded it, pressing the damp ink flat so it would not stain his cuffs.\"*\n\nWhich statement is an **explicit** fact rather than an inference?",
        options: [
          "The grandmother ironed the newspaper at six each morning so damp ink would not stain his cuffs.",
          "The household operated under rigid patriarchal expectations of domestic service.",
          "The grandmother quietly resented the daily ritual she performed before breakfast.",
          "The grandfather valued spotless public appearance more than his wife's rest.",
        ],
        answerIndex: 0,
        hints: [
          "Explicit retrieval states ONLY what is directly written on the surface of the sentence.",
          "Eliminate any interpretation about resentment, hierarchy, or unstated values.",
        ],
        explanation:
          "That the grandmother ironed the paper at six each morning to prevent ink staining his cuffs is directly stated in the text; claims about patriarchy, resentment, or values require implicit deduction.",
      },
      {
        id: "lang-p1-reading-m1-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-inference",
        question:
          "Read this travelogue extract:\n\n*\"The stationmaster stamped my permit without glancing up, blew dust from a 1984 timetable, and slid a brass key across the counter with two fingers as though nudging a dead beetle.\"*\n\nWhat is most clearly **implied** about the stationmaster's attitude toward the traveller?",
        options: [
          "He is terrified that the traveller is carrying a contagious illness.",
          "He treats the traveller's arrival with weary, fastidious disdain and bureaucratic detachment.",
          "He is apologetic that the station's timetables are nearly forty years out of date.",
          "He is fascinated by entomology and rural wildlife around the outpost.",
        ],
        answerIndex: 1,
        hints: [
          "Look at the combination of refusing eye contact ('without glancing up') and the simile at the end.",
          "What attitude does sliding an object 'with two fingers as though nudging a dead beetle' suggest?",
        ],
        explanation:
          "Refusing eye contact ('without glancing up') paired with the fastidious simile 'as though nudging a dead beetle' implies bored bureaucratic detachment edged with mild distaste, whereas literal fear of illness or interest in insects misreads figurative language.",
      },
      {
        id: "lang-p1-reading-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-inference",
        question:
          "A student answers an inference question on the phrase *\"he kept his bus ticket folded into a tiny paper square inside his watch-pocket\"* by writing:\n\n*\"This tells us that he folded up his bus ticket really small and put it inside the pocket for his watch.\"*\n\nWhy does this response stay trapped in the lowest mark band?",
        options: [
          "It quotes too few words from the original sentence.",
          "It forgets to identify whether 'folded' is a dynamic verb or a participle.",
          "It merely paraphrases the literal surface action without deducing any unstated character trait or motive.",
          "It uses first-person plural 'us' instead of passive academic phrasing.",
        ],
        answerIndex: 2,
        hints: [
          "Compare the meaning of the student's sentence with the literal words of the extract.",
          "Has the student uncovered *why* he preserves a disposable ticket so carefully?",
        ],
        explanation:
          "Rewriting 'folded into a tiny paper square inside his watch-pocket' as 'folded up really small and put inside the pocket' is pure **paraphrase**; inference requires deducing traits like meticulousness, sentimentality, or frugality.",
      },
      {
        id: "lang-p1-reading-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "explicit-implicit-inference",
        question:
          "On OxfordAQA Paper 1 Section A, what is the golden rule regarding **quotation length** when embedding textual evidence into analytical sentences?",
        options: [
          "Copy out two full sentences verbatim so the examiner can read the surrounding context.",
          "Never quote directly; summarise every detail in your own words.",
          "Quote only the first word and last word separated by an ellipsis.",
          "Embed surgical micro-quotations of roughly 2–5 load-bearing words inside your own grammar.",
        ],
        answerIndex: 3,
        hints: [
          "Long block quotations waste time and hide which exact word you are zooming onto.",
          "How short should embedded phrases be so they fit seamlessly inside your own syntax?",
        ],
        explanation:
          "Short **2–5 word micro-quotations** integrate smoothly into analytical prose and pinpoint the exact verb, modifier, or image you are unpacking, whereas copying whole sentences wastes exam time.",
      },
      {
        id: "lang-p1-reading-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this journalism extract about a derelict steelworks:\n\n*\"Broken skylights haemorrhaged grey rain onto the cooling-beds, where rusted girders lay like snapped ribs beneath a shroud of nettles.\"*\n\nWhich **semantic field** unifies the writer's imagery here?",
        options: [
          "Bodily trauma, post-mortem decay, and bereavement",
          "Maritime navigation and deep-sea shipwreck",
          "Medieval chivalry and tournament armour",
          "Botanical cultivation and springtime renewal",
        ],
        answerIndex: 0,
        hints: [
          "Group the three key figurative words: 'haemorrhaged', 'snapped ribs', and 'shroud'.",
          "What single conceptual domain connects severe bleeding, broken skeletal bones, and burial cloth?",
        ],
        explanation:
          "The verb 'haemorrhaged' (severe bleeding), the simile 'like snapped ribs' (skeletal injury), and the metaphor 'shroud' (burial cloth) form a cohesive semantic field of bodily injury and death, casting industrial decline as a corpse.",
      },
      {
        id: "lang-p1-reading-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this extract from an Arctic diary:\n\n*\"Outside the canvas tent, the blizzard sharpened its knives against the guy-ropes and tested every seam for weakness.\"*\n\nWhich analytical comment achieves **Grade-9 precision** rather than Band-2 waffle?",
        options: [
          "The writer uses personification to paint a vivid picture in the reader's mind and make the reader want to read on.",
          "Personifying the blizzard as a calculating assailant that 'sharpened its knives' and 'tested every seam' transforms blind weather into premeditated malice, exposing the explorers' acute vulnerability behind thin 'canvas'.",
          "The word 'knives' is a noun that shows the wind is very sharp and cold, which hooks the reader effectively.",
          "The sibilance in 'sharpened' and 'seam' creates a soothing, peaceful bedtime sound across the campsite.",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate any option relying on empty clichés ('paints a vivid picture', 'hooks the reader') or context-blind sibilance claims.",
          "Look for the response that unpacks agency, connotations of 'knives'/'tested', and contrast with 'canvas'.",
        ],
        explanation:
          "Unpacking how 'sharpened its knives' and 'tested' endow the storm with deliberate, predatory intelligence against fragile 'canvas' earns top-band credit; the distractors rely on banned examiner clichés or misread sibilance as peaceful.",
      },
      {
        id: "lang-p1-reading-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "lexical-imagery-effects",
        question:
          "What is the precise distinction between **pathetic fallacy** and **personification** in close-reading analysis?",
        options: [
          "Pathetic fallacy uses 'like' or 'as', whereas personification states that one thing literally is another.",
          "Pathetic fallacy applies only to animals, whereas personification applies only to buildings.",
          "Pathetic fallacy specifically attributes human emotion or mood to weather and nature to mirror atmosphere, whereas personification gives human actions or agency to any non-human thing.",
          "Pathetic fallacy means an argument based on weak logic, whereas personification means first-person narration.",
        ],
        answerIndex: 2,
        hints: [
          "Both involve attributing human qualities to the non-human world, so one is a specialised subset.",
          "Think of John Ruskin's coinage: sullen skies, weeping clouds, or brooding mist reflecting human mood.",
        ],
        explanation:
          "**Pathetic fallacy** is a specific subset of personification in which natural/weather phenomena ('weeping rain', 'brooding thunderclouds') are given human emotions reflecting the mood of the scene.",
      },
      {
        id: "lang-p1-reading-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this extract from a memoir about sitting an entrance exam:\n\n*\"The invigilator's heels clicked down the parquet aisle like a metronome counting off our remaining oxygen.\"*\n\nZooming onto the noun **'oxygen'** at the end of the simile primarily conveys:",
        options: [
          "That the examination hall had broken ventilation windows in midsummer.",
          "That the narrator excelled at chemistry and respiratory biology.",
          "That the invigilator was walking at an unusually slow, leisurely pace.",
          "That passing minutes felt like a dwindling life-support supply, turning time pressure into physical suffocation.",
        ],
        answerIndex: 3,
        hints: [
          "Literally, a clock counts seconds or minutes — why substitute 'oxygen' for 'minutes'?",
          "Connect dwindling oxygen to claustrophobia and panic.",
        ],
        explanation:
          "Replacing expected 'minutes' with 'remaining oxygen' fuses exam timing with suffocation, showing that each click of the heels tightens claustrophobic panic as if survival itself were running out.",
      },
      {
        id: "lang-p1-reading-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this extract describing an overcrowded night bus:\n\n*\"Steamed windows sealed us inside an aquarium of glowing phone screens and silent, swaying silhouettes.\"*\n\nHow does the metaphor **'aquarium'** shape the reader's impression of the passengers?",
        options: [
          "It frames the commuters as mute, enclosed specimens drifting in shared isolation behind glass.",
          "It suggests the passengers are vibrant, energetic, and joyfully interacting on a tropical holiday.",
          "It proves the bus has flooded during a torrential rainstorm.",
          "It implies the narrator is wealthy enough to own exotic marine fish.",
        ],
        answerIndex: 0,
        hints: [
          "Think about the core qualities of fish in a glass tank: enclosed, mute, drifting past one another, observed through glass.",
          "Match those connotations to 'steamed windows', 'silent', and 'swaying silhouettes'.",
        ],
        explanation:
          "An 'aquarium' connotes glass-walled confinement, wordless drifting, and eerie blue-lit suspension — reinforcing how urban commuters sit inches apart yet remain hermetically isolated.",
      },
      {
        id: "lang-p1-reading-m1-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this nature-writing extract:\n\n*\"Dawn did not break over the fen; it seeped upward through black peat-water, staining the reeds the colour of old pewter.\"*\n\nWhy is the writer's rejection of the cliché *'Dawn did not break'* in favour of the verb **'seeped'** analytically significant?",
        options: [
          "It demonstrates that sunrise occurred several hours earlier than predicted by meteorologists.",
          "Negating triumphant 'breaking' and substituting 'seeped' strips morning of warmth or sudden relief, making light feel sluggish, damp, and contaminated by the marsh.",
          "It uses hyperbole to celebrate a dazzling, multicoloured sunrise across the countryside.",
          "It proves the narrator was underground inside a cave unable to see the reeds.",
        ],
        answerIndex: 1,
        hints: [
          "Contrast the energy and direction of 'break' (from the sky downward) with 'seeped' (oozing slowly upward through mud/water).",
          "Pair 'seeped' with 'staining' and 'old pewter' — is this dawn radiant or dreary?",
        ],
        explanation:
          "Explicitly negating 'Dawn did not break' denies the reader conventional renewal; 'seeped' connotes slow, viscous leakage from below ('black peat-water'), reinforced by 'staining' and dull metallic 'old pewter'.",
      },
      {
        id: "lang-p1-reading-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this sentence from a mountaineering memoir:\n\n*\"With the rope frozen stiff as iron cable, my crampons skittering on blue verglas, and dusk swallowing the crampon-scars below, I let go of the axe.\"*\n\nGrammatically, why is this classified as a **periodic sentence**, and what is its effect?",
        options: [
          "It repeats the same word at the start of three successive sentences to sound persuasive.",
          "It omits all verbs completely so the sentence becomes a minor fragment.",
          "It stacks subordinate/participial phrases of escalating peril before withholding the main clause ('I let go of the axe') until the final words, building acute suspense.",
          "It places the main clause first and adds relaxed, nostalgic afterthoughts.",
        ],
        answerIndex: 2,
        hints: [
          "Locate the main subject + finite verb ('I let go of the axe') — does it appear at the beginning or the very end?",
          "What happens to tension while the reader waits through three perilous conditions before learning what 'I' did?",
        ],
        explanation:
          "A **periodic (left-branching) sentence** delays its independent clause until the close; forcing the reader through frozen rope, slipping crampons, and encroaching darkness first maximizes suspense before the shock decision.",
      },
      {
        id: "lang-p1-reading-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this extract from a wildfire evacuation account:\n\n*\"Ash coated the windscreen, clogged the air-vents, stung our eyelids, greyed our tongues.\"*\n\nWhich syntactic technique is used here, and how does it reinforce the scene?",
        options: [
          "Syndetic listing (polysyndeton) slows the sentence into a dreamy, nostalgic lullaby.",
          "Hypophora answers a rhetorical question to reassure the reader that safety is near.",
          "Parenthetical dashes interrupt the narrator with a humorous childhood memory.",
          "Asyndetic listing (asyndeton) strips out conjunctions so invasive verbs pile up in rapid, relentless succession, mirroring sensory siege.",
        ],
        answerIndex: 3,
        hints: [
          "Notice there is no 'and' before the final verb phrase 'greyed our tongues'.",
          "Notice also how the ash moves closer inward with each verb: windscreen → vents → eyelids → tongues.",
        ],
        explanation:
          "**Asyndeton** omits coordinating conjunctions ('and'), accelerating the four dynamic verbs ('coated, clogged, stung, greyed') as the ash breaches outer mechanical barriers right into the narrator's mouth.",
      },
      {
        id: "lang-p1-reading-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "structural-shifts-focus",
        question:
          "In Section 1 of a travelogue, the writer describes a vast Himalayan valley gleaming under crisp morning sun; in Section 2, the focus narrows onto a single discarded oxygen canister half-buried in scree. What is the primary **structural effect** of this shift?",
        options: [
          "Zooming from untouched panoramic grandeur onto human debris punctures the romantic wilderness myth and introduces an undertone of mortal risk and intrusion.",
          "It proves the writer forgot what topic Section 1 was describing.",
          "It uses alliteration to make the valley sound musical and carefree.",
          "It shifts the text from first-person memoir into second-person instructional manual.",
        ],
        answerIndex: 0,
        hints: [
          "Track both camera distance (wide valley → tiny canister) and thematic contrast (pristine nature → survival litter).",
          "How does that close-up alter the idyllic mood established in Section 1?",
        ],
        explanation:
          "Structurally narrowing from a pristine panoramic landscape to a close-up anomaly ('discarded oxygen canister') juxtaposes sublime beauty against human frailty and ecological scar, darkening the mood.",
      },
      {
        id: "lang-p1-reading-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "Read this memoir extract about a catastrophic solo sailing attempt:\n\n*\"My 'unsinkable' flagship — six feet of varnished plywood held together by optimism and hardware-store glue — surrendered to Portsmouth Harbour roughly eleven seconds after launch.\"*\n\nWhich pair of adjectives most accurately captures the writer's **tone**?",
        options: [
          "Bitter and traumatised",
          "Wry and self-deprecating",
          "Reverent and elegiac",
          "Didactic and outraged",
        ],
        answerIndex: 1,
        hints: [
          "Notice the scare quotes around 'unsinkable', the mock-grand noun 'flagship', and 'held together by optimism'.",
          "Is the narrator mourning a tragedy or poking affectionate fun at their own youthful hubris?",
        ],
        explanation:
          "Ironising six feet of plywood as an ''unsinkable' flagship' glued together by 'optimism' and timing defeat to 'eleven seconds' creates classic **wry, self-deprecating** humour.",
      },
      {
        id: "lang-p1-reading-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "If Question 1 on Paper 1 Section A specifies *\"Read **Section 1** again. Give two details about the harbour...\"*, what happens if you quote an accurate detail about the harbour found in **Section 3**?",
        options: [
          "You receive full marks because the detail is still factually true about the harbour.",
          "You receive half marks for showing whole-text awareness early.",
          "You score zero marks for that point because examiners strictly enforce section boundaries.",
          "Your marks are carried forward automatically to the final whole-text question.",
        ],
        answerIndex: 2,
        hints: [
          "OxfordAQA Paper 1A divides the insert into numbered sections for a specific assessment reason.",
          "Check the first exam rule on targeted section retrieval.",
        ],
        explanation:
          "When an OxfordAQA reading question restricts you to a named section (e.g. Section 1), any evidence lifted from outside that section scores **0 marks**, no—matter how accurate or perceptive.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Syntax, Punctuation Craft & Structural Focus Shifts
  // =========================================================================
  {
    id: "lang-p1-reading-m2",
    title: "Paper 1A MCQ 2 — Syntax, Punctuation & Structure",
    questions: [
      {
        id: "lang-p1-reading-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this extract from a caving memoir:\n\n*\"For twenty minutes we wriggled forward on our bellies through freezing mud while our helmet beams flickered orange and faded to threads. Darkness. Total, pressing darkness.\"*\n\nWhat grammatical label describes *\"Darkness.\"* and *\"Total, pressing darkness.\"*?",
        options: [
          "Compound-complex sentences",
          "Interrogative clauses",
          "Passive conditional sentences",
          "Minor sentences (syntactic fragments)",
        ],
        answerIndex: 3,
        hints: [
          "Check whether either expression contains a finite main verb.",
          "What do we call verbless sentences used deliberately to halt pace?",
        ],
        explanation:
          "Both lack a finite main verb, making them **minor sentences (fragments)** that abruptly sever the twenty-minute forward motion to trap the reader inside sudden pitch-black stillness.",
      },
      {
        id: "lang-p1-reading-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this extract from an urban cycling essay:\n\n*\"We pedalled past shuttered bakeries and past steaming drain-grates and past neon laundrettes and past taxi ranks where drivers slept over their steering wheels.\"*\n\nWhy does the writer repeat **'and past'** four times (**polysyndeton**) rather than using commas?",
        options: [
          "It creates a hypnotic, accumulative rhythm that mimics continuous nocturnal motion through unending city blocks.",
          "It proves the writer did not know how to use commas accurately.",
          "It creates a sudden explosive cliffhanger that stops all movement.",
          "It signals an aggressive argument aimed at banning taxis from city streets.",
        ],
        answerIndex: 0,
        hints: [
          "Read the sentence aloud and feel the steady pedal-stroke cadence created by repeating 'and past'.",
          "Polysyndeton elongates sequence — match that to cycling across a sleeping city.",
        ],
        explanation:
          "Repeating 'and past' (**syndetic listing / polysyndeton**) stretches the clause into a rolling, unbroken cadence that mirrors rhythmic pedalling past street after street.",
      },
      {
        id: "lang-p1-reading-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this sentence from an investigative journalism piece on abandoned gold mines:\n\n*\"Investors had been promised veins of pure quartz glittering beneath every ridge: they found flooded shafts and arsenic sludge.\"*\n\nHow does the **colon (`:`)** function as a craft device here?",
        options: [
          "It introduces a polite bulleted shopping list of mining equipment.",
          "It acts as a stark syntactic hinge, pivoting abruptly from gilded promotional fantasy to toxic, disillusioning reality.",
          "It softens the tone to show that the investors remained optimistic.",
          "It indicates that a second speaker has interrupted the narrator mid-word.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the glittering promise before the colon with the grim nouns ('flooded shafts and arsenic sludge') after it.",
          "Notice there is no softening connective like 'unfortunately, however' — just the bare colon.",
        ],
        explanation:
          "By omitting discursive connectives and hinging the two clauses on a bare **colon**, the writer engineers an instant, unforgiving collision between illusion ('glittering') and toxic truth ('arsenic sludge').",
      },
      {
        id: "lang-p1-reading-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this memoir sentence:\n\n*\"I assured the guide — in a voice that squeaked like a wet boot — that heights had never bothered me in the slightest.\"*\n\nWhat is the effect of the **parenthetical dashes (`— … —`)**?",
        options: [
          "They provide formal geographical data about mountain elevation.",
          "They accelerate the sentence into breathless heroic triumph.",
          "They slice open the narrator's boast mid-sentence to insert a comic, self-exposing confession that completely undercuts his bravado.",
          "They prove the guide could not hear what the narrator was saying.",
        ],
        answerIndex: 2,
        hints: [
          "Read the outer sentence without the dashes ('I assured the guide that heights had never bothered me'), then read what interrupts it.",
          "Who is telling the truth — the outer boast or the dashed aside?",
        ],
        explanation:
          "The **parenthetical dashes** interrupt the swaggering outer claim right before its content arrives, letting the older memoirist sabotage his younger self's false courage with the comic simile 'squeaked like a wet boot'.",
      },
      {
        id: "lang-p1-reading-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this reflection from a coastal memoir:\n\n*\"The tourists came for the postcard sunsets; the fishermen stayed for the winter herring.\"*\n\nWhy is a **semicolon (`;`)** so effective between these two clauses?",
        options: [
          "It marks an incomplete grammatical fragment lacking a subject.",
          "It introduces a quotation spoken aloud by a local fisherman.",
          "It shows chaotic panic and loss of emotional control.",
          "It balances two parallel independent clauses in poised antithesis, contrasting fleeting leisure against enduring livelihood.",
        ],
        answerIndex: 3,
        hints: [
          "Notice the syntactic parallelism: 'The tourists came for X; the fishermen stayed for Y.'",
          "What punctuation mark acts as a fulcrum balancing two equal yet contrasting clauses?",
        ],
        explanation:
          "The **semicolon** acts as a poised fulcrum balancing parallel syntactic structures ('came for…' vs 'stayed for…'), sharpening the quiet antithesis between seasonal spectacle and year-round survival.",
      },
      {
        id: "lang-p1-reading-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "structural-shifts-focus",
        question:
          "In narrative and non-fiction structure, what does the literary term **analepsis** mean?",
        options: [
          "A structural flashback that breaks linear chronology to revisit an earlier time or memory",
          "A flash-forward predicting events decades in the future",
          "Repeating a consonant sound at the beginning of adjacent words",
          "Addressing the reader directly using the pronoun 'you'",
        ],
        answerIndex: 0,
        hints: [
          "Contrast *analepsis* (looking back) with *prolepsis* (leaping ahead).",
          "Memoirists use it mid-extract to supply emotional backstory.",
        ],
        explanation:
          "**Analepsis** is the technical structural term for a flashback interrupting the present timeline to illuminate past causes, memories, or contrasts.",
      },
      {
        id: "lang-p1-reading-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "structural-shifts-focus",
        question:
          "A memoir opens in Section 1 with the narrator aged ten pressing her nose against a bakery window watching saffron buns rise, and ends in Section 4 thirty years later as she unlocks her own bakery at dawn and smells warm saffron. Which structural concept best describes this ending?",
        options: [
          "In medias res cliffhanger",
          "Transformed cyclical return",
          "Bathos and anti-climax",
          "Unreliable fragmentation",
        ],
        answerIndex: 1,
        hints: [
          "Compare the sensory motif in Section 1 (saffron buns behind glass, outside looking in) with Section 4 (her own bakery, inside unlocking the door).",
          "Has she returned to the opening motif in the exact same position, or with changed agency?",
        ],
        explanation:
          "Revisiting Section 1's bakery/saffron motif at the end while inverting the narrator's position from excluded child outside the glass to proprietor unlocking it from within is a **transformed cyclical return**.",
      },
      {
        id: "lang-p1-reading-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "structural-shifts-focus",
        question:
          "Between two dense, descriptive twelve-line paragraphs about a noisy Cairo market, a travel writer inserts a standalone **single-sentence paragraph**:\n\n*\"Then the call to prayer rose from a single minaret, and a thousand bargains froze mid-breath.\"*\n\nWhy isolate this sentence as its own paragraph?",
        options: [
          "Newspaper printers forbid paragraphs longer than twelve lines.",
          "It hides an unimportant transition so readers can skip ahead.",
          "Visually and rhythmically, the isolated white space acts as a structural fulcrum — enacting the sudden collective hush separating clamour from stillness.",
          "It proves the narrator immediately left the market and flew home.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the visual white space above and below a one-line paragraph sandwiched between two crowded blocks.",
          "How does that visual isolation mirror 'froze mid-breath'?",
        ],
        explanation:
          "A standalone **single-sentence paragraph** creates visual and rhythmic breathing space on the page, functioning as a structural pivot that enacts the sudden arrest of noise.",
      },
      {
        id: "lang-p1-reading-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "structural-shifts-focus",
        question:
          "Which of the following sentences makes a genuine **structural** point rather than a disguised **lexical/language** point?",
        options: [
          "The dynamic verb 'shattered' has violent connotations of irreversible destruction.",
          "The adjective 'phosphorescent' creates an eerie visual glow on the water.",
          "The simile 'cold as a chisel' emphasises how bitterly freezing the wind felt.",
          "Withholding the source of the metallic tapping across Sections 1 and 2 before revealing the trapped gull in Section 3 sustains disorientation, aligning the reader with the narrator's dread.",
        ],
        answerIndex: 3,
        hints: [
          "Language analysis zooms onto single words/images; structural analysis explains **sequence, withholding, placement, and shifts** across sections.",
          "Ask which option answers 'Why in THIS order across the text?'",
        ],
        explanation:
          "Explaining how **information is withheld across Sections 1–2 and revealed in Section 3** analyses sequence and narrative architecture; the other three options analyse word classes and figurative imagery (language).",
      },
      {
        id: "lang-p1-reading-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "structural-shifts-focus",
        question:
          "Read this two-sentence pivot in a polar travelogue:\n\n*\"For six pages of my journal I composed lofty philosophical reflections on humanity's timeless communion with the sublime eternal ice. Then my Primus stove exploded and singed off my left eyebrow.\"*\n\nWhat literary/structural device drives the shift between Sentence 1 and Sentence 2?",
        options: [
          "Bathos — an abrupt drop from elevated grandeur to ridiculous physical anti-climax",
          "Pathetic fallacy — weather mourning human tragedy",
          "Foreshadowing of a tragic death",
          "Formal academic synthesis",
        ],
        answerIndex: 0,
        hints: [
          "Notice the lofty register of 'timeless communion with the sublime eternal ice' colliding instantly with 'singed off my left eyebrow'.",
          "What four-syllable or two-syllable Greek term (starting with 'b') names a sudden plunge from the sublime to the absurd?",
        ],
        explanation:
          "**Bathos** punctures lofty, self-important solemnity ('sublime eternal ice') with sudden comic mundanity ('singed off my left eyebrow'), a classic travel-writing pivot.",
      },
      {
        id: "lang-p1-reading-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this extract about an antique clockmaker's workshop:\n\n*\"Brass escapements ticked in tiny, competing heartbeats along the velvet bench while the old man bent over his jeweller's loupe like a surgeon coaxing pulse back into gold.\"*\n\nHow do the metaphor **'heartbeats'** and simile **'like a surgeon'** work together?",
        options: [
          "They imply the workshop is unsanitary and dangerous to enter.",
          "They elevate mechanical repair into delicate, life-giving devotion — treating inert clockwork as living organisms under tender medical care.",
          "They suggest the clockmaker wishes he had studied medicine instead of horology.",
          "They show that the clocks are loud enough to cause painful headaches.",
        ],
        answerIndex: 1,
        hints: [
          "Link 'heartbeats' + 'surgeon' + 'coaxing pulse back'.",
          "Does this semantic cluster make the watches seem cold and dead, or alive and precious?",
        ],
        explanation:
          "Sustaining vital/medical imagery ('heartbeats', 'surgeon', 'coaxing pulse') animates the brass mechanisms as fragile living beings and dignifies the craftsman's patience as restorative care.",
      },
      {
        id: "lang-p1-reading-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-inference",
        question:
          "Read this extract from a memoir of moving to a new country:\n\n*\"Every evening my mother practised saying 'Lovely weather, isn't it?' to the bathroom mirror until the vowels lost their Warsaw corners.\"*\n\nWhat can we **infer** from *\"until the vowels lost their Warsaw corners\"*?",
        options: [
          "She had forgotten how to speak Polish entirely within a week.",
          "The bathroom mirror had sharp, square wooden edges imported from Poland.",
          "She laboured anxiously in private to smooth away her native accent so she could blend seamlessly into English small-talk.",
          "She worked professionally as a television meteorologist.",
        ],
        answerIndex: 2,
        hints: [
          "Why rehearse casual small-talk alone in front of a mirror?",
          "What does smoothing 'Warsaw corners' off vowels imply about assimilation and vulnerability?",
        ],
        explanation:
          "Rehearsing banal English weather chat alone in the mirror to file down 'Warsaw corners' poignantly implies an immigrant's private effort to mask foreignness and avoid exclusion.",
      },
      {
        id: "lang-p1-reading-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this extract from a storm-chasing article:\n\n*\"Hail hammered the bonnet — golf-ball white, deafening, relentless — denting steel in seconds.\"*\n\nWhich **two** craft features combine inside the dashed interruption?",
        options: [
          "Syndetic listing and euphemism",
          "Rhetorical question and oxymoron",
          "Simile and passive voice",
          "Parenthetical dashes enclosing an asyndetic tricolon of modifiers",
        ],
        answerIndex: 3,
        hints: [
          "Count the modifiers inside the dashes: (1) golf-ball white, (2) deafening, (3) relentless.",
          "Are those three modifiers joined by 'and', or separated solely by commas?",
        ],
        explanation:
          "The **parenthetical dashes** isolate three rapid-fire adjectives without conjunctions — an **asyndetic tricolon** covering sight ('golf-ball white'), sound ('deafening'), and duration ('relentless').",
      },
      {
        id: "lang-p1-reading-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "Read this journalism extract on high-speed rail cutting through an ancient woodland:\n\n*\"Undoubtedly, shaving nineteen minutes off the commuter sprint to Birmingham is a triumph of modern concrete; three hundred-year-old oaks, after all, contribute painfully little to quarterly productivity spreadsheets.\"*\n\nHow does the writer convey condemnation of the rail project?",
        options: [
          "Through biting, sardonic irony — adopting the cold corporate jargon of 'quarterly productivity spreadsheets' to expose how short-sightedly ancient nature is sacrificed for trivial time savings.",
          "Through sincere, enthusiastic praise for modern concrete engineering and faster commuting.",
          "Through tearful, sentimental begging addressed directly to the oak trees.",
          "Through neutral, balanced objectivity that refuses to take any side.",
        ],
        answerIndex: 0,
        hints: [
          "Contrast 'nineteen minutes' and 'concrete' with 'three hundred-year-old oaks'.",
          "Does the writer *really* believe ancient oaks are worthless because they aren't on spreadsheets?",
        ],
        explanation:
          "Mock-conceding a 'triumph of modern concrete' for a mere 'nineteen minutes' while ventriloquising soulless corporate metrics ('quarterly productivity spreadsheets') weaponises **sardonic irony** against ecological vandalism.",
      },
      {
        id: "lang-p1-reading-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "When tackling a high-tariff final question on Paper 1 Section A (*\"How does the writer convey their changing feelings across the whole text?\"*), what is the strongest opening sentence for your response?",
        options: [
          "In this extract the writer uses lots of language devices, structure, and punctuation to make the reader want to read on.",
          "Across the extract, the writer's perspective shifts from brisk, sceptical detachment in the opening sections to humbled, elegiac reverence following the encounter in Section 3.",
          "I really enjoyed reading this passage because it was relatable and painted a clear picture in my head.",
          "First I will analyse a metaphor in line 2, and later I will look for a short sentence.",
        ],
        answerIndex: 1,
        hints: [
          "A Grade-9 opening thesis maps the **conceptual trajectory** (Start Tone → Pivot → End Tone) immediately.",
          "Avoid empty device lists or personal 'I enjoyed it' reviews.",
        ],
        explanation:
          "Establishing a clear **two-part tonal arc** ('from brisk, sceptical detachment… to humbled, elegiac reverence') gives your entire evaluation a perceptive conceptual spine.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Viewpoint, Tone Nuance & Integrated Grade-9 Evaluation
  // =========================================================================
  {
    id: "lang-p1-reading-m3",
    title: "Paper 1A MCQ 3 — Viewpoint, Tone & Holistic Evaluation",
    questions: [
      {
        id: "lang-p1-reading-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "Which precise adjective best describes a memoirist's tone when writing mournfully and reflectively about a vanished way of life or lost loved one?",
        options: [
          "Belligerent",
          "Farcical",
          "Elegiac",
          "Pedantic",
        ],
        answerIndex: 2,
        hints: [
          "Think of an *elegy* — a poem or reflection of quiet mourning and remembrance.",
          "Eliminate words meaning aggressive ('belligerent'), slapstick ('farcical'), or nit-picking ('pedantic').",
        ],
        explanation:
          "**Elegiac** describes a poignant, mournful, wistfully reflective tone toward loss or the passing of time — indispensable for memoirs and heritage journalism.",
      },
      {
        id: "lang-p1-reading-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "Read this memoir passage about revisiting a childhood industrial town:\n\n*\"I hated the soot that blackened my collar every walk to school, hated the five-o'clock siren that ruled my father's lungs; yet standing now on the grassed-over slag-heap beside a silent retail park, I caught myself missing the roar of the furnaces that at least meant men had work.\"*\n\nWhich word most accurately captures the narrator's **overall perspective**?",
        options: [
          "Unconditionally nostalgic",
          "Purely triumphant",
          "Indifferent",
          "Deeply ambivalent",
        ],
        answerIndex: 3,
        hints: [
          "Look at both halves hinged on '; yet': fierce hatred of soot and exploitation vs aching loss of communal purpose.",
          "What single term names holding two contradictory feelings simultaneously?",
        ],
        explanation:
          "Anaphoric 'hated… hated…' expresses visceral resentment of industrial harm, while '; yet… missing the roar' concedes poignant loss of dignity and employment — classic **ambivalence**.",
      },
      {
        id: "lang-p1-reading-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this extract from a volcanic eruption eyewitness account:\n\n*\"In the kitchen, fine pumice dust furred the teacups like grey velvet and muffled the ticking wall-clock to a padded thud.\"*\n\nWhy is the simile **'like grey velvet'** unsettling rather than comforting in this context?",
        options: [
          "Juxtaposing soft, luxurious domestic texture ('velvet') with toxic volcanic fallout inside a family kitchen creates an uncanny, sinister quietness as catastrophe invades intimate space.",
          "It proves the volcano actually improved the house's interior decoration.",
          "It shows the narrator was dreaming about shopping for expensive curtains.",
          "It demonstrates that pumice dust is warm and safe to drink.",
        ],
        answerIndex: 0,
        hints: [
          "Normally 'velvet' connotes luxury and softness — why is finding volcanic ash 'furring' teacups like velvet eerie?",
          "Pair 'velvet' with 'muffled' and 'padded thud' — the threat arrives quietly rather than explosively.",
        ],
        explanation:
          "Borrowing a tactile domestic luxury word ('velvet') for invasive volcanic ash creates **uncanny dissonance**: disaster creeps into the kitchen with eerie, suffocating softness ('muffled').",
      },
      {
        id: "lang-p1-reading-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-inference",
        question:
          "Read this extract from an expedition medic's log:\n\n*\"Asked how his frostbitten toes felt, Carter grinned through cracked lips, remarked that he would save a fortune on pedicures, and quietly slid his untouched ration tin into the rookie's rucksack.\"*\n\nWhich pair of traits can be deduced about Carter?",
        options: [
          "Vanity about his appearance and greed over food supplies",
          "Stoic gallows humour masking pain, paired with unshowy selflessness toward younger teammates",
          "Delirious confusion about prices and hostility toward rookies",
          "Cowardice under pressure and eagerness to abandon the climb",
        ],
        answerIndex: 1,
        hints: [
          "Look at the two clues: joking about pedicures with frostbite, and secretly giving away his ration tin.",
          "Why does he slide the tin 'quietly' rather than announcing it?",
        ],
        explanation:
          "Deflecting severe frostbite pain with a joke ('save a fortune on pedicures') shows stoic gallows humour, while 'quietly' slipping his rations to the rookie reveals discreet, unboastful generosity.",
      },
      {
        id: "lang-p1-reading-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "lexical-imagery-effects",
        question:
          "In grammatical agency analysis, look at who performs the active verbs in this extract:\n\n*\"The fog swallowed the headland, erased the jetty lamps, and backed me step by hesitant step against the harbour wall.\"*\n\nHow does **grammatical agency** reinforce the narrator's helplessness?",
        options: [
          "The narrator is the active subject of three transitive verbs, proving total mastery over the coast.",
          "Every clause is written in future tense to predict tomorrow's weather forecast.",
          "Inanimate 'fog' occupies the active subject slot driving three forceful transitive verbs ('swallowed', 'erased', 'backed'), reducing the human narrator to the grammatical direct object ('me') being cornered.",
          "There are zero verbs anywhere in the sentence.",
        ],
        answerIndex: 2,
        hints: [
          "Ask: *Who is the grammatical subject doing 'swallowed', 'erased', and 'backed'?* And *what grammatical role does 'me' play?*",
          "When environment is subject and human is object, power is inverted.",
        ],
        explanation:
          "Making 'The fog' the relentless grammatical agent of 'swallowed', 'erased', and 'backed' while demoting the narrator to object ('backed me') encodes human powerlessness directly into the syntax.",
      },
      {
        id: "lang-p1-reading-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sentence-punctuation-craft",
        question:
          "Read this extract from an essay on examination halls:\n\n*\"Three hundred pens scratched; three hundred wrists ached; three hundred futures narrowed to black ink on lined paper.\"*\n\nWhich **two** devices work in tandem across this sentence?",
        options: [
          "Oxymoron and colloquial slang",
          "Euphemism and parenthetical brackets",
          "Onomatopoeia and rhetorical question",
          "Anaphoric tricolon ('Three hundred…') balanced across semicolons, escalating from physical sound to existential stakes",
        ],
        answerIndex: 3,
        hints: [
          "Notice the three clauses starting with 'Three hundred…' separated by semicolons.",
          "Trace the progression of the three nouns: pens → wrists → futures.",
        ],
        explanation:
          "Repeating 'Three hundred…' across three semicolon-linked clauses forms an **anaphoric tricolon** that zooms steadily inward in stakes: mechanical tool ('pens') → bodily strain ('wrists') → life destiny ('futures').",
      },
      {
        id: "lang-p1-reading-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "structural-shifts-focus",
        question:
          "A biography extract begins mid-crisis (*\"When the rudder snapped off Cape Horn, nobody screamed.\"*), then steps back in Section 2 to explain how the crew had been recruited in Plymouth six months earlier. What structural opening technique is used in Section 1?",
        options: [
          "In medias res — plunging straight into peak jeopardy before supplying chronological backstory via analepsis",
          "Chronological cradle-to-grave exposition",
          "Epistolary sign-off",
          "Didactic conclusion",
        ],
        answerIndex: 0,
        hints: [
          "Latin for 'into the middle of things' — starting right inside the crisis rather than at Plymouth harbour.",
          "Then Section 2 loops backward in time (analepsis).",
        ],
        explanation:
          "Starting directly at the moment the rudder snaps (**in medias res**) hooks immediate tension and counter-intuitive quietness ('nobody screamed') before Section 2 supplies retrospective context.",
      },
      {
        id: "lang-p1-reading-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "Read this nature column extract:\n\n*\"We call the urban fox a 'pest' for raiding wheely-bins we overfill on land we concreted over its burrows.\"*\n\nHow do the scare quotes around **'pest'** and the inclusive pronoun **'we'** align the reader?",
        options: [
          "They encourage readers to call pest-control officers immediately.",
          "Scare quotes problematise the label 'pest' as hypocritical human projection, while repeated 'we' implicates both writer and reader in collective responsibility for habitat destruction.",
          "They prove the writer has never seen a fox in a city.",
          "They distance the writer completely from human society using formal third-person detachment.",
        ],
        answerIndex: 1,
        hints: [
          "Why put inverted commas around 'pest'?",
          "And why say 'bins we overfill on land we concreted' instead of 'bins people overfill'?",
        ],
        explanation:
          "Inverted commas destabilise 'pest' as self-serving human blame, while inclusive 'we' refuses moral superiority — gently implicating reader and writer alike in wastefulness and encroachment.",
      },
      {
        id: "lang-p1-reading-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "What is **retrospective distance** in autobiographical non-fiction, and why do examiners reward candidates who spot it?",
        options: [
          "Writing a travelogue from at least ten kilometres away using binoculars.",
          "Using only third-person pronouns ('he/she') in newspaper reports.",
          "The dual perspective between the experiencing younger self inside the moment (often naïve, terrified, or proud) and the wiser older narrator shaping the memory with irony or hindsight.",
          "Forgetting key dates and names because too many years have passed.",
        ],
        answerIndex: 2,
        hints: [
          "In a memoir, there are always *two* versions of 'I': the 'I' back then, and the 'I' holding the pen years later.",
          "How do those two viewpoints interact?",
        ],
        explanation:
          "**Retrospective distance** distinguishes the immediate, raw emotions of the past self in the scene from the mature, often ironic or poignant judgement of the narrating adult.",
      },
      {
        id: "lang-p1-reading-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lexical-imagery-effects",
        question:
          "Read this extract about an abandoned desert railway station:\n\n*\"Sand had drifted across the ticket-hall tiles, burying the fallen clock-hands under pale, wind-rippled dunes.\"*\n\nBeyond literal weather, what symbolic weight comes from *sand burying fallen clock-hands*?",
        options: [
          "It shows local cleaners are on a lunch break.",
          "It proves desert clocks run faster than city clocks.",
          "It suggests a bustling modern railway hub is about to open.",
          "It symbolises geological time and nature effortlessly reclaiming and erasing human schedules and imperial ambition.",
        ],
        answerIndex: 3,
        hints: [
          "What do 'clock-hands' represent (human measurement of schedules/control), and what has 'sand' long symbolised (hourglass / vast natural time)?",
          "Notice which one buries the other.",
        ],
        explanation:
          "Juxtaposing 'fallen clock-hands' (broken human timekeeping and industrial order) beneath encroaching desert 'dunes' symbolises nature's vast timescale quietly obliterating transient human enterprise.",
      },
      {
        id: "lang-p1-reading-m3-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "lexical-imagery-effects",
        question:
          "Why is claiming *\"the writer uses sibilance to create a calm, soothing atmosphere\"* dangerous on an unseen storm or predator extract?",
        options: [
          "Phonetic effects have zero fixed emotional meaning on their own — in hostile contexts, repeated /s/ and /sh/ sounds amplify sinister hissing, whipping sleet, or stealth rather than calm.",
          "Sibilance is banned from OxfordAQA mark schemes.",
          "Sibilance only exists in Shakespearean verse, never in prose.",
          "Repeated /s/ sounds are actually called plosives.",
        ],
        answerIndex: 0,
        hints: [
          "Compare *'soft summer sleep'* with *'slithering, spitting sleet'* — same /s/ sound, opposite moods!",
          "Sound always amplifies lexical meaning rather than overriding it.",
        ],
        explanation:
          "Sound patterning is strictly context-dependent: in threatening scenes, sibilance evokes spitting wind, rustling danger, or venomous hiss rather than peacefulness.",
      },
      {
        id: "lang-p1-reading-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "structural-shifts-focus",
        question:
          "Across a four-section mountain rescue article, Sections 1–3 use sprawling 35-word sentences packed with blizzard chaos, whereas Section 4 — set inside the rescue hut — shifts to calm, balanced 12-word sentences. How should you analyse this shift?",
        options: [
          "Claim the writer ran out of vocabulary by Section 4.",
          "Connect the macro-syntactic shift directly to the narrative arc: breathless, overloaded clauses enact disorienting exposure on the ridge, whereas measured syntax in Section 4 mirrors restored warmth, shelter, and cognitive control.",
          "Ignore Section 4 and only quote the dramatic storm in Section 2.",
          "Count every syllable in the entire article and draw a bar chart.",
        ],
        answerIndex: 1,
        hints: [
          "Link sentence architecture across sections to the emotional/physical shift from blizzard exposure to shelter.",
          "Form mirrors feeling!",
        ],
        explanation:
          "Tracking how **syntactic density relaxes from Section 1–3 into Section 4** links sentence craft to whole-text structure — showing prose rhythm calming as physical safety is regained.",
      },
      {
        id: "lang-p1-reading-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "Read this food memoirist's description of an ultra-expensive minimalist restaurant:\n\n*\"After forty minutes of hushed liturgical waiting, a black-gloved acolyte arrived bearing a porcelain platter the size of a hubcap, at whose exact geometric centre shivered one solitary pea anointed with foam.\"*\n\nWhat semantic field does the writer deploy to satirise pretentious fine dining?",
        options: [
          "Heavy agricultural machinery",
          "Naval warfare and artillery",
          "Solemn religious ritual ('liturgical', 'acolyte', 'anointed') juxtaposed bathetically with 'hubcap' and 'one solitary pea'",
          "Primary-school playground games",
        ],
        answerIndex: 2,
        hints: [
          "Group 'liturgical', 'acolyte', and 'anointed' — what institution do those words belong to?",
          "Then look at the comic collision with 'hubcap' and 'one solitary pea'!",
        ],
        explanation:
          "Elevating waiters to 'acolyte[s]' performing 'liturgical' rites who 'anoint' a single 'shiver[ing]' pea on a 'hubcap'-sized plate mocks self-important culinary pomposity through mock-heroic religious satire.",
      },
      {
        id: "lang-p1-reading-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "evaluating-writers-viewpoint",
        question:
          "In a 14-mark whole-text evaluation question asking *\"How effectively does the writer convey the harshness of life on the island?\"*, which paragraph structure best secures **Level 4 / Grade 9**?",
        options: [
          "Four short paragraphs that each name two techniques without quoting or explaining connotations.",
          "A personal anecdote about a rainy beach holiday you once took with your family.",
          "Three paragraphs summarizing every event on the island in chronological order without naming any writer's methods.",
          "Three to four PETAL paragraphs sampling Opening, Middle Pivot, and Ending — weaving 2–5 word micro-quotes, single-word connotative zoom, syntactic/structural craft, and nuanced tonal shifts.",
        ],
        answerIndex: 3,
        hints: [
          "Check the four pillars of top-band reading: whole-text range + micro-quotes + language/structure methods + nuanced viewpoint.",
          "Which option integrates all four via PETAL?",
        ],
        explanation:
          "Top-band evaluation requires **whole-text range** (beginning, middle, end), **embedded micro-evidence**, **dual lexical + syntactic/structural craft**, and **sustained focus on viewpoint**.",
      },
      {
        id: "lang-p1-reading-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-inference",
        question:
          "Read this closing line from an interview with a retired lighthouse keeper:\n\n*\"He still wakes every night at two minutes to midnight, reaches for a brass logbook that has been in the maritime museum since 2008, and listens to the silent radiator.\"*\n\nWhat poignant subtext does this final detail leave with the reader?",
        options: [
          "Decades of solitary duty have permanently etched themselves into his body clock, leaving a lingering phantom ache of displacement and lost purpose in retirement.",
          "He plans to break into the maritime museum to steal back his brass logbook.",
          "His apartment radiator is broken and needs an emergency plumber at midnight.",
          "He never enjoyed working in the lighthouse and sleeps peacefully until noon.",
        ],
        answerIndex: 0,
        hints: [
          "Consider the automatic muscle memory ('wakes every night at two minutes to midnight, reaches for…') paired with the absent logbook and 'silent radiator'.",
          "Think of a 'phantom limb' of vocation and solitude.",
        ],
        explanation:
          "Reaching instinctively in the dark for a logbook archived years ago and listening to a 'silent radiator' (in place of ocean/foghorn) poignantly conveys bodily habit, bereavement of vocation, and quiet loneliness.",
      },
    ],
  },
];
