import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, ArrowRight, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

export const ToursSection = ({
  onSelectTour,
  onExploreTourDetails,
  currentLang = 'EN'
}) => {
  const isAr = currentLang === 'AR';
  const sectionRef = useRef(null);

  // 1 = Center (aswan-reservoir), 2 = Right (special-birding), 0 = Left (nile-birds)
  const [focusedIndex, setFocusedIndex] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tours = [
    {
      id: 'nile-birds',
      order: 0,
      position: isAr ? 'اليسار' : 'Left',
      badge: isAr ? 'رصد الطيور بالقارب' : 'Birdwatching by boat',
      image: '/assets/kingfisher.webp',
      alt: 'Nile Birds Tour wildlife photography',
      eyebrow: isAr ? 'النيل، عن قُرب' : 'THE NILE, A LITTLE CLOSER',
      title: isAr ? 'جولة طيور النيل' : 'Nile Birds Tour',
      desc: isAr
        ? 'أبحر بين جزر الشلال الأول واكتشف الحياة الفطرية المذهلة على ضفاف النيل العظيم.'
        : 'Drift between the First Cataract Islands and discover the extraordinary life along the Nile.',
      highlight: isAr
        ? 'رصد طائر الرفراف الأبقع، صياد السمك، والبلشون الصغير بين صخور الجرانيت التاريخية.'
        : 'Close encounters with Pied Kingfishers, Little Egrets, and Cormorants along ancient granite channels.',
      duration: isAr ? '٣ ساعات*' : '3 hours*',
      location: isAr ? 'جزر الشلال الأول' : 'First Cataract Islands'
    },
    {
      id: 'aswan-reservoir',
      order: 1,
      position: isAr ? 'الوسط' : 'Center',
      badge: isAr ? 'رصد الطيور بالقارب' : 'Birdwatching by boat',
      image: '/assets/stork.webp',
      alt: 'Aswan Reservoir Birds Tour wildlife photography',
      eyebrow: isAr ? 'ملاذ آمن للحياة البرية' : 'A HAVEN FOR WILDLIFE',
      title: isAr ? 'جولة طيور خزان أسوان' : 'Aswan Reservoir Birds Tour',
      desc: isAr
        ? 'استكشف المياه الهادئة بين السد العالي وخزان أسوان القديم في منطقة دولية بالغة الأهمية للطيور.'
        : 'Explore the quiet waters between the Old and High Dam, in an internationally important bird area.',
      highlight: isAr
        ? 'أهدأ بقعة على النيل؛ ملاذ دولي لأندر الطيور المهاجرة في محمية مائية خالية من الضوضاء.'
        : 'The quietest waters on the Nile, shelter to rare winter migrants in an internationally recognized wetland.',
      duration: isAr ? '٣ ساعات*' : '3 hours*',
      location: isAr ? 'خزان أسوان' : 'Aswan Reservoir'
    },
    {
      id: 'special-birding',
      order: 2,
      position: isAr ? 'اليمين' : 'Right',
      badge: isAr ? 'تجربة مخصصة' : 'Tailored experience',
      image: '/assets/goose.webp',
      alt: 'Special Birding Tours wildlife photography',
      eyebrow: isAr ? 'وقت أطول. اكتشاف أعمق.' : 'MORE TIME. MORE DISCOVERY.',
      title: isAr ? 'جولات رصد الطيور الخاصة' : 'Special Birding Tours',
      desc: isAr
        ? 'ملاذ ممتد في الطبيعة يشمل رصد الطيور ووجبة نوبية شهية وأنشطة بيئية وتوثيقية مخصصة.'
        : 'A longer escape into nature, with birdwatching, a meal and a special nature-related activity.',
      highlight: isAr
        ? 'رحلة استكشاف مخصصة VIP مع وجبة نوبية طازجة، مناظير متطورة، وجلسة تصوير وثائقية.'
        : 'Bespoke VIP journey with authentic fresh Nubian meal, high-powered spotting scopes, and field photo sessions.',
      duration: isAr ? '٦ ساعات' : '6 hours',
      location: isAr ? 'النيل أو خزان أسوان' : 'Nile or Aswan Reservoir'
    }
  ];

  // Scroll sequence: 1. Center (index 1) -> 2. Right (index 2) -> 3. Left (index 0)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const totalScrollable = rect.height - window.innerHeight;

            if (totalScrollable > 0) {
              const currentScroll = -rect.top;
              const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
              setScrollProgress(progress);

              // 1. Center Card (Middle) first: 0% to 35%
              // 2. Right Card second: 35% to 70%
              // 3. Left Card third: 70% to 100%
              if (progress < 0.35) {
                setFocusedIndex(1); // Middle
              } else if (progress < 0.70) {
                setFocusedIndex(2); // Right
              } else {
                setFocusedIndex(0); // Left
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpToPhase = (phaseIndex) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    const progressMap = { 1: 0.15, 2: 0.50, 0: 0.85 };
    const targetProgress = progressMap[phaseIndex] ?? 0.15;
    const targetScrollY = window.scrollY + rect.top + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="tours"
      ref={sectionRef}
      className="relative h-[270vh] bg-[#F3F6EE] border-t border-[#E7ECE0]"
    >
      {/* Pinned Sticky Stage - Stays locked in viewport while scrolling through the 3 cards */}
      <div className="sticky top-0 min-h-screen h-[100dvh] flex flex-col justify-center overflow-hidden py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0a515b] font-bold mb-2">
                <Compass className="w-3.5 h-3.5 text-[#0a515b]" />
                <span>{isAr ? 'اختر نوع مغامرتك' : 'FIND YOUR KIND OF ADVENTURE'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-[-0.03em] leading-tight text-[#16241B] font-heading">
                {isAr ? 'استثنائية، بطبيعتها.' : 'Extraordinary, by nature.'}
              </h2>
            </div>

            {/* Interactive Spotlight Step Indicators */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#Dce5d8] shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#637568] hidden sm:inline">
                {isAr ? 'التركيز التفاعلي:' : 'Spotlight:'}
              </span>

              {/* Step 1: Center */}
              <button
                onClick={() => jumpToPhase(1)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  focusedIndex === 1
                    ? 'bg-[#0a515b] text-white shadow-xs scale-105'
                    : 'text-[#506354] hover:text-[#16241B]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${focusedIndex === 1 ? 'bg-[#2BE019]' : 'bg-[#98ABA0]'}`} />
                <span>{isAr ? '١. الوسط' : '1. Center'}</span>
              </button>

              {/* Step 2: Right */}
              <button
                onClick={() => jumpToPhase(2)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  focusedIndex === 2
                    ? 'bg-[#0a515b] text-white shadow-xs scale-105'
                    : 'text-[#506354] hover:text-[#16241B]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${focusedIndex === 2 ? 'bg-[#2BE019]' : 'bg-[#98ABA0]'}`} />
                <span>{isAr ? '٢. اليمين' : '2. Right'}</span>
              </button>

              {/* Step 3: Left */}
              <button
                onClick={() => jumpToPhase(0)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  focusedIndex === 0
                    ? 'bg-[#0a515b] text-white shadow-xs scale-105'
                    : 'text-[#506354] hover:text-[#16241B]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${focusedIndex === 0 ? 'bg-[#2BE019]' : 'bg-[#98ABA0]'}`} />
                <span>{isAr ? '٣. اليسار' : '3. Left'}</span>
              </button>
            </div>
          </div>

          {/* 3 Tour Cards - Focused Card Scales Up & Reveals Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-center">
            {tours.map((tour) => {
              const isFocused = focusedIndex === tour.order;

              return (
                <div
                  key={tour.id}
                  onClick={() => {
                    if (onExploreTourDetails) {
                      onExploreTourDetails(tour.id);
                    } else {
                      onSelectTour(tour.title);
                    }
                  }}
                  className={`group relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between ${
                    isFocused
                      ? 'scale-[1.03] lg:scale-[1.05] z-30 border-2 border-[#0a515b] shadow-[0_30px_70px_-15px_rgba(10,81,91,0.28),0_10px_30px_rgba(0,0,0,0.08)]'
                      : 'scale-[0.97] z-10 opacity-70 lg:opacity-60 hover:opacity-90 hover:scale-[0.99] border border-[#E0E6DA] shadow-sm'
                  }`}
                >
                  {/* Glowing Top Accent on Focused Card */}
                  {isFocused && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0a515b] via-[#2BE019] to-[#0a515b] z-20" />
                  )}

                  <div>
                    {/* Tour Card Image with Dynamic Badges */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                      <img
                        src={tour.image}
                        alt={tour.alt}
                        loading="lazy"
                        className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                          isFocused ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                      />

                      {/* Dark overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Category Pill */}
                      <div className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1A261E] shadow-sm">
                        {tour.badge}
                      </div>

                      {/* Spotlight Focus Badge */}
                      {isFocused && (
                        <div className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-10 bg-[#2BE019] text-[#0A1810] px-3 py-1 rounded-full text-[11px] font-extrabold shadow-md flex items-center gap-1 animate-in fade-in zoom-in-95 duration-300">
                          <Sparkles className="w-3 h-3 text-[#0A1810]" />
                          <span>{isAr ? 'التركيز الحالي' : 'Spotlight'}</span>
                        </div>
                      )}

                      {/* Floating Action Arrow */}
                      <div
                        className={`absolute bottom-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isFocused
                            ? 'bg-[#2BE019] text-[#0A1810] shadow-md scale-110'
                            : 'bg-white/90 text-[#16241B] shadow-sm group-hover:bg-[#2BE019]'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Tour Content */}
                    <div className="p-5 sm:p-6">
                      <span className="text-[11px] uppercase tracking-wider text-[#758679] font-bold block mb-1.5">
                        {tour.eyebrow}
                      </span>

                      <h3
                        className={`text-lg sm:text-xl font-extrabold mb-2.5 transition-colors ${
                          isFocused ? 'text-[#0a515b]' : 'text-[#16241B] group-hover:text-[#0a515b]'
                        }`}
                      >
                        {tour.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-[#55675A] leading-relaxed mb-4">
                        {tour.desc}
                      </p>

                      {/* Expanded Highlight Detail in Focused State */}
                      <div
                        className={`overflow-hidden transition-all duration-500 rounded-xl ${
                          isFocused
                            ? 'max-h-28 opacity-100 p-3 mb-4 bg-[#EAF2E8] border border-[#CDE0CB]'
                            : 'max-h-0 opacity-0 p-0 mb-0'
                        }`}
                      >
                        <div className="flex items-start gap-2 text-xs font-semibold text-[#184627] leading-snug">
                          <span className="text-[#2BE019] text-base leading-none">✦</span>
                          <span>{tour.highlight}</span>
                        </div>
                      </div>

                      {/* Meta Details */}
                      <div className="flex items-center gap-4 text-xs text-[#637568] pt-3 border-t border-[#EEF2EA]">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#0a515b]" />
                          <span className="font-medium">{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#0a515b]" />
                          <span className="font-medium">{tour.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Price & CTA */}
                  <div
                    className={`px-5 sm:px-6 py-4 border-t transition-colors flex items-center justify-between ${
                      isFocused ? 'bg-[#F2F7F0] border-[#DCE8D8]' : 'bg-[#FAFCF8] border-[#E8EDE3]'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#16241B]">
                        {isAr ? 'طلب السعر' : 'Request price'}
                      </div>
                      <div className="text-[10.5px] text-[#7A8C7F]">
                        {isAr ? 'أسعار خاصة للمصريين' : 'Special Egyptian rates'}
                      </div>
                    </div>

                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                        isFocused
                          ? 'bg-[#2BE019] text-[#0A1810] shadow-xs'
                          : 'text-[#16241B] group-hover:text-[#0a515b]'
                      }`}
                    >
                      <span>{isAr ? 'استكشف الجولة' : 'Explore Tour'}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
