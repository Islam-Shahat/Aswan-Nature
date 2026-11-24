import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const CurvedCylinderCarousel = ({ photos, isAr, onPhotoClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);
  const containerRef = useRef(null);

  const total = photos.length;
  const currentPhoto = photos[activeIndex] || photos[0];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Pointer / Mouse / Touch Drag Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentDragRef.current = 0;
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    currentDragRef.current = deltaX;
    setDragOffset(deltaX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const dragDistance = currentDragRef.current;

    // Threshold to switch card
    if (dragDistance < -60) {
      handleNext();
    } else if (dragDistance > 60) {
      handlePrev();
    }
    setDragOffset(0);
    currentDragRef.current = 0;
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') {
        isAr ? handlePrev() : handleNext();
      }
      if (e.key === 'ArrowLeft') {
        isAr ? handleNext() : handlePrev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleNext, handlePrev, isAr]);

  // Render cards within window around activeIndex
  // Visible range: -4 to +4 (9 cards on the 3D cylinder)
  const visibleCards = [];
  const VISIBLE_RADIUS = 4;

  for (let offset = -VISIBLE_RADIUS; offset <= VISIBLE_RADIUS; offset++) {
    const rawIndex = activeIndex + offset;
    const photoIndex = ((rawIndex % total) + total) % total;
    visibleCards.push({
      photo: photos[photoIndex],
      photoIndex,
      offset,
    });
  }

  // Drag progress normalized (-1 to 1)
  const dragFraction = isDragging ? Math.max(-1, Math.min(1, dragOffset / 260)) : 0;

  return (
    <div className="w-full flex flex-col items-center select-none py-4 sm:py-8">
      {/* 3D Scene Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`relative w-full max-w-6xl h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
        style={{
          perspective: '1200px',
        }}
      >
        {/* 3D Cylinder Container */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {visibleCards.map(({ photo, photoIndex, offset }) => {
            // Precise mathematical cylinder curve
            const effectiveOffset = offset - dragFraction;
            const angleStep = 22; // Degrees between cards on the cylinder
            const angle = effectiveOffset * angleStep;
            const rad = (angle * Math.PI) / 180;
            const radius = 680; // Cylinder radius in px

            // Parametric cylinder coordinates
            const x = Math.sin(rad) * radius;
            const z = (Math.cos(rad) - 1) * radius;
            const rotateY = -angle;

            const absOffset = Math.abs(effectiveOffset);
            const scale = Math.max(0.72, 1 - absOffset * 0.06);
            const opacity = Math.max(0.18, 1 - absOffset * 0.2);
            const zIndex = Math.round(50 - absOffset * 8);
            const isCenter = Math.abs(effectiveOffset) < 0.45;

            return (
              <div
                key={`${photo.id || photoIndex}-${offset}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (Math.abs(currentDragRef.current) > 10) return;
                  if (offset === 0) {
                    onPhotoClick(photoIndex);
                  } else {
                    setActiveIndex(photoIndex);
                  }
                }}
                className={`absolute w-[230px] h-[310px] sm:w-[280px] sm:h-[380px] lg:w-[320px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#101D16] transition-all will-change-transform ${
                  isDragging
                    ? 'transition-none'
                    : 'duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                } ${
                  isCenter
                    ? 'border-2 border-[#0a515b] shadow-[0_20px_45px_-10px_rgba(10,81,91,0.45)] ring-4 ring-[#0a515b]/20 cursor-pointer'
                    : 'border border-[#CBDCCB]/70 shadow-lg cursor-pointer hover:border-[#0a515b]/60'
                }`}
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={photo.src}
                  alt={isAr ? photo.titleAr : photo.titleEn}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />

                {/* Subtle depth gradient overlay on non-center cards */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                    isCenter
                      ? 'bg-gradient-to-t from-black/80 via-black/10 to-transparent'
                      : 'bg-black/35'
                  }`}
                />

                {/* Quick Zoom icon on Center Card */}
                {isCenter && (
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0a515b] transition-colors shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Caption identical to Emblematica style */}
      <div className="text-center mt-5 sm:mt-8 min-h-[56px] px-4">
        <h3 className="text-lg sm:text-2xl font-extrabold text-[#16241B] tracking-tight transition-all duration-300">
          {isAr ? currentPhoto.titleAr : currentPhoto.titleEn}
        </h3>
        <p className="text-xs sm:text-sm text-[#556F5C] mt-1 font-medium">
          {isAr ? currentPhoto.locationAr : currentPhoto.locationEn}
        </p>
      </div>

      {/* Navigation Controls & Counter */}
      <div className="flex items-center gap-4 sm:gap-6 mt-4 z-10">
        <button
          onClick={isAr ? handleNext : handlePrev}
          className="p-3 rounded-full bg-white hover:bg-[#0a515b] hover:text-white text-[#16241B] border border-[#CBDCCB] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
        </button>

        <span className="text-xs sm:text-sm font-mono font-bold text-[#0a515b] bg-[#0a515b]/10 px-3.5 py-1.5 rounded-full border border-[#0a515b]/20">
          {activeIndex + 1} / {total}
        </span>

        <button
          onClick={isAr ? handlePrev : handleNext}
          className="p-3 rounded-full bg-white hover:bg-[#0a515b] hover:text-white text-[#16241B] border border-[#CBDCCB] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
};
