import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldAlert, Cpu, Award, Truck, Anchor, Plane, Compass } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const counter4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter 1: 14,200
      gsap.fromTo(
        { val: 0 },
        { val: 14200 },
        {
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            if (counter1Ref.current) {
              counter1Ref.current.innerText = Math.floor(this.targets()[0].val).toLocaleString() + "+";
            }
          },
        }
      );

      // Counter 2: 4.82B
      gsap.fromTo(
        { val: 0 },
        { val: 4.82 },
        {
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            if (counter2Ref.current) {
              counter2Ref.current.innerText = "$" + this.targets()[0].val.toFixed(2) + "B";
            }
          },
        }
      );

      // Counter 3: 99.98%
      gsap.fromTo(
        { val: 90.0 },
        { val: 99.98 },
        {
          duration: 2.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            if (counter3Ref.current) {
              counter3Ref.current.innerText = this.targets()[0].val.toFixed(2) + "%";
            }
          },
        }
      );

      // Counter 4: 140+
      gsap.fromTo(
        { val: 0 },
        { val: 140 },
        {
          duration: 2.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            if (counter4Ref.current) {
              counter4Ref.current.innerText = Math.floor(this.targets()[0].val).toString() + "+";
            }
          },
        }
      );

      // Parallax card subtle elevation
      gsap.utils.toArray(".stat-card").forEach((card, i) => {
        gsap.from(card, {
          y: 40 + i * 15,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-28 bg-[#080c14] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background technical watermarks */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[180px] font-mono font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        TELEMETRY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4" />
              <span>MISSION-CRITICAL SCALE // AUDITED PERFORMANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              REAL-TIME GLOBAL IMPACT
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-4 md:mt-0 font-normal">
            Continuous sensory telemetry across road, ocean, rail, and air freight corridors,
            delivering verifiable SLA performance for Fortune 500 enterprise dispatchers.
          </p>
        </div>

        {/* Counter Grid with Parallax Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="stat-card glass-panel rounded-2xl p-7 relative overflow-hidden group hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">CORRIDOR 01</span>
            </div>
            <div
              ref={counter1Ref}
              className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight mb-2"
            >
              14,200+
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              Active Connected Fleets
            </div>
            <p className="text-xs text-slate-400">
              Autonomous long-haul cabs, electric drayage, and sensor-enabled trailers.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="stat-card glass-panel rounded-2xl p-7 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">CORRIDOR 02</span>
            </div>
            <div
              ref={counter2Ref}
              className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400 tracking-tight mb-2"
            >
              $4.82B
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              Annual Protected Cargo
            </div>
            <p className="text-xs text-slate-400">
              High-value electronics, pharmaceuticals, and critical industrial parts.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="stat-card glass-panel rounded-2xl p-7 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">CORRIDOR 03</span>
            </div>
            <div
              ref={counter3Ref}
              className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight mb-2"
            >
              99.98%
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              On-Time Transit SLA
            </div>
            <p className="text-xs text-slate-400">
              Predictive customs filing and dynamic weather congestion bypasses.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="stat-card glass-panel rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Anchor className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">CORRIDOR 04</span>
            </div>
            <div
              ref={counter4Ref}
              className="text-4xl sm:text-5xl font-extrabold font-mono text-amber-400 tracking-tight mb-2"
            >
              140+
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              Intermodal Port Lanes
            </div>
            <p className="text-xs text-slate-400">
              Direct API integrations across major maritime terminals and rail yards.
            </p>
          </div>
        </div>

        {/* Live Sub-sensor Telemetry Ticker (UnitedCarriers style) */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300">TELEMETRY POLLING:</span>
            <span className="text-white">3,892,104 EVENTS/SEC</span>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>AVG RE-ROUTE TIME: <strong className="text-cyan-400">12.4ms</strong></span>
            <span>COLD-CHAIN DEVIATION: <strong className="text-emerald-400">&lt; 0.02°C</strong></span>
            <span>CUSTOMS CLEARANCE: <strong className="text-orange-400">INSTANT AI</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
