import { Play, Eye, CalendarDays } from "lucide-react";
import { CLIPS, TWITCH_URL } from "../data";
import { SectionHeading, Watermark, Reveal, HudCorners, GlowButton, TwitchIcon } from "./ui";

export default function Clips() {
  return (
    <section id="clips" className="relative overflow-hidden py-28 sm:py-36">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(85%_60%_at_50%_70%,rgba(8,25,48,0.8),transparent_70%)]" />
      <Watermark className="left-[-12%] bottom-[5%] h-[70vmin] w-[70vmin] anim-float-soft" opacity={0.06} />
      <div className="absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-blue-600/15 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="// Highlight reels"
          title="HOTTEST"
          accent="CLIPS"
          desc="The moments chat will never shut up about. Fresh highlights, funny moments, best plays and epic wins — every single week."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CLIPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.09} className="h-full">
              <a
                href={TWITCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group block h-full overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-2 hover:border-electric/70 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(34,211,238,0.25)]"
              >
                {/* thumb */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  {/* tags */}
                  <span className="absolute left-3 top-3 rounded-md bg-electric/90 px-2 py-0.5 font-display text-[9px] font-black tracking-[0.25em] text-[#02131a] shadow-[0_0_15px_rgba(34,211,238,0.7)]">
                    CLIP
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 font-display text-[10px] font-bold tracking-widest text-ice backdrop-blur-sm">
                    {c.length}
                  </span>
                  {/* play */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/45 backdrop-blur-md transition-all duration-500 group-hover:border-electric group-hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]">
                      <Play className="ml-0.5 h-5 w-5 fill-white text-white transition-colors group-hover:fill-ice group-hover:text-ice" />
                    </span>
                  </div>
                  {/* bottom progress on hover */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-electric to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.9)] transition-all duration-700 group-hover:w-full" />
                </div>

                {/* meta */}
                <div className="relative p-5">
                  <HudCorners className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" size="w-3 h-3" />
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-ice">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{c.desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-electric/10 pt-3 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-electric" />
                      {c.views} views
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-electric/80" />
                      {c.date}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 text-center">
          <GlowButton href={TWITCH_URL} variant="ghost" size="md" icon={<TwitchIcon className="h-4 w-4 text-electric" />}>
            Watch all clips on Twitch
          </GlowButton>
        </Reveal>
      </div>
    </section>
  );
}
