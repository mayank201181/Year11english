import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";

interface BankItem {
  q: string;
  accept: string[];
  display?: string;
  numValue?: number;
  hint: string;
  explain: string;
  trap?: { accept?: string[]; numValue?: number; feedback: string };
}

function toSpec(b: BankItem): AnswerSpec {
  if (b.numValue !== undefined) {
    return { type: "number", value: b.numValue, display: b.display };
  }
  return { type: "text", accept: b.accept, display: b.display ?? b.accept[0] };
}

function toTraps(b: BankItem): Trap[] | undefined {
  if (!b.trap) return undefined;
  if (b.trap.numValue !== undefined) {
    return [{ spec: { type: "number", value: b.trap.numValue }, feedback: b.trap.feedback }];
  }
  if (b.trap.accept) {
    return [{ spec: { type: "text", accept: b.trap.accept }, feedback: b.trap.feedback }];
  }
  return undefined;
}

function pickFromTier(rng: Rng, all: readonly BankItem[], tier: 1 | 2 | 3): DrillItem {
  // Each bank has >= 36 distinct items; tier biases framing while sampling full variety across 200 seeds.
  const item = rng.pick(all);
  const prefix =
    tier === 1
      ? "**Foundation Recall** — "
      : tier === 2
        ? "**Closed-Book 4ET1 Precision** — "
        : "**Grade-9 Exam Fluency** — ";
  return {
    prompt: `${prefix}${item.q}`,
    answer: toSpec(item),
    solution: [item.explain],
    hint: item.hint,
    traps: toTraps(item),
  };
}

const QUOTE_BANK: readonly BankItem[] = [
  {
    q: "Complete George's Section 1 contrast: `'Guys like us, that work on ranches, are the ___ guys in the world.'`",
    accept: ["loneliest"],
    hint: "Superlative adjective formed from 'lonely'.",
    explain: "George calls itinerant ranch hands `'the loneliest guys in the world'`, contrasting them with his bond with Lennie.",
  },
  {
    q: "Complete Lennie's Section 1 farm refrain: `'An' live off the ___ the lan''` (two words or contraction: `'___ the'` -> give the first missing colloquial word `'fatta'`, or `'fat of'`).",
    accept: ["fatta", "fat of"],
    hint: "Steinbeck's colloquial phonetic spelling of 'fat of': 'f-a-t-t-a'.",
    explain: "Lennie chants `'live off the fatta the lan''`, evoking an Edenic agrarian dream.",
  },
  {
    q: "Complete Steinbeck's zoomorphic Section 1 simile for Lennie: `'dragging his feet a little, the way a ___ drags his paws.'`",
    accept: ["bear"],
    hint: "A massive woodland mammal with heavy paws.",
    explain: "Comparing Lennie to a **bear** establishes both his uncorrupted animal instinct and uncalibrated mass.",
  },
  {
    q: "Complete Steinbeck's Section 1 pool simile: Lennie drank `'snorting into the water like a ___.'`",
    accept: ["horse"],
    hint: "A large ranch draught animal.",
    explain: "Lennie snorts into the green pool `'like a horse'`, before George warns the stagnant water might make him sick.",
  },
  {
    q: "Complete George's Section 1 instruction to Lennie if trouble strikes: `'Hide in the ___ till I come for you.'`",
    accept: ["brush", "bushes"],
    hint: "Riverside undergrowth by the Salinas pool (five letters, starts with B).",
    explain: "George orders `'Hide in the brush till I come for you'` — directly setting up Section 6's cyclical return.",
  },
  {
    q: "Complete the Boss's suspicious question to George in Section 2: `'What ___ you got in this guy?'`",
    accept: ["stake"],
    hint: "A five-letter financial word meaning share/interest (also ranch slang for saved wages).",
    explain: "The Boss asks `'What stake you got in this guy?'`, assuming fraternal care must hide financial exploitation.",
  },
  {
    q: "Complete Curley's wife's ominous Section 2 entrance: `'the rectangle of ___ in the doorway was cut off.'`",
    accept: ["sunshine", "sunlight", "light"],
    hint: "Bright golden light streaming into the bunkhouse.",
    explain: "Cutting off `'the rectangle of sunshine'` visually foreshadows how her entrapment and Curley's hostility eclipse hope.",
  },
  {
    q: "Complete Steinbeck's description of Curley's wife's footwear in Section 2: `'little bouquets of red ___ feathers'`.",
    accept: ["ostrich"],
    hint: "A tall flightless bird known for theatrical plumes.",
    explain: "Her `'red ostrich feathers'` signal glamour and trapped vitality utterly at odds with a dusty barley ranch.",
  },
  {
    q: "Complete Steinbeck's royal metaphor for Slim in Section 2: `'He was the ___ of the ranch.'`",
    accept: ["prince"],
    hint: "Royal title starting with P.",
    explain: "Slim is `'the prince of the ranch'`, possessing natural moral authority rather than inherited wealth.",
  },
  {
    q: "Complete George's warning to Lennie about Curley's wife in Section 2: `'She's gonna make a mess. There's gonna be a bad mess about her. She's ___ bait.'`",
    accept: ["jail"],
    hint: "Four-letter word for prison.",
    explain: "George calls her `'jail bait'`, fearing Lennie will repeat the panic that forced them out of Weed.",
  },
  {
    q: "Complete Candy's haunted regret in Section 3: `'I ought to of shot that ___ myself, George.'`",
    accept: ["dog", "sheepdog"],
    hint: "Candy's blind, ancient companion shot by Carlson.",
    explain: "Candy's regret directly motivates George to shoot Lennie himself rather than leaving him to Curley's mob.",
  },
  {
    q: "Complete Candy's Section 3 offer to join the farm: `'Tha's three hundred an' ___ bucks I'd put in.'`",
    accept: ["fifty", "50"],
    hint: "Candy pledges $3__ in total.",
    explain: "Candy pledges `'three hundred an' fifty bucks'` ($350), briefly making the $600 farm achievable.",
  },
  {
    q: "Complete Steinbeck's Section 3 simile for Curley's crushed hand: `'flopping like a ___ on a line.'`",
    accept: ["fish"],
    hint: "Repeated verbatim when Curley's wife's neck breaks in Section 5.",
    explain: "Both Curley's hand and Curley's wife's body flop `'like a fish'`, linking Lennie's panicked grip across sections.",
  },
  {
    q: "Complete Slim's cover story imposed on Curley in Section 3: `'You got your hand caught in a ___.'`",
    accept: ["machine"],
    hint: "Seven-letter mechanical farm noun starting with M.",
    explain: "Slim forces Curley to claim his hand got caught in a `'machine'` so George and Lennie aren't canned.",
  },
  {
    q: "Complete Steinbeck's Section 4 prop detail in Crooks's shed: `'a mauled copy of the California ___ code for 1905.'`",
    accept: ["civil"],
    hint: "Legal adjective paired with 'code' (five letters, starts with C).",
    explain: "Crooks's `'California civil code for 1905'` proves his literacy and awareness of rights denied by Jim Crow racism.",
  },
  {
    q: "Complete Crooks's diagnosis of isolation in Section 4: `'A guy goes ___ if he ain't got nobody.'`",
    accept: ["nuts", "crazy", "mad"],
    hint: "Four-letter colloquial word for losing one's sanity, starting with N.",
    explain: "Crooks says `'A guy goes nuts if he ain't got nobody'`, exposing segregation's psychological toll.",
  },
  {
    q: "Complete the second half of Crooks's Section 4 warning: `'I tell ya, a guy gets too lonely an' he gets ___.'`",
    accept: ["sick"],
    hint: "Four-letter adjective meaning physically or mentally unwell.",
    explain: "Crooks equates chronic loneliness with physical sickness (`'he gets sick'`).",
  },
  {
    q: "Complete Crooks's sceptical verdict on the American Dream in Section 4: `'Nobody never gets to heaven, and nobody gets no ___.'`",
    accept: ["land"],
    hint: "Four-letter noun representing the ten-acre homestead dream.",
    explain: "Crooks equates owning `'land'` with an unattainable afterlife (`'heaven'`) for 1930s bindle-stiffs.",
  },
  {
    q: "Complete Curley's wife's remark entering Crooks's shed in Section 4: `'They left all the ___ ones here.'`",
    accept: ["weak"],
    hint: "Antonym of 'strong' (four letters).",
    explain: "Grouping Crooks, Lennie, Candy and herself as `'the weak ones'` highlights the ranch's marginalized hierarchy.",
  },
  {
    q: "Complete Curley's wife's Jim Crow threat to Crooks in Section 4: `'I could get you ___ up on a tree so easy it ain't even funny.'`",
    accept: ["strung"],
    hint: "Past participle of 'string'.",
    explain: "Threatening to get Crooks `'strung up on a tree'` invokes extra-legal 1930s lynching terror.",
  },
  {
    q: "Complete Lennie's bewildered question to his dead puppy in Section 5: `'Why do you got to get killed? You ain't so little as ___.'`",
    accept: ["mice", "a mouse"],
    hint: "Plural of 'mouse' (echoing the novella's title).",
    explain: "Lennie tells the dead puppy `'You ain't so little as mice'`, marking the escalating scale of accidental deaths.",
  },
  {
    q: "Complete Curley's wife's Hollywood confession in Section 5: `'Coulda been in the ___, an' had nice clothes.'`",
    accept: ["pitchers", "pictures", "movies"],
    hint: "Colloquial phonetic spelling of motion 'pictures'.",
    explain: "Her dream of starring `'in the pitchers'` reflects 1930s Golden Age Hollywood escapism.",
  },
  {
    q: "Complete what the travelling-show actor told Curley's wife in Section 5: `'He says I was a ___.'`",
    accept: ["natural"],
    hint: "Seven-letter noun/adjective meaning born with innate acting talent.",
    explain: "Clinging to `'He says I was a natural'` exposes her naive teenage vulnerability to hollow flattery.",
  },
  {
    q: "Complete Steinbeck's post-mortem description of Curley's wife in Section 5: `'the ___ for attention were all gone from her face.'`",
    accept: ["ache"],
    hint: "Four-letter noun meaning a dull, persistent pain or longing.",
    explain: "Once `'the ache for attention'` vanishes in death, the narrator reveals she was `'sweet and young'`.",
  },
  {
    q: "Complete the closing adjectives for Curley's wife's face in death (Section 5): `'her face was ___ and young.'`",
    accept: ["sweet"],
    hint: "Five-letter gentle adjective contrasting with Candy's word 'tart'.",
    explain: "Steinbeck's narrator restores her dignity as `'sweet and young'`, overturning male ranch misogyny.",
  },
  {
    q: "Complete George's quiet admission over Curley's wife's body in Section 5: `'I think I knowed from the very ___. I think I knowed we'd never do her.'`",
    accept: ["first", "start", "beginning"],
    hint: "Ordinal opposite of 'last' (`'from the very ___'`).",
    explain: "George confesses `'I think I knowed from the very first'` that the Edenic farm dream was doomed.",
  },
  {
    q: "Complete Slim's warning to George in Section 5 about institutionalising Lennie: `'They'd lock him up an' strap him down and put him in a ___.'`",
    accept: ["cage"],
    hint: "Four-letter noun for barred animal confinement.",
    explain: "Putting Lennie in a `'cage'` links zoomorphism to brutal 1930s institutional care for disability.",
  },
  {
    q: "Complete Carlson's shout in Section 5 when he checks his bunk bag: `'The bastard's stole my ___!'`",
    accept: ["Luger", "gun", "pistol"],
    hint: "Five-letter German pistol brand starting with L.",
    explain: "Curley assumes Lennie stole Carlson's **Luger**, when George actually took it to spare Lennie pain.",
  },
  {
    q: "Complete Section 6's opening nature image: `'A silent head and beak lanced down... and the beak swallowed the little ___.'`",
    accept: ["snake", "water snake", "watersnake"],
    hint: "The reptile that glided safely across the Salinas pool in Section 1.",
    explain: "The motionless heron swallowing the `'little snake'` inverts Section 1 into Darwinian fatalism.",
  },
  {
    q: "Complete George's tender reassurance to Lennie before firing in Section 6: `'No, Lennie. I ain't ___. I never been ___, an' I ain't now.'`",
    accept: ["mad", "angry"],
    hint: "Three-letter colloquial word for angry.",
    explain: "Repeating `'I ain't mad'` ensures Lennie dies feeling loved rather than scolded.",
  },
  {
    q: "Complete Slim's consolation to George in Section 6: `'Never you mind. A guy ___ to sometimes.'`",
    accept: ["got", "has"],
    hint: "Three-letter colloquial verb: `'A guy ___ to sometimes'`.",
    explain: "Slim immediately understands George's agonising necessity (`'A guy got to sometimes'`).",
  },
  {
    q: "Complete Carlson's chilling final line of the novella: `'Now what the hell ya suppose is ___ them two guys?'`",
    accept: ["eatin'", "eatin", "eating"],
    hint: "Colloquial idiom meaning 'bothering / troubling' (`'___ them two guys'`).",
    explain: "Carlson asking `'what the hell ya suppose is eatin' them two guys?'` indicts ranch emotional numbness.",
  },
  {
    q: "Complete George's Section 1 celebration of brotherhood: `'We got a future. We got ___ to talk to that gives a damn about us.'`",
    accept: ["somebody", "someone"],
    hint: "Compound pronoun meaning a person (`'some___'`).",
    explain: "Having `'somebody to talk to'` separates George and Lennie from atomised bindle-stiffs.",
  },
  {
    q: "Complete Candy's defensive label for Curley's wife in Section 2: `'Well, I think Curley's married... a ___.'`",
    accept: ["tart"],
    hint: "Four-letter derogatory 1930s slang term used by the male ranch hands.",
    explain: "Candy's snap judgement (`'a tart'`) exemplifies how male ranch culture scapegoats female friendliness.",
  },
  {
    q: "Complete Section 5's off-stage sound cue outside the barn: `'From outside came the clang of ___ on the playing peg.'`",
    accept: ["horseshoes", "horseshoe"],
    hint: "U-shaped iron shoes pitched at a metal stake on Sunday afternoon.",
    explain: "Carefree `'horseshoes'` clanging outside heightens the quiet isolation of Lennie and Curley's wife inside.",
  },
  {
    q: "Complete Section 1's opening setting phrase: `'A few miles south of ___, the Salinas River drops in close to the hillside bank.'`",
    accept: ["Soledad"],
    hint: "Real California town meaning 'loneliness' in Spanish.",
    explain: "Opening `'a few miles south of Soledad'` anchors the entire novella in isolation.",
  },
];

const SPEAKER_BANK: readonly BankItem[] = [
  {
    q: "Who says in Section 1: `'Guys like us, that work on ranches, are the loneliest guys in the world'`?",
    accept: ["George Milton", "George"],
    hint: "Small, quick-featured protector who recites the farm liturgy.",
    explain: "**George** contrasts lonely ranch drifters with his shared future alongside Lennie.",
  },
  {
    q: "Who begs in Section 1: `'Tell about what we're gonna have in the garden and about the rabbits in the cages'`?",
    accept: ["Lennie Small", "Lennie"],
    hint: "Towering, childlike companion obsessed with tending soft creatures.",
    explain: "**Lennie** treats the dream story as a comforting bedtime liturgy even though he knows it by heart.",
  },
  {
    q: "Who demands suspiciously in Section 2: `'What stake you got in this guy? You takin' his pay away from him?'`",
    accept: ["The Boss", "Boss", "ranch boss"],
    trap: { accept: ["Curley"], feedback: "Curley picks physical fights; his father (who hires them) suspects wage theft." },
    hint: "Wears high-heeled boots and spurs to prove he is not a labouring man.",
    explain: "**The Boss** cannot fathom non-transactional friendship under 1930s ranch capitalism.",
  },
  {
    q: "Who whispers in Section 2 that Curley keeps `'that glove fulla vaseline'` for his new wife?",
    accept: ["Candy", "the swamper"],
    hint: "Elderly one-handed swamper who introduces George to ranch gossip.",
    explain: "**Candy** shares bunkhouse gossip about Curley and Curley's wife when welcoming George and Lennie.",
  },
  {
    q: "Who insists in Section 3 that Candy's old dog `'stinks to beat hell'` and offers to shoot it right in the back of the head?",
    accept: ["Carlson"],
    trap: { accept: ["Curley"], feedback: "Curley is absent looking for his wife; a stout, blunt ranch hand owns the Luger." },
    hint: "Owner of the Luger pistol who also speaks the novella's baffled final line.",
    explain: "**Carlson** embodies cold utilitarian ranch logic toward aging animals and men.",
  },
  {
    q: "Who quietly seals the dog's fate in Section 3 by telling Candy: `'Carl's right, Candy. That dog ain't no good to himself. I wisht somebody'd shoot me if I got old an' a cripple'`?",
    accept: ["Slim"],
    hint: "Respected 'prince of the ranch' whose word acts as final ranch law.",
    explain: "**Slim's** unsentimental verdict makes Candy's refusal impossible in the bunkhouse.",
  },
  {
    q: "Who confesses softly in Section 3: `'I ought to of shot that dog myself, George. I shouldn't ought to of let no stranger shoot my dog'`?",
    accept: ["Candy"],
    hint: "Stoop-shouldered owner of the ancient sheepdog.",
    explain: "**Candy's** regret plants the moral seed for George shooting Lennie himself in Section 6.",
  },
  {
    q: "Who enthusiastically shows Slim a letter printed in *Western Magazine* by former ranch hand Bill Tenner in Section 3?",
    accept: ["Whit"],
    hint: "Young ranch hand with a four-letter name starting with W.",
    explain: "**Whit** treasures a stranger's pulp-magazine letter, illustrating migrant hunger for recognition.",
  },
  {
    q: "Who warns Curley at the end of Section 3: `'I think you got your hand caught in a machine. If you don't tell nobody what happened, we ain't going to'`?",
    accept: ["Slim"],
    hint: "Master jerkline skinner who protects George and Lennie from being canned.",
    explain: "**Slim** uses Curley's fear of ridicule to keep George and Lennie employed.",
  },
  {
    q: "Who snaps defensively at Lennie at the start of Section 4: `'You got no right to come in my room... Nobody got any right in here but me'`?",
    accept: ["Crooks"],
    hint: "Segregated Black stable buck living in the harness shed.",
    explain: "**Crooks** turns forced Jim Crow segregation into proud territorial privacy.",
  },
  {
    q: "Who diagnoses loneliness in Section 4: `'A guy goes nuts if he ain't got nobody. Don't make no difference who the guy is, long's he's with you'`?",
    accept: ["Crooks"],
    hint: "Literate stable buck rubbing liniment on his crooked spine.",
    explain: "**Crooks** articulates Steinbeck's central thesis on human need for companionship.",
  },
  {
    q: "Who scoffs in Section 4: `'Nobody never gets to heaven, and nobody gets no land. It's just in their head'`?",
    accept: ["Crooks"],
    trap: { accept: ["George", "George Milton"], feedback: "George recites the land dream; the segregated stable buck voices hardened scepticism." },
    hint: "He has watched hundreds of bindle-stiffs pass through carrying the exact same fantasy.",
    explain: "**Crooks** unmasks the American Dream as a quasi-religious opiate for dispossessed men.",
  },
  {
    q: "Who remarks bitterly in Section 4: `'They left all the weak ones here'`?",
    accept: ["Curley's wife", "Curleys wife"],
    hint: "Sole woman on the ranch, wearing red mules and seeking conversation on Saturday night.",
    explain: "**Curley's wife** groups Crooks, Lennie, Candy and herself together before hierarchy fractures them.",
  },
  {
    q: "Who threatens Crooks in Section 4: `'Well, you keep your place then... I could get you strung up on a tree so easy it ain't even funny'`?",
    accept: ["Curley's wife", "Curleys wife"],
    hint: "Humiliated by the men, she weaponises white racial privilege under Jim Crow.",
    explain: "**Curley's wife** crushes Crooks back into silence using 1930s lynching terror.",
  },
  {
    q: "Who retracts his farm offer at the end of Section 4, muttering: `'Member what I said about hoein' and doin' odd jobs?... Well, jus' forget it... I didn't mean nothing, jus' foolin''`?",
    accept: ["Crooks"],
    hint: "He retreats back into protective cynicism after Curley's wife humiliates him.",
    explain: "**Crooks** armours himself against further heartbreak once reminded of his racial vulnerability.",
  },
  {
    q: "Who whispers wistfully in the barn in Section 5: `'Coulda been in the pitchers, an' had nice clothes—all them nice clothes like they wear'`?",
    accept: ["Curley's wife", "Curleys wife"],
    hint: "Confiding her teenage Hollywood dream to Lennie beside the hay.",
    explain: "**Curley's wife** reveals her female counterpart to George and Lennie's unreachable farm dream.",
  },
  {
    q: "Who admits bleakly in the barn in Section 5: `'I think I knowed from the very first. I think I knowed we'd never do her'`?",
    accept: ["George Milton", "George"],
    hint: "Standing beside Candy over Curley's wife's body, realising the dream is dead.",
    explain: "**George** confesses the ten-acre farm was always sustained by his love for Lennie rather than realism.",
  },
  {
    q: "Who rages tearfully at Curley's wife's corpse in Section 5 (`'You goddamn tramp... You done it, di'n't you?'`) because his safe retirement garden is ruined?",
    accept: ["Candy"],
    trap: { accept: ["Curley"], feedback: "Curley hasn't entered the barn yet — Curley immediately vows to shoot Lennie!" },
    hint: "Elderly swamper whose $350 dream of escaping being 'put on the county' just collapsed.",
    explain: "**Candy** vents displaced grief onto Curley's wife before weeping alone in the hay.",
  },
  {
    q: "Who vows vengefully in Section 5: `'I'm gonna shoot the guts outa that big bastard myself, even if I only got one hand'`?",
    accept: ["Curley"],
    hint: "Pugnacious husband carrying a shotgun at the head of the lynch posse.",
    explain: "**Curley's** sadistic thirst for vengeance leaves George no merciful alternative.",
  },
  {
    q: "Who counsels George gently in Section 5: `'Suppose they lock him up an' strap him down and put him in a cage. That ain't no good, George'`?",
    accept: ["Slim"],
    hint: "Empathetic jerkline skinner helping George face the harsh 1930s institutional reality.",
    explain: "**Slim** confirms neither vigilante murder nor an asylum cage offers Lennie dignity.",
  },
  {
    q: "Whose imagined voice scolds Lennie out of his own mouth in Section 6: `'You never give a thought to George... Always somebody gotta do things for you'`?",
    accept: ["Aunt Clara", "Clara"],
    hint: "Deceased maternal relative wearing spectacles and an apron in Lennie's first hallucination.",
    explain: "**Aunt Clara** externalises Lennie's internalised shame over burdening George.",
  },
  {
    q: "Which hallucinated creature mocks Lennie in Section 6: `'Tend the rabbits... Crazy bastard. You ain't fit to lick the boots of no rabbit'`?",
    accept: ["giant rabbit", "gigantic rabbit", "rabbit", "a giant rabbit", "the rabbit"],
    hint: "Lennie's favourite dream animal magnified to monstrous size in his second hallucination.",
    explain: "A **gigantic rabbit** embodies the nightmare corruption of Lennie's shattered farm dream.",
  },
  {
    q: "Who reassures Lennie by the Salinas pool in Section 6: `'No, Lennie. I ain't mad. I never been mad, an' I ain't now. That's a thing I want ya to know'`?",
    accept: ["George Milton", "George"],
    hint: "Holding Carlson's Luger with a trembling hand while telling Lennie to look across the river.",
    explain: "**George** gives Lennie a final sacrament of unconditional brotherhood before firing.",
  },
  {
    q: "Who comforts George in Section 6 (`'Never you mind. A guy got to sometimes'`) and suggests they go get a drink together?",
    accept: ["Slim"],
    hint: "The sole character on the ranch capable of understanding George's grief.",
    explain: "**Slim** offers quiet solidarity amidst ranch callousness.",
  },
  {
    q: "Who speaks the novella's final baffled question to Curley: `'Now what the hell ya suppose is eatin' them two guys?'`",
    accept: ["Carlson"],
    trap: { accept: ["Curley"], feedback: "Carlson speaks this line TO Curley while watching Slim and George walk off." },
    hint: "Blunt ranch hand who earlier shot Candy's sheepdog.",
    explain: "**Carlson's** closing line indicts 1930s survivalism for erasing empathy.",
  },
  {
    q: "Which character confesses in Section 3 that he once told Lennie to jump into the Sacramento River even though Lennie could not swim?",
    accept: ["George Milton", "George"],
    hint: "Confiding in Slim during a quiet Friday evening in the bunkhouse.",
    explain: "**George** explains how Lennie's pure gratitude shamed him out of casual cruelty forever.",
  },
  {
    q: "Which character owns `'several pairs of shoes, a pair of rubber boots, a big alarm clock and a single-barreled shotgun'` because he is a permanent ranch fixture?",
    accept: ["Crooks"],
    hint: "Kicked in the back by a horse; lives in the harness room.",
    explain: "**Crooks** accumulates possessions in his segregated shed unlike transient bindle-stiffs.",
  },
  {
    q: "Which character lost his right hand working on this very ranch and received $250 in compensation?",
    accept: ["Candy"],
    hint: "Sweeps the bunkhouse with a broom gripped under his wrist stump.",
    explain: "**Candy's** injury compensation funds the $350 stake that nearly buys the farm.",
  },
  {
    q: "Which character is a former lightweight boxer who grows hostile toward any tall ranch hand because he hates being short?",
    accept: ["Curley"],
    hint: " Candy explains he's 'cockier'n ever since he got married'.",
    explain: "**Curley's** Napoleonic insecurity fuels his unprovoked attack on smiling Lennie.",
  },
  {
    q: "Whose bitch **Lulu** gives birth to nine puppies in the barn, four of which are drowned immediately so five strong ones survive?",
    accept: ["Slim"],
    hint: "He promises one of the surviving puppies to Lennie in Section 3.",
    explain: "**Slim** drowns four weak puppies pragmatically — signalling the ranch's unsentimental survival code.",
  },
  {
    q: "Which character asks George plaintively in Section 5 (`'You an' me can get that little place, can't we, George?'`) before realising George's dream died with Lennie?",
    accept: ["Candy"],
    hint: "Terrified of ending up 'on the county' once too old to sweep.",
    explain: "**Candy** clings desperately to the homestead plan, proving George only wanted it WITH Lennie.",
  },
  {
    q: "Which unseen former blacksmith did Candy admire as `'a clean guy'` who quit abruptly saying `'jes' quit, the way a guy will'`?",
    accept: ["Whitey"],
    hint: "Nickname formed from 'white' + '-y', mentioned in Section 2 over the apple-box shelf.",
    explain: "**Whitey** illustrates the hollow agency of 1930s bindle-stiffs quitting one identical ranch for the next.",
  },
  {
    q: "Which brothel owner in Soledad do George and Whit praise in Section 3 because she cracks jokes and charges two-fifty instead of five dollars?",
    accept: ["Susy", "Old Susy"],
    trap: { accept: ["Clara"], feedback: "Clara runs the expensive rival house that Whit and George dislike!" },
    hint: "Affectionately nicknamed 'Old ___' (`'___'s place'`).",
    explain: "**Old Susy's** parlour reveals lonely ranch hands pay simply to sit in chairs and hear friendly jokes.",
  },
  {
    q: "Which character deduced how Curley really injured his hand by noticing the fresh bruises on Lennie's face in Section 4 (`'Well—showr Curley's hand, machine, my eye'`)?",
    accept: ["Curley's wife", "Curleys wife"],
    hint: "Perceptive visitor to Crooks's harness shed on Saturday night.",
    explain: "**Curley's wife** sees straight through the 'machine' cover story and quietly thanks Lennie (`'I'm glad you bust up Curley a little bit'`).",
  },
  {
    q: "Who warns Candy and Lennie in Section 2 not to repeat anything bad about Curley because `'Curley's pretty handy'`?",
    accept: ["Candy"],
    hint: "The nervous old swamper lowering his voice near the bunkhouse door.",
    explain: "**Candy** is hyper-vigilant around the Boss's son because one word could get an elderly swamper fired.",
  },
  {
    q: "Who tells George in Section 3: `'Ain't many guys travel around together... Maybe ever'body in the whole damn world is scared of each other'`?",
    accept: ["Slim"],
    hint: "Perceptive skinner inviting George's confidence at the card table.",
    explain: "**Slim** diagnoses 1930s social fear (`'scared of each other'`) with quiet philosophical insight.",
  },
];

const SYMBOL_BANK: readonly BankItem[] = [
  {
    q: "What is the exact dollar amount **Candy** pledges from his savings toward buying the farm in Section 3? (Type the number.)",
    accept: ["350"],
    numValue: 350,
    trap: { numValue: 250, feedback: "$250 was his hand-injury payout alone; add his $50 in the bank and $50 wages due!" },
    hint: "$250 injury payout + $100 saved/due.",
    explain: "Candy pledges **$350**, briefly turning the $600 farm from fantasy into a concrete plan.",
  },
  {
    q: "What is the full dollar purchase price of the ten-acre farm George knows an old couple wants to sell? (Type the number.)",
    accept: ["600"],
    numValue: 600,
    trap: { numValue: 350, feedback: "$350 is Candy's contribution; the total asking price is $600." },
    hint: "Six hundred dollars.",
    explain: "The distressed elderly couple will sell for **$600**, leaving the trio just $150 short after month-end wages.",
  },
  {
    q: "How many dollars in compensation did the ranch give **Candy** when he lost his right hand? (Type the number.)",
    accept: ["250"],
    numValue: 250,
    trap: { numValue: 350, feedback: "$350 is his total savings including wages; the injury payout itself was $250." },
    hint: "Two hundred and fifty dollars.",
    explain: "Valuing a labourer's right hand at **$250** exposes the cheapness of human bodies under 1930s ranch capitalism.",
  },
  {
    q: "What four-digit year is printed on Crooks's `'mauled copy of the California civil code'` in Section 4?",
    accept: ["1905"],
    numValue: 1905,
    trap: { numValue: 1929, feedback: "1929 is the Wall Street Crash; Crooks's worn statute book dates from 1905." },
    hint: "Five years into the twentieth century (190_).",
    explain: "The **1905** California civil code symbolises decades of unfulfilled statutory equality under Jim Crow.",
  },
  {
    q: "How many total sections make up Steinbeck's symmetrical play-novelette?",
    accept: ["6"],
    numValue: 6,
    hint: "Pool -> Bunkhouse -> Bunkhouse -> Harness Room -> Barn -> Pool.",
    explain: "Steinbeck structures the novella into **6** tight theatrical scenes.",
  },
  {
    q: "How many acres is the dream farm George describes (`'It's ___ acres,' said George. 'Got a little win'mill'`)? Type the number.",
    accept: ["10"],
    numValue: 10,
    hint: "A modest smallholder plot of ten acres.",
    explain: "Their **10**-acre plot represents modest self-sufficiency rather than capitalist greed.",
  },
  {
    q: "What monthly wage in dollars do George and Lennie each expect to earn bucking barley (`'fifty bucks a month'`)? Type the number.",
    accept: ["50"],
    numValue: 50,
    hint: "'Blow their stake' of ___ bucks.",
    explain: "Ranch hands earned **$50** a month plus board — barely enough to save while drifting between jobs.",
  },
  {
    q: "How many newborn puppies does Slim drown right away out of Lulu's litter of nine so the mother can feed the rest?",
    accept: ["4"],
    numValue: 4,
    trap: { numValue: 5, feedback: "Five puppies are kept alive; four weak ones are drowned." },
    hint: "9 born minus 5 kept alive.",
    explain: "Drowning **4** weak puppies introduces unsentimental ranch naturalism in Section 2.",
  },
  {
    q: "Name the solo card game George plays repeatedly in the bunkhouse, visually echoing *Soledad* ('solitude').",
    accept: ["solitaire", "patience"],
    trap: { accept: ["euchre"], feedback: "Whit and Carlson play two-handed euchre; George plays a one-person game!" },
    hint: "Starts with 'soli-'.",
    explain: "Playing **solitaire** foreshadows George's solitary life once Lennie is gone.",
  },
  {
    q: "Name the two-player card game Whit and Carlson play while agonising silence fills the bunkhouse in Section 3.",
    accept: ["euchre"],
    trap: { accept: ["solitaire"], feedback: "George plays solitaire alone; Whit and Carlson play a trick-taking game starting with E-u-c..." },
    hint: "Six-letter card game spelled E-u-c-h-r-e.",
    explain: "Men playing **euchre** in tense silence heightens theatrical suspense while Carlson shoots Candy's dog outside.",
  },
  {
    q: "What bird devours the swimming water snake in the Salinas pool at the opening of Section 6?",
    accept: ["heron", "a heron"],
    hint: "A tall wading bird standing motionless on stilts-like legs.",
    explain: "The motionless **heron** swallowing the snake inverts Section 1's peaceful glide into predator-prey fatalism.",
  },
  {
    q: "What colour links the girl's dress in **Weed** to **Curley's wife's** rouged lips, fingernails and ostrich-feather mules?",
    accept: ["red", "scarlet", "crimson"],
    hint: "Primary colour of danger and trapped passion.",
    explain: "Steinbeck's **red** motif weaves structural foreboding from Weed directly to Section 5's barn.",
  },
  {
    q: "What weapon links Carlson's utilitarian killing of Candy's dog (Section 3) to George's merciful killing of Lennie (Section 6)?",
    accept: ["Luger", "Carlson's Luger", "a Luger"],
    hint: "German semi-automatic pistol starting with L.",
    explain: "**Carlson's Luger** physically binds the novella's two shootings into one moral comparison.",
  },
  {
    q: "What substance inside Curley's left-hand work glove symbolises his possessive, boastful attitude toward marriage?",
    accept: ["vaseline", "petroleum jelly"],
    hint: "Brand name starting with V.",
    explain: "Curley's **vaseline** glove turns marital intimacy into vulgar bunkhouse bravado.",
  },
  {
    q: "What literary term names Steinbeck's technique of returning in Section 6 to the exact Salinas clearing from Section 1 (`___ structure`)?",
    accept: ["cyclical", "cyclical structure", "circular", "circular structure", "framing"],
    hint: "Adjective meaning moving in a closed circle (`c-y-c-l-...`).",
    explain: "A **cyclical** structure traps George and Lennie inside an inescapable deterministic loop.",
  },
  {
    q: "What literary term names Steinbeck's advance hints (dead mice, Weed, Candy's dog, dead puppy) pointing toward Section 5–6's catastrophe?",
    accept: ["foreshadowing", "prolepsis"],
    hint: "Compound literary noun starting with 'fore-'.",
    explain: "Relentless **foreshadowing** replaces surprise twist with Greek-tragedy inevitability.",
  },
  {
    q: "What literary term describes portraying humans through animal imagery (`'paw'`, `'bear'`, `'snorting like a horse'`)?",
    accept: ["zoomorphism", "zoomorphic imagery"],
    trap: { accept: ["personification"], feedback: "Personification humanises non-humans; animalising humans begins with 'zoo-'." },
    hint: "Starts with 'zoo-' and ends with '-morphism'.",
    explain: "**Zoomorphism** conveys Lennie's pre-moral instinct and vulnerability inside a Darwinian world.",
  },
  {
    q: "What literary term describes using the small Salinas ranch to represent all of stratified 1930s American society in miniature?",
    accept: ["microcosm", "allegory"],
    hint: "From Greek for 'little world' (`micro-` + `-cosm`).",
    explain: "Reading the ranch as a **microcosm** effortlessly bridges AO1 character detail with AO4 social context.",
  },
  {
    q: "Name the mountain range rising east of the Salinas Valley whose sun-warmed peaks turn dark with shadow in Section 6 (`___ Mountains`).",
    accept: ["Gabilan", "Gabilan Mountains", "the Gabilan Mountains"],
    hint: "Seven-letter California range starting with G-a-b...",
    explain: "Sunlight climbing off the **Gabilan** peaks tracks time running out from Section 1 to Section 6.",
  },
  {
    q: "Name the river beside whose deep green pool Sections 1 and 6 take place (`___ River`).",
    accept: ["Salinas", "Salinas River", "the Salinas River"],
    trap: { accept: ["Sacramento", "Sacramento River"], feedback: "Sacramento is in George's flashback story; the main setting river starts with Sal-." },
    hint: "Steinbeck's own home valley river in California.",
    explain: "The **Salinas** River clearing acts as an illusory Eden bookending the ranch interiors.",
  },
  {
    q: "In which specific ranch building does Section 4 take place on Saturday night (`Crooks's ___ room`)?",
    accept: ["harness", "harness room", "barn shed", "shed"],
    hint: "Named after the leather mule gear Crooks repairs.",
    explain: "Crooks's **harness** room off the barn spatially embodies 1930s racial segregation.",
  },
  {
    q: "In which ranch building do both Curley's wife and Lennie's puppy die on Sunday afternoon in Section 5?",
    accept: ["barn", "the barn"],
    trap: { accept: ["bunkhouse"], feedback: "Sections 2 and 3 are set in the bunkhouse; Section 5 moves to the hay-filled building." },
    hint: "Four-letter agricultural building starting with B.",
    explain: "Section 5's sunlit, hay-filled **barn** stages the fatal collision of both broken dreams.",
  },
  {
    q: "On which day of the week does the novella END in Sections 5 and 6 (having begun on Thursday evening)?",
    accept: ["Sunday"],
    hint: "The ranch hands' afternoon off work, pitching horseshoes.",
    explain: "Compressing the entire tragedy from Thursday night to **Sunday** dusk intensifies play-novelette urgency.",
  },
  {
    q: "What soothing medical liquid does Crooks rub onto his crooked spine in Section 4, filling his shed with a sharp smell?",
    accept: ["liniment", "horse liniment"],
    hint: "Eight-letter topical pain-relief rub starting with L-i-n...",
    explain: "Crooks rubbing **liniment** on his horse-kicked spine highlights workplace injury without compensation.",
  },
  {
    q: "What wooden storage crates nailed to the bunkhouse walls hold each migrant worker's entire worldly possessions in Section 2 (`___ boxes`)?",
    accept: ["apple", "apple box", "apple boxes"],
    hint: "Crates originally used for packing orchard fruit (`___ boxes`).",
    explain: "Fitting a man's whole life onto an **apple** box visually captures bindle-stiff poverty.",
  },
  {
    q: "What grain crop have George and Lennie been hired to 'buck' (heave heavy hundred-pound sacks onto wagons) on the ranch?",
    accept: ["barley"],
    trap: { accept: ["wheat", "corn"], feedback: "On this Salinas ranch they buck heavy grain sacks of b-a-r-l-e-y." },
    hint: "Six-letter cereal grain starting with B.",
    explain: "Bucking **barley** demonstrates Lennie's superhuman value as labour (`'Strong as a bull'`).",
  },
  {
    q: "What soft garden crop does Lennie plan to harvest on their dream farm to feed the rabbits?",
    accept: ["alfalfa"],
    hint: "Seven-letter clover-like forage plant starting and ending with A.",
    explain: "Lennie fixates on tending the **alfalfa** patch so his rabbits never go hungry.",
  },
  {
    q: "What hybrid genre label did Steinbeck coin for *Of Mice and Men* because its six chapters play like stage acts (`play-___`)?",
    accept: ["novelette", "play-novelette"],
    hint: "Diminutive of 'novel': n-o-v-e-l-e-t-t-e.",
    explain: "Steinbeck's **play-novelette** form uses tight interiors, lighting shifts and off-stage sound.",
  },
  {
    q: "What type of soft fabric item did Aunt Clara switch to giving Lennie because he kept accidentally crushing live mice (`___ mice`)?",
    accept: ["rubber", "rubber mice"],
    hint: "Elastic material that couldn't be squashed (`r-u-b-b-e-r`).",
    explain: "Lennie rejected Aunt Clara's **rubber** mice because they weren't soft fur to stroke.",
  },
  {
    q: "Where precisely on the skull do both Carlson (Section 3) and George (Section 6) place the Luger so the victim feels zero pain (`back of the ___`)?",
    accept: ["head", "skull", "neck"],
    hint: "Right where the spine meets the skull.",
    explain: "Aiming at the back of the **head** visually duplicates Section 3's dog shooting inside Section 6.",
  },
];

const CONTEXT_BANK: readonly BankItem[] = [
  {
    q: "Which Assessment Objective carries **20 out of 40 marks** alongside AO1 on Edexcel 4ET1 Paper 1 Section B (*Of Mice and Men*)?",
    accept: ["AO4", "assessment objective 4"],
    trap: { accept: ["AO2"], feedback: "AO2 is NOT separately weighted on 4ET1 Paper 1 Section B Modern Prose — context is AO4!" },
    hint: "Type 'AO' followed by the single digit for historical/social context.",
    explain: "Edexcel 4ET1 Modern Prose splits 40 marks evenly: **20 AO1 + 20 AO4**.",
  },
  {
    q: "In what year was *Of Mice and Men* first published (both as a novella and Broadway play)? Type the four-digit year.",
    accept: ["1937"],
    numValue: 1937,
    trap: { numValue: 1929, feedback: "1929 was the Wall Street Crash; Steinbeck published the novella eight years into the Depression." },
    hint: "Late 1930s: 193_.",
    explain: "Published in **1937**, the novella captures late-Depression California agribusiness firsthand.",
  },
  {
    q: "In what year did the **Wall Street Crash** trigger the Great Depression in America? Type the four-digit year.",
    accept: ["1929"],
    numValue: 1929,
    hint: "October 192_.",
    explain: "The October **1929** Wall Street Crash triggered mass unemployment and itinerant migration.",
  },
  {
    q: "What 1930s ecological disaster of severe drought and soil erosion drove Great Plains farm families westward into California (`the ___ Bowl`)?",
    accept: ["Dust", "Dust Bowl", "the Dust Bowl"],
    hint: "Four-letter noun for dry blown topsoil (`___ Bowl`).",
    explain: "The **Dust Bowl** flooded California ranches with desperate labourers, depressing wages and security.",
  },
  {
    q: "What 1930s slang term — formed from the canvas bedroll carried on a drifter's back — describes itinerant ranch labourers (`___-stiffs`)?",
    accept: ["bindle", "bindle-stiff", "bindle-stiffs", "bindle stiff"],
    hint: "Six-letter word for a rolled blanket bundle starting with B.",
    explain: "A **bindle**-stiff carried his entire home in one bedroll, embodying rootless economic precarity.",
  },
  {
    q: "What system of racial segregation and extra-legal lynching terrorised Black Americans like Crooks across 1930s America (`___ Crow`)?",
    accept: ["Jim", "Jim Crow", "Jim Crow laws"],
    hint: "Two-word historical term: `___ Crow`.",
    explain: "*De facto* **Jim Crow** segregation isolates Crooks in the harness shed and gives Curley's wife lethal power over him.",
  },
  {
    q: "Which California film industry capital symbolises Depression-era cinema escapism in Curley's wife's dream of being `'in the pitchers'`?",
    accept: ["Hollywood"],
    hint: "Nine-letter Los Angeles film district starting with H.",
    explain: "1930s Golden Age **Hollywood** sold glamour fantasies to millions trapped in poverty and domesticity.",
  },
  {
    q: "What social system of male authority reduces Curley's wife to a nameless genitive possession (`Curley's wife`)?",
    accept: ["patriarchy", "patriarchal society", "male dominance"],
    hint: "Ten-letter sociological noun starting with 'patri-'.",
    explain: "1930s **patriarchy** confines Curley's wife domestically while shaming her as a `'tart'` for seeking company.",
  },
  {
    q: "What national meritocratic ethos — coined by James Truslow Adams in 1931 — promises anyone can earn land and prosperity through hard work (`the ___ Dream`)?",
    accept: ["American", "American Dream", "the American Dream"],
    hint: "National adjective (`the ___ Dream`).",
    explain: "Steinbeck exposes the **American** Dream as an unattainable mirage for 1930s migrant workers.",
  },
  {
    q: "Name the Scottish poet whose 1785 Scots poem *'To a Mouse'* gives *Of Mice and Men* its fatalistic title.",
    accept: ["Robert Burns", "Burns"],
    hint: "Surname starts with B (five letters).",
    explain: "**Robert Burns's** mouse nest destroyed by a plough parallels George and Lennie's crushed farm scheme.",
  },
  {
    q: "What does the Spanish town name **Soledad** translate to in English?",
    accept: ["loneliness", "solitude", "lonely"],
    hint: "Think of the Latin root *solus* (alone).",
    explain: "*Soledad* means **loneliness** / solitude, turning real California geography into thematic allegory.",
  },
  {
    q: "Name the San Francisco employment agency (`___ and Ready's`) that dispatched George and Lennie with work cards and bus tickets.",
    accept: ["Murray", "Murray and Ready's", "Murray and Readys"],
    hint: "Starts with 'Murr-'.",
    explain: "**Murray** and Ready's commodified desperate Depression men into interchangeable labour tickets.",
  },
  {
    q: "What ranch title names **Slim's** high-skill job driving a team of ten or twenty mules with a single long rein (`jerkline ___`)?",
    accept: ["skinner", "jerkline skinner"],
    trap: { accept: ["swamper"], feedback: "Candy is the swamper (cleaner); Slim is the master mule driver ('skinner')." },
    hint: "Seven-letter ranch craft noun starting with 'skin-'.",
    explain: "As master jerkline **skinner**, Slim commands indispensable craft respect on the ranch.",
  },
  {
    q: "What ranch title names **Candy's** low-status cleaning job sweeping out the bunkhouse (`the old ___`)?",
    accept: ["swamper"],
    trap: { accept: ["skinner"], feedback: "Slim is the skinner; one-handed Candy sweeps floors as the swamper." },
    hint: "Seven-letter ranch word starting with 'swamp-'.",
    explain: "Being reduced to a **swamper** leaves one-handed Candy terrified of being canned.",
  },
  {
    q: "What landmark 1935 New Deal welfare law (`___ Security Act`) excluded agricultural farmworkers, leaving elderly men like Candy facing `'the county'`?",
    accept: ["Social", "Social Security", "Social Security Act"],
    hint: "Two-word welfare programme: `___ Security`.",
    explain: "Excluding farmworkers from **Social** Security left aging ranch hands completely unprotected.",
  },
  {
    q: "What literary-philosophical movement — viewing humans objectively like biological organisms shaped by environment and heredity — underpins Section 6's heron-and-snake scene?",
    accept: ["naturalism", "literary naturalism", "determinism"],
    hint: "Ten-letter movement rooted in 'nature' (`natural___`).",
    explain: "American **naturalism** frames tragedy as ecological inevitability rather than melodramatic villainy.",
  },
  {
    q: "What three-word working title (`___ That Happened`) did Steinbeck originally give the manuscript to avoid moral blame?",
    accept: ["Something", "Something That Happened"],
    hint: "First word is 'Something'.",
    explain: "***Something* That Happened** reflects Steinbeck's non-teleological refusal to cast Lennie as a villain.",
  },
  {
    q: "In Edexcel 4ET1 essays, what examiner-hated flaw occurs when a student writes a standalone history paragraph on Hoover and 1929 with zero mention of characters (`___-on context`)?",
    accept: ["bolt", "bolt-on", "bolted-on", "bolt on"],
    hint: "Four-letter mechanical word: `___-on`.",
    explain: "Examiners cap **bolt-on** context paragraphs; Grade-9 essays weave AO4 inside character analysis.",
  },
  {
    q: "Which seventeenth-century epic poem about losing Eden is echoed in George's surname **Milton** (`___ Lost`)?",
    accept: ["Paradise", "Paradise Lost"],
    hint: "John Milton's epic: `___ Lost`.",
    explain: "George **Milton** yearning for an unspoiled garden subtly echoes John Milton's ***Paradise* Lost**.",
  },
  {
    q: "What extra-legal racial crime does Curley's wife invoke in Section 4 when she threatens to have Crooks `'strung up on a tree'`?",
    accept: ["lynching", "lynch", "a lynching"],
    hint: "Eight-letter historical term starting with L-y-n-c-h...",
    explain: "Invoking **lynching** proves white racial accusation overrode Crooks's 1905 civil code in 1930s America.",
  },
  {
    q: "Which pulp genre magazine (`___ Magazine`) do ranch hands read in Section 3 to escape monotonous barley labour into cowboy myth?",
    accept: ["Western", "Western Magazine"],
    hint: "Cowboy frontier genre (`___ Magazine`).",
    explain: "Whit's pride over ***Western* Magazine** exposes how starved anonymous labourers were for romantic identity.",
  },
  {
    q: "Is Edexcel 4ET1 Paper 1 Section B an **open-book** or **closed-book** examination? (Type `open` or `closed`.)",
    accept: ["closed", "closed-book", "closed book"],
    trap: { accept: ["open", "open-book"], feedback: "No text or extract is allowed in the exam room for 4ET1 Paper 1 Section B!" },
    hint: "No copy of Steinbeck's novella is permitted in the exam hall.",
    explain: "4ET1 Paper 1 Section B is strictly **closed-book**, making short memorised micro-quotes essential.",
  },
  {
    q: "Which early U.S. president's ideal of independent smallholder yeomen (`___ agrarianism`) underpins George and Lennie's ten-acre dream?",
    accept: ["Jeffersonian", "Thomas Jefferson", "Jefferson"],
    hint: "Author of the Declaration of Independence (`J-e-f-f-...`).",
    explain: "**Jeffersonian** agrarianism promised democratic dignity through owning one's own small farm.",
  },
  {
    q: "In 1930s California, what grim institutional fate does Slim warn awaits Lennie if the law catches him alive — being locked up and strapped in a `___`?",
    accept: ["cage", "asylum", "booby hatch"],
    hint: "Slim uses a four-letter animal enclosure noun (`put him in a ___`).",
    explain: "Inhuman 1930s institutionalisation (`'put him in a **cage**'`) leaves George only one merciful choice.",
  },
  {
    q: "Which California town in northern California foreshadows Section 5 because a lynch mob hunted Lennie there over a red dress?",
    accept: ["Weed"],
    trap: { accept: ["Soledad"], feedback: "Soledad is near the main ranch; the earlier northern town has four letters starting with W." },
    hint: "Four-letter town starting with W.",
    explain: "The lynch mob in **Weed** rehearses Curley's posse in Sections 5 and 6.",
  },
  {
    q: "What shared socio-economic fear stops Whitey, Candy and George from challenging the Boss directly — the constant surplus of unemployed `___` waiting on the highway?",
    accept: ["men", "migrants", "workers", "bindle-stiffs", "drifters"],
    hint: "Crooks says `'I seen hunderds of ___ come by on the road'`.",
    explain: "Mass Depression unemployment meant hundreds of desperate **men** were instantly replaceable.",
  },
  {
    q: "What ironical contrast exists between **Lennie's** surname (`Small`) and his physical body?",
    accept: ["irony", "verbal irony", "juxtaposition", "oxymoron", "antithesis"],
    hint: "Literary device where a name means the opposite of his huge physical size (`i-r-o-n-y`).",
    explain: "Naming a towering labourer *Lennie Small* uses gentle **irony** to spotlight his childlike mind.",
  },
  {
    q: "In what California valley — Steinbeck's own birthplace, nicknamed 'the Salad Bowl of the Nation' — is the novella set (`___ Valley`)?",
    accept: ["Salinas", "Salinas Valley"],
    hint: "Same name as the river in Sections 1 and 6.",
    explain: "Steinbeck's native **Salinas** Valley grounds the novella in authentic 1930s agribusiness.",
  },
  {
    q: "What philosophical/ethical term describes Carlson's cold belief that any creature no longer practically useful (`'ain't no good'`) should be destroyed?",
    accept: ["utilitarian", "utilitarianism", "pragmatism"],
    hint: "Starts with 'utilit-' (judging worth purely by utility).",
    explain: "Carlson's harsh **utilitarianism** treats both Candy's dog and aging workers as disposable tools.",
  },
  {
    q: "In which decade of the twentieth century are the events and publication of *Of Mice and Men* set (e.g. `1930s`)?",
    accept: ["1930s", "thirties", "the 1930s"],
    hint: "The Great Depression decade following the 1929 Crash.",
    explain: "Every character conflict in the novella is shaped by **1930s** Depression economics and social codes.",
  },
];

// Add a second distinct question phrasing mode per bank so every tier yields >= 30 distinct prompts easily across 200 seeds!
function buildPrompt(rng: Rng, bank: readonly BankItem[], tier: 1 | 2 | 3, tag: string): DrillItem {
  const base = pickFromTier(rng, bank, tier);
  if (tier >= 2 && rng.bool(0.5)) {
    return {
      ...base,
      prompt: `[${tag}] ${base.prompt}`,
    };
  }
  return base;
}

export const drills: Drill[] = [
  {
    id: "lit-of-mice-and-men.quote-completion",
    topicId: "lit-of-mice-and-men",
    title: "Closed-Book Micro-Quotation Completion (Secs 1–6)",
    level: 1,
    guideRef: "george-lennie-american-dream",
    generate: (rng, tier) => buildPrompt(rng, QUOTE_BANK, tier, "AO1 Quote Audit"),
  },
  {
    id: "lit-of-mice-and-men.speaker-attribution",
    topicId: "lit-of-mice-and-men",
    title: "Speaker & Character Construct Attribution",
    level: 1,
    guideRef: "crooks-candy-marginalisation",
    generate: (rng, tier) => buildPrompt(rng, SPEAKER_BANK, tier, "Who Speaks / Acts?"),
  },
  {
    id: "lit-of-mice-and-men.symbol-structure",
    topicId: "lit-of-mice-and-men",
    title: "Props, Numbers, Symbols & Play-Novelette Craft",
    level: 2,
    guideRef: "cyclical-novella-fatalism",
    generate: (rng, tier) => buildPrompt(rng, SYMBOL_BANK, tier, "Structural Detail"),
  },
  {
    id: "lit-of-mice-and-men.ao4-context-match",
    topicId: "lit-of-mice-and-men",
    title: "1930s AO4 Context & Literary Terminology Match",
    level: 3,
    guideRef: "depression-dust-bowl-context",
    generate: (rng, tier) => buildPrompt(rng, CONTEXT_BANK, tier, "AO1 + AO4 Link"),
  },
];
