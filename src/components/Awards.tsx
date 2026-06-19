'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Awards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#awards-heading, .award-card', { opacity: 1 });
      gsap.from('#awards-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#awards-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.award-card', {
        y: 30, duration: 0.5, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '#awards-list', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const awardIcons = [
    'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    'M22 12h-4l-3 9L9 3l-3 9H2',
    'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z',
    'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  ];

  return (
    <section ref={sectionRef} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="awards">
      <div className="max-w-6xl mx-auto px-6">
        <div id="awards-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Recognition</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Awards & Honors</h2>
        </div>

        <div id="awards-list" className="grid md:grid-cols-2 gap-4">
          {profile.awards.map((award, i) => (
            <div key={i} className="award-card bg-white rounded-xl p-4 sm:p-6 border border-stone-200 hover:border-amber-300 transition-all duration-300 shadow-sm shadow-stone-200/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={awardIcons[i % awardIcons.length]} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-800 leading-relaxed">{award}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
