import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, Eye, Shield, Clock, MapPin, Anchor } from 'lucide-react';

export const PharaohsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  // Three Sacred Pharaonic Expeditions (Exact specification from design)
  const pharaonicTours = [
    {
      id: 'hapi-tour',
      nameEn: 'Hapi Tour',
      nameAr: 'جولة حابي',
      eyebrowEn: 'GOD OF THE NILE INUNDATION',
      eyebrowAr: 'إله فيضان النيل المبارك',
      price: '$ 50',
      priceUnit: '/person',
      priceAr: '٥٠ $',
      priceUnitAr: 'للشخص',
      durationEn: '3–4 Hours',
      durationAr: '٣–٤ ساعات',
      zoneEn: 'NILE ZONE (FIRST CATARACT ISLANDS)',
      zoneAr: 'منطقة النيل (جزر الشلال الأول)',
      startingPointEn: 'Ferial Garden Marina',
      startingPointAr: 'مرسى حديقة فريال',
      image: '/assets/pharaonic-birds-fresco.jpg',
      descEn:
        'Connect the sacred river birds of Aswan with Hapi, the Ancient Egyptian deity of the life-giving annual flood. Combines a 2-hour birding cruise with 1–2 hours relaxing at a direct Nile-front venue enjoying traditional Nubian Jabana coffee.',
      descAr:
        'اربط بين طيور النيل الحية ورمزيتها لدى الإله حابي مجلب الخير وفيضان النيل السنوي. تجمع الرحلة بين ساعتي إبحار ورصد للطيور مع جلسة نيلية مريحة لمدة ساعة إلى ساعتين لتناول قهوة الجبنة النوبية وسماع الحكايات التراثية.'
    },
    {
      id: 'horus-tour',
      nameEn: 'Horus Tour',
      nameAr: 'جولة حورس',
      eyebrowEn: 'THE FALCON & TEMPLE RELIEFS',
      eyebrowAr: 'الصقر حورس ونقوش المعابد',
      price: '$ 55',
      priceUnit: '/person',
      priceAr: '٥٥ $',
      priceUnitAr: 'للشخص',
      durationEn: '3 Hours',
      durationAr: '٣ ساعات',
      zoneEn: 'RESERVOIR ZONE (FACING PHILAE TEMPLE)',
      zoneAr: 'منطقة الخزان (المقابلة لمعبد فيلة)',
      startingPointEn: 'Batanioun (Miraya) Marina near Nubia Museum',
      startingPointAr: 'مرسى بطنيون (المرايا) قرب متحف النوبة',
      image: '/assets/horus-falcon-fresco.jpg',
      descEn:
        'A divine cultural voyage on the Reservoir. Cruise the serene waters for raptors and soaring birds, then disembark for 1 hour at the scenic Soleil Café (Eco Nubia) with unobstructed panoramic views facing Philae Temple, enjoying traditional drinks and divine falcon lore.',
      descAr:
        'رحلة أسطورية في مسطح الخزان الهادئ. تبدأ بجولة رصد الصقور والجوارح، ثم النزول لمدة ساعة في كافيه سوليل الشهير (إيكو نوبيا) بإطلالة بانورامية لا تُنسى في مواجهة معبد فيلة، مع المشروبات وحكايات الإله حورس.'
    },
    {
      id: 'isis-tour',
      nameEn: 'Isis Tour (Full-Day Flagship)',
      nameAr: 'جولة إيزيس الكبرى (الرحلة الشاملة)',
      eyebrowEn: 'THE SACRED BIRDS OF PHILAE',
      eyebrowAr: 'طيور فيلة المقدسة',
      price: '$ 110',
      priceUnit: '/person',
      priceAr: '١١٠ $',
      priceUnitAr: 'للشخص',
      durationEn: '8 Hours',
      durationAr: '٨ ساعات',
      zoneEn: 'RESERVOIR ZONE (PHILAE TEMPLE & BASIN)',
      zoneAr: 'منطقة الخزان (معبد وحوض فيلة)',
      startingPointEn: 'Batanioun (Miraya) Marina',
      startingPointAr: 'مرسى بطنيون (المرايا)',
      image: '/assets/sacred-ibis-fresco.jpg',
      descEn:
        'Our premier all-inclusive flagship expedition. Combines a 1.5–2 hour specialized Philae Temple tour decoding bird hieroglyphs and reliefs, live reservoir birdwatching to spot surviving species, and a gourmet lunch at Soleil Restaurant facing the temple.',
      descAr:
        'رحلتنا الشاملة الكبرى. تجمع بين جولة متخصصة لساعة ونصف إلى ساعتين داخل معبد فيلة لفك شفرات نقوش الطيور الهيروغليفية، ورصد حي لطيور الخزان، وغداء فاخر بمطعم سوليل بمواجهة المعبد.'
    }
  ];

  // Authentic Papyrus Exhibits
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
      deityEn: 'Thoth (Djehuty)',
      speciesAr: 'أبو منجل المقدس والبلشون الأبيض',
      speciesEn: 'Sacred Ibis & Little Egret',
      significanceAr: 'رب الحكمة والكتابة والتوثيق والرياضيات؛ بوصلة مواسم الزراعة وفيضان النيل.',
      significanceEn: 'God of wisdom, reckoning, and scribal writing; herald of the fertile inundation.',
      spottingAr: 'يرعى في المياه الضحلة وضفاف جزيرة إلفنتين ومحمية سالوجا.',
      spottingEn: 'Forages in shallow bays around Elephantine and Saluga.'
    },
    {
      glyph: '𓅄',
      deityAr: 'رع-حوراختي (Ra-Horakhty)',
      deityEn: 'Ra-Horakhty (Solar Falcon)',
      speciesAr: 'عقاب السهوب وعقاب النيل النساري',
      speciesEn: 'Osprey & Steppe Eagle',
      significanceAr: 'إله الشمس المشرقة على الأفق؛ رمز النور الساطع والقدرة والحياة المتجددة.',
      significanceEn: 'The rising sun of the two horizons; supreme celestial power and continuous renewal.',
      spottingAr: 'يرصد على حواف المنحدرات الصخرية في بحيرة خزان أسوان القديم.',
      spottingEn: 'Perches on mountain clifftops across the Aswan Reservoir.'
    },
    {
      glyph: '𓅂',
      deityAr: 'جب رب الأرض (Geb)',
      deityEn: 'Geb (The Great Cackler)',
      speciesAr: 'الإوز المصري وإوز الحقول البري',
      speciesEn: 'Egyptian Goose & Greylag',
      significanceAr: 'أبو الملوك ورب خصب الأرض والنباتات؛ الإوزة النيلية الكبرى التي باضت البيضة الكونية.',
      significanceEn: 'Father of gods and sovereign of the earth; whose primeval call created the cosmic egg.',
      spottingAr: 'تسبح في أسراب هادئة بين الجزر المعزولة وأحواض نبات البردي.',
      spottingEn: 'Swims in intimate pairs across quiet secluded cataracts.'
    }
  ];

  return (
    <div className="bg-[#FAF4E8] text-[#1C140A] min-h-screen pt-24 sm:pt-32 pb-24 selection:bg-[#C29352] selection:text-white">
      {/* 1. HERO SECTION: THREE SACRED JOURNEYS (Matches Screenshot Exactly) */}
      <section className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-6 pb-20">
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Exclusive Pharaonic Journeys Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D5C29F] bg-[#EFE4CF]/70 text-xs font-extrabold uppercase tracking-widest text-[#6D4F28] mb-5 shadow-xs">
            <span className="text-[13px] leading-none">↓</span>
            <span>{isAr ? 'رحلات فرعونية حصرية' : 'EXCLUSIVE PHARAONIC JOURNEYS'}</span>
          </div>

          {/* Main Title (Two Lines: Bold Dark Slate + Golden Italic Serif) */}
          <h1 className="tracking-tight leading-[1.12] mb-3">
            <span className="block text-3xl sm:text-5xl lg:text-[56px] font-black text-[#0A3F47] font-heading">
              {isAr ? 'ثلاث رحلات مقدسة' : 'Three Sacred Journeys'}
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-[44px] font-serif italic text-[#C29352] font-normal mt-1 sm:mt-2">
              {isAr ? 'في رحاب طيور الفراعنة الخالدة.' : "Walking Among Pharaohs' Birds."}
            </span>
          </h1>

          {/* Falcon Hieroglyph Center Divider */}
          <div className="flex items-center justify-center gap-4 my-4 sm:my-5">
            <div className="h-[1px] w-20 sm:w-28 bg-[#D8C7A5]" />
            <span className="text-[#C29352] text-xl font-serif leading-none select-none">𓅃</span>
            <div className="h-[1px] w-20 sm:w-28 bg-[#D8C7A5]" />
          </div>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-[#4E3E2E] leading-relaxed max-w-2xl mx-auto font-normal">
            {isAr
              ? 'ثلاث رحلات استكشافية نيلية فريدة تربط بين الطيور المقدسة المخلدة على جدران المعابد وتلك الفصائل الحية المحلقة بحرية في سماء أسوان اليوم.'
              : 'Three unique Nile expeditions connecting the sacred birds immortalized on temple walls with the very same species soaring free above Aswan today.'}
          </p>
        </div>

        {/* The 3 Cards Grid (Matches Screenshot Layout & Styling Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {pharaonicTours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-3xl overflow-hidden border border-[#E0D4BE] bg-[#FDFBF7] shadow-[0_8px_24px_rgba(40,25,10,0.06)] hover:shadow-[0_16px_36px_rgba(40,25,10,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#241A10]">
                <img
                  src={tour.image}
                  alt={isAr ? tour.nameAr : tour.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

                {/* Overlaid Top-Right Badge */}
                <div className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10.5px] font-bold text-[#E2D2B5] tracking-wider uppercase shadow-xs">
                    <span className="text-xs text-[#E2D2B5]">𓅃</span>
                    <span>{isAr ? tour.eyebrowAr : tour.eyebrowEn}</span>
                  </span>
                </div>

                {/* Overlaid Bottom Pills (Price on Left, Duration on Right) */}
                <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                  {/* Left Pill: Price */}
                  <div className="px-3 py-1 rounded-xl bg-[#FBF4E4] text-[#1C140A] text-xs font-black shadow-md border border-[#E8DAC2] flex items-baseline gap-1">
                    <span>{isAr ? tour.priceAr : tour.price}</span>
                    <span className="text-[10px] font-semibold text-[#66543F]">
                      {isAr ? tour.priceUnitAr : tour.priceUnit}
                    </span>
                  </div>

                  {/* Right Pill: Duration */}
                  <div className="px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-md text-white text-[11px] font-bold shadow-md border border-white/15 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E2D2B5]" />
                    <span>{isAr ? tour.durationAr : tour.durationEn}</span>
                  </div>
                </div>
              </div>

              {/* Card Body Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Zone Meta */}
                  <div className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#9C733E] flex items-center gap-1.5 mb-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#9C733E] shrink-0" />
                    <span className="truncate">{isAr ? tour.zoneAr : tour.zoneEn}</span>
                  </div>

                  {/* Tour Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#1C140A] leading-tight mb-1.5 font-heading">
                    {isAr ? tour.nameAr : tour.nameEn}
                  </h3>

                  {/* Starting Marina */}
                  <div className="text-xs font-semibold text-[#6E5B45] flex items-center gap-1.5 mb-4">
                    <Anchor className="w-3.5 h-3.5 text-[#0A3F47] shrink-0" />
                    <span>{isAr ? tour.startingPointAr : tour.startingPointEn}</span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-[#4E3E2E] leading-relaxed mb-6 font-normal">
                    {isAr ? tour.descAr : tour.descEn}
                  </p>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-[#EDE4D3]">
                  <button
                    onClick={() => handleOpenBooking(isAr ? tour.nameAr : tour.nameEn)}
                    type="button"
                    className="w-full py-3 px-4 rounded-xl bg-[#0A3F47] hover:bg-[#072F35] text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer active:scale-95 group/btn"
                  >
                    <span>{isAr ? 'احجز هذه الجولة الآن' : 'Book This Journey'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE PAPYRUS SCROLL SANCTUARY SECTION */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 border-t border-[#E5DAC4]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c99a5d]/60 bg-[#EFE4CF]/70 text-xs font-bold uppercase tracking-wider text-[#6F4B1F]">
              <Eye className="w-3.5 h-3.5 text-[#c99a5d]" />
              <span>{isAr ? 'مخطوطات بردي أثرية موثقة' : 'AUTHENTIC PAPYRUS EVIDENCE'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C140A] leading-tight">
              {isAr ? (
                <>
                  من جدران المعابد <br />
                  <span className="font-serif italic font-normal text-[#C29352]">
                    إلى أحضان الطبيعة النيلية.
                  </span>
                </>
              ) : (
                <>
                  From Temple Frescoes <br />
                  <span className="font-serif italic font-normal text-[#C29352]">
                    To Pristine River Marshes.
                  </span>
                </>
              )}
            </h2>

            {/* Exhibit Details Card */}
            <div className="p-6 rounded-2xl border border-[#D5C29F] bg-[#FDFBF7] shadow-sm relative overflow-hidden">
              <div className="absolute top-2 right-3 rtl:right-auto rtl:left-3 text-4xl text-[#c99a5d]/20 font-serif select-none pointer-events-none">
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

              <div className="pt-3 border-t border-[#E5DAC4] flex items-start gap-2 text-xs text-[#5C3C17]">
                <Compass className="w-4 h-4 text-[#C29352] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">
                    {isAr ? 'موطن الرصد الحي في أسوان:' : 'Where to spot live in Aswan:'}
                  </span>
                  <span>{isAr ? activeExhibit.aswanLocationAr : activeExhibit.aswanLocationEn}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Papyrus Roll & Image Gallery */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border-2 border-[#D5C29F] bg-[#FDFBF7] p-5 shadow-sm overflow-hidden">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden mb-4 bg-[#241A10]">
                <img
                  src={activeExhibit.image}
                  alt={isAr ? activeExhibit.nameAr : activeExhibit.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Exhibit Selector Thumbnails */}
              <div className="grid grid-cols-4 gap-2.5">
                {exhibits.map((ex) => {
                  const isCurrent = ex.id === activeExhibit.id;
                  return (
                    <button
                      key={ex.id}
                      onClick={() => setActiveExhibit(ex)}
                      type="button"
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#0A3F47] bg-[#0A3F47] text-white shadow-sm'
                          : 'border-[#E0D4BE] bg-white hover:bg-[#FAF4E8] text-[#1C140A]'
                      }`}
                    >
                      <span className="text-lg block leading-none mb-1 font-serif">{ex.glyph}</span>
                      <span className="text-[10px] font-bold block truncate">
                        {isAr ? ex.nameAr : ex.nameEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SACRED AVIAN PANTHEON */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 border-t border-[#E5DAC4]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5C29F] bg-[#EFE4CF]/70 text-xs font-bold uppercase tracking-wider text-[#6F4B1F] mb-3">
            <Shield className="w-3.5 h-3.5 text-[#C29352]" />
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
              className="p-6 rounded-2xl border border-[#E0D4BE] bg-[#FDFBF7] shadow-sm hover:border-[#0A3F47] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFE4CF] text-2xl text-[#8C581F] flex items-center justify-center font-serif">
                    {item.glyph}
                  </div>
                  <span className="text-xs font-serif font-bold text-[#C29352] px-2 py-0.5 rounded bg-white border border-[#E0D4BE]">
                    𓋹 Ankh
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#1C140A] mb-1">
                  {isAr ? item.deityAr : item.deityEn}
                </h3>

                <div className="text-xs font-bold text-[#8C6239] mb-3 pb-2 border-b border-[#EDE4D3]">
                  {isAr ? item.speciesAr : item.speciesEn}
                </div>

                <p className="text-xs text-[#4E3E2E] leading-relaxed mb-4">
                  {isAr ? item.significanceAr : item.significanceEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EDE4D3] flex items-start gap-2 text-[11px] text-[#5C3C17]">
                <Compass className="w-3.5 h-3.5 text-[#C29352] shrink-0 mt-0.5" />
                <span>{isAr ? item.spottingAr : item.spottingEn}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
