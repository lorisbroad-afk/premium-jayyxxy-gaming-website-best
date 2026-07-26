import { motion } from "framer-motion";
import { Radio, Flame } from "lucide-react";
import { GlowButton, LivePill, Watermark, Reveal, useLiveStatus, DiscordIcon } from "./ui";
import { TWITCH_URL, DISCORD_URL } from "../data";

export default function CTA() {
  const live = useLiveStatus();

  return (
    <section id="live" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden py-28">
      {/* energy explosion background */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(14,60,100,0.55),rgba(6,14,28,0.4)_55%,transparent_80%)]" />
      <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/12 blur-[130px] anim-pulse-glow" />
      {/* radial spokes */}
      <div className="absolute left-1/2 top-1/2 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 anim-spin-slowest opacity-30"
        style={{ background: "repeating-conic-gradient(from 0deg, rgba(34,211,238,0.08) 0deg 2deg, transparent 2deg 14deg)" }}
      />
      <div className="conic-ring absolute left-1/2 top-1/2 h-[95vmin] w-[95vmin] -translate-x-1/2 -translate-y-1/2 anim-spin-slower opacity-60" />
      <div className="conic-ring-rev absolute left-1/2 top-1/2 h-[115vmin] w-[115vmin] -translate-x-1/2 -translate-y-1/2 anim-spin-rev opacity-40" />
      {/* speed lines */}
      <div className="absolute left-[-10%] top-[20%] h-px w-[45%] rotate-[-8deg] bg-gradient-to-r from-transparent via-electric/50 to-transparent anim-beam" />
      <div className="absolute right-[-10%] top-[35%] h-px w-[45%] rotate-[8deg] bg-gradient-to-r from-transparent via-neon/40 to-transparent anim-beam" style={{ animationDelay: "1.2s" }} />
      <div className="absolute left-[-10%] bottom-[25%] h-px w-[45%] rotate-[6deg] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent anim-beam" style={{ animationDelay: "2.4s" }} />
      <div className="absolute right-[-10%] bottom-[15%] h-px w-[45%] rotate-[-6deg] bg-gradient-to-r from-transparent via-electric/40 to-transparent anim-beam" style={{ animationDelay: "3s" }} />
      {/* giant watermark */}
      <Watermark className="left-1/2 top-1/2 h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 anim-float-soft" opacity={0.09} />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_50%,transparent_45%,rgba(2,6,12,0.85)_100%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* mascot medallion */}
        <Reveal y={20}>
          <div className="relative mx-auto h-28 w-28 sm:h-36 sm:w-36">
            <div className="absolute inset-0 rounded-full bg-electric/30 blur-2xl anim-pulse-glow" />
            <div className="conic-ring absolute -inset-3 anim-spin-slower opacity-80" />
            <img
              src="/images/mascot.png"
              alt="JAYYXXY mascot"
              className="anim-float relative h-full w-full object-cover mix-blend-screen"
              draggable={false}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-electric/80" />
            <span className="font-display text-[10px] tracking-[0.5em] text-electric uppercase sm:text-xs">
              // Final transmission //
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-electric/80" />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,7vw,5.2rem)] font-black uppercase leading-[1.02] text-white">
            Ready to join
            <br />
            <span className="bg-gradient-to-r from-ice via-electric to-blue-500 bg-clip-text text-transparent text-glow">
              the action?
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-lg">
            Come hang out during the next stream. Insane plays, horror screams, galaxy-brain card
            runs — and a squad that always has your back.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlowButton
                href={TWITCH_URL}
                size="xl"
                icon={<Radio className="h-6 w-6 animate-pulse" />}
                className="rounded-2xl"
              >
                Watch Live on Twitch
              </GlowButton>
            </motion.div>
            <GlowButton
              href={DISCORD_URL}
              variant="ghost"
              size="lg"
              icon={<DiscordIcon className="h-5 w-5 text-electric" />}
            >
              Join the Squad
            </GlowButton>
          </div>
        </Reveal>

        <Reveal delay={0.42}>
          <div className="mt-9 flex flex-col items-center gap-3">
            <LivePill live={live} />
            <p className="inline-flex items-center gap-2 text-xs tracking-wide text-slate-500">
              <Flame className="h-3.5 w-3.5 text-electric" />
              {live
                ? "The arena is open RIGHT NOW — click above before the next clutch."
                : "Usually live from 6 PM EST — follow to get pinged the second it starts."}
            </p>
          </div>
        </Reveal>
      </div>

      {/* top + bottom fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-abyss to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-abyss to-transparent" />
    </section>
  );
}
