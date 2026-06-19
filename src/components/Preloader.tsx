'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  useEffect(() => {
    const onLoad = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 1 } });
      tl.to('.preloader-top', { yPercent: -100 })
        .to('.preloader-bottom', { yPercent: 100 }, '<')
        .to('#preloader', { opacity: 0, pointerEvents: 'none', duration: 0.5 })
        .from('#main-content', { opacity: 0, y: 50, duration: 1 }, '-=0.5');
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div id="preloader" className="fixed inset-0 z-50 flex flex-col pointer-events-auto">
      <div className="preloader-top bg-[#1a1a2e] flex-1" />
      <div className="preloader-bottom bg-[#1a1a2e] flex-1" />
    </div>
  );
}
