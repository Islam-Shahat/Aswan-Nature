import React from 'react';

export const Hero = ({ onExploreTours, currentLang = 'EN' }) => {
  return (
    <section id="hero" className="relative min-h-screen h-[100dvh] bg-[#2c281a] text-white isolate overflow-hidden flex flex-col justify-between">
      {/* Background Nile Boat & Flying Birds in Aswan Image (mirrors dynamically based on language direction) */}
      <picture
        className={`absolute inset-0 w-full h-full -z-30 pointer-events-none select-none transition-transform duration-700 ease-in-out ${
          currentLang === 'AR' ? 'scale-x-[-1]' : 'scale-x-100'
        }`}
      >
        <source
          media="(max-width: 767px)"
          srcSet="/assets/hero-aswan-nile-mobile.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/hero-aswan-nile.webp 1280w, /assets/hero-aswan-nile-2x.webp 2560w"
          sizes="100vw"
          type="image/webp"
        />
        <img
          className="w-full h-full object-cover"
          src="/assets/hero-aswan-nile.webp"
          alt="Nile boat tour and flying birds in Aswan"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1280"
          height="714"
          style={{ objectPosition: '78% 30%' }}
        />
      </picture>
      
      {/* Dynamic atmospheric gradient shade matching reading direction */}
      <div
        className={`absolute inset-0 -z-20 transition-all duration-700 ${
          currentLang === 'AR'
            ? 'bg-gradient-to-l from-[#0C1812]/90 via-[#0F180F]/70 to-[#10150C]/10'
            : 'bg-gradient-to-r from-[#0C1812]/90 via-[#0F180F]/70 to-[#10150C]/10'
        }`}
      />

      {/* Top Spacer for floating header */}
      <div className="pt-24 sm:pt-28" />

      {/* Hero Typography & Primary CTA Section */}
      <div className="w-[min(1240px,calc(100%-40px))] sm:w-[min(1240px,calc(100%-80px))] lg:w-[min(1240px,calc(100%-112px))] mx-auto my-auto relative z-10">
        <h1 className="font-heading font-extrabold text-[clamp(44px,6.15vw,87px)] tracking-[-0.04em] leading-[1.04] mt-4 sm:mt-6 rtl:font-arabic rtl:text-[clamp(40px,5.5vw,70px)] rtl:leading-[1.25] rtl:tracking-tight">
          <span className="block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {currentLang === 'AR' ? 'اكتشف روعة' : 'Discover the'}
          </span>
          <span className="block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {currentLang === 'AR' ? 'الطبيعة البرية في' : 'wild side of'}
          </span>
          <span className="block text-[#2BE019] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {currentLang === 'AR' ? 'أسوان.' : 'Aswan.'}
          </span>
        </h1>

        <h2 className="font-heading text-lg sm:text-xl lg:text-[21px] font-medium tracking-tight text-white/95 mt-5 sm:mt-6 leading-snug rtl:font-arabic rtl:tracking-normal">
          {currentLang === 'AR' ? 'أبعد من المعابد. إلى قلب الطبيعة.' : 'Beyond the temples. Into nature.'}
        </h2>

        <p className="text-[#C5D8C8] text-sm sm:text-base max-w-lg mt-3 sm:mt-4 leading-relaxed font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] rtl:font-arabic">
          {currentLang === 'AR'
            ? 'أبحر في قنوات النيل العذراء، وتعرّف على أندر الطيور والبيئات الطبيعية الخفية بصحبة خبراء محليين.'
            : 'Explore the Nile, discover fascinating birds, and experience the hidden natural beauty of Aswan with expert local nature guides.'}
        </p>

        {/* Action Button: Explore Our Tours */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <button
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#1EAA13] hover:bg-[#18910F] text-white min-h-[48px] sm:min-h-[50px] shadow-[0_6px_25px_rgba(30,170,19,0.45)] hover:shadow-[0_8px_30px_rgba(30,170,19,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-extrabold text-sm sm:text-[15px] cursor-pointer"
            type="button"
            onClick={onExploreTours}
          >
            <span>{currentLang === 'AR' ? 'استكشف جولاتنا' : 'Explore Our Tours'}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rtl:rotate-180 transition-transform text-white"
              aria-hidden="true"
            >
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Bottom Padding Spacer */}
      <div className="w-[min(1240px,calc(100%-40px))] sm:w-[min(1240px,calc(100%-80px))] lg:w-[min(1240px,calc(100%-112px))] mx-auto pb-6 sm:pb-8 pt-4" />
    </section>
  );
};
