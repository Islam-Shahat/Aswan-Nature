import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Compass,
  Award,
  Sparkles,
  ShieldCheck,
  Star,
  BookOpen,
  Palette,
  Tent,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  TreePine,
  Backpack,
  Smile,
  Heart,
  Users,
  Clock
} from 'lucide-react';

export const LearningCampsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  // Interactive active kit item
  const [selectedKitIndex, setSelectedKitIndex] = useState(0);

  // Field explorer kit items given to each child
  const explorerKit = [
    {
      icon: '🔭',
      titleAr: 'منظار المستكشف الميداني',
      titleEn: 'Junior Field Binoculars',
      descAr: 'منظار مخصص للأطفال خفيف الوزن وآمن ضد الصدمات، بتقريب 8X وعدسات معالجة لرؤية ريش الطيور بوضوح فائق.',
      descEn: 'Kid-safe lightweight 8x shockproof binoculars tailored for small hands to observe plumage and flight patterns up to 8x magnification.',
      tagAr: 'لكل طفل',
      tagEn: 'Included for Every Child',
      color: '#0a515b'
    },
    {
      icon: '📖',
      titleAr: 'سجل الطبيعة المقاوم للماء',
      titleEn: 'Waterproof Field Journal',
      descAr: 'دفتر استكشاف خاص بالطفل لتدوين الملاحظات، وجمع أختام الطيور المكتشفة، وحل ألغاز المحميات الطبيعية.',
      descEn: 'A personalized waterproof field notebook with identification checklists, bird tracks, and nature observation logs.',
      tagAr: 'توثيق وتعلّم',
      tagEn: 'Field Documentation',
      color: '#21c715'
    },
    {
      icon: '🎨',
      titleAr: 'حقيبة الرسم بالألوان المائية',
      titleEn: 'Island Wildlife Sketch Kit',
      descAr: 'ألوان ومخططات بيئية تتيح للطفل رسم الطيور والزهور النيلية على ضفاف الجزيرة وسط أجواء هادئة وملهمة.',
      descEn: 'Natural non-toxic watercolor palette and archival paper for riverbank nature sketching and creative wildlife expression.',
      tagAr: 'إبداع فني',
      tagEn: 'Creative Art',
      color: '#c99a5d'
    },
    {
      icon: '🏅',
      titleAr: 'وسام ودبلوم حارس النيل الشاب',
      titleEn: 'Junior River Ranger Diploma',
      descAr: 'شهادة وميدالية تذكارية رسمية معتمدة تُسلَّم للطفل في ختام المعسكر تتويجاً لمجهوده في حماية بيئة النهر.',
      descEn: 'An official certificate and engraved ranger badge presented during the sunset ceremony recognizing conservation stewardship.',
      tagAr: 'شهادة معتمدة',
      tagEn: 'Official Ranger Badge',
      color: '#0a515b'
    }
  ];

  // Camp Programs with kids-friendly themes
  const campPrograms = [
    {
      id: 'young-naturalists',
      title: isAr ? 'معسكر المستكشفين الصغار' : 'Junior River Rangers Camp',
      age: isAr ? 'الأعمار: ٧ - ١٤ سنة' : 'Ages: 7–14 Years',
      badge: isAr ? 'الأكثر طلباً للأطفال 🌟' : 'Most Popular for Kids 🌟',
      badgeColor: 'bg-[#21c715] text-white',
      accentColor: '#0a515b',
      duration: isAr ? 'يومان / عطلة نهاية الأسبوع' : '2 Days / Weekend Experience',
      desc: isAr
        ? 'مغامرة مليئة بالحماس يتعلم فيها الطفل أسرار رصد الطيور، قراءة خريطة النيل، وتحديد أصوات الكائنات البرية بأمان تام وبإشراف مرشدين متخصصين.'
        : 'An exciting hands-on adventure where kids master real binoculars, decode river wildlife tracks, and learn bird calls safely with certified naturalist mentors.',
      features: isAr
        ? [
            'ورشة تفاعلية لتعليم استخدام التلسكوبات والمناظير',
            'حقيبة المستكشف الكاملة وسجل ميداني خاص بكل طفل',
            'إشراف كامل بنسبة مرشد لكل ٤ أطفال مع سترات نجاة',
            'تتويج رسمي بوسام وشهادة حارس النيل المعتمد'
          ]
        : [
            'Hands-on spotting scope & binocular handling games',
            'Full Explorer Backpack with waterproof journal & sketch set',
            '1:4 educator-to-child ratio with specialized safety gear',
            'Sunset graduation ceremony with official ranger medal'
          ],
      image: '/assets/woodland-kingfisher.jpg',
      highlightTag: isAr ? 'مغامرة واستكشاف' : 'Adventure & Discovery'
    },
    {
      id: 'family-discovery',
      title: isAr ? 'خلوة الاستكشاف العائلي' : 'Family River Discovery Retreat',
      age: isAr ? 'لكافة أفراد العائلة' : 'All Ages / Families',
      badge: isAr ? 'مغامرة عائلية ممتعة 👨‍👩‍👧‍👦' : 'Family Bonding 👨‍👩‍👧‍👦',
      badgeColor: 'bg-[#c99a5d] text-white',
      accentColor: '#c99a5d',
      duration: isAr ? 'يوم كامل (٦ ساعات تفاعلية)' : 'Full Day (6 Interactive Hours)',
      desc: isAr
        ? 'فرصة ذهبية للأسر للتواصل وقضاء وقت ثمين بعيداً عن الشاشات، استكشاف جزر الشلال الأول الهادئة وتناول غداء نوبي طازج على جزيرة نيلية خاصة.'
        : 'Disconnect from screens and reconnect with loved ones on private river channels. Families explore secluded islands and enjoy an authentic Nubian picnic lunch.',
      features: isAr
        ? [
            'قارب بيئي خاص بالكامل للعائلة مع قائد نوبي خبير',
            'أنشطة وألعاب بيئية مشتركة تجمع الأطفال والآباء',
            'مأدبة غداء نوبي صحية وطازجة على جزيرة خاصة',
            'ألبوم صور عائلي توثيقي مهدى للأسرة بنهاية اليوم'
          ]
        : [
            'Fully private chartered eco-boat with seasoned Nubian captain',
            'Fun interactive nature challenges connecting parents & children',
            'Fresh organic Nubian island lunch in shaded scenic grove',
            'Complimentary high-res wildlife family photo package'
          ],
      image: '/assets/white-egret-shore.jpg',
      highlightTag: isAr ? 'عائلي وترفيهي' : 'Family & Nature'
    },
    {
      id: 'school-expeditions',
      title: isAr ? 'رحلات المدارس والمجموعات الميدانية' : 'Academic & School Field Safaris',
      age: isAr ? 'المدارس والجامعات' : 'Schools & Academic Groups',
      badge: isAr ? 'معتمد علمياً وبيئياً 🎓' : 'Curriculum Aligned 🎓',
      badgeColor: 'bg-[#0a515b] text-white',
      accentColor: '#1EAA13',
      duration: isAr ? 'برامج مخصصة (يوم أو أكثر)' : 'Custom Tailored Expeditions',
      desc: isAr
        ? 'برامج بيئية تفاعلية مصممة للمدارس الدولية والمحلية تغطي علوم التنوع الحيوي، مسارات الهجرة، وأسرار النيل بتجارب معملية مبسطة في الطبيعة.'
        : 'Educational field ecology curriculum designed for international schools, focusing on freshwater conservation, flyway migration, and outdoor science labs.',
      features: isAr
        ? [
            'تجارب علمية لقياس جودة مياه النيل وجمع العينات',
            'محتوى متوافق مع المناهج التعليمية الدولية (IB / Cambridge)',
            'إشراف طبي وأمني متكامل وخطة سلامة معتمدة',
            'شهادات مشاركة بيئية لجميع الطلاب والمشاركين'
          ]
        : [
            'Hands-on river water quality & biodiversity field testing',
            'Structured curriculum aligned with international science goals',
            'Full medical support, vetted risk management, and child safeguarding',
            'Official scientific expedition certificate for all students'
          ],
      image: '/assets/kingfisher.webp',
      highlightTag: isAr ? 'تعليمي ومنهجي' : 'STEM & Ecology'
    }
  ];

  // Daily adventure steps for kids
  const adventureSteps = [
    {
      step: '01',
      time: '09:00 AM',
      icon: '🚤',
      titleAr: 'إبحار سفينة المستكشفين',
      titleEn: 'Boarding the Explorer Boat',
      descAr: 'توزيع حقائب المستكشفين، وارتداء سترات النجاة الملونة، وبدء الإبحار في قنوات النيل الهادئة.',
      descEn: 'Kids put on their comfy life vests, receive their explorer backpacks, and board the silent eco-boat.'
    },
    {
      step: '02',
      time: '10:30 AM',
      icon: '🔭',
      titleAr: 'رصد صيد طائر الرفراف والبلشون',
      titleEn: 'Spotting the Pied Kingfisher',
      descAr: 'استخدام المناظير الميدانية لترقب غطسات صيد الرفراف وتوثيق أماكن أعشاش الطيور في سجل الطبيعة.',
      descEn: 'Young eyes use scopes to catch the famous kingfisher hovering dive and record sightings in their field journals.'
    },
    {
      step: '03',
      time: '12:30 PM',
      icon: '🏕️',
      titleAr: 'نزهة الجزيرة وحكايات النيل',
      titleEn: 'Island Picnic & River Lore',
      descAr: 'الرسو على جزيرة رملية هادئة لتناول وجبة خفيفة صحية والاستماع لقصص الفراعنة والطيور المقدسة.',
      descEn: 'Landing on a safe sandy islet for delicious organic refreshments and captivating Nubian river tales.'
    },
    {
      step: '04',
      time: '02:00 PM',
      icon: '🎨',
      titleAr: 'مختبر الرسم وتدوين الملاحظات',
      titleEn: 'Nature Art & Track Lab',
      descAr: 'ورشة رسم حية بالألوان المائية في الهواء الطلق، مع مطابقة آثار أقدام الطيور على الرمال.',
      descEn: 'Open-air creative painting session and hands-on identification of riverbank footprints and feathers.'
    },
    {
      step: '05',
      time: '03:30 PM',
      icon: '🏅',
      titleAr: 'حفل تتويج حماة النيل الصغار',
      titleEn: 'Ranger Medal Ceremony',
      descAr: 'أداء قسم حماية البيئة وتسليم وسام حارس النيل الرسمي ودبلوم المستكشف الصغير وسط تصفيق الجميع.',
      descEn: 'Reciting the Young Ranger Nature Pledge and proudly receiving the official Junior Naturalist medal.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-30 lg:pt-34 pb-28 bg-[#F8FAF5] min-h-screen text-[#16241B] selection:bg-[#21c715] selection:text-white relative overflow-hidden">
      {/* Playful Floating Nature Elements & Clouds Background */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#0a515b]/6 blur-3xl pointer-events-none" />
      <div className="absolute top-44 right-8 w-80 h-80 rounded-full bg-[#21c715]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] left-1/3 w-96 h-96 rounded-full bg-[#c99a5d]/10 blur-3xl pointer-events-none" />

      {/* Subtle Treasure-Map Dotted Trail Decoration (SVG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -50,150 Q 300,50 600,200 T 1200,120 T 1800,280"
            fill="none"
            stroke="#0a515b"
            strokeWidth="2.5"
            strokeDasharray="8 12"
          />
          <path
            d="M 50,650 Q 400,520 800,680 T 1500,580 T 2100,720"
            fill="none"
            stroke="#21c715"
            strokeWidth="2.5"
            strokeDasharray="8 14"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* ============================================================ */}
        {/* 1. PLAYFUL HERO HEADER (Kids Explorer Theme) */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          {/* Playful Explorer Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border-2 border-[#CBDCCB] shadow-sm mb-6 hover:scale-105 transition-transform cursor-default">
            <span className="text-lg">🏕️</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#0a515b]">
              {isAr ? 'مخيمات المستكشف الصغير في أسوان' : 'JUNIOR NILE WILDLIFE RANGERS'}
            </span>
            <span className="text-lg">🔭</span>
          </div>

          {/* Child-Friendly Creative Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6 font-heading">
            <span className="block text-[#16241B]">
              {isAr ? 'حيث يلتقي المستكشفون الصغار' : 'Where Young Explorers Meet'}
            </span>
            <span className="inline-block mt-1 font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0a515b] via-[#127361] to-[#21c715] drop-shadow-xs">
              {isAr ? 'بسحر الطبيعة وحرية النيل!' : 'The Wild Wonders of the Nile!'}
            </span>
          </h1>

          {/* Inspiring Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[#455A4C] leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            {isAr
              ? 'أعظم فصول التعلّم لا جدران لها! معسكرات تفاعلية مليئة بالمرح والشغف، يتعلم فيها أطفالك رصد أندر الطيور بالمناظير الحقيقية، واستكشاف جزر النيل بأمان تام ١٠٠٪.'
              : 'The greatest classroom has no walls! Immersive, fun-filled nature expeditions where kids discover rare birds with real binoculars, decode river secrets, and earn official junior ranger honors with 100% verified safety.'}
          </p>

          {/* Fast Interactive Explorer Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CBDCCB] text-[#0a515b] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'مناظير ميدانية حقيقية لكل طفل' : 'Real Field Binoculars for Each Child'}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CBDCCB] text-[#0a515b] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'سترات نجاة مخصصة وإشراف ١:٤' : 'Custom Life Vests & 1:4 Guide Ratio'}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CBDCCB] text-[#0a515b] shadow-xs">
              <Award className="w-4 h-4 text-[#c99a5d]" />
              <span>{isAr ? 'شهادة وميدالية حارس النيل المعتمد' : 'Official Junior Ranger Badge & Medal'}</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. THE EXPLORER'S BACKPACK (حقيبة المستكشف الصغير) */}
        {/* ============================================================ */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0a515b] mb-2">
              <Backpack className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'هدايا ومعدات كل طفل' : "WHAT'S IN THE EXPLORER BACKPACK"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16241B]">
              {isAr ? 'حقيبة المستكشف الصغير' : 'The Young Naturalist Field Kit'}
            </h2>
            <p className="text-sm sm:text-base text-[#556F5C] mt-2">
              {isAr
                ? 'يحصل كل طفل ينضم لمعسكراتنا على حقيبته الميدانية الخاصة، ليتحول إلى باحث بيئي حقيقي!'
                : 'Every young participant receives their own official field backpack loaded with real exploration gear!'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {explorerKit.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedKitIndex(idx)}
                className={`group p-6 rounded-3xl bg-white border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedKitIndex === idx
                    ? 'border-[#0a515b] shadow-[0_16px_35px_-8px_rgba(10,81,91,0.22)] -translate-y-1.5'
                    : 'border-[#E2E8DC] hover:border-[#0a515b]/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl filter drop-shadow-xs group-hover:scale-115 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0a515b]/10 text-[#0a515b]">
                      {isAr ? item.tagAr : item.tagEn}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#16241B] mb-2">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556F5C] leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0F4EC] flex items-center justify-between text-xs font-bold text-[#0a515b]">
                  <span>{isAr ? 'مشمول في كل حجز' : 'Provided in Camp'}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#21c715]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. SUPER SAFETY & PEACE OF MIND FOR PARENTS */}
        {/* ============================================================ */}
        <div className="rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0a515b] via-[#094852] to-[#042429] text-white p-7 sm:p-12 lg:p-16 mb-20 sm:mb-28 shadow-2xl relative">
          {/* Decorative Playful Wave Lines */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#21c715]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-extrabold uppercase tracking-widest text-[#4bf319] mb-4">
                <ShieldCheck className="w-4 h-4 text-[#4bf319]" />
                <span>{isAr ? 'سلامة معتمدة ١٠٠٪ وراحة بال تامة' : 'CERTIFIED SAFETY FIRST'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
                {isAr
                  ? 'مغامرات تلهم العقول بأعلى معايير الأمان المائي'
                  : 'Inspiring young minds with gold-standard river safety'}
              </h2>

              <p className="text-[#D6E6DB] text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8">
                {isAr
                  ? 'نعلم أن أمان طفلك هو أولويتك المطلقة، وهو أولويتنا أيضاً. جميع قواربنا مجهزة بأحدث سترات نجاة مخصصة للأطفال ومطابقة لمعايير السلامة الدولية، مع مرافقة مرشدين معتمدين في الإسعافات الأولية والسلامة النهرية بنسبة مرشد لكل ٤ أطفال.'
                  : 'We know your child’s safety is your number one priority—and it’s ours too. Every vessel features tailored child life jackets, first-aid equipment, and CPR-certified aquatic educators maintaining an intimate 1:4 guide-to-child ratio.'}
              </p>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-bold">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-2.5">
                  <span className="text-xl">🦺</span>
                  <div>
                    <div className="text-white">{isAr ? 'سترات نجاة مخصصة' : 'Custom Life Vests'}</div>
                    <div className="text-[11px] text-[#A9C7B2] font-normal">{isAr ? 'مقاسات ملائمة للأطفال' : 'Perfect child sizing'}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-2.5">
                  <span className="text-xl">🧑‍🏫</span>
                  <div>
                    <div className="text-white">{isAr ? 'نسبة إشراف ١:٤' : '1:4 Educator Ratio'}</div>
                    <div className="text-[11px] text-[#A9C7B2] font-normal">{isAr ? 'رعاية واهتمام فردي' : 'Attentive supervision'}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-2.5">
                  <span className="text-xl">🩺</span>
                  <div>
                    <div className="text-white">{isAr ? 'إسعافات مائية معتمدة' : 'CPR Certified Staff'}</div>
                    <div className="text-[11px] text-[#A9C7B2] font-normal">{isAr ? 'جاهزية طبية متكاملة' : 'Immediate medical readiness'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Playful Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl aspect-[4/3] group">
                <img
                  src="/assets/kingfisher.webp"
                  alt="Young Explorer Nature Mascot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono font-bold text-[#4bf319] block mb-1">
                    {isAr ? 'صياد النيل المرح 🌟' : 'River Kingfisher Mascot 🌟'}
                  </span>
                  <div className="text-sm font-bold">
                    {isAr ? 'تعلم كيف يصطاد الرفراف بدقة خيالية!' : 'Learn how kingfishers hover and dive with pin-point precision!'}
                  </div>
                </div>
              </div>

              {/* Floating Kid Sticker Badge */}
              <div className="absolute -top-4 -right-4 bg-[#c99a5d] text-[#1C1306] font-black text-xs px-3.5 py-2 rounded-2xl border-2 border-white shadow-xl flex items-center gap-1.5 rotate-6">
                <span>⭐</span>
                <span>{isAr ? 'معتمد 100% للأطفال' : '100% Kid Safe'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. THE 3 CAMP PROGRAMS (Child-Centered & Colorful) */}
        {/* ============================================================ */}
        <div className="mb-24 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0a515b] mb-2">
              <TreePine className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'خيارات المعسكرات المتاحة' : 'CAMP PROGRAMS & TRACKS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16241B]">
              {isAr ? 'اختر مغامرة طفلك القادمة' : 'Choose Your Young Explorer’s Adventure'}
            </h2>
            <p className="text-sm sm:text-base text-[#556F5C] mt-2">
              {isAr
                ? 'صُممت برامجنا بعناية لتناسب كل مرحلة عمرية وتمنح الطفل تجربة ممتعة تبقى في ذاكرته للأبد.'
                : 'Carefully curated experiential tracks designed to spark lifelong wonder and love for the natural world.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campPrograms.map((prog) => (
              <div
                key={prog.id}
                className="group relative rounded-3xl sm:rounded-[32px] bg-white border-2 border-[#CBDCCB] shadow-sm hover:shadow-2xl hover:border-[#0a515b] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Image Banner */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4 text-white text-xs font-bold flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#21c715]" />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#0a515b] mb-1">
                      {prog.age}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#16241B] mb-3 leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#556F5C] leading-relaxed mb-6 font-normal">
                      {prog.desc}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-2.5 mb-7">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#2A4030]">
                          <CheckCircle2 className="w-4 h-4 text-[#21c715] shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => handleOpenBooking(prog.title)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#0a515b] hover:bg-[#073940] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 group/btn"
                  >
                    <span>{isAr ? 'احجز مقعد المستكشف الصغير' : 'Reserve Explorer Spot'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. A DAY OF ADVENTURE: TIMELINE (يوم في حياة المستكشف) */}
        {/* ============================================================ */}
        <div className="mb-24 sm:mb-28 bg-[#EBF3E8] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-[#CBDCCB] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0a515b] mb-2">
              <Smile className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'كيف يقضي الأطفال يومهم؟' : 'A DAY OF WONDER & DISCOVERY'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16241B]">
              {isAr ? 'يوم في حياة المستكشف الصغير' : 'A Day in the Life of a Junior Ranger'}
            </h2>
            <p className="text-xs sm:text-sm text-[#556F5C] mt-2">
              {isAr
                ? 'جدول تفاعلي مليء بالأنشطة والمرح من الإبحار الصباحي وحتى التتويج في الغروب.'
                : 'A carefully paced sequence of river observation, creative science, and joyful island play.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
            {adventureSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 border border-[#CBDCCB] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#0a515b]/10 text-[#0a515b]">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#16241B] mb-2 leading-tight">
                    {isAr ? s.titleAr : s.titleEn}
                  </h3>
                  <p className="text-xs text-[#556F5C] leading-relaxed">
                    {isAr ? s.descAr : s.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#F0F4EC] text-[11px] font-mono font-bold text-[#21c715]">
                  Step {s.step}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6. JUNIOR NATURE RANGER PLEDGE & INQUIRY BANNER */}
        {/* ============================================================ */}
        <div className="text-center bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-14 border-2 border-[#CBDCCB] shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle Golden Seal in Background */}
          <div className="absolute -top-10 -right-10 text-8xl opacity-10 select-none">
            🦅
          </div>

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#21c715]/15 border-2 border-[#21c715] flex items-center justify-center mx-auto mb-5 text-2xl sm:text-3xl">
            🌱
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0a515b] block mb-2">
            {isAr ? 'عهد أبطال الطبيعة الصغار' : 'THE JUNIOR NATURALIST OATH'}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16241B] mb-4">
            {isAr
              ? '«نقسم على حماية النيل، ورعاية الطيور، وأن نترك الطبيعة أجمل مما كانت!»'
              : '“We promise to guard the Nile, protect its wild birds, and leave nature better than we found it!”'}
          </h2>

          <p className="text-xs sm:text-base text-[#556F5C] max-w-xl mx-auto mb-8 leading-relaxed">
            {isAr
              ? 'هل ترغب في تسجيل طفلك أو مدرستك في أحد معسكراتنا الاستكشافية القادمة؟ تواصل معنا اليوم لتنسيق موعد التجربة.'
              : 'Ready to ignite your child’s lifelong love for wildlife and natural science? Inquire now to secure upcoming camp dates.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBooking('Junior Naturalists Camp')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0a515b] hover:bg-[#073b42] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{isAr ? 'انضم إلى معسكر المستكشف الصغير' : 'Join Junior Ranger Camp'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              onClick={() => handleOpenBooking('Family Discovery Retreat')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F3F8F2] text-[#0a515b] border-2 border-[#0a515b] font-extrabold text-sm sm:text-base shadow-xs hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>{isAr ? 'استفسار عن المعسكرات العائلية' : 'Inquire for Families'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
