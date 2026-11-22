import React, { useState, useEffect, useRef } from 'react';

export const FlyingBirdCompanion = ({ currentLang = 'EN' }) => {
  const isAr = currentLang === 'AR';
  const birdRef = useRef(null);

  // Section IDs across the landing page in scroll order:
  // Group 0 (Sections 0, 1): hero, about      -> LEFT side (DEFAULT)
  // Group 1 (Sections 2, 3): tours, pharaohs  -> RIGHT side
  // Group 2 (Sections 4, 5): gallery, camps   -> LEFT side
  // Group 3 (Sections 6, 7): reviews, contact -> RIGHT side
  const sectionIds = ['hero', 'about', 'tours', 'pharaohs', 'gallery', 'camps', 'reviews', 'contact'];

  const stateRef = useRef({
    targetY: 100,
    currentY: 100,
    targetX: 30,
    currentX: 30,
    facing: 1, // 1 = facing right (default), -1 = facing left
    rotation: 4,
    targetRotation: 4,
    lastScrollY: 0,
    lastTime: Date.now(),
    isDiving: false,
    activeSide: 'left', // Default is LEFT of the screen
    scrollTimeout: null,
    isInitialized: false,
  });

  const [displayState, setDisplayState] = useState({
    x: 30,
    y: 100,
    rotation: 4,
    facing: 1,
    side: 'left',
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

      // 1. Detect which section is currently active in viewport
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

      // 2. Switch sides every 2 sections with LEFT as DEFAULT:
      // Group 0 (Sec 0, 1): LEFT
      // Group 1 (Sec 2, 3): RIGHT
      // Group 2 (Sec 4, 5): LEFT
      // Group 3 (Sec 6, 7): RIGHT
      const group = Math.floor(currentIdx / 2);
      const targetSide = group % 2 === 0 ? 'left' : 'right';
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

      // Initial placement on mount: start at left
      if (!state.isInitialized) {
        state.currentX = margin;
        state.currentY = winHeight * 0.14;
        state.facing = 1;
        state.isInitialized = true;
      }

      // 4. Vertical mapping: As user scrolls down, bird flies downwards (12% to 78% of viewport)
      const minY = winHeight * 0.12;
      const maxY = winHeight * 0.78;
      const baseProgressY = minY + progress * (maxY - minY);

      // Dive dynamic on active downward scroll
      let diveOffset = 0;
      let diveRotation = 4;

      if (velocity > 0.15) {
        diveOffset = Math.min(velocity * 40, 55);
        diveRotation = Math.min(8 + velocity * 14, 20);
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

    // Smooth aerodynamic flight loop
    const tick = () => {
      const state = stateRef.current;
      const now = Date.now();

      // Idle hovering float wave
      const hoverFloat = Math.sin(now / 480) * 6;

      // Smooth horizontal lerp across the screen
      const xLerpFactor = 0.045;
      const yLerpFactor = 0.12;

      const dx = state.targetX - state.currentX;
      state.currentX += dx * xLerpFactor;

      // Aerodynamic flight arc and natural direction:
      const crossingDistance = Math.abs(dx);
      let flightArc = 0;

      if (crossingDistance > 35) {
        // Actively crossing the screen: face direction of flight!
        state.facing = dx > 0 ? 1 : -1;
        // Parabolic flight dip across the screen
        flightArc = Math.sin((crossingDistance / Math.max(window.innerWidth * 0.5, 1)) * Math.PI) * 22;
        // Bank into the flight direction
        const bankTilt = dx > 0 ? 6 : -6;
        state.rotation += (bankTilt + state.targetRotation - state.rotation) * 0.12;
      } else {
        // At rest on the side: look inward towards website content!
        state.facing = state.activeSide === 'right' ? -1 : 1;
        state.rotation += (state.targetRotation - state.rotation) * 0.15;
      }

      state.currentY += (state.targetY + hoverFloat + flightArc - state.currentY) * yLerpFactor;

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
        className="absolute pointer-events-auto cursor-pointer will-change-transform group"
        style={{
          transform: `translate3d(${displayState.x}px, ${displayState.y}px, 0)`,
        }}
      >
        {/* Animated Flying Bird Image with Instant Clean Facing & Smooth Aerodynamic Banking */}
        <div
          className="relative"
          style={{
            // Note: NO CSS transition on transform here so it never squashes to 0-width!
            transform: `scaleX(${displayState.facing}) rotate(${
              displayState.facing === 1 ? displayState.rotation : -displayState.rotation
            }deg)`,
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
