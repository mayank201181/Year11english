import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <div className="text-5xl" aria-hidden>
        ✒️
      </div>
      <h1 className="mt-2 text-2xl font-extrabold">We couldn&apos;t find that page</h1>
      <p className="mt-2 text-ink-2">It may have moved inside the Year 11 IGCSE English Lab.</p>
      <Link href="/" className="btn btn-primary mt-6">
        Back to Year 11 English Lab
      </Link>
    </div>
  );
}
