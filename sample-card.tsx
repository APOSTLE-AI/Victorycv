import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Sample } from "@/lib/samples";

export function SampleCard({ sample }: { sample: Sample }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: sample.slug }}
      className="group flex h-full flex-col rounded-xl border border-border bg-paper p-6 transition-colors duration-200 hover:border-ink/25 hover:bg-surface"
    >
      <div className="flex items-center justify-between gap-3 text-xs font-medium tracking-[0.14em] text-muted uppercase">
        <span>{sample.genre}</span>
        <span>{sample.wordCount.toLocaleString()} words</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink group-hover:underline group-hover:decoration-ink/20 group-hover:underline-offset-4">
        {sample.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{sample.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
        Read sample
        <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
