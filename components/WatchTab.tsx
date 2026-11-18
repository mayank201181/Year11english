"use client";
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { sitcomEpisodeFor } from "@/lib/sitcom";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = sitcomEpisodeFor(topic.id);
  const watchedEpisodes = useWatchedEpisodes();
  const episodeDone = !!watchedEpisodes[topic.id];
  const { setBest } = useStore();
  const videos = (topic.learn?.videos ?? []).filter((v) => /^https?:\/\//i.test(v.url));

  useEffect(() => {
    if (episodeDone) setBest(`watch:${topic.id}`, 1);
  }, [episodeDone, topic.id, setBest]);

  return (
    <div className="space-y-5">
      {episode ? (
        <section className="card overflow-hidden p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-brand">
                📺 Totally Literary · Episode {episode.num} · {formatDuration(episode.durationSec)}
              </div>
              <h2 className="text-xl font-extrabold">&ldquo;{episode.title}&rdquo;</h2>
            </div>
            {episodeDone ? (
              <span className="chip border-0 bg-good-soft text-good">Watched ✓</span>
            ) : (
              <span className="chip">Includes Examiner Trap + 3 Pause Challenges</span>
            )}
          </div>
          <EpisodePlayer episode={episode} />
          {episode.logline ? <p className="mt-3 text-sm text-ink-2">{episode.logline}</p> : null}
        </section>
      ) : (
        <div className="card p-6 text-center text-ink-2">
          <p>The narrated sitcom episode for this topic is rendering.</p>
        </div>
      )}

      {videos.length > 0 ? (
        <section className="space-y-2">
          <h3 className="text-base font-extrabold">🎬 Recommended External Explainers (YouTube)</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {videos.map((v, i) => (
              <li key={i}>
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="card flex min-h-16 items-center gap-3 p-4 hover:bg-surface-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bad-soft text-bad" aria-hidden>
                    ▶
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-snug">{v.title}</span>
                    <span className="block text-sm text-ink-2">{v.channel}</span>
                  </span>
                  <span aria-hidden className="text-ink-2">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {episode ? (
            <Link href={`/episodes?ep=${episode.num}`} className="btn btn-secondary btn-sm">
              📺 All 8 sitcom episodes
            </Link>
          ) : null}
          <Link href="/watch" className="btn btn-ghost btn-sm">
            🍿 Watch hub
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise skills
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 Grade-9 Challenge →
          </button>
        </div>
      </div>
    </div>
  );
}
