import { ArrowUpRight } from "lucide-react";
import { SOCIALS } from "../data";
import {
  SectionHeading, Watermark, Reveal, Tilt, HudCorners,
  TwitchIcon, TiktokIcon, YoutubeIcon, DiscordIcon,
} from "./ui";

const ICONS = {
  twitch: TwitchIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
  discord: DiscordIcon,
};

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-28 sm:py-36">
      {/* neon-city style background */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_100%,rgba(30,20,60,0.5),transparent_65%),radial-gradient(80%_60%_at_50%_0%,rgba(8,25,48,0.8),transparent_60%)]" />
      <Watermark className="left-1/2 top-1/2 h-[95vmin] w-[95vmin] -translate-x-1/2 -translate-y-1/2 anim-float-soft" opacity={0.07} />
      {/* city skyline suggestion */}
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]">
        <div className="flex h-full items-end justify-center gap-3">
          {[38, 62, 45, 78, 55, 90, 40, 70, 50, 82, 46, 66, 36, 74, 58, 88, 42, 64, 52, 72].map((h, i) => (
            <div
              key={i}
              className="w-8 rounded-t-sm bg-gradient-to-t from-navy to-electric/25 sm:w-12"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-[15%] top-[20%] h-52 w-52 rounded-full bg-fuchsia-600/10 blur-[100px]" />
      <div className="absolute right-[15%] top-[35%] h-52 w-52 rounded-full bg-electric/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="// Join the squad"
          title="THE"
          accent="COMMUNITY"
          desc="One arena, four outposts. Follow everywhere so you never miss a clutch, a jumpscare, or a 3 AM Discord debate about card tier lists."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((s, i) => {
            const Icon = ICONS[s.key];
            return (
              <Reveal key={s.key} delay={i * 0.09} className="h-full">
                <Tilt max={10} className="h-full">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-2 ${s.border} ${s.glow}`}
                  >
                    <HudCorners className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" size="w-3.5 h-3.5" />
                    {/* glow orb */}
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                      style={{ background: s.color }}
                    />
                    {/* icon */}
                    <div
                      className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-all duration-500 group-hover:scale-110"
                      style={{ background: `${s.color}1a`, color: s.color, boxShadow: `0 0 0px transparent` }}
                    >
                      <Icon className="h-7 w-7" />
                      <span
                        className="absolute inset-0 rounded-2xl ring-1"
                        style={{ borderColor: s.color, boxShadow: `inset 0 0 0 1px ${s.color}44` }}
                      />
                    </div>
                    <h3 className="font-display text-lg font-extrabold uppercase tracking-wider text-white">
                      {s.name}
                    </h3>
                    <p className="mt-1 truncate text-[11px] tracking-wider text-slate-500">{s.handle}</p>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400">{s.label}</p>
                    <div
                      className="mt-5 inline-flex items-center gap-2 font-display text-[10px] font-bold tracking-[0.3em] transition-all duration-300"
                      style={{ color: s.color }}
                    >
                      CONNECT
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    {/* bottom beam */}
                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                    />
                  </a>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
