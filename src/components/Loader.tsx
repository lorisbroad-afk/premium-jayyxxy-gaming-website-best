import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-abyss overflow-hidden"
      exit={{ opacity: 0, scale: 1.12, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ambient glows */}
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[120px] anim-pulse-glow" />
      <div className="conic-ring absolute left-1/2 top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 anim-spin-slower opacity-60" />
      <div className="absolute inset-0 hud-grid opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="relative z-10 h-40 w-40 sm:h-52 sm:w-52"
      >
        <div className="absolute inset-0 rounded-full bg-electric/30 blur-3xl anim-pulse-glow" />
        <img
          src="/images/mascot.png"
          alt="JAYYXXY mascot"
          className="relative h-full w-full object-cover mix-blend-screen anim-float"
          draggable={false}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="relative z-10 mt-6 font-display text-xl sm:text-2xl font-black tracking-[0.45em] text-white text-glow"
      >
        JAYYXXY
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="relative z-10 mt-2 font-display text-[10px] tracking-[0.5em] text-electric/80 uppercase"
      >
        Entering the arena
      </motion.p>

      <div className="relative z-10 mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-electric to-blue-500 shadow-[0_0_16px_rgba(34,211,238,0.8)] transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="relative z-10 mt-3 font-display text-[10px] tracking-[0.35em] text-slate-500">
        {progress}%
      </p>
    </motion.div>
  );
}
