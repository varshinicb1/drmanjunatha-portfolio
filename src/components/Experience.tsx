'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';
import { getLogo } from '@/utils/logos';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const [openId, setOpenId] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#experience-heading, .exp-row', { opacity: 1 });
      gsap.from('#experience-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#experience-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.exp-row', {
        y: 24, duration: 0.5, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '#experience-container', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleToggle = (id: number) => {
    const prev = openId;
    const next = prev === id ? null : id;
    if (prev !== null && contentRefs.current[prev]) {
      gsap.to(contentRefs.current[prev], { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
    }
    if (next !== null && contentRefs.current[next]) {
      const el = contentRefs.current[next]!;
      el.style.height = 'auto';
      const h = el.scrollHeight;
      el.style.height = '0px';
      requestAnimationFrame(() => {
        gsap.to(el, { height: h, opacity: 1, duration: 0.35, ease: 'power2.out', onComplete: () => { el.style.height = 'auto'; } });
      });
    }
    setOpenId(next);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white md:px-16 py-10 sm:py-14 md:py-20" id="experience">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        <div id="experience-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Career</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Experience</h2>
        </div>

        <div id="experience-container">
          {profile.experience.map((exp, i) => {
            const logo = getLogo(exp.employer);
            return (
              <div key={i} className="exp-row border-b border-stone-200">
                <div
                  className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-6 px-6 cursor-pointer transition-colors duration-300 ${openId === i ? 'bg-amber-50' : 'hover:bg-stone-100'}`}
                  onClick={() => handleToggle(i)}
                >
                  <div className="flex items-center md:w-[70px] flex-shrink-0 justify-center">
                    {logo && <img src={logo} alt={exp.employer} className="h-7 md:h-10 max-w-[40px] md:max-w-[60px] object-contain" />}
                  </div>
                  <div className="md:w-[18%] flex-1">
                    <p className="text-xs font-mono text-amber-800 font-semibold">{exp.period}</p>
                    <p className="font-semibold text-stone-900 text-sm md:text-base md:hidden mt-0.5">{exp.role}</p>
                  </div>
                  <div className="hidden md:block md:w-[22%]">
                    <p className="font-semibold text-stone-900">{exp.role}</p>
                  </div>
                  <div className="hidden md:block md:w-[35%]">
                    <p className="text-sm text-stone-500">{exp.employer}</p>
                  </div>
                  <div className="md:w-[8%] flex justify-end">
                    <svg className={`w-3 h-3 text-amber-600 transition-transform duration-300 ${openId === i ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  className="overflow-hidden"
                  style={{ height: openId === i ? 'auto' : 0, opacity: openId === i ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 text-stone-500 leading-relaxed text-sm">{exp.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
