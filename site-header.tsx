import { Link, useRouterState } from "@tanstack/react-router";
import { FileText, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Samples" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="group flex min-w-0 items-baseline gap-2.5">
          <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
            Chijioke Victory
          </span>
          <span className="hidden truncate text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase sm:inline">
            CX
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={profile.cv}
            download
            className="ml-1 inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:bg-surface hover:text-ink"
          >
            <FileText className="size-4" strokeWidth={1.75} />
            CV
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex size-11 items-center justify-center rounded-md text-ink transition-colors duration-150 hover:bg-surface"
            aria-label="LinkedIn profile — Angel Chijioke"
          >
            <Linkedin className="size-4" strokeWidth={1.75} />
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-paper px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-ink hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.cv}
              download
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-base font-medium text-ink hover:bg-surface"
            >
              <FileText className="size-4" strokeWidth={1.75} />
              Download CV
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-base font-medium text-ink hover:bg-surface"
            >
              <Linkedin className="size-4" strokeWidth={1.75} />
              LinkedIn
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
