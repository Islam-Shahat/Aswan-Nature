import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { toursData } from '../data/toursData';

export const ToursPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  const tourList = Object.values(toursData);

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#F8FAF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Elegant Nile Teal Gradient Divider Bisected by Centered Title (Matches Gallery style) */}
        <div className="w-full flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-8 overflow-hidden">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#0a515b]/50 to-[#0a515b]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0a515b] shrink-0 hidden sm:block" />
          <h1 className="px-3 sm:px-6 text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#16241B] shrink-0 text-center font-heading">
            {isAr ? 'جولاتنا' : 'Our Tours'}
          </h1>
          <div className="w-1.5 h-1.5 rounded-full bg-[#0a515b] shrink-0 hidden sm:block" />
          <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0a515b] via-[#0a515b]/50 to-transparent" />
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourList.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E2E8DC] shadow-[0_10px_30px_rgba(20,40,25,0.06)] hover:shadow-[0_20px_45px_rgba(20,40,25,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={isAr ? tour.titleAr : tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#16241B] shadow-xs">
                  {isAr ? tour.badgeAr : tour.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#48e714] mb-1">
                    {isAr ? tour.eyebrowAr : tour.eyebrow}
                  </div>
                  <h3 className="text-xl font-bold">{isAr ? tour.titleAr : tour.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta details */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#556F5C] mb-4 pb-4 border-b border-[#F0F4EC]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#21c715]" />
                      {isAr ? tour.durationAr : tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#21c715]" />
                      {isAr ? tour.locationAr : tour.location}
                    </span>
                  </div>

                  <p className="text-sm text-[#4A5D50] leading-relaxed mb-6 line-clamp-3">
                    {isAr ? tour.descAr : tour.desc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {(isAr ? tour.highlightsAr : tour.highlights).slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2E4133]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#21c715] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-[#F0F4EC] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B8572] block font-semibold">
                      {isAr ? 'يبدأ من' : 'From'}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-[#16241B]">{tour.priceUsd}</span>
                      <span className="text-xs font-semibold text-[#66806C]">({tour.priceEgp})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/tours/${tour.id}`}
                      className="px-4 py-2.5 rounded-full border border-[#D8E2D2] text-[#16241B] text-xs font-bold hover:bg-[#F0F4EC] transition-colors"
                    >
                      {isAr ? 'التفاصيل' : 'Details'}
                    </Link>
                    <button
                      onClick={() => handleOpenBooking(isAr ? tour.titleAr : tour.title)}
                      className="px-4 py-2.5 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white text-xs font-bold shadow-sm transition-all hover:scale-105 cursor-pointer"
                    >
                      {isAr ? 'احجز' : 'Book'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
