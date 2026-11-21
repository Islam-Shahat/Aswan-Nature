import React from 'react';
import { X, Handshake, Globe2, ShieldCheck, Mail } from 'lucide-react';







export const PartnersModal = ({
  isOpen,
  onClose,
  currentLang = 'EN'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6EDE1] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Close">
          
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-[#EEF5EA] flex items-center justify-center text-[#256636]">
            <Handshake className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#56725F] font-bold block">
              {currentLang === 'AR' ? 'مجتمع الطبيعة والحماية' : 'GROWING TOGETHER, NATURALLY'}
            </span>
            <h3 className="text-2xl font-extrabold text-[#15241A] font-heading">
              {currentLang === 'AR' ? 'الشركاء والداعمون' : 'Partners & Supporters'}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#4E6254] leading-relaxed mb-6">
          {currentLang === 'AR' ?
          'نعمل جنباً إلى جنب مع المنظمات البيئية، والمؤسسات العلمية، والمجتمعات النوبية المحلية لحماية الطيور المهاجرة والموائل الطبيعية على طول وادي النيل بأسوان.' :
          'We collaborate closely with environmental initiatives, academic institutions, and local Nubian communities to safeguard migratory birds and preserve fragile Nile river ecosystems.'}
        </p>

        {/* Categories of collaboration */}
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-[#F6FAF3] border border-[#E4ECE1] flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-[#2BE019] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#16241B]">
                {currentLang === 'AR' ? 'المؤسسات الأكاديمية والبحثية' : 'Conservation & Research Bodies'}
              </h4>
              <p className="text-xs text-[#5D7063] mt-0.5">
                {currentLang === 'AR' ?
                'رصد دوري لمسارات الطيور المهاجرة وحلقات التعشيش السنوية في جزر الشلال الأول.' :
                'Collaborative census monitoring of seasonal migration along the East African flyway.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F6FAF3] border border-[#E4ECE1] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2BE019] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#16241B]">
                {currentLang === 'AR' ? 'المجتمع المحلي النوبي' : 'Local Community Stewards'}
              </h4>
              <p className="text-xs text-[#5D7063] mt-0.5">
                {currentLang === 'AR' ?
                'تمكين الصيادين والبحارة المحليين من خلال برامج السياحة البيئية المستدامة.' :
                'Empowering local boatmen and fishermen through sustainable eco-tourism livelihoods.'}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E8EDE4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#627568]">
            {currentLang === 'AR' ? 'هل ترغب في التعاون معنا؟' : 'Interested in partnering with us?'}
          </span>
          <a
            href="mailto:info@aswannature.com?subject=Partnership%20Inquiry"
            className="inline-flex items-center gap-2 bg-[#13231B] text-white hover:bg-[#1E3A2B] text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
            
            <Mail className="w-3.5 h-3.5" />
            <span>{currentLang === 'AR' ? 'راسلنا للشراكة' : 'Contact Partnerships'}</span>
          </a>
        </div>
      </div>
    </div>);

};