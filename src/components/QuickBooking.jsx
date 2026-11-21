import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, Sun, Glasses, ChevronDown } from 'lucide-react';







export const QuickBooking = ({
  onCheckAvailability,
  onOpenEgyptianRates,
  currentLang = 'EN'
}) => {
  const [experience, setExperience] = useState('all');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');

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
      {/* Floating Card matching Figma's booking-overlap quick-book */}
      <div className="bg-white rounded-2xl lg:rounded-3xl shadow-[0_16px_40px_-12px_rgba(20,40,25,0.12)] border border-[#E6EBE1] p-4 lg:p-6 transition-all">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center">
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
              className="w-full flex items-center justify-center gap-2.5 bg-[#2BE019] hover:bg-[#25C715] text-[#0A1810] font-bold text-sm lg:text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]">
              
              <span>{currentLang === 'AR' ? 'تحقق من التوفر' : 'Check Availability'}</span>
              <ArrowRight className="w-4 h-4" />
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
    </div>);

};