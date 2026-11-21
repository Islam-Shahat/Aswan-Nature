import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  Bird,
  Sparkles,
  Trees,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';

export const NotYourUsualAswan = ({ currentLang = 'EN' }) => {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef([]);

  const isAr = currentLang === 'AR';

  const cards = [
    {
      id: 'who-we-are',
      num: '01',
      tag: isAr ? 'من نحن' : 'WHO WE ARE',
      icon: Compass,
      title: isAr
        ? 'حُماة النيل وروّاد استكشاف الحياة البرية في أسوان'
        : 'Custodians of the Nile & Pioneers of Aswan Wildlife',
      desc: isAr
        ? 'لسنا مجرد شركة سياحة عادية، بل تحالف شغوف من علماء الطيور والباحثين البيئيين وأبناء النيل النوبيين. نشأنا على ضفاف النهر ونعرف كل جزيرة ومجرى مائي شبراً بشبر، وهدفنا فتح نافذة حقيقية على طبيعة أسوان البكر بعيداً عن صخب المسارات التجارية.'
        : 'We are not a conventional commercial tour operator. We are an impassioned alliance of field ornithologists, local naturalists, and native river stewards who have lived with the Nile for generations. Our purpose is to reveal the untouched wildlife of Aswan that standard tourist itineraries overlook.',
      pills: isAr
        ? [
            '100% باحثون ومرشدون محليون معتمدون',
            '+15 عاماً في حماية موائل النهر والطيور',
            'شراكة وثيقة مع محميات الشلال الأول الطبيعية',
          ]
        : [
            '100% Certified Local Naturalists & Field Guides',
            '15+ Years Protecting Nile Habitats & Avian Life',
            'Direct Partnership with First Cataract Protected Areas',
          ],
      image: '/assets/white-egret-shore.jpg',
      badge: isAr ? 'محميات الشلال الأول' : 'First Cataract Reserves',
      accent: 'emerald',
      bgClass: 'bg-[#FCFDFB] border-[#E1E8DC] text-[#16241B]',
      tagBg: 'bg-[#EEF6EB] text-[#245D33] border-[#D4E8CD]',
      pillBg: 'bg-[#F2F7EE] text-[#2C4A35] border-[#E0ECDB]',
    },
    {
      id: 'what-we-offer',
      num: '02',
      tag: isAr ? 'ما الذي نقدمه' : 'WHAT WE OFFER',
      icon: Bird,
      title: isAr
        ? 'رحلات رصد حصرية، فلكات صامتة، ومعسكرات تعليمية'
        : 'Bespoke Avian Safaris, Silent Eco-Boats & Field Camps',
      desc: isAr
        ? 'نصمم تجارب برية متكاملة تأخذك في فلكات شراعية وهجينة صامتة تتيح الاقتراب لأمتار قليلة من الطيور النادرة دون إزعاجها. من رحلات رصد شروق الشمس إلى معسكرات تصوير احترافية ومغامرات استكشاف تناسب العائلات والشغوفين بالبيئة.'
        : 'We curate intimate wilderness expeditions using silent hybrid and sail feluccas that drift within meters of elusive birds without disturbance. From tranquil sunrise safaris to immersive field photography masterclasses and nature learning camps for curious minds.',
      pills: isAr
        ? [
            'فلكات شراعية وهجينة صامتة صديقة للبيئة',
            'بصريات وتلسكوبات ألمانية متطورة مجاناً مع كل جولة',
            'معسكرات تعلم وتصوير ميداني مخصصة لجميع المستويات',
          ]
        : [
            'Silent Eco-Sailing Boats with Zero Carbon Footprint',
            'Premium German Spotting Optics & Telescopes Included',
            'Custom Field Photography & Nature Camps for All Ages',
          ],
      image: '/assets/pied-kingfisher-perched.jpg',
      badge: isAr ? 'رصد فائق القرب بدون إزعاج' : 'Zero-Disruption Observation',
      accent: 'blue',
      bgClass: 'bg-[#F4F9F2] border-[#D5E5CF] text-[#16241B]',
      tagBg: 'bg-[#E3F2DF] text-[#1C5528] border-[#C8E4BF]',
      pillBg: 'bg-[#EBF5E8] text-[#224A2D] border-[#D7EBD0]',
    },
    {
      id: 'what-sets-us-apart',
      num: '03',
      tag: isAr ? 'ما الذي يميزنا' : 'WHAT SETS US APART',
      icon: Sparkles,
      title: isAr
        ? 'مسارات سرية غير مطروقة، وسياحة متجددة تصنع أثراً'
        : 'Untrodden Hidden Channels & Regenerative Eco-Ethics',
      desc: isAr
        ? 'بينما يتزاحم الجميع في نفس المعابد والمزارات، نبحر نحن مع بواكير الفجر في أخوار معزولة حول جزر خزان أسوان. نلتزم بأعلى معايير الأمان البيئي لحماية الأعشاش، ويعود جزء مباشر من عائد كل رحلة لدعم مجتمعات الصيادين النوبيين وحماية النهر.'
        : 'While typical tourists follow congested routes, we navigate at dawn into secluded granite lagoons and secret wetlands teeming with life. We practice strict zero-trace wildlife ethics, and every expedition directly funds local Nubian conservation initiatives.',
      pills: isAr
        ? [
            'مجموعات صغيرة حصرية (بحد أقصى 6 إلى 8 زوار)',
            'التزام أخلاقي صارم بحماية أعشاش وموائل التكاثر',
            'عائد مباشر يدعم مجتمع حُماة النيل النوبيين',
          ]
        : [
            'Intimate Micro-Groups (Strict Max 6-8 Guests)',
            'Rigorous Zero-Impact Ethics Protecting Nesting Grounds',
            'Direct Economic Support to Indigenous Nile Communities',
          ],
      image: '/assets/yellow-billed-stork.jpg',
      badge: isAr ? 'سياحة بيئية متجددة 100%' : '100% Regenerative Tourism',
      accent: 'amber',
      bgClass: 'bg-[#FAFBF6] border-[#E3EAE0] text-[#16241B]',
      tagBg: 'bg-[#EFF5EA] text-[#265B33] border-[#D6E8CF]',
      pillBg: 'bg-[#F2F7ED] text-[#2A4C34] border-[#E0EBD9]',
    },
    {
      id: 'our-mission',
      num: '04',
      tag: isAr ? 'رسالتنا وأثرنا' : 'OUR MISSION & IMPACT',
      icon: Trees,
      title: isAr
        ? 'إحياء إرث الفراعنة مع الطيور وحماية جنة النيل الطبيعية'
        : 'Reviving Ancient Avian Reverence & Guarding Nile Paradise',
      desc: isAr
        ? 'رؤيتنا تتجاوز حدود الجولات؛ نحن نبني مستقبلاً تصبح فيه أسوان الوجهة الأولى عالمياً لسياحة مراقبة الطيور الأخلاقية. نسعى لغرس الشغف في الأجيال القادمة وإحياء الارتباط الروحي العميق الذي جمع أجدادنا الفراعنة بطيور النيل المقدسة.'
        : 'Our vision transcends standard travel. We are establishing Aswan as Africa’s crown jewel for ethical birding and biodiversity conservation. We rekindle the ancient Egyptian reverence for sacred birds, ensuring this fragile Eden thrives for generations to come.',
      pills: isAr
        ? [
            '+120 نوعاً من الطيور المقيمة والمهاجرة تم توثيقها',
            'مبادرة حماية طيور الفراعنة الحية في موائلها',
            'أبحاث وتوثيق ميداني معتمد بالتعاون مع المحميات',
          ]
        : [
            '120+ Documented Resident & Migratory Avian Species',
            'Pharaohs Birds Living Sanctuary Conservation Program',
            'Certified Field Ecology Research with Wildlife Authorities',
          ],
      image: '/assets/nile-birds-flight.jpg',
      badge: isAr ? 'إرث نيل حي ومستدام' : 'Living Heritage Sanctuary',
      accent: 'night',
      bgClass: 'bg-[#0B1E14] border-[#2BE019]/40 text-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)]',
      tagBg: 'bg-[#2BE019]/15 text-[#2BE019] border-[#2BE019]/35',
      pillBg: 'bg-white/10 text-white/90 border-white/15',
    },
  ];

  // Track active card on scroll
  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If card top is near or passed the sticky threshold
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index) => {
    const el = cardRefs.current[index];
    if (el) {
      const topOffset = 130;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAF5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5E7] border border-[#D5E9CE] text-[#256337] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2BE019]" />
            <span>{isAr ? 'ليست أسوان التقليدية' : 'NOT YOUR USUAL ASWAN'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#16241B] font-heading">
            {isAr ? (
              <>
                أقل تقليدية.{' '}
                <span className="text-[#64796B]">وأكثر استثنائية.</span>
              </>
            ) : (
              <>
                Less ordinary.{' '}
                <span className="text-[#64796B]">More extraordinary.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#526657] mt-3.5 leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'هناك أسوان أخرى تنتظر من يكتشفها. جزر هادئة، وحياة برية غير متوقعة، واتصال أعمق بعالم الطبيعة عبر 4 ركائز تصنع هويتنا.'
              : 'There is another Aswan waiting to be discovered. Quiet islands, unexpected wildlife, and a deeper connection to nature across four core pillars.'}
          </p>

          {/* Interactive Deck Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {cards.map((card, idx) => {
              const isActive = activeCard === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => scrollToCard(idx)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#16241B] text-white shadow-md scale-105'
                      : 'bg-white/80 hover:bg-white text-[#4A5D50] border border-[#E0E6DA]'
                  }`}
                  aria-label={`Jump to ${card.tag}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-[#2BE019]' : 'bg-[#98ABA0]'
                    }`}
                  />
                  <span>
                    {card.num}. {card.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stacking Cards Deck Container */}
        <div className="relative space-y-12 sm:space-y-16 pb-12 sm:pb-20">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isLast = idx === cards.length - 1;
            const isNight = card.accent === 'night';

            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                style={{
                  top: `calc(105px + ${idx * 24}px)`,
                  zIndex: 10 + idx,
                }}
                className={`sticky transition-all duration-300 ${
                  !isLast ? 'mb-[30vh] sm:mb-[42vh]' : 'mb-0'
                }`}
              >
                {/* Large Card Shell */}
                <div
                  className={`relative rounded-3xl border p-6 sm:p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(20,40,25,0.14)] backdrop-blur-xs transition-transform duration-300 ${card.bgClass}`}
                >
                  {/* Subtle Card Accent Gradient on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* Left / Content Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                      {/* Top Header Badge & Number */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border ${card.tagBg}`}
                        >
                          <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                          <span>{card.tag}</span>
                        </span>

                        <span
                          className={`text-sm sm:text-base font-extrabold tracking-wider font-mono ${
                            isNight ? 'text-[#2BE019]' : 'text-[#7D9183]'
                          }`}
                        >
                          {card.num} / 04
                        </span>
                      </div>

                      {/* Main Card Title */}
                      <h3
                        className={`text-xl sm:text-2xl lg:text-[28px] font-extrabold leading-tight tracking-tight font-heading ${
                          isNight ? 'text-white' : 'text-[#16241B]'
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-xs sm:text-sm lg:text-[14.5px] leading-relaxed ${
                          isNight ? 'text-[#C5D8CA]' : 'text-[#506354]'
                        }`}
                      >
                        {card.desc}
                      </p>

                      {/* Key Highlights / Feature Badges */}
                      <div className="pt-2 flex flex-wrap gap-2 sm:gap-2.5">
                        {card.pills.map((pillText, pIdx) => (
                          <div
                            key={pIdx}
                            className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl border ${card.pillBg}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2BE019] flex-shrink-0" />
                            <span>{pillText}</span>
                          </div>
                        ))}
                      </div>

                      {/* Scroll Hint on Cards Before the Last One */}
                      {!isLast && (
                        <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-[#869A8B] uppercase tracking-wider">
                          <span>{isAr ? 'مرر للأسفل للكشف عن التالي' : 'Scroll down for next pillar'}</span>
                          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#2BE019]" />
                        </div>
                      )}
                    </div>

                    {/* Right / Visual Column (5 cols) */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-black/10 group">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        {/* Atmospheric gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                        {/* Floating Nature Tag Badge */}
                        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                          <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20 shadow-md">
                            🌿 {card.badge}
                          </span>
                          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#2BE019] group-hover:text-black group-hover:border-[#2BE019] transition-all">
                            <ArrowUpRight className="w-4 h-4 rtl:rotate-90" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
