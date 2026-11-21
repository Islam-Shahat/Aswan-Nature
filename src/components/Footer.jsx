import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';









export const Footer = ({
  onOpenAdmin,
  onOpenEgyptianRates,
  onOpenPartners,
  onSelectTour,
  currentLang = 'EN'
}) => {
  return (
    <footer id="contact" className="bg-[#0C1D15] text-[#D3E0D6] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Description (4 cols) */}
          <div className="lg:col-span-4 max-w-sm">
            <a href="#" className="flex items-center gap-3 mb-6 group inline-flex">
              <img
                src="/assets/logo-official.png"
                alt="Aswan Nature Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform drop-shadow" />
              
              <span className="font-medium text-xl tracking-tight text-white flex items-baseline">
                aswan<span className="font-bold">nature<span className="text-[#2BE019]">.</span></span>
              </span>
            </a>

            <p className="text-sm text-[#A2B6A7] leading-relaxed mb-6">
              {currentLang === 'AR' ?
              'وجه مختلف لأسوان. جولات طبيعية، ورصد طيور، وتجارب تعليمية ثرية، يقودها شغف حقيقي ومعرفة محلية عميقة بالطبيعة البرية.' :
              'A different side of Aswan. Nature tours, birdwatching and learning experiences, guided by local knowledge and a love for the wild.'}
            </p>

            <div className="flex items-center gap-5 text-xs font-semibold text-white">
              <a
                href="https://www.instagram.com/aswannature/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2BE019] transition-colors inline-flex items-center gap-1">
                
                <span>Instagram</span>
                <span className="text-[11px]">↗</span>
              </a>
              <a
                href="https://www.youtube.com/@AswanNature"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2BE019] transition-colors inline-flex items-center gap-1">
                
                <span>YouTube</span>
                <span className="text-[11px]">↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-5">
              {currentLang === 'AR' ? 'استكشف' : 'Explore'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#9BB1A1]">
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  {currentLang === 'AR' ? 'جولاتنا' : 'Our Tours'}
                </a>
              </li>
              <li>
                <a href="#pharaohs" className="hover:text-white transition-colors">
                  {currentLang === 'AR' ? 'طيور الفراعنة حية' : 'Pharaohs Birds Alive'}
                </a>
              </li>
              <li>
                <a href="#camps" className="hover:text-white transition-colors">
                  {currentLang === 'AR' ? 'معسكرات التعلم' : 'Learning Camps'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {currentLang === 'AR' ? 'معرض الصور' : 'Gallery'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {currentLang === 'AR' ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartners}
                  className="hover:text-white transition-colors text-left">
                  
                  {currentLang === 'AR' ? 'الشركاء والداعمون' : 'Partners & Supporters'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Find Your Adventure (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-5">
              {currentLang === 'AR' ? 'ابحث عن مغامرتك' : 'Find Your Adventure'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#9BB1A1]">
              <li>
                <a
                  href="#tours"
                  onClick={() => onSelectTour && onSelectTour('Nile Birds Tour')}
                  className="hover:text-white transition-colors">
                  
                  {currentLang === 'AR' ? 'جولة طيور النيل' : 'Nile Birds Tour'}
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  onClick={() => onSelectTour && onSelectTour('Aswan Reservoir Birds Tour')}
                  className="hover:text-white transition-colors">
                  
                  {currentLang === 'AR' ? 'جولة طيور خزان أسوان' : 'Aswan Reservoir Birds Tour'}
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  onClick={() => onSelectTour && onSelectTour('Special Birding Tours')}
                  className="hover:text-white transition-colors">
                  
                  {currentLang === 'AR' ? 'جولات رصد الطيور الخاصة' : 'Special Birding Tours'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEgyptianRates}
                  className="hover:text-white transition-colors text-left">
                  
                  {currentLang === 'AR' ? 'أسعار خاصة للمصريين' : 'Special Egyptian Rates'}
                </button>
              </li>
              <li>
                <a href="#booking-widget" className="hover:text-white transition-colors">
                  {currentLang === 'AR' ? 'خطط لرحلتك' : 'Plan Your Trip'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Talk Nature (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-5">
              {currentLang === 'AR' ? 'لنتحدث عن الطبيعة' : 'Let’s Talk Nature'}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#A2B6A7] mb-6">
              <div>
                <a href="tel:+201144435547" dir="ltr" className="hover:text-white transition-colors">
                  +20 114 443 5547
                </a>
              </div>
              <div>
                <a href="tel:+201032403957" dir="ltr" className="hover:text-white transition-colors">
                  +20 103 240 3957
                </a>
              </div>
              <div>
                <a href="mailto:info@aswannature.com" className="hover:text-white transition-colors">
                  info@aswannature.com
                </a>
              </div>
              <div className="pt-2 text-xs leading-relaxed text-[#819987]">
                {currentLang === 'AR' ?
                'طريق خزان أسوان، أمام مستشفى سليمان، أسوان، مصر.' :
                'Aswan Reservoir Road, opposite Soliman Hospital, Aswan, Egypt.'}
              </div>
            </div>

            {/* WhatsApp Link matching Figma .footer-whatsapp */}
            <a
              href="https://wa.me/201144435547"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-[#2BE019] hover:text-[#0C1D15] px-4 py-2.5 rounded-lg transition-all duration-200">
              
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{currentLang === 'AR' ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#738B7A] gap-4">
          <div>
            © 2026 Aswan Nature. All rights reserved.
          </div>
          <div className="text-center italic font-serif text-sm text-[#A2B6A7]">
            {currentLang === 'AR' ? 'جذورنا في أسوان. وإلهامنا من الطبيعة.' : 'Rooted in Aswan. Inspired by nature.'}
          </div>
          <div>
            <button
              onClick={onOpenAdmin}
              className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#8FA494]">
              
              <span>{currentLang === 'AR' ? 'لوحة الإدارة (تصور تجريبي)' : 'Admin Concept'}</span>
              <span className="text-[10px]">↗</span>
            </button>
          </div>
        </div>
      </div>
    </footer>);

};