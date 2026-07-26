import { motion } from "framer-motion";
import { Swords, Ghost, Layers, Users } from "lucide-react";
import { Reveal, SectionHeading, Watermark, Tilt, HudCorners, GlowButton, TwitchIcon } from "./ui";
import { TWITCH_URL } from "../data";

const TRAITS = [
  { icon: Swords, title: "Competitive Grind", desc: "Ranked climbs, scrims and clutch plays under pressure." },
  { icon: Ghost, title: "Horror Adventures", desc: "Late-night scares, story deep-dives and questionable life choices." },
  { icon: Layers, title: "Strategy & Cards", desc: "Galaxy-brain decks, calculated risks, lucky top-decks." },
  { icon: Users, title: "Community First", desc: "A squad where everyone is welcome. No egos, just vibes." },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_20%,rgba(37,99,235,0.12),transparent_60%),radial-gradient(80%_60%_at_90%_80%,rgba(34,211,238,0.08),transparent_60%)]" />
      <Watermark className="right-[-12%] top-1/2 h-[85vmin] w-[85vmin] -translate-y-1/2 anim-float-soft" opacity={0.08} />
      <div className="absolute left-[8%] top-[15%] h-56 w-56 rounded-full bg-electric/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-[1300px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* ——— mascot showcase card ——— */}
        <Reveal className="relative mx-auto w-full max-w-[480px]">
          {/* dashed orbit */}
          <div className="absolute left-1/2 top-1/2 h-[118%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-electric/20 anim-spin-slowest" />
          <Tilt max={7}>
            <div className="glass-deep relative overflow-hidden rounded-3xl p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <HudCorners className="opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,211,238,0.14),transparent_60%)]" />
              <div className="scanlines relative overflow-hidden rounded-2xl border border-electric/20 bg-navy/60">
                <img
                  src="/images/mascot.png"
                  alt="JAYYXXY mascot artwork"
                  className="anim-float-soft h-auto w-full object-cover mix-blend-screen saturate-[1.25]"
                  draggable={false}
                />
                {/* overlay tag */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric anim-blink-dot" />
                  <span className="font-display text-[9px] font-bold tracking-[0.3em] text-ice">THE SUMMONER</span>
                </div>
              </div>
              {/* bottom stat strip */}
              <div className="relative mt-4 grid grid-cols-3 divide-x divide-electric/15 rounded-xl border border-electric/15 bg-black/30">
                {[
                  ["FPS", "MAIN GENRE"],
                  ["LVL 99", "GRINDER"],
                  ["7D/WK", "ARENA"],
                ].map(([a, b]) => (
                  <div key={b} className="px-2 py-3 text-center">
                    <p className="font-display text-sm font-black text-electric sm:text-base">{a}</p>
                    <p className="mt-0.5 text-[9px] tracking-[0.25em] text-slate-500">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="glass anim-float absolute -right-3 -top-5 rotate-6 rounded-2xl px-4 py-3 sm:-right-8"
          >
            <p className="font-display text-[10px] font-bold tracking-[0.3em] text-electric">FPS // HORROR</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="glass anim-float-delay absolute -bottom-6 -left-3 -rotate-3 rounded-2xl px-4 py-3 sm:-left-10"
          >
            <p className="font-display text-[10px] font-bold tracking-[0.3em] text-electric">CARD STRATEGIST</p>
          </motion.div>
        </Reveal>

        {/* ——— copy ——— */}
        <div>
          <SectionHeading
            align="left"
            kicker="// About the streamer"
            title="HEY, I'M"
            accent="JAYYXXY"
            desc=""
          />
          <Reveal delay={0.18}>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              I'm passionate about{" "}
              <span className="text-ice">competitive gaming</span>,{" "}
              <span className="text-ice">horror adventures</span>,{" "}
              <span className="text-ice">strategy games</span>, and building an awesome community
              where everyone feels welcome.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Whether I'm grinding ranked matches or discovering new games, you'll always find
              exciting gameplay, entertaining moments, and plenty of laughs. Join the squad and
              let's level up together.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {TRAITS.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.08}>
                <div className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30 transition-all duration-300 group-hover:bg-electric/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-[0.12em] text-white">{t.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-9">
            <div className="flex flex-wrap items-center gap-5">
              <GlowButton href={TWITCH_URL} size="md" icon={<TwitchIcon className="h-4 w-4" />}>
                Follow the journey
              </GlowButton>
              <p className="font-display text-xs tracking-[0.3em] text-slate-500">
                — JAYYXXY<span className="text-electric">.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
