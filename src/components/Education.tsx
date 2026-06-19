'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';
import { getLogo } from '@/utils/logos';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#education-heading, .edu-card', { opacity: 1 });
      gsap.from('#education-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#education-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.edu-card', {
        y: 30, duration: 0.5, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '#edu-timeline', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const edu = profile.education.filter(e => e.degree !== 'B.Sc');

  return (
    <section ref={sectionRef} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <div id="education-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Academic Journey</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Education</h2>
        </div>

        <div id="edu-timeline" className="relative">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-gray-200 rounded-full" />

          {edu.map((e, i) => {
            const logo = getLogo(e.university);
            return (
              <div key={i} className="edu-card relative flex gap-4 md:gap-6 mb-6 md:mb-8 last:mb-0">
                <div className="relative z-10 flex-shrink-0">
                  {logo ? (
                    <div className="w-12 sm:w-16 bg-white border-2 border-amber-400 flex items-center justify-center overflow-hidden p-1.5 rounded-xl">
                      <img src={logo} alt={e.university} className="max-w-full max-h-10 object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-amber-100 border-[3px] border-amber-500 flex items-center justify-center">
                      <span className="text-amber-800 font-bold text-[10px] text-center leading-tight">{e.degree}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50">
                  <div className="text-xs font-mono text-amber-800 font-semibold mb-1">{e.year}</div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">{e.degree}{e.field ? ` in ${e.field}` : ''}</h3>
                  <p className="text-sm text-stone-500 mb-2">{e.university}</p>
                  {e.detail && <p className="text-xs text-amber-700 font-medium">{e.detail}</p>}
                  {e.thesis && <p className="text-xs text-stone-700 mt-2 italic">Thesis: {e.thesis}</p>}
                  {e.supervisor && <p className="text-xs text-stone-500 mt-1">Supervisor: {e.supervisor}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
