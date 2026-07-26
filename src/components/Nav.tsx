import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { GlowButton, LivePill, cn, useLiveStatus } from "./ui";
import { TWITCH_URL } from "../data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Community", href: "#community" },
  { label: "Live", href: "#live" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const live = useLiveStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-abyss/80 backdrop-blur-xl border-b border-electric/15 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-xl border border-electric/40 bg-navy shadow-[0_0_18px_rgba(34,211,238,0.35)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.65)]">
            <img src="/images/mascot.png" alt="JAYYXXY logo" className="h-full w-full object-cover mix-blend-screen" />
          </span>
          <span className="font-display text-lg font-black tracking-[0.22em] text-white">
            JAYY<span className="text-electric text-glow-soft">XXY</span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300 transition-colors duration-300 hover:text-electric"
            >
              {l.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric to-transparent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* right cluster */}
        <div className="flex items-center gap-3">
          <LivePill live={live} className="hidden sm:inline-flex" />
          <GlowButton
            href={TWITCH_URL}
            size="md"
            className="hidden !px-5 !py-2.5 md:inline-flex"
            icon={<Radio className="h-4 w-4 animate-pulse" />}
          >
            Watch Live
          </GlowButton>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:border-electric/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-electric/15 bg-abyss/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -18, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-lg px-4 py-3 font-display text-sm font-bold uppercase tracking-[0.28em] text-slate-200 transition-colors hover:bg-electric/10 hover:text-electric"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-3 flex items-center gap-3 px-4">
                <LivePill live={live} />
                <GlowButton href={TWITCH_URL} size="md" icon={<Radio className="h-4 w-4" />}>
                  Watch Live
                </GlowButton>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
