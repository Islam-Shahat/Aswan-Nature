import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';





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
    location: isArabic ? 'أحراش البردي والقصب بأسوان' : 'Aswan Papyrus & Reeds Sanctuary'
  },
  {
    src: '/assets/yellow-billed-stork.jpg',
    title: isArabic ? 'اللقلق أصفر المنقار' : 'Yellow-billed Stork',
    location: isArabic ? 'محميات النيل البرية، أسوان' : 'Aswan Nile Wildlife Sanctuaries'
  },
  {
    src: '/assets/egrets.webp',
    title: isArabic ? 'لحظة ذهبية على صفحة الماء' : 'A golden moment on the water',
    location: isArabic ? 'نهر النيل، أسوان' : 'Nile River, Aswan'
  },
  {
    src: '/assets/kingfisher.webp',
    title: isArabic ? 'صياد السمك الصبور' : 'The patient kingfisher',
    location: isArabic ? 'محمية جزر الشلال الأول' : 'First Cataract Nature Reserve'
  },
  {
    src: '/assets/goose.webp',
    title: isArabic ? 'الوزة المصرية الحرة' : 'Wings over the Nile',
    location: isArabic ? 'ملاذ خزان أسوان' : 'Aswan Reservoir Island Sanctuary'
  }];


  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) =>
        prev !== null ? (prev + 1) % photos.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
        prev !== null ? (prev - 1 + photos.length) % photos.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
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

          <button
            onClick={() => setSelectedPhotoIndex(0)}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1A261E] hover:text-[#2BE019] transition-colors self-start md:self-auto">
            
            <span>
              {isArabic ?
              `استكشف المعرض بالكامل (${photos.length} صور)` :
              `Explore Full Gallery (${photos.length} Photos)`}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 8-Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) =>
          <div
            key={photo.title + idx}
            onClick={() => setSelectedPhotoIndex(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black cursor-pointer shadow-[0_6px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            
              <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
            
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="pr-2">
                  <span className="text-sm font-bold tracking-tight block group-hover:text-[#2BE019] transition-colors line-clamp-1">
                    {photo.title}
                  </span>
                  <span className="text-[11px] text-white/70 block line-clamp-1">
                    {photo.location}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#2BE019] group-hover:text-black transition-all flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null &&
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <button
          onClick={() => setSelectedPhotoIndex(null)}
          className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          aria-label="Close">
          
            <X className="w-6 h-6" />
          </button>

          <button
          onClick={() =>
          setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length)
          }
          className="absolute left-4 sm:left-8 text-white p-3 rounded-full bg-black/60 hover:bg-black/90 transition-colors z-20 border border-white/20 hover:border-white/50"
          aria-label="Previous image">
          
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
            src={photos[selectedPhotoIndex].src}
            alt={photos[selectedPhotoIndex].title}
            className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl mb-4 border border-white/15" />
          
            <div className="text-center text-white">
              <h4 className="text-xl font-bold">{photos[selectedPhotoIndex].title}</h4>
              <p className="text-sm text-[#A2B6A7] mt-1">{photos[selectedPhotoIndex].location}</p>
              <div className="mt-2 text-xs text-white/50">
                {selectedPhotoIndex + 1} / {photos.length}
              </div>
            </div>
          </div>

          <button
          onClick={() => setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length)}
          className="absolute right-4 sm:right-8 text-white p-3 rounded-full bg-black/60 hover:bg-black/90 transition-colors z-20 border border-white/20 hover:border-white/50"
          aria-label="Next image">
          
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      }
    </section>);

};