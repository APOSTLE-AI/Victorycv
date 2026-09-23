import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">About</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        A communicator who already works like support.
      </h1>
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="max-w-2xl space-y-5 lg:col-span-7">
          {profile.about.map((p) => (
            <p key={p} className="font-display text-lg leading-[1.7] text-fg">
              {p}
            </p>
          ))}
          <p className="font-display text-lg leading-[1.7] text-fg">
            On LinkedIn I publish as{" "}
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-ink/25 underline-offset-[0.18em] hover:decoration-ink"
            >
              {profile.linkedInName}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" />
                Open LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-7">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                  Availability
                </dt>
                <dd className="mt-1 text-ink">{profile.availability}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                  Channels
                </dt>
                <dd className="mt-1 text-ink">Email, live chat, async threads</dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                  Tools
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {profile.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border bg-paper px-2.5 py-1 text-xs text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-semibold">Experience</h2>
        <div className="mt-8 space-y-8">
          {profile.experience.map((job) => (
            <article key={job.role} className="border-t border-border pt-8">
              <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                {job.dates} · {job.place}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">{job.org}</p>
              <ul className="mt-5 max-w-3xl space-y-2.5 text-[0.95rem] leading-relaxed">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-4 before:absolute before:top-[0.65em] before:left-0 before:size-1 before:rounded-full before:bg-ink/40"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-semibold">Education</h2>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {profile.education.map((ed) => (
            <li key={ed.title} className="py-6">
              <p className="font-display text-xl font-semibold text-ink">{ed.title}</p>
              <p className="mt-1 text-sm text-muted">
                {ed.org}
                {ed.dates ? ` · ${ed.dates}` : ""}
              </p>
              {ed.note ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg">{ed.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold">Also</h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-[0.95rem] leading-relaxed text-fg">
          {profile.extras.map((e) => (
            <li
              key={e}
              className="relative pl-4 before:absolute before:top-[0.65em] before:left-0 before:size-1 before:rounded-full before:bg-ink/40"
            >
              {e}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
