import React, { useState } from "react";
import { X, Search, Radio, CheckCircle, Navigation, ShieldCheck, Thermometer, Clock, Truck, Plane, Anchor } from "lucide-react";

export default function ConsignmentModal({ isOpen, onClose, initialCode = "FC-8829-X" }) {
  const [code, setCode] = useState(initialCode);
  const [activeCode, setActiveCode] = useState(initialCode);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (code.trim()) {
      setActiveCode(code.trim().toUpperCase());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090d16] border border-white/15 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              LIVE CONSIGNMENT TELEMETRY
            </h3>
            <p className="text-xs font-mono text-slate-400">
              REAL-TIME SAT-LINK // IOT SENSOR DIAGNOSTICS
            </p>
          </div>
        </div>

        {/* Query Input */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Search by Consignment ID (e.g. FC-8829-X)"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/50 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold transition-all"
          >
            QUERY
          </button>
        </form>

        {/* Telemetry Result Card */}
        <div className="p-5 rounded-xl bg-slate-900/80 border border-white/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <span className="text-[10px] font-mono text-slate-400">WAYBILL / TRACKING REF</span>
              <div className="text-lg font-bold font-mono text-white flex items-center gap-2">
                <span>{activeCode}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] border border-emerald-500/30">
                  IN TRANSIT
                </span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono text-slate-400">ESTIMATED ARRIVAL</span>
              <div className="text-sm font-bold font-mono text-cyan-400">
                TODAY // 19:40 UTC
              </div>
            </div>
          </div>

          {/* Route Overview */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="space-y-0.5">
              <div className="text-slate-400 text-[10px]">ORIGIN</div>
              <div className="text-white font-bold">Hamburg Port (HHLA)</div>
              <div className="text-[10px] text-emerald-400">DEPARTED 06:14 UTC</div>
            </div>
            <div className="flex-1 px-4 flex flex-col items-center">
              <span className="text-[10px] text-cyan-400">TRANSIT PROGRESS: 76%</span>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-cyan-400 h-full w-3/4 animate-pulse" />
              </div>
            </div>
            <div className="space-y-0.5 text-right">
              <div className="text-slate-400 text-[10px]">DESTINATION</div>
              <div className="text-white font-bold">Rotterdam Logistics Park</div>
              <div className="text-[10px] text-slate-400">ETA 19:40 UTC</div>
            </div>
          </div>

          {/* Sensor Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[10px] font-mono text-slate-400">CARGO TEMP</div>
              <div className="text-xs sm:text-sm font-bold font-mono text-white flex items-center gap-1">
                <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                -18.2 °C
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[10px] font-mono text-slate-400">GPS COORDINATES</div>
              <div className="text-xs sm:text-sm font-bold font-mono text-white flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-orange-400" />
                52.12°N 5.08°E
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[10px] font-mono text-slate-400">DIGITAL SEAL</div>
              <div className="text-xs sm:text-sm font-bold font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                UNCOMPROMISED
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors"
          >
            DISMISS TELEMETRY
          </button>
        </div>
      </div>
    </div>
  );
}
