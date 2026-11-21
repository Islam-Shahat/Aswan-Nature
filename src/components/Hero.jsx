import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Hero = ({ onExploreTours, currentLang = 'EN' }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-[700px] h-[min(740px,calc(100svh-94px))] 2xl:h-[770px] bg-[#2c281a] text-white isolate overflow-hidden">
      {/* Background Nile Boat & Flying Birds in Aswan Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-30"
        src="/assets/hero-aswan-nile-2x.webp"
        alt="Nile boat tour and flying birds in Aswan"
        fetchPriority="high"
        style={{ objectPosition: '78% 30%' }}
      />
      
      {/* Dynamic atmospheric gradient shade */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0C1812]/90 via-[#0F180F]/70 to-[#10150C]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#09120C]/40 via-transparent to-transparent" />

      {/* Main Hero Content */}
      <div className="w-[min(1240px,calc(100%-40px))] sm:w-[min(1240px,calc(100%-80px))] lg:w-[min(1240px,calc(100%-112px))] mx-auto pt-24 sm:pt-28 lg:pt-32 2xl:pt-36">
        <h1 className="font-heading font-extrabold text-[clamp(44px,6.15vw,87px)] tracking-[-0.04em] leading-[1.04] mt-6 sm:mt-7 rtl:font-arabic rtl:text-[clamp(40px,5.5vw,70px)] rtl:leading-[1.25] rtl:tracking-tight">
          {currentLang === 'AR' ? (
            <>
              اكتشف الوجه<br />
              البري <span className="font-normal text-white/90">في</span><br />
              <span className="text-[#62ed2b]">أسوان.</span>
            </>
          ) : (
            <>
              Discover the<br />
              wild side <span className="font-normal text-white/90">of</span><br />
              <span className="text-[#62ed2b]">Aswan.</span>
            </>
          )}
        </h1>

        <h2 className="font-heading text-lg sm:text-xl lg:text-[21px] font-medium tracking-tight text-white/95 mt-5 sm:mt-6 leading-snug rtl:font-arabic rtl:tracking-normal">
          {currentLang === 'AR' ? 'ما وراء المعابد. في قلب الطبيعة.' : 'Beyond the temples. Into nature.'}
        </h2>

        <p className="text-xs sm:text-[13px] text-[#e2e4db] max-w-[370px] mt-3.5 leading-[1.85] rtl:leading-[2]">
          {currentLang === 'AR'
            ? 'استكشف النيل واكتشف الطيور الساحرة واستمتع بجمال أسوان الطبيعي الخفي مع مرشدين محليين خبراء.'
            : 'Explore the Nile, discover fascinating birds, and experience the hidden natural beauty of Aswan with expert local nature guides.'}
        </p>

        {/* Hero Action Buttons */}
        <div className="flex items-center gap-5 sm:gap-7 mt-7 sm:mt-8 rtl:gap-4">
          <button
            onClick={onExploreTours}
            className="inline-flex items-center justify-center gap-4 sm:gap-6 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#48e714] text-[#183015] hover:bg-[#39d50a] font-semibold text-xs sm:text-[13px] rounded-md leading-normal whitespace-nowrap min-h-[48px] sm:min-h-[50px] shadow-lg shadow-[#48e714]/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
            type="button"
          >
            <span>{currentLang === 'AR' ? 'استكشف جولاتنا' : 'Explore Our Tours'}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rtl:rotate-180 transition-transform"
              aria-hidden="true"
            >
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </button>

          <button
            className="inline-flex items-center gap-2.5 sm:gap-3 text-white hover:text-[#75ee43] text-xs sm:text-[13px] font-medium transition-colors group cursor-pointer"
            type="button"
            onClick={() => setVideoModalOpen(true)}
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[#75ee43] transition-all duration-200">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-0.5 fill-current"
                aria-hidden="true"
              >
                <path d="m9 5 11 7-11 7Z" />
              </svg>
            </span>
            <span>{currentLang === 'AR' ? 'شاهد قصتنا' : 'Watch Our Story'}</span>
          </button>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="absolute inset-x-0 bottom-8 sm:bottom-12 w-[min(1240px,calc(100%-40px))] sm:w-[min(1240px,calc(100%-80px))] lg:w-[min(1240px,calc(100%-112px))] mx-auto flex items-center justify-between text-[10px] text-[#e6e8dc]">
        <span className="inline-flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>{currentLang === 'AR' ? 'النيل. الطيور. أسوان أخرى.' : 'The Nile. The birds. A different Aswan.'}</span>
        </span>

        <a
          href="#booking-widget"
          className="hidden sm:inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#e6e8dc] hover:text-[#62ed2b] transition-colors"
        >
          <span>{currentLang === 'AR' ? 'مرر للأسفل للاستكشاف' : 'SCROLL TO EXPLORE'}</span>
          <span className="text-base leading-none">↓</span>
        </a>

        <span className="hidden sm:inline italic text-[#e6e8dc]/80">
          {currentLang === 'AR' ? 'لحظة تستحق التمهل.' : 'A moment worth slowing down for.'}
        </span>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0F231A] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/40 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 sm:p-12 text-center text-white">
              <div className="w-16 h-16 rounded-full bg-[#2BE019]/20 border border-[#2BE019] flex items-center justify-center mx-auto mb-6 text-[#2BE019]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 fill-current"
                >
                  <path d="m9 5 11 7-11 7Z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                {currentLang === 'AR' ? 'قصة طبيعة أسوان' : 'The Aswan Nature Story'}
              </h3>
              <p className="text-sm sm:text-base text-[#C2D6C6] max-w-lg mx-auto leading-relaxed mb-6">
                {currentLang === 'AR'
                  ? 'رحلة بصرية تأخذكم بين جزر الشلال الأول وبحيرة خزان أسوان، لرصد أندر الطيور وحياة النيل الطبيعية التي لا يراها أغلب الزوار.'
                  : 'A visual documentary through the First Cataract Islands and Aswan Reservoir, discovering rare migrant birds and ancient wildlife sanctuaries.'}
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2BE019] font-bold bg-[#2BE019]/10 px-4 py-2 rounded-full border border-[#2BE019]/30">
                Official Video Documentary
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
