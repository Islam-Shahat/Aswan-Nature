import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
  Clock,
  ArrowUpRight
} from 'lucide-react';

const WHATSAPP_NUMBER = '201144435547';
const DISPLAY_PHONE = '+20 114 443 5547';
const SECOND_PHONE = '+20 111 471 1665';
const EMAIL_ADDRESS = 'fawzia.mohamed@aswannature.com';

// Google Sheets (Apps Script Web App) integration: paste your deployed Web App URL below
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOTzZz0w4IGNqrNOy1xd-QlEW3YQ8PjsA2wTjKFefZpzbPJiVQrJ91ihcdlVOxW4_LJg/exec';

export const ContactPage = () => {
  const { currentLang, setEgyptianRatesOpen } = useOutletContext();
  const isAr = currentLang === 'AR';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const subjectOptions = [
    { id: 'general', label: isAr ? 'استفسار عام' : 'General Question' },
    { id: 'tours_pricing', label: isAr ? 'معلومات الجولات والأسعار' : 'Tour & Pricing Info' },
    { id: 'egyptian_rates', label: isAr ? 'أسعار المصريين والطلبة' : 'Egyptian & Student Rates' },
    { id: 'private_boat', label: isAr ? 'قارب خاص / رحلة تصوير' : 'Private Boat / Photography Charter' },
    { id: 'learning_camps', label: isAr ? 'معسكرات التعلم والمدارس' : 'School & Learning Camps' },
    { id: 'partnerships', label: isAr ? 'الشراكات والإعلام' : 'Partnerships & Media' }
  ];

  const getSubjectLabel = () =>
    subjectOptions.find((opt) => opt.id === formData.subject)?.label || formData.subject;

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(DISPLAY_PHONE);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback if clipboard is unavailable
    }
  };

  const buildWhatsAppUrl = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  const buildFormWhatsAppUrl = () => {
    const subjectLabel = getSubjectLabel();
    const lines = isAr
      ? [
          `مرحباً فريق أسوان نيتشر،`,
          formData.name ? `الاسم: ${formData.name}` : null,
          formData.phone ? `رقم الهاتف: ${formData.phone}` : null,
          formData.email ? `البريد الإلكتروني: ${formData.email}` : null,
          `الموضوع: ${subjectLabel}`,
          formData.message ? `الرسالة: ${formData.message}` : null
        ]
      : [
          `Hello Aswan Nature team,`,
          formData.name ? `Name: ${formData.name}` : null,
          formData.phone ? `Phone: ${formData.phone}` : null,
          formData.email ? `Email: ${formData.email}` : null,
          `Topic: ${subjectLabel}`,
          formData.message ? `Message: ${formData.message}` : null
        ];
    return buildWhatsAppUrl(lines.filter(Boolean).join('\n'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!GOOGLE_SCRIPT_URL) {
      setFormSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('subject', getSubjectLabel());
      payload.append('message', formData.message);
      payload.append('lang', currentLang);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: payload.toString()
      });
      setFormSubmitted(true);
    } catch {
      setSubmitError(
        isAr
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.'
          : 'Failed to send message. Please try again or reach us via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickWhatsAppSuggestions = [
    {
      label: isAr ? 'أسعار الجولات والمواعيد المتاحة' : 'Tour prices & available times',
      text: isAr
        ? 'مرحباً، أريد الاستفسار عن أسعار الجولات والمواعيد المتاحة في أسوان.'
        : 'Hi! I would like to ask about tour prices and available departure times in Aswan.'
    },
    {
      label: isAr ? 'أسعار المصريين والطلبة المدعومة' : 'Egyptian & student local rates',
      text: isAr
        ? 'مرحباً، أريد معرفة تفاصيل الأسعار المخفضة للمصريين والطلبة.'
        : 'Hi! Could you share details about the Egyptian & student local rates?'
    },
    {
      label: isAr ? 'رحلة قارب خاص أو تصوير احترافي' : 'Private boat / photography trip',
      text: isAr
        ? 'مرحباً، أرغب في ترتيب رحلة قارب خاص لرصد وتصوير الطيور.'
        : 'Hi! I am interested in arranging a private boat charter for birdwatching & photography.'
    },
    {
      label: isAr ? 'معسكرات التعلم والمدارس' : 'School & family learning camps',
      text: isAr
        ? 'مرحباً، أريد الاستفسار عن برامج معسكرات التعلم للأطفال والمدارس.'
        : 'Hi! I would like more information about your learning camps for kids and schools.'
    }
  ];

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
        ? 'يمكن التواصل معنا عبر النموذج أو رسالة مباشرة على واتساب أو الاتصال الهاتفي. الدفع نقداً بالجنيه المصري أو بالدولار/اليورو أو بالتحويل البنكي/فودافون كاش.'
        : 'You can reach us via this form, directly on WhatsApp, or by phone. Payment is accepted in cash (EGP, USD, EUR) or digital bank transfer.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8FAF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="w-full flex items-center justify-center gap-2 sm:gap-4 mb-12 px-2 sm:px-4 overflow-hidden">
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#16241B]/25 to-[#16241B]/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#2BE019] shrink-0 hidden sm:block shadow-[0_0_8px_#2BE019]" />
          <h1 className="px-3 sm:px-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#16241B] shrink-0 text-center">
            {isAr ? 'تواصل معنا مباشرة' : 'Get in touch with us.'}
          </h1>
          <div className="w-1.5 h-1.5 rounded-full bg-[#2BE019] shrink-0 hidden sm:block shadow-[0_0_8px_#2BE019]" />
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[#16241B]/70 via-[#16241B]/25 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Direct Contact Channels + WhatsApp & Phone Suggestions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0a515b] via-[#073b42] to-[#05262c] border border-[#167a88]/30 rounded-3xl p-8 text-white shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  {isAr ? 'قنوات التواصل المباشر' : 'Direct Contact Channels'}
                </h3>
                <p className="text-xs text-[#B8D4D8] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#48e714]" />
                  <span>
                    {isAr
                      ? 'متاحون يومياً من ٦:٠٠ صباحاً إلى ١٠:٠٠ مساءً'
                      : 'Available daily · 6:00 AM – 10:00 PM EET'}
                  </span>
                </p>
              </div>

              <div className="space-y-3.5 text-sm">
                {/* WhatsApp Official */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#48e714]/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#21c715] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8D4D8] block font-semibold">
                        {isAr ? 'واتساب الرسمي (رد سريع)' : 'WhatsApp Official (Fastest)'}
                      </span>
                      <span
                        className="font-bold text-base text-white group-hover:text-[#48e714] transition-colors"
                        dir="ltr"
                      >
                        {DISPLAY_PHONE}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B8D4D8] group-hover:text-[#48e714] transition-colors flex-shrink-0" />
                </a>

                {/* Phone Call + Copy */}
                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/12 transition-all">
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-3.5 flex-1 group">
                    <div className="w-11 h-11 rounded-xl bg-white/12 flex items-center justify-center text-[#48e714] flex-shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8D4D8] block font-semibold">
                        {isAr ? 'اتصال هاتفي مباشر' : 'Direct Phone Call'}
                      </span>
                      <span
                        className="font-bold text-base text-white group-hover:text-[#48e714] transition-colors"
                        dir="ltr"
                      >
                        {DISPLAY_PHONE}
                      </span>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title={isAr ? 'نسخ الرقم' : 'Copy number'}
                    className="px-3 py-1.5 rounded-lg bg-white/12 hover:bg-white/20 text-xs font-semibold text-[#D9EAEC] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#48e714]" />
                        <span>{isAr ? 'تم النسخ' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isAr ? 'نسخ' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/12 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/12 flex items-center justify-center text-[#21c715] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B8D4D8] block font-semibold">
                        {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                      </span>
                      <span
                        className="font-bold text-base text-white group-hover:text-[#48e714] transition-colors"
                        dir="ltr"
                      >
                        {EMAIL_ADDRESS}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B8D4D8] group-hover:text-[#48e714] transition-colors flex-shrink-0" />
                </a>

                {/* Meeting Base / Official Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/8 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-white/12 flex items-center justify-center text-[#21c715] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B8D4D8] block font-semibold">
                      {isAr ? 'موقعنا ومكتبنا في أسوان' : 'Official Location in Aswan'}
                    </span>
                    <span className="font-medium text-sm text-[#D9EAEC] block mt-0.5">
                      {isAr
                        ? 'طريق خزان أسوان، أمام مستشفى سليمان، أسوان، مصر'
                        : 'Aswan Reservoir road, in front of Soliman Hospital, Aswan, Egypt'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Message Suggestions */}
              <div className="pt-5 border-t border-white/15 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8D4D8]">
                    {isAr ? 'اقتراحات رسائل واتساب سريعة' : 'Quick WhatsApp Suggestions'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {quickWhatsAppSuggestions.map((item, idx) => (
                    <a
                      key={idx}
                      href={buildWhatsAppUrl(item.text)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-white/8 hover:bg-[#21c715]/20 border border-white/12 hover:border-[#48e714]/50 text-xs font-medium text-[#E8F3F5] hover:text-white transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-[#48e714] flex-shrink-0" />
                        <span>{item.label}</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B8D4D8] group-hover:text-[#48e714] flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
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

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-11 border border-[#E2E8DC] shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#E8F8E5] text-[#21c715] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#16241B]">
                    {isAr ? 'تم استلام رسالتك بنجاح!' : 'Message Received!'}
                  </h3>
                  <p className="text-sm text-[#556F5C] max-w-md mx-auto leading-relaxed">
                    {isAr
                      ? 'شكراً لتواصلك مع أسوان نيتشر. سيتواصل معك فريقنا عبر وسيلة التواصل التي اخترتها في أقرب وقت.'
                      : 'Thank you for reaching out to Aswan Nature. Our team will get back to you shortly via your preferred contact channel.'}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={buildFormWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white text-xs font-bold inline-flex items-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{isAr ? 'أرسل نسخة عبر واتساب للرد الفوري' : 'Send via WhatsApp for instant reply'}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#16241B] text-white text-xs font-bold hover:bg-[#204c30] cursor-pointer transition-colors"
                    >
                      {isAr ? 'إرسال رسالة أخرى' : 'Send another message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#16241B] mb-1">
                      {isAr ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                    </h3>
                    <p className="text-sm text-[#556F5C]">
                      {isAr
                        ? 'املأ البيانات التالية وسنرد عليك في أسرع وقت.'
                        : 'Fill out the form below and our team will reply promptly.'}
                    </p>
                  </div>

                  {/* Name & Email */}
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
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                        {isAr ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp Number'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 1..."
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                        {isAr ? 'موضوع الرسالة' : 'Subject / Topic'}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#3E5244] uppercase tracking-wider mb-2">
                      {isAr ? 'رسالتك *' : 'Your Message *'}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isAr
                          ? 'اكتب استفسارك أو تفاصيل الرحلة التي تفكر فيها...'
                          : 'Write your question, inquiry, or details you would like help with...'
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#F6F8F4] border border-[#DEE6DA] text-sm focus:outline-none focus:border-[#21c715]"
                    />
                  </div>

                  {submitError && (
                    <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                      {submitError}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 px-6 rounded-full bg-[#21c715] hover:bg-[#1bb010] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>
                        {isSubmitting
                          ? isAr
                            ? 'جاري الإرسال...'
                            : 'Sending...'
                          : isAr
                          ? 'إرسال الرسالة'
                          : 'Send Message'}
                      </span>
                      <Send className="w-4 h-4 rtl:rotate-180" />
                    </button>

                    <a
                      href={buildFormWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="py-4 px-6 rounded-full bg-[#16241B] hover:bg-[#204c30] text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#48e714]" />
                      <span>{isAr ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}</span>
                    </a>
                  </div>
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
