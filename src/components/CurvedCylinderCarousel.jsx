import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Mouse } from 'lucide-react';

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
    <div className="w-full flex flex-col items-center select-none py-2 sm:py-6">
      {/* Subtle interaction tip */}
      <div className="mb-3">
        <span className="text-[11px] sm:text-xs font-semibold text-[#556F5C] inline-flex items-center gap-1.5 bg-[#0a515b]/8 px-3.5 py-1 rounded-full border border-[#0a515b]/15">
          <Mouse className="w-3.5 h-3.5 text-[#0a515b] animate-bounce" />
          <span>{isAr ? 'حرّك عجلة الماوس أو اسحب للتنقل بين الصور' : 'Scroll mouse wheel or drag to explore'}</span>
        </span>
      </div>

      {/* 3D Scene Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`relative w-full max-w-7xl h-[340px] sm:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab ${
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
            // Precise mathematical cylinder curve for landscape photos
            const effectiveOffset = offset - dragFraction;
            const angleStep = 24; // Degrees between cards on the cylinder
            const angle = effectiveOffset * angleStep;
            const rad = (angle * Math.PI) / 180;
            const radius = 820; // Cylinder radius in px for wide natural cards

            // Parametric cylinder coordinates
            const x = Math.sin(rad) * radius;
            const z = (Math.cos(rad) - 1) * radius;
            const rotateY = -angle;

            const absOffset = Math.abs(effectiveOffset);
            const scale = Math.max(0.75, 1 - absOffset * 0.07);
            // 100% opaque solid cards with no see-through transparency
            const opacity = absOffset > 3.2 ? 0 : 1;
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
                className={`group absolute w-[280px] h-[190px] sm:w-[390px] sm:h-[265px] lg:w-[480px] lg:h-[325px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white will-change-transform ${
                  isDragging
                    ? 'transition-none'
                    : 'transition-all duration-600 ease-[cubic-bezier(0.2,1,0.3,1)]'
                } ${
                  isCenter
                    ? 'border-2 border-[#0a515b] shadow-[0_25px_60px_-12px_rgba(10,81,91,0.45)] ring-4 ring-[#0a515b]/20 cursor-pointer'
                    : 'border border-[#CBDCCB] shadow-xl cursor-pointer hover:border-[#0a515b]/60'
                }`}
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Natural full photo - crisp and 100% solid with subtle zoom on hover */}
                <img
                  src={photo.src}
                  alt={isAr ? photo.titleAr : photo.titleEn}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-105"
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

      {/* Center Caption with smooth entry transition on change */}
      <div 
        key={activeIndex} 
        className="text-center mt-4 sm:mt-6 min-h-[56px] px-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        <h3 className="text-lg sm:text-2xl font-extrabold text-[#16241B] tracking-tight">
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
