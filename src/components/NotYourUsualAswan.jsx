import React from 'react';
import { Glasses, Bird, Sailboat, Leaf } from 'lucide-react';





export const NotYourUsualAswan = ({ currentLang = 'EN' }) => {
  const features = [
  {
    num: '01',
    icon: Glasses,
    title: currentLang === 'AR' ? 'بإرشاد خبراء الطبيعة' : 'Guided by nature experts',
    desc:
    currentLang === 'AR' ?
    'شاهد أكثر، وافهم أعمق. استكشف بصحبة مرشدين يعرفون الطيور وموائلها الطبيعية شبراً بشبر.' :
    'See more, understand more. Explore with guides who know the birds and their habitats.'
  },
  {
    num: '02',
    icon: Bird,
    title: currentLang === 'AR' ? 'نوع مختلف من الاكتشاف' : 'A different kind of discovery',
    desc:
    currentLang === 'AR' ?
    'اكتشف حياة طيور استثنائية حول جزر الشلال الأول ومحمية خزان أسوان الطبيعية.' :
    'Find remarkable birdlife around the First Cataract Islands and Aswan Reservoir.'
  },
  {
    num: '03',
    icon: Sailboat,
    title: currentLang === 'AR' ? 'النيل بأصالته الحقيقية' : 'The Nile, authentically',
    desc:
    currentLang === 'AR' ?
    'اترك الطرق التقليدية المزدحمة خلفك وجرب النيل من منظور بري طبيعي هادئ.' :
    'Leave the ordinary route behind and experience the river from a natural perspective.'
  },
  {
    num: '04',
    icon: Leaf,
    title: currentLang === 'AR' ? 'انبهار. تعلّم. تواصل.' : 'Wonder. Learn. Connect.',
    desc:
    currentLang === 'AR' ?
    'تجارب خارجية هادفة وممتعة تقرب العقول الشغوفة من روح الطبيعة الحية.' :
    'Meaningful outdoor experiences that bring curious minds closer to nature.'
  }];


  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAF5] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#65766A] font-bold">
            {currentLang === 'AR' ? 'ليست أسوان التقليدية' : 'NOT YOUR USUAL ASWAN'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#16241B] font-heading">
              {currentLang === 'AR' ?
              <>
                  أقل تقليدية.<br />
                  <span className="text-[#78887C]">وأكثر استثنائية.</span>
                </> :

              <>
                  Less ordinary.<br />
                  <span className="text-[#78887C]">More extraordinary.</span>
                </>
              }
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-base sm:text-lg text-[#55675A] leading-relaxed">
              {currentLang === 'AR' ?
              'هناك أسوان أخرى تنتظر من يكتشفها. جزر هادئة، وحياة برية غير متوقعة، واتصال أعمق بعالم الطبيعة.' :
              'There’s another Aswan waiting to be discovered. Quiet islands, unexpected wildlife, and a deeper connection to the natural world.'}
            </p>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group bg-white rounded-2xl p-7 border border-[#E7ECE2] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-6px_rgba(20,40,25,0.08)] hover:border-[#2BE019]/40 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
                
                <div>
                  {/* Card Top: Circular Icon & Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#EEF5E9] flex items-center justify-center text-[#2D5838] group-hover:bg-[#2BE019] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-semibold text-[#9BAEA1] tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#16241B] mb-3 group-hover:text-[#184626] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5B6E60] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

};