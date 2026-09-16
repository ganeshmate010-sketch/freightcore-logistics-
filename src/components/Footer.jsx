import React, { useState, useEffect } from "react";
import { ArrowUpRight, Globe, Shield, Terminal, Heart } from "lucide-react";

export default function Footer({ onOpenDemoModal }) {
  const [timeRotterdam, setTimeRotterdam] = useState("");
  const [timeNewYork, setTimeNewYork] = useState("");
  const [timeSingapore, setTimeSingapore] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimeRotterdam(
        now.toLocaleTimeString("en-GB", { timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
      setTimeNewYork(
        now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
      setTimeSingapore(
        now.toLocaleTimeString("en-SG", { timeZone: "Asia/Singapore", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#04060a] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enterprise CTA Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 mb-16 relative overflow-hidden bg-gradient-to-r from-slate-950 via-[#0a0f18] to-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[11px] font-mono border border-orange-500/30">
                TRANSFORM YOUR SUPPLY CHAIN
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
                Ready to deploy autonomous corridor intelligence?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Join forward-thinking enterprise carriers and multimodal dispatchers who rely on
                FreightCore to cut dwell times, prevent cold-chain deviations, and optimize fleet utilization.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold font-mono text-xs tracking-wider uppercase transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                <span>REQUEST PILOT TRIAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#network"
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white font-mono text-xs text-center transition-colors"
              >
                VIEW CORRIDOR SPECS
              </a>
            </div>
          </div>
        </div>

        {/* Global Hub Time Zone Ticker */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="flex items-center justify-between sm:justify-start gap-3">
            <span className="text-slate-400">ROTTERDAM (CET):</span>
            <span className="text-cyan-400 font-bold">{timeRotterdam || "12:00:00"}</span>
          </div>
          <div className="flex items-center justify-between sm:justify-start gap-3 border-t sm:border-t-0 sm:border-l border-white/5 pt-2 sm:pt-0 sm:pl-4">
            <span className="text-slate-400">NEW YORK (EST):</span>
            <span className="text-orange-400 font-bold">{timeNewYork || "06:00:00"}</span>
          </div>
          <div className="flex items-center justify-between sm:justify-start gap-3 border-t sm:border-t-0 sm:border-l border-white/5 pt-2 sm:pt-0 sm:pl-4">
            <span className="text-slate-400">SINGAPORE (SGT):</span>
            <span className="text-emerald-400 font-bold">{timeSingapore || "18:00:00"}</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              MULTIMODAL PLATFORM
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#multimodal" className="hover:text-white transition-colors">Autonomous Highway Cabs</a></li>
              <li><a href="#multimodal" className="hover:text-white transition-colors">Intermodal Ocean Gantries</a></li>
              <li><a href="#multimodal" className="hover:text-white transition-colors">Sub-24h Transcontinental Air</a></li>
              <li><a href="#multimodal" className="hover:text-white transition-colors">Cognitive Customs API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              INTELLIGENCE & SENSORS
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#stats" className="hover:text-white transition-colors">Continuous WebGL Spatial GIS</a></li>
              <li><a href="#network" className="hover:text-white transition-colors">IoT Cryo & Temp Monitoring</a></li>
              <li><a href="#network" className="hover:text-white transition-colors">Shock & Vibration Loggers</a></li>
              <li><a href="#network" className="hover:text-white transition-colors">Anti-Tamper Cryptographic Seals</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              ENTERPRISE & SLA
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#security" className="hover:text-white transition-colors">ISO 27001 Certification</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">C-TPAT Tier 3 Security</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">GDP Pharma Compliance</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Lloyd's Cargo Underwriting</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              DISPATCH TERMINAL
            </h5>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to international maritime tariff & corridor disruption notices.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="dispatcher@fleet.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
              />
              <button className="px-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-xs font-mono transition-colors">
                SUB
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white">SYSTEM STATUS: ALL SYSTEMS NOMINAL (99.98% UPTIME)</span>
          </div>
          <div>
            © 2026 FreightCore Logistics Inc. Built for Truckinzy Infotech Assignment.
          </div>
        </div>
      </div>
    </footer>
  );
}
