import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionHeading } from "@/components/page-shell";

type Skill = { name: string; level: number };
const skills: { cat: string; items: Skill[] }[] = [
  {
    cat: "Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 70 },
    ],
  },
  {
    cat: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    cat: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "NestJS", level: 88 },
      { name: "Express", level: 90 },
      { name: "REST / GraphQL", level: 90 },
      { name: "Auth (JWT/OAuth)", level: 88 },
    ],
  },
  {
    cat: "Databases",
    items: [
      { name: "PostgreSQL", level: 92 },
      { name: "Redis", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "pgvector", level: 85 },
    ],
  },
  {
    cat: "Data Engineering",
    items: [
      { name: "Airflow", level: 92 },
      { name: "Spark / PySpark", level: 88 },
      { name: "Kafka", level: 82 },
      { name: "dbt", level: 90 },
      { name: "Snowflake", level: 88 },
      { name: "BigQuery", level: 82 },
    ],
  },
  {
    cat: "Machine Learning",
    items: [
      { name: "Scikit-Learn", level: 92 },
      { name: "XGBoost", level: 90 },
      { name: "PyTorch", level: 80 },
      { name: "LLMs / RAG", level: 92 },
      { name: "Vector DBs", level: 88 },
      { name: "TensorFlow", level: 75 },
    ],
  },
  {
    cat: "DevOps",
    items: [
      { name: "Docker", level: 92 },
      { name: "GitHub Actions", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Terraform", level: 78 },
      { name: "Linux / NGINX", level: 88 },
    ],
  },
  {
    cat: "Cloud",
    items: [
      { name: "AWS", level: 90 },
      { name: "Google Cloud", level: 85 },
      { name: "Cloudflare", level: 88 },
      { name: "Vercel", level: 92 },
      { name: "Azure", level: 70 },
    ],
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Brian Ngatia" },
      {
        name: "description",
        content:
          "About Brian Ngatia — what I build, how I work, and the technologies I use across full-stack, data and AI.",
      },
      { property: "og:title", content: "About — Brian Ngatia" },
      {
        property: "og:description",
        content:
          "End-to-end software systems combining web development, data engineering and artificial intelligence.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="// ABOUT"
          title="Engineering across the stack — from raw data to AI-powered products."
        />
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I build end-to-end software systems combining web development, data
              engineering and artificial intelligence. My work focuses on scalable
              architectures, automation, analytics and AI-powered products that solve real
              business problems.
            </p>
            <p>
              I care about the full lifecycle of software — identifying the problem,
              designing the architecture, shipping it to production, measuring its
              impact, and improving it. I think in systems, write code that holds up under
              load, and ship things that users actually rely on.
            </p>
            <p className="text-foreground">
              Interested in fintech, healthtech, real estate technology, and AI-native
              tooling.
            </p>
          </div>
          <aside className="space-y-6">
            <div className="border border-border rounded-2xl p-6 bg-card/40">
              <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-3">
                // SPECIALTIES
              </div>
              <ul className="space-y-2 text-sm">
                <li>Scalable web platforms</li>
                <li>ETL & streaming pipelines</li>
                <li>RAG & LLM applications</li>
                <li>Cloud-native deployment</li>
              </ul>
            </div>
            <div className="border border-border rounded-2xl p-6 bg-card/40">
              <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-3">
                // LOCATION
              </div>
              <div className="font-mono text-sm">Nairobi, Kenya</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">
                Remote-friendly · Worldwide
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <SectionHeading
          eyebrow="// 02. STACK"
          title="Technologies I work with"
          description="Grouped by domain — actively maintained and used in production."
        />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
          {skills.map((g) => (
            <div key={g.cat}>
              <div className="font-mono text-[11px] text-primary uppercase tracking-widest mb-4">
                / {g.cat}
              </div>
              <div className="space-y-2.5">
                {g.items.map((s) => (
                  <div key={s.name} className="group">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-mono text-xs text-foreground">{s.name}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{s.level}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}