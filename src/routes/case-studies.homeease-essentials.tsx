import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/case-studies/homeease-essentials")({
  component: HomeEaseCaseStudy,
});

function HomeEaseCaseStudy() {
  return (
    <PageShell>
      <main className="max-w-5xl mx-auto px-6 py-20">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10"
        >
          <ArrowLeft className="size-4" />
          Back to case studies
        </Link>

        <section className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Full-Stack E-commerce Platform
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            HomeEase Essentials
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
            A modern online catalogue and e-commerce platform built for HomeEase
            Essentials to help customers browse products, view categories, and
            place orders directly through WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://your-homeease-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground"
            >
              Live Demo <ExternalLink className="size-4" />
            </a>

            <a
              href="https://github.com/yohbee/homeease-essentials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary hover:text-primary"
            >
              GitHub <Github className="size-4" />
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            ["Platform Type", "E-commerce Catalogue"],
            ["Order Channel", "WhatsApp"],
            ["Status", "Live / In Development"],
          ].map(([label, value]) => (
            <div key={label} className="border border-border rounded-2xl p-6 bg-card/40">
              <p className="font-mono text-xs text-muted-foreground uppercase mb-2">
                {label}
              </p>
              <p className="text-xl font-semibold">{value}</p>
            </div>
          ))}
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Business Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Small businesses often rely only on WhatsApp groups and social
              media posts to sell products. This makes it difficult for customers
              to browse items professionally, compare categories, and understand
              what is available before ordering.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              HomeEase Essentials solves this by providing a clean online
              catalogue where customers can browse home products, view product
              details, and start an order through WhatsApp with one click.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Core Features</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
              <li>• Product catalogue</li>
              <li>• Product categories</li>
              <li>• Mobile-first layout</li>
              <li>• WhatsApp order button</li>
              <li>• Product detail pages</li>
              <li>• Business contact section</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Firebase", "Cloudflare", "WhatsApp"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-border text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
            <div className="border border-border rounded-2xl p-6 bg-card/40 font-mono text-sm text-muted-foreground">
              Customer → React Frontend → Product Catalogue → WhatsApp Order Flow
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
            <p className="text-muted-foreground leading-relaxed">
              This project strengthened my skills in building business-focused
              web applications, designing user-friendly product catalogues,
              improving mobile responsiveness, and creating simple order flows
              that connect directly to customer communication channels.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}