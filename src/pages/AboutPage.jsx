import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Compass, Leaf, Users } from 'lucide-react';
import { NotYourUsualAswan } from '../components/NotYourUsualAswan';

export const AboutPage = () => {
  const { currentLang, handleOpenBooking } = useOutletContext();
  const isAr = currentLang === 'AR';

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#F8FAF5] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16241B]/5 border border-[#16241B]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#16241B] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#21c715]" />
            <span>{isAr ? 'قصتنا مع النيل' : 'OUR NILE STORY'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16241B] mb-6">
            {isAr ? 'وجه مختلف لأسوان.' : 'A different side of Aswan.'}
          </h1>
          <p className="text-lg text-[#556F5C] leading-relaxed">
            {isAr
              ? 'لسنا مجرد شركة سياحة عادية، بل مبادرة بيئية مجتمعية يقودها علماء طيور وبحارة نوبيون أصيلون، كبروا مع النهر ويعرفون خفاياه وجزره المحمية.'
              : 'We are an eco-initiative founded by local ornithologists and native Nubian river custodians who grew up alongside the Nile, dedicated to sharing its untouched wildlife.'}
          </p>
        </div>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl aspect-4/3">
            <img
              src="/assets/white-egret-shore.jpg"
              alt="Aswan Nature team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm font-semibold">
              {isAr ? 'محمية سالوجا وغزال وجزر الشلال الأول بأسوان' : 'Saluga & Ghazal Protected Reserves, Aswan'}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#16241B]">
              {isAr ? 'لماذا بدأنا أسوان نيتشر؟' : 'Why We Founded Aswan Nature'}
            </h2>
            <p className="text-[#4A5E50] leading-relaxed">
              {isAr
                ? 'على مدار عقود، ارتبطت زيارة أسوان بالمعابد فقط، بينما تم إغفال كنزها الحي الأكبر: التنوع البيولوجي المذهل لآلاف الطيور المستوطنة والمهاجرة بين قارتي إفريقيا وأوروبا. بدأنا لنغير هذه الرؤية ونقدم سياحة بيئية راقية تحترم الطبيعة وتدعم أهل النوبة.'
                : 'For decades, visiting Aswan was defined solely by stone monuments, overlooking its greatest living treasure: the breathtaking biodiversity of resident and migratory birds. We started to bridge this gap, offering respectful ecotourism that empowers local communities.'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E5F5E4] text-[#1E9911] flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#16241B] text-sm">
                    {isAr ? 'سياحة بيئية بدون انبعاثات أو إزعاج' : 'Zero Disturbance Eco-Boating'}
                  </h4>
                  <p className="text-xs text-[#556F5C]">
                    {isAr
                      ? 'قوارب هادئة وشراعية تتسلل بنعومة دون إفزاع الطيور المعششة.'
                      : 'Silent sailing and hybrid eco-boats designed not to disrupt nesting habitats.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E5F5E4] text-[#1E9911] flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#16241B] text-sm">
                    {isAr ? 'تمكين المجتمع النوبي المحلي' : 'Native Community Empowerment'}
                  </h4>
                  <p className="text-xs text-[#556F5C]">
                    {isAr
                      ? '١٠٠٪ من طواقمنا وبحارتنا من أبناء الجزر النوبية وأصحاب المعرفة المتوارثة.'
                      : '100% of our boatmen and field companions are native islanders with generational wisdom.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Section */}
      <NotYourUsualAswan currentLang={currentLang} />

      {/* CTA Box */}
      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <div className="bg-[#16241B] rounded-3xl p-10 sm:p-14 text-white">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            {isAr ? 'هل أنت مستعد لاكتشاف الوجه الحقيقي لأسوان؟' : 'Ready to discover the true wild side of Aswan?'}
          </h3>
          <p className="text-[#AEC2B3] max-w-xl mx-auto mb-8 text-sm sm:text-base">
            {isAr
              ? 'احجز جولتك الخاصة الآن وتحدث مباشرة مع مرشدينا لاختيار الموعد المثالي لرحلتك.'
              : 'Reserve your private boat trip today and talk to our local naturalists about best lighting and seasonal sightings.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleOpenBooking('General Trip')}
              className="px-8 py-3.5 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              {isAr ? 'احجز رحلتك الآن' : 'Book Your Trip'}
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
            >
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
