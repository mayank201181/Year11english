import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 questions: lang-p1-reading-quiz-q01 .. q10)
  // =========================================================================
  quiz: [
    {
      id: "lang-p1-reading-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "explicit-implicit-inference",
      question:
        "Read this travelogue line:\n\n*\"Before unlocking the guesthouse parlour, Mrs Vance slipped her spectacles into her apron pocket and smoothed her grey bun twice in the hall mirror.\"*\n\nWhat is the sharpest **implicit inference** about Mrs Vance?",
      options: [
        "She takes quiet pride in presenting a composed, dignified appearance to incoming guests.",
        "She has lost her spectacles somewhere outside the guesthouse.",
        "She is furious that guests have arrived late in the evening.",
        "The hall mirror is cracked and covered in dust.",
      ],
      answerIndex: 0,
      hints: [
        "Look beyond the literal actions (pocketing glasses, smoothing hair twice) to *why* she pauses at the mirror before opening the door.",
      ],
      explanation:
        "Tucking away practical spectacles and checking her hair twice before greeting visitors implies conscientious self-respect and care over first impressions.",
    },
    {
      id: "lang-p1-reading-quiz-q02",
      kind: "short",
      commonError:
        "Giving 2 (the minimum of the range) or a vague 'a few words'; the question asks for the upper limit of the 2–5 word guideline.",
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2 is the minimum of the 2–5 range — the question asks for the maximum.",
        },
      ],
      difficulty: "warmup",
      guideRef: "explicit-implicit-inference",
      question:
        "According to the Paper 1A micro-quote rule, what is the **maximum** number of words (as a single whole number from the `2–5 word` guideline) a surgical embedded quotation should normally contain?",
      answer: { type: "number", value: 5, display: "5" },
      hints: [
        "Recall the standard micro-quotation range: 2 to ___ words.",
      ],
      solution: [
        "Surgical micro-quotations should normally run **2–5 words** (maximum **5**), allowing seamless grammatical integration and precise single-word zooming.",
      ],
    },
    {
      id: "lang-p1-reading-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "lexical-imagery-effects",
      question:
        "Read this extract:\n\n*\"Sullen, weeping rain-clouds slumped low over the abandoned harbour wall.\"*\n\nBecause human grief and gloom (*'sullen, weeping'*) are attributed specifically to **weather/nature** to mirror the scene's mood, what **two-word** literary term is more precise than general personification?",
      answer: {
        type: "text",
        accept: ["pathetic fallacy"],
        display: "pathetic fallacy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["personification"] },
          feedback: "Close! Personification is the broader umbrella, but attributing human *emotion* specifically to *weather/nature* has a dedicated two-word term.",
        },
      ],
      hints: [
        "Coined by John Ruskin — two words, starting with 'p' and 'f'.",
        "It specifically links human emotion ('weeping', 'sullen') to weather or landscape.",
      ],
      solution: [
        "Attributing human emotions (*sullen, weeping*) to weather or natural landscape to reflect atmosphere is **pathetic fallacy**.",
      ],
    },
    {
      id: "lang-p1-reading-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "lexical-imagery-effects",
      question:
        "Read this journalism sentence:\n\n*\"The luxury cruise liner towered above the fishing skiffs like a floodlit porcelain fortress.\"*\n\nZooming onto the noun **'fortress'** inside the simile primarily highlights:",
      options: [
        "That the cruise ship carries medieval cannons on its upper deck.",
        "Imposing, exclusionary wealth and fortified separation between tourists and local fishermen.",
        "Warm, welcoming intimacy shared equally with the harbour villagers.",
        "That the cruise liner is sinking rapidly in rough seas.",
      ],
      answerIndex: 1,
      hints: [
        "Contrast 'towered' and 'fortress' with tiny 'fishing skiffs'.",
        "What does a fortress keep out, and what power imbalance does that imply?",
      ],
      explanation:
        "'Fortress' connotes defended walls, dominance, and exclusion — underscored paradoxically by fragile luxury ('porcelain') looming over local working 'skiffs'.",
    },
    {
      id: "lang-p1-reading-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "sentence-punctuation-craft",
      question:
        "Read this memoir extract:\n\n*\"We carried crates up the stairwell and we scrubbed the floorboards and we taped brown paper over the cracked panes and we fell asleep in our coats.\"*\n\nWhat single Greek rhetorical term (starting with **p**) names this deliberate repetition of conjunctions (*'and… and… and…'*) to convey exhausting accumulation?",
      answer: {
        type: "text",
        accept: ["polysyndeton", "syndetic listing"],
        display: "polysyndeton",
      },
      traps: [
        {
          spec: { type: "text", accept: ["asyndeton", "asyndetic listing"] },
          feedback: "Opposite! Asyndeton *omits* conjunctions; repeating 'and' over and over uses the prefix 'poly-' (many).",
        },
      ],
      hints: [
        "Prefix *poly-* = many; root *-syndeton* = bound together with conjunctions.",
        "Contrast it with *asyndeton* (zero conjunctions).",
      ],
      solution: [
        "Repeating conjunctions (*and… and…*) across successive clauses is **polysyndeton** (also called **syndetic listing**), elongating effort so chores feel relentless.",
      ],
    },
    {
      id: "lang-p1-reading-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "sentence-punctuation-craft",
      question:
        "Read this sentence:\n\n*\"Everything inside the cabin — boots, compasses, tin mugs, maps — floated ankle-deep in bilge water.\"*\n\nWhich punctuation mark isolates the list of floating objects mid-sentence?",
      options: [
        "Colons",
        "Semicolons",
        "Parenthetical dashes",
        "Inverted commas",
      ],
      answerIndex: 2,
      hints: [
        "Look at the pair of horizontal marks (`— … —`) slicing between the subject 'Everything inside the cabin' and the verb 'floated'.",
        "Which punctuation pair creates a dramatic mid-sentence interruption?",
      ],
      explanation:
        "A pair of **parenthetical dashes** interrupts the clause between subject and verb to unpack 'Everything' into concrete, chaotic clutter before landing on 'floated'.",
    },
    {
      id: "lang-p1-reading-quiz-q07",
      kind: "short",
      commonError:
        "Mixing up the pair: analepsis looks back (flashback), prolepsis leaps forward (flash-forward).",
      traps: [
        {
          spec: { type: "text", accept: ["prolepsis"] },
          feedback: "Prolepsis is the opposite — a flash-forward. A flashback into the past is analepsis.",
        },
      ],
      difficulty: "core",
      guideRef: "structural-shifts-focus",
      question:
        "What technical structural noun (starting with **a**, opposite of *prolepsis*) names a **flashback** in which a writer interrupts present-day action to revisit an earlier memory?",
      answer: {
        type: "text",
        accept: ["analepsis", "flashback"],
        display: "analepsis",
      },
      hints: [
        "Starts with 'ana-' and ends with '-lepsis' (9 letters).",
        "Section 3 of many memoirs uses this move to supply emotional backstory.",
      ],
      solution: [
        "**Analepsis** (flashback) shifts the narrative backward in time to illuminate present feelings through past experience.",
      ],
    },
    {
      id: "lang-p1-reading-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "structural-shifts-focus",
      question:
        "Why does writing *\"This cliffhanger makes the reader want to read on\"* fail to earn marks in structural analysis?",
      options: [
        "OxfordAQA examiners award structural marks only to bullet-point timelines of paragraph events rather than continuous analytical prose.",
        "Paper 1 Section A non-fiction extracts are strictly factual reports that never employ narrative tension, pacing shifts, or suspense.",
        "Evaluating reader response is credited exclusively in Literature poetry essays and is treated as irrelevant speculation in Language Paper 1A.",
        "It is a generic cliché true of almost any sentence anywhere; Grade-9 analysis must specify the exact uncertainty, dread, or irony created at that moment.",
      ],
      answerIndex: 3,
      hints: [
        "Ask whether 'makes the reader want to read on' proves you actually understood *this* specific extract.",
        "Examiners strip generic boilerplate and reward specific psychological effects.",
      ],
      explanation:
        "Generic boilerplate could apply to any text blindly; top-band structural comments pinpoint the exact unanswered question or tonal jolt engineered by the writer.",
    },
    {
      id: "lang-p1-reading-quiz-q09",
      kind: "short",
      commonError:
        "Writing 'self-depreciating' (a financial word about losing value) instead of 'self-deprecating', or naming the tone simply 'sarcastic', which misses that the mockery is aimed at the writer.",
      traps: [
        {
          spec: { type: "text", accept: ["sarcastic", "sarcasm", "self-pitying"] },
          feedback: "Sarcasm usually targets someone else; self-pitying lacks humour. Wryly mocking yourself is self-deprecating.",
        },
      ],
      difficulty: "core",
      guideRef: "evaluating-writers-viewpoint",
      question:
        "Read this travelogue line:\n\n*\"Clinging to the mule's neck like a damp sack of turnips while seven-year-old village children skipped past me uphill, I reflected that my gym membership had been an imaginative investment.\"*\n\nWhat hyphenated tonal adjective (`self-___________`) describes a writer wryly mocking their own ineptitude or lack of fitness?",
      answer: {
        type: "text",
        accept: ["self-deprecating", "self deprecating", "self-mocking"],
        display: "self-deprecating",
      },
      hints: [
        "Starts with 'self-d...' — poking gentle fun at oneself rather than boasting.",
        "Comparing oneself to 'a damp sack of turnips' outpaced by seven-year-olds is classic ___ humour.",
      ],
      solution: [
        "Humour that modestly or ironically mocks the writer's own clumsiness or hubris is **self-deprecating**.",
      ],
    },
    {
      id: "lang-p1-reading-quiz-q10",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "evaluating-writers-viewpoint",
      question:
        "In the **PETAL** paragraph framework for high-tariff Paper 1A questions, what does the **T** stand for?",
      options: [
        "Technique — naming the precise lexical, syntactic, or structural craft method used",
        "Title — rewriting the title of the newspaper article in capital letters",
        "Timeline — listing historical dates in chronological order",
        "Translation — rewriting the whole paragraph in casual everyday slang",
      ],
      answerIndex: 0,
      hints: [
        "P = Point, E = Evidence, T = ?, A = Analysis, L = Link.",
      ],
      explanation:
        "**T** stands for **Technique** (e.g. dynamic verb, semantic field, periodic sentence, parenthetical dash, tonal pivot), anchoring your analytical zoom in deliberate craft.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers x 15 questions: ~10 short + ~5 written each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: Close Reading of Travelogues & Expedition Memoirs
    // -----------------------------------------------------------------------
    {
      id: "lang-p1-reading-p1",
      title: "Paper 1A Practice 1 — Travelogue & Memoir Close Analysis",
      questions: [
        {
          id: "lang-p1-reading-p1-q01",
          kind: "short",
          commonError:
            "Grabbing the wrong number from the sentence — e.g. 4 (the 'fourth day') or 'half' (the tin of milk) — instead of the biscuit count.",
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "4 is the 'fourth day', not the number of biscuits. Re-read which noun the number belongs to.",
            },
          ],
          difficulty: "warmup",
          guideRef: "explicit-implicit-inference",
          question:
            "Read this expedition extract:\n\n*\"By dusk on the fourth day, only half a tin of condensed milk and three damp biscuits remained in the pannier.\"*\n\nAccording to this sentence, how many **damp biscuits** remained in the pannier? Give the number.",
          answer: { type: "number", value: 3, display: "3" },
          hints: [
            "Check the exact surface fact directly before 'damp biscuits'.",
          ],
          solution: [
            "Explicit retrieval: the sentence states directly that **three (3)** damp biscuits remained.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q02",
          kind: "short",
          commonError:
            "Calling it 'feature spotting' or 'summarising'; swapping synonyms ('damp' → 'wet') while just retelling the content is paraphrasing, which earns no analysis credit.",
          traps: [
            {
              spec: { type: "text", accept: ["feature spotting", "feature-spotting", "summarising", "summarizing", "summary"] },
              feedback: "Not quite — the candidate is restating the content in different words rather than analysing it. That fault is paraphrasing.",
            },
          ],
          difficulty: "core",
          guideRef: "explicit-implicit-inference",
          question:
            "When an exam candidate writes *'The writer had only half a tin of milk and three wet biscuits left'* as an explanation of *'only half a tin of condensed milk and three damp biscuits remained'*, what close-reading error are they committing? Give the single standard term.",
          answer: {
            type: "text",
            accept: ["paraphrasing", "paraphrase"],
            display: "paraphrasing",
          },
          hints: [
            "Starts with 'p' — swapping words for close synonyms ('damp' → 'wet') without deducing implied scarcity or anxiety.",
            "Examiners cap responses at Band 1–2 when they do this instead of inferring.",
          ],
          solution: [
            "Repeating surface text in slightly altered words without deducing subtext (such as dwindling rations and mounting vulnerability) is **paraphrasing**.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "lexical-imagery-effects",
          question:
            "Read this extract from a jungle river account:\n\n*\"Mangrove roots knotted like arthritic fingers into the black silt, clutching rusted oil-drums in their grip.\"*\n\nBecause an inanimate plant (*mangrove roots*) is given human bodily anatomy and deliberate grasping action (*'clutching… in their grip'*) rather than weather mirroring mood, what single literary device is used after the simile?",
          answer: {
            type: "text",
            accept: ["personification"],
            display: "personification",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathetic fallacy"] },
              feedback: "Careful! Pathetic fallacy projects human emotion onto weather/skies; giving deliberate human bodily action ('clutching') to roots is personification.",
            },
          ],
          hints: [
            "Focus on the verb 'clutching' and noun 'grip' giving human physical agency to tree roots.",
            "Give the single 15-letter noun starting with 'p'.",
          ],
          solution: [
            "Endowing non-human mangrove roots with deliberate human physical agency (*'clutching… in their grip'*) is **personification**.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q04",
          kind: "short",
          commonError:
            "Answering 'extended metaphor' or 'imagery'; a cluster of vocabulary from one subject area is a semantic (lexical) field.",
          traps: [
            {
              spec: { type: "text", accept: ["extended metaphor", "imagery", "metaphor"] },
              feedback: "The words are linked by a shared subject area (warfare). The term for a vocabulary cluster is semantic field.",
            },
          ],
          difficulty: "core",
          guideRef: "lexical-imagery-effects",
          question:
            "Read this journalism extract about a besieged coastal hospital:\n\n*\"Sandbags barricaded the ambulance bay while generators rationed electricity through the blackout trenches of the ground-floor corridor.\"*\n\nThe words *'sandbags'*, *'barricaded'*, *'rationed'*, *'blackout'*, and *'trenches'* all belong to a shared domain of warfare. What **two-word** analytical term names such a thematic cluster of vocabulary?",
          answer: {
            type: "text",
            accept: ["semantic field", "lexical field"],
            display: "semantic field",
          },
          hints: [
            "Two words: '________ field'.",
            "Used when 3+ words across a passage share a conceptual domain (here, military siege).",
          ],
          solution: [
            "Grouping *barricaded, rationed, blackout, trenches* establishes a **semantic field** (or **lexical field**) of military siege.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q05",
          kind: "short",
          commonError:
            "Calling 'Nothing.' a 'short sentence' or 'simple sentence' — a simple sentence needs a verb; a verbless one-word sentence is a minor sentence.",
          traps: [
            {
              spec: { type: "text", accept: ["simple sentence", "short sentence", "simple"] },
              feedback: "A simple sentence must contain a main verb. 'Nothing.' has none, so it is a minor sentence (fragment).",
            },
          ],
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          question:
            "Read this extract from a solo ocean-rowing diary:\n\n*\"For forty hours the swell lifted the hull, slammed it into the trough, spun the bow sideways, drenched the bunk. Nothing dry remained. Nothing.\"* \n\nWhat **two-word** grammatical term (`_____ sentence`) describes *\"Nothing.\"* at the close?",
          answer: {
            type: "text",
            accept: ["minor sentence", "sentence fragment", "fragment"],
            display: "minor sentence",
          },
          hints: [
            "Notice *'Nothing.'* contains zero finite verbs.",
            "In IGCSE grammar terminology, a verbless complete-stop unit is called a _____ sentence.",
          ],
          solution: [
            "*'Nothing.'* lacks a main finite verb, making it a **minor sentence** (or syntactic **fragment**) that isolates bleak exhaustion.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          question:
            "In the ocean-rowing extract *\"the swell lifted the hull, slammed it into the trough, spun the bow sideways, drenched the bunk\"*, what single rhetorical term (starting with **a**) names listing those four verb phrases with commas alone and **zero conjunctions**?",
          answer: {
            type: "text",
            accept: ["asyndeton", "asyndetic listing"],
            display: "asyndeton",
          },
          traps: [
            {
              spec: { type: "text", accept: ["polysyndeton", "syndetic listing"] },
              feedback: "Polysyndeton repeats 'and'; here 'and' is completely omitted!",
            },
          ],
          hints: [
            "Prefix *a-* = without; *-syndeton* = conjunctions.",
            "Stripping 'and' makes the wave impacts hit one after another without pause.",
          ],
          solution: [
            "Omitting conjunctions between coordinate clauses (*lifted…, slammed…, spun…, drenched…*) is **asyndeton** (asyndetic listing).",
          ],
        },
        {
          id: "lang-p1-reading-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          question:
            "Read this memoir sentence:\n\n*\"Across the border checkpoint lay everything my uncle had promised in his letters: a muddy lorry-park, two stray dogs, and a padlocked café.\"*\n\nName the **single punctuation mark** (as a word) that acts as the ironic reveal hinge here.",
          answer: {
            type: "text",
            accept: ["colon"],
            display: "colon",
          },
          traps: [
            {
              spec: { type: "text", accept: ["semicolon", "semi-colon"] },
              feedback: "Look closely at `:` after 'letters' — two vertical dots, not a dot over a comma!",
            },
          ],
          hints: [
            "Look right after the word 'letters' (`:`).",
            "It unveils the bathetic reality behind 'everything my uncle had promised'.",
          ],
          solution: [
            "The **colon** (`:`) sets up grand expectation before unveiling bleak anti-climax.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "structural-shifts-focus",
          question:
            "Read this structural transition in a desert travelogue:\n\n*\"I stood atop the dune preparing a solemn speech on the majesty of untamed solitude. Immediately, my left sandal snapped and sent me cartwheeling face-first into a camel thorn.\"*\n\nWhat single Greek literary term (6 letters, starting with **b**) names this sudden drop from solemn grandeur to ridiculous comic anti-climax?",
          answer: {
            type: "text",
            accept: ["bathos"],
            display: "bathos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathos"] },
              feedback: "Pathos evokes pity or sorrow; replacing 'p' with 'b' gives the term for comic anti-climax!",
            },
          ],
          hints: [
            "Rhymes with *pathos*, starts with **b**.",
            "Travel writers love using it to puncture their own grandiosity.",
          ],
          solution: [
            "**Bathos** is an abrupt structural plunge from elevated seriousness (*'majesty of untamed solitude'*) into comic mundanity (*'cartwheeling face-first'*).",
          ],
        },
        {
          id: "lang-p1-reading-p1-q09",
          kind: "short",
          commonError:
            "Offering 'focus' or 'shift' — true but too general; the cinematic term for narrowing from wide to close-up is zoom.",
          traps: [
            {
              spec: { type: "text", accept: ["focus", "shift", "close-up", "close up"] },
              feedback: "Close, but the 4-letter cinematic verb/noun starting with z for narrowing the shot is 'zoom'.",
            },
          ],
          difficulty: "core",
          guideRef: "structural-shifts-focus",
          question:
            "When a four-section memoir opens with a wide establishing shot of an entire bustling harbour and then narrows in Section 2 onto a single knotted rope in an old fisherman's calloused hands, what **cinematic** noun (`____` — 4 letters, starting with **z**) describes narrowing the narrative focus from wide to close-up?",
          answer: {
            type: "text",
            accept: ["zoom", "micro-zoom", "zooming"],
            display: "zoom",
          },
          hints: [
            "Think of a camera lens moving from panoramic wide-shot to extreme close-up.",
            "Give the 4-letter cinematic noun starting with 'z'.",
          ],
          solution: [
            "Narrowing focus from a wide panorama onto a tiny specific detail is a structural **zoom** (or **micro-zoom**).",
          ],
        },
        {
          id: "lang-p1-reading-p1-q10",
          kind: "short",
          commonError:
            "Writing 'nostalgic' (fond longing, not mournful) or misspelling as 'elegaic'.",
          traps: [
            {
              spec: { type: "text", accept: ["nostalgic", "melancholic"] },
              feedback: "Nostalgic is fond longing and melancholic starts with m; the 7-letter e-word from *elegy* is elegiac.",
            },
          ],
          difficulty: "core",
          guideRef: "evaluating-writers-viewpoint",
          question:
            "What single tonal adjective (starting with **e**, 7 letters, related to *elegy*) describes a wistfully mournful, reflective attitude toward a vanished era or lost person?",
          answer: {
            type: "text",
            accept: ["elegiac"],
            display: "elegiac",
          },
          hints: [
            "Formed from the noun *elegy* — `e-l-e-g-i-a-c`.",
            "Often characterizes the closing section of heritage memoirs.",
          ],
          solution: [
            "**Elegiac** describes a poignant, mournfully reflective tone toward loss or the passage of time.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "explicit-implicit-inference",
          marks: 3,
          question:
            "Read this memoir extract:\n\n*\"Whenever the rent collector knocked on Fridays, my mother turned down the wireless, wiped her dry palms twice on her pinafore, and greeted him at the step with her brightest Sunday chin-tilt.\"*\n\nWhat do we learn about the mother's **unspoken feelings and character** here? Support your deductions with brief micro-quotations. *(3 marks)*",
          modelAnswer:
            "Beneath an outward performance of poised dignity, the mother experiences acute covert anxiety and financial vulnerability. Quieting the house and repeatedly wiping 'dry palms' betrays nervous somatic tension, since her hands need no drying. Yet greeting the visitor with a 'brightest Sunday' posture reveals fierce working-class pride and stoic determination to mask household hardship behind composed respectability.",
          markScheme: [
            {
              point: "Deduces hidden anxiety, dread, or nervous tension beneath the surface.",
              keywords: ["anxiety", "anxious", "nervous", "dread", "tension", "unease", "fear", "apprehens"],
            },
            {
              point: "Unpacks the physical tell of wiping 'dry palms' as an involuntary stress gesture rather than practical cleaning.",
              keywords: ["gesture", "involuntary", "somatic", "displacement", "stress", "habit", "needless", "tell"],
            },
            {
              point: "Deduces fierce pride, stoic dignity, or performative composure masking vulnerability.",
              keywords: ["pride", "proud", "dignity", "dignified", "perform", "mask", "facade", "composure", "respectab", "stoic"],
            },
          ],
          hints: [
            "Ask *why* someone wipes palms that are already 'dry' — what emotion causes that physical reflex?",
            "Contrast that private nervous tell with her 'brightest Sunday chin-tilt' at the open door.",
          ],
          commonError:
            "Paraphrasing ('she turns down the radio, wipes her hands, and tilts her chin happily') misses both her hidden dread and her proud mask.",
        },
        {
          id: "lang-p1-reading-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "lexical-imagery-effects",
          marks: 4,
          question:
            "Read this extract from an account of exploring an abandoned subterranean tunnel:\n\n*\"Rust-stained stalactites hung from the brick vault like yellow fangs, while freezing groundwatergnawed at our boot-soles and the tunnel throat narrowed ahead into pitch blackness.\"*\n\n*(Note: read 'groundwater gnawed' as two words.)* Analyse how the writer uses **language and imagery** to make the tunnel feel hostile. *(4 marks)*",
          modelAnswer:
            "The writer constructs a predatory zoomorphic extended metaphor, transforming inert masonry into the digestive tract of a living beast. Comparing mineral icicles to 'yellow fangs' via simile evokes diseased, carnivorous menace poised to snap shut overhead. Furthermore, the dynamic verb 'gnawed' grants the water relentless animalistic agency, suggesting the subterranean environment is actively consuming the explorers' protective gear, while naming the passage a 'tunnel throat' creates claustrophobic dread of being swallowed alive.",
          markScheme: [
            {
              point: "Identifies zoomorphic / beast / predatory extended imagery turning the tunnel into a living monster.",
              keywords: ["zoomorph", "predator", "beast", "monster", "creature", "animal", "carnivor"],
            },
            {
              point: "Unpacks connotations of the simile ('fangs' / 'yellow') — venomous, decayed, poised to bite overhead.",
              keywords: ["simile", "bite", "venom", "decayed", "diseased", "jaws", "menac", "threat"],
            },
            {
              point: "Zooms onto the dynamic verb ('gnawed') — active, relentless erosion/consumption stripping away protection.",
              keywords: ["verb", "agency", "consum", "erod", "relentless", "chew", "devour"],
            },
            {
              point: "Explains the anatomical personification/metaphor ('throat') — claustrophobic sensation of being swallowed or suffocated.",
              keywords: ["swallow", "claustrophob", "anatom", "personif", "engulf", "suffocat", "entrap"],
            },
          ],
          hints: [
            "Spot the shared body-part cluster: 'fangs', 'gnawed', and 'throat' — what kind of creature is the tunnel turned into?",
            "Zoom onto the verb 'gnawed' and noun 'throat' to explain claustrophobic consumption.",
          ],
          commonError:
            "Writing 'the simile paints a vivid picture in the reader's head and makes it scary' without unpacking predatory consumption.",
        },
        {
          id: "lang-p1-reading-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          marks: 4,
          question:
            "Read this extract from a mountaineering rescue memoir:\n\n*\"Through whipping spindrift and numbing wind-chill and waist-deep drifts that sucked every step backward, we dragged the stretcher toward the ridge-pole — and found the marker snapped in half. Gone.\"*\n\nAnalyse how the writer uses **sentence structure and punctuation** to convey mounting ordeal and sudden despair. *(4 marks)*",
          modelAnswer:
            "The writer pairs an arduous periodic buildup with abrupt syntactic arrest. Repeating 'and' across the opening phrases employs syndetic listing (polysyndeton) to elongate the clause, forcing the reader to labour breathlessly through accumulating physical obstacles before reaching the main verb. Just as arrival seems imminent, the em-dash engineers a jolting dramatic pause that undercuts their struggle with cruel discovery, before the one-word minor fragment 'Gone.' severs momentum completely to enact stunned, hollow finality.",
          markScheme: [
            {
              point: "Identifies syndetic listing / polysyndeton (or periodic delay) elongating the opening clause.",
              keywords: ["syndetic", "polysyndeton", "periodic", "elongat", "multi-clause", "accumulat"],
            },
            {
              point: "Connects the stretched opening rhythm to breathless physical exhaustion or relentless obstacle-hauling.",
              keywords: ["breathless", "exhaust", "labour", "arduous", "relentless", "fatigu", "trudge"],
            },
            {
              point: "Explains the em-dash hinge as a dramatic pause or abrupt reversal/undercutting of hope.",
              keywords: ["dash", "hinge", "pause", "undercut", "reversal", "anti-climax", "jolt"],
            },
            {
              point: "Analyses the final one-word minor sentence / fragment as severing pace to enact shock, emptiness, or finality.",
              keywords: ["minor", "fragment", "sever", "finality", "abrupt", "arrest", "shock", "hollow"],
            },
          ],
          hints: [
            "Look at three syntactic moves in sequence: (1) repeated 'and' in a delayed periodic opening, (2) the `—` dash hinge, and (3) the single-word fragment at the end.",
            "Connect each structural feature directly to the rescuers' physical effort and emotional collapse.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "structural-shifts-focus",
          marks: 4,
          question:
            "Read this condensed two-part extract from a coastal memoir:\n\n*\"[Section 1] All August the promenade blazed with brass bands, candyfloss stalls, and holidaymakers queuing noisy and sunburnt for deckchairs.\n[Section 2] By November only a single torn ticket-stub fluttered against the shuttered kiosk, while memory pulled me back forty winters to the afternoon my father locked up his boatyard for the last time.\"*\n\nHow does the writer **structure** these two sections to shift mood and deepen meaning? *(4 marks)*",
          modelAnswer:
            "Structurally, the writer engineers a stark temporal and tonal juxtaposition between summer vibrancy and wintry desolation. Opening with a crowded panoramic wide-shot establishes fleeting collective festivity, which makes the abrupt camera zoom onto a solitary 'torn ticket-stub' in November feel acutely bereft. That fragile remnant then acts as an emotional trigger pivoting from external setting into private analepsis (flashback), reframing seasonal emptiness as a deeper elegiac meditation on industrial loss and paternal grief.",
          markScheme: [
            {
              point: "Identifies temporal/seasonal juxtaposition contrasting bustling summer energy against bleak winter isolation.",
              keywords: ["juxtapos", "contrast", "seasonal", "temporal", "desolat", "vibran", "festiv"],
            },
            {
              point: "Tracks the camera shift from wide collective panorama down to a solitary micro-zoom object.",
              keywords: ["panoram", "wide", "zoom", "solitary", "narrow", "micro", "close-up"],
            },
            {
              point: "Identifies the shift from external landscape into interior memory / analepsis (flashback).",
              keywords: ["analepsis", "flashback", "interior", "internal", "retrospect", "past"],
            },
            {
              point: "Explains how the pivot deepens emotional resonance into personal grief, finality, or elegiac loss.",
              keywords: ["elegiac", "grief", "bereft", "loss", "mourn", "resonan", "poignan"],
            },
          ],
          hints: [
            "Track three structural shifts: (1) August crowd vs November emptiness, (2) wide promenade → single ticket-stub zoom, (3) external scene → forty-year flashback.",
            "Explain how the solitary November remnant triggers analepsis and elegiac grief.",
          ],
        },
        {
          id: "lang-p1-reading-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "evaluating-writers-viewpoint",
          marks: 5,
          question:
            "Read this closing passage from a journalist's account of visiting an automated mega-warehouse:\n\n*\"It is impossible not to marvel at two thousand tangerine robots gliding in silent ballet across polished concrete, dispatching toothbrushes and trainers at sixty miles an hour; yet watching a lone human picker sprint between aisles while an armband bleeped her countdown seconds, I felt I was witnessing efficiency perfected at the cost of dignity.\"*\n\nEvaluate how effectively the writer conveys a **complex perspective** on modern automation. *(5 marks)*",
          modelAnswer:
            "The writer conveys a nuanced, ambivalent perspective that moves from aesthetic admiration to moral indictment. Initially, choreography metaphor ('silent ballet') and vibrant visual detail grant the robotic fleet graceful, almost artistic harmony, conceding genuine wonder at technological precision. However, the semicolon hinge '; yet' pivots sharply onto an isolated worker whose frantic 'sprint' inverts the power hierarchy: machines glide effortlessly while humans scurry. Auditory nagging from the 'armband' reduces a person to a timed component, culminating in the balanced antithesis between 'efficiency' and 'dignity' to align the reader in quiet ethical unease.",
          markScheme: [
            {
              point: "Establishes a nuanced ambivalent / dual viewpoint (initial wonder shifting to ethical critique).",
              keywords: ["ambivalen", "nuanc", "dual", "admiration", "wonder", "critique", "indict", "ethical"],
            },
            {
              point: "Analyses the graceful/artistic imagery ('ballet' / 'gliding') used to concede technological elegance.",
              keywords: ["choreograph", "grace", "metaphor", "harmony", "elegance", "artistic"],
            },
            {
              point: "Pinpoints the semicolon + 'yet' pivot and contrasts effortless machines against the frantic, isolated human.",
              keywords: ["semicolon", "pivot", "hinge", "invert", "hierarchy", "isolated", "frantic"],
            },
            {
              point: "Unpacks how the bleeping countdown dehumanises or mechanises the worker under surveillance.",
              keywords: ["dehuman", "mechanis", "surveill", "subjugat", "cog", "component", "pressur"],
            },
            {
              point: "Evaluates the closing conceptual antithesis weighing cold productivity against human worth.",
              keywords: ["antithesis", "moral", "unease", "align", "humanity", "worth", "cost"],
            },
          ],
          hints: [
            "Start with a thesis naming **ambivalence** (aesthetic awe → ethical unease).",
            "Unpack 'silent ballet' before the semicolon hinge `; yet`, then contrast 'gliding' robots with the 'sprint[ing]' human governed by an armband.",
            "Finish by evaluating the final conceptual pairing of 'efficiency' vs 'dignity'.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: Journalism, Natural History & Autobiographical Craft
    // -----------------------------------------------------------------------
    {
      id: "lang-p1-reading-p2",
      title: "Paper 1A Practice 2 — Journalism, Nature & Viewpoint",
      questions: [
        {
          id: "lang-p1-reading-p2-q01",
          kind: "short",
          commonError:
            "Not reading the question precisely — giving a number about the tail flick or pebble (1) instead of the hours.",
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "1 refers to the single flick of the tail. The question asks for the hours the leopard stayed still.",
            },
          ],
          difficulty: "warmup",
          guideRef: "explicit-implicit-inference",
          question:
            "Read this natural-history extract:\n\n*\"For seven hours the snow leopard remained motionless on the granite ledge above our hide, invisible until a single flick of its tail dislodged a pebble.\"*\n\nFor how many **hours** did the snow leopard remain motionless? Give the number.",
          answer: { type: "number", value: 7, display: "7" },
          hints: [
            "Retrieve the exact duration stated in the opening three words.",
          ],
          solution: [
            "Explicit retrieval: the leopard remained motionless for **seven (7)** hours.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q02",
          kind: "short",
          commonError:
            "Assuming good evidence earns some credit wherever it comes from; examiners award 0 for material outside the specified section.",
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "No partial credit: evidence from outside the named section earns 0 marks, however good it is.",
            },
          ],
          difficulty: "core",
          guideRef: "explicit-implicit-inference",
          question:
            "If Question 2 on an OxfordAQA Paper 1A paper instructs *\"Read **Section 2** again\"*, how many marks can you earn for quoting a brilliant piece of evidence located in **Section 4**? Give the number.",
          answer: { type: "number", value: 0, display: "0" },
          hints: [
            "Section boundaries are strictly policed by OxfordAQA examiners.",
            "Does evidence outside the named section earn partial credit or nothing at all?",
          ],
          solution: [
            "Any quotation or retrieval taken outside the designated section earns **0** marks.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "lexical-imagery-effects",
          question:
            "Read this extract from a memoir of working in a noisy restaurant kitchen:\n\n*\"Ticket-printers spat white ribbons of orders while copper pans clashed like cymbals along the pass.\"*\n\nIn the second half of the sentence (*'clashed like cymbals'*), what single figurative device (6 letters, starting with **s**) explicitly compares two things using *'like'*?",
          answer: {
            type: "text",
            accept: ["simile"],
            display: "simile",
          },
          traps: [
            {
              spec: { type: "text", accept: ["metaphor"] },
              feedback: "A metaphor equates things directly without 'like' or 'as'; 'like cymbals' uses an explicit comparison marker!",
            },
          ],
          hints: [
            "Spot the explicit comparison marker *like* before 'cymbals'.",
            "Give the 6-letter figurative device starting with 's'.",
          ],
          solution: [
            "*'like cymbals'* is a **simile**, amplifying the metallic percussion of the kitchen.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "lexical-imagery-effects",
          question:
            "In phonetics/sound analysis, harsh percussive consonant sounds such as **/p/, /b/, /t/, /d/, /k/, /g/** (as in *'blackened beams buckled and burst'*) are collectively called what? Give the single plural or singular term starting with **p**.",
          answer: {
            type: "text",
            accept: ["plosives", "plosive", "plosive consonants"],
            display: "plosives",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sibilance", "fricatives"] },
              feedback: "Sibilance refers to /s/ and /sh/ sounds; explosive stop consonants (/b/, /p/, /k/, /t/) start with 'pl-'.",
            },
          ],
          hints: [
            "Say /b/ and /p/ aloud — airflow stops completely behind the lips and bursts out.",
            "Related to the word *explosive* (`pl______`).",
          ],
          solution: [
            "Hard stop-consonants (/b/, /p/, /t/, /d/, /k/, /g/) are **plosives**, often amplifying violent impact or abruptness when supported by lexical meaning.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          question:
            "Read this sentence:\n\n*\"Because the radio battery had frozen solid, because the cloud-base had dropped below the col, and because darkness was twenty minutes away, we dug a snow-hole where we stood.\"*\n\nWhat syntactic adjective (`________ sentence`, 8 letters, starting with **p**) names a sentence that stacks subordinate clauses first and delays its main clause (*'we dug a snow-hole'*) until the end?",
          answer: {
            type: "text",
            accept: ["periodic", "periodic sentence"],
            display: "periodic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["cumulative", "cumulative sentence"] },
              feedback: "Cumulative sentences put the main clause first; delaying the main clause until the very end is its opposite (starts with 'p').",
            },
          ],
          hints: [
            "Contrast it with a *cumulative* sentence (which states the main clause first).",
            "It withholds resolution right up to the final period (`p_______`).",
          ],
          solution: [
            "Delaying the independent clause until after stacked dependent clauses creates a **periodic** sentence.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          question:
            "In the sentence *\"Because the radio battery had frozen solid, because the cloud-base had dropped below the col, and because darkness was twenty minutes away…\"*, repeating **'because…'** at the start of three successive clauses combines a tricolon with what rhetorical repetition device (8 letters, starting with **a**)?",
          answer: {
            type: "text",
            accept: ["anaphora"],
            display: "anaphora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["epiphora", "epistrophe"] },
              feedback: "Epiphora/epistrophe repeats words at the *ends* of clauses; repeating words at the *beginnings* starts with 'ana-'.",
            },
          ],
          hints: [
            "Look at the exact position of the repeated word 'because': the opening of each successive clause.",
            "Starts with 'ana-' and ends with '-phora' (8 letters).",
          ],
          solution: [
            "Repeating *'because'* at the start of successive clauses is **anaphora**, hammering home inescapable causal pressure.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q07",
          kind: "short",
          commonError:
            "Answering 'colon' — a colon introduces an explanation or list; a semicolon balances two equal independent clauses.",
          traps: [
            {
              spec: { type: "text", accept: ["colon"] },
              feedback: "A colon introduces or explains. Linking two balanced independent clauses is the job of a semicolon.",
            },
          ],
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          question:
            "Name the **single punctuation mark** (as a word, 9 letters, starting with **s**) that links two grammatically complete, closely balanced independent clauses without a coordinating conjunction — as in *\"The valley belonged to the wolves; we were merely overnight guests.\"*",
          answer: {
            type: "text",
            accept: ["semicolon", "semi-colon"],
            display: "semicolon",
          },
          hints: [
            "Look at the mark `;` sitting between 'wolves' and 'we'.",
            "9 letters starting with 's' — balances two independent clauses in poised contrast.",
          ],
          solution: [
            "A **semicolon** (`;`) balances two closely related independent clauses in poised equilibrium or antithesis.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q08",
          kind: "short",
          commonError:
            "Writing 'in media res' (missing the 's' on 'medias') or naming a time jump like 'flashback' instead of the three-word Latin phrase.",
          traps: [
            {
              spec: { type: "text", accept: ["flashback", "analepsis", "exposition", "cliffhanger"] },
              feedback: "Look for the three-word Latin phrase meaning 'into the middle of things': in medias res.",
            },
          ],
          difficulty: "core",
          guideRef: "structural-shifts-focus",
          question:
            "What **three-word** Latin structural phrase (`__ ______ ___`) describes plunging the reader straight into the middle of dramatic action in line 1 rather than starting with slow background exposition?",
          answer: {
            type: "text",
            accept: ["in medias res"],
            display: "in medias res",
          },
          hints: [
            "Translates literally from Latin as 'into the middle of things'.",
            "Three words: `in m_____ r__`.",
          ],
          solution: [
            "**In medias res** drops the reader directly into an unfolding crisis or vivid moment before supplying context.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q09",
          kind: "short",
          commonError:
            "Answering 'hypocrisy' or 'humour' — the device is the gap between the 'authentic wilderness' claim and the luxurious reality, which is irony.",
          traps: [
            {
              spec: { type: "text", accept: ["hypocrisy", "humour", "humor"] },
              feedback: "Too general. Saying the opposite of what is meant / exposing incongruity is irony.",
            },
          ],
          difficulty: "core",
          guideRef: "evaluating-writers-viewpoint",
          question:
            "Read this satirical column line:\n\n*\"Nothing says 'authentic wilderness retreat' quite like paying four hundred pounds a night to Wi-Fi-stream stock-market alerts inside a heated canvas yurt.\"*\n\nWhat tonal noun (5 letters, starting with **i**) names saying the apparent opposite of what you mean (or exposing sharp incongruity between pretentious claims and reality)?",
          answer: {
            type: "text",
            accept: ["irony", "satire", "sarcasm"],
            display: "irony",
          },
          hints: [
            "Spot the glaring contradiction between 'authentic wilderness' and 'Wi-Fi-stream stock-market alerts'.",
            "5-letter noun: `i-r-o-n-y`.",
          ],
          solution: [
            "Exposing the absurd contradiction between 'wilderness' branding and pampered corporate connectivity weaponises **irony**.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q10",
          kind: "short",
          commonError:
            "Settling for 'wry' or 'sarcastic'; the question asks for the stronger, more scornful 8-letter s-word, sardonic.",
          traps: [
            {
              spec: { type: "text", accept: ["wry"] },
              feedback: "The question says stronger than wry. The 8-letter s-word is sardonic.",
            },
            {
              spec: { type: "text", accept: ["sarcastic"] },
              feedback: "Close in meaning, but sarcastic has 9 letters. The 8-letter word for dry, scornful mockery is sardonic.",
            },
          ],
          difficulty: "core",
          guideRef: "evaluating-writers-viewpoint",
          question:
            "What tonal adjective (8 letters, starting with **s**, stronger and more disdainfully mocking than gentle *wry*) describes dry, biting, scornful humour — as in *\"I admired the airline's bold experiment in converting economy seating into medieval leg-irons\"*?",
          answer: {
            type: "text",
            accept: ["sardonic", "scathing", "satirical"],
            display: "sardonic",
          },
          hints: [
            "Think of grimly mocking, sceptical disdain rather than warm affection.",
            "8 letters: `s-a-r-d-o-n-i-c`.",
          ],
          solution: [
            "**Sardonic** captures dry, grimly mocking, sceptical disdain.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "explicit-implicit-inference",
          marks: 3,
          question:
            "Read this extract from a biography of an elderly violin maker:\n\n*\"When the wealthy collector asked how fast a workshop apprentice could hurry an instrument through varnishing, Cremona laid his chisel parallel to the bench-edge, closed the lid of his glue-pot, and gestured silently toward the street door.\"*\n\nWhat can we **infer** about the violin maker's values and emotional reaction? *(3 marks)*",
          modelAnswer:
            "Cremona regards hurried commercialism as an insult to artisanal integrity. His deliberate, measured physical precision in aligning tools demonstrates profound self-restraint that suppresses overt anger beneath icy composure. By wordlessly terminating the conversation and dismissing the buyer, he prioritizes patient craftsmanship entirely above lucrative financial gain.",
          markScheme: [
            {
              point: "Infers fierce devotion to craftsmanship / artisanal integrity offended by rushing.",
              keywords: ["craftsman", "artisan", "integrity", "devotion", "patient", "patience", "pride", "reveren"],
            },
            {
              point: "Deduces controlled anger, icy restraint, or quiet contempt from his deliberate silence and neatness.",
              keywords: ["restraint", "composure", "controlled", "contempt", "disdain", "icy", "suppress", "dignif"],
            },
            {
              point: "Infers complete rejection of money/wealth when commercial haste compromises quality.",
              keywords: ["financial", "commercial", "profit", "lucrative", "money", "compromis", "reject", "principle"],
            },
          ],
          hints: [
            "Notice he speaks **zero words** — why lay the chisel strictly 'parallel' and shut the glue-pot before pointing to the exit?",
            "What does turning away a 'wealthy collector' prove about his hierarchy of values?",
          ],
        },
        {
          id: "lang-p1-reading-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "lexical-imagery-effects",
          marks: 4,
          question:
            "Read this journalism extract describing night-time traffic stalled on an urban flyover:\n\n*\"Four lanes of brake-lights clotted into a glowing scarlet artery above the rooftops, pulsing inches forward before seizing rigid again in exhaust haze.\"*\n\nAnalyse how the writer uses **imagery and lexical choices** to portray the traffic jam. *(4 marks)*",
          modelAnswer:
            "The writer deploys a pathological medical extended metaphor, framing city infrastructure as a failing circulatory system on the brink of cardiac arrest. The dynamic verb 'clotted' transforms stationary cars into dangerous blood blockages, while casting red tail-lamps as a 'scarlet artery' fuses urban congestion with febrile bodily pressure. Subsequently, contrasting faint rhythmic movement against 'seizing' evokes muscular spasm or paralysis, suggesting the metropolis is choking on its own toxic fumes.",
          markScheme: [
            {
              point: "Identifies the sustained anatomical / circulatory / medical semantic field or extended metaphor.",
              keywords: ["circulat", "anatom", "medical", "patholog", "cardiac", "bodily", "semantic field"],
            },
            {
              point: "Zooms onto the verb 'clotted' — connotations of coagulation, blockage, and life-threatening obstruction.",
              keywords: ["coagulat", "blockage", "obstruct", "stagnat", "thromb", "congestion"],
            },
            {
              point: "Unpacks the visual/visceral metaphor comparing red tail-lamps to an engorged blood vessel.",
              keywords: ["vessel", "blood", "vein", "engorg", "visceral", "lifeblood", "pressure"],
            },
            {
              point: "Analyses the contrast of feeble 'pulsing' against 'seizing' — evoking spasm, paralysis, or urban suffocation.",
              keywords: ["spasm", "paralys", "chok", "suffocat", "arrest", "convuls", "strangl"],
            },
          ],
          hints: [
            "Group 'clotted', 'scarlet artery', 'pulsing', and 'seizing' — what bodily system is failing?",
            "Unpack both 'clotted' and 'seizing' individually for full connotative marks.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "sentence-punctuation-craft",
          marks: 4,
          question:
            "Read this memoir extract about opening an envelope containing conservatoire audition results:\n\n*\"My thumb slid beneath the gummed flap — paper thin as onion-skin, ink already visible in reverse — and tore sideways: one paragraph, four polite lines, no congratulations.\"*\n\nAnalyse how **punctuation and syntax** control pace and emotion across this single sentence. *(4 marks)*",
          modelAnswer:
            "The writer manipulates tempo from agonising slow-motion suspense to clinical devastation. Parenthetical dashes slice open the physical act of opening the letter right before the verb 'tore', suspending time in hyper-focused sensory anticipation as the narrator fixates on translucent paper. Immediately after the tear, the colon acts as a stark verdict hinge, ushering in an asyndetic tricolon of clipped noun phrases whose shrinking scale enacts instant emotional numbness and rejection.",
          markScheme: [
            {
              point: "Explains how parenthetical dashes interrupt syntax to slow time and heighten microscopic suspense.",
              keywords: ["parenthetical", "dashes", "interrupt", "suspend", "slow-motion", "anticipat", "delay"],
            },
            {
              point: "Identifies the colon functioning as a dramatic reveal / verdict hinge.",
              keywords: ["colon", "hinge", "verdict", "unveil", "reveal", "pivot"],
            },
            {
              point: "Identifies the closing asyndetic tricolon / clipped verbless phrases.",
              keywords: ["asyndet", "tricolon", "clipped", "verbless", "terse", "triad"],
            },
            {
              point: "Links the blunt, stripped-back ending to emotional shock, cold rejection, or sudden numbness.",
              keywords: ["numb", "rejection", "devastat", "blunt", "clinical", "crush", "deflation"],
            },
          ],
          hints: [
            "Examine three craft elements: (1) `— … —` interrupting the tear, (2) the `:` hinge, and (3) the final three-part comma list with zero verbs.",
            "Connect the slow-motion interruption before 'tore' to the abrupt, numb finality after the colon.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "structural-shifts-focus",
          marks: 4,
          question:
            "Read how a four-section nature essay opens and closes:\n\n*\"[Opening — Section 1] At noon I stepped off the commuter train with headphones clamped over my ears, irritated by mud splashing my suede shoes along the towpath.\n[Closing — Section 4] By dusk my headphones lay coiled silent in my coat pocket while I crouched ankle-deep in that same towpath mud, watching two kingfishers stitch blue fire across the reed-bed.\"*\n\nExplain how the **structural relationship** between opening and ending illuminates the narrator's transformation. *(4 marks)*",
          modelAnswer:
            "The writer frames the essay within a transformed cyclical structure that measures internal growth against recurring motifs. In the opening, sensory barriers and fussy urban vanity isolate the narrator from the natural world in petty irritation. Returning to the identical 'headphones' and 'mud' at dusk inverts both symbols: stowed equipment signals newfound auditory receptivity, while willingly crouching in mire proves self-forgetful immersion, culminating in reverent wonder at wildlife.",
          markScheme: [
            {
              point: "Identifies a transformed cyclical / circular frame echoing motifs from Section 1 in Section 4.",
              keywords: ["cyclical", "circular", "frame", "echo", "revisit", "motif", "mirror"],
            },
            {
              point: "Contrasts initial urban detachment, sensory blockage, or petty vanity in the opening.",
              keywords: ["detach", "vanity", "barrier", "block", "alienat", "urban", "petty"],
            },
            {
              point: "Explains the inversion of the two motifs (stowed headphones = open listening; embracing mud = surrender of vanity).",
              keywords: ["invert", "inversion", "receptiv", "immers", "surrender", "unplug", "willing"],
            },
            {
              point: "Links the closing image ('blue fire') to an endpoint of awe, reverence, or spiritual connection with nature.",
              keywords: ["awe", "reveren", "wonder", "epiphan", "communion", "transfigur", "transform"],
            },
          ],
          hints: [
            "Track the **two exact objects** that appear in both Section 1 and Section 4 (*headphones* and *towpath mud*).",
            "Explain how inverting both motifs (unplugged ears + welcoming mud) proves a transformed cyclical arc.",
          ],
        },
        {
          id: "lang-p1-reading-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "evaluating-writers-viewpoint",
          marks: 5,
          question:
            "Read this extract from a memoir about returning to a childhood island home now turned into luxury holiday lets:\n\n*\"Whitewashed cottages where herring-gutters once thawed split knuckles beside peat fires now boast 'artisanal driftwood chandeliers' at nine hundred pounds a weekend; the harbour has never looked cleaner, prettier, or more utterly uninhabited.\"*\n\nEvaluate how the writer uses **language, irony, and sentence craft** to convey their attitude toward the island's change. *(5 marks)*",
          modelAnswer:
            "The writer expresses bitter disillusionment and scathing elegiac critique toward gentrification hollowing out authentic working community. Juxtaposing visceral historical labour ('split knuckles') against commodified interior-design jargon framed in sardonic scare quotes exposes modern tourism as sterile, overpriced mimicry of coastal life. Following the semicolon fulcrum, the closing tricolon builds deceptive superficial praise across its first two comparatives ('cleaner, prettier') before executing a devastating ironic subversion on 'uninhabited' — indicting cosmetic preservation that erases living islanders.",
          markScheme: [
            {
              point: "Defines tone accurately as sardonic, scathing, disillusioned, or elegiac critique of gentrification.",
              keywords: ["sardonic", "scathing", "disillusion", "gentrif", "indignant", "elegiac", "bitter"],
            },
            {
              point: "Contrasts gritty working-class physical hardship against pampered, commodified tourist luxury.",
              keywords: ["juxtapos", "hardship", "labour", "working", "commodif", "luxury", "authentic"],
            },
            {
              point: "Unpacks the ironic scare quotes mocking pretentious marketing jargon.",
              keywords: ["scare quotes", "inverted commas", "pretentious", "jargon", "artificial", "mimic", "satir"],
            },
            {
              point: "Analyses the semicolon pivot and closing tricolon structure.",
              keywords: ["semicolon", "tricolon", "triad", "rule of three", "climax", "fulcrum"],
            },
            {
              point: "Explains the final sting/subversion ('uninhabited') — outward prettiness masking hollow social erasure.",
              keywords: ["subver", "sting", "hollow", "erasure", "sterile", "ghost", "museum", "empty"],
            },
          ],
          hints: [
            "Contrast the gritty historical detail ('split knuckles') with the scare-quoted phrase `'artisanal driftwood chandeliers'`.",
            "Then examine the semicolon hinge and the brilliant twist on the third item of the closing tricolon (*cleaner → prettier → more utterly uninhabited*).",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 questions: lang-p1-reading-ch-q01 .. q08, all "challenge", 3 hints)
  // =========================================================================
  challenge: [
    {
      id: "lang-p1-reading-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "explicit-implicit-inference",
      question:
        "Read this subtle memoir passage:\n\n*\"After my brother moved out to university, my father still set four placemats every evening at six, then carried the fourth plate back to the rack unwashed without anyone mentioning it.\"*\n\nWhy is the final detail *\"without anyone mentioning it\"* crucial to a **Grade-9 inference**?",
      options: [
        "It reveals a tacit, protective family conspiracy of silence — every member notices the father's ache of absence yet spares his vulnerability by refusing to embarrass him aloud.",
        "It proves the rest of the household had grown so distracted by evening routines that none of them ever noticed the extra unwashed plate on the table.",
        "It suggests the family enforced a rigid, cold ban on conversation during meals because everyone resented the brother for leaving home for university.",
        "It hints that the brother was secretly living upstairs without his parents' knowledge and coming down to eat alone after the house fell quiet at night.",
      ],
      answerIndex: 0,
      hints: [
        "First layer: setting four plates out of habit and putting one away untouched reveals the father's unspoken grief/missing his son.",
        "Second layer: look at the *whole family's* reaction in 'without anyone mentioning it' — could people sitting around a small table fail to see a fourth plate every night?",
        "Deduce why loving relatives would pretend not to see that ritual.",
      ],
      explanation:
        "Layered inference moves beyond the father's habitual longing to the collective household dynamic: silent tact protects his stoic dignity, turning unspoken restraint into tender solidarity.",
    },
    {
      id: "lang-p1-reading-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "lexical-imagery-effects",
      question:
        "Read this journalism line:\n\n*\"The glacial meltwater was **not unkind** to blistered ankles after twelve miles of scree.\"*\n\nWhat single Greek rhetorical term (7 letters, starting with **l**) names deliberate **ironic understatement** formed by negating the opposite adjective (*'not unkind'*, *'no small feat'*)?",
      answer: {
        type: "text",
        accept: ["litotes"],
        display: "litotes",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hyperbole"] },
          feedback: "Hyperbole is exaggeration; negating the contrary ('not unkind') for dry understatement is its quiet cousin starting with 'l'!",
        },
        {
          spec: { type: "text", accept: ["oxymoron"] },
          feedback: "An oxymoron fuses two contradictory words ('deafening silence'); double-negative understatement ('not unkind') is a 7-letter Greek term starting with 'l'.",
        },
      ],
      hints: [
        "Contrast it with *hyperbole* (overstatement).",
        "Formed by negating the opposite (*not bad*, *not unfamiliar*, *no minor storm*).",
        "7 letters: `l-i-t-o-t-e-s`.",
      ],
      solution: [
        "**Litotes** expresses an affirmative idea by negating its opposite (*'not unkind'* = intensely soothing), creating dry, stoic British restraint.",
      ],
    },
    {
      id: "lang-p1-reading-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "lexical-imagery-effects",
      question:
        "Read this war-zone reportage extract:\n\n*\"Dusk bandaged the shelled boulevard in violet gauze, briefly hiding the shrapnel pockmarks along the pharmacy wall.\"*\n\nEvaluate the **tension inside the medical metaphor** (*'bandaged… in violet gauze'*):",
      options: [
        "It implies that emergency medical teams and municipal builders repaired the shelled pharmacy wall under cover of twilight, restoring civic safety before daybreak returned.",
        "While 'bandaged' and 'gauze' evoke tender nursing care, the qualifier 'briefly hiding' exposes darkness as merely cosmetic dressing — twilight conceals civic trauma without healing it, guaranteeing morning will reopen the wound.",
        "It frames the bombardment in romantic aesthetic terms, suggesting the reporter regards purple twilight over ruined architecture as picturesque rather than genuinely tragic.",
        "It combines harsh plosive consonants in 'bandaged' and 'pockmarks' with pastel colour imagery to celebrate the soothing acoustic silence that follows artillery fire.",
      ],
      answerIndex: 1,
      hints: [
        "Identify the vehicle of the metaphor: nursing / wound-dressing ('bandaged', 'gauze', echoing 'pharmacy').",
        "Now test what a bandage does vs what 'briefly hiding' warns us.",
        "Does twilight cure the 'shrapnel pockmarks', or only mask them until dawn?",
      ],
      explanation:
        "Top-band analysis spots the **limits** of a metaphor: 'bandaged in violet gauze' offers tender visual solace, yet 'briefly hiding' reveals that dusk is only temporary camouflage over unhealed destruction.",
    },
    {
      id: "lang-p1-reading-ch-q04",
      kind: "short",
      commonError:
        "Calling the mirror pattern 'antithesis' — antithesis contrasts opposing ideas, while chiasmus reverses the same words in AB → BA order.",
      traps: [
        {
          spec: { type: "text", accept: ["antithesis"] },
          feedback: "Antithesis contrasts opposites. Reversing the same words in AB → BA order is chiasmus.",
        },
      ],
      difficulty: "challenge",
      guideRef: "sentence-punctuation-craft",
      question:
        "Read this sentence from an essay on political rhetoric:\n\n*\"We do not shape our cities merely to house traffic; our cities shape us to tolerate noise.\"*\n\nWhat Greek rhetorical/syntactic term (8 letters, starting with **c**) names this **AB → BA mirror-inversion** of words across two balanced clauses (*shape our cities → our cities shape*)?",
      answer: {
        type: "text",
        accept: ["chiasmus", "antimetabole"],
        display: "chiasmus",
      },
      hints: [
        "Notice the criss-cross X-pattern: [A: shape] [B: cities] → [B: cities] [A: shape].",
        "Named after the Greek letter *chi* (X).",
        "8 letters: `c-h-i-a-s-m-u-s`.",
      ],
      solution: [
        "**Chiasmus** (or **antimetabole**) reverses grammatical/lexical order in an ABBA cross-pattern to dramatise reciprocal cause and effect.",
      ],
    },
    {
      id: "lang-p1-reading-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "structural-shifts-focus",
      question:
        "In a four-section nature memoir about tracking wolves in winter, Sections 1–3 follow the narrator scrambling clumsily through snowdrifts finding only cold paw-prints; in the final two lines of Section 4, the narrator looks back up the ridge and sees two yellow eyes watching *his* own boot-tracks from above. How does this ending work **structurally**?",
      options: [
        "It creates an unresolved structural plot hole because the opening three sections failed to introduce the wolves' physical appearance before the closing scene.",
        "It shifts the genre into reassuring domestic comedy by implying the wolves are tame, food-conditioned animals shadowing winter hikers for leftover rations.",
        "It executes a closing perspective inversion — reversing hunter and hunted so the human tracker realises he has been the observed trespasser all along, reframing Sections 1–3's confidence as hubris.",
        "It resolves the memoir through linear chronological exposition, stepping back to present an objective zoological overview of seasonal wolf migration patterns.",
      ],
      answerIndex: 2,
      hints: [
        "Who held the gaze in Sections 1–3 (narrator tracking paw-prints), and who holds the elevated gaze in Section 4 (wolves watching his boot-tracks)?",
        "Ask how this final reversal forces us to re-evaluate the earlier sections.",
        "Identify the structural concept: inversion of observer and observed.",
      ],
      explanation:
        "Inverting the direction of surveillance at the final line flips human mastery on its head, compelling a retrospective re-reading of the entire expedition.",
    },
    {
      id: "lang-p1-reading-ch-q06",
      kind: "short",
      commonError:
        "Swapping the pair: analepsis is the flashback; prolepsis is the flash-forward.",
      traps: [
        {
          spec: { type: "text", accept: ["analepsis"] },
          feedback: "Analepsis is the flashback — the question asks for its opposite, the flash-forward (prolepsis).",
        },
      ],
      difficulty: "challenge",
      guideRef: "structural-shifts-focus",
      question:
        "Opposite to *analepsis* (flashback), what technical structural noun (9 letters, starting with **p**) names a **flash-forward** in which a memoirist briefly leaps ahead to reveal future consequences (*\"Ten years would pass before I understood why she locked that drawer\"*)?",
      answer: {
        type: "text",
        accept: ["prolepsis", "flash-forward", "flashforward", "foreshadowing"],
        display: "prolepsis",
      },
      hints: [
        "Prefix *pro-* = forward/beforehand; root *-lepsis* (matches *analepsis*).",
        "Memoirists use it to inject poignant hindsight into an early scene.",
        "9 letters: `p-r-o-l-e-p-s-i-s`.",
      ],
      solution: [
        "**Prolepsis** leaps forward in chronology, charging a present moment with ominous or poignant foreknowledge.",
      ],
    },
    {
      id: "lang-p1-reading-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "evaluating-writers-viewpoint",
      marks: 5,
      question:
        "Read this memoir extract about learning to dive off a high harbour wall aged twelve:\n\n*\"Below my curled toes, thirty feet of green Atlantic heaved like cold bottle-glass; behind me, four older boys chewed toffees in silence. Nobody pushed me — worse, nobody cared enough to dare me — so I stepped into empty air purely to survive the humiliation of climbing back down the ladder.\"*\n\nEvaluate how the writer uses **language, syntax, and retrospective perspective** to capture the psychology of adolescence. *(5 marks)*",
      modelAnswer:
            "With wry retrospective candour, the adult memoirist dismantles any myth of boyhood heroism, exposing peer insecurity as a stronger compulsion than physical danger. Below him, the simile 'like cold bottle-glass' hardens liquid sea into brittle, lacerating menace, balanced across a semicolon against the older youths' maddeningly casual indifference. Crucially, the parenthetical dashes refine the absence of coercion into a sharper adolescent wound: apathy hurts ego worse than bullying. Consequently, leaping becomes an ironic act of social self-preservation rather than bravery, demystifying courage with self-deprecating honesty.",
      markScheme: [
            {
              point: "Identifies wry retrospective distance / anti-heroic honesty demystifying adolescent bravery.",
              keywords: ["retrospect", "anti-hero", "demystif", "candour", "wry", "self-deprecat", "bravery", "courage"],
            },
            {
              point: "Unpacks the tactile/visual simile ('bottle-glass') — transforming water into hard, sharp, unforgiving solid threat.",
              keywords: ["simile", "solid", "sharp", "brittle", "hard", "lacerat", "unforgiving"],
            },
            {
              point: "Analyses the semicolon juxtaposition contrasting perilous drop below against bored peer indifference behind.",
              keywords: ["semicolon", "juxtapos", "indifferen", "casual", "apathy", "aloof"],
            },
            {
              point: "Explains the parenthetical dash aside — revealing that being ignored wounds adolescent ego worse than intimidation.",
              keywords: ["dash", "parenthetical", "ego", "ignored", "irrelevan", "peer", "status"],
            },
            {
              point: "Evaluates the closing paradox ('survive') — framing social shame as deadlier to a twelve-year-old than physical peril.",
              keywords: ["paradox", "ironic", "irony", "shame", "social", "embarrass", "fear"],
            },
          ],
      hints: [
        "Compare the physical threat below ('bottle-glass') balanced by a `;` against the social threat behind ('chewed toffees in silence').",
        "Zoom onto the parenthetical dash interruption `— worse, nobody cared enough to dare me —`: why is indifference 'worse' to a twelve-year-old?",
        "Unpack the ironic use of the survival verb 'survive' attached to 'humiliation' rather than the thirty-foot drop!",
      ],
    },
    {
      id: "lang-p1-reading-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "evaluating-writers-viewpoint",
      marks: 5,
      question:
        "Read this closing reflection from a naturalist's account of watching a stranded glacier calve into the Arctic sea:\n\n*\"A cathedral wall of blue ice sheared away in thunderous slow motion, sending turquoise shockwaves slapping against our hull while tourists on the upper deck cheered as though at summer fireworks. I lowered my camera without pressing the shutter: mourning has no business pretending to be spectacle.\"*\n\nEvaluate how the writer aligns the reader with their **moral and emotional viewpoint**. *(5 marks)*",
      modelAnswer:
            "The writer orchestrates a sharp tonal collision between sacred ecological bereavement and shallow consumer entertainment. Metaphorically casting the ice face as a 'cathedral wall' sanctifies the ancient landscape, framing glacial collapse as cultural and spiritual desecration rather than mere melting. Juxtaposing that solemnity against the incongruous simile of holiday 'fireworks' exposes the onlookers' celebratory applause as tragically oblivious. Finally, the single-action restraint of lowering the lens — hinged on an aphoristic colon verdict — models ethical witness, compelling the reader to reject voyeurism in favour of solemn elegiac grief.",
      markScheme: [
            {
              point: "Analyses the sacred/architectural metaphor ('cathedral') — sanctifying the glacier so collapse feels like desecration.",
              keywords: ["sacred", "sanctif", "reveren", "desecrat", "architectur", "monument", "spiritual"],
            },
            {
              point: "Explains the jarring juxtaposition / simile ('fireworks') — exposing tourist applause as shallow, blind, or incongruous.",
              keywords: ["juxtapos", "incongru", "oblivious", "shallow", "celebrat", "trivial", "simile"],
            },
            {
              point: "Unpacks the physical gesture of refusing to photograph — rejecting complicity in voyeuristic consumption.",
              keywords: ["voyeur", "complicit", "restraint", "refus", "ethical", "witness"],
            },
            {
              point: "Analyses the colon hinge introducing an authoritative, aphoristic moral verdict.",
              keywords: ["colon", "aphorism", "aphoristic", "verdict", "authorit", "hinge", "maxim"],
            },
            {
              point: "Evaluates reader alignment — shaming superficial spectatorship and positioning the reader inside elegiac ecological grief.",
              keywords: ["align", "elegiac", "ecological", "grief", "bereave", "condemn", "guilt"],
            },
          ],
      hints: [
        "Contrast the religious reverence of 'cathedral wall' against the frivolous simile 'as though at summer fireworks'.",
        "Ask why refusing to press the camera shutter is a powerful structural/ethical gesture.",
        "Analyse the colon (`:`) introducing the final eight-word moral maxim.",
      ],
    },
  ],
};
