import React from 'react';
import {
  Clock,
  MapPin,
  Anchor,
  Coffee,
  CheckCircle2,
  Compass,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { toursList } from '../../data/toursData';

export const TourComparisonTable = ({
  isAr = false,
  onSelectTour
}) => {
  return (
    <div className="w-full my-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a515b]/10 text-[#0a515b] text-xs font-black uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#21c715]" />
          <span>{isAr ? 'مقارنة شاملة وسريعة' : 'SIDE-BY-SIDE MATRIX'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#16241B] tracking-tight mb-3">
          {isAr ? 'قارن بين جولاتنا الست لاختيار الأنسب لك' : 'Compare All 6 Tours at a Glance'}
        </h2>
        <p className="text-xs sm:text-sm text-[#556F5C] font-normal leading-relaxed">
          {isAr
            ? 'سواء كنت تبحث عن مراقبة الطيور فقط بالقارب، أو استكشاف الجوارح الجبلية، أو الدمج مع حضارة الفراعنة ومعبد فيلة'
            : 'Whether you want a peaceful boat-only cruise, mountain raptors in the reservoir, or a full day decoding pharaonic bird reliefs.'}
        </p>
      </div>

      {/* Horizontally Scrollable Table Container */}
      <div className="bg-white rounded-3xl sm:rounded-[32px] border border-[#CBDCCB] shadow-[0_12px_40px_rgba(20,40,25,0.06)] overflow-hidden">
        {/* Scroll hint on mobile */}
        <div className="lg:hidden px-4 py-2 bg-[#FAFDF8] border-b border-[#EAEFE6] text-[11px] font-bold text-[#6B8572] flex items-center justify-between">
          <span>{isAr ? '← اسحب أفقياً لمشاهدة جميع الجولات' : 'Swipe horizontally to view all tours →'}</span>
          <span className="text-[#0a515b] font-mono">6 Tours</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left rtl:text-right border-collapse min-w-[920px]">
            {/* Table Header: Tours */}
            <thead>
              <tr className="bg-[#FAFDF8] border-b-2 border-[#CBDCCB]">
                <th className="p-4 sm:p-5 w-[180px] sm:w-[220px] text-xs font-extrabold text-[#556F5C] uppercase tracking-wider sticky left-0 rtl:left-auto rtl:right-0 bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)]">
                  {isAr ? 'معايير المقارنة' : 'Tour Feature'}
                </th>
                {toursList.map((tour) => (
                  <th
                    key={tour.id}
                    className="p-4 sm:p-5 min-w-[200px] text-center align-top border-x border-[#EAEFE6] group"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0a515b] block mb-1">
                      {isAr ? tour.categoryLabelAr : tour.categoryLabelEn}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-[#16241B] leading-tight mb-2">
                      {isAr ? tour.titleAr : tour.title}
                    </h4>
                    <div className="inline-block bg-[#0a515b]/10 text-[#0a515b] font-extrabold text-xs px-2.5 py-1 rounded-full mb-3">
                      {tour.currency === 'EUR' || tour.priceEur ? `€${tour.priceEur}` : `$${tour.priceUsd}`} <span className="text-[10px] font-normal">{tour.pricePrivateTourEur ? (isAr ? `(خاصة: €${tour.pricePrivateTourEur})` : `(Private: €${tour.pricePrivateTourEur})`) : `(${tour.priceEgp})`}</span>
                    </div>
                    <button
                      onClick={() => onSelectTour(tour.id)}
                      className="w-full py-2 px-3 rounded-xl bg-[#0a515b] hover:bg-[#073b42] text-white text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>{isAr ? 'اختيار وحجز' : 'Select & Book'}</span>
                      <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-[#EAEFE6] text-xs text-[#2E4133]">
              {/* Row 1: Duration */}
              <tr className="hover:bg-[#FAFDF8]/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-white hover:bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0a515b] shrink-0" />
                  <span>{isAr ? 'المدة الزمنية' : 'Duration'}</span>
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center font-extrabold text-[#16241B] border-x border-[#EAEFE6]">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#E2E8DC]/60 text-xs font-black">
                      {isAr ? tour.durationAr : tour.duration}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Geographic Zone */}
              <tr className="hover:bg-[#FAFDF8]/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-white hover:bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#21c715] shrink-0" />
                  <span>{isAr ? 'النطاق الجغرافي' : 'Geographic Zone'}</span>
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center border-x border-[#EAEFE6]">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      tour.zone === 'nile'
                        ? 'bg-[#0a515b]/10 text-[#0a515b]'
                        : 'bg-[#c99a5d]/15 text-[#8f662e]'
                    }`}>
                      {tour.zone === 'nile'
                        ? (isAr ? 'منطقة النيل (الشلال الأول)' : 'Nile (First Cataract)')
                        : (isAr ? 'منطقة الخزان (السد العالي)' : 'Reservoir (High Dam)')}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 3: Starting Marina */}
              <tr className="hover:bg-[#FAFDF8]/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-white hover:bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0a515b] shrink-0" />
                  <span>{isAr ? 'نقطة الانطلاق' : 'Starting Marina'}</span>
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center text-xs text-[#4E6254] border-x border-[#EAEFE6] leading-snug font-medium">
                    {isAr ? tour.startingMarinaAr : tour.startingMarinaEn}
                  </td>
                ))}
              </tr>

              {/* Row 4: Land Stops & Disembarking */}
              <tr className="hover:bg-[#FAFDF8]/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-white hover:bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-[#21c715] shrink-0" />
                  <span>{isAr ? 'النزول باليابسة' : 'Disembarking / Land Stops'}</span>
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center border-x border-[#EAEFE6]">
                    {tour.boatOnly ? (
                      <span className="inline-block px-2.5 py-1 rounded-full bg-[#E2E8DC] text-[#4A5D50] text-[11px] font-extrabold">
                        {isAr ? 'لا — بالقارب فقط' : 'No — Boat-Only'}
                      </span>
                    ) : (
                      <span className="inline-block px-2.5 py-1 rounded-full bg-[#1EAA13]/15 text-[#1EAA13] text-[11px] font-extrabold">
                        {isAr ? tour.disembarkTypeAr : tour.disembarkTypeEn}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 5: Meals & Refreshments */}
              <tr className="hover:bg-[#FAFDF8]/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-white hover:bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#c99a5d] shrink-0" />
                  <span>{isAr ? 'الضيافة والمأكولات' : 'Meals & Drinks'}</span>
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center text-[11px] text-[#4E6254] border-x border-[#EAEFE6] leading-snug">
                    {isAr ? tour.mealsDrinksAr : tour.mealsDrinksEn}
                  </td>
                ))}
              </tr>

              {/* Row 6: Primary Focus & Core Differentiator */}
              <tr className="hover:bg-[#FAFDF8]/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-white hover:bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0a515b] shrink-0" />
                  <span>{isAr ? 'التركيز الأساسي' : 'Primary Focus'}</span>
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center text-xs font-bold text-[#16241B] border-x border-[#EAEFE6] leading-snug">
                    {isAr ? tour.primaryFocusAr : tour.primaryFocusEn}
                  </td>
                ))}
              </tr>

              {/* Row 7: Action CTA */}
              <tr className="bg-[#FAFDF8]">
                <td className="p-4 sm:p-5 font-bold text-[#16241B] sticky left-0 rtl:left-auto rtl:right-0 bg-[#FAFDF8] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)] rtl:shadow-[-2px_0_5px_rgba(0,0,0,0.02)]">
                  {isAr ? 'ابدأ الحجز' : 'Take Action'}
                </td>
                {toursList.map((tour) => (
                  <td key={tour.id} className="p-4 sm:p-5 text-center border-x border-[#EAEFE6]">
                    <button
                      onClick={() => onSelectTour(tour.id)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#0a515b] hover:bg-[#073b42] text-white text-xs font-black transition-all shadow-md cursor-pointer"
                    >
                      {isAr ? `احجز ${tour.titleAr}` : `Book ${tour.title}`}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
