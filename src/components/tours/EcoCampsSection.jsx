import React, { useState } from 'react';
import {
  Tent,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  Send,
  MessageCircle,
  X,
  Compass,
  GraduationCap,
  Award,
  Binoculars,
  Palette,
  Users
} from 'lucide-react';

export const EcoCampsSection = ({ isAr = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ageGroup, setAgeGroup] = useState('7-12');
  const [estimatedCount, setEstimatedCount] = useState('20-30');
  const [preferredZone, setPreferredZone] = useState('nile');
  const [notes, setNotes] = useState('');

  const stages = [
    {
      step: '01',
      titleEn: 'Stage 1: Guided Birdwatching Boat Excursion',
      titleAr: 'المرحلة الأولى: إبحار ورصد الطيور الميداني',
      timeEn: '2 Hours (Morning)',
      timeAr: 'ساعتان (الصباح الباكر)',
      descEn:
        'Equipped with kid-friendly optics, young explorers take to the water with certified naturalists to identify Nile bird species, observe nesting habits, and learn safe river navigation.',
      descAr:
        'يتسلّم كل طفل منظاره الميداني، وينطلق بالقارب مع باحثين بيئيين لرصد طيور النيل الحية، وتعلّم مهارات الملاحظة الدقيقة وتوثيق الأنواع بأمان تام.',
      icon: <Binoculars className="w-5 h-5 text-[#21c715]" />
    },
    {
      step: '02',
      titleEn: 'Stage 2: Open-Air Nature Immersion & Workshops',
      titleAr: 'المرحلة الثانية: معايشة الطبيعة والورش التفاعلية',
      timeEn: '6 Hours (Mid-day)',
      timeAr: '٦ ساعات (وسط النهار)',
      descEn:
        'Moving to an open, shaded natural island or lakeside sanctuary for hands-on conservation workshops, environmental scavenger hunts, wildlife footprint decoding, scientific discussions, and watercolor sketching.',
      descAr:
        'الانتقال إلى محمية طبيعية أو جزيرة مظللة لورش عمل تطبيقية عن حماية التنوع البيولوجي، وتتبع أثر الحيوانات في الرمال، وألعاب الاستكشاف، وتلوين الطيور بالألوان المائية.',
      icon: <Palette className="w-5 h-5 text-[#0a515b]" />
    },
    {
      step: '03',
      titleEn: 'Stage 3: Evaluation, Ceremony & Safe Return',
      titleAr: 'المرحلة الثالثة: التقييم والتكريم والعودة',
      timeEn: 'Wrap-up (Late Afternoon)',
      timeAr: 'الختام (عصراً)',
      descEn:
        'Reviewing field logbooks, awarding official Junior Ranger medals & diplomas, debriefing key ecological takeaways with teachers/mentors, and safe return to the starting pier.',
      descAr:
        'مراجعة سجلات الرصد الميدانية، وتتويج الأطفال بأوسمة حُراس النيل وشهادات المستكشف الصغير، واستخلاص الدروس البيئية، والعودة الآمنة لنقطة التجمع.',
      icon: <Award className="w-5 h-5 text-[#c99a5d]" />
    }
  ];

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const zoneText =
      preferredZone === 'nile'
        ? (isAr ? 'منطقة النيل (حديقة فريال/الشلال الأول)' : 'Nile Zone (Ferial Marina/First Cataract)')
        : (isAr ? 'منطقة الخزان (مرسى بطنيون/فيلة)' : 'Reservoir Zone (Batanioun/Philae)');

    const text = encodeURIComponent(
      `*Aswan Nature — School/Youth Camp Proposal Request*\n` +
      `--------------------------------\n` +
      `*Organization/School:* ${orgName}\n` +
      `*Contact Person:* ${contactPerson}\n` +
      `*Phone/WhatsApp:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Age Group:* ${ageGroup}\n` +
      `*Estimated Count:* ${estimatedCount} students\n` +
      `*Preferred Zone:* ${zoneText}\n` +
      (notes ? `*Special Objectives/Notes:* ${notes}\n` : '') +
      `\n_Request sent from Aswan Nature Tours Portal_`
    );

    window.open(`https://wa.me/201144435547?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="eco-camps" className="w-full my-20">
      <div className="bg-gradient-to-br from-[#0a515b] via-[#0C1D15] to-[#073b42] rounded-3xl sm:rounded-[36px] text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#21c715]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5ee4f7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#4bf319] text-xs font-black uppercase tracking-widest mb-3">
              <Tent className="w-4 h-4 text-[#4bf319]" />
              <span>{isAr ? 'معسكرات التعلم والمدارس' : 'YOUTH & SCHOOLS ECO-CAMPS'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              {isAr
                ? 'معسكرات الاستكشاف البيئي للشباب وطلاب المدارس 🏕️'
                : 'Youth & Schools Educational Eco-Camps 🏕️'}
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {isAr
                ? 'برامج تطبيقية كاملة (٨ - ١٠ ساعات) مصممة خصيصاً للمدارس والجامعات والمجموعات الشبابية، تجمع بين الرصد بالقارب، وورش العمل الميدانية في الجزر المحمية، والتوعية بالتنوع البيولوجي بأعلى معايير الأمان.'
                : 'Comprehensive 8–10 hour immersive nature programs designed for school groups and youth organizations, combining boat-based field birding with open-air environmental workshops on protected isles.'}
            </p>

            {/* Quick Specs Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#4bf319]" />
                <span>{isAr ? 'المدة: ٨ - ١٠ ساعات (حتى ٤:٠٠ / ٥:٠٠ م)' : 'Duration: 8–10 Hours (until 4:00/5:00 PM)'}</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4bf319]" />
                <span>{isAr ? 'الموقع: منطقة النيل أو منطقة الخزان (وفيلة)' : 'Locations: Nile Zone or Reservoir Zone (Philae)'}</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-[#4bf319]" />
                <span>{isAr ? 'مرافقة متخصصة بنسبة مرشد لكل ٤ طلاب' : 'Strict 1:4 Guide-to-Student Ratio'}</span>
              </div>
            </div>
          </div>

          {/* Visual 3-Stage Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
            {stages.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#21c715] hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-2xl bg-white text-[#0a515b] flex items-center justify-center font-black text-sm shadow-md">
                      {st.step}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-white/15 text-white">
                      {st.icon}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono font-bold text-[#4bf319] uppercase tracking-wider mb-1">
                    {isAr ? st.timeAr : st.timeEn}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white leading-snug mb-3">
                    {isAr ? st.titleAr : st.titleEn}
                  </h3>

                  <p className="text-xs text-white/75 leading-relaxed font-normal">
                    {isAr ? st.descAr : st.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setModalOpen(true);
              }}
              className="py-4 px-8 rounded-2xl bg-[#21c715] hover:bg-[#1db312] text-black font-black text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 active:scale-95 group/btn"
            >
              <GraduationCap className="w-5 h-5 text-black" />
              <span>
                {isAr
                  ? 'طلب عرض أسعار معسكر المدارس والشباب 📋'
                  : 'Request School / Youth Camp Proposal 📋'}
              </span>
              <Send className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Group Inquiry Proposal Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#CBDCCB] my-8"
            onClick={(e) => e.stopPropagation()}
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0a515b] mb-1">
              <GraduationCap className="w-4 h-4 text-[#21c715]" />
              <span>{isAr ? 'طلب مخصص للمؤسسات التعليمية' : 'EDUCATIONAL GROUP INQUIRY'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#16241B] mb-2">
              {isAr ? 'طلب مقترح معسكر بيئي مخصص' : 'Request Tailored Eco-Camp Proposal'}
            </h3>
            <p className="text-xs text-[#556F5C] mb-6">
              {isAr
                ? 'املأ بيانات المدرسة أو المجموعة وسنرسل لك برنامجاً تدريبياً متكاملاً وعرض أسعار فوري.'
                : 'Share your group details to receive a customized curriculum and proposal.'}
            </p>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#21c715]/15 text-[#21c715] mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-[#16241B] mb-1">
                  {isAr ? 'تم فتح المحادثة على واتساب!' : 'WhatsApp Chat Opened!'}
                </h4>
                <p className="text-xs text-[#556F5C] mb-6">
                  {isAr
                    ? 'فريق المعسكرات بانتظارك لمناقشة الأهداف التعليمية وعدد الطلاب.'
                    : 'Our education team is ready on WhatsApp to finalize your school itinerary.'}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0a515b] text-white text-xs font-bold"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleProposalSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-[#16241B] block mb-1">
                    {isAr ? 'اسم المدرسة / الجامعة / المؤسسة *' : 'School / Organization Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder={isAr ? 'مثال: مدرسة النيل الدولية' : 'e.g. British International School'}
                    className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs sm:text-sm font-semibold bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#16241B] block mb-1">
                      {isAr ? 'اسم مسؤول الرحلة *' : 'Contact Person *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder={isAr ? 'أ. أحمد / د. سارة' : 'Coordinator Name'}
                      className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs sm:text-sm font-semibold bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#16241B] block mb-1">
                      {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 1..."
                      className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs sm:text-sm font-semibold bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#16241B] block mb-1">
                      {isAr ? 'الفئة العمرية للطلاب' : 'Target Age Group'}
                    </label>
                    <select
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value)}
                      className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs font-bold bg-white"
                    >
                      <option value="6-9">{isAr ? 'الابتدائي (٦ - ٩ سنوات)' : 'Primary (6–9 Years)'}</option>
                      <option value="10-14">{isAr ? 'الإعدادي (١٠ - ١٤ سنة)' : 'Middle School (10–14 Years)'}</option>
                      <option value="15-18">{isAr ? 'الثانوي (١٥ - ١٨ سنة)' : 'High School (15–18 Years)'}</option>
                      <option value="university">{isAr ? 'الجامعي والمجموعات الشبابية' : 'University & Youth'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#16241B] block mb-1">
                      {isAr ? 'العدد المتوقع للمشاركين' : 'Estimated Student Count'}
                    </label>
                    <select
                      value={estimatedCount}
                      onChange={(e) => setEstimatedCount(e.target.value)}
                      className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs font-bold bg-white"
                    >
                      <option value="15-25">15 – 25 {isAr ? 'طالب' : 'Students'}</option>
                      <option value="26-50">26 – 50 {isAr ? 'طالب' : 'Students'}</option>
                      <option value="50+">50+ {isAr ? 'طالب (معسكر كبير)' : 'Students (Large Camp)'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#16241B] block mb-1">
                    {isAr ? 'النطاق الجغرافي المفضل' : 'Preferred Zone'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setPreferredZone('nile')}
                      className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                        preferredZone === 'nile'
                          ? 'border-[#0a515b] bg-[#0a515b] text-white'
                          : 'border-[#CBDCCB] bg-white text-[#16241B]'
                      }`}
                    >
                      {isAr ? 'منطقة النيل والشلال' : 'Nile & Cataract'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredZone('reservoir')}
                      className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                        preferredZone === 'reservoir'
                          ? 'border-[#0a515b] bg-[#0a515b] text-white'
                          : 'border-[#CBDCCB] bg-white text-[#16241B]'
                      }`}
                    >
                      {isAr ? 'منطقة الخزان وفيلة' : 'Reservoir & Philae'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#16241B] block mb-1">
                    {isAr ? 'أهداف تعليمية محددة أو ملاحظات' : 'Educational Objectives or Notes'}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={isAr ? 'أي أهداف دراسية (مناهج IB/Cambridge أو علوم بيئة)...' : 'Curriculum alignment (IB/Cambridge, ecology)...'}
                    className="w-full p-2.5 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#0a515b] hover:bg-[#073b42] text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#4bf319]" />
                  <span>{isAr ? 'إرسال الطلب عبر واتساب' : 'Submit Proposal Request via WhatsApp'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
