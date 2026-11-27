import React, { useEffect } from 'react';
import {
  X,
  Clock,
  MapPin,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Coffee,
  Compass
} from 'lucide-react';
import { toursData } from '../../data/toursData';

export const TourDetailModal = ({
  tourId,
  isOpen,
  onClose,
  onBookNow,
  isAr = false
}) => {
  const tour = tourId ? (toursData[tourId] || toursData['nile-tour']) : null;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl my-6 border border-[#CBDCCB] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#0a515b] text-white transition-colors cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image Banner */}
        <div className="relative h-64 sm:h-72 shrink-0 overflow-hidden bg-[#0C1D15]">
          <img
            src={tour.image}
            alt={isAr ? tour.titleAr : tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D15] via-[#0C1D15]/60 to-transparent pointer-events-none" />

          {/* Banner Badges & Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-md text-[#4bf319]">
                {isAr ? tour.categoryLabelAr : tour.categoryLabelEn}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0a515b]/80 backdrop-blur-md text-white">
                {isAr ? tour.zoneLabelAr : tour.zoneLabelEn}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1EAA13]/80 backdrop-blur-md text-white">
                {isAr ? tour.disembarkTypeAr : tour.disembarkTypeEn}
              </span>
            </div>

            <div className="text-[11px] font-mono font-bold text-[#4bf319] tracking-widest uppercase mb-1">
              {isAr ? tour.eyebrowAr : tour.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white drop-shadow-md">
              {isAr ? tour.titleAr : tour.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 p-4 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC]">
            <div>
              <span className="text-[11px] font-bold text-[#556F5C] uppercase block mb-0.5">
                {isAr ? 'المدة الزمنية' : 'Duration'}
              </span>
              <div className="text-sm font-extrabold text-[#16241B] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0a515b]" />
                <span>{isAr ? tour.durationAr : tour.duration}</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#556F5C] uppercase block mb-0.5">
                {isAr ? 'نقطة الانطلاق' : 'Starting Marina'}
              </span>
              <div className="text-xs sm:text-sm font-extrabold text-[#16241B] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#21c715]" />
                <span className="truncate">
                  {isAr ? tour.startingMarinaAr : tour.startingMarinaEn}
                </span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] font-bold text-[#556F5C] uppercase block mb-0.5">
                {isAr ? 'السعر للشخص' : 'Price / Person'}
              </span>
              <div className="text-base font-black text-[#0a515b] flex items-baseline gap-1.5">
                <span>{tour.currency === 'EUR' || tour.priceEur ? `€${tour.priceEur}` : `$${tour.priceUsd}`}</span>
                <span className="text-xs font-semibold text-[#66806C]">
                  {tour.pricePrivateTourEur
                    ? (isAr ? `(خاصة: €${tour.pricePrivateTourEur})` : `(Private: €${tour.pricePrivateTourEur})`)
                    : `(${tour.priceEgp})`}
                </span>
              </div>
            </div>
          </div>

          {/* Official Pricing List Table if available */}
          {tour.pricingTiers && tour.pricingTiers.length > 0 && (
            <div className="rounded-2xl border border-[#DCE8D8] bg-[#F7FAF5] p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3 border-b border-[#E5EFE2] pb-2">
                <h4 className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-[#16241B]">
                  {isAr ? 'قائمة الأسعار الرسمية' : 'Official Pricing List'}
                </h4>
                <span className="text-[11px] font-bold text-[#0a515b] bg-[#0a515b]/10 px-2.5 py-0.5 rounded-full">
                  Euro (€)
                </span>
              </div>

              <div className="space-y-2">
                {tour.pricingTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm bg-white p-2.5 sm:p-3 rounded-xl border border-[#E9F0E6]"
                  >
                    <span className="font-bold text-[#2A3F30]">
                      {isAr ? tier.tierAr || tier.typeAr : tier.tierEn || tier.typeEn}
                    </span>
                    <span className="font-black text-[#1EAA13] font-mono text-sm sm:text-base">
                      {isAr ? `${tier.price} ${tier.unitAr ? `(${tier.unitAr})` : ''}` : `${tier.price} ${tier.unitEn ? `(${tier.unitEn})` : ''}`}
                    </span>
                  </div>
                ))}
              </div>

              {tour.pricingNoteEn && (
                <p className="text-[11px] text-[#6E8274] mt-3 font-medium italic">
                  * {isAr ? tour.pricingNoteAr : tour.pricingNoteEn}
                </p>
              )}
            </div>
          )}

          {/* Overview Description */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0a515b] mb-2">
              {isAr ? 'عن هذه التجربة' : 'About This Experience'}
            </h3>
            <p className="text-sm sm:text-base text-[#3E5244] leading-relaxed">
              {isAr ? tour.descAr : tour.desc}
            </p>
          </div>

          {/* Key Differentiators */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0a515b] mb-3">
              {isAr ? 'أهم ما يميز الجولة' : 'Key Tour Differentiators'}
            </h3>
            <div className="space-y-2.5">
              {(isAr ? tour.keyDifferentiatorsAr : tour.keyDifferentiators).map((diff, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#16241B]">
                  <CheckCircle2 className="w-4 h-4 text-[#21c715] shrink-0 mt-0.5" />
                  <span>{diff}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Itinerary */}
          {tour.itinerary && tour.itinerary.length > 0 && (
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0a515b] mb-4">
                {isAr ? 'الجدول الزمني ومسار الرحلة' : 'Detailed Itinerary'}
              </h3>
              <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-3 rtl:before:left-auto rtl:before:right-3 before:w-0.5 before:bg-[#CBDCCB]">
                {tour.itinerary.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 ps-8 rtl:ps-0 rtl:pe-8">
                    <div className="absolute left-1.5 rtl:left-auto rtl:right-1.5 top-1.5 w-3 h-3 rounded-full bg-[#0a515b] border-2 border-white shadow-xs" />
                    <div>
                      <div className="text-xs font-mono font-bold text-[#0a515b]">
                        {step.time}
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-[#16241B] mt-0.5">
                        {isAr ? step.titleAr : step.titleEn}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#556F5C] mt-1 leading-relaxed">
                        {isAr ? step.descAr : step.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What's Included & Inclusions */}
          {tour.inclusions && tour.inclusions.length > 0 && (
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0a515b] mb-3">
                {isAr ? 'ما تشمله الرحلة' : "What's Included"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(isAr ? tour.inclusionsAr : tour.inclusions).map((inc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC] flex items-center gap-2.5 text-xs text-[#2E4133]"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#21c715] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Meals & Beverages Note */}
          <div className="p-4 rounded-2xl bg-[#c99a5d]/10 border border-[#c99a5d]/25 flex items-start gap-3">
            <Coffee className="w-5 h-5 text-[#c99a5d] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-extrabold text-[#16241B] mb-0.5">
                {isAr ? 'الضيافة والمشروبات' : 'Meals & Refreshments'}
              </div>
              <div className="text-xs text-[#556F5C] leading-relaxed">
                {isAr ? tour.mealsDrinksAr : tour.mealsDrinksEn}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-[#FAFDF8] border-t border-[#EAEFE6] flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#6B8572] block">
              {isAr ? 'السعر الأساسي' : 'Base Rate'}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-[#16241B] font-heading">
                ${tour.priceUsd}
              </span>
              <span className="text-xs font-semibold text-[#66806C]">
                ({tour.priceEgp})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-2xl border-2 border-[#CBDCCB] text-xs font-extrabold text-[#16241B] hover:bg-white transition-colors cursor-pointer"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>

            <button
              onClick={() => {
                onClose();
                onBookNow(tour.id);
              }}
              className="px-6 py-3 rounded-2xl bg-[#0a515b] hover:bg-[#073b42] text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-[#4bf319]" />
              <span>{isAr ? 'احجز هذه الجولة الآن' : 'Book This Tour Now'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
