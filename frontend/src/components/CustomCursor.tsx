'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer devices with sufficient screen width
    if (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let frame: number;
    let isHovering = false;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Make elements visible
    dot.style.opacity  = '1';
    ring.style.opacity = '1';

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    // Smooth ring follows with lerp
    const tick = () => {
      const speed = isHovering ? 0.09 : 0.14;
      rx += (mx - rx) * speed;
      ry += (my - ry) * speed;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      frame = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      isHovering = true;
      ring.classList.add('cursor-ring--hover');
      dot.classList.add('cursor-dot--hover');
    };
    const onLeave = () => {
      isHovering = false;
      ring.classList.remove('cursor-ring--hover');
      dot.classList.remove('cursor-dot--hover');
    };

    const bindHovers = () => {
      document.querySelectorAll('a, button, [role="button"], label, input, textarea, select, .btn-default, .btn-outline-hero, .footer-tab-btn, .accordion-button')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
        });
    };

    document.addEventListener('mousemove', onMove);
    document.documentElement.classList.add('custom-cursor-active');
    frame = requestAnimationFrame(tick);
    bindHovers();

    // Re-bind after any dynamic content (route changes)
    const observer = new MutationObserver(bindHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
