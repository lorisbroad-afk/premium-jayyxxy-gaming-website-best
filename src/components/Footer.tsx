import { ArrowUp, Heart } from "lucide-react";
import { SOCIALS, TWITCH_URL } from "../data";
import { TwitchIcon, TiktokIcon, YoutubeIcon, DiscordIcon, GlowButton } from "./ui";

const ICONS = {
  twitch: TwitchIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
  discord: DiscordIcon,
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Community", href: "#community" },
  { label: "Live", href: "#live" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-electric/15 bg-[#03050b]">
      {/* bg flourishes */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_120%,rgba(14,50,85,0.5),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="group inline-flex items-center gap-4">
              <span className="relative h-16 w-16 overflow-hidden rounded-2xl border border-electric/40 bg-navy shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]">
                <img src="/images/mascot.png" alt="JAYYXXY logo" className="h-full w-full object-cover mix-blend-screen" />
              </span>
              <span>
                <span className="block font-display text-2xl font-black tracking-[0.2em] text-white">
                  JAYY<span className="text-electric text-glow-soft">XXY</span>
                </span>
                <span className="mt-0.5 block font-display text-[9px] tracking-[0.4em] text-slate-500 uppercase">
                  Elite Twitch Streamer
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              FPS warfare, horror nights and card strategy — live every week. The arena is always
              open for new recruits.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = ICONS[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="glass flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:border-electric/60"
                    style={{ color: s.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.4em] text-electric">Navigate</h4>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-ice"
                  >
                    <span className="h-px w-3 bg-electric/50 transition-all duration-300 group-hover:w-5 group-hover:bg-electric" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* live CTA */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.4em] text-electric">The Arena</h4>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Streams every week. Highlights weekly. Chaos daily in the Discord.
            </p>
            <div className="mt-5">
              <GlowButton href={TWITCH_URL} size="md" icon={<TwitchIcon className="h-4 w-4" />}>
                Watch on Twitch
              </GlowButton>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-electric/10 pt-7 sm:flex-row">
          <p className="text-center text-[11px] tracking-wider text-slate-500">
            © {year} JAYYXXY. All rights reserved. Not affiliated with Twitch Interactive, Inc.
          </p>
          <p className="inline-flex items-center gap-1.5 text-[11px] tracking-wider text-slate-500">
            Forged with <Heart className="h-3.5 w-3.5 fill-electric text-electric" /> in the arena
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="glass group flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            <ArrowUp className="h-4 w-4 text-electric transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
