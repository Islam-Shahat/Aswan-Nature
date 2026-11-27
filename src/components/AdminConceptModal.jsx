import React from 'react';
import { X, LayoutDashboard, Calendar, Users, Camera, Settings, TrendingUp, CheckCircle } from 'lucide-react';







export const AdminConceptModal = ({
  isOpen,
  onClose,
  currentLang = 'EN'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#101D16] text-white rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col md:flex-row my-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close">
          
          <X className="w-5 h-5" />
        </button>

        {/* Sidebar */}
        <div className="w-full md:w-64 bg-[#0A1610] p-6 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-8 h-8 rounded-lg bg-[#2BE019] flex items-center justify-center text-black font-extrabold text-sm">
                AN
              </span>
              <div>
                <div className="font-bold text-sm tracking-tight">Aswan Nature</div>
                <div className="text-[10px] text-[#2BE019] uppercase font-semibold">Admin Concept</div>
              </div>
            </div>

            <nav className="space-y-1 text-xs font-medium text-[#92A899]">
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#2BE019]/15 text-[#2BE019] font-semibold">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Overview</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <Calendar className="w-4 h-4" />
                <span>Tour Bookings</span>
                <span className="ml-auto bg-[#2BE019] text-black text-[10px] px-1.5 py-0.2 rounded-full font-bold">4</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <Users className="w-4 h-4" />
                <span>Local Guides & Boats</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <Camera className="w-4 h-4" />
                <span>Wildlife Sightings Log</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Rates & Availability</span>
              </div>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 text-[11px] text-[#71887A]">
            <div>Preview concept for internal company operations.</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-extrabold text-white mb-1 font-heading">
              Operations & Bird Sightings Hub
            </h3>
            <p className="text-xs text-[#8DA695]">
              Real-time snapshot of daily Nile expeditions, guide allocations, and recent bird counts in Aswan.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#16271E] rounded-xl p-4 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-[#7E9887] font-semibold mb-1">
                Active Tours Today
              </div>
              <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                3 Boats
                <span className="text-xs text-[#2BE019] flex items-center font-medium">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +15%
                </span>
              </div>
            </div>

            <div className="bg-[#16271E] rounded-xl p-4 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-[#7E9887] font-semibold mb-1">
                Species Logged This Week
              </div>
              <div className="text-2xl font-bold text-white">48 Species</div>
            </div>

            <div className="bg-[#16271E] rounded-xl p-4 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-[#7E9887] font-semibold mb-1">
                Egyptian Citizen Rate
              </div>
              <div className="text-2xl font-bold text-[#D8C7A5]">Active (50%)</div>
            </div>
          </div>

          {/* Recent Sightings Table */}
          <div className="bg-[#16271E] rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3.5 border-b border-white/10 font-bold text-xs uppercase tracking-wider text-[#B3C9B9]">
              Recent Field Sightings (First Cataract Islands)
            </div>
            <div className="divide-y divide-white/5 text-xs">
              <div className="px-5 py-3 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white">Pied Kingfisher (Ceryle rudis)</span>
                  <div className="text-[#6D8575] text-[11px]">Island Sanctuary · 08:30 AM</div>
                </div>
                <span className="text-[#2BE019] font-medium flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3" /> Confirmed (5 sightings)
                </span>
              </div>

              <div className="px-5 py-3 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white">Little Egret (Egretta garzetta)</span>
                  <div className="text-[#6D8575] text-[11px]">Shallow Waters · 09:15 AM</div>
                </div>
                <span className="text-[#2BE019] font-medium flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3" /> Confirmed (12 sightings)
                </span>
              </div>

              <div className="px-5 py-3 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white">Egyptian Goose (Alopochen aegyptiaca)</span>
                  <div className="text-[#6D8575] text-[11px]">Reservoir Banks · 10:45 AM</div>
                </div>
                <span className="text-[#2BE019] font-medium flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3" /> Pair nesting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};