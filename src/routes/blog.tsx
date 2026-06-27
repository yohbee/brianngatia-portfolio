import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { blogPosts } from "@/lib/portfolio-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Technical Blog — Brian Ngatia" },
      {
        name: "description",
        content:
          "Long-form technical writing on engineering, data, and AI by Brian Ngatia.",
      },
      { property: "og:title", content: "Technical Blog — Brian Ngatia" },
      {
        property: "og:description",
        content: "Engineering, data and AI essays from production work.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="// 08. TECHNICAL BLOG"
          title="Writing from the trenches."
          description="Long-form notes on systems I've built, decisions I've made, and outages I've debugged. No tutorials copied from docs."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-border rounded-2xl bg-card/30 divide-y divide-border overflow-hidden">
          {blogPosts.map((p) => (
            <a
              key={p.slug}
              href="#"
              className="group grid md:grid-cols-12 gap-4 p-6 md:p-8 hover:bg-card/60 transition-colors"
            >
              <div className="md:col-span-2 font-mono text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </div>
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 border border-border rounded font-mono text-[10px] uppercase tracking-widest text-primary">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {p.read}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors mb-2">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start">
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}