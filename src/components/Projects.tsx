'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [projectSearch, setProjectSearch] = useState('');

  const yearGroups: Record<string, typeof profile.guidedProjects> = {};
  profile.guidedProjects.forEach(p => {
    const match = p.period.match(/^(\d{4})/);
    const decade = match ? `${match[1][0]}${match[1][1]}${match[1][2]}0s` : 'Other';
    if (!yearGroups[decade]) yearGroups[decade] = [];
    yearGroups[decade].push(p);
  });

  const filteredGroups = useMemo(() => {
    const q = projectSearch.toLowerCase().trim();
    if (!q) return yearGroups;
    const result: Record<string, typeof profile.guidedProjects> = {};
    for (const [decade, projects] of Object.entries(yearGroups)) {
      const filtered = projects.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.level.toLowerCase().includes(q) ||
        p.students.toLowerCase().includes(q) ||
        p.period.toLowerCase().includes(q)
      );
      if (filtered.length > 0) result[decade] = filtered;
    }
    return result;
  }, [projectSearch, yearGroups]);

  const visible = showAll
    ? profile.guidedProjects
    : profile.guidedProjects.slice(0, 10);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#projects-heading', { opacity: 1 });
      gsap.from('#projects-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#projects-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.set('.project-card', { opacity: 1 });
      gsap.from('.project-card', {
        y: 20, duration: 0.4, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '#project-grid', start: 'top 90%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 sm:py-14 md:py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div id="projects-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Mentorship</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Funded Projects</h2>
          <p className="text-stone-700 mt-3 max-w-xl">Guided 150+ students across {profile.stats.projectsGuided}+ UG/PG projects and supervising 2 PhD scholars</p>
        </div>

        <div id="project-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.fundedProjects.map((project, i) => (
            <div key={i} className="project-card bg-stone-100 rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50 hover:shadow-md hover:border-amber-300 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{project.role}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.status === 'On-Going' ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-700'}`}>{project.status}</span>
              </div>
              <h3 className="font-semibold text-stone-900 mb-2 leading-snug">{project.title}</h3>
              <p className="text-sm text-stone-700 mb-4">{project.agency}</p>
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <span className="text-sm font-bold text-amber-700">{project.amount}</span>
                <span className="text-xs text-stone-500">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div id="projects-heading" className="mt-16">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Research Output</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Stats</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { value: profile.stats.papers, label: 'Publications' },
            { value: profile.stats.patents, label: 'Patents' },
            { value: profile.stats.bookChapters, label: 'Book Chapters' },
            { value: profile.stats.fundedProjects, label: 'Funded Projects' },
            { value: profile.stats.citations, label: 'Citations' },
            { value: profile.stats.hIndex, label: 'h-index' },
            { value: profile.stats.i10Index, label: 'i10-index' },
            { value: profile.stats.cumulativeImpactFactor, label: 'Cum. IF' },
          ].map((s, i) => (
            <div key={i} className="bg-stone-100 rounded-xl p-4 sm:p-6 text-center border border-stone-200 shadow-sm shadow-stone-200/50">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-1">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-stone-700">{s.label}</div>
            </div>
          ))}
        </div>

        <div id="projects-heading" className="mt-16">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Student Projects</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Guided UG/PG Projects</h2>
          <p className="text-stone-700 mt-3 max-w-xl">{profile.stats.projectsGuided} projects guided across B.E., M.Tech, M.Sc levels (2017-2025)</p>
        </div>

        {!showAll ? (
          <div className="mt-8 space-y-3">
            {visible.map((proj, i) => (
              <div key={i} className="project-card bg-stone-100 rounded-xl p-5 border border-stone-200 shadow-sm shadow-stone-200/50 hover:border-amber-300 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-stone-900 text-sm leading-snug">{proj.title}</h3>
                    <p className="text-xs text-stone-500 mt-1">{proj.period} &middot; {proj.level} &middot; {proj.students}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="relative max-w-xs">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
              <input type="text" placeholder="Filter projects..." value={projectSearch} onChange={e => setProjectSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400" aria-label="Filter guided projects" />
            </div>
            {Object.entries(filteredGroups).sort(([a], [b]) => {
              const numA = parseInt(a);
              const numB = parseInt(b);
              return numB - numA;
            }).map(([decade, projects]) => (
              <div key={decade}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full">{decade}</span>
                  <span className="text-xs text-stone-400">{projects.length} project{projects.length > 1 ? 's' : ''}</span>
                </div>
                <div className="space-y-3">
                  {projects.map((proj, i) => (
                    <div key={i} className="project-card bg-stone-100 rounded-xl p-5 border border-stone-200 shadow-sm shadow-stone-200/50 hover:border-amber-300 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-stone-900 text-sm leading-snug">{proj.title}</h3>
                          <p className="text-xs text-stone-500 mt-1">{proj.period} &middot; {proj.level} &middot; {proj.students}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {profile.guidedProjects.length > 10 && (
          <button onClick={() => setShowAll(!showAll)} className="mt-6 text-sm text-amber-700 hover:text-amber-800 font-semibold bg-amber-50 px-6 py-3.5 rounded-xl border border-amber-200 hover:bg-amber-100 transition-all min-h-11" aria-expanded={showAll}>
            {showAll ? 'Show Less' : `Show All ${profile.guidedProjects.length} Projects`}
          </button>
        )}
      </div>
    </section>
  );
}
