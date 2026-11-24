import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Compass, Award } from 'lucide-react';

export const LearningCampsPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  const campPrograms = [
    {
      title: isAr ? 'معسكر المستكشفين الصغار (٧ - ١٤ سنة)' : 'Young Naturalists Camp (Ages 7–14)',
      duration: isAr ? 'يومان / نهاية الأسبوع' : '2 Days / Weekend',
      desc: isAr
        ? 'تجربة تعليمية ملهمة يتعلم فيها الأطفال مبادئ رصد الطيور، استخدام التلسكوبات، رسم الطبيعة، والتعرف على كائنات النيل البرية بأمان تام.'
        : 'An inspiring hands-on weekend where young explorers master binoculars, learn bird calls, sketch wildlife, and understand river ecology safely.',
      features: isAr
        ? ['ورشة تحديد الطيور بالمناظير', 'سجل ميداني وبطاقات توثيق خاصة بالطفل', 'سترات نجاة ومرافقة متخصصة بنسبة ١:٤', 'شهادة مستكشف طبيعي معتمدة']
        : ['Binocular handling & spotting games', 'Personalized naturalist field journal', '1:4 educator-to-child safety ratio', 'Certified Young Naturalist diploma']
    },
    {
      title: isAr ? 'معسكر الاستكشاف العائلي' : 'Family River Discovery Retreat',
      duration: isAr ? 'يوم كامل (٦ ساعات)' : 'Full Day (6 Hours)',
      desc: isAr
        ? 'فرصة ذهبية للعائلات للتواصل بعيداً عن الشاشات، واكتشاف جزر الشلال الأول معاً وتناول طعام نوبي شهي على جزيرة خاصة هادئة.'
        : 'Unplug and reconnect on private river excursions. Families navigate quiet channels, identify endemic flora, and enjoy an island picnic lunch.',
      features: isAr
        ? ['قارب خاص بالكامل للعائلة', 'أنشطة مشتركة تناسب جميع الأعمار', 'غداء نوبي طازج على جزيرة نيلية', 'تصوير عائلي توثيقي مهدى للأسرة']
        : ['Fully private chartered eco-boat', 'Multi-generational interactive activities', 'Fresh organic Nubian island lunch', 'Complimentary family wildlife photo pack']
    },
    {
      title: isAr ? 'رحلات المدارس والجامعات الميدانية' : 'Academic & School Expeditions',
      duration: isAr ? 'مسارات مخصصة مرنة' : 'Custom Tailored Programs',
      desc: isAr
        ? 'برامج علمية ومنهجية للمدارس الدولية والجامعات تغطي التنوع البيولوجي، جودة مياه النيل، وهجرة الطيور العالمية بمرافقة باحثين بيئيين.'
        : 'Curriculum-aligned field ecology programs focusing on biodiversity, freshwater conservation, and migration flyways led by active researchers.',
      features: isAr
        ? ['تجارب قياس بيئية وتدريب ميداني', 'محتوى متوافق مع المناهج البيئية الدولية', 'إشراف أمني وطبي متكامل', 'تنسيق لوجستي ونقل مباشر']
        : ['Water quality & habitat data collection', 'Aligns with IB & Cambridge Biology criteria', 'Comprehensive risk assessment & medical support', 'Full turnkey transport & logistics']
    }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#F8FAF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16241B]/5 border border-[#16241B]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#16241B] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#21c715]" />
            <span>{isAr ? 'التعليم من خلال الطبيعة' : 'LEARNING THROUGH NATURE'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16241B] mb-6">
            {isAr ? 'معسكرات استكشاف الطبيعة' : 'Wild Learning Camps'}
          </h1>
          <p className="text-lg text-[#556F5C] leading-relaxed">
            {isAr
              ? 'نؤمن بأن أعظم فصول التعليم تقع في الهواء الطلق. معسكراتنا تنمي الشغف البيئي والوعي بأهمية حماية الحياة الفطرية في بيئة آمنة وملهمة.'
              : 'The greatest classroom has no walls. Our immersive nature camps ignite environmental curiosity, teamwork, and conservation awareness in children and families.'}
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="rounded-3xl overflow-hidden bg-[#16241B] text-white p-8 sm:p-14 mb-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#48e714] mb-3">
              {isAr ? 'سلامة معتمدة ١٠٠٪' : 'CERTIFIED SAFETY FIRST'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-5">
              {isAr ? 'مغامرات تلهم العقول بأعلى معايير الأمان' : 'Inspiring young minds with world-class safety'}
            </h2>
            <p className="text-[#B6CEBE] text-base leading-relaxed mb-6">
              {isAr
                ? 'جميع قواربنا مجهزة بسترات نجاة مخصصة للأطفال، وطاقمنا حاصل على تدريب الإسعافات الأولية والسلامة المائية. نوفر بيئة تعلم محفزة تشجع على الملاحظة والتساؤل.'
                : 'All vessels are equipped with tailored child life jackets, first-aid kits, and guided by certified CPR-trained aquatic educators.'}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <span className="px-3.5 py-2 rounded-full bg-white/10 border border-white/20">
                ✓ {isAr ? 'سترات نجاة معتمدة' : 'Certified Life Vests'}
              </span>
              <span className="px-3.5 py-2 rounded-full bg-white/10 border border-white/20">
                ✓ {isAr ? 'مدربون بيئيون معتمدون' : 'Licensed Naturalists'}
              </span>
              <span className="px-3.5 py-2 rounded-full bg-white/10 border border-white/20">
                ✓ {isAr ? 'مجموعات صغيرة تفاعلية' : 'Small Interactive Groups'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden">
            <img
              src="/assets/kingfisher.webp"
              alt="Nature learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {campPrograms.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E2E8DC] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E9911] block mb-2">
                  {prog.duration}
                </span>
                <h3 className="text-xl font-bold text-[#16241B] mb-3">{prog.title}</h3>
                <p className="text-sm text-[#556F5C] leading-relaxed mb-6">{prog.desc}</p>
                <div className="space-y-2.5 mb-8">
                  {prog.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#2A4030]">
                      <Award className="w-3.5 h-3.5 text-[#21c715] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleOpenBooking(prog.title)}
                className="w-full py-3.5 rounded-full bg-[#16241B] hover:bg-[#204c30] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                {isAr ? 'استفسر أو احجز المقعد' : 'Inquire or Reserve Spot'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
