import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollBird.css';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// 1. CONFIGURATION: Image Asset, Physics Timings, and Waypoints
// ============================================================================

/** Asset path to the photorealistic 3D animated hummingbird SVG */
export const BIRD_IMAGE_SRC = '/bird/hummingbird.svg';

/**
 * Spring physics parameters
 * - stiffness: Tension of the spring (60-80). Higher = faster response.
 * - damping: Resistance to oscillation (15-20). Higher = less bounce.
 * - arcHeight: Mid-flight elevation in vh (negative = ascends).
 */
export const SPRING_CONFIG = {
  stiffness: 72,
  damping: 18,
  arcHeight: -9,
};

/**
 * Waypoint configuration for each page section.
 * - sectionId: ID on the DOM element.
 * - x: Horizontal position in vw (viewport width percentage).
 * - y: Vertical position in vh (viewport height percentage).
 * - rotate: Resting tilt in degrees (-30deg to -40deg: beak up, tail down).
 * - scale: Sizing factor (0.85 to 1.15).
 * - flip: Base resting orientation (false = beak right, true = beak left).
 *
 * Alternating order: Right -> Left -> Right -> Left across the entire page.
 */
export const WAYPOINTS = [
  { sectionId: 'hero',     x: 84, y: 34, rotate: -35, scale: 1.0,  flip: false },
  { sectionId: 'about',    x: 10, y: 50, rotate: -35, scale: 0.95, flip: true  },
  { sectionId: 'tours',    x: 86, y: 40, rotate: -35, scale: 1.05, flip: false },
  { sectionId: 'pharaohs', x: 10, y: 44, rotate: -35, scale: 1.0,  flip: true  },
  { sectionId: 'gallery',  x: 86, y: 38, rotate: -35, scale: 1.05, flip: false },
  { sectionId: 'camps',    x: 10, y: 50, rotate: -35, scale: 0.95, flip: true  },
  { sectionId: 'reviews',  x: 85, y: 45, rotate: -35, scale: 1.0,  flip: false },
  { sectionId: 'cta',      x: 12, y: 52, rotate: -35, scale: 0.95, flip: true  },
  { sectionId: 'contact',  x: 83, y: 40, rotate: -35, scale: 1.0,  flip: false },
];

// Helper: Linear interpolation
const lerp = (start, end, t) => start + (end - start) * t;

// ============================================================================
// 2. COMPONENT IMPLEMENTATION (Photorealistic 3D Spatial Motion)
// ============================================================================

export const ScrollBird = () => {
  const birdWrapperRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) return;

    // Check accessibility: prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isReducedMotion = reducedMotionQuery.matches;

    const handleReducedMotionChange = (e) => {
      isReducedMotion = e.matches;
    };
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Section trigger measurements
    let sectionPositions = [];

    const measureSections = () => {
      const isMobile = window.innerWidth < 768;
      const vh = window.innerHeight;

      sectionPositions = WAYPOINTS.map((wp) => {
        const el = document.getElementById(wp.sectionId) ||
                   document.querySelector(`[data-bird-section="${wp.sectionId}"]`);
        
        let targetScroll = 0;
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.scrollY || window.pageYOffset;
          // Trigger when section top enters near 35% of viewport
          targetScroll = Math.max(0, scrollTop + rect.top - vh * 0.35);
        }
        
        // Mobile-adjusted coordinates
        let adjustedX = wp.x;
        let adjustedScale = wp.scale;

        if (isMobile) {
          adjustedX = wp.x > 50 ? 80 : 6;
          adjustedScale = wp.scale * 0.58;
        }

        return {
          ...wp,
          x: adjustedX,
          scale: adjustedScale,
          scrollTrigger: targetScroll,
        };
      });
    };

    measureSections();

    // Debounced resize handler
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureSections();
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener('resize', handleResize);

    // Physics State Variables (persisted across frames without setState)
    const state = {
      x: sectionPositions[0]?.x || 84,
      y: sectionPositions[0]?.y || 34,
      rotate: sectionPositions[0]?.rotate || -35,
      scale: sectionPositions[0]?.scale || 1.0,
      flip: sectionPositions[0]?.flip ? -1 : 1,
      targetFacing: sectionPositions[0]?.flip ? -1 : 1,
      vx: 0,
      vy: 0,
      vr: 0,
      vs: 0,
      prevTargetX: sectionPositions[0]?.x || 84,
    };

    // Main Animation Loop linked to GSAP's optimized ticker
    const onTick = (time, deltaTime) => {
      if (!birdWrapperRef.current || sectionPositions.length === 0) return;

      const currentScroll = window.scrollY || window.pageYOffset;
      const dt = Math.min(deltaTime / 1000, 0.05); // Frame delta in seconds, clamped

      // Determine continuous progress across waypoints
      const maxIdx = sectionPositions.length - 1;
      let currentIndex = 0;
      let fraction = 0;

      if (currentScroll <= sectionPositions[0].scrollTrigger) {
        currentIndex = 0;
        fraction = 0;
      } else if (currentScroll >= sectionPositions[maxIdx].scrollTrigger) {
        currentIndex = maxIdx - 1;
        fraction = 1;
      } else {
        for (let i = 0; i < maxIdx; i++) {
          const start = sectionPositions[i].scrollTrigger;
          const end = sectionPositions[i + 1].scrollTrigger;
          if (currentScroll >= start && currentScroll < end) {
            currentIndex = i;
            const span = Math.max(end - start, 1);
            fraction = (currentScroll - start) / span;
            break;
          }
        }
      }

      // Clamp fraction [0, 1]
      fraction = Math.max(0, Math.min(1, fraction));

      const fromWp = sectionPositions[currentIndex];
      const toWp = sectionPositions[Math.min(currentIndex + 1, maxIdx)];

      // Gentle arc calculation: peaks at middle of flight (sin(fraction * PI))
      const arcFactor = Math.sin(fraction * Math.PI);
      const arcOffset = SPRING_CONFIG.arcHeight * arcFactor;

      // Base target values between the two waypoints
      const targetX = lerp(fromWp.x, toWp.x, fraction);
      const targetY = lerp(fromWp.y, toWp.y, fraction) + arcOffset;

      // Body levels out during flight (from -35deg resting to ~ -10deg horizontal)
      const targetRotate = lerp(
        lerp(fromWp.rotate, toWp.rotate, fraction),
        -10,
        arcFactor
      );
      const targetScale = lerp(fromWp.scale, toWp.scale, fraction);

      // Determine travel direction for beak-first flip orientation
      const dx = targetX - state.prevTargetX;
      state.prevTargetX = targetX;

      if (Math.abs(dx) > 0.04) {
        // Moving left: flip with scaleX(-1) so beak points left; moving right: 1
        state.targetFacing = dx < 0 ? -1 : 1;
      } else if (arcFactor < 0.1) {
        // Settle back to section resting orientation when stationary
        const restingWp = fraction > 0.5 ? toWp : fromWp;
        state.targetFacing = restingWp.flip ? -1 : 1;
      }

      // If prefers-reduced-motion: snap directly without spring or blur
      if (isReducedMotion) {
        state.x = targetX;
        state.y = targetY;
        state.rotate = targetRotate;
        state.scale = targetScale;
        state.flip = state.targetFacing;

        const el = birdWrapperRef.current;
        el.style.transform = `translate3d(${state.x}vw, ${state.y}vh, 0px) rotateZ(${state.rotate}deg) scaleX(${state.flip * state.scale}) scaleY(${state.scale})`;
        el.style.filter = 'none';
        return;
      }

      // Smooth flip transition
      state.flip += (state.targetFacing - state.flip) * 0.18;

      // Spring physics integration
      const { stiffness, damping } = SPRING_CONFIG;

      // X spring
      const fx = -stiffness * (state.x - targetX) - damping * state.vx;
      state.vx += fx * dt;
      state.x += state.vx * dt;

      // Y spring
      const fy = -stiffness * (state.y - targetY) - damping * state.vy;
      state.vy += fy * dt;
      state.y += state.vy * dt;

      // Rotation spring
      const fr = -stiffness * (state.rotate - targetRotate) - damping * state.vr;
      state.vr += fr * dt;
      state.rotate += state.vr * dt;

      // Scale spring
      const fs = -stiffness * (state.scale - targetScale) - damping * state.vs;
      state.vs += fs * dt;
      state.scale += state.vs * dt;

      // Velocity-based motion blur & horizontal stretch
      const speed = Math.hypot(state.vx, state.vy);
      const blurPx = Math.min(2.0, speed * 0.045);
      const stretch = 1.0 + Math.min(0.08, speed * 0.0025);

      // 3D Banking & Pitch dynamics
      const bankAngle = Math.max(-22, Math.min(22, -state.vx * 0.45));
      const pitchAngle = Math.max(-14, Math.min(14, state.vy * 0.35));

      // Render 3D transforms directly to DOM (0 setState calls per frame)
      const el = birdWrapperRef.current;
      const finalScaleX = state.flip * state.scale * stretch;
      const finalScaleY = state.scale;

      el.style.transform = `translate3d(${state.x.toFixed(2)}vw, ${state.y.toFixed(2)}vh, 0px) rotateZ(${state.rotate.toFixed(1)}deg) rotateY(${bankAngle.toFixed(1)}deg) rotateX(${pitchAngle.toFixed(1)}deg) scaleX(${finalScaleX.toFixed(3)}) scaleY(${finalScaleY.toFixed(3)})`;

      if (blurPx > 0.15) {
        el.style.filter = `blur(${blurPx.toFixed(1)}px)`;
      } else {
        el.style.filter = 'none';
      }

      // Mobile opacity adjustment if overlapping
      const isMobile = window.innerWidth < 768;
      el.style.opacity = isMobile ? '0.85' : '1';
    };

    gsap.ticker.add(onTick);

    return () => {
      gsap.ticker.remove(onTick);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, [hasError]);

  if (hasError) {
    return null;
  }

  return (
    <div className="scroll-bird-stage" aria-hidden="true">
      <div ref={birdWrapperRef} className="scroll-bird-wrapper">
        <div className="scroll-bird-hover">
          <img
            src={BIRD_IMAGE_SRC}
            alt=""
            className="scroll-bird-img"
            draggable={false}
            onError={() => setHasError(true)}
          />
        </div>
      </div>
    </div>
  );
};
