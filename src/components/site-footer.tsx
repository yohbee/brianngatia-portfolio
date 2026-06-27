import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Portfolio",
    links: [
      { to: "/about", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Credentials",
    links: [
      { to: "/resume", label: "Resume" },
      { to: "/certificates", label: "Certificates" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-6 bg-primary rounded-sm relative">
                <div className="absolute inset-1 bg-background rounded-[2px]" />
              </div>
              <span className="font-mono text-sm tracking-tight">
                BRIAN_NGATIA<span className="text-primary">.DEV</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-6 leading-relaxed">
              Full-stack, data and AI engineer. Available for senior roles and selective
              consulting engagements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors"
            >
              jamesngatia354@gmail.com <ArrowUpRight className="size-4" />
            </Link>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
                // {c.title}
              </div>
              <ul className="space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1 flex md:flex-col gap-2">
            <a href="https://github.com/yohbee/brianngatia-portfolio" target="_blank" rel="noopener noreferrer" className="size-9 grid place-items-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="size-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="size-9 grid place-items-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
            <Link to="/contact" className="size-9 grid place-items-center border border-border rounded-lg hover:border-primary hover:text-primary transition-colors" aria-label="Email">
              <Mail className="size-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>© {new Date().getFullYear()} Brian Ngatia — All systems operational.</div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
}