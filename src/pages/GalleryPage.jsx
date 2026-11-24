import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { galleryPhotos } from '../data/galleryData';

export const GalleryPage = () => {
  const { currentLang } = useOutletContext();
  const isAr = currentLang === 'AR';
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPhoto = selectedIndex !== null ? galleryPhotos[selectedIndex] : null;

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
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
      {/* Full-width Nile Teal Stripe with Centered Title */}
      <div className="w-full flex items-center justify-center mb-10 sm:mb-14">
        <div className="flex-1 h-1 sm:h-1.5 bg-[#0a515b]" />
        <h1 className="px-4 sm:px-8 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16241B] shrink-0 text-center">
          {isAr ? 'معرض صور الحياة البرية' : 'Wildlife Photo Gallery'}
        </h1>
        <div className="flex-1 h-1 sm:h-1.5 bg-[#0a515b]" />
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* 52-Photo Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.id || i}
              onClick={() => setSelectedIndex(i)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#101D16] border border-[#E2E8DC] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={isAr ? photo.titleAr : photo.titleEn}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 p-2 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xs sm:text-sm font-bold leading-tight mb-1 line-clamp-1">
                  {isAr ? photo.titleAr : photo.titleEn}
                </h3>
                <span className="text-[11px] text-[#A6C0AF] line-clamp-1">
                  {isAr ? photo.locationAr : photo.locationEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Next/Prev and Full View */}
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
                  {selectedIndex + 1} / {galleryPhotos.length}
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
