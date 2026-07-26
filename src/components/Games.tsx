import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Crosshair, Ghost, Layers, Mountain, LayoutGrid } from "lucide-react";
import { GAMES, GameCategory } from "../data";
import { SectionHeading, Watermark, Tilt, HudCorners, Reveal, cn } from "./ui";

const FILTERS: { key: "ALL" | GameCategory; label: string; icon: any }[] = [
  { key: "ALL", label: "All Games", icon: LayoutGrid },
  { key: "FPS", label: "FPS", icon: Crosshair },
  { key: "CARDS", label: "Cards", icon: Layers },
  { key: "HORROR", label: "Horror", icon: Ghost },
  { key: "FANTASY", label: "Fantasy", icon: Mountain },
];

export default function Games() {
  const [filter, setFilter] = useState<"ALL" | GameCategory>("ALL");
  const games = GAMES.filter((g) => filter === "ALL" || g.cat === filter);

  return (
    <section id="games" className="relative overflow-hidden py-28 sm:py-36">
      {/* arena background */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(8,28,51,0.85),transparent_65%)]" />
      <div className="absolute inset-0 hud-grid opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <Watermark className="left-[-14%] top-[8%] h-[70vmin] w-[70vmin] anim-float-soft" opacity={0.07} />
      <Watermark className="right-[-16%] bottom-[4%] h-[80vmin] w-[80vmin] anim-float-delay" opacity={0.06} />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="// Battle station"
          title="FEATURED"
          accent="GAMES"
          desc="Ten battlegrounds. One streamer. From cracked-out FPS lobbies to brain-melting card runs — this is what goes down in the arena."
        />

        {/* filter tabs */}
        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer",
                    active
                      ? "text-[#02131a]"
                      : "glass text-slate-300 hover:border-electric/50 hover:text-electric"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="games-filter"
                      className="absolute inset-0 rounded-full bg-[linear-gradient(115deg,#67e8f9,#22d3ee_40%,#2563eb)] shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <f.icon className="relative z-10 h-3.5 w-3.5" />
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* games grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px]">
          <AnimatePresence mode="popLayout">
            {games.map((g, i) => (
              <motion.div
                layout
                key={g.title}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={cn(g.featured && "sm:col-span-2 sm:row-span-2")}
              >
                <Tilt max={6} className="group relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl sm:min-h-0">
                  {/* artwork */}
                  <img
                    src={g.img}
                    alt={`${g.title} artwork`}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110",
                      g.grade
                    )}
                    loading="lazy"
                    draggable={false}
                  />
                  {/* overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030810] via-[#030810]/45 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
                  <div className="absolute inset-0 bg-electric/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-electric/20" />
                  {/* neon frame */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-electric/25 transition-all duration-500 group-hover:ring-2 group-hover:ring-electric/80 group-hover:shadow-[inset_0_0_40px_rgba(34,211,238,0.15),0_0_45px_rgba(34,211,238,0.35)]" />
                  <HudCorners className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" size="w-4 h-4" />
                  {/* shine sweep */}
                  <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                  {/* top meta */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                    <span className="glass-deep rounded-md px-2.5 py-1 font-display text-[9px] font-bold tracking-[0.25em] text-electric">
                      {g.tag}
                    </span>
                  </div>
                  <span className="text-stroke-faint absolute right-4 top-3 font-display text-3xl font-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* hover play */}
                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-electric/60 bg-black/40 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,0.55)]">
                      <Play className="h-6 w-6 fill-ice text-ice" />
                    </span>
                  </div>

                  {/* bottom copy */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <div className="h-px w-8 bg-electric shadow-[0_0_8px_rgba(34,211,238,0.9)] transition-all duration-500 group-hover:w-20" />
                    <h3 className="mt-2.5 font-display text-lg font-extrabold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-ice lg:text-xl">
                      {g.title}
                    </h3>
                    <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-slate-300/90 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 sm:max-h-20 sm:opacity-0">
                      {g.desc}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
