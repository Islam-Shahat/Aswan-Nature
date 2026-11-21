import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';






export const LearningCampsSection = ({
  onExploreCamps,
  currentLang = 'EN'
}) => {
  return (
    <section id="camps" className="py-12 lg:py-20 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#EEF4EB] rounded-3xl overflow-hidden border border-[#E3EBE0] shadow-[0_12px_40px_-10px_rgba(20,40,25,0.06)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Image with caption matching Figma camp-image */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px] overflow-hidden group">
            <img
              src="/assets/kingfisher.webp"
              alt="Kingfisher from the Aswan Nature company collection"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            {/* Caption matching Figma .image-caption */}
            <div className="absolute bottom-6 left-6 text-white text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">
              {currentLang === 'AR' ?
              'يبدأ الشغف بنظرة تأمل أقرب' :
              'CURIOSITY STARTS WITH A CLOSER LOOK'}
            </div>
          </div>

          {/* Right Column: Copy & CTA matching Figma camp-copy */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-[#268E1B]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#556F5C] font-bold">
                {currentLang === 'AR' ?
                'مستكشفون صغار. اكتشافات كبرى.' :
                'SMALL EXPLORERS. BIG DISCOVERIES.'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#16241B] mb-5 font-heading">
              {currentLang === 'AR' ?
              <>
                  التعلّم<br />من خلال الطبيعة.
                </> :

              <>
                  Learning<br />through nature.
                </>
              }
            </h2>

            <p className="text-base sm:text-lg text-[#556B5C] leading-relaxed mb-8 max-w-md">
              {currentLang === 'AR' ?
              'امنح الأطفال فرصة فريدة لاكتشاف الطبيعة ورصد الطيور والحياة البرية والتعلم من خلال تجارب خارجية حقيقية تلهم خيالهم.' :
              'Give children the opportunity to discover nature, explore wildlife, and learn through real outdoor experiences.'}
            </p>

            <div>
              <button
                onClick={onExploreCamps}
                className="group inline-flex items-center gap-3 bg-[#2BE019] hover:bg-[#25C715] text-[#0A1810] font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]">
                
                <span>
                  {currentLang === 'AR' ? 'استكشف معسكرات التعلم' : 'Explore Learning Camps'}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};