'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function ResearchGuidance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#guidance-heading, .guidance-card', { opacity: 1 });
      gsap.from('#guidance-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#guidance-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.guidance-card', {
        y: 30, duration: 0.5, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '#guidance-list', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 sm:py-14 md:py-20" id="guidance">
      <div className="max-w-6xl mx-auto px-6">
        <div id="guidance-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Mentorship</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Research Guidance</h2>
          <p className="text-stone-700 mt-3 max-w-xl">Supervising PhD scholars in advanced nanomaterials, energy storage, and sensor technologies at VTU</p>
        </div>

        <div id="guidance-list" className="grid md:grid-cols-2 gap-4 md:gap-6">
          {profile.phdStudents.map((s, i) => (
            <div key={i} className="guidance-card bg-stone-100 rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{s.name}</h3>
                  <p className="text-xs text-stone-700 font-mono">{s.usn} | {s.discipline}</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Thesis</p>
                <p className="text-sm text-stone-700 leading-relaxed">{s.thesis}</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                <span className="text-xs text-stone-700">Registered: {s.year}</span>
                <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{s.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <p className="text-sm text-stone-700">Guided 150+ students across 62+ UG/PG projects at RV College of Engineering</p>
        </div>
      </div>
    </section>
  );
}
