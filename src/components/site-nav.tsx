import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-provider";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/certificates", label: "Certificates" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-6 bg-primary rounded-sm relative">
            <div className="absolute inset-1 bg-background rounded-[2px]" />
          </div>
          <span className="font-mono text-sm tracking-tight">
            BRIAN_NGATIA<span className="text-primary">.DEV</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground items-center">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            to="/contact"
            className="px-3 py-1 border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
          >
            Connect
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest">
            {[...links, { to: "/contact" as const, label: "Contact" }].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-muted-foreground hover:text-primary"
                activeProps={{ className: "py-2 text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}