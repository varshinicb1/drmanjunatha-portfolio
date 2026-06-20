'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

const countryFlags: Record<string, string> = {
  Japan: '🇯🇵',
  USA: '🇺🇸',
  Canada: '🇨🇦',
  Thailand: '🇹🇭',
  Taiwan: '🇹🇼',
};

export default function ResearchCollaborations() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.collab-heading, .collab-card', { opacity: 1 });
      gsap.from('.collab-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.collab-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.collab-card', {
        y: 20, duration: 0.4, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '#collab-grid', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const { overseas, national } = profile.researchCollaborations;

  return (
    <section ref={ref} className="w-full bg-white py-10 sm:py-14 md:py-20" id="collaborations">
      <div className="max-w-6xl mx-auto px-6">
        <div className="collab-heading mb-10">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Network</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Research Collaborations</h2>
          <p className="text-stone-700 mt-3 max-w-2xl">Joint journal publications and research partnerships with leading institutions worldwide.</p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-stone-900 mb-5 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Overseas Collaborations
          </h3>
          <div id="collab-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {overseas.map((c, i) => (
              <div key={i} className="collab-card bg-stone-50 rounded-xl border border-stone-200 p-5 hover:border-amber-200 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{countryFlags[c.country] || ''}</span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">{c.country}</span>
                </div>
                <p className="text-sm font-semibold text-stone-900">{c.collaborator}</p>
                <p className="text-xs text-stone-600 mt-0.5 leading-snug">{c.affiliation}</p>
                {c.email && (
                  <a href={`mailto:${c.email}`} className="text-xs text-amber-700 hover:text-amber-800 underline underline-offset-2 mt-2 block">{c.email}</a>
                )}
                {c.note && (
                  <p className="text-xs text-stone-500 mt-2 italic leading-snug">{c.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-5 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>
            </svg>
            National Collaborations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {national.map((inst, i) => (
              <div key={i} className="collab-card bg-amber-50 rounded-xl border border-amber-200 p-4 flex items-center gap-3">
                <svg className="w-4 h-4 text-amber-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-sm text-stone-800">{inst}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
