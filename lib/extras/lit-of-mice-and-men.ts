import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Before John Steinbeck ever won the Nobel Prize, his own Irish Setter puppy Toby literally ate half the first manuscript of *Of Mice and Men* one night in 1936 — forcing Steinbeck to rewrite a book about an innocent creature accidentally destroying something precious!",
  didYouKnow: [
    "Steinbeck's setter puppy Toby chewed the original manuscript into confetti in May 1936. Steinbeck joked in a letter: *'My setter pup, left alone one night, made confetti of about half of my manuscript book. Two months work to do over again... There was no other draft. I was pretty mad, but the poor little fellow may have been acting critically.'*",
    "Steinbeck worked as a real manual labourer on Spreckels Ranch ranches near Salinas in the 1920s, bunking with transient bindle-stiffs and witnessing a gentle, towering farmworker who unexpectedly killed a ranch foreman.",
    "Because Steinbeck engineered *Of Mice and Men* as a six-scene 'play-novelette', playwright George S. Kaufman staged it on Broadway in November 1937 using almost 85% of Steinbeck's prose dialogue untouched — winning the New York Drama Critics' Circle Award over Thornton Wilder's *Our Town*.",
    "In a 1938 letter coaching Broadway actress Claire Luce on playing Curley's wife, Steinbeck insisted: *'She is not a floozy... if you knew what she has been through, you couldn't condemn her. Nobody ever listened to her.'*",
  ],
  activities: [
    {
      title: "The 60-Second Closed-Book Micro-Quote Sprint",
      emoji: "⏱️",
      materials: ["Blank index card or iPad note", "60-second timer"],
      steps: [
        "Fold your page into 6 horizontal strips labelled Section 1 through Section 6.",
        "Without peeking at the text, write TWO exact 2-to-5-word quotations in each strip (12 quotes total).",
        "Next to every quote, jot a 3-word 1930s AO4 anchor (e.g. `'mauled copy... 1905'` -> *Jim Crow segregation*; `'What stake you got?'` -> *predatory ranch capitalism*).",
        "Check against the Study Guide's Formulas & Key Quotes bank and highlight any section where your memory went fuzzy.",
      ],
      maths:
        "Closed-book Paper 1 Section B rewards distributed whole-text recall (AO1) fused at the sentence level with 1930s context (AO4) — never relying on a single memorised scene.",
    },
    {
      title: "Bolt-On Surgical Transplant",
      emoji: "🩺",
      materials: ["One past-paper prose paragraph", "Two highlighters (amber for AO1, green for AO4)"],
      steps: [
        "Highlight every textual detail or quotation in amber (AO1) and every 1930s historical claim in green (AO4).",
        "Check if you have three or more green sentences sitting together with zero amber inside them — that is the dreaded Band-2 'bolt-on history block'!",
        "Rewrite any pure-green block so Steinbeck's character is the grammatical subject or direct object of an analytical verb (*Steinbeck constructs Crooks's harness shed to indict...*).",
      ],
      maths:
        "Interleaving amber (AO1) and green (AO4) inside single complex sentences forces causal analysis rather than parallel historical summary.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Escalating Foreshadowing Ladder Across Sections 1–6",
      svg: `<svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-step escalating foreshadowing staircase from Weed red dress and dead mouse up to Curley's wife and Section 6 Luger"><rect x="10" y="10" width="520" height="170" rx="12" fill="#fafaf9" stroke="#57534e" stroke-width="1.6"/><rect x="28" y="132" width="90" height="34" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="73" y="153" font-size="10" font-weight="bold" text-anchor="middle" fill="#78350f" font-family="sans-serif">1. Weed &amp; Mice</text><rect x="128" y="106" width="92" height="60" rx="6" fill="#fde68a" stroke="#d97706"/><text x="174" y="132" font-size="10" font-weight="bold" text-anchor="middle" fill="#78350f" font-family="sans-serif">2. Candy's Dog</text><text x="174" y="148" font-size="9" text-anchor="middle" fill="#92400e" font-family="sans-serif">(Carlson's Luger)</text><rect x="230" y="80" width="92" height="86" rx="6" fill="#fed7aa" stroke="#ea580c"/><text x="276" y="114" font-size="10" font-weight="bold" text-anchor="middle" fill="#7c2d12" font-family="sans-serif">3. Curley's Hand</text><text x="276" y="130" font-size="9" text-anchor="middle" fill="#9a3412" font-family="sans-serif">('like a fish')</text><rect x="332" y="52" width="92" height="114" rx="6" fill="#fecaca" stroke="#dc2626"/><text x="378" y="96" font-size="10" font-weight="bold" text-anchor="middle" fill="#7f1d1d" font-family="sans-serif">4. Barn Deaths</text><text x="378" y="112" font-size="9" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Puppy + Wife</text><rect x="434" y="26" width="82" height="140" rx="6" fill="#cbd5e1" stroke="#334155" stroke-width="1.8"/><text x="475" y="80" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">5. Salinas Pool</text><text x="475" y="96" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">Heron + Luger</text></svg>`,
      caption: "Every accidental violence and mercy killing rehearses the next on a larger human scale.",
    },
  ],
  history: {
    title: "Salinas Valley 1936: Strikes, Dust Bowl Camps & 'Something That Happened'",
    story:
      "When John Steinbeck wrote *Of Mice and Men* in 1936, his native Salinas Valley — nicknamed 'the Salad Bowl of the Nation' — was torn apart by violent lettuce-packers' strikes and flooded by penniless families fleeing Oklahoma's Dust Bowl. That same autumn, *San Francisco News* commissioned Steinbeck to visit squatters' camps for a seven-part investigative journalism series (*The Harvest Gypsies*). Out of that reporting came both *Of Mice and Men* (1937) — focusing intimately on solitary male bindle-stiffs — and *The Grapes of Wrath* (1939), chronicling displaced Dust Bowl families.",
  },
};
