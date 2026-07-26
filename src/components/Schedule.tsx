import { Crosshair, Layers, Ghost, Users, Trophy, Vote, Clock } from "lucide-react";
import { SCHEDULE } from "../data";
import { SectionHeading, Watermark, Reveal, HudCorners, cn } from "./ui";

const ICONS = {
  crosshair: Crosshair,
  cards: Layers,
  ghost: Ghost,
  users: Users,
  trophy: Trophy,
  vote: Vote,
};

export default function Schedule() {
  const today = new Date().getDay();
  const isToday = (d: number) => (d === 0 ? today === 0 || today === 6 : today === d);

  return (
    <section id="schedule" className="relative overflow-hidden py-28 sm:py-36">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(8,28,51,0.8),transparent_65%)]" />
      <Watermark className="left-1/2 top-[6%] h-[75vmin] w-[75vmin] -translate-x-1/2 anim-float-soft" opacity={0.06} />
      <div className="absolute right-[10%] top-[30%] h-64 w-64 rounded-full bg-blue-600/15 blur-[110px]" />
      <div className="absolute left-[6%] bottom-[16%] h-52 w-52 rounded-full bg-electric/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="// Mission timetable"
          title="STREAMING"
          accent="SCHEDULE"
          desc="The arena opens every week. Lock in the times, grab your snacks, and pull up. All times EST — follow for go-live alerts."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SCHEDULE.map((s, i) => {
            const Icon = ICONS[s.icon];
            const active = isToday(s.dayIndex);
            return (
              <Reveal key={s.day} delay={i * 0.07} className="h-full">
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2",
                    active
                      ? "glass border-electric/70 shadow-[0_0_45px_rgba(34,211,238,0.3)]"
                      : "glass hover:border-electric/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                  )}
                >
                  {active && (
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_18px_rgba(0,229,255,0.9)]" />
                  )}
                  <HudCorners className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" size="w-3.5 h-3.5" />

                  {/* watermark icon */}
                  <Icon className="absolute -bottom-4 -right-4 h-24 w-24 text-electric/10 transition-all duration-500 group-hover:scale-110 group-hover:text-electric/20" />

                  {active && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-electric/15 px-2.5 py-1 font-display text-[8px] font-bold tracking-[0.25em] text-ice ring-1 ring-electric/50">
                      <span className="h-1 w-1 rounded-full bg-neon anim-blink-dot" />
                      TODAY
                    </span>
                  )}

                  <p
                    className={cn(
                      "font-display text-4xl font-black tracking-wide transition-colors duration-300",
                      active ? "text-electric text-glow" : "text-stroke group-hover:text-electric group-hover:[-webkit-text-stroke:0px]"
                    )}
                  >
                    {s.day}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-slate-500">{s.full}</p>

                  <div className="mt-6">
                    <h3 className="font-display text-base font-bold uppercase leading-snug text-white">
                      {s.game}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">{s.tag}</p>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 ring-1 ring-electric/25">
                    <Clock className="h-3 w-3 text-electric" />
                    <span className="font-display text-[9px] font-bold tracking-[0.2em] text-ice">{s.time}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="glass mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-full px-6 py-4 text-center">
            <span className="h-2 w-2 shrink-0 rounded-full bg-neon anim-blink-dot" />
            <p className="text-xs text-slate-400 sm:text-sm">
              Times may shift — <span className="text-ice">follow on Twitch</span> and join Discord
              for instant go-live notifications.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
