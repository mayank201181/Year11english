"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITCOM_EPISODES, sitcomEpisodeFor } from "@/lib/sitcom";
import { RichInline } from "./Rich";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>("All");
  const epDone = useWatchedEpisodes();

  const strands = ["All", "Language 9270", "Literature 4ET1"];
  const visible = strand === "All" ? topics : topics.filter((t) => t.strand === strand);
  const heroPoster = SITCOM_EPISODES[0]?.poster;

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="grid items-center gap-5 md:grid-cols-12">
          <div className={heroPoster ? "space-y-3 md:col-span-7" : "space-y-3 md:col-span-12"}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">8 Narrated Sitcom Episodes</span>
              <span className="chip border-0 bg-bad-soft text-bad">🎯 Examiner Grade-9 Trap Beats</span>
              <span className="chip">⭐ {Object.keys(epDone).length}/{topics.length} Watched</span>
            </div>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl">
              Totally Literary: Grade Nine Or Bust
            </h1>
            <p className="text-sm text-ink-2 sm:text-base">
              Binge-watch narrated animated episodes covering all 8 <strong>OxfordAQA 9270</strong> &amp; <strong>Edexcel 4ET1</strong> topics — starring <strong>Vanishree, Dad, Mum, Ms Lim &amp; Quill</strong> roasting classic examiner mark-losers, complete with 3 pause challenges per episode!
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/episodes" className="btn btn-primary">
                📺 Open Binge Sitcom Player
              </Link>
              <Link href="/formulas" className="btn btn-secondary">
                🎯 Grade-9 Quotes &amp; Traps Vault
              </Link>
            </div>
          </div>
          {heroPoster ? (
            <div className="md:col-span-5">
              <Image
                src={heroPoster}
                alt="Totally Literary: Grade Nine Or Bust — Year 11 IGCSE English Sitcom"
                width={960}
                height={540}
                className="h-auto w-full rounded-2xl border border-line object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {strands.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStrand(s)}
            className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((t) => {
          const ep = sitcomEpisodeFor(t.id);
          return (
            <article key={t.id} className="card flex flex-col justify-between gap-3 p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">
                    {t.icon} Ep {String(t.num).padStart(2, "0")} · {t.strand}
                  </span>
                  <div className="flex gap-1">
                    {ep ? <span className="chip text-xs">{formatDuration(ep.durationSec)}</span> : null}
                    {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">📺 Watched ✓</span> : null}
                  </div>
                </div>
                <h2 className="mt-2 text-lg font-extrabold">{t.title}</h2>
                {ep ? (
                  <p className="mt-1 text-sm font-semibold text-brand">&ldquo;{ep.title}&rdquo;</p>
                ) : null}
                {ep?.logline ? (
                  <p className="mt-1 line-clamp-2 text-xs text-ink-2">{ep.logline}</p>
                ) : t.summary ? (
                  <p className="mt-1 line-clamp-2 text-xs text-ink-2">
                    <RichInline text={t.summary} />
                  </p>
                ) : null}
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                <Link href={`/topic/${t.id}?tab=watch`} className="btn btn-primary btn-sm">
                  📺 Watch
                </Link>
                <Link href={`/topic/${t.id}?tab=explore`} className="btn btn-secondary btn-sm">
                  🧪 Explore
                </Link>
                <Link href={`/topic/${t.id}?tab=cram`} className="btn btn-secondary btn-sm">
                  🚨 Traps
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
