import React from 'react';
import {
  Clock,
  MapPin,
  CheckCircle2,
  Anchor,
  Compass,
  ArrowRight,
  Eye,
  CalendarCheck,
  Sparkles
} from 'lucide-react';

export const TourCard = ({
  tour,
  isAr = false,
  onViewItinerary,
  onBookNow
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#CBDCCB] shadow-[0_10px_30px_rgba(20,40,25,0.06)] hover:shadow-[0_20px_45px_rgba(10,81,91,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      {/* Tour Image Banner */}
      <div className="relative h-64 overflow-hidden bg-[#E2E8DC]">
        <img
          src={tour.image}
          alt={isAr ? tour.titleAr : tour.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
          {/* Category Badge */}
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-white/95 text-[#0a515b] shadow-sm">
            {isAr ? tour.categoryLabelAr : tour.categoryLabelEn}
          </span>

          {/* Boat-Only vs Land Stops Badge */}
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm ${
              tour.boatOnly
                ? 'bg-[#0a515b]/90 text-[#5ee4f7]'
                : 'bg-[#1EAA13]/90 text-white'
            }`}
          >
            {tour.boatOnly
              ? (isAr ? 'قارب فقط' : 'Boat-Only')
              : (isAr ? 'نزول باليابسة' : 'Land Stops Included')}
          </span>
        </div>

        {/* Bottom Banner Title & Eyebrow */}
        <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#4bf319] mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#4bf319]" />
            <span>{isAr ? tour.eyebrowAr : tour.eyebrow}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black leading-tight text-white drop-shadow-sm">
            {isAr ? tour.titleAr : tour.title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Key Meta Strip: Duration, Zone & Starting Marina */}
          <div className="space-y-2 mb-4 pb-4 border-b border-[#F0F4EC]">
            <div className="flex items-center justify-between text-xs font-bold text-[#4E6254]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0a515b]" />
                <span>{isAr ? tour.durationAr : tour.duration}</span>
              </span>
              <span className="flex items-center gap-1.5 text-right rtl:text-left text-[#16241B]">
                <Compass className="w-4 h-4 text-[#21c715]" />
                <span className="truncate max-w-[170px]">
                  {isAr ? tour.zoneLabelAr : tour.zoneLabelEn}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#556F5C]">
              <MapPin className="w-3.5 h-3.5 text-[#0a515b] shrink-0" />
              <span className="truncate">
                {isAr ? `نقطة الانطلاق: ${tour.startingMarinaAr}` : `Starting: ${tour.startingMarinaEn}`}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed mb-5 line-clamp-3 font-normal">
            {isAr ? tour.descAr : tour.desc}
          </p>

          {/* Key Differentiator Bullets (4 bullets) */}
          <div className="space-y-2 mb-6">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#0a515b]">
              {isAr ? 'أهم مميزات هذه الجولة:' : 'Key Differentiators:'}
            </div>
            {(isAr ? tour.keyDifferentiatorsAr : tour.keyDifferentiators).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#2E4133]">
                <CheckCircle2 className="w-4 h-4 text-[#21c715] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer: Pricing & Action Buttons */}
        <div className="pt-4 border-t border-[#EAEFE6]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B8572] block">
                {isAr ? 'يبدأ من (للمصريين)' : 'Starting From'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#16241B] font-heading">
                  {isAr ? `${tour.priceEgpNumber || 1500} ج.م` : `€${tour.priceEur || 55}`}
                </span>
                <span className="text-xs font-bold text-[#66806C]">
                  {isAr
                    ? (tour.pricePrivateTourEgp ? `(خاصة: ${tour.pricePrivateTourEgp} ج.م)` : `(خاصة: 3,500 ج.م)`)
                    : (tour.pricePrivateTourEur ? `(Private: €${tour.pricePrivateTourEur})` : '')}
                </span>
              </div>
            </div>

            {/* Disembarkation badge */}
            <div className="text-right rtl:text-left">
              <span className="text-[10px] font-bold text-[#556F5C] block">
                {isAr ? 'طبيعة التجربة:' : 'Experience Style:'}
              </span>
              <span className="text-xs font-black text-[#0a515b]">
                {isAr ? tour.disembarkTypeAr : tour.disembarkTypeEn}
              </span>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onViewItinerary(tour.id)}
              className="py-3 px-3.5 rounded-2xl border-2 border-[#CBDCCB] hover:border-[#0a515b] hover:bg-[#FAFDF8] text-[#16241B] text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 group/btn"
            >
              <Eye className="w-3.5 h-3.5 text-[#0a515b] group-hover/btn:scale-110 transition-transform" />
              <span>{isAr ? 'تفاصيل البرنامج' : 'View Itinerary'}</span>
            </button>

            <button
              onClick={() => onBookNow(tour.id)}
              className="py-3 px-3.5 rounded-2xl bg-[#0a515b] hover:bg-[#073b42] text-white text-xs font-black shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 group/book"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#4bf319] group-book/btn:scale-110 transition-transform" />
              <span>{isAr ? 'احجز الآن' : 'Book Now'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform group-hover/book:translate-x-0.5 rtl:group-hover/book:-translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
