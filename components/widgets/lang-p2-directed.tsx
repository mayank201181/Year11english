"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type FormKind = "letter" | "article" | "speech";
type StanceTone = "measured" | "urgent";

interface TransformedPack {
  formLabel: string;
  audience: string;
  registerTag: string;
  headerBlock: string;
  hookMeasured: string;
  hookUrgent: string;
  logosLow: string;
  logosHigh: string;
  pathosLow: string;
  pathosHigh: string;
  rebuttalEthosLow: string;
  rebuttalEthosHigh: string;
  signOff: string;
}

const RAW_SOURCE_PACK = [
  "Source B (Municipal Audit): Neighbourhood library Saturday footfall rose 28% among GCSE/IGCSE students; closing Saturday hours saves £42,000 annually (0.3% of borough leisure budget).",
  "Source D (Librarian's Diary): 'By 10 a.m. every Saturday, thirty teenagers share twelve power sockets because flat-share kitchens at home have nowhere quiet to revise.'",
];

const PACKS: Record<FormKind, TransformedPack> = {
  letter: {
    formLabel: "Formal Letter to Council Chair",
    audience: "Councillor Nair & Borough Finance Committee",
    registerTag: "Diplomatic steel · Subjunctive poise · Institutional duty",
    headerBlock: "Dear Councillor Nair,",
    hookMeasured:
      "I write on behalf of sixth-form and Year 11 residents to urge the Finance Committee to reconsider the proposed curtailment of Saturday branch-library opening hours.",
    hookUrgent:
      "Were the Committee to padlock branch libraries on Saturdays this autumn, the borough would dismantle its most equitable study sanctuary for a fraction of a percent of its leisure budget.",
    logosLow:
      "Recent municipal figures confirm that weekend student attendance has grown substantially, whereas closing doors on Saturdays trims only a negligible sliver from annual council expenditure.",
    logosHigh:
      "Your own municipal audit records a twenty-eight percent surge in Saturday student footfall; shuttering those desks claws back barely £42,000 — three-tenths of one percent of leisure spending — while shifting far steeper educational costs onto local schools.",
    pathosLow:
      "For many exam-year pupils living in shared apartments without dedicated study rooms, a quiet public desk on Saturday morning is a practical necessity rather than a convenience.",
    pathosHigh:
      "Every Saturday by ten o'clock, thirty teenagers crowd around twelve wall sockets because noisy, overcrowded kitchens at home offer no corner for sustained revision: padlocking that room rations ambition by postcode.",
    rebuttalEthosLow:
      "Opponents claim teenagers can simply revise online using smartphones instead of council buildings.",
    rebuttalEthosHigh:
      "Admittedly, statutory social-care pressures force every council department to scrutinise fixed overheads; yet sacrificing frontline study infrastructure is a textbook false economy that undermines the borough's own social-mobility charter.",
    signOff: "Yours sincerely,\nVanishree Menon (Year 11 Resident Representative)",
  },
  article: {
    formLabel: "Broadsheet Opinion Column",
    audience: "National educated adult readership",
    registerTag: "Incisive · Culturally observant · Headline + Strapline",
    headerBlock:
      "THE FALSE ECONOMY OF SILENCING SATURDAY LIBRARIES\nShaving pennies off municipal reading rooms quietly prices working families out of academic success.",
    hookMeasured:
      "Across Britain's towns, a quiet civic asset is being whittled away under the seductively tidy spreadsheet euphemism of 'weekend efficiency alignment'.",
    hookUrgent:
      "What does civic short-sightedness cost in twenty-first-century Britain? Apparently, £42,000 — the paltry annual sum for which local authorities are willing to bolt library doors in teenagers' faces.",
    logosLow:
      "Even as teenage weekend library visits climb steadily year on year, short-term budget cuts target the very hours when working families actually use public buildings.",
    logosHigh:
      "Despite a nearly thirty-percent jump in Saturday teenage footfall, treasurers propose sacrificing weekend opening for just three-tenths of one percent of a leisure budget — less than the cost of resurfacing a single civic car park.",
    pathosLow:
      "Without heated, silent municipal study tables, exam candidates without private bedrooms face an uneven playing field.",
    pathosHigh:
      "Step inside any suburban branch at ten on a Saturday morning and witness thirty revision folders balanced around twelve shared plug sockets: proof that digital slogans have never replaced four quiet walls and a wooden table.",
    rebuttalEthosLow:
      "Some commentators insist physical libraries are obsolete relics in an era of ubiquitous Wi-Fi.",
    rebuttalEthosHigh:
      "Granted, municipal treasurers have endured a bruising decade of fiscal squeeze, and no serious observer envies their ledger; yet mistaking a study lifeline for an optional perk confuses the price of a building with its civic value.",
    signOff:
      "A city that balances its books by dimming its reading lamps should not feign surprise when opportunity narrows in the dark.",
  },
  speech: {
    formLabel: "Live Youth Assembly / Town-Hall Speech",
    audience: "Councillors, parents, and fellow Year 11 students",
    registerTag: "Immediate oral cadence · Inclusive 'we' · Hypophora & tricolon",
    headerBlock: "Councillors, parents, and fellow Year 11s —",
    hookMeasured:
      "Look around this hall tonight and ask a simple question: where do we expect young people to build the grades we demand of them every summer?",
    hookUrgent:
      "Can a borough genuinely champion equal opportunity on Monday morning — and padlock the only quiet study desks available to its teenagers on Saturday? Not for a single week.",
    logosLow:
      "Weekend student visits to our libraries have surged over the past year, yet the proposed cut saves almost nothing from the wider council budget.",
    logosHigh:
      "Nearly three in ten more students now walk through our library doors on Saturdays than a year ago — yet we are told to surrender those hours for three-tenths of one percent of the leisure budget!",
    pathosLow:
      "Not every candidate in this hall goes home to a silent study, a fast laptop, and an empty dining table.",
    pathosHigh:
      "Picture thirty of our classmates hunched round twelve wall sockets at ten on a Saturday morning because home is a shared room and a noisy hallway: close that door, and we silence curiosity, narrow aspiration, and tell hard-working students they stand alone.",
    rebuttalEthosLow:
      "Critics will shrug that libraries belong to the past because everyone owns a phone.",
    rebuttalEthosHigh:
      "Admittedly, every councillor on this stage faces agonising budget trade-offs — we respect that burden; yet precisely when household budgets are tightest, public study space becomes not a luxury to trim, but the bedrock we must defend.",
    signOff:
      "Keep those doors open on Saturday morning — because an investment in quiet desks today echoes in every future launched from this hall.",
  },
};

export const widgets: WidgetDef[] = [
  {
    id: "audience-rhetoric-transformer",
    title: "Audience, Form & Aristotelian Rhetoric Transformer",
    blurb:
      "Transform the exact same two Section A stimulus facts across a Formal Letter, Broadsheet Article, and Live Speech while tuning Ethos, Logos, and Pathos.",
    Component() {
      const [form, setForm] = useState<FormKind>("letter");
      const [stance, setStance] = useState<StanceTone>("urgent");
      const [ethos, setEthos] = useState<number>(3);
      const [logos, setLogos] = useState<number>(3);
      const [pathos, setPathos] = useState<number>(2);

      const pack = PACKS[form];
      const total = ethos + logos + pathos || 1;
      const spread = Math.max(ethos, logos, pathos) - Math.min(ethos, logos, pathos);
      const balanceLabel =
        ethos >= 2 && logos >= 2 && pathos >= 2 && spread <= 1
          ? "Grade-9 Poised Triad"
          : pathos === 3 && ethos === 1 && logos === 1
            ? "Overheated Melodrama"
            : logos === 3 && pathos === 1 && ethos === 1
              ? "Dry Technocratic Memo"
              : "Developing Balance";
      const balanceTone = balanceLabel === "Grade-9 Poised Triad" ? "good" : spread >= 2 ? "bad" : "brand";

      // Triangle vertices in a 260x185 SVG
      const topX = 130;
      const topY = 26;
      const leftX = 36;
      const leftY = 158;
      const rightX = 224;
      const rightY = 158;
      const dotX = (ethos * topX + logos * leftX + pathos * rightX) / total;
      const dotY = (ethos * topY + logos * leftY + pathos * rightY) / total;

      return (
        <WidgetFrame
          title="Section A → Section B Rhetoric & Genre Transformer"
          tryThis={[
            "Switch **Form** between *Letter*, *Article*, and *Speech* — watch the opening, pronouns, and sign-off transform with **zero verbatim lifting**.",
            "Push **Pathos to 3** and drop **Ethos & Logos to 1** to see why unbalanced emotion risks melodrama, then restore all three to **2–3** for Grade-9 poise.",
          ]}
          caption={
            <span>
              <strong>Examiner takeaway:</strong> Notice how the raw Section A facts (<em>28% footfall rise</em> and <em>£42,000 / 0.3% saving</em>) never quote{" "}
              <em>&ldquo;Source B says&rdquo;</em> — they are re-forged into each genre&rsquo;s authentic voice.
            </span>
          }
        >
          <div className="space-y-4">
            <div className="rounded-xl border border-line bg-surface-2 p-3 text-xs leading-relaxed text-ink-2">
              <div className="mb-1 font-extrabold uppercase tracking-wide text-ink">Raw Section A Stimulus Nuggets (Do NOT Lift Verbatim)</div>
              <ul className="list-disc space-y-1 pl-4">
                {RAW_SOURCE_PACK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Segmented<FormKind>
                label="Target Form"
                value={form}
                onChange={setForm}
                options={[
                  { value: "letter", label: "✉️ Formal Letter" },
                  { value: "article", label: "🗞️ Broadsheet Article" },
                  { value: "speech", label: "🎙️ Assembly Speech" },
                ]}
              />
              <Segmented<StanceTone>
                label="Opening Cadence"
                value={stance}
                onChange={setStance}
                options={[
                  { value: "measured", label: "Measured Hook" },
                  { value: "urgent", label: "Incisive / Hypophora Hook" },
                ]}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-line bg-surface p-3.5">
                <Slider
                  label="Ethos (Fair Concession & Credibility)"
                  value={ethos}
                  min={1}
                  max={3}
                  onChange={setEthos}
                  format={(v) => (v === 1 ? "1 · Blunt" : v === 2 ? "2 · Fair" : "3 · Steelman")}
                />
                <Slider
                  label="Logos (Re-Forged Metrics & Causality)"
                  value={logos}
                  min={1}
                  max={3}
                  onChange={setLogos}
                  format={(v) => (v === 1 ? "1 · General" : v === 2 ? "2 · Grounded" : "3 · Forensic")}
                />
                <Slider
                  label="Pathos (Concrete Human Stakes)"
                  value={pathos}
                  min={1}
                  max={3}
                  onChange={setPathos}
                  format={(v) => (v === 1 ? "1 · Cool" : v === 2 ? "2 · Vivid" : "3 · Visceral")}
                />
              </div>

              <div className="flex flex-col items-center justify-between rounded-xl border border-line bg-surface p-3">
                <svg viewBox="0 0 260 185" className="h-40 w-full max-w-[260px]" role="img" aria-label="Aristotelian balance triangle plotting current Ethos, Logos, and Pathos mix">
                  <polygon points="130,26 36,158 224,158" fill="#eff6ff" stroke="#3b82f6" strokeWidth={2} />
                  <circle cx={130} cy={114} r={22} fill="#dcfce7" stroke="#22c55e" strokeDasharray="3 2" />
                  <line x1={130} y1={26} x2={dotX} y2={dotY} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 3" />
                  <line x1={36} y1={158} x2={dotX} y2={dotY} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 3" />
                  <line x1={224} y1={158} x2={dotX} y2={dotY} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 3" />
                  <circle cx={dotX} cy={dotY} r={7} fill="#0f172a" stroke="#facc15" strokeWidth={2.5} />
                  <text x={130} y={16} textAnchor="middle" fontSize={11} fontWeight={800} fill="#1e3a8a">
                    ETHOS ({ethos})
                  </text>
                  <text x={38} y={175} textAnchor="middle" fontSize={11} fontWeight={800} fill="#14532d">
                    LOGOS ({logos})
                  </text>
                  <text x={222} y={175} textAnchor="middle" fontSize={11} fontWeight={800} fill="#831843">
                    PATHOS ({pathos})
                  </text>
                </svg>
                <div className="grid w-full grid-cols-2 gap-2">
                  <Readout label="Target Audience" value={<span className="text-xs font-bold">{pack.audience}</span>} tone="ink" />
                  <Readout label="Triad Diagnosis" value={<span className="text-xs font-extrabold">{balanceLabel}</span>} tone={balanceTone} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface p-4 shadow-sm">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2 text-xs">
                <span className="font-extrabold text-brand">{pack.formLabel}</span>
                <span className="text-ink-2">{pack.registerTag}</span>
              </div>
              <div className="space-y-3 whitespace-pre-line font-serif text-sm leading-relaxed text-ink">
                <p className="font-bold text-ink">{pack.headerBlock}</p>
                <p>{stance === "urgent" ? pack.hookUrgent : pack.hookMeasured}</p>
                <p>
                  {logos >= 2 ? pack.logosHigh : pack.logosLow}{" "}
                  {pathos >= 2 ? pack.pathosHigh : pack.pathosLow}
                </p>
                <p>{ethos >= 2 ? pack.rebuttalEthosHigh : pack.rebuttalEthosLow}</p>
                <p className="font-semibold text-ink-2">{pack.signOff}</p>
              </div>
            </div>
          </div>
        </WidgetFrame>
      );
    },
  },
];
