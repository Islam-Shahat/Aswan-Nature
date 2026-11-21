import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Users, Send } from 'lucide-react';











export const BookingModal = ({
  isOpen,
  onClose,
  initialTour = 'Nile Birds Tour',
  initialDate = '',
  initialGuests = '2 guests',
  isEgyptianDefault = false,
  currentLang = 'EN'
}) => {
  const [tour, setTour] = useState(initialTour);
  const [date, setDate] = useState(initialDate);
  const [guests, setGuests] = useState(initialGuests);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isEgyptian, setIsEgyptian] = useState(isEgyptianDefault);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTour(initialTour);
  }, [initialTour]);

  useEffect(() => {
    if (initialDate) setDate(initialDate);
  }, [initialDate]);

  useEffect(() => {
    if (initialGuests) setGuests(initialGuests);
  }, [initialGuests]);

  useEffect(() => {
    setIsEgyptian(isEgyptianDefault);
  }, [isEgyptianDefault]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6EDE1] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Close">
          
          <X className="w-5 h-5" />
        </button>

        {!submitted ?
        <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#56725F] font-bold block mb-1">
                {currentLang === 'AR' ? 'تجارب طبيعة أسوان' : 'ASWAN NATURE EXPERIENCES'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15241A] font-heading">
                {currentLang === 'AR' ? 'احجز رحلتك الاستكشافية' : 'Book Your Nature Tour'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6F61] mt-1">
                {currentLang === 'AR' ?
              'احجز مقعدك على صفحة النيل بصحبة نخبة من خبراء رصد الطيور والحياة البرية المحليين.' :
              'Reserve your spot on the Nile with expert local ornithologists and naturalists.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#233328] mb-1 uppercase tracking-wider">
                  {currentLang === 'AR' ? 'اختر الجولة / التجربة' : 'Select Experience / Tour'}
                </label>
                <select
                value={tour}
                onChange={(e) => setTour(e.target.value)}
                className="w-full bg-[#F6FAF4] border border-[#DEE6DB] rounded-xl px-4 py-3 text-sm text-[#142318] font-medium focus:ring-2 focus:ring-[#2BE019] focus:outline-none"
                required>
                
                  <option value="Nile Birds Tour">
                    {currentLang === 'AR' ? 'جولة طيور النيل (٣ ساعات · جزر الشلال الأول)' : 'Nile Birds Tour (3 hours · First Cataract Islands)'}
                  </option>
                  <option value="Aswan Reservoir Birds Tour">
                    {currentLang === 'AR' ? 'جولة طيور خزان أسوان (٣ ساعات · السد وخزان أسوان)' : 'Aswan Reservoir Birds Tour (3 hours · Old & High Dam)'}
                  </option>
                  <option value="Special Birding Tours">
                    {currentLang === 'AR' ? 'جولات رصد الطيور الخاصة (٦ ساعات · مسار مخصص)' : 'Special Birding Tours (6 hours · Tailored Experience)'}
                  </option>
                  <option value="Pharaohs Birds Alive Signature">
                    {currentLang === 'AR' ? 'طيور الفراعنة حية (تجربة استثنائية حصرية)' : 'Pharaohs Birds Alive Signature Experience'}
                  </option>
                  <option value="Children Learning Camps">
                    {currentLang === 'AR' ? 'معسكرات التعلم للأطفال في الطبيعة' : 'Children Outdoor Learning Camp'}
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#233328] mb-1 uppercase tracking-wider">
                    {currentLang === 'AR' ? 'التاريخ' : 'Date'}
                  </label>
                  <input
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#F6FAF4] border border-[#DEE6DB] rounded-xl px-3 py-3 text-sm text-[#142318] font-medium focus:ring-2 focus:ring-[#2BE019] focus:outline-none"
                  required />
                
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#233328] mb-1 uppercase tracking-wider">
                    {currentLang === 'AR' ? 'عدد الأفراد' : 'Guests'}
                  </label>
                  <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#F6FAF4] border border-[#DEE6DB] rounded-xl px-3 py-3 text-sm text-[#142318] font-medium focus:ring-2 focus:ring-[#2BE019] focus:outline-none">
                  
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) =>
                  <option key={n} value={`${n} ${n === 1 ? 'guest' : 'guests'}`}>
                        {currentLang === 'AR' ? `${n} ${n === 1 ? 'فرد' : 'أفراد'}` : `${n} ${n === 1 ? 'guest' : 'guests'}`}
                      </option>
                  )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#233328] mb-1 uppercase tracking-wider">
                  {currentLang === 'AR' ? 'الاسم بالكامل' : 'Full Name'}
                </label>
                <input
                type="text"
                placeholder={currentLang === 'AR' ? 'أحمد محمد' : 'Dr. Sarah Connor'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F6FAF4] border border-[#DEE6DB] rounded-xl px-4 py-2.5 text-sm text-[#142318] focus:ring-2 focus:ring-[#2BE019] focus:outline-none"
                required />
              
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#233328] mb-1 uppercase tracking-wider">
                    {currentLang === 'AR' ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                  </label>
                  <input
                  type="tel"
                  placeholder="+20 1..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#F6FAF4] border border-[#DEE6DB] rounded-xl px-4 py-2.5 text-sm text-[#142318] focus:ring-2 focus:ring-[#2BE019] focus:outline-none"
                  required />
                
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#233328] mb-1 uppercase tracking-wider">
                    {currentLang === 'AR' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                  type="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F6FAF4] border border-[#DEE6DB] rounded-xl px-4 py-2.5 text-sm text-[#142318] focus:ring-2 focus:ring-[#2BE019] focus:outline-none"
                  required />
                
                </div>
              </div>

              {/* Special Egyptian Rates Checkbox */}
              <div className="p-3 bg-[#EEF5E9] rounded-xl border border-[#D5E4CE] flex items-center gap-3">
                <input
                type="checkbox"
                id="egyptianCheck"
                checked={isEgyptian}
                onChange={(e) => setIsEgyptian(e.target.checked)}
                className="w-4 h-4 text-[#2BE019] rounded focus:ring-[#2BE019] border-gray-300" />
              
                <label htmlFor="egyptianCheck" className="text-xs text-[#2A4331] font-medium cursor-pointer">
                  {currentLang === 'AR' ?
                'أحمل الجنسية المصرية / إقامة مصرية سارية (لتطبيق تخفيض الأسعار المحلية).' :
                'I qualify for Egyptian resident / national subsidized rates (Valid ID required).'}
                </label>
              </div>

              <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#1EAA13] hover:bg-[#18930F] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 mt-2 cursor-pointer">
              
                <span>{currentLang === 'AR' ? 'تأكيد طلب الحجز' : 'Submit Reservation Request'}</span>
                <Send className="w-4 h-4 rtl:rotate-180 text-white" />
              </button>
            </form>
          </div> :

        <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E7F8E3] border border-[#2BE019] text-[#229915] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#122318] font-heading">
              {currentLang === 'AR' ? 'تم استلام طلب حجزك بنجاح!' : 'Reservation Request Received!'}
            </h3>

            <p className="text-xs sm:text-sm text-[#5B6F61] max-w-sm mx-auto leading-relaxed">
              {currentLang === 'AR' ?
            `شكراً لك يا ${name}. سيتواصل معك فريق طبيعة أسوان عبر الواتساب أو الهاتف لتأكيد موعد الجولة وتفاصيل نقطة الالتقاء.` :
            `Thank you, ${name}. Our local nature team will contact you via WhatsApp / Phone to confirm boat departure time and logistics.`}
            </p>

            <div className="pt-4">
              <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#122318] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#213829] transition-colors">
              
                {currentLang === 'AR' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        }
      </div>
    </div>);

};