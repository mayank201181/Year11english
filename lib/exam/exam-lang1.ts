import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  "id": "exam-lang1",
  "title": "OxfordAQA 9270 Paper 1 Mock — Literary Non-Fiction & Composition",
  "calculator": false,
  "minutes": 120,
  "questions": [
    {
      "id": "exam-lang1-q01",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "explicit-implicit-inference",
      "difficulty": "warmup",
      "question": "Read this memoir extract:\n\n*\"At six in the morning the ferry deck smelled of diesel and wet wool. My grandfather stood by the rusted rail, his fingers white around the handle of a cardboard suitcase he refused to set down.\"*\n\nWhich inference about the grandfather is most strongly supported by the physical detail in this extract?",
      "options": [
        "He is angry at the ferry crew for leaving rust along the passenger rail.",
        "He feels anxious and protective of his meagre possessions during the crossing.",
        "He works as a mechanic in the ferry's engine room.",
        "He is enjoying a leisurely holiday cruise in warm summer weather."
      ],
      "answerIndex": 1,
      "explanation": "His knuckles turning 'white around the handle' of a cheap 'cardboard suitcase he refused to set down' implies tense vigilance and economic vulnerability; nothing suggests anger at the crew, employment on the ferry, or a warm pleasure cruise.",
      "hints": [
        "Look closely at 'fingers white' and 'cardboard suitcase he refused to set down'."
      ]
    },
    {
      "id": "exam-lang1-q02",
      "kind": "short",
      "topicId": "lang-p1-reading",
      "guideRef": "lexical-imagery-effects",
      "difficulty": "warmup",
      "question": "Read this travelogue sentence:\n\n*\"The monsoon clouds sulked above the harbour, brooding darkly before spitting cold rain onto the tin roofs.\"*\n\nName the specific literary device in which weather or natural scenery is given human emotions to mirror the mood of a scene.",
      "answer": {
        "type": "text",
        "accept": [
          "pathetic fallacy"
        ],
        "display": "pathetic fallacy"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "simile"
            ]
          },
          "feedback": "There is no 'like' or 'as' comparison here — human moods ('sulked', 'brooding') are projected onto the weather."
        }
      ],
      "solution": [
        "Attributing human emotions ('sulked', 'brooding') specifically to weather or nature to establish atmosphere is **pathetic fallacy**."
      ],
      "commonError": "Naming 'simile' when no 'like/as' comparison is present, or forgetting the specific weather term 'pathetic fallacy'.",
      "hints": [
        "It is a specialised form of personification applied to weather and nature to reflect mood."
      ]
    },
    {
      "id": "exam-lang1-q03",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "lexical-imagery-effects",
      "difficulty": "core",
      "question": "Read this journalism extract:\n\n*\"The developer's glossy brochure promised an 'urban sanctuary'; behind the hoarding, excavators chewed through the last orchard, spitting splintered roots into iron skips.\"*\n\nWhy do the verbs **\"chewed\"** and **\"spitting\"** earn high analytical credit when juxtaposed with **\"urban sanctuary\"**?",
      "options": [
        "They cast the machinery as a predatory beast devouring living nature, exposing the developer's slogan as hollow euphemism.",
        "They make the reader want to read on to find out what type of fruit grew in the orchard.",
        "They prove that the excavators were mechanically faulty and needed urgent repair.",
        "They create a calm, pastoral rhythm that celebrates modern engineering."
      ],
      "answerIndex": 0,
      "explanation": "Zoomorphic verbs ('chewed', 'spitting') frame the demolition as violent consumption, ironically undercutting the soothing marketing euphemism 'urban sanctuary'. Saying 'makes the reader want to read on' is empty Band-2 waffle.",
      "hints": [
        "Compare the connotations of 'sanctuary' with the animalistic verbs 'chewed' and 'spitting'.",
        "Ask what attitude toward the developer this contrast reveals."
      ]
    },
    {
      "id": "exam-lang1-q04",
      "kind": "short",
      "topicId": "lang-p1-reading",
      "guideRef": "sentence-punctuation-craft",
      "difficulty": "core",
      "question": "Read this extract from a mountaineering memoir:\n\n*\"For four hours we hauled the sledges across the crevasse field, our lungs burning, our goggles rimed with frost, our ropes groaning under the dead weight. Silence.\"* \n\nWhat grammatical term describes a very short, verbless sentence such as **\"Silence.\"** used to create an abrupt halt?",
      "answer": {
        "type": "text",
        "accept": [
          "minor sentence",
          "sentence fragment",
          "fragment",
          "verbless sentence"
        ],
        "display": "minor sentence"
      },
      "solution": [
        "A complete-sounding punctuated sentence without a main finite verb ('Silence.') is a **minor sentence** (or **sentence fragment**), used here to snap the exhausting multi-clause rhythm to a sudden stop."
      ],
      "commonError": "Calling a one-word verbless fragment a 'complex sentence' or 'compound sentence'.",
      "hints": [
        "Check whether 'Silence.' contains a finite verb.",
        "In grammar, a punctuated sentence lacking a main verb is called a ___ sentence."
      ]
    },
    {
      "id": "exam-lang1-q05",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "structural-shifts-focus",
      "difficulty": "core",
      "question": "Read this three-part memoir extract:\n\n*Paragraph 1: \"From the ridge, the salt pan stretched for twenty miles like a sheet of hammered tin under a white sun.\"*\n*Paragraph 2: \"Halfway across, a single rusted bicycle lay half-swallowed by the crust.\"* \n*Paragraph 3: \"Inside its basket sat a child's blue enamel cup, dry as bone.\"*\n\nWhich structural movement organises these three paragraphs?",
      "options": [
        "A shift from first-person subjective monologue to third-person omniscient dialogue.",
        "A chronological flashback moving from adulthood back to early childhood.",
        "A cyclical return that repeats the exact opening image in the final line.",
        "A cinematic zoom narrowing from panoramic landscape to an intimate human trace."
      ],
      "answerIndex": 3,
      "explanation": "The writer narrows spatial scale step by step: twenty-mile horizon → abandoned bicycle → a single child's cup inside the basket, intensifying isolation and mystery.",
      "hints": [
        "Track the physical size of what the camera sees in each paragraph: 20 miles → one bicycle → one cup.",
        "Which structural term describes narrowing from wide shot to close-up?"
      ]
    },
    {
      "id": "exam-lang1-q06",
      "kind": "short",
      "topicId": "lang-p1-reading",
      "guideRef": "sentence-punctuation-craft",
      "difficulty": "core",
      "question": "Read this sentence:\n\n*\"The auction hall offered only one verdict: everything my father had built was now priced in lots.\"*\n\nName the punctuation mark used after **\"verdict\"** to introduce a stark explanation or reveal.",
      "answer": {
        "type": "text",
        "accept": [
          "colon"
        ],
        "display": "colon"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "semicolon",
              "semi-colon"
            ]
          },
          "feedback": "A semicolon has a dot over a comma (;); the two vertical dots (:) introducing a reveal is a colon."
        }
      ],
      "solution": [
        "The mark `:` is a **colon**, acting as a hinge that announces the devastating explanation promised by 'one verdict'."
      ],
      "commonError": "Confusing a colon (:) with a semicolon (;).",
      "hints": [
        "Look at the two vertical dots (`:`) right after 'verdict'.",
        "It introduces the specific reveal of what the 'one verdict' actually was."
      ]
    },
    {
      "id": "exam-lang1-q07",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "evaluating-writers-viewpoint",
      "difficulty": "challenge",
      "question": "Read this extract from an autobiographical essay:\n\n*\"At seventeen I bought a velvet notebook and declared myself a tragic philosopher; by Tuesday I had filled two pages with complaints about the Wi-Fi and a doodle of my trainers.\"*\n\nHow is the writer's perspective toward their younger self best described?",
      "options": [
        "Solemnly nostalgic for lost intellectual genius.",
        "Bitterly resentful toward their parents for restricting internet access.",
        "Affectionately self-deprecating, using bathos to mock adolescent grandiosity.",
        "Fiercely defensive of teenage philosophical seriousness."
      ],
      "answerIndex": 2,
      "explanation": "Pairing pretentious 'velvet notebook / tragic philosopher' with mundane 'Wi-Fi' and 'trainers' after a semicolon creates comic bathos — gentle, self-aware irony directed at their younger self.",
      "hints": [
        "Notice the anticlimactic drop from 'tragic philosopher' to 'complaints about the Wi-Fi'.",
        "What literary tone arises when lofty pretension deflates into triviality?",
        "Check which option names self-mocking irony / bathos."
      ]
    },
    {
      "id": "exam-lang1-q08",
      "kind": "short",
      "topicId": "lang-p1-reading",
      "guideRef": "lexical-imagery-effects",
      "difficulty": "core",
      "question": "Read this extract:\n\n*\"The headmaster's corridor was a courtroom: polished oak benches for the accused, a ticking brass clock counting down the sentence, and a heavy door behind which verdicts were handed down.\"*\n\nWhat two-word linguistic term describes a group of words (*courtroom, accused, sentence, verdicts*) drawn from the same conceptual domain across a passage?",
      "answer": {
        "type": "text",
        "accept": [
          "semantic field",
          "lexical field"
        ],
        "display": "semantic field"
      },
      "solution": [
        "A cluster of words linked by a shared theme or domain (here, criminal justice: 'courtroom', 'accused', 'sentence', 'verdicts') is a **semantic field** (or **lexical field**)."
      ],
      "commonError": "Writing 'alliteration' or 'onomatopoeia' instead of identifying the shared conceptual vocabulary cluster.",
      "hints": [
        "All four words belong to the domain of law and trial.",
        "Two words: ___ field (also called lexical field)."
      ]
    },
    {
      "id": "exam-lang1-q09",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "sentence-punctuation-craft",
      "difficulty": "core",
      "question": "Read this sentence:\n\n*\"They carried crates and lanterns and tarpaulins and coils of sodden rope up the shingle bank.\"*\n\nWhich syntactic technique does the writer use by repeating the conjunction **\"and\"** between every item?",
      "options": [
        "Asyndeton, speeding up the list by deleting every conjunction.",
        "Polysyndeton, making the list feel relentless and physically exhausting.",
        "Hypophora, posing a question and answering it immediately.",
        "Litotes, softening harsh reality through double negation."
      ],
      "answerIndex": 1,
      "explanation": "Repeating conjunctions ('and … and … and') is **polysyndeton** (or syndetic listing), which weighs down each item so the reader feels the cumulative physical labour; **asyndeton** omits conjunctions altogether.",
      "hints": [
        "Notice 'and' is repeated between every noun phrase rather than omitted.",
        "Poly = many; a- = without."
      ]
    },
    {
      "id": "exam-lang1-q10",
      "kind": "written",
      "topicId": "lang-p1-reading",
      "guideRef": "evaluating-writers-viewpoint",
      "difficulty": "challenge",
      "question": "Read this literary non-fiction extract about an abandoned coastal lighthouse:\n\n*\"For ninety winters the lantern sliced the Atlantic dark with mechanical mercy. Now gulls roost on the cracked lens. Rust bleeds down the whitewashed tower in long arterial streaks, and the foghorn hangs throatless above the surf.\"*\n\nHow does the writer use language and structure to convey the transformation of the lighthouse? [4 marks]",
      "marks": 4,
      "modelAnswer": "Structurally, the writer pivots from past purpose ('For ninety winters') to present decay ('Now'), contrasting endurance with neglect. The verb 'sliced' and oxymoronic noun phrase 'mechanical mercy' frame the active beam as a decisive guardian cutting through danger. Conversely, visceral bodily personification in 'bleeds', 'arterial', and 'throatless' portrays the derelict tower as a wounded, silenced corpse, evoking elegiac pity.",
      "markScheme": [
        {
          "point": "Identifies the temporal/structural pivot from past service to present dereliction.",
          "keywords": [
            "temporal",
            "pivot",
            "past",
            "present",
            "shift",
            "contrasting"
          ]
        },
        {
          "point": "Analyses active/protective diction in the opening ('sliced', 'guardian', 'protective', 'oxymoronic').",
          "keywords": [
            "guardian",
            "protective",
            "decisive",
            "oxymoronic",
            "oxymoron",
            "active"
          ]
        },
        {
          "point": "Analyses bodily/medical imagery or personification of injury and muteness.",
          "keywords": [
            "personification",
            "bodily",
            "wounded",
            "corpse",
            "visceral",
            "silenced",
            "medical"
          ]
        },
        {
          "point": "Evaluates overall elegiac/mournful tone or reader pity for lost function.",
          "keywords": [
            "elegiac",
            "mournful",
            "pity",
            "decay",
            "neglect",
            "loss",
            "derelict"
          ]
        }
      ],
      "commonError": "Writing generic comments like 'makes the reader want to read on' instead of linking temporal contrast and bodily personification to tone.",
      "hints": [
        "Start with the temporal pivot between sentence 1 ('For ninety winters') and sentence 2 ('Now').",
        "Zoom onto 'mechanical mercy' vs the bodily semantic field ('bleeds', 'arterial', 'throatless').",
        "Name the emotional shift from protective power to wounded silence."
      ]
    },
    {
      "id": "exam-lang1-q11",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "explicit-implicit-inference",
      "difficulty": "warmup",
      "question": "In OxfordAQA 9270 Paper 1 Section A, why does copying a 35-word block quotation followed by *\"This shows the writer was scared\"* lose marks on higher-tariff language questions?",
      "options": [
        "It neither isolates the specific word/phrase doing the work nor analyses how its connotations create the effect.",
        "OxfordAQA forbids using any quotation marks at all in Section A.",
        "Examiners deduct five marks whenever a student names an emotion.",
        "Quotations in Section A must always be rewritten in the student's own words."
      ],
      "answerIndex": 0,
      "explanation": "Top-band AO2 responses embed 2–5 word micro-quotations and unpack the precise lexical or syntactic choice creating the effect; long unanalysed quote-dumps leave the examiner guessing which word mattered.",
      "hints": [
        "Think about micro-quoting and word-level zoom versus dumping whole sentences."
      ]
    },
    {
      "id": "exam-lang1-q12",
      "kind": "short",
      "topicId": "lang-p1-reading",
      "guideRef": "structural-shifts-focus",
      "difficulty": "core",
      "question": "A memoir opens with the narrator staring at a cracked porcelain teacup on a kitchen table and ends, three pages later, returning to the exact same teacup — now seen as a symbol of survival rather than loss. What structural term describes an ending that loops back to the opening image?",
      "answer": {
        "type": "text",
        "accept": [
          "cyclical structure",
          "cyclical",
          "circular structure",
          "cyclical framing"
        ],
        "display": "cyclical structure"
      },
      "solution": [
        "Returning at the end of a text to the image, setting, or phrase from its opening — with altered emotional meaning — is a **cyclical structure**."
      ],
      "commonError": "Calling a loop back to the opening image 'in medias res' (which means starting in the middle of action).",
      "hints": [
        "Think of a circle or cycle returning to where the piece began.",
        "Two words: ___ structure."
      ]
    },
    {
      "id": "exam-lang1-q13",
      "kind": "mcq",
      "topicId": "lang-p1-composition",
      "guideRef": "sensory-zoom-atmosphere",
      "difficulty": "warmup",
      "question": "Which opening sentence best demonstrates Grade-9 **show, don't tell** for an OxfordAQA 9270 Paper 1B **descriptive** task about a crowded night market?",
      "options": [
        "In my essay I am going to describe a very exciting night market that makes the reader want to read on.",
        "The night market was extremely busy, noisy, colourful, and smelled of lots of delicious food.",
        "I woke up at seven o'clock, ate toast, took the bus to town, and walked toward the market.",
        "Tallow smoke coiled around strings of bare bulbs while cleavers drummed a frantic tattoo on wet cedar blocks."
      ],
      "answerIndex": 3,
      "explanation": "Concrete sensory nouns and dynamic verbs ('Tallow smoke coiled', 'cleavers drummed a frantic tattoo') immerse the reader directly in sight, sound and smell instead of flat telling adjectives ('busy, noisy') or slow diary exposition.",
      "hints": [
        "Look for concrete visual, olfactory and auditory imagery rather than generic adjectives."
      ]
    },
    {
      "id": "exam-lang1-q14",
      "kind": "mcq",
      "topicId": "lang-p1-composition",
      "guideRef": "syntax-rhythm-punctuation",
      "difficulty": "core",
      "question": "Which of the following sentences contains a **comma splice** that costs technical accuracy (SPaG) marks in Paper 1B?",
      "options": [
        "The floorboards groaned beneath his boot; he froze beside the stairwell.",
        "As the floorboards groaned beneath his boot, he froze beside the stairwell.",
        "The floorboards groaned beneath his boot, he froze beside the stairwell.",
        "The floorboards groaned beneath his boot — and he froze."
      ],
      "answerIndex": 2,
      "explanation": "Joining two independent main clauses ('The floorboards groaned beneath his boot' and 'he froze beside the stairwell') with a bare comma is a **comma splice**. Fixing it requires a semicolon, a subordinating conjunction ('As…'), or a dash/coordinating conjunction.",
      "hints": [
        "A comma splice happens when two standalone sentences are glued together by a comma alone.",
        "Check which option has a full main clause on BOTH sides of a lone comma with no conjunction."
      ]
    },
    {
      "id": "exam-lang1-q15",
      "kind": "short",
      "topicId": "lang-p1-composition",
      "guideRef": "cyclical-nonlinear-structure",
      "difficulty": "core",
      "question": "What three-word Latin phrase describes starting a narrative right in the middle of the dramatic action rather than beginning with slow background exposition?",
      "answer": {
        "type": "text",
        "accept": [
          "in medias res"
        ],
        "display": "in medias res"
      },
      "solution": [
        "**In medias res** (Latin for 'into the midst of things') plunges the reader straight into a moment of tension before revealing context."
      ],
      "commonError": "Misspelling 'medias' as 'media' or confusing it with 'deus ex machina'.",
      "hints": [
        "Three Latin words meaning 'into the middle of things'.",
        "Starts with 'in m___ r___'."
      ]
    },
    {
      "id": "exam-lang1-q16",
      "kind": "mcq",
      "topicId": "lang-p1-composition",
      "guideRef": "cyclical-nonlinear-structure",
      "difficulty": "core",
      "question": "Why do OxfordAQA 9270 examiners advise against planning a 45-minute narrative around a bank heist, car chase, plane crash, amnesia twist, and *\"it was all a dream\"*?",
      "options": [
        "OxfordAQA bans all fictional stories in Paper 1 Section B.",
        "Cramming multiple melodramatic events forces rushed summary ('and then…') instead of controlled characterisation, atmosphere and linguistic craft.",
        "Narratives must exceed 3,000 words to include dialogue.",
        "Examiners only award marks for stories set inside a school classroom."
      ],
      "answerIndex": 1,
      "explanation": "In 45 minutes (~450–650 words), a single small human moment explored in psychological and sensory depth earns far higher AO5/AO6 marks than breathlessly summarising a blockbuster plot; *'it was all a dream'* also destroys narrative stakes.",
      "hints": [
        "Think about depth of craft versus breathless plot summary in a 45-minute exam window.",
        "What happens to description when five huge events are squeezed into two pages?"
      ]
    },
    {
      "id": "exam-lang1-q17",
      "kind": "short",
      "topicId": "lang-p1-composition",
      "guideRef": "syntax-rhythm-punctuation",
      "difficulty": "core",
      "question": "Read this sentence from a descriptive composition:\n\n*\"Outside, the courtyard baked in copper heat; inside, the tiled vestibule breathed cool shadow.\"*\n\nName the punctuation mark used between the two balanced, contrasting main clauses.",
      "answer": {
        "type": "text",
        "accept": [
          "semicolon",
          "semi-colon"
        ],
        "display": "semicolon"
      },
      "traps": [
        {
          "spec": {
            "type": "text",
            "accept": [
              "colon"
            ]
          },
          "feedback": "A colon introduces a reveal or explanation; here `;` balances two parallel independent clauses ('Outside…; inside…')."
        }
      ],
      "solution": [
        "The mark `;` is a **semicolon**, linking two closely related, syntactically balanced independent clauses without a conjunction."
      ],
      "commonError": "Calling `;` a colon.",
      "hints": [
        "Look at the mark `;` after 'copper heat'.",
        "It joins two independent clauses in poised antithesis without using 'but'."
      ]
    },
    {
      "id": "exam-lang1-q18",
      "kind": "mcq",
      "topicId": "lang-p1-composition",
      "guideRef": "discursive-argument-architecture",
      "difficulty": "core",
      "question": "In OxfordAQA 9270 Paper 1 Section B, how does a **discursive** composition differ structurally from an aggressive one-sided polemic?",
      "options": [
        "It explores multiple facets and competing viewpoints thoughtfully before arriving at a nuanced, reasoned judgement.",
        "It must contain zero paragraphs and be written entirely in bullet points.",
        "It forbids expressing any conclusion or viewpoint of your own at the end.",
        "It requires inventing fictional characters and supernatural dialogue."
      ],
      "answerIndex": 0,
      "explanation": "Discursive writing ('Discuss…') weighs complexity, acknowledges valid counter-perspectives ('Admittedly… Yet…'), and synthesises a measured stance rather than shouting slogans.",
      "hints": [
        "Look at the root of 'discursive' — exploring an issue across multiple angles.",
        "Does high-grade discursive writing engage seriously with counter-arguments?"
      ]
    },
    {
      "id": "exam-lang1-q19",
      "kind": "short",
      "topicId": "lang-p1-composition",
      "guideRef": "sensory-zoom-atmosphere",
      "difficulty": "warmup",
      "question": "In Paper 1 Section B of OxfordAQA 9270, how many composition tasks are printed on the question paper from which you choose **one** (descriptive, narrative, or discursive)?",
      "answer": {
        "type": "number",
        "value": 3
      },
      "solution": [
        "OxfordAQA 9270 Paper 1 Section B offers **3** tasks (one descriptive, one narrative, one discursive), and candidates answer **1** worth 40 marks."
      ],
      "commonError": "Answering all three prompts instead of choosing one and crafting it deeply.",
      "hints": [
        "Count the three genres offered in Paper 1B: descriptive, narrative, and discursive."
      ]
    },
    {
      "id": "exam-lang1-q20",
      "kind": "mcq",
      "topicId": "lang-p1-composition",
      "guideRef": "ambitious-register-proofreading",
      "difficulty": "challenge",
      "question": "Compare two student revisions of the same sentence:\n\n*Draft 1: \"The cerulean, lugubrious, lachrymose precipitation cascaded tumultuously upon the edifice.\"*\n*Draft 2: \"All afternoon, grey rain sluiced down the slate gable and pooled in the worn threshold.\"*\n\nWhy does an IGCSE examiner reward **Draft 2** higher than **Draft 1** for vocabulary?",
      "options": [
        "Draft 2 avoids using any verbs or adjectives at all.",
        "Draft 2 is shorter and examiners always award more marks to shorter sentences.",
        "Draft 1 loses marks because Latin-derived adjectives are banned in IGCSE English.",
        "Draft 2 selects precise, natural verbs and concrete nouns ('sluiced', 'slate gable', 'worn threshold'), whereas Draft 1 suffers from strained, unnatural thesaurus-stuffing."
      ],
      "answerIndex": 3,
      "explanation": "AO5/AO6 reward *selective precision* and idiomatic control ('sluiced', 'worn threshold'). Piling up mismatched dictionary words ('cerulean' means sky-blue, which contradicts grey rain; 'lachrymose precipitation' sounds unintentionally comic) breaks register.",
      "hints": [
        "Check whether 'cerulean' (bright sky-blue) even makes sense for dismal rain!",
        "Think about authentic precision versus artificial thesaurus-stuffing.",
        "Which option explains why 'sluiced' and 'slate gable' outperform overwritten jargon?"
      ]
    },
    {
      "id": "exam-lang1-q21",
      "kind": "short",
      "topicId": "lang-p1-composition",
      "guideRef": "cyclical-nonlinear-structure",
      "difficulty": "core",
      "question": "What literary term describes a recurring image, object, sound, or phrase (such as a stopped pocket-watch reappearing at three turning points in a composition) that unifies a text's central theme?",
      "answer": {
        "type": "text",
        "accept": [
          "motif",
          "leitmotif"
        ],
        "display": "motif"
      },
      "solution": [
        "A recurring concrete image, object, or phrase threaded through a piece to develop its theme is a **motif**."
      ],
      "commonError": "Confusing 'motif' (a recurring concrete element) with 'moral' or 'monologue'.",
      "hints": [
        "Five-letter word starting with 'm' — related to 'motive' and musical recurring patterns.",
        "Threading one recurring object through a 45-minute narrative gives instant structural cohesion."
      ]
    },
    {
      "id": "exam-lang1-q22",
      "kind": "written",
      "topicId": "lang-p1-composition",
      "guideRef": "discursive-argument-architecture",
      "difficulty": "challenge",
      "question": "In a Paper 1B discursive task on **\"Has constant digital connectivity enriched or eroded teenage friendships?\"**, write a Grade-9 **concession-and-rebuttal** paragraph that acknowledges a genuine benefit before pivoting to a deeper critique. [4 marks]",
      "marks": 4,
      "modelAnswer": "Admittedly, instant messaging bridges geographical distance, allowing isolated teenagers or relocated friends to sustain daily warmth across time zones. Yet convenience is a poor substitute for vulnerability: curated streaks and performative group chats often replace unguarded face-to-face silence with anxious surveillance, leaving adolescents perpetually reachable yet profoundly lonely.",
      "markScheme": [
        {
          "point": "Opens with a measured concession marker acknowledging a valid benefit.",
          "keywords": [
            "admittedly",
            "undoubtedly",
            "certainly",
            "granted",
            "while",
            "although",
            "geographical",
            "distance"
          ]
        },
        {
          "point": "Executes a controlled discursive pivot ('Yet', 'However', 'Nevertheless', 'Conversely').",
          "keywords": [
            "yet",
            "however",
            "nevertheless",
            "conversely",
            "nonetheless",
            "though"
          ]
        },
        {
          "point": "Develops a conceptual distinction (e.g. convenience/reachability vs genuine intimacy/vulnerability/surveillance).",
          "keywords": [
            "vulnerability",
            "intimacy",
            "curated",
            "performative",
            "surveillance",
            "superficial",
            "genuine",
            "depth"
          ]
        },
        {
          "point": "Uses crafted syntax or antithesis/colon/semicolon to land an evaluative synthesis.",
          "keywords": [
            "antithesis",
            "substitute",
            "reachable",
            "lonely",
            "paradox",
            "isolation",
            "presence"
          ]
        }
      ],
      "commonError": "Attacking a cartoonish straw-man ('Some silly people love phones') instead of steelmanning the counter-view before pivoting.",
      "hints": [
        "Begin with a concession adverb like 'Admittedly,' and state the strongest real case FOR digital connection.",
        "Pivot cleanly with 'Yet' or 'However' and use a colon or antithesis.",
        "Contrast constant reachability/streaks with authentic vulnerability or loneliness."
      ]
    },
    {
      "id": "exam-lang1-q23",
      "kind": "mcq",
      "topicId": "lang-p1-reading",
      "guideRef": "sentence-punctuation-craft",
      "difficulty": "core",
      "question": "Read this memoir sentence:\n\n*\"My aunt — who had never once set foot on a boat — spent the entire crossing lecturing the captain on tide tables.\"*\n\nWhat is the effect of the paired **parenthetical dashes** here?",
      "options": [
        "They speed up the sentence by removing all background information about the aunt.",
        "They show that the narrator forgot their grammar and trailed off mid-thought.",
        "They insert a dry, conspiratorial aside that exposes the comic irony of the aunt's misplaced confidence.",
        "They create a solemn, tragic tone mourning a maritime disaster."
      ],
      "answerIndex": 2,
      "explanation": "Paired em-dashes isolate the ironic qualification ('who had never once set foot on a boat') like a raised eyebrow to the reader right before 'lecturing the captain'.",
      "hints": [
        "Read the clause inside the dashes as a wry aside whispered to the reader.",
        "How does knowing she has never been on a boat make 'lecturing the captain' ironic?"
      ]
    },
    {
      "id": "exam-lang1-q24",
      "kind": "short",
      "topicId": "lang-p1-reading",
      "guideRef": "evaluating-writers-viewpoint",
      "difficulty": "challenge",
      "question": "Read this extract:\n\n*\"Oh, what a triumph of civic planning: six lanes of gridlocked SUVs idling beside a 'Green Future' billboard.\"*\n\nName the tonal device in which a writer states the opposite of what they truly mean (*\"what a triumph\"*) to mock a situation.",
      "answer": {
        "type": "text",
        "accept": [
          "irony",
          "verbal irony",
          "sarcasm"
        ],
        "display": "irony"
      },
      "solution": [
        "Praising gridlock beside an eco-billboard as 'a triumph of civic planning' uses **irony** (specifically **verbal irony** / **sarcasm**) to ridicule hypocrisy."
      ],
      "commonError": "Taking 'what a triumph' literally and claiming the writer admires the six-lane highway!",
      "hints": [
        "Does the writer genuinely think six gridlocked lanes beside a 'Green Future' sign is a 'triumph'?",
        "Saying the opposite of the intended meaning for sharp critique is called ___."
      ]
    },
    {
      "id": "exam-lang1-q25",
      "kind": "written",
      "topicId": "lang-p1-composition",
      "guideRef": "sensory-zoom-atmosphere",
      "difficulty": "core",
      "question": "Rewrite the flat sentence *\"The library was very quiet and old\"* into a 2–3 sentence **Grade-9 descriptive zoom** using sensory detail, a dynamic verb or metaphor, and deliberate punctuation. [3 marks]",
      "marks": 3,
      "modelAnswer": "Dust motes hung suspended in shafts of amber light above the leather-bound ledgers; nobody breathed. Only the tall mahogany clock measured the hush, its brass pendulum slicing the stillness while parchment sighed beneath turning fingers.",
      "markScheme": [
        {
          "point": "Replaces abstract 'quiet and old' with concrete visual/auditory/tactile sensory details (e.g. dust, leather, parchment, ticking clock, amber light).",
          "keywords": [
            "dust",
            "leather",
            "parchment",
            "clock",
            "pendulum",
            "mahogany",
            "amber",
            "shadow",
            "pages",
            "spines"
          ]
        },
        {
          "point": "Uses dynamic verbs, personification or metaphor to animate the stillness (e.g. 'suspended', 'slicing', 'sighed', 'measured', 'creaked').",
          "keywords": [
            "suspended",
            "slicing",
            "sighed",
            "measured",
            "creaked",
            "whispered",
            "breathed",
            "drifted",
            "clung"
          ]
        },
        {
          "point": "Shapes atmosphere and pace through deliberate contrast or varied clause length (e.g. hush/stillness/silence).",
          "keywords": [
            "stillness",
            "hush",
            "silence",
            "silent",
            "echo",
            "murmur"
          ]
        }
      ],
      "commonError": "Merely swapping 'very quiet' for 'extremely silent' without concrete nouns, sound contrasts, or active verbs.",
      "hints": [
        "Use a tiny background sound (like a clock pendulum or turning parchment) to make silence audible.",
        "Zoom onto physical textures of age: dust motes, cracked leather, mahogany.",
        "Include a semicolon, colon, or short clause to control the rhythm."
      ]
    }
  ]
};
