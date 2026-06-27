import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, FileDown, Mail, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/page-shell";
import { GithubGraph } from "@/components/github-graph";
import portrait from "@/assets/portrait.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brian Ngatia — Full-Stack, Data & AI Engineer" },
      {
        name: "description",
        content:
          "Full-stack software engineer, data engineer and AI engineer building scalable, AI-powered systems.",
      },
      { property: "og:title", content: "Brian Ngatia — Full-Stack, Data & AI Engineer" },
      {
        property: "og:description",
        content:
          "Building scalable AI-powered applications that transform businesses through automation, machine learning, and cloud technologies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };
  return (
    <PageShell>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div className="lg:col-span-7" variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-[10px] uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new roles
          </motion.div>
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tighter text-balance leading-[1.02] mb-6">
            Brian Ngatia.
            <br />
            <span className="text-muted-foreground">
              Building scalable, AI-powered systems.
            </span>
          </motion.h1>
          <motion.p variants={item} className="font-mono text-sm md:text-base text-muted-foreground mb-8">
            <span className="text-primary">{">"}</span> Full-Stack Software Engineer
            <span className="text-border mx-2">/</span>
            Data Engineer
            <span className="text-border mx-2">/</span>
            AI Engineer
          </motion.p>
          <motion.p variants={item} className="text-lg text-muted-foreground max-w-[55ch] mb-10 text-pretty leading-relaxed">
            I design and ship end-to-end systems that combine web development, data
            engineering and applied AI — from production ETL pipelines to LLM-powered
            products running on modern cloud infrastructure.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
            >
              <BriefcaseBusiness className="size-4" /> Case Studies
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <FileDown className="size-4" /> Resume
            </Link>
            <a
              href="https://github.com/yohbee/brianngatia-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Mail className="size-4" /> Contact
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
  className="lg:col-span-5 relative"
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <div className="relative flex justify-center items-center">

    {/* Glow */}
    <div className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

    {/* Profile Image */}
    <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
      <img
        src={portrait}
        alt="Brian Ngatia"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>

    {/* Status Badge */}
    <div className="absolute bottom-6 px-5 py-2 rounded-full bg-background/90 backdrop-blur border border-border shadow-lg flex items-center gap-3 font-mono text-xs">
      <span className="text-primary">●</span>
      <span>AVAILABLE FOR WORK</span>
    </div>

  </div>
</motion.div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-y md:divide-y-0 divide-border rounded-2xl overflow-hidden bg-card/30">
          {[
            ["YEARS_BUILDING", "1+"],
            ["PROJECTS_SHIPPED", "5+"],
            ["PIPELINES_DEPLOYED", "4"],
            ["UPTIME_AVG", "99.9%"],
          ].map(([k, v]) => (
            <div key={k} className="p-6 md:p-8">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                {k}
              </div>
              <div className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-foreground">
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

  {/* WHAT I DO */}
<section className="max-w-6xl mx-auto px-6 mb-28">
  <div className="flex items-baseline justify-between mb-12">
    <h2 className="text-3xl font-bold tracking-tight">What I build</h2>
    <div className="h-px flex-1 mx-8 bg-border" />
    <span className="font-mono text-xs text-muted-foreground">DOMAINS/03</span>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        n: "01",
        t: "Full-Stack Engineering",
        d: "Production web platforms with React, Next.js, NestJS and PostgreSQL — auth, payments, dashboards, and scale.",
      },
      {
        n: "02",
        t: "Data Engineering",
        d: "Reliable ETL & streaming pipelines on Airflow, Spark and Kafka. Warehouses on Snowflake and BigQuery.",
      },
      {
        n: "03",
        t: "AI & ML Engineering",
        d: "RAG systems, fine-tuned LLMs, recommendation engines and computer vision — deployed and monitored.",
      },
    ].map((c) => (
      <motion.div
        key={c.n}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="group p-8 border border-border rounded-2xl bg-card/40 hover:border-primary/40 hover:bg-card/70 transition-colors"
      >
        <div className="font-mono text-xs text-primary mb-6">// {c.n}</div>
        <h3 className="text-xl font-bold mb-3">{c.t}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* GITHUB GRAPH */}
      <section className="max-w-6xl mx-auto px-6 mb-28">
        <GithubGraph />
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border border-primary/20 bg-primary/5 rounded-3xl p-12 md:p-20 text-center">
          <div className="font-mono text-[11px] text-primary uppercase tracking-[0.2em] mb-4">
            // LET'S BUILD
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Got a hard problem?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Open to Full-stack, data and AI engineering roles, plus selective
            consulting engagements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-mono hover:text-primary transition-colors"
          >
            jamesngatia354@gmail.com <ArrowRight className="size-6 text-primary" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
