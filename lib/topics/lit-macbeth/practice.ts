import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "lit-macbeth-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "jacobean-divine-right-witchcraft",
      question:
        "Which reigning monarch watched early performances of *Macbeth* around 1606, authored *Daemonologie* (1597), and claimed descent from **Banquo**?",
      options: [
        "King James I (James VI of Scotland)",
        "Queen Elizabeth I (last Tudor queen)",
        "King Henry VIII (second Tudor ruler)",
        "Queen Mary I (Catholic Tudor queen)",
      ],
      answerIndex: 0,
      hints: [
        "He united the Scottish and English crowns in 1603 and survived the November 1605 Gunpowder Plot.",
      ],
      explanation:
        "**King James I** (formerly James VI of Scotland) became patron of Shakespeare's troupe (*The King's Men*), wrote *Daemonologie*, and traced the Stuart dynasty back to Banquo.",
    },
    {
      id: "lit-macbeth-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "jacobean-divine-right-witchcraft",
      question:
        "What single political-religious noun names the murder of an anointed monarch — framed in *Macbeth* as cosmic sacrilege against God?",
      answer: {
        type: "text",
        accept: ["regicide"],
        display: "regicide",
      },
      traps: [
        {
          spec: { type: "text", accept: ["treason", "homicide", "patricide", "usurpation"] },
          feedback:
            "Treason and homicide are broader crimes, and patricide kills a father; killing an anointed king is specifically **regicide**.",
        },
      ],
      hints: [
        "From Latin *regis* (king) + *-cide* (killing).",
      ],
      solution: [
        "Killing an anointed monarch is **regicide** — under the Jacobean Divine Right of Kings, it shatters the Great Chain of Being.",
      ],
      commonError:
        "Writing generic 'treason' or 'murder' (or 'patricide', killing a father) instead of the exact political-theological term **regicide**.",
    },
    {
      id: "lit-macbeth-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "tragic-hamartia-soliloquies",
      question:
        "Complete Macbeth's Act 1 Scene 7 diagnosis of his own fatal flaw (*hamartia*):\n\n> *\"I have no spur / To prick the sides of my intent, but only / _____ ambition\"*",
      answer: {
        type: "text",
        accept: ["vaulting"],
        display: "Vaulting",
      },
      traps: [
        {
          spec: { type: "text", accept: ["blind", "burning", "ruthless"] },
          feedback: "Shakespeare uses an equestrian (horse-leaping) participle: '**Vaulting** ambition'.",
        },
      ],
      hints: [
        "Think of an over-eager horseman leaping too high for the saddle and falling on the other side.",
      ],
      solution: [
        "Macbeth names his own hamartia **\"Vaulting\"** ambition (*\"which o'erleaps itself / And falls on th' other\"*, 1.7).",
      ],
    },
    {
      id: "lit-macbeth-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "lady-macbeth-gender-guilt",
      question:
        "In Act 1 Scene 5, Lady Macbeth cries *\"Come, you spirits / That tend on mortal thoughts, unsex me here.\"* How does Act 5 Scene 1 (*\"Out, damned spot!\"*) structurally answer this speech?",
      options: [
        "Through divine intervention, the spirits grant her prayer for permanent emotional numbness, leaving her untouched by sleepwalking guilt.",
        "Through chiasmic reversal, her confident blank verse collapses into fragmented sleepwalking prose as her repressed conscience destroys her.",
        "Through calm iambic persuasion, she urges Macbeth to lay down his crown and confess King Duncan's murder openly before Malcolm's army.",
        "Through rational soliloquy, she proves to the Scottish Doctor that she remained completely ignorant of the slaughter of Lady Macduff's family.",
      ],
      answerIndex: 1,
      hints: [
        "Compare her verse form in Act 1 Scene 5 with her form in Act 5 Scene 1.",
        "Did her prayer to 'unsex me here' permanently erase her guilt?",
      ],
      explanation:
        "Act 5 Scene 1 completes Lady Macbeth's **chiasmic collapse**: her commanding **iambic pentameter** disintegrates into obsessive **prose** (*\"The Thane of Fife had a wife\"*), proving she could not amputate her conscience.",
    },
    {
      id: "lit-macbeth-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "imagery-blood-sleep-light",
      question:
        "In Act 2 Scene 2, Macbeth cries: *\"Will all great _____'s ocean wash this blood / Clean from my hand?\"* Name the Roman sea-god he invokes.",
      answer: {
        type: "text",
        accept: ["Neptune", "Neptune's", "Neptunes"],
        display: "Neptune",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Poseidon"] },
          feedback: "Poseidon is Greek; Shakespeare uses the Roman name **Neptune**.",
        },
      ],
      hints: [
        "Roman god of the sea (also the eighth planet from the Sun).",
        "Contrast this cosmic hyperbole with Lady Macbeth's 'A little water'.",
      ],
      solution: [
        "Macbeth invokes **Neptune** (*\"Will all great Neptune's ocean wash this blood / Clean from my hand?\"*), magnifying his stain to cosmic proportions.",
      ],
    },
    {
      id: "lit-macbeth-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "dramatic-structure-symmetry",
      question:
        "Which event in **Act 3 Scene 3** serves as the structural **peripeteia** (turning point) where Macbeth's control begins to unravel?",
      options: [
        "King Duncan naming Malcolm Prince of Cumberland.",
        "The Porter opening the gate of Inverness.",
        "Fleance escaping the ambush in which Banquo is murdered.",
        "Siward's son fighting Macbeth at Dunsinane.",
      ],
      answerIndex: 2,
      hints: [
        "Up until Act 3 Scene 3, Macbeth gets what he plots. Who slips away in the dark?",
        "Why does Banquo's survival through his son torment Macbeth?",
      ],
      explanation:
        "**Fleance's escape** in Act 3 Scene 3 leaves the Witches' Stuart-dynasty prophecy intact, triggering Banquo's Ghost at the banquet (3.4) and Macbeth's irreversible descent.",
    },
    {
      id: "lit-macbeth-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "lady-macbeth-gender-guilt",
      question:
        "In Act 5 Scene 1, does sleepwalking Lady Macbeth speak in **blank verse** or **prose**?",
      answer: {
        type: "text",
        accept: ["prose"],
        display: "prose",
      },
      traps: [
        {
          spec: { type: "text", accept: ["blank verse", "verse", "iambic pentameter"] },
          feedback:
            "Lady Macbeth commands in blank verse in Act 1, but in Act 5 Scene 1 her fractured mind collapses into **prose**.",
        },
      ],
      hints: [
        "Read the rhythm: 'Out, damned spot! out, I say! — One: two: why, then 'tis time to do't.'",
        "In Shakespeare, noble characters drop out of iambic pentameter when losing rational command.",
      ],
      solution: [
        "She speaks in **prose** — losing courtly iambic pentameter signals mental breakdown and loss of conscious self-control.",
      ],
      commonError:
        "Assuming noble characters always speak blank verse in Shakespeare, missing that Lady Macbeth's drop into **prose** in 5.1 dramatises her psychological collapse.",
    },
    {
      id: "lit-macbeth-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "imagery-blood-sleep-light",
      question:
        "In Act 5 Scene 2, Angus says Macbeth feels his royal title *\"Hang loose about him, like a giant's robe / Upon a dwarfish thief.\"* Which earlier line in Act 1 Scene 3 initiated this **clothing motif**?",
      options: [
        "\"Fair is foul, and foul is fair\"",
        "\"So foul and fair a day I have not seen\"",
        "\"Stay, you imperfect speakers, tell me more\"",
        "\"why do you dress me / In borrow'd robes?\"",
      ],
      answerIndex: 3,
      hints: [
        "Look for sartorial (garment/robe) imagery when Ross greets Macbeth as Thane of Cawdor.",
        "Banquo also echoes it with 'strange garments'.",
      ],
      explanation:
        "Macbeth's question *\"why do you dress me / In borrow'd robes?\"* (1.3) launches the **sartorial motif** that culminates in Angus's *\"giant's robe / Upon a dwarfish thief\"* (5.2).",
    },
    {
      id: "lit-macbeth-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "dramatic-structure-symmetry",
      question:
        "Which loyal Scottish Thane kills Macbeth in Act 5 Scene 8 after revealing he *\"was from his mother's womb / Untimely ripp'd\"*?",
      answer: {
        type: "text",
        accept: ["Macduff", "Thane of Fife"],
        display: "Macduff",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Malcolm"] },
          feedback: "Malcolm becomes King at the end, but **Macduff** (Thane of Fife) fights and beheads Macbeth.",
        },
      ],
      hints: [
        "He is the Thane of Fife whose wife and children Macbeth slaughtered in Act 4 Scene 2.",
        "The First Apparition warned Macbeth to beware him.",
      ],
      solution: [
        "**Macduff** (Thane of Fife), delivered by Caesarean section, fulfils the Second Apparition's equivocal riddle and slays Macbeth.",
      ],
    },
    {
      id: "lit-macbeth-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "tragic-hamartia-soliloquies",
      question:
        "Complete the final word of Macbeth's nihilistic Act 5 Scene 5 soliloquy:\n\n> *\"It is a tale / Told by an idiot, full of sound and fury, / Signifying _____.\"* (One word)",
      answer: {
        type: "text",
        accept: ["nothing", "signifying nothing"],
        display: "nothing",
      },
      traps: [
        {
          spec: { type: "text", accept: ["death", "madness", "doom", "everything"] },
          feedback:
            "Macbeth's nihilistic climax ends on absolute existential emptiness: 'Signifying **nothing**.'",
        },
      ],
      hints: [
        "The speech begins 'Tomorrow, and tomorrow, and tomorrow' and ends on absolute existential emptiness.",
        "Seven-letter pronoun of total absence.",
      ],
      solution: [
        "*\"Signifying **nothing**\"* (5.5) — encapsulating the spiritual void left by usurping a crown through regicide.",
      ],
      commonError:
        "Guessing melodramatic nouns like 'death' or 'doom' instead of the bleak anti-climactic pronoun **'nothing'**, or failing to note how the feminine ending trails off into silence.",
    },
  ],
  papers: [
    {
      id: "lit-macbeth-p1",
      title: "Macbeth Practice Paper 1: Context, Character Arcs & Micro-Analysis",
      questions: [
        {
          id: "lit-macbeth-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "Name the 4-foot falling metre (*DUM-da DUM-da DUM-da DUM-da*) spoken by the Witches in *\"Double, double toil and trouble\"*.",
          answer: {
            type: "text",
            accept: ["trochaic tetrameter", "trochaic"],
            display: "trochaic tetrameter",
          },
          traps: [
            {
              spec: { type: "text", accept: ["iambic pentameter"] },
              feedback: "Iambic pentameter has 5 rising *da-DUM* feet; the Witches chant 4 falling *DUM-da* feet (**trochaic tetrameter**).",
            },
          ],
          hints: [
            "Each foot starts with a stressed syllable (*trochee*), and there are four (*tetra-*) feet per line.",
          ],
          solution: [
            "The Witches chant in **trochaic tetrameter**, rhythmically inverting noble **iambic pentameter**.",
          ],
        },
        {
          id: "lit-macbeth-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "Which character warns Macbeth in Act 1 Scene 3 that *\"The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence\"*?",
          answer: {
            type: "text",
            accept: ["Banquo"],
            display: "Banquo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Macduff"] },
              feedback: "Macduff is not on the heath in Act 1 Scene 3; Macbeth's fellow general **Banquo** speaks this warning.",
            },
          ],
          hints: [
            "He is alongside Macbeth when the Weird Sisters hail them on the heath.",
          ],
          solution: [
            "**Banquo** recognises demonic equivocation immediately, serving as Macbeth's principled moral foil.",
          ],
        },
        {
          id: "lit-macbeth-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "What term (used by the Porter in Act 2 Scene 3 and tied to the 1606 Father Garnet trial) describes speaking ambiguous literal half-truths designed to deceive?",
          answer: {
            type: "text",
            accept: ["equivocation", "equivocating"],
            display: "equivocation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dramatic irony", "paradox", "oxymoron"] },
              feedback:
                "Those are general literary devices; the Jacobean term used by the Porter for deceptive half-truths is **equivocation**.",
            },
          ],
          hints: [
            "The Porter says: 'Faith, here's an equivocator...'",
            "Noun form ending in *-tion*.",
          ],
          solution: [
            "**Equivocation** — practised by the Weird Sisters when promising *\"none of woman born\"* shall harm Macbeth.",
          ],
          commonError:
            "Labelling the Witches' deceptive half-truths 'dramatic irony' or 'foreshadowing' instead of the historically specific Jacobean concept of **equivocation**.",
        },
        {
          id: "lit-macbeth-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "tragic-hamartia-soliloquies",
          question:
            "What Greek Aristotelian tragedy term names the fatal flaw or error of judgement in a noble protagonist (such as Macbeth's *\"vaulting ambition\"*)?",
          answer: {
            type: "text",
            accept: ["hamartia"],
            display: "hamartia",
          },
          traps: [
            {
              spec: { type: "text", accept: ["catharsis"] },
              feedback: "Catharsis is the audience's emotional release; the protagonist's tragic flaw is **hamartia**.",
            },
          ],
          hints: [
            "Classical Greek term beginning with *h-*.",
            "Paired in Aristotle's *Poetics* with *peripeteia* and *anagnorisis*.",
          ],
          solution: [
            "**Hamartia** names the protagonist's fatal error or flaw that drives his tragic downfall.",
          ],
        },
        {
          id: "lit-macbeth-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "lady-macbeth-gender-guilt",
          question:
            "Complete Lady Macbeth's imperative in Act 1 Scene 5:\n\n> *\"Look like th' innocent flower, / But be the _____ under't.\"*",
          answer: {
            type: "text",
            accept: ["serpent"],
            display: "serpent",
          },
          traps: [
            {
              spec: { type: "text", accept: ["snake"] },
              feedback: "Give Shakespeare's exact biblical noun: '**serpent**'.",
            },
          ],
          hints: [
            "Echoes both the Garden of Eden in Genesis and King James I's 1605 Gunpowder Plot medal.",
            "Seven-letter noun starting with *s-*.",
          ],
          solution: [
            "*\"But be the **serpent** under't\"* (1.5) — encapsulating duplicitous appearance versus treasonous reality.",
          ],
        },
        {
          id: "lit-macbeth-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "tragic-hamartia-soliloquies",
          question:
            "What dramatic speech convention allows Macbeth in Act 1 Scene 7 and Act 2 Scene 1 to voice his innermost conscience aloud while alone onstage?",
          answer: {
            type: "text",
            accept: ["soliloquy", "soliloquies"],
            display: "soliloquy",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dramatic monologue", "monologue"] },
              feedback: "A monologue may address other characters onstage; speaking inner thoughts *alone* onstage is a **soliloquy**.",
            },
          ],
          hints: [
            "From Latin *solus* (alone) + *loqui* (to speak).",
            "Distinguish it from an *aside* (spoken briefly while others remain onstage).",
          ],
          solution: [
            "A **soliloquy** gives the audience direct access to Macbeth's agonised moral imagination, preserving tragic pathos.",
          ],
        },
        {
          id: "lit-macbeth-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-blood-sleep-light",
          question:
            "Complete Macbeth's paranoid metaphor from Act 3 Scene 2:\n\n> *\"O, full of _____ is my mind, dear wife!\"*",
          answer: {
            type: "text",
            accept: ["scorpions", "scorpion"],
            display: "scorpions",
          },
          traps: [
            {
              spec: { type: "text", accept: ["serpents", "snakes", "daggers"] },
              feedback:
                "Lady Macbeth speaks of the 'serpent' in 1.5 and Macbeth speaks of the 'scorched snake' earlier in 3.2, but his mind is full of **scorpions**.",
            },
          ],
          hints: [
            "Venomous arachnids with stinging tails.",
            "Spoken while Banquo and Fleance are still alive.",
          ],
          solution: [
            "*\"O, full of **scorpions** is my mind, dear wife!\"* (3.2) — conveying venomous, self-stinging royal paranoia.",
          ],
          commonError:
            "Confusing Macbeth's 'full of scorpions' metaphor (3.2) with Lady Macbeth's 'serpent under't' (1.5) or Macbeth's 'scorched the snake' image.",
        },
        {
          id: "lit-macbeth-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "lady-macbeth-gender-guilt",
          question:
            "In Act 5 Scene 1, Lady Macbeth laments: *\"All the _____ of Arabia will not sweeten this little hand.\"* Supply the missing plural noun.",
          answer: {
            type: "text",
            accept: ["perfumes", "perfume"],
            display: "perfumes",
          },
          traps: [
            {
              spec: { type: "text", accept: ["waters", "spices"] },
              feedback: "In 2.2 she said 'water'; in 5.1 she tries to mask the smell of blood with 'All the **perfumes** of Arabia'.",
            },
          ],
          hints: [
            "Olfactory (scent) noun contrasting the stench of blood.",
            "Inverts her dismissive 'A little water clears us of this deed' (2.2).",
          ],
          solution: [
            "*\"All the **perfumes** of Arabia\"* (5.1) — olfactory hyperbole inverting her Act 2 hubris.",
          ],
        },
        {
          id: "lit-macbeth-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "dramatic-structure-symmetry",
          question:
            "Which rebel traitor does loyal Macbeth unseam *\"from the nave to th' chops\"* and behead in Act 1 Scene 2 — creating cyclical symmetry with Macbeth's own beheading in Act 5 Scene 9?",
          answer: {
            type: "text",
            accept: ["Macdonwald", "Macdonald"],
            display: "Macdonwald",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Macduff"] },
              feedback: "Macduff is the loyal Thane who kills Macbeth in Act 5; the Act 1 rebel is **Macdonwald**.",
            },
          ],
          hints: [
            "The wounded Captain calls him 'the merciless Macd_____'.",
            "Do not confuse him with the Thane of Cawdor (who is executed in 1.4).",
          ],
          solution: [
            "**Macdonwald** — Macbeth starts by beheading a rebel against the crown (1.2) and ends beheaded as a rebel usurper himself (5.9).",
          ],
        },
        {
          id: "lit-macbeth-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "dramatic-structure-symmetry",
          question:
            "Which eldest son of King Duncan is hailed rightful King of Scotland at the end of Act 5 Scene 9?",
          answer: {
            type: "text",
            accept: ["Malcolm", "King Malcolm"],
            display: "Malcolm",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Donalbain"] },
              feedback: "Donalbain is Duncan's younger son who fled to Ireland; **Malcolm** is the elder heir crowned in 5.9.",
            },
          ],
          hints: [
            "Named Prince of Cumberland in Act 1 Scene 4; tests Macduff in England in Act 4 Scene 3.",
            "Restores natural order and creates Scotland's first Earls.",
          ],
          solution: [
            "**Malcolm**, Duncan's rightful heir, restores divinely ordained kingship in Act 5 Scene 9.",
          ],
        },
        {
          id: "lit-macbeth-p1-q11",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "Read Macduff's outcry upon discovering King Duncan's body in Act 2 Scene 3, alongside the Old Man's report in Act 2 Scene 4:\n\n> *\"Most sacrilegious murder hath broke ope / The Lord's anointed temple\"* (2.3)\n> *\"A falcon, towering in her pride of place, / Was by a mousing owl hawk'd at and kill'd.\"* (2.4)\n\nWrite a concise Grade-9 analytical paragraph explaining how Shakespeare uses **language and symbolism (AO2)** alongside **Jacobean context (AO4)** to present the horror of Duncan's murder. [4 marks]",
          markScheme: [
            {
              point: "Conceptual AO1 thesis framing Duncan's murder as cosmic/spiritual violation rather than mere political crime.",
              keywords: ["regicide", "cosmic", "spiritual", "blasphemy", "sacrilege", "transgression", "unnatural"],
            },
            {
              point: "AO2 analysis of religious metaphor ('anointed', 'temple', 'sacrilegious') elevating the monarch's body.",
              keywords: ["metaphor", "religious", "consecrated", "sanctuary", "holy", "coronation", "sacred"],
            },
            {
              point: "AO2 analysis of avian symbolism/inversion (nocturnal owl vs royal falcon) mirroring Macbeth and Duncan.",
              keywords: ["symbol", "symbolism", "inversion", "inverts", "predator", "nocturnal", "hierarchy", "mirrors"],
            },
            {
              point: "Integrated AO4 link to the Divine Right of Kings and/or the Great Chain of Being under King James I.",
              keywords: ["divine right", "great chain", "james i", "jacobean", "gunpowder"],
            },
          ],
          modelAnswer:
            "Shakespeare frames Macbeth's **regicide** not as a mere political coup, but as a cosmic **blasphemy** that ruptures creation itself. Through Macduff's **religious metaphor** of Duncan's corpse as a consecrated sanctuary (*\"anointed temple\"*), Shakespeare activates **Jacobean** belief in the **Divine Right** of Kings championed by **James I**, casting the stabbing of a monarch crowned with holy **coronation** oil as an assault on God. Immediately afterwards, the Old Man's avian **symbolism** **inverts** natural **hierarchy**: a lowly **nocturnal** predator (*\"mousing owl\"*) slaying the royal daytime raptor **mirrors** Macbeth's treacherous strike in darkness, dramatising how breaking the **Great Chain** of Being plunges all nature into chaos.",
          hints: [
            "Start with a conceptual claim: why is killing a King worse than ordinary murder in 1606?",
            "Unpack the religious connotations of 'anointed' and 'temple', then explain what the 'owl' and 'falcon' symbolise.",
            "Weave in both the Divine Right of Kings and the Great Chain of Being without detaching from Shakespeare's words.",
          ],
        },
        {
          id: "lit-macbeth-p1-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "tragic-hamartia-soliloquies",
          question:
            "Read this extract from Macbeth's soliloquy in Act 1 Scene 7:\n\n> *\"If it were done when 'tis done, then 'twere well*\n> *It were done quickly... I have no spur*\n> *To prick the sides of my intent, but only*\n> *Vaulting ambition, which o'erleaps itself*\n> *And falls on th' other.\"*\n\nAnalyse how Shakespeare presents Macbeth's **inner conflict and tragic flaw** in this extract and across the wider play. [4 marks]",
          markScheme: [
            {
              point: "Identifies Macbeth's Aristotelian hamartia (ambition) alongside acute moral self-awareness.",
              keywords: ["hamartia", "flaw", "conscience", "self-aware", "lucid", "hesitation", "conflict"],
            },
            {
              point: "Analyses euphemistic pronoun repetition ('it') showing reluctance to name regicide aloud.",
              keywords: ["euphemism", "euphemistic", "pronoun", "repetition", "evasion", "avoid", "unwilling"],
            },
            {
              point: "Unpacks the equestrian/horse-riding metaphor ('no spur', 'o'erleaps') predicting his own downfall.",
              keywords: ["equestrian", "horse", "rider", "saddle", "metaphor", "overreaches", "downfall", "ruin"],
            },
            {
              point: "Links structurally to his later tyrannical hardening or Act 5 nihilistic emptiness.",
              keywords: ["tyrant", "tyranny", "nihilism", "nihilistic", "scorpions", "brief candle", "desensitised", "act 5"],
            },
          ],
          modelAnswer:
            "Shakespeare establishes Macbeth as a lucid Aristotelian tragic hero whose acute **conscience** diagnoses his own **hamartia** before he strikes. His anxious **euphemistic** **pronoun** **repetition** avoids naming regicide directly, betraying deep moral **conflict** toward a virtuous king. Crucially, the **equestrian** **metaphor** casts Macbeth as an over-eager **rider** lacking any righteous grievance who leaps too violently for the **saddle** and crashes into **ruin**. This early moral clarity makes his subsequent **Act 5** **nihilistic** numbness (*\"brief candle\"*) all the more tragic, as he knowingly authors his own **downfall**.",
          hints: [
            "Why does Macbeth keep saying 'it' instead of 'murder'?",
            "Visualise the horse-riding metaphor ('spur', 'vaulting', 'o'erleaps').",
            "Connect this Act 1 hesitation to what he becomes by Act 4–5.",
          ],
        },
        {
          id: "lit-macbeth-p1-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "lady-macbeth-gender-guilt",
          question:
            "Compare Lady Macbeth's speech in **Act 1 Scene 5** with her sleepwalking scene in **Act 5 Scene 1**:\n\n> *\"Come, you spirits / That tend on mortal thoughts, unsex me here\"* (1.5)\n> *\"Out, damned spot! out, I say!... What, will these hands ne'er be clean?\"* (5.1)\n\nExplain how Shakespeare uses **form, language and stagecraft (AO2)** plus **Jacobean gender expectations (AO4)** to chart her transformation. [4 marks]",
          markScheme: [
            {
              point: "Establishes her chiasmic / ironic reversal from ruthless dominance to guilt-ridden collapse.",
              keywords: ["chiasmic", "chiasmus", "inversion", "reversal", "ironic", "disintegration", "collapse"],
            },
            {
              point: "Analyses Act 1 imperative apostrophe ('unsex') subverting patriarchal Jacobean maternal ideals.",
              keywords: ["imperative", "apostrophe", "patriarchal", "femininity", "maternal", "gender", "subverts"],
            },
            {
              point: "Analyses the formal shift from blank verse (iambic pentameter) to fragmented prose and interrogatives in 5.1.",
              keywords: ["blank verse", "iambic", "prose", "fragmented", "interrogative", "questions", "rhythm"],
            },
            {
              point: "Connects blood/cleansing or light/darkness stagecraft ('little water' / taper candle vs 'thick night').",
              keywords: ["candle", "taper", "water", "arabia", "somnambulism", "sleepwalking", "psychosomatic"],
            },
          ],
          modelAnswer:
            "Shakespeare structures Lady Macbeth's trajectory as a devastating **ironic** **reversal** from transgressive command to psychological **collapse**. In Act 1, her bold **imperative** **apostrophe** to demonic forces **subverts** **patriarchal** Jacobean ideals of gentle **maternal** **femininity**, yet having to beg spirits to strip her womanhood proves compassion originally existed within her. By Act 5, Shakespeare strips away her poised **iambic** **blank verse**, reducing her to **fragmented** **prose** and frantic **interrogative** cries during **somnambulism**. Clutching a lit **taper** against the hellish dark she once summoned and scrubbing an invisible **psychosomatic** bloodstain, she exposes how repressed guilt inevitably avenges itself.",
          hints: [
            "Name the structural pattern linking her Act 1 power to her Act 5 breakdown.",
            "Contrast her commanding blank verse imperatives in 1.5 with her broken prose questions in 5.1.",
            "Mention her candle prop or 'little water' vs 'perfumes of Arabia', plus Jacobean gender norms.",
          ],
        },
        {
          id: "lit-macbeth-p1-q14",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "imagery-blood-sleep-light",
          question:
            "Read Macbeth's outcry in Act 2 Scene 2 alongside his reflection in Act 3 Scene 4:\n\n> *\"Will all great Neptune's ocean wash this blood / Clean from my hand? No; this my hand will rather / The multitudinous seas incarnadine, / Making the green one red.\"* (2.2)\n> *\"I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er.\"* (3.4)\n\nAnalyse how Shakespeare evolves the **motif of blood** to track Macbeth's moral descent. [4 marks]",
          markScheme: [
            {
              point: "Tracks the whole-play evolution of the blood motif from honour (1.2) to cosmic guilt (2.2) to numb tyranny (3.4).",
              keywords: ["motif", "evolves", "honour", "valour", "guilt", "tyranny", "descent", "desensitisation"],
            },
            {
              point: "Analyses Act 2 classical hyperbole and contrast between Latinate polysyllables and stark monosyllables.",
              keywords: ["hyperbole", "hyperbolic", "latinate", "polysyllabic", "monosyllables", "monosyllabic", "stain"],
            },
            {
              point: "Analyses Act 3 river metaphor and the weary adjective 'tedious' signalling moral numbness.",
              keywords: ["river", "metaphor", "numb", "numbness", "weary", "routine", "apathy", "repentance"],
            },
            {
              point: "Integrates AO4 Christian/Jacobean damnation — regicidal sin is irreversible without repentance.",
              keywords: ["damnation", "sin", "irreversible", "christian", "jacobean", "salvation", "amen"],
            },
          ],
          modelAnswer:
            "Shakespeare **evolves** the recurring **motif** of blood from a badge of battlefield **valour** in Act 1 into a barometer of Macbeth's spiritual **damnation**. Immediately after Duncan's murder, Macbeth's **hyperbolic** classical allusion pairs towering **Latinate** **polysyllabic** diction with stark Anglo-Saxon **monosyllables** to show a single regicidal **stain** polluting God's entire ocean. By Act 3's banquet aftermath, however, terror hardens into **tyranny**: picturing bloodshed as a **river** already halfway crossed, his chillingly **weary** dismissal of **repentance** reveals fatal moral **numbness** within a **Christian** universe where unrepented sin becomes **irreversible**.",
          hints: [
            "Briefly note what blood meant in 1.2 ('bloody execution') before comparing 2.2 and 3.4.",
            "Contrast the grand Latinate words ('multitudinous seas incarnadine') with the blunt monosyllables in 2.2.",
            "Explain why calling repentance 'tedious' in 3.4 proves terrifying moral numbness.",
          ],
        },
        {
          id: "lit-macbeth-p1-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 5,
          guideRef: "dramatic-structure-symmetry",
          question:
            "Read Macbeth's reaction to the Queen's death in Act 5 Scene 5:\n\n> *\"Tomorrow, and tomorrow, and tomorrow,*\n> *Creeps in this petty pace from day to day...*\n> *Out, out, brief candle!*\n> *Life's but a walking shadow, a poor player*\n> *That struts and frets his hour upon the stage*\n> *And then is heard no more.\"*\n\nWrite a top-band paragraph analysing how Shakespeare's **prosody, imagery and metatheatre (AO2)** express the philosophical climax of Macbeth's tragedy (**AO1 + AO4**). [5 marks]",
          markScheme: [
            {
              point: "Conceptual thesis identifying existential nihilism / spiritual emptiness as the price of usurpation.",
              keywords: ["nihilism", "nihilistic", "existential", "emptiness", "futility", "void", "meaningless"],
            },
            {
              point: "Analyses syntax & prosody: polysyndeton, caesurae and plosive alliteration slowing the blank verse.",
              keywords: ["polysyndeton", "caesura", "caesurae", "plosive", "alliteration", "tempo", "monotonous", "pace"],
            },
            {
              point: "Analyses light/darkness motif payoff in the imperative 'brief candle'.",
              keywords: ["motif", "imperative", "light", "darkness", "ephemeral", "flicker", "extinguished"],
            },
            {
              point: "Analyses metatheatrical metaphor ('poor player', 'stage') linking to stolen kingship / borrowed robes.",
              keywords: ["metatheatre", "metatheatrical", "actor", "costume", "performance", "usurper", "robes"],
            },
            {
              point: "Links to AO4 Jacobean Christian worldview: severing oneself from God's order leaves time devoid of grace.",
              keywords: ["christian", "jacobean", "divine", "providence", "grace", "damned", "order"],
            },
          ],
          modelAnswer:
            "In Act 5, Shakespeare brings Macbeth's arc to a climax of **existential** **nihilism**, revealing **futility** as the ultimate punishment for usurpation. Syntactically, dragging **polysyndeton** and heavy **caesurae** combine with **plosive** **alliteration** to slow the blank verse to a **monotonous** crawl. Resolving the play's **light** and **darkness** **motif**, Macbeth's abrupt **imperative** reduces human life and his wife's death to an **ephemeral** tallow **flicker**. Crucially, his **metatheatrical** image of a miscast **actor** links back to his stolen royal **robes**, exposing illegitimate rule as a hollow **performance**; within a **Jacobean** **Christian** cosmos, severing oneself from **divine** **grace** empties time itself of meaning.",
          hints: [
            "Examine the dragging rhythm created by 'and... and' (polysyndeton) plus pauses (caesurae).",
            "Connect 'brief candle' to the light/dark motif and 'poor player' to metatheatre & borrowed robes.",
            "Explain *why* in a Jacobean Christian play usurping the crown leads to total meaninglessness.",
          ],
        },
      ],
    },
    {
      id: "lit-macbeth-p2",
      title: "Macbeth Practice Paper 2: Foils, Stagecraft & Whole-Play Architecture",
      questions: [
        {
          id: "lit-macbeth-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dramatic-structure-symmetry",
          question:
            "Which character enters in **prose** in Act 2 Scene 3 imagining himself *\"porter of hell-gate\"* while knocking echoes at Inverness?",
          answer: {
            type: "text",
            accept: ["Porter", "The Porter", "drunken Porter"],
            display: "Porter",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Macduff", "Lennox", "Seyton"] },
              feedback:
                "Macduff and Lennox are the noblemen knocking outside; the gatekeeper speaking comic prose inside is the **Porter**.",
            },
          ],
          hints: [
            "Castle gatekeeper whose comic scene uses bathos and dramatic irony.",
          ],
          solution: [
            "The **Porter** greets imaginary sinners (including a Jesuit *\"equivocator\"*) at the gate of Inverness.",
          ],
          commonError:
            "Dismissing the Porter as mere 'comic relief' without noting the dramatic irony that Inverness has literally become a hell-gate of regicide.",
        },
        {
          id: "lit-macbeth-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dramatic-structure-symmetry",
          question:
            "Name Banquo's young son who escapes the murderers in Act 3 Scene 3, ensuring the future Stuart royal line survives.",
          answer: {
            type: "text",
            accept: ["Fleance"],
            display: "Fleance",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Malcolm", "Donalbain"] },
              feedback: "Malcolm and Donalbain are King Duncan's sons; Banquo's son is **Fleance**.",
            },
          ],
          hints: [
            "Banquo cries 'Fly, good Fl_____, fly, fly, fly!' during the ambush.",
          ],
          solution: [
            "**Fleance** escapes in Act 3 Scene 3 — the play's structural *peripeteia*.",
          ],
        },
        {
          id: "lit-macbeth-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "dramatic-structure-symmetry",
          question:
            "Whose silent, blood-boltered **Ghost** sits in Macbeth's royal chair during the state banquet in Act 3 Scene 4?",
          answer: {
            type: "text",
            accept: ["Banquo", "Banquo's", "Banquo's ghost"],
            display: "Banquo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Duncan"] },
              feedback: "Although Macbeth murdered Duncan earlier, it is freshly murdered **Banquo** whose Ghost takes Macbeth's seat in 3.4.",
            },
          ],
          hints: [
            "Macbeth cries to it: 'Never shake / Thy gory locks at me!'",
            "He had just invited this friend 'Fail not our feast' in 3.1.",
          ],
          solution: [
            "**Banquo's** Ghost occupies Macbeth's seat, dramatising guilty paranoia and Banquo's rightful royal posterity.",
          ],
        },
        {
          id: "lit-macbeth-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "dramatic-structure-symmetry",
          question:
            "Name the Scottish wood whose leafy boughs Malcolm's soldiers carry toward Dunsinane Hill in Act 5 Scene 4.",
          answer: {
            type: "text",
            accept: ["Birnam Wood", "Birnam", "Great Birnam Wood"],
            display: "Birnam Wood",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Dunsinane", "Inverness", "Forres", "Fife"] },
              feedback:
                "Dunsinane is Macbeth's hilltop fortress toward which the soldiers march; the forest whose boughs they cut is **Birnam Wood**.",
            },
          ],
          hints: [
            "Fulfils the Third Apparition's prophecy.",
            "Two-word place name starting with *B-*.",
          ],
          solution: [
            "**Birnam Wood** — camouflaging Malcolm's army and symbolising living nature marching against unnatural tyranny.",
          ],
          commonError:
            "Confusing **Birnam Wood** (the forest whose branches camouflage Malcolm's troops) with **Dunsinane** (Macbeth's fortified hill castle).",
        },
        {
          id: "lit-macbeth-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "lady-macbeth-gender-guilt",
          question:
            "In Act 1 Scene 5, Lady Macbeth fears Macbeth's nature is *\"too full o' th' milk of human _____.\"* Supply the missing noun.",
          answer: {
            type: "text",
            accept: ["kindness"],
            display: "kindness",
          },
          traps: [
            {
              spec: { type: "text", accept: ["weakness", "mercy", "pity", "sympathy"] },
              feedback:
                "Lady Macbeth treats compassion as weakness, but her exact maternal metaphor is 'milk of human **kindness**'.",
            },
          ],
          hints: [
            "Means both 'compassion/gentleness' and 'natural kinship/humankind' in Early Modern English.",
            "Eight-letter noun.",
          ],
          solution: [
            "*\"milk of human **kindness**\"* (1.5) — playing on both tenderness and natural human kinship (*kind*).",
          ],
          commonError:
            "Substituting 'weakness' or 'mercy' for **'kindness'**, or missing the maternal nursing imagery ('milk') that Lady Macbeth immediately rejects ('take my milk for gall').",
        },
        {
          id: "lit-macbeth-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-blood-sleep-light",
          question:
            "Complete Macbeth's envious line about murdered King Duncan in Act 3 Scene 2:\n\n> *\"After life's fitful _____ he sleeps well.\"*",
          answer: {
            type: "text",
            accept: ["fever"],
            display: "fever",
          },
          traps: [
            {
              spec: { type: "text", accept: ["battle", "dream", "storm", "struggle"] },
              feedback:
                "Shakespeare pairs 'fitful' with an alliterative illness metaphor: 'life's fitful **fever**'.",
            },
          ],
          hints: [
            "Alliterates with 'fitful' and links to the disease motif.",
            "Five-letter noun for a burning illness.",
          ],
          solution: [
            "*\"After life's fitful **fever** he sleeps well\"* (3.2) — ironic reversal in which the murderer envies his victim's peaceful rest.",
          ],
          commonError:
            "Guessing 'battle' or 'dream' instead of Shakespeare's disease metaphor **'fever'** ('After life's fitful fever he sleeps well').",
        },
        {
          id: "lit-macbeth-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "lady-macbeth-gender-guilt",
          question:
            "In Act 2 Scene 2, why could Lady Macbeth not stab sleeping King Duncan herself? Complete her confession: *\"Had he not resembled / My _____ as he slept, I had done't.\"*",
          answer: {
            type: "text",
            accept: ["father"],
            display: "father",
          },
          traps: [
            {
              spec: { type: "text", accept: ["husband", "child", "son", "brother"] },
              feedback:
                "Elderly sleeping King Duncan reminded Lady Macbeth of her **father** — an early crack in her 'unsex me here' resolve.",
            },
          ],
          hints: [
            "Patriarchal/filial bond that cracks her 'unsex me here' armour.",
            "In Jacobean thought, the King is also the 'father' of the nation.",
          ],
          solution: [
            "*\"resembled / My **father** as he slept\"* (2.2) — revealing repressed filial conscience and linking fatherhood to kingship.",
          ],
          commonError:
            "Confusing her 'unsex' baby imagery from 1.7 ('given suck') with 2.2, where Duncan's elderly face resembles her **father**.",
        },
        {
          id: "lit-macbeth-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "What two-word literary device describes the audience knowing Lady Macbeth's murder plot in Act 1 Scene 6 while King Duncan praises Inverness's *\"pleasant seat\"*?",
          answer: {
            type: "text",
            accept: ["dramatic irony"],
            display: "dramatic irony",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathetic fallacy"] },
              feedback: "Pathetic fallacy is weather reflecting mood; when the audience knows lethal truth hidden from a character onstage, it is **dramatic irony**.",
            },
          ],
          hints: [
            "Occurs whenever spectators possess crucial knowledge that the onstage speaker lacks.",
            "Two words ending in *irony*.",
          ],
          solution: [
            "**Dramatic irony** exposes Duncan's fatal trust in appearances (*\"no art / To find the mind's construction in the face\"*).",
          ],
        },
        {
          id: "lit-macbeth-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "Give the exact year (**4-digit number**) of the **Gunpowder Plot** against King James I — the immediate political trauma behind *Macbeth*'s imagery of treason and equivocation.",
          answer: {
            type: "number",
            value: 1605,
          },
          traps: [
            {
              spec: { type: "number", value: 1606 },
              feedback: "1606 is when *Macbeth* was first performed (and Father Garnet tried); Guy Fawkes's Gunpowder Plot was November **1605**.",
            },
          ],
          hints: [
            "'Remember, remember, the Fifth of November...' — one year before *Macbeth*'s 1606 premiere.",
            "Two years after James I acceded to the English throne in 1603.",
          ],
          solution: [
            "The Gunpowder Plot took place in November **1605**, directly shaping 1606 *Macbeth*'s preoccupation with regicide and equivocation.",
          ],
        },
        {
          id: "lit-macbeth-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "dramatic-structure-symmetry",
          question:
            "What rhetorical structure (*A-B -> B-A*) names both the Witches' *\"Fair is foul, and foul is fair\"* and the X-shaped marital crossover of Macbeth and Lady Macbeth?",
          answer: {
            type: "text",
            accept: ["chiasmus", "chiasmic"],
            display: "chiasmus",
          },
          traps: [
            {
              spec: { type: "text", accept: ["oxymoron", "paradox", "antithesis", "juxtaposition"] },
              feedback:
                "'Fair is foul' contains paradox/antithesis, but the inverted mirror pattern *A-B -> B-A* is specifically **chiasmus**.",
            },
          ],
          hints: [
            "Named after the Greek letter *chi* (X).",
            "Reverses elements in the second half to form a mirror/cross.",
          ],
          solution: [
            "**Chiasmus** operates at micro-level (*Fair/foul -> foul/fair*) and macro-structural level across the Macbeths' five-act marriage.",
          ],
          commonError:
            "Calling *'Fair is foul, and foul is fair'* merely an 'oxymoron' or 'juxtaposition' instead of identifying the inverted *A-B / B-A* mirror structure of **chiasmus**.",
        },
        {
          id: "lit-macbeth-p2-q11",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "jacobean-divine-right-witchcraft",
          question:
            "Read Banquo's warning in Act 1 Scene 3 alongside Macbeth's realisation in Act 5 Scene 8:\n\n> *\"The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.\"* (1.3)\n> *\"And be these juggling fiends no more believed, / That palter with us in a double sense\"* (5.8)\n\nExplain how Shakespeare presents **supernatural temptation versus human responsibility** across the play (**AO1 + AO2 + AO4**). [4 marks]",
          markScheme: [
            {
              point: "Evaluative AO1 argument: the Witches tempt/catalyse via equivocation, yet Macbeth retains moral agency/culpability.",
              keywords: ["free will", "agency", "culpable", "culpability", "responsible", "responsibility", "catalyst", "tempt"],
            },
            {
              point: "AO2 analysis of Banquo as moral foil and paradox/antithesis ('honest trifles' vs 'deepest consequence').",
              keywords: ["foil", "antithesis", "paradox", "contrast", "oxymoron", "juxtaposition"],
            },
            {
              point: "AO2 analysis of Macbeth's Act 5 anagnorisis and lexical field of trickery ('equivocation', 'riddles', 'deceit').",
              keywords: ["anagnorisis", "equivocation", "equivocal", "riddle", "riddles", "deception", "half-truths"],
            },
            {
              point: "AO4 integration of King James I's Daemonologie, Banquo's Stuart lineage, or post-1605 equivocation trials.",
              keywords: ["daemonologie", "james i", "stuart", "garnet", "gunpowder", "jacobean"],
            },
          ],
          modelAnswer:
            "Shakespeare positions the Weird Sisters as sinister **catalysts** who tempt rather than compel, ensuring Macbeth bears full moral **culpability** for regicide. In Act 1, Banquo functions as a principled dramatic **foil**, using sharp **antithesis** between trivial truths and eternal damnation to diagnose demonic **equivocation** — simultaneously honouring **James I** and his **Stuart** ancestry while aligning with *Daemonologie*. Only in Act 5 does Macbeth reach **anagnorisis**, recognising how **half-truths** about Birnam Wood and Caesarean birth baited his own **free will** in a **Jacobean** warning against treasonous self-deception.",
          hints: [
            "Take a clear stance: do the Witches force Macbeth, or bait his free will?",
            "Analyse Banquo's contrast ('honest trifles' vs 'deepest consequence') and Macbeth's late recognition (anagnorisis).",
            "Link Banquo and equivocation to King James I's Daemonologie and Stuart lineage.",
          ],
        },
        {
          id: "lit-macbeth-p2-q12",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "lady-macbeth-gender-guilt",
          question:
            "Compare two competing visions of **masculinity** in *Macbeth*:\n\n> *LADY MACBETH (1.7): \"When you durst do it, then you were a man\"*\n> *MACDUFF (4.3): \"I shall do so; / But I must also feel it as a man.\"*\n\nAnalyse how Shakespeare uses this contrast (**AO1 + AO2**) to critique **Jacobean gender norms and honour (AO4)**. [4 marks]",
          markScheme: [
            {
              point: "Conceptual contrast between Lady Macbeth's toxic/destructive masculinity and Macduff's balanced, compassionate manhood.",
              keywords: ["toxic", "compassion", "compassionate", "empathy", "balanced", "redefines", "critique"],
            },
            {
              point: "AO2 analysis of Lady Macbeth's coercive manipulation / conditional syntax shaming Macbeth's martial pride.",
              keywords: ["coercive", "manipulates", "manipulation", "shames", "conditional", "taunt", "pride"],
            },
            {
              point: "AO2 analysis of Macduff's parallel epistrophe/repetition ('as a man') uniting emotional grief with righteous action.",
              keywords: ["grief", "mourning", "sorrow", "parallel", "repetition", "righteous", "vengeance"],
            },
            {
              point: "AO4 link to Jacobean chivalric honour vs Christian moral conscience.",
              keywords: ["jacobean", "chivalric", "patriarchal", "christian", "honour", "warrior"],
            },
          ],
          modelAnswer:
            "Shakespeare stages a deliberate ideological collision to **critique** destructive definitions of **Jacobean** **warrior** **honour**. In Act 1, Lady Macbeth **manipulates** her husband's martial **pride**, equating manhood exclusively with pitiless regicidal violence. Conversely, in Act 4, Macduff **redefines** masculinity through balanced **parallel** phrasing that refuses to sever **sorrow** and **grief** from **righteous** courage. By letting **compassionate** Macduff overthrow the numb tyrant in Act 5, Shakespeare affirms a **Christian** ideal in which authentic strength requires moral **empathy** rather than emotional amputation.",
          hints: [
            "Contrast how Lady Macbeth defines 'a man' (pitiless violence) with how Macduff defines 'a man' (grief + justice).",
            "Comment on Lady Macbeth's manipulative conditional shaming vs Macduff's balanced response to Malcolm.",
            "Connect to Jacobean warrior culture and Christian conscience.",
          ],
        },
        {
          id: "lit-macbeth-p2-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "imagery-blood-sleep-light",
          question:
            "Read Macbeth's question in Act 1 Scene 3 alongside Angus's verdict in Act 5 Scene 2:\n\n> *\"The Thane of Cawdor lives: why do you dress me / In borrow'd robes?\"* (1.3)\n> *\"now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.\"* (5.2)\n\nExplain how Shakespeare develops the **clothing motif (AO2)** to explore **legitimate vs illegitimate kingship (AO1 + AO4)**. [4 marks]",
          markScheme: [
            {
              point: "Identifies the whole-play sartorial/clothing motif framing Macbeth's titles as stolen/illegitimate.",
              keywords: ["sartorial", "motif", "illegitimate", "usurper", "usurpation", "stolen", "rightful"],
            },
            {
              point: "Analyses Act 1 foreshadowing and interrogative unease ('borrow'd') linking Macbeth to the traitorous Cawdor.",
              keywords: ["foreshadows", "foreshadowing", "interrogative", "cawdor", "traitor", "irony"],
            },
            {
              point: "Analyses Act 5 simile and sharp antithesis ('giant' vs 'dwarfish thief') belittling Macbeth's moral stature.",
              keywords: ["simile", "antithesis", "belittling", "stature", "diminished", "shrunken", "pathetic"],
            },
            {
              point: "Integrates AO4 Divine Right of Kings: royal grace cannot be seized by force, contrasting Duncan/Malcolm.",
              keywords: ["divine right", "anointed", "duncan", "malcolm", "jacobean", "legitimacy"],
            },
          ],
          modelAnswer:
            "Shakespeare threads a **sartorial** **motif** across all five acts to expose **usurpation** as hollow imposture. In Act 1, Macbeth's **interrogative** unease unwittingly **foreshadows** how he will inherit not merely **Cawdor**'s title, but the executed **traitor**'s treason. By Act 5, Angus completes the chain with a devastating **simile** built on **antithesis**: contrasting the sacred majesty of kingship with Macbeth's **shrunken** moral **stature** reduces the feared tyrant to a **pathetic** criminal. Under the **Jacobean** **Divine Right** of Kings embodied by **Duncan** and **Malcolm**, royal **legitimacy** is conferred by God alone and refuses to fit an unanointed usurper.",
          hints: [
            "Show how the motif bridges Act 1 and Act 5.",
            "Zoom onto the contrast inside Angus's simile ('giant's robe' vs 'dwarfish thief').",
            "Tie ill-fitting garments to the Jacobean Divine Right of Kings (Duncan/Malcolm vs Macbeth).",
          ],
        },
        {
          id: "lit-macbeth-p2-q14",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "dramatic-structure-symmetry",
          question:
            "Consider the **Banquet Scene (Act 3 Scene 4)**, in which **Banquo's silent Ghost** sits in Macbeth's royal seat while Macbeth cries: *\"Never shake / Thy gory locks at me.\"* Analyse how Shakespeare uses **stagecraft and structure (AO2)** at the midpoint of the play. [4 marks]",
          markScheme: [
            {
              point: "Places Act 3 Scene 4 structurally as the public peripeteia / climax where Macbeth's royal facade shatters.",
              keywords: ["peripeteia", "climax", "midpoint", "turning point", "public", "facade", "unravels"],
            },
            {
              point: "Analyses ceremonial symbolism of the state banquet (hierarchical order/hospitality) disrupted by guilt.",
              keywords: ["ceremony", "ceremonial", "hospitality", "harmony", "feast", "court", "disorder"],
            },
            {
              point: "Analyses visual stagecraft: the silent Ghost invisible to thanes occupying Macbeth's own throne/seat.",
              keywords: ["stagecraft", "invisible", "seat", "throne", "hallucination", "silent", "thanes"],
            },
            {
              point: "Links to AO4 Stuart lineage / Banquo's heirs rightfully displacing Macbeth's 'fruitless crown'.",
              keywords: ["lineage", "stuart", "fleance", "james i", "fruitless", "heirs", "dynasty"],
            },
          ],
          modelAnswer:
            "Positioned at the structural **midpoint** immediately after **Fleance**'s escape, the Banquet Scene marks the **climax** where Macbeth's **public** royal **facade** permanently **unravels**. In medieval and Jacobean courts, a state **feast** symbolised hierarchical **harmony** and sacred **hospitality**; having violated both by murdering Duncan and Banquo, Macbeth cannot preside over his own table. Through brilliant visual **stagecraft**, the **silent** apparition — **invisible** to the baffled **thanes** — occupies Macbeth's own **throne**, externalising guilty paranoia while prophetically signalling that Banquo's **Stuart** **heirs** (**James I**'s **dynasty**) will displace Macbeth's *\"fruitless crown\"*.",
          hints: [
            "Why does this scene sit right in the middle of Act 3 after Fleance escapes?",
            "What does a royal banquet normally symbolise, and why is it ironic that the Ghost sits in *Macbeth's* chair?",
            "Connect Banquo occupying the royal seat to the Stuart dynasty / James I.",
          ],
        },
        {
          id: "lit-macbeth-p2-q15",
          kind: "written",
          difficulty: "challenge",
          marks: 5,
          guideRef: "dramatic-structure-symmetry",
          question:
            "Compare the opening battlefield report in **Act 1 Scene 2** (*\"brave Macbeth... unseam'd him from the nave to th' chops, / And fix'd his head upon our battlements\"*) with the final scene in **Act 5 Scene 9** (*\"Behold, where stands / Th' usurper's cursed head... this dead butcher\"*).\n\nWrite a Grade-9 paragraph evaluating how Shakespeare's **cyclical structure (AO2)** shapes our final judgement of Macbeth (**AO1 + AO4**). [5 marks]",
          markScheme: [
            {
              point: "Identifies cyclical structural symmetry bookending the play (Macdonwald's severed head -> Macbeth's severed head).",
              keywords: ["cyclical", "symmetry", "bookends", "framing", "macdonwald", "mirror", "parallel"],
            },
            {
              point: "Evaluates the fine boundary between celebrated state violence ('brave') and treasonous tyranny ('butcher').",
              keywords: ["violence", "valorised", "boundary", "thin line", "brutality", "heroism", "martial"],
            },
            {
              point: "Analyses visual stage prop of the severed head and Malcolm's Restoration of natural/divine order.",
              keywords: ["prop", "restoration", "natural order", "malcolm", "earls", "harmony", "purged"],
            },
            {
              point: "Nuances Malcolm's binary 'dead butcher' verdict against the audience's experience of Macbeth's tragic interiority.",
              keywords: ["nuance", "reductive", "interiority", "soliloquies", "pathos", "catharsis", "tragic waste"],
            },
            {
              point: "Integrates AO4 Jacobean reassurance — treason against God's anointed monarch inevitably ends in nemesis.",
              keywords: ["nemesis", "treason", "jacobean", "divine right", "retribution", "providence"],
            },
          ],
          modelAnswer:
            "Shakespeare's **cyclical** **symmetry** **bookends** the tragedy with identical stage **props** — **Macdonwald**'s severed head in Act 1 mirrored by Macbeth's in Act 5 — proving the national saviour has become the exact rebel monster he once executed. Subtle **martial** irony exposes the perilous **boundary** between state-celebrated **brutality** on Duncan's battlefield and treasonous tyranny. Visually, **Malcolm**'s coronation and creation of Earls enacts **Jacobean** **providence** and divine **retribution**, reassuring 1606 audiences that **treason** ends in **nemesis** and **natural order** is **purged**; yet Malcolm's **reductive** epitaph cannot erase the **tragic waste** and **pathos** the audience witnessed inside Macbeth's agonised **soliloquies**.",
          hints: [
            "Name the cyclical mirror between Macdonwald (1.2) and Macbeth (5.9).",
            "Notice how extreme battlefield violence was *praised* by Duncan in Act 1 before turning inward.",
            "Weigh Malcolm's 'dead butcher' political closure against the tragic interiority we heard in soliloquy.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "lit-macbeth-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "jacobean-divine-right-witchcraft",
      question:
        "In Act 1 Scene 2, King Duncan rewards Macbeth with the **Thane of Cawdor's** title immediately after Cawdor's treason, unaware that Macbeth will soon betray him identically; in Act 1 Scene 4, Duncan reflects on Cawdor: *\"There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust\"* — at the exact instant Macbeth walks through the door. What structural technique is Shakespeare using?",
      options: [
        "Proleptic dramatic irony via cue-timed entrance, turning Macbeth into Cawdor's living double.",
        "Comic stichomythia via rapid half-lines, mocking Scottish military titles and royal honours.",
        "Catalectic trochaic tetrameter via chanted rhyme, signalling Macbeth's supernatural possession.",
        "Aristotelian catharsis via delayed exposition, resolving the play's tragic conflict in Act 1.",
      ],
      answerIndex: 0,
      hints: [
        "Look at the timing of Macbeth's stage entrance right on the phrase 'an absolute trust'.",
        "Macbeth literally inherits Cawdor's title *and* his structural role as trusted traitor.",
        "Think about forward-pointing (*proleptic*) dramatic irony.",
      ],
      explanation:
        "Timing Macbeth's entrance to collide with Duncan's lament over Cawdor's betrayal creates **proleptic dramatic irony**: stagecraft visually installs Macbeth as Cawdor's structural double.",
    },
    {
      id: "lit-macbeth-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "tragic-hamartia-soliloquies",
      question:
        "What Greek Aristotelian tragedy term names the moment of **startling recognition or discovery** — experienced by Macbeth in Act 5 Scene 8 when Macduff's Caesarean birth exposes the *\"juggling fiends\"* who *\"keep the word of promise to our ear, / And break it to our hope\"*?",
      answer: {
        type: "text",
        accept: ["anagnorisis"],
        display: "anagnorisis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["peripeteia"] },
          feedback: "Peripeteia is the external reversal of fortune (Act 3); the hero's moment of painful *recognition/insight* is **anagnorisis**.",
        },
        {
          spec: { type: "text", accept: ["hamartia"] },
          feedback: "Hamartia is the fatal flaw; the late moment of tragic realisation is **anagnorisis**.",
        },
      ],
      hints: [
        "One of Aristotle's three key *Poetics* terms alongside *hamartia* and *peripeteia*.",
        "Means 'recognition' — shifting from ignorance/self-delusion to bitter truth.",
        "Starts with *anag-*.",
      ],
      solution: [
        "**Anagnorisis** is the tragic hero's recognition of truth — when Macbeth finally perceives the Witches' equivocal trap in Act 5 Scene 8.",
      ],
    },
    {
      id: "lit-macbeth-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "imagery-blood-sleep-light",
      question:
        "In Act 1 Scene 7, Macbeth imagines Duncan's virtues pleading against regicide:\n\n> *\"And pity, like a naked new-born babe,*\n> *Striding the blast, or heaven's cherubim, horsed*\n> *Upon the sightless couriers of the air,*\n> *Shall blow the horrid deed in every eye,*\n> *That tears shall drown the wind.\"*\n\nWhy is this paradoxical simile (*\"naked new-born babe, / Striding the blast\"*) central to the play's moral vision?",
      options: [
        "It functions as literal prophetic foreshadowing that Lady Macbeth will bear a legitimate royal heir in Act 3, securing Macbeth's contested crown against Banquo's surviving Stuart descendants.",
        "It fuses extreme vulnerability ('naked new-born babe') with irresistible cosmic power ('Striding the blast'), prefiguring how murdered innocence (Duncan, Banquo's line, Macduff's babes) ultimately topples armed tyranny.",
        "It exposes Macbeth's deep-seated contempt for childhood weakness from the very opening of Act 1, revealing that he already intends to murder Macduff's household before touching King Duncan.",
        "It directly recounts the Bloody Child apparition's later warning to Banquo on the blasted heath, collapsing Shakespeare's five-act chronology to link Duncan's virtues with demonic witchcraft.",
      ],
      answerIndex: 1,
      hints: [
        "Notice the oxymoronic clash: how can a 'naked new-born babe' stride a storm-blast?",
        "Track children across the play: Lady Macbeth's 'babe that milks me', Fleance, Macduff's son, the Bloody & Crowned Child apparitions.",
        "In Shakespeare's moral cosmos, vulnerability ('pity') exercises stronger spiritual force than brute armour.",
      ],
      explanation:
        "Personifying **pity** as a *\"naked new-born babe / Striding the blast\"* establishes a profound paradox: defenceless innocence possesses apocalyptic moral force that eventually rallies Scotland and heaven to drown Macbeth's tyranny.",
    },
    {
      id: "lit-macbeth-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "dramatic-structure-symmetry",
      question:
        "What classical Greek dramatic term names **rapid-fire alternating single lines or shared half-lines** between two characters in heightened tension — such as Macbeth and Lady Macbeth whispering *\"Did not you speak? / When? / Now. / As I descended?\"* in Act 2 Scene 2?",
      answer: {
        type: "text",
        accept: ["stichomythia", "shared half-lines", "broken verse"],
        display: "stichomythia",
      },
      traps: [
        {
          spec: { type: "text", accept: ["soliloquy", "aside", "enjambment", "caesura"] },
          feedback:
            "Soliloquy is speaking alone and caesura is an internal pause; rapid-fire alternating dialogue across two speakers is **stichomythia**.",
        },
      ],
      hints: [
        "Classical Greek dramatic term for rapid line-by-line / half-line verbal volley.",
        "Creates breathless panic after Duncan's murder.",
        "Starts with *stich-*.",
      ],
      solution: [
        "**Stichomythia** (and split/shared half-lines of iambic pentameter) accelerates dramatic tempo to enact shared terror in Act 2 Scene 2.",
      ],
      commonError:
        "Confusing rapid alternating **stichomythia** with *caesura* (a pause inside one line) or *enjambment* (spilling across a line-end).",
    },
    {
      id: "lit-macbeth-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "lady-macbeth-gender-guilt",
      question:
        "Compare two lines spoken by Lady Macbeth:\n- Act 3 Scene 2 (to Macbeth): *\"Things without all remedy / Should be without regard: what's done is done.\"*\n- Act 5 Scene 1 (sleepwalking): *\"To bed, to bed; there's knocking at the gate. Come, come, come, come, give me your hand. What's done cannot be undone.\"*\n\nHow does the syntactic transformation from *\"what's done is done\"* to *\"What's done cannot be undone\"* encapsulate her tragedy?",
      options: [
        "Both statements express the same crisp pragmatic resolve, proving that even in Act 5 Lady Macbeth remains philosophically detached from past bloodshed and immune to remorse.",
        "The grammatical expansion marks her conscious Christian reconciliation with Macbeth, offering spousal forgiveness for his unilateral decision to have Banquo murdered in Act 3.",
        "Her brisk tautology ('is done' = case closed) mutates into a haunted negative passive ('cannot be undone' = eternal trap), exposing time as a prison in which Act 2's knocking repeats forever.",
        "The shift into steady modal verbs confirms that the Scottish Doctor's remedies have finally soothed her troubled conscience and restored restful sleep ahead of Dunsinane's siege.",
      ],
      answerIndex: 2,
      hints: [
        "Compare the tone of 'what's done is done' (brisk dismissal of the past) with 'What's done cannot be undone' (inescapable permanence).",
        "Notice she is still hearing the Act 2 Scene 2 'knocking at the gate' years later!",
        "Look at how Macbeth loses meaning in future time ('Tomorrow, and tomorrow') while Lady Macbeth is trapped in past time.",
      ],
      explanation:
        "Shakespeare contrasts two temporal hells: while Macbeth sees an empty future (*\"Tomorrow, and tomorrow\"*), Lady Macbeth's shift from *\"what's done is done\"* to *\"What's done cannot be undone\"* traps her forever inside the night of regicide.",
    },
    {
      id: "lit-macbeth-ch-q06",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "jacobean-divine-right-witchcraft",
      question:
        "Evaluate how Shakespeare uses **prosody and shifts between verse and prose (AO2)** across *Macbeth* as a structural barometer of **moral and psychological order (AO1 + AO4)**.\n\nRefer in your answer to:\n- Noble characters' **iambic pentameter**\n- The Witches' **trochaic tetrameter** (*\"Fair is foul, and foul is fair\"*)\n- Lady Macbeth's **Act 5 Scene 1 prose** (*\"Out, damned spot!\"*) [5 marks]",
      markScheme: [
        {
          point: "Overarching thesis treating prosody/form as an audible map of cosmic and mental order vs chaos.",
          keywords: ["barometer", "order", "chaos", "disorder", "harmony", "audible", "prosody", "metrical"],
        },
        {
          point: "Analyses noble iambic pentameter (blank verse) as rational courtly self-command (and split half-lines in 2.2 panic).",
          keywords: ["iambic pentameter", "blank verse", "heartbeat", "rising", "courtly", "rational", "half-lines"],
        },
        {
          point: "Analyses the Witches' catalectic trochaic tetrameter & rhyme inverting courtly metre into supernatural incantation.",
          keywords: ["trochaic", "falling", "incantation", "incantatory", "inverts", "supernatural", "chant"],
        },
        {
          point: "Analyses Lady Macbeth's collapse from blank verse into disjointed prose in 5.1 as psychological disintegration.",
          keywords: ["prose", "disjointed", "fragmented", "madness", "somnambulism", "disintegration", "breakdown"],
        },
        {
          point: "Integrates AO4 Jacobean Great Chain of Being / Daemonologie — moral transgression fractures rational form.",
          keywords: ["great chain", "jacobean", "daemonologie", "regicide", "james i", "divine"],
        },
      ],
      modelAnswer:
        "Throughout *Macbeth*, Shakespeare deploys **prosody** as an **audible** **barometer** of cosmic **harmony** versus spiritual **chaos**. Lawful Scottish nobles speak unrhymed **iambic pentameter**, whose steady **rising** **heartbeat** embodies **rational** **courtly** governance — fracturing into breathless **half-lines** the instant **regicide** shatters Duncan's peace in Act 2. Conversely, the Weird Sisters chant **falling** **trochaic** rhythms whose **incantatory** chime **inverts** courtly blank verse, staging **James I**'s *Daemonologie* dread of **supernatural** subversion. Most devastatingly, Lady Macbeth's descent from architectural verse into **disjointed** **prose** during Act 5 **somnambulism** dramatises total mental **disintegration**: within the **Jacobean** **Great Chain** of Being, violating **divine** hierarchy ultimately fractures human reason itself.",
      hints: [
        "Open with a conceptual thesis: metre in Macbeth is not decoration — it maps moral/mental order.",
        "Contrast rising 5-foot iambic pentameter (and 2.2 broken half-lines) against falling 4-foot trochaic chants.",
        "Explain why Lady Macbeth dropping into prose in 5.1 completes the AO4 Jacobean warning.",
      ],
    },
    {
      id: "lit-macbeth-ch-q07",
      kind: "written",
      difficulty: "challenge",
      marks: 5,
      guideRef: "dramatic-structure-symmetry",
      question:
        "\"Macbeth is a ruthless monster who deserves zero audience sympathy.\" How far do you agree?\n\nWrite a nuanced Grade-9 evaluative paragraph balancing **Macbeth's tyrannical atrocities** (e.g. Banquo & Fife, 4.2) against his **soliloquy interiority** (*\"Vaulting ambition\"* 1.7; *\"full of scorpions\"* 3.2; *\"poor player\"* 5.5) (**AO1 + AO2 + AO4**). [5 marks]",
      markScheme: [
        {
          point: "Nuanced steelmanning thesis ('While publicly... privately...') rejecting a flat one-sided verdict.",
          keywords: ["nuanced", "paradox", "tension", "duality", "while", "conversely", "sympathy", "pathos"],
        },
        {
          point: "Acknowledges his indefensible escalation into tyranny — regicide, Banquo, and on-stage infanticide at Fife (4.2).",
          keywords: ["tyrant", "tyranny", "fife", "macduff", "infanticide", "slaughter", "butcher", "atrocities"],
        },
        {
          point: "Analyses how Shakespeare's soliloquies force audience intimacy with his tortured conscience and self-loathing.",
          keywords: ["soliloquy", "soliloquies", "intimacy", "interiority", "conscience", "torment", "anguish"],
        },
        {
          point: "Analyses specific AO2 imagery (equestrian fall, venomous mind, or metatheatrical emptiness) generating tragic waste.",
          keywords: ["metaphor", "venomous", "metatheatrical", "nihilism", "tragic waste", "aristotelian", "catharsis"],
        },
        {
          point: "Links to AO4 Jacobean tragedy: Macbeth must fall to vindicate Divine Right, yet his lucidity warns how noble potential corrupts.",
          keywords: ["jacobean", "divine right", "damnation", "cautionary", "free will", "potential", "noble"],
        },
      ],
      modelAnswer:
        "**While** Macbeth's public **atrocities** — culminating in the cowardly on-stage **slaughter** of Macduff's children at **Fife** — fully justify Malcolm's political verdict of **tyrant**, Shakespeare's **soliloquies** forbid reducing him to a flat pantomime monster. By granting us relentless **intimacy** with Macbeth's **interiority**, Shakespeare forces spectators to witness an eloquent **conscience** knowingly poisoning itself: from his **venomous** arachnid **metaphor** of royal torment to his **metatheatrical** **nihilism** in Act 5, Macbeth suffers every inch of his own **damnation**. Within **Jacobean** **Aristotelian** tragedy, **Divine Right** demands his destruction, yet **pathos** and **tragic waste** endure precisely because we remember the **noble** warrior whose **free will** squandered greatness.",
      hints: [
        "Use a 'While X, Shakespeare simultaneously Y' structure to hit top-band evaluation.",
        "Concede the horror of Fife (4.2), then show why soliloquies create compulsory psychological intimacy.",
        "Tie Aristotelian tragic waste + Jacobean cautionary damnation together at the close.",
      ],
    },
    {
      id: "lit-macbeth-ch-q08",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "imagery-blood-sleep-light",
      question:
        "In Act 2 Scene 2, Macbeth laments that he could not say *\"Amen\"* when the sleeping grooms cried *\"God bless us!\"*: *\"Wherefore could not I pronounce 'Amen'? / I had most need of blessing, and 'Amen' / Stuck in my throat.\"* Why is this detail devastating within a **1606 Protestant Jacobean** context?",
      options: [
        "It satirises Macbeth's ignorance of traditional Latin church liturgy taught in medieval Scottish schools, portraying his spiritual dread as mere uneducated clerical embarrassment.",
        "It proves that King Duncan's drugged chamberlains were secretly wide awake and whispering a coded prayer to alert Inverness's guards before Macbeth could flee the bedchamber.",
        "It dramatises immediate spiritual excommunication: the physical choking on 'Amen' symbolises regicide severing Macbeth instantaneously from divine grace before any human discovers the crime.",
        "It introduces ironic comic bathos through physical slapstick, mocking Macbeth's superstitious anxiety right before the drunken Porter's arrival lightens the atmosphere further.",
      ],
      answerIndex: 3 - 1,
      hints: [
        "Notice nobody on earth has discovered Duncan's body yet — why is Macbeth *already* punished?",
        "What does 'Amen' ('so be it') seal at the end of a Christian prayer for blessing?",
        "Think psychosomatic symptom of spiritual severance from God.",
      ],
      explanation:
        "Before Macduff ever knocks, Macbeth's inability to utter *\"Amen\"* (*\"Stuck in my throat\"*) dramatises immediate **spiritual self-excommunication**: murdering *\"The Lord's anointed\"* severs the regicide from God's grace at the exact instant of the blow.",
    },
  ],
};
