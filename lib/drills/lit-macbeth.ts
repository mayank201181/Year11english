import type { Drill, DrillItem, Rng } from "./types.ts";

interface QuoteBlank {
  act: string;
  speaker: string;
  quoteWithBlank: string;
  missing: string;
  accept: string[];
  trapWord: string;
  trapFeedback: string;
  note: string;
}

const QUOTE_BLANKS: readonly QuoteBlank[] = [
  {
    act: "Act 1 Scene 1",
    speaker: "Witches",
    quoteWithBlank: "\"Fair is _____, and foul is fair\"",
    missing: "foul",
    accept: ["foul"],
    trapWord: "dark",
    trapFeedback: "Notice the chiasmic mirror: 'Fair is **foul**, and foul is fair'.",
    note: "Chiasmus in trochaic tetrameter establishes moral inversion.",
  },
  {
    act: "Act 1 Scene 2",
    speaker: "Captain",
    quoteWithBlank: "\"Like _____'s minion carved out his passage\"",
    missing: "valour",
    accept: ["valour", "valor", "valour's", "valors"],
    trapWord: "fortune",
    trapFeedback: "Macbeth *disdains* Fortune; the Captain calls him **valour**'s minion (darling of courage).",
    note: "Establishes Macbeth's initial heroic stature before temptation.",
  },
  {
    act: "Act 1 Scene 3",
    speaker: "Macbeth",
    quoteWithBlank: "\"why do you dress me / In _____'d robes?\"",
    missing: "borrow",
    accept: ["borrow", "borrow'd", "borrowed"],
    trapWord: "stolen",
    trapFeedback: "In 1.3 he says **borrow'd** robes — later echoed by Angus's 'giant's robe / Upon a dwarfish thief' (5.2).",
    note: "Launches the whole-play sartorial (clothing) motif of illegitimate titles.",
  },
  {
    act: "Act 1 Scene 3",
    speaker: "Banquo",
    quoteWithBlank: "\"The instruments of _____ tell us truths, / Win us with honest trifles\"",
    missing: "darkness",
    accept: ["darkness"],
    trapWord: "evil",
    trapFeedback: "Banquo specifically names the Witches 'instruments of **darkness**' to warn Macbeth against equivocation.",
    note: "Positions Banquo as Macbeth's discerning moral foil.",
  },
  {
    act: "Act 1 Scene 4",
    speaker: "Macbeth",
    quoteWithBlank: "\"_____, hide your fires; / Let not light see my black and deep desires\"",
    missing: "Stars",
    accept: ["Stars", "star"],
    trapWord: "Sun",
    trapFeedback: "After Duncan compares noblemen to shining stars, Macbeth begs '**Stars**, hide your fires'.",
    note: "Apostrophe showing Macbeth knows his regicidal desires offend heaven.",
  },
  {
    act: "Act 1 Scene 5",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"It is too full o' th' _____ of human kindness\"",
    missing: "milk",
    accept: ["milk"],
    trapWord: "blood",
    trapFeedback: "She equates compassion with maternal **milk** — which she soon asks spirits to turn into 'gall'.",
    note: "Links tenderness with femininity, which Lady Macbeth scorns as weakness.",
  },
  {
    act: "Act 1 Scene 5",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"Come, you spirits / That tend on mortal thoughts, _____ me here\"",
    missing: "unsex",
    accept: ["unsex"],
    trapWord: "harden",
    trapFeedback: "Shakespeare's bold verb is '**unsex** me here' — begging spirits to strip away compassionate womanhood.",
    note: "Demonic apostrophe subverting Jacobean patriarchal femininity.",
  },
  {
    act: "Act 1 Scene 5",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"Look like th' innocent flower, / But be the _____ under't\"",
    missing: "serpent",
    accept: ["serpent"],
    trapWord: "viper",
    trapFeedback: "Shakespeare uses the biblical & Gunpowder-Plot medal noun '**serpent**'.",
    note: "Encapsulates appearance vs reality and alludes to King James I's 1605 medal.",
  },
  {
    act: "Act 1 Scene 7",
    speaker: "Macbeth",
    quoteWithBlank: "\"I have no spur / To prick the sides of my intent, but only / _____ ambition\"",
    missing: "Vaulting",
    accept: ["vaulting"],
    trapWord: "Burning",
    trapFeedback: "The equestrian adjective is '**Vaulting** ambition' — leaping too high into the saddle and falling.",
    note: "Names Macbeth's Aristotelian hamartia before he murders Duncan.",
  },
  {
    act: "Act 2 Scene 1",
    speaker: "Macbeth",
    quoteWithBlank: "\"Is this a _____ which I see before me, / The handle toward my hand?\"",
    missing: "dagger",
    accept: ["dagger"],
    trapWord: "sword",
    trapFeedback: "In battle Macbeth wields a sword; for treacherous regicide in darkness he hallucinates a **dagger**.",
    note: "Optical hallucination ('dagger of the mind') dramatising his psychological threshold.",
  },
  {
    act: "Act 2 Scene 2",
    speaker: "Macbeth",
    quoteWithBlank: "\"Methought I heard a voice cry '_____ no more!'\"",
    missing: "Sleep",
    accept: ["sleep"],
    trapWord: "Peace",
    trapFeedback: "Murdering the sleeping King murders natural rest itself: '**Sleep** no more! Macbeth does murder sleep'.",
    note: "Initiates the insomnia and somnambulism motif.",
  },
  {
    act: "Act 2 Scene 2",
    speaker: "Macbeth",
    quoteWithBlank: "\"Will all great _____'s ocean wash this blood / Clean from my hand?\"",
    missing: "Neptune",
    accept: ["Neptune", "Neptune's", "Neptunes"],
    trapWord: "Poseidon",
    trapFeedback: "Shakespeare uses the Roman sea-god '**Neptune**'s ocean'.",
    note: "Hyperbolic classical allusion expressing indelible cosmic guilt.",
  },
  {
    act: "Act 2 Scene 2",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"A little _____ clears us of this deed\"",
    missing: "water",
    accept: ["water"],
    trapWord: "soap",
    trapFeedback: "She dismissively claims 'A little **water** clears us of this deed' — tragically inverted in Act 5 Scene 1.",
    note: "Hubristic understatement set up for ironic reversal in the sleepwalking scene.",
  },
  {
    act: "Act 2 Scene 3",
    speaker: "Macduff",
    quoteWithBlank: "\"Most sacrilegious murder hath broke ope / The Lord's _____ temple\"",
    missing: "anointed",
    accept: ["anointed"],
    trapWord: "sacred",
    trapFeedback: "Macduff says 'The Lord's **anointed** temple', invoking coronation oil and the Divine Right of Kings.",
    note: "AO4 anchor framing regicide as blasphemy against God.",
  },
  {
    act: "Act 2 Scene 4",
    speaker: "Old Man",
    quoteWithBlank: "\"A falcon, towering in her pride of place, / Was by a mousing _____ hawk'd at and kill'd\"",
    missing: "owl",
    accept: ["owl"],
    trapWord: "crow",
    trapFeedback: "A lowly nocturnal 'mousing **owl**' kills the royal falcon — mirroring Macbeth killing King Duncan.",
    note: "Symbolises the rupture of the Great Chain of Being.",
  },
  {
    act: "Act 3 Scene 1",
    speaker: "Macbeth",
    quoteWithBlank: "\"Upon my head they placed a _____ crown / And put a barren sceptre in my gripe\"",
    missing: "fruitless",
    accept: ["fruitless"],
    trapWord: "hollow",
    trapFeedback: "Because Banquo's heirs (not Macbeth's) will inherit Scotland, Macbeth calls it a '**fruitless** crown'.",
    note: "Contrasts Macbeth's sterile usurpation with Duncan's fertility imagery.",
  },
  {
    act: "Act 3 Scene 2",
    speaker: "Macbeth",
    quoteWithBlank: "\"O, full of _____ is my mind, dear wife!\"",
    missing: "scorpions",
    accept: ["scorpions", "scorpion"],
    trapWord: "serpents",
    trapFeedback: "In 1.5 Lady Macbeth said 'serpent'; in 3.2 Macbeth's tormented mind is 'full of **scorpions**'.",
    note: "Venomous metaphor marking Macbeth's paranoid mental torment as King.",
  },
  {
    act: "Act 3 Scene 2",
    speaker: "Macbeth",
    quoteWithBlank: "\"Be innocent of the _____, dearest chuck, / Till thou applaud the deed\"",
    missing: "knowledge",
    accept: ["knowledge"],
    trapWord: "murder",
    trapFeedback: "Macbeth tells her 'Be innocent of the **knowledge**, dearest chuck', shutting her out of Banquo's murder.",
    note: "Marks the chiasmic power-shift in their marriage.",
  },
  {
    act: "Act 3 Scene 4",
    speaker: "Macbeth",
    quoteWithBlank: "\"Never shake / Thy _____ locks at me\"",
    missing: "gory",
    accept: ["gory"],
    trapWord: "bloody",
    trapFeedback: "Addressing Banquo's Ghost at the banquet, Macbeth cries 'Never shake / Thy **gory** locks at me'.",
    note: "Public breakdown of Macbeth's royal facade at the state banquet.",
  },
  {
    act: "Act 3 Scene 4",
    speaker: "Macbeth",
    quoteWithBlank: "\"I am in _____ / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er\"",
    missing: "blood",
    accept: ["blood"],
    trapWord: "guilt",
    trapFeedback: "He pictures tyranny as a river of **blood** halfway crossed.",
    note: "Marks Macbeth's moral desensitisation after the banquet scene.",
  },
  {
    act: "Act 4 Scene 1",
    speaker: "Second Apparition",
    quoteWithBlank: "\"for none of _____ born / Shall harm Macbeth\"",
    missing: "woman",
    accept: ["woman"],
    trapWord: "mother",
    trapFeedback: "The Bloody Child equivocates: 'none of **woman** born / Shall harm Macbeth'.",
    note: "Equivocal riddle later resolved by Macduff's Caesarean birth.",
  },
  {
    act: "Act 4 Scene 3",
    speaker: "Macduff",
    quoteWithBlank: "\"Dispute it like a man.\" — \"I shall do so; / But I must also _____ it as a man\"",
    missing: "feel",
    accept: ["feel"],
    trapWord: "mourn",
    trapFeedback: "Macduff answers Malcolm: 'But I must also **feel** it as a man' — uniting grief with courage.",
    note: "Redefines virtuous masculinity against Lady Macbeth's ruthless 'unsex me'.",
  },
  {
    act: "Act 5 Scene 1",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"Out, damned _____! out, I say!\"",
    missing: "spot",
    accept: ["spot"],
    trapWord: "stain",
    trapFeedback: "Her iconic fragmented prose cry is 'Out, damned **spot**!'.",
    note: "Psychosomatic bloodstain in prose sleepwalking.",
  },
  {
    act: "Act 5 Scene 1",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"All the _____ of Arabia will not sweeten this little hand\"",
    missing: "perfumes",
    accept: ["perfumes", "perfume"],
    trapWord: "waters",
    trapFeedback: "In 2.2 she trusted 'water'; in 5.1 not even 'All the **perfumes** of Arabia' can mask the smell of blood.",
    note: "Olfactory hyperbole completing her chiasmic collapse.",
  },
  {
    act: "Act 5 Scene 2",
    speaker: "Angus",
    quoteWithBlank: "\"Hang loose about him, like a _____'s robe / Upon a dwarfish thief\"",
    missing: "giant",
    accept: ["giant", "giant's", "giants"],
    trapWord: "king",
    trapFeedback: "Angus contrasts 'dwarfish thief' with a '**giant**'s robe'.",
    note: "Culmination of the borrowed-robes motif.",
  },
  {
    act: "Act 5 Scene 5",
    speaker: "Macbeth",
    quoteWithBlank: "\"Out, out, brief _____! / Life's but a walking shadow\"",
    missing: "candle",
    accept: ["candle"],
    trapWord: "flame",
    trapFeedback: "Macbeth cries 'Out, out, brief **candle**!' upon hearing of Lady Macbeth's death.",
    note: "Culmination of the light/darkness motif in nihilistic despair.",
  },
  {
    act: "Act 5 Scene 5",
    speaker: "Macbeth",
    quoteWithBlank: "\"It is a tale / Told by an idiot, full of sound and fury, / Signifying _____\"",
    missing: "nothing",
    accept: ["nothing"],
    trapWord: "death",
    trapFeedback: "The soliloquy ends on total existential emptiness: 'Signifying **nothing**'.",
    note: "Nihilistic consequence of severing himself from moral and divine order.",
  },
  {
    act: "Act 5 Scene 8",
    speaker: "Macduff",
    quoteWithBlank: "\"Macduff was from his mother's womb / _____ ripp'd\"",
    missing: "Untimely",
    accept: ["untimely"],
    trapWord: "Early",
    trapFeedback: "Macduff reveals he was '**Untimely** ripp'd' (born by Caesarean section).",
    note: "Shatters Macbeth's trust in the Witches' equivocation.",
  },
  {
    act: "Act 5 Scene 9",
    speaker: "Malcolm",
    quoteWithBlank: "\"this dead _____ and his fiend-like queen\"",
    missing: "butcher",
    accept: ["butcher"],
    trapWord: "traitor",
    trapFeedback: "Malcolm's final verdict reduces once-noble Macbeth to 'this dead **butcher**'.",
    note: "Shows how history remembers Macbeth once order is restored.",
  },
  {
    act: "Act 2 Scene 3",
    speaker: "Porter",
    quoteWithBlank: "\"Faith, here's an _____, that could swear in both the scales against either scale\"",
    missing: "equivocator",
    accept: ["equivocator"],
    trapWord: "hypocrite",
    trapFeedback: "The Porter welcomes a Jesuit '**equivocator**' to Inverness hell-gate (1606 Father Garnet allusion).",
    note: "Connects comic bathos directly to Gunpowder Plot equivocation.",
  },
  {
    act: "Act 1 Scene 3",
    speaker: "Macbeth",
    quoteWithBlank: "\"So foul and _____ a day I have not seen\"",
    missing: "fair",
    accept: ["fair"],
    trapWord: "cold",
    trapFeedback: "Macbeth's very first line echoes the Witches' paradox: 'So foul and **fair** a day'.",
    note: "Establishes an uncanny verbal bond with the Weird Sisters before meeting them.",
  },
  {
    act: "Act 3 Scene 2",
    speaker: "Lady Macbeth",
    quoteWithBlank: "\"_____'s had, all's spent, / Where our desire is got without content\"",
    missing: "Nought",
    accept: ["nought", "naught", "nothing"],
    trapWord: "All",
    trapFeedback: "Her rhyming couplet opens '**Nought**'s had, all's spent' — everything sacrificed for zero peace.",
    note: "Reveals Lady Macbeth's private emptiness immediately after gaining the crown.",
  },
];

interface AttributionItem {
  quote: string;
  speaker: string;
  acceptSpeaker: string[];
  actNum: number;
  foilSpeaker: string;
  contextClue: string;
  explanation: string;
}

const ATTRIBUTIONS: readonly AttributionItem[] = [
  {
    quote: "\"And oftentimes, to win us to our harm, / The instruments of darkness tell us truths\"",
    speaker: "Banquo",
    acceptSpeaker: ["Banquo"],
    actNum: 1,
    foilSpeaker: "Macduff",
    contextClue: "Spoken on the heath right after Ross hails Macbeth Thane of Cawdor",
    explanation: "**Banquo** warns Macbeth in Act 1 Scene 3 that demonic equivocators bait traps with small truths.",
  },
  {
    quote: "\"There's no art / To find the mind's construction in the face\"",
    speaker: "Duncan",
    acceptSpeaker: ["Duncan", "King Duncan"],
    actNum: 1,
    foilSpeaker: "Malcolm",
    contextClue: "Reflecting on the executed Thane of Cawdor seconds before welcoming Macbeth",
    explanation: "**King Duncan** speaks this in Act 1 Scene 4 — heavy dramatic irony as Macbeth enters plotting regicide.",
  },
  {
    quote: "\"Come, thick night, / And pall thee in the dunnest smoke of hell\"",
    speaker: "Lady Macbeth",
    acceptSpeaker: ["Lady Macbeth"],
    actNum: 1,
    foilSpeaker: "First Witch",
    contextClue: "Spoken alone at Inverness after learning Duncan will stay the night",
    explanation: "**Lady Macbeth** summons hellish darkness in Act 1 Scene 5 so heaven cannot witness the knife.",
  },
  {
    quote: "\"I have no spur / To prick the sides of my intent, but only / Vaulting ambition\"",
    speaker: "Macbeth",
    acceptSpeaker: ["Macbeth"],
    actNum: 1,
    foilSpeaker: "Banquo",
    contextClue: "Spoken outside the banquet hall while Duncan dines inside",
    explanation: "**Macbeth** diagnoses his own hamartia in his Act 1 Scene 7 soliloquy.",
  },
  {
    quote: "\"Had he not resembled / My father as he slept, I had done't\"",
    speaker: "Lady Macbeth",
    acceptSpeaker: ["Lady Macbeth"],
    actNum: 2,
    foilSpeaker: "Macduff",
    contextClue: "Whispered in the courtyard while waiting for Duncan's murder",
    explanation: "**Lady Macbeth** reveals a crack of repressed filial humanity in Act 2 Scene 2.",
  },
  {
    quote: "\"Faith, here's an equivocator, that could swear in both the scales\"",
    speaker: "Porter",
    acceptSpeaker: ["Porter", "The Porter"],
    actNum: 2,
    foilSpeaker: "Ross",
    contextClue: "Spoken in prose while knocking echoes at the south gate of Inverness",
    explanation: "The drunken **Porter** imagines guarding Hell's gate in Act 2 Scene 3.",
  },
  {
    quote: "\"Most sacrilegious murder hath broke ope / The Lord's anointed temple\"",
    speaker: "Macduff",
    acceptSpeaker: ["Macduff"],
    actNum: 2,
    foilSpeaker: "Banquo",
    contextClue: "Cried aloud upon discovering King Duncan's corpse in his chamber",
    explanation: "**Macduff** frames regicide as sacrilege against the Divine Right of Kings in Act 2 Scene 3.",
  },
  {
    quote: "\"Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't\"",
    speaker: "Banquo",
    acceptSpeaker: ["Banquo"],
    actNum: 3,
    foilSpeaker: "Lennox",
    contextClue: "Spoken in soliloquy at Forres palace before riding out with Fleance",
    explanation: "**Banquo** voices private suspicion of Macbeth's regicide at the opening of Act 3 Scene 1.",
  },
  {
    quote: "\"O, full of scorpions is my mind, dear wife!\"",
    speaker: "Macbeth",
    acceptSpeaker: ["Macbeth"],
    actNum: 3,
    foilSpeaker: "Lady Macbeth",
    contextClue: "Confessed while Banquo and his son Fleance still live",
    explanation: "**Macbeth** expresses paranoid torment in Act 3 Scene 2 just before concealing Banquo's murder plot.",
  },
  {
    quote: "\"I shall do so; / But I must also feel it as a man\"",
    speaker: "Macduff",
    acceptSpeaker: ["Macduff"],
    actNum: 4,
    foilSpeaker: "Malcolm",
    contextClue: "Spoken in exile in England upon learning his wife and children were slaughtered",
    explanation: "**Macduff** redefines manhood to include grief as well as righteous vengeance in Act 4 Scene 3.",
  },
  {
    quote: "\"Unnatural deeds / Do breed unnatural troubles; infected minds / To their deaf pillows will discharge their secrets\"",
    speaker: "Doctor",
    acceptSpeaker: ["Doctor", "Scottish Doctor"],
    actNum: 5,
    foilSpeaker: "Gentlewoman",
    contextClue: "Diagnosing the sleepwalking Queen at Dunsinane",
    explanation: "The **Doctor** recognises spiritual guilt beyond medicine in Act 5 Scene 1.",
  },
  {
    quote: "\"now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief\"",
    speaker: "Angus",
    acceptSpeaker: ["Angus"],
    actNum: 5,
    foilSpeaker: "Ross",
    contextClue: "Spoken by a Scottish rebel thane marching toward Birnam Wood",
    explanation: "**Angus** delivers the culminating borrowed-robes simile in Act 5 Scene 2.",
  },
  {
    quote: "\"Out, out, brief candle! / Life's but a walking shadow, a poor player\"",
    speaker: "Macbeth",
    acceptSpeaker: ["Macbeth"],
    actNum: 5,
    foilSpeaker: "Malcolm",
    contextClue: "Spoken at Dunsinane immediately after Seyton reports the Queen is dead",
    explanation: "**Macbeth** delivers his nihilistic 'Tomorrow, and tomorrow' soliloquy in Act 5 Scene 5.",
  },
  {
    quote: "\"Producing forth the cruel ministers / Of this dead butcher and his fiend-like queen\"",
    speaker: "Malcolm",
    acceptSpeaker: ["Malcolm", "King Malcolm"],
    actNum: 5,
    foilSpeaker: "Macduff",
    contextClue: "Final speech restoring lawful rule and creating Scotland's first Earls",
    explanation: "**Malcolm** closes the play in Act 5 Scene 9 after Macduff presents Macbeth's severed head.",
  },
  {
    quote: "\"Like valour's minion carved out his passage\"",
    speaker: "Captain",
    acceptSpeaker: ["Captain", "Bleeding Captain", "Sergeant"],
    actNum: 1,
    foilSpeaker: "Ross",
    contextClue: "Wounded battlefield report praising Macbeth's defeat of rebel Macdonwald",
    explanation: "The wounded **Captain** establishes Macbeth's noble courage in Act 1 Scene 2.",
  },
  {
    quote: "\"A falcon, towering in her pride of place, / Was by a mousing owl hawk'd at and kill'd\"",
    speaker: "Old Man",
    acceptSpeaker: ["Old Man"],
    actNum: 2,
    foilSpeaker: "Porter",
    contextClue: "Discussing unnatural portents outside Inverness after Duncan's murder",
    explanation: "The **Old Man** describes the inverted Great Chain of Being to Ross in Act 2 Scene 4.",
  },
];

interface CraftItem {
  extract: string;
  focus: string;
  term: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  explanation: string;
}

const CRAFT_ITEMS: readonly CraftItem[] = [
  {
    extract: "\"Fair is foul, and foul is fair\"",
    focus: "What rhetorical structure reverses the order of words in the second clause (*A-B -> B-A*) to mirror moral inversion?",
    term: "chiasmus",
    accept: ["chiasmus", "antimetabole"],
    trap: "oxymoron",
    trapMsg: "An oxymoron pairs two adjacent words ('cruel kindness'); reversing clause structure A-B / B-A is **chiasmus**.",
    explanation: "**Chiasmus** mirrors words across a midpoint (*Fair/foul -> foul/fair*), enacting a world turned upside down.",
  },
  {
    extract: "\"DOU-ble, DOU-ble TOIL and TROU-ble; / FI-re BURN, and CAUL-dron BUB-ble\"",
    focus: "Name the 4-foot falling metre (*DUM-da DUM-da DUM-da DUM-da*) spoken by the Witches.",
    term: "trochaic tetrameter",
    accept: ["trochaic tetrameter", "trochaic"],
    trap: "iambic pentameter",
    trapMsg: "Iambic pentameter has 5 rising *da-DUM* feet; the Witches chant 4 falling *DUM-da* feet (**trochaic tetrameter**).",
    explanation: "**Trochaic tetrameter** sets the Witches rhythmically apart from courtly iambic pentameter.",
  },
  {
    extract: "\"So foul and fair a day I have not seen\"",
    focus: "Name the unrhymed 5-foot rising metre (*da-DUM* x 5) used by noble Shakespearean characters.",
    term: "iambic pentameter",
    accept: ["iambic pentameter", "blank verse"],
    trap: "trochaic tetrameter",
    trapMsg: "Count ten syllables rising *da-DUM*: 'So FOUL and FAIR a DAY I HAVE not SEEN' = **iambic pentameter** (blank verse).",
    explanation: "Unrhymed **iambic pentameter** (blank verse) is Shakespeare's baseline metre for noble speech.",
  },
  {
    extract: "\"Come, you spirits / That tend on mortal thoughts, unsex me here\"",
    focus: "What rhetorical device is Lady Macbeth using when she directly addresses absent/non-human supernatural spirits?",
    term: "apostrophe",
    accept: ["apostrophe"],
    trap: "personification",
    trapMsg: "Addressing an absent entity, object or spirit directly ('Stars, hide your fires', 'Come, you spirits') is **apostrophe**.",
    explanation: "**Apostrophe** is a direct address to an absent person, abstract concept or supernatural force.",
  },
  {
    extract: "\"Vaulting ambition, which o'erleaps itself / And falls on th' other\" (1.7)",
    focus: "What classical Aristotelian term names this fatal flaw or error of judgement in a tragic hero?",
    term: "hamartia",
    accept: ["hamartia"],
    trap: "catharsis",
    trapMsg: "Catharsis is the audience's emotional purging at the end; the hero's fatal flaw is **hamartia**.",
    explanation: "**Hamartia** is the Aristotelian fatal flaw (*vaulting ambition*) driving the tragic hero's fall.",
  },
  {
    extract: "Duncan praises Inverness castle — \"This castle hath a pleasant seat\" (1.6) — right after the audience heard Lady Macbeth plot his murder inside it (1.5).",
    focus: "Name the dramatic device where the audience knows lethal information that the character onstage does not.",
    term: "dramatic irony",
    accept: ["dramatic irony"],
    trap: "foreshadowing",
    trapMsg: "When the audience *already knows* the murder plot while Duncan praises his killers' home, that gap is **dramatic irony**.",
    explanation: "**Dramatic irony** heightens tension by letting the audience see the lethal trap Duncan walks into.",
  },
  {
    extract: "\"Will all great Neptune's ocean wash this blood / Clean from my hand?\" (2.2)",
    focus: "Name the figurative device of extreme, cosmic exaggeration used to show Macbeth's overwhelming guilt.",
    term: "hyperbole",
    accept: ["hyperbole"],
    trap: "litotes",
    trapMsg: "Litotes is understatement; claiming a hand could stain all Neptune's ocean red is **hyperbole**.",
    explanation: "**Hyperbole** magnifies Macbeth's bloodied hand into a cosmic pollution.",
  },
  {
    extract: "\"Tomorrow, and tomorrow, and tomorrow\" (5.5)",
    focus: "What syntactic term describes repeating the conjunction *\"and\"* between items to create dragging, weary momentum?",
    term: "polysyndeton",
    accept: ["polysyndeton", "syndetic listing"],
    trap: "asyndeton",
    trapMsg: "Asyndeton omits conjunctions; repeating 'and... and' is **polysyndeton**.",
    explanation: "**Polysyndeton** slows the line down so the listener feels the monotonous drag of Macbeth's empty days.",
  },
  {
    extract: "In Act 2 Scene 4, Ross reports that after Duncan's murder \"by th' clock 'tis day, / And yet dark night strangles the travelling lamp.\"",
    focus: "Name the literary device where weather or the external natural environment mirrors moral/emotional turmoil.",
    term: "pathetic fallacy",
    accept: ["pathetic fallacy"],
    trap: "oxymoron",
    trapMsg: "When external nature/weather (an unnatural solar eclipse) reflects human/cosmic disorder, that is **pathetic fallacy**.",
    explanation: "**Pathetic fallacy** projects the unnatural sacrilege of regicide onto the darkened Scottish sky.",
  },
  {
    extract: "In Act 5 Scene 1, Lady Macbeth cries: \"Out, damned spot! out, I say! — One: two: why, then 'tis time to do't. — Hell is murky.\"",
    focus: "What literary form (as opposed to blank verse) does Shakespeare use here to signal her loss of rational control?",
    term: "prose",
    accept: ["prose"],
    trap: "free verse",
    trapMsg: "Shakespearean plays alternate between verse and **prose** (not modern free verse); madness drops noble characters into prose.",
    explanation: "Dropping from courtly blank verse into fragmented **prose** marks Lady Macbeth's mental disintegration.",
  },
  {
    extract: "Fleance escapes the murderers in Act 3 Scene 3, marking the turning point where Macbeth's fortunes reverse irreversibly.",
    focus: "What Greek Aristotelian tragedy term names this sudden reversal of fortune or turning point?",
    term: "peripeteia",
    accept: ["peripeteia"],
    trap: "hubris",
    trapMsg: "Hubris is excessive pride; the structural reversal of fortune is **peripeteia**.",
    explanation: "**Peripeteia** is the Aristotelian reversal of fortune — triggered in Act 3 when Fleance escapes.",
  },
  {
    extract: "\"Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage\" (5.5)",
    focus: "What critical term describes drama drawing attention to its own status as theatre/acting ('a poor player... upon the stage')?",
    term: "metatheatre",
    accept: ["metatheatre", "metatheatrical", "metadrama"],
    trap: "soliloquy",
    trapMsg: "While spoken inside a soliloquy, comparing life itself to an actor on a stage is **metatheatre**.",
    explanation: "**Metatheatre** breaks the illusion of kingship, exposing Macbeth's stolen crown as a hollow stage costume.",
  },
  {
    extract: "Murdered Duncan is called \"The Lord's anointed temple\" (2.3), reflecting King James I's belief that monarchs are chosen directly by God.",
    focus: "Name the political-theological Jacobean doctrine (4 words) stating a King answers to God alone.",
    term: "Divine Right of Kings",
    accept: ["Divine Right of Kings", "Divine Right"],
    trap: "Great Chain of Being",
    trapMsg: "The Great Chain ranks the whole cosmos; the specific royal doctrine of God-ordained monarchy is the **Divine Right of Kings**.",
    explanation: "Under the **Divine Right of Kings**, murdering Duncan is sacrilege against God.",
  },
  {
    extract: "In Act 2 Scene 3, the drunken Porter jokes about guarding Hell right after the high tragic terror of Duncan's murder.",
    focus: "What literary term describes a sudden drop from elevated, sublime tragic tension to earthy, everyday comedy?",
    term: "bathos",
    accept: ["bathos", "comic relief"],
    trap: "pathos",
    trapMsg: "Pathos evokes pity/sorrow; a sudden drop from elevated tragedy to earthy comedy is **bathos**.",
    explanation: "**Bathos** releases and sharpens tension via ironic contrast in the Porter scene.",
  },
  {
    extract: "Act 1 Scene 2 opens with traitor Macdonwald's severed head; Act 5 Scene 9 closes with usurper Macbeth's severed head.",
    focus: "What structural term (two words) describes ending a text by mirroring its opening image or situation?",
    term: "cyclical structure",
    accept: ["cyclical structure", "cyclical framing", "cyclical symmetry", "cyclical"],
    trap: "in medias res",
    trapMsg: "In medias res means starting in the middle; mirroring the opening at the close is **cyclical structure**.",
    explanation: "**Cyclical structure** proves Macbeth has become the exact traitor he executed in Act 1.",
  },
  {
    extract: "In Act 1 Scene 7, Macbeth avoids saying 'murder King Duncan' and instead repeats: \"If it were done when 'tis done...\"",
    focus: "What linguistic term names substituting a vague, mild expression ('it', 'taking-off') for a taboo crime?",
    term: "euphemism",
    accept: ["euphemism"],
    trap: "dysphemism",
    trapMsg: "Dysphemism makes language harsher; softening 'regicide' into 'it' or 'taking-off' is **euphemism**.",
    explanation: "**Euphemism** betrays Macbeth's guilty conscience shrinking from naming regicide aloud.",
  },
];

interface MotifItem {
  quote: string;
  act: string;
  motif: string;
  acceptMotif: string[];
  meaningShift: string;
  foilMotif: string;
}

const MOTIF_ITEMS: readonly MotifItem[] = [
  {
    quote: "\"brandish'd steel, / Which smoked with bloody execution\" (1.2)",
    act: "Act 1",
    motif: "blood",
    acceptMotif: ["blood"],
    meaningShift: "celebrated martial honour before regicide turns it into indelible guilt",
    foilMotif: "sleep",
  },
  {
    quote: "\"Making the green one red\" (2.2)",
    act: "Act 2",
    motif: "blood",
    acceptMotif: ["blood"],
    meaningShift: "cosmic pollution staining Neptune's entire ocean",
    foilMotif: "clothing",
  },
  {
    quote: "\"Sleep that knits up the ravell'd sleave of care\" (2.2)",
    act: "Act 2",
    motif: "sleep",
    acceptMotif: ["sleep", "insomnia"],
    meaningShift: "natural healing peace that Macbeth permanently destroys by killing a sleeping guest",
    foilMotif: "blood",
  },
  {
    quote: "\"After life's fitful fever he sleeps well\" (3.2)",
    act: "Act 3",
    motif: "sleep",
    acceptMotif: ["sleep", "insomnia"],
    meaningShift: "Macbeth envying his murdered victim's peaceful rest while plagued by nightmares",
    foilMotif: "clothing",
  },
  {
    quote: "\"Stars, hide your fires; / Let not light see my black and deep desires\" (1.4)",
    act: "Act 1",
    motif: "light and darkness",
    acceptMotif: ["light", "darkness", "light and darkness", "light vs darkness"],
    meaningShift: "shameful concealment from God's heavenly gaze",
    foilMotif: "sleep",
  },
  {
    quote: "\"dark night strangles the travelling lamp\" (2.4)",
    act: "Act 2",
    motif: "light and darkness",
    acceptMotif: ["light", "darkness", "light and darkness", "light vs darkness"],
    meaningShift: "cosmic eclipse mirroring the strangling of God's anointed King",
    foilMotif: "clothing",
  },
  {
    quote: "\"she has light by her continually; 'tis her command\" (5.1)",
    act: "Act 5",
    motif: "light and darkness",
    acceptMotif: ["light", "darkness", "light and darkness", "light vs darkness"],
    meaningShift: "ironic terror of hellish darkness after begging 'Come, thick night' in 1.5",
    foilMotif: "blood",
  },
  {
    quote: "\"why do you dress me / In borrow'd robes?\" (1.3)",
    act: "Act 1",
    motif: "clothing",
    acceptMotif: ["clothing", "robes", "borrowed robes", "garments"],
    meaningShift: "foreshadowing Macbeth wearing stolen titles belonging to other men",
    foilMotif: "sleep",
  },
  {
    quote: "\"I have bought / Golden opinions from all sorts of people, / Which would be worn now in their newest gloss\" (1.7)",
    act: "Act 1",
    motif: "clothing",
    acceptMotif: ["clothing", "robes", "borrowed robes", "garments"],
    meaningShift: "treating public honour like a gleaming new cloak he is reluctant to soil",
    foilMotif: "blood",
  },
  {
    quote: "\"like a giant's robe / Upon a dwarfish thief\" (5.2)",
    act: "Act 5",
    motif: "clothing",
    acceptMotif: ["clothing", "robes", "borrowed robes", "garments"],
    meaningShift: "sacred royal majesty hanging loose on a morally shrunken usurper",
    foilMotif: "light",
  },
];

export const drills: Drill[] = [
  {
    id: "lit-macbeth.quote-completion",
    topicId: "lit-macbeth",
    title: "High-Yield Macbeth Micro-Quote Completion",
    level: 1,
    guideRef: "tragic-hamartia-soliloquies",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pool = tier === 1 ? QUOTE_BLANKS.slice(0, 28) : QUOTE_BLANKS;
      const item = rng.pick(pool);
      const showSpeaker = tier === 1 || rng.bool(0.5);
      const header = showSpeaker
        ? `Complete **${item.speaker}'s** quotation from **${item.act}** with the exact single Shakespearean word:`
        : `Complete this **${item.act}** *Macbeth* quotation with the exact missing word:`;
      return {
        prompt: `${header}\n\n${item.quoteWithBlank}`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.missing,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.trapWord.toLowerCase()] },
            feedback: item.trapFeedback,
          },
        ],
        hint: `Spoken by ${item.speaker} (${item.act}) — ${item.note}`,
        solution: [
          `Speaker & context: **${item.speaker}** in **${item.act}**.`,
          `Exact missing word: **${item.missing}**.`,
          `Exam payoff: ${item.note}`,
        ],
      };
    },
  },
  {
    id: "lit-macbeth.speaker-and-act",
    topicId: "lit-macbeth",
    title: "Speaker & Structural Act Attribution",
    level: 2,
    guideRef: "lady-macbeth-gender-guilt",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const item = rng.pick(ATTRIBUTIONS);
      const askAct = rng.bool(tier === 1 ? 0.35 : 0.45);
      if (askAct) {
        const clueText = tier <= 2 ? `\n\n*Scene clue: ${item.contextClue}.*` : "";
        const wrongAct = item.actNum === 5 ? 3 : item.actNum + 1;
        return {
          prompt: `In which **Act number** ({{1}} to {{5}}) of *Macbeth* does this quotation appear?${clueText}\n\n${item.quote}`,
          answer: { type: "number", value: item.actNum },
          traps: [
            {
              spec: { type: "number", value: wrongAct },
              feedback: `Check the structural arc: ${item.contextClue.toLowerCase()} belongs in **Act ${item.actNum}**.`,
            },
          ],
          hint: `Spoken by ${item.speaker}: ${item.contextClue.toLowerCase()}.`,
          solution: [
            item.explanation,
            `Structural placement: **Act ${item.actNum}**.`,
          ],
        };
      }
      const clueLine = tier === 1 ? `\n\n*Clue (${"Act " + item.actNum}): ${item.contextClue}.*` : tier === 2 ? `\n\n*(From Act ${item.actNum})*` : "";
      return {
        prompt: `Which character in *Macbeth* speaks these lines?${clueLine}\n\n${item.quote}`,
        answer: {
          type: "text",
          accept: item.acceptSpeaker,
          display: item.speaker,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.foilSpeaker] },
            feedback: `Not ${item.foilSpeaker} — re-read the voice and situation: ${item.contextClue.toLowerCase()}.`,
          },
        ],
        hint: `Context: ${item.contextClue} (Act ${item.actNum}).`,
        solution: [item.explanation],
      };
    },
  },
  {
    id: "lit-macbeth.prosody-and-craft",
    topicId: "lit-macbeth",
    title: "AO2 Prosody, Stagecraft & AO4 Jacobean Terms",
    level: 2,
    guideRef: "jacobean-divine-right-witchcraft",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const item = rng.pick(CRAFT_ITEMS);
      const variant = rng.int(0, 1);
      const opener =
        variant === 0
          ? `Read this *Macbeth* detail:\n\n> ${item.extract}\n\n${item.focus}`
          : `${item.focus}\n\n*Textual anchor:* ${item.extract}`;
      const extraCue = tier === 1 ? ` *(Hint: starts with "${item.term.slice(0, 2).toUpperCase()}…")*` : "";
      return {
        prompt: `${opener}${extraCue}`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.term,
        },
        traps: [
          {
            spec: { type: "text", accept: [item.trap] },
            feedback: item.trapMsg,
          },
        ],
        hint: item.explanation.replace(/\*\*/g, "").replace(new RegExp(item.term, "gi"), "_____"),
        solution: [item.explanation],
      };
    },
  },
  {
    id: "lit-macbeth.motif-architecture",
    topicId: "lit-macbeth",
    title: "Whole-Play Motif & Structural Symmetry Tracker",
    level: 3,
    guideRef: "imagery-blood-sleep-light",
    generate(rng: Rng): DrillItem {
      if (rng.bool(0.65)) {
        const m = rng.pick(MOTIF_ITEMS);
        const angle = rng.int(0, 2);
        const stem =
          angle === 0
            ? `Which of the four major *Macbeth* motifs (**blood**, **sleep**, **light and darkness**, or **clothing**) is developed in this ${m.act} quotation?\n\n> ${m.quote}`
            : angle === 1
              ? `Identify the recurring whole-play motif (**blood**, **sleep**, **light and darkness**, or **clothing**) that here signifies *${m.meaningShift}*:\n\n> ${m.quote}`
              : `In ${m.act}, Shakespeare writes ${m.quote} to convey *${m.meaningShift}*. Name the core motif (**blood**, **sleep**, **light and darkness**, or **clothing**).`;
        return {
          prompt: stem,
          answer: {
            type: "text",
            accept: m.acceptMotif,
            display: m.motif,
          },
          traps: [
            {
              spec: { type: "text", accept: [m.foilMotif] },
              feedback: `Look closely at the core image in ${m.quote} — that belongs to the **${m.motif}** motif chain.`,
            },
          ],
          hint: `Think about the four recurring image chains (B-S-L-R) across Acts 1–5.`,
          solution: [
            `Quotation (${m.act}): ${m.quote}`,
            `Core motif: **${m.motif}** — here representing ${m.meaningShift}.`,
          ],
        };
      }
      const q = rng.pick(QUOTE_BLANKS);
      return {
        prompt: `Grade-9 precision check (${q.act}, **${q.speaker}**): supply the exact missing word so your exam micro-quote is word-perfect:\n\n${q.quoteWithBlank}`,
        answer: {
          type: "text",
          accept: q.accept,
          display: q.missing,
        },
        traps: [
          {
            spec: { type: "text", accept: [q.trapWord.toLowerCase()] },
            feedback: q.trapFeedback,
          },
        ],
        hint: q.note,
        solution: [
          `Exact word: **${q.missing}** (${q.speaker}, ${q.act}).`,
          `Analytical link: ${q.note}`,
        ],
      };
    },
  },
];
