import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 questions: lang-p1-composition-quiz-q01 .. q10)
  // =========================================================================
  quiz: [
    {
      id: "lang-p1-composition-quiz-q01",
      kind: "short",
      commonError:
        "Guessing 4 or 6 by counting paragraphs rather than the five planned camera-lens boxes of ZOOM-5.",
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "Not 4 — the ZOOM blueprint uses five camera-lens boxes (ZOOM-5).",
        },
      ],
      difficulty: "warmup",
      guideRef: "sensory-zoom-atmosphere",
      question:
        "How many planned camera-lens boxes make up the **ZOOM-___** planning blueprint for a Paper 1B descriptive composition? Give the single number.",
      answer: { type: "number", value: 5, display: "5" },
      hints: [
        "Wide Sky → Mid-Ground → Micro-Object → Non-Visual Senses → Sky Return.",
      ],
      solution: [
        "The **ZOOM-5** descriptive plan uses **5** structured camera boxes to sustain rich atmosphere without plot bloat.",
      ],
    },
    {
      id: "lang-p1-composition-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "sensory-zoom-atmosphere",
      question:
        "Which 9-letter sensory adjective (starting with **o**) refers specifically to imagery of **smell** (such as *damp wool, ozone, scorched toast, or cardamom*)?",
      answer: {
        type: "text",
        accept: ["olfactory"],
        display: "olfactory",
      },
      traps: [
        {
          spec: { type: "text", accept: ["auditory", "tactile", "gustatory"] },
          feedback: "Auditory = sound, tactile = touch, gustatory = taste; smell starts with 'olf-'!",
        },
      ],
      hints: [
        "Connected to the brain's *olfactory bulb* — wired directly to memory and atmosphere.",
        "9 letters: `o-l-f-a-c-t-o-r-y`.",
      ],
      solution: [
        "**Olfactory** imagery appeals to the sense of smell, anchoring descriptive scenes in visceral memory.",
      ],
    },
    {
      id: "lang-p1-composition-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cyclical-nonlinear-structure",
      question:
        "Why does restricting your narrative's present-day action to roughly **10–15 minutes of clock time** dramatically improve your Paper 1B mark?",
      options: [
        "It prevents rushed 'and then…' plot summary, giving you space to craft sensory micro-detail, interiority, and a transformed recurring motif.",
        "OxfordAQA Paper 1B examiners stop awarding AO5 credit once a narrative exceeds fifteen sentences, penalising any story that spans longer.",
        "Restricting clock time is mandatory because OxfordAQA forbids past-perfect flashbacks or reflective memory shifts inside Section B fiction.",
        "Compressing the action into a brief real-time window eliminates the need for complex sentence punctuation, dialogue layout, or paragraph shifts.",
      ],
      answerIndex: 0,
      hints: [
        "Compare cramming five years of plot into 550 words vs zooming deeply into one decisive ten-minute encounter.",
        "Depth beats breadth in short literary fiction.",
      ],
      explanation:
        "A tight real-time window forces **scene craft over summary**, unlocking top-band sensory immersion and psychological nuance.",
    },
    {
      id: "lang-p1-composition-quiz-q04",
      kind: "short",
      commonError:
        "Calling it a 'run-on sentence' (a broader term) or 'fragment'; two independent clauses joined only by a comma is specifically a comma splice.",
      traps: [
        {
          spec: { type: "text", accept: ["run-on sentence", "run on sentence", "run-on", "fused sentence"] },
          feedback: "A run-on is the broader family. Two full clauses joined by just a comma is a comma splice.",
        },
        {
          spec: { type: "text", accept: ["sentence fragment", "fragment"] },
          feedback: "Both halves are complete clauses, so it isn't a fragment — the error is the comma splice joining them.",
        },
      ],
      difficulty: "core",
      guideRef: "syntax-rhythm-punctuation",
      question:
        "Read this faulty draft sentence:\n\n*\"Thunder cracked above the stadium, spectators sprinted for the exit tunnels.\"*\n\nWhat **two-word** punctuation error occurs when two complete independent clauses are joined by a comma alone?",
      answer: {
        type: "text",
        accept: ["comma splice", "comma splicing"],
        display: "comma splice",
      },
      hints: [
        "Both sides (*'Thunder cracked above the stadium'* and *'spectators sprinted…'*) are full independent clauses.",
        "Two words: `comma s_____`.",
      ],
      solution: [
        "Fusing two independent clauses with only a comma is a **comma splice**; cure it with a semicolon (`;`), colon (`:`), full stop, or conjunction.",
      ],
    },
    {
      id: "lang-p1-composition-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "syntax-rhythm-punctuation",
      question:
        "Which punctuation mark best replaces the illegal comma in *\"Outside, sleet lashed the carriage window, inside, amber lamps glowed warm against the velvet seats\"* to highlight balanced spatial contrast?",
      options: [
        "Question mark (`?`)",
        "Semicolon (`;`)",
        "Apostrophe (`'`)",
        "Inverted commas (`\"\"`)",
      ],
      answerIndex: 1,
      hints: [
        "Notice the parallel antithesis: *'Outside, sleet lashed…'* vs *'inside, amber lamps glowed…'*.",
        "Which mark acts as a poised seesaw balancing two equal independent clauses?",
      ],
      explanation:
        "A **semicolon** (`;`) after *'window'* cures the comma splice while balancing exterior storm against interior warmth.",
    },
    {
      id: "lang-p1-composition-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "discursive-argument-architecture",
      question:
        "In a discursive essay, what 12-letter gerund (`steel_______`, opposite of *strawmanning*) means presenting the **strongest, fairest version** of an opposing argument before refuting it on deeper grounds?",
      answer: {
        type: "text",
        accept: ["steelmanning", "steelman"],
        display: "steelmanning",
      },
      traps: [
        {
          spec: { type: "text", accept: ["strawmanning", "strawman"] },
          feedback: "Strawmanning mocks a *weak* caricature; building the *strongest* fair version uses a stronger metal than straw!",
        },
      ],
      hints: [
        "Contrast flimsy *straw* (weak caricature) with strong *steel* (fairest counter-case).",
        "12 letters: `steelmanning`.",
      ],
      solution: [
        "**Steelmanning** honours the opposing side's best logic (*'Admittedly,…'*) before pivoting to show why your thesis holds on deeper principle.",
      ],
    },
    {
      id: "lang-p1-composition-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "discursive-argument-architecture",
      question:
        "Why should you NEVER write *\"According to a survey done yesterday at Oxford University, 97.3% of teenagers hate books\"* in a discursive exam?",
      options: [
        "OxfordAQA's discursive mark scheme accepts numerical survey claims only when candidates quote percentages rounded to at least four decimal places.",
        "Examiners immediately recognise implausible fabricated statistics as juvenile filler; concrete real-world mechanisms and logical reasoning are far more persuasive.",
        "Citing real or fictional universities inside an argumentative composition breaches broadsheet style rules and shifts the piece into academic coursework.",
        "Formal British English conventions require every statistical figure and percentage in Paper 1B essays to be written out in Roman numerals or full words.",
      ],
      answerIndex: 1,
      hints: [
        "Ask how credible a blatantly invented '97.3% yesterday' survey sounds to an experienced adult marker.",
        "Genuine discursive authority comes from logic, nuance, and authentic examples.",
      ],
      explanation:
        "Fabricated pseudo-precise statistics undermine ethos immediately; top-band writers persuade through **conceptual logic and real-world observation**.",
    },
    {
      id: "lang-p1-composition-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      guideRef: "ambitious-register-proofreading",
      question:
        "Fill the gap with the exact error-free word (`affect` or `effect`):\n\n*\"Prolonged sleep deprivation can severely ______ a teenager's concentration.\"*",
      answer: {
        type: "text",
        accept: ["affect"],
        display: "affect",
      },
      traps: [
        {
          spec: { type: "text", accept: ["effect"] },
          feedback: "After modal 'can', you need the transitive **verb** meaning 'influence/impact' (starts with 'a')!",
        },
      ],
      hints: [
        "After *'can severely'*, you need a **verb** meaning *to influence/harm* (`a_____`).",
      ],
      solution: [
        "**affect** is the standard verb meaning *to influence or impact* (*effect* is normally a noun, as in *a harmful effect*).",
      ],
    },
    {
      id: "lang-p1-composition-quiz-q09",
      kind: "short",
      commonError:
        "Planning to spend all 45 minutes writing and leaving no proofreading time; reserve the final 5 minutes for PACE.",
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "Too long — the PACE audit takes the final 5 minutes, leaving 40 for planning and writing.",
        },
      ],
      difficulty: "warmup",
      guideRef: "ambitious-register-proofreading",
      question:
        "How many minutes at the end of your 45-minute Section B slot should always be reserved for the **PACE** proofreading audit? Give the number.",
      answer: { type: "number", value: 5, display: "5" },
      hints: [
        "`5 min` Plan + `35 min` Draft + `___ min` PACE Audit = 45 minutes.",
      ],
      solution: [
        "Reserve **5** full minutes at the close to hunt down comma splices, tense drift, and homophone slips.",
      ],
    },
    {
      id: "lang-p1-composition-quiz-q10",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "ambitious-register-proofreading",
      question:
        "In the **PACE** proofreading checklist, what does **A** stand for?",
      options: [
        "Alliteration & Assonance audit (inserting repeated sound patterns into every paragraph)",
        "Agreement & Tense consistency (eliminating accidental shifts between past and present)",
        "Amplified Exclamation check (adding emphatic punctuation to heighten dramatic endings)",
        "Abridged Paragraph trimming (merging shorter narrative breaks into one continuous block)",
      ],
      answerIndex: 1,
      hints: [
        "P = Punctuation, A = ?, C = Confusables, E = Echoes.",
      ],
      explanation:
        "**A** stands for **Agreement & Tense consistency** — catching subject-verb mismatches and unintended tense drift.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers x 15 questions: 10 short + 5 written each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: Descriptive Zoom, Narrative Craft & Punctuation
    // -----------------------------------------------------------------------
    {
      id: "lang-p1-composition-p1",
      title: "Paper 1B Practice 1 — Descriptive, Narrative & Punctuation Craft",
      questions: [
        {
          id: "lang-p1-composition-p1-q01",
          kind: "short",
          commonError:
            "Confusing tactile (touch) with 'textural' or with other senses such as auditory or olfactory.",
          traps: [
            {
              spec: { type: "text", accept: ["textural", "touch"] },
              feedback: "Touch-imagery has a dedicated 7-letter adjective starting with t: tactile.",
            },
          ],
          difficulty: "warmup",
          guideRef: "sensory-zoom-atmosphere",
          question:
            "Which 7-letter sensory adjective (starting with **t**, related to *contact*) refers to imagery of **touch, texture, and temperature** (such as *slick cobbles, splintered pine, numbing sleet*)?",
          answer: {
            type: "text",
            accept: ["tactile"],
            display: "tactile",
          },
          hints: [
            "Starts with `tact-` (Latin for touch): `t-a-c-t-i-l-e`.",
          ],
          solution: [
            "**Tactile** imagery engages physical touch, surface texture, and temperature.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q02",
          kind: "short",
          commonError:
            "Reversing the principle ('tell don't show') or writing 'show and tell', which is the opposite of the craft rule.",
          traps: [
            {
              spec: { type: "text", accept: ["show and tell", "tell don't show", "tell dont show"] },
              feedback: "Reversed: the rule is show, don't tell — evoke feelings through physical details.",
            },
          ],
          difficulty: "core",
          guideRef: "sensory-zoom-atmosphere",
          question:
            "What hyphenated **three-word** craft principle (`show-_____-____`) instructs writers to evoke emotion through physical details and sensory evidence rather than naming abstract feelings like *'sad'* or *'scary'*?",
          answer: {
            type: "text",
            accept: ["show-don't-tell", "show don't tell", "show dont tell", "show, don't tell"],
            display: "show-don't-tell",
          },
          hints: [
            "Three words contrasting demonstrating concrete evidence (`show`) against baldly stating emotions (`tell`).",
            "Middle contraction: `don't`.",
          ],
          solution: [
            "**Show-don't-tell** replaces flat emotion labels with concrete sensory cues so the reader experiences the atmosphere actively.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q03",
          kind: "short",
          commonError:
            "Misspelling it as 'petricore' or 'petrichore' (it ends in -chor), or giving the general adjective 'olfactory' instead of the specific noun for rain-on-dry-earth scent.",
          traps: [
            {
              spec: { type: "text", accept: ["olfactory"] },
              feedback: "Olfactory is the general adjective for smell; the specific 9-letter noun starting with p for rain on dry earth is petrichor.",
            },
          ],
          difficulty: "core",
          guideRef: "sensory-zoom-atmosphere",
          question:
            "What 9-letter noun (starting with **p**, coined by scientists in 1964 from Greek for 'stone-essence') names the crisp, earthy **scent released when rain falls onto dry soil or hot tarmac** — a favourite Grade-9 olfactory word?",
          answer: {
            type: "text",
            accept: ["petrichor"],
            display: "petrichor",
          },
          hints: [
            "Starts with `petr-` (stone) + `ichor` (ethereal fluid).",
            "9 letters: `p-e-t-r-i-c-h-o-r`.",
          ],
          solution: [
            "**Petrichor** is the exact olfactory noun for the earthy scent rising when first rain strikes dry ground.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q04",
          kind: "short",
          commonError:
            "Answering 'symbol' — a symbol can appear once, whereas a motif recurs and develops through the narrative.",
          traps: [
            {
              spec: { type: "text", accept: ["symbol"] },
              feedback: "A symbol can appear once. A recurring image that tracks change is a motif.",
            },
          ],
          difficulty: "core",
          guideRef: "cyclical-nonlinear-structure",
          question:
            "In narrative architecture, what **5-letter** noun (starting with **m**) names a recurring concrete object or image (such as a cracked watch or unposted envelope) whose shifting context tracks the protagonist's internal change?",
          answer: {
            type: "text",
            accept: ["motif"],
            display: "motif",
          },
          hints: [
            "5 letters: `m-o-t-i-f`.",
            "Plant it in Paragraph 1 and revisit it in transformed shape at the close.",
          ],
          solution: [
            "A recurring **motif** binds an exam narrative into a tight, resonant loop.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q05",
          kind: "short",
          commonError:
            "Answering 'past simple' or 'present perfect'; the 'had + past participle' form that marks a flashback is the past perfect.",
          traps: [
            {
              spec: { type: "text", accept: ["past simple", "simple past", "present perfect"] },
              feedback: "The flashback form 'had + past participle' (had walked) is the past perfect.",
            },
          ],
          difficulty: "core",
          guideRef: "cyclical-nonlinear-structure",
          question:
            "When transitioning from a past-simple scene (*'She paused at the gate'*) backward into a flashback, what **two-word** verb tense (`____ _______`, using `had + past participle`) cleanly marks the jump into earlier time?",
          answer: {
            type: "text",
            accept: ["past perfect", "pluperfect"],
            display: "past perfect",
          },
          hints: [
            "Formed with *had + past participle* (e.g. *'Ten years earlier, he had planted…'*).",
            "Two words: `past p______` (also known as the *pluperfect*).",
          ],
          solution: [
            "The **past perfect** (*had + past participle*) establishes 'the past before the narrative past' cleanly without tense confusion.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q06",
          kind: "short",
          commonError:
            "Calling it a 'comma splice' or 'tense error'; the opening phrase has no correct subject to attach to, so it is a dangling modifier.",
          traps: [
            {
              spec: { type: "text", accept: ["comma splice", "run-on"] },
              feedback: "There is only one independent clause here. The problem is the opening phrase attaching to the wrong subject — a dangling modifier.",
            },
          ],
          difficulty: "core",
          guideRef: "syntax-rhythm-punctuation",
          question:
            "Read this comical student blunder:\n\n*\"Galloping wildly across the moor, the church spire came into view.\"*\n\nWhat **two-word** grammatical error (`dangling ________` or `dangling __________`) makes it sound as though the stone church spire is galloping on horseback?",
          answer: {
            type: "text",
            accept: ["dangling modifier", "dangling participle", "misplaced modifier"],
            display: "dangling modifier",
          },
          hints: [
            "An opening `-ing` phrase must attach directly to the subject right after the comma — otherwise it 'dangles'!",
            "Two words: `dangling m_______` (or `dangling participle`).",
          ],
          solution: [
            "A **dangling modifier** (or **dangling participle**) occurs when a fronted participial phrase lacks its intended human subject after the comma (*fix: 'Galloping wildly across the moor, I spotted the church spire'*).",
          ],
        },
        {
          id: "lang-p1-composition-p1-q07",
          kind: "short",
          commonError:
            "Believing a colon can follow an unfinished phrase like 'such as:' or 'are:'; the words before a colon must form a complete clause.",
          traps: [
            {
              spec: { type: "text", accept: ["incomplete", "fragment", "dependent"] },
              feedback: "No — the left side of a colon must be a complete independent clause. 'Ingredients are: …' is a classic error.",
            },
          ],
          difficulty: "core",
          guideRef: "syntax-rhythm-punctuation",
          question:
            "In prose punctuation, must the clause standing **to the left of a colon (`:`)** be grammatically **complete** (independent) or **incomplete** (a fragment ending in 'such as' or 'are')? Answer with the single word `complete` or `incomplete`.",
          answer: {
            type: "text",
            accept: ["complete", "independent"],
            display: "complete",
          },
          hints: [
            "Recall why *'My hobbies are: reading and swimming'* is wrong, whereas *'One sound broke the hush: a snapping twig'* is right.",
            "Test the left side of that second example!",
          ],
          solution: [
            "In formal/literary prose, the clause before a colon must be grammatically **complete** (an independent clause).",
          ],
        },
        {
          id: "lang-p1-composition-p1-q08",
          kind: "short",
          commonError:
            "Writing 'definately', 'definitly', or 'defiantly'; remember the root word 'finite' — de-FINITE-ly.",
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "Write the **correct spelling** of the notoriously misspelt 10-letter adverb in this sentence (fixing *'definately'*):\n\n*\"Unchecked light pollution will __________ alter nocturnal bird migration.\"*",
          answer: {
            type: "text",
            accept: ["definitely"],
            display: "definitely",
          },
          hints: [
            "Built on the root word **finite** (`de + finite + ly`) — zero letter 'a' anywhere!",
            "10 letters: `d-e-f-i-n-i-t-e-l-y`.",
          ],
          solution: [
            "**definitely** comes from *finite* (`de-finite-ly`), never *'-ately'*.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q09",
          kind: "short",
          commonError:
            "Writing 'seperate' with an e in the middle; remember there is 'a rat' in sep-a-rat-e.",
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "Write the **correct spelling** of the 8-letter verb/adjective in this sentence (fixing *'seperate'*):\n\n*\"Glass partitions __________ the quiet reading room from the bustling foyer.\"*",
          answer: {
            type: "text",
            accept: ["separate"],
            display: "separate",
          },
          hints: [
            "Memory trick: there is **'a rat'** (`s-e-p-a-r-a-t-e`) in the middle!",
            "Check vowel 2: `a`, not `e`.",
          ],
          solution: [
            "**separate** is spelt `s-e-p-a-r-a-t-e`.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "Fill the gap with the exact error-free homophone (`their` or `there`):\n\n*\"Along the storm-battered quay, fishermen stowed _____ salt-stiffened nets inside stone sheds.\"*",
          answer: {
            type: "text",
            accept: ["their"],
            display: "their",
          },
          traps: [
            {
              spec: { type: "text", accept: ["there"] },
              feedback: "'there' refers to place (contains 'here'); belonging to the fishermen requires the possessive determiner ending '-eir'!",
            },
          ],
          hints: [
            "The nets belong to the fishermen — you need the **possessive** form, not the place word *there*.",
            "5 letters: `t-h-e-i-r`.",
          ],
          solution: [
            "**their** is the plural possessive determiner (*belonging to them*), distinct from *there* (place) and *they're* (*they are*).",
          ],
        },
        {
          id: "lang-p1-composition-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "sensory-zoom-atmosphere",
          marks: 4,
          question:
            "Rewrite and expand this flat telling draft into a **Grade-9 descriptive paragraph** (2–4 sentences) describing a deserted train platform at midnight — **without** using the banned words *cold*, *empty*, *quiet*, or *scary*:\n\n*\"Draft: The platform was cold, empty, quiet, and scary late at night.\"* *(4 marks)*",
          modelAnswer:
            "Frost glazed the iron benches in brittle silver while overhead sodium bulbs buzzed with a faint electrical hum across deserted concrete. Acrid diesel lingered in the bitter draught funnelling out of the tunnel mouth; down the line, a solitary torn poster slapped rhythmically against rusted railings. Not a single footstep disturbed the waiting-room shadows.",
          markScheme: [
            {
              point: "Shows sub-zero/chilly temperature physically (e.g. frost, sleet, breath-plumes, numb, draught, ice) without 'cold'.",
              keywords: ["frost", "ice", "icy", "sleet", "draught", "shiver", "numb", "bitter", "breath", "glaz"],
            },
            {
              point: "Engages auditory or olfactory detail (e.g. hum, buzz, drip, click, diesel, ozone, rust) to deepen sensory immersion.",
              keywords: ["hum", "buzz", "click", "drip", "slap", "diesel", "ozone", "scent", "smell", "echo", "hiss"],
            },
            {
              point: "Includes a concrete micro-zoom detail (e.g. bench, poster, timetable, cigarette-ash, puddle, railing).",
              keywords: ["bench", "poster", "railing", "puddle", "slat", "trolley", "tile", "lamp", "bulb"],
            },
            {
              point: "Demonstrates varied sentence structure or high-impact punctuation (semicolon, colon, dash, or crisp short/minor sentence).",
              keywords: [";", ":", "—", "not a", "nobody", "nothing", "solitary", "abandoned"],
            },
          ],
          hints: [
            "Replace *cold* with frost/breath/draught, *quiet* with tiny amplified sounds (buzzing bulb, flapping poster), and *empty* with abandoned objects.",
            "Include at least one semicolon (`;`), colon (`:`), or crisp short closing sentence!",
          ],
          commonError:
            "Simply swapping 'cold and scary' for 'chilly and frightening' is still abstract telling rather than sensory showing.",
        },
        {
          id: "lang-p1-composition-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "cyclical-nonlinear-structure",
          marks: 4,
          question:
            "Design a **tight cyclical micro-narrative frame** for the prompt *Write a story about letting go of an old grudge*. Write:\n1. A **1–2 sentence in medias res opening** planting a specific object motif.\n2. A **1–2 sentence transformed cyclical ending** revisiting that exact motif to show forgiveness. *(4 marks)*",
          modelAnswer:
            "Opening: Thumb pressed against the jagged crease of the unposted letter inside my coat pocket, I paused before knocking on my brother's scarred oak door; three winters of stubborn silence weighed heavier than paper.\nClosing: As kettle-steam misted the kitchen window between us, I unfolded that creased sheet and fed its corners into the stove-flame — watching bitter ink curl harmlessly into warm grey ash.",
          markScheme: [
            {
              point: "Plunges in medias res into an immediate physical gesture or doorway threshold rather than morning backstory.",
              keywords: ["paused", "knock", "threshold", "pocket", "palm", "clutch", "held", "stood", "step"],
            },
            {
              point: "Plants a clear, concrete physical object motif (e.g. letter, key, watch, photograph, ring, cup).",
              keywords: ["letter", "key", "watch", "photograph", "ring", "cup", "coin", "envelope", "sheet", "note"],
            },
            {
              point: "Revisits the identical motif at the close with a physical action transforming its meaning (unfolding, warming, releasing, sharing).",
              keywords: ["unfold", "warm", "ash", "open", "between us", "releas", "set down", "offered", "hand"],
            },
            {
              point: "Maintains restrained literary register free of melodrama or 'it was all a dream' clichés.",
              keywords: ["silence", "winter", "steam", "light", "ink", "scar", "quiet", "dust"],
            },
          ],
          hints: [
            "Choose one domestic object (*unposted letter, brass latchkey, cracked mug*) to appear in both Opening and Closing.",
            "Start right at the threshold (*in medias res*) and invert how the narrator holds or treats that object at the close.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "syntax-rhythm-punctuation",
          marks: 4,
          question:
            "Rewrite this monotonous, comma-spliced student paragraph into **Grade-9 rhythmic prose** using a **fronted participial/prepositional opener**, **zero comma splices**, **one accurate semicolon or colon**, and a **crisp short sentence drop**:\n\n*\"Faulty draft: I climbed up the lighthouse stairs. My legs hurt a lot, the wind howled outside the narrow windows. I reached the top lantern room, the glass was broken.\"* *(4 marks)*",
          modelAnswer:
            "Hauling myself up the spiralling iron steps, I felt every calf muscle burn while Atlantic gusts shrieked past the slit-windows; still the staircase coiled upward into gloom. At last my bruised knuckles pushed open the lantern-room trapdoor: shattered prisms littered the floorboards. Nothing burned inside.",
          markScheme: [
            {
              point: "Opens with a fronted participial (-ing/-ed) or prepositional phrase breaking repetitive 'I' starts.",
              keywords: ["hauling", "climbing", "clutching", "gasping", "beneath", "up the", "spiralling", "grasping"],
            },
            {
              point: "Eliminates comma splices using an accurate semicolon (;) or subordinative conjunction.",
              keywords: [";", "while", "although", "whereas"],
            },
            {
              point: "Deploys an accurate colon (:) or em-dash (—) to spotlight the broken lantern-room discovery.",
              keywords: [":", "—", "shattered", "splintered", "jagged", "prisms", "shards"],
            },
            {
              point: "Upgrades weak lexis ('hurt a lot', 'howled') and lands a crisp short/minor arrest.",
              keywords: ["burn", "ached", "shriek", "wail", "nothing", "darkness", "empty", "extinguished", "dead"],
            },
          ],
          hints: [
            "Open with an `-ing` phrase (*'Hauling myself up…'*), replace the first comma splice with `;` or `while`, and unveil the shattered glass after a dramatic `:`!",
            "Finish with a 2–4 word short or minor sentence drop.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "discursive-argument-architecture",
          marks: 4,
          question:
            "Write a **Grade-9 discursive counter-argument & rebuttal paragraph** (3–4 sentences) on the motion: *'Homework should be abolished in secondary schools.'* Steelman the strongest case **for** abolishing homework first, then pivot cleanly to argue why **targeted** independent practice still matters. *(4 marks)*",
          modelAnswer:
            "Admittedly, critics of evening assignments rightly expose how hours of repetitive worksheet busywork can cannibalise adolescent sleep, family conversation, and extracurricular creativity without deepening genuine understanding. Nevertheless, abolishing independent study altogether confuses bad design with the principle of self-directed mastery; thirty minutes of focused retrieval or unhurried essay drafting teaches young minds to wrestle with difficulty when no teacher is hovering nearby. Ultimately, reform requires pruning mindless volume rather than amputating intellectual autonomy.",
          markScheme: [
            {
              point: "Opens with a fair concessive marker ('Admittedly', 'Granted', 'Undeniably') steelmanning genuine harms of excessive busywork.",
              keywords: ["admittedly", "granted", "undeniably", "proponents", "critics", "sleep", "burnout", "busywork", "wellbeing"],
            },
            {
              point: "Executes a clean dialectical pivot ('Nevertheless', 'However', 'Yet', ';') without ranting.",
              keywords: ["nevertheless", "however", "nonetheless", "yet", "conversely", "overlooks", "confuses"],
            },
            {
              point: "Articulates the deeper educational mechanism of independent practice (autonomy, retrieval, resilience, self-discipline).",
              keywords: ["autonom", "independen", "retriev", "mastery", "resilien", "self-direct", "consolidat"],
            },
            {
              point: "Concludes with nuanced synthesis distinguishing quality/calibration from total abolition.",
              keywords: ["ultimately", "calibrat", "targeted", "prun", "quality", "reform", "balance", "nuance"],
            },
          ],
          hints: [
            "Start with *'Admittedly,…'* acknowledging sleep/burnout caused by mindless busywork.",
            "Pivot with *'Nevertheless,…'* to distinguish *excessive busywork* from *calibrated independent mastery*.",
          ],
        },
        {
          id: "lang-p1-composition-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "ambitious-register-proofreading",
          marks: 5,
          question:
            "Run a **PACE Audit** on this flawed exam paragraph — rewrite it cleanly in full, fixing **five technical/stylistic errors** (comma splice, `there/their` homophone, `affect/effect`, tense drift, and weak 'very' overwriting):\n\n*\"Flawed text: Tourism has severely effected the fragile reef, boats drop heavy anchors onto there coral shelves every afternoon. Yesterday a diver swims past the bleached ridge and saw a very sad scene.\"* *(5 marks)*",
          modelAnswer:
            "Unregulated tourism has severely affected the lagoon reef; pleasure-vessels lower iron anchors onto their delicate limestone ledges each afternoon. Yesterday a marine diver swam past the blanched ridge and witnessed a desolate, haunting graveyard.",
          markScheme: [
            {
              point: "Corrects homophone 'effected' to transitive verb 'affected'.",
              keywords: ["affected"],
            },
            {
              point: "Cures the comma splice using a semicolon (;), colon (:), or subordinative conjunction.",
              keywords: [";", ":", "because", "while", "where"],
            },
            {
              point: "Corrects place-adverb 'there' to possessive determiner 'their'.",
              keywords: ["their"],
            },
            {
              point: "Fixes tense drift 'swims' to past simple 'swam'.",
              keywords: ["swam"],
            },
            {
              point: "Upgrades weak 'saw a very sad scene' into precise, formal descriptive lexis without 'very'.",
              keywords: ["witnessed", "desolat", "haunting", "barren", "bleak", "graveyard", "devastat", "skeletal", "bereft"],
            },
          ],
          hints: [
            "Check C (`effected` → ? and `there` → ?), P (comma splice after `reef`), and A (`Yesterday a diver swims` → ?).",
            "Finally, cut `'saw a very sad scene'` and replace it with precision verbs/modifiers like *witnessed a desolate graveyard*.",
            "Avoid copying 4+ unchanged words in a row so your clean rewrite shines!",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: Discursive Architecture, Register & Advanced Polish
    // -----------------------------------------------------------------------
    {
      id: "lang-p1-composition-p2",
      title: "Paper 1B Practice 2 — Discursive Craft, Syntax & SPaG Mastery",
      questions: [
        {
          id: "lang-p1-composition-p2-q01",
          kind: "short",
          commonError:
            "Confusing gustatory (taste) with olfactory (smell), or misspelling it as 'gustatery'.",
          traps: [
            {
              spec: { type: "text", accept: ["olfactory"] },
              feedback: "Olfactory is smell. Taste-imagery is gustatory.",
            },
          ],
          difficulty: "warmup",
          guideRef: "sensory-zoom-atmosphere",
          question:
            "Which 9-letter sensory adjective (starting with **g**, related to *gusto*) refers specifically to imagery of **taste** (such as *briny sea-spray, metallic blood-tang, bitter espresso*)?",
          answer: {
            type: "text",
            accept: ["gustatory"],
            display: "gustatory",
          },
          hints: [
            "Latin *gustare* (to taste): `g-u-s-t-a-t-o-r-y`.",
          ],
          solution: [
            "**Gustatory** imagery appeals to taste.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q02",
          kind: "short",
          commonError:
            "Calling it 'onomatopoeia' or 'imagery'; blending two different senses in one phrase is synaesthesia.",
          traps: [
            {
              spec: { type: "text", accept: ["onomatopoeia", "imagery", "sensory imagery"] },
              feedback: "Not specific enough — mixing two senses (sound described as texture) is synaesthesia.",
            },
          ],
          difficulty: "core",
          guideRef: "sensory-zoom-atmosphere",
          question:
            "What 12-letter Greek term (starting with **s**, spelling `syn_________`) names blending **two distinct senses** in one phrase — such as *'a velvet hush'* or *'acid-yellow sirens'*?",
          answer: {
            type: "text",
            accept: ["synaesthesia", "synesthesia"],
            display: "synaesthesia",
          },
          hints: [
            "Roots *syn-* (together) + *aisthesis* (sensation).",
            "UK spelling `s-y-n-a-e-s-t-h-e-s-i-a` (US `synesthesia` also accepted).",
          ],
          solution: [
            "**Synaesthesia** wires two sensory channels together (*velvet* touch + *hush* sound) for vivid descriptive originality.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q03",
          kind: "short",
          commonError:
            "Mixing up the letters of TiPToP: Ti = time, P = place, To = topic, P = person.",
          traps: [
            {
              spec: { type: "text", accept: ["topic"] },
              feedback: "Topic is 'To'. 'Ti' stands for time — a new paragraph whenever chronology jumps.",
            },
          ],
          difficulty: "core",
          guideRef: "cyclical-nonlinear-structure",
          question:
            "Under the **TiPToP** paragraphing rule, write the single word represented by **Ti** (`____`) — reminding you to start a new paragraph whenever chronology jumps forward or backward.",
          answer: {
            type: "text",
            accept: ["time"],
            display: "time",
          },
          hints: [
            "**Ti**me · **P**lace · **To**pic · **P**erson.",
            "Give the 4-letter word for **Ti**.",
          ],
          solution: [
            "**Ti** stands for **Time** — every chronological jump or flashback demands a clean paragraph break.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q04",
          kind: "short",
          commonError:
            "Choosing 'comma' or 'colon'; when list items already contain commas, semicolons separate the larger items.",
          traps: [
            {
              spec: { type: "text", accept: ["comma", "commas"] },
              feedback: "The items already contain commas, so more commas would confuse. Use semicolons between the big items.",
            },
            {
              spec: { type: "text", accept: ["colon", "colons"] },
              feedback: "A colon introduces a list; it doesn't separate items inside it. That job belongs to the semicolon.",
            },
          ],
          difficulty: "core",
          guideRef: "syntax-rhythm-punctuation",
          question:
            "In a complex descriptive list whose items already contain internal commas (*\"stalls of bruised figs, dates, and plums_ braziers of cumin, lamb, and charcoal_ and pyramids of saffron\"*), which **single punctuation mark** (as a word, 9 letters) must fill the underscores to prevent confusion?",
          answer: {
            type: "text",
            accept: ["semicolon", "semi-colon", "semicolons"],
            display: "semicolon",
          },
          hints: [
            "Acts as a 'super-comma' dividing multi-comma list items cleanly.",
            "9 letters starting with 's'.",
          ],
          solution: [
            "**Semicolons** (`;`) divide complex list items that already contain internal commas.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "discursive-argument-architecture",
          question:
            "What 9-letter Greek rhetorical noun (starting with **h**) names **posing a pointed question and immediately answering it yourself** (e.g. *'Does surveillance guarantee safety? Rarely: trust erodes faster than crime falls.'*)?",
          answer: {
            type: "text",
            accept: ["hypophora"],
            display: "hypophora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["rhetorical question"] },
              feedback: "A rhetorical question is left unanswered; asking AND immediately answering it has a 9-letter Greek name starting with 'hyp-'!",
            },
          ],
          hints: [
            "Starts with `hypo-` and ends with `-phora` (9 letters).",
            "Stronger in discursive essays than leaving rhetorical questions hanging.",
          ],
          solution: [
            "**Hypophora** pairs an incisive question with an immediate authoritative answer.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q06",
          kind: "short",
          commonError:
            "Answering 'juxtaposition' (placing things side by side) or 'chiasmus'; balanced clauses with opposite ideas form antithesis.",
          traps: [
            {
              spec: { type: "text", accept: ["juxtaposition"] },
              feedback: "Juxtaposition is just placing things side by side. Contrasting ideas in balanced parallel clauses is antithesis.",
            },
            {
              spec: { type: "text", accept: ["chiasmus"] },
              feedback: "Chiasmus reverses word order (AB → BA). Contrasting ideas in balanced parallel clauses is antithesis.",
            },
          ],
          difficulty: "core",
          guideRef: "discursive-argument-architecture",
          question:
            "What 10-letter Greek syntactic term (starting with **a**) names placing **contrasting ideas in balanced parallel clauses** — as in *\"We have multiplied digital contacts; we have rationed genuine intimacy\"*?",
          answer: {
            type: "text",
            accept: ["antithesis"],
            display: "antithesis",
          },
          hints: [
            "Prefix *anti-* (against) + *thesis* (placing).",
            "10 letters: `a-n-t-i-t-h-e-s-i-s`.",
          ],
          solution: [
            "**Antithesis** balances opposing concepts inside parallel syntax for memorable discursive poise.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q07",
          kind: "short",
          commonError:
            "Doubling the wrong letter ('neccessary', 'necesary'); remember one collar, two sleeves — one c, two s's.",
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "Write the **correct spelling** of the 9-letter adjective in this sentence (fixing *'neccessary'*):\n\n*\"Strict marine reserves are __________ to let overfished reefs recover.\"*",
          answer: {
            type: "text",
            accept: ["necessary"],
            display: "necessary",
          },
          hints: [
            "Shirt memory rule: **one** **c**ollar (`c`) and **two** **s**leeves (`ss`)!",
            "9 letters: `n-e-c-e-s-s-a-r-y`.",
          ],
          solution: [
            "**necessary** has one *c* and double *s*: `n-e-c-e-s-s-a-r-y`.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q08",
          kind: "short",
          commonError:
            "Writing 'accomodation' with only one m; remember it needs double c and double m — accommodation.",
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "Write the **correct spelling** of the 13-letter noun in this sentence (fixing *'accomodation'*):\n\n*\"Seasonal workers struggled to afford coastal __________ during August.\"*",
          answer: {
            type: "text",
            accept: ["accommodation"],
            display: "accommodation",
          },
          hints: [
            "Large enough to fit **twin double letters**: double `cc` AND double `mm`!",
            "13 letters: `a-c-c-o-m-m-o-d-a-t-i-o-n`.",
          ],
          solution: [
            "**accommodation** requires both double *cc* and double *mm*.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "Write the **10-letter moral noun** (meaning *inner sense of right and wrong*, NOT the adjective *conscious*) that completes this sentence:\n\n*\"Whistleblowers follow their __________ even when silence would protect their careers.\"*",
          answer: {
            type: "text",
            accept: ["conscience"],
            display: "conscience",
          },
          traps: [
            {
              spec: { type: "text", accept: ["conscious"] },
              feedback: "'Conscious' is an adjective meaning awake! Spell the moral noun as 'con' + 'science'.",
            },
          ],
          hints: [
            "Memory trick: `con` + `science` (10 letters).",
            "Distinguish it carefully from *conscious* (awake).",
          ],
          solution: [
            "**conscience** (`con-science`) is the noun naming one's moral compass.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q10",
          kind: "short",
          commonError:
            "Answering 'spoonerism' (swapped initial sounds) or 'pun' (deliberate wordplay); an accidental wrong similar-sounding word is a malapropism.",
          traps: [
            {
              spec: { type: "text", accept: ["spoonerism", "pun"] },
              feedback: "A spoonerism swaps first sounds; a pun is deliberate. Accidentally using a similar-sounding wrong word is a malapropism.",
            },
          ],
          difficulty: "core",
          guideRef: "ambitious-register-proofreading",
          question:
            "What 11-letter literary/linguistic noun (starting with **m**, named after Mrs Malaprop in Sheridan's play) describes accidentally misusing a grand-sounding thesaurus word in place of a similar-sounding word (e.g. writing *'a pineapple of excellence'* instead of *'pinnacle'*)?",
          answer: {
            type: "text",
            accept: ["malapropism"],
            display: "malapropism",
          },
          hints: [
            "Named after Mrs *Malaprop* — the classic hazard of blind thesaurus stuffing!",
            "11 letters: `m-a-l-a-p-r-o-p-i-s-m`.",
          ],
          solution: [
            "A **malapropism** occurs when an ambitious word is misused absurdly out of context — why natural precision beats forced thesaurus stuffing.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "sensory-zoom-atmosphere",
          marks: 4,
          question:
            "Write **Box 3 (Micro-Object Close-Up) and Box 4 (Non-Visual Sensory Shift)** (3–4 sentences total) for a descriptive task set inside an **old public library just before closing time**. Avoid any plot drama. *(4 marks)*",
          modelAnswer:
            "Beneath the green glass reading-lamp on Desk Seven, generations of nervous thumbnails had gouged pale crescent grooves into the dark mahogany veneer beside a brass inkwell long dried to violet crust. Overhead, radiator pipes ticked softly as evening chill settled; air thick with vanilla-sweet foxed paper and beeswax polish hushed every turning page to a dry whisper.",
          markScheme: [
            {
              point: "Executes an extreme close-up zoom onto a specific tiny library object or surface flaw (lamp, inkwell, spine, date-stamp, mahogany).",
              keywords: ["inkwell", "mahogany", "veneer", "spine", "stamp", "bookmark", "lamp", "groove", "brass", "ledger"],
            },
            {
              point: "Includes crisp olfactory imagery (e.g. vanilla, foxed paper, dust, beeswax, leather, damp wool).",
              keywords: ["vanilla", "beeswax", "polish", "leather", "musty", "scent", "aroma", "foxed", "glue"],
            },
            {
              point: "Includes delicate auditory or tactile detail amplifying quiet stillness (ticking pipes, whisper, rustle, chill).",
              keywords: ["tick", "whisper", "rustl", "hush", "creak", "murmur", "draught", "chill", "velvet"],
            },
            {
              point: "Controls rhythm with high-band punctuation (semicolon, colon, or parenthetical dashes) and zero action-plot bloat.",
              keywords: [";", ":", "—"],
            },
          ],
          hints: [
            "First zoom inches close onto one desk flaw or book detail; then close your eyes and layer library **smell** (*beeswax, vanilla-aged paper*) + subtle **sound** (*ticking radiator, whispering page*).",
            "Link two clauses cleanly with a semicolon (`;`) or colon (`:`).",
          ],
        },
        {
          id: "lang-p1-composition-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "discursive-argument-architecture",
          marks: 4,
          question:
            "Write a **Grade-9 opening paragraph** (2–3 sentences) for the discursive prompt: *'Success in modern society is measured far too narrowly by wealth.' Discuss.* Avoid *'In this essay I will…'* and include **nuanced thesis framing** plus **colon or semicolon craft**. *(4 marks)*",
          modelAnswer:
            "Few habits are more seductive to an anxious society than reducing human worth to a single number: net income can be ranked on a spreadsheet, whereas kindness, civic courage, and craftsmanship stubbornly resist quantification. While financial security undeniably underpins basic dignity and freedom from precarity, mistaking a salary for a life's meaning impoverishes both high earners and essential caretakers alike.",
          markScheme: [
            {
              point: "Opens directly with an authoritative conceptual hook free of 'In this essay I am going to' meta-commentary.",
              keywords: ["quantif", "spreadsheet", "paradox", "reduct", "seductive", "worth", "metric", "currency"],
            },
            {
              point: "Contrasts material/financial metrics against unmeasurable human or civic virtues (kindness, craft, care, integrity).",
              keywords: ["kindness", "courage", "craft", "care", "integrit", "empathy", "wisdom", "vocation", "fulfil"],
            },
            {
              point: "Qualifies the thesis maturely by acknowledging money's genuine role in basic security/dignity.",
              keywords: ["security", "dignity", "while", "although", "undeniably", "precarity", "shelter", "necessit"],
            },
            {
              point: "Deploys accurate semicolon (;), colon (:), or balanced antithesis.",
              keywords: [":", ";", "whereas", "impoverish"],
            },
          ],
          hints: [
            "Open with a sharp conceptual claim using a colon (`:`) to contrast easily counted salary numbers against unquantifiable human virtues.",
            "Add a concessive *'While financial security undeniably…'* sentence so your thesis immediately sounds balanced rather than naïve.",
          ],
        },
        {
          id: "lang-p1-composition-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "cyclical-nonlinear-structure",
          marks: 4,
          question:
            "Rewrite this wooden, 'on-the-nose' narrative dialogue into **subtle Grade-9 subtext** (2–4 sentences) using **physical gesture, props, and oblique speech** to show two estranged sisters meeting at a hospital café without ever using the words *angry*, *guilty*, or *forgive*:\n\n*\"Wooden draft: 'I feel guilty I didn't call for two years,' Clara said. 'I am still angry, but maybe I can forgive you,' Priya said.\"* *(4 marks)*",
          modelAnswer:
            "Clara set two paper cups on the melamine table and slid the black Americano — still remembered without sugar — across to Priya's elbow. For a long beat Priya stared at the plastic lid without lifting it; then her cold fingers wrapped slowly around the cardboard sleeve. \"Ward Four doesn't open till three,\" Priya murmured, pushing out the opposite chair with her boot.",
          markScheme: [
            {
              point: "Uses a specific shared prop/detail (e.g. remembered coffee order, scarf, keys) as silent proof of enduring care.",
              keywords: ["sugar", "coffee", "cup", "tea", "milk", "scarf", "remember", "habit"],
            },
            {
              point: "Conveys lingering hesitation or frostiness through physical pause or averted eye contact rather than saying 'angry'.",
              keywords: ["stared", "hesitat", "pause", "beat", "lid", "unmov", "silence", "glanc"],
            },
            {
              point: "Signals tentative thawing/reconciliation via a small physical gesture (warming hands on cup, pulling out a chair).",
              keywords: ["chair", "wrapped", "palm", "finger", "seat", "nod", "shifted", "beside"],
            },
            {
              point: "Keeps spoken dialogue brief, natural, and oblique while punctuating speech marks accurately.",
              keywords: ["murmured", "quietly", "said", "whispered", "ward", "visiting", "three"],
            },
          ],
          hints: [
            "Let remembering how the other sister takes her tea/coffee say *'I never stopped caring'*, and let pushing out a chair say *'Stay with me'*.",
            "Remember clean speech punctuation inside quotation marks!",
          ],
        },
        {
          id: "lang-p1-composition-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "syntax-rhythm-punctuation",
          marks: 4,
          question:
            "Write a **3-sentence descriptive passage** about a sudden thunderstorm breaking over a crowded street market that demonstrates the **3-Speed Cadence**:\n1. A **fronted participial or prepositional opener**.\n2. An expansive **multi-clause sentence** using **polysyndeton or asyndeton** + **paired dashes or a semicolon**.\n3. A stark **2–5 word minor or simple drop** at the close. *(4 marks)*",
          modelAnswer:
            "Above the tangled canvas awnings, bruised cumulonimbus anvils swallowed the afternoon sun in one metallic blink. First fat warm drops pitted the dust, pelted brass spice-trays, hissed across sizzling flatbread griddles — a sudden silver curtain — and sent stallholders scrambling beneath flapping tarpaulins; gutters overflowed within breaths. Only rain spoke now.",
          markScheme: [
            {
              point: "Begins Sentence 1 with a fronted prepositional or participial phrase.",
              keywords: ["above", "beneath", "across", "overhead", "gathering", "darkening", "looming", "beyond"],
            },
            {
              point: "Uses asyndetic or polysyndetic listing of dynamic verbs to build storm momentum.",
              keywords: ["pitted", "pelted", "lashed", "hissed", "drummed", "rattled", "drenched", "splattered", "cascaded"],
            },
            {
              point: "Incorporates accurate parenthetical dashes (— ... —) or a semicolon (;) inside the expansive wave.",
              keywords: ["—", ";"],
            },
            {
              point: "Lands a crisp 2–5 word closing minor or simple sentence that arrests the rhythm.",
              keywords: ["only", "silence", "nothing", "emptied", "vanished", "drowned", "stillness"],
            },
          ],
          hints: [
            "Sentence 1: start with *'Above the…'* or *'Darkening rapidly,…'*. Sentence 2: unspool 25+ words with rapid verbs, `— … —`, and `;`.",
            "Sentence 3: snap the rhythm shut in ≤5 words using a stark simple or minor sentence!",
          ],
        },
        {
          id: "lang-p1-composition-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "discursive-argument-architecture",
          marks: 5,
          question:
            "Write a **Grade-9 discursive synthesis conclusion** (3–4 sentences) for an essay on: *'Artificial intelligence threatens human creativity.' Discuss.* Incorporate **hypophora**, **antithesis across a semicolon**, and a **forward-looking reframing** of the prompt. *(5 marks)*",
          modelAnswer:
            "Will generative algorithms render human imagination obsolete? Only if we reduce art to slick, frictionless imitation. Machines can recombine ten million past brushstrokes in an instant; they cannot ache with bereavement, risk humiliation, or mean a single syllable they produce. Ultimately, the true peril is not that silicon begins thinking like artists, but that impatient institutions train humans to create like machines.",
          markScheme: [
            {
              point: "Deploys hypophora — posing a pointed question and answering it concisely right away.",
              keywords: ["?", "only if", "seldom", "hardly", "rarely", "never"],
            },
            {
              point: "Uses a semicolon (;) balancing parallel antithesis between algorithmic recombination and lived human experience.",
              keywords: [";", "cannot", "whereas", "recombin", "imitat"],
            },
            {
              point: "Grounds true human creativity in lived vulnerability, mortality, emotion, or intentional meaning.",
              keywords: ["bereave", "grief", "mortal", "vulnerab", "experience", "ache", "conscious", "feeling", "risk"],
            },
            {
              point: "Executes a closing chiasmic or reframed synthesis ('not that X..., but that Y...').",
              keywords: ["ultimately", "not that", "rather than", "true peril", "real danger", "create like machines"],
            },
            {
              point: "Sustains authoritative, polished broadsheet register free of colloquialisms or fake statistics.",
              keywords: ["algorithm", "obsolete", "imitation", "institution", "generative", "autonom", "craft"],
            },
          ],
          hints: [
            "Sentence 1–2: ask a sharp question (`?`) and answer it immediately (**hypophora**).",
            "Sentence 3: balance what AI *can* compute against what AI *cannot* feel across a **semicolon**.",
            "Sentence 4: reframe the threat using *'Ultimately, the true peril is not that machines…, but that humans…'*!",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 questions: lang-p1-composition-ch-q01 .. q08, all "challenge", 3 hints)
  // =========================================================================
  challenge: [
    {
      id: "lang-p1-composition-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "sensory-zoom-atmosphere",
      question:
        "In T. S. Eliot's craft theory — widely echoed by senior IGCSE creative-writing examiners — what concept describes evoking a specific emotion in the reader by selecting a **precise chain of external objects, sensory surfaces, and small gestures** that serve as the physical formula for that emotion?",
      options: [
        "Objective correlative",
        "Comma splicing",
        "Chronological exposition",
        "Didactic hyperbole",
      ],
      answerIndex: 0,
      hints: [
        "Instead of naming 'grief', you present an untouched teacup, a stopped hall-clock, and a folded pair of spectacles.",
        "Those external objects *correlate objectively* to the inner feeling.",
        "Two words coined/popularised by T. S. Eliot in his essay on *Hamlet*.",
      ],
      explanation:
        "An **objective correlative** anchors abstract emotion in concrete external objects and gestures — the theoretical engine underneath Grade-9 *show-don't-tell* and narrative motifs.",
    },
    {
      id: "lang-p1-composition-ch-q02",
      kind: "short",
      commonError:
        "Calling it a 'tricolon' or 'list of three'; the key feature is one verb governing concrete and abstract objects in different senses — zeugma.",
      traps: [
        {
          spec: { type: "text", accept: ["tricolon", "list of three", "rule of three"] },
          feedback: "There is a list of three, but the z-term names one verb ('carried') governing literal and abstract objects: zeugma.",
        },
      ],
      difficulty: "challenge",
      guideRef: "syntax-rhythm-punctuation",
      question:
        "Read this crafted descriptive sentence:\n\n*\"She carried her passport, three damp banknotes, and an unbearable weight of unspoken regret.\"*\n\nWhat 6-letter Greek rhetorical term (starting with **z**) names yoking **two literal/concrete objects and one abstract emotional noun** under a single governing verb (*'carried'*)?",
      answer: {
        type: "text",
        accept: ["zeugma", "syllepsis"],
        display: "zeugma",
      },
      hints: [
        "Notice *'carried'* governs literal *passport/banknotes* AND figurative *regret* simultaneously!",
        "A favourite witty/poignant move in Dickens, Atwood, and Grade-9 compositions.",
        "6 letters: `z-e-u-g-m-a`.",
      ],
      solution: [
        "**Zeugma** (or **syllepsis**) makes one verb govern both concrete nouns and an abstract noun (*carried her passport… and regret*), creating startling compression.",
      ],
    },
    {
      id: "lang-p1-composition-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "syntax-rhythm-punctuation",
      question:
        "Examine the subtle grammatical difference between these two sentences:\n1. *\"Had the lighthouse lamp failed ten minutes earlier, the trawler would have struck the reef.\"*\n2. *\"If the lighthouse lamp had failed ten minutes earlier, the trawler would have struck the reef.\"*\n\nWhat high-register syntactic upgrade is used in Sentence 1?",
        options: [
          "Agentless passive deletion — removing the human subject completely so the vessel appears to act by chance",
          "Conditional subject-auxiliary inversion — dropping 'if' and fronting auxiliary 'Had' for elevated formal/literary poise",
          "Dangling participial modification — opening with an unattached `-ing` phrase that delays the main clause",
          "Colloquial spoken ellipsis — omitting standard grammatical articles to mimic urgent maritime dialogue",
        ],
      answerIndex: 1,
      hints: [
        "Compare *'If the lamp had failed'* with *'Had the lamp failed'*.",
        "'If' disappears, and auxiliary *Had* swaps places ahead of the subject!",
        "Common in top-band discursive and narrative prose (*'Were governments to invest…'*, *'Had we listened…'*).",
      ],
      explanation:
        "**Conditional inversion** (*'Had X happened…'*, *'Were we to…'*, *'Should this continue…'*) replaces standard *if*-clauses with crisp, authoritative syntactic sophistication.",
    },
    {
      id: "lang-p1-composition-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ambitious-register-proofreading",
      question:
        "In formal discursive prose using the **mandative/counterfactual subjunctive**, write the exact 4-letter verb form (NOT *'was'*) required in the blank:\n\n*\"Were society to value caretakers as generously as speculators — as if empathy ____ a traded commodity — civic life would transform overnight.\"*",
      answer: {
        type: "text",
        accept: ["were"],
        display: "were",
      },
      traps: [
        {
          spec: { type: "text", accept: ["was"] },
          feedback: "In formal counterfactual 'as if / if X ___' clauses contrary to fact, the English subjunctive uses the plural-looking 4-letter form even for singular subjects!",
        },
      ],
      hints: [
        "In counterfactual clauses (*'If I ____ you'*, *'as if empathy ____'*), formal English uses the irrealis **subjunctive**.",
        "Look at the very first word of the sentence (*'Were society to…'*) for a clue!",
        "4 letters starting with 'w'.",
      ],
      solution: [
        "Counterfactual subjunctive requires **were** (*'as if empathy were…'*), signalling effortless mastery of formal English grammar.",
      ],
    },
    {
      id: "lang-p1-composition-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "discursive-argument-architecture",
      question:
        "In classical and modern discursive rhetoric, why is **nominalisation** (turning active verbs/clauses into abstract noun phrases, e.g. *'The rapid privatisation of municipal water infrastructure precipitated…'* ) useful in moderation — yet fatal when overused?",
      options: [
        "Turning active verbs into abstract noun phrases is prohibited under OxfordAQA's AO6 guidelines because nominalised subjects automatically read as grammatical fragments.",
        "Nominalising verbs strips away intellectual register and simplifies vocabulary into sing-song, rhythmic phrasing suited only to informal personal anecdotes and verse.",
        "Used selectively at topic-sentence openings, nominalisation compresses prior arguments into crisp conceptual subjects; overused in every clause, it turns prose into turgid, lifeless bureaucratic sludge lacking human verbs.",
        "Nominalisation automatically eliminates tense drift and subject-verb agreement mistakes across an essay, though using it sparingly weakens the writer's authoritative tone.",
      ],
      answerIndex: 2,
      hints: [
        "Notice how *'This erosion of trust…'* neatly summarises an entire preceding paragraph in three words!",
        "Now imagine a 500-word essay with zero active human verbs and nothing but *-tion / -ment* nouns.",
        "Balance conceptual noun-phrase hooks with muscular active verbs!",
      ],
      explanation:
        "Strategic **nominalisation** (*'Such algorithmic curation…'*) creates seamless topic-sentence cohesion, while pairing it with vivid active verbs prevents dry bureaucratic bloat.",
    },
    {
      id: "lang-p1-composition-ch-q06",
      kind: "short",
      commonError:
        "Calling it 'stream of consciousness' or 'first person'; the narration stays third-person while borrowing the character's voice — free indirect discourse.",
      traps: [
        {
          spec: { type: "text", accept: ["stream of consciousness", "first person", "first-person"] },
          feedback: "The narration stays third-person ('She stared') while slipping into her thoughts — free indirect discourse.",
        },
      ],
      difficulty: "challenge",
      guideRef: "cyclical-nonlinear-structure",
      question:
        "What **three-word** narrative-perspective term (`free ________ _________`, associated with Jane Austen and Virginia Woolf) describes third-person narration subtly absorbing a character's own inner idiom and unspoken questions without speech marks (*\"She stared at the locked gate. Too late again — what possible excuse would he invent tonight?\"*)?",
      answer: {
        type: "text",
        accept: ["free indirect discourse", "free indirect style", "free indirect speech", "free indirect"],
        display: "free indirect discourse",
      },
      hints: [
        "Stays grammatically in third person (*'She'*, past tense *'would'*) yet slips directly inside her private voice without *'she thought'* tags!",
        "Three words: `free i_______ d________` (or `style`/`speech`).",
        "One of the hallmarks of Grade-9 third-person narrative interiority.",
      ],
      solution: [
        "**Free indirect discourse** (or **free indirect style**) blends third-person poise with immediate first-person emotional intimacy.",
      ],
    },
    {
      id: "lang-p1-composition-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "sensory-zoom-atmosphere",
      marks: 5,
      question:
        "Compose a **Grade-9 descriptive opening + micro-zoom transition** (4–5 sentences) for the prompt: *Describe a harbour market at dawn*. Demonstrate:\n1. **Pathetic fallacy / light craft** in the sky.\n2. **Sustained extended metaphor** across the mid-ground.\n3. **Macro micro-zoom** onto one tiny detail.\n4. **Olfactory + tactile** precision.\n5. **Semicolon + colon or em-dash** rhythm. *(5 marks)*",
      modelAnswer:
            "Reluctant pewter dawn seeped between low cloud-ribs above the quay, bruising the tide-line violet before the first trawler horn sounded. Along the wet granite pier, canvas stalls unfolded like waking crustaceans — tarpaulins snapping taut, brass hooks gleaming, wooden crates clattering into armoured rows; overnight quiet surrendered to mercantile bustle. Down beside a battered tin bucket, a single translucent herring scale clung iridescent to a fisherman's salt-chapped knuckle: cold pearl against raw winter skin. Brine, diesel smoke, and sweet frying dough thickened the chill sea-fret.",
      markScheme: [
            {
              point: "Establishes dawn sky/weather mood through pathetic fallacy or fresh chromatic metaphor (avoiding 'sun shone brightly').",
              keywords: ["pewter", "seep", "bruis", "reluctant", "pale", "amber", "bleed", "shroud", "sullen"],
            },
            {
              point: "Sustains a cohesive figurative image across the mid-ground stalls/boats.",
              keywords: ["crustacean", "armour", "cathedral", "hive", "organism", "ribs", "waking", "fleet"],
            },
            {
              point: "Narrows the camera lens tightly onto one microscopic harbour detail (scale, hook, knot, coin, barnacle, knuckle).",
              keywords: ["scale", "barnacle", "knuckle", "knot", "coin", "gill", "fin", "mesh", "splinter"],
            },
            {
              point: "Layers authentic olfactory and tactile imagery (brine, diesel, salt-chapped, slick, chill).",
              keywords: ["brine", "diesel", "salt", "slick", "chill", "raw", "fry", "ozone", "fishy"],
            },
            {
              point: "Controls sentence cadence with accurate semicolon (;) plus colon (:) or paired dashes (—).",
              keywords: [";", ":", "—"],
            },
          ],
      hints: [
        "Move your camera strictly downward: Dawn Sky → Mid-Ground Stalls → Single Herring Scale / Rusted Hook!",
        "Layer harbour smells (*brine, diesel, frying dough*) and cold salt textures.",
        "Verify both sides of your `;` and the left side of your `:` are complete independent clauses!",
      ],
    },
    {
      id: "lang-p1-composition-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "discursive-argument-architecture",
      marks: 5,
      question:
        "Write a **high-band discursive body + rebuttal sequence** (4–5 sentences) on: *'Constant self-optimisation and productivity culture is making young people miserable.' Discuss.* Include **conditional inversion** (*'Were…'* / *'Had…'*), **steelmanning**, **zeugma or antithesis**, and **precise formal lexis**. *(5 marks)*",
      modelAnswer:
            "Admittedly, disciplined habit-tracking and ambitious goal-setting can rescue adolescents from aimless drift, turning vague aspiration into tangible craft. Yet when apps monetise every waking minute, rest itself is rebranded as laziness; teenagers end up tracking their footsteps, their sleep cycles, and their evaporating peace of mind. Were human beings mere factory turbines, relentless optimisation would be rational: applied to developing minds, it breeds chronic inadequacy because perfection shifts its finish line every midnight. Genuine flourishing requires unscheduled boredom where curiosity can breathe unmeasured.",
      markScheme: [
            {
              point: "Steelmans self-discipline / goal-setting fairly before pivoting.",
              keywords: ["admittedly", "granted", "disciplin", "purpose", "agency", "aspirat", "structure"],
            },
            {
              point: "Pivots incisively to expose how commodified productivity turns rest into guilt or chronic anxiety.",
              keywords: ["monetis", "commodif", "guilt", "inadequa", "anxiet", "burnout", "exhaust", "laziness"],
            },
            {
              point: "Deploys conditional inversion ('Were...', 'Had...', 'Should...') accurately.",
              keywords: ["were human", "were we", "were teenagers", "had society", "should every"],
            },
            {
              point: "Uses zeugma, semicolon antithesis, or colon spotlighting with 100% grammatical control.",
              keywords: [";", ":", "peace of mind", "whereas"],
            },
            {
              point: "Concludes with elevated formal lexis defending unmeasured rest, play, or intrinsic curiosity.",
              keywords: ["flourish", "curiosit", "unmeasured", "intrinsic", "unschedul", "contemplat", "solitude"],
            },
          ],
      hints: [
        "Sentence 1: *'Admittedly,…'* steelmanning healthy ambition.",
        "Sentence 2–3: pivot to critique relentless self-tracking using `;` plus **conditional inversion** (*'Were human beings mere turbines,…'*).",
        "Sentence 4: close on the deeper value of unmeasured curiosity and rest!",
      ],
    },
  ],
};
