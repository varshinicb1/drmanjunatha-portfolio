'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#cta-content', { opacity: 1 });
      gsap.from('#cta-content', {
        y: 30, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '#cta-content', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-amber-700 py-12 sm:py-16 md:py-20">
      <div id="cta-content" className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-200">Collaborate</p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl bebas-neue-regular text-white mt-2">Get in Touch</h2>
        <p className="text-base md:text-lg text-amber-100 mt-4 max-w-2xl mx-auto leading-relaxed">
          Open to research collaborations, consultancy projects, PhD supervision, and industry partnerships in nanomaterials, energy storage, sensors, and green hydrogen technologies.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 bg-white text-amber-800 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-amber-50 transition-colors shadow-lg min-h-11" aria-label={`Send academic email to ${profile.email}`}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Academic Email
          </a>
          <a href={`mailto:${profile.industryEmail}`} className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-amber-500 transition-colors border border-amber-400 min-h-11" aria-label={`Send industry email to ${profile.industryEmail}`}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Industry Email
          </a>
        </div>
      </div>
    </section>
  );
}
