import type { Metadata } from "next";
import Link from "next/link";
import type { FormulaFact, Misconception, Mnemonic, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { STRANDS } from "@/lib/topics/meta";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Grade-9 Quotes, Terms & Examiner Traps",
  description:
    "High-yield quotations, literary & rhetorical terminology, mnemonics, and 'Never Write This ❌ → Write This Instead ✅' examiner traps for OxfordAQA 9270 & Edexcel 4ET1.",
};

const STRAND_STYLE: Record<string, { text: string; border: string; dot: string; soft: string }> = {
  "Language 9270": { text: "text-s-number", border: "border-s-number", dot: "bg-s-number", soft: "bg-s-number/10" },
  "Literature 4ET1": { text: "text-s-algebra", border: "border-s-algebra", dot: "bg-s-algebra", soft: "bg-s-algebra/10" },
};

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const formulasOf = (t: Topic): FormulaFact[] => t.learn?.formulas ?? [];
const trapsOf = (t: Topic): Misconception[] => t.learn?.misconceptions ?? [];
const mnemonicsOf = (t: Topic): Mnemonic[] => t.learn?.mnemonics ?? [];

export default function FormulasPage() {
  const groups = STRANDS.map((strand) => ({
    strand,
    topics: TOPICS.filter((t) => t.strand === strand && (formulasOf(t).length > 0 || trapsOf(t).length > 0)),
  })).filter((g) => g.topics.length > 0);
  const formulaCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + formulasOf(t).length, 0), 0);
  const trapCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + trapsOf(t).length, 0), 0);
  const topicCount = groups.reduce((n, g) => n + g.topics.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="no-print mb-2 flex flex-wrap gap-2">
            <span className="chip border-0 bg-brand-soft text-brand">🎯 OxfordAQA 9270 &amp; Edexcel 4ET1</span>
            <span className="chip border-0 bg-good-soft text-good">✅ Grade-9 Marks-Savers</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            Grade-9 Quotes, Literary Terms &amp; Examiner Traps
          </h1>
          <p className="mt-1 max-w-3xl text-ink-2 print:hidden">
            What actually wins top-band marks in <strong>OxfordAQA 9270</strong> and <strong>Pearson Edexcel 4ET1</strong> — every set-text micro-quotation, analytical term, mnemonic, and <em>&ldquo;Never Write This ❌ → Write This Instead ✅&rdquo;</em> examiner upgrade on one printable sheet.
          </p>
          {formulaCount || trapCount ? (
            <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
              {formulaCount} quotes &amp; literary terms · {trapCount} examiner traps upgraded · {topicCount} topic{topicCount === 1 ? "" : "s"}
              <span className="hidden print:inline"> · Year 11 IGCSE English Lab</span>
            </p>
          ) : null}
        </div>
        <div className="no-print flex flex-wrap gap-2">
          <Link href="/cram" className="btn btn-secondary">
            🚨 Interactive Cram Checklist
          </Link>
          {formulaCount ? <PrintButton label="Print Vault" /> : null}
        </div>
      </header>

      {groups.length > 0 ? (
        <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to a strand">
          {groups.map((g) => (
            <a key={g.strand} href={`#strand-${slug(g.strand)}`} className="btn btn-secondary btn-sm min-h-10">
              <span aria-hidden className={`h-2 w-2 rounded-full ${STRAND_STYLE[g.strand]?.dot ?? "bg-brand"}`} />
              {g.strand}
            </a>
          ))}
          <a href="#traps-vault" className="btn btn-secondary btn-sm min-h-10 text-bad">
            ❌→✅ Never Write vs Write Instead
          </a>
        </nav>
      ) : null}

      {!groups.length ? (
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>
            🎯
          </div>
          <h2 className="mt-2 text-xl font-extrabold">The Grade-9 Quote &amp; Terms Vault is loading</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-2">It populates automatically as topic lessons are published.</p>
          <Link href="/topics" className="btn btn-primary mt-5">
            Browse topics
          </Link>
        </section>
      ) : (
        <>
          <section id="traps-vault" className="scroll-mt-20 space-y-4">
            <div>
              <h2 className="text-xl font-black tracking-tight">
                <span aria-hidden>🚨 </span>Never Write This ❌ → Write This Instead ✅
              </h2>
              <p className="text-sm text-ink-2">
                Examiners read hundreds of generic responses. Replace every capped Band-2 phrase on the left with the analytical Band-5/Grade-9 move on the right.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {groups.flatMap((g) =>
                g.topics.map((t) => (
                  <article key={`trap-${t.id}`} className="card break-inside-avoid p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-extrabold">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h3>
                      <span className="chip text-xs">{t.strand}</span>
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {trapsOf(t).map((m, i) => (
                        <li key={i} className="grid overflow-hidden rounded-xl border border-line text-sm sm:grid-cols-2">
                          <div className="bg-bad-soft p-3">
                            <div className="text-[0.68rem] font-black uppercase tracking-wider text-bad">❌ Never Write This</div>
                            <p className="mt-1">
                              <RichInline text={m.wrong} />
                            </p>
                          </div>
                          <div className="bg-good-soft p-3">
                            <div className="text-[0.68rem] font-black uppercase tracking-wider text-good">✅ Write This Instead</div>
                            <p className="mt-1 font-medium">
                              <RichInline text={m.right} />
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {mnemonicsOf(t).length ? (
                      <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
                        {mnemonicsOf(t).map((mn, i) => (
                          <div key={i} className="rounded-lg bg-surface-2 px-3 py-1.5 text-xs">
                            <strong className="text-brand">{mn.device}</strong> — <RichInline text={mn.explanation} />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>
                )),
              )}
            </div>
          </section>

          {groups.map((g) => {
            const st = STRAND_STYLE[g.strand] ?? { text: "text-brand", border: "border-brand", dot: "bg-brand", soft: "bg-brand-soft" };
            return (
              <section key={g.strand} id={`strand-${slug(g.strand)}`} className="scroll-mt-20" aria-labelledby={`strand-${slug(g.strand)}-h`}>
                <h2 id={`strand-${slug(g.strand)}-h`} className={`mb-3 flex items-center gap-2 text-lg font-black break-after-avoid print:mb-2 print:text-base ${st.text}`}>
                  <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                  {g.strand} — High-Yield Quotations &amp; Literary Terms
                </h2>
                <div className="gap-4 md:columns-2 print:columns-2 print:gap-5">
                  {g.topics.map((t) => (
                    <article
                      key={t.id}
                      className={`card mb-4 break-inside-avoid border-l-4 p-4 print:mb-3 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.border}`}
                      aria-labelledby={`f-${t.id}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 id={`f-${t.id}`} className="font-extrabold leading-snug">
                          <span aria-hidden>{t.icon} </span>
                          {t.title}
                        </h3>
                        <Link href={`/topic/${t.id}?tab=learn`} className="no-print -my-2 inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 text-sm font-bold text-brand hover:bg-brand-soft" aria-label={`${t.title} lessons`}>
                          Lessons →
                        </Link>
                      </div>
                      <dl className="mt-2 divide-y divide-line">
                        {formulasOf(t).map((f, i) => (
                          <div key={`${t.id}-${i}`} className="py-2 first:pt-0 last:pb-0 print:py-1.5">
                            <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2 print:text-[8pt]">
                              <RichInline text={f.name} />
                            </dt>
                            <dd className="mt-0.5">
                              <Rich text={f.formula} className="text-[1.02rem] font-semibold text-ink print:text-[10pt]" />
                              {f.note ? <Rich text={f.note} className="mt-0.5 text-sm text-ink-2 print:text-[8.5pt]" /> : null}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </>
      )}
    </div>
  );
}
