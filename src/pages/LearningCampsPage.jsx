import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Compass,
  Award,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowRight,
  CheckCircle2,
  Backpack,
  Camera,
  Heart,
  Smile,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

// 4 Primary Camp Tracks featuring real photos
const camps = [
  {
    id: 'junior',
    emoji: '🏕️',
    nameAr: 'معسكر المستكشف الصغير',
    nameEn: 'Junior River Rangers',
    ageAr: 'الأعمار: ٧ - ١٤ سنة',
    ageEn: 'Ages: 7–14 Years',
    durationAr: 'يومان (عطلة نهاية الأسبوع)',
    durationEn: '2 Days / Weekend',
    tagAr: 'الأكثر حماساً وطلباً ⭐',
    tagEn: 'Most Popular for Kids ⭐',
    descAr: 'مغامرة برية حقيقية! يتسلّم طفلك منظاره الخاص، ويتعلم رصد الطيور والتعرف على آثار الحيوانات فوق جزر النيل الهادئة بأمان تام.',
    descEn: 'A true river safari! Kids receive real field binoculars, learn to spot elusive kingfishers, and decode nature clues on safe river isles.',
    image: '/camps-images/kids-binoculars.jpg',
    captionAr: 'أطفالنا يرصدون الطيور بالمناظير في الجزيرة',
    captionEn: 'Kids spotting river birds with real field scopes',
    perksAr: [
      'منظار ميداني حقيقي وسجل استكشاف لكل طفل',
      'مرافقة متخصصة بنسبة مرشد لكل ٤ أطفال',
      'تتويج رسمي بوسام حارس النيل ودبلوم المستكشف'
    ],
    perksEn: [
      'Real child-friendly binoculars & waterproof field journal',
      'Strict 1:4 guide-to-child ratio for maximum attention & safety',
      'Official Junior River Ranger medal and ceremony diploma'
    ],
    themeColor: '#0a515b',
    themeBg: 'bg-[#0a515b]',
    lightBg: 'bg-[#0a515b]/10'
  },
  {
    id: 'family',
    emoji: '👨‍👩‍👧‍👦',
    nameAr: 'خلوة الاستكشاف العائلي',
    nameEn: 'Family Island Retreat',
    ageAr: 'للعائلات وجميع الأعمار',
    ageEn: 'All Ages / Families',
    durationAr: 'يوم كامل (٦ ساعات تفاعلية)',
    durationEn: 'Full Day (6 Hours)',
    tagAr: 'تجربة أسرية لا تُنسى 🌿',
    tagEn: 'Family Adventure 🌿',
    descAr: 'افصلوا عن الشاشات والروتين! قارب بيئي خاص لعائلتك يبحر بين جزر الشلال الأول، مع ألعاب رصد الطبيعة وغداء نوبي لذيذ على جزيرة خاصة.',
    descEn: 'Disconnect from screens! A private chartered eco-boat for your family exploring serene Nile islets, with fun spotting quests and fresh island lunch.',
    image: '/camps-images/kids-telescope.jpg',
    captionAr: 'استكشاف عائلي للتلسكوب وأعشاش الطيور',
    captionEn: 'Family nature quest with field telescope',
    perksAr: [
      'قارب خاص بالكامل للعائلة مع قائد نوبي خبير',
      'تحديات وألعاب استكشافية تجمع الأبناء والآباء',
      'غداء نوبي طازج على جزيرة نيلية مظللة'
    ],
    perksEn: [
      '100% Private chartered boat with experienced captain',
      'Fun multi-generational bird identification challenges',
      'Authentic fresh Nubian picnic lunch on a secluded island'
    ],
    themeColor: '#c99a5d',
    themeBg: 'bg-[#c99a5d]',
    lightBg: 'bg-[#c99a5d]/15'
  },
  {
    id: 'trackers',
    emoji: '🐾',
    nameAr: 'مغامرة تتبع الأثر وبطاقات الطيور',
    nameEn: 'Wildlife Trackers & Nature Artists',
    ageAr: 'الأعمار: ٦ - ١٥ سنة',
    ageEn: 'Ages: 6–15 Years',
    durationAr: 'يوم استكشافي كامل (٥ ساعات)',
    durationEn: 'Full Day Quest (5 Hours)',
    tagAr: 'أنشطة تفاعلية وبطاقات تعريف 🎨',
    tagEn: 'Interactive ID & Art 🎨',
    descAr: 'تجارب حسية ممتعة! يفك الأطفال أسرار آثار أقدام الطيور في رمال الجزر، ويطابقون أنواع الطيور الحية ببطاقات تعريف ملونة مع أنشطة رسم حية.',
    descEn: 'Hands-on river quest! Kids decode real wildlife footprints along sandy Nile shores, identify living birds with official field flashcards, and sketch in their journals.',
    image: '/camps-images/kids-cards.jpg',
    captionAr: 'أطفالنا مع بطاقات توثيق الطيور الميدانية',
    captionEn: 'Kids with official wildlife species flashcards',
    perksAr: [
      'مجموعة بطاقات توثيق حصرية وألوان رسم الطبيعة لكل طفل',
      'تحديات تتبع أثر الطيور والحيوانات النيلية على الرمال بأمان',
      'شهادة المستكشف الميداني وشارة عالم الطبيعة الصغير'
    ],
    perksEn: [
      'Exclusive bird identification flashcards & field sketching kit',
      'Fun wildlife footprint tracking challenges on pristine river shores',
      'Field Explorer Certificate & Young Naturalist badge'
    ],
    themeColor: '#0a515b',
    themeBg: 'bg-[#0a515b]',
    lightBg: 'bg-[#0a515b]/10'
  },
  {
    id: 'school',
    emoji: '🎓',
    nameAr: 'رحلات المدارس والجامعات',
    nameEn: 'School Field Safaris',
    ageAr: 'المدارس والمجموعات الطلابية',
    ageEn: 'Schools & Student Groups',
    durationAr: 'برامج علمية مخصصة',
    durationEn: 'Custom Tailored Safaris',
    tagAr: 'تعليم تطبيقي ومنهجي 🔬',
    tagEn: 'Curriculum Aligned 🔬',
    descAr: 'الفصل التعليمي الأوسع في الهواء الطلق! تجارب تفاعلية لدراسة جودة مياه النيل ومسارات هجرة الطيور العالمية بمرافقة باحثين بيئيين.',
    descEn: 'The greatest classroom without walls! Interactive hands-on freshwater ecology, bird banding science, and biodiversity surveys.',
    image: '/camps-images/kids-circle.jpg',
    captionAr: 'حلقة نقاش وتجارب بيئية حية في المحمية',
    captionEn: 'Outdoor biology circle & field experiments',
    perksAr: [
      'تجارب معملية مبسطة في الطبيعة وجمع عينات المياه',
      'محتوى متوافق مع مناهج العلوم الدولية (IB / Cambridge)',
      'تأمين أمني وطبي كامل بنسبة أمان ١٠٠٪'
    ],
    perksEn: [
      'Hands-on water quality testing & biodiversity census',
      'Aligned with international IB & Cambridge biology criteria',
      'Complete medical risk-assessment & child safeguarding'
    ],
    themeColor: '#1EAA13',
    themeBg: 'bg-[#1EAA13]',
    lightBg: 'bg-[#1EAA13]/10'
  }
];

// Scrapbook moments (Real kids in action)
const scrapbookPhotos = [
  {
    src: '/camps-images/kids-binoculars.jpg',
    titleAr: 'رصد الطيور بالمناظير',
    titleEn: 'Field Binoculars Session',
    sticker: '🔭 8X Zoom!',
    rotate: '-rotate-2'
  },
  {
    src: '/camps-images/kids-cards.jpg',
    titleAr: 'بطاقات توثيق الطيور',
    titleEn: 'Species Identification Cards',
    sticker: '⭐ Super Smart!',
    rotate: 'rotate-2'
  },
  {
    src: '/camps-images/kids-smiling.jpg',
    titleAr: 'ابتسامات المستكشفين',
    titleEn: 'Joy of Discovery',
    sticker: '😄 Big Smiles!',
    rotate: '-rotate-1'
  },
  {
    src: '/camps-images/kids-telescope.jpg',
    titleAr: 'تلسكوب المحميات الطبيعية',
    titleEn: 'Tripod Telescope Spotting',
    sticker: '🦅 Eagle Eyes!',
    rotate: 'rotate-3'
  },
  {
    src: '/camps-images/kids-outdoor.jpg',
    titleAr: 'تتبع آثار الحيوانات في الرمال',
    titleEn: 'Wildlife Footprint Tracking',
    sticker: '🐾 Animal Tracks!',
    rotate: '-rotate-2'
  },
  {
    src: '/camps-images/kids-circle.jpg',
    titleAr: 'حلقة حكايات النيل الاستكشافية',
    titleEn: 'Nature Circle & Lore',
    sticker: '🌿 Nature Club!',
    rotate: 'rotate-1'
  }
];

// 4 Explorer Gear items given to each child
const kitItems = [
  {
    emoji: '🔭',
    titleAr: 'منظار الصغار الحقيقي',
    titleEn: 'Real 8X Binoculars',
    descAr: 'خفيف ومقاوم للصدمات لتقريب الطيور 8 أضعاف',
    descEn: 'Kid-sized shockproof optics with crystal clear focus'
  },
  {
    emoji: '📖',
    titleAr: 'سجل الطبيعة المقاوم للماء',
    titleEn: 'Waterproof Journal',
    descAr: 'لتدوين الملاحظات وجمع أختام الطيور المكتشفة',
    descEn: 'Logbook with bird checklists & nature stickers'
  },
  {
    emoji: '🎨',
    titleAr: 'ألوان الرسم المائية',
    titleEn: 'Island Art Set',
    descAr: 'ألوان آمنة لرسم الطبيعة على ضفاف الجزيرة',
    descEn: 'Non-toxic watercolors for riverbank sketching'
  },
  {
    emoji: '🏅',
    titleAr: 'وسام حارس النيل الذهبي',
    titleEn: 'Ranger Medal & Diploma',
    descAr: 'ميدالية رسمية معتمدة يتسلمها الطفل في حفل الغروب',
    descEn: 'Official engraved metal badge & graduation diploma'
  }
];

export const LearningCampsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  // Active camp track with 5-second auto-cycle
  const [activeTab, setActiveTab] = useState(0);

  // Auto-flip every 5 seconds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % camps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Selected scrapbook photo for full zoom
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const currentCamp = camps[activeTab] || camps[0];
  const isAlternate = activeTab % 2 === 1;

  // ============================================================
  // SPIRAL RIVER RIBBON: Eye-Level Scroll-Linked Stream (Nile Blue)
  // ============================================================
  const [scrollProgress, setScrollProgress] = useState(0.08);
  const containerRef = useRef(null);

  // Meandering spiral path coordinates starting cleanly AFTER the navbar (Y=165)
  const ribbonD =
    "M 520,165 C 740,220 880,340 830,480 C 770,620 540,680 320,650 C 100,620 30,780 70,960 C 120,1160 420,1240 740,1220 C 960,1200 990,1400 910,1560 C 800,1740 520,1780 280,1720 C 80,1660 20,1840 50,2000 C 90,2180 370,2260 700,2240 C 930,2220 970,2420 890,2580 C 800,2740 540,2800 300,2740 C 100,2700 40,2880 120,3000 C 200,3120 420,3170 500,3200";

  // Track scroll position to draw the ribbon at viewer eye level all the way to the end of the page
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const winHeight = window.innerHeight;
            // Eye level sits comfortably at ~55% of the viewport height
            const eyeInContainer = winHeight * 0.55 - rect.top;
            const totalH = rect.height;

            if (totalH > 0) {
              // Reached or scrolled past bottom
              if (rect.bottom <= winHeight + 60) {
                setScrollProgress(1);
              } else {
                const rawProgress = eyeInContainer / totalH;
                // Minimum initial trace of 8% so start is visible near top, max 100%
                setScrollProgress(Math.min(1, Math.max(0.08, rawProgress)));
              }
            }
          } else {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress =
              docHeight > 0
                ? Math.min(
                    1,
                    Math.max(
                      0.08,
                      (window.scrollY + window.innerHeight * 0.55) / document.documentElement.scrollHeight
                    )
                  )
                : 0.08;
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-26 sm:pt-32 pb-24 bg-[#FAFDF8] min-h-screen text-[#16241B] selection:bg-[#21c715] selection:text-white relative overflow-hidden"
    >
      
      {/* CSS Smooth Crossover Transitions */}
      <style>{`
        @media (min-width: 1024px) {
          .glide-panel-photo {
            transition: transform 1.25s cubic-bezier(0.25, 1, 0.4, 1), box-shadow 1.25s ease;
            will-change: transform;
          }
          .glide-panel-photo.alt-active {
            transform: translateX(100%);
          }
          .glide-panel-details {
            transition: transform 1.25s cubic-bezier(0.25, 1, 0.4, 1);
            will-change: transform;
          }
          .glide-panel-details.alt-active {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* ============================================================ */}
      {/* 0. INTERACTIVE BACKGROUND SPIRAL RIBBON (Pure Nile Blue Ribbon) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1000 3200"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Base faint riverbed gradient in Nile Blue */}
            <linearGradient id="spiral-base-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a515b" stopOpacity="0.14" />
              <stop offset="40%" stopColor="#0e6b79" stopOpacity="0.20" />
              <stop offset="75%" stopColor="#149bb0" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0a515b" stopOpacity="0.14" />
            </linearGradient>

            {/* Glowing luminous active stream gradient in Nile Blue */}
            <linearGradient id="spiral-active-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a515b" />
              <stop offset="25%" stopColor="#0c6370" />
              <stop offset="50%" stopColor="#0e7787" />
              <stop offset="75%" stopColor="#129cb3" />
              <stop offset="90%" stopColor="#1cb8d1" />
              <stop offset="100%" stopColor="#5ee4f7" />
            </linearGradient>

            {/* Radiant glowing bloom filter */}
            <filter id="ribbon-bloom" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Underlying Base Ribbon (Faint explorer guide trail in Nile Blue) */}
          <path
            d={ribbonD}
            fill="none"
            stroke="url(#spiral-base-grad)"
            strokeWidth="3"
            strokeDasharray="10 8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Outer Glowing Cyan Halo (follows viewer eye level) */}
          <path
            pathLength="1000"
            d={ribbonD}
            fill="none"
            stroke="#1cb8d1"
            strokeWidth="11"
            strokeOpacity="0.32"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#ribbon-bloom)"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000 * (1 - scrollProgress),
              transition: 'stroke-dashoffset 0.08s ease-out'
            }}
          />

          {/* 3. Core Illuminated Nile Blue Ribbon (Pure Ribbon Stream) */}
          <path
            pathLength="1000"
            d={ribbonD}
            fill="none"
            stroke="url(#spiral-active-grad)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000 * (1 - scrollProgress),
              transition: 'stroke-dashoffset 0.08s ease-out'
            }}
          />
        </svg>
      </div>

      {/* Ambient Nature Lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#0a515b]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-96 h-96 rounded-full bg-[#21c715]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ============================================================ */}
        {/* 1. HERO HEADER (Inspiring, professional & kid-friendly) */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4 font-heading text-[#16241B]">
            {isAr ? 'مغامرات استكشافية حقيقية.. ' : 'Real River Adventures for '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a515b] via-[#10705f] to-[#21c715]">
              {isAr ? 'للمستكشفين الصغار! 🌿' : 'Curious Young Explorers 🌿'}
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#4E6254] max-w-2xl mx-auto font-medium leading-relaxed">
            {isAr
              ? 'وداعاً للشاشات وأهلاً بسحر الطبيعة! معسكرات تفاعلية آمنة تسلّم طفلك منظاره الخاص ليكتشف أندر طيور النيل ويتتبع آثار الحياة البرية بصحبة مرشدين بيئيين متخصصين.'
              : 'Step away from screens and into the wild! Kids explore untouched Nile islands with real binoculars, learn wildlife tracking, and earn their Junior Ranger badge with 100% certified safety.'}
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. AUTO-PLAYING SHOWCASE CARD (Flips automatically every 10s) */}
        {/* ============================================================ */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#CBDCCB] shadow-xl overflow-hidden p-2 sm:p-2.5">
            <div className="flex flex-col lg:flex-row items-stretch relative min-h-[420px]" dir="ltr">
              
              {/* Photo Panel: Smoothly glides across and over the details panel */}
              <div
                className={`w-full lg:w-1/2 relative min-h-[320px] sm:min-h-[420px] overflow-hidden group z-20 rounded-2xl sm:rounded-[28px] shadow-2xl glide-panel-photo ${
                  isAlternate ? 'alt-active' : ''
                }`}
              >
                <img
                  key={currentCamp.image}
                  src={currentCamp.image}
                  alt={currentCamp.nameEn}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-106 animate-in fade-in duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Real Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none" dir={isAr ? 'rtl' : 'ltr'}>
                  <div className="text-xs font-mono font-bold text-[#4bf319] block mb-0.5">
                    📸 {isAr ? 'صورة حقيقية من معسكراتنا في أسوان' : 'Real Photo from Aswan Nature Camps'}
                  </div>
                  <div className="text-sm font-extrabold drop-shadow-sm">
                    {isAr ? currentCamp.captionAr : currentCamp.captionEn}
                  </div>
                </div>
              </div>

              {/* Details Panel: Smoothly glides underneath to the other side */}
              <div
                className={`w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between bg-white z-10 glide-panel-details ${
                  isAlternate ? 'alt-active' : ''
                }`}
                dir={isAr ? 'rtl' : 'ltr'}
              >
                <div key={currentCamp.id} className="animate-in fade-in duration-700 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#16241B] mb-3 leading-snug">
                      {isAr ? currentCamp.nameAr : currentCamp.nameEn}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4E6254] leading-relaxed mb-6 font-normal">
                      {isAr ? currentCamp.descAr : currentCamp.descEn}
                    </p>

                    {/* 3 Clear Perks */}
                    <div className="space-y-2.5 mb-8">
                      {(isAr ? currentCamp.perksAr : currentCamp.perksEn).map((perk, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC] hover:border-[#21c715] transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#21c715]/15 text-[#21c715] flex items-center justify-center shrink-0 font-bold text-xs">
                            ✓
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-[#16241B]">
                            {perk}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Action */}
                  <button
                    onClick={() => handleOpenBooking(isAr ? currentCamp.nameAr : currentCamp.nameEn)}
                    className={`w-full py-4 px-6 rounded-2xl ${currentCamp.themeBg} hover:opacity-95 text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group/btn`}
                  >
                    <span>{isAr ? 'احجز هذا المعسكر لطفلك 🎒' : 'Book This Camp Track 🎒'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. REAL KIDS IN ACTION: SCRAPBOOK GALLERY (Photos from ZIP) */}
        {/* ============================================================ */}
        <div id="scrapbook" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0a515b] mb-2">
              <Camera className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'ألبوم صور أبطالنا الصغار' : 'LITTLE EXPLORERS ALBUM'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#16241B] mb-2">
              {isAr ? 'لحظات حقيقية لا تُنسى في النيل 📸' : 'Real Unforgettable River Moments 📸'}
            </h2>
            <p className="text-xs sm:text-sm text-[#556F5C]">
              {isAr
                ? 'شاهد فرحة الأطفال أثناء رصد الطيور، وتتبع آثار الحيوانات، وتعلّم أسرار النيل!'
                : 'See the genuine joy of kids spotting wildlife, reading tracks, and learning nature lore!'}
            </p>
          </div>

          {/* Playful Scrapbook Grid with Polaroid Styling & Stickers */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {scrapbookPhotos.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative bg-white p-3 sm:p-4 rounded-3xl border-2 border-[#CBDCCB] shadow-md hover:shadow-2xl hover:scale-103 hover:border-[#0a515b] transition-all duration-300 cursor-pointer select-none ${photo.rotate} hover:rotate-0 hover:z-20`}
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#EAF0E5]">
                  <img
                    src={photo.src}
                    alt={photo.titleEn}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* Tape / Sticker Effect */}
                  <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-white/95 text-[#0a515b] font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-sm border border-[#CBDCCB]">
                    {photo.sticker}
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="text-center">
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#16241B] group-hover:text-[#0a515b] transition-colors line-clamp-1">
                    {isAr ? photo.titleAr : photo.titleEn}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. WHAT EVERY CHILD GETS (Interactive 4-Card Explorer Kit) */}
        {/* ============================================================ */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0a515b] mb-2">
            <Backpack className="w-4 h-4 text-[#21c715]" />
            <span>{isAr ? 'حقيبة المستكشف الشاب' : "WHAT'S IN THE EXPLORER BACKPACK"}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16241B] mb-2">
            {isAr ? 'كل طفل يستلم حقيبته الاستكشافية الكاملة! 🎒' : 'Every Child Receives Their Full Explorer Kit! 🎒'}
          </h3>
          <p className="text-xs sm:text-sm text-[#556F5C] mb-8">
            {isAr ? 'معدات حقيقية تحفز الطفل على التعلّم والملاحظة وتظل معه كذكرى جميلة' : 'Real exploration gear that inspires observation and stays with them forever'}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {kitItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white border-2 border-[#CBDCCB] shadow-xs hover:shadow-lg hover:border-[#0a515b] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <span className="text-4xl mb-3 group-hover:scale-120 transition-transform duration-300">
                  {item.emoji}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#16241B] mb-1">
                  {isAr ? item.titleAr : item.titleEn}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#556F5C] leading-snug">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 6. LIGHTBOX FOR SCRAPBOOK PHOTO INSPECTION */}
      {/* ============================================================ */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#0a515b] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.titleEn}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0a515b] block mb-0.5">
                  {selectedPhoto.sticker}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#16241B]">
                  {isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  handleOpenBooking('Junior River Rangers');
                }}
                className="px-5 py-2.5 rounded-full bg-[#0a515b] text-white font-bold text-xs hover:bg-[#073b42] transition-colors cursor-pointer"
              >
                {isAr ? 'احجز التجربة' : 'Book Camp'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
