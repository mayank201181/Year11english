import type { Drill, DrillItem, Rng } from "./types.ts";

interface AnthologyEntry {
  title: string;
  acceptTitle: string[];
  poet: string;
  acceptPoet: string[];
  foilTitle: string;
  foilPoet: string;
  form: string;
  acceptForm: string[];
  quotes: readonly [string, string, string];
  craftNote: string;
}

const ANTHOLOGY: readonly AnthologyEntry[] = [
  {
    title: "If—",
    acceptTitle: ["If—", "If-", "If"],
    poet: "Rudyard Kipling",
    acceptPoet: ["Rudyard Kipling", "Kipling"],
    foilTitle: "Prayer Before Birth",
    foilPoet: "Robert Browning",
    form: "conditional monologue",
    acceptForm: ["conditional monologue", "didactic monologue", "monologue"],
    quotes: [
      "\"If you can keep your head when all about you / Are losing theirs\"",
      "\"If you can meet with Triumph and Disaster / And treat those two impostors just the same\"",
      "\"If you can fill the unforgiving minute / With sixty seconds' worth of distance run\"",
    ],
    craftNote: "Four 8-line octaves built as a single periodic conditional sentence addressed to 'my son!'.",
  },
  {
    title: "Prayer Before Birth",
    acceptTitle: ["Prayer Before Birth"],
    poet: "Louis MacNeice",
    acceptPoet: ["Louis MacNeice", "MacNeice"],
    foilTitle: "War Photographer",
    foilPoet: "Vernon Scannell",
    form: "free verse",
    acceptForm: ["free verse", "dramatic monologue"],
    quotes: [
      "\"I am not yet born; O hear me. / Let not the bloodsucking bat or the rat or the stoat\"",
      "\"tall walls wall me, / stone cold focus\"",
      "\"Let them not make me a stone and let them not spill me. / Otherwise kill me.\"",
    ],
    craftNote: "Cascading step-indented free-verse stanzas with liturgical anaphora ending in a stark 2-line ultimatum.",
  },
  {
    title: "Blessing",
    acceptTitle: ["Blessing"],
    poet: "Imtiaz Dharker",
    acceptPoet: ["Imtiaz Dharker", "Dharker"],
    foilTitle: "Search For My Tongue",
    foilPoet: "Sujata Bhatt",
    form: "free verse",
    acceptForm: ["free verse"],
    quotes: [
      "\"The skin cracks like a pod. / There never is enough water.\"",
      "\"The municipal pipe bursts, / silver crashes to the ground\"",
      "\"the liquid sun, / their highlights polished to perfection, / flashing light, / as the blessing sings / over their small bones.\"",
    ],
    craftNote: "Four uneven free-verse stanzas (2, 4, 11, 6 lines) expanding from drought scarcity to sacred communal abundance.",
  },
  {
    title: "Search For My Tongue",
    acceptTitle: ["Search For My Tongue"],
    poet: "Sujata Bhatt",
    acceptPoet: ["Sujata Bhatt", "Bhatt"],
    foilTitle: "Blessing",
    foilPoet: "Imtiaz Dharker",
    form: "free verse",
    acceptForm: ["free verse", "code-switching free verse"],
    quotes: [
      "\"You ask me what I mean / by saying I have lost my tongue.\"",
      "\"your mother tongue would rot, / rot and die in your mouth\"",
      "\"Every time I think I've forgotten, / I think I've lost the mother tongue, / it blossoms out of my mouth.\"",
    ],
    craftNote: "Three-part code-switching poem with central Gujarati script and an extended botanical rebirth metaphor.",
  },
  {
    title: "Half-past Two",
    acceptTitle: ["Half-past Two", "Half Past Two", "Half-past two"],
    poet: "U.A. Fanthorpe",
    acceptPoet: ["U.A. Fanthorpe", "UA Fanthorpe", "Fanthorpe"],
    foilTitle: "Hide and Seek",
    foilPoet: "Vernon Scannell",
    form: "tercets",
    acceptForm: ["tercets", "free verse", "free-verse tercets"],
    quotes: [
      "\"Once upon a schooltime / He did Something Very Wrong / (I forget what it was).\"",
      "\"He knew a lot of time: he knew / Gettinguptime, timeyouwereofftime\"",
      "\"He escaped into the clockless land for ever, / Where time hides tick-less waiting to be born.\"",
    ],
    craftNote: "Eleven 3-line tercets blending fairy-tale framing, compound child-neologisms and ironic adult parentheses.",
  },
  {
    title: "Piano",
    acceptTitle: ["Piano"],
    poet: "D.H. Lawrence",
    acceptPoet: ["D.H. Lawrence", "DH Lawrence", "Lawrence"],
    foilTitle: "Poem at Thirty-Nine",
    foilPoet: "Alice Walker",
    form: "quatrains",
    acceptForm: ["quatrains", "rhyming couplets", "lyric"],
    quotes: [
      "\"Softly, in the dusk, a woman is singing to me; / Taking me back down the vista of years\"",
      "\"A child sitting under the piano, in the boom of the tingling strings\"",
      "\"my manhood is cast / Down in the flood of remembrance, I weep like a child for the past.\"",
    ],
    craftNote: "Three AABB quatrains whose rolling musical rhythm betrays adult stoicism into involuntary tears.",
  },
  {
    title: "Hide and Seek",
    acceptTitle: ["Hide and Seek", "Hide & Seek"],
    poet: "Vernon Scannell",
    acceptPoet: ["Vernon Scannell", "Scannell"],
    foilTitle: "Half-past Two",
    foilPoet: "U.A. Fanthorpe",
    form: "single stanza",
    acceptForm: ["single stanza", "stanza block", "blank verse"],
    quotes: [
      "\"Call out. Call loud: 'I'm ready! Come and find me!' / The sacks in the toolshed smell like the seaside.\"",
      "\"Don't breathe. Don't move. Stay dumb. Hide in your blindness.\"",
      "\"The darkening garden watches. Nothing stirs. / The bushes hold their breath; the sun is gone. / Yes, here you are. But where are they who sought you?\"",
    ],
    craftNote: "Single claustrophobic 27-line stanza block in second-person imperatives pivoting from childhood glee to isolation.",
  },
  {
    title: "Sonnet 116",
    acceptTitle: ["Sonnet 116"],
    poet: "William Shakespeare",
    acceptPoet: ["William Shakespeare", "Shakespeare"],
    foilTitle: "Remember",
    foilPoet: "Christina Rossetti",
    form: "Shakespearean sonnet",
    acceptForm: ["Shakespearean sonnet", "English sonnet", "sonnet"],
    quotes: [
      "\"Let me not to the marriage of true minds / Admit impediments. Love is not love / Which alters when it alteration finds\"",
      "\"O no! it is an ever-fixed mark / That looks on tempests and is never shaken\"",
      "\"Love's not Time's fool, though rosy lips and cheeks / Within his bending sickle's compass come\"",
    ],
    craftNote: "Fourteen-line Shakespearean sonnet (ABAB CDCD EFEF GG) defining steadfast love via negation and guiding-star imagery.",
  },
  {
    title: "La Belle Dame sans Merci",
    acceptTitle: ["La Belle Dame sans Merci", "La Belle Dame"],
    poet: "John Keats",
    acceptPoet: ["John Keats", "Keats"],
    foilTitle: "My Last Duchess",
    foilPoet: "William Blake",
    form: "ballad",
    acceptForm: ["ballad", "literary ballad"],
    quotes: [
      "\"O what can ail thee, knight-at-arms, / Alone and palely loitering? / The sedge has wither'd from the lake, / And no birds sing.\"",
      "\"I see a lily on thy brow, / With anguish moist and fever-dew\"",
      "\"La Belle Dame sans Merci / Thee hath in thrall!\"",
    ],
    craftNote: "Twelve ABCB Romantic ballad quatrains whose shortened 4th line enacts spiritual and physical depletion.",
  },
  {
    title: "Poem at Thirty-Nine",
    acceptTitle: ["Poem at Thirty-Nine", "Poem at 39"],
    poet: "Alice Walker",
    acceptPoet: ["Alice Walker", "Walker"],
    foilTitle: "Piano",
    foilPoet: "Carol Ann Duffy",
    form: "free verse",
    acceptForm: ["free verse"],
    quotes: [
      "\"Writing deposit slips and checks / I think of him. / He taught me how.\"",
      "\"He cooked like a person / dancing / in a yoga meditation\"",
      "\"seasoning none of my life / the same way twice\"",
    ],
    craftNote: "Seven slender enjambed free-verse stanzas pivoting from grief ('How I miss my father.') to celebratory gratitude ('!').",
  },
  {
    title: "War Photographer",
    acceptTitle: ["War Photographer"],
    poet: "Carol Ann Duffy",
    acceptPoet: ["Carol Ann Duffy", "Duffy"],
    foilTitle: "Prayer Before Birth",
    foilPoet: "Louis MacNeice",
    form: "sestets",
    acceptForm: ["sestets", "regular sestets"],
    quotes: [
      "\"In his darkroom he is finally alone / with spools of suffering set out in ordered rows.\"",
      "\"Belfast. Beirut. Phnom Penh. All flesh is grass.\"",
      "\"The reader's eyeballs prick / with tears between the bath and pre-lunch beers.\"",
    ],
    craftNote: "Four regular ABBCDD sestets imposing darkroom ritual order upon war trauma while indicting reader apathy.",
  },
  {
    title: "The Tyger",
    acceptTitle: ["The Tyger", "The Tiger"],
    poet: "William Blake",
    acceptPoet: ["William Blake", "Blake"],
    foilTitle: "Blessing",
    foilPoet: "John Keats",
    form: "quatrains",
    acceptForm: ["quatrains", "rhyming quatrains", "trochaic quatrains"],
    quotes: [
      "\"Tyger Tyger, burning bright, / In the forests of the night\"",
      "\"What the hammer? what the chain, / In what furnace was thy brain?\"",
      "\"Did he who made the Lamb make thee?\"",
    ],
    craftNote: "Six AABB trochaic tetrameter quatrains of unanswered questions shifting 'Could' to 'Dare' in cyclical awe.",
  },
  {
    title: "My Last Duchess",
    acceptTitle: ["My Last Duchess"],
    poet: "Robert Browning",
    acceptPoet: ["Robert Browning", "Browning"],
    foilTitle: "Sonnet 116",
    foilPoet: "Rudyard Kipling",
    form: "dramatic monologue",
    acceptForm: ["dramatic monologue"],
    quotes: [
      "\"That's my last Duchess painted on the wall, / Looking as if she were alive.\"",
      "\"My gift of a nine-hundred-years-old name / With anybody's gift.\"",
      "\"This grew; I gave commands; / Then all smiles stopped together.\"",
    ],
    craftNote: "Dramatic monologue in enjambed rhyming iambic pentameter couplets exposing patriarchal jealousy and murder.",
  },
  {
    title: "Remember",
    acceptTitle: ["Remember"],
    poet: "Christina Rossetti",
    acceptPoet: ["Christina Rossetti", "Rossetti"],
    foilTitle: "Sonnet 116",
    foilPoet: "William Shakespeare",
    form: "Petrarchan sonnet",
    acceptForm: ["Petrarchan sonnet", "Italian sonnet", "sonnet"],
    quotes: [
      "\"Remember me when I am gone away, / Gone far away into the silent land\"",
      "\"Yet if you should forget me for a while / And afterwards remember, do not grieve\"",
      "\"Better by far you should forget and smile / Than that you should remember and be sad.\"",
    ],
    craftNote: "Fourteen-line Petrarchan sonnet (ABBAABBA octave + CDDECE sestet) pivoting at line 9 from plea to selfless release.",
  },
];

interface PoeticDeviceItem {
  example: string;
  question: string;
  term: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  explanation: string;
}

const POETIC_DEVICES: readonly PoeticDeviceItem[] = [
  {
    example: "\"none puts by / The curtain I have drawn for you, but I\" (*My Last Duchess*)",
    question: "What structural term names running a grammatical clause across the end of a verse line without terminal punctuation?",
    term: "enjambment",
    accept: ["enjambment"],
    trap: "caesura",
    trapMsg: "Caesura is a pause *within* a line; running syntax across a line-break without punctuation is **enjambment**.",
    explanation: "**Enjambment** spills the Duke's possessive ego across his neat heroic couplets.",
  },
  {
    example: "\"Belfast. Beirut. Phnom Penh. All flesh is grass.\" (*War Photographer*)",
    question: "What structural term names the three heavy mid-line full-stop pauses halting the rhythm inside this single line?",
    term: "caesura",
    accept: ["caesura", "caesurae"],
    trap: "enjambment",
    trapMsg: "Enjambment spills over line-ends; heavy punctuation pauses *inside* a line are **caesurae** (**caesura**).",
    explanation: "Full-stop **caesurae** force solemn, camera-shutter pauses over each war zone.",
  },
  {
    example: "Line 9 of Christina Rossetti's *Remember*: \"Yet if you should forget me for a while\"",
    question: "What Italian poetic term names this structural and tonal **turn** between the octave and sestet of a sonnet?",
    term: "volta",
    accept: ["volta"],
    trap: "stanza",
    trapMsg: "A stanza is a verse paragraph; the pivotal structural/emotional turn in a sonnet is the **volta**.",
    explanation: "The **volta** at line 9 pivots Rossetti's Petrarchan sonnet from anxious pleading to selfless release.",
  },
  {
    example: "Christina Rossetti's *Remember* divides 14 lines into an 8-line `ABBAABBA` octave and a 6-line `CDDECE` sestet.",
    question: "Which specific **type of sonnet** (`Petrarchan` or `Shakespearean`) uses an octave + sestet structure?",
    term: "Petrarchan sonnet",
    accept: ["Petrarchan", "Petrarchan sonnet", "Italian sonnet"],
    trap: "Shakespearean",
    trapMsg: "A Shakespearean sonnet uses three `ABAB` quatrains + `GG` couplet; an `ABBAABBA` octave + sestet is a **Petrarchan sonnet**.",
    explanation: "Rossetti chooses a **Petrarchan sonnet** so the octave/sestet split dramatises her emotional shift.",
  },
  {
    example: "*Sonnet 116* organises 14 lines of iambic pentameter into three `ABAB CDCD EFEF` quatrains and a clinching `GG` rhyming couplet.",
    question: "Which specific **type of sonnet** (`Petrarchan` or `Shakespearean`) follows this 3-quatrain + couplet architecture?",
    term: "Shakespearean sonnet",
    accept: ["Shakespearean", "Shakespearean sonnet", "English sonnet"],
    trap: "Petrarchan",
    trapMsg: "Petrarchan sonnets split 8 + 6 (`ABBAABBA`); three quatrains + a final couplet is a **Shakespearean sonnet**.",
    explanation: "Shakespeare's **Shakespearean (English) sonnet** builds three argumentative quatrains before sealing its wager in the `GG` couplet.",
  },
  {
    example: "John Keats's *La Belle Dame sans Merci* tells a folk-like narrative of love and supernatural loss in 12 `ABCB` quatrains with a shortened 4th line.",
    question: "Name this traditional narrative poetic **form**.",
    term: "ballad",
    accept: ["ballad", "literary ballad"],
    trap: "dramatic monologue",
    trapMsg: "*La Belle Dame* has two speakers in dialogue across `ABCB` quatrains — that folk narrative stanza form is a **ballad**.",
    explanation: "Keats adapts the medieval folk **ballad**, truncating every fourth line to mimic drained life-force.",
  },
  {
    example: "Robert Browning's *My Last Duchess* is spoken entirely by the Duke of Ferrara to a silent marriage envoy.",
    question: "Name this two-word poetic **form** in which a persona unwittingly reveals their own flaws to an implied listener.",
    term: "dramatic monologue",
    accept: ["dramatic monologue"],
    trap: "soliloquy",
    trapMsg: "A soliloquy is spoken *alone* onstage; addressing a silent in-world listener in poetry is a **dramatic monologue**.",
    explanation: "Browning perfected the **dramatic monologue** to generate biting irony between what the Duke claims and what the reader infers.",
  },
  {
    example: "\"I am not yet born; O hear me...\" / \"I am not yet born; console me...\" / \"I am not yet born; forgive me...\" (*Prayer Before Birth*)",
    question: "What rhetorical term names repeating the exact same phrase at the **start** of successive clauses or stanzas?",
    term: "anaphora",
    accept: ["anaphora"],
    trap: "epiphora",
    trapMsg: "Epiphora repeats at the *end* of clauses; repeating at the *beginning* of stanzas/lines (like 'If you can...' or 'I am not yet born') is **anaphora**.",
    explanation: "**Anaphora** creates a liturgical prayer-chant across both *Prayer Before Birth* and *If—*.",
  },
  {
    example: "\"Into the silent noise his hangnail made\" (*Half-past Two*)",
    question: "What two-word figurative term names fusing two directly contradictory words side by side (*\"silent noise\"*, *\"fearful symmetry\"*)?",
    term: "oxymoron",
    accept: ["oxymoron"],
    trap: "simile",
    trapMsg: "A simile compares with 'like/as'; compressed adjacent contradiction ('silent noise') is an **oxymoron**.",
    explanation: "Fanthorpe's **oxymoron** (*\"silent noise\"*) captures hyper-focused sensory stillness inside the detention room.",
  },
  {
    example: "\"with spools of suffering set out in ordered rows\" (*War Photographer*)",
    question: "What specific acoustic/sound term describes the repeated soft *s*/*sh*/*sp* consonant sounds creating a hushed, reverent whisper?",
    term: "sibilance",
    accept: ["sibilance"],
    trap: "plosives",
    trapMsg: "Plosives are hard *p/b/t/d/k/g* bursts; repeated hushed *s* sounds are **sibilance**.",
    explanation: "**Sibilance** hushes the darkroom like a church sanctuary (*\"spools of suffering set out\"*).",
  },
  {
    example: "\"A child sitting under the piano, in the boom of the tingling strings\" (*Piano*)",
    question: "What lexical/sonic device do words like *\"boom\"* and *\"tingling\"* use when their pronunciation physically imitates the musical sound described?",
    term: "onomatopoeia",
    accept: ["onomatopoeia"],
    trap: "personification",
    trapMsg: "Personification gives human agency; words whose sound imitates real acoustic resonance ('boom', 'crashes') use **onomatopoeia**.",
    explanation: "**Onomatopoeia** places the reader physically underneath the vibrating piano soundboard.",
  },
  {
    example: "\"TY-ger TY-ger, BURN-ing BRIGHT\" (*The Tyger*)",
    question: "Name the 4-foot falling metre (*DUM-da* x 4) that drives Blake's poem like a blacksmith's hammer.",
    term: "trochaic tetrameter",
    accept: ["trochaic tetrameter", "trochaic"],
    trap: "iambic pentameter",
    trapMsg: "Iambic pentameter rises *da-DUM* five times; 'TY-ger TY-ger BURN-ing BRIGHT' falls *DUM-da* four times (**trochaic tetrameter**).",
    explanation: "Catalectic **trochaic tetrameter** gives *The Tyger* its relentless anvil pulse.",
  },
  {
    example: "\"The sedge has wither'd from the lake, / And no birds sing\" (*La Belle Dame sans Merci*) & \"The darkening garden watches\" (*Hide and Seek*)",
    question: "What two-word literary term describes external nature or weather mirroring the speaker's bleak isolation?",
    term: "pathetic fallacy",
    accept: ["pathetic fallacy"],
    trap: "hyperbole",
    trapMsg: "Hyperbole is exaggeration; projecting human desolation onto withered lakes or watching gardens is **pathetic fallacy**.",
    explanation: "**Pathetic fallacy** externalises emotional abandonment across the surrounding landscape.",
  },
  {
    example: "Sujata Bhatt's *Search For My Tongue* shifts mid-poem from English into Gujarati script and phonetic transliteration before returning to English.",
    question: "What linguistic term (hyphenated or two words) names alternating between two languages within a single text?",
    term: "code-switching",
    accept: ["code-switching", "code switching"],
    trap: "euphemism",
    trapMsg: "Alternating between two languages (English and Gujarati) inside one poem is **code-switching**.",
    explanation: "**Code-switching** dramatises bilingual identity refusing erasure.",
  },
  {
    example: "\"This grew; I gave commands; / Then all smiles stopped together.\" (*My Last Duchess*)",
    question: "What device does the Duke use when he masks the brutal murder of his wife behind the polite, indirect phrase *\"all smiles stopped together\"*?",
    term: "euphemism",
    accept: ["euphemism"],
    trap: "hyperbole",
    trapMsg: "Rather than exaggerating, the Duke *understates and masks* murder behind indirect phrasing — **euphemism**.",
    explanation: "Cold **euphemism** exposes the Duke's aristocratic detachment from his own lethal violence.",
  },
  {
    example: "\"If you can meet with Triumph and Disaster / And treat those two impostors just the same\" (*If—*)",
    question: "Which figurative device turns the abstract concepts *Triumph* and *Disaster* into human *\"impostors\"*?",
    term: "personification",
    accept: ["personification", "prosopopoeia"],
    trap: "onomatopoeia",
    trapMsg: "Turning abstract nouns ('Triumph', 'Disaster', 'Time') into deceptive human characters ('impostors', 'Time's fool') is **personification**.",
    explanation: "**Personification** demystifies both victory and defeat as untrustworthy actors.",
  },
];

interface PairingPrompt {
  theme: string;
  anchor: string;
  clue: string;
  bestPartner: string;
  acceptPartner: string[];
  wrongPartner: string;
  wrongMsg: string;
  thesis: string;
}

const PAIRING_PROMPTS: readonly PairingPrompt[] = [
  {
    theme: "childhood nostalgia and memories of a parent",
    anchor: "Piano (D.H. Lawrence)",
    clue: "Name the 7-stanza free-verse Anthology poem by Alice Walker that *celebrates* a father's legacy rather than weeping in regression.",
    bestPartner: "Poem at Thirty-Nine",
    acceptPartner: ["Poem at Thirty-Nine", "Poem at 39"],
    wrongPartner: "The Tyger",
    wrongMsg: "*The Tyger* explores cosmic creation; Alice Walker's parental memory poem is **Poem at Thirty-Nine**.",
    thesis: "Lawrence's rolling AABB couplets drown adult poise in involuntary tears, whereas Walker's free verse integrates paternal warmth into adult autonomy.",
  },
  {
    theme: "childhood vulnerability, time and isolation",
    anchor: "Half-past Two (U.A. Fanthorpe)",
    clue: "Name Vernon Scannell's single-stanza Anthology poem in which a game in a dark toolshed ends in sudden abandonment.",
    bestPartner: "Hide and Seek",
    acceptPartner: ["Hide and Seek", "Hide & Seek"],
    wrongPartner: "Sonnet 116",
    wrongMsg: "*Sonnet 116* defines adult romantic constancy; Scannell's childhood toolshed poem is **Hide and Seek**.",
    thesis: "Fanthorpe's tercets grant imaginative escape into a 'clockless land', whereas Scannell's unbroken stanza block turns childhood victory into existential isolation.",
  },
  {
    theme: "selfless vs steadfast romantic devotion across two sonnet forms",
    anchor: "Sonnet 116 (William Shakespeare)",
    clue: "Name Christina Rossetti's Petrarchan sonnet that pivots at line 9 to tell the beloved 'forget and smile'.",
    bestPartner: "Remember",
    acceptPartner: ["Remember"],
    wrongPartner: "Blessing",
    wrongMsg: "*Blessing* celebrates communal water in drought; Rossetti's Petrarchan sonnet of love and bereavement is **Remember**.",
    thesis: "Shakespeare's quatrains proclaim unchanging permanence ('ever-fixed mark'), whereas Rossetti's Petrarchan volta prioritises the beloved's happiness over remembrance.",
  },
  {
    theme: "possessive obsession and destructive power in relationships",
    anchor: "My Last Duchess (Robert Browning)",
    clue: "Name John Keats's 12-quatrain Romantic ballad in which a 'knight-at-arms' is left 'palely loitering' in thrall.",
    bestPartner: "La Belle Dame sans Merci",
    acceptPartner: ["La Belle Dame sans Merci", "La Belle Dame"],
    wrongPartner: "If—",
    wrongMsg: "*If—* is paternal advice to a son; Keats's ballad of fatal romantic thralldom is **La Belle Dame sans Merci**.",
    thesis: "Browning's enjambed couplets indict a patriarchal Duke who silences his bride into art, whereas Keats's truncated ballad mourns a knight drained by an elusive faery.",
  },
  {
    theme: "human cruelty, trauma and the vulnerability of life",
    anchor: "War Photographer (Carol Ann Duffy)",
    clue: "Name Louis MacNeice's cascading monologue spoken by an unborn child begging protection from a brutal world.",
    bestPartner: "Prayer Before Birth",
    acceptPartner: ["Prayer Before Birth"],
    wrongPartner: "Piano",
    wrongMsg: "*Piano* is domestic musical nostalgia; MacNeice's unborn plea against cruelty is **Prayer Before Birth**.",
    thesis: "Duffy contains post-war trauma inside rigid ABBCDD sestets against public apathy, whereas MacNeice's jagged free verse pleads pre-emptively against dehumanisation.",
  },
  {
    theme: "sacred awe, creation and elemental wonder",
    anchor: "The Tyger (William Blake)",
    clue: "Name Imtiaz Dharker's 4-stanza poem where a burst municipal water pipe becomes 'silver' and 'the voice of a kindly god'.",
    bestPartner: "Blessing",
    acceptPartner: ["Blessing"],
    wrongPartner: "My Last Duchess",
    wrongMsg: "*My Last Duchess* is aristocratic jealousy; Dharker's poem of sacred elemental grace is **Blessing**.",
    thesis: "Blake's hammering trochaic quatrains question a dread Creator of terror, whereas Dharker's expanding free verse celebrates communal ecstasy under a 'kindly god'.",
  },
  {
    theme: "cultural/personal identity and resilience",
    anchor: "Search For My Tongue (Sujata Bhatt)",
    clue: "Name Rudyard Kipling's 4-octave conditional poem advising his son on stoic self-possession.",
    bestPartner: "If—",
    acceptPartner: ["If—", "If-", "If"],
    wrongPartner: "La Belle Dame sans Merci",
    wrongMsg: "*La Belle Dame* depicts helpless thralldom; Kipling's poem of stoic self-definition is **If—**.",
    thesis: "Bhatt reclaims bilingual selfhood through organic code-switching rebirth, whereas Kipling constructs identity through disciplined conditional self-command.",
  },
];

export const drills: Drill[] = [
  {
    id: "lit-poetry.quote-to-poem",
    topicId: "lit-poetry",
    title: "16-Poem Anthology Quote-to-Title Identification",
    level: 1,
    guideRef: "power-voice-identity-poems",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const entry = rng.pick(ANTHOLOGY);
      const qIdx = rng.int(0, 2);
      const quote = entry.quotes[qIdx];
      const poetHint = tier === 1 ? ` *(by ${entry.poet})*` : "";
      return {
        prompt: `Name the **Pearson Edexcel Anthology poem**${poetHint} from which these lines are taken:\n\n> ${quote}`,
        answer: {
          type: "text",
          accept: entry.acceptTitle,
          display: entry.title,
        },
        traps: [
          {
            spec: { type: "text", accept: [entry.foilTitle] },
            feedback: `Not *${entry.foilTitle}* — check the distinctive imagery and voice: these lines belong to ***${entry.title}*** (${entry.poet}).`,
          },
        ],
        hint: `Written by ${entry.poet}: ${entry.craftNote}`,
        solution: [
          `Poem: ***${entry.title}*** by **${entry.poet}**.`,
          `AO2 signature: ${entry.craftNote}`,
        ],
      };
    },
  },
  {
    id: "lit-poetry.poem-and-poet",
    topicId: "lit-poetry",
    title: "Anthology Poet & Form Attribution Across All 16 Poems",
    level: 2,
    guideRef: "conflict-suffering-blessing-poems",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const entry = rng.pick(ANTHOLOGY);
      const quote = rng.pick(entry.quotes);
      const mode = rng.bool(0.75) ? "poet" : "form";
      if (mode === "poet") {
        const showTitle = tier <= 2 || rng.bool(0.5);
        const titleCue = showTitle ? ` of ***${entry.title}***` : "";
        return {
          prompt: `Name the **poet**${titleCue} who wrote these Edexcel Anthology lines:\n\n> ${quote}`,
          answer: {
            type: "text",
            accept: entry.acceptPoet,
            display: entry.poet,
          },
          traps: [
            {
              spec: { type: "text", accept: [entry.foilPoet] },
              feedback: `Careful with poet attribution — ***${entry.title}*** was written by **${entry.poet}**, not ${entry.foilPoet}.`,
            },
          ],
          hint: `Author of *${entry.title}* (${entry.craftNote.split(" ")[0]} ${entry.craftNote.split(" ")[1]}...).`,
          solution: [
            `Poet: **${entry.poet}**, author of ***${entry.title}***.`,
            `Craft anchor: ${entry.craftNote}`,
          ],
        };
      }
      return {
        prompt: `Name the primary **poetic or stanza form** of **${entry.poet}'s *${entry.title}***:\n\n> ${quote}\n\n*(Clue: ${entry.craftNote.replace(new RegExp(entry.form, "gi"), "_____")})*`,
        answer: {
          type: "text",
          accept: entry.acceptForm,
          display: entry.form,
        },
        hint: `Think about the stanza/genre architecture of *${entry.title}*.`,
        solution: [
          `Form of ***${entry.title}***: **${entry.form}**.`,
          entry.craftNote,
        ],
      };
    },
  },
  {
    id: "lit-poetry.ao2-prosody-devices",
    topicId: "lit-poetry",
    title: "AO2 Poetic Form, Prosody & Structural Devices",
    level: 2,
    guideRef: "unseen-modern-poetry-method",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const d = rng.pick(POETIC_DEVICES);
      const flip = rng.bool(0.5);
      const stem = flip
        ? `Study this poetic example:\n\n> ${d.example}\n\n${d.question}`
        : `${d.question}\n\n*Example:* ${d.example}`;
      const nudge = tier === 1 ? ` *(Starts with "${d.term.slice(0, 2).toUpperCase()}…")*` : "";
      return {
        prompt: `${stem}${nudge}`,
        answer: {
          type: "text",
          accept: d.accept,
          display: d.term,
        },
        traps: [
          {
            spec: { type: "text", accept: [d.trap] },
            feedback: d.trapMsg,
          },
        ],
        hint: d.explanation.replace(/\*\*/g, "").replace(new RegExp(d.term, "gi"), "_____"),
        solution: [d.explanation],
      };
    },
  },
  {
    id: "lit-poetry.comparative-pairing",
    topicId: "lit-poetry",
    title: "AO3 Comparative Pairing & Micro-Quote Precision",
    level: 3,
    guideRef: "anthology-comparative-thesis",
    generate(rng: Rng): DrillItem {
      if (rng.bool(0.35)) {
        const p = rng.pick(PAIRING_PROMPTS);
        const variant = rng.int(0, 1);
        const stem =
          variant === 0
            ? `Edexcel Part 2 Comparison (**${p.theme}**): the exam paper prints ***${p.anchor}***. ${p.clue}`
            : `To compare **${p.theme}** against ***${p.anchor}***: ${p.clue}`;
        return {
          prompt: stem,
          answer: {
            type: "text",
            accept: p.acceptPartner,
            display: p.bestPartner,
          },
          traps: [
            {
              spec: { type: "text", accept: [p.wrongPartner] },
              feedback: p.wrongMsg,
            },
          ],
          hint: `Grade-9 comparative thesis: ${p.thesis}`,
          solution: [
            `Ideal companion poem: ***${p.bestPartner}***.`,
            `Grade-9 AO3 thesis: ${p.thesis}`,
          ],
        };
      }
      const e = rng.pick(ANTHOLOGY);
      const q = rng.pick(e.quotes);
      const askTitle = rng.bool(0.5);
      if (askTitle) {
        return {
          prompt: `Grade-9 Anthology recall (zero notes!): give the exact **title** of the poem containing:\n\n> ${q}`,
          answer: {
            type: "text",
            accept: e.acceptTitle,
            display: e.title,
          },
          traps: [
            {
              spec: { type: "text", accept: [e.foilTitle] },
              feedback: `Those lines belong to ***${e.title}*** (${e.poet}), not *${e.foilTitle}*.`,
            },
          ],
          hint: `By ${e.poet} — ${e.craftNote}`,
          solution: [
            `Title: ***${e.title}*** (${e.poet}).`,
            `Form & structure: ${e.craftNote}`,
          ],
        };
      }
      return {
        prompt: `Grade-9 Anthology attribution: name the **poet** whose craft uses *${e.craftNote.toLowerCase()}* in:\n\n> ${q}`,
        answer: {
          type: "text",
          accept: e.acceptPoet,
          display: e.poet,
        },
        traps: [
          {
            spec: { type: "text", accept: [e.foilPoet] },
            feedback: `Not ${e.foilPoet} — those lines are by **${e.poet}** (*${e.title}*).`,
          },
        ],
        hint: `Author of *${e.title}*.`,
        solution: [
          `Poet: **${e.poet}** (*${e.title}*).`,
          `AO2 craft: ${e.craftNote}`,
        ],
      };
    },
  },
];
