import React, { useEffect, useRef } from 'react';

export const FlyingBirdCompanion = ({ currentLang = 'EN' }) => {
  const isAr = currentLang === 'AR';
  const birdRef = useRef(null);
  const innerRef = useRef(null);
  const currentLangRef = useRef(currentLang);
  currentLangRef.current = currentLang;
  const updateDOMRef = useRef(null);
  const wakeAnimationRef = useRef(null);
  const handleScrollRef = useRef(null);

  // Section IDs across the landing page in scroll order:
  // Group 0 (Sections 0, 1): hero, about
  // Group 1 (Sections 2, 3): tours, pharaohs
  // Group 2 (Sections 4, 5): gallery, camps
  // Group 3 (Sections 6, 7): reviews, contact
  const sectionIds = ['hero', 'about', 'tours', 'pharaohs', 'gallery', 'camps', 'reviews', 'contact'];

  const stateRef = useRef({
    targetY: 100,
    currentY: 100,
    targetX: 30,
    currentX: 30,
    facing: currentLang === 'AR' ? -1 : 1, // 1 = facing right, -1 = facing left
    rotation: 4,
    targetRotation: 4,
    lastScrollY: 0,
    lastTime: Date.now(),
    isDiving: false,
    activeSide: currentLang === 'AR' ? 'right' : 'left',
    isInitialized: false,
    isAnimating: false,
    scrollTimeout: null,
  });

  useEffect(() => {
    let animId = null;

    const updateDOM = () => {
      const state = stateRef.current;
      if (birdRef.current) {
        birdRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0)`;
      }
      if (innerRef.current) {
        const rot = state.facing === 1 ? state.rotation : -state.rotation;
        innerRef.current.style.transform = `scaleX(${state.facing}) rotate(${rot}deg)`;
      }
    };
    updateDOMRef.current = updateDOM;

    const tick = () => {
      const state = stateRef.current;
      const xLerpFactor = 0.055;
      const yLerpFactor = 0.14;

      const dx = state.targetX - state.currentX;
      state.currentX += dx * xLerpFactor;

      const crossingDistance = Math.abs(dx);
      let flightArc = 0;

      if (crossingDistance > 35) {
        // Actively crossing the screen: face direction of flight!
        state.facing = dx > 0 ? 1 : -1;
        flightArc = Math.sin((crossingDistance / Math.max(window.innerWidth * 0.5, 1)) * Math.PI) * 22;
        const bankTilt = dx > 0 ? 6 : -6;
        state.rotation += (bankTilt + state.targetRotation - state.rotation) * 0.14;
      } else {
        // At rest on the side: look inward towards website content!
        state.facing = state.activeSide === 'right' ? -1 : 1;
        state.rotation += (state.targetRotation - state.rotation) * 0.16;
      }

      const dyTarget = state.targetY + flightArc - state.currentY;
      state.currentY += dyTarget * yLerpFactor;

      // Direct GPU transform update - ZERO React re-render overhead!
      updateDOM();

      // Check if settled to stop running RAF continuously when idle
      const settledX = Math.abs(dx) < 0.3;
      const settledY = Math.abs(dyTarget) < 0.3;
      const settledRot = Math.abs(state.targetRotation - state.rotation) < 0.2;

      if (settledX && settledY && settledRot && !state.isDiving) {
        state.currentX = state.targetX;
        state.currentY = state.targetY;
        state.rotation = state.targetRotation;
        updateDOM();
        state.isAnimating = false;
        animId = null;
        return; // Sleep RAF to conserve 100% CPU!
      }

      animId = requestAnimationFrame(tick);
    };

    const wakeAnimation = () => {
      const state = stateRef.current;
      if (!state.isAnimating) {
        state.isAnimating = true;
        animId = requestAnimationFrame(tick);
      }
    };
    wakeAnimationRef.current = wakeAnimation;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;
      const maxScroll = Math.max(docHeight - winHeight, 1);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      const state = stateRef.current;
      const now = Date.now();
      const dt = Math.max(now - state.lastTime, 16);
      const dy = scrollY - state.lastScrollY;
      const velocity = dy / dt; // px per ms

      state.lastScrollY = scrollY;
      state.lastTime = now;

      // 1. Detect which section is currently active
      let currentIdx = 0;
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= winHeight * 0.48) {
            currentIdx = i;
          }
        }
      }

      // 2. Switch sides every 2 sections (mirrored for Arabic RTL)
      const group = Math.floor(currentIdx / 2);
      const isArabic = currentLangRef.current === 'AR';
      const targetSide = (group % 2 === 0)
        ? (isArabic ? 'right' : 'left')
        : (isArabic ? 'left' : 'right');
      state.activeSide = targetSide;

      // Responsive margin constants
      const birdWidth = winWidth < 640 ? 110 : winWidth < 1024 ? 140 : 160;
      const margin = winWidth < 640 ? 12 : winWidth < 1024 ? 24 : 36;

      // 3. Compute target horizontal position (Deterministic LTR coordinate system)
      state.targetX = targetSide === 'right' ? winWidth - birdWidth - margin : margin;

      // Initial placement on mount
      if (!state.isInitialized) {
        state.currentX = state.targetX;
        state.currentY = winHeight * 0.14;
        state.facing = state.activeSide === 'right' ? -1 : 1;
        state.isInitialized = true;
        updateDOM();
      }

      // 4. Vertical mapping: As user scrolls down, bird flies downwards
      const minY = winHeight * 0.12;
      const maxY = winHeight * 0.78;
      const baseProgressY = minY + progress * (maxY - minY);

      let diveOffset = 0;
      let diveRotation = 4;

      if (velocity > 0.15) {
        diveOffset = Math.min(velocity * 38, 50);
        diveRotation = Math.min(8 + velocity * 14, 20);
        state.isDiving = true;
      } else if (velocity < -0.15) {
        diveOffset = Math.max(velocity * 24, -30);
        diveRotation = Math.max(-10, velocity * 12);
        state.isDiving = true;
      }

      state.targetY = baseProgressY + diveOffset;
      state.targetRotation = diveRotation;

      if (state.scrollTimeout) clearTimeout(state.scrollTimeout);
      state.scrollTimeout = setTimeout(() => {
        state.isDiving = false;
        state.targetRotation = 4;
        wakeAnimation();
      }, 140);

      // Wake the loop on scroll
      wakeAnimation();
    };
    handleScrollRef.current = handleScroll;

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animId) cancelAnimationFrame(animId);
      if (stateRef.current.scrollTimeout) clearTimeout(stateRef.current.scrollTimeout);
    };
  }, []);

  // Seamlessly reposition and flip bird direction on language switch (EN <-> AR)
  useEffect(() => {
    currentLangRef.current = currentLang;
    if (handleScrollRef.current) {
      handleScrollRef.current();
    }
    if (wakeAnimationRef.current) {
      wakeAnimationRef.current();
    }
  }, [currentLang]);

  return (
    <div
      aria-hidden="true"
      dir="ltr"
      className="fixed inset-0 left-0 top-0 w-full h-full pointer-events-none z-40 overflow-hidden select-none"
    >
      <div
        ref={birdRef}
        className="absolute top-0 left-0 pointer-events-auto cursor-pointer will-change-transform group animate-bird-float"
        style={{
          transform: `translate3d(${stateRef.current.currentX}px, ${stateRef.current.currentY}px, 0)`,
        }}
      >
        {/* Animated Flying Bird Image with GPU-accelerated transform */}
        <div
          ref={innerRef}
          className="relative will-change-transform"
          style={{
            transform: `scaleX(${stateRef.current.facing}) rotate(${stateRef.current.rotation}deg)`,
          }}
        >
          <img
            src="/assets/flying-bird.gif"
            alt="Flying bird companion"
            className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto drop-shadow-[0_10px_22px_rgba(0,0,0,0.24)] hover:scale-105 transition-transform duration-200"
            draggable="false"
          />

          {/* Interactive Tooltip on Hover */}
          <div
            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute -bottom-7 whitespace-nowrap bg-black/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/10 ${
              isAr ? 'left-2' : 'right-2'
            }`}
          >
            <span>{isAr ? 'رفيق النيل الطائر 𓅃' : 'Nile Hummingbird ✦'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
