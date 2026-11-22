import React from 'react';
import { ArrowRight } from 'lucide-react';






export const ReviewsSection = ({
  onOpenPartners,
  currentLang = 'EN'
}) => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading matching Figma */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#637568] font-bold block mb-3">
            {currentLang === 'AR' ? 'قصص من ضفاف النهر' : 'STORIES FROM THE RIVER'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.03em] text-[#16241B] font-heading">
            {currentLang === 'AR' ?
            'التجارب الاستثنائية تستحق قصصاً حقيقية.' :
            'Good experiences deserve real stories.'}
          </h2>
        </div>

        {/* Google Reviews Card matching Figma .review-placeholder */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5EADF] shadow-[0_4px_24px_-6px_rgba(20,40,25,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="flex items-start sm:items-center gap-5">
            {/* Google "G" Logo matching Figma .google-g */}
            <div className="w-12 h-12 rounded-xl bg-[#F4F7F2] border border-[#E1E8DC] flex items-center justify-center shrink-0">
              <span className="text-2xl font-black text-[#2E5A3B] font-serif">G</span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#16241B] mb-1 font-heading">
                {currentLang === 'AR' ?
                'آراء ضيوفنا الكرام قريباً جداً.' :
                'Our guests’ words, coming soon.'}
              </h3>
              <p className="text-xs sm:text-sm text-[#617466]">
                {currentLang === 'AR' ?
                'ستظهر هنا تقييمات ومراجعات جوجل المعتمدة بمجرد ربط وتفعيل حساب الأعمال الرسمي للشركة.' :
                'Verified Google reviews and ratings will appear here once our official Business profile is connected.'}
              </p>
            </div>
          </div>

          <div className="self-end md:self-center shrink-0">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F1F5ED] text-[#627568] border border-[#DEE6D9]">
              {currentLang === 'AR' ? 'في انتظار الربط' : 'Connection pending'}
            </span>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-[#E6ECE0] mb-14" />

        {/* Community & Partners Strip matching Figma .partners-strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#637568] font-bold block mb-1">
              {currentLang === 'AR' ? 'ننمو معاً، بطبيعتنا' : 'GROWING TOGETHER, NATURALLY'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16241B] font-heading">
              {currentLang === 'AR' ? 'مجتمع الطبيعة الخاص بنا.' : 'Our community of nature.'}
            </h3>
          </div>

          <div className="md:col-span-4 text-xs sm:text-sm text-[#65796B]">
            {currentLang === 'AR' ?
            'سيتم إضافة ملفات الشركاء والداعمين المعتمدين فور استكمال الموافقات الرسمية.' :
            'Partner and supporter profiles will be added after company approval.'}
          </div>

          <div className="md:col-span-3 md:text-right">
            <button
              onClick={onOpenPartners}
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#16241B] hover:text-[#2BE019] transition-colors">
              
              <span>{currentLang === 'AR' ? 'الشركاء والداعمون' : 'Partners & Supporters'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};