import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileDown, Linkedin, MapPin } from "lucide-react";
import { SampleCard } from "@/components/sample-card";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { getFeatured } from "@/lib/samples";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = getFeatured();

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
              {profile.tagline}
            </p>
            <h1 className="mt-4 font-display text-[2.7rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-display text-2xl text-ink/80 sm:text-[1.7rem]">
              {profile.title}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Open to CX roles
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-4" strokeWidth={1.75} />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/work">See how I write</Link>
              </Button>
              <a
                href={profile.cv}
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-ink"
              >
                <FileDown className="size-4" />
                Download CV
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-3.5" strokeWidth={1.75} />
              {profile.location} · {profile.availability}
            </p>
          </div>
          <aside className="lg:col-span-5">
            <figure className="rounded-xl border border-border bg-surface px-6 py-8 sm:px-8">
              <blockquote className="font-display text-[1.55rem] leading-snug font-medium text-ink italic sm:text-[1.75rem]">
                “I simplify by removing unnecessary details — not the important ones.”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                How I write replies, not just articles.
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">How I work</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          The support habits I already use
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {profile.howIWork.map((item) => (
            <li key={item.title} className="rounded-xl border border-border p-6">
              <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Competencies</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Built for a CX seat
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {profile.skills.map((skill) => (
              <li key={skill.name} className="bg-paper px-6 py-5">
                <p className="font-display text-lg font-semibold text-ink">{skill.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{skill.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Written support
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Sample client replies
        </h2>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
          Tone samples from the kind of client threads I already run — intake, a revision, and a
          clear answer when something is blocked.
        </p>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {profile.replies.map((reply) => (
            <li key={reply.title} className="flex flex-col rounded-xl border border-border p-6">
              <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                {reply.channel}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{reply.title}</h3>
              <p className="mt-4 flex-1 font-display text-[1.05rem] leading-relaxed text-fg">
                {reply.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                Clarity on the page
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Longer writing samples
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Same person, longer form. This is the writing quality behind the shorter replies
                above.
              </p>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link to="/work">
                All samples
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((sample) => (
              <SampleCard key={sample.slug} sample={sample} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink text-accent-fg">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Available for full-time remote CX and support.
            </h2>
            <p className="mt-3 text-paper/70">
              Email, chat, documentation, and customer-facing writing. Open to a paid trial shift.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-paper text-ink hover:bg-paper/90">
              <a href={`mailto:${profile.email}?subject=CX%20role`}>Email me</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-paper/25 text-paper hover:border-paper/50 hover:bg-paper/10"
            >
              <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" />
                View LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
