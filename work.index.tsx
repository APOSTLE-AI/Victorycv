import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SampleCard } from "@/components/sample-card";
import { sampleFilters, samples, type Sample } from "@/lib/samples";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({ component: WorkPage });

function WorkPage() {
  const [filter, setFilter] = useState<(typeof sampleFilters)[number]>("All");
  const list = useMemo(
    () =>
      filter === "All"
        ? samples
        : samples.filter((s: Sample) => s.category === filter),
    [filter],
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
        Written communication
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        How I write when it has to be clear
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Longer samples of the same skill a CX seat uses every day: explain a hard thing, keep the
        tone human, and do not hide behind jargon.
      </p>

      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter samples"
      >
        {sampleFilters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "h-11 min-h-11 rounded-md px-4 text-sm font-medium transition-colors duration-150",
              filter === f
                ? "bg-ink text-accent-fg"
                : "border border-border bg-paper text-muted hover:border-ink/30 hover:text-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {list.map((sample) => (
          <SampleCard key={sample.slug} sample={sample} />
        ))}
      </div>
    </div>
  );
}
