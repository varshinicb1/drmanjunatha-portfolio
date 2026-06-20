'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';
import { getLogo } from '@/utils/logos';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const tl = gsap.timeline({ delay: 0.3 });
    tl.from('#hero-stats > div', { y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' })
      .from('.intro-heading p', { y: 30, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .from('#hero-image', { x: 60, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');

    const heroName = el.querySelector('#hero-name');
    if (heroName) {
      tl.from(heroName, { y: 40, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    }

    gsap.from('#scroll-indicator', { y: 20, opacity: 0, duration: 0.6, delay: 1.2, ease: 'power2.out' });

    gsap.set('#about-heading, #about-content > *', { opacity: 1 });
    gsap.from('#about-heading', {
      y: 60, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#about-heading', start: 'top 85%', toggleActions: 'play none none none' },
    });
    gsap.from('#about-content > *', {
      y: 40, duration: 0.6, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '#about-content', start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <div ref={heroRef}>
      <section className="min-h-screen flex flex-col md:flex-row bg-white" id="hero">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-16 pt-20 md:pt-0 order-last md:order-first">
          <div id="hero-stats" className="flex items-center justify-between md:justify-start gap-3 md:gap-8 mb-8 md:mb-10">
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-amber-700 leading-none">{profile.stats.papers}</div>
              <p className="text-xs text-stone-500 mt-1 tracking-wider uppercase">Publications</p>
            </div>
            <div className="w-px h-10 bg-stone-200" />
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-amber-700 leading-none">{profile.stats.patents}</div>
              <p className="text-xs text-stone-500 mt-1 tracking-wider uppercase">Patents</p>
            </div>
            <div className="w-px h-10 bg-stone-200" />
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-amber-700 leading-none">{profile.stats.projectsGuided}+</div>
              <p className="text-xs text-stone-500 mt-1 tracking-wider uppercase">Students</p>
            </div>
          </div>

          <div className="intro-heading">
            <p className="text-lg md:text-xl font-light text-stone-500 mb-2">Hello, It&apos;s</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-regular bebas-neue-regular leading-none text-stone-900" id="hero-name">
              Dr. Manjunatha<br />Channegowda
            </h1>
            <p className="text-base md:text-lg text-stone-600 mt-4 max-w-md leading-relaxed">{profile.title}, {profile.department}</p>
            <p className="text-sm text-stone-400">{profile.institution}</p>
          </div>

          <div className="flex items-center gap-2 text-amber-700 mt-10" id="scroll-indicator">
            <span className="text-sm sm:text-xs tracking-widest uppercase">Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>

        <div id="hero-image" className="w-full md:w-1/2 min-h-[30vh] md:min-h-[70vh] flex items-center justify-center p-6 md:p-10">
          <picture>
            <source srcSet="/new-pic.webp" type="image/webp" />
            <source srcSet={profile.image} type="image/png" />
            <img src={profile.image} className="w-full h-full max-h-[50vh] md:max-h-[60vh] object-contain rounded-2xl" alt={`Dr. ${profile.fullName} — Academic portrait`} />
          </picture>
        </div>
      </section>

      <section className="bg-stone-100 flex flex-col md:flex-row gap-6 md:gap-8 px-6 md:px-16 py-12 md:py-24 max-w-6xl mx-auto" id="about">
        <div className="md:w-2/5">
          <h2 id="about-heading" className="text-3xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mb-6">About Me</h2>
          <p className="text-base leading-relaxed text-stone-500">{profile.bio}</p>
          <div className="mt-8 w-20 h-1 bg-amber-400 rounded-full" />
        </div>

        <div id="about-content" className="md:w-3/5 grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <div className="text-2xl font-bold text-amber-700">23</div>
            <p className="text-xs text-stone-600 mt-1">Years of research & teaching experience</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5Z"/><path d="M8 7h8M8 11h6"/>
            </svg>
            <div className="text-2xl font-bold text-amber-700">{profile.stats.papers}</div>
            <p className="text-xs text-stone-600 mt-1">Research papers (2012-2026)</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div className="text-2xl font-bold text-amber-700">150+</div>
            <p className="text-xs text-stone-600 mt-1">Students guided in UG/PG projects</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="8" height="12" x="8" y="4" rx="1"/><path d="M10 8h4M10 11h4M10 14h4"/><path d="M4 9H2m0 6h2m16-6h2m0 6h-2"/>
            </svg>
            <div className="text-2xl font-bold text-amber-700">{profile.stats.patents}</div>
            <p className="text-xs text-stone-600 mt-1">Patents in energy & sensor technologies</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm md:col-span-2 flex items-center gap-4">
            <picture>
              <source srcSet="/new-pic.webp" type="image/webp" />
              <source srcSet={profile.image} type="image/png" />
              <img src={profile.image} className="w-14 h-14 rounded-full object-cover border-2 border-amber-300 flex-shrink-0" alt={`${profile.fullName} profile photo`} />
            </picture>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-stone-900">{profile.fullName}</p>
              <p className="text-sm text-stone-600">{profile.title}, {profile.department}</p>
              <p className="text-xs text-stone-400">{profile.institution}</p>
            </div>
            {getLogo(profile.institution) && (
              <img src={getLogo(profile.institution)!} alt={profile.institution} className="h-8 object-contain flex-shrink-0" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
