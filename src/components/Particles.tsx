import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ------------ global particle field ------------ */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const palette = ["34,211,238", "0,229,255", "165,243,252", "96,165,250", "255,255,255"];
    const count = Math.min(110, Math.floor((w * h) / 16000));

    type P = {
      x: number; y: number; r: number; c: string; a: number;
      vx: number; vy: number; tw: number; ts: number; cross: boolean;
    };

    const parts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.9 + 0.4,
      c: palette[Math.floor(Math.random() * palette.length)],
      a: Math.random() * 0.55 + 0.15,
      vx: (Math.random() - 0.5) * 0.16,
      vy: -(Math.random() * 0.28 + 0.05),
      tw: Math.random() * Math.PI * 2,
      ts: Math.random() * 0.03 + 0.008,
      cross: Math.random() < 0.12,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.tw += p.ts;
        const twinkle = 0.55 + Math.sin(p.tw) * 0.45;

        // gentle mouse repel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          const d = Math.sqrt(d2) || 1;
          p.x += (dx / d) * 0.6;
          p.y += (dy / d) * 0.6;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
        if (p.x < -12) p.x = w + 12;
        if (p.x > w + 12) p.x = -12;

        const alpha = p.a * twinkle;
        if (p.cross) {
          ctx.strokeStyle = `rgba(${p.c},${alpha * 0.8})`;
          ctx.lineWidth = 1;
          const s = p.r * 3.2;
          ctx.beginPath();
          ctx.moveTo(p.x - s, p.y);
          ctx.lineTo(p.x + s, p.y);
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x, p.y + s);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${p.c},${alpha})`;
          ctx.shadowBlur = p.r > 1.5 ? 8 : 0;
          ctx.shadowColor = `rgba(${p.c},0.9)`;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[30] h-full w-full"
      aria-hidden
    />
  );
}

/* ------------ cursor glow follower ------------ */
export function CursorFX() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 260);
      y.set(e.clientY - 260);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[34] hidden h-[520px] w-[520px] rounded-full mix-blend-screen md:block"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(37,99,235,0.06) 35%, transparent 65%)",
      }}
    />
  );
}
