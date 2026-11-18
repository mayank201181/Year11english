import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "lit-poetry-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "power-voice-identity-poems",
      question:
        "Name the Edexcel Anthology poem by **Rudyard Kipling** that begins *\"If you can keep your head when all about you / Are losing theirs\"*.",
      answer: {
        type: "text",
        accept: ["If—", "If-", "If"],
        display: "If—",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Remember", "A Man", "Be a Man"] },
          feedback:
            "*Remember* is by Christina Rossetti, and 'be a Man' comes from the final line; Kipling's title is the single conditional conjunction ***If—***.",
        },
      ],
      hints: [
        "Short one-word title (traditionally printed with an em-dash).",
      ],
      solution: [
        "***If—*** by Rudyard Kipling — built as one 32-line conditional sentence across four octaves.",
      ],
      commonError:
        "Inventing a title from the closing line (such as 'A Man') instead of Kipling's single-word conditional title ***If—***, or missing that the entire 32-line poem is one suspended sentence.",
    },
    {
      id: "lit-poetry-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "power-voice-identity-poems",
      question:
        "Which poet wrote the dramatic monologue ***My Last Duchess*** (*\"That's my last Duchess painted on the wall\"*)?",
      answer: {
        type: "text",
        accept: ["Robert Browning", "Browning"],
        display: "Robert Browning",
      },
      traps: [
        {
          spec: { type: "text", accept: ["William Blake", "John Keats"] },
          feedback: "Blake wrote *The Tyger* and Keats wrote *La Belle Dame sans Merci*; ***My Last Duchess*** is by **Robert Browning**.",
        },
      ],
      hints: [
        "Victorian master of the dramatic monologue (surname starts with *Br-*).",
      ],
      solution: [
        "**Robert Browning** wrote ***My Last Duchess*** in enjambed rhyming iambic pentameter couplets.",
      ],
    },
    {
      id: "lit-poetry-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "power-voice-identity-poems",
      question:
        "Which heritage language's script appears in the middle section of Sujata Bhatt's ***Search For My Tongue***?",
      options: [
        "Gujarati",
        "Latin",
        "Classical Greek",
        "French",
      ],
      answerIndex: 0,
      hints: [
        "Bhatt's mother tongue from Gujarat in western India.",
      ],
      explanation:
        "Bhatt embeds **Gujarati** script (with phonetic transliteration) to enact nocturnal **code-switching** before her mother tongue *\"blossoms out of my mouth\"*.",
    },
    {
      id: "lit-poetry-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "conflict-suffering-blessing-poems",
      question:
        "Name the poet who wrote ***War Photographer*** (*\"In his darkroom he is finally alone / with spools of suffering set out in ordered rows\"*).",
      answer: {
        type: "text",
        accept: ["Carol Ann Duffy", "Duffy"],
        display: "Carol Ann Duffy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Imtiaz Dharker", "Dharker", "Wilfred Owen", "Sujata Bhatt"] },
          feedback:
            "Dharker wrote *Blessing*, Bhatt wrote *Search For My Tongue*, and Owen is not in this cluster; ***War Photographer*** is by **Carol Ann Duffy**.",
        },
      ],
      hints: [
        "Scottish-born former UK Poet Laureate (three-part name).",
        "Surname starts with *D-*.",
      ],
      solution: [
        "**Carol Ann Duffy** wrote ***War Photographer*** in four strict `ABBCDD` sestets.",
      ],
      commonError:
        "Confusing **Carol Ann Duffy** with other contemporary Anthology poets (like Imtiaz Dharker) or assuming the third-person war photographer is autobiographical.",
    },
    {
      id: "lit-poetry-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "conflict-suffering-blessing-poems",
      question:
        "In Imtiaz Dharker's ***Blessing***, what event transforms the parched community in Stanza 3 (*\"silver crashes to the ground\"*)?",
      options: [
        "A sudden monsoon thunderstorm.",
        "The municipal water pipe bursting.",
        "A wedding procession scattering silver coins.",
        "A river overflowing its stone dam.",
      ],
      answerIndex: 1,
      hints: [
        "Read Stanza 3: 'The municipal _____ bursts'.",
        "Precious water is compared metaphorically to 'silver' and 'fortune'.",
      ],
      explanation:
        "When *\"The municipal pipe bursts\"*, scarce everyday infrastructure becomes sacred communal abundance (*\"liquid sun\"*, *\"the blessing sings\"*).",
    },
    {
      id: "lit-poetry-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "love-memory-loss-poems",
      question:
        "Which specific sonnet form (**Petrarchan** or **Shakespearean**) does Christina Rossetti use in ***Remember*** (`ABBAABBA CDDECE`)?",
      answer: {
        type: "text",
        accept: ["Petrarchan", "Petrarchan sonnet", "Italian", "Italian sonnet"],
        display: "Petrarchan",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Shakespearean", "Shakespearean sonnet"] },
          feedback: "Shakespearean sonnets use three quatrains + couplet (`ABAB CDCD EFEF GG`); Rossetti's `ABBAABBA` octave + sestet is **Petrarchan**.",
        },
      ],
      hints: [
        "Named after the Italian Renaissance poet Petrarch (8-line octave + 6-line sestet).",
        "Pivots at the line-9 volta ('Yet if you should forget me').",
      ],
      solution: [
        "***Remember*** is a **Petrarchan** (Italian) sonnet whose line-9 volta turns from pleading for memory to selfless release.",
      ],
    },
    {
      id: "lit-poetry-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "love-memory-loss-poems",
      question:
        "Which **Anthology poem** ends with the speaker stepping out of a toolshed into a darkened garden and asking: *\"Yes, here you are. But where are they who sought you?\"*",
      options: [
        "Half-past Two (U.A. Fanthorpe)",
        "Piano (D.H. Lawrence)",
        "Hide and Seek (Vernon Scannell)",
        "Prayer Before Birth (Louis MacNeice)",
      ],
      answerIndex: 2,
      hints: [
        "Single unbroken 27-line stanza written in second-person imperatives.",
        "Named after a childhood game.",
      ],
      explanation:
        "Vernon Scannell's ***Hide and Seek*** turns a child's game in a *\"salty dark\"* toolshed into an allegory of isolation and abandonment.",
    },
    {
      id: "lit-poetry-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "unseen-modern-poetry-method",
      question:
        "What structural term names running a phrase or clause across the end of a poetic line into the next line without terminal punctuation?",
      answer: {
        type: "text",
        accept: ["enjambment"],
        display: "enjambment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "Caesura is an internal pause *within* a line; spilling across a line-end without punctuation is **enjambment**.",
        },
      ],
      hints: [
        "From French *enjamber* ('to stride over').",
        "Contrasts with *end-stopped* lines and *caesura*.",
      ],
      solution: [
        "**Enjambment** propels syntax across line or stanza boundaries — used to enact overflow, yearning or loss of restraint.",
      ],
    },
    {
      id: "lit-poetry-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "anthology-comparative-thesis",
      question:
        "On Pearson Edexcel 4ET1 Paper 1 Section A, why must you **avoid** writing paragraphs of poet biography (e.g. Keats's tuberculosis or Browning's marriage)?",
      options: [
        "Because biographies are tested in Section C instead.",
        "Because poets never draw on personal life.",
        "Because only Unseen Poetry tests biography.",
        "Because AO4 context carries zero marks anywhere in Paper 1 Section A — only AO2 (craft) and AO3 (comparison) are credited.",
      ],
      answerIndex: 3,
      hints: [
        "Check the Assessment Objectives for Paper 1 Section A.",
        "Save AO4 context strictly for *Of Mice and Men* (Paper 1B) and *Macbeth* (Paper 2B)!",
      ],
      explanation:
        "Edexcel 4ET1 Section A awards **0 marks for AO4**: spend every minute analysing **AO2** (language, form, structure) and **AO3** (comparative synthesis).",
    },
    {
      id: "lit-poetry-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "unseen-modern-poetry-method",
      question:
        "What Italian term (5 letters) names the pivotal structural or tonal **turn** in a sonnet or modern lyric poem?",
      answer: {
        type: "text",
        accept: ["volta"],
        display: "volta",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura", "enjambment", "climax", "stanza"] },
          feedback:
            "Caesura is an internal pause and enjambment runs across a line-end; a poem's tonal or argumentative turn is the **volta**.",
        },
      ],
      hints: [
        "Italian word meaning 'turn'.",
        "Often signalled by 'Yet', 'But', 'Now', or a sudden shift in tense or stanza length.",
      ],
      solution: [
        "The **volta** marks the emotional or conceptual turning point of a poem.",
      ],
      commonError:
        "Confusing the macro-structural **volta** (tonal/argumentative turn, e.g. line 9 of *Remember*) with line-level *caesura* or *enjambment*.",
    },
  ],
  papers: [
    {
      id: "lit-poetry-p1",
      title: "Poetry Practice Paper 1: Anthology Identification, Poetic Form & Comparative Paragraphs",
      questions: [
        {
          id: "lit-poetry-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "conflict-suffering-blessing-poems",
          question:
            "Name the Anthology poem by **Louis MacNeice** in which an unborn speaker pleads: *\"I am not yet born; O hear me.\"*",
          answer: {
            type: "text",
            accept: ["Prayer Before Birth"],
            display: "Prayer Before Birth",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Blessing", "Remember", "If"] },
              feedback:
                "*Blessing* is by Imtiaz Dharker; Louis MacNeice's unborn speaker pleads in ***Prayer Before Birth***.",
            },
          ],
          hints: [
            "Three-word title describing a plea spoken before entering the world.",
          ],
          solution: [
            "***Prayer Before Birth*** by Louis MacNeice — cascading free-verse stanzas ending *\"Otherwise kill me.\"*",
          ],
          commonError:
            "Writing 'A Prayer Before Birth' with an added article or misquoting the opening refrain (*'I am not yet born'*) as the poem's title.",
        },
        {
          id: "lit-poetry-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "conflict-suffering-blessing-poems",
          question:
            "Which Romantic poet wrote ***The Tyger*** (*\"Tyger Tyger, burning bright, / In the forests of the night\"*)?",
          answer: {
            type: "text",
            accept: ["William Blake", "Blake"],
            display: "William Blake",
          },
          traps: [
            {
              spec: { type: "text", accept: ["John Keats", "Keats"] },
              feedback: "Keats wrote *La Belle Dame sans Merci*; ***The Tyger*** (from *Songs of Experience*, 1794) is by **William Blake**.",
            },
          ],
          hints: [
            "Author and printmaker of *Songs of Innocence and of Experience*.",
          ],
          solution: [
            "**William Blake** wrote ***The Tyger*** in six hammering trochaic tetrameter quatrains.",
          ],
        },
        {
          id: "lit-poetry-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Name the Anthology poem by **John Keats** that opens: *\"O what can ail thee, knight-at-arms, / Alone and palely loitering?\"*",
          answer: {
            type: "text",
            accept: ["La Belle Dame sans Merci", "La Belle Dame"],
            display: "La Belle Dame sans Merci",
          },
          traps: [
            {
              spec: { type: "text", accept: ["My Last Duchess", "Remember"] },
              feedback:
                "*My Last Duchess* is by Robert Browning; John Keats's medieval Romantic ballad is ***La Belle Dame sans Merci***.",
            },
          ],
          hints: [
            "French title translating to 'The Beautiful Lady without Mercy'.",
            "Five words starting *La Belle...*",
          ],
          solution: [
            "***La Belle Dame sans Merci*** by John Keats — twelve `ABCB` Romantic ballad quatrains with a truncated fourth line.",
          ],
          commonError:
            "Misspelling *Merci* with an English 'y' ('Mercy') or confusing Keats's fatal fairy lady with Browning's *My Last Duchess*.",
        },
        {
          id: "lit-poetry-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "power-voice-identity-poems",
          question:
            "Which poet wrote ***Half-past Two*** (*\"Once upon a schooltime / He did Something Very Wrong\"*)?",
          answer: {
            type: "text",
            accept: ["U.A. Fanthorpe", "UA Fanthorpe", "Fanthorpe", "Ursula Fanthorpe"],
            display: "U.A. Fanthorpe",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Vernon Scannell", "Scannell", "D.H. Lawrence", "Carol Ann Duffy"] },
              feedback:
                "Scannell wrote *Hide and Seek* and Lawrence wrote *Piano*; ***Half-past Two*** is by **U.A. Fanthorpe**.",
            },
          ],
          hints: [
            "British poet known by two initials (*U.A.*) + surname starting with *F-*.",
            "Former schoolteacher who invented compound child-time words like 'Gettinguptime'.",
          ],
          solution: [
            "**U.A. Fanthorpe** wrote ***Half-past Two*** in eleven free-verse tercets.",
          ],
          commonError:
            "Confusing **U.A. Fanthorpe** (*Half-past Two*) with **Vernon Scannell** (*Hide and Seek*) because both Anthology poems dramatise childhood isolation.",
        },
        {
          id: "lit-poetry-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Name the Anthology poem by **Alice Walker** containing the lines: *\"He cooked like a person / dancing / in a yoga meditation\"*.",
          answer: {
            type: "text",
            accept: ["Poem at Thirty-Nine", "Poem at 39"],
            display: "Poem at Thirty-Nine",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Piano"] },
              feedback: "*Piano* is D.H. Lawrence's poem about his mother; Alice Walker's poem remembering her father is ***Poem at Thirty-Nine***.",
            },
          ],
          hints: [
            "Four-word title naming an age just before forty.",
            "Opens with the refrain 'How I miss my father.'",
          ],
          solution: [
            "***Poem at Thirty-Nine*** by Alice Walker — celebrating her father's practical and creative legacy.",
          ],
        },
        {
          id: "lit-poetry-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Which poet wrote ***Piano*** (*\"Softly, in the dusk, a woman is singing to me; / Taking me back down the vista of years\"*)?",
          answer: {
            type: "text",
            accept: ["D.H. Lawrence", "DH Lawrence", "Lawrence"],
            display: "D.H. Lawrence",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Alice Walker", "Walker", "U.A. Fanthorpe", "Rudyard Kipling"] },
              feedback:
                "Alice Walker wrote *Poem at Thirty-Nine* and Fanthorpe uses two initials too (*U.A.*), whereas ***Piano*** is by **D.H. Lawrence**.",
            },
          ],
          hints: [
            "Early twentieth-century English writer known by two initials (*D.H.*).",
            "Surname starts with *L-* (three AABB quatrains).",
          ],
          solution: [
            "**D.H. Lawrence** wrote ***Piano*** in three `AABB` rhyming quatrains.",
          ],
          commonError:
            "Mixing up initialled poets (**D.H. Lawrence** vs **U.A. Fanthorpe**) or confusing Lawrence's nostalgia for his mother in *Piano* with Alice Walker's *Poem at Thirty-Nine*.",
        },
        {
          id: "lit-poetry-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "unseen-modern-poetry-method",
          question:
            "What structural term names an internal pause **inside** a line of verse caused by punctuation (such as the full stops in *\"Belfast. Beirut. Phnom Penh.\"* or dashes in *My Last Duchess*)?",
          answer: {
            type: "text",
            accept: ["caesura", "caesurae"],
            display: "caesura",
          },
          traps: [
            {
              spec: { type: "text", accept: ["enjambment"] },
              feedback: "Enjambment runs *over* a line-end; an internal pause mid-line is **caesura**.",
            },
          ],
          hints: [
            "Latin term meaning 'cutting' — contrasts directly with enjambment.",
            "Seven-letter poetic term starting with *c-*.",
          ],
          solution: [
            "**Caesura** interrupts rhythmic momentum mid-line to enact shock, hesitation or solemn memorial.",
          ],
        },
        {
          id: "lit-poetry-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Name the traditional narrative poetic **form** used by John Keats in ***La Belle Dame sans Merci*** (12 `ABCB` quatrains telling a folk-like story of love and enchantment).",
          answer: {
            type: "text",
            accept: ["ballad", "literary ballad", "Romantic ballad"],
            display: "ballad",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sonnet"] },
              feedback: "A sonnet is 14 lines; a folk-derived narrative poem in `ABCB` quatrains is a **ballad**.",
            },
          ],
          hints: [
            "Medieval folk song/story form revived by Romantic poets.",
            "Six-letter genre word starting with *b-*.",
          ],
          solution: [
            "Keats uses a Romantic literary **ballad**, truncating every fourth line (*\"And no birds sing\"*) to enact depletion.",
          ],
        },
        {
          id: "lit-poetry-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "power-voice-identity-poems",
          question:
            "In ***If—***, ***Prayer Before Birth*** and ***Half-past Two***, repeating the exact same opening phrase across consecutive clauses or lines (*\"If you can...\"*, *\"I am not yet born...\"*, *\"Into the...\"*) is called what rhetorical device?",
          answer: {
            type: "text",
            accept: ["anaphora"],
            display: "anaphora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration"] },
              feedback: "Alliteration repeats initial consonant sounds; repeating whole words/phrases at the start of clauses is **anaphora**.",
            },
          ],
          hints: [
            "Contrasts with *epiphora/epistrophe* (repeating at the *end* of clauses).",
            "Greek rhetorical term starting with *ana-*.",
          ],
          solution: [
            "**Anaphora** builds cumulative rhythmic momentum, conditional discipline (*If—*) or liturgical urgency (*Prayer Before Birth*).",
          ],
        },
        {
          id: "lit-poetry-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Complete the famous opening line of William Shakespeare's ***Sonnet 116***:\n\n> *\"Let me not to the marriage of true _____ / Admit impediments.\"* (One plural word)",
          answer: {
            type: "text",
            accept: ["minds", "mind"],
            display: "minds",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hearts", "souls"] },
              feedback: "Shakespeare specifically elevates intellectual and spiritual union: 'the marriage of true **minds**'.",
            },
          ],
          hints: [
            "Shakespeare celebrates intellectual and spiritual constancy rather than bodily attraction.",
            "Rhymes with 'finds' in line 3 ('Which alters when it alteration finds').",
          ],
          solution: [
            "*\"Let me not to the marriage of true **minds**\"* — grounding love in spiritual/intellectual constancy rather than fleeting physical beauty.",
          ],
        },
        {
          id: "lit-poetry-p1-q11",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **D.H. Lawrence** in ***Piano*** and **Alice Walker** in ***Poem at Thirty-Nine*** present **adult memories of a parent**:\n\n> *PIANO: \"In spite of myself, the insidious mastery of song / Betrays me back... my manhood is cast / Down in the flood of remembrance, I weep like a child for the past.\"*\n> *POEM AT THIRTY-NINE: \"How I miss my father! / He cooked like a person / dancing / in a yoga meditation... Now I look and cook just like him\"*\n\nWrite a woven Grade-9 comparative paragraph (**AO2 + AO3**, zero biography!). [4 marks]",
          markScheme: [
            {
              point: "Woven AO3 comparative thesis: shared parental nostalgia vs divergent effect (involuntary regression vs healing adult autonomy).",
              keywords: ["whereas", "conversely", "while", "regressive", "regression", "healing", "autonomy", "empowerment"],
            },
            {
              point: "AO2 analysis of Piano's form/rhythm (rolling AABB couplets) and diction of ambush ('insidious', 'flood', 'simile').",
              keywords: ["couplets", "aabb", "quatrains", "reluctant", "overwhelmed", "ambush", "stoicism", "simile"],
            },
            {
              point: "AO2 analysis of Poem at Thirty-Nine's relaxed free verse, punctuation volta (!), and peaceful culinary/meditative simile.",
              keywords: ["free verse", "enjambment", "exclamation", "volta", "culinary", "peaceful", "serenity"],
            },
            {
              point: "Sustained AO3 synthesis comparing how the past defeats Lawrence's present self yet enriches Walker's.",
              keywords: ["identity", "present", "inherits", "legacy", "paralyses", "integrates", "selfhood"],
            },
          ],
          modelAnswer:
            "**While** both speakers revisit a cherished parent across time, Lawrence frames nostalgia as an overwhelming **regression**, **whereas** Walker transforms memory into **healing** adult **autonomy**. Driven by surging `AABB` **couplets**, Lawrence's lexicon of stealthy **ambush** strips away masculine **stoicism**, culminating in a defeated **simile** where the past drowns his **present** poise. **Conversely**, Walker's slender **free verse** and **enjambment** enact liberating ease: pivoting at her joyful **exclamation** **volta**, her peaceful **culinary** imagery shows how she actively **integrates** her father's generous **legacy** into independent **selfhood**.",
          hints: [
            "Open with a 'While both... whereas...' comparative thesis.",
            "Contrast Lawrence's rolling AABB couplets and reluctant verbs against Walker's open free verse and exclamation-mark turn.",
            "Synthesise the difference: drowned present identity vs enriched adult selfhood.",
          ],
        },
        {
          id: "lit-poetry-p1-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **Carol Ann Duffy** in ***War Photographer*** and **Louis MacNeice** in ***Prayer Before Birth*** use **stanza form, structure and language** to confront **human cruelty**:\n\n> *WAR PHOTOGRAPHER: \"spools of suffering set out in ordered rows... Belfast. Beirut. Phnom Penh. All flesh is grass.\"*\n> *PRAYER BEFORE BIRTH: \"I am not yet born; O hear me... Let them not make me a stone and let them not spill me. / Otherwise kill me.\"*\n\nWrite a woven comparative paragraph (**AO2 + AO3**). [4 marks]",
          markScheme: [
            {
              point: "AO3 comparative thesis contrasting post-conflict containment/apathy (Duffy) against pre-natal dread/conditioning (MacNeice).",
              keywords: ["whereas", "conversely", "while", "trauma", "dread", "dehumanisation", "apathy"],
            },
            {
              point: "AO2 analysis of Duffy's rigid ABBCDD sestets, sibilance, and shutter-like caesurae.",
              keywords: ["sestets", "abbcdd", "regular", "sibilance", "caesura", "caesurae", "containment", "order"],
            },
            {
              point: "AO2 analysis of MacNeice's cascading/jagged free verse, liturgical anaphora, and stark 2-line ultimatum.",
              keywords: ["free verse", "cascading", "jagged", "anaphora", "ultimatum", "monologue", "petrification"],
            },
            {
              point: "AO3 method comparison explaining why opposite stanza geometries suit each persona's position.",
              keywords: ["geometry", "silhouette", "structure", "form", "control", "panic", "contrast"],
            },
          ],
          modelAnswer:
            "**While** both poets indict systemic brutality, their **stanza** **geometry** works in sharp **contrast**: Duffy imposes strict **containment** on past **trauma**, **whereas** MacNeice enacts encroaching pre-natal **panic**. Duffy locks atrocities inside four **regular** `ABBCDD` **sestets**, using hushed **sibilance** and abrupt full-stop **caesurae** as a psychological ritual against public **apathy**. **Conversely**, MacNeice's dramatic **monologue** cascades down **jagged** **free verse** steps driven by liturgical **anaphora**, resisting emotional **petrification** and **dehumanisation** before snapping shut in a stark two-line **ultimatum**.",
          hints: [
            "Compare page silhouettes right away: 4 rigid ABBCDD sestets vs jagged cascading steps + 2-line coda!",
            "Zoom onto Duffy's sibilance & caesurae vs MacNeice's anaphora & stone/spill metaphors.",
            "Explain *why* post-war darkroom control differs from unborn panic.",
          ],
        },
        {
          id: "lit-poetry-p1-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **William Shakespeare** in ***Sonnet 116*** and **Christina Rossetti** in ***Remember*** use **sonnet form and imagery** to explore **devoted love**:\n\n> *SONNET 116: \"O no! it is an ever-fixed mark / That looks on tempests and is never shaken... Love's not Time's fool\"*\n> *REMEMBER: \"Remember me when I am gone away... Yet if you should forget me for a while... Better by far you should forget and smile\"*\n\nWrite a woven comparative paragraph (**AO2 + AO3**). [4 marks]",
          markScheme: [
            {
              point: "AO3 thesis contrasting Shakespeare's unyielding eternal ideal against Rossetti's tender, selfless release.",
              keywords: ["whereas", "conversely", "while", "steadfast", "immutable", "selfless", "sacrificial", "release"],
            },
            {
              point: "AO2 analysis of Shakespearean sonnet form (3 quatrains + couplet) and navigational/Time imagery.",
              keywords: ["shakespearean", "quatrains", "couplet", "navigational", "lighthouse", "personification", "reaper"],
            },
            {
              point: "AO2 analysis of Petrarchan sonnet form (octave + sestet), line-9 volta, and closing antithesis.",
              keywords: ["petrarchan", "octave", "sestet", "volta", "antithesis", "euphemism", "anaphora"],
            },
            {
              point: "AO3 evaluation showing how each sonnet architecture mirrors public proclamation vs intimate revision.",
              keywords: ["architecture", "proclamation", "intimate", "ego", "grief", "happiness", "permanence"],
            },
          ],
          modelAnswer:
            "**While** both poets utilise fourteen-line **architecture** to test devotion against mortality, Shakespeare proclaims **immutable** **permanence**, **whereas** Rossetti prioritizes **selfless** **release**. Across three **Shakespearean** **quatrains** and a wager **couplet**, declarative **navigational** metaphors and defiant **personification** of Time's reaper elevate love into an unshakeable public **proclamation**. **Conversely**, Rossetti's **intimate** **Petrarchan** form splits between an anxious **octave** of insistent **anaphora** and a compassionate **sestet**: pivoting at the line-9 **volta**, her poised **antithesis** surrenders **ego** so her beloved's **happiness** outweighs sorrowful **grief**.",
          hints: [
            "Contrast the two sonnet structures directly: Shakespearean (3 quatrains + GG couplet) vs Petrarchan (octave + line-9 volta + sestet).",
            "Unpack Shakespeare's lighthouse/star/reaper imagery vs Rossetti's anaphora and 'forget/remember' antithesis.",
            "Show how form enacts unchanging public ideal vs tender emotional revision.",
          ],
        },
        {
          id: "lit-poetry-p1-q14",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **Robert Browning** in ***My Last Duchess*** and **John Keats** in ***La Belle Dame sans Merci*** present **destructive power in relationships**:\n\n> *MY LAST DUCHESS: \"none puts by / The curtain I have drawn for you, but I... I gave commands; / Then all smiles stopped together.\"*\n> *LA BELLE DAME SANS MERCI: \"O what can ail thee, knight-at-arms, / Alone and palely loitering? / The sedge has wither'd from the lake, / And no birds sing.\"*\n\nWrite a woven comparative paragraph (**AO2 + AO3**). [4 marks]",
          markScheme: [
            {
              point: "AO3 thesis contrasting patriarchal autocratic murder/possession (Browning) against supernatural romantic thralldom (Keats).",
              keywords: ["whereas", "conversely", "while", "patriarchal", "possession", "objectification", "thralldom", "entrapment"],
            },
            {
              point: "AO2 analysis of Browning's dramatic monologue, enjambed couplets, caesurae and chilling euphemism.",
              keywords: ["dramatic monologue", "couplets", "enjambment", "caesura", "euphemism", "sibilance"],
            },
            {
              point: "AO2 analysis of Keats's ballad quatrains, truncated/shortened 4th line, pathetic fallacy and cyclical loop.",
              keywords: ["ballad", "truncated", "dimeter", "pathetic fallacy", "cyclical", "depletion", "pallor"],
            },
            {
              point: "AO3 comparison of agency: the Duke silences his victim into art, whereas Keats's knight is drained of agency.",
              keywords: ["agency", "silences", "victim", "drained", "paralysis", "commodity"],
            },
          ],
          modelAnswer:
            "**While** both poems expose lethal relational asymmetry, Browning indicts **patriarchal** **objectification**, **whereas** Keats mourns supernatural **thralldom**. In Browning's **dramatic monologue**, restless **enjambment** spills across heroic **couplets**, while clipped **caesura** and sibilant **euphemism** reveal a tyrant who **silences** female vitality into a painted **commodity**. **Conversely**, Keats's Romantic **ballad** strips its male speaker of **agency**: bleak **pathetic fallacy**, **cyclical** framing and a **truncated** fourth **dimeter** line enact spiritual **depletion**, leaving the knight **drained** in eternal **paralysis**.",
          hints: [
            "Who holds the destructive power in each poem (the aristocratic Duke vs the elusive faery lady)?",
            "Contrast Browning's enjambed couplets & euphemism against Keats's truncated 4th ballad line & pathetic fallacy.",
            "Compare the endings: bronze Neptune commodity vs cyclical 'palely loitering' paralysis.",
          ],
        },
        {
          id: "lit-poetry-p1-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "unseen-modern-poetry-method",
          question:
            "Read this **Unseen Modern Poem** miniature titled ***First Term Away***:\n\n> *Mother folded tissue round each plate.*\n> *For weeks the kettle sang to one mug only;*\n> *October rain kept tapping at the latch*\n> *like someone coming home without a key.*\n> *\n> *By December, silence fits the kitchen.*\n\nUsing the **4-Pass Unseen Framework**, analyse how the poet uses **language, form and structure (AO2)** to present a parent adjusting to an empty nest. [4 marks]",
          markScheme: [
            {
              point: "Identifies the emotional trajectory / volta from lonely anticipation (quatrain) to quiet acceptance (isolated final line).",
              keywords: ["volta", "shift", "anticipation", "adjusting", "acceptance", "trajectory", "absence"],
            },
            {
              point: "Analyses form & visual layout: breaking the 4-line stanza to isolate the single closing line in white space.",
              keywords: ["quatrain", "isolated", "single-line", "stanza", "white space", "solitude", "layout"],
            },
            {
              point: "Analyses personification/auditory imagery ('kettle', 'tapping') and poignant simile of the absent child.",
              keywords: ["personification", "simile", "auditory", "domestic", "pathetic fallacy", "longing"],
            },
            {
              point: "Analyses tense shift (past -> present 'fits') and sartorial/spatial verb showing silence becoming habitable.",
              keywords: ["present tense", "tense", "verb", "habitable", "accustomed", "familiar"],
            },
          ],
          modelAnswer:
            "The poet charts an emotional **trajectory** from aching **longing** to quiet **acceptance** of domestic **absence**. Structurally, a four-line **quatrain** breaks across **white space** into an **isolated** **single-line** coda, visually enacting maternal **solitude** after the **volta**. In the opening stanza, **domestic** **personification** and **auditory** weather details culminate in a tender **simile** projecting the wished-for child onto autumn rain. Shifting into the **present tense** in December, the precise **verb** shows emptiness growing **familiar** and **habitable** rather than raw.",
          hints: [
            "Look at the page silhouette first: 4-line quatrain + 1 isolated final line!",
            "Unpack the domestic personification ('kettle sang to one mug') and rain simile.",
            "Notice the tense shift from past ('folded', 'kept') to present ('fits') in December.",
          ],
        },
      ],
    },
    {
      id: "lit-poetry-p2",
      title: "Poetry Practice Paper 2: Full 16-Poem Mastery & Unseen Close Craft",
      questions: [
        {
          id: "lit-poetry-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "power-voice-identity-poems",
          question:
            "Name the poet who wrote ***Search For My Tongue*** (*\"Every time I think I've forgotten, / I think I've lost the mother tongue, / it blossoms out of my mouth\"*).",
          answer: {
            type: "text",
            accept: ["Sujata Bhatt", "Bhatt"],
            display: "Sujata Bhatt",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Imtiaz Dharker", "Dharker"] },
              feedback: "Imtiaz Dharker wrote *Blessing*; ***Search For My Tongue*** is by **Sujata Bhatt**.",
            },
          ],
          hints: [
            "Indian-born bilingual poet writing in English and Gujarati (surname starts with *Bh-*).",
          ],
          solution: [
            "**Sujata Bhatt** wrote ***Search For My Tongue***, combining code-switching with an extended botanical metaphor.",
          ],
        },
        {
          id: "lit-poetry-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "conflict-suffering-blessing-poems",
          question:
            "Name the poet who wrote ***Blessing*** (*\"The skin cracks like a pod. / There never is enough water.\"*).",
          answer: {
            type: "text",
            accept: ["Imtiaz Dharker", "Dharker"],
            display: "Imtiaz Dharker",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Sujata Bhatt", "Bhatt"] },
              feedback: "Sujata Bhatt wrote *Search For My Tongue*; ***Blessing*** is by **Imtiaz Dharker**.",
            },
          ],
          hints: [
            "Poet, artist and filmmaker associated with Pakistan, Mumbai and Britain (surname starts with *Dh-*).",
          ],
          solution: [
            "**Imtiaz Dharker** wrote ***Blessing***, expanding stanza size as the municipal water pipe bursts.",
          ],
        },
        {
          id: "lit-poetry-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Which poet wrote ***Hide and Seek*** (*\"Call out. Call loud: 'I'm ready! Come and find me!'\"*)?",
          answer: {
            type: "text",
            accept: ["Vernon Scannell", "Scannell"],
            display: "Vernon Scannell",
          },
          traps: [
            {
              spec: { type: "text", accept: ["U.A. Fanthorpe", "Fanthorpe", "Louis MacNeice"] },
              feedback:
                "Fanthorpe wrote *Half-past Two* and MacNeice wrote *Prayer Before Birth*; ***Hide and Seek*** is by **Vernon Scannell**.",
            },
          ],
          hints: [
            "Twentieth-century British poet (initials *V.S.*).",
            "Surname starts with *Sc-*.",
          ],
          solution: [
            "**Vernon Scannell** wrote ***Hide and Seek*** as a single 27-line claustrophobic stanza.",
          ],
          commonError:
            "Attributing ***Hide and Seek*** to **U.A. Fanthorpe** (*Half-past Two*) because both Anthology poems centre on a child left alone.",
        },
        {
          id: "lit-poetry-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "love-memory-loss-poems",
          question:
            "Which Victorian poet wrote the Petrarchan sonnet ***Remember*** (*\"Remember me when I am gone away\"*)?",
          answer: {
            type: "text",
            accept: ["Christina Rossetti", "Rossetti"],
            display: "Christina Rossetti",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Elizabeth Barrett Browning", "Robert Browning", "Dante Gabriel Rossetti"] },
              feedback:
                "Robert Browning wrote *My Last Duchess*, and Dante Gabriel was her brother; the Anthology sonnet ***Remember*** is by **Christina Rossetti**.",
            },
          ],
          hints: [
            "Pre-Raphaelite Victorian poet (first name *Christina*).",
            "Italian-heritage surname ending in *-etti*.",
          ],
          solution: [
            "**Christina Rossetti** wrote ***Remember***, pivoting at line 9 from pleading to selfless release.",
          ],
          commonError:
            "Confusing **Christina Rossetti** with fellow Victorian sonneteer Elizabeth Barrett Browning (or her brother Dante Gabriel Rossetti), or misspelling *Rossetti* with one 's' or one 't'.",
        },
        {
          id: "lit-poetry-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "power-voice-identity-poems",
          question:
            "In ***My Last Duchess***, complete the Duke's chilling euphemism for eliminating his wife:\n\n> *\"This grew; I gave commands; / Then all _____ stopped together.\"* (One plural noun)",
          answer: {
            type: "text",
            accept: ["smiles", "smile"],
            display: "smiles",
          },
          traps: [
            {
              spec: { type: "text", accept: ["blushes", "laughs", "breaths", "words"] },
              feedback:
                "Earlier the Duke resents 'that spot of joy' (her blush), but his chilling sibilant euphemism is 'Then all **smiles** stopped together.'",
            },
          ],
          hints: [
            "What warm facial expression annoyed the jealous Duke whenever she greeted others?",
            "Sibilant plural noun starting with *sm-*.",
          ],
          solution: [
            "*\"Then all **smiles** stopped together\"* — sibilant euphemism reducing murder to silencing joy.",
          ],
          commonError:
            "Writing 'blushes' (from the earlier 'spot of joy') or 'laughs' instead of Browning's exact sibilant plural noun **'smiles'**.",
        },
        {
          id: "lit-poetry-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "conflict-suffering-blessing-poems",
          question:
            "In ***War Photographer***, complete Duffy's biblical metaphor following the litany of war zones:\n\n> *\"Belfast. Beirut. Phnom Penh. All flesh is _____.\"* (One noun)",
          answer: {
            type: "text",
            accept: ["grass"],
            display: "grass",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dust", "ash", "weak", "blood"] },
              feedback:
                "'Dust to dust' is the burial service, whereas Duffy quotes Isaiah 40:6 (rhyming with 'Mass'): 'All flesh is **grass**.'",
            },
          ],
          hints: [
            "Biblical allusion to Isaiah 40:6 comparing human mortality to meadow vegetation.",
            "Rhymes with 'intone a Mass' two lines earlier.",
          ],
          solution: [
            "*\"All flesh is **grass**\"* — biblical allusion emphasising fragile, universal human mortality.",
          ],
          commonError:
            "Confusing Isaiah's metaphor (*'All flesh is **grass**'*, rhyming with *'Mass'*) with the funeral phrase 'dust' or the idiom 'flesh is weak'.",
        },
        {
          id: "lit-poetry-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "power-voice-identity-poems",
          question:
            "What term names a **three-line stanza** — eleven of which form U.A. Fanthorpe's ***Half-past Two***?",
          answer: {
            type: "text",
            accept: ["tercet", "tercets"],
            display: "tercet",
          },
          traps: [
            {
              spec: { type: "text", accept: ["quatrain", "sestet"] },
              feedback: "A quatrain has 4 lines and a sestet has 6 lines; a 3-line stanza is a **tercet**.",
            },
          ],
          hints: [
            "From Italian/Latin root for 'three' (*ter-*).",
            "Six-letter stanza term ending in *-cet*.",
          ],
          solution: [
            "A **tercet** is a 3-line stanza (contrasting 4-line *quatrains*, 6-line *sestets* and 8-line *octaves*).",
          ],
        },
        {
          id: "lit-poetry-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "conflict-suffering-blessing-poems",
          question:
            "What term names a **six-line stanza** — four of which (`ABBCDD`) structure Duffy's ***War Photographer*** (and one of which closes a Petrarchan sonnet)?",
          answer: {
            type: "text",
            accept: ["sestet", "sestets"],
            display: "sestet",
          },
          traps: [
            {
              spec: { type: "text", accept: ["octave", "quatrain"] },
              feedback: "An octave has 8 lines and a quatrain has 4 lines; a 6-line stanza is a **sestet**.",
            },
          ],
          hints: [
            "From Italian/Latin root for 'six' (*sest-*).",
            "Pairs with an 8-line *octave* in a Petrarchan sonnet.",
          ],
          solution: [
            "A **sestet** is a 6-line stanza — used with rigid `ABBCDD` regularity in *War Photographer*.",
          ],
        },
        {
          id: "lit-poetry-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "conflict-suffering-blessing-poems",
          question:
            "In ***The Tyger***, William Blake asks: *\"Did he who made the _____ make thee?\"* Name the gentle, innocent creature from Blake's *Songs of Innocence* that contrasts the Tyger.",
          answer: {
            type: "text",
            accept: ["Lamb", "lamb"],
            display: "Lamb",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dove", "lion", "child", "sheep"] },
              feedback:
                "Blake specifically names the companion creature from *Songs of Innocence*: 'Did he who made the **Lamb** make thee?'",
            },
          ],
          hints: [
            "Companion poem in Blake's *Songs of Innocence* ('Little _____, who made thee?').",
            "Also symbolises Christ (*Agnus Dei*) in Christian tradition.",
          ],
          solution: [
            "The **Lamb** (*\"Did he who made the Lamb make thee?\"*) — confronting the theological paradox of innocence and ferocity sharing one Creator.",
          ],
          commonError:
            "Writing 'sheep' or 'dove' instead of Blake's capitalised companion symbol, the **Lamb** (*Songs of Innocence*).",
        },
        {
          id: "lit-poetry-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "anthology-comparative-thesis",
          question:
            "How many poems in total make up the **Pearson Edexcel IGCSE (4ET1) Poetry Anthology** (Part 3) collection?",
          answer: {
            type: "number",
            value: 16,
          },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "AQA GCSE clusters have 15 poems, whereas Pearson Edexcel 4ET1 Anthology Part 3 has **16** set poems.",
            },
            {
              spec: { type: "number", value: 14 },
              feedback: "Don't forget John Agard's *Half-caste* and Dylan Thomas's *Do not go gentle into that good night* — Pearson Edexcel 4ET1 Anthology Part 3 has **16** set poems in total!",
            },
          ],
          hints: [
            "Count the complete Part 3 Poetry Anthology list from *If—* through *Remember* (including *Half-caste* and *Do not go gentle into that good night*).",
            "One more than an AQA 15-poem cluster!",
          ],
          solution: [
            "There are exactly **16** set poems in the Pearson Edexcel 4ET1 Literature Anthology (Part 3): *If—*, *Prayer Before Birth*, *Blessing*, *Search For My Tongue*, *Half-past Two*, *Piano*, *Hide and Seek*, *Sonnet 116*, *La Belle Dame sans Merci*, *Poem at Thirty-Nine*, *War Photographer*, *The Tyger*, *My Last Duchess*, *Half-caste*, *Do not go gentle into that good night*, and *Remember*.",
          ],
        },
        {
          id: "lit-poetry-p2-q11",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **U.A. Fanthorpe** in ***Half-past Two*** and **Vernon Scannell** in ***Hide and Seek*** present **childhood experiences of time and isolation**:\n\n> *HALF-PAST TWO: \"Into the smell of old chrysanthemums on Her desk, / Into the silent noise his hangnail made... He escaped into the clockless land for ever\"*\n> *HIDE AND SEEK: \"Don't breathe. Don't move. Stay dumb... The darkening garden watches. Nothing stirs... But where are they who sought you?\"*\n\nWrite a woven Grade-9 comparative paragraph (**AO2 + AO3**). [4 marks]",
          markScheme: [
            {
              point: "AO3 thesis: both inhabit heightened child sensory consciousness, yet diverge between transcendent wonder (Fanthorpe) and bleak abandonment (Scannell).",
              keywords: ["whereas", "conversely", "while", "transcendence", "liberation", "wonder", "abandonment", "isolation"],
            },
            {
              point: "AO2 analysis of Half-past Two's airy tercets, anaphora ('Into'), compound words or oxymoron/synaesthesia.",
              keywords: ["tercets", "anaphora", "oxymoron", "synaesthesia", "compound", "sensory", "imaginative"],
            },
            {
              point: "AO2 analysis of Hide and Seek's single claustrophobic stanza block, clipped imperatives, pathetic fallacy and closing question.",
              keywords: ["single stanza", "claustrophobic", "imperatives", "pathetic fallacy", "rhetorical question", "personification"],
            },
            {
              point: "AO3 synthesis comparing how solitude frees Fanthorpe's boy from institutional clocks yet traps Scannell's speaker.",
              keywords: ["solitude", "institutional", "disillusionment", "adulthood", "frees", "betrayal"],
            },
          ],
          modelAnswer:
            "**While** both poets immerse the reader in acute childhood **sensory** perception, Fanthorpe turns **solitude** into **imaginative** **liberation**, **whereas** Scannell curdles play into bleak **abandonment**. Across airy free-verse **tercets**, Fanthorpe's hypnotic **anaphora** and **oxymoron** dissolve **institutional** authority into timeless **wonder**. **Conversely**, Scannell's unbroken **claustrophobic** **single stanza** traps the listener through clipped second-person **imperatives**, before ominous **pathetic fallacy** and an unanswered **rhetorical question** expose adult **disillusionment**.",
          hints: [
            "Compare open 3-line tercets against Scannell's dense 27-line block.",
            "Analyse Fanthorpe's 'Into the...' anaphora & oxymoron vs Scannell's imperatives & ominous personification.",
            "Contrast joyful escape from clock-time with lonely betrayal at nightfall.",
          ],
        },
        {
          id: "lit-poetry-p2-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **William Blake** in ***The Tyger*** and **Imtiaz Dharker** in ***Blessing*** use **form, rhythm and imagery** to convey **awe and wonder**:\n\n> *THE TYGER: \"What the hammer? what the chain, / In what furnace was thy brain?... Dare frame thy fearful symmetry?\"*\n> *BLESSING: \"Imagine the drip of it... the voice of a kindly god... silver crashes to the ground... as the blessing sings / over their small bones.\"*\n\nWrite a woven comparative paragraph (**AO2 + AO3**). [4 marks]",
          markScheme: [
            {
              point: "AO3 thesis: shared sacred/elemental awe vs divergent tone (terrifying sublime dread vs joyful communal grace).",
              keywords: ["whereas", "conversely", "while", "sublime", "dread", "terror", "communal", "grace", "benevolent"],
            },
            {
              point: "AO2 analysis of Blake's hammering trochaic tetrameter quatrains, blacksmith imagery, rhetorical questions and Could->Dare shift.",
              keywords: ["trochaic", "quatrains", "blacksmith", "industrial", "rhetorical questions", "oxymoron", "cyclical"],
            },
            {
              point: "AO2 analysis of Dharker's expanding free-verse stanzas, precious-metal/light metaphors ('liquid sun') and fragile ending.",
              keywords: ["free verse", "expanding", "irregular", "metaphor", "synaesthesia", "fragility", "poverty"],
            },
            {
              point: "AO3 comparison of divine relationship: distant inscrutable Creator of fire vs intimate nurturing deity in water.",
              keywords: ["creator", "divine", "fire", "water", "elemental", "nurturing", "inscrutable"],
            },
          ],
          modelAnswer:
            "**While** both poets invest **elemental** nature with **divine** wonder, Blake evokes **sublime** **dread** before fiery power, **whereas** Dharker celebrates **benevolent** **communal** **grace**. Driven by hammering **trochaic** **quatrains** and **industrial** **blacksmith** imagery, Blake's unanswered **rhetorical questions** and **cyclical** modal shift confront an **inscrutable** **Creator** of lethal **fire**. **Conversely**, Dharker's **irregular** **free verse** visibly swells as lifegiving **water** erupts: radiant **synaesthesia** and precious metaphors sanctify abundance while grounding joy in human **fragility**.",
          hints: [
            "Contrast elemental fire/dread (Blake) with elemental water/grace (Dharker).",
            "Compare Blake's symmetrical trochaic anvil quatrains against Dharker's expanding free-verse stanzas.",
            "Show how both link nature to God ('immortal hand' vs 'kindly god') with opposite emotional effects.",
          ],
        },
        {
          id: "lit-poetry-p2-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "anthology-comparative-thesis",
          question:
            "Compare how **Sujata Bhatt** in ***Search For My Tongue*** and **Rudyard Kipling** in ***If—*** use **structure and metaphor** to explore **personal identity and resilience**:\n\n> *SEARCH FOR MY TONGUE: \"rot and die in your mouth... it grows back, a stump of a shoot / grows longer, grows moist, grows strong veins... it blossoms out of my mouth.\"*\n> *IF—: \"If you can meet with Triumph and Disaster / And treat those two impostors just the same... you'll be a Man, my son!\"*\n\nWrite a woven comparative paragraph (**AO2 + AO3**). [4 marks]",
          markScheme: [
            {
              point: "AO3 thesis: both chart resilient selfhood, yet Bhatt celebrates organic bilingual reclamation whereas Kipling prescribes rational stoic self-control.",
              keywords: ["whereas", "conversely", "while", "bilingual", "cultural", "reclamation", "stoic", "stoicism", "restraint"],
            },
            {
              point: "AO2 analysis of Bhatt's 3-part code-switching (Gujarati script) and shift from visceral decay to botanical extended metaphor.",
              keywords: ["code-switching", "gujarati", "botanical", "extended metaphor", "visceral", "organic", "free verse"],
            },
            {
              point: "AO2 analysis of Kipling's single conditional periodic sentence, regular octaves, anaphora and personified antithesis.",
              keywords: ["conditional", "periodic", "octaves", "anaphora", "personification", "antithesis", "iambic"],
            },
            {
              point: "AO3 synthesis contrasting involuntary subconscious growth (dreams) with conscious willpower.",
              keywords: ["subconscious", "instinctive", "willpower", "disciplined", "assimilation", "paternal"],
            },
          ],
          modelAnswer:
            "**While** both poems chart resilient identity under pressure, Bhatt celebrates **instinctive** **bilingual** **reclamation**, **whereas** Kipling prescribes **disciplined** **stoic** **restraint**. Through **free verse** **code-switching** into **Gujarati** script, Bhatt pivots from **visceral** decay to a triumphant **botanical** **extended metaphor**, proving **cultural** roots flourish in the **subconscious**. **Conversely**, Kipling's **paternal** **octaves** sustain one **periodic** **conditional** sentence via **anaphora** and balanced **personification**, grounding maturity in conscious **willpower**.",
          hints: [
            "Contrast subconscious cultural/linguistic identity (Bhatt) with conscious moral willpower (Kipling).",
            "Compare Bhatt's free-verse code-switching + plant metaphor against Kipling's single conditional sentence + octaves.",
            "Weave both inside one cohesive paragraph.",
          ],
        },
        {
          id: "lit-poetry-p2-q14",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "unseen-modern-poetry-method",
          question:
            "Read this **Unseen Modern Poem** miniature titled ***Cartography***:\n\n> *Grandfather traced the Partition border*\n> *across our Formica kitchen table with spilled salt —*\n> *one sweep of his palm erased two rivers*\n> *and left white grains stinging his knuckles.*\n\nAnalyse how the poet uses **everyday domestic imagery, contrast and structure (AO2)** to convey historical trauma. [4 marks]",
          markScheme: [
            {
              point: "Identifies the juxtaposition between mundane domestic setting (kitchen table, salt) and vast geopolitical trauma.",
              keywords: ["juxtaposition", "juxtaposes", "domestic", "mundane", "geopolitical", "displacement", "trauma", "contrast"],
            },
            {
              point: "Analyses title ('Cartography') and em-dash caesura setting up the sudden erasure.",
              keywords: ["title", "caesura", "dash", "border", "arbitrary", "map"],
            },
            {
              point: "Analyses physical/tactile symbolism of salt (tears, preservation, stinging wounds) and sweeping gesture.",
              keywords: ["symbolism", "salt", "tears", "wound", "wounds", "pain", "tactile", "sensory"],
            },
            {
              point: "Analyses closing verb/participle ('stinging') showing history lingering painfully on the body.",
              keywords: ["participle", "verb", "lingering", "bodily", "embodied", "memory", "unresolved"],
            },
          ],
          modelAnswer:
            "Anchored by its formal **title**, the miniature **juxtaposes** a **mundane** **domestic** setting against vast **geopolitical** **trauma**. Following the line-2 em-dash **caesura**, a single casual sweep enacts how **arbitrary** **map** lines erased ancestral homelands overnight. Crucially, the **tactile** **symbolism** of **salt** evokes both **tears** and raw **wounds**: ending on the present **participle** leaves **unresolved** historical **pain** physically **embodied** on the grandfather's skin.",
          hints: [
            "Connect the formal title ('Cartography' = mapmaking) to the humble Formica table and spilled salt.",
            "Explain how the dash caesura pivots into sudden erasure.",
            "Unpack the connotations of salt ('tears', 'rubbing salt in a wound') in the closing image.",
          ],
        },
        {
          id: "lit-poetry-p2-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 5,
          guideRef: "unseen-modern-poetry-method",
          question:
            "Read this **Unseen Modern Poem** extract titled ***Aquarium at Dusk***:\n\n> *Behind thick glass the jellyfish pulse slow*\n> *translucent bells — unhurried, weightless, blind*\n> *to commuters rushing past the neon exit.*\n> *We press our palms against the cold partition,*\n> *envying creatures that survive without a spine.*\n\nWrite a Level-5 close analysis (**AO2**: form, structure, sound and figurative language) exploring how the speaker's observation turns inward. [5 marks]",
          markScheme: [
            {
              point: "Pinpoints the reflective volta (Stanza/lines 4–5 'We...') turning outward observation into human self-critique.",
              keywords: ["volta", "inward", "pivot", "pronoun", "collective", "self-critique", "reflection"],
            },
            {
              point: "Analyses barrier motif ('glass', 'partition') separating serene marine drift from frantic urban modernity.",
              keywords: ["barrier", "contrast", "urban", "modernity", "commuters", "alienation", "separation"],
            },
            {
              point: "Analyses prosody & sound: liquid sibilance, enjambment, dash caesura and asyndetic tripling slowing tempo.",
              keywords: ["sibilance", "enjambment", "caesura", "asyndetic", "tricolon", "tripling", "tempo", "hypnotic"],
            },
            {
              point: "Analyses luminous metaphor ('bells') and tactile chill ('cold').",
              keywords: ["metaphor", "tactile", "sensory", "luminous", "ethereal"],
            },
            {
              point: "Analyses the ironic double meaning / pun in the final word ('spine' = anatomy vs moral courage/exhaustion).",
              keywords: ["pun", "double meaning", "ambivalence", "irony", "ironic", "courage", "exhaustion", "backbone"],
            },
          ],
          modelAnswer:
            "The extract pivots on a subtle **pronoun** **volta**, shifting from detached observation to **collective** human **self-critique**. Initially, **hypnotic** **sibilance**, flowing **enjambment** and an **asyndetic** **tricolon** after the dash **caesura** slow the **tempo**, casting the **ethereal** **metaphor** of marine life in serene **contrast** to frantic **urban** **modernity**. Touching the **tactile** **barrier** of glass exposes modern **alienation**, culminating in a wryly **ironic** closing **pun**: longing to lack a **backbone** betrays deep moral **exhaustion** beneath everyday pressure.",
          hints: [
            "Track the shift from 'the jellyfish' (lines 1–3) to 'We' (lines 4–5).",
            "Analyse how sibilance, enjambment and the three adjectives ('unhurried, weightless, blind') slow time against rushing commuters.",
            "Unpack the pun/double meaning on 'without a spine' in the final line!",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "lit-poetry-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "power-voice-identity-poems",
      question:
        "In Robert Browning's ***My Last Duchess***, the Duke claims *\"Even had you skill / In speech — which I have not —\"* in the middle of a dazzlingly manipulative fifty-six-line dramatic monologue. What classical rhetorical ploy is the Duke using, and how does Browning turn it against him?",
      options: [
        "Paralipsis / false modesty (apophasis): feigning blunt inarticulacy so his lethal warning to the Count's envoy sounds like plain honesty, generating dramatic irony that exposes his calculating narcissism.",
        "Genuine humility proving the Duke suffers from stage fright.",
        "Pathetic fallacy aligning Ferrara's weather with grief.",
        "Anagnorisis in which the Duke repents of murdering his wife.",
      ],
      answerIndex: 0,
      hints: [
        "Does a man seamlessly weaving rhyming iambic pentameter couplets truly lack 'skill / In speech'?",
        "Why pretend to be a plain speaker right before issuing demands about his next dowry and bride?",
        "Think about the gap between the Duke's performance and Browning's exposure of him.",
      ],
      explanation:
        "Claiming *\"which I have not\"* while orchestrating subtle insinuations is textbook **false modesty** inside a **dramatic monologue**: Browning lets the Duke's performative smoothness convict him of premeditated control.",
    },
    {
      id: "lit-poetry-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "love-memory-loss-poems",
      question:
        "In Line 2–3 of Shakespeare's ***Sonnet 116*** — *\"Love is not love / Which alters when it alteration finds, / Or bends with the remover to remove\"* — what rhetorical term names repeating words derived from the **same root** in different grammatical forms (*alters / alteration*, *remover / remove*)?",
      answer: {
        type: "text",
        accept: ["polyptoton"],
        display: "polyptoton",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anaphora"] },
          feedback: "Anaphora repeats exact opening words across clauses; repeating *cognate root words* in shifting forms ('alters / alteration') is **polyptoton**.",
        },
      ],
      hints: [
        "Look at root-word echoing: *alter -> alteration* and *remover -> remove*.",
        "Greek rhetorical figure starting with *polyp-*.",
        "Enacts mirror-like reciprocity while insisting true love refuses to mirror fickleness!",
      ],
      solution: [
        "**Polyptoton** (*alters/alteration*, *remover/remove*) creates sonic mirroring to argue that authentic love refuses to copy circumstantial change.",
      ],
    },
    {
      id: "lit-poetry-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "conflict-suffering-blessing-poems",
      question:
        "In William Blake's ***The Tyger***, every line of Stanza 1 (`TY-ger TY-ger, BURN-ing BRIGHT`) drops the final unstressed syllable of its fourth trochaic foot (7 syllables instead of 8, ending on a hard stressed beat). What exact prosodic term describes dropping that final unstressed syllable?",
      options: [
        "Feminine ending",
        "Catalexis (catalectic trochaic tetrameter)",
        "Alexandrine hexameter",
        "Free-verse prose rhythm",
      ],
      answerIndex: 1,
      hints: [
        "Full trochaic tetrameter is *DUM-da DUM-da DUM-da DUM-da* (8 syllables, soft ending).",
        "Cutting off the trailing *-da* leaves *DUM-da DUM-da DUM-da DUM* — landing on a hard hammer-strike!",
        "Term mentioned in our guide: **catalectic** trochaic tetrameter.",
      ],
      explanation:
        "**Catalexis** (making the line **catalectic**) amputates the trailing unstressed beat so each line terminates on a forceful **masculine stress** (*BRIGHT / NIGHT*), mimicking a hammer striking an anvil.",
    },
    {
      id: "lit-poetry-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "power-voice-identity-poems",
      question:
        "In U.A. Fanthorpe's ***Half-past Two*** (*\"Into the silent noise his hangnail made\"*) and Imtiaz Dharker's ***Blessing*** (*\"liquid sun\"*, *\"the blessing sings\"*), what sensory-blending figure of speech describes experiencing **one physical sense in terms of another** (e.g. hearing touch or seeing liquid sound)?",
      answer: {
        type: "text",
        accept: ["synaesthesia", "synesthesia"],
        display: "synaesthesia",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxymoron", "personification", "onomatopoeia", "pathetic fallacy"] },
          feedback:
            "'Silent noise' is also oxymoronic, and 'sings' personifies, but blending two distinct physical senses into one image across both quotations is **synaesthesia**.",
        },
      ],
      hints: [
        "From Greek *syn-* (together) + *aisthesis* (sensation).",
        "Blends two sensory channels (sight + touch, or touch + hearing).",
        "Starts with *syn-*.",
      ],
      solution: [
        "**Synaesthesia** fuses sensory channels (*\"silent noise\"*, *\"liquid sun\"*), conveying heightened childhood or spiritual perception.",
      ],
      commonError:
        "Stopping at 'oxymoron' (which fits *'silent noise'* but not *'liquid sun'*) instead of naming the cross-sensory fusion of **synaesthesia**.",
    },
    {
      id: "lit-poetry-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "conflict-suffering-blessing-poems",
      question:
        "In Carol Ann Duffy's ***War Photographer***, Stanza 3 describes a developing photograph:\n\n> *\"Something is happening. A stranger's features*\n> *faintly start to twist before his eyes,*\n> *a half-formed ghost.\"*\n\nWhy does the **double meaning** of the verb *\"twist\"* earn top-band AO2 marks?",
      options: [
        "It refers solely to curling photographic paper drying on a wire.",
        "It shows the camera lens was broken during the explosion.",
        "Literally it captures chemical development emerging in the darkroom tray, while metaphorically it re-enacts the dying man's facial contortion of agony — collapsing past atrocity into the present room.",
        "It proves the photographer fabricated the image digitally.",
      ],
      answerIndex: 2,
      hints: [
          "Think about *two* simultaneous realities: the chemical tray in England AND the war-zone moment being replayed.",
          "Connect 'twist' to 'a half-formed ghost' haunting the photographer.",
          "Notice the abrupt three-word sentence 'Something is happening.' shifting into vivid present immediacy!",
      ],
      explanation:
        "Zooming onto **polysemy** (layered meaning) in *\"twist\"* — both the optical ripple in developing fluid and the victim's death-grimace — shows how trauma refuses to stay safely in the past.",
    },
    {
      id: "lit-poetry-ch-q06",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "anthology-comparative-thesis",
      question:
        "Compare how **two Anthology poets** manipulate **endings and structural closure** to leave a lasting emotional impact:\n\n> *WAR PHOTOGRAPHER (Duffy): \"From the aeroplane he stares impassively at where / he earns his living and they do not care.\"*\n> *REMEMBER (Rossetti): \"Better by far you should forget and smile / Than that you should remember and be sad.\"*\n\nWrite a Grade-9 comparative paragraph (**AO2 + AO3**) analysing **form, diction, rhyme and tonal resolution**. [5 marks]",
      markScheme: [
        {
          point: "Conceptual AO3 thesis contrasting Duffy's bleak cyclical alienation against Rossetti's peaceful selfless resolution.",
          keywords: ["whereas", "conversely", "while", "cyclical", "alienation", "bleak", "resolution", "selfless", "peace"],
        },
        {
          point: "AO2 analysis of Duffy's closing couplet rhyme ('where / care') and blunt monosyllabic indictment.",
          keywords: ["monosyllabic", "monosyllables", "couplet", "indictment", "apathy", "numb", "detachment"],
        },
        {
          point: "AO2 analysis of Rossetti's Petrarchan sestet closure and balanced antithesis ('forget and smile' vs 'remember and be sad').",
          keywords: ["petrarchan", "sestet", "antithesis", "balanced", "parallel", "volta", "consolation"],
        },
        {
          point: "AO2 comparison of pronoun positioning ('he' vs indifferent 'they' in Duffy; intimate 'you' in Rossetti).",
          keywords: ["pronoun", "pronouns", "intimate", "second-person", "third-person", "gulf", "connection"],
        },
        {
          point: "Sustained AO3 synthesis evaluating why unresolved numbness suits public war trauma whereas graceful closure suits private love.",
          keywords: ["unresolved", "closure", "catharsis", "worldview", "public", "private", "empathy"],
        },
      ],
      modelAnswer:
        "**While** both poets engineer stripped-back final couplets/lines for emotional clarity, Duffy closes in **bleak** **cyclical** **alienation**, **whereas** Rossetti achieves **selfless** **resolution**. Ascending back toward conflict, Duffy's harsh `DD` **couplet** lands on four stark **monosyllables** as a bitter **indictment** of **public** **apathy**, widening the **pronoun** **gulf** between numb witness and indifferent consumers. **Conversely**, completing her **Petrarchan** **sestet** after the line-9 **volta**, Rossetti's **intimate** **second-person** **antithesis** offers gentle **consolation**, proving **private** **empathy** can achieve **closure** where collective conscience fails.",
      hints: [
        "Contrast cyclical, numb departure (Duffy) against peaceful emotional release (Rossetti).",
        "Zoom onto Duffy's 'where / care' rhyme and monosyllables vs Rossetti's balanced antithesis.",
        "Compare pronoun dynamics ('he' vs 'they' vs intimate 'you') to seal Level 5 AO3.",
      ],
    },
    {
      id: "lit-poetry-ch-q07",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "unseen-modern-poetry-method",
      question:
        "Read this **Unseen Modern Poem** extract titled ***Eclipse Viewed Through Pinhole Card***:\n\n> *No one dared look straight into the blaze;*\n> *instead we bowed above white cardboard squares*\n> *watching a coin of shadow eat the noon.*\n> *Birds hushed mid-hedge; a chill slid down our necks —*\n> *how small a disc can darken everything.*\n\nWrite a full-marks **AO2** paragraph analysing how the poet fuses **structure, sound, metaphor and final-line resonance** to turn an astronomical event into an existential reflection. [5 marks]",
      markScheme: [
        {
          point: "Tracks the structural zoom/volta from communal scientific observation ('we') to hushed existential awe in the closing line.",
          keywords: ["volta", "existential", "universal", "shift", "zoom", "philosophical", "epiphany"],
        },
        {
          point: "Analyses prayer-like bodily posture ('bowed') and domestic/monetary metaphor ('coin') devouring daylight.",
          keywords: ["posture", "reverence", "metaphor", "predatory", "devouring", "consuming", "ordinary"],
        },
        {
          point: "Analyses sensory/auditory hush, sibilance ('slid'), and em-dash caesura enacting sudden unnatural chill.",
          keywords: ["sibilance", "auditory", "caesura", "dash", "tactile", "sensory", "silence"],
        },
        {
          point: "Analyses regular iambic pentameter cadence disrupted/distilled into the aphoristic final line.",
          keywords: ["iambic", "pentameter", "metre", "rhythm", "aphoristic", "isolated", "coda"],
        },
        {
          point: "Evaluates the closing antithesis of scale ('small' vs 'everything') suggesting human fragility / sudden grief.",
          keywords: ["antithesis", "scale", "fragility", "precarious", "vulnerability", "grief", "disproportionate"],
        },
      ],
      modelAnswer:
        "Composed in measured **iambic** **pentameter**, the extract pivots at the line-4 em-dash **caesura** from shared observation into **existential** **epiphany**. Initially, the watchers' **posture** of bowed **reverence** contrasts a deceptively **ordinary** **metaphor** whose **predatory** verb devours daylight. Mid-stanza **auditory** **silence** and creeping **sibilance** deliver a **tactile** shudder, preparing the **aphoristic** closing line: through stark **antithesis** of **scale**, the poet exposes how **precarious** human security remains before sudden **vulnerability** or **grief**.",
      hints: [
        "Notice the steady 10-syllable iambic pentameter rhythm and the em-dash volta at the end of line 4.",
        "Unpack 'bowed' (reverent posture) and 'coin of shadow eat the noon' (tiny currency vs predatory verb).",
        "Zoom onto the scale contrast in the final line ('small' vs 'everything') to unlock the deeper existential meaning.",
      ],
    },
    {
      id: "lit-poetry-ch-q08",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "anthology-comparative-thesis",
      question:
        "Suppose Edexcel Paper 1 Part 2 asks: *\"Compare how the writer of **Blessing** and the writer of **one other Anthology poem** present **moments of intense emotion or transformation**.\"* Which pairing and structural argument gives the richest **AO2 + AO3** scope?",
      options: [
        "Pair Blessing with Search For My Tongue: both use irregular multi-part free verse and organic/elemental extended metaphors ('liquid sun' / 'blossoms out of my mouth') to chart transformation from parched or rotting deprivation into ecstatic renewal — one communal and socio-physical, the other intimate and linguistic.",
        "Pair Blessing with My Last Duchess and argue both poets celebrate generous community sharing.",
        "Write solely about Mumbai's monsoon climate and Gujarati grammar history.",
        "Pair Blessing with an unseen poem from Part 1 instead of the Anthology.",
      ],
      answerIndex: 0,
      hints: [
        "Never pair Part 2 with the Part 1 Unseen poem — Part 2 MUST compare two Anthology poems!",
        "Look at the structural mirror between *Blessing* (drought -> burst pipe epiphany) and *Search For My Tongue* (rot -> blossoming rebirth).",
        "Notice how you get BOTH deep similarity (free-verse transformation) AND crisp divergence (communal water vs personal language)!",
      ],
      explanation:
        "Pairing ***Blessing*** with ***Search For My Tongue*** unlocks dazzling **AO2 + AO3** depth: both move from **scarcity/decay** (*\"cracks like a pod\"* / *\"rot and die\"*) to **radiant rebirth** (*\"blessing sings\"* / *\"blossoms\"*) across dynamic free verse, contrasting **communal physical grace** against **intimate bilingual identity**.",
    },
  ],
};
