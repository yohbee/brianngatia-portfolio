import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Brian Ngatia" },
      {
        name: "description",
        content:
          "Featured engineering projects across full-stack, data engineering and AI by Brian Ngatia.",
      },
      { property: "og:title", content: "Projects — Brian Ngatia" },
      {
        property: "og:description",
        content: "Production systems shipped across full-stack, data and AI.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="// 04. PROJECTS"
          title="Featured projects."
          description="Selected systems I've designed and shipped end-to-end. Each one solves a real business problem, with architecture, metrics and code."
        />
        <LayoutGroup>
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest rounded-full transition-colors ${
                  active === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-6">
        <AnimatePresence mode="popLayout">
        {filtered.map((p, i) => (
          <motion.article
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group border border-border rounded-2xl bg-card/40 hover:border-primary/40 transition-colors overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-br from-card/60 to-background/60 relative">
                <div className="absolute top-6 right-6 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}/{String(filtered.length).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-3">
                  // {p.category}
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">{p.summary}</p>
                <div className="flex gap-3">
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    Case study <ArrowUpRight className="size-3.5" />
                  </Link>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target={p.demo.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="size-3.5" /> Open
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="size-3.5" /> Code
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-8 p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                      / Business problem
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.problem}</p>
                    <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                      / Solution
                    </div>
                    <ul className="text-sm text-foreground space-y-1.5">
                      {p.solution.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="text-primary font-mono">→</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                      / Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-1 border border-border rounded font-mono text-[10px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                      / Metrics
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="border border-border rounded-lg p-3 bg-background/40"
                        >
                          <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1">
                            {m.label}
                          </div>
                          <div className="font-mono text-base font-semibold text-primary">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
        </AnimatePresence>

        <div className="pt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            → Read the deep-dive case studies
          </Link>
        </div>
      </section>
    </PageShell>
  );
}