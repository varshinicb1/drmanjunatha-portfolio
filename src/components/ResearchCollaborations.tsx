'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

const slides = Array.from({ length: 12 }, (_, i) => ({
  num: i + 1,
  src: `/research-collabs/slide${String(i + 1).padStart(2, '0')}.png`,
  label:
    i === 0 ? 'Overseas & National Collaborations — Title' :
    i === 1 ? 'Global Collaboration Map' :
    i === 2 ? 'Overseas Collaborations — Institution Logos' :
    i === 3 ? 'Japan — Prof. Dr. Ajit Khosla, Yamagata University' :
    i === 4 ? 'USA — Dr. Praveen Sekhar, Washington State University' :
    i === 5 ? 'USA — Dr. Ajeet Kaushik, Florida Polytechnic University' :
    i === 6 ? 'Canada — Dr. Mohtada Sadrzadeh, University of Alberta' :
    i === 7 ? 'Thailand — Dr. Itthipon Jeerapan, Prince of Songkla University' :
    i === 8 ? 'Taiwan — Dr. Hung, I-Ming, Yuan Ze University' :
    i === 9 ? 'Thailand — Vishal Chaudary, University of Delhi' :
    i === 10 ? 'Taiwan — Prof. Wei-Fan Kuan, Chang Gung University' :
    'National Collaborations — Institution Logos',
}));

export default function ResearchCollaborations() {
  const ref = useRef(null);
  const [sel, setSel] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.collab-heading, .collab-slide', { opacity: 1 });
      gsap.from('.collab-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.collab-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.collab-slide', {
        y: 20, duration: 0.4, stagger: 0.05, ease: 'power2.out',
        scrollTrigger: { trigger: '#slides-grid', start: 'top 85%', toggleActions: 'play none none none' },
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

        {/* Slide gallery */}
        <div id="slides-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {slides.map((s) => (
            <div
              key={s.num}
              className="collab-slide group cursor-pointer bg-stone-50 rounded-xl border border-stone-200 overflow-hidden hover:border-amber-300 transition-colors"
              onClick={() => setSel(sel === s.num ? null : s.num)}
            >
              <div className="aspect-[16/9] bg-stone-100 overflow-hidden">
                <img src={s.src} alt={s.label} className="w-full h-full object-contain bg-white" loading="lazy" />
              </div>
              <div className="px-3 py-2.5 border-t border-stone-200">
                <p className="text-xs text-stone-600 truncate">{s.num}. {s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded view */}
        {sel !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSel(null)}>
            <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSel(null)} className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/60 rounded-full text-white flex items-center justify-center text-lg hover:bg-black/80">&times;</button>
              <img src={slides[sel - 1].src} alt={slides[sel - 1].label} className="w-full h-auto max-h-[80vh] object-contain bg-white" />
              <div className="px-5 py-3 border-t border-stone-200 bg-white">
                <p className="text-sm text-stone-700">{slides[sel - 1].label}</p>
              </div>
            </div>
          </div>
        )}

        {/* Overseas collaborators data */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-stone-900 mb-5 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Overseas Collaborators
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {overseas.map((c, i) => (
              <div key={i} className="bg-stone-50 rounded-xl border border-stone-200 p-5 hover:border-amber-200 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{({ Japan: '🇯🇵', USA: '🇺🇸', Canada: '🇨🇦', Thailand: '🇹🇭', Taiwan: '🇹🇼' } as Record<string, string>)[c.country] || ''}</span>
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

        {/* National collaborators */}
        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-5 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>
            </svg>
            National Collaborators
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {national.map((inst, i) => (
              <div key={i} className="bg-amber-50 rounded-xl border border-amber-200 p-4 flex items-center gap-3">
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
