import { Diamond } from "lucide-react";

const ITEMS = [
  "FPS WARFARE",
  "HORROR NIGHTS",
  "CARD STRATEGY",
  "INSANE CLUTCHES",
  "COMMUNITY FIRST",
  "RANKED GRIND",
  "EPIC WINS",
  "ZERO CHILL",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-pause relative z-10 overflow-hidden border-y border-electric/15 bg-[linear-gradient(90deg,rgba(8,17,31,0.9),rgba(10,25,45,0.7),rgba(8,17,31,0.9))] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-abyss to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-abyss to-transparent" />
      <div className="anim-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span
              className={
                i % 3 === 1
                  ? "text-stroke font-display text-2xl font-black tracking-[0.2em] sm:text-3xl"
                  : "font-display text-2xl font-black tracking-[0.2em] text-white/90 sm:text-3xl"
              }
            >
              {item}
            </span>
            <Diamond className="h-4 w-4 fill-electric text-electric drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
