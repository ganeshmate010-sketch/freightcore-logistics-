import React, { useState } from "react";
import ThreeCanvas from "./ThreeCanvas";
import { ArrowRight, ShieldCheck, Zap, Globe2, Radio, Truck } from "lucide-react";

export default function Hero({ onTrackCode, onOpenDemoModal }) {
  const [trackingInput, setTrackingInput] = useState("");

  const handleSubmitTrack = (e) => {
    e.preventDefault();
    if (onTrackCode) {
      onTrackCode(trackingInput.trim() || "FC-8829-X");
    }
  };

  const handlePresetTrack = (code) => {
    setTrackingInput(code);
    if (onTrackCode) {
      onTrackCode(code);
    }
  };

  return (
    <section className="relative min-h-[100vh] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#06090e] bg-grid-pattern">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Column: Value Prop & Controls */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-xs font-mono text-orange-400 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>ENTERPRISE LOGISTICS INTELLIGENCE OS 3.4</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
            AUTONOMOUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">
              GLOBAL FREIGHT
            </span>{" "}
            <br />
            & FLEET NETWORK.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Eliminate transit blindspots with continuous WebGL spatial telemetry,
            sub-second algorithmic corridor re-routing, and automated multimodal
            dispatching across maritime, air, rail, and highway fleets.
          </p>

          {/* Quick Consignment Tracking Bar */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl max-w-lg">
            <form onSubmit={handleSubmitTrack} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 flex items-center">
                <Radio className="absolute left-3 w-4 h-4 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Enter Consignment ID (e.g. FC-8829-X)"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/5 text-xs sm:text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/80 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
              >
                <span>LOCATE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick preset buttons */}
            <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="text-slate-400">Live Corridors:</span>
              <button
                type="button"
                onClick={() => handlePresetTrack("FC-9021-TX")}
                className="hover:text-cyan-400 underline decoration-dotted transition-colors"
              >
                #FC-9021-TX (Road)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handlePresetTrack("FC-7714-EU")}
                className="hover:text-cyan-400 underline decoration-dotted transition-colors"
              >
                #FC-7714-EU (Sea)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handlePresetTrack("FC-3392-AP")}
                className="hover:text-cyan-400 underline decoration-dotted transition-colors"
              >
                #FC-3392-AP (Air)
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
            <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
              <div className="text-xl font-bold font-mono text-white">99.98%</div>
              <div className="text-[11px] text-slate-400">On-Time Transit</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
              <div className="text-xl font-bold font-mono text-cyan-400">&lt; 14ms</div>
              <div className="text-[11px] text-slate-400">Reroute Latency</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
              <div className="text-xl font-bold font-mono text-orange-400">$4.8B+</div>
              <div className="text-[11px] text-slate-400">Cargo Protected</div>
            </div>
          </div>
        </div>

        {/* Right Column: Three.js Canvas Element */}
        <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[520px] lg:h-[600px] flex items-center justify-center">
          {/* Subtle outer tech frame */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

          {/* Live WebGL 3D Globe with Arcs & Nodes */}
          <ThreeCanvas />

          {/* Floating Telemetry Card 1 */}
          <div className="absolute top-6 left-4 sm:left-6 p-3 rounded-xl glass-panel border border-white/10 hidden sm:flex items-center gap-3 animate-pulse pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
              RT
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Rotterdam Port Hub</div>
              <div className="text-xs font-bold font-mono text-white">4,812 TEU IN CLEARANCE</div>
            </div>
          </div>

          {/* Floating Telemetry Card 2 */}
          <div className="absolute bottom-8 right-4 sm:right-6 p-3 rounded-xl glass-panel border border-cyan-500/30 hidden sm:flex items-center gap-3 pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-cyan-400 uppercase">Autonomous Corridor 08</div>
              <div className="text-xs font-bold font-mono text-white">TRANSIT SPEED: 88 KM/H</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
          EXPLORE MULTIMODAL OPERATIONS
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
