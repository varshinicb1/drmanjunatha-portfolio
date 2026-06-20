'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function AcademicActivities() {
  const sectionRef = useRef(null);
  const [showInt, setShowInt] = useState(false);
  const [showNat, setShowNat] = useState(false);
  const [showWks, setShowWks] = useState(false);
  const [showFdp, setShowFdp] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#academic-heading, .conf-row', { opacity: 1 });
      gsap.from('#academic-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#academic-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.conf-row', {
        y: 20, duration: 0.35, stagger: 0.04, ease: 'power2.out',
        scrollTrigger: { trigger: '#conferences-list', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const intVis = showInt ? profile.internationalConferences : profile.internationalConferences.slice(0, 10);
  const natVis = showNat ? profile.nationalConferences : profile.nationalConferences.slice(0, 5);
  const wksVis = showWks ? profile.workshops : profile.workshops.slice(0, 6);
  const fdpVis = showFdp ? profile.facultyDevelopmentPrograms : profile.facultyDevelopmentPrograms.slice(0, 3);

  return (
    <section ref={sectionRef} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="activities">
      <div className="max-w-6xl mx-auto px-6">
        <div id="academic-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Engagement</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Academic Activities</h2>
        </div>

        {profile.invitedTalks.length > 0 && (
          <div className="mb-10 p-5 bg-white rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 21L21 2"/><path d="M10 16l5-5"/><path d="M10 21l3-3"/><path d="M21 10l-3-3"/>
              </svg>
              Invited Talks
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a href={profile.invitedTalks[0].url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img src={profile.invitedTalks[0].image} alt="Manjunatha C - World Nano 2019 Speaker" className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover border border-stone-200 shadow-sm" />
              </a>
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">{profile.invitedTalks[0].role} &middot; {profile.invitedTalks[0].year}</span>
                <p className="text-base font-semibold text-stone-900 mt-1">{profile.invitedTalks[0].title}</p>
                <p className="text-sm text-stone-600 mt-0.5">{profile.invitedTalks[0].event}</p>
                <a href={profile.invitedTalks[0].url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2">View conference listing &rarr;</a>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>
              </svg>
              International Conferences ({profile.internationalConferences.length})
            </h3>
            <div id="conferences-list" className="space-y-2 mb-6">
              {intVis.map((conf, i) => (
                <div key={i} className="conf-row bg-white rounded-lg p-4 border border-stone-200 shadow-sm shadow-stone-200/50">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-amber-800 font-semibold whitespace-nowrap mt-0.5">{conf.year}</span>
                    <div className="min-w-0">
                      <p className="text-sm text-stone-900 leading-snug">{conf.title}</p>
                      <p className="text-xs text-stone-600 mt-0.5">{conf.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {profile.internationalConferences.length > 10 && (
              <button onClick={() => setShowInt(!showInt)} className="mb-6 text-sm text-amber-700 hover:text-amber-800 font-semibold bg-white px-5 py-3 rounded-xl border border-amber-200 hover:bg-amber-50 transition-all">
                {showInt ? 'Show Less' : `Show All ${profile.internationalConferences.length}`}
              </button>
            )}

            <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>
              </svg>
              National Conferences ({profile.nationalConferences.length})
            </h3>
            <div className="space-y-2 mb-6">
              {natVis.map((conf, i) => (
                <div key={i} className="conf-row bg-white rounded-lg p-4 border border-stone-200 shadow-sm shadow-stone-200/50">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-amber-800 font-semibold whitespace-nowrap mt-0.5">{conf.year}</span>
                    <div className="min-w-0">
                      <p className="text-sm text-stone-900 leading-snug">{conf.title}</p>
                      <p className="text-xs text-stone-600 mt-0.5">{conf.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {profile.nationalConferences.length > 5 && (
              <button onClick={() => setShowNat(!showNat)} className="mb-6 text-sm text-amber-700 hover:text-amber-800 font-semibold bg-white px-5 py-3 rounded-xl border border-amber-200 hover:bg-amber-50 transition-all">
                {showNat ? 'Show Less' : `Show All ${profile.nationalConferences.length}`}
              </button>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              Workshops ({profile.workshops.length})
            </h3>
            <div className="space-y-2 mb-6">
              {wksVis.map((w, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-stone-200 shadow-sm shadow-stone-200/50">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>
                    </svg>
                    <p className="text-sm text-stone-700">{w}</p>
                  </div>
                </div>
              ))}
            </div>
            {profile.workshops.length > 6 && (
              <button onClick={() => setShowWks(!showWks)} className="mb-6 text-sm text-amber-700 hover:text-amber-800 font-semibold bg-white px-5 py-3 rounded-xl border border-amber-200 hover:bg-amber-50 transition-all">
                {showWks ? 'Show Less' : `Show All ${profile.workshops.length}`}
              </button>
            )}

            <h3 className="text-lg font-semibold text-stone-900 mt-6 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              Faculty Development Programs ({profile.facultyDevelopmentPrograms.length})
            </h3>
            <div className="space-y-2 mb-6">
              {fdpVis.map((fdp, i) => (
                <div key={i} className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <p className="text-sm text-stone-800">{fdp}</p>
                  </div>
                </div>
              ))}
            </div>
            {profile.facultyDevelopmentPrograms.length > 3 && (
              <button onClick={() => setShowFdp(!showFdp)} className="mb-6 text-sm text-amber-700 hover:text-amber-800 font-semibold bg-white px-5 py-3 rounded-xl border border-amber-200 hover:bg-amber-50 transition-all">
                {showFdp ? 'Show Less' : `Show All ${profile.facultyDevelopmentPrograms.length}`}
              </button>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
