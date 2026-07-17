import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Radio, Crosshair, Ghost, Layers, ChevronDown, Zap } from "lucide-react";
import { GlowButton, DiscordIcon, LivePill, Watermark, useLiveStatus } from "./ui";
import { TWITCH_URL, DISCORD_URL } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const live = useLiveStatus();

  /* mouse parallax */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const mascotX = useTransform(sx, (v) => v * -22);
  const mascotY = useTransform(sy, (v) => v * -14);
  const bgX = useTransform(sx, (v) => v * 34);
  const bgY = useTransform(sy, (v) => v * 22);

  const onMouse = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={onMouse}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* -------- layered arena background -------- */}
      <div className="absolute inset-0">
        {/* deep gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#0b1c33_0%,#08111f_38%,#04060c_75%)]" />
        {/* rotating arena light beams */}
        <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-8%]">
          <div className="conic-ring absolute left-1/2 top-1/2 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 anim-spin-slowest opacity-25" />
          <div className="absolute left-1/2 top-[-30%] h-[80%] w-[38%] -translate-x-1/2 rotate-[24deg] bg-[linear-gradient(to_bottom,rgba(34,211,238,0.14),transparent_70%)] blur-sm anim-beam" />
          <div className="absolute left-[16%] top-[-30%] h-[80%] w-[22%] -rotate-[18deg] bg-[linear-gradient(to_bottom,rgba(0,229,255,0.1),transparent_70%)] blur-md anim-beam" style={{ animationDelay: "1.4s" }} />
          <div className="absolute right-[14%] top-[-30%] h-[80%] w-[22%] rotate-[16deg] bg-[linear-gradient(to_bottom,rgba(37,99,235,0.16),transparent_70%)] blur-md anim-beam" style={{ animationDelay: "2.6s" }} />
        </motion.div>
        {/* HUD grid walls */}
        <div className="absolute inset-0 hud-grid opacity-60 [mask-image:radial-gradient(75%_65%_at_50%_45%,black,transparent)]" />
        {/* giant mascot watermark */}
        <Watermark className="left-1/2 top-1/2 h-[135vmin] w-[135vmin] -translate-x-1/2 -translate-y-1/2 anim-float-soft" opacity={0.1} />
        {/* color washes */}
        <div className="absolute bottom-[-20%] left-[-10%] h-[55%] w-[45%] rounded-full bg-blue-700/20 blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[50%] w-[42%] rounded-full bg-electric/10 blur-[130px]" />
        {/* perspective floor */}
        <div className="floor-grid absolute bottom-[-6%] left-1/2 h-[42%] w-[150%] -translate-x-1/2 anim-grid-pan opacity-70" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_45%,transparent_55%,rgba(2,6,12,0.9)_100%)]" />
      </div>

      {/* -------- HUD corner brackets -------- */}
      <div aria-hidden className="pointer-events-none absolute inset-4 z-20 sm:inset-6">
        <span className="absolute left-0 top-14 h-8 w-8 border-l-2 border-t-2 border-electric/50" />
        <span className="absolute right-0 top-14 h-8 w-8 border-r-2 border-t-2 border-electric/50" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-electric/50" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-electric/50" />
      </div>

      {/* side HUD text */}
      <div className="pointer-events-none absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 items-center gap-3 xl:flex">
        <span className="h-px w-16 bg-electric/40" />
        <span className="font-display text-[10px] tracking-[0.6em] text-electric/50">SECTOR // 001 — ARENA ONLINE</span>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 items-center gap-3 xl:flex">
        <span className="font-display text-[10px] tracking-[0.6em] text-electric/50">EST. 2024 — THE SQUAD AWAITS</span>
        <span className="h-px w-16 bg-electric/40" />
      </div>

      {/* -------- content -------- */}
      <div className="relative z-30 flex flex-col items-center px-4 pb-24 pt-28 text-center">
        {/* mascot centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="relative"
          style={{ x: mascotX, y: mascotY }}
        >
          {/* aura */}
          <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.4)_0%,rgba(37,99,235,0.18)_45%,transparent_70%)] blur-2xl anim-pulse-glow" />
          {/* rotating rings */}
          <div className="conic-ring absolute left-1/2 top-1/2 h-[128%] w-[128%] -translate-x-1/2 -translate-y-1/2 anim-spin-slower opacity-90" />
          <div className="conic-ring-rev absolute left-1/2 top-1/2 h-[146%] w-[146%] -translate-x-1/2 -translate-y-1/2 anim-spin-rev opacity-50" />
          <div className="absolute left-1/2 top-1/2 h-[156%] w-[156%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-electric/25 anim-spin-slowest" />
          {/* orbiting sparks */}
          <div className="absolute left-1/2 top-1/2 h-[128%] w-[128%] -translate-x-1/2 -translate-y-1/2 anim-spin-slower">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-neon shadow-[0_0_12px_rgba(0,229,255,1)]" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[146%] w-[146%] -translate-x-1/2 -translate-y-1/2 anim-spin-rev">
            <span className="absolute left-1/2 bottom-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ice shadow-[0_0_10px_rgba(165,243,252,1)]" />
          </div>
          {/* glow duplicate */}
          <img
            src="/images/mascot.png"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60 blur-2xl mix-blend-screen"
            draggable={false}
          />
          <img
            src="/images/mascot.png"
            alt="JAYYXXY mascot"
            className="anim-float relative h-[clamp(230px,38vmin,400px)] w-[clamp(230px,38vmin,400px)] object-cover mix-blend-screen saturate-[1.2]"
            draggable={false}
          />
          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
            className="glass absolute -left-6 top-6 hidden items-center gap-2 rounded-xl px-3 py-2 sm:flex anim-float-delay"
          >
            <Zap className="h-3.5 w-3.5 text-electric" />
            <span className="font-display text-[9px] font-bold tracking-[0.3em] text-ice">ENERGY 100%</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease }}
            className="glass absolute -right-8 bottom-8 hidden items-center gap-2 rounded-xl px-3 py-2 sm:flex anim-float-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon anim-blink-dot" />
            <span className="font-display text-[9px] font-bold tracking-[0.3em] text-ice">SUMMONED</span>
          </motion.div>
        </motion.div>

        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="relative mt-10"
        >
          <span aria-hidden className="text-stroke-faint absolute inset-x-0 -top-3 select-none font-display text-[clamp(3.2rem,10vw,7.5rem)] font-black tracking-[0.12em] blur-[1px]">
            JAYYXXY
          </span>
          <span className="anim-flicker relative bg-gradient-to-b from-white via-ice to-electric bg-clip-text font-display text-[clamp(3.2rem,10vw,7.5rem)] font-black tracking-[0.12em] text-transparent text-glow">
            JAYYXXY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-4 font-display text-[11px] font-semibold uppercase tracking-[0.55em] text-electric sm:text-sm"
        >
          Professional Twitch Streamer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base"
        >
          Elite FPS competitor. Horror nights. Card strategy mastermind.{" "}
          <span className="text-ice">Live every week in the arena.</span>
        </motion.p>

        {/* genre chips */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Crosshair, label: "FPS WARFARE" },
            { icon: Ghost, label: "HORROR" },
            { icon: Layers, label: "CARD STRATEGY" },
          ].map((c) => (
            <span
              key={c.label}
              className="glass group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            >
              <c.icon className="h-4 w-4 text-electric transition-transform duration-300 group-hover:scale-125" />
              <span className="font-display text-[10px] font-bold tracking-[0.3em] text-slate-200">{c.label}</span>
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.92, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <GlowButton
            href={TWITCH_URL}
            size="lg"
            icon={<Radio className="h-5 w-5 animate-pulse" />}
          >
            Watch Live
          </GlowButton>
          <GlowButton
            href={DISCORD_URL}
            size="lg"
            variant="ghost"
            icon={<DiscordIcon className="h-5 w-5 text-electric" />}
          >
            Join Discord
          </GlowButton>
        </motion.div>

        {/* live status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-7 flex flex-col items-center gap-2"
        >
          <LivePill live={live} />
          <p className="text-xs tracking-wide text-slate-500">
            {live ? (
              <span className="text-emerald-300/90">Currently streaming — hop in, the squad is waiting.</span>
            ) : (
              <span>Offline • Follow on Twitch to be notified when the arena opens</span>
            )}
          </p>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <div className="flex h-12 w-8 items-start justify-center rounded-full border border-electric/40 p-1.5 shadow-[0_0_18px_rgba(34,211,238,0.2)]">
          <motion.span
            animate={{ y: [0, 16, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="h-2 w-1 rounded-full bg-electric" />
            <ChevronDown className="mt-1 h-3.5 w-3.5 text-electric" />
          </motion.span>
        </div>
      </motion.a>

      {/* bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-abyss to-transparent" />
    </section>
  );
}
