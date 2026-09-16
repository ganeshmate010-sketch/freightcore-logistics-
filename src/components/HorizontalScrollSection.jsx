import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Anchor, Plane, ShieldCheck, ArrowRight, Activity, Gauge, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    id: "01",
    tag: "HIGHWAY CORRIDORS",
    title: "Autonomous Fleet Platooning",
    desc: "Next-gen Level 4 autonomous heavy-duty electric trucks synced via sub-millisecond V2V radio mesh, cutting highway aerodynamic drag by 28% while operating round-the-clock.",
    icon: Truck,
    color: "from-orange-500 to-amber-500",
    accent: "#FF5500",
    metrics: [
      { label: "Platoon Reaction Latency", val: "4.2 ms" },
      { label: "Fuel/Energy Conservation", val: "-28.4%" },
      { label: "Autonomous Lane Miles", val: "1.8M / Mo" },
    ],
    telemetryCode: "V2V-MESH // PLATOON-ALPHA-09 ACTIVE",
  },
  {
    id: "02",
    tag: "MARITIME & INTERMODAL",
    title: "Deep-Sea Port Berthing Sync",
    desc: "Zero-dwell container tracking directly interfaced with Rotterdam, Singapore, and Long Beach terminal operating systems. Predictive gantry scheduling ensures instant chassis pickup upon vessel docking.",
    icon: Anchor,
    color: "from-cyan-500 to-blue-600",
    accent: "#00F0FF",
    metrics: [
      { label: "Vessel Turnaround Speed", val: "+42%" },
      { label: "Terminal Dwell Hours", val: "1.4 hrs" },
      { label: "TEU Tracked Annually", val: "840K TEU" },
    ],
    telemetryCode: "AIS-PORT-LINK // BERTH 42-EAST SYNCHRONIZED",
  },
  {
    id: "03",
    tag: "GLOBAL AIR LOGISTICS",
    title: "High-Altitude Cold Chain Cargo",
    desc: "Transcontinental sub-24hr air freight chartering with active temperature and cryogenic logging. Direct tarmac transfer guarantees uninterrupted clinical and semiconductor integrity.",
    icon: Plane,
    color: "from-purple-500 to-indigo-600",
    accent: "#A855F7",
    metrics: [
      { label: "Thermal Stability Variance", val: "± 0.05°C" },
      { label: "Tarmac Transfer Window", val: "< 18 mins" },
      { label: "Global Airport Hubs", val: "88 Tier-1" },
    ],
    telemetryCode: "CARGO-ALT // FLIGHT FC-492 LEVEL FL380",
  },
  {
    id: "04",
    tag: "COGNITIVE CLEARANCE",
    title: "Automated AI Customs Engine",
    desc: "Algorithmic Harmonized System (HS) code assignment and pre-arrival manifest filing across 65+ border authorities. Cross-border green-lane validation eliminates border friction.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    accent: "#10B981",
    metrics: [
      { label: "Automated Tariff Match", val: "99.94%" },
      { label: "Border Transit Delay", val: "0 hrs" },
      { label: "Jurisdictions Supported", val: "65 Nations" },
    ],
    telemetryCode: "CUSTOMS-API // DIGITAL DECLARATION CLEARED",
  },
];

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Only initialize horizontal pin scroll if window width >= 768px (desktop/tablet)
    // On small mobile screens, standard horizontal swipe/vertical stack gives better UX without viewport entrapment
    const isDesktop = window.innerWidth >= 768;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const totalPanels = panels.length;
        const scrollTween = gsap.to(trackRef.current, {
          xPercent: -100 * (totalPanels - 1) * (1 / totalPanels),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${containerRef.current.offsetWidth * 2}`,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="multimodal"
      ref={containerRef}
      className="relative bg-[#06090e] border-b border-white/5 overflow-hidden"
    >
      {/* Top sticky progress bar indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-30">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-orange-500 via-cyan-400 to-emerald-400 w-0 transition-all duration-75"
        />
      </div>

      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest mb-2">
              <Activity className="w-4 h-4" />
              <span>GSAP SCROLLTRIGGER PINNED SEQUENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              MULTIMODAL TRANSIT ARCHITECTURE
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 text-xs font-mono text-slate-400">
            [ SCROLL HORIZONTALLY TO INSPECT FLEET TIERS ]
          </div>
        </div>

        {/* Horizontal Container Track */}
        <div className="relative w-full overflow-x-auto md:overflow-visible no-scrollbar">
          <div
            ref={trackRef}
            className="flex flex-col md:flex-row gap-6 md:gap-8 md:w-[400%] transition-none"
          >
            {panels.map((p, index) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="w-full md:w-1/4 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between relative overflow-hidden group min-h-[480px]"
                >
                  {/* Decorative background glow */}
                  <div
                    className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
                    style={{ backgroundColor: p.accent }}
                  />

                  {/* Header info */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold font-mono text-slate-400">
                        {p.id}
                      </span>
                      <div className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[11px] font-mono text-slate-300">
                        {p.tag}
                      </div>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br p-3 flex items-center justify-center text-white mb-6 shadow-xl"
                      style={{ background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}99)` }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Metrics grid */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                    <div className="text-[10px] font-mono text-cyan-400 tracking-wider">
                      {p.telemetryCode}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {p.metrics.map((m, mi) => (
                        <div key={mi} className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                          <div className="text-xs sm:text-sm font-bold font-mono text-white">
                            {m.val}
                          </div>
                          <div className="text-[10px] text-slate-400 line-clamp-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
