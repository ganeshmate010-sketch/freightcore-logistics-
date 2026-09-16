import React, { useState } from "react";
import { Terminal, Shield, CheckCircle2, RefreshCw, Radio, Thermometer, Zap, AlertTriangle, ArrowRight } from "lucide-react";

const corridors = [
  {
    id: "corridor-1",
    name: "Trans-Atlantic Oceanic Corridor",
    origin: "Rotterdam (NLD)",
    dest: "New York (USA)",
    mode: "Intermodal Container Vessel + Drayage",
    status: "OPTIMAL FLOW",
    statusColor: "text-emerald-400",
    transitTime: "7.4 Days",
    vesselsActive: 18,
    cargoTemp: "-21.4°C (Deep Frozen Cryo)",
    shockLevel: "0.04 G (Stable)",
    sealStatus: "CRYPTOGRAPHICALLY SEALED",
    telemetryEvents: "1,249,012 pts/hr",
    waypoints: [
      { name: "Maasvlakte 2 Automated Gantry", time: "Day 00 // 04:12 UTC", status: "CLEARED" },
      { name: "English Channel TSS Deep Water", time: "Day 01 // 18:30 UTC", status: "TRANSIT" },
      { name: "North Atlantic Midpoint Buoy", time: "Day 04 // 11:20 UTC", status: "EN ROUTE" },
      { name: "Port of NY/NJ Container Terminal", time: "Day 07 // 14:00 UTC", status: "SCHEDULED" },
    ],
  },
  {
    id: "corridor-2",
    name: "Pacific Autonomous Rim",
    origin: "Tokyo Haneda (JPN)",
    dest: "Los Angeles (USA)",
    mode: "Transcontinental Cargo Jet + L4 Highway Platooning",
    status: "HIGH VELOCITY",
    statusColor: "text-cyan-400",
    transitTime: "16.2 Hours",
    vesselsActive: 34,
    cargoTemp: "+4.1°C (Bio-Pharma Ambient)",
    shockLevel: "0.02 G (Ultra-Smooth)",
    sealStatus: "BIOMETRIC AIR CARGO LOCK",
    telemetryEvents: "3,891,440 pts/hr",
    waypoints: [
      { name: "Tokyo Air Cargo Hub 1", time: "00:00 JST", status: "DISPATCHED" },
      { name: "Aleutian Jetstream Corridor", time: "06:40 UTC", status: "CRUISING FL390" },
      { name: "LAX Freight Ramp Alpha", time: "11:15 PST", status: "TARMAC TRANSFER" },
      { name: "Inland Empire Logistics Core", time: "14:30 PST", status: "PLATOON DISPATCH" },
    ],
  },
  {
    id: "corridor-3",
    name: "Euro-Asian Intermodal Rail Link",
    origin: "Duisburg (DEU)",
    dest: "Shanghai Logistics Hub (CHN)",
    mode: "High-Speed Automated Electric Rail",
    status: "SCHEDULED NOMINAL",
    statusColor: "text-amber-400",
    transitTime: "11.0 Days",
    vesselsActive: 12,
    cargoTemp: "+18.2°C (Industrial Machinery)",
    shockLevel: "0.15 G (Rail Standard)",
    sealStatus: "RFID SATELLITE TETHER",
    telemetryEvents: "940,210 pts/hr",
    waypoints: [
      { name: "Duisburg Intermodal Yard", time: "Day 01 // 09:00 CET", status: "DEPARTED" },
      { name: "Brest Rail Gauge Exchange", time: "Day 03 // 16:45 CET", status: "GAUGE CONVERTED" },
      { name: "Dostyk Inland Port Gateway", time: "Day 07 // 22:10 UTC", status: "CUSTOMS CLEARED" },
      { name: "Shanghai Western Rail Terminal", time: "Day 11 // 08:30 CST", status: "IN ARRIVAL" },
    ],
  },
];

export default function NetworkTerminalSection({ onOpenTrackModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPinging, setIsPinging] = useState(false);
  const [pingLatency, setPingLatency] = useState(11.8);

  const handlePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      setPingLatency((Math.random() * 4 + 10).toFixed(1));
      setIsPinging(false);
    }, 600);
  };

  const curr = corridors[activeTab];

  return (
    <section id="network" className="py-24 bg-[#080c14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Terminal className="w-4 h-4" />
              <span>INTERACTIVE TELEMETRY CONSOLE // EMONS-STYLE SERVICE ROTATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              ACTIVE CORRIDOR MATRIX
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={handlePing}
              disabled={isPinging}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isPinging ? "animate-spin" : ""}`} />
              <span>PING TELEMETRY MESH ({pingLatency}ms)</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 mb-8 overflow-x-auto no-scrollbar gap-2">
          {corridors.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 text-xs sm:text-sm font-mono tracking-wider transition-all whitespace-nowrap border-b-2 flex items-center gap-2 ${
                activeTab === i
                  ? "border-orange-500 text-white font-bold bg-white/[0.02]"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Console & Telemetry Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Inspection View */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Lane Route</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {curr.origin} <span className="text-orange-500">→</span> {curr.dest}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{curr.mode}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {curr.status}
                </span>
              </div>
            </div>

            {/* Sensor Diagnostic Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CORE TEMP</span>
                </div>
                <div className="text-sm font-bold font-mono text-white">{curr.cargoTemp}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>VIBRATION</span>
                </div>
                <div className="text-sm font-bold font-mono text-white">{curr.shockLevel}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TAMPER SEAL</span>
                </div>
                <div className="text-xs font-bold font-mono text-emerald-300 truncate">{curr.sealStatus}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1">
                  <Radio className="w-3.5 h-3.5 text-orange-400" />
                  <span>DATA INGEST</span>
                </div>
                <div className="text-sm font-bold font-mono text-white">{curr.telemetryEvents}</div>
              </div>
            </div>

            {/* Waypoints Pipeline */}
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Sequential Checkpoints & Geo-Fence Telemetry
              </div>
              <div className="space-y-3">
                {curr.waypoints.map((wp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-slate-300">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{wp.name}</div>
                        <div className="text-[11px] font-mono text-slate-400">{wp.time}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-cyan-500/20">
                      {wp.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Rail: Enterprise Compliance & SLA Guarantee */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10">
              <h4 className="text-lg font-bold font-display text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-500" />
                ENTERPRISE SLA METRICS
              </h4>
              <ul className="space-y-3 text-xs text-slate-300 font-mono">
                <li className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Target Transit Window:</span>
                  <span className="text-white font-bold">{curr.transitTime}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Carrier Concurrency:</span>
                  <span className="text-cyan-400 font-bold">{curr.vesselsActive} Units Active</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Zero-Loss Insurance:</span>
                  <span className="text-emerald-400 font-bold">Lloyd's Underwritten</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Data Cryptography:</span>
                  <span className="text-white font-bold">AES-256 GCM</span>
                </li>
              </ul>

              <button
                onClick={onOpenTrackModal}
                className="w-full mt-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                <span>OPEN FULL AUDIT TELEMETRY</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>

            {/* Certifications Box */}
            <div id="security" className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Global Regulatory Accreditations
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>ISO 27001</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>C-TPAT Tier 3</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>GDP Pharma</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>AEO-F Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
