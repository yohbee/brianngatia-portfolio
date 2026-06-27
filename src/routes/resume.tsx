import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { experience, certificates } from "@/lib/portfolio-data";

function downloadResume() {
  const md = `# Brian Ngatia
Full-Stack · Data · AI Engineer — Nairobi, Kenya

## Contact
- Email: jamesngatia354@gmail.com
- GitHub: github.com/yohbee
- LinkedIn: linkedin.com/in/jngatia
- Portfolio: ngatia.dev

## Experience
${experience
  .map(
    (e) =>
      `\n### ${e.role} — ${e.org}\n_${e.period}_\n${e.bullets.map((b) => `- ${b}`).join("\n")}`,
  )
  .join("\n")}

## Certifications
${certificates.map((c) => `- ${c.title} — ${c.issuer} (${c.year})`).join("\n")}

## Education
- BSc, Computer Science — University, Kenya (2017 — 2021)
`;
  const blob = new Blob([md], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "brian-ngatia-resume.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Brian Ngatia" },
      {
        name: "description",
        content:
          "Resume and experience timeline for Brian Ngatia — full-stack, data and AI engineer.",
      },
      { property: "og:title", content: "Resume — Brian Ngatia" },
      {
        property: "og:description",
        content: "Experience, education and links — one-page resume.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] text-primary uppercase tracking-[0.2em] mb-3">
              // 10. RESUME
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Brian Ngatia
            </h1>
            <p className="text-muted-foreground mt-2">
              Full-Stack · Data · AI Engineer — Nairobi, Kenya
            </p>
          </div>
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="size-4" /> Download Resume
          </button>
        </div>

        <div className="border border-border rounded-2xl bg-card/40 p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {[
              ["Email", "jamesngatia354@gmail.com"],
              ["GitHub", "github.com/yohbee"],
              ["LinkedIn", "linkedin.com/in/jngatia"],
              ["Portfolio", "ngatia.dev"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                  {k}
                </div>
                <div className="font-mono text-sm flex items-center gap-1">
                  {v} <ExternalLink className="size-3 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionHeading eyebrow="// EXPERIENCE" title="Where I've worked." />
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.role} className="relative pl-6 border-l border-border">
              <div className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h3 className="text-xl font-bold">{e.role}</h3>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {e.period}
                </span>
              </div>
              <div className="text-primary font-mono text-sm mb-4">{e.org}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary font-mono">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <SectionHeading eyebrow="// EDUCATION" title="Education." />
          <div className="border border-border rounded-2xl p-6 bg-card/40">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
              <h3 className="text-lg font-bold">BSc, Computer Science</h3>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                2017 — 2021
              </span>
            </div>
            <div className="text-primary font-mono text-sm">University · Kenya</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}