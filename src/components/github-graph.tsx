import { useMemo } from "react";

// Deterministic pseudo-random contribution graph (no API call).
// Pattern emulates GitHub's 53x7 grid for the past year.
function seeded(n: number) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

export function GithubGraph({ username = "jngatia" }: { username?: string }) {
  const cells = useMemo(() => {
    const out: { level: number; date: string }[] = [];
    const start = new Date();
    start.setDate(start.getDate() - 53 * 7);
    for (let i = 0; i < 53 * 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const r = seeded(i * 13.37);
      // weekend dip, occasional spikes
      const weekend = d.getDay() === 0 || d.getDay() === 6;
      const base = weekend ? r * 0.6 : r;
      const level = base < 0.35 ? 0 : base < 0.6 ? 1 : base < 0.8 ? 2 : base < 0.93 ? 3 : 4;
      out.push({ level, date: d.toISOString().slice(0, 10) });
    }
    return out;
  }, []);

  const total = cells.reduce((acc, c) => acc + c.level * 2, 0);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="border border-border rounded-2xl bg-card/40 p-6">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
            // GITHUB ACTIVITY
          </div>
          <div className="font-mono text-sm text-foreground">
            {total.toLocaleString()} contributions in the last year
          </div>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary"
        >
          @{username} →
        </a>
      </div>
      <div className="overflow-x-auto">
        <div
          className="grid grid-flow-col gap-[3px]"
          style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
        >
          {cells.map((c, i) => (
            <div
              key={i}
              title={`${c.date}: ${c.level * 2} contributions`}
              className="size-[10px] rounded-[2px]"
              style={{
                backgroundColor:
                  c.level === 0
                    ? "color-mix(in oklab, var(--color-muted) 80%, transparent)"
                    : `color-mix(in oklab, var(--color-primary) ${25 + c.level * 18}%, transparent)`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
        <div className="flex gap-4">
          {months.filter((_, i) => i % 2 === 0).map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className="size-[10px] rounded-[2px]"
              style={{
                backgroundColor:
                  l === 0
                    ? "color-mix(in oklab, var(--color-muted) 80%, transparent)"
                    : `color-mix(in oklab, var(--color-primary) ${25 + l * 18}%, transparent)`,
              }}
            />
          ))}
          More
        </div>
      </div>
    </div>
  );
}