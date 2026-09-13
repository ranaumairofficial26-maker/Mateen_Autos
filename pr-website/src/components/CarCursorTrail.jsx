import React, { useEffect, useRef, useState } from 'react';

/**
 * Ultra-Smooth GPU-Accelerated Automotive Luxury Cursor
 * - Zero CPU canvas overhead (runs via 60fps/120fps hardware-accelerated transform3d).
 * - Precision automotive target dot + floating companion ring.
 * - Dynamic magnetic expansion on links, buttons, and interactive cards.
 * - Smooth purple + electric blue luxury gradient styling.
 */
export default function CarCursorTrail() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointer (not touchscreens)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.closest('a, button, input, select, textarea, [role="button"], .btn, .au-branch-card, .cp-branch-box, .iw-story-item, .au-timeline-item, .au-founder-wrap') ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Smooth companion ring lerp loop
    const render = () => {
      const lerp = 0.2;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          html, body, a, button, input, select, textarea, [role="button"] {
            cursor: none !important;
          }
        }

        .lux-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          margin-top: -3px;
          margin-left: -3px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 8px #d946ef, 0 0 3px #00a8ff;
          pointer-events: none;
          z-index: 999999;
          will-change: transform;
          transition: width 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      height 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      margin 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
                      opacity 0.25s ease,
                      background 0.2s ease;
        }

        .lux-cursor-dot.hovered {
          width: 5px;
          height: 5px;
          margin-top: -2.5px;
          margin-left: -2.5px;
          background: #d946ef;
          box-shadow: 0 0 10px #d946ef;
        }

        .lux-cursor-dot.clicked {
          transform-origin: center;
          width: 9px;
          height: 9px;
          margin-top: -4.5px;
          margin-left: -4.5px;
          background: #00a8ff;
          box-shadow: 0 0 14px #00a8ff;
        }

        .lux-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 25px;
          height: 25px;
          margin-top: -12.5px;
          margin-left: -12.5px;
          border-radius: 50%;
          border: 1.5px solid rgba(217, 70, 239, 0.7);
          background: rgba(217, 70, 239, 0.04);
          box-shadow: 0 0 12px rgba(217, 70, 239, 0.35), inset 0 0 8px rgba(0, 168, 255, 0.15);
          pointer-events: none;
          z-index: 999998;
          will-change: transform;
          transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      margin 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      background 0.25s ease,
                      box-shadow 0.28s ease,
                      opacity 0.25s ease;
        }

        /* Subtle crosshair notches on the ring */
        .lux-cursor-ring::before {
          content: '';
          position: absolute;
          inset: -2.5px;
          border-radius: 50%;
          border: 1px dashed rgba(0, 168, 255, 0.4);
          animation: luxRingRotate 10s linear infinite;
        }

        @keyframes luxRingRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .lux-cursor-ring.hovered {
          width: 40px;
          height: 40px;
          margin-top: -20px;
          margin-left: -20px;
          border-color: #00a8ff;
          background: rgba(217, 70, 239, 0.12);
          box-shadow: 0 0 20px rgba(0, 168, 255, 0.5), inset 0 0 12px rgba(217, 70, 239, 0.3);
        }

        .lux-cursor-ring.clicked {
          width: 19px;
          height: 19px;
          margin-top: -9.5px;
          margin-left: -9.5px;
          border-color: #d946ef;
          background: rgba(217, 70, 239, 0.25);
        }
      `}</style>

      <div
        ref={dotRef}
        className={`lux-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className={`lux-cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
