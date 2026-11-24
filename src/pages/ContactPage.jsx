import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { toursData } from '../data/toursData';

export const ContactPage = () => {
  const { currentLang, setEgyptianRatesOpen } = useOutletContext();
  const isAr = currentLang === 'AR';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: 'Nile Birds Tour',
    date: '',
    guests: '2 guests',
    isEgyptian: false,
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: isAr ? 'ما هو أفضل توقيت لرصد الطيور في أسوان؟' : 'What is the best time of day and season for birding?',
      a: isAr
        ? 'أفضل الأوقات خلال اليوم هي ساعة الشروق الأولى (٠٦:٠٠ إلى ٠٩:٠٠ صباحاً) وساعة الغروب الذهبية. أما موسم الهجرة الكبرى فيمتد من أكتوبر إلى أبريل مع تدفق آلاف الطيور الشتوية.'
        : 'Early morning sunrise (06:00 to 09:00 AM) and late afternoon golden hour provide prime light and bird activity. Peak migratory season runs from October to April.'
    },
    {
      q: isAr ? 'هل الجولات مناسبة للأطفال والعائلات؟' : 'Are trips suitable for children, elders, and beginners?',
      a: isAr
        ? 'نعم بكل تأكيد! قواربنا مريحة وآمنة جداً ومزودة بسترات نجاة مخصصة لجميع الأعمار ومظلات شمسية، ومرشدونا يشرحون بأسلوب مشوق ومناسب للمبتدئين.'
        : 'Absolutely! Our boats are comfortable, shade-covered, and stocked with certified life vests for all ages. Guides adjust the experience for birding novices and kids.'
    },
    {
      q: isAr ? 'ماذا يجب أن أحضر معي في الرحلة؟' : 'What should I bring along on the tour?',
      a: isAr
        ? 'ننصح بارتداء ملابس قطنية خفيفة وقبعة واقية من الشمس ونظارة شمسية. نحن نوفر المناظير والتلسكوبات والمياه المعدنية والشاي النوبي.'
        : 'Bring a sun hat, sunglasses, and camera. We provide high-end binoculars, spotting scopes, bottled water, and hot herbal Nubian tea.'
    },
    {
      q: isAr ? 'كيف يتم تأكيد الحجز والدفع؟' : 'How is booking confirmed and paid?',
      a: isAr
        ? 'يمكن الحجز عبر النموذج أدناه أو رسالة مباشرة على واتساب. الدفع نقداً بالجنيه المصري أو بالدولار/اليورو أو بالتحويل البنكي/فودافون كاش.'
        : 'You can book via this form or directly on WhatsApp. Payment is accepted in cash (EGP, USD, EUR) or digital bank transfer.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#F8FAF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16241B]/5 border border-[#16241B]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#16241B] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#21c715]" />
            <span>{isAr ? 'تواصل معنا وحجز الرحلات' : 'BOOKINGS & INQUIRIES'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16241B] mb-6">
            {isAr ? 'تحدث معنا عن رحلتك القادمة' : "Let's plan your wildlife trip."}
          </h1>
          <p className="text-lg text-[#556F5C] leading-relaxed">
            {isAr
              ? 'فريقنا المحلي جاهز لمساعدتك في تخصيص برنامج رحلتك والإجابة على أي استفسار.'
              : 'Our local naturalists are here to customize your private boat itinerary and answer any questions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#16241B] rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
              <h3 className="text-2xl font-bold mb-4">
                {isAr ? 'معلومات الاتصال المباشر' : 'Direct Contact Channels'}
              </h3>

              <div className="space-y-5 text-sm">
                <a
                  href="https://wa.me/201144435547"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#21c715] flex items-center justify-center text-white flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1B8A8] block font-semibold">{isAr ? 'واتساب الرسمي' : 'WhatsApp Official'}</span>
                    <span className="font-bold text-base text-white group-hover:text-[#48e714] transition-colors" dir="ltr">
                      +20 114 443 5547
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#21c715] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1B8A8] block font-semibold">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</span>
                    <span className="font-bold text-base text-white" dir="ltr">
                      info@aswannature.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#21c715] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1B8A8] block font-semibold">{isAr ? 'موقعنا في أسوان' : 'Meeting Base'}</span>
                    <span className="font-medium text-sm text-[#CFDFD4] block">
                      {isAr ? 'مرسى الشلال الأول وجزيرة إلفنتين، أسوان، مصر' : 'First Cataract Pier & Elephantine Island, Aswan, Egypt'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEgyptianRatesOpen(true)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer text-center"
                >
                  {isAr ? 'معلومات الأسعار المخفضة للمصريين والطلبة' : 'Special Egyptian & Student Pricing Info'}
                </button>
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8DC] shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F8E5] text-[#21c715] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#16241B]">
                    {isAr ? 'تم استلام طلبك بنجاح!' : 'Inquiry Received!'}
                  </h3>
                  <p className="text-sm text-[#556F5C] max-w-md mx-auto leading-relaxed">
                    {isAr
                      ? 'شكراً لاهتمامك بالطبيعة في أسوان. سنتواصل معك عبر الواتساب أو البريد الإلكتروني خلال ساعات قليلة لتأكيد الموعد والتفاصيل.'
                      : 'Thank you for connecting with Aswan Nature. We will contact you via WhatsApp or Email within a few hours to confirm details.'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#16241B] text-white text-xs font-bold hover:bg-[#204c30]"
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#16241B] mb-2">
                    {isAr ? 'نموذج الحجز والاستفسار' : 'Booking & Custom Inquiry Form'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                        {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? 'محمد علي' : 'Sarah Jenkins'}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                        {isAr ? 'رقم الواتساب / الهاتف *' : 'WhatsApp / Phone *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 1..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                        {isAr ? 'الجولة المطلوبة' : 'Preferred Experience'}
                      </label>
                      <select
                        value={formData.tour}
                        onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      >
                        {Object.values(toursData).map(t => (
                          <option key={t.id} value={isAr ? t.titleAr : t.title}>
                            {isAr ? t.titleAr : t.title}
                          </option>
                        ))}
                        <option value="Pharaohs Birds Alive Signature">
                          {isAr ? 'طيور الفراعنة حية (تجربة خاصة)' : 'Pharaohs Birds Alive Signature'}
                        </option>
                        <option value="Children Learning Camp">
                          {isAr ? 'معسكر تعلم الأطفال' : 'Children Learning Camp'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                        {isAr ? 'التاريخ المفضل' : 'Preferred Date'}
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      />
                    </div>
                  </div>

                  {/* Egyptian Checkbox */}
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-[#F0F6EE] border border-[#DEE8DB] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isEgyptian}
                      onChange={(e) => setFormData({ ...formData, isEgyptian: e.target.checked })}
                      className="w-4 h-4 rounded text-[#21c715] focus:ring-[#21c715]"
                    />
                    <span className="text-xs font-semibold text-[#254630]">
                      {isAr ? 'أنا مصري الجنسية / طالب (تطبيق السعر المدعوم بالجنيه المصري)' : 'I am Egyptian / student (Apply subsidized EGP local rates)'}
                    </span>
                  </label>

                  <div>
                    <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                      {isAr ? 'ملاحظات أو طلبات خاصة' : 'Special Notes or Questions'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isAr ? 'هل تفضل وقت الشروق؟ تصوير احترافي؟ عدد الأطفال؟' : 'Preferred departure time, photography equipment, dietary requests...'}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isAr ? 'إرسال طلب الحجز' : 'Send Booking Request'}</span>
                    <Send className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16241B] text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#21c715]" />
            <span>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E2E8DC] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#16241B] hover:bg-[#F9FAF7] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#556F5C] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#4C6453] leading-relaxed border-t border-[#F1F5EE] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
