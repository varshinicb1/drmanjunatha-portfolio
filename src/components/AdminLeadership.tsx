'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';
import { getLogo } from '@/utils/logos';

gsap.registerPlugin(ScrollTrigger);

export default function AdminLeadership() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#admin-heading, .admin-card', { opacity: 1 });
      gsap.from('#admin-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#admin-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.admin-card', {
        y: 30, duration: 0.4, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '#admin-grid', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 sm:py-14 md:py-20" id="admin-leadership">
      <div className="max-w-6xl mx-auto px-6">
        <div id="admin-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Leadership</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Administration &amp; Leadership</h2>
          <p className="text-stone-700 mt-3 max-w-2xl">{profile.titleFull}. Over 20 years bridging academic research with industry-ready solutions across energy, environment, biomedical, and engineering sectors.</p>
        </div>

        <div id="admin-grid" className="space-y-4 mb-16">
          <div className="admin-card bg-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">Centre of Excellence in Nanomaterials and Devices (CND)</h3>
                <p className="text-sm text-stone-600">Head, RV College of Engineering — Rs. 30 Lakhs funded centre</p>
              </div>
            </div>
          </div>

          <div className="admin-card bg-stone-100 rounded-xl p-4 sm:p-6 border border-stone-200">
            <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              Academic Services
            </h3>
            <div className="space-y-2">
              {profile.academicServices.map((svc, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-stone-700">
                  <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{svc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-lg font-semibold text-stone-900 mb-6">Technical Expertise</h3>
          <div className="space-y-3">
            {profile.technicalExpertise.map((item, i) => (
              <div key={i} className="admin-card flex items-start gap-4 bg-stone-100 rounded-xl p-5 border border-stone-200 hover:border-amber-300 transition-colors duration-300">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-stone-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-lg font-semibold text-stone-900 mb-6">Industry Solutions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {profile.industrySolutions.map((sol, i) => (
              <div key={i} className="admin-card bg-stone-100 rounded-xl p-4 sm:p-6 border border-stone-200 hover:border-amber-300 transition-all duration-300 shadow-sm shadow-stone-200/50">
                <h4 className="font-semibold text-stone-900 mb-2">{sol.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-16">
          <div className="bg-stone-100 rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Engagement Models</h3>
            <div className="space-y-3">
              {profile.engagementModels.map((model, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <p className="text-stone-700">{model}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-stone-100 rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Professional Memberships</h3>
            <div className="flex flex-wrap gap-2">
              {profile.memberships.map((m, i) => {
                const name = m.split('(')[0].trim();
                const logo = getLogo(name) || getLogo(m.split('(')[1]?.split(',')[0]?.trim() || '');
                return (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white text-stone-700 border border-stone-200 hover:border-amber-300 transition-colors">
                    {logo && <img src={logo} alt={name + ' logo'} className="h-3.5 w-auto" />}
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
