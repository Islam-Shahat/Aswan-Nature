import React from 'react';
import { X, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';









export const TourDetailModal = ({
  tourId,
  isOpen,
  onClose,
  onBookTour,
  currentLang = 'EN'
}) => {
  if (!isOpen || !tourId) return null;

  const tourData =














  {
    'nile-birds': {
      title: 'Nile Birds Tour',
      titleAr: 'جولة طيور النيل',
      badge: 'Birdwatching by boat',
      badgeAr: 'رصد الطيور بالقارب',
      image: '/assets/kingfisher.webp',
      duration: '3 hours*',
      location: 'First Cataract Islands',
      desc: 'Drift between the iconic granite boulders and protected islands of the First Cataract. This guided boat excursion gets you up close to kingfishers, herons, egrets, and resident waders in their natural river habitats.',
      descAr: 'رحلة إبحار استثنائية بين الصخور الجرانيتية وجزر الشلال الأول المحمية. تقترب بالقارب من صياد السمك، والبلشون، والطيور الخواضة النيلية في موائلها الطبيعية.',
      highlights: [
      'Close observation of Pied Kingfisher & Malachite Kingfisher',
      'Private licensed traditional Nubian boat with experienced boatman',
      'Expert local ornithologist guide with spotting scope & binoculars',
      'Complimentary drinking water & local herbal tea'],

      highlightsAr: [
      'رصد دقيق لصياد السمك الأبقع وصياد السمك الملكي الصغير',
      'قارب نيلي تراثي مريح ومرخص مع بحار نوبي خبير بالمسارات النيلية',
      'مرشد بيئي متخصص مع تلسكوب ومناظير احترافية',
      'مشروبات مياه عذبة وشاي نوبي بالأعشاب الطبيعية مجاناً']

    },
    'aswan-reservoir': {
      title: 'Aswan Reservoir Birds Tour',
      titleAr: 'جولة طيور خزان أسوان',
      badge: 'Birdwatching by boat',
      badgeAr: 'رصد الطيور بالقارب',
      image: '/assets/stork.webp',
      duration: '3 hours*',
      location: 'Aswan Reservoir',
      desc: 'Discover the tranquil, expansive body of water between the Old Aswan Dam and the High Dam. Recognized as an internationally important wetland, the reservoir hosts migratory storks, cormorants, and waterfowl.',
      descAr: 'استكشف المسطح المائي الهادئ والواسع المحصور بين سد أسوان القديم والسد العالي. بحيرة الخزان مصنفة كمنطقة رطبة ذات أهمية عالمية للطيور المهاجرة.',
      highlights: [
      'Explore undisturbed reed beds and secluded rocky islets',
      'High diversity of seasonal migratory waterfowl & birds of prey',
      'Quiet waters with minimal boat traffic for supreme photography',
      'Field identification guide and checklist provided'],

      highlightsAr: [
      'استكشاف أحواض القصب وجزر الصخور الهادئة بعيداً عن صخب المدينة',
      'تنوع هائل من الطيور المائية المهاجرة والجوارح واللقالق',
      'مياه هادئة خالية من التزاحم مثالية للتصوير الفوتوغرافي الاحترافي',
      'قائمة مصورة لتوثيق وتحديد أنواع الطيور المرصودة']

    },
    'special-birding': {
      title: 'Special Birding Tours',
      titleAr: 'جولات رصد الطيور الخاصة',
      badge: 'Tailored experience',
      badgeAr: 'تجربة مخصصة',
      image: '/assets/goose.webp',
      duration: '6 hours',
      location: 'Nile or Aswan Reservoir',
      desc: 'A full immersive naturalist expedition designed for avid photographers, birders, and nature lovers. Combines extensive water journeys, island landings, bird ringing discussions, and a traditional home-cooked meal.',
      descAr: 'رحلة طبيعية متكاملة ومخصصة للمصورين وعشاق مراقبة الطيور والباحثين. تجمع بين جولات القارب الممتدة، والنزول في جزر برية نائية، مع وجبة نوبية تقليدية أصيلة.',
      highlights: [
      'Extended 6-hour custom route covering sunrise or sunset golden hour',
      'Landing on remote undisturbed nature sanctuary islands',
      'Traditional freshly cooked Nubian lunch prepared by local hosts',
      'Dedicated slow-pace photography opportunities for rare species'],

      highlightsAr: [
      'مسار مخصص يمتد لـ 6 ساعات يشمل شروق أو غروب الشمس الذهبي',
      'النزول في جزر محمية نائية غير مأهولة لاستكشاف الأعشاش والموائل',
      'غداء نوبي طازج ومعد بأيدي مضيفين محليين في جزيرة ريفية',
      'وقت كافٍ ووتيرة هادئة مخصصة لتصوير الأنواع النادرة والطيور الحذرة']

    }
  };

  const tour = tourData[tourId] || tourData['nile-birds'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E6EDE1] max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
          aria-label="Close">
          
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover object-center" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="inline-block bg-[#2BE019] text-black text-xs font-bold px-3 py-1 rounded-md mb-2 shadow">
              {currentLang === 'AR' ? tour.badgeAr : tour.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              {currentLang === 'AR' ? tour.titleAr : tour.title}
            </h3>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-center gap-6 text-xs text-[#526657] font-semibold border-b border-[#EAF0E6] pb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2BE019]" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#2BE019]" />
              <span>{tour.location}</span>
            </div>
          </div>

          <p className="text-sm text-[#4E6254] leading-relaxed">
            {currentLang === 'AR' ? tour.descAr : tour.desc}
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#637568] font-bold mb-3">
              {currentLang === 'AR' ? 'أبرز ما تشمله الجولة' : 'EXPERIENCE HIGHLIGHTS'}
            </h4>
            <div className="space-y-2">
              {(currentLang === 'AR' ? tour.highlightsAr : tour.highlights).map((h, i) =>
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263D2E]">
                  <CheckCircle className="w-4 h-4 text-[#2BE019] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8EDE4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#16241B]">
                {currentLang === 'AR' ? 'طلب السعر والحجز' : 'Request price'}
              </div>
              <div className="text-xs text-[#7A8C7F]">
                {currentLang === 'AR' ? 'تتوفر أسعار خاصة للمصريين' : 'Special Egyptian rates available'}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookTour(tour.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2BE019] hover:bg-[#25C715] text-[#0A1810] font-bold text-sm px-6 py-3 rounded-xl shadow transition-all duration-200">
              
              <span>{currentLang === 'AR' ? 'احجز هذه الجولة الآن' : 'Book This Tour'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>);

};