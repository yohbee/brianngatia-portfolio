import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground relative">
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-60" />
      <div className="relative">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <div className="font-mono text-[11px] text-primary uppercase tracking-[0.2em] mb-4">
        {eyebrow}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl text-lg text-pretty">{description}</p>
      )}
    </div>
  );
}