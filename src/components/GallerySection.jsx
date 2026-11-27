import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection = ({ currentLang = 'EN' }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const isArabic = currentLang === 'AR';

  const photos = [
    {
      src: '/assets/nile-birds-flight.jpg',
      title: isArabic ? 'أسراب محلقة فوق نيل أسوان' : 'Flocks soaring over Aswan Nile',
      location: isArabic ? 'جزر الشلال الأول، أسوان' : 'First Cataract Islands, Aswan'
    },
    {
      src: '/assets/pied-kingfisher-perched.jpg',
      title: isArabic ? 'صياد السمك الأبقع النيلي' : 'Pied Kingfisher in Detail',
      location: isArabic ? 'محمية جزر سالوجا وغزال' : 'Saluga & Ghazal Islands Reserve'
    },
    {
      src: '/assets/white-egret-shore.jpg',
      title: isArabic ? 'البلشون الأبيض على صخور النيل' : 'Great White Egret at Riverbank',
      location: isArabic ? 'شواطئ بحيرة خزان أسوان' : 'Aswan Reservoir Shores'
    },
    {
      src: '/assets/woodland-kingfisher.jpg',
      title: isArabic ? 'الرفراف النيلي الملون' : 'Colorful Nile Kingfisher',
      location: isArabic ? 'محمية سالوجا وغزال، أسوان' : 'Saluga & Ghazal Reserve, Aswan'
    },
    {
      src: '/assets/yellow-billed-stork.jpg',
      title: isArabic ? 'اللقلق أصفر المنقار النادر' : 'Yellow-billed Stork at Rest',
      location: isArabic ? 'بحيرة خزان أسوان' : 'Aswan Reservoir Wetlands'
    },
    {
      src: '/assets/stork.webp',
      title: isArabic ? 'اللقالق في موئلها الطبيعي' : 'Storks in Natural Habitat',
      location: isArabic ? 'جزر النيل المحمية' : 'Protected Nile Islands'
    },
    {
      src: '/assets/kingfisher.webp',
      title: isArabic ? 'طائر صياد السمك عن قرب' : 'Kingfisher Close Up',
      location: isArabic ? 'الشلال الأول' : 'First Cataract'
    },
    {
      src: '/assets/goose.webp',
      title: isArabic ? 'الإوز المصري التاريخي' : 'Egyptian Goose on River',
      location: isArabic ? 'نهر النيل، أسوان' : 'Nile River, Aswan'
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAF5] border-t border-[#EAEFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-4 h-4 text-[#2BE019]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#637568] font-bold">
                {isArabic ? 'من خلال عدستنا الحية' : 'THROUGH OUR LENS'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#16241B] font-heading">
              {isArabic ? 'لحظات برية. ذكريات حية.' : 'Wild moments. Real memories.'}
            </h2>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1A261E] hover:text-[#21c715] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>
              {isArabic ? 'استكشف المعرض بالكامل' : 'Explore Full Gallery'}
            </span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Mobile View: Clean Scroll-Stacking Cards (< sm) */}
        <div className="block sm:hidden space-y-6 pb-6">
          {photos.map((photo, idx) => (
            <div
              key={`mobile-${photo.title}-${idx}`}
              onClick={() => setSelectedPhotoIndex(idx)}
              style={{
                top: `calc(85px + ${idx * 6}px)`,
                zIndex: 10 + idx,
              }}
              className="sticky group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black cursor-pointer shadow-[0_12px_36px_-8px_rgba(0,0,0,0.35)] active:scale-[0.99] transition-transform duration-200"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-sm font-bold tracking-tight block line-clamp-1">
                  {photo.title}
                </span>
                <span className="text-[11px] text-white/70 block line-clamp-1">
                  {photo.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Laptop / Desktop / Tablet View (>= sm): Original 100% Clean Grid without sticky, z-index or overlaps */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={`desktop-${photo.title}-${idx}`}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black cursor-pointer shadow-[0_6px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="pr-2">
                  <span className="text-sm font-bold tracking-tight block group-hover:text-[#2BE019] transition-colors line-clamp-1">
                    {photo.title}
                  </span>
                  <span className="text-[11px] text-white/70 block line-clamp-1">
                    {photo.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex].src}
              alt={photos[selectedPhotoIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-bold">{photos[selectedPhotoIndex].title}</h3>
              <p className="text-sm text-white/70">{photos[selectedPhotoIndex].location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
