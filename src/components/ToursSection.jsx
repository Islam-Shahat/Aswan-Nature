import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

export const ToursSection = ({
  onSelectTour,
  onExploreTourDetails,
  currentLang = 'EN'
}) => {
  const isAr = currentLang === 'AR';
  const navigate = useNavigate();
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
      title: isAr ? 'جولة رصد طيور النيل' : 'Nile Birdwatching Tour',
      desc: isAr
        ? 'رحلة استرخاء بالقارب لاكتشاف الطيور البديعة في نيل أسوان والموائل الطبيعية حول الشلال الأول.'
        : 'Discover the beautiful birds of the Nile on a relaxing boat trip through Aswan scenic river landscapes.',
      highlight: isAr
        ? 'رصد وتصوير الطيور المقيمة والمهاجرة بين جزر الشلال الأول وأحواض القصب.'
        : 'Observe and photograph resident & migratory birds around the First Cataract islands.',
      duration: isAr ? 'ساعتان' : '2 hours',
      location: isAr ? 'نهر النيل — كورنيش النيل' : 'Nile River – Corniche',
      priceLabel: isAr ? 'تبدأ من 1,200 ج.م للشخص' : 'From €55 / person',
      priceDetail: isAr ? 'خاصة: 3,500 ج.م (١-٣ أفراد)' : 'Private: €230 (1–3 pers)'
    },
    {
      id: 'aswan-reservoir',
      image: '/assets/stork.webp',
      alt: 'Aswan Reservoir Birds Tour wildlife photography',
      eyebrow: isAr ? 'ملاذ آمن للحياة البرية' : 'A HAVEN FOR WILDLIFE',
      title: isAr ? 'جولة رصد طيور خزان أسوان' : 'Reservoir Birdwatching Tour',
      desc: isAr
        ? 'استمتع بمياه خزان أسوان الهادئة واكتشف تنوع الطيور النادرة والبيئة المائية العذراء.'
        : 'Enjoy a boat trip through the peaceful waters between the High Dam and Old Aswan Dam.',
      highlight: isAr
        ? 'أهدأ بقعة على النيل؛ ملاذ دولي لأندر الطيور المهاجرة والجوارح بدون صخب سياحي.'
        : 'Diverse birdlife, important habitats, and peaceful landscapes between the two dams.',
      duration: isAr ? 'ساعتان' : '2 hours',
      location: isAr ? 'خزان أسوان — مرسى الخزان' : 'Aswan Reservoir Marina',
      priceLabel: isAr ? 'تبدأ من 1,200 ج.م للشخص' : 'From €55 / person',
      priceDetail: isAr ? 'خاصة: 3,500 ج.م (١-٣ أفراد)' : 'Private: €230 (1–3 pers)'
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
      location: isAr ? 'النيل أو خزان أسوان' : 'Nile or Aswan Reservoir',
      priceLabel: isAr ? 'طلب السعر' : 'Request price',
      priceDetail: isAr ? 'أسعار خاصة للمصريين' : 'Special Egyptian rates'
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

              let newId = centerId;
              if (progress < 1 / 3) {
                newId = centerId;
              } else if (progress < 2 / 3) {
                newId = rightId;
              } else {
                newId = leftId;
              }
              setFocusedId((prev) => (prev !== newId ? newId : prev));
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
      className="relative md:h-[180vh] bg-[#F3F6EE] border-t border-[#E7ECE0] py-14 md:py-0"
    >
      {/* On desktop: Pinned Sticky Stage. On mobile: Natural fluid flow */}
      <div className="md:sticky md:top-0 md:min-h-screen md:h-[100dvh] flex flex-col justify-center overflow-visible md:overflow-hidden py-0 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Header with Nile Teal Gradient Divider (Matches Gallery style) */}
          <div className="w-full flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-8 overflow-hidden">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#0a515b]/50 to-[#0a515b]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a515b] shrink-0 hidden sm:block" />
            <h2 className="px-3 sm:px-6 text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#16241B] shrink-0 text-center font-heading">
              {isAr ? 'جولاتنا' : 'Our Tours'}
            </h2>
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a515b] shrink-0 hidden sm:block" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0a515b] via-[#0a515b]/50 to-transparent" />
          </div>

          {/* 3 Tour Cards - Scroll focus sequence on desktop, accessible stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch md:items-center">
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
                      ? 'md:scale-[1.03] lg:scale-[1.05] z-30 border-2 border-[#0a515b] shadow-[0_25px_60px_-15px_rgba(10,81,91,0.22),0_10px_25px_rgba(0,0,0,0.06)]'
                      : 'md:scale-[0.98] z-10 md:opacity-75 hover:opacity-100 hover:scale-[1.01] md:hover:scale-[0.99] border border-[#E0E6DA] shadow-sm'
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
                      <div className="text-xs sm:text-sm font-black text-[#16241B]">
                        {tour.priceLabel || (isAr ? 'طلب السعر' : 'Request price')}
                      </div>
                      <div className="text-[10.5px] font-semibold text-[#5A7361]">
                        {tour.priceDetail || (isAr ? 'أسعار خاصة للمصريين' : 'Special Egyptian rates')}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/tours');
                      }}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isFocused
                          ? 'bg-[#1EAA13] hover:bg-[#18910f] text-white shadow-xs hover:scale-105 active:scale-95'
                          : 'text-[#16241B] group-hover:text-[#0a515b]'
                      }`}
                    >
                      <span>{isAr ? 'المزيد' : 'See More'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 rtl:rotate-180 ${isFocused ? 'text-white' : ''}`} />
                    </button>
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
