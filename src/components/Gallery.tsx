import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Aperture } from "lucide-react";
import { GALLERY } from "../data";
import { SectionHeading, Watermark, Reveal, HudCorners, cn } from "./ui";

const AUTOPLAY_MS = 4800;

export default function Gallery() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((d: number) => {
    setIndex(([i]) => [(i + d + GALLERY.length) % GALLERY.length, d]);
  }, []);
  const goTo = useCallback((n: number) => {
    setIndex(([i]) => [n, n > i ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, go, index]);

  const item = GALLERY[index];

  return (
    <section id="gallery" className="relative overflow-hidden py-28 sm:py-36">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_30%,rgba(10,30,55,0.75),transparent_70%)]" />
      <Watermark className="right-[-10%] top-[12%] h-[65vmin] w-[65vmin] anim-float-delay" opacity={0.07} />
      <div className="absolute left-[12%] top-[55%] h-60 w-60 rounded-full bg-electric/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="// Visual transmissions"
          title="THE"
          accent="GALLERY"
          desc="Cinematic moments from the arena — battlefields, fog-covered streets, neon tables and fantasy epics."
        />

        <Reveal delay={0.15} className="mt-14">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* ambient copy */}
            <div className="absolute -inset-4 rounded-[2rem] bg-electric/10 blur-2xl" aria-hidden />
            {/* frame */}
            <div className="glass-deep relative overflow-hidden rounded-3xl p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <div className="scanlines relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/8]">
                <AnimatePresence initial={false} custom={dir} mode="popLayout">
                  <motion.img
                    key={item.img}
                    src={item.img}
                    alt={item.title}
                    custom={dir}
                    initial={{ x: dir * 320, opacity: 0, scale: 1.06, filter: "blur(6px)" }}
                    animate={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ x: dir * -320, opacity: 0, scale: 1.06, filter: "blur(6px)" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover",
                      item.img.includes("mascot") && "mix-blend-screen saturate-[1.3]"
                    )}
                    draggable={false}
                  />
                </AnimatePresence>

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030810] via-transparent to-[#030810]/30" />
                <HudCorners className="m-4" />
                {/* top row */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="glass-deep inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                    <Aperture className="h-3.5 w-3.5 text-electric" />
                    <span className="font-display text-[9px] font-bold tracking-[0.3em] text-ice">{item.tag}</span>
                  </span>
                </div>
                <div className="absolute right-5 top-5 font-display text-xs font-bold tracking-[0.3em] text-ice/90">
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-slate-500"> / {String(GALLERY.length).padStart(2, "0")}</span>
                </div>

                {/* caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="font-display text-xl font-extrabold uppercase tracking-wide text-white text-glow-soft sm:text-3xl"
                    >
                      {item.title}
                    </motion.h3>
                  </AnimatePresence>
                  {/* progress */}
                  <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      key={index + (paused ? "-p" : "")}
                      initial={{ width: "0%" }}
                      animate={{ width: paused ? "0%" : "100%" }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-electric to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                    />
                  </div>
                </div>

                {/* nav arrows */}
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="glass-deep absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ice transition-all duration-300 hover:scale-110 hover:border-electric hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="glass-deep absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ice transition-all duration-300 hover:scale-110 hover:border-electric hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* thumbnails */}
            <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY.map((g, i) => (
                <button
                  key={g.img + i}
                  onClick={() => goTo(i)}
                  aria-label={`Show ${g.title}`}
                  className={cn(
                    "relative h-16 w-24 shrink-0 overflow-hidden rounded-xl transition-all duration-300 cursor-pointer sm:h-[72px] sm:w-28",
                    i === index
                      ? "ring-2 ring-electric shadow-[0_0_22px_rgba(34,211,238,0.5)]"
                      : "opacity-45 ring-1 ring-white/10 hover:opacity-90 hover:ring-electric/50"
                  )}
                >
                  <img src={g.img} alt="" className="h-full w-full object-cover" loading="lazy" draggable={false} />
                  {i === index && <span className="absolute inset-x-0 bottom-0 h-[3px] bg-neon shadow-[0_0_10px_rgba(0,229,255,1)]" />}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
