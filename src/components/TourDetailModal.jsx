import React from 'react';
import { X, Clock, MapPin, CheckCircle, ArrowRight, Euro } from 'lucide-react';
import { toursData } from '../data/toursData';

export const TourDetailModal = ({
  tourId,
  isOpen,
  onClose,
  onBookTour,
  currentLang = 'EN'
}) => {
  if (!isOpen || !tourId) return null;

  const isAr = currentLang === 'AR';
  const tour = toursData[tourId] || toursData['nile-birds'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E6EDE1] max-h-[92vh] flex flex-col my-auto" dir={isAr ? 'rtl' : 'ltr'}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={tour.image}
            alt={isAr ? tour.titleAr : tour.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="inline-block bg-[#2BE019] text-black text-xs font-bold px-3 py-1 rounded-md mb-2 shadow">
              {isAr ? tour.badgeAr : tour.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              {isAr ? tour.titleAr : tour.title}
            </h3>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Duration & Location bar */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#526657] font-semibold border-b border-[#EAF0E6] pb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2BE019]" />
              <span>{isAr ? tour.durationAr : tour.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#2BE019]" />
              <span>{isAr ? (tour.startingMarinaAr || tour.locationAr) : (tour.startingMarinaEn || tour.location)}</span>
            </div>
          </div>

          <p className="text-sm text-[#4E6254] leading-relaxed">
            {isAr ? tour.descAr : tour.desc}
          </p>

          {/* Official Pricing List Table if available */}
          {tour.pricingTiers && tour.pricingTiers.length > 0 && (
            <div className="rounded-2xl border border-[#DCE8D8] bg-[#F7FAF5] p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3 border-b border-[#E5EFE2] pb-2">
                <div className="flex items-center gap-2">
                  <Euro className="w-4 h-4 text-[#1EAA13]" />
                  <h4 className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-[#16241B]">
                    {isAr ? 'قائمة الأسعار الرسمية' : 'Official Pricing List'}
                  </h4>
                </div>
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

          {/* Highlights */}
          {tour.keyDifferentiators && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#637568] font-bold mb-3">
                {isAr ? 'أبرز ما تشمله الجولة' : 'EXPERIENCE HIGHLIGHTS'}
              </h4>
              <div className="space-y-2">
                {(isAr ? tour.keyDifferentiatorsAr : tour.keyDifferentiators).map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263D2E]">
                    <CheckCircle className="w-4 h-4 text-[#2BE019] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#E8EDE4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#16241B]">
                {tour.pricingTiers
                  ? (isAr ? 'تبدأ من ٥٥€ للشخص' : 'From €55 per person')
                  : (isAr ? 'طلب السعر والحجز' : 'Request price')}
              </div>
              <div className="text-xs text-[#7A8C7F]">
                {isAr ? 'تتوفر أسعار خاصة للمصريين' : 'Special Egyptian rates available'}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookTour(isAr ? tour.titleAr : tour.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1EAA13] hover:bg-[#18930F] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>{isAr ? 'احجز هذه الجولة الآن' : 'Book This Tour'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
