import React, { useState } from 'react';
import { X } from 'lucide-react';






export const Hero = ({ onExploreTours, currentLang = 'EN' }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="hero" className="hero">
      {/* Background Nile Boat & Flying Birds in Aswan Image */}
      <img
        className="hero-photo"
        src="/assets/hero-aswan-nile-2x.webp"
        alt="Nile boat tour and flying birds in Aswan"
        fetchPriority="high"
        style={{ objectPosition: '78% 30%' }} />
      
      <div className="hero-shade" />

      {/* Main Hero Content - exact typography, margins & structure */}
      <div className="hero-content container">
        <h1>
          {currentLang === 'AR' ?
          <>
              اكتشف الوجه<br />
              البري <span className="light-word">في</span><br />
              <span className="green-text">أسوان.</span>
            </> :

          <>
              Discover the<br />
              wild side <span className="light-word">of</span><br />
              <span className="green-text">Aswan.</span>
            </>
          }
        </h1>

        <h2>
          {currentLang === 'AR' ? 'ما وراء المعابد. في قلب الطبيعة.' : 'Beyond the temples. Into nature.'}
        </h2>

        <p>
          {currentLang === 'AR' ?
          'استكشف النيل واكتشف الطيور الساحرة واستمتع بجمال أسوان الطبيعي الخفي مع مرشدين محليين خبراء.' :
          'Explore the Nile, discover fascinating birds, and experience the hidden natural beauty of Aswan with expert local nature guides.'}
        </p>

        {/* Hero Action Buttons */}
        <div className="hero-buttons">
          <button onClick={onExploreTours} className="btn" type="button">
            <span>{currentLang === 'AR' ? 'استكشف جولاتنا' : 'Explore Our Tours'}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true">
              
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </button>

          <button className="story-btn" type="button" onClick={() => setVideoModalOpen(true)}>
            <span className="play-circle">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true">
                
                <path d="m9 5 11 7-11 7Z" />
              </svg>
            </span>
            <span>{currentLang === 'AR' ? 'شاهد قصتنا' : 'Watch Our Story'}</span>
          </button>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="hero-bottom container">
        <span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>{currentLang === 'AR' ? 'النيل. الطيور. أسوان أخرى.' : 'The Nile. The birds. A different Aswan.'}</span>
        </span>

        <a href="#booking-widget" className="scroll-note" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span>{currentLang === 'AR' ? 'مرر للأسفل للاستكشاف' : 'SCROLL TO EXPLORE'}</span>
          <span>↓</span>
        </a>

        <span className="image-note">
          {currentLang === 'AR' ? 'لحظة تستحق التمهل.' : 'A moment worth slowing down for.'}
        </span>
      </div>

      {/* Video Modal */}
      {videoModalOpen &&
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0F231A] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/40">
            
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
                className="ml-1 fill-current">
                
                  <path d="m9 5 11 7-11 7Z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                {currentLang === 'AR' ? 'قصة طبيعة أسوان' : 'The Aswan Nature Story'}
              </h3>
              <p className="text-sm sm:text-base text-[#C2D6C6] max-w-lg mx-auto leading-relaxed mb-6">
                {currentLang === 'AR' ?
              'رحلة بصرية تأخذكم بين جزر الشلال الأول وبحيرة خزان أسوان، لرصد أندر الطيور وحياة النيل الطبيعية التي لا يراها أغلب الزوار.' :
              'A visual documentary through the First Cataract Islands and Aswan Reservoir, discovering rare migrant birds and ancient wildlife sanctuaries.'}
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2BE019] font-bold bg-[#2BE019]/10 px-4 py-2 rounded-full border border-[#2BE019]/30">
                Official Video Documentary
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};