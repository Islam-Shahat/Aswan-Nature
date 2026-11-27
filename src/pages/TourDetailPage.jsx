import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import {
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Calendar,
  Users,
  Compass,
  Sparkles
} from 'lucide-react';
import { toursData } from '../data/toursData';

export const TourDetailPage = () => {
  const { id } = useParams();
  const { currentLang, handleOpenBooking, setEgyptianRatesOpen } = useOutletContext();
  const isAr = currentLang === 'AR';

  const tour = toursData[id] || toursData['nile-birds'];

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#F8FAF5] min-h-screen">
      {/* Breadcrumb & Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          to="/tours"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A6451] hover:text-[#16241B] transition-colors"
        >
          {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{isAr ? 'العودة إلى جميع الجولات' : 'Back to all tours'}</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[500px] mb-12 shadow-2xl flex items-end">
          <img
            src={tour.image}
            alt={isAr ? tour.titleAr : tour.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D15] via-[#0C1D15]/50 to-transparent" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-white max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#48e714]" />
              <span>{isAr ? tour.badgeAr : tour.badge}</span>
            </div>

            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#48e714] mb-2">
              {isAr ? tour.eyebrowAr : tour.eyebrow}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              {isAr ? tour.titleAr : tour.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#D4E4D8]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48e714]" />
                <span>{isAr ? tour.durationAr : tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#48e714]" />
                <span>{isAr ? tour.locationAr : tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#48e714]" />
                <span>{isAr ? 'مجموعات خاصة صغيرة' : 'Intimate private groups'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8DC] shadow-sm">
              <h2 className="text-2xl font-bold text-[#16241B] mb-4">
                {isAr ? 'نظرة عامة على الجولة' : 'Tour Overview'}
              </h2>
              <p className="text-base sm:text-lg text-[#4A5D50] leading-relaxed mb-8">
                {isAr ? tour.descAr : tour.desc}
              </p>

              <h3 className="text-lg font-bold text-[#16241B] mb-4">
                {isAr ? 'أبرز مميزات الرحلة' : 'Key Highlights'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isAr ? tour.highlightsAr : tour.highlights).map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F9F5] border border-[#E8EEE3]">
                    <CheckCircle className="w-5 h-5 text-[#21c715] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#2A3F30]">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Schedule / Itinerary */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8DC] shadow-sm">
              <h2 className="text-2xl font-bold text-[#16241B] mb-6 flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#21c715]" />
                <span>{isAr ? 'خط سير الجولة الزمني' : 'Suggested Itinerary'}</span>
              </h2>

              <div className="space-y-6">
                {(tour.itinerary || []).map((step, idx) => (
                  <div key={idx} className="flex gap-4 sm:gap-6 relative group">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-[#EAF7E8] text-[#1E9911] font-bold text-xs flex items-center justify-center border border-[#CFE8CC] flex-shrink-0">
                        {idx + 1}
                      </div>
                      {idx !== tour.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-[#E2E8DC] my-1" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1E9911] block mb-1">
                        {isAr ? step.timeAr : step.time}
                      </span>
                      <h4 className="text-base font-bold text-[#16241B] mb-1">
                        {isAr ? step.titleAr : step.title}
                      </h4>
                      <p className="text-sm text-[#556F5C] leading-relaxed">
                        {isAr ? step.descAr : step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gear & Safety Included */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8DC] shadow-sm">
              <h2 className="text-2xl font-bold text-[#16241B] mb-6">
                {isAr ? 'المعدات وتجهيزات السلامة المشمولة' : 'Optics & Safety Equipment Included'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isAr ? tour.gearIncludedAr : tour.gearIncluded).map((gear, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4F8F2] border border-[#DEE8DB]">
                    <ShieldCheck className="w-4 h-4 text-[#21c715] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#283C2D]">{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Booking Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-3xl p-8 border border-[#E2E8DC] shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#698570]">
                  {isAr ? 'السعر يبدأ من' : 'Starting From'}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-[#16241B]">
                    {isAr ? `${tour.priceEgpNumber || 1500} ج.م` : `€${tour.priceEur || 55}`}
                  </span>
                  <span className="text-sm font-semibold text-[#5B7763]">
                    {isAr
                      ? (tour.pricePrivateTourEgp ? `(خاصة: ${tour.pricePrivateTourEgp} ج.م)` : `(خاصة: 3,500 ج.م)`)
                      : (tour.pricePrivateTourEur ? `(Private: €${tour.pricePrivateTourEur})` : '')}
                  </span>
                </div>
              </div>

              {/* Official Pricing List Table */}
              {((isAr && tour.pricingTiersEgp) || tour.pricingTiers) && (
                <div className="rounded-2xl border border-[#DCE8D8] bg-[#F7FAF5] p-4 space-y-2">
                  <div className="flex items-center justify-between border-b border-[#E5EFE2] pb-1.5">
                    <span className="text-xs font-black text-[#16241B] uppercase tracking-wider">
                      {isAr ? 'قائمة الأسعار المخصصة للمصريين' : 'Official Pricing List'}
                    </span>
                    <span className="text-[10px] font-bold text-[#0a515b] bg-[#0a515b]/10 px-2 py-0.5 rounded-full">
                      {isAr ? 'الجنيه المصري (EGP)' : 'Euro (€)'}
                    </span>
                  </div>
                  {(isAr && tour.pricingTiersEgp ? tour.pricingTiersEgp : tour.pricingTiers).map((tier, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#EAEFE6] last:border-none">
                      <span className="font-semibold text-[#2A3F30]">
                        {isAr ? tier.tierAr || tier.typeAr : tier.tierEn || tier.typeEn}
                      </span>
                      <span className="font-black text-[#1EAA13] font-mono">
                        {isAr ? `${tier.price} ${tier.unitAr ? `(${tier.unitAr})` : ''}` : `${tier.price} ${tier.unitEn ? `(${tier.unitEn})` : ''}`}
                      </span>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#6E8274] pt-1 italic">
                    * {isAr
                        ? (tour.pricingNoteAr || 'الأسعار خاصة بالمواطنين والمقيمين (يُرجى إبراز بطاقة الرقم القومي عند نقطة الانطلاق).')
                        : (tour.pricingNoteEn || 'Prices excluding hotel pickup and drop-off services.')}
                  </p>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-[#F0F6EE] border border-[#DEEADB] space-y-2 text-xs text-[#2A4432]">
                <div className="flex items-center gap-2 font-bold text-[#16241B]">
                  <Calendar className="w-4 h-4 text-[#21c715]" />
                  <span>{isAr ? 'مواعيد يومية مرنة' : 'Daily flexible departures'}</span>
                </div>
                <p>
                  {isAr
                    ? 'رحلات شروق الشمس (٠٦:٠٠ ص) أو جولات الغروب (٠٢:٣٠ م). حجز مسبق مؤكد.'
                    : 'Morning sunrise slots (06:00 AM) or sunset golden hour (02:30 PM).'}
                </p>
              </div>

              <button
                onClick={() => handleOpenBooking(isAr ? tour.titleAr : tour.title)}
                className="w-full py-4 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'احجز هذه الجولة الآن' : 'Book This Tour Now'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <div className="text-center">
                <button
                  onClick={() => setEgyptianRatesOpen(true)}
                  className="text-xs font-semibold text-[#18880e] hover:underline cursor-pointer"
                >
                  {isAr ? 'معرفة تفاصيل الخصم المصري والطلابي' : 'Check Egyptian & Student subsidized rates'}
                </button>
              </div>

              <div className="pt-4 border-t border-[#F0F4EC] space-y-2 text-xs text-[#5E7866]">
                <p>✓ {isAr ? 'إلغاء مجاني حتى 24 ساعة قبل الرحلة' : 'Free cancellation up to 24h before tour'}</p>
                <p>✓ {isAr ? 'قوارب مرخصة وسترات نجاة للأطفال والكبار' : 'Licensed boats and certified life vests'}</p>
                <p>✓ {isAr ? 'مرشد بيئي متخصص ومناظير ألمانية مجانية' : 'Naturalist guide with complimentary optics'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
