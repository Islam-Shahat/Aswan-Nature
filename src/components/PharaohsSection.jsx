import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';





















export const PharaohsSection = ({
  onDiscoverClick,
  currentLang = 'EN'
}) => {
  const isArabic = currentLang === 'AR';

  const exhibits = [
  {
    id: 'meidum-geese',
    nameAr: 'وز ميدوم الأسطوري',
    nameEn: 'The Meidum Geese Masterpiece',
    titleAr: 'موناليزا الفن المصري القديم',
    titleEn: 'The Mona Lisa of Ancient Egypt',
    descAr:
    'أشهر إفريز جداري وثّق إوز النيل بدقة متناهية من مصطبة نفرماعت وإتت بميدوم، مرسوم بألوان طبيعية فريدة تُبرز عشق الفراعنة لطيور النهر الخالد.',
    descEn:
    'The legendary 4th-Dynasty Old Kingdom frieze from Meidum (2570 BCE), celebrated globally for its unprecedented avian botanical precision.',
    dynastyAr: 'الأسرة الرابعة · 2570 ق.م',
    dynastyEn: '4th Dynasty · c. 2570 BCE',
    image: '/assets/meidum-geese-fresco.jpg',
    glyph: '𓅂',
    type: 'fresco'
  },
  {
    id: 'horus-falcon',
    nameAr: 'صقر حورس الذهبي',
    nameEn: 'The Golden Horus Falcon',
    titleAr: 'حامي سماء مصر ومعابد إدفو وكوم أمبو',
    titleEn: 'Divine Sky Guardian of Edfu & Kom Ombo',
    descAr:
    'نقش جداري ملكي مذهب لصقر حورس متوجاً بقرص الشمس وحاملاً حلقة الأبدية (الشن)، مرسوم بلازورد ملكي وذهب خالص في معابد صعيد مصر وأسوان.',
    descEn:
    'Royal gilded temple relief of Horus crowned with the golden solar disc, holding the Shen ring of eternity in rich lapis lazuli and gold leaf.',
    dynastyAr: 'المملكة الحديثة · معابد أسوان',
    dynastyEn: 'New Kingdom · Aswan & Edfu',
    image: '/assets/horus-falcon-fresco.jpg',
    glyph: '𓅃',
    type: 'fresco'
  },
  {
    id: 'nile-birds-fresco',
    nameAr: 'جدارية طيور النيل والبردي',
    nameEn: 'Sacred Nile Marsh Birds Fresco',
    titleAr: 'طيور النيل بين أحراش البردي واللوتس',
    titleEn: 'Marshland Avian Paradise of Thebes',
    descAr:
    'جدارية متكاملة تجمع صقر حورس، وأبو منجل المقدس، وإوز النيل في واحة نيلية خصبة تعكس وفرة الحياة وبركة النهر العظيم في معتقدات الأجداد.',
    descEn:
    'Intricate New Kingdom marsh mural celebrating the harmonious coexistence of sacred falcons, ibises, and waterfowl amid blooming blue lotuses.',
    dynastyAr: 'المملكة الحديثة · مقابر طيبة',
    dynastyEn: 'New Kingdom · Theban Murals',
    image: '/assets/pharaonic-birds-fresco.jpg',
    glyph: '𓅄',
    type: 'fresco'
  },
  {
    id: 'sacred-ibis',
    nameAr: 'طائر تحوت (أبو منجل المقدس)',
    nameEn: 'Sacred Ibis of Thoth (Djehuty)',
    titleAr: 'رمز الحكمة وأسرار فيضان النيل',
    titleEn: 'Patron of Wisdom & Sacred Inundation',
    descAr:
    'تصوير فرعوني متقن لطائر الإله تحوت بمنقاره المنحني على ضفاف النيل محاطاً بسيقان البردي المنفتحة وسجلات هيروغليفية مقدسة لطقوس المعرفة.',
    descEn:
    'Venerated manifestation of Djehuty (Thoth), patron of scribes and wisdom, pacing along the Nile marshlands beside sacred ritual inscriptions.',
    dynastyAr: 'الأسرة الثامنة عشرة · برديات المعرفة',
    dynastyEn: '18th Dynasty · Sacred Papyrus Scrolls',
    image: '/assets/sacred-ibis-fresco.jpg',
    glyph: '𓅠',
    type: 'fresco'
  }];


  const [activeExhibit, setActiveExhibit] = useState(exhibits[0]);

  return (
    <section
      id="pharaohs"
      className="relative text-white overflow-hidden min-h-[960px] lg:min-h-[1050px] xl:min-h-[1120px] flex items-center py-36 sm:py-44 lg:py-52 xl:py-60 selection:bg-[#E5C365] selection:text-[#0A160E]"
      style={{
        background:
        'radial-gradient(ellipse at 50% 35%, #163322 0%, #0B1911 50%, #06100A 100%)'
      }}>
      
      {/* Top Feather Transition - Subtle & Soft edge (reduced extent to eliminate haze) */}
      <div
        className="absolute top-0 inset-x-0 h-16 sm:h-20 lg:h-24 pointer-events-none z-20"
        style={{
          background:
          'linear-gradient(180deg, #F3F6EE 0%, rgba(243,246,238,0.7) 25%, rgba(243,246,238,0.2) 65%, transparent 100%)'
        }} />
      

      {/* Floating Pharaonic Hieroglyphic Ribbon */}
      <div className="absolute top-8 sm:top-10 lg:top-14 inset-x-0 h-10 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-center border-y border-[#D4AF37]/20 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent">
          <div className="flex items-center gap-6 text-[#D4AF37]/50 text-xs sm:text-sm tracking-[0.35em] uppercase font-mono select-none whitespace-nowrap">
            <span>𓋹</span>
            <span className="hidden md:inline">𓅃 𓅂 𓅄 𓅆 𓅇 𓅈</span>
            <span>𓊽</span>
            <span>𓍹 ANCIENT EGYPTIAN HERITAGE · LIVING BIRDS OF ASWAN 𓍻</span>
            <span>𓋹</span>
            <span className="hidden md:inline">𓅈 𓅇 𓅆 𓅄 𓅂 𓅃</span>
            <span>𓊽</span>
          </div>
        </div>
      </div>

      {/* Decorative Golden Solar Auras */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-[#1F5438]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Papyrus / Basalt Stone Watermark Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
          'radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#18482E 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px'
        }} />
      

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column Content - Pharaonic Narrative */}
          <div className="lg:col-span-6 max-w-xl">
            {/* Pharaonic Hieroglyphic Inscription (Replaced pill badge with authentic Pharaonic script) */}
            <div className="flex items-center gap-3 mb-6 select-none">
              <span
                className="text-2xl sm:text-3xl text-[#E5C365] drop-shadow-[0_0_14px_rgba(229,195,101,0.65)] tracking-widest font-serif leading-none"
                style={{ fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif" }}
              >
                𓍹 𓅃 𓅂 𓅄 𓅠 𓍻
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C365] shadow-[0_0_8px_#E5C365]" />
              <span className="text-xs sm:text-[13px] uppercase tracking-[0.24em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F3E2B2] via-[#E5C365] to-[#D4AF37]">
                {isArabic ? 'نقوش وأسرار طيور الفراعنة' : 'PHARAONIC BIRDS · SACRED HERITAGE'}
              </span>
              <span
                className="text-xl text-[#E5C365]/80 drop-shadow-[0_0_8px_rgba(229,195,101,0.5)] leading-none"
                style={{ fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif" }}
              >
                𓋹
              </span>
            </div>

            {/* Grand Pharaonic Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[66px] leading-[1.08] tracking-[-0.03em] mb-6 font-heading">
              <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5EDD6] to-[#D4AF37]">
                {isArabic ? 'طيور الفراعنة' : 'Pharaohs Birds'}
              </span>
              <span className="block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E5C365] via-[#F3E2B2] to-[#C9A23E] mt-1">
                {isArabic ? 'بين النقش والحياة.' : 'Alive in Aswan.'}
              </span>
            </h2>

            {/* Pharaonic Golden Divider with Sacred Horus Falcon */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="w-7 h-7 rounded-full border border-[#D4AF37]/60 bg-[#142A1E] flex items-center justify-center text-[#E5C365] text-xs font-serif shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                𓋹
              </div>
              <div className="h-[2px] flex-1 max-w-[120px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>

            {/* Story Paragraph */}
            <p className="text-base sm:text-[17px] text-[#D8E6DC] leading-relaxed mb-8">
              {isArabic ?
              'منذ أكثر من 4,000 عام، مجّد الفنان المصري القديم طيور النيل على جدران معابد إدفو وكوم أمبو ومقابر ميدوم كرموز مقدسة للحكمة والبعث. في أسوان، لا تزال هذه الطيور الأسطورية ذاتها تعيش حرة طليقة وتفرد أجنحتها فوق النيل الخالد.' :
              'Over 4,000 years ago, ancient Egyptian scribes and artisans immortalized the sacred birds of the Nile on the temple walls of Kom Ombo, Edfu, and the frescoes of Meidum. In Aswan today, these very same mythic species still nest, dive, and soar free.'}
            </p>

            {/* 3 Pharaonic Bird Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9">
              <div className="p-3.5 rounded-xl border border-[#D4AF37]/25 bg-black/25 backdrop-blur-sm hover:border-[#D4AF37]/60 transition-colors">
                <div className="text-xl mb-1 text-[#E5C365]">𓅂</div>
                <div className="text-xs font-bold text-white mb-0.5">
                  {isArabic ? 'وزة ميدوم' : 'Meidum Goose'}
                </div>
                <div className="text-[11px] text-[#B0C7B8] leading-tight">
                  {isArabic ? 'الوز المصري الشهير في النيل' : 'Chenalopex aegyptiaca'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[#D4AF37]/25 bg-black/25 backdrop-blur-sm hover:border-[#D4AF37]/60 transition-colors">
                <div className="text-xl mb-1 text-[#E5C365]">𓅃</div>
                <div className="text-xs font-bold text-white mb-0.5">
                  {isArabic ? 'صقر حورس' : 'Horus Falcon'}
                </div>
                <div className="text-[11px] text-[#B0C7B8] leading-tight">
                  {isArabic ? 'حامي الملوك وسيد معابد النيل' : 'Divine sky guardian'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[#D4AF37]/25 bg-black/25 backdrop-blur-sm hover:border-[#D4AF37]/60 transition-colors">
                <div className="text-xl mb-1 text-[#E5C365]">𓅠</div>
                <div className="text-xs font-bold text-white mb-0.5">
                  {isArabic ? 'طائر تحوت' : 'Sacred Ibis'}
                </div>
                <div className="text-[11px] text-[#B0C7B8] leading-tight">
                  {isArabic ? 'رمز الحكمة والفيضان النيلي' : 'Emissary of Thoth'}
                </div>
              </div>
            </div>

            {/* Regal CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onDiscoverClick}
                type="button"
                className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-[#0B1810] shadow-[0_8px_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(212,175,55,0.55)] hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                style={{
                  background:
                  'linear-gradient(135deg, #F5EDD6 0%, #E5C365 40%, #C9A23E 100%)'
                }}>
                
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B1810"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true">
                  
                  <path d="M3 17c5-1 7-4 8-8 1-4 4-5 6-3l4 1-4 2c0 5-4 10-10 10H3l4-4M10 12C6 12 3 8 2 4c6 1 10 4 11 7" />
                  <circle cx="16" cy="6.5" r="1.5" fill="#0B1810" />
                </svg>
                <span className="tracking-wide">
                  {isArabic ? 'احجز جولة طيور الفراعنة' : 'Book Pharaohs Birds Tour'}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Historical Footnote */}
            <div className="flex items-center gap-2.5 text-[11px] tracking-[0.22em] uppercase font-bold text-[#9AB8A4]">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C365]" />
              <span>
                {isArabic ?
                'رحلة موثقة بين نقوش الجداريات والحياة البرية' :
                'Documented connection · Murals to Wildlife'}
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Ancient Egyptian Unfurled Papyrus Scroll */}
          <div className="lg:col-span-6">
            <div className="relative pt-3 pb-3">
              {/* TOP PAPYRUS PAPER SCROLL ROLL (لفافة ورق البردي العلوية - خامة ورق بردي طبيعية) */}
              <div
                className="relative z-20 w-[calc(100%+16px)] -ml-2 sm:w-[calc(100%+24px)] sm:-ml-3 h-8 sm:h-9 rounded-full shadow-[0_8px_18px_rgba(20,10,3,0.55)] border border-[#8C6239]/55 overflow-hidden flex items-center justify-between px-3 sm:px-4 mb-[-12px]"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center'
                }}>
                
                {/* 3D Matte Papyrus Paper Lighting & Shadow (Non-metallic) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                    'linear-gradient(180deg, rgba(55,28,8,0.65) 0%, rgba(95,50,18,0.2) 20%, rgba(255,245,225,0.45) 50%, rgba(110,65,25,0.25) 75%, rgba(45,20,5,0.7) 100%)'
                  }} />
                

                {/* Left Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>

                {/* Center Hieroglyphic Inscription in Ancient Sepia/Black Ink */}
                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 text-[#3E220A] text-xs font-serif font-extrabold select-none tracking-[0.2em] uppercase opacity-90">
                  <span className="text-[#6E3D12]">𓋹</span>
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-[#2E1805]">
                    {isArabic ? 'وثيقة طيور النيل البردية' : 'SACRED PAPYRUS ARCHIVE'}
                  </span>
                  <span className="text-[#6E3D12]">𓊽</span>
                </div>

                {/* Right Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
              </div>

              {/* The Ancient Egyptian Papyrus Parchment Container */}
              <div
                className="relative rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(212,175,55,0.22)] border-x-2 border-[#C9A23E]/60 overflow-hidden group z-10"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                
                {/* Papyrus Burnished Edge Vignette Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                    'radial-gradient(ellipse at center, rgba(235, 215, 170, 0.08) 0%, rgba(85, 50, 15, 0.45) 85%, rgba(45, 22, 5, 0.75) 100%)'
                  }} />
                

                {/* Papyrus Scroll Header Ribbon */}
                <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-[#7A4B1A]/35 text-[#3D250E]">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#8C581F]">𓋹</span>
                    <span className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.22em] font-extrabold text-[#38200A]">
                      {isArabic ?
                      'مخطوطة طيور النيل البردية' :
                      'THE SACRED PAPYRUS ARCHIVE'}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-[#5E3710] uppercase bg-[#E8D4A8]/70 px-2.5 py-0.5 rounded border border-[#8C581F]/30 backdrop-blur-sm font-bold">
                    {isArabic ? 'بردية أثرية موثقة' : 'Authentic Papyrus'}
                  </div>
                </div>

                {/* Main Active Image Display Window (Mounted on the Papyrus) */}
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/10] bg-black shadow-[0_12px_30px_rgba(35,18,5,0.55)] border-2 border-[#8C581F]/50 z-10">
                  <img
                    src={activeExhibit.image}
                    alt={isArabic ? activeExhibit.nameAr : activeExhibit.nameEn}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" />
                  

                  {/* Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                  {/* Caption Plaque at Bottom of Picture */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-left bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-[#E5C365]">{activeExhibit.glyph}</span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        {isArabic ? activeExhibit.nameAr : activeExhibit.nameEn}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D8E6DC] leading-relaxed line-clamp-2 max-w-lg">
                      {isArabic ? activeExhibit.descAr : activeExhibit.descEn}
                    </p>
                  </div>
                </div>

                {/* Papyrus Scroll Thumbnails Selector */}
                <div className="relative z-10 mt-3.5 pt-3 border-t border-[#7A4B1A]/35">
                  <div className="text-[11px] uppercase tracking-wider text-[#3D230A] font-extrabold mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#8C581F]">𓅃</span>
                      <span>{isArabic ? 'شواهد البرديات الفرعونية' : 'PAPYRUS AVIAN SCROLLS'}</span>
                    </span>
                    <span className="text-[10px] text-[#5C3612] lowercase font-semibold">
                      {isArabic ? 'اختر للعرض' : 'click to inspect'}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {exhibits.map((item) => {
                      const isSelected = item.id === activeExhibit.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveExhibit(item)}
                          className={`group/thumb relative rounded-lg overflow-hidden p-1 border transition-all text-left shadow-sm ${
                          isSelected ?
                          'border-[#8C4F18] bg-[#F7E7C4]/95 shadow-[0_0_12px_rgba(140,79,24,0.45)] ring-2 ring-[#B87A2B]/60 scale-[1.02]' :
                          'border-[#7A4B1A]/40 bg-[#E8D4A8]/70 hover:bg-[#F2DFBA] hover:border-[#8C581F]'}`
                          }>
                          
                          <div className="aspect-[4/3] rounded overflow-hidden mb-1 relative border border-[#7A4B1A]/20">
                            <img
                              src={item.image}
                              alt={isArabic ? item.nameAr : item.nameEn}
                              className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300" />
                            
                            <div className="absolute bottom-0.5 right-0.5 bg-black/75 rounded px-1 text-[10px] text-[#E5C365]">
                              {item.glyph}
                            </div>
                          </div>
                          <div className="text-[10px] font-extrabold text-[#2B1604] truncate leading-tight">
                            {isArabic ? item.nameAr : item.nameEn}
                          </div>
                          <div className="text-[9px] text-[#7A4518] font-bold truncate">
                            {isArabic ?
                            item.dynastyAr.split('·')[0].trim() :
                            item.dynastyEn.split('·')[0].trim()}
                          </div>
                        </button>);

                    })}
                  </div>
                </div>
              </div>

              {/* BOTTOM PAPYRUS PAPER SCROLL ROLL (لفافة ورق البردي السفلية - خامة ورق بردي طبيعية) */}
              <div
                className="relative z-20 w-[calc(100%+16px)] -ml-2 sm:w-[calc(100%+24px)] sm:-ml-3 h-8 sm:h-9 rounded-full shadow-[0_-8px_18px_rgba(20,10,3,0.55)] border border-[#8C6239]/55 overflow-hidden flex items-center justify-between px-3 sm:px-4 mt-[-12px]"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom center'
                }}>
                
                {/* 3D Matte Papyrus Paper Lighting & Shadow (Non-metallic) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                    'linear-gradient(0deg, rgba(55,28,8,0.65) 0%, rgba(95,50,18,0.2) 20%, rgba(255,245,225,0.45) 50%, rgba(110,65,25,0.25) 75%, rgba(45,20,5,0.7) 100%)'
                  }} />
                

                {/* Left Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>

                {/* Center Hieroglyphic Inscription in Ancient Sepia/Black Ink */}
                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 text-[#3E220A] text-xs font-serif font-extrabold select-none tracking-[0.2em] uppercase opacity-90">
                  <span className="text-[#6E3D12]">𓊽</span>
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-[#2E1805]">
                    {isArabic ? 'أرشيف طيور أسوان الفرعونية' : 'ASWAN ANCIENT BIRD SCROLLS'}
                  </span>
                  <span className="text-[#6E3D12]">𓋹</span>
                </div>

                {/* Right Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Pharaonic Hieroglyphic Ribbon */}
      <div className="absolute bottom-8 sm:bottom-10 lg:bottom-14 inset-x-0 h-8 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <div className="w-full max-w-5xl mx-auto h-full flex items-center justify-center border-y border-[#D4AF37]/15 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent">
          <div className="flex items-center gap-6 text-[#D4AF37]/40 text-xs tracking-[0.4em] select-none whitespace-nowrap">
            <span>𓋹</span>
            <span className="hidden sm:inline">𓅃 𓅂 𓅄 𓅆 𓅇 𓅈</span>
            <span>𓊽</span>
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37]/45 uppercase">
              {isArabic ? 'حماة النيل الأبدي' : 'ETERNAL NILE GUARDIANS'}
            </span>
            <span>𓋹</span>
            <span className="hidden sm:inline">𓅈 𓅇 𓅆 𓅄 𓅂 𓅃</span>
            <span>𓊽</span>
          </div>
        </div>
      </div>

      {/* Bottom Feather Transition - Subtle & Soft edge into Gallery */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 sm:h-20 lg:h-24 pointer-events-none z-20"
        style={{
          background:
          'linear-gradient(0deg, #F8FAF5 0%, rgba(248,250,245,0.7) 25%, rgba(248,250,245,0.2) 65%, transparent 100%)'
        }} />
      
    </section>);

};