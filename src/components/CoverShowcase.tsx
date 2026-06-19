'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const covers = [
  {
    src: '/covers/aaembp.2023.5.issue-9.xlargecover.jpg',
    label: 'ACS Applied Electronic Materials — Front Cover',
    year: 2023,
    papers: 15,
    highlight: 'Scalable Synthesis of Ni3B2O6 nanograins for supercapacitor',
  },
  {
    src: '/covers/enfuem.2023.37.issue-19.xlargecover.jpg',
    label: 'ACS Energy & Fuels — Front Cover',
    year: 2023,
    papers: 15,
    highlight: 'Review on g-C3N4/ZnO: From Type-II to S-Scheme Heterojunctions',
  },
  {
    src: '/covers/ChemSusChem - 2024 - Manjunatha - Advances in Hierarchical Inorganic Nanostructures for Efficient Solar Energy Harvesting-1.png',
    label: 'ChemSusChem (Wiley) — Front Cover',
    year: 2024,
    papers: 12,
    highlight: 'Advances in Hierarchical Inorganic Nanostructures for Efficient Solar Energy Harvesting',
  },
];

export default function CoverShowcase() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.cover-card', { opacity: 1 });
      gsap.from('.cover-card', {
        y: 40, duration: 0.7, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: '#cover-showcase', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-10 sm:py-14 md:py-20" id="cover-showcase">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Featured Cover Stories</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Journal Front Covers</h2>
          <p className="text-stone-700 mt-3 max-w-2xl">Three research articles selected as front cover features in high-impact journals — a mark of editorial recognition.</p>
        </div>

        <div id="cover-showcase" className="grid md:grid-cols-3 gap-4 md:gap-6">
          {covers.map((c, i) => (
            <div key={i} className="cover-card group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] sm:aspect-[3/4] md:aspect-auto md:h-[420px] relative overflow-hidden">
                <img src={c.src} alt={c.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">{c.year} &middot; {c.papers} papers</span>
                  <p className="text-white text-sm md:text-base font-semibold leading-snug mt-1 line-clamp-3">{c.highlight}</p>
                  <p className="text-white/70 text-xs mt-2">{c.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
