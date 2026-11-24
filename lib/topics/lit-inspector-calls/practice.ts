import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q01",
      question:
        "In what year is the action of *An Inspector Calls* set inside the Birling dining room?",
      answer: { type: "number", value: 1912 },
      traps: [
        {
          spec: { type: "number", value: 1945 },
          feedback:
            "1945 is when Priestley wrote and first staged the play; the onstage dinner takes place in Spring 1912.",
        },
      ],
      solution: [
        "Priestley sets the play in Spring 1912 — just before the sinking of the *Titanic* and two years before World War I — to create dramatic irony for his 1945 audience.",
      ],
      difficulty: "warmup",
      guideRef: "edwardian-1912-vs-1945-irony",
      hints: [
        "Arthur Birling says the *Titanic* sails 'next week' on her maiden voyage.",
        "Give the four-digit Edwardian year before World War I.",
      ],
      strategy: "Distinguish 1912 setting from 1945 production",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q02",
      question:
        "Name the fictional North Midlands industrial town in which the Birlings live.",
      answer: { type: "text", accept: ["Brumley"] },
      traps: [
        {
          spec: { type: "text", accept: ["Bradford", "Birmingham", "London", "Manchester"] },
          feedback:
            "Priestley grew up in Bradford and echoes Birmingham, but the Birlings' fictional North Midlands town is Brumley.",
        },
      ],
      solution: [
        "The Birlings live in **Brumley**, an industrial North Midlands town blending Bradford and Birmingham.",
      ],
      commonError:
        "Naming real cities like Bradford, Birmingham, or London instead of Priestley's fictional North Midlands industrial town, Brumley.",
      difficulty: "warmup",
      guideRef: "edwardian-1912-vs-1945-irony",
      hints: [
        "Sybil chairs the '___ Women's Charity Organisation' named after this town.",
        "It starts with 'Brum-'.",
      ],
      strategy: "Anchor set-text geography accurately",
    },
    {
      kind: "mcq",
      id: "lit-inspector-calls-quiz-q03",
      question:
        "Who speaks this line in Act 1: *'But these girls aren't cheap labour — they're people'*?",
      options: [
        "Sheila Birling",
        "Sybil Birling",
        "Arthur Birling",
        "Gerald Croft",
      ],
      answerIndex: 0,
      explanation:
        "Sheila challenges her father's capitalist dismissal of factory strikers, launching her moral awakening and the generational split.",
      difficulty: "warmup",
      guideRef: "generational-divide-sheila-eric",
      hints: [
        "This character immediately disagrees with Arthur Birling's 'cheap labour' mindset in Act 1.",
        "Which younger Birling becomes Inspector Goole's strongest ally?",
      ],
      strategy: "Attribute key ideological quotes cleanly",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q04",
      question:
        "Complete Priestley's opening lighting stage direction: *'The lighting should be ___ and intimate until the INSPECTOR arrives, and then it should be brighter and harder.'* (One word)",
      answer: { type: "text", accept: ["pink"] },
      traps: [
        {
          spec: { type: "text", accept: ["warm", "soft", "dim", "yellow", "golden"] },
          feedback:
            "Those capture the mood, but Priestley's exact colour adjective in the stage direction is 'pink' ('pink and intimate').",
        },
      ],
      solution: [
        "Priestley specifies **'pink'** (*'pink and intimate'*), symbolising the Birlings' rose-tinted bourgeois complacency before Goole's arrival.",
      ],
      commonError:
        "Paraphrasing the opening lighting as 'warm', 'soft', or 'dim' instead of quoting Priestley's exact colour adjective 'pink' ('pink and intimate').",
      difficulty: "warmup",
      guideRef: "stagecraft-lighting-entrances",
      hints: [
        "Think of the idiom 'rose-tinted glasses' — what warm pastel colour hides harsh reality?",
        "One four-letter colour adjective.",
      ],
      strategy: "Memorise exact AO2 lighting adjectives",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q05",
      question:
        "What new full name (first and surname) does Eva Smith adopt before meeting Gerald Croft in Act 2?",
      answer: { type: "text", accept: ["Daisy Renton"] },
      traps: [
        {
          spec: { type: "text", accept: ["Mrs Birling", "Daisy Smith", "Eva Renton"] },
          feedback:
            "She later calls herself 'Mrs Birling' before Sybil's committee, but the full alias she adopts before meeting Gerald is Daisy Renton.",
        },
      ],
      solution: [
        "Eva adopts the alias **Daisy Renton** — *Daisy* suggesting a fragile common flower easily crushed, and *Renton* hinting at how men rent and discard her.",
      ],
      commonError:
        "Giving only 'Daisy', hybridising the names as 'Daisy Smith', or confusing her Act 2 alias (Daisy Renton) with 'Mrs Birling' in Act 2's charity scene.",
      difficulty: "warmup",
      guideRef: "capitalism-vs-social-responsibility",
      hints: [
        "Hearing this two-word name at the end of Act 1 makes Gerald startle ('Startled').",
        "First name is a common white meadow flower; surname starts with 'Rent-'.",
      ],
      strategy: "Unpack allegorical aliases",
    },
    {
      kind: "mcq",
      id: "lit-inspector-calls-quiz-q06",
      question:
        "Which stage prop does Sheila physically hand back to Gerald in Act 2 and refuse to put back on in Act 3?",
      options: [
        "A gold pocket watch",
        "Her engagement ring",
        "Eva Smith's leather diary",
        "A silver port decanter",
      ],
      answerIndex: 1,
      explanation:
        "The engagement ring tracks Sheila's arc from materialist compliance in Act 1 ('Now I really feel engaged') to moral autonomy in Acts 2 and 3.",
      difficulty: "warmup",
      guideRef: "stagecraft-lighting-entrances",
      hints: [
        "Gerald slipped this token onto Sheila's finger during the celebration in Act 1.",
        "Returning it signals that she will not resume a marriage built on class pretence.",
      ],
      strategy: "Track symbolic stage props across all three acts",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q07",
      question:
        "Which character chairs the Brumley Women's Charity Organisation committee and admits being *'prejudiced'* against pregnant Eva?",
      answer: {
        type: "text",
        accept: ["Sybil Birling", "Mrs Birling", "Sybil"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Sheila Birling", "Sheila"] },
          feedback:
            "Sheila had Eva sacked from Milwards; her mother Sybil (Mrs Birling) chaired the charity committee.",
        },
      ],
      solution: [
        "**Sybil Birling (Mrs Birling)** chaired the committee and rejected Eva's appeal after taking offence that Eva called herself 'Mrs Birling'.",
      ],
      difficulty: "warmup",
      guideRef: "capitalism-vs-social-responsibility",
      hints: [
        "Priestley introduces her as 'a rather cold woman and her husband's social superior'.",
        "Give her name (e.g. Sybil Birling or Mrs Birling).",
      ],
      strategy: "Keep Sheila's and Sybil's offences distinct",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q08",
      question:
        "Complete Inspector Goole's famous socialist statement in Act 3: *'We don't live alone. We are ___ of one body.'* (One plural noun)",
      answer: { type: "text", accept: ["members"] },
      traps: [
        {
          spec: { type: "text", accept: ["parts", "limbs", "pieces", "organs"] },
          feedback:
            "Goole echoes St Paul's exact biblical noun: 'We are members of one body.'",
        },
      ],
      solution: [
        "Goole declares: *'We are **members** of one body. We are responsible for each other'* — echoing St Paul's First Epistle to the Corinthians.",
      ],
      commonError:
        "Substituting 'parts' or 'limbs' for Goole's exact biblical noun 'members' ('We are members of one body').",
      difficulty: "core",
      guideRef: "inspector-goole-mouthpiece-ending",
      hints: [
        "The biblical phrase compares individuals in society to limbs/parts belonging to a single organism.",
        "Starts with 'm' (seven letters, plural).",
      ],
      strategy: "Recall exact closed-book micro-quotations",
    },
    {
      kind: "mcq",
      id: "lit-inspector-calls-quiz-q09",
      question:
        "When Colonel Roberts confirms in Act 3 that no Inspector Goole serves on the Brumley police force, which characters still insist their moral guilt remains unchanged?",
      options: [
        "Arthur and Sybil Birling",
        "Gerald Croft and Arthur Birling",
        "Sheila and Eric Birling",
        "Sybil Birling and Gerald Croft",
      ],
      answerIndex: 2,
      explanation:
        "Sheila and Eric pass Priestley's Act 3 moral litmus test ('the girl's dead and we all helped to kill her — and that's what matters'), while Arthur, Sybil, and Gerald celebrate escaping public scandal.",
      difficulty: "core",
      guideRef: "generational-divide-sheila-eric",
      hints: [
        "Which two characters represent the malleable younger generation capable of genuine conscience?",
        "Remember Gerald sides with the parents to discredit Goole.",
      ],
      strategy: "Use the Act 3 hoax as a moral litmus test",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-quiz-q10",
      question:
        "What household device rings *'sharply'* at the very end of Act 3 to announce that a girl has just died and a real police inspector is on his way?",
      answer: { type: "text", accept: ["telephone", "phone"] },
      traps: [
        {
          spec: { type: "text", accept: ["doorbell", "front door bell", "bell"] },
          feedback:
            "The front door bell rings sharply in Act 1 when Goole arrives; at the end of Act 3, the **telephone** rings sharply.",
        },
      ],
      solution: [
        "*'The **telephone** rings sharply'* — mirroring Act 1's sharp doorbell and snapping Priestley's cyclical ending shut.",
      ],
      difficulty: "warmup",
      guideRef: "inspector-goole-mouthpiece-ending",
      hints: [
        "Arthur Birling picks up the receiver and listens before relaying the police message.",
        "Contrast Act 1's doorbell with Act 3's modern communication device.",
      ],
      strategy: "Link Act 1 doorbell to Act 3 telephone",
    },
  ],
  papers: [
    {
      id: "lit-inspector-calls-p1",
      title: "Practice Paper 1: Language, Irony & Character Constructs",
      questions: [
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q01",
          question:
            "In what year was *An Inspector Calls* written/first performed, creating a thirty-three-year hindsight gap with its 1912 setting?",
          answer: { type: "number", value: 1945 },
          traps: [
            {
              spec: { type: "number", value: 1912 },
              feedback:
                "1912 is when the play is set; Priestley completed and premiered it in **1945** at the end of World War II.",
            },
          ],
          solution: [
            "Priestley completed and premiered the play in **1945** (Moscow 1945, London 1946), harnessing post-WWII hindsight against 1912 Edwardian complacency.",
          ],
          difficulty: "warmup",
          guideRef: "edwardian-1912-vs-1945-irony",
          hints: [
            "World War II ended in this year and Clement Attlee's Labour Party won the post-war UK election.",
            "Add thirty-three years to 1912.",
          ],
          strategy: "Pair 1912 setting with 1945 audience context",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q02",
          question:
            "Complete Arthur Birling's Act 1 boast about the *Titanic*: *'unsinkable, ___ unsinkable'* (one adverb).",
          answer: { type: "text", accept: ["absolutely"] },
          traps: [
            {
              spec: { type: "text", accept: ["completely", "totally", "entirely"] },
              feedback:
                "Birling's exact hubristic intensifier is 'absolutely' ('unsinkable, absolutely unsinkable').",
            },
          ],
          solution: [
            "Birling declares *'unsinkable, **absolutely** unsinkable'*. The intensifying adverb heightens his hubris via dramatic irony.",
          ],
          commonError:
            "Paraphrasing Birling's intensifier as 'completely' or 'totally' instead of quoting 'absolutely unsinkable'.",
          difficulty: "warmup",
          guideRef: "edwardian-1912-vs-1945-irony",
          hints: [
            "Birling adds an emphatic ten-letter adverb meaning 'completely / without exception'.",
            "Starts with 'abs-'.",
          ],
          strategy: "Zoom onto hubristic intensifiers (AO2)",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q03",
          question:
            "Complete Birling's justification for sacking Eva Smith in Act 1: *'It's my ___ to keep labour costs down.'* (One four-letter noun)",
          answer: { type: "text", accept: ["duty"] },
          traps: [
            {
              spec: { type: "text", accept: ["job", "right", "role", "work"] },
              feedback:
                "Birling co-opts the moral noun 'duty' ('It's my duty to keep labour costs down'), which Goole later reclaims.",
            },
          ],
          solution: [
            "Birling says *'It's my **duty** to keep labour costs down'*, perverting a moral noun into profit-maximisation (later countered when Goole says *'I'm on duty'*).",
          ],
          commonError:
            "Writing 'job' or 'right' instead of 'duty', missing how Priestley makes Birling weaponise moral vocabulary to defend capitalist self-interest.",
          difficulty: "core",
          guideRef: "capitalism-vs-social-responsibility",
          hints: [
            "Inspector Goole later reclaims this exact moral four-letter noun when refusing a drink ('I'm on ___').",
            "Means moral obligation.",
          ],
          strategy: "Track contested moral nouns across speakers",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q04",
          question:
            "Name the Brumley department store from which Sheila Birling had Eva Smith dismissed.",
          answer: {
            type: "text",
            accept: ["Milwards", "Milward's", "Milward"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["Harrods", "Selfridges", "Birling and Company"] },
              feedback:
                "Harrods and Selfridges are real London stores; Brumley's upscale shop in the play is Milwards.",
            },
          ],
          solution: [
            "Sheila threatened to close her family's account at **Milwards** unless Eva was dismissed.",
          ],
          commonError:
            "Confusing Brumley's fictional shop Milwards with real London department stores like Harrods, or with Arthur's factory (Birling and Company).",
          difficulty: "warmup",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "An upscale Brumley clothing shop starting with 'Mil-'.",
            "Eva had found clean retail work there after Birling sacked her.",
          ],
          strategy: "Recall exact Brumley workplace settings",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q05",
          question:
            "What substance did Eva Smith swallow to end her life, which Goole says *'burnt her inside out'*?",
          answer: { type: "text", accept: ["disinfectant", "strong disinfectant"] },
          traps: [
            {
              spec: { type: "text", accept: ["bleach", "poison", "acid", "arsenic"] },
              feedback:
                "Goole specifically states she swallowed 'a lot of strong disinfectant' (not generic poison or arsenic).",
            },
          ],
          solution: [
            "Eva swallowed *'a lot of strong **disinfectant**'*, a harsh cleaning chemical whose internal burning symbolises the Birlings' corrosive cruelty.",
          ],
          commonError:
            "Writing vague 'poison' or 'bleach' instead of Goole's exact domestic cleaning substance, 'strong disinfectant'.",
          difficulty: "warmup",
          guideRef: "capitalism-vs-social-responsibility",
          hints: [
            "A caustic household cleaning fluid mentioned in both Act 1 and the final Act 3 phone call.",
            "Starts with 'dis-'.",
          ],
          strategy: "Note visceral physical motifs",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q06",
          question:
            "Name the parlourmaid who serves the Birling family at table and announces Inspector Goole's arrival in Act 1.",
          answer: { type: "text", accept: ["Edna"] },
          traps: [
            {
              spec: { type: "text", accept: ["Eva", "Daisy", "Enid"] },
              feedback:
                "Eva/Daisy never appears onstage; the Birlings' onstage parlourmaid is Edna.",
            },
          ],
          solution: [
            "**Edna** (*'Please, sir, an inspector's called'*) is the silent working-class servant whose onstage labour contrasts with Birling's dismissal of workers.",
          ],
          commonError:
            "Confusing the onstage parlourmaid Edna with offstage Eva Smith, or overlooking Edna's dramatic role in ushering Goole into the dining room.",
          difficulty: "warmup",
          guideRef: "stagecraft-lighting-entrances",
          hints: [
            "Birling tells her in Act 1, 'Giving us the port, ___? That's right.'",
            "Four-letter female first name starting with 'E'.",
          ],
          strategy: "Include minor working-class onstage figures",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q07",
          question:
            "Who speaks this line in Act 3: *'You're not the kind of father a chap could go to when he's in trouble'*?",
          answer: {
            type: "text",
            accept: ["Eric Birling", "Eric"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["Gerald Croft", "Gerald"] },
              feedback:
                "Gerald's father is Sir George Croft; it is Arthur's son **Eric Birling** who indicts his father's emotional coldness.",
            },
          ],
          solution: [
            "**Eric Birling** rebukes Arthur in Act 3, exposing the emotional alienation beneath respectable Edwardian patriarchy.",
          ],
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Which character stole about fifty pounds from Birling's office because he couldn't confide in his father?",
            "Give his name (Eric or Eric Birling).",
          ],
          strategy: "Link dialogue to family power dynamics",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q08",
          question:
            "What supernatural word is a homophone (exact sound-alike) of Inspector **Goole's** surname?",
          answer: { type: "text", accept: ["ghoul"] },
          traps: [
            {
              spec: { type: "text", accept: ["ghost", "spirit", "spectre"] },
              feedback:
                "Those are synonyms, not homophones; the exact sound-alike of 'Goole' is 'ghoul' (g-h-o-u-l).",
            },
          ],
          solution: [
            "**Ghoul** — a spirit or phantom associated with graves, underscoring Goole's uncanny omniscience as an avenging moral conscience.",
          ],
          commonError:
            "Writing 'ghost' (not a homophone of Goole) or misspelling the supernatural noun 'ghoul' as 'goul' or 'goal'.",
          difficulty: "warmup",
          guideRef: "inspector-goole-mouthpiece-ending",
          hints: [
            "Spelled 'g-h-o-u-l', meaning a spectral spirit.",
            "Explains why Goole seems to know future events before they happen.",
          ],
          strategy: "Analyse Priestley's charactonyms",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q09",
          question:
            "Approximately how many pounds did Eric steal from Birling and Company's office cash accounts in Act 3?",
          answer: { type: "number", value: 50 },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback:
                "25 shillings a week was the factory wage Eva struck for; Eric stole about **50** pounds from the office.",
            },
          ],
          solution: [
            "Eric confesses to taking **about 50 pounds** (*'about fifty pounds'*), prompting Arthur to panic about covering up the accounts rather than mourning Eva.",
          ],
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Give the number of pounds Eric admits taking from the office cash box.",
            "Half of one hundred.",
          ],
          strategy: "Distinguish 25 shillings (strike) from £50 (theft)",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p1-q10",
          question:
            "What literary/dramatic term describes a character like Inspector Goole who voices the playwright's own political and moral message directly to the audience?",
          answer: {
            type: "text",
            accept: [
              "mouthpiece",
              "authorial mouthpiece",
              "dramatic mouthpiece",
              "surrogate",
              "proxy",
            ],
          },
          traps: [
            {
              spec: { type: "text", accept: ["narrator", "protagonist", "omniscient narrator"] },
              feedback:
                "Plays do not normally use a prose narrator; a character who voices the dramatist's own ideology onstage is an authorial mouthpiece (or proxy/surrogate).",
            },
          ],
          solution: [
            "Goole functions as Priestley's **authorial mouthpiece** (or dramatic proxy/surrogate), articulating Priestley's 1945 socialist vision onstage.",
          ],
          commonError:
            "Calling Goole the 'narrator' (a prose fiction term) or treating him as a literal detective rather than Priestley's dramatic mouthpiece.",
          difficulty: "core",
          guideRef: "inspector-goole-mouthpiece-ending",
          hints: [
            "Compound noun combining 'mouth' + 'piece' — meaning someone through whom the author speaks.",
            "Essential Grade-9 conceptual term for treating Goole as a construct.",
          ],
          strategy: "Treat characters as dramatic constructs",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p1-q11",
          question:
            "Read Arthur Birling's Act 1 speech before Goole arrives: *'The Titanic — she sails next week... unsinkable, absolutely unsinkable... The Germans don't want war... a man has to mind his own business and look after himself and his own — and — [sharp ring of a front door bell].'* Explain how Priestley uses dramatic methods here to shape the audience's view of Birling. [4 marks]",
          marks: 4,
          modelAnswer:
            "Priestley deploys dramatic irony through the 1945 post-war time-frame: every spectator knows the liner sank in April 1912 and two catastrophic conflicts erupted, instantly demolishing Birling's intellectual authority. Linguistically, the emphatic intensifier and repetition reveal hubristic overconfidence. By pairing factual blindness directly with laissez-faire individualism, Priestley discredits capitalism by association. Structurally, timing the acoustic interruption of Inspector Goole's entrance mid-clause cuts off selfish dogma with socialist accountability.",
          markScheme: [
            {
              point: "Identifies dramatic irony via the 1945 audience's historical hindsight",
              keywords: ["dramatic irony", "1945", "hindsight", "sank", "world war"],
            },
            {
              point: "Analyses Birling's hubristic language / repetition / intensifier",
              keywords: ["intensifier", "repetition", "hubris", "hubristic", "arrogant", "pompous", "overconfident"],
            },
            {
              point: "Explains how factual errors discredit his capitalist / individualist philosophy",
              keywords: ["capitalism", "capitalist", "individualist", "individualism", "laissez-faire", "credibility", "authority"],
            },
            {
              point: "Analyses the structural / sound-cue timing of Goole's arrival cutting Birling off mid-sentence",
              keywords: ["interruption", "interrupts", "mid-sentence", "mid-clause", "timing", "acoustic", "inspector", "goole"],
            },
          ],
          commonError:
            "Writing a history paragraph on why the Titanic sank instead of explaining how Priestley uses dramatic irony and the doorbell cue to undermine Birling.",
          difficulty: "core",
          guideRef: "edwardian-1912-vs-1945-irony",
          hints: [
            "Start with what the 1945 audience knows that Birling gets completely wrong (AO2 dramatic irony).",
            "Explain how undermining his historical facts discredits his capitalist morals, then analyse the exact timing of the sound cue.",
          ],
          strategy: "Link 1912/1945 dramatic irony + acoustic timing to capitalism",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p1-q12",
          question:
            "Read Priestley's opening stage directions: *'The general effect is substantial and heavily comfortable, but not cosy and homelike... The lighting should be pink and intimate until the INSPECTOR arrives, and then it should be brighter and harder.'* Analyse how Priestley uses set design and lighting to establish the play's central themes. [4 marks]",
          marks: 4,
          modelAnswer:
            "Priestley uses the physical dining-room environment to expose bourgeois materialism: solid, expensive furnishings advertise financial prosperity, yet the negative qualification reveals emotional coldness and fractured family bonds beneath respectable appearances. Initially, warm rose-tinted illumination symbolises privileged self-delusion and sheltered complacency insulating the household from working-class suffering. The stark transition on Goole's entrance transforms the domestic room into an unforgiving courtroom spotlight, visually enacting moral scrutiny and truth-telling.",
          markScheme: [
            {
              point: "Interprets the solid set / furnishings as bourgeois wealth masking emotional coldness",
              keywords: ["materialism", "wealth", "prosperity", "affluence", "coldness", "loveless", "facade", "appearances"],
            },
            {
              point: "Unpacks the initial warm lighting as rose-tinted complacency / bourgeois illusion",
              keywords: ["rose-tinted", "complacency", "illusion", "self-delusion", "bubble", "sheltered", "insulating"],
            },
            {
              point: "Analyses the harsher lighting shift as an interrogation spotlight / courtroom glare",
              keywords: ["spotlight", "interrogation", "courtroom", "glare", "clinical", "scrutiny", "expose"],
            },
            {
              point: "Connects visual stagecraft explicitly to Priestley's critique of class / truth",
              keywords: ["stagecraft", "visually", "visual", "class", "bourgeois", "truth", "hypocrisy"],
            },
          ],
          commonError:
            "Paraphrasing 'the room is big and the lights get brighter' without unpacking the symbolic shift from rose-tinted illusion to interrogation spotlight.",
          difficulty: "core",
          guideRef: "stagecraft-lighting-entrances",
          hints: [
            "Contrast material wealth against emotional warmth in the furniture description.",
            "Explain what both lighting states symbolise psychologically and how the shift turns a dining room into an interrogation dock.",
          ],
          strategy: "Turn paratextual stage directions into AO2 symbolism",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p1-q13",
          question:
            "Explore how Priestley presents **Sheila Birling's** transformation from Act 1 (*'mummy'*, *'these girls aren't cheap labour — they're people'*) to Act 3 (*'Fire and blood and anguish. And it frightens me the way you talk'*). [4 marks]",
          marks: 4,
          modelAnswer:
            "In early Act 1, Priestley characterises Sheila through infantile domestic diction and naive excitement over her engagement ring, reflecting how Edwardian patriarchy keeps affluent daughters sheltered. Her swift remorse over abusing customer privilege at Milwards triggers an ethical awakening, using sharp antithesis to reject her father's economic dehumanisation of female workers. By Act 2 she asserts autonomy by returning Gerald's ring and acting as Goole's perceptive proxy. Crucially, in Act 3 she echoes Goole's prophetic vocabulary verbatim and refuses her parents' hoax cover-up, embodying Priestley's hope for post-1945 youth.",
          markScheme: [
            {
              point: "Establishes Act 1 starting point: infantile / sheltered Edwardian daughter",
              keywords: ["infantile", "childish", "sheltered", "naive", "patriarchy", "patriarchal"],
            },
            {
              point: "Analyses her Milwards remorse and linguistic rejection of commodification",
              keywords: ["milwards", "remorse", "antithesis", "commodification", "dehumanisation", "humanity", "empathy"],
            },
            {
              point: "Tracks stagecraft / structural growth: returning the engagement ring or acting as Goole's proxy",
              keywords: ["ring", "autonomy", "independence", "proxy", "co-interrogator", "perceptive"],
            },
            {
              point: "Evaluates Act 3 culmination: echoing Goole's register and passing the hoax test as symbol of youth",
              keywords: ["echoes", "echoing", "prophetic", "hoax", "younger generation", "youth", "conscience"],
            },
          ],
          commonError:
            "Describing Milwards at length while forgetting Sheila's crucial role in Act 3 after Inspector Goole leaves.",
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Compare Sheila's childish Act 1 register with whose words she echoes in Act 3.",
            "Include her physical action with the engagement ring prop and her refusal to join the hoax celebration.",
          ],
          strategy: "Trace diachronic register + prop arc across Acts 1–3",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p1-q14",
          question:
            "In Act 2, Sybil Birling refers to Eva as one of *'girls of that class'* and calls Eva's use of the Birling name *'a piece of gross impertinence'*. How does Priestley use **Sybil Birling** to criticise Edwardian class attitudes? [4 marks]",
          marks: 4,
          modelAnswer:
            "Priestley constructs Sybil as the frigid embodiment of entrenched aristocratic snobbery, using demonstrative distancing to treat working-class women as an inferior species. Although she chairs the Brumley charity committee, her philanthropy is performative status-signalling: wounded vanity overrides compassion when destitute, pregnant Eva borrows her surname. Priestley sharpens the critique through moral inversion, since penniless Eva refuses Eric's stolen fifty pounds while Sybil's own son commits theft. Finally, dramatic irony peaks at the Act 2 curtain as Sybil unknowingly demands public punishment for Eric, destroying her own unborn grandchild.",
          markScheme: [
            {
              point: "Analyses Sybil's snobbish / dehumanising language ('that' distancing working women)",
              keywords: ["snobbery", "snobbish", "distancing", "dehumanising", "inferior", "superiority", "frigid", "cold"],
            },
            {
              point: "Exposes the hypocrisy of performative charity at the Brumley committee",
              keywords: ["charity", "hypocrisy", "performative", "prestige", "vanity", "compassion", "prejudiced"],
            },
            {
              point: "Notes the moral inversion between ethical Eva (refusing stolen money) and Eric",
              keywords: ["stolen", "inversion", "ethical", "morality", "principles", "refuses"],
            },
            {
              point: "Analyses the Act 2 dramatic irony trap condemning Eric / her own grandchild",
              keywords: ["dramatic irony", "trap", "eric", "grandchild", "condemns", "curtain"],
            },
          ],
          commonError:
            "Merely calling Mrs Birling 'mean and unkind' without linking her charity hypocrisy and Act 2 dramatic irony to Edwardian class snobbery.",
          difficulty: "core",
          guideRef: "capitalism-vs-social-responsibility",
          hints: [
            "Zoom in on the distancing determiner 'that' and the irony of a 'charity' chairwoman denying help out of wounded pride.",
            "Connect Eva's refusal of stolen money and Sybil's Act 2 curtain trap condemning Eric.",
          ],
          strategy: "Combine lexical zoom + charity irony + Act 2 curtain trap",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p1-q15",
          question:
            "Read Inspector Goole's final speech in Act 3: *'there are millions and millions and millions of Eva Smiths and John Smiths still left with us... We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.'* How does Priestley craft this speech as the ideological climax of the play? [5 marks]",
          marks: 5,
          modelAnswer:
            "Functioning as Priestley's socialist mouthpiece, Goole generalises single offstage Eva into universal working-class humanity through emphatic repetition of numbers and common surnames. Syntactically, crisp declarative sentences anchored by collective anaphora directly overturn Birling's earlier individualist creed. The biblical metaphor from Corinthians sanctifies mutual welfare as sacred organic duty rather than optional charity. In the final warning, a polysyndetic tricolon of apocalyptic nouns prophesies the trench slaughter and Blitz bombings between 1912 and 1945. Directly addressing post-war theatregoers across the fourth wall, Priestley urges voters to build a Welfare State rather than repeat past catastrophe.",
          markScheme: [
            {
              point: "Identifies Goole as Priestley's socialist mouthpiece / universalising Eva into the working class",
              keywords: ["mouthpiece", "socialist", "socialism", "universal", "everywoman", "working-class", "working class"],
            },
            {
              point: "Analyses collective anaphora / inclusive pronouns overturning Birling's individualism",
              keywords: ["anaphora", "inclusive", "pronoun", "pronouns", "collective", "individualism", "birling"],
            },
            {
              point: "Unpacks the Christian / biblical corporeal metaphor sanctifying social responsibility",
              keywords: ["biblical", "christian", "corinthians", "metaphor", "organism", "organic", "sacred", "sermon"],
            },
            {
              point: "Analyses the polysyndetic tricolon / apocalyptic diction evoking WWI and WWII",
              keywords: ["tricolon", "triad", "polysyndeton", "polysyndetic", "apocalyptic", "prophesies", "prophecy", "wars", "blitz"],
            },
            {
              point: "Explains direct impact on the 1945 audience / call for post-war Welfare State reform",
              keywords: ["1945", "audience", "welfare state", "post-war", "fourth wall", "reform"],
            },
          ],
          commonError:
            "Listing techniques ('repetition and short sentences') without connecting the biblical 'one body' image and two World Wars to Priestley's 1945 call for social reform.",
          difficulty: "challenge",
          guideRef: "inspector-goole-mouthpiece-ending",
          hints: [
            "Name Goole's role as authorial mouthpiece and show how inclusive anaphora answers Birling's Act 1 speech.",
            "Unpack the St Paul corporeal metaphor AND the polysyndetic tricolon evoking 1914–45 warfare.",
            "Conclude with how this speech crosses the fourth wall to challenge the 1945 audience.",
          ],
          strategy: "Layer Mouthpiece + Anaphora + Biblical Allusion + 1945 Prophecy",
        },
      ],
    },
    {
      id: "lit-inspector-calls-p2",
      title: "Practice Paper 2: Stagecraft, Structure & Whole-Play Synthesis",
      questions: [
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q01",
          question:
            "What single interrogative word does Inspector Goole speak as he slowly opens the dining-room door at both the **end of Act 1** and the **opening of Act 2**?",
          answer: { type: "text", accept: ["Well", "Well?"] },
          traps: [
            {
              spec: { type: "text", accept: ["Why", "Who", "Yes", "What"] },
              feedback:
                "Goole's exact single-word cliffhanger closing Act 1 and opening Act 2 is 'Well?'",
            },
          ],
          solution: [
            "Goole opens the door and asks **'Well?'** — freezing Gerald and Sheila across the act break with unbroken real-time tension.",
          ],
          commonError:
            "Guessing 'Why?' or 'What?' instead of Goole's terse, expectant 'Well?' that bridges the Act 1 curtain and Act 2 opening without a time skip.",
          difficulty: "core",
          guideRef: "stagecraft-lighting-entrances",
          hints: [
            "A single four-letter word followed by a question mark, prompting Gerald to confess about Daisy Renton.",
            "Bridges the Act 1 curtain and Act 2 opening seamlessly.",
          ],
          strategy: "Memorise act-bridge cliffhangers",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q02",
          question:
            "Name the Brumley music-hall venue where both Gerald Croft and Eric Birling met Daisy Renton in the bar.",
          answer: {
            type: "text",
            accept: [
              "Palace Variety Theatre",
              "Palace Theatre",
              "Palace bar",
              "The Palace",
            ],
          },
          traps: [
            {
              spec: { type: "text", accept: ["County Hotel", "Milwards"] },
              feedback:
                "Gerald mentions the County Hotel earlier and Milwards is the shop; both men met Daisy in the bar of the Palace Variety Theatre.",
            },
          ],
          solution: [
            "Both men met her at the **Palace Variety Theatre** bar, exposing the double standard of 'respectable' Brumley gentlemen frequenting venues linked with prostitution.",
          ],
          commonError:
            "Confusing the Palace Variety Theatre bar with the County Hotel (where Gerald claims he met business contacts) or Milwards.",
          difficulty: "core",
          guideRef: "capitalism-vs-social-responsibility",
          hints: [
            "Starts with 'Palace' — a music-hall variety theatre in Brumley.",
            "Alderman Joe Meggarty was also drinking there.",
          ],
          strategy: "Connect offstage venues to bourgeois hypocrisy",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q03",
          question:
            "Give the surname of Brumley's Chief Constable, with whom Birling plays golf and whom Birling telephones in Act 3 to check whether Goole is on the police force.",
          answer: {
            type: "text",
            accept: ["Colonel Roberts", "Roberts"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["Meggarty", "Alderman Meggarty", "Joe Meggarty", "Croft"] },
              feedback:
                "Joe Meggarty is the lecherous Brumley Alderman; the Chief Constable Birling telephones is Colonel Roberts.",
            },
          ],
          solution: [
            "**Colonel Roberts** confirms there is no Inspector Goole on the Brumley police force, triggering the Act 3 hoax celebration.",
          ],
          commonError:
            "Mixing up Chief Constable Colonel Roberts with Alderman Joe Meggarty or Sir George Croft when recalling Birling's elite Brumley cronies.",
          difficulty: "core",
          guideRef: "inspector-goole-mouthpiece-ending",
          hints: [
            "He holds the military rank of Colonel.",
            "Surname starts with 'Rob-'.",
          ],
          strategy: "Know precise Act 3 verification details",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q04",
          question:
            "Which rival manufacturing firm, owned by Gerald's father Sir George, does Birling hope to partner with *'for lower costs and higher prices'*?",
          answer: {
            type: "text",
            accept: ["Crofts Limited", "Crofts Ltd", "Crofts"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["Birling and Company", "Birling Ltd"] },
              feedback:
                "Birling and Company is Arthur's own firm; its aristocratic rival owned by Sir George Croft is Crofts Limited.",
            },
          ],
          solution: [
            "**Crofts Limited** is the older, higher-status rival firm owned by Sir George Croft.",
          ],
          commonError:
            "Naming Arthur's own company (Birling and Company) instead of Sir George Croft's rival firm, Crofts Limited.",
          difficulty: "warmup",
          guideRef: "capitalism-vs-social-responsibility",
          hints: [
            "Named after Gerald's family surname + 'Limited'.",
            "Rival to Birling and Company.",
          ],
          strategy: "Contrast bourgeois Birling with aristocratic Crofts",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q05",
          question:
            "What colloquial slang adjective does Sheila playfully use in Act 1 to say Eric is mildly drunk (*'half ___'*), hinting early at his serious drinking problem?",
          answer: { type: "text", accept: ["squiffy"] },
          traps: [
            {
              spec: { type: "text", accept: ["tipsy", "drunk", "tight", "sozzled"] },
              feedback:
                "Sheila uses the distinctive Edwardian upper-class slang word 'squiffy' ('he's been steadily drinking too much for the last two years').",
            },
          ],
          solution: [
            "Sheila calls Eric **'squiffy'** — an upper-class Edwardian slang word that Sybil scolds as unladylike while blinding herself to Eric's real alcoholism.",
          ],
          commonError:
            "Replacing Sheila's exact Edwardian slang 'squiffy' with modern equivalents like 'tipsy' or 'drunk'.",
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Seven-letter Edwardian slang word starting with 'sq-'.",
            "Sybil immediately tells Sheila not to use such expressions.",
          ],
          strategy: "Spot early Act 1 foreshadowing in dialogue",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q06",
          question:
            "Complete Priestley's entrance stage direction for Inspector Goole: *'he creates at once an impression of massiveness, solidity and ___.'* (One abstract noun)",
          answer: { type: "text", accept: ["purposefulness"] },
          traps: [
            {
              spec: { type: "text", accept: ["authority", "seriousness", "power"] },
              feedback:
                "Complete Priestley's exact '-ness' tricolon: 'massiveness, solidity and purposefulness'.",
            },
          ],
          solution: [
            "Priestley writes *'massiveness, solidity and **purposefulness**'*, establishing Goole's unshakeable moral mission.",
          ],
          commonError:
            "Writing 'purpose' (omitting the '-ness' suffix that completes Priestley's tricolon) or guessing 'authority'.",
          difficulty: "core",
          guideRef: "inspector-goole-mouthpiece-ending",
          hints: [
            "Third '-ness' noun in Goole's entrance tricolon, built from the root noun 'purpose'.",
            "Shows he arrives with a deliberate moral goal.",
          ],
          strategy: "Master Goole's entrance tricolon",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q07",
          question:
            "Which character enters silently through the front door at the **exact end of Act 2**, right after Sybil demands the unborn baby's father be made an example of?",
          answer: {
            type: "text",
            accept: ["Eric Birling", "Eric"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["Gerald Croft", "Gerald"] },
              feedback:
                "Gerald went out for a walk earlier in Act 2 and returns later in Act 3; it is Eric Birling who walks in at the Act 2 curtain.",
            },
          ],
          solution: [
            "**Eric Birling** walks in pale and distressed just as Sybil finishes condemning the father — one of Priestley's sharpest visual curtain cliffhangers.",
          ],
          commonError:
            "Confusing Eric's silent entrance at the Act 2 curtain with Gerald Croft's return from his walk in Act 3.",
          difficulty: "warmup",
          guideRef: "stagecraft-lighting-entrances",
          hints: [
            "His silent appearance confirms Sheila's horrified realisation about who fathered Eva's child.",
            "Give his name (Eric or Eric Birling).",
          ],
          strategy: "Use silent doorway entrances as AO2 evidence",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q08",
          question:
            "In Edexcel 4ET1 Paper 2 Section A, how many total marks is the *An Inspector Calls* whole-text essay worth (split equally 15 AO1 + 15 AO2)?",
          answer: { type: "number", value: 30 },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback:
                "15 is only one Assessment Objective (AO1 or AO2); add both halves together for the full essay total.",
            },
            {
              spec: { type: "number", value: 40 },
              feedback:
                "Paper 1 prose (*Of Mice and Men*) is 40 marks, whereas Paper 2 modern drama (*An Inspector Calls*) is 30 marks (15 AO1 + 15 AO2).",
            },
          ],
          solution: [
            "The Paper 2 Section A essay carries **30 marks** (15 marks for AO1 critical knowledge/response + 15 marks for AO2 language, form, and structure).",
          ],
          commonError:
            "Confusing Paper 2 Section A's 30-mark tariff (no AO4) with Paper 1 Section C's 40-mark prose tariff, or giving 15 for a single AO.",
          difficulty: "warmup",
          guideRef: "edwardian-1912-vs-1945-irony",
          hints: [
            "Add 15 marks for AO1 and 15 marks for AO2.",
            "Give the two-digit integer.",
          ],
          strategy: "Pace your 45-minute essay for 15 AO1 + 15 AO2",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q09",
          question:
            "What structural term describes Priestley's adherence to **one continuous evening, one single room, and one unbroken investigation** across all three acts?",
          answer: {
            type: "text",
            accept: [
              "classical unities",
              "dramatic unities",
              "the unities",
              "three unities",
              "unities",
            ],
          },
          traps: [
            {
              spec: { type: "text", accept: ["cyclical structure", "in medias res", "well-made play"] },
              feedback:
                "The phone call creates a cyclical frame, whereas keeping one continuous time, one room, and one plot is the classical (or three) unities.",
            },
          ],
          solution: [
            "Priestley observes the **classical unities** (of time, place, and action), turning the single dining room into an inescapable moral pressure-cooker.",
          ],
          commonError:
            "Labelling the continuous real-time single-room design 'cyclical structure' (which describes the final phone call) instead of the Aristotelian classical unities.",
          difficulty: "challenge",
          guideRef: "stagecraft-lighting-entrances",
          hints: [
            "Derived from Aristotle's *Poetics*: unity of time, unity of place, and unity of action.",
            "Two words: 'classical ___' (plural noun starting with 'u').",
          ],
          strategy: "Deploy advanced dramatic-form terminology (AO2)",
        },
        {
          kind: "short",
          id: "lit-inspector-calls-p2-q10",
          question:
            "Which character says in Act 3, even while others think Goole was a fake: *'the girl's dead and we all helped to kill her — and that's what matters'*?",
          answer: {
            type: "text",
            accept: ["Eric Birling", "Eric"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["Inspector Goole", "Goole"] },
              feedback:
                "Inspector Goole has already left the house at this point; **Eric Birling** speaks this line against his parents' cover-up.",
            },
          ],
          solution: [
            "**Eric Birling** insists that legal technicalities cannot erase collective moral guilt (*'we all helped to kill her'*).",
          ],
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Spoken after Goole's exit by the male member of the younger generation who sides with Sheila.",
            "Notice the inclusive pronoun 'we all' admitting his own guilt too.",
          ],
          strategy: "Prove Eric's moral redemption in Act 3",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p2-q11",
          question:
            "How does Priestley present **Gerald Croft** as a complex bridge between the older and younger generations across the play (from rescuing Daisy at the Palace bar to his Act 3 announcement *'Everything's all right now, Sheila. What about this ring?'*)? [4 marks]",
          marks: 4,
          modelAnswer:
            "Priestley positions thirty-year-old Gerald ambiguously between youth and the elder Birlings. In Act 2, unlike Sybil's callousness, Gerald displays genuine emotional distress and candidly admits sheltering destitute Daisy in Morgan Terrace, though his aristocratic status as Sir George Croft's heir created asymmetric dependency before he discarded her. However, in Act 3 Gerald spearheads the detective inquiry with Colonel Roberts to expose Goole as a hoax. Expecting Sheila to resume their engagement simply because public scandal has been averted proves entrenched upper-class privilege ultimately overrides his temporary conscience.",
          markScheme: [
            {
              point: "Notes Gerald's Act 2 emotional sincerity / temporary grief contrasted with elder Birlings",
              keywords: ["distress", "grief", "sincerity", "affection", "honesty", "candidly", "sympathy"],
            },
            {
              point: "Critiques the class / gender power imbalance in keeping and discarding Daisy as mistress",
              keywords: ["aristocratic", "imbalance", "asymmetric", "dependency", "discarded", "privilege", "mistress"],
            },
            {
              point: "Analyses Gerald leading the Act 3 detective cover-up to discredit Goole",
              keywords: ["hoax", "colonel roberts", "sergeant", "discredit", "cover-up", "detective"],
            },
            {
              point: "Evaluates the ring offer showing he confuses avoiding scandal with moral innocence",
              keywords: ["scandal", "innocence", "status quo", "unchanged", "conscience", "older generation"],
            },
          ],
          commonError:
            "Treating Gerald either as a pure romantic hero in Act 2 or ignoring his genuine distress by calling him identical to Mr Birling throughout.",
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Acknowledge why Sheila briefly respects Gerald in Act 2 AND critique the class power imbalance with Daisy.",
            "Show how his Act 3 hoax investigation and second offer of the ring reveal where his class loyalty truly lies.",
          ],
          strategy: "Treat Gerald as an ideological foil to Sheila",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p2-q12",
          question:
            "Explore how Priestley presents **Eric Birling** both as a perpetrator of serious harm (*'in that state when a chap easily turns nasty'*) and as a vehicle for moral hope in Act 3. [4 marks]",
          marks: 4,
          modelAnswer:
            "Priestley refuses to sanitise Eric's privileged male entitlement: his drunken coercion at Eva's lodgings, unplanned pregnancy, and fifty-pound workplace theft represent grave physical and legal offences fuelled by escapist alcoholism. Simultaneously, Priestley diagnoses this dysfunction as a symptom of Arthur's cold patriarchal household, where status eclipses paternal warmth. Crucially, unlike Arthur or Sybil, Eric undergoes agonised remorse in Act 3 and refuses the hoax whitewash, insisting their shared actions killed Eva regardless of police credentials — aligning him with Sheila's awakened conscience.",
          markScheme: [
            {
              point: "Confronts the severity of Eric's drunken sexual coercion, pregnancy, and theft",
              keywords: ["coercion", "drunken", "alcoholism", "pregnancy", "theft", "fifty", "entitlement", "assault"],
            },
            {
              point: "Links Eric's instability to cold, status-obsessed patriarchal parenting",
              keywords: ["parenting", "patriarchal", "alienation", "father", "cold", "upbringing"],
            },
            {
              point: "Contrasts Eric's visceral remorse against Birling's obsession with money / cover-up",
              keywords: ["remorse", "guilt", "agonised", "money", "reputation", "scandal"],
            },
            {
              point: "Shows Eric passing the Act 3 hoax test alongside Sheila ('we all helped')",
              keywords: ["hoax", "sheila", "collective", "conscience", "redeemed", "accountability"],
            },
          ],
          commonError:
            "Either excusing Eric's assault completely or condemning him as irredeemable without analysing his Act 3 moral stand against his parents.",
          difficulty: "core",
          guideRef: "generational-divide-sheila-eric",
          hints: [
            "Balance both halves of the prompt: don't soften his drunken coercion/theft, and link his alienation to Birling's cold parenting.",
            "Explain why his reaction during the Act 3 hoax puts him morally ahead of Arthur, Sybil, and Gerald.",
          ],
          strategy: "Balance unflinching critique with Act 3 moral arc",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p2-q13",
          question:
            "Why does Priestley keep **Eva Smith / Daisy Renton** entirely offstage throughout *An Inspector Calls*, and how does he still make her central to the drama? [4 marks]",
          marks: 4,
          modelAnswer:
            "Keeping Eva physically invisible and voiceless dramatises how Edwardian capitalism marginalises working-class women, denying them agency in bourgeois spaces. Rather than a single idiosyncratic character, her ordinary surname and biblical forename construct an allegorical Everywoman standing for millions of exploited labourers. Priestley keeps her emotionally vivid onstage through Inspector Goole's graphic imagery of internal burning from disinfectant and through the sequential photograph reveals. Consequently, every character's testimony reconstructs another facet of systemic abuse along Goole's cumulative chain of events.",
          markScheme: [
            {
              point: "Explains offstage voicelessness as enacting working-class silencing / marginalisation",
              keywords: ["voiceless", "silenced", "marginalises", "marginalisation", "agency", "invisible"],
            },
            {
              point: "Analyses her symbolic / allegorical naming as a universal Everywoman ('millions')",
              keywords: ["everywoman", "universal", "allegorical", "symbol", "millions", "eve"],
            },
            {
              point: "Shows how Goole makes her suffering vivid via graphic diction or the photograph prop",
              keywords: ["disinfectant", "graphic", "visceral", "photograph", "goole", "burnt"],
            },
            {
              point: "Links her five encounters to Priestley's structural 'chain of events'",
              keywords: ["chain", "cumulative", "systemic", "collective", "sequential"],
            },
          ],
          commonError:
            "Saying Priestley kept Eva offstage 'to save hiring another actress' rather than analysing voicelessness and universal symbolism.",
          difficulty: "core",
          guideRef: "capitalism-vs-social-responsibility",
          hints: [
            "Think politically about why a silenced working-class woman has no direct lines in a wealthy dining room.",
            "Unpack her universal name + how Goole's visceral language and photograph keep her omnipresent.",
          ],
          strategy: "Analyse offstage absence as deliberate AO2 form",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p2-q14",
          question:
            "Analyse how Priestley uses **act endings, entrances, and exits** to create dramatic tension across *An Inspector Calls*. [4 marks]",
          marks: 4,
          modelAnswer:
            "Observing the classical unities inside one claustrophobic room, Priestley weaponises the dining-room doorway to control tension. In Act 1, Goole's arrival via the sharp doorbell slices across Birling's individualist lecture, and the act closes on Goole re-entering slowly with a monosyllabic challenge to Gerald and Sheila that freezes across the interval into Act 2. Later in Act 2, keeping Eric offstage lets Sybil blindly condemn her own son until Eric's silent doorway entrance drops the curtain at peak dramatic irony. Finally, Goole's solemn exit enables the false-hoax lull shattered by the cyclical Act 3 telephone ring.",
          markScheme: [
            {
              point: "Identifies claustrophobic single-room set / classical unities controlling space",
              keywords: ["unities", "claustrophobic", "single room", "doorway", "real-time"],
            },
            {
              point: "Analyses Act 1 doorbell entrance or the frozen 'Well?' bridge into Act 2",
              keywords: ["doorbell", "freeze", "frozen", "interval", "cliffhanger", "monosyllabic"],
            },
            {
              point: "Analyses Eric's Act 2 absence and silent curtain entrance springing Sybil's trap",
              keywords: ["eric", "offstage", "sybil", "silent", "dramatic irony", "trap"],
            },
            {
              point: "Evaluates Goole's Act 3 exit and the cyclical final telephone twist",
              keywords: ["cyclical", "telephone", "hoax", "lull", "exit"],
            },
          ],
          commonError:
            "Retelling what characters talk about in each act without mentioning the door, offstage absences, curtain freezes, or acoustic cues.",
          difficulty: "core",
          guideRef: "stagecraft-lighting-entrances",
          hints: [
            "Cover Act 1->2 ('Well?' freeze), Act 2 curtain (Eric's silent entrance after offstage absence), and Act 3 finale (telephone loop).",
            "Mention how one single room (classical unities) heightens every doorway entrance.",
          ],
          strategy: "Map whole-play structural architecture (Acts 1, 2, 3)",
        },
        {
          kind: "written",
          id: "lit-inspector-calls-p2-q15",
          question:
            "Explain why the **ending of Act 3** — combining the 'hoax' discovery with the final telephone call (*'a police inspector is on his way here — to ask some — questions —'*) — is so effective on stage. [5 marks]",
          marks: 5,
          modelAnswer:
            "Priestley engineers a double reversal (coup de theatre) that tests moral authenticity. First, discovering no Inspector Goole exists strips away the threat of public scandal, exposing Arthur, Sybil, and Gerald's instant regression into smug complacency while validating Sheila and Eric's genuine internal remorse. Second, interrupting Birling's mockery of youth with the sharp telephone ring mirrors Act 1's doorbell, locking the unrepentant elders inside a cyclical time-loop. Philosophically, Goole's supernatural visit served as a merciful warning rehearsal; having failed to learn voluntarily, the Birlings — and any complacent 1945 spectators — must endure real judgement.",
          markScheme: [
            {
              point: "Explains the hoax interlude as a moral test stripping away fear of legal / public scandal",
              keywords: ["hoax", "scandal", "test", "litmus", "legal", "mask"],
            },
            {
              point: "Contrasts elder Birlings' / Gerald's smug regression with Sheila and Eric's remorse",
              keywords: ["regression", "complacency", "gloating", "sheila", "eric", "remorse", "conscience"],
            },
            {
              point: "Analyses the cyclical symmetry between Act 1 doorbell and Act 3 sharp telephone ring",
              keywords: ["cyclical", "symmetry", "doorbell", "mirror", "mirrors", "loop", "time-loop"],
            },
            {
              point: "Interprets Goole's visit as a premonitory warning / second chance squandered",
              keywords: ["warning", "rehearsal", "second chance", "supernatural", "premonitory", "judgement", "reckoning"],
            },
            {
              point: "Links the dumbfounded freeze / ending to Priestley's warning for the 1945 audience",
              keywords: ["1945", "audience", "dumbfounded", "coup", "reversal", "lesson"],
            },
          ],
          commonError:
            "Saying the ending is 'a cliffhanger that makes you want to read Book 2' instead of explaining the moral hoax test and cyclical reckoning.",
          difficulty: "challenge",
          guideRef: "inspector-goole-mouthpiece-ending",
          hints: [
            "Treat the ending in two movements: (1) why Priestley lets them think it was a hoax, then (2) why the phone rings immediately after.",
            "Link the phone ring back to Act 1's doorbell (cyclical structure).",
            "Explain Goole's visit as a squandered merciful warning aimed at 1945 Britain.",
          ],
          strategy: "Unpack two-stage Act 3 reversal (Hoax Test + Cyclical Reckoning)",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "mcq",
      id: "lit-inspector-calls-ch-q01",
      question:
        "Compare Arthur Birling's Act 1 statement (*'It's my duty to keep labour costs down'*) with Inspector Goole's Act 2 refusal of hospitality (*'No, thank you... I'm on duty'*). How does Priestley use lexical repetition across speakers here?",
      options: [
        "Repeating the contested noun 'duty' exposes the chasm between capitalist duty to private shareholder profit and socialist moral duty to collective human welfare",
        "Repeating the noun 'duty' demonstrates that both Birling and Goole share an admirable Edwardian Protestant work ethic of civic discipline",
        "Repeating the phrase hints subtly that Inspector Goole previously worked as an accounts manager at Birling and Company before joining the force",
        "Repeating Birling's workplace vocabulary implies that Goole is angling for a lucrative private security appointment once his visit concludes",
      ],
      answerIndex: 0,
      explanation:
        "Priestley pits two rival definitions of 'duty' head-to-head: Birling narrows 'duty' to balance-sheet greed, whereas Goole restores its ethical weight as unwavering public service to the vulnerable.",
      difficulty: "challenge",
      guideRef: "capitalism-vs-social-responsibility",
      hints: [
        "Ask whom Birling serves when he says 'duty' versus whom Goole serves.",
        "Notice how Priestley makes Goole reclaim a moral word that capitalism had hijacked.",
        "Select the interpretation contrasting private profit against collective human welfare.",
      ],
      strategy: "Track contested keywords across antagonist and mouthpiece",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-ch-q02",
      question:
        "What rhetorical device is used in Inspector Goole's three consecutive sentences beginning with the same pronoun/clause starter: *'**We** don't live alone. **We** are members of one body. **We** are responsible for each other'*?",
      answer: { type: "text", accept: ["anaphora"] },
      traps: [
        {
          spec: { type: "text", accept: ["epiphora", "epistrophe"] },
          feedback:
            "Epiphora repeats words at the *ends* of clauses; repeating 'We' at the *openings* of successive sentences is **anaphora**.",
        },
      ],
      solution: [
        "**Anaphora** — repeating *'We'* at the start of three successive declarative clauses hammers home collective solidarity over Birling's singular *'a man'*.",
      ],
      difficulty: "challenge",
      guideRef: "inspector-goole-mouthpiece-ending",
      hints: [
        "Look at the exact position of the repeated word 'We' — at the start of three successive sentences.",
        "Not just 'repetition': give the precise Greek rhetorical term for clause-initial repetition.",
        "Eight letters, starting with 'ana-'.",
      ],
      strategy: "Upgrade 'repetition' to precise rhetorical terms (AO2)",
    },
    {
      kind: "mcq",
      id: "lit-inspector-calls-ch-q03",
      question:
        "How does Priestley's engagement with **J.W. Dunne's and P.D. Ouspensky's time theories** illuminate the ending of *An Inspector Calls*?",
      options: [
        "Dunne's serial-time model casts the play as literal science fiction, implying Inspector Goole travelled back in a physical machine from 1945 to warn Brumley",
        "Ouspensky argued unrepentant individuals are doomed to relive their life-cycles until they choose differently — enacted when the Birlings fail Goole's premonitory rehearsal and trigger the real suicide and inspector",
        "Ouspensky's cyclical model implies that Eva Smith never actually died in any timeline and that the closing phone call merely repeats Gerald's hoax theory",
        "Dunne's philosophy validates Arthur Birling's Act 1 optimism, proving that linear historical progress inevitably prevents future wars without moral reform",
      ],
      answerIndex: 1,
      explanation:
        "In Priestley's 'Time Plays', future consequences bleed backward as a merciful warning loop; because the elder Birlings learn nothing once Goole exits, time snaps shut and forces them to live through the catastrophe for real.",
      difficulty: "challenge",
      guideRef: "inspector-goole-mouthpiece-ending",
      hints: [
        "Why does Goole already know everything about a suicide that the Infirmary says hasn't happened yet — until the final phone call?",
        "Think of Goole's visit as a premonitory 'second chance' rehearsal from the future.",
        "What happens under eternal recurrence when characters refuse to change their moral choice?",
      ],
      strategy: "Integrate Priestley's Time-Play philosophy for Grade-9 originality",
    },
    {
      kind: "short",
      id: "lit-inspector-calls-ch-q04",
      question:
        "Complete Sheila's perceptive metaphor in Act 2 warning Sybil not to use class superiority against Goole: *'You mustn't try to build up a kind of ___ between us and that girl.'* (One four-letter noun)",
      answer: { type: "text", accept: ["wall"] },
      traps: [
        {
          spec: { type: "text", accept: ["barrier", "fence", "door", "bridge"] },
          feedback:
            "'Barrier' paraphrases the meaning, but Sheila's exact concrete four-letter noun is 'wall' ('build up a kind of wall').",
        },
      ],
      solution: [
        "Sheila warns against building *'a kind of **wall** between us and that girl'*, adding that the Inspector will inevitably *'break it down'*.",
      ],
      commonError:
        "Paraphrasing Sheila's concrete metaphor as 'barrier' or 'divide' instead of quoting her exact noun 'wall' ('build up a kind of wall').",
      difficulty: "challenge",
      guideRef: "generational-divide-sheila-eric",
      hints: [
        "A physical barrier image representing upper-middle-class segregation.",
        "Sheila immediately adds: 'If you do, then the Inspector will just break it down.'",
        "Four-letter concrete noun starting with 'w'.",
      ],
      strategy: "Quote spatial metaphors of class division",
    },
    {
      kind: "written",
      id: "lit-inspector-calls-ch-q05",
      question:
        "*'Priestley presents **Arthur Birling** not as a monster, but as an ordinary, respectable businessman — and that is precisely what makes him so dangerous.'* Write a Grade-9 Edexcel 4ET1 paragraph evaluating this view across the play. [5 marks]",
      marks: 5,
      modelAnswer:
        "Priestley makes Birling unsettlingly recognisable rather than melodramatically villainous: as a provincial magistrate and former Lord Mayor, his genial port-table manners and desire to protect company margins embody mainstream Edwardian orthodoxy. Through Act 1 dramatic irony over the unsinkable liner and impossibility of global conflict, Priestley exposes how complacent bourgeois 'common sense' marches society blindly into disaster. Linguistically, Birling weaponises respectable nouns like duty and business to sanitise paying starvation wages that crush vulnerable workers like Eva. In Act 3, his panic over losing a knighthood and facing press scandal — followed by jeering at his children once the hoax surfaces — proves systemic, unthinking respectability perpetuates far wider cruelty than isolated malice.",
      markScheme: [
        {
          point: "Agrees / nuances thesis: Birling embodies mainstream respectable Edwardian orthodoxy rather than pantomime villainy",
          keywords: ["orthodoxy", "mainstream", "magistrate", "mayor", "ordinary", "systemic", "banality"],
        },
        {
          point: "Uses Act 1 dramatic irony (liner / war) to show how complacent 'common sense' breeds catastrophe",
          keywords: ["dramatic irony", "liner", "complacent", "complacency", "blindly", "hindsight"],
        },
        {
          point: "Analyses Birling's commercial / respectable diction sanitising low-wage exploitation",
          keywords: ["duty", "margins", "sanitise", "wages", "exploitation", "commodifies"],
        },
        {
          point: "Evaluates Act 3 obsession with knighthood, press scandal, and mocking youth during the hoax",
          keywords: ["knighthood", "scandal", "hoax", "jeering", "mocking", "unrepentant"],
        },
        {
          point: "Synthesises Priestley's wider warning to his 1945 audience against returning to pre-war capitalism",
          keywords: ["1945", "capitalism", "pre-war", "warning", "society", "status quo"],
        },
      ],
      commonError:
        "Caricaturing Birling as an evil cartoon villain instead of showing how Priestley indicts socially accepted capitalist norms.",
      difficulty: "challenge",
      guideRef: "edwardian-1912-vs-1945-irony",
      hints: [
        "Explain why making Birling a respected magistrate/Lord Mayor indicts the whole Edwardian system rather than one rogue individual.",
        "Weave together his Act 1 dramatic irony + hijacking the word 'duty' + Act 3 obsession with his knighthood/scandal.",
        "Link back to why ordinary unthinking capitalism terrified Priestley in 1945.",
      ],
      strategy: "Evaluate conceptual thesis ('banality of bourgeois respectability')",
    },
    {
      kind: "written",
      id: "lit-inspector-calls-ch-q06",
      question:
        "How does Priestley use **contrasting female characters** (Sheila Birling, Sybil Birling, and offstage Eva Smith) to explore gender and class in *An Inspector Calls*? [5 marks]",
      marks: 5,
      modelAnswer:
        "Priestley triangulates Edwardian womanhood across class and generation to prove sisterhood fails unless class privilege is confronted. Offstage Eva/Daisy suffers quadruple patriarchal and economic vulnerability — underpaid in factories, dismissed on consumerist whim, kept as a dependent mistress, and assaulted. Conversely, cold Sybil weaponises upper-class matriarchal status at the Brumley charity committee, policing moral respectability against destitute women instead of showing female solidarity. Bridging them, Sheila begins infantilised inside domestic patriarchy yet achieves rapid anagnorisis: returning Gerald's ring, tearing down Sybil's class wall, and championing female workers' humanity as Priestley's emblem of post-1945 feminist-socialist renewal.",
      markScheme: [
        {
          point: "Conceptualises how class divides women / prevents automatic female solidarity",
          keywords: ["solidarity", "sisterhood", "triangulates", "intersection", "privilege", "divide"],
        },
        {
          point: "Analyses offstage Eva/Daisy's economic and patriarchal vulnerability",
          keywords: ["vulnerability", "voiceless", "mistress", "underpaid", "exploited", "patriarchal"],
        },
        {
          point: "Critiques Sybil's cold matriarchal policing of class at the Brumley charity",
          keywords: ["sybil", "charity", "cold", "matriarchal", "snobbery", "prejudice"],
        },
        {
          point: "Traces Sheila's emancipation from infantilised fiancée to autonomous truth-teller (ring / wall)",
          keywords: ["sheila", "infantilised", "ring", "wall", "anagnorisis", "autonomous", "emancipation"],
        },
        {
          point: "Connects female generational shift to 1945 post-war enfranchised audience",
          keywords: ["1945", "renewal", "post-war", "humanity", "future"],
        },
      ],
      commonError:
        "Writing three separate mini-biographies instead of comparing how class privilege pits Sybil and Act-1 Sheila against working-class Eva.",
      difficulty: "challenge",
      guideRef: "capitalism-vs-social-responsibility",
      hints: [
        "Set up a three-way conceptual argument: why doesn't shared gender unite Sybil and Eva?",
        "Contrast voiceless exploited Eva against cold gatekeeper Sybil, then show Sheila moving across the divide.",
        "Anchor AO2 in props/metaphors (Sheila's engagement ring, Sybil's 'wall', Eva's offstage silence).",
      ],
      strategy: "Triangulate characters conceptually (Eva vs Sybil vs Sheila)",
    },
    {
      kind: "written",
      id: "lit-inspector-calls-ch-q07",
      question:
        "*'Inspector Goole is far more effective as a dramatic symbol than he would be as a realistic police detective.'* Evaluate how Priestley constructs **Inspector Goole** to achieve his dramatic purpose. [5 marks]",
      marks: 5,
      modelAnswer:
        "Had Priestley written Goole as a naturalistic Brumley constable bound by Edwardian hierarchy, Birling's civic connections with Colonel Roberts would quickly have silenced him. Instead, Priestley endows Goole with physical stage gravitas — massive, solid, purposeful — and adverbial interruptions that effortlessly override bourgeois bluster. His homophonic name ('ghoul') and uncanny foreknowledge elevate him into a spectral morality-play inquisitor, freeing him to orchestrate sequential confessions via the isolated photograph. Culminating in his prophetic St Paul sermon on shared bodily responsibility and wartime anguish, Goole's disappearance into the Act 3 hoax-and-telephone loop ensures the audience confronts eternal moral law rather than mere police procedure.",
      markScheme: [
        {
          point: "Explains why a realistic 1912 constable would be neutralised by Birling's class rank / Colonel Roberts",
          keywords: ["naturalistic", "hierarchy", "colonel roberts", "constable", "rank", "silenced"],
        },
        {
          point: "Analyses Goole's stage directions ('massive', interruptions) overriding upper-class authority",
          keywords: ["gravitas", "massive", "solid", "purposeful", "interruptions", "stagecraft"],
        },
        {
          point: "Unpacks the 'ghoul' homophone, omniscience, and morality-play / spectral genre",
          keywords: ["ghoul", "homophonic", "homophone", "spectral", "omniscient", "foreknowledge", "morality"],
        },
        {
          point: "Analyses Goole's control of pace (isolated photograph) and prophetic Act 3 sermon",
          keywords: ["photograph", "sermon", "prophetic", "corinthians", "bodily", "anguish"],
        },
        {
          point: "Evaluates how his non-existence on the force enables the Act 3 hoax test and cyclical reckoning",
          keywords: ["hoax", "telephone", "cyclical", "loop", "procedure", "moral law"],
        },
      ],
      commonError:
        "Trying to invent a realistic backstory for Goole ('maybe he was Eva's father') instead of analysing why non-naturalistic ambiguity serves Priestley's morality play.",
      difficulty: "challenge",
      guideRef: "inspector-goole-mouthpiece-ending",
      hints: [
        "Ask first: what would Birling have done to an ordinary realistic working-class constable in 1912?",
        "Analyse Goole's stage directions + 'ghoul' pun + isolated photograph + prophetic sermon.",
        "Show how not being on the Brumley force makes the Act 3 moral litmus test possible.",
      ],
      strategy: "Contrast naturalism vs morality-play construct (AO1 + AO2)",
    },
    {
      kind: "written",
      id: "lit-inspector-calls-ch-q08",
      question:
        "How does Priestley subvert the conventions of a **detective whodunnit** through structure, setting, and lighting across *An Inspector Calls*? [5 marks]",
      marks: 5,
      modelAnswer:
        "Superficially, Priestley borrows Golden Age whodunnit machinery: a sealed drawing-room setting, classical unities, a mysterious investigator, photographic clues, and razor-sharp act-break cliffhangers. Yet he systematically inverts the genre's conservative politics. Whereas traditional mysteries restore bourgeois comfort by isolating a single aberrant culprit and clearing everyone else, Priestley shifts illumination from intimate rose-pink to clinical glare so every suspect stands condemned along an interconnected chain of exploitation. Even Gerald's Act 3 amateur-detective triumph — exposing Goole's nonexistent badge — is subverted into moral failure before the final telephone ring traps the entire class system in perpetual culpability.",
      markScheme: [
        {
          point: "Identifies borrowed whodunnit / well-made play conventions (sealed room, unities, clues, cliffhangers)",
          keywords: ["unities", "cliffhangers", "sealed", "machinery", "well-made", "clues"],
        },
        {
          point: "Explains the ideological inversion: instead of one culprit and innocent bystanders, everyone shares collective guilt",
          keywords: ["inverts", "conservative", "culprit", "collective", "interconnected", "chain"],
        },
        {
          point: "Analyses the lighting shift from rose-pink comfort to clinical interrogation glare",
          keywords: ["rose-pink", "glare", "clinical", "illumination", "spotlight"],
        },
        {
          point: "Analyses Gerald's Act 3 'detective' hoax-solving as an ironic moral failure",
          keywords: ["gerald", "hoax", "badge", "ironic", "amateur-detective", "failure"],
        },
        {
          point: "Evaluates the final telephone call denying bourgeois closure / comfort",
          keywords: ["telephone", "closure", "culpability", "perpetual", "cyclical", "class system"],
        },
      ],
      commonError:
        "Only listing detective features (clues, inspector, suspects) without explaining how Priestley *inverts* whodunnit reassurance into collective socialist indictment.",
      difficulty: "challenge",
      guideRef: "stagecraft-lighting-entrances",
      hints: [
        "Compare the ending of an Agatha Christie murder mystery (1 guilty villain arrested, society reassured) with Priestley's ending.",
        "Weave in AO2 stagecraft: sealed room unities, lighting glare, cliffhangers, and Gerald playing 'detective' in Act 3.",
        "Show how the final phone call refuses comforting bourgeois closure.",
      ],
      strategy: "Synthesise genre subversion + lighting + cyclical ending",
    },
  ],
};
