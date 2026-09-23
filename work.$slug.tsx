import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { Button } from "@/components/ui/button";
import { getNeighbors, getSample } from "@/lib/samples";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const sample = getSample(params.slug);
    if (!sample) throw notFound();
    return { sample, neighbors: getNeighbors(params.slug) };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { sample, neighbors } = Route.useLoaderData();

  return (
    <article className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Button asChild variant="link" className="text-muted">
          <Link to="/work">
            <ArrowLeft className="size-4" />
            All samples
          </Link>
        </Button>
        <p className="mt-8 text-xs font-medium tracking-[0.16em] text-muted uppercase">
          {sample.genre} · {sample.wordCount.toLocaleString()} words · {sample.year}
        </p>
        <h1 className="mt-4 font-display text-[2.15rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-5xl">
          {sample.title}
        </h1>
        <p className="mt-5 font-display text-xl italic text-muted">{sample.dek}</p>
        <hr className="mt-10 mb-10 border-border" />
      </div>
      <ArticleBody blocks={sample.body} />
      <nav className="mx-auto mt-16 flex max-w-2xl flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
        {neighbors.prev ? (
          <Link
            to="/work/$slug"
            params={{ slug: neighbors.prev.slug }}
            className="group flex min-h-11 max-w-xs items-start gap-2 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft className="mt-0.5 size-4 shrink-0" />
            <span>
              <span className="block text-xs tracking-wider uppercase">Previous</span>
              <span className="mt-0.5 block font-medium text-ink group-hover:underline">
                {neighbors.prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {neighbors.next ? (
          <Link
            to="/work/$slug"
            params={{ slug: neighbors.next.slug }}
            className="group flex min-h-11 max-w-xs items-start justify-end gap-2 text-right text-sm text-muted hover:text-ink sm:ml-auto"
          >
            <span>
              <span className="block text-xs tracking-wider uppercase">Next</span>
              <span className="mt-0.5 block font-medium text-ink group-hover:underline">
                {neighbors.next.title}
              </span>
            </span>
            <ArrowRight className="mt-0.5 size-4 shrink-0" />
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
