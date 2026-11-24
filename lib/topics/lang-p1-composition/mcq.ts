import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Descriptive Craft, Sensory Zoom & Narrative Architecture
  // =========================================================================
  {
    id: "lang-p1-composition-m1",
    title: "Paper 1B MCQ 1 — Descriptive Zoom & Tight Narrative Craft",
    questions: [
      {
        id: "lang-p1-composition-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "In the **ZOOM-5** planning framework for OxfordAQA Paper 1B descriptive tasks, why should you avoid inventing a dramatic car chase or bank robbery in Paragraph 2?",
        options: [
          "Descriptive tasks assess atmospheric immersion, camera-lens focus, and multi-sensory detail — turning description into fast-paced plot bloat sacrifices setting craft and rushes into 'and then…' summary.",
          "OxfordAQA's descriptive mark scheme prohibits dynamic action verbs altogether, requiring candidates to build every sentence exclusively from static linking verbs and adjectives.",
          "Descriptive Paper 1B compositions must be formatted strictly as detached, bulleted theatrical stage directions rather than continuous paragraphs of literary prose.",
          "Examiners deduct AO5 marks whenever a descriptive composition mentions human figures, footsteps, or facial expressions, since description must depict empty landscapes alone.",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish the core purpose of a *descriptive* task (panning a sensory camera across space/atmosphere) from an action thriller.",
          "What happens to sensory depth when a candidate tries to cram high-speed plot events into 45 minutes?",
        ],
        explanation:
          "Pure description thrives on **slowed time and spatial camera control**; sliding into action-thriller plot collapses sensory texture into flat narrative summary.",
      },
      {
        id: "lang-p1-composition-m1-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "Which draft sentence best demonstrates Grade-9 **show-don't-tell** for conveying oppressive summer heat in an exam hall?",
        options: [
          "It was boiling hot inside the exam hall and every single student felt really sweaty and uncomfortable.",
          "Ceiling fans stirred warm soup overhead while my forearm peeled off the varnished desk with a soft, tacky rip that lifted the corner of Question 3.",
          "The temperature was thirty-four degrees Celsius, which was much too warm for concentrating.",
          "The sun shone as bright and hot as a blazing fireball in the blue sky outside.",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate abstract telling ('uncomfortable', 'too warm') and dead similes ('blazing fireball').",
          "Look for tactile, auditory, and metaphorical micro-detail that lets the reader *feel* humidity physically.",
        ],
        explanation:
          "Metaphorising stagnant air as 'warm soup' and zooming onto skin peeling off varnish with a 'soft, tacky rip' engages tactile and auditory senses without ever naming 'hot' or 'sweaty'.",
      },
      {
        id: "lang-p1-composition-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "Which pair of sensory terms refers respectively to **smell** and **touch/texture**?",
        options: [
          "Auditory and visual",
          "Gustatory and kinetic",
          "Olfactory and tactile",
          "Chromatic and sonic",
        ],
        answerIndex: 2,
        hints: [
          "Recall the Latin roots: *olfact-* (smelling) and *tact-* (touching, as in *contact*).",
        ],
        explanation:
          "**Olfactory** imagery targets smell (ozone, damp wool, roasted cumin) and **tactile** imagery targets touch, texture, and temperature.",
      },
      {
        id: "lang-p1-composition-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "Compare two descriptive openings for *Describe a coastal harbour before a storm*:\n- **Draft 1:** *\"Grey clouds gathered like bruised knuckles above the breakwater, pressing a metallic hush down onto the slack, oil-slicked moorings.\"*\n- **Draft 2:** *\"Angry clouds were like lions and the boats danced like ballerinas while the sea shone like a mirror under lightning like fireworks.\"*\n\nWhy does Draft 1 outscore Draft 2?",
        options: [
          "Draft 1 strips away all figurative comparison and personification completely, relying on bare literal meteorology that examiners prefer over metaphorical craft in Section B.",
          "Draft 2 actually outscores Draft 1 on AO5 because packing four distinct similes into a single sentence proves maximum figurative ambition under the OxfordAQA checklist.",
          "Draft 1 commands higher AO6 accuracy by sustaining futuristic predictive tense throughout, whereas Draft 2 weakens narrative immediacy by drifting into simple past tense.",
          "Draft 1 sustains one cohesive atmospheric mood of impending threat ('bruised knuckles', 'pressing', 'metallic hush'), whereas Draft 2 scrambles tone with four clashing, incoherent similes.",
        ],
        answerIndex: 3,
        hints: [
          "Picture lions + ballerinas + mirrors + fireworks all colliding inside 22 words — what happens to atmosphere?",
          "Grade-9 imagery maintains **tonal coherence** rather than checklist-stuffing incompatible similes.",
        ],
        explanation:
          "Sustaining one unified mood of menacing pressure ('bruised knuckles', 'pressing') builds authentic atmosphere; piling lions, ballerinas, and fireworks together creates tonal whiplash.",
      },
      {
        id: "lang-p1-composition-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "Why do senior IGCSE examiners strongly advise **against** ending a 45-minute narrative with *\"…and then my alarm clock rang and I realised it had all been a dream\"*?",
        options: [
          "It retroactively erases every emotional stake built across the story, substituting the oldest cliché in school fiction for genuine psychological resolution.",
          "Mentioning domestic objects such as alarm clocks breaks historical plausibility because OxfordAQA Paper 1B narratives must be set in the nineteenth century.",
          "First-person narrative protagonists are barred from describing sleep or morning routines in IGCSE fiction because unconscious states violate realistic viewpoint.",
          "OxfordAQA's narrative mark scheme reserves Level 4 exclusively for stories that conclude with an unresolved physical cliffhanger or sudden dramatic catastrophe.",
        ],
        answerIndex: 0,
        hints: [
          "Ask how a reader feels when told that four pages of tension never actually mattered.",
          "Contrast that cheap reset button with a **transformed cyclical motif**.",
        ],
        explanation:
          "'It was all a dream' invalidates the story's emotional stakes and signals an unplanned ending; examiners reward earned psychological resolution.",
      },
      {
        id: "lang-p1-composition-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "Under the **Rule of One** for a 45-minute (500–650 word) narrative composition, which story plan has the tightest **Grade-9 scope**?",
        options: [
          "Three childhood friends grow up over forty years across London, Tokyo, and New York before reuniting at a wedding.",
          "A violinist waits ten minutes in the wings holding her grandfather's rosined bow, flashes back briefly to their final lesson, and steps onto the stage.",
          "A detective investigates four separate bank heists, survives a helicopter crash, and unmasks his twin brother.",
          "An astronaut crash-lands on Mars, builds a colony over six winters, and fights alien predators.",
        ],
        answerIndex: 1,
        hints: [
          "Check real-time duration (≤15 minutes), cast size (1–2 characters), setting count (1–2 spaces), and motif object (*rosined bow*).",
          "Eliminate multi-decade sagas and Hollywood blockbusters.",
        ],
        explanation:
          "Compressing real time to **ten minutes backstage** with **one motif object** (*grandfather's bow*) and **one brief analepsis** leaves abundant room for sensory craft and interiority.",
      },
      {
        id: "lang-p1-composition-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "When shifting smoothly from a past-simple narrative scene (*\"I stood on the platform…\"*) backward into **analepsis (flashback)**, which verb tense cleanly signals the jump into earlier time?",
        options: [
          "Simple future tense ('Three winters earlier, she will press the brass key into my palm…') to foreshadow memory",
          "Present continuous ('Three winters earlier, she is pressing the brass key into my palm…') to freeze the action",
          "Past perfect ('Three winters earlier, she had pressed the brass key into my palm…') before easing into the memory",
          "Imperative command ('Three winters earlier, press the brass key firmly into my palm!') to address the narrator",
        ],
        answerIndex: 2,
        hints: [
          "In English grammar, which tense represents 'the past before the past' (`had + past participle`)?",
          "Using it on the entry line prevents confusing the reader about chronology.",
        ],
        explanation:
          "Signalling the flashback threshold with **past perfect** (*'had pressed'*) anchors chronology cleanly so the examiner never mistakes your flashback for accidental tense confusion.",
      },
      {
        id: "lang-p1-composition-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Identify which of these four sentences contains an illegal **comma splice**:",
        options: [
          "Shivering beneath the woollen blanket, I listened for footsteps on the gravel.",
          "Outside, sleet needles rattled the skylight; inside, the kettle began to hum.",
          "Only one object remained on the mantlepiece: a stopped brass carriage clock.",
          "The station clock struck midnight, nobody stepped off the final carriage.",
        ],
        answerIndex: 3,
        hints: [
          "Test each side of every comma: if **both** sides could stand alone as complete sentences with no conjunction between them, it is a comma splice!",
          "Check *'The station clock struck midnight'* + *'nobody stepped off the final carriage'*.",
        ],
        explanation:
          "*'The station clock struck midnight'* and *'nobody stepped off the final carriage'* are two complete independent clauses fused illegally by a bare comma.",
      },
      {
        id: "lang-p1-composition-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Which sentence uses a **colon (`:`)** with 100% grammatical and stylistic accuracy?",
        options: [
          "Every drawer in the study pointed to the same inescapable conclusion: he had left before dawn.",
          "Walking through the forest I noticed: pine cones, damp moss, and broken twigs.",
          "My favourite outdoor activities are: kayaking, bouldering, and winter camping.",
          "Although the rain was falling heavily: we decided to continue along the cliff path.",
        ],
        answerIndex: 0,
        hints: [
          "Rule: in prose, the words **to the left of a colon** must form a **grammatically complete standalone clause**.",
          "Never drop a colon directly after a transitive verb ('noticed:'), copula ('are:'), or dependent 'Although…' fragment!",
        ],
        explanation:
          "*'Every drawer in the study pointed to the same inescapable conclusion'* is a complete independent clause, allowing the colon to unveil *'he had left before dawn'* with dramatic authority.",
      },
      {
        id: "lang-p1-composition-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-argument-architecture",
        question:
          "On a Paper 1B discursive prompt (*\"'Modern convenience has made us less resilient.' Discuss.\"*), what is the strongest strategic move in your **counter-argument paragraph**?",
        options: [
          "Exclude all mention of opposing perspectives throughout the essay so that your thesis projects unwavering certainty and never risks giving credibility to rival viewpoints.",
          "Steelman the strongest opposing point fairly ('Admittedly, labour-saving medicine and heating have liberated millions from preventable hardship…') before pivoting to show how frictionless comfort can still erode everyday patience.",
          "Dismiss anyone who defends modern convenience as complacent and intellectually lazy, using blunt personal sarcasm to expose the weakness of opposing arguments immediately.",
          "Anchor your rebuttal with an invented pseudo-exact figure — such as '98.6% of Oxford doctors proved yesterday that smartphones shrink willpower' — to supply instant statistical proof.",
        ],
        answerIndex: 1,
        hints: [
          "Compare mocking a weak caricature (*strawman*) vs honouring the strongest counter-case (*steelman*) before refuting on deeper principle.",
          "Never fabricate implausible survey numbers!",
        ],
        explanation:
          "**Steelmanning** genuine benefits of modern progress before pivoting via *; nevertheless / yet* demonstrates intellectual fairness and secures top-band discursive marks.",
      },
      {
        id: "lang-p1-composition-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ambitious-register-proofreading",
        question:
          "Which sentence uses **`its` / `it's`** and **`affect` / `effect`** completely accurately?",
        options: [
          "It's clear that coastal erosion has severely effected the harbour and damaged it's sea-wall.",
          "Its clear that coastal erosion has severely affected the harbour and damaged it's sea-wall.",
          "It's clear that coastal erosion has severely affected the harbour and damaged its sea-wall.",
          "Its clear that coastal erosion has severely effected the harbour and damaged its sea-wall.",
        ],
        answerIndex: 2,
        hints: [
          "First slot means *'It is clear'* (`It's`); verb slot means *'influenced/impacted'* (`affected`); possessive slot means *'belonging to it'* (`its`, zero apostrophe).",
          "Match all three slots carefully!",
        ],
        explanation:
          "**It's** (= *It is*), **affected** (verb = *impacted*), and **its** (possessive determiner without apostrophe) is the only error-free combination.",
      },
      {
        id: "lang-p1-composition-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "A student replaces *\"The tired man walked slowly across the yard\"* with *\"The lugubrious, somnolent, indefatigable gentleman perambulated languorously across the quadrangle.\"* Why does this edit **backfire**?",
        options: [
          "Quadrupling obscure adjectives creates unnatural 'thesaurus syndrome' and introduces a blatant contradiction ('somnolent' = sleepy vs 'indefatigable' = tireless).",
          "OxfordAQA's AO6 vocabulary guidelines penalise any descriptive word exceeding three syllables, favouring short Anglo-Saxon terms across all narrative writing.",
          "Shifting to third-person 'gentleman' breaks Paper 1 Section B conventions, since top-band narrative descriptions must be written exclusively in first person.",
          "Replacing concrete settings like 'yard' with architectural nouns such as 'quadrangle' alters the prompt's literal location and triggers an automatic mark cap.",
        ],
        answerIndex: 0,
        hints: [
          "Check the meanings of 'somnolent' (sleepy/drowsy) right next to 'indefatigable' (incapable of tiring)!",
          "Also compare artificial purple prose against one muscular verb like *trudged* or *shuffled*.",
        ],
        explanation:
          "Blindly stuffing thesaurus words produces self-contradictory **malapropism** (*sleepy* + *tireless*) and stilted purple prose; exact verbs (*shuffled, trudged*) always beat bloated adjective chains.",
      },
      {
        id: "lang-p1-composition-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "How should direct speech be punctuated and paragraphed in a Grade-9 narrative?",
        options: [
          "Put all speakers inside one giant paragraph and place commas outside speech marks.",
          "Never use speech marks; write speaker names in capital letters like a playscript.",
          "End every line of dialogue with three exclamation marks to show emotion.",
          "Place closing commas/question marks inside the closing speech marks, and start a fresh paragraph every time a new speaker speaks.",
        ],
        answerIndex: 3,
        hints: [
          "Recall the **TiPToP** paragraph rule (**P**erson / new speaker = new line).",
          "Check where terminal commas and question marks sit relative to closing quotation marks.",
        ],
        explanation:
          "Standard literary convention places terminal dialogue punctuation **inside** closing quotation marks (*\"Don't look back,\" he murmured.*) and begins a **new paragraph for each change of speaker**.",
      },
      {
        id: "lang-p1-composition-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "Paragraph 1 of a story introduces a pocket-watch whose glass cracked the afternoon the narrator failed to visit her hospitalised grandfather; in the final paragraph, after reconciling with her estranged aunt, she winds that same cracked watch and hears it tick steadily. Why does this **motif** work so powerfully?",
        options: [
          "It introduces a reassuring magical-realist twist, implying that reconciling with her estranged aunt caused the shattered watch glass to mend itself spontaneously.",
          "It provides a convenient structural shortcut, allowing the candidate to reuse opening paragraphs without having to describe a new physical setting or atmosphere.",
          "It reveals a practical commercial motive beneath the reunion, hinting that the narrator intends to restore and auction the heirloom pocket-watch for financial gain.",
          "Keeping the physical crack intact while restoring the movement symbolises mature emotional healing: past regret cannot be erased, yet frozen grief can resume living motion.",
        ],
        answerIndex: 3,
        hints: [
          "Notice what stays the same (*cracked glass*) and what changes (*wound up and ticking steadily again*).",
          "Why is keeping the crack far more realistic and poignant than magically fixing the glass?",
        ],
        explanation:
          "A nuanced **transformed motif** respects psychological realism: the scar (*cracked glass*) remains, but winding the mechanism symbolises moving forward out of paralysed guilt.",
      },
      {
        id: "lang-p1-composition-m1-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ambitious-register-proofreading",
        question:
          "Given ~45 minutes for OxfordAQA Paper 1 Section B, which time allocation best protects structure, quality, and SPaG accuracy?",
        options: [
          "0 minutes planning + 45 minutes frantic non-stop writing right up to 'pens down'",
          "25 minutes planning a mind-map + 20 minutes rushing two paragraphs",
          "5 minutes 5-box planning + 35 minutes deliberate drafting (450–650 words) + 5 minutes PACE proofreading audit",
          "40 minutes writing in rough pencil + 5 minutes erasing everything",
        ],
        answerIndex: 2,
        hints: [
          "Balance upfront structural design, calm paragraph craft, and a dedicated SPaG error hunt at the close.",
        ],
        explanation:
          "**5 min plan + 35 min draft + 5 min PACE audit** guarantees both cohesive architecture (cyclical ending planned upfront) and top-band technical accuracy.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Syntax Cadence, Punctuation Mastery & SPaG Surgery
  // =========================================================================
  {
    id: "lang-p1-composition-m2",
    title: "Paper 1B MCQ 2 — Syntax Rhythm, Punctuation & SPaG",
    questions: [
      {
        id: "lang-p1-composition-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Read this descriptive sentence:\n\n*\"Clutching the salt-rusted rail, I watched the ferry vanish into sea-fret.\"*\n\nWhat grammatical structure opens this sentence (*\"Clutching the salt-rusted rail,\"*) to avoid starting monotonously with *'I'*?",
        options: [
          "A fronted present-participial phrase (`-ing` opener)",
          "A passive future-perfect auxiliary clause (`will be`)",
          "An interrogative minor fragment lacking a main verb",
          "A comma splice fusing two full independent clauses",
        ],
        answerIndex: 0,
        hints: [
          "Look at the first word *'Clutching'* (`verb + -ing`) modifying the subject *'I'*.",
          "Fronting participial phrases is one of the cleanest ways to vary sentence openings.",
        ],
        explanation:
          "*'Clutching the salt-rusted rail,'* is a **fronted present-participial phrase** anchoring physical gesture before the main subject *'I'* enters.",
      },
      {
        id: "lang-p1-composition-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Watch for **dangling modifiers**! Which of these fronted participial sentences contains a comical grammatical blunder?",
        options: [
          "Sprint-breathless from the hill, Maya fumbled for the rusted gate-latch.",
          "Dripping rainwater onto the Persian rug, the antique grandfather clock chimed midnight.",
          "Wrapped in faded oilskin, the fisherman coiled his lines in silence.",
          "Trembling slightly in the draught, she held the match to the wick.",
        ],
        answerIndex: 1,
        hints: [
          "Rule: an opening `-ing` phrase MUST grammatically describe the **very first noun/subject** right after the comma!",
          "Ask which subject could not plausibly have just walked in from the rain dripping onto a rug.",
        ],
        explanation:
          "Because *'the antique grandfather clock'* immediately follows *'Dripping rainwater onto the Persian rug,'*, the grammar accidentally claims the indoor clock walked in soaked — a **dangling participle**!",
      },
      {
        id: "lang-p1-composition-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Which sentence deploys a **semicolon (`;`)** accurately to balance two contrasting independent clauses?",
        options: [
          "Although the library looked deserted from the street; three lamps burned inside.",
          "Inside the attic trunk lay; yellowed postcards, brass buttons, and dried lavender.",
          "By day the alley belonged to delivery vans and shouting porters; by midnight only stray cats patrolled the cobbles.",
          "Running as fast as my aching lungs allowed; toward the closing barrier.",
        ],
        answerIndex: 2,
        hints: [
          "Both sides of a clause-joining semicolon MUST be able to stand alone as complete sentences.",
          "Eliminate dependent 'Although…' clauses, 'lay;' before a list, and verbless fragments!",
        ],
        explanation:
          "Both *'By day the alley belonged…'* and *'by midnight only stray cats patrolled…'* are complete independent clauses balanced in temporal antithesis across `;`.",
      },
      {
        id: "lang-p1-composition-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Beyond joining two independent clauses, what is the **second legitimate high-level use of semicolons** in descriptive or discursive prose?",
        options: [
          "Replacing every question mark in rhetorical questions",
          "Putting a semicolon right after 'Dear Sir;' at the start of a letter",
          "Ending paragraphs instead of full stops",
          "Separating complex items in a 'super-list' when the individual items already contain internal commas",
        ],
        answerIndex: 3,
        hints: [
          "Imagine listing three places that each contain commas: *'stalls piled with bruised figs, dates, and walnuts; braziers spitting lamb fat, cumin, and smoke; and…'*.",
          "Without semicolons acting as 'super-commas', the list items blur together!",
        ],
        explanation:
          "Semicolons act as **super-dividers** inside multi-part lists whose items already contain internal commas, keeping complex descriptive or discursive lists crystal clear.",
      },
      {
        id: "lang-p1-composition-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "Spot the sentence with **100% accurate spelling** across four notorious IGCSE spelling traps:",
        options: [
          "It is definately neccessary to seperate priviledge from merit in a fair society.",
          "It is definitely neccessary to separate priviledge from merit in a fair society.",
          "It is definately necessary to seperate privilege from merit in a fair society.",
          "It is definitely necessary to separate privilege from merit in a fair society.",
        ],
        answerIndex: 3,
        hints: [
          "Check *de-**finite**-ly* (root 'finite', zero 'a') and *ne-**c**-e-**ss**-ary* (1 collar, 2 sleeves).",
          "Then verify *se-**par**-ate* ('a rat' inside) and *privi-**lege*** (zero 'd').",
        ],
        explanation:
          "**definitely** (root *finite*), **necessary** (one *c*, two *s*'s), **separate** (*par*), and **privilege** (no *d*) are among the highest-yield SPaG spellings to lock down.",
      },
      {
        id: "lang-p1-composition-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "Read this narrative extract:\n\n*\"Marcus eased the rusted bolt sideways and nudged the boathouse door ajar. Moonlight spills across the floorboards as a moored skiff knocks softly against the pilings.\"*\n\nWhich error must be fixed during your **PACE** audit?",
        options: [
          "Missing terminal question mark at the close of sentence two because 'as' introduces an implied interrogative clause",
          "Unintended tense drift — shifting mid-scene from past simple ('eased', 'nudged') into present simple ('spills', 'knocks')",
          "Grammatical comma splice in sentence one where 'and' fails to coordinate the two finite verbs ('eased' and 'nudged')",
          "Orthographic compounding error in 'Moonlight' and 'floorboards', both of which require hyphenation in British English",
        ],
        answerIndex: 1,
        hints: [
          "Compare the tense of Sentence 1 (*eased, nudged*) with Sentence 2 (*spills, knocks*).",
          "In the **A** step of PACE (Agreement & Tense), check that narrative tense never drifts accidentally.",
        ],
        explanation:
          "Sliding unconsciously from past simple (*eased, nudged*) into present simple (*spills, knocks*) is **tense drift** — restore *spilled* and *knocked* for consistent control.",
      },
      {
        id: "lang-p1-composition-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "Which upgrade replaces the weak verb + intensifier in *\"The candle flame shone **very unsteadily** in the draught\"* with the sharpest single precision verb?",
        options: [
          "The candle flame blazed steadily in the draught.",
          "The candle flame was really wobbly in the draught.",
          "The candle flame guttered in the draught.",
          "The candle flame detonated in the draught.",
        ],
        answerIndex: 2,
        hints: [
          "Look for the exact English verb meaning *'to flicker low and unevenly on the verge of going out as wax melts'* (8 letters, starts with 'g').",
          "Eliminate 'blazed steadily' (opposite meaning) and 'detonated' (exploded).",
        ],
        explanation:
          "**Guttered** captures a dying candle flame sputtering low in a draught in a single exact verb — eliminating clunky *'shone very unsteadily'*.",
      },
      {
        id: "lang-p1-composition-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "Which phrase shows accurate **plural possessive apostrophe** placement when referring to the shared locker room belonging to several **players**?",
        options: [
          "the player's locker room",
          "the players locker room",
          "the player's' locker room",
          "the players' locker room",
        ],
        answerIndex: 3,
        hints: [
          "First write the plural noun (*players*); because regular plural already ends in *-s*, where does the possessive apostrophe sit?",
          "Contrast singular possessive (*one player's room*) against plural possessive (*several players*).",
        ],
        explanation:
          "For a regular plural noun ending in *-s* (*players*), the possessive apostrophe sits **after** the *s*: **the players' locker room** (whereas *the women's room* uses `'s` because *women* doesn't end in *s*).",
      },
      {
        id: "lang-p1-composition-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Analyse the rhythmic craft of this two-sentence descriptive sequence:\n\n*\"Down the stairwell poured coats and satchels and damp umbrellas and shouted farewells as four hundred pupils surged toward the open gates. One desk remained occupied.\"*\n\nWhy does the four-word second sentence land with such quiet emotional weight?",
        options: [
          "Syntactic contrast: front-loading an exuberant 22-word polysyndetic wave of collective motion makes the abrupt, unadorned four-word sentence isolate solitude starkly.",
          "Phonetic sound-imitation: the verb 'remained' and adjective 'occupied' deploy harsh onomatopoeic consonants that mimic the clang of school dismissal bells down the hall.",
          "Grammatical omission: stripping every concrete noun out of the opening twenty-two words forces the reader to wait until 'desk' appears for a single tangible visual anchor.",
          "Rule-breaking shock: OxfordAQA guidelines normally prohibit declarative sentences shorter than six words, so defying that ceiling creates instant surprise for the marker.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the energy, length, and crowd size of Sentence 1 (*four hundred pupils*, repeated *'and'*) against Sentence 2 (*One desk*).",
          "Remember: short sentences earn their power through **contrast with the preceding wave**.",
        ],
        explanation:
          "Inverting word order (*'Down the stairwell poured…'*) and stretching Sentence 1 with **polysyndeton** builds kinetic crowd momentum so the sudden stillness of *'One desk remained occupied.'* lands with poignant precision.",
      },
      {
        id: "lang-p1-composition-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "In **Box 3 (Micro-Object Close-Up)** of a ZOOM-5 description of an abandoned theatre, which sentence zooms the camera lens tightest?",
        options: [
          "From the gilded upper balcony all the way down to the cavernous orchestra pit, the entire darkened auditorium stretched wide beneath a sagging plaster dome.",
          "Pinned beneath Seat D-14, a faded velvet programme from 1998 curled at the edges where silverfish had scalloped lacy crescents along the cast list.",
          "Outside across the rain-slicked city centre, double-decker buses and black cabs honked impatiently along six crowded avenues leading past the main entrance.",
          "Over the past century, dozens of touring orchestras and celebrated repertory companies had staged sold-out seasons inside this historic civic landmark.",
        ],
        answerIndex: 1,
        hints: [
          "Imagine switching to a macro lens just inches from the floor.",
          "Which option isolates one tiny forgotten item in crisp visual/tactile detail?",
        ],
        explanation:
          "Isolating a single 1998 programme under Seat D-14 down to silverfish nibbles ('scalloped lacy crescents') executes true **macro micro-zoom**, grounding decay in tangible specificity.",
      },
      {
        id: "lang-p1-composition-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "Read these two versions of narrative dialogue:\n- **Draft A:** *\"'I am really angry that you forgot my birthday again, Dad,' I shouted. 'I am sorry I work too much and neglect your feelings,' he replied sadly.\"*\n- **Draft B:** *\"Dad set the garage-station carnations beside the cold lasagne. 'Traffic on the ring-road,' he said to the kettle.\"*\n\nWhy does Draft B read like top-band literary fiction?",
        options: [
          "Draft B uses subtext and oblique physical props ('garage-station carnations', 'cold lasagne', speaking 'to the kettle' to avoid eye contact) so the reader deduces guilt and hurt without wooden on-the-nose speeches.",
          "Draft A actually demonstrates stronger characterisation because authentic dialogue always requires speakers to state their deepest psychological motives and resentments explicitly aloud.",
          "Draft B achieves calm emotional restraint by showing that the family has completely resolved any birthday tension and shares light-hearted everyday conversation about commuter traffic.",
          "Draft B earns higher AO6 accuracy by omitting quotation marks, reporting clauses, and sentence-final punctuation, proving that minimalist dialogue strips away standard grammar conventions.",
        ],
        answerIndex: 0,
        hints: [
          "Think about what cheap petrol-station flowers, cold dinner, and refusing to meet your daughter's eyes (*'said to the kettle'*) tell us silently.",
          "Subtext beats 'on-the-nose' soap-opera exposition every time!",
        ],
        explanation:
          "Real people rarely narrate their inner motives directly; oblique props (*garage-station carnations*, *cold lasagne*) and averted gaze (*'to the kettle'*) pack maximum emotional truth into minimal words.",
      },
      {
        id: "lang-p1-composition-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-argument-architecture",
        question:
          "Which opening sentence best launches a Grade-9 **discursive essay** on *'Should zoos exist in the twenty-first century?'*?",
        options: [
          "In this essay I am going to talk about the pros and cons of zoos and then give my personal opinion at the end.",
          "Zoos are 100% cruel prisons and anyone who visits a zoo hates animals!!",
          "Few modern institutions embody a sharper moral paradox than the contemporary zoo: an ark built to rescue endangered species by confining them behind reinforced glass.",
          "Last Tuesday my cousin went to a zoo and bought an ice cream near the penguins.",
        ],
        answerIndex: 2,
        hints: [
          "Cut meta-commentary ('In this essay I am going to…'), angry rants, and trivial anecdotes.",
          "Look for an authoritative broadsheet hook using **colon spotlighting** and **conceptual paradox** (*ark* vs *glass confinement*).",
        ],
        explanation:
          "Framing the topic's central **moral paradox** immediately via a colon apposition (*'an ark built to rescue… by confining them'*) establishes mature discursive command from Line 1.",
      },
      {
        id: "lang-p1-composition-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-argument-architecture",
        question:
          "In discursive prose, why are **modal verbs and qualifiers** (*may, tends to, often, risks, seldom*) superior to absolute sweeping claims (*always, everyone, never, every teenager*)?",
        options: [
          "They expand sentence length effortlessly with extra auxiliary words, helping candidates hit higher word counts under exam time pressure.",
          "They demonstrate nuanced intellectual precision — insulated against obvious exceptions that instantly discredit absolute generalisations.",
          "They allow a candidate to hedge every claim ambiguously so the examiner cannot tell whether the essay holds any underlying viewpoint at all.",
          "OxfordAQA's AO6 grammar rubric mandates that every discursive sentence include at least one modal verb to qualify for Level 4 punctuation.",
        ],
        answerIndex: 1,
        hints: [
          "If you claim *'Every teenager hates reading'*, one single bookish teenager disproves your whole sentence!",
          "Compare that fragility with *'Algorithmic feeds risk crowding out sustained deep reading'*.",
        ],
        explanation:
          "Calibrated **epistemic modality** (*risks, tends to, seldom*) makes claims logically defensible and gives your prose calm, scholarly authority.",
      },
      {
        id: "lang-p1-composition-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Read this sentence:\n\n*\"The headmaster praised resilience, integrity, and punctuality — virtues noticeably absent from his own forty-minute late arrival.\"* \n\nHow does the **single em-dash (`—`)** operate stylistically at the end of this clause?",
        options: [
          "It introduces a neutral encyclopaedic gloss that defines the dictionary meaning of 'punctuality' for readers unfamiliar with the term.",
          "It substitutes casually for a missing question mark at the close of an implied rhetorical interrogation directed at the headmaster.",
          "It acts as a satirical turn / sting-in-the-tail hinge, pausing briefly before undercutting lofty official rhetoric with dry ironic observation.",
          "It creates a non-standard punctuation splice because a single em-dash may never appear in formal prose without a second closing partner.",
        ],
        answerIndex: 2,
        hints: [
          "Notice the formal tricolon before `—` (*resilience, integrity, and punctuality*) vs the dryly devastating exposure after `—`.",
          "A single trailing em-dash is classic craft for an ironic twist or pointed apposition!",
        ],
        explanation:
          "A **single em-dash** before a trailing appositional phrase (*'— virtues noticeably absent…'*) creates a crisp comedic/satirical beat that punctures hypocrisy.",
      },
      {
        id: "lang-p1-composition-m2-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ambitious-register-proofreading",
        question:
          "In the **TiPToP** paragraphing mnemonic, when MUST you start a new paragraph?",
        options: [
          "Mechanically after every fifth sentence across the entire composition, regardless of whether topic or speaker changes",
          "Strictly once a paragraph fills half an exam booklet page, keeping every block visually identical in printed height",
          "Only at the midpoint between your opening hook and closing summary, dividing the essay into two symmetrical halves",
          "Whenever Time, Place, Topic, or Person (speaker / camera focus) shifts — or to isolate a deliberate one-line fulcrum",
        ],
        answerIndex: 3,
        hints: [
          "Unpack **Ti** - **P** - **To** - **P**!",
        ],
        explanation:
          "**TiPToP** (**Ti**me, **P**lace, **To**pic, **P**erson/speaker) governs purposeful paragraphing alongside intentional single-sentence paragraphs for rhythmic emphasis.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Discursive Mastery, Register Control & Examiner Polish
  // =========================================================================
  {
    id: "lang-p1-composition-m3",
    title: "Paper 1B MCQ 3 — Discursive Balance, Register & Polish",
    questions: [
      {
        id: "lang-p1-composition-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "discursive-argument-architecture",
        question:
          "What is the rhetorical term for **posing a pointed question and immediately answering it yourself** (e.g. *\"Does constant connectivity deepen empathy? Seldom: outrage travels six times faster than nuance.\"* )?",
        options: [
          "Hypophora",
          "Pathetic fallacy",
          "Comma splice",
          "Analepsis",
        ],
        answerIndex: 0,
        hints: [
          "Unlike an unanswered *rhetorical question*, this 9-letter Greek device supplies the immediate answer right after `?`.",
        ],
        explanation:
          "**Hypophora** raises a framing question and answers it concisely, steering reader logic far more forcefully than chaining unanswered rhetorical questions.",
      },
      {
        id: "lang-p1-composition-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-argument-architecture",
        question:
          "Compare two discursive transitions introducing a rebuttal after a concession:\n- **Draft A:** *\"On the other hand, however, having said that, I disagree with those people because they are wrong.\"*\n- **Draft B:** *\"Notwithstanding these short-term gains in convenience, outsourcing every friction to algorithms quietly atrophies independent judgement.\"*\n\nWhy does Draft B score top band?",
        options: [
          "Draft A actually achieves clearer signposting because stacking three consecutive transitional markers ('On the other hand, however, having said that') emphasises confident argumentative energy.",
          "Draft B uses a crisp subordinative concession ('Notwithstanding these short-term gains…') to bridge seamlessly from acknowledged benefit to deeper long-term cost without clumsy throat-clearing.",
          "Draft B maintains strict academic neutrality by refusing to advance any evaluative judgement on algorithmic convenience, leaving the reader to weigh both sides independently.",
          "Draft B establishes peer warmth by slipping into conversational slang and informal contractions, stripping away the formal register expected in broadsheet discursive essays.",
        ],
        answerIndex: 1,
        hints: [
          "Notice how *'Notwithstanding these short-term gains in convenience,'* looks backward at the previous paragraph AND pivots forward in one clean syntactic sweep.",
          "Draft A stacks redundant connectives ('On the other hand, however, having said that') plus tautology ('disagree… because they are wrong').",
        ],
        explanation:
          "Sophisticated **cohesive bridging** (*'Notwithstanding these short-term gains…'*) links paragraphs conceptually rather than bolting on clunky boilerplate.",
      },
      {
        id: "lang-p1-composition-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-argument-architecture",
        question:
          "Read this discursive closing sentence:\n\n*\"We have engineered pocket supercomputers capable of translating fifty languages in a blink; we have not yet engineered the patience to listen to a neighbour across a fence.\"*\n\nWhich syntactic craft device gives this conclusion its memorable punch?",
        options: [
          "Acoustic onomatopoeia and dense plosive alliteration mimicking the mechanical clicks of smartphones and suburban garden gates across both halves",
          "Direct second-person imperative commands ordering readers to abandon digital devices immediately and converse outdoors with neighbouring households",
          "Antithesis — parallel clauses ('We have engineered…; we have not yet engineered…') balanced across a semicolon to contrast technological triumph with human deficit",
          "Non-linear chronological analepsis looping back to an earlier childhood anecdote in order to contrast past rural harmony with modern urban isolation",
        ],
        answerIndex: 2,
        hints: [
          "Look at the symmetrical parallel grammar across the semicolon contrasting *global tech mastery* vs *local human listening*.",
          "What 10-letter Greek term names balanced syntactic opposition?",
        ],
        explanation:
          "**Antithesis** places contrasting ideas in parallel grammatical frames across a semicolon, landing a resonant broadsheet conclusion without preachy shouting.",
      },
      {
        id: "lang-p1-composition-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "Which compound modifier best elevates a description of **abandoned iron harbour chains** without slipping into purple prose?",
        options: [
          "very old rusty",
          "multitudinously cerulean",
          "super-duper ancient",
          "barnacle-crusted",
        ],
        answerIndex: 3,
        hints: [
          "Look for concrete, tactile maritime accuracy coined via a crisp hyphenated modifier.",
          "Eliminate weak 'very old', nonsensical 'cerulean' (sky-blue!), and colloquial 'super-duper'.",
        ],
        explanation:
          "**Barnacle-crusted** is concrete, tactile, and authentically maritime — delivering instant visual and textural precision in two hyphenated words.",
      },
      {
        id: "lang-p1-composition-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "In **Box 5 (Transformed Sky Return)** of a ZOOM-5 descriptive essay that opened at oppressive, brassy pre-monsoon noon, which ending creates the most cohesive **structural closure**?",
        options: [
          "Returning to the sky as the bruised purple cloud-bank finally splits, washing the dusty mango leaves in cool silver sheet-rain that releases petrichor from the baked earth.",
          "Jumping abruptly forward five years to a sunlit university campus in New York where the narrator celebrates winning an international journalism scholarship.",
          "Cutting off the final descriptive sentence mid-clause with an ellipsis to suggest realistically that the narrator's observation was cut short by time running out.",
          "Copying the opening paragraph's exact imagery and oppressive pre-monsoon heat word-for-word at the close so the atmosphere remains frozen in unbroken symmetry.",
        ],
        answerIndex: 0,
        hints: [
          "Box 1 established oppressive pre-storm heat overhead; Box 5 should return upward with **transformed weather/light** (release, dusk, or aftermath).",
          "Bonus sensory craft: *petrichor* (the earthy scent when rain hits dry ground)!",
        ],
        explanation:
          "Returning the camera upward as the monsoon finally breaks resolves Box 1's atmospheric tension through a **transformed cyclical frame**.",
      },
      {
        id: "lang-p1-composition-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "Why can isolating a **single-sentence paragraph** (e.g. *\"The envelope was already unsealed.\"* ) midway through a narrative boost your organisation mark?",
        options: [
          "It inflates the apparent paragraph tally on the page, persuading examiners that the candidate sustained greater structural development across a short timed response.",
          "Framed by white space between fuller paragraphs, it acts as a visual and rhythmic fulcrum — forcing the reader to pause on the exact moment of discovery or emotional shift.",
          "OxfordAQA's Paper 1 Section B mark scheme rewards uniform micro-paragraphing, encouraging writers to keep every paragraph throughout a narrative to one sentence.",
          "Placing a brief clause on its own line removes the grammatical requirement for standard terminal punctuation or cohesive linkage with the surrounding scene.",
        ],
        answerIndex: 1,
        hints: [
          "Notice that a one-line paragraph works *only* by contrast with full, well-developed paragraphs before and after it.",
          "Think of visual pacing on the page.",
        ],
        explanation:
          "Used **sparingly** (once per composition) at the pivot moment, a standalone single-sentence paragraph demonstrates conscious **paragraphing for effect**.",
      },
      {
        id: "lang-p1-composition-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "Spot the homophone error hidden inside this discursive sentence:\n\n*\"Principled leaders must listen to their conscious rather than chasing fleeting applause.\"*",
        options: [
          "'Principled' (adjective = ethical) should be replaced by the noun 'Principal'",
          "'their' (possessive determiner) should be replaced by the adverb 'there'",
          "'fleeting' (brief/passing) should be spelt 'fleating' in British English",
          "'conscious' (adjective = awake/aware) should be the moral noun 'conscience'",
        ],
        answerIndex: 3,
        hints: [
          "Look right after possessive *'their'* — grammar demands a **noun**, not an adjective meaning 'awake'.",
          "Recall the 10-letter moral noun spelt `con + science`.",
        ],
        explanation:
          "**Conscious** is an adjective meaning awake (*'fully conscious'*); the noun meaning inner moral sense is **conscience** (*con + science*).",
      },
      {
        id: "lang-p1-composition-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "Which sentence maintains **consistent formal discursive register** without jarring colloquialisms?",
        options: [
          "Fast fashion is low-key wrecking river ecosystems and companies seriously need to chill out.",
          "Honestly, fast fashion is a massive vibe-killer for the planet, ngl.",
          "Fast fashion totally sucks coz cheap clothes get chucked in landfill super quick.",
          "Disposable garment cycles externalise severe ecological costs onto river basins while training consumers to treat clothing as single-use packaging.",
        ],
        answerIndex: 3,
        hints: [
          "Eliminate slang and textspeak (*low-key, chill out, vibe-killer, ngl, sucks, coz, chucked*).",
          "Look for precise economic/ecological lexis (*externalise, disposable garment cycles*).",
        ],
        explanation:
          "Sustaining crisp, formal analytical register (*externalise, ecological costs, single-use packaging*) meets top-band audience/purpose expectations for discursive essays.",
      },
      {
        id: "lang-p1-composition-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "discursive-argument-architecture",
        question:
          "What is the logical flaw known as **strawmanning** in argumentative/discursive writing?",
        options: [
          "Distorting an opposing viewpoint into an absurd, exaggerated caricature that nobody actually holds, just so you can knock it down easily",
          "Sustaining an extended rural or agricultural metaphor across a discursive essay rather than anchoring paragraphs in urban civic examples",
          "Articulating the most compelling, intellectually fair version of a rival viewpoint before refuting its underlying premise in your rebuttal",
          "Organising a formal essay into five rigid, pre-planned paragraphs whose symmetrical length leaves zero room for spontaneous rhetorical shifts",
        ],
        answerIndex: 0,
        hints: [
          "Picture building a flimsy figure stuffed with straw instead of facing your real opponent (the opposite of *steelmanning*).",
          "Example: claiming advocates of public transport 'want everyone to ride donkeys in the mud'.",
        ],
        explanation:
          "**Strawmanning** caricatures the opposing view dishonestly, making the writer look insecure; **steelmanning** engages the strongest counter-case and dismantles it persuasively.",
      },
      {
        id: "lang-p1-composition-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "syntax-rhythm-punctuation",
        question:
          "Read this descriptive sentence:\n\n*\"Neither the stationmaster's whistle nor the hiss of steam could drown out the silence between my parents.\"*\n\nWhich correlative conjunction pair structures the subject — and why is *\"silence\"* amid *\"whistle\"* and *\"steam\"* effective?",
        options: [
          "'Either / or' — presenting two mutually exclusive railway sounds to confirm that the evening express has been abruptly cancelled",
          "'Neither / nor' — pairing acute industrial noise against emotional 'silence' to show interpersonal estrangement feels louder than machinery",
          "'Both / and' — combining two sensory phrases to suggest that the narrator's parents are arguing loudly above the crowded platform",
          "'Not only / but also' — escalating railway imagery to celebrate the dramatic power of vintage steam engineering along the concourse",
        ],
        answerIndex: 1,
        hints: [
          "Spot the correlative pair **Neither X nor Y** at the start of the clause.",
          "Then unpack the paradox of loud mechanical noises failing to 'drown out' heavy emotional silence.",
        ],
        explanation:
          "**Neither… nor…** gives poised syntactic control while paradoxically framing unspoken family tension ('silence') as more overpowering than industrial noise.",
      },
      {
        id: "lang-p1-composition-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyclical-nonlinear-structure",
        question:
          "Which narrative opening best executes **in medias res** rather than slow chronological throat-clearing?",
        options: [
          "My name is Liam, I am sixteen years old, and I want to tell you about an unforgettable Tuesday last November.",
          "Beep! Beep! My alarm rang at 7:00 a.m., so I brushed my teeth, ate cornflakes, and walked to the bus stop.",
          "Saltwater was already lapping over the bottom step of the cellar when the torch beam died.",
          "Once upon a time in a small coastal town there lived a family near a lighthouse.",
        ],
        answerIndex: 2,
        hints: [
          "Cut introductions ('My name is…'), morning alarm-clock routines, and fairy-tale formulas.",
          "Which line drops us straight into sensory urgency at the exact second jeopardy tightens?",
        ],
        explanation:
          "Plunging straight into rising water + dying light (*'Saltwater was already lapping… when the torch beam died.'*) establishes instant stakes, setting, and sensory peril.",
      },
      {
        id: "lang-p1-composition-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ambitious-register-proofreading",
        question:
          "During Step **E (Echoes & Cuts)** of the PACE 5-minute audit, you spot this sentence in your draft:\n\n*\"The dark corridor led into a dark hall where dark shadows stretched across the dark tiles.\"*\n\nWhat is the best surgical revision?",
        options: [
          "Substitute a single more emphatic synonym across every slot — replacing all four occurrences of 'dark' with 'pitch-black' so the gloomy tone stays completely uniform.",
          "Retain all four occurrences of 'dark' intact and defend the repetition in your margin plan as deliberate anaphora designed to emphasise claustrophobic architectural gloom.",
          "Keep one 'dark' or 'unlit' and differentiate the remaining textures precisely: e.g. 'The unlit corridor opened into a cavernous hall where ink-stained shadows stretched across slate tiles.'",
          "Delete the entire corridor sentence and its surrounding descriptive paragraph during proofreading, leaving a clean structural jump straight to the next dialogue exchange.",
        ],
        answerIndex: 2,
        hints: [
          "Accidental lexical echoing ('dark… dark… dark… dark') reveals rushed drafting rather than rhetorical craft.",
          "Replace redundant echoes with distinct spatial/visual precision (*unlit, cavernous, ink-stained, slate*).",
        ],
        explanation:
          "Eliminating accidental **lexical echoes** by differentiating light, scale, and material (*unlit, cavernous, ink-stained, slate*) instantly lifts vocabulary into top band.",
      },
      {
        id: "lang-p1-composition-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sensory-zoom-atmosphere",
        question:
          "What literary device blends two different sensory modalities together — such as describing a trumpet blast as *'a jagged scarlet cry'* or silence as *'velvet-cold'*?",
        options: [
          "Comma splice",
          "Malapropism",
          "Chronology",
          "Synaesthesia",
        ],
        answerIndex: 3,
        hints: [
          "Notice two separate sensory channels blended together: visual colour (*scarlet*) + sound (*cry*).",
          "Greek roots *syn-* (together) + *aisthesis* (sensation).",
        ],
        explanation:
          "**Synaesthesia** fuses two distinct senses (*scarlet* sight + *cry* sound) to create arresting, original descriptive imagery when used with restraint.",
      },
      {
        id: "lang-p1-composition-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-argument-architecture",
        question:
          "In a discursive conclusion on *'Does technology liberate or enslave us?'*, why is **reframing the binary** stronger than simply repeating Paragraph 1 word-for-word?",
        options: [
          "Repeating Paragraph 1 verbatim feels circular and stagnant; reframing the binary ('Tools neither liberate nor enslave on their own: they magnify the discipline — or distraction — of the hands that hold them') leaves the examiner with earned synthesis.",
          "Effective discursive conclusions avoid revisiting earlier ideas at all, introducing three brand-new technological subtopics in the final lines to broaden the essay's conceptual range before time expires.",
          "Ending with a modest personal apology ('Although I cannot definitively resolve this complex debate, both sides raise valid points') demonstrates balanced British restraint more reliably than any synthesis.",
          "Formal conclusions carry zero separate assessment weight under OxfordAQA's Paper 1B mark scheme, so ending immediately after the counter-argument paragraph saves time for proofreading earlier vocabulary.",
        ],
        answerIndex: 0,
        hints: [
          "The examiner's final impression sits right after your closing sentence!",
          "Transcending a simplistic *either/or* binary into conditional wisdom signals Grade-9 synthesis.",
        ],
        explanation:
          "A **synthesis conclusion** resolves the essay's tension on higher conceptual ground rather than rehashing earlier points mechanically.",
      },
      {
        id: "lang-p1-composition-m3-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ambitious-register-proofreading",
        question:
          "Roughly what **word-count sweet spot** allows a Year 11 candidate in 45 minutes to achieve full structural development AND leave 5 minutes for error-free SPaG polishing?",
        options: [
          "120–180 words (half a page)",
          "450–650 words (roughly 2.5 to 3.5 neat exam pages)",
          "1,400–1,800 words (eight frantic pages)",
          "Exactly 50 words",
        ],
        answerIndex: 1,
        hints: [
          "Too short (<250w) lacks structural arc; too long (>1,000w) collapses into unproofread comma splices and plot bloat.",
        ],
        explanation:
          "**450–650 words** gives ample canvas for 5 crafted paragraphs (ZOOM-5, ARC-4, or THESIS-5) while preserving time to polish every sentence and punctuation mark.",
      },
    ],
  },
];
