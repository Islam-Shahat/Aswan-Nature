import React from 'react';
import { X, CheckCircle2, Sun, ArrowRight, ShieldCheck } from 'lucide-react';








export const EgyptianRatesModal = ({
  isOpen,
  onClose,
  onBookNow,
  currentLang = 'EN'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-[#E6EDE1] overflow-hidden my-auto max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Close">
          
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#EBF6E5] flex items-center justify-center text-[#256636]">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#56725F] font-bold block">
              {currentLang === 'AR' ? 'مبادرة خاصة للمصريين' : 'LOCAL COMMUNITY INITIATIVE'}
            </span>
            <h3 className="text-2xl font-extrabold text-[#15241A] font-heading">
              {currentLang === 'AR' ? 'أسعار مخصصة للمصريين' : 'Special Egyptian Rates'}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#4E6254] leading-relaxed mb-6">
          {currentLang === 'AR' ?
          'إيماناً منا بحق كل مصري في التعرف على الطبيعة الساحرة والتنوع البيئي الفريد في أسوان، نوفر برامج دعم مخفضة وباقات خاصة للمواطنين والطلاب والعائلات.' :
          'We believe nature should be accessible to all. We proudly offer subsidized rates and dedicated packages for Egyptian citizens, students, and resident families.'}
        </p>

        {/* Perks list */}
        <div className="space-y-3 bg-[#F7FAF4] rounded-2xl p-5 border border-[#E3EBE0] mb-6 text-sm text-[#243B2A]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#2BE019] shrink-0 mt-0.5" />
            <span>
              <strong>{currentLang === 'AR' ? 'خصم يصل إلى 50%' : 'Up to 50% Subsidy'}</strong>{' '}
              {currentLang === 'AR' ?
              'على رحلات القوارب الفردية والجولات النيلية العائلية.' :
              'on standard boat tours and guided birdwatching excursions.'}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#2BE019] shrink-0 mt-0.5" />
            <span>
              <strong>{currentLang === 'AR' ? 'باقات طلاب الجامعات والمدارس' : 'Student & Youth Packages'}</strong>{' '}
              {currentLang === 'AR' ?
              'رحلات تعليمية مدعومة لطلاب العلوم والبيولوجيا والمهتمين بالطبيعة.' :
              'special educational pricing for school and university students.'}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#2BE019] shrink-0 mt-0.5" />
            <span>
              <strong>{currentLang === 'AR' ? 'معدات مراقبة مجانية' : 'Optics & Guidebooks Included'}</strong>{' '}
              {currentLang === 'AR' ?
              'توفير المناظير وكتب التعريف بالطيور مجاناً طوال فترة الجولة.' :
              'complimentary use of professional binoculars and field guides.'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#627568] mb-6">
          <ShieldCheck className="w-4 h-4 text-[#2BE019] shrink-0" />
          <span>
            {currentLang === 'AR' ?
            'يرجى إبراز بطاقة الرقم القومي المصرية أو كارنيه الطالب عند الحجز.' :
            'Valid Egyptian National ID or student ID required at check-in.'}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            onClose();
            onBookNow();
          }}
          className="w-full flex items-center justify-center gap-2 bg-[#1EAA13] hover:bg-[#18930F] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 cursor-pointer">
          
          <span>{currentLang === 'AR' ? 'احجز بالسعر المصري الآن' : 'Book with Egyptian Rate'}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180 text-white" />
        </button>
      </div>
    </div>);

};