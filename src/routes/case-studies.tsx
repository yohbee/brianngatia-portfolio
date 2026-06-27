import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { caseStudies } from "@/lib/portfolio-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Brian Ngatia" },
      {
        name: "description",
        content:
          "Data science and AI case studies: problem framing, modeling, evaluation, deployment and business impact.",
      },
      { property: "og:title", content: "Case Studies — Brian Ngatia" },
      {
        property: "og:description",
        content: "Deep-dive data science and ML case studies, structured as engineering reports.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="// 05. CASE STUDIES"
          title="Engineering reports — problem, build, results."
          description="Three full case studies covering business problem, architecture, tech stack, features, challenges and measurable results."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-6">
        {caseStudies.map((c, i) => (
          <Link
            key={c.slug}
            to="/case-studies/$slug"
            params={{ slug: c.slug }}
            className="group block border border-border rounded-2xl bg-card/40 p-8 md:p-10 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <div className="font-mono text-[10px] text-primary uppercase tracking-widest">
                CASE_{String(i + 1).padStart(2, "0")} / {c.category}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                {c.year}
              </div>
            </div>
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {c.title}
                </h2>
                <p className="text-muted-foreground max-w-3xl mb-6">{c.summary}</p>
                <div className="grid grid-cols-3 gap-3 max-w-2xl">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="border border-border rounded-lg p-3 bg-background/40">
                      <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1">
                        {m.label}
                      </div>
                      <div className="font-mono text-base font-semibold text-primary">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="size-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </div>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}