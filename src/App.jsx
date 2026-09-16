import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import NetworkTerminalSection from "./components/NetworkTerminalSection";
import Footer from "./components/Footer";
import ConsignmentModal from "./components/ConsignmentModal";
import DemoModal from "./components/DemoModal";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [trackModalOpen, setTrackModalOpen] = useState(false);
  const [activeTrackCode, setActiveTrackCode] = useState("FC-8829-X");
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Initialize Lenis Smooth Scroll and sync with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleOpenTrackModal = (code = "FC-8829-X") => {
    setActiveTrackCode(code);
    setTrackModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#06090e] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Preloader HUD sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Navbar */}
      <Navbar
        onOpenTrackModal={() => handleOpenTrackModal("FC-8829-X")}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Hero with Three.js 3D Canvas */}
      <Hero
        onTrackCode={(code) => handleOpenTrackModal(code)}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Section 1: Animated Stat Counters & Parallax Telemetry */}
      <StatsSection />

      {/* Section 2: GSAP ScrollTrigger Pinned Multimodal Transit Flow */}
      <HorizontalScrollSection />

      {/* Section 3: Interactive Network Terminal & Route Matrix */}
      <NetworkTerminalSection
        onOpenTrackModal={() => handleOpenTrackModal("FC-8829-X")}
      />

      {/* Footer & Global Hub Telemetry */}
      <Footer onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Interactive Modals */}
      <ConsignmentModal
        isOpen={trackModalOpen}
        onClose={() => setTrackModalOpen(false)}
        initialCode={activeTrackCode}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
