import React from 'react';
import { Clock, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';







export const ToursSection = ({
  onSelectTour,
  onExploreTourDetails,
  currentLang = 'EN'
}) => {
  const tours = [
  {
    id: 'nile-birds',
    badge: currentLang === 'AR' ? 'رصد الطيور بالقارب' : 'Birdwatching by boat',
    image: '/assets/kingfisher.webp',
    alt: 'Nile Birds Tour wildlife photography',
    eyebrow: currentLang === 'AR' ? 'النيل، عن قُرب' : 'THE NILE, A LITTLE CLOSER',
    title: currentLang === 'AR' ? 'جولة طيور النيل' : 'Nile Birds Tour',
    desc:
    currentLang === 'AR' ?
    'أبحر بين جزر الشلال الأول واكتشف الحياة الفطرية المذهلة على ضفاف النيل العظيم.' :
    'Drift between the First Cataract Islands and discover the extraordinary life along the Nile.',
    duration: currentLang === 'AR' ? '٣ ساعات*' : '3 hours*',
    location: currentLang === 'AR' ? 'جزر الشلال الأول' : 'First Cataract Islands'
  },
  {
    id: 'aswan-reservoir',
    badge: currentLang === 'AR' ? 'رصد الطيور بالقارب' : 'Birdwatching by boat',
    image: '/assets/stork.webp',
    alt: 'Aswan Reservoir Birds Tour wildlife photography',
    eyebrow: currentLang === 'AR' ? 'ملاذ آمن للحياة البرية' : 'A HAVEN FOR WILDLIFE',
    title: currentLang === 'AR' ? 'جولة طيور خزان أسوان' : 'Aswan Reservoir Birds Tour',
    desc:
    currentLang === 'AR' ?
    'استكشف المياه الهادئة بين السد العالي وخزان أسوان القديم في منطقة دولية بالغة الأهمية للطيور.' :
    'Explore the quiet waters between the Old and High Dam, in an internationally important bird area.',
    duration: currentLang === 'AR' ? '٣ ساعات*' : '3 hours*',
    location: currentLang === 'AR' ? 'خزان أسوان' : 'Aswan Reservoir'
  },
  {
    id: 'special-birding',
    badge: currentLang === 'AR' ? 'تجربة مخصصة' : 'Tailored experience',
    image: '/assets/goose.webp',
    alt: 'Special Birding Tours wildlife photography',
    eyebrow: currentLang === 'AR' ? 'وقت أطول. اكتشاف أعمق.' : 'MORE TIME. MORE DISCOVERY.',
    title: currentLang === 'AR' ? 'جولات رصد الطيور الخاصة' : 'Special Birding Tours',
    desc:
    currentLang === 'AR' ?
    'ملاذ ممتد في الطبيعة يشمل رصد الطيور ووجبة نوبية شهية وأنشطة بيئية وتوثيقية مخصصة.' :
    'A longer escape into nature, with birdwatching, a meal and a special nature-related activity.',
    duration: currentLang === 'AR' ? '٦ ساعات' : '6 hours',
    location: currentLang === 'AR' ? 'النيل أو خزان أسوان' : 'Nile or Aswan Reservoir'
  }];


  return (
    <section id="tours" className="py-20 lg:py-28 bg-[#F3F6EE] border-t border-[#E7ECE0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header matching Figma experiences section-heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#637568] font-bold block mb-3">
              {currentLang === 'AR' ? 'اختر نوع مغامرتك' : 'FIND YOUR KIND OF ADVENTURE'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#16241B] font-heading">
              {currentLang === 'AR' ? 'استثنائية، بطبيعتها.' : 'Extraordinary, by nature.'}
            </h2>
          </div>

          <a
            href="#tours"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1A261E] hover:text-[#2BE019] transition-colors">
            
            <span>{currentLang === 'AR' ? 'عرض جميع الجولات' : 'View All Tours'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Tour Cards matching Figma tour-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) =>
          <div
            key={tour.id}
            onClick={() => {
              if (onExploreTourDetails) {
                onExploreTourDetails(tour.id);
              } else {
                onSelectTour(tour.title);
              }
            }}
            className="group bg-white rounded-2xl overflow-hidden border border-[#E4EAE0] shadow-[0_4px_24px_-6px_rgba(20,40,25,0.06)] hover:shadow-[0_16px_40px_-10px_rgba(20,40,25,0.14)] hover:border-[#2BE019]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            
              <div>
                {/* Tour Card Image with Badges */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
                  <img
                  src={tour.image}
                  alt={tour.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-[#1A261E] shadow-sm">
                    {tour.badge}
                  </div>
                  {/* Floating Action Arrow */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-[#16241B] flex items-center justify-center shadow-md group-hover:bg-[#2BE019] group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Tour Content */}
                <div className="p-7">
                  <span className="text-[11px] uppercase tracking-wider text-[#758679] font-bold block mb-2">
                    {tour.eyebrow}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#16241B] mb-3 group-hover:text-[#184626] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-[#55675A] leading-relaxed mb-6">
                    {tour.desc}
                  </p>

                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-xs text-[#637568] pt-4 border-t border-[#EEF2EA]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8A9B8F]" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8A9B8F]" />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTA matching Figma */}
              <div className="px-7 py-5 bg-[#FAFCF8] border-t border-[#E8EDE3] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#16241B]">
                    {currentLang === 'AR' ? 'طلب السعر' : 'Request price'}
                  </div>
                  <div className="text-[11px] text-[#7A8C7F]">
                    {currentLang === 'AR' ? 'أسعار خاصة للمصريين' : 'Special Egyptian rates available'}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#16241B] group-hover:text-[#2BE019] transition-colors">
                  <span>{currentLang === 'AR' ? 'استكشف الجولة' : 'Explore Tour'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};