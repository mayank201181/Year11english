import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Sitcom Episodes — Totally Literary: Grade Nine Or Bust",
  description: "Narrated animated sitcom episodes for every Year 11 IGCSE English Language & Literature topic, with Examiner Grade-9 Trap beats and pause challenges.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
