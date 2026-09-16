import React, { useState } from "react";
import { X, Send, CheckCircle2, Building, Mail, User, Shield } from "lucide-react";

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    fleetSize: "100-500",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#090d16] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              DISPATCH DEMO INITIALIZED
            </h3>
            <p className="text-xs font-mono text-slate-300 max-w-xs">
              A FreightCore Enterprise Architect will contact your dispatch team within 2 hours with tailored telemetry sandbox access.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono text-orange-400 tracking-widest uppercase">
                ENTERPRISE ONBOARDING
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                SCHEDULE DISPATCH DEMO
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Experience autonomous corridor routing & real-time WebGL spatial fleet telemetry on your enterprise lanes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-300 mb-1.5">
                  FULL NAME
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-300 mb-1.5">
                  ENTERPRISE EMAIL
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="m.vance@supplychain-corp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1.5">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Global Freight"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1.5">
                    MONTHLY TEU / UNITS
                  </label>
                  <select
                    value={formData.fleetSize}
                    onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="50-200">50 - 200 Units</option>
                    <option value="200-1000">200 - 1,000 Units</option>
                    <option value="1000+">1,000+ Units (Enterprise Tier)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold font-mono text-xs tracking-wider uppercase transition-all shadow-lg shadow-orange-500/20"
                >
                  INITIALIZE TELEMETRY DEMO ACCESS
                </button>
              </div>

              <p className="text-[10px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                ENTERPRISE SOC2 & ISO 27001 PROTECTED DISPATCH
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
