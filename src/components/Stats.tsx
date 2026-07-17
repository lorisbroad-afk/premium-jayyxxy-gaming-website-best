import { Clock3, Trophy, Radio, HeartHandshake } from "lucide-react";
import { Counter, Reveal, Watermark } from "./ui";

const STATS = [
  { icon: Clock3, target: 1000, suffix: "+", label: "Hours Streamed", note: "and counting" },
  { icon: Trophy, target: 500, suffix: "+", label: "Epic Victories", note: "clutchest of clutches" },
  { icon: Radio, target: 100, suffix: "+", label: "Live Sessions", note: "arena opened" },
  { icon: HeartHandshake, target: 10, suffix: "K+", label: "Community Members", note: "the best squad" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden border-y border-electric/15 py-24 sm:py-28">
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#050a14,#081a30_50%,#050a14)]" />
      <div className="absolute inset-0 hud-grid opacity-40 [mask-image:radial-gradient(80%_90%_at_50%_50%,black,transparent)]" />
      <Watermark className="left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2" opacity={0.05} spin />
      {/* energy beams */}
      <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-electric/40 to-transparent anim-beam" />
      <div className="absolute right-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-electric/40 to-transparent anim-beam" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="group relative text-center">
                {/* icon */}
                <div className="relative mx-auto mb-6 inline-flex">
                  <div className="absolute inset-0 rounded-2xl bg-electric/20 blur-xl transition-all duration-500 group-hover:bg-electric/40" />
                  <div className="glass relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-electric/70 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    <s.icon className="h-7 w-7 text-electric" />
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_10px_rgba(0,229,255,1)] anim-blink-dot" />
                </div>
                {/* number */}
                <p className="bg-gradient-to-b from-white via-ice to-electric bg-clip-text font-display text-5xl font-black tracking-wide text-transparent text-glow sm:text-6xl">
                  <Counter target={s.target} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-slate-200">
                  {s.label}
                </p>
                <p className="mt-1 text-[11px] tracking-wider text-slate-500">{s.note}</p>
                {/* divider flourish */}
                <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-electric/70 to-transparent transition-all duration-500 group-hover:w-28" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
