import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export const GalleryPage = () => {
  const { currentLang } = useOutletContext();
  const isAr = currentLang === 'AR';
  const [selectedIndex, setSelectedIndex] = useState(null);

  const photos = [
    {
      src: '/assets/egrets.webp',
      titleAr: 'سرب البلشون الأبيض عند ضفاف النيل',
      titleEn: 'Shoreline Cattle Egrets',
      locationAr: 'جزر الشلال الأول، أسوان',
      locationEn: 'First Cataract Granite Banks'
    },
    {
      src: '/assets/kingfisher.webp',
      titleAr: 'الرفراف الأبقع يترصد فريسته',
      titleEn: 'Pied Kingfisher in Hunting Focus',
      locationAr: 'محمية سالوجا وغزال، أسوان',
      locationEn: 'Saluga & Ghazal Sanctuary'
    },
    {
      src: '/assets/stork.webp',
      titleAr: 'اللقلق أصفر المنقار المهاجر',
      titleEn: 'Migratory Yellow-billed Stork',
      locationAr: 'بحيرة خزان أسوان',
      locationEn: 'Aswan Reservoir Wetlands'
    },
    {
      src: '/assets/goose.webp',
      titleAr: 'الإوز المصري في هدوء الصباح',
      titleEn: 'Egyptian Goose on Ancient Waters',
      locationAr: 'جزيرة إلفنتين، أسوان',
      locationEn: 'Elephantine Island'
    },
    {
      src: '/assets/white-egret-shore.jpg',
      titleAr: 'بلشون أبيض بين صخور الجرانيت',
      titleEn: 'Egret on Granite Rocks',
      locationAr: 'مضيق النيل الصخري',
      locationEn: 'Granite Gorge'
    },
    {
      src: '/assets/pied-kingfisher-perched.jpg',
      titleAr: 'صياد السمك فوق غصن بري',
      titleEn: 'Perched Pied Kingfisher',
      locationAr: 'قنوات النيل الهادئة',
      locationEn: 'Nile Channels'
    },
    {
      src: '/assets/nile-birds-flight.jpg',
      titleAr: 'تحليق حر في سماء أسوان',
      titleEn: 'Flight over Nile Streams',
      locationAr: 'سماء الشلال الأول',
      locationEn: 'Cataract Skies'
    },
    {
      src: '/assets/woodland-kingfisher.jpg',
      titleAr: 'صياد السمك الشجري ذو الألوان الزاهية',
      titleEn: 'Woodland Kingfisher Plumes',
      locationAr: 'غابات الأثل النيلية',
      locationEn: 'Nile Tamarisk Thickets'
    },
    {
      src: '/assets/yellow-billed-stork.jpg',
      titleAr: 'طائر اللقلق يستريح عند المغيب',
      titleEn: 'Stork at Dusk',
      locationAr: 'ضفاف بحيرة الخزان',
      locationEn: 'Reservoir Marshes'
    }
  ];

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#F8FAF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centered Clean Title - No badge, no paragraph, no filter */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16241B]">
            {isAr ? 'معرض صور الحياة البرية' : 'Wildlife Photo Gallery'}
          </h1>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E2E8DC] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={photo.src}
                alt={isAr ? photo.titleAr : photo.titleEn}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base font-bold leading-snug mb-1">
                  {isAr ? photo.titleAr : photo.titleEn}
                </h3>
                <span className="text-xs text-[#CBD8CE]">
                  {isAr ? photo.locationAr : photo.locationEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-[#0C1D15] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo View */}
            <div className="relative flex-1 flex items-center justify-center bg-black/50 p-2 sm:p-4 min-h-[50vh] max-h-[72vh] overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="p-4 sm:p-6 bg-[#08150E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-[#48e714] block mb-1">
                  {selectedIndex + 1} / {photos.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold leading-snug">
                  {isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
                </h3>
                <span className="text-xs text-[#8BA493]">
                  {isAr ? selectedPhoto.locationAr : selectedPhoto.locationEn}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedPhoto.src}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#21c715] hover:text-[#0C1D15] text-xs font-bold text-white transition-all inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تحميل الصورة' : 'Download'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
