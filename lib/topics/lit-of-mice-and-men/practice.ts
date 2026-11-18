import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q01",
      question:
        "Near which real California town — whose Spanish name translates as **'loneliness'** — is the ranch in *Of Mice and Men* set?",
      answer: { type: "text", accept: ["Soledad"] },
      traps: [
        {
          spec: { type: "text", accept: ["Weed"] },
          feedback: "Weed is the northern California town George and Lennie fled BEFORE Section 1.",
        },
        {
          spec: { type: "text", accept: ["Salinas"] },
          feedback: "Salinas is the river and valley; the nearby town meaning 'loneliness' begins with S-o-l...",
        },
      ],
      solution: [
        "Section 1 opens `'a few miles south of Soledad'`, embedding 1930s migrant isolation into the novella's geography.",
      ],
      difficulty: "warmup",
      guideRef: "depression-dust-bowl-context",
      hints: ["It begins with 'Sol-' (think of the English word 'solitude')."],
      strategy: "Decode allegorical setting names",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q02",
      question:
        "From which northern California town did George and Lennie flee after Lennie grabbed a girl's soft red dress?",
      answer: { type: "text", accept: ["Weed"] },
      traps: [
        {
          spec: { type: "text", accept: ["Soledad"] },
          feedback: "Soledad is the town near the new ranch where they arrive in Section 1.",
        },
      ],
      solution: [
        "They fled **Weed** after hiding all day in an irrigation ditch to escape a lynch mob.",
      ],
      difficulty: "warmup",
      guideRef: "cyclical-novella-fatalism",
      hints: ["It is a short four-letter word that also names an unwanted wild plant."],
      strategy: "Track Weed-to-Section-5 foreshadowing",
    },
    {
      kind: "mcq",
      id: "lit-of-mice-and-men-quiz-q03",
      question:
        "Complete Lennie's famous refrain from Section 1: `'An' live off the fatta the ___'`.",
      options: ["lan'", "ranch", "valley", "creek"],
      answerIndex: 0,
      explanation:
        "Lennie begs George to tell how they will `'live off the fatta the lan''` (fat of the land) — Steinbeck's phonetic rendering of colloquial bindle-stiff speech evoking a biblical agrarian Eden.",
      difficulty: "warmup",
      guideRef: "george-lennie-american-dream",
      hints: ["Think of the biblical phrase 'the fat of the land', shortened phonetically."],
      strategy: "Memorise exact micro-quotations",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q04",
      question:
        "Which literary term describes attributing **animal characteristics** to a human character — such as comparing Lennie to a `'bear'`, a `'horse'` and a `'terrier'`?",
      answer: { type: "text", accept: ["zoomorphism", "zoomorphic imagery", "animal imagery"] },
      traps: [
        {
          spec: { type: "text", accept: ["personification", "anthropomorphism"] },
          feedback: "Personification/anthropomorphism gives human traits to non-humans; giving animal traits to humans is the reverse!",
        },
      ],
      solution: [
        "**Zoomorphism** attributes animal qualities (`'paw'`, `'snorting into the water like a horse'`) to humans, signalling Lennie's uncorrupted instinct alongside uncalibrated physical force.",
      ],
      difficulty: "core",
      guideRef: "george-lennie-american-dream",
      hints: [
        "Personification gives human qualities to objects; what 'zoo-' word gives animal qualities to humans?",
        "Starts with 'zoo-' and ends with '-morphism'.",
      ],
      strategy: "Use precise critical terminology for AO1",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q05",
      question:
        "Who speaks this cynical line in Section 4: `'Nobody never gets to heaven, and nobody gets no land'`?",
      answer: { type: "text", accept: ["Crooks", "Crooks the stable buck"] },
      traps: [
        {
          spec: { type: "text", accept: ["Candy"] },
          feedback: "Candy eagerly believes in buying the land; it is the segregated stable buck who voices hardened scepticism.",
        },
      ],
      solution: [
        "**Crooks** speaks this line in his harness room, equating the American Dream of land ownership with an unreachable religious paradise.",
      ],
      difficulty: "core",
      guideRef: "crooks-candy-marginalisation",
      hints: [
        "He has watched 'hunderds of men come by on the road' carrying bindles and the same dream.",
        "He lives alone in the harness shed off the barn.",
      ],
      strategy: "Attribute key set-text quotations accurately",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q06",
      question:
        "What specific German-made pistol belonging to **Carlson** is used both to shoot Candy's old sheepdog in Section 3 and to shoot Lennie in Section 6?",
      answer: { type: "text", accept: ["Luger", "Carlson's Luger", "a Luger"] },
      traps: [
        {
          spec: { type: "text", accept: ["shotgun"] },
          feedback: "Curley carries a shotgun with the posse (and Crooks owns a single-barrelled shotgun), whereas Carlson's pistol has a specific five-letter brand name.",
        },
      ],
      solution: [
        "**Carlson's Luger** links Section 3's utilitarian shooting of Candy's dog directly to George's merciful shooting of Lennie in Section 6.",
      ],
      difficulty: "warmup",
      guideRef: "cyclical-novella-fatalism",
      hints: ["A five-letter German semi-automatic pistol starting with L."],
      strategy: "Track recurring physical props across sections",
    },
    {
      kind: "mcq",
      id: "lit-of-mice-and-men-quiz-q07",
      question:
        "Which character is described by Steinbeck as `'the prince of the ranch'`, possessing `'gravity in his manner and a quiet so profound that all talk stopped when he spoke'`?",
      options: ["Curley", "The Boss", "Slim", "Carlson"],
      answerIndex: 2,
      explanation:
        "**Slim**, the master jerkline skinner, commands organic moral authority and empathy — acting as a dignified foil to Curley's pugnacious insecurity and Carlson's emotional bluntness.",
      difficulty: "warmup",
      guideRef: "crooks-candy-marginalisation",
      hints: ["He is the skilled mule-team driver ('jerkline skinner') who gives Lennie a puppy."],
      strategy: "Contrast natural authority with inherited rank",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q08",
      question:
        "Complete Curley's wife's wistful Hollywood phrase in Section 5: `'Coulda been in the ___, an' had nice clothes'` (use Steinbeck's exact colloquial spelling or standard spelling).",
      answer: { type: "text", accept: ["pitchers", "pictures", "movies"] },
      traps: [
        {
          spec: { type: "text", accept: ["shows", "circus"] },
          feedback:
            "Earlier she mentions a guy from a travelling show, but her wistful Section 5 Hollywood phrase is 'in the pitchers' (pictures / movies).",
        },
      ],
      solution: [
        "Curley's wife says `'Coulda been in the pitchers'` (*pictures* / movies), reflecting 1930s Golden Age Hollywood escapism during the Great Depression.",
      ],
      commonError:
        "Confusing the travelling 'shows' she mentions earlier with Steinbeck's phonetic 'pitchers' (motion pictures), or misreading 'pitchers' as baseball players rather than 1930s cinema.",
      difficulty: "core",
      guideRef: "curleys-wife-patriarchy",
      hints: [
        "1930s slang for motion 'pictures', spelled phonetically by Steinbeck as 'p-i-t-c-h...'.",
        "Both 'pitchers' and 'pictures' are accepted.",
      ],
      strategy: "Connect colloquial dialogue to 1930s cinema context (AO4)",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q09",
      question:
        "How many dollars is the total purchase price of the ten-acre farm that George knows an old couple will sell (`'S'pose I went in with you guys'`)? Type the number.",
      answer: { type: "number", value: 600 },
      traps: [
        {
          spec: { type: "number", value: 350 },
          feedback: "$350 is Candy's contribution; the total price of the ten-acre place is higher!",
        },
      ],
      solution: [
        "George explains the desperate old couple will sell the ten-acre place for **$600**; with Candy's $350 plus month-end wages of $50 each from George and Lennie, they were within $150 of clinching it.",
      ],
      difficulty: "core",
      guideRef: "george-lennie-american-dream",
      hints: [
        "Candy offers $350, which covers just over half of the full price.",
        "It is a round hundred-dollar figure between 500 and 700.",
      ],
      strategy: "Know exact textual details for closed-book AO1",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-quiz-q10",
      question:
        "Who speaks the very last line of *Of Mice and Men* (`'Now what the hell ya suppose is eatin' them two guys?'`)?",
      answer: { type: "text", accept: ["Carlson"] },
      traps: [
        {
          spec: { type: "text", accept: ["Slim"] },
          feedback: "Slim is one of 'them two guys' walking away with George to comfort him!",
        },
        {
          spec: { type: "text", accept: ["Curley"] },
          feedback: "The line is spoken TO Curley by the blunt ranch hand whose Luger was used.",
        },
      ],
      solution: [
        "**Carlson** speaks the final line to Curley, exposing how 1930s ranch survivalism has rendered fraternal grief incomprehensible.",
      ],
      difficulty: "core",
      guideRef: "cyclical-novella-fatalism",
      hints: [
        "It is the same emotionally insensitive ranch hand who insisted on shooting Candy's old dog.",
        "He asks Curley why Slim and George look so upset.",
      ],
      strategy: "Use the closing line as an AO1 + AO4 essay clincher",
    },
  ],
  papers: [
    {
      id: "lit-of-mice-and-men-p1",
      title: "Paper 1 — Textual Precision & Integrated AO4 Paragraphs (Set A)",
      questions: [
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q01",
          question:
            "Name the Scottish poet whose 1785 poem *'To a Mouse'* (*'The best laid schemes o' Mice an' Men / Gang aft agley'*) inspired Steinbeck's title.",
          answer: { type: "text", accept: ["Robert Burns", "Burns", "Rabbie Burns"] },
          traps: [
            {
              spec: { type: "text", accept: ["John Steinbeck", "Steinbeck", "William Blake"] },
              feedback:
                "Steinbeck wrote the 1937 novella; its title comes from the 18th-century Scottish poet Robert Burns.",
            },
          ],
          solution: [
            "Steinbeck took his title from **Robert Burns's** 1785 poem *'To a Mouse'*, foreshadowing how human plans are shattered by indifferent economic and natural forces.",
          ],
          commonError:
            "Naming John Steinbeck himself instead of the 18th-century Scottish poet Robert Burns, or citing the poem title without connecting the plough-shattered nest to deterministic fate.",
          difficulty: "warmup",
          guideRef: "depression-dust-bowl-context",
          hints: ["His surname is five letters long and begins with B."],
          strategy: "Anchor essays with title symbolism",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q02",
          question:
            "Complete George's famous Section 1 contrast: `'Guys like us, that work on ranches, are the ___ guys in the world.'`",
          answer: { type: "text", accept: ["loneliest"] },
          traps: [
            {
              spec: { type: "text", accept: ["poorest", "meanest", "unluckiest"] },
              feedback:
                "Ranch hands are poor, but George specifically diagnoses emotional isolation: 'the loneliest guys in the world'.",
            },
          ],
          solution: [
            "George says `'the loneliest guys in the world'`, immediately contrasting itinerant bindle-stiffs with his and Lennie's shared companionship (`'With us it ain't like that'`).",
          ],
          commonError:
            "Substituting 'poorest' or 'unluckiest' for 'loneliest', missing that George defines migrant suffering through emotional isolation rather than low wages alone.",
          difficulty: "warmup",
          guideRef: "george-lennie-american-dream",
          hints: ["Superlative adjective formed from 'lonely'."],
          strategy: "Memorise core closed-book quotations",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q03",
          question:
            "What dead creature is Lennie secretly carrying in his coat pocket to pet with his thumb as he walks in Section 1?",
          answer: { type: "text", accept: ["mouse", "a mouse", "dead mouse", "fieldmouse"] },
          traps: [
            {
              spec: { type: "text", accept: ["puppy", "a puppy"] },
              feedback: "Slim gives Lennie a puppy later in Section 3; in Section 1 it is a smaller creature echoed in the novella's title.",
            },
          ],
          solution: [
            "Lennie hides a dead **mouse** in his pocket until George throws it across the pool — initiating the escalating chain of fragile victims (mouse -> puppy -> Curley's wife).",
          ],
          difficulty: "warmup",
          guideRef: "cyclical-novella-fatalism",
          hints: ["Look at the first noun in the novella's title!"],
          strategy: "Trace escalating foreshadowing motifs",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q04",
          question:
            "Which relative cared for Lennie until her death (giving him mice to pet) and later appears as a scolding hallucination by the Salinas pool in Section 6?",
          answer: { type: "text", accept: ["Aunt Clara", "Clara"] },
          traps: [
            {
              spec: { type: "text", accept: ["mother", "his mother", "grandmother"] },
              feedback:
                "Lennie was raised by his maternal aunt — Aunt Clara — rather than his mother or grandmother.",
            },
          ],
          solution: [
            "**Aunt Clara** raised Lennie before asking George to look after him; in Section 6 Lennie hallucinates her standing with hands on hips, voicing his own guilt.",
          ],
          commonError:
            "Assuming Lennie was raised by his mother or grandmother instead of Aunt Clara, or treating her Section 6 appearance as a supernatural ghost rather than Lennie's externalised conscience.",
          difficulty: "warmup",
          guideRef: "george-lennie-american-dream",
          hints: ["She is Lennie's maternal aunt: 'Aunt ___'."],
          strategy: "Connect Section 1 backstory to Section 6 hallucinations",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q05",
          question:
            "Who asks George suspiciously in Section 2: `'What stake you got in this guy? You takin' his pay away from him?'`",
          answer: { type: "text", accept: ["The Boss", "Boss", "ranch boss"] },
          traps: [
            {
              spec: { type: "text", accept: ["Curley"] },
              feedback: "Curley picks a physical fight with Lennie; it is Curley's father (who hires them and checks their work slips) who suspects financial exploitation.",
            },
          ],
          solution: [
            "**The Boss** asks this while checking their Murray and Ready's work tickets, proving how alien non-transactional loyalty was under 1930s ranch capitalism.",
          ],
          difficulty: "core",
          guideRef: "depression-dust-bowl-context",
          hints: [
            "He wears high-heeled boots and spurs to distinguish himself from ordinary ranch hands.",
            "He interviews George and Lennie on Friday morning when they arrive late.",
          ],
          strategy: "Pair dialogue attribution with AO4 economic critique",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q06",
          question:
            "What substance does Curley keep inside the work glove on his left hand, according to Candy's gossip in Section 2?",
          answer: { type: "text", accept: ["vaseline", "petroleum jelly"] },
          traps: [
            {
              spec: { type: "text", accept: ["liniment", "horse liniment"] },
              feedback:
                "Crooks rubs horse liniment on his injured spine; Curley keeps vaseline (petroleum jelly) inside his left glove.",
            },
          ],
          solution: [
            "Curley keeps his left glove full of **vaseline** for his new bride — a boastful detail exposing how he treats marriage as possessive status display.",
          ],
          commonError:
            "Confusing Curley's glove full of vaseline with the horse liniment Crooks rubs onto his crooked spine in Section 4.",
          difficulty: "core",
          guideRef: "curleys-wife-patriarchy",
          hints: [
            "A well-known petroleum-jelly brand name starting with V.",
            "Candy whispers that Curley keeps his left hand soft for his new wife.",
          ],
          strategy: "Unpack characterising props",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q07",
          question:
            "What ranch job title describes **Candy's** role as an elderly, one-handed cleaner who sweeps out the bunkhouse?",
          answer: { type: "text", accept: ["swamper", "a swamper", "the swamper"] },
          traps: [
            {
              spec: { type: "text", accept: ["skinner", "jerkline skinner"] },
              feedback: "Slim is the jerkline skinner (mule driver); Candy's cleaning job begins with 'swamp-'.",
            },
          ],
          solution: [
            "Candy is the **swamper** (handyman/sweeper), a low-status role given after he lost his right hand on the ranch.",
          ],
          difficulty: "core",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "Ranch slang for a bunkhouse cleaner/mop hand, starting with 'swamp-'.",
            "George asks what kind of guy the 'old ___' is in Section 2.",
          ],
          strategy: "Use authentic 1930s ranch terminology",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q08",
          question:
            "For what year is Crooks's `'mauled copy of the California civil code'` dated in Section 4 (type the four-digit year)?",
          answer: { type: "number", value: 1905 },
          traps: [
            {
              spec: { type: "number", value: 1929 },
              feedback: "1929 is the Wall Street Crash; Crooks's worn law book dates from earlier in the twentieth century (190-).",
            },
            {
              spec: { type: "number", value: 1937 },
              feedback: "1937 is the year Steinbeck published the novella; Crooks's old statute book is dated thirty-two years earlier.",
            },
          ],
          solution: [
            "Steinbeck specifies `'a mauled copy of the California civil code for 1905'`, showing Crooks has studied his statutory rights for decades despite Jim Crow segregation.",
          ],
          difficulty: "challenge",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "It is an early twentieth-century year around Crooks's youth: 190_.",
            "Ends in the digit 5.",
          ],
          strategy: "Deploy razor-sharp textual recall in closed-book essays",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q09",
          question:
            "Complete Crooks's diagnosis of chronic isolation in Section 4: `'I tell ya, a guy gets too lonely an' he gets ___.'`",
          answer: { type: "text", accept: ["sick"] },
          traps: [
            {
              spec: { type: "text", accept: ["mean", "crazy", "mad"] },
              feedback:
                "George says lonely ranch hands 'get mean' in Section 3, whereas Crooks's Section 4 diagnosis is 'he gets sick'.",
            },
          ],
          solution: [
            "Crooks says `'a guy gets too lonely an' he gets sick'`, framing racial segregation and transient atomisation as psychological illness.",
          ],
          commonError:
            "Writing 'mean' (from George's Section 3 remark that lonely men 'get mean') or 'crazy' instead of Crooks's exact clinical word 'sick'.",
          difficulty: "core",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "A four-letter adjective meaning physically or mentally ill.",
            "Crooks warns Lennie that chronic isolation damages a person's health: 'he gets ___'.",
          ],
          strategy: "Memorise high-yield Section 4 quotations",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p1-q10",
          question:
            "What excuse does **Slim** force Curley to tell everyone about how his right hand was crushed at the end of Section 3 (`'You got your hand caught in a ___'`)?",
          answer: { type: "text", accept: ["machine", "a machine"] },
          traps: [
            {
              spec: { type: "text", accept: ["door", "tractor", "fence"] },
              feedback:
                "Slim keeps the cover story deliberately general with the exact noun 'machine' ('caught in a machine').",
            },
          ],
          solution: [
            "Slim compels Curley to say he got his hand caught in a **machine**, protecting George and Lennie from being `'canned'` by exploiting Curley's terror of ranch ridicule.",
          ],
          commonError:
            "Inventing a specific piece of equipment like a tractor or door instead of quoting Slim's exact noun 'machine', or attributing Slim's intervention to George.",
          difficulty: "core",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "A piece of mechanical farm equipment — a seven-letter noun starting with M.",
            "Curley agrees so nobody laughs at him losing a fight to Lennie.",
          ],
          strategy: "Recall key plot hinges accurately",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p1-q11",
          question:
            "Write a focused Edexcel 4ET1 paragraph explaining how Steinbeck uses **the Boss's interview in Section 2** (`'What stake you got in this guy?'`) to critique 1930s ranch society (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "Steinbeck constructs the Boss as an embodiment of predatory 1930s agribusiness capitalism. Wearing high-heeled boots and spurs to separate himself from manual barley buckers, the Boss assumes George must be swindling Lennie's wages because fraternal loyalty is alien on Depression ranches. In an era when post-Crash unemployment forced itinerant bindle-stiffs to compete as disposable agency numbers from Murray and Ready's, Steinbeck exposes how economic precarity eroded human solidarity and normalised cynical self-interest.",
          markScheme: [
            {
              point: "Treats the Boss as a deliberate symbol/representative of ranch authority or capitalism (AO1)",
              keywords: ["capitalism", "capitalist", "agribusiness", "authority", "spurs", "boots", "constructs", "hierarchy"],
            },
            {
              point: "Explains the Boss's cynical assumption of financial exploitation / swindling pay (AO1)",
              keywords: ["wages", "swindling", "exploiting", "exploitation", "financial", "suspicion", "suspicious", "motive", "transactional"],
            },
            {
              point: "Integrates 1930s Great Depression / itinerant bindle-stiff labour context (AO4)",
              keywords: ["1930s", "depression", "itinerant", "bindle", "migrant", "unemployment", "murray", "agency", "disposable"],
            },
            {
              point: "Evaluates Steinbeck's thematic point: erosion of brotherhood, trust or human solidarity (AO1/AO4)",
              keywords: ["solidarity", "brotherhood", "fraternal", "loyalty", "trust", "atomisation", "isolation", "self-interest", "companionship"],
            },
          ],
          commonError: "Writing five sentences about the 1929 Wall Street Crash without explaining why the Boss finds George and Lennie's friendship suspicious.",
          difficulty: "core",
          guideRef: "depression-dust-bowl-context",
          hints: [
            "Why can the Boss only imagine a money motive for George travelling with Lennie?",
            "Mention the Boss's boots/spurs or Murray and Ready's agency tickets to ground AO1 + AO4.",
          ],
          strategy: "Weave AO4 directly through character suspicion",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p1-q12",
          question:
            "Explain how Steinbeck presents **George and Lennie's farm dream** across the novella as both a vital lifeline and a tragic illusion (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "Steinbeck frames the ten-acre homestead chant — where Lennie yearns to `'live off the fatta the lan''` and tend rabbits — as a secular liturgy that shields both men from the bleak anonymity of 1930s migrant labour. When Candy pledges his $350 injury savings in Section 3, the Jeffersonian American Dream of self-sufficient ownership briefly appears tangible, sharpening the dramatic stakes. Yet Crooks's warning that `'nobody gets no land'` and George's confession in Section 5 (`'I knowed from the very first'`) expose meritocratic upward mobility during the Great Depression as a comforting mirage.",
          markScheme: [
            {
              point: "Analyses the farm chant / rabbits / 'fatta the lan'' as a protective ritual of companionship (AO1)",
              keywords: ["fatta", "rabbits", "ritual", "liturgy", "chant", "companionship", "belonging", "autonomy", "shield"],
            },
            {
              point: "Identifies Candy's $350 contribution in Section 3 as the structural peak of hope (AO1)",
              keywords: ["candy", "350", "three hundred", "section 3", "tangible", "achievable", "swing her"],
            },
            {
              point: "Integrates AO4 context of the American Dream / 1930s Great Depression economic barriers",
              keywords: ["american dream", "depression", "1930s", "itinerant", "agrarian", "meritocratic", "ownership", "migrant"],
            },
            {
              point: "Explains its collapse as mirage/opiate via Crooks's scepticism or George's final admission (AO1)",
              keywords: ["crooks", "nobody gets no land", "mirage", "opiate", "knowed from the very first", "unattainable", "futile"],
            },
          ],
          commonError: "Describing the animals on the farm without tracking how Candy's $350 and Crooks's scepticism shape its tragic arc.",
          difficulty: "core",
          guideRef: "george-lennie-american-dream",
          hints: [
            "Show BOTH sides of the question: why they need the dream (lifeline) and why it fails (illusion).",
            "Include Candy's $350 peak in Section 3 and Crooks's 'nobody gets no land' realism in Section 4.",
          ],
          strategy: "Track a motif's rise and fall across sections",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p1-q13",
          question:
            "How does Steinbeck create a complex, ambivalent response to **Curley's wife** rather than presenting her simply as a villain (**AO1 + AO4**)? [4 marks]",
          marks: 4,
          modelAnswer:
            "By denying her a personal first name, Steinbeck exposes how 1930s patriarchal marriage reduces her to Curley's chattel while male ranch hands scapegoat her as `'a tart'` and `'jail bait'`. Steinbeck refuses pure sentimentality in Section 4, where her humiliation curdles into white supremacist cruelty as she threatens to have Crooks `'strung up on a tree'`. Nevertheless, her Section 5 confession of broken Hollywood `'pitchers'` dreams — followed by death erasing `'the ache for attention'` to leave her `'sweet and young'` — unmasks her provocative red makeup and ostrich-feather mules as a lonely teenager's armour.",
          markScheme: [
            {
              point: "Analyses her namelessness and male ranch scapegoating ('tart', 'jail bait') under 1930s patriarchy (AO1/AO4)",
              keywords: ["nameless", "first name", "patriarchal", "patriarchy", "possession", "chattel", "tart", "jail bait"],
            },
            {
              point: "Acknowledges her racial cruelty toward Crooks in Section 4 ('strung up on a tree') for balance (AO1/AO4)",
              keywords: ["crooks", "strung up", "lynch", "lynching", "section 4", "jim crow", "racial", "cruelty"],
            },
            {
              point: "Links her 'pitchers' confession to 1930s Hollywood cinema escapism and trapped isolation (AO4)",
              keywords: ["hollywood", "pitchers", "pictures", "cinema", "escapism", "lonely", "loneliness", "1930s"],
            },
            {
              point: "Unpacks the Section 5 post-mortem shift ('ache for attention' gone / 'sweet and young') or red motif (AO1)",
              keywords: ["ache for attention", "sweet and young", "red", "mules", "feathers", "mask", "death", "barn"],
            },
          ],
          commonError: "Calling her either an evil temptress who caused Lennie's death or a blameless angel while omitting her lynching threat against Crooks.",
          difficulty: "core",
          guideRef: "curleys-wife-patriarchy",
          hints: [
            "Balance three angles: patriarchal namelessness, her Jim Crow threat to Crooks in Section 4, and her unmasking in Section 5.",
            "Quote 'sweet and young' or 'ache for attention' alongside 'in the pitchers'.",
          ],
          strategy: "Hold victimhood and displaced cruelty in critical balance",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p1-q14",
          question:
            "Examine how Steinbeck uses **Candy and his old sheepdog** in Section 3 to explore 1930s attitudes toward age, disability and human value (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "Steinbeck pairs one-handed Candy with his blind, ancient sheepdog as a heartbreaking allegory of utilitarian ranch capitalism. Carlson insists on shooting the dog with his Luger simply because it `'ain't no good to himself'`, mirroring Candy's terror that the Boss will `'can'` him once he can no longer sweep the bunkhouse — at a time when 1930s farm labourers lacked federal Social Security pensions. Structurally, Candy's whispered regret (`'I ought to of shot that dog myself'`) plants the moral imperative that drives George to spare Lennie from Curley's vengeful mob in Section 6.",
          markScheme: [
            {
              point: "Identifies the symbolic parallel between elderly one-handed Candy and his blind old dog (AO1)",
              keywords: ["parallel", "mirror", "allegory", "one-handed", "hand", "swamper", "blind", "ancient"],
            },
            {
              point: "Analyses Carlson's utilitarian logic ('no good to himself' / Luger) discarding unproductive life (AO1)",
              keywords: ["carlson", "luger", "utilitarian", "unproductive", "no good", "discard", "disposable", "utility"],
            },
            {
              point: "Integrates 1930s AO4 context: lack of welfare / Social Security for aging disabled farmworkers ('canned')",
              keywords: ["canned", "can me", "welfare", "social security", "1930s", "pension", "destitution", "county"],
            },
            {
              point: "Connects Candy's regret ('ought to of shot that dog myself') to foreshadowing George shooting Lennie (AO1)",
              keywords: ["ought to of shot", "stranger", "foreshadow", "foreshadows", "foreshadowing", "lennie", "section 6", "mercy"],
            },
          ],
          commonError: "Retelling how Carlson shoots the dog without linking it to Candy's fear of being fired or George's Section 6 mercy killing.",
          difficulty: "core",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "Why does Candy identify his own future on the ranch with what Carlson does to his dog?",
            "Link 1930s lack of farmworker welfare (AO4) + foreshadowing of Section 6 (AO1).",
          ],
          strategy: "Bind animal allegory, 1930s labour precarity and structural foreshadowing",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p1-q15",
          question:
            "Analyse how Steinbeck's **cyclical return to the Salinas pool in Section 6** reinforces fatalism and social critique at the close of the novella (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "Returning to the exact Salinas clearing from Section 1 closes Steinbeck's six-scene play-novelette like a trap, proving George and Lennie could never escape deterministic forces. Whereas a water snake glided safely in Section 1, a motionless heron now lances down and swallows the snake whole, embodying indifferent Darwinian survival in a 1930s society with zero humane sanctuary for an intellectually disabled man. After George uses Carlson's Luger as a final act of protective love, Carlson's baffled closing question (`'what the hell ya suppose is eatin' them two guys?'`) indicts how itinerant isolation has numbed ordinary men to grief.",
          markScheme: [
            {
              point: "Explains the cyclical framing / play-novelette symmetry trapping George and Lennie (AO1)",
              keywords: ["cyclical", "symmetry", "section 1", "play-novelette", "frame", "trap", "inevitable", "deterministic"],
            },
            {
              point: "Contrasts Section 6's heron swallowing the water snake against Section 1's peaceful glide (AO1)",
              keywords: ["heron", "snake", "swallowed", "swallows", "predator", "darwinian", "naturalism", "naturalistic"],
            },
            {
              point: "Integrates AO4: lack of humane 1930s care for Lennie ('cage' / lynch mob) driving George's Luger mercy killing",
              keywords: ["luger", "mercy", "curley", "cage", "asylum", "lynch", "disability", "1930s"],
            },
            {
              point: "Unpacks Carlson's final line ('eatin' them two guys') as an indictment of emotional numbness (AO1/AO4)",
              keywords: ["carlson", "eatin", "final line", "empathy", "numb", "numbness", "grief", "slim"],
            },
          ],
          commonError: "Stopping the analysis the moment George pulls the trigger and forgetting both the heron-and-snake image and Carlson's final line.",
          difficulty: "core",
          guideRef: "cyclical-novella-fatalism",
          hints: [
            "Compare the water snake's fate in Section 1 vs Section 6.",
            "Finish by analysing why Steinbeck gives the final baffled question to Carlson.",
          ],
          strategy: "Pair opening-to-closing symmetry with Carlson's final line",
        },
      ],
    },
    {
      id: "lit-of-mice-and-men-p2",
      title: "Paper 2 — Close Textual Recall & Thematic Essay Craft (Set B)",
      questions: [
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q01",
          question:
            "What San Francisco employment agency issued George and Lennie's `'work cards and the bus tickets'` (`'___ and Ready's'`)?",
          answer: { type: "text", accept: ["Murray", "Murray and Ready's", "Murray and Readys"] },
          traps: [
            {
              spec: { type: "text", accept: ["Soledad", "Weed"] },
              feedback:
                "Soledad and Weed are California towns; the San Francisco labour agency is Murray and Ready's.",
            },
          ],
          solution: [
            "**Murray and Ready's** on Howard Street dispatched casual farm labourers across California during the 1930s Depression.",
          ],
          commonError:
            "Confusing the San Francisco labour agency Murray and Ready's with the ranch owners or with California towns like Weed and Soledad.",
          difficulty: "challenge",
          guideRef: "depression-dust-bowl-context",
          hints: [
            "George mentions getting their work slips from '___ and Ready's' in Section 1.",
            "Starts with 'Murr-'.",
          ],
          strategy: "Use authentic contextual proper nouns for AO1 + AO4",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q02",
          question:
            "Into which California river did George once tell Lennie to jump as a cruel prank — nearly drowning him before George's moral awakening?",
          answer: { type: "text", accept: ["Sacramento River", "Sacramento", "the Sacramento River"] },
          traps: [
            {
              spec: { type: "text", accept: ["Salinas River", "Salinas"] },
              feedback: "The Salinas River frames Sections 1 and 6; George's flashback confession to Slim in Section 3 names California's capital-city river.",
            },
          ],
          solution: [
            "In Section 3 George tells Slim he once told Lennie to jump into the **Sacramento River**, and Lennie's pure gratitude after nearly drowning shamed George out of bullying forever.",
          ],
          difficulty: "core",
          guideRef: "george-lennie-american-dream",
          hints: [
            "It shares its name with the state capital of California ('Sacra-...').",
            "George confesses this memory to Slim in Section 3.",
          ],
          strategy: "Distinguish backstory flashbacks from the main Salinas setting",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q03",
          question:
            "Complete Steinbeck's royal metaphor describing **Slim** in Section 2 (`'moved with a majesty only achieved by royalty and master craftsmen. He was the ___ of the ranch'`). Give the missing single word.",
          answer: { type: "text", accept: ["prince", "prince of the ranch", "the prince", "the prince of the ranch"], display: "prince" },
          traps: [
            {
              spec: { type: "text", accept: ["king", "boss", "master"] },
              feedback:
                "Steinbeck mentions 'royalty and master craftsmen' first, then calls Slim 'the prince of the ranch' (not king).",
            },
          ],
          solution: [
            "Steinbeck calls Slim `'the **prince** of the ranch'`, signalling organic nobility earned through skill and compassion rather than wealth.",
          ],
          commonError:
            "Writing 'king' instead of 'prince', overlooking how Steinbeck's metaphor 'prince of the ranch' grants Slim natural moral authority beneath the economic Boss.",
          difficulty: "warmup",
          guideRef: "crooks-candy-marginalisation",
          hints: ["A royal title for a king's son, starting with P."],
          strategy: "Memorise Steinbeck's authorial epithets",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q04",
          question:
            "In Section 2, what kind of exotic bird feathers decorate Curley's wife's red mules (slippers)?",
          answer: { type: "text", accept: ["ostrich", "ostrich feathers", "red ostrich feathers"] },
          traps: [
            {
              spec: { type: "text", accept: ["peacock", "swan", "chicken"] },
              feedback:
                "Steinbeck specifies 'little bouquets of red ostrich feathers' on the insteps of her red mules.",
            },
          ],
          solution: [
            "Her red mules carry `'little bouquets of red **ostrich** feathers'` — glaringly impractical footwear on a dusty barley ranch, symbolising her yearning for Hollywood glamour.",
          ],
          commonError:
            "Guessing peacock or swan plumes instead of 'ostrich' feathers, or missing the symbolic clash between glamorous cinema-style slippers and a dusty working ranch.",
          difficulty: "core",
          guideRef: "curleys-wife-patriarchy",
          hints: [
            "A large flightless African bird famous for theatrical plumes.",
            "Steinbeck writes 'little bouquets of red ___ feathers' on her slippers.",
          ],
          strategy: "Zoom onto costume details as symbolic dissonance",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q05",
          question:
            "Which card game does George repeatedly play **by himself** in the bunkhouse, visually enacting loneliness even while Lennie sits nearby?",
          answer: { type: "text", accept: ["solitaire", "patience"] },
          traps: [
            {
              spec: { type: "text", accept: ["euchre", "poker", "rummy"] },
              feedback: "Whit and Carlson play euchre together; George plays a one-person card game whose very name means 'alone'!",
            },
          ],
          solution: [
            "George repeatedly lays out hands of **solitaire** — a subtle visual motif reinforcing *Soledad* (solitude) and foreshadowing George's lonely future after Section 6.",
          ],
          difficulty: "warmup",
          guideRef: "depression-dust-bowl-context",
          hints: ["A single-player card game whose French root means 'solitary'."],
          strategy: "Spot subtle symbolic motifs in bunkhouse scenes",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q06",
          question:
            "How did **Crooks** get his permanently crooked spine (`'Why, a ___ kicked 'im in the back'`)?",
          answer: { type: "text", accept: ["horse", "a horse"] },
          traps: [
            {
              spec: { type: "text", accept: ["mule", "machine"] },
              feedback:
                "Slim drives mules and Candy lost his hand on the ranch, whereas Crooks got his crooked spine when a horse kicked him in the back.",
            },
          ],
          solution: [
            "A **horse** kicked Crooks in the back on the ranch — leaving him permanently disabled and rubbing liniment onto his spine in the segregated harness room.",
          ],
          commonError:
            "Confusing Crooks's workplace injury (kicked in the back by a horse) with Candy losing his hand in ranch machinery or Slim's mule team.",
          difficulty: "warmup",
          guideRef: "crooks-candy-marginalisation",
          hints: ["Think of the stable animals Crooks tends every day."],
          strategy: "Link workplace injury to permanent ranch entrapment",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q07",
          question:
            "In Section 4, Curley's wife threatens Crooks with extra-legal racial violence: `'I could get you ___ up on a tree so easy it ain't even funny.'` Give the missing verb.",
          answer: { type: "text", accept: ["strung"] },
          traps: [
            {
              spec: { type: "text", accept: ["hung", "hanged", "tied"] },
              feedback:
                "Her exact colloquial participle invoking 1930s Jim Crow lynching is 'strung' ('strung up on a tree').",
            },
          ],
          solution: [
            "She says `'strung up on a tree'`, invoking 1930s Jim Crow lynching terror to crush Crooks back into silence.",
          ],
          commonError:
            "Paraphrasing as 'hung' or 'hanged' instead of quoting Curley's wife's exact colloquial participle 'strung' ('strung up on a tree').",
          difficulty: "core",
          guideRef: "curleys-wife-patriarchy",
          hints: [
            "Past participle of 'string' (`'___ up on a tree'`).",
            "She invokes extra-legal 1930s hanging/lynching terror in Crooks's room.",
          ],
          strategy: "Quote exact lexical evidence for Section 4 power shifts",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q08",
          question:
            "What outdoor game are the ranch hands noisily playing outside the barn in Section 5 (`'clang of ___ on the playing peg'`) while Lennie and Curley's wife are inside?",
          answer: { type: "text", accept: ["horseshoes", "horseshoe", "pitching horseshoes"] },
          traps: [
            {
              spec: { type: "text", accept: ["cards", "solitaire", "euchre", "baseball"] },
              feedback:
                "Card games take place inside the bunkhouse; outside the barn on Sunday afternoon the men are pitching iron horseshoes.",
            },
          ],
          solution: [
            "The men are pitching **horseshoes** in the Sunday afternoon sun, creating an oblivious off-stage soundscape while tragedy strikes inside the quiet barn.",
          ],
          commonError:
            "Naming bunkhouse card games (solitaire or euchre) instead of the outdoor game of pitching horseshoes whose metallic clang punctuates Section 5.",
          difficulty: "warmup",
          guideRef: "cyclical-novella-fatalism",
          hints: ["Iron U-shaped items pitched at an iron peg in the dirt."],
          strategy: "Analyse off-stage theatrical sound cues",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q09",
          question:
            "Complete Steinbeck's hybrid genre term for *Of Mice and Men*, designed with six self-contained scenes for immediate stage adaptation: a **'play-___'**.",
          answer: { type: "text", accept: ["novelette", "play-novelette", "novella"] },
          traps: [
            {
              spec: { type: "text", accept: ["novel", "script", "drama"] },
              feedback:
                "Steinbeck used the diminutive suffix '-ette' for his compact six-scene form: a 'play-novelette'.",
            },
          ],
          solution: [
            "Steinbeck termed the work a **play-novelette**, blending short prose fiction with theatrical scene blocking and real-time dialogue.",
          ],
          commonError:
            "Writing 'play-script' or full-length 'novel' instead of Steinbeck's exact hybrid term 'play-novelette', which explains why each section stays in a single set-like space.",
          difficulty: "core",
          guideRef: "cyclical-novella-fatalism",
          hints: [
            "A diminutive word for a short novel: 'play-novel___'.",
            "Ends with '-ette' to signal a compact theatrical novella.",
          ],
          strategy: "Name Steinbeck's experimental structural form",
        },
        {
          kind: "short",
          id: "lit-of-mice-and-men-p2-q10",
          question:
            "Whose comforting words to George in Section 6 — `'Never you mind. A guy got to sometimes'` — contrast sharply with Carlson's emotional blindness?",
          answer: { type: "text", accept: ["Slim"] },
          traps: [
            {
              spec: { type: "text", accept: ["Candy"] },
              feedback: "Candy remains back at the barn; only the jerkline skinner understands why George had to shoot Lennie himself.",
            },
          ],
          solution: [
            "**Slim** immediately grasps that George acted out of love rather than self-defence, sitting beside him and leading him away gently.",
          ],
          difficulty: "warmup",
          guideRef: "crooks-candy-marginalisation",
          hints: ["The only ranch worker perceptive enough to understand George and Lennie's bond from Section 2 onward."],
          strategy: "Contrast Slim and Carlson as moral foils",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p2-q11",
          question:
            "Analyse how Steinbeck uses **Crooks's harness room in Section 4** to expose racial hierarchy and fractured solidarity in 1930s America (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "Steinbeck makes Crooks's lean-to shed off the barn a physical emblem of *de facto* 1930s Jim Crow segregation, isolating the proud Black stable buck alongside manure despite his literacy and `'mauled copy of the California civil code for 1905'`. Gathering the ranch's four excluded outcasts — Crooks, Lennie, Candy and Curley's wife — while able-bodied white men visit Soledad, Steinbeck shows how systemic oppression destroys class solidarity. When humiliated Curley's wife threatens to get Crooks `'strung up on a tree'`, extra-legal lynching terror instantly nullifies written law and forces Crooks to shrink `'into himself'`.",
          markScheme: [
            {
              point: "Explains spatial segregation in the harness room / barn shed under 1930s Jim Crow racism (AO1/AO4)",
              keywords: ["segregation", "segregated", "jim crow", "barn", "manure", "lean-to", "racism", "racial"],
            },
            {
              point: "Analyses Crooks's 'mauled' 1905 California civil code as literacy / hollow legal protection (AO1/AO4)",
              keywords: ["1905", "civil code", "mauled", "literate", "literacy", "law", "rights", "statutory"],
            },
            {
              point: "Examines the four outcasts ('weak ones') failing to unite / punching downward (AO1)",
              keywords: ["outcasts", "weak ones", "solidarity", "downward", "candy", "lennie", "curley's wife", "fracture"],
            },
            {
              point: "Unpacks Curley's wife's lynching threat ('strung up on a tree') crushing Crooks's dignity (AO1/AO4)",
              keywords: ["strung up", "lynching", "lynch", "into himself", "nothing", "silence", "submission"],
            },
          ],
          commonError: "Describing Crooks as lonely without explaining how the 1905 civil code and the lynching threat expose 1930s racial reality.",
          difficulty: "core",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "Contrast Crooks's 1905 California civil code with Curley's wife's 'strung up on a tree' threat.",
            "Explain why 'all the weak ones' turn on each other instead of uniting.",
          ],
          strategy: "Make Section 4 your centrepiece AO1 + AO4 paragraph",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p2-q12",
          question:
            "How does Steinbeck contrast **Slim** and **Curley** to explore different forms of masculinity and authority on a 1930s ranch (**AO1 + AO4**)? [4 marks]",
          marks: 4,
          modelAnswer:
            "Steinbeck juxtaposes Curley's brittle, inherited rank against Slim's organic moral authority to critique toxic hierarchy on 1930s ranches. As the Boss's son, insecure ex-boxer Curley compensates for his small stature by picking fights with larger labourers like Lennie and boasting about his vaseline-filled glove, reducing both employees and his unnamed wife to status props. Conversely, master jerkline skinner Slim — `'the prince of the ranch'` whose `'God-like eyes'` invite George's trust — earns quiet reverence through skilled craft and rare emotional intelligence, ultimately comforting grieving George when Carlson remains baffled.",
          markScheme: [
            {
              point: "Analyses Curley's insecure, aggressive authority rooted in inherited status as the Boss's son (AO1/AO4)",
              keywords: ["boss's son", "inherited", "insecure", "insecurity", "boxer", "stature", "aggressive", "bullying"],
            },
            {
              point: "Uses specific Curley evidence such as the vaseline glove or attacking Lennie (AO1)",
              keywords: ["vaseline", "glove", "trophy", "crushed", "hand", "lennie"],
            },
            {
              point: "Contrasts Slim's earned craft and calm majesty ('prince of the ranch' / 'jerkline skinner') (AO1)",
              keywords: ["prince", "jerkline", "skinner", "majesty", "royalty", "earned", "god-like", "craft"],
            },
            {
              point: "Evaluates Slim's emotional empathy toward George vs callous 1930s ranch masculinity (AO1/AO4)",
              keywords: ["empathy", "compassion", "understanding", "comforts", "carlson", "guy got to", "trust"],
            },
          ],
          commonError: "Simply saying 'Slim is kind and Curley is mean' without linking Curley's power to economic privilege or Slim's respect to skilled labour.",
          difficulty: "core",
          guideRef: "crooks-candy-marginalisation",
          hints: [
            "Compare WHERE each man's power comes from: being the Boss's son vs master skill and empathy.",
            "Include Curley's vaseline glove and Slim's 'prince of the ranch' epithet.",
          ],
          strategy: "Build comparative character-foil paragraphs",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p2-q13",
          question:
            "Explore how Steinbeck uses **animal imagery and parallel animal deaths** to shape the reader's understanding of **Lennie** (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "From Section 1, Steinbeck characterises Lennie through zoomorphic similes — dragging his feet like a `'bear'` and snorting like a `'horse'` — to fuse uncorrupted, childlike instinct with dangerous, uncalibrated strength. Simultaneously, Steinbeck threads an escalating chain of dead animals from fieldmice to Candy's shot sheepdog, Slim's crushed puppy and Section 6's water snake swallowed by a heron, establishing naturalistic fatalism. Within a harsh 1930s society lacking compassionate institutional care for intellectually disabled men, these animal parallels show Lennie is doomed not by moral malice, but because utilitarian ranch life destroys whatever cannot adapt.",
          markScheme: [
            {
              point: "Analyses zoomorphism ('bear', 'horse', 'terrier', 'paw') showing pre-moral innocence + immense strength (AO1)",
              keywords: ["zoomorphism", "zoomorphic", "bear", "horse", "terrier", "paw", "innocence", "instinct", "uncalibrated"],
            },
            {
              point: "Traces the escalating chain of dead creatures (mice -> puppy -> heron/snake or Candy's dog) (AO1)",
              keywords: ["mouse", "mice", "puppy", "sheepdog", "heron", "snake", "escalating", "foreshadowing"],
            },
            {
              point: "Connects to naturalistic determinism / Robert Burns's 'To a Mouse' fatalism (AO1/AO4)",
              keywords: ["burns", "naturalism", "naturalistic", "fatalism", "inevitable", "predatory", "doomed"],
            },
            {
              point: "Integrates 1930s AO4 context: absence of humane disability care ('cage' / utilitarian disposal)",
              keywords: ["disability", "disabled", "1930s", "cage", "asylum", "institutional", "utilitarian", "welfare"],
            },
          ],
          commonError: "Listing every animal simile without explaining how they connect to 1930s treatment of disability and fatalistic structure.",
          difficulty: "core",
          guideRef: "george-lennie-american-dream",
          hints: [
            "Discuss BOTH zoomorphic descriptions of Lennie ('bear', 'paw') AND dead-animal parallels (mice, dog, puppy, snake).",
            "Tie into 1930s lack of support for intellectual disability (AO4).",
          ],
          strategy: "Connect zoomorphism to naturalistic determinism and AO4",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p2-q14",
          question:
            "Explain how Steinbeck uses **the motif of the colour red and spatial doorways** in his presentation of **Curley's wife** (**AO1 + AO4**). [4 marks]",
          marks: 4,
          modelAnswer:
            "Steinbeck threads vivid red details — Curley's wife's `'rouged lips'`, painted nails and `'red mules'` trimmed with `'red ostrich feathers'` — directly back to the girl's red dress in Weed, creating an ominous visual alarm of trapped vitality and impending panic. Equally telling is her theatrical placement on spatial thresholds: lingering in the bunkhouse doorway where `'the rectangle of sunshine... was cut off'` and peering into Crooks's shed. In the strictly gendered geography of a 1930s ranch, these doorways dramatise her liminal exile — suffocated inside Curley's house yet excluded as `'poison'` from male camaraderie.",
          markScheme: [
            {
              point: "Identifies her red costume details (rouged lips, nails, red mules / ostrich feathers) (AO1)",
              keywords: ["rouged", "mules", "ostrich", "feathers", "nails", "fingernails", "lips"],
            },
            {
              point: "Connects the red motif structurally to the girl's red dress in Weed to foreshadow danger (AO1)",
              keywords: ["weed", "dress", "foreshadow", "foreshadowing", "danger", "vitality", "passion"],
            },
            {
              point: "Analyses her placement in doorways / blocking 'the rectangle of sunshine' as liminal exclusion (AO1)",
              keywords: ["sunshine", "cut off", "threshold", "thresholds", "bunkhouse", "liminal", "excluded", "shadow"],
            },
            {
              point: "Integrates 1930s AO4 context of rural domestic confinement / gendered ranch spaces ('poison')",
              keywords: ["1930s", "patriarchal", "patriarchy", "gender", "gendered", "domestic", "house", "poison", "tart"],
            },
          ],
          commonError: "Saying 'red means danger' in four words without linking it to Weed or analysing why she stands in doorways.",
          difficulty: "core",
          guideRef: "curleys-wife-patriarchy",
          hints: [
            "Link her red ostrich-feather mules backward to the red dress in Weed.",
            "Explain why she constantly stands in doorways (neither happy in Curley's house nor welcome in the bunkhouse).",
          ],
          strategy: "Combine colour symbolism with theatrical spatial staging",
        },
        {
          kind: "written",
          id: "lit-of-mice-and-men-p2-q15",
          question:
            "Why is **George's recurring game of solitaire** and his decision to go get a drink with Slim at the end of Section 6 significant to Steinbeck's portrayal of **loneliness** (**AO1 + AO4**)? [4 marks]",
          marks: 4,
          modelAnswer:
            "Throughout the bunkhouse scenes, Steinbeck shows George laying out hands of solitaire — a visual emblem of *Soledad* (solitude) foreshadowing his ultimate isolation once Lennie is gone. Earlier, George defined their identity against rootless 1930s bindle-stiffs who blow fifty dollars in saloons because they `'got no family'`. By shooting Lennie mercifully to save him from Curley's shotgun, George simultaneously destroys his own spiritual anchor; walking off with Slim for a drink confirms his tragic assimilation into the ordinary, dreamless ranks of Depression migrant men.",
          markScheme: [
            {
              point: "Unpacks solitaire's symbolic meaning ('alone' / Soledad) foreshadowing George's isolation (AO1)",
              keywords: ["alone", "solitary", "soledad", "foreshadow", "foreshadowing", "emblem", "cards"],
            },
            {
              point: "Contrasts George's earlier pride ('With us it ain't like that') against ordinary bindle-stiffs (AO1/AO4)",
              keywords: ["bindle", "itinerant", "loneliest", "ain't like that", "fifty", "saloons", "migrant", "1930s"],
            },
            {
              point: "Explains that shooting Lennie destroys George's own dream and unique identity (AO1)",
              keywords: ["farm", "dream", "anchor", "symbiosis", "identity", "dies with lennie", "mercy"],
            },
            {
              point: "Interprets going for a drink with Slim as George folding into bleak ranch conformity (AO1/AO4)",
              keywords: ["conformity", "assimilation", "ordinary", "drifter", "dreamless", "bleak", "depression"],
            },
          ],
          commonError: "Treating solitaire merely as a hobby to pass time rather than a symbolic echo of Soledad and George's ending.",
          difficulty: "core",
          guideRef: "depression-dust-bowl-context",
          hints: [
            "Connect the literal meaning of 'solitaire' to 'Soledad' and George's Section 1 speech about lonely ranch hands.",
            "What did George always say ordinary alone guys do with their pay in town — and what does he go do at the very end?",
          ],
          strategy: "Link quiet visual props to structural ending irony",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "lit-of-mice-and-men-ch-q01",
      question:
        "**Grade-9 Debate**: `'George's shooting of Lennie in Section 6 is not a triumph of friendship, but Steinbeck's bleakest proof that ranch brutality conquers love.'` Write a nuanced critical paragraph evaluating this view (**AO1 + AO4**). [5 marks]",
      marks: 5,
      modelAnswer:
        "Compellingly, George's act is both supreme sacrificial love and a tragic capitulation to 1930s institutional violence. Enacting Candy's agonised lesson (`'I ought to of shot that dog myself'`), George uses Carlson's Luger while reciting the Edenic farm chant (`'I never been mad'`) so Lennie dies envisioning paradise rather than mutilated by Curley's shotgun or `'strapped down'` in a 1930s asylum cage. Yet Steinbeck refuses triumphalism: by forcing Lennie's protector to wield Carlson's utilitarian weapon, the predatory Salinas world — symbolised by the heron swallowing the water snake — breaks their brotherhood and absorbs George into dreamless bindle-stiff solitude.",
      markScheme: [
        {
          point: "Argues the case for sacrificial love: final dream chant + 'I never been mad' sparing Lennie terror (AO1)",
          keywords: ["never been mad", "mercy", "sacrificial", "paradise", "across the river", "chant", "gentle"],
        },
        {
          point: "Connects to Candy's Section 3 regret ('ought to of shot that dog myself') (AO1)",
          keywords: ["candy", "dog", "ought to of shot", "stranger"],
        },
        {
          point: "Integrates harsh 1930s AO4 alternatives: Curley's vigilante mob or asylum 'cage' ('strapped down')",
          keywords: ["curley", "shotgun", "cage", "strapped", "asylum", "vigilante", "1930s"],
        },
        {
          point: "Weighs the counter-view: George forced to use Carlson's utilitarian Luger / heron-snake naturalism (AO1)",
          keywords: ["carlson", "luger", "utilitarian", "heron", "snake", "capitulation", "predatory"],
        },
        {
          point: "Reaches a balanced conceptual synthesis on George's assimilation into lonely ranch life (AO1/AO4)",
          keywords: ["both", "synthesis", "bindle", "solitude", "dreamless", "assimilation", "tragic"],
        },
      ],
      difficulty: "challenge",
      guideRef: "cyclical-novella-fatalism",
      hints: [
        "Defend the 'love' side first using Candy's dog, 'I never been mad' and Slim's warning about the asylum cage.",
        "Then steelman the 'ranch brutality wins' side: whose gun is in George's hand, and what happens to George's dream afterward?",
        "Synthesise both: it is the most loving choice left inside an inhumane 1930s system that permits no happy exit.",
      ],
      strategy: "Weigh thesis and antithesis before synthesising",
    },
    {
      kind: "written",
      id: "lit-of-mice-and-men-ch-q02",
      question:
        "**Intersectional Analysis**: Compare how Steinbeck presents **Crooks** and **Curley's wife** as victims who simultaneously perpetuate the ranch's hierarchy in Section 4 (**AO1 + AO4**). [5 marks]",
      marks: 5,
      modelAnswer:
        "In Section 4 Steinbeck stages a devastating collision between racial and patriarchal marginalisation during the 1930s. Segregated in a manure-scented shed despite his `'mauled copy of the California civil code for 1905'`, Crooks initially vents his chronic isolation downward by tormenting neurodivergent Lennie (`'S'pose he don't come back'`). Similarly, nameless Curley's wife enters seeking companionship from domestic confinement, yet the instant Crooks asserts authority in his own room, she weaponises white Jim Crow supremacy — threatening to have him `'strung up on a tree'`. Steinbeck thus indicts an oppressive American hierarchy that fractures solidarity among `'all the weak ones'`, teaching victims to hoard dignity by crushing someone more vulnerable.",
      markScheme: [
        {
          point: "Analyses Crooks's Jim Crow segregation + 'mauled' 1905 civil code (AO1/AO4)",
          keywords: ["jim crow", "segregated", "segregation", "1905", "civil code", "mauled", "shed"],
        },
        {
          point: "Notes Crooks displacing his own loneliness downward by taunting Lennie (AO1)",
          keywords: ["taunt", "taunting", "torment", "tormenting", "lennie", "come back", "displacing"],
        },
        {
          point: "Analyses Curley's wife's patriarchal namelessness and domestic isolation (AO1/AO4)",
          keywords: ["nameless", "patriarchal", "patriarchy", "domestic", "confinement", "lonely", "companionship"],
        },
        {
          point: "Examines her lethal Jim Crow lynching threat ('strung up on a tree') silencing Crooks (AO1/AO4)",
          keywords: ["strung up", "lynch", "lynching", "white", "supremacy", "nothing", "silencing"],
        },
        {
          point: "Articulates Steinbeck's overarching critique: oppression fractures solidarity among 'the weak ones' (AO1/AO4)",
          keywords: ["solidarity", "weak ones", "fractures", "fractured", "downward", "indicts", "oppression"],
        },
      ],
      difficulty: "challenge",
      guideRef: "crooks-candy-marginalisation",
      hints: [
        "Show how Crooks first bullies Lennie psychologically before Curley's wife arrives.",
        "Show how Curley's wife shifts from lonely outcast to racial oppressor ('strung up on a tree').",
        "Conclude on WHY 'all the weak ones' destroy each other instead of uniting against the ranch.",
      ],
      strategy: "Compare displaced power across race, disability and gender",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-ch-q03",
      question:
        "What was Steinbeck's original neutral, naturalistic three-word working title for *Of Mice and Men* before he adopted the phrase from Robert Burns?",
      answer: { type: "text", accept: ["Something That Happened"] },
      traps: [
        {
          spec: { type: "text", accept: ["To a Mouse", "In Dubious Battle"] },
          feedback:
            "'To a Mouse' is Robert Burns's poem that inspired the published title; Steinbeck's neutral three-word working title was 'Something That Happened'.",
        },
      ],
      solution: [
        "Steinbeck originally titled the manuscript ***'Something That Happened'*** — reflecting his non-teleological philosophy that observes human tragedy without moralistic blame, like an ecological event.",
      ],
      commonError:
        "Giving Robert Burns's poem title 'To a Mouse' instead of Steinbeck's non-judgmental working title 'Something That Happened'.",
      difficulty: "challenge",
      guideRef: "depression-dust-bowl-context",
      hints: [
        "Three everyday English words: `'___ That ___'`.",
        "It frames the tragedy objectively as an event without villains, starting with 'Something...'.",
        "`'Something That Happened'`.",
      ],
      strategy: "Cite Steinbeck's working title to prove naturalistic determinism",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-ch-q04",
      question:
        "In Section 3, what is the exact surname of the former ranch worker (**Bill ___**) whose letter printed in *Western Magazine* delights Whit?",
      answer: { type: "text", accept: ["Tenner", "Bill Tenner"] },
      traps: [
        {
          spec: { type: "text", accept: ["Andy Cushman", "Cushman", "Whitey", "Smitty"] },
          feedback:
            "Andy Cushman, Whitey and Smitty are other former figures mentioned in bunkhouse gossip; the *Western Magazine* letter writer is Bill Tenner.",
        },
      ],
      solution: [
        "Whit proudly displays a brief letter to the editor written by **Bill Tenner**, who worked on the ranch three months earlier — illustrating how anonymous bindle-stiffs craved fleeting permanence.",
      ],
      commonError:
        "Confusing Bill Tenner with other off-stage figures from bunkhouse gossip (such as Andy Cushman or Whitey), or misspelling Tenner as 'Tanner'.",
      difficulty: "challenge",
      guideRef: "depression-dust-bowl-context",
      hints: [
        "Whit asks Slim: 'You remember Bill ___? Worked here about three months ago?'",
        "Six-letter surname rhyming with 'spanner' / 'manner' (with an 'e': T-e-n-n-e-r).",
        "Starts with 'Tenn-'.",
      ],
      strategy: "Command granular closed-book detail",
    },
    {
      kind: "written",
      id: "lit-of-mice-and-men-ch-q05",
      question:
        "**Authorial Method & Context**: How does Steinbeck use **two contrasting versions of the American Dream** — George and Lennie's ten-acre farm versus Curley's wife's Hollywood `'pitchers'` — to critique 1930s American mythology (**AO1 + AO4**)? [5 marks]",
      marks: 5,
      modelAnswer:
        "Steinbeck pairs two gendered myths of 1930s upward mobility to expose the American Dream as an ideological seduction. George and Lennie's yearning to `'live off the fatta the lan''` channels traditional Jeffersonian agrarianism — promising male bindle-stiffs dignity and freedom from exploitative agency bosses. Conversely, Curley's wife's faith that she was `'a natural'` destined for Hollywood `'pitchers'` and `'nice clothes'` reflects modern Depression-era consumer and cinema escapism, offering rural women their sole fantasised exit from patriarchal domesticity. Crucially, both dreams collapse inside the sunlit barn of Section 5: Lennie kills Curley's wife while terrified of losing his rabbits, proving that unattainable national myths ultimately collide and destroy the powerless.",
      markScheme: [
        {
          point: "Analyses George and Lennie's 'fatta the lan'' farm as Jeffersonian agrarian autonomy from wage labour (AO1/AO4)",
          keywords: ["fatta", "agrarian", "jeffersonian", "autonomy", "bindle", "independence", "land"],
        },
        {
          point: "Analyses Curley's wife's 'pitchers' / 'natural' dream as 1930s Hollywood consumer/cinema escapism (AO1/AO4)",
          keywords: ["natural", "cinema", "escapism", "nice clothes", "glamour", "consumer"],
        },
        {
          point: "Contrasts the gendered nature of the two dreams (male land ownership vs female stardom escaping patriarchy) (AO4)",
          keywords: ["gendered", "gender", "patriarchal", "patriarchy", "domesticity", "women", "male"],
        },
        {
          point: "Highlights their structural collision in Section 5's barn (Lennie panicking over losing the rabbits) (AO1)",
          keywords: ["section 5", "barn", "collide", "collision", "rabbits", "panics", "panic"],
        },
        {
          point: "Evaluates Steinbeck's overarching critique of 1930s meritocratic mythology as destructive illusion (AO1/AO4)",
          keywords: ["meritocratic", "illusion", "mirage", "seduction", "unattainable", "powerless", "destroys"],
        },
      ],
      difficulty: "challenge",
      guideRef: "curleys-wife-patriarchy",
      hints: [
        "Contrast the OLD agrarian dream (land, independence for men) with the NEW consumer dream (Hollywood stardom, clothes for women).",
        "Notice where the two dreams literally collide: inside Section 5's barn!",
        "Explain why Lennie clamps his hand over her mouth (fear that George won't let him tend the rabbits).",
      ],
      strategy: "Pair male agrarian myth with female Hollywood myth",
    },
    {
      kind: "short",
      id: "lit-of-mice-and-men-ch-q06",
      question:
        "Complete Steinbeck's exact repeated simile linking **Curley's crushed hand** (Section 3) and **Curley's wife's body** (Section 5): `'flopped like a ___'`.",
      answer: { type: "text", accept: ["fish", "a fish"] },
      traps: [
        {
          spec: { type: "text", accept: ["rag doll", "bird", "puppet"] },
          feedback:
            "Lennie shakes her like a terrier shakes a rat, but Steinbeck's exact repeated simile in both Sections 3 and 5 is 'flopped like a fish'.",
        },
      ],
      solution: [
        "Steinbeck writes `'flopping like a fish on a line'` (Section 3) and `'her body flopped like a fish'` (Section 5), binding both involuntary outbursts of Lennie's panicked strength through identical animal imagery.",
      ],
      commonError:
        "Guessing 'rag doll' or 'bird' instead of Steinbeck's exact repeated simile 'flopped like a fish', which structurally binds Sections 3 and 5.",
      difficulty: "challenge",
      guideRef: "cyclical-novella-fatalism",
      hints: [
        "Recall the helpless aquatic creature gasping on a line in Section 3.",
        "Steinbeck repeats the exact four-letter noun when Curley's wife's neck breaks in Section 5.",
        "Starts with F.",
      ],
      strategy: "Cite structural lexical echoes across sections",
    },
    {
      kind: "written",
      id: "lit-of-mice-and-men-ch-q07",
      question:
        "**Structural Craft**: Evaluate how Steinbeck's **'play-novelette' staging of light and sound** across Sections 1, 2, 5 and 6 shapes the tragedy (**AO1 + AO4**). [4 marks]",
      marks: 4,
      modelAnswer:
        "Designing *Of Mice and Men* for seamless 1937 Broadway staging, Steinbeck uses theatrical lighting and off-stage acoustics to tighten deterministic dread. Warm golden evening light at the Salinas pool in Section 1 gives way to claustrophobic bunkhouse geometry where Curley's wife literally cuts off `'the rectangle of sunshine'` in the doorway. In Section 5, slanting dusty sunbeams inside the quiet barn contrast painfully with the carefree `'clang of horseshoes'` from ranch hands playing outside, isolating two lonely outcasts moments before catastrophe. Returning at dusk to the darkened pool in Section 6, lengthening shadows over the Gabilan peaks visually extinguish the agrarian dream.",
      markScheme: [
        {
          point: "Identifies Steinbeck's theatrical 'play-novelette' design / 1937 stagecraft economy (AO1/AO4)",
          keywords: ["broadway", "theatrical", "stagecraft", "scenes", "1937", "stage"],
        },
        {
          point: "Analyses Curley's wife cutting off 'the rectangle of sunshine' in Section 2's doorway (AO1)",
          keywords: ["rectangle of sunshine", "sunshine", "cut off", "doorway", "claustrophobic", "bunkhouse"],
        },
        {
          point: "Analyses Section 5's barn acoustics ('clang of horseshoes' outside vs hushed interior) (AO1)",
          keywords: ["horseshoes", "clang", "barn", "outside", "juxtaposition", "carefree", "hushed"],
        },
        {
          point: "Tracks the Section 1-to-Section 6 dusk/shadow progression extinguishing hope at the Salinas pool (AO1)",
          keywords: ["dusk", "shadows", "darkened", "gabilan", "salinas", "extinguish", "fatalism"],
        },
      ],
      difficulty: "challenge",
      guideRef: "cyclical-novella-fatalism",
      hints: [
        "Connect 'play-novelette' to 1937 Broadway theatrical lighting and off-stage sound.",
        "Include 'rectangle of sunshine... cut off' (Sec 2) and 'clang of horseshoes' (Sec 5).",
        "Contrast golden light in Section 1 with gathering dusk shadows in Section 6.",
      ],
      strategy: "Read Steinbeck's prose settings like theatrical stage directions",
    },
    {
      kind: "written",
      id: "lit-of-mice-and-men-ch-q08",
      question:
        "**Closing Clincher**: Why does Steinbeck end the entire novella not with George's grief or Slim's compassion, but with **Carlson's** question to Curley (`'Now what the hell ya suppose is eatin' them two guys?'`) (**AO1 + AO4**)? [4 marks]",
      marks: 4,
      modelAnswer:
        "Giving the final line to Carlson delivers devastating dramatic bathos that crystallises Steinbeck's contextual critique of 1930s ranch atomisation. Earlier, Carlson embodies cold utilitarianism by shooting Candy's old dog merely because it smelled and served no practical function. Standing beside aggressive Curley over Lennie's corpse, Carlson assumes George simply dispatched a dangerous nuisance (`'You hadda, George'`) and is genuinely baffled by fraternal sorrow. Ending on his emotional incomprehension rather than Slim's rare empathy proves that Depression-era itinerant survivalism has warped human connection into an unreadable anomaly.",
      markScheme: [
        {
          point: "Identifies the tonal effect of bathos / jarring anti-climax shifting away from George's grief (AO1)",
          keywords: ["bathos", "anti-climax", "jarring", "blunt", "bleak", "indictment"],
        },
        {
          point: "Links Carlson back to his Section 3 utilitarian shooting of Candy's dog (AO1)",
          keywords: ["utilitarian", "utilitarianism", "candy's", "sheepdog", "dog", "section 3"],
        },
        {
          point: "Contrasts Carlson and Curley's callousness with Slim's rare empathy toward George (AO1)",
          keywords: ["empathy", "incomprehension", "baffled", "callous", "callousness", "nuisance", "blindness"],
        },
        {
          point: "Integrates 1930s AO4 context: itinerant ranch survivalism eroding human brotherhood and grief",
          keywords: ["1930s", "depression", "itinerant", "atomisation", "survivalism", "brotherhood", "fraternal", "masculinity"],
        },
      ],
      difficulty: "challenge",
      guideRef: "cyclical-novella-fatalism",
      hints: [
        "Connect Carlson in Section 6 to Carlson in Section 3 (shooting Candy's old dog).",
        "Contrast Slim's immediate empathy with Carlson and Curley's emotional blindness.",
        "Tie to AO4: what has 1930s transient ranch survivalism done to ordinary men's capacity to feel grief?",
      ],
      strategy: "Use Carlson's final line as your ultimate AO4 indictment",
    },
  ],
};
