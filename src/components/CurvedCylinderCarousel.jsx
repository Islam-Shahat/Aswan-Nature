import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const CurvedCylinderCarousel = ({ photos, isAr, onPhotoClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);
  const containerRef = useRef(null);
  const lastWheelTimeRef = useRef(0);
  const wheelAccumulatorRef = useRef(0);

  const total = photos.length;
  const currentPhoto = photos[activeIndex] || photos[0];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Mouse Wheel / Trackpad Scroll Interaction
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Prioritize horizontal or vertical delta
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      
      // If minimal jitter, ignore
      if (Math.abs(delta) < 6) return;

      // Prevent the outer browser page from jumping up/down while interacting with 3D carousel
      e.preventDefault();

      const now = Date.now();
      wheelAccumulatorRef.current += delta;

      // Smooth throttle window (200ms) for comfortable notch-by-notch navigation
      if (now - lastWheelTimeRef.current > 200) {
        if (wheelAccumulatorRef.current > 20) {
          isAr ? handlePrev() : handleNext();
          lastWheelTimeRef.current = now;
          wheelAccumulatorRef.current = 0;
        } else if (wheelAccumulatorRef.current < -20) {
          isAr ? handleNext() : handlePrev();
          lastWheelTimeRef.current = now;
          wheelAccumulatorRef.current = 0;
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev, isAr]);

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
    if (dragDistance < -50) {
      handleNext();
    } else if (dragDistance > 50) {
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
  // Visible range: -5 to +5 (11 cards spanning the full viewport arc)
  const visibleCards = [];
  const VISIBLE_RADIUS = 5;

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
  const dragFraction = isDragging ? Math.max(-1, Math.min(1, dragOffset / 300)) : 0;

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center select-none py-0 overflow-hidden">
      {/* 3D Scene Viewport - Full 100% Screen Width */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`relative w-full h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[500px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
        style={{
          perspective: '1300px',
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
            // Precise mathematical cylinder curve spanning the full browser width
            const effectiveOffset = offset - dragFraction;
            const angleStep = 21; // Degrees between cards on the cylinder
            const angle = effectiveOffset * angleStep;
            const rad = (angle * Math.PI) / 180;
            const radius = 1050; // Expansive cylinder radius for panoramic full-width arc

            // Parametric cylinder coordinates
            const x = Math.sin(rad) * radius;
            const z = (Math.cos(rad) - 1) * radius;
            const rotateY = -angle;

            const absOffset = Math.abs(effectiveOffset);
            const scale = Math.max(0.72, 1 - absOffset * 0.065);
            // Smooth edge fade for cards entering/leaving the visible viewport
            const opacity = absOffset >= 4.6 ? 0 : absOffset > 3.6 ? Math.max(0, 1 - (absOffset - 3.6) / 1.0) : 1;
            const zIndex = Math.round(60 - absOffset * 8);
            const isCenter = Math.abs(effectiveOffset) < 0.45;

            return (
              <div
                key={photo.id || photoIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  if (Math.abs(currentDragRef.current) > 10) return;
                  if (offset === 0) {
                    onPhotoClick(photoIndex);
                  } else {
                    setActiveIndex(photoIndex);
                  }
                }}
                className={`group absolute w-[290px] h-[195px] sm:w-[420px] sm:h-[285px] lg:w-[540px] lg:h-[365px] xl:w-[620px] xl:h-[415px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white will-change-transform ${
                  isDragging
                    ? 'transition-none'
                    : 'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
                } ${
                  isCenter
                    ? 'border-2 border-[#0a515b] shadow-[0_30px_70px_-12px_rgba(10,81,91,0.45)] ring-4 ring-[#0a515b]/20 cursor-pointer'
                    : 'border border-[#CBDCCB] shadow-2xl cursor-pointer hover:border-[#0a515b]/60'
                }`}
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Natural full photo - crisp, expansive and 100% solid */}
                <img
                  src={photo.src}
                  alt={isAr ? photo.titleAr : photo.titleEn}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Quick Zoom icon on Center Card */}
                {isCenter && (
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-3 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#0a515b] transition-colors shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Creative Concise Single-Line Caption */}
      <div 
        key={activeIndex} 
        className="text-center mt-2 sm:mt-2.5 min-h-[32px] px-4 animate-in fade-in slide-in-from-bottom-1 duration-300 shrink-0"
      >
        <p className="text-sm sm:text-base lg:text-lg font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] tracking-tight">
          {isAr ? currentPhoto.titleAr : currentPhoto.titleEn}
        </p>
      </div>

      {/* Navigation Controls & Counter */}
      <div className="flex items-center gap-4 sm:gap-6 mt-1.5 sm:mt-2 z-10 shrink-0">
        <button
          onClick={isAr ? handleNext : handlePrev}
          className="p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-[#0a515b] border border-white/40 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
        </button>

        <span className="text-xs sm:text-sm font-mono font-bold text-white bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 shadow-inner">
          {activeIndex + 1} / {total}
        </span>

        <button
          onClick={isAr ? handlePrev : handleNext}
          className="p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-[#0a515b] border border-white/40 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
};
