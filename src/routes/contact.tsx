import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Calendar, Check } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { testimonials } from "@/lib/portfolio-data";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Tell me a bit more (10+ chars)").max(2000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brian Ngatia" },
      {
        name: "description",
        content:
          "Get in touch with Brian Ngatia about roles, consulting, or collaboration.",
      },
      { property: "og:title", content: "Contact — Brian Ngatia" },
      {
        property: "og:description",
        content: "Email, LinkedIn, GitHub, WhatsApp and Calendly.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "jamesngatia354@gmail.com",
    href: "mailto:jamesngatia354@gmail.com",
    primary: true,
  },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jngatia", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/yohbee", href: "https://github.com/yohbee/brianngatia-portfolio" },
  { icon: MessageCircle, label: "WhatsApp", value: "+254 ••• ••• •••", href: "#" },
  { icon: Calendar, label: "Calendly", value: "cal.com/jngatia/intro", href: "#" },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = result.data;
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    const subj = encodeURIComponent(subject || `Hello from ${name}`);
    window.location.href = `mailto:jamesngatia354@gmail.com?subject=${subj}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="// 12. CONTACT"
          title="Let's talk."
          description="Available for senior full-stack, data and AI roles, plus selective consulting and partnership work."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 border border-border rounded-2xl bg-card/40 p-8 md:p-10">
          <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4">
            // SEND A MESSAGE
          </div>
          {sent && (
            <div className="flex items-center gap-2 text-sm text-primary mb-4 font-mono">
              <Check className="size-4" /> Opening your email client…
            </div>
          )}
          <form className="space-y-5" onSubmit={onSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  Name
                </label>
                <input name="name" maxLength={100} className="w-full px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary" />
                {errors.name && <p className="mt-1 text-xs text-destructive font-mono">{errors.name}</p>}
              </div>
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  Email
                </label>
                <input name="email" type="email" maxLength={255} className="w-full px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary" />
                {errors.email && <p className="mt-1 text-xs text-destructive font-mono">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                Subject
              </label>
              <input name="subject" maxLength={200} className="w-full px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea name="message" rows={6} maxLength={2000} className="w-full px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary resize-none" />
              {errors.message && <p className="mt-1 text-xs text-destructive font-mono">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send message <ArrowRight className="size-4" />
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 border rounded-2xl transition-colors ${
                c.primary
                  ? "border-primary/30 bg-primary/5 hover:bg-primary/10"
                  : "border-border bg-card/40 hover:border-primary/40"
              }`}
            >
              <div
                className={`size-10 grid place-items-center rounded-lg shrink-0 ${
                  c.primary
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-primary"
                }`}
              >
                <c.icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  {c.label}
                </div>
                <div className="font-mono text-sm truncate">{c.value}</div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 border-t border-border pt-20">
        <SectionHeading eyebrow="// 11. TESTIMONIALS" title="What people say." />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border border-border rounded-2xl p-8 bg-card/40 relative"
            >
              <div className="absolute top-6 right-6 text-6xl font-mono text-primary/30 leading-none">
                "
              </div>
              <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="font-mono text-sm">
                <div className="text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}