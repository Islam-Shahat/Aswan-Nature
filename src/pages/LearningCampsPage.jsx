import React, { useState } from 'react';
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
  Clock,
  Users,
  ChevronRight
} from 'lucide-react';

export const LearningCampsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  // Active camp tab for clean, non-cluttered interactive experience
  const [activeTab, setActiveTab] = useState(0);
  const [activeGear, setActiveGear] = useState(0);

  const camps = [
    {
      id: 'junior',
      emoji: '🏕️',
      nameAr: 'معسكر المستكشف الصغير',
      nameEn: 'Junior River Rangers',
      ageAr: 'الأعمار: ٧ - ١٤ سنة',
      ageEn: 'Ages: 7–14 Years',
      durationAr: 'يومان (نهاية الأسبوع)',
      durationEn: '2 Days / Weekend',
      tagAr: 'الأكثر حماساً للأطفال ⭐',
      tagEn: 'Kids Favorite ⭐',
      descAr: 'مغامرة نهرية مليئة بالمرح! يتعلم فيها طفلك رصد الطيور بالمناظير الحقيقية، واستكشاف جزر النيل مع مرشدين متخصصين.',
      descEn: 'A real river adventure! Kids master field binoculars, decode wild bird calls, and explore hidden Nile islands with expert guides.',
      perksAr: [
        'منظار ميداني حقيقي وسجل استكشاف لكل طفل',
        'نسبة إشراف مرشد لكل ٤ أطفال مع سترات نجاة',
        'ميدالية وشهادة حارس النيل الشاب الرسمية'
      ],
      perksEn: [
        'Real field binoculars & discovery journal for every child',
        'Attentive 1:4 guide ratio with certified child life vests',
        'Official Junior River Ranger medal & certificate'
      ],
      image: '/assets/woodland-kingfisher.jpg',
      themeBg: 'bg-[#0a515b]',
      lightBg: 'bg-[#0a515b]/10',
      accentColor: '#0a515b'
    },
    {
      id: 'family',
      emoji: '👨‍👩‍👧‍👦',
      nameAr: 'مغامرة الاستكشاف العائلي',
      nameEn: 'Family Island Retreat',
      ageAr: 'لكل العائلة والأطفال',
      ageEn: 'All Ages & Families',
      durationAr: 'يوم كامل (٦ ساعات)',
      durationEn: 'Full Day (6 Hours)',
      tagAr: 'مغامرة عائلية ممتعة 🌿',
      tagEn: 'Family Adventure 🌿',
      descAr: 'يوم استثنائي بعيداً عن الشاشات! قارب بيئي خاص لعائلتك، ألعاب استكشاف بين الجزر، وغداء نوبي لذيذ في قلب الطبيعة.',
      descEn: 'Disconnect from screens! A private chartered eco-boat for your family, island treasure spotting, and a delicious Nubian picnic.',
      perksAr: [
        'قارب خاص بالكامل للعائلة مع قائد نوبي خبير',
        'أنشطة وتحديات استكشاف تناسب كل الأعمار',
        'غداء نوبي طازج على جزيرة هادئة خاصة'
      ],
      perksEn: [
        '100% Private eco-boat charter with Nubian captain',
        'Fun multi-generational nature games & wildlife spotting',
        'Fresh local island picnic in a peaceful river grove'
      ],
      image: '/assets/white-egret-shore.jpg',
      themeBg: 'bg-[#c99a5d]',
      lightBg: 'bg-[#c99a5d]/15',
      accentColor: '#c99a5d'
    },
    {
      id: 'school',
      emoji: '🎓',
      nameAr: 'رحلات المدارس الاستكشافية',
      nameEn: 'School Field Safaris',
      ageAr: 'المدارس والمجموعات',
      ageEn: 'Schools & Youth Groups',
      durationAr: 'برامج يومية مرنة',
      durationEn: 'Custom Day Trips',
      tagAr: 'تعلّم تطبيقي تفاعلي 🔬',
      tagEn: 'Interactive STEM 🔬',
      descAr: 'فصل تعليمي مفتوح في أحضان الطبيعة! تجارب بيئية تفاعلية، دراسة الطيور المهاجرة، ومحتوى متوافق مع المناهج الدولية.',
      descEn: 'The classroom without walls! Interactive outdoor ecology, water quality tests, and bird flyway science led by marine biologists.',
      perksAr: [
        'تجارب عملية لقياس نقاء المياه ورصد التنوع الحيوي',
        'محتوى متوافق مع مناهج العلوم الدولية المعتمدة',
        'تأمين أمني وطبي كامل بنسبة أمان ١٠٠٪'
      ],
      perksEn: [
        'Hands-on freshwater testing & bird census tracking',
        'Curriculum-aligned outdoor environmental science',
        'Full medical risk-assessment & child safety protocols'
      ],
      image: '/assets/kingfisher.webp',
      themeBg: 'bg-[#1EAA13]',
      lightBg: 'bg-[#1EAA13]/10',
      accentColor: '#1EAA13'
    }
  ];

  const currentCamp = camps[activeTab];

  // What kids receive - 4 playful clickable items
  const gearItems = [
    {
      emoji: '🔭',
      titleAr: 'منظار الصغار',
      titleEn: 'Real Binoculars',
      descAr: 'مقاوم للصدمات وخفيف، يقرب الطيور 8X!',
      descEn: 'Shockproof & lightweight 8x zoom for tiny hands!'
    },
    {
      emoji: '📖',
      titleAr: 'دفتر المستكشف',
      titleEn: 'Field Journal',
      descAr: 'مقاوم للماء لجمع الأختام ورسم الآثار!',
      descEn: 'Waterproof logbook for nature stickers & sketches!'
    },
    {
      emoji: '🎨',
      titleAr: 'ألوان النيل',
      titleEn: 'Nature Art Kit',
      descAr: 'ألوان مائية آمنة لرسم الطبيعة على الجزيرة!',
      descEn: 'Safe watercolor palette to paint island flowers & birds!'
    },
    {
      emoji: '🏅',
      titleAr: 'وسام البطولة',
      titleEn: 'Ranger Medal',
      descAr: 'ميدالية حارس النيل الذهبية في حفل الغروب!',
      descEn: 'Shiny gold ranger medal presented at sunset!'
    }
  ];

  return (
    <div className="pt-26 sm:pt-32 pb-24 bg-[#FAFDF8] min-h-screen text-[#16241B] selection:bg-[#21c715] selection:text-white relative overflow-hidden">
      
      {/* Playful Floating CSS Animations & Blobs */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-4deg); }
        }
        @keyframes pop-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
        .animate-pop-pulse {
          animation: pop-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Animated Emojis & Nature Badges */}
      <div className="absolute top-28 left-6 sm:left-14 animate-float-slow pointer-events-none select-none z-10 hidden sm:block">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border-2 border-[#CBDCCB] flex items-center justify-center text-2xl rotate-[-8deg] hover:rotate-12 transition-transform">
          🏕️
        </div>
      </div>

      <div className="absolute top-44 right-6 sm:right-16 animate-float-reverse pointer-events-none select-none z-10 hidden sm:block">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border-2 border-[#CBDCCB] flex items-center justify-center text-2xl rotate-[10deg]">
          🔭
        </div>
      </div>

      <div className="absolute top-[480px] left-4 animate-float-slow pointer-events-none select-none z-10 hidden lg:block">
        <div className="w-12 h-12 rounded-2xl bg-[#f4e8ce] shadow-md border border-[#c99a5d] flex items-center justify-center text-xl rotate-[-12deg]">
          🦅
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#0a515b]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-96 h-96 rounded-full bg-[#21c715]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ============================================================ */}
        {/* 1. PLAYFUL HERO (Clean, Punchy & Joyful) */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#CBDCCB] shadow-xs mb-4 animate-pop-pulse cursor-default">
            <span className="text-base">🎒</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#0a515b] tracking-wide uppercase">
              {isAr ? 'مخيمات المستكشف الصغير' : 'Junior River Explorers'}
            </span>
            <span className="text-base">✨</span>
          </div>

          {/* Big Friendly Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4 font-heading text-[#16241B]">
            {isAr ? 'مغامرات النيل.. ' : 'Wild River Camps.. '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a515b] via-[#10705f] to-[#21c715]">
              {isAr ? 'للأبطال الصغار! 🌿' : 'For Young Heroes! 🌿'}
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#4E6254] max-w-xl mx-auto font-medium leading-relaxed">
            {isAr
              ? 'حيث يلتقي فضول الأطفال بسحر الطبيعة! نأخذ صغارك في رحلات آمنة ١٠٠٪ ليرصدوا أندر الطيور بأنفسهم.'
              : 'Where curiosity meets the wild! 100% safe, joyful expeditions where kids spot rare birds with real scopes.'}
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. PLAYFUL CAMP SELECTOR TABS (Smooth Transition, No Clutter) */}
        {/* ============================================================ */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 px-2">
          {camps.map((camp, idx) => (
            <button
              key={camp.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl font-extrabold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-xs active:scale-95 whitespace-nowrap ${
                activeTab === idx
                  ? `${camp.themeBg} text-white shadow-lg scale-105`
                  : 'bg-white hover:bg-[#F0F5EC] text-[#3A4E40] border border-[#CBDCCB]'
              }`}
            >
              <span className="text-lg">{camp.emoji}</span>
              <span>{isAr ? camp.nameAr : camp.nameEn}</span>
            </button>
          ))}
        </div>

        {/* ============================================================ */}
        {/* 3. ACTIVE CAMP INTERACTIVE SHOWCASE CARD (Springy & Visual) */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#CBDCCB] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Image Side with Floating Badges */}
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] overflow-hidden group">
              <img
                src={currentCamp.image}
                alt={currentCamp.nameEn}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Top Floating Tag */}
              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                <span className="px-4 py-1.5 rounded-full bg-white/95 text-[#16241B] font-black text-xs shadow-md border border-[#CBDCCB]">
                  {isAr ? currentCamp.tagAr : currentCamp.tagEn}
                </span>
              </div>

              {/* Bottom Quick Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Users className="w-3.5 h-3.5 text-[#21c715]" />
                  <span>{isAr ? currentCamp.ageAr : currentCamp.ageEn}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#21c715]" />
                  <span>{isAr ? currentCamp.durationAr : currentCamp.durationEn}</span>
                </div>
              </div>
            </div>

            {/* Content Side - Clean, Engaging, Zero Clutter */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{currentCamp.emoji}</span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a515b]">
                    {isAr ? currentCamp.ageAr : currentCamp.ageEn}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#16241B] mb-3 leading-tight">
                  {isAr ? currentCamp.nameAr : currentCamp.nameEn}
                </h2>

                <p className="text-sm sm:text-base text-[#4E6254] leading-relaxed mb-6">
                  {isAr ? currentCamp.descAr : currentCamp.descEn}
                </p>

                {/* 3 Playful Highlights */}
                <div className="space-y-3 mb-8">
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

              {/* Big Playful Bouncy Button */}
              <button
                onClick={() => handleOpenBooking(isAr ? currentCamp.nameAr : currentCamp.nameEn)}
                className={`w-full py-4 px-6 rounded-2xl ${currentCamp.themeBg} hover:opacity-95 text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group/btn`}
              >
                <span>{isAr ? 'احجز مغامرة طفلك الآن 🎒' : 'Book Child’s Adventure Now 🎒'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. "WHAT'S IN THE EXPLORER BACKPACK" (4 Interactive Pop Cards) */}
        {/* ============================================================ */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0a515b] mb-2">
            <Backpack className="w-4 h-4 text-[#21c715]" />
            <span>{isAr ? 'هدية لكل طفل' : 'EVERY CHILD GETS A KIT'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16241B] mb-6">
            {isAr ? 'ماذا يوجد داخل حقيبة المستكشف؟ 🎒' : "What's in the Explorer Backpack? 🎒"}
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {gearItems.map((gear, gIdx) => (
              <div
                key={gIdx}
                onClick={() => setActiveGear(gIdx)}
                className={`p-5 rounded-3xl bg-white border-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group active:scale-95 ${
                  activeGear === gIdx
                    ? 'border-[#0a515b] shadow-lg -translate-y-1 bg-[#FAFDF8]'
                    : 'border-[#CBDCCB] hover:border-[#0a515b]/60 hover:shadow-md'
                }`}
              >
                <span className="text-4xl mb-2 filter drop-shadow-xs group-hover:scale-120 transition-transform duration-300">
                  {gear.emoji}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#16241B] mb-1">
                  {isAr ? gear.titleAr : gear.titleEn}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#556F5C] leading-snug">
                  {isAr ? gear.descAr : gear.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. PARENT PEACE OF MIND & SUPER SAFETY (Compact Pill Bar) */}
        {/* ============================================================ */}
        <div className="bg-[#0a515b] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden mb-12">
          {/* Subtle Decorative Star */}
          <div className="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">
            ⭐
          </div>

          <div className="flex items-center gap-4 text-center sm:text-left rtl:sm:text-right">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shrink-0">
              🦺
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#4bf319] uppercase tracking-wider mb-0.5">
                {isAr ? 'سلامة معتمدة ١٠٠٪' : '100% CERTIFIED SAFETY'}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {isAr
                  ? 'راحة بال تامة للآباء: سترات نجاة مريحة للأطفال ومرافقة مرشد لكل ٤ أطفال.'
                  : 'Absolute peace of mind: tailored child life jackets & strict 1:4 guide ratio.'}
              </h4>
            </div>
          </div>

          <button
            onClick={() => handleOpenBooking('Junior Naturalists Camp')}
            className="px-6 py-3 rounded-full bg-[#21c715] hover:bg-[#1db312] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer active:scale-95"
          >
            {isAr ? 'تحدث معنا واستفسر 💬' : 'Inquire & Chat 💬'}
          </button>
        </div>

      </div>
    </div>
  );
};
