import React from 'react';
import { ArrowRight } from 'lucide-react';







export const CtaBanner = ({
  onBookClick,
  onExploreClick,
  currentLang = 'EN'
}) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#E1EBD9] overflow-hidden">
      {/* Decorative Bird Watermark Vector in Background matching Figma */}
      <div className="absolute right-6 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none opacity-15 text-[#256636]">
        <svg
          viewBox="0 0 24 24"
          className="w-64 h-64 lg:w-96 lg:h-96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          
          <path d="M3 17c5-1 7-4 8-8 1-4 4-5 6-3l4 1-4 2c0 5-4 10-10 10H3l4-4M10 12C6 12 3 8 2 4c6 1 10 4 11 7"></path>
          <circle cx="16" cy="6.5" r=".5" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Official Brand Logo */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <img
            src="/assets/logo-official.png"
            alt="Aswan Nature Logo"
            className="w-16 h-16 object-contain drop-shadow-md" />
          
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#4F6854] font-bold block mb-4">
          {currentLang === 'AR' ? 'أطلق العنان لشغفك' : 'FOLLOW YOUR CURIOSITY'}
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#142318] mb-6 font-heading">
          {currentLang === 'AR' ?
          <>
              مغامرتك القادمة في أحضان الطبيعة<br />تبدأ هنا في أسوان.
            </> :

          <>
              Your next nature adventure<br />starts in Aswan.
            </>
          }
        </h2>

        <p className="text-base sm:text-lg text-[#445A4A] max-w-2xl mx-auto mb-10 leading-relaxed">
          {currentLang === 'AR' ?
          'استكشف النيل، ورصد أروع الطيور، وجرّب سحر أسوان من زاوية بصرية وبيئية لم تعهدها من قبل.' :
          'Explore the Nile, discover incredible birds, and experience Aswan from a completely different perspective.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="group flex items-center gap-2.5 bg-[#1EAA13] hover:bg-[#18930F] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-[#1EAA13]/25 transition-all duration-200 active:scale-[0.98] cursor-pointer">
            
            <span>{currentLang === 'AR' ? 'احجز رحلتك' : 'Book Your Trip'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreClick}
            className="group flex items-center gap-2.5 bg-white/70 hover:bg-white text-[#15251A] border border-[#CBD8C4] font-bold text-sm sm:text-base px-7 py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow">
            
            <span>{currentLang === 'AR' ? 'استكشف الجولات' : 'Explore Tours'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>);

};