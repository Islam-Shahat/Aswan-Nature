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
  Camera,
  Heart,
  Smile,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

export const LearningCampsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  // Selected scrapbook photo for full zoom
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // 3 Primary Camp Tracks featuring real photos
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

  return (
    <div className="pt-26 sm:pt-32 pb-24 bg-[#FAFDF8] min-h-screen text-[#16241B] selection:bg-[#21c715] selection:text-white relative overflow-hidden">
      
      {/* CSS Floating Animations */}
      <style>{`
        @keyframes float-soft {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float-soft-alt {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-3deg); }
        }
        .animate-float-soft {
          animation: float-soft 5s ease-in-out infinite;
        }
        .animate-float-soft-alt {
          animation: float-soft-alt 6s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Floating Colorful Stickers */}
      <div className="absolute top-28 left-6 sm:left-12 animate-float-soft pointer-events-none select-none z-10 hidden sm:block">
        <div className="px-3.5 py-2 rounded-2xl bg-[#0a515b] text-white font-extrabold text-xs shadow-lg rotate-[-8deg] border-2 border-white flex items-center gap-1.5">
          <span>🔭</span>
          <span>{isAr ? 'مستكشفو النيل' : 'Junior Rangers'}</span>
        </div>
      </div>

      <div className="absolute top-36 right-6 sm:right-14 animate-float-soft-alt pointer-events-none select-none z-10 hidden sm:block">
        <div className="px-3.5 py-2 rounded-2xl bg-[#c99a5d] text-[#1C1306] font-extrabold text-xs shadow-lg rotate-[8deg] border-2 border-white flex items-center gap-1.5">
          <span>⭐</span>
          <span>{isAr ? 'أمان ١٠٠٪ للأطفال' : '100% Kid Safe'}</span>
        </div>
      </div>

      {/* Ambient Nature Lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#0a515b]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-96 h-96 rounded-full bg-[#21c715]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ============================================================ */}
        {/* 1. PLAYFUL HERO HEADER (Clean, Direct & Beautiful) */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-4 font-heading text-[#16241B]">
            {isAr ? 'حيث تبدأ أعظم مغامرات الطفولة.. ' : 'Where Real Childhood Adventures.. '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a515b] via-[#10705f] to-[#21c715]">
              {isAr ? 'في قلب النيل! 🌿' : 'Begin on the Nile! 🌿'}
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#4E6254] max-w-2xl mx-auto font-medium leading-relaxed">
            {isAr
              ? 'معسكرات مليئة بالبهجة والمرح! نُسلّم أطفالك مناظير حقيقية ليرصدوا أندر الطيور بأنفسهم في بيئة آمنة ١٠٠٪ وبإشراف مرشدين متخصصين.'
              : 'Joyful, hands-on river camps! Kids get real binoculars to spot rare Nile wildlife themselves, guided safely by passionate naturalists.'}
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. THE 3 CAMP TRACKS (All 3 Visible in a Clean 3-Column Grid) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {camps.map((camp) => (
            <div
              key={camp.id}
              className="bg-white rounded-3xl sm:rounded-[32px] border-2 border-[#CBDCCB] shadow-md hover:shadow-2xl hover:border-[#0a515b] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Photo Header */}
              <div className="relative h-60 w-full overflow-hidden bg-[#EAF0E5]">
                <img
                  src={camp.image}
                  alt={camp.nameEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-white text-[#16241B] font-black text-xs shadow-md border border-[#CBDCCB] flex items-center gap-1.5">
                    <span>{camp.emoji}</span>
                    <span>{isAr ? camp.tagAr : camp.tagEn}</span>
                  </span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4 text-white text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#21c715]" />
                  <span>{isAr ? camp.durationAr : camp.durationEn}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#0a515b] mb-1">
                    {isAr ? camp.ageAr : camp.ageEn}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#16241B] mb-3 leading-snug">
                    {isAr ? camp.nameAr : camp.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E6254] leading-relaxed mb-6 font-normal">
                    {isAr ? camp.descAr : camp.descEn}
                  </p>

                  {/* Perks Checklist */}
                  <div className="space-y-2.5 mb-7">
                    {(isAr ? camp.perksAr : camp.perksEn).map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#2A4030]">
                        <CheckCircle2 className="w-4 h-4 text-[#21c715] shrink-0 mt-0.5" />
                        <span className="font-medium">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button for this camp */}
                <button
                  onClick={() => handleOpenBooking(isAr ? camp.nameAr : camp.nameEn)}
                  className={`w-full py-3.5 px-6 rounded-2xl ${camp.themeBg} hover:opacity-95 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group/btn`}
                >
                  <span>{isAr ? 'احجز هذا المعسكر 🎒' : 'Reserve Spot 🎒'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
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

        {/* ============================================================ */}
        {/* 5. PARENT TRUST & GOLD-STANDARD SAFETY (Clean Pill Card) */}
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
                {isAr ? 'سلامة معتمدة ١٠٠٪ وراحة بال تامة للآباء' : '100% CERTIFIED SAFETY & PARENT PEACE OF MIND'}
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-white leading-snug">
                {isAr
                  ? 'سترات نجاة مخصصة ومريحة للأطفال، قوارب بيئية مظللة، ومرافقة مرشد لكل ٤ أطفال.'
                  : 'Tailored child life jackets, shaded eco-boats, and dedicated 1:4 guide-to-child supervision.'}
              </h4>
            </div>
          </div>

          <button
            onClick={() => handleOpenBooking('Junior River Rangers')}
            className="px-6 py-3 rounded-full bg-[#21c715] hover:bg-[#1cb011] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <span>{isAr ? 'استفسر أو احجز المقعد 💬' : 'Inquire & Reserve 💬'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
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
