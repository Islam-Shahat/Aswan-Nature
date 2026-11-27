import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, Eye, Shield, Clock, MapPin, Anchor, Star, ScrollText } from 'lucide-react';
import { TourDetailModal } from '../components/tours/TourDetailModal';
import { BookingDrawer } from '../components/tours/BookingDrawer';
import { toursData } from '../data/toursData';

export const PharaohsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  const exhibits = [
    {
      id: 'meidum-geese',
      glyph: '𓅂',
      gardiner: 'G38 · Geb & Amun',
      nameAr: 'وز ميدوم الأسطوري',
      nameEn: 'The Meidum Geese Masterpiece',
      titleAr: 'موناليزا الفن المصري القديم',
      titleEn: 'The Mona Lisa of Ancient Egypt',
      descAr:
        'أشهر إفريز جداري في تاريخ علم الطيور القديم (2570 ق.م)، وثّق ثلاث فصائل من إوز النيل بدقة ريش مذهلة على ملاط الجص من مصطبة نفرماعت بميدوم.',
      descEn:
        'The celebrated 4th-Dynasty masterpiece (2570 BCE) capturing three distinct goose species with unprecedented plumage precision, rendered in mineral pigments that never faded.',
      dynastyAr: 'الأسرة الرابعة · 2570 ق.م',
      dynastyEn: '4th Dynasty · c. 2570 BCE',
      image: '/assets/meidum-geese-fresco.jpg',
      aswanLocationAr: 'قنوات جزر خزان أسوان ومحميات الشلال الأول',
      aswanLocationEn: 'Aswan Reservoir Islands & Protected Cataracts'
    },
    {
      id: 'horus-falcon',
      glyph: '𓅃',
      gardiner: 'G5 · Divine Solar Eye',
      nameAr: 'صقر حورس الذهبي',
      nameEn: 'The Golden Horus Falcon',
      titleAr: 'حامي سماء مصر وسيد معابد إدفو وكوم أمبو',
      titleEn: 'Divine Sky Guardian of Edfu & Kom Ombo',
      descAr:
        'التمثيل المقدس للإله حورس ملك السماء حاملاً حلقة الأبدية (الشن)، مرسوماً ومحفوراً بذهب خالص في معابد الصعيد كرمز للقوة وحماية حكام مصر القديمة.',
      descEn:
        'The supreme avian deity crowned with the solar disc and holding the Shen ring of eternity, immortalized across upper Egyptian sanctuaries as the eternal celestial guardian.',
      dynastyAr: 'المملكة الحديثة · معابد النيل',
      dynastyEn: 'New Kingdom · Upper Nile Temples',
      image: '/assets/horus-falcon-fresco.jpg',
      aswanLocationAr: 'منحدرات الجرانيت العالية فوق جزر فيلة والسالوجا',
      aswanLocationEn: 'Granite Cliffs of Saluga & Philae Gorge'
    },
    {
      id: 'nile-birds-fresco',
      glyph: '𓅄',
      gardiner: 'G39 · Sacred Wetlands',
      nameAr: 'جدارية طيور النيل والبردي',
      nameEn: 'Sacred Nile Marsh Birds Fresco',
      titleAr: 'فردوس الطيور بين أحراش البردي واللوتس',
      titleEn: 'Avian Paradise of Theban Wetlands',
      descAr:
        'لوحة جدارية مدهشة من مقابر طيبة تُجسّد وفرة الحياة والطيور المائية والرفراف وصقور الصيد بين سيقان نبات البردي وزهور اللوتس النيلية الزرقاء.',
      descEn:
        'Lush Theban mural depicting sacred waterbirds, kingfishers, and herons thriving among blooming blue lotuses, illustrating the eternal fertility of the sacred river.',
      dynastyAr: 'الأسرة الثامنة عشرة · طيبة',
      dynastyEn: '18th Dynasty · Theban Tombs',
      image: '/assets/pharaonic-birds-fresco.jpg',
      aswanLocationAr: 'أحراش البردي والبحيرات الهادئة بجزيرة إلفنتين',
      aswanLocationEn: 'Elephantine Island Marshes & Secret Lagoons'
    },
    {
      id: 'sacred-ibis',
      glyph: '𓅠',
      gardiner: 'G26 · Patron of Thoth',
      nameAr: 'طائر تحوت (أبو منجل المقدس)',
      nameEn: 'Sacred Ibis of Thoth (Djehuty)',
      titleAr: 'رمز الحكمة وأسرار فيضان النيل المقدس',
      titleEn: 'Patron of Wisdom, Scribes & Inundation',
      descAr:
        'الطائر المقدس للإله تحوت رب الحكمة والمعرفة والتقويم النيلي؛ كان ظهوره على ضفاف النيل إيذاناً ببدء فيضان النهر المقدس وتجدد خصوبة أرض مصر.',
      descEn:
        'Venerated earthly avatar of Djehuty (Thoth), patron of scribes and lunar mathematics, whose elegant stride along the mudbanks heralded the fertile Nile flood.',
      dynastyAr: 'المملكة الحديثة · برديات الحكمة',
      dynastyEn: 'New Kingdom · Wisdom Papyri',
      image: '/assets/sacred-ibis-fresco.jpg',
      aswanLocationAr: 'ضفاف النيل الطمية المحمية بمحمية سالوجا وغزال',
      aswanLocationEn: 'Protected Mudflats of Saluga & Ghazal Sanctuary'
    }
  ];

  const [activeExhibit, setActiveExhibit] = useState(exhibits[0]);

  // Pharaonic Tours modal/booking state
  const [detailTourId, setDetailTourId] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [bookingTourId, setBookingTourId] = useState('hapi-tour');
  const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false);

  const pharaohsTours = [
    toursData['hapi-tour'],
    toursData['horus-tour'],
    toursData['isis-tour'],
  ];

  const pantheonDeities = [
    {
      glyph: '𓅃',
      deityAr: 'حورس الأكبر (Heru-ur)',
      deityEn: 'Horus the Elder',
      speciesAr: 'صقر الشاهين والحر النيلي',
      speciesEn: 'Peregrine & Lanner Falcon',
      significanceAr: 'سيد السماء ورمز البصيرة الحادة والعدالة الإلهية؛ عيناه هما الشمس والقمر.',
      significanceEn: 'Lord of the sky, whose right eye is the Sun and left eye is the Moon.',
      spottingAr: 'يحلق فوق أعالي صخور الجرانيت بجزر الشلال الأول.',
      spottingEn: 'Soars above First Cataract granite outcrops.'
    },
    {
      glyph: '𓅠',
      deityAr: 'تحوت رب المعرفة (Djehuty)',
      deityEn: 'Thoth the Wise',
      speciesAr: 'أبو منجل المقدس وأبو ملعقة',
      speciesEn: 'Sacred Ibis & Spoonbill',
      significanceAr: 'راعي الحكمة واللغة المكتوبة ومقياس النيل وسجلات الخلود.',
      significanceEn: 'Patron of scribes, sacred hieroglyphic writing, and lunar cycles.',
      spottingAr: 'يستقر في الخيران الهادئة بين القصب ومحميات النيل.',
      spottingEn: 'Paces along tranquil reed-lined marsh shallows.'
    },
    {
      glyph: '𓅄',
      deityAr: 'طائر البينو (Bennu)',
      deityEn: 'The Bennu Heron',
      speciesAr: 'البلشون الرمادي وبلشون الليل',
      speciesEn: 'Grey & Goliath Heron',
      significanceAr: 'طائر الخلق والبعث وأصل أسطورة العنقاء الفينيقية؛ أول كائن صعد من مياه النون الأزلية.',
      significanceEn: 'The primordial avian soul of Ra, the cosmic prototype of the Phoenix.',
      spottingAr: 'يقف متأملاً بثبات مهيب على حواف الصخور النيلية فجراً.',
      spottingEn: 'Perches motionless on dawn granite boulders.'
    },
    {
      glyph: '𓅂',
      deityAr: 'إوزة آمون الكبرى (Gengen-Wer)',
      deityEn: 'The Great Cackler',
      speciesAr: 'الوز المصري النيلي (Egyptian Goose)',
      speciesEn: 'Egyptian Goose (Alopochen aegyptiaca)',
      significanceAr: 'رمز الخصوبة وصوت البداية الكونية في أساطير طيبة؛ حارس مياه الفيضان المباركة.',
      significanceEn: 'Celestial harbinger of fertility whose call broke cosmic silence.',
      spottingAr: 'تسبح في عائلات مهيبة حول جزر أسوان والجزر الرملية.',
      spottingEn: 'Nests along sandy islets and secluded Nile channels.'
    }
  ];

  return (
    <div
      className="min-h-screen text-[#1C140A] selection:bg-[#c99a5d] selection:text-white pt-24 sm:pt-28 lg:pt-32 pb-20 relative overflow-hidden"
      style={{
        backgroundColor: '#f4e8ce',
        backgroundImage: `
          radial-gradient(ellipse at 50% 15%, rgba(255, 250, 240, 0.8) 0%, rgba(244, 232, 206, 0.85) 60%, rgba(228, 212, 182, 0.95) 100%),
          radial-gradient(#c99a5d 0.8px, transparent 0.8px)
        `,
        backgroundSize: '100% 100%, 32px 32px'
      }}
    >
      {/* Ancient Temple Architectural Cornice & Winged Sun of Thebes (Top Border) */}
      <div className="w-full border-b-2 border-[#c99a5d]/70 bg-[#e5e7e5]/80 backdrop-blur-xs py-2 px-4 shadow-xs select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#7A5528]">
          <div className="flex items-center gap-3">
            <span className="text-[#c99a5d] text-base">𓋹</span>
            <span className="hidden md:inline">𓅃 𓅂 𓅄</span>
            <span>𓊽</span>
          </div>

          {/* Center Winged Horus Solar Seal (قرص الشمس المجنح) */}
          <div className="flex items-center gap-2 sm:gap-3 text-center">
            <span className="text-lg sm:text-2xl text-[#c99a5d] leading-none">𓍹</span>
            <span className="text-sm sm:text-lg text-[#c99a5d] font-bold">𓅃</span>
            <span className="font-extrabold text-[10px] sm:text-xs tracking-[0.22em] text-[#5C3C14]">
              {isAr ? 'صرح طيور الفراعنة المقدسة · معابد النيل الخالد' : 'TEMPLE OF THE SACRED AVIAN SOULS · NILE SANCTUARY'}
            </span>
            <span className="text-sm sm:text-lg text-[#c99a5d] font-bold">𓅃</span>
            <span className="text-lg sm:text-2xl text-[#c99a5d] leading-none">𓍻</span>
          </div>

          <div className="flex items-center gap-3">
            <span>𓊽</span>
            <span className="hidden md:inline">𓅄 𓅂 𓅃</span>
            <span className="text-[#c99a5d] text-base">𓋹</span>
          </div>
        </div>
      </div>

      {/* Decorative Golden Solar Auras */}
      <div className="absolute top-20 -right-24 w-[650px] h-[650px] bg-[#c99a5d]/18 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-[600px] h-[600px] bg-[#c99a5d]/14 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mt-8 sm:mt-12">
        {/* Pharaonic Grand Entrance Header (Unconventional & Royal) */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          {/* Royal Cartouche Hieroglyphic Ribbon */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#c99a5d] bg-[#FAF2DF] shadow-[0_4px_16px_rgba(201,154,93,0.2)] mb-6 select-none">
            <span
              className="text-2xl sm:text-3xl text-[#c99a5d] leading-none"
              style={{ fontFamily: "'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif" }}
            >
              𓍹 𓅃 𓅂 𓅄 𓅠 𓊽 𓋹 𓍻
            </span>
            <span className="w-1.5 h-4 bg-[#c99a5d] rounded-full" />
            <span className="text-xs sm:text-[13px] uppercase tracking-[0.24em] font-extrabold text-[#6A471C]">
              {isAr ? 'إرث ٥٠٠٠ عام من التوثيق البيئي المقدس' : '5,000 YEARS OF SACRED AVIAN ARCHIVE'}
            </span>
          </div>

          {/* Grand Pharaonic Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black tracking-[-0.03em] leading-[1.05] text-[#0a515b] font-heading mb-6">
            <span className="block">
              {isAr ? 'طيور الفراعنة حيّة' : 'Pharaohs Birds Alive'}
            </span>
            <span className="block font-serif italic font-normal text-[#c99a5d] drop-shadow-xs mt-2 text-3xl sm:text-5xl lg:text-[62px]">
              {isAr ? 'بين نقوش المعابد وسماء النيل الخالد.' : 'Living Hieroglyphs Across Aswan Waters.'}
            </span>
          </h1>

          {/* Pharaonic Scepter Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#c99a5d] to-[#c99a5d]" />
            <div className="w-9 h-9 rounded-full border-2 border-[#c99a5d] bg-[#e5e7e5] flex items-center justify-center text-[#c99a5d] text-base font-serif shadow-xs">
              𓋹
            </div>
            <div className="h-[2px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#c99a5d] to-[#c99a5d]" />
          </div>

          <p className="text-base sm:text-xl text-[#4A3825] leading-relaxed max-w-3xl mx-auto font-normal">
            {isAr
              ? 'لم تكن الطيور عند أجدادنا مجرد كائنات عابرة؛ بل كانت أرواحاً مجنحة للآلهة، ورسل الخلود، وبوصلة فيضان النهر العظيم. استكشف كيف تنبض الفصائل ذاتها المنقوشة على جدران المعابد بالحياة والحرية اليوم في سماء أسوان.'
              : 'To the ancient Egyptians, birds were celestial messengers and living hieroglyphs of eternity. Discover how the identical species carved thousands of years ago upon granite temple walls soar free right before your eyes in Aswan today.'}
          </p>
        </div>

        {/* Section 1: The Interactive Royal Papyrus Scroll Sanctuary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c99a5d]/60 bg-[#e5e7e5]/90 text-xs font-bold uppercase tracking-wider text-[#6F4B1F]">
              <Eye className="w-3.5 h-3.5 text-[#c99a5d]" />
              <span>{isAr ? 'مخطوطات بردي أثرية موثقة' : 'AUTHENTIC PAPYRUS EVIDENCE'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C140A] leading-tight">
              {isAr ? (
                <>
                  من جدران المعابد <br />
                  <span className="font-serif italic font-normal text-[#c99a5d]">
                    إلى أحضان الطبيعة النيلية.
                  </span>
                </>
              ) : (
                <>
                  From Temple Frescoes <br />
                  <span className="font-serif italic font-normal text-[#c99a5d]">
                    To Pristine River Marshes.
                  </span>
                </>
              )}
            </h2>

            {/* Currently Inspected Exhibit Detail Tablet */}
            <div className="p-6 rounded-2xl border-2 border-[#c99a5d]/70 bg-[#FAF1DF]/95 shadow-md relative overflow-hidden">
              <div className="absolute top-2 right-3 rtl:right-auto rtl:left-3 text-4xl text-[#c99a5d]/30 font-serif select-none pointer-events-none">
                {activeExhibit.glyph}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#8C6239] mb-1.5">
                <span>𓍹 {activeExhibit.gardiner} 𓍻</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#1C140A] mb-1">
                {isAr ? activeExhibit.nameAr : activeExhibit.nameEn}
              </h3>

              <div className="text-xs font-semibold text-[#8C581F] mb-3">
                {isAr ? activeExhibit.dynastyAr : activeExhibit.dynastyEn}
              </div>

              <p className="text-sm text-[#4A3825] leading-relaxed mb-4">
                {isAr ? activeExhibit.descAr : activeExhibit.descEn}
              </p>

              <div className="pt-3 border-t border-[#c99a5d]/30 flex items-start gap-2 text-xs text-[#5C3C17]">
                <Compass className="w-4 h-4 text-[#c99a5d] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">
                    {isAr ? 'موطن الرصد الحي في أسوان:' : 'Where to spot live in Aswan:'}
                  </span>
                  <span>{isAr ? activeExhibit.aswanLocationAr : activeExhibit.aswanLocationEn}</span>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-2">
              <button
                onClick={() => handleOpenBooking('Pharaohs Birds Alive Signature')}
                type="button"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-[#1C1306] shadow-[0_8px_25px_rgba(201,154,93,0.35)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(201,154,93,0.5)] hover:scale-[1.02] active:scale-[0.98] border border-[#B07E3D] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #F0DBB4 0%, #C99A5D 50%, #B07E3D 100%)'
                }}
              >
                <span className="tracking-wide">
                  {isAr ? 'احجز تجربة طيور الفراعنة الحصرية' : 'Book Signature Pharaohs Experience'}
                </span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Master Papyrus Parchment Scroll */}
          <div className="lg:col-span-7">
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
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(55,28,8,0.5) 0%, rgba(95,50,18,0.15) 20%, rgba(255,245,225,0.45) 50%, rgba(110,65,25,0.2) 75%, rgba(45,20,5,0.55) 100%)'
                  }}
                />
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-[#3E220A] text-xs font-serif font-extrabold select-none tracking-[0.2em] uppercase opacity-90">
                  <span className="text-[#8C6239]">𓋹</span>
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-[#2E1805]">
                    {isAr ? 'سجل البردي الملكي لطير النيل' : 'ROYAL NILE PAPYRUS SCROLL'}
                  </span>
                  <span className="text-[#8C6239]">𓊽</span>
                </div>
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
              </div>

              {/* The Ancient Egyptian Papyrus Parchment Container */}
              <div
                className="relative rounded-lg sm:rounded-xl p-3.5 sm:p-6 shadow-[0_22px_55px_rgba(140,98,40,0.25)] border-2 border-[#c99a5d] overflow-hidden group z-10"
                style={{
                  backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
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
                      {isAr ? 'مخطوطة طيور النيل البردية' : 'THE SACRED PAPYRUS ARCHIVE'}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-[#5E3710] uppercase bg-[#E8D4A8]/80 px-2.5 py-0.5 rounded border border-[#8C581F]/40 backdrop-blur-sm font-bold">
                    {isAr ? 'بردية أثرية موثقة' : 'Authentic Papyrus'}
                  </div>
                </div>

                {/* Main Active Fresco Display */}
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/10] bg-black shadow-[0_12px_30px_rgba(35,18,5,0.4)] border-2 border-[#8C581F]/50 z-10">
                  <img
                    src={activeExhibit.image}
                    alt={isAr ? activeExhibit.nameAr : activeExhibit.nameEn}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                  {/* Caption Plaque at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-left rtl:text-right bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl text-[#F0DBB4]">{activeExhibit.glyph}</span>
                      <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                        {isAr ? activeExhibit.nameAr : activeExhibit.nameEn}
                      </h3>
                    </div>
                    <div className="text-xs text-[#E5C365] font-serif mb-1">
                      {isAr ? activeExhibit.titleAr : activeExhibit.titleEn}
                    </div>
                  </div>
                </div>

                {/* Papyrus Scroll Thumbnails Selector */}
                <div className="relative z-10 mt-4 pt-3.5 border-t border-[#7A4B1A]/35">
                  <div className="text-[11px] uppercase tracking-wider text-[#3D230A] font-extrabold mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#8C581F]">𓅃</span>
                      <span>{isAr ? 'شواهد البرديات الفرعونية' : 'PAPYRUS AVIAN SCROLLS'}</span>
                    </span>
                    <span className="text-[10px] text-[#5C3612] lowercase font-semibold">
                      {isAr ? 'انقر للتبديل والفحص' : 'click to inspect'}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2.5">
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
                              alt={isAr ? item.nameAr : item.nameEn}
                              className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0.5 right-0.5 rtl:right-auto rtl:left-0.5 bg-black/75 rounded px-1 text-[10px] text-[#F0DBB4]">
                              {item.glyph}
                            </div>
                          </div>
                          <div className="text-[10px] font-extrabold text-[#2B1604] truncate leading-tight">
                            {isAr ? item.nameAr : item.nameEn}
                          </div>
                          <div className="text-[9px] text-[#7A4518] font-bold truncate">
                            {isAr
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
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(55,28,8,0.5) 0%, rgba(95,50,18,0.15) 20%, rgba(255,245,225,0.45) 50%, rgba(110,65,25,0.2) 75%, rgba(45,20,5,0.55) 100%)'
                  }}
                />
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-[#3E220A] text-xs font-serif font-extrabold select-none tracking-[0.2em] uppercase opacity-90">
                  <span className="text-[#8C6239]">𓊽</span>
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-[#2E1805]">
                    {isAr ? 'أرشيف طيور أسوان الفرعونية' : 'ASWAN ANCIENT BIRD SCROLLS'}
                  </span>
                  <span className="text-[#8C6239]">𓋹</span>
                </div>
                <div className="relative z-10 flex items-center">
                  <div className="w-3.5 h-5 sm:h-6 rounded-full bg-[#D4B67D] border border-[#7A4B1A]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-3 rounded-full bg-[#5C320E]/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Sacred Avian Hieroglyphic Pantheon (4 Pharaonic Temple Steles) */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c99a5d]/60 bg-[#e5e7e5]/90 text-xs font-bold uppercase tracking-wider text-[#6F4B1F] mb-3">
              <Shield className="w-3.5 h-3.5 text-[#c99a5d]" />
              <span>{isAr ? 'مجمع الآلهة وحماة السماء' : 'AVIAN PANTHEON OF ETERNITY'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C140A] tracking-tight">
              {isAr ? 'أسرار الطيور في العقيدة المصرية القديمة' : 'Sacred Avian Guardians in Ancient Egyptian Cosmology'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pantheonDeities.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl border-2 border-[#c99a5d]/50 bg-[#FAF3E3] shadow-md hover:border-[#c99a5d] hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Glyph Seal */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl border-2 border-[#c99a5d] bg-[#e5e7e5] flex items-center justify-center text-3xl text-[#8C581F] shadow-xs group-hover:scale-110 transition-transform">
                      {item.glyph}
                    </div>
                    <span className="text-xs font-serif font-extrabold text-[#c99a5d] px-2 py-1 rounded bg-[#FAF1DF] border border-[#c99a5d]/40">
                      𓋹 Ankh
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#1C140A] mb-1">
                    {isAr ? item.deityAr : item.deityEn}
                  </h3>

                  <div className="text-xs font-bold text-[#8C6239] mb-3 pb-2.5 border-b border-[#c99a5d]/30">
                    {isAr ? item.speciesAr : item.speciesEn}
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#4A3825] leading-relaxed mb-4">
                    {isAr ? item.significanceAr : item.significanceEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#c99a5d]/30 flex items-start gap-2 text-[11px] text-[#5C3C17]">
                  <Compass className="w-3.5 h-3.5 text-[#c99a5d] shrink-0 mt-0.5" />
                  <span>{isAr ? item.spottingAr : item.spottingEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            Section 3: Pharaonic Birding Tours — Three Sacred Journeys
            ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-20 sm:mb-28">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c99a5d]/60 bg-[#e5e7e5]/90 text-xs font-bold uppercase tracking-wider text-[#6F4B1F] mb-4 select-none">
              <Anchor className="w-3.5 h-3.5 text-[#c99a5d]" />
              <span>{isAr ? 'الجولات الفرعونية الحصرية' : 'EXCLUSIVE PHARAONIC JOURNEYS'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0a515b] font-heading mb-4 leading-[1.08]">
              {isAr ? (
                <>
                  <span className="block">ثلاثة مسارات مقدسة</span>
                  <span className="block font-serif italic font-normal text-[#c99a5d] drop-shadow-xs mt-1 text-2xl sm:text-4xl">
                    على خطى طيور الفراعنة.
                  </span>
                </>
              ) : (
                <>
                  <span className="block">Three Sacred Journeys</span>
                  <span className="block font-serif italic font-normal text-[#c99a5d] drop-shadow-xs mt-1 text-2xl sm:text-4xl">
                    Walking Among Pharaohs' Birds.
                  </span>
                </>
              )}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#c99a5d] to-[#c99a5d]" />
              <span className="text-[#c99a5d] text-xl font-serif select-none">𓅃</span>
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#c99a5d] to-[#c99a5d]" />
            </div>
            <p className="text-base sm:text-lg text-[#4A3825] leading-relaxed max-w-2xl mx-auto">
              {isAr
                ? 'ثلاث رحلات نيلية فريدة تربط بين الطيور المقدسة المنقوشة على جدران المعابد وتلك التي لا تزال تحلق حرة في سماء أسوان اليوم.'
                : 'Three unique Nile expeditions connecting the sacred birds immortalized on temple walls with the very same species soaring free above Aswan today.'}
            </p>
          </div>

          {/* Three Tour Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            {pharaohsTours.map((tour) => (
              <div
                key={tour.id}
                className="group relative flex flex-col rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(140,98,40,0.22)] border-2 border-[#c99a5d]/60 hover:border-[#c99a5d] hover:shadow-[0_20px_55px_rgba(140,98,40,0.35)] transition-all duration-500"
                style={{ backgroundColor: '#FAF1DF' }}
              >
                {/* Fresco Image with Pharaonic Frame */}
                <div className="relative overflow-hidden aspect-[16/10] shrink-0">
                  {/* Papyrus top-roll decorative strip */}
                  <div
                    className="absolute top-0 inset-x-0 h-6 z-20 pointer-events-none"
                    style={{
                      backgroundImage: 'url(/assets/papyrus-parchment.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'top center',
                      opacity: 0.85
                    }}
                  />
                  <div className="absolute top-0 inset-x-0 h-6 z-20 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg,rgba(55,28,8,0.5) 0%,transparent 100%)' }}
                  />

                  <img
                    src={tour.image}
                    alt={isAr ? tour.titleAr : tour.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Dark cinematic scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Hieroglyph badge top-right */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1C1306]/75 backdrop-blur-sm border border-[#c99a5d]/50 select-none">
                    <span className="text-[#E5C365] text-sm font-serif">
                      {tour.id === 'hapi-tour' ? '𓅂' : tour.id === 'horus-tour' ? '𓅃' : '𓅠'}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#EAD4A0]">
                      {isAr ? tour.eyebrowAr : tour.eyebrow}
                    </span>
                  </div>

                  {/* Price badge bottom-left */}
                  <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 z-30">
                    <div className="inline-flex items-baseline gap-1 px-3 py-1.5 rounded-xl font-black text-[#1C1306] shadow-md border border-[#B07E3D]"
                      style={{ background: 'linear-gradient(135deg,#F0DBB4 0%,#C99A5D 60%,#B07E3D 100%)' }}>
                      <span className="text-xs font-bold">$</span>
                      <span className="text-xl sm:text-2xl leading-none">{tour.priceNumber}</span>
                      <span className="text-xs font-semibold opacity-80">{isAr ? 'للشخص' : '/person'}</span>
                    </div>
                  </div>

                  {/* Duration + Marina badges bottom-right */}
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 z-30 flex flex-col gap-1 items-end rtl:items-start">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[10px] text-[#EAD4A0] font-bold">
                      <Clock className="w-3 h-3 shrink-0" />
                      <span>{isAr ? tour.durationAr : tour.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* Zone pill */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#c99a5d] shrink-0" />
                    <span className="text-xs font-bold text-[#7A5528] uppercase tracking-wider">
                      {isAr ? tour.zoneLabelAr : tour.zoneLabelEn}
                    </span>
                  </div>

                  {/* Tour name */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#1C140A] mb-1 leading-tight font-heading">
                    {isAr ? tour.titleAr : tour.title}
                  </h3>

                  {/* Marina info */}
                  <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-[#c99a5d]/30">
                    <Anchor className="w-3.5 h-3.5 text-[#8C6239] shrink-0" />
                    <span className="text-xs text-[#5C3C17] font-semibold">
                      {isAr ? tour.startingMarinaAr : tour.startingMarinaEn}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#4A3825] leading-relaxed mb-4 flex-1">
                    {isAr ? tour.descAr : tour.desc}
                  </p>

                  {/* Key highlights */}
                  <div className="space-y-2 mb-5">
                    {(isAr ? tour.keyDifferentiatorsAr : tour.keyDifferentiators).slice(0, 3).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4A3825]">
                        <span className="text-[#c99a5d] text-sm font-serif shrink-0 mt-[-1px] select-none">𓋹</span>
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meals / drinks line */}
                  <div className="flex items-start gap-2 text-xs text-[#5C3C17] mb-5 pb-4 border-b border-[#c99a5d]/25">
                    <Star className="w-3.5 h-3.5 text-[#c99a5d] shrink-0 mt-0.5" />
                    <span className="font-semibold italic leading-snug">
                      {isAr ? tour.mealsDrinksAr : tour.mealsDrinksEn}
                    </span>
                  </div>

                  {/* Action buttons — always at bottom */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={() => { setDetailTourId(tour.id); setIsDetailOpen(true); }}
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#c99a5d]/70 bg-[#FAF1DF] hover:bg-[#FFF8ED] hover:border-[#c99a5d] text-[#5C3C15] hover:text-[#1C140A] text-sm font-bold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                    >
                      <ScrollText className="w-4 h-4 text-[#c99a5d]" />
                      <span>{isAr ? 'عرض البرنامج' : 'View Itinerary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setBookingTourId(tour.id); setIsBookingDrawerOpen(true); }}
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-[#1C1306] shadow-[0_6px_20px_rgba(201,154,93,0.35)] hover:shadow-[0_10px_30px_rgba(201,154,93,0.5)] hover:scale-[1.02] active:scale-[0.98] border border-[#B07E3D] transition-all duration-200 cursor-pointer"
                      style={{ background: 'linear-gradient(135deg,#F0DBB4 0%,#C99A5D 50%,#B07E3D 100%)' }}
                    >
                      <span>{isAr ? 'احجز الآن' : 'Book Now'}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: The Royal Temple Stele Booking Shrine */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-14 border-2 border-[#c99a5d] shadow-[0_25px_60px_rgba(140,98,40,0.25)] overflow-hidden text-center max-w-4xl mx-auto"
          style={{
            backgroundColor: '#FAF1DF',
            backgroundImage: `
              radial-gradient(ellipse at 50% 0%, rgba(255, 248, 235, 0.9) 0%, rgba(250, 241, 223, 0.95) 100%),
              radial-gradient(#c99a5d 0.7px, transparent 0.7px)
            `,
            backgroundSize: '100% 100%, 24px 24px'
          }}
        >
          {/* Top Hieroglyphic Inscription */}
          <div className="text-2xl sm:text-3xl text-[#c99a5d] mb-4 tracking-widest font-serif select-none">
            𓍹 𓅃 𓋹 𓊽 𓍻
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a515b] tracking-tight mb-4 font-heading">
            {isAr ? 'عِش تجربة طيور الفراعنة الحصرية في أسوان' : 'Experience Pharaohs Birds Alive in Aswan'}
          </h2>

          <p className="text-base sm:text-lg text-[#553F28] leading-relaxed max-w-2xl mx-auto mb-8">
            {isAr
              ? 'رحلة نيلية استكشافية خاصة تصحبك فيها نخبة من علماء الطيور والبحارة النوبيين لرصد الطيور المقدسة في بيئاتها الأصلية مع مناظير متطورة وشاي نوبي أصيل.'
              : 'A private Nile expedition guided by expert ornithologists and Nubian boat captains to observe the sacred birds in their untouched natural habitats with professional optics.'}
          </p>

          <button
            onClick={() => handleOpenBooking('Pharaohs Birds Alive Signature')}
            type="button"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-base text-[#1C1306] shadow-[0_10px_30px_rgba(201,154,93,0.45)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(201,154,93,0.6)] hover:scale-105 active:scale-95 border border-[#B07E3D] cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #F0DBB4 0%, #C99A5D 50%, #B07E3D 100%)'
            }}
          >
            <Sparkles className="w-4 h-4 text-[#1C1306]" />
            <span className="tracking-wide">
              {isAr ? 'احجز التجربة الملكية الآن' : 'Reserve Royal Experience'}
            </span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </button>
        </div>
      </div>

      {/* Ancient Temple Architectural Bottom Border */}
      <div className="w-full border-t-2 border-[#c99a5d]/70 bg-[#e5e7e5]/80 backdrop-blur-xs py-2 px-4 shadow-xs select-none mt-20 sm:mt-28">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#7A5528]">
          <div className="flex items-center gap-3">
            <span className="text-[#c99a5d] text-base">𓋹</span>
            <span className="hidden sm:inline">𓅃 𓅂 𓅄</span>
            <span>𓊽</span>
          </div>

          <div className="font-extrabold text-[10px] sm:text-xs tracking-[0.25em] text-[#5C3C14] text-center">
            {isAr ? 'حماة النيل الأبدي · إرث الحضارة المصرية الخالدة' : 'ETERNAL NILE GUARDIANS · TIMELESS EGYPTIAN SACRED LEGACY'}
          </div>

          <div className="flex items-center gap-3">
            <span>𓊽</span>
            <span className="hidden sm:inline">𓅄 𓅂 𓅃</span>
            <span className="text-[#c99a5d] text-base">𓋹</span>
          </div>
        </div>
      </div>

      {/* Tour Detail Modal */}
      {isDetailOpen && detailTourId && (
        <TourDetailModal
          tourId={detailTourId}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onBookNow={(id) => {
            setIsDetailOpen(false);
            setBookingTourId(id || detailTourId);
            setIsBookingDrawerOpen(true);
          }}
          isAr={isAr}
        />
      )}

      {/* Booking Drawer */}
      <BookingDrawer
        isOpen={isBookingDrawerOpen}
        onClose={() => setIsBookingDrawerOpen(false)}
        initialTourId={bookingTourId}
        isAr={isAr}
      />
    </div>
  );
};
