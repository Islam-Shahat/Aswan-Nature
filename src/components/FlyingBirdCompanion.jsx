import React, { useState, useEffect, useRef } from 'react';

export const FlyingBirdCompanion = ({ currentLang = 'EN' }) => {
  const isAr = currentLang === 'AR';
  const birdRef = useRef(null);

  // Position & physics state
  const stateRef = useRef({
    targetY: 100,
    currentY: 100,
    targetX: 30,
    currentX: 30,
    rotation: 5,
    targetRotation: 5,
    lastScrollY: 0,
    lastTime: Date.now(),
    isScrolling: false,
    scrollTimeout: null,
  });

  const [displayPos, setDisplayPos] = useState({ y: 120, x: 30, rotation: 5, isDiving: false });

  useEffect(() => {
    let animId;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(docHeight - winHeight, 1);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      const state = stateRef.current;
      const now = Date.now();
      const dt = Math.max(now - state.lastTime, 16);
      const dy = scrollY - state.lastScrollY;
      const velocity = dy / dt; // px per ms

      state.lastScrollY = scrollY;
      state.lastTime = now;

      // 1. Vertical mapping: As user scrolls from top to bottom,
      // bird descends from 12vh (top of viewport) down to 78vh (lower viewport).
      const minY = winHeight * 0.12;
      const maxY = winHeight * 0.78;
      const baseProgressY = minY + progress * (maxY - minY);

      // 2. Dynamic dive reaction during downward scroll
      let diveOffset = 0;
      let diveRotation = 5;

      if (velocity > 0.15) {
        // Active downward scrolling -> dive down & angle beak down
        diveOffset = Math.min(velocity * 45, 60);
        diveRotation = Math.min(10 + velocity * 18, 25);
        state.isScrolling = true;
      } else if (velocity < -0.15) {
        // Scrolling up -> rise & angle up
        diveOffset = Math.max(velocity * 30, -40);
        diveRotation = Math.max(-12, velocity * 15);
        state.isScrolling = true;
      } else {
        // Slow or stopped
        diveRotation = 4;
      }

      state.targetY = baseProgressY + diveOffset;
      state.targetRotation = diveRotation;

      // Gentle horizontal wave as you scroll
      const waveX = Math.sin(progress * Math.PI * 4) * 16;
      state.targetX = 28 + waveX;

      // Clear scroll timeout
      if (state.scrollTimeout) clearTimeout(state.scrollTimeout);
      state.scrollTimeout = setTimeout(() => {
        state.isScrolling = false;
        state.targetRotation = 4;
      }, 150);
    };

    // Smooth animation loop using requestAnimationFrame + lerp
    const tick = () => {
      const state = stateRef.current;
      const now = Date.now();

      // Idle hovering float when not aggressively scrolling
      const hoverFloat = Math.sin(now / 450) * 6;

      // Lerp smoothing (aerodynamic ease)
      const lerpFactor = 0.12;
      state.currentY += (state.targetY + hoverFloat - state.currentY) * lerpFactor;
      state.currentX += (state.targetX - state.currentX) * lerpFactor;
      state.rotation += (state.targetRotation - state.rotation) * 0.15;

      setDisplayPos({
        y: state.currentY,
        x: state.currentX,
        rotation: state.rotation,
        isDiving: state.isScrolling,
      });

      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
      if (stateRef.current.scrollTimeout) clearTimeout(stateRef.current.scrollTimeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none"
    >
      <div
        ref={birdRef}
        className="absolute pointer-events-auto cursor-pointer transition-transform duration-75 will-change-transform group"
        style={{
          top: `${displayPos.y}px`,
          // In Arabic (RTL): place on left margin flying inward to the right.
          // In English (LTR): place on right margin flying inward to the left (scale-x-[-1]).
          ...(isAr
            ? { left: `${displayPos.x}px` }
            : { right: `${displayPos.x}px` }),
          transform: `${
            isAr
              ? `rotate(${displayPos.rotation}deg)`
              : `scaleX(-1) rotate(${-displayPos.rotation}deg)`
          }`,
        }}
      >
        {/* Animated Flying Bird Image */}
        <div className="relative">
          <img
            src="/assets/flying-bird.gif"
            alt="Flying bird"
            className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-110"
            draggable="false"
          />

          {/* Interactive Tooltip on Hover */}
          <div
            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute -bottom-7 whitespace-nowrap bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/10 ${
              isAr ? 'left-0' : 'right-0'
            }`}
          >
            <span>{isAr ? 'رفيق النيل الطائر 𓅃' : 'Nile Hummingbird ✦'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
