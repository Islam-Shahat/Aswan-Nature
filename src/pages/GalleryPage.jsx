import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight, Download, Grid3X3, Layers } from 'lucide-react';
import { galleryPhotos } from '../data/galleryData';
import { CurvedCylinderCarousel } from '../components/CurvedCylinderCarousel';

export const GalleryPage = () => {
  const { currentLang } = useOutletContext();
  const isAr = currentLang === 'AR';
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'grid'

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
      {/* Elegant Nile Teal Gradient Divider Bisected by Centered Title */}
      <div className="w-full flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-8 overflow-hidden">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#0a515b]/50 to-[#0a515b]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#0a515b] shrink-0 hidden sm:block" />
        <h1 className="px-3 sm:px-6 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#16241B] shrink-0 text-center">
          {isAr ? 'معرض صور الحياة البرية' : 'Wildlife Photo Gallery'}
        </h1>
        <div className="w-1.5 h-1.5 rounded-full bg-[#0a515b] shrink-0 hidden sm:block" />
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0a515b] via-[#0a515b]/50 to-transparent" />
      </div>

      {/* View Mode Toggle: 3D Curved Showcase vs Full Grid */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#CBDCCB] shadow-xs">
          <button
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#0a515b] text-white shadow-sm'
                : 'text-[#556F5C] hover:text-[#16241B]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isAr ? 'عرض أسطواني 3D' : '3D Curved View'}</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#0a515b] text-white shadow-sm'
                : 'text-[#556F5C] hover:text-[#16241B]'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>{isAr ? 'عرض الشبكة (52)' : 'Grid View (52)'}</span>
          </button>
        </div>
      </div>

      {/* Main Showcase: 3D Curved Cylinder Carousel */}
      {viewMode === '3d' ? (
        <div className="w-full max-w-[1500px] mx-auto px-4">
          <CurvedCylinderCarousel
            photos={galleryPhotos}
            isAr={isAr}
            onPhotoClick={(idx) => setSelectedIndex(idx)}
          />
        </div>
      ) : (
        /* 52-Photo Responsive Grid */
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 animate-in fade-in duration-300">
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
      )}

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
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#0a515b] text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#0a515b] text-white transition-all hover:scale-110 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container - Dynamically wraps full image width */}
          <div
            className="relative w-fit max-w-[94vw] sm:max-w-4xl mx-auto bg-[#0a515b] rounded-3xl overflow-hidden border border-[#0a515b]/60 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-30 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0a515b] transition-all cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo View - 100% Uncropped & Natural Ratio */}
            <div className="relative w-full overflow-hidden bg-black/40 flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
                className="max-h-[66vh] sm:max-h-[72vh] w-auto max-w-full block object-contain select-none"
              />
            </div>

            {/* Bottom Info Bar in Nile Teal Blue #0a515b */}
            <div className="p-4 sm:p-5 bg-[#0a515b] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/15">
              <div>
                <span className="text-xs font-mono font-bold text-[#67e8f9] block mb-1">
                  {selectedIndex + 1} / {galleryPhotos.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold leading-snug text-white">
                  {isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
                </h3>
                <span className="text-xs text-[#cce8eb]">
                  {isAr ? selectedPhoto.locationAr : selectedPhoto.locationEn}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selectedPhoto.src}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="px-4 py-2 rounded-full bg-white/15 hover:bg-white hover:text-[#0a515b] text-xs font-bold text-white transition-all inline-flex items-center gap-1.5 border border-white/20 shadow-xs cursor-pointer"
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
