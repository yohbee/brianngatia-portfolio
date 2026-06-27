import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { certificates } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Brian Ngatia" },
      {
        name: "description",
        content: "Professional certifications across cloud, data and AI.",
      },
      { property: "og:title", content: "Certificates — Brian Ngatia" },
      {
        property: "og:description",
        content: "Cloud, data engineering and ML certifications.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="// 11. CERTIFICATES"
          title="Verified credentials."
          description="Professional certifications across cloud, data and AI — alongside the production work that earned the skill."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="group flex gap-5 p-6 border border-border rounded-2xl bg-card/40 hover:border-primary/40 transition-colors"
            >
              <div className="size-12 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Award className="size-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-bold leading-tight">{c.title}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest shrink-0">
                    {c.year}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-mono">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}