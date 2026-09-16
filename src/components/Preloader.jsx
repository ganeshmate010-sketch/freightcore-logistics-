import React, { useEffect, useState } from "react";
import { ShieldCheck, Cpu } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const logs = [
    "INITIALIZING FREIGHTCORE CORE ENGINE...",
    "CALIBRATING SATELLITE TELEMATICS (GPS/GLONASS)...",
    "INGESTING 14,200+ MULTIMODAL FLEET TELEMETRY...",
    "ESTABLISHING SECURE QUIC-EDGE PROTOCOLS...",
    "NETWORK TOPOLOGY SYNCHRONIZED // 60 FPS NOMINAL"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 700);
          }, 300);
          return 100;
        }
        const jump = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + jump, 100);
        const nextLogIndex = Math.min(
          Math.floor((next / 100) * logs.length),
          logs.length - 1
        );
        setLogIndex(nextLogIndex);
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06090E] transition-all duration-700 ease-in-out ${
        isExiting ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-6 flex flex-col items-center text-center">
        {/* Logo and Brand Mark */}
        <div className="relative mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center p-3 glow-orange">
            <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
              <path d="M24 8L38 16V32L24 40L10 32V16L24 8Z" stroke="#FF5500" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M24 8V24L38 16" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 24L10 16" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 24V40" stroke="#FF5500" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="24" cy="24" r="3.5" fill="#00F0FF"/>
            </svg>
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
        </div>

        <h1 className="text-xl font-bold tracking-tight text-white font-display mb-1 flex items-center gap-2">
          FREIGHTCORE <span className="text-orange-500">SYSTEMS</span>
        </h1>
        <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-8">
          Autonomous Freight & Fleet Intelligence
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-white/5 mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter & Diagnostic Line */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>NODE CALIBRATION</span>
          </span>
          <span className="text-white font-bold">{progress}%</span>
        </div>

        {/* Console Log Status Line */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-[11px] font-mono text-slate-400/90 tracking-wide transition-all duration-200">
            &gt; {logs[logIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
