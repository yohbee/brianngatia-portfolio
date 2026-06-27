import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { projects, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Case Study | Brian Ngatia` : "Case Study";
    const desc = p?.summary ?? "Engineering case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "/og-cover.jpg" },
      ],
    };
  },
  component: CaseStudyDetail,
  notFoundComponent: () => (
    <PageShell>
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Case study not found</h1>
        <Link to="/case-studies" className="text-primary hover:underline">
          ← Back to all case studies
        </Link>
      </div>
    </PageShell>
  ),
});

function CaseStudyDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  return (
    <PageShell>
      <article className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="size-3.5" /> Back to case studies
        </Link>

        <div className="flex flex-wrap items-baseline gap-4 mb-6">
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
            {p.category}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            {p.year}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance mb-6 leading-[1.05]">
          {p.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">{p.summary}</p>

        <div className="flex flex-wrap gap-3 mb-16">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:border-primary hover:text-primary text-sm font-mono uppercase tracking-widest"
            >
              <Github className="size-4" /> Source
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target={p.demo.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-mono uppercase tracking-widest hover:opacity-90"
            >
              <ExternalLink className="size-4" /> Live demo
            </a>
          )}
        </div>

        {/* Results banner */}
        {p.results && (
          <section className="grid md:grid-cols-3 gap-4 mb-16">
            {p.metrics.map((m) => (
              <div
                key={m.label}
                className="border border-border rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-card/40"
              >
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  {m.label}
                </div>
                <div className="text-4xl font-mono font-bold text-primary">{m.value}</div>
              </div>
            ))}
          </section>
        )}

        <Section label="01" title="Business problem">
          <p className="text-lg leading-relaxed text-muted-foreground">{p.problem}</p>
        </Section>

        {p.architecture && (
          <Section label="02" title="Architecture">
            <div className="border border-border rounded-2xl bg-card/40 p-8 mb-4">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {p.architecture.nodes.map((n, i) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className="px-4 py-2 border border-primary/30 bg-primary/5 rounded-lg font-mono text-xs text-foreground">
                      {n}
                    </div>
                    {i < p.architecture!.nodes.length - 1 && (
                      <span className="text-primary font-mono">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                {p.architecture.flow}
              </p>
            </div>
          </Section>
        )}

        <Section label="03" title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 border border-border rounded-md font-mono text-xs bg-card/40"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* Visual mock screenshot — gradient placeholder, no image generation cost */}
        <Section label="04" title="Screenshots">
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="aspect-video rounded-2xl border border-border overflow-hidden relative bg-gradient-to-br from-primary/15 via-card to-background"
              >
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  // {p.slug.toUpperCase()}_SCREEN_0{n}
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="size-2 rounded-full bg-destructive/50" />
                  <span className="size-2 rounded-full bg-primary/50" />
                  <span className="size-2 rounded-full bg-muted-foreground/50" />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {p.features && (
          <Section label="05" title="Features">
            <ul className="grid md:grid-cols-2 gap-3">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 p-4 border border-border rounded-lg bg-card/40"
                >
                  <span className="text-primary font-mono shrink-0">→</span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {p.challenges && (
          <Section label="06" title="Challenges">
            <div className="space-y-4">
              {p.challenges.map((c, i) => (
                <div
                  key={c.title}
                  className="border border-border rounded-2xl p-6 bg-card/40"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                      0{i + 1}
                    </span>
                    <h3 className="font-bold">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {p.results && (
          <Section label="07" title="Results">
            <ul className="space-y-2">
              {p.results.map((r) => (
                <li key={r} className="flex gap-3 text-foreground">
                  <span className="text-primary font-mono shrink-0">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <div className="mt-20 border-t border-border pt-10 flex flex-wrap justify-between gap-4">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-primary"
          >
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:underline"
          >
            Talk about a similar project <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </article>
    </PageShell>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
          // {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}