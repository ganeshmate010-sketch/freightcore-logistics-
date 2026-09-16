import React, { useState, useEffect } from "react";
import { Activity, Search, ArrowUpRight, Menu, X, Shield } from "lucide-react";

export default function Navbar({ onOpenTrackModal, onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#06090e]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 p-2 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
              <path d="M24 8L38 16V32L24 40L10 32V16L24 8Z" stroke="#FF5500" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M24 8V24L38 16" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 24L10 16" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 24V40" stroke="#FF5500" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="24" cy="24" r="3.5" fill="#00F0FF"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white font-display flex items-center gap-1">
              FREIGHT<span className="text-orange-500">CORE</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
              GLOBAL LOGISTICS OS
            </span>
          </div>
        </a>

        {/* Live Network Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>NETWORK ONLINE // 14,200 FLEETS CONNECTED</span>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#stats" className="hover:text-white transition-colors">
            Metrics
          </a>
          <a href="#multimodal" className="hover:text-white transition-colors">
            Multimodal Flow
          </a>
          <a href="#network" className="hover:text-white transition-colors">
            Route Matrix
          </a>
          <a href="#security" className="hover:text-white transition-colors">
            Compliance
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTrackModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all group"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>TRACK SHIPMENT</span>
          </button>

          <button
            onClick={onOpenDemoModal}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg font-medium text-xs group"
          >
            <span className="w-full h-full bg-gradient-to-br from-orange-500 to-amber-500 group-hover:from-orange-600 group-hover:to-amber-600 absolute"></span>
            <span className="relative px-4 py-2 transition-all ease-out bg-[#080c14] rounded-md group-hover:bg-opacity-0 text-white font-semibold flex items-center gap-1.5">
              <span>DISPATCH DEMO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenTrackModal}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-cyan-400"
            aria-label="Track Shipment"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f18] border-b border-white/10 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#stats"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Metrics & Live Telemetry
            </a>
            <a
              href="#multimodal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Multimodal Flow (Highway, Port, Air, Customs)
            </a>
            <a
              href="#network"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Global Route Matrix & Terminal
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Enterprise Compliance
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              REQUEST ENTERPRISE DEMO
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
