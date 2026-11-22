import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, ArrowRight, Sun, Glasses, ChevronDown } from 'lucide-react';

export const QuickBooking = ({
  onCheckAvailability,
  onOpenEgyptianRates,
  currentLang = 'EN'
}) => {
  const [experience, setExperience] = useState('all');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');

  const containerRef = useRef(null);
  const beamRef1 = useRef(null);
  const beamRef2 = useRef(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  // Measure card dimensions for pixel-perfect SVG border beam
  useEffect(() => {
    if (!containerRef.current) return;
    const updateDims = () => {
      if (containerRef.current) {
        setDims({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDims();
    const observer = new ResizeObserver(updateDims);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Track scroll position to drive traveling border beam along the perimeter
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Total distance from when the card enters bottom of viewport until it leaves top
            const totalDistance = windowHeight + rect.height;
            const currentPosition = windowHeight - rect.top;
            const progress = Math.min(Math.max(currentPosition / totalDistance, 0), 1);
            
            // Slower, elegant travel speed so the eye tracks the beam effortlessly
            const loops = 1.0;
            const offsetVal = -(progress * loops * 100);
            if (beamRef1.current) beamRef1.current.style.strokeDashoffset = offsetVal;
            if (beamRef2.current) beamRef2.current.style.strokeDashoffset = offsetVal;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const expLabels = {
      all: 'Where will nature take you?',
      'nile-birds': 'Nile Birds Tour',
      'reservoir-birds': 'Aswan Reservoir Birds Tour',
      'special-birding': 'Special Birding Tours',
      camp: 'Learning Camp'
    };
    onCheckAvailability({
      experience: expLabels[experience] || experience,
      date,
      guests: `${guests} ${guests === '1' ? 'guest' : 'guests'}`
    });
  };

  // Today's ISO date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div id="booking-widget" className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 -mt-10 lg:-mt-14 mb-16">
      {/* Floating Card with Scroll-Driven Traveling Border Beam */}
      <div
        ref={containerRef}
        className="relative bg-white rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_-12px_rgba(20,40,25,0.15)] p-4 lg:p-6 transition-all"
      >
        {/* Scroll-Driven Traveling Border Beam SVG */}
        {dims.width > 0 && dims.height > 0 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl lg:rounded-3xl overflow-visible z-10"
            style={{ width: dims.width, height: dims.height }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Luminous Glowing Nile Beam Gradient with Emerald & Turquoise Accents */}
              <linearGradient id="booking-beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a515b" stopOpacity="0.1" />
                <stop offset="35%" stopColor="#0a515b" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#00c8d7" stopOpacity="1" />
                <stop offset="100%" stopColor="#2BE019" stopOpacity="1" />
              </linearGradient>

              {/* Radiant Multi-Stage Aura Glow Filter */}
              <filter id="booking-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur1" />
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base subtle perimeter border */}
            <rect
              x="1.5"
              y="1.5"
              width={Math.max(0, dims.width - 3)}
              height={Math.max(0, dims.height - 3)}
              rx={22}
              fill="none"
              stroke="#E2E8DC"
              strokeWidth="1.5"
            />

            {/* Radiant Ambient Aura Glow Beam */}
            <rect
              ref={beamRef1}
              x="1.5"
              y="1.5"
              width={Math.max(0, dims.width - 3)}
              height={Math.max(0, dims.height - 3)}
              rx={22}
              fill="none"
              stroke="#0a515b"
              strokeWidth="8"
              opacity="0.45"
              pathLength="100"
              strokeDasharray="24 76"
              strokeLinecap="round"
              filter="url(#booking-glow-filter)"
              style={{ transition: 'stroke-dashoffset 0.22s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
            />

            {/* Sharp Core Luminous Stripe Beam with Emerald Tip */}
            <rect
              ref={beamRef2}
              x="1.5"
              y="1.5"
              width={Math.max(0, dims.width - 3)}
              height={Math.max(0, dims.height - 3)}
              rx={22}
              fill="none"
              stroke="url(#booking-beam-grad)"
              strokeWidth="4"
              pathLength="100"
              strokeDasharray="24 76"
              strokeLinecap="round"
              filter="drop-shadow(0 0 8px rgba(10,81,91,0.9)) drop-shadow(0 0 12px rgba(43,224,25,0.7))"
              style={{ transition: 'stroke-dashoffset 0.22s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
            />
          </svg>
        )}

        <form onSubmit={handleSubmit} className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Column 1: Experience */}
          <div className="md:col-span-4 lg:col-span-4 px-3 py-2 border-b md:border-b-0 md:border-r border-[#E8EEE4]">
            <label className="block">
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#637568] font-bold mb-1">
                <Glasses className="w-4 h-4 text-[#2BE019]" />
                <span>{currentLang === 'AR' ? 'نوع التجربة' : 'YOUR EXPERIENCE'}</span>
              </span>
              <div className="relative">
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-transparent font-medium text-[#1A261E] text-sm lg:text-base focus:outline-none cursor-pointer appearance-none pr-8 py-1">
                  
                  <option value="all">
                    {currentLang === 'AR' ? 'إلى أين ستأخذك الطبيعة؟' : 'Where will nature take you?'}
                  </option>
                  <option value="nile-birds">
                    {currentLang === 'AR' ? 'جولة طيور النيل' : 'Nile Birds Tour'}
                  </option>
                  <option value="reservoir-birds">
                    {currentLang === 'AR' ? 'جولة طيور خزان أسوان' : 'Aswan Reservoir Birds Tour'}
                  </option>
                  <option value="special-birding">
                    {currentLang === 'AR' ? 'جولات رصد الطيور الخاصة' : 'Special Birding Tours'}
                  </option>
                  <option value="camp">
                    {currentLang === 'AR' ? 'معسكر التعلم للأطفال' : 'Learning Camp'}
                  </option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9B8F] pointer-events-none" />
              </div>
            </label>
          </div>

          {/* Column 2: Date */}
          <div className="md:col-span-3 lg:col-span-3 px-3 py-2 border-b md:border-b-0 md:border-r border-[#E8EEE4]">
            <label className="block">
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#637568] font-bold mb-1">
                <Calendar className="w-4 h-4 text-[#2BE019]" />
                <span>{currentLang === 'AR' ? 'التاريخ المفضل' : 'PREFERRED DATE'}</span>
              </span>
              <input
                type="date"
                min={today}
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent font-medium text-[#1A261E] text-sm lg:text-base focus:outline-none cursor-pointer py-1"
                aria-label="Preferred date" />
              
            </label>
          </div>

          {/* Column 3: Group Size (1 to 12 guests) */}
          <div className="md:col-span-2 lg:col-span-2 px-3 py-2 border-b md:border-b-0 border-[#E8EEE4]">
            <label className="block">
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#637568] font-bold mb-1">
                <Users className="w-4 h-4 text-[#2BE019]" />
                <span>{currentLang === 'AR' ? 'عدد الأفراد' : 'YOUR GROUP'}</span>
              </span>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent font-medium text-[#1A261E] text-sm lg:text-base focus:outline-none cursor-pointer appearance-none pr-6 py-1">
                  
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) =>
                  <option key={n} value={String(n)}>
                      {currentLang === 'AR' ?
                    `${n} ${n === 1 ? 'فرد' : 'أفراد'}` :
                    `${n} ${n === 1 ? 'guest' : 'guests'}`}
                    </option>
                  )}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9B8F] pointer-events-none" />
              </div>
            </label>
          </div>

          {/* Column 4: Submit Button */}
          <div className="md:col-span-3 lg:col-span-3 pt-2 md:pt-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-[#1EAA13] hover:bg-[#18930F] text-white font-bold text-sm lg:text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg shadow-[#1EAA13]/25 transition-all duration-200 active:scale-[0.98] cursor-pointer">
              
              <span>{currentLang === 'AR' ? 'تحقق من التوفر' : 'Check Availability'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-white stroke-[2.5]" />
            </button>
          </div>
        </form>
      </div>

      {/* Egyptian Rates Notice underneath matching local-note in Figma */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#4E6254] font-medium text-center px-4">
        <Sun className="w-4 h-4 text-[#8FA494] shrink-0" />
        <span>
          {currentLang === 'AR' ?
          <>
              مصري؟ الطبيعة أقرب مما تتخيل.{' '}
              <button
              type="button"
              onClick={onOpenEgyptianRates}
              className="font-bold underline text-[#194025] hover:text-[#2BE019] transition-colors inline-flex items-center gap-0.5 ml-1">
              
                اكتشف أسعار المصريين الخاصة ↗
              </button>
            </> :

          <>
              Egyptian? Nature is closer than you think.{' '}
              <button
              type="button"
              onClick={onOpenEgyptianRates}
              className="font-bold underline text-[#194025] hover:text-[#2BE019] transition-colors inline-flex items-center gap-0.5 ml-1">
              
                Discover special Egyptian rates ↗
              </button>
            </>
          }
        </span>
      </div>
    </div>
  );
};
