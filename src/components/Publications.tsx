'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';


gsap.registerPlugin(ScrollTrigger);

const statusColor: Record<string, string> = {
  Granted: 'bg-emerald-50 text-emerald-700',
  Published: 'bg-amber-50 text-amber-700',
  Filed: 'bg-stone-100 text-stone-700',
};

const qColor: Record<string, string> = {
  Q1: 'bg-green-100 text-green-700',
  Q2: 'bg-blue-100 text-blue-700',
  Q3: 'bg-amber-100 text-amber-700',
  Q4: 'bg-stone-100 text-stone-600',
};

const logoExts = ['jpg', 'gif', 'webp', 'png'];

function JournalLogo({ num, journal }: { num: number; journal?: string }) {
  const [idx, setIdx] = useState(0);
  if (idx >= logoExts.length) return null;
  return (
    <img src={`/journal-logos/${num}.${logoExts[idx]}`} alt={journal ? `${journal} logo` : ''} title={journal || ''}
      className="h-7 w-auto rounded border border-stone-200 bg-white"
      onError={() => setIdx(i => i + 1)} />
  );
}

const coverImages = [
  { src: '/covers/aaembp.2023.5.issue-9.xlargecover.jpg', label: 'ACS Applied Electronic Materials cover' },
  { src: '/covers/ChemSusChem - 2024 - Manjunatha - Advances in Hierarchical Inorganic Nanostructures for Efficient Solar Energy Harvesting-1.png', label: 'ChemSusChem cover' },
  { src: '/covers/enfuem.2023.37.issue-19.xlargecover.jpg', label: 'ACS Energy & Fuels cover' },
  { src: '/smll.v21.42.cover.jpg', label: 'Small journal cover' },
  { src: '/1-s2.0-S0167577X26X20080-cov150h.gif', label: 'Materials Research Bulletin cover' },
  { src: '/1-s2.0-S0921510725X00155-cov200h.gif', label: 'Materials Science & Engineering B cover' },
];

export default function Publications() {
  const sectionRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const yearGroups: Record<number, typeof profile.fullPublications> = {};
  profile.fullPublications.forEach(p => {
    if (!yearGroups[p.year]) yearGroups[p.year] = [];
    yearGroups[p.year].push(p);
  });

  const years = Object.keys(yearGroups).map(Number).sort((a, b) => b - a);

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const entries = Object.entries(yearGroups) as [string, typeof profile.fullPublications][];
    let filtered = selectedYear === null ? entries : entries.filter(([y]) => Number(y) === selectedYear);
    if (query) {
      filtered = filtered.map(([y, pubs]) => [y, pubs.filter(p =>
        p.title.toLowerCase().includes(query) || p.journal.toLowerCase().includes(query) || (p.doi && p.doi.toLowerCase().includes(query))
      )] as [string, typeof profile.fullPublications]).filter(([, p]) => p.length > 0);
    }
    const logo: typeof filtered = [], nologo: typeof filtered = [];
    for (const [y, pubs] of filtered) {
      const lp = pubs.filter(p => p.num <= 56), np = pubs.filter(p => p.num > 56);
      if (lp.length) logo.push([y, lp]);
      if (np.length) nologo.push([y, np]);
    }
    const desc = (a: typeof filtered[0], b: typeof filtered[0]) => Number(b[0]) - Number(a[0]);
    logo.sort(desc); nologo.sort(desc);
    return [...logo, ...nologo];
  }, [searchQuery, selectedYear, yearGroups]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#pubs-heading, .pub-card, .patent-card', { opacity: 1 });
      gsap.from('#pubs-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#pubs-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.pub-card', {
        y: 24, duration: 0.4, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '#pubs-list', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.patent-card', {
        y: 24, duration: 0.4, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '#patents-list', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="publications">
      <div className="max-w-6xl mx-auto px-6">
        <div id="pubs-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Research Output</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Publications & Patents</h2>
        </div>

        <div className="mb-12">
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wider mb-4">Featured Journal Covers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {coverImages.map((img, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden bg-white border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold text-stone-900">Full Publication List ({profile.fullPublications.length} papers, 2012-2026)</h3>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
                <input type="text" placeholder="Search papers..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="w-full sm:w-56 pl-9 pr-3 py-2 text-sm rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400" aria-label="Search publications" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Filter by year">
            <button onClick={() => setSelectedYear(null)} role="tab" aria-selected={selectedYear === null}
              className={`text-sm px-4 py-2.5 rounded-full font-medium transition-colors ${selectedYear === null ? 'bg-amber-700 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300'}`}>All</button>
            {years.map(year => (
              <button key={year} onClick={() => setSelectedYear(year)} role="tab" aria-selected={selectedYear === year}
                className={`text-sm px-4 py-2.5 rounded-full font-medium transition-colors ${selectedYear === year ? 'bg-amber-700 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300'}`}>
                {year} <span className="opacity-60">({yearGroups[year].length})</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="max-h-96 overflow-y-auto" role="list" aria-label="Publications list">
              {filteredData.length === 0 ? (
                <p className="px-5 py-8 text-sm text-stone-400 text-center">No publications match your search.</p>
              ) : filteredData.map(([year, pubs]) => (
                <div key={year} className="border-b border-stone-100 last:border-b-0">
                  <div className="bg-stone-50 px-5 py-2 font-semibold text-sm text-amber-800 sticky top-0 flex items-center justify-between">
                    <span>{year}</span>
                    <span className="text-xs font-normal text-stone-400">{pubs.length} paper{pubs.length > 1 ? 's' : ''}</span>
                  </div>
                  {pubs.map((p, i) => (
                    <div key={i} className="px-5 py-3 hover:bg-stone-50 border-b border-stone-50 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <span className="text-xs text-stone-400 font-mono w-8 flex-shrink-0 text-right pt-0.5">{p.num}.</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-stone-900 leading-snug">{p.title}</p>
                          <p className="text-xs text-stone-500 mt-0.5">{p.journal}</p>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            {p.num <= 56 && <JournalLogo num={p.num} journal={p.journal} />}
                            {p.q && (
                              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${qColor[p.q] || ''}`}>{p.q}</span>
                            )}
                            {p.doi && <span className="text-[10px] text-amber-700 font-mono">DOI: {p.doi}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-6">Journal Publications</h3>
            <div id="pubs-list" className="space-y-3">
              {profile.keyPublications.map((pub, i) => (
                <div key={i} className="pub-card bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-800 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {pub.year}
                      </span>
                      <p className="text-sm text-stone-700 leading-relaxed">{pub.highlight}</p>
                    </div>
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-amber-800">{pub.count}</div>
                        <div className="text-[8px] uppercase tracking-wider text-stone-700">Papers</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-6">Patents</h3>
            <div id="patents-list" className="space-y-3">
              {profile.patents.map((patent, i) => (
                <div key={i} className="patent-card bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-start gap-3 mb-2 flex-wrap">
                    <span className={`text-xs font-semibold px-3 py-0.5 rounded-full ${statusColor[patent.status] || ''}`}>
                      {patent.status}
                    </span>
                    <span className="text-xs text-stone-500 font-mono">{patent.applicationNumber}</span>
                  </div>
                  <h4 className="text-sm font-medium text-stone-900 leading-snug mb-1">{patent.title}</h4>
                  <div className="text-xs text-stone-700 mb-2">{patent.date}</div>
                  {patent.certificateImage && (
                    <img src={patent.certificateImage} alt="Patent certificate" className="w-full mt-2 rounded-lg border border-stone-200 max-h-48 object-contain bg-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-stone-900 mb-6">Book Chapters</h3>
          <div className="space-y-3">
            {profile.bookChapters.map((ch, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-stone-900 mb-0.5">{ch.title}</p>
                    <p className="text-xs text-stone-700">{ch.book} — {ch.publisher} ({ch.year})</p>
                    {ch.doi && <p className="text-xs text-amber-700 mt-0.5 font-mono">DOI: {ch.doi}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
