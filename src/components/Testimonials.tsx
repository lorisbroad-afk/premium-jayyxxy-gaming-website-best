import { Quote, Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { SectionHeading, Watermark, Reveal, Tilt, HudCorners } from "./ui";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28 sm:py-36">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_50%_35%,rgba(8,25,48,0.75),transparent_70%)]" />
      <Watermark className="right-[-12%] top-[10%] h-[65vmin] w-[65vmin] anim-float-delay" opacity={0.06} />
      <Watermark className="left-[-14%] bottom-[8%] h-[60vmin] w-[60vmin] anim-float-soft" opacity={0.05} />
      <div className="absolute left-1/2 top-[10%] h-40 w-40 -translate-x-1/2 rounded-full bg-electric/10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="// Transmission log"
          title="SQUAD"
          accent="REVIEW"
          desc="Straight from the chat. No paid actors — just viewers who accidentally found their second home."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <Tilt max={7} className="h-full">
                <figure className="glass-deep group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-electric/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(34,211,238,0.2)]">
                  <HudCorners className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" size="w-3.5 h-3.5" />
                  <Quote className="absolute -right-4 -top-4 h-28 w-28 rotate-12 text-electric/10 transition-all duration-500 group-hover:scale-110 group-hover:text-electric/20" />

                  {/* stars */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-electric text-electric drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
                      />
                    ))}
                  </div>

                  <blockquote className="flex-1 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                    "{t.quote}"
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4 border-t border-electric/10 pt-5">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#164e63,#22d3ee)] font-display text-sm font-black text-[#02131a] shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                      {t.name.slice(0, 1)}
                      <BadgeCheck className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-abyss text-electric" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-bold text-white">{t.name}</p>
                      <p className="truncate text-[11px] text-slate-500">{t.handle}</p>
                    </div>
                    <span className="ml-auto rounded-md bg-electric/10 px-2 py-1 font-display text-[8px] font-bold tracking-[0.2em] text-electric ring-1 ring-electric/30">
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
