import React from 'react';
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
      accent: 'teal',
      bgClass: 'bg-white border-2 border-[#CBDCCB] border-t-[5px] border-t-[#0a515b] text-[#16241B] shadow-[0_24px_55px_-12px_rgba(10,81,91,0.2)]',
      tagBg: 'bg-[#0a515b]/10 text-[#0a515b] border border-[#0a515b]/25',
      pillBg: 'bg-[#0a515b]/[0.06] text-[#0a515b] border border-[#0a515b]/18',
      checkColor: 'text-[#0a515b]',
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
      accent: 'teal',
      bgClass: 'bg-[#FCFDF9] border-2 border-[#CBDCCB] border-t-[5px] border-t-[#0a515b] text-[#16241B] shadow-[0_24px_55px_-12px_rgba(10,81,91,0.2)]',
      tagBg: 'bg-[#0a515b]/10 text-[#0a515b] border border-[#0a515b]/25',
      pillBg: 'bg-[#0a515b]/[0.06] text-[#0a515b] border border-[#0a515b]/18',
      checkColor: 'text-[#0a515b]',
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
      accent: 'teal',
      bgClass: 'bg-[#F8FAF4] border-2 border-[#CBDCCB] border-t-[5px] border-t-[#0a515b] text-[#16241B] shadow-[0_24px_55px_-12px_rgba(10,81,91,0.2)]',
      tagBg: 'bg-[#0a515b]/10 text-[#0a515b] border border-[#0a515b]/25',
      pillBg: 'bg-[#0a515b]/[0.06] text-[#0a515b] border border-[#0a515b]/18',
      checkColor: 'text-[#0a515b]',
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
      bgClass: 'bg-[#0B1E14] border-2 border-[#0a515b]/50 border-t-[5px] border-t-[#0a515b] text-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55)]',
      tagBg: 'bg-[#0a515b]/40 text-[#2BE019] border border-[#2BE019]/40',
      pillBg: 'bg-white/10 text-white/90 border border-white/20',
      checkColor: 'text-[#2BE019]',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#EAF0E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0a515b]/30 text-[#0a515b] text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0a515b]" />
            <span>{isAr ? 'ليست أسوان التقليدية' : 'NOT YOUR USUAL ASWAN'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#16241B] font-heading">
            {isAr ? (
              <>
                أقل تقليدية.{' '}
                <span className="text-[#0a515b]">وأكثر استثنائية.</span>
              </>
            ) : (
              <>
                Less ordinary.{' '}
                <span className="text-[#0a515b]">More extraordinary.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#526657] mt-4 leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'هناك أسوان أخرى تنتظر من يكتشفها. جزر هادئة، وحياة برية غير متوقعة، واتصال أعمق بعالم الطبيعة عبر 4 ركائز تصنع هويتنا.'
              : 'There is another Aswan waiting to be discovered. Quiet islands, unexpected wildlife, and a deeper connection to nature across four core pillars.'}
          </p>
        </div>

        {/* Stacking Cards Deck Container */}
        <div className="relative space-y-14 sm:space-y-20 pb-16 sm:pb-24">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isLast = idx === cards.length - 1;
            const isNight = card.accent === 'night';

            return (
              <div
                key={card.id}
                style={{
                  top: `calc(125px + ${idx * 22}px)`,
                  zIndex: 10 + idx,
                }}
                className={`sticky transition-all duration-300 ${
                  !isLast ? 'mb-[35vh] sm:mb-[48vh]' : 'mb-0'
                }`}
              >
                {/* Large Card Shell with increased height, padding, and center gradient glow */}
                <div
                  className={`relative rounded-3xl sm:rounded-[32px] p-7 sm:p-10 lg:p-12 xl:p-14 min-h-[500px] sm:min-h-[550px] lg:min-h-[590px] flex flex-col justify-center backdrop-blur-xs transition-transform duration-300 overflow-hidden ${card.bgClass}`}
                >
                  {/* Subtle Gradient Glow in the center of the card (#0a515b) */}
                  <div
                    className={`absolute inset-0 rounded-3xl sm:rounded-[32px] pointer-events-none ${
                      isNight
                        ? 'bg-[radial-gradient(ellipse_at_center,rgba(10,81,91,0.5)_0%,transparent_75%)]'
                        : 'bg-[radial-gradient(ellipse_at_center,rgba(10,81,91,0.15)_0%,rgba(10,81,91,0.02)_45%,transparent_75%)]'
                    }`}
                  />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center my-auto">
                    {/* Content Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                      {/* Top Header Badge & Number */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase ${card.tagBg}`}
                        >
                          <Icon className="w-4 h-4 stroke-[2.2]" />
                          <span>{card.tag}</span>
                        </span>

                        <span
                          className={`text-base sm:text-lg lg:text-xl font-extrabold tracking-wider font-mono ${
                            isNight ? 'text-[#2BE019]' : 'text-[#0a515b]'
                          }`}
                        >
                          {card.num} / 04
                        </span>
                      </div>

                      {/* Main Card Title - Scaled Up */}
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold leading-[1.22] tracking-tight font-heading ${
                          isNight ? 'text-white' : 'text-[#16241B]'
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Description - Scaled Up for Comfortable Reading */}
                      <p
                        className={`text-sm sm:text-base lg:text-[16.5px] xl:text-[17.5px] leading-[1.8] sm:leading-[1.85] ${
                          isNight ? 'text-[#C5D8CA]' : 'text-[#445649]'
                        }`}
                      >
                        {card.desc}
                      </p>

                      {/* Key Highlights / Modern Feature Tiles - Scaled Up */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {card.pills.map((pillText, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 group/tile ${
                              isNight
                                ? 'bg-white/5 border-white/10 hover:border-[#2BE019]/50 text-white'
                                : 'bg-white/95 border-[#0a515b]/20 hover:border-[#0a515b] shadow-2xs hover:shadow-xs text-[#16241B]'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  isNight ? 'bg-[#2BE019]' : 'bg-[#0a515b]'
                                } group-hover/tile:scale-125 transition-transform`}
                              />
                              <span
                                className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                                  isNight ? 'text-[#2BE019]' : 'text-[#0a515b]'
                                }`}
                              >
                                {isAr ? `ركيزة 0${pIdx + 1}` : `Key 0${pIdx + 1}`}
                              </span>
                            </div>
                            <p
                              className={`text-xs sm:text-[13px] font-bold leading-snug ${
                                isNight ? 'text-[#E2EBE5]' : 'text-[#1D2E22]'
                              }`}
                            >
                              {pillText}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Scroll Hint on Cards Before the Last One */}
                      {!isLast && (
                        <div className="pt-2 flex items-center gap-2.5 text-xs font-bold text-[#0a515b]/80 uppercase tracking-wider">
                          <span>{isAr ? 'مرر للأسفل للكشف عن التالي' : 'Scroll down for next pillar'}</span>
                          <ChevronDown className="w-4 h-4 animate-bounce text-[#0a515b]" />
                        </div>
                      )}
                    </div>

                    {/* Visual Column (5 cols) - Scaled Up Height */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.8] min-h-[300px] sm:min-h-[360px] lg:min-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-[#0a515b]/30 group">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        {/* Atmospheric gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                        {/* Floating Nature Tag Badge */}
                        <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
                          <span className="px-3.5 sm:px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md text-xs sm:text-[13px] font-semibold text-white border border-white/20 shadow-md">
                            🌿 {card.badge}
                          </span>
                          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a515b]/50 backdrop-blur-md border border-[#0a515b]/60 flex items-center justify-center text-white group-hover:bg-[#0a515b] group-hover:text-white transition-all">
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-90" />
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
