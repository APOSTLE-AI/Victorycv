import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Copy, FileDown, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Contact</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Hiring for CX or support?
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        Full-time remote. Email, chat, documentation, and customer-facing writing. Open to a paid
        trial shift or a sample ticket.
      </p>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        <li>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-[7.5rem] items-start justify-between gap-4 rounded-xl border border-border bg-ink p-6 text-accent-fg transition-colors duration-150 hover:bg-ink/92"
          >
            <div>
              <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-paper/60 uppercase">
                <Linkedin className="size-3.5" />
                LinkedIn
              </p>
              <p className="mt-3 font-display text-2xl font-semibold">{profile.linkedInName}</p>
              <p className="mt-1 text-sm text-paper/70">linkedin.com/in/angel-chijioke-368409329</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profile.email}?subject=CX%20%2F%20support%20role`}
            className="group flex h-full min-h-[7.5rem] items-start justify-between gap-4 rounded-xl border border-border p-6 transition-colors duration-150 hover:bg-surface"
          >
            <div>
              <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-muted uppercase">
                <Mail className="size-3.5" />
                Email
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">{profile.email}</p>
              <p className="mt-1 text-sm text-muted">Opens your mail app</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-ink transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
        <li>
          <a
            href={profile.phoneHref}
            className="group flex h-full min-h-[7.5rem] items-start justify-between gap-4 rounded-xl border border-border p-6 transition-colors duration-150 hover:bg-surface"
          >
            <div>
              <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-muted uppercase">
                <Phone className="size-3.5" />
                Phone
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                {profile.phoneDisplay}
              </p>
              <p className="mt-1 text-sm text-muted">Nigeria · WhatsApp-ready</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-ink" />
          </a>
        </li>
        <li>
          <a
            href={profile.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-[7.5rem] items-start justify-between gap-4 rounded-xl border border-border p-6 transition-colors duration-150 hover:bg-surface"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">Fiverr</p>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                {profile.fiverrHandle}
              </p>
              <p className="mt-1 text-sm text-muted">Client work already live</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-ink" />
          </a>
        </li>
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild variant="secondary">
          <a href={profile.cv} download>
            <FileDown className="size-4" />
            Download CV
          </a>
        </Button>
        <Button type="button" variant="secondary" onClick={copyEmail}>
          <Copy className="size-4" />
          {copied ? "Email copied" : "Copy email"}
        </Button>
        <p className="flex items-center gap-2 text-sm text-muted">
          <MapPin className="size-3.5" />
          {profile.location}
        </p>
      </div>
    </div>
  );
}
