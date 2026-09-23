import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-accent-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-semibold">{profile.name}</p>
          <p className="mt-2 text-sm text-paper/70">{profile.title}</p>
          <p className="mt-1 text-sm text-paper/70">
            {profile.location} · {profile.availability}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
          <Link to="/work" className="text-paper/80 hover:text-paper">
            Samples
          </Link>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/80 hover:text-paper"
          >
            LinkedIn
          </a>
          <Link to="/about" className="text-paper/80 hover:text-paper">
            About
          </Link>
          <a href={`mailto:${profile.email}`} className="text-paper/80 hover:text-paper">
            Email
          </a>
          <Link to="/contact" className="text-paper/80 hover:text-paper">
            Contact
          </Link>
          <a href={profile.cv} download className="text-paper/80 hover:text-paper">
            CV
          </a>
          <a
            href={profile.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/80 hover:text-paper"
          >
            Fiverr
          </a>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-paper/50 sm:px-8">
          {profile.name} · {profile.title}
        </p>
      </div>
    </footer>
  );
}
