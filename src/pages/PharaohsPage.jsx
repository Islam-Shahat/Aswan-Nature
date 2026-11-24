import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Feather, ArrowRight } from 'lucide-react';
import { PharaohsSection } from '../components/PharaohsSection';

export const PharaohsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-[#F8FAF5] min-h-screen">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16241B]/5 border border-[#16241B]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#16241B] mb-4">
            <Feather className="w-3.5 h-3.5 text-[#21c715]" />
            <span>{isAr ? 'رحلة عبر ٥٠٠٠ عام من التوثيق البيئي' : '5,000 YEARS OF AVIAN HERITAGE'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16241B] mb-6">
            {isAr ? 'طيور الفراعنة حيّة.' : 'Pharaohs Birds Alive.'}
          </h1>

          <p className="text-lg text-[#526D59] leading-relaxed mb-8">
            {isAr
              ? 'لم تكن الطيور عند قدماء المصريين مجرد كائنات عابرة، بل كانت رموزاً للخلود، والخصوبة، وقداسة النيل. استكشف كيف تنبض نفس الطيور المنقوشة على جدران المعابد بالحياة أمام عينيك اليوم في سماء أسوان.'
              : 'To the ancient Egyptians, birds were celestial messengers and divine hieroglyphs of eternity. Discover how the identical species carved on temple walls thousands of years ago thrive right before your eyes in Aswan today.'}
          </p>

          <button
            onClick={() => handleOpenBooking('Pharaohs Birds Alive Signature')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white font-bold text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <span>{isAr ? 'احجز تجربة طيور الفراعنة الحصرية' : 'Book Signature Pharaohs Experience'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>

      {/* Exhibits section from original component */}
      <PharaohsSection
        onDiscoverClick={() => handleOpenBooking('Pharaohs Birds Alive Signature')}
        currentLang={currentLang}
      />
    </div>
  );
};
