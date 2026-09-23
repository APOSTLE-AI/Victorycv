import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Page not found</h1>
      <p className="mt-4 text-muted">That page isn’t in this portfolio. Try the work index instead.</p>
      <Button asChild className="mt-8">
        <Link to="/work">View writing samples</Link>
      </Button>
    </div>
  );
}
