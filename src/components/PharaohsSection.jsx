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
    }
  ];

  const [activeExhibit, setActiveExhibit] = useState(exhibits[0]);

  return (
    <section
      id="pharaohs"
      className="relative text-[#1C140A] overflow-hidden min-h-[960px] lg:min-h-[1050px] flex items-center py-28 sm:py-36 lg:py-44 selection:bg-[#c99a5d] selection:text-white"
      style={{
        backgroundColor: '#f4e8ce',
        backgroundImage: `
          radial-gradient(ellipse at 50% 20%, rgba(255, 250, 240, 0.75) 0%, rgba(244, 232, 206, 0.85) 65%, rgba(229, 215, 185, 0.95) 100%),
          radial-gradient(#c99a5d 0.75px, transparent 0.75px)
        `,
        backgroundSize: '100% 100%, 32px 32px',
      }}
    >
      {/* Pharaonic Architectural Top Border Ribbon (Replaces hazy feathering with crisp royal border) */}
      <div className="absolute top-0 inset-x-0 h-10 sm:h-12 border-t-2 border-b border-[#c99a5d]/60 bg-[#e5e7e5]/75 backdrop-blur-xs flex items-center justify-center overflow-hidden pointer-events-none select-none z-20">
        <div className="flex items-center gap-4 sm:gap-6 text-[#c99a5d] text-xs sm:text-sm tracking-[0.3em] font-serif uppercase whitespace-nowrap">
          <span>𓋹</span>
          <span className="hidden sm:inline">𓅃 𓅂 𓅄 𓅆 𓅇 𓅈</span>
          <span>𓊽</span>
          <span className="font-extrabold text-[11px] sm:text-xs tracking-[0.25em] text-[#7A5528]">
            {isArabic ? 'نقوش وأسرار طيور الفراعنة · أسوان' : 'ANCIENT EGYPTIAN HERITAGE · LIVING BIRDS OF ASWAN'}
          </span>
          <span>𓋹</span>
          <span className="hidden sm:inline">𓅈 𓅇 𓅆 𓅄 𓅂 𓅃</span>
          <span>𓊽</span>
        </div>
      </div>

      {/* Decorative Golden Solar Auras */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#c99a5d]/16 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#c99a5d]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column Content - Pharaonic Narrative */}
          <div className="lg:col-span-6 max-w-xl">
            {/* Pharaonic Hieroglyphic Inscription Cartouche */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c99a5d]/60 bg-[#e5e7e5]/90 backdrop-blur-xs shadow-xs mb-5 select-none">
              <span
                className="text-xl sm:text-2xl text-[#c99a5d] leading-none"
                style={{ fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif" }}
              >
                𓍹 𓅃 𓅂 𓅄 𓅠 𓍻
              </span>
              <span className="w-1 h-3.5 bg-[#c99a5d]/40 rounded-full" />
              <span className="text-xs sm:text-[13px] uppercase tracking-[0.2em] font-extrabold text-[#7A5528]">
                {isArabic ? 'نقوش وأسرار طيور الفراعنة' : 'PHARAONIC BIRDS · SACRED HERITAGE'}
              </span>
              <span className="text-base text-[#c99a5d] leading-none">𓋹</span>
            </div>

            {/* Grand Pharaonic Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-[-0.03em] mb-5 font-heading">
              <span className="block font-black text-[#0a515b]">
                {isArabic ? 'طيور الفراعنة' : 'Pharaohs Birds'}
              </span>
              <span className="block font-serif italic font-normal text-[#c99a5d] drop-shadow-xs mt-1">
                {isArabic ? 'بين النقش والحياة.' : 'Alive in Aswan.'}
              </span>
            </h2>

            {/* Pharaonic Golden Divider with Sacred Ankh Seal */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-[#c99a5d]" />
              <div className="w-8 h-8 rounded-full border border-[#c99a5d] bg-[#e5e7e5] flex items-center justify-center text-[#c99a5d] text-sm font-serif shadow-xs">
                𓋹
              </div>
              <div className="h-[2px] flex-1 max-w-[140px] bg-gradient-to-r from-[#c99a5d] to-transparent" />
            </div>

            {/* Story Paragraph */}
            <p className="text-base sm:text-[17px] text-[#4A3825] leading-relaxed mb-8 font-normal">
              {isArabic ?
              'منذ أكثر من 4,000 عام، مجّد الفنان المصري القديم طيور النيل على جدران معابد إدفو وكوم أمبو ومقابر ميدوم كرموز مقدسة للحكمة والبعث. في أسوان، لا تزال هذه الطيور الأسطورية ذاتها تعيش حرة طليقة وتفرد أجنحتها فوق النيل الخالد.' :
              'Over 4,000 years ago, ancient Egyptian scribes and artisans immortalized the sacred birds of the Nile on the temple walls of Kom Ombo, Edfu, and the frescoes of Meidum. In Aswan today, these very same mythic species still nest, dive, and soar free.'}
            </p>

            {/* 3 Pharaonic Bird Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              <div className="p-4 rounded-2xl border border-[#c99a5d]/45 bg-[#FAF4E6]/90 backdrop-blur-xs shadow-xs hover:border-[#c99a5d] hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl mb-1 text-[#c99a5d]">𓅂</div>
                <div className="text-xs sm:text-[13px] font-bold text-[#1C140A] mb-0.5">
                  {isArabic ? 'وزة ميدوم' : 'Meidum Goose'}
                </div>
                <div className="text-[11px] text-[#695138] leading-tight">
                  {isArabic ? 'الوز المصري الأصيل في النيل' : 'Chenalopex aegyptiaca'}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-[#c99a5d]/45 bg-[#FAF4E6]/90 backdrop-blur-xs shadow-xs hover:border-[#c99a5d] hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl mb-1 text-[#c99a5d]">𓅃</div>
                <div className="text-xs sm:text-[13px] font-bold text-[#1C140A] mb-0.5">
                  {isArabic ? 'صقر حورس' : 'Horus Falcon'}
                </div>
                <div className="text-[11px] text-[#695138] leading-tight">
                  {isArabic ? 'حامي سماء النيل ومعابد الصعيد' : 'Divine sky guardian'}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-[#c99a5d]/45 bg-[#FAF4E6]/90 backdrop-blur-xs shadow-xs hover:border-[#c99a5d] hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl mb-1 text-[#c99a5d]">𓅠</div>
                <div className="text-xs sm:text-[13px] font-bold text-[#1C140A] mb-0.5">
                  {isArabic ? 'طائر تحوت' : 'Sacred Ibis'}
                </div>
                <div className="text-[11px] text-[#695138] leading-tight">
                  {isArabic ? 'رمز الحكمة والفيضان المقدس' : 'Emissary of Thoth'}
                </div>
              </div>
            </div>

            {/* Creative Pharaonic "See More" Portal Button & Stele */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onDiscoverClick}
                type="button"
                className="group relative inline-flex items-center gap-3.5 px-6 sm:px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-[#1C1306] shadow-[0_10px_30px_rgba(201,154,93,0.38)] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(201,154,93,0.6)] hover:scale-[1.02] active:scale-[0.98] border border-[#B07E3D] cursor-pointer overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #FBF3E4 0%, #E8CA97 40%, #C99A5D 80%, #AD7937 100%)'
                }}
              >
                {/* Subtle golden shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <span className="w-8 h-8 rounded-full bg-[#1C1306]/10 border border-[#1C1306]/20 flex items-center justify-center text-sm font-serif shadow-xs">
                  𓅃
                </span>
                
                <span className="tracking-wide flex items-center gap-2">
                  <span>{isArabic ? 'شاهد المزيد · صفحة الفراعنة' : 'See More · Pharaohs Birds'}</span>
                  <span className="text-[11px] font-mono uppercase bg-[#1C1306] text-[#F4E8CE] px-2 py-0.5 rounded-full font-bold">
                    {isArabic ? 'كامل الأسرار' : 'Full Page'}
                  </span>
                </span>

                <div className="w-8 h-8 rounded-full bg-[#1C1306] text-[#FAF4E6] flex items-center justify-center transition-all duration-300 group-hover:bg-[#8C5D23] group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 shadow-sm">
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </div>
              </button>

              {/* Fast secondary "See More" badge link */}
              <button
                onClick={onDiscoverClick}
                type="button"
                className="group inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl border border-[#c99a5d]/60 bg-[#e5e7e5]/80 hover:bg-white text-[#5C4123] hover:text-[#1C140A] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <span className="text-base text-[#c99a5d] group-hover:rotate-45 transition-transform">𓋹</span>
                <span>{isArabic ? 'استكشف المحراب ↗' : 'Enter Sanctuary ↗'}</span>
              </button>
            </div>

            {/* Historical Footnote */}
            <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-bold text-[#7A5B36]">
              <Sparkles className="w-4 h-4 text-[#c99a5d]" />
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
              {/* TOP PAPYRUS PAPER SCROLL ROLL */}
              <div
                className="relative z-20 w-[calc(100%+16px)] -ml-2 sm:w-[calc(100%+24px)] sm:-ml-3 h-8 sm:h-9 rounded-full shadow-[0_8px_18px_rgba(20,10,3,0.35)] border border-[#8C6239]/60 overflow-hidden flex items-center justify-between px-3 sm:px-4 mb-[-12px]"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center'
                }}
              >
                {/* 3D Matte Papyrus Paper Lighting */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(55,28,8,0.5) 0%, rgba(95,50,18,0.15) 20%, rgba(255,245,225,0.45) 50%, rgba(110,65,25,0.2) 75%, rgba(45,20,5,0.55) 100%)'
                  }}
                />

                {/* Left Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>

                {/* Center Hieroglyphic Inscription in Ancient Sepia/Black Ink */}
                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 text-[#3E220A] text-xs font-serif font-extrabold select-none tracking-[0.2em] uppercase opacity-90">
                  <span className="text-[#8C6239]">𓋹</span>
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-[#2E1805]">
                    {isArabic ? 'وثيقة طيور النيل البردية' : 'SACRED PAPYRUS ARCHIVE'}
                  </span>
                  <span className="text-[#8C6239]">𓊽</span>
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
                className="relative rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-[0_20px_50px_rgba(140,98,40,0.22)] border-2 border-[#c99a5d] overflow-hidden group z-10"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Papyrus Burnished Edge Vignette Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(235, 215, 170, 0.05) 0%, rgba(85, 50, 15, 0.35) 85%, rgba(45, 22, 5, 0.6) 100%)'
                  }}
                />

                {/* Papyrus Scroll Header Ribbon */}
                <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-[#7A4B1A]/35 text-[#3D250E]">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#8C581F]">𓋹</span>
                    <span className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.22em] font-extrabold text-[#38200A]">
                      {isArabic ? 'مخطوطة طيور النيل البردية' : 'THE SACRED PAPYRUS ARCHIVE'}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-[#5E3710] uppercase bg-[#E8D4A8]/80 px-2.5 py-0.5 rounded border border-[#8C581F]/40 backdrop-blur-sm font-bold">
                    {isArabic ? 'بردية أثرية موثقة' : 'Authentic Papyrus'}
                  </div>
                </div>

                {/* Main Active Image Display Window (Mounted on the Papyrus) */}
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/10] bg-black shadow-[0_12px_30px_rgba(35,18,5,0.4)] border-2 border-[#8C581F]/50 z-10">
                  <img
                    src={activeExhibit.image}
                    alt={isArabic ? activeExhibit.nameAr : activeExhibit.nameEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                  {/* Caption Plaque at Bottom of Picture */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-left rtl:text-right bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-[#F0DBB4]">{activeExhibit.glyph}</span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        {isArabic ? activeExhibit.nameAr : activeExhibit.nameEn}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#EAE2D5] leading-relaxed line-clamp-2 max-w-lg">
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
                          className={`group/thumb relative rounded-lg overflow-hidden p-1 border transition-all text-left rtl:text-right shadow-xs cursor-pointer ${
                            isSelected
                              ? 'border-[#8C4F18] bg-[#F7E7C4]/95 shadow-[0_0_12px_rgba(140,79,24,0.4)] ring-2 ring-[#c99a5d] scale-[1.02]'
                              : 'border-[#7A4B1A]/40 bg-[#E8D4A8]/70 hover:bg-[#F2DFBA] hover:border-[#8C581F]'
                          }`}
                        >
                          <div className="aspect-[4/3] rounded overflow-hidden mb-1 relative border border-[#7A4B1A]/20">
                            <img
                              src={item.image}
                              alt={isArabic ? item.nameAr : item.nameEn}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0.5 right-0.5 rtl:right-auto rtl:left-0.5 bg-black/75 rounded px-1 text-[10px] text-[#F0DBB4]">
                              {item.glyph}
                            </div>
                          </div>
                          <div className="text-[10px] font-extrabold text-[#2B1604] truncate leading-tight">
                            {isArabic ? item.nameAr : item.nameEn}
                          </div>
                          <div className="text-[9px] text-[#7A4518] font-bold truncate">
                            {isArabic
                              ? item.dynastyAr.split('·')[0].trim()
                              : item.dynastyEn.split('·')[0].trim()}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* BOTTOM PAPYRUS PAPER SCROLL ROLL */}
              <div
                className="relative z-20 w-[calc(100%+16px)] -ml-2 sm:w-[calc(100%+24px)] sm:-ml-3 h-8 sm:h-9 rounded-full shadow-[0_-8px_18px_rgba(20,10,3,0.35)] border border-[#8C6239]/60 overflow-hidden flex items-center justify-between px-3 sm:px-4 mt-[-12px]"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom center'
                }}
              >
                {/* 3D Matte Papyrus Paper Lighting */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(55,28,8,0.5) 0%, rgba(95,50,18,0.15) 20%, rgba(255,245,225,0.45) 50%, rgba(110,65,25,0.2) 75%, rgba(45,20,5,0.55) 100%)'
                  }}
                />

                {/* Left Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>

                {/* Center Hieroglyphic Inscription in Ancient Sepia/Black Ink */}
                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 text-[#3E220A] text-xs font-serif font-extrabold select-none tracking-[0.2em] uppercase opacity-90">
                  <span className="text-[#8C6239]">𓊽</span>
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-[#2E1805]">
                    {isArabic ? 'أرشيف طيور أسوان الفرعونية' : 'ASWAN ANCIENT BIRD SCROLLS'}
                  </span>
                  <span className="text-[#8C6239]">𓋹</span>
                </div>

                {/* Right Papyrus Paper Roll Spiral Edge */}
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
              </div>

              {/* Interactive Papyrus "See More" Portal Trigger */}
              <div className="mt-4 text-center">
                <button
                  onClick={onDiscoverClick}
                  type="button"
                  className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#c99a5d]/70 bg-[#FAF4E6]/90 hover:bg-white text-[#5C3C15] hover:text-[#1C140A] text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="text-[#c99a5d] text-base group-hover:scale-125 transition-transform">𓅃</span>
                  <span>
                    {isArabic
                      ? 'هل تريد استكشاف كافة البرديات واللوحات الجدارية؟ شاهد المزيد'
                      : 'Want to discover all murals, steles & avian lore? See More'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c99a5d] rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pharaonic Architectural Bottom Border Ribbon (Replaces hazy feathering with crisp royal border) */}
      <div className="absolute bottom-0 inset-x-0 h-10 sm:h-12 border-t border-b-2 border-[#c99a5d]/60 bg-[#e5e7e5]/75 backdrop-blur-xs flex items-center justify-center overflow-hidden pointer-events-none select-none z-20">
        <div className="flex items-center gap-4 sm:gap-6 text-[#c99a5d] text-xs sm:text-sm tracking-[0.3em] font-serif uppercase whitespace-nowrap">
          <span>𓋹</span>
          <span className="hidden sm:inline">𓅃 𓅂 𓅄</span>
          <span>𓊽</span>
          <span className="font-extrabold text-[11px] sm:text-xs tracking-[0.25em] text-[#7A5528]">
            {isArabic ? 'حماة النيل الأبدي · إرث الحضارة المصرية' : 'ETERNAL NILE GUARDIANS · SACRED EGYPTIAN AVIAN LEGACY'}
          </span>
          <span>𓋹</span>
          <span className="hidden sm:inline">𓅄 𓅂 𓅃</span>
          <span>𓊽</span>
        </div>
      </div>
    </section>
  );
};
