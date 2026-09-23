import type { Block } from "@/lib/samples";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-12 mb-4 font-display text-2xl font-semibold text-ink sm:text-[1.7rem]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-10 border-l-2 border-ink pl-5 font-display text-2xl leading-snug font-medium text-ink italic sm:text-[1.7rem]"
            >
              {block.text}
            </blockquote>
          );
        }
        return (
          <p key={i} className="mb-5 font-display text-[1.125rem] leading-[1.7] text-fg">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
