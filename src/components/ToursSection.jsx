import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

export const ToursSection = ({
  onSelectTour,
  onExploreTourDetails,
  currentLang = 'EN'
}) => {
  const isAr = currentLang === 'AR';
  const sectionRef = useRef(null);

  // Cards layout in DOM:
  // LTR: [0] = Left (nile-birds), [1] = Center (aswan-reservoir), [2] = Right (special-birding)
  // RTL: [0] = Right (nile-birds), [1] = Center (aswan-reservoir), [2] = Left (special-birding)
  const centerId = 'aswan-reservoir';
  const rightId = isAr ? 'nile-birds' : 'special-birding';
  const leftId = isAr ? 'special-birding' : 'nile-birds';

  // Focused card ID: starts with center
  const [focusedId, setFocusedId] = useState('aswan-reservoir');

  const tours = [
    {
      id: 'nile-birds',
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

  // Scroll sequence with equal, balanced duration:
  // 1. Center card: 0.00 to 0.333
  // 2. Right card:  0.333 to 0.666
  // 3. Left card:   0.666 to 1.00
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

              if (progress < 1 / 3) {
                setFocusedId(centerId);
              } else if (progress < 2 / 3) {
                setFocusedId(rightId);
              } else {
                setFocusedId(leftId);
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
  }, [centerId, rightId, leftId]);

  return (
    <section
      id="tours"
      ref={sectionRef}
      className="relative h-[180vh] bg-[#F3F6EE] border-t border-[#E7ECE0]"
    >
      {/* Pinned Sticky Stage - Stays locked in viewport while scrolling through the 3 cards */}
      <div className="sticky top-0 min-h-screen h-[100dvh] flex flex-col justify-center overflow-hidden py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#0a515b] font-bold block mb-2">
                {isAr ? 'اختر نوع مغامرتك' : 'FIND YOUR KIND OF ADVENTURE'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-[-0.03em] leading-tight text-[#16241B] font-heading">
                {isAr ? 'استثنائية، بطبيعتها.' : 'Extraordinary, by nature.'}
              </h2>
            </div>
          </div>

          {/* 3 Tour Cards - Smooth focus sequence (Center -> Right -> Left) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-center">
            {tours.map((tour) => {
              const isFocused = focusedId === tour.id;

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
                  className={`group relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 ease-out flex flex-col justify-between ${
                    isFocused
                      ? 'scale-[1.03] lg:scale-[1.05] z-30 border-2 border-[#0a515b] shadow-[0_25px_60px_-15px_rgba(10,81,91,0.22),0_10px_25px_rgba(0,0,0,0.06)]'
                      : 'scale-[0.98] z-10 opacity-75 hover:opacity-95 hover:scale-[0.99] border border-[#E0E6DA] shadow-xs'
                  }`}
                >
                  <div>
                    {/* Clean Tour Image without oval pills */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                      <img
                        src={tour.image}
                        alt={tour.alt}
                        loading="lazy"
                        className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                          isFocused ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                      />

                      {/* Subtle Vignette Gradient for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Action Arrow */}
                      <div
                        className={`absolute bottom-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isFocused
                            ? 'bg-[#2BE019] text-[#0A1810] shadow-md scale-110'
                            : 'bg-white/90 text-[#16241B] shadow-xs group-hover:bg-[#2BE019]'
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
                        className={`text-lg sm:text-xl font-extrabold mb-2.5 transition-colors duration-500 ${
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
                        className={`overflow-hidden transition-all duration-300 ease-in-out rounded-xl ${
                          isFocused
                            ? 'max-h-24 opacity-100 p-3 mb-4 bg-[#EAF2E8] border border-[#CDE0CB]'
                            : 'max-h-0 opacity-0 p-0 mb-0 pointer-events-none'
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
                    className={`px-5 sm:px-6 py-4 border-t transition-colors duration-500 flex items-center justify-between ${
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
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
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
