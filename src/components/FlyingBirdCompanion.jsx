import React, { useState, useEffect, useRef } from 'react';

export const FlyingBirdCompanion = ({ currentLang = 'EN' }) => {
  const isAr = currentLang === 'AR';
  const birdRef = useRef(null);

  // Section IDs across the landing page in scroll order:
  // Group 0 (Sections 0, 1): hero, about      -> RIGHT side
  // Group 1 (Sections 2, 3): tours, pharaohs  -> LEFT side
  // Group 2 (Sections 4, 5): gallery, camps   -> RIGHT side
  // Group 3 (Sections 6, 7): reviews, contact -> LEFT side
  const sectionIds = ['hero', 'about', 'tours', 'pharaohs', 'gallery', 'camps', 'reviews', 'contact'];

  const stateRef = useRef({
    targetY: 100,
    currentY: 100,
    targetX: 0,
    currentX: 0,
    facing: -1, // 1 = facing right, -1 = facing left
    rotation: 4,
    targetRotation: 4,
    lastScrollY: 0,
    lastTime: Date.now(),
    isDiving: false,
    activeSide: 'right', // 'right' or 'left'
    scrollTimeout: null,
    isInitialized: false,
  });

  const [displayState, setDisplayState] = useState({
    x: 0,
    y: 100,
    rotation: 4,
    facing: -1,
    side: 'right',
  });

  useEffect(() => {
    let animId;

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

      // 1. Detect which section is currently in view
      let currentIdx = 0;
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top reaches mid-upper viewport
          if (rect.top <= winHeight * 0.48) {
            currentIdx = i;
          }
        }
      }

      // 2. Switch sides every 2 sections:
      // Group 0 (Sec 0, 1): Right
      // Group 1 (Sec 2, 3): Left
      // Group 2 (Sec 4, 5): Right
      // Group 3 (Sec 6, 7): Left
      const group = Math.floor(currentIdx / 2);
      const targetSide = group % 2 === 0 ? 'right' : 'left';
      state.activeSide = targetSide;

      // Responsive margin constants
      const birdWidth = winWidth < 640 ? 110 : winWidth < 1024 ? 140 : 160;
      const margin = winWidth < 640 ? 12 : winWidth < 1024 ? 24 : 36;

      // 3. Compute target horizontal position
      if (targetSide === 'right') {
        state.targetX = winWidth - birdWidth - margin;
      } else {
        state.targetX = margin;
      }

      // Initial instant placement on mount
      if (!state.isInitialized) {
        state.currentX = state.targetX;
        state.currentY = winHeight * 0.14;
        state.isInitialized = true;
      }

      // 4. Vertical mapping: As user scrolls down, bird flies downwards (12% to 78% of viewport)
      const minY = winHeight * 0.12;
      const maxY = winHeight * 0.78;
      const baseProgressY = minY + progress * (maxY - minY);

      // Dive dynamic on fast downward scroll
      let diveOffset = 0;
      let diveRotation = 4;

      if (velocity > 0.15) {
        diveOffset = Math.min(velocity * 40, 55);
        diveRotation = Math.min(10 + velocity * 15, 22);
        state.isDiving = true;
      } else if (velocity < -0.15) {
        diveOffset = Math.max(velocity * 25, -35);
        diveRotation = Math.max(-10, velocity * 12);
        state.isDiving = true;
      } else {
        diveRotation = 4;
      }

      state.targetY = baseProgressY + diveOffset;
      state.targetRotation = diveRotation;

      if (state.scrollTimeout) clearTimeout(state.scrollTimeout);
      state.scrollTimeout = setTimeout(() => {
        state.isDiving = false;
        state.targetRotation = 4;
      }, 150);
    };

    // Smooth aerodynamic animation loop
    const tick = () => {
      const state = stateRef.current;
      const now = Date.now();

      // Idle hovering float
      const hoverFloat = Math.sin(now / 480) * 6;

      // Lerp for horizontal crossover (smooth gliding across the screen over ~1.2s)
      const xLerpFactor = 0.045;
      const yLerpFactor = 0.12;

      const dx = state.targetX - state.currentX;
      state.currentX += dx * xLerpFactor;

      // While actively crossing screen, add a gentle aerodynamic flight arc (dip slightly mid-flight)
      const crossingDistance = Math.abs(dx);
      let flightArc = 0;
      if (crossingDistance > 40) {
        // Crossing the screen: face direction of travel!
        state.facing = dx > 0 ? 1 : -1;
        flightArc = Math.sin((crossingDistance / Math.max(window.innerWidth * 0.5, 1)) * Math.PI) * 25;
      } else {
        // At rest on the side: look inward towards website content!
        state.facing = state.activeSide === 'right' ? -1 : 1;
      }

      state.currentY += (state.targetY + hoverFloat + flightArc - state.currentY) * yLerpFactor;
      state.rotation += (state.targetRotation - state.rotation) * 0.15;

      setDisplayState({
        x: state.currentX,
        y: state.currentY,
        rotation: state.rotation,
        facing: state.facing,
        side: state.activeSide,
      });

      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
          transform: `translate3d(${displayState.x}px, ${displayState.y}px, 0)`,
        }}
      >
        {/* Animated Flying Bird Image with Dynamic Directional Flip */}
        <div
          className="relative transition-transform duration-300"
          style={{
            transform: `scaleX(${displayState.facing}) rotate(${
              displayState.facing === 1 ? displayState.rotation : -displayState.rotation
            }deg)`,
          }}
        >
          <img
            src="/assets/flying-bird.gif"
            alt="Flying bird companion"
            className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto drop-shadow-[0_10px_22px_rgba(0,0,0,0.24)] transition-transform duration-300 group-hover:scale-110"
            draggable="false"
          />

          {/* Interactive Tooltip on Hover */}
          <div
            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute -bottom-7 whitespace-nowrap bg-black/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/10 ${
              displayState.facing === 1 ? 'left-2' : 'right-2'
            }`}
            style={{
              transform: `scaleX(${displayState.facing})`, // keep text un-reversed
            }}
          >
            <span>{isAr ? 'رفيق النيل الطائر 𓅃' : 'Nile Hummingbird ✦'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
