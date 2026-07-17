import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";
import { FAQS } from "../data";
import { SectionHeading, Watermark, Reveal, cn } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-28 sm:py-36">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_80%,rgba(8,25,48,0.75),transparent_70%)]" />
      <Watermark className="left-1/2 top-[4%] h-[60vmin] w-[60vmin] -translate-x-1/2 anim-float-soft" opacity={0.05} />
      <div className="absolute right-[10%] bottom-[20%] h-52 w-52 rounded-full bg-blue-600/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[860px] px-4 sm:px-6">
        <SectionHeading
          kicker="// Intel database"
          title="FREQUENTLY ASKED"
          accent="QUESTIONS"
          desc="Everything a new recruit needs to know before stepping into the arena."
        />

        <div className="mt-14 flex flex-col gap-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div
                  className={cn(
                    "glass overflow-hidden rounded-2xl transition-all duration-500",
                    isOpen && "border-electric/60 shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300",
                        isOpen ? "bg-electric/20 text-electric ring-electric/60" : "bg-electric/5 text-electric/70 ring-electric/25"
                      )}
                    >
                      <Terminal className="h-4 w-4" />
                    </span>
                    <span
                      className={cn(
                        "flex-1 font-display text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 sm:text-base",
                        isOpen ? "text-ice" : "text-white"
                      )}
                    >
                      {f.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-electric transition-transform duration-400",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pl-[76px]">
                          <div className="h-px w-full bg-gradient-to-r from-electric/30 to-transparent mb-4" />
                          <p className="text-sm leading-relaxed text-slate-400">{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
