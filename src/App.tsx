import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Particles, { CursorFX } from "./components/Particles";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Games from "./components/Games";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Clips from "./components/Clips";
import Stats from "./components/Stats";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="noise relative min-h-screen bg-abyss font-body text-slate-200 antialiased">
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      {/* ambient FX layers */}
      <CursorFX />
      <Particles />

      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Games />
        <Schedule />
        <Gallery />
        <Clips />
        <Stats />
        <Community />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
