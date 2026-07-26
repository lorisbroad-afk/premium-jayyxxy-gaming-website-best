import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ---------------- utils ---------------- */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------- live status ---------------- */
export function useLiveStatus() {
  const calc = () => {
    const h = new Date().getHours();
    return h >= 18 && h < 23; // "live" evenings local time
  };
  const [live, setLive] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setLive(calc()), 60000);
    return () => clearInterval(t);
  }, []);
  return live;
}

/* ---------------- reveal on scroll ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- section heading ---------------- */
export function SectionHeading({
  kicker,
  title,
  accent,
  suffix,
  desc,
  align = "center",
}: {
  kicker: string;
  title: string;
  accent?: string;
  suffix?: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={cn("relative", centered ? "text-center mx-auto" : "text-left", "max-w-3xl")}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 mb-5",
            centered ? "justify-center" : "justify-start"
          )}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-electric/80" />
          <span className="font-display text-[11px] sm:text-xs tracking-[0.45em] text-electric text-glow-soft uppercase">
            {kicker}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-electric/80" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display font-extrabold uppercase leading-[1.05] text-[clamp(2rem,5vw,3.6rem)] text-white">
          {title}{" "}
          {accent && (
            <span className="bg-gradient-to-r from-ice via-electric to-blue-500 bg-clip-text text-transparent text-glow">
              {accent}
            </span>
          )}{" "}
          {suffix}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- mascot watermark ---------------- */
export function Watermark({
  className,
  opacity = 0.1,
  spin = false,
}: {
  className?: string;
  opacity?: number;
  spin?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none select-none absolute mix-blend-screen",
        spin && "anim-spin-slowest",
        className
      )}
      style={{ opacity }}
    >
      <img
        src="/images/mascot.png"
        alt=""
        className="w-full h-full object-cover blur-[2px] saturate-[1.4] hue-rotate-[12deg]"
        draggable={false}
      />
    </div>
  );
}

/* ---------------- glow button ---------------- */
export function GlowButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = true,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "white";
  size?: "md" | "lg" | "xl";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  const sizes = {
    md: "px-7 py-3.5 text-xs sm:text-sm",
    lg: "px-9 py-4 text-sm sm:text-base",
    xl: "px-10 sm:px-14 py-5 sm:py-6 text-base sm:text-lg",
  } as const;
  const variants = {
    primary:
      "text-[#02131a] bg-[linear-gradient(115deg,#67e8f9,#22d3ee_35%,#2563eb_90%)] shadow-[0_0_35px_rgba(34,211,238,0.45),0_10px_40px_rgba(2,132,199,0.35)] hover:shadow-[0_0_60px_rgba(34,211,238,0.75),0_15px_50px_rgba(2,132,199,0.5)]",
    ghost:
      "text-white glass hover:border-electric/60 hover:bg-electric/10 shadow-[0_0_0px_rgba(34,211,238,0)] hover:shadow-[0_0_35px_rgba(34,211,238,0.28)]",
    white:
      "text-navy bg-white hover:bg-ice shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:shadow-[0_0_55px_rgba(255,255,255,0.45)]",
  } as const;
  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      {...(href && external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "btn-shine group/btn relative inline-flex items-center justify-center gap-3 rounded-xl font-display font-bold uppercase tracking-[0.18em]",
        "transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] cursor-pointer",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {icon}
      <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
    </Comp>
  );
}

/* ---------------- tilt card ---------------- */
export function Tilt({
  children,
  className,
  max = 9,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max;
    const ry = (px - 0.5) * max;
    el.style.transform = `perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    setGlarePos({ x: px * 100, y: py * 100 });
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(950px) rotateX(0deg) rotateY(0deg)";
    setActive(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        setActive(true);
        onMove(e);
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
      className={cn("relative transition-transform duration-200 ease-out will-change-transform", className)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(420px circle at ${glarePos.x}% ${glarePos.y}%, rgba(165,243,252,0.14), transparent 65%)`,
          }}
        />
      )}
    </div>
  );
}

/* ---------------- HUD corner brackets ---------------- */
export function HudCorners({ className, size = "w-5 h-5" }: { className?: string; size?: string }) {
  const base = cn("absolute border-electric/70 transition-all duration-300", size);
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 z-20", className)}>
      <span className={cn(base, "top-0 left-0 border-t-2 border-l-2 rounded-tl-md")} />
      <span className={cn(base, "top-0 right-0 border-t-2 border-r-2 rounded-tr-md")} />
      <span className={cn(base, "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-md")} />
      <span className={cn(base, "bottom-0 right-0 border-b-2 border-r-2 rounded-br-md")} />
    </div>
  );
}

/* ---------------- live pill ---------------- */
export function LivePill({ live, className }: { live: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 glass-deep font-display text-[10px] sm:text-[11px] font-bold tracking-[0.25em]",
        live ? "text-emerald-300" : "text-slate-400",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-2 w-2 rounded-full",
          live ? "bg-emerald-400 anim-blink-dot" : "bg-slate-500 anim-blink-dim"
        )}
      />
      {live ? "LIVE NOW" : "OFFLINE"}
    </div>
  );
}

/* ---------------- animated counter ---------------- */
export function Counter({
  target,
  suffix = "",
  duration = 2.2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(2, -10 * p);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- brand icons ---------------- */
export function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
  );
}
export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.332.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.332.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.946 2.418-2.157 2.418Z" />
    </svg>
  );
}
export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
export function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}
