'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#contact-heading, .contact-item', { opacity: 1 });
      gsap.from('#contact-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#contact-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.contact-item', {
        y: 30, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '#contact-items', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div id="contact-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Contact</h2>
          <p className="text-stone-700 mt-3 max-w-xl">Open to collaborations in energy storage, hydrogen technologies, advanced materials, sensors, and nanotechnology applications.</p>
        </div>

        <div id="contact-items" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          <div className="contact-item bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50 hover:border-amber-300 transition-all duration-300">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <h3 className="font-semibold text-stone-900 mb-1">Academic Email</h3>
            <a href={`mailto:${profile.email}`} className="text-sm text-amber-700 hover:underline">{profile.email}</a>
          </div>
          <div className="contact-item bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50 hover:border-amber-300 transition-all duration-300">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <h3 className="font-semibold text-stone-900 mb-1">Industry Email</h3>
            <a href={`mailto:${profile.industryEmail}`} className="text-sm text-amber-700 hover:underline">{profile.industryEmail}</a>
          </div>
          <div className="contact-item bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50 hover:border-amber-300 transition-all duration-300">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
            <a href={`tel:${profile.phone}`} className="text-sm text-amber-700 hover:underline">{profile.phone}</a>
          </div>
          <div className="contact-item bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm shadow-stone-200/50 hover:border-amber-300 transition-all duration-300">
            <svg className="w-7 h-7 text-amber-700 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
            </svg>
            <h3 className="font-semibold text-stone-900 mb-1">YouTube</h3>
            <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-700 hover:underline break-all">Dr. Manjunatha C</a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-stone-200 shadow-sm shadow-stone-200/50">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="font-semibold text-stone-900 mb-3">
                <svg className="w-5 h-5 text-amber-700 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Location
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed pl-7">{profile.address}</p>
              <h3 className="font-semibold text-stone-900 mt-6 mb-3">
                <svg className="w-5 h-5 text-amber-700 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Institution
              </h3>
              <p className="text-sm text-stone-500 pl-7">{profile.institution}</p>
              <p className="text-sm text-stone-700 pl-7">{profile.department}</p>
              <h3 className="font-semibold text-stone-900 mt-6 mb-3">
                <svg className="w-5 h-5 text-amber-700 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
                Profiles
              </h3>
              <div className="pl-7 space-y-1.5">
                {profile.orcid && (
                  <a href={`https://orcid.org/${profile.orcid}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-amber-700 hover:underline">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-3.903-3.722h-2.416z"/></svg>
                    ORCID: {profile.orcid}
                  </a>
                )}
                {profile.googleScholar && (
                  <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-amber-700 hover:underline">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                    Google Scholar
                  </a>
                )}
                {profile.researchGate && (
                  <a href={profile.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-amber-700 hover:underline">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 14.308a9.403 9.403 0 0 0-1.284-1.682c-1.311-1.434-3.182-1.953-4.909-2.022 1.05-1.063 2.367-1.335 3.456-1.784 1.306-.539 2.563-1.565 2.912-2.739.246-.818.182-1.835-.303-2.82-.735-1.498-2.334-2.094-3.871-2.229-1.903-.166-3.825.345-5.72.345-1.348 0-3.048-.206-4.125.345-.472.242-.69.83-.69.943 0 .166.3.207.345.299.184.368.483.483.897.575.529.12 1.242.207 1.563.529.276.276.276.92.276 1.242v12.879c0 1.242-.092 1.472.897 1.702.23.069.437.161.437.391 0 .345-.897.299-1.242.299h-4.37c-.575 0-.989.023-1.104-.207-.276-.483-.184-1.426-.184-2.025 0-5.855.023-11.733.023-17.588 0-.667-.023-1.059.207-1.472.506-.875 1.702-1.012 2.759-1.012h10.855c1.426 0 2.759.184 3.733.943.897.713 1.334 1.793 1.334 2.94 0 3.114-2.069 6.183-5.149 6.999-1.104.299-3.137.483-4.37.345 1.472-1.426 3.137-2.713 3.871-4.646.23-.598.345-1.242.345-1.886 0-2.069-1.426-3.457-3.389-3.595-1.334-.092-2.805.207-4.003.391-.805.115-1.058.667-1.058 1.426v4.049c0 1.012.16 1.426.943 1.426.361 0 1.059-.138 1.334-.345 1.012-.713 1.655-2.575 3.137-2.667.529-.023.989.092 1.334.345.805.506.805 1.518.805 2.254v3.182c0 1.426.575 2.575 1.748 3.251 1.426.805 2.989 1.173 4.599 1.173 2.667 0 5.012-1.173 5.012-3.87-.184-2.575-2.022-3.549-4.049-4.278z"/></svg>
                    ResearchGate
                  </a>
                )}
                {profile.linkedinUrl && (
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-amber-700 hover:underline">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-3">
                <svg className="w-5 h-5 text-amber-700 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                Recognition
              </h3>
              {profile.topTwoPercent && (
                <div className="flex items-center gap-2 text-sm text-stone-700 mb-2">
                  <svg className="w-4 h-4 text-amber-700 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Top 2% Scientists Globally (2023)
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-stone-700 mb-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>
                {profile.stats.papers}+ publications, {profile.stats.patents} patents
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-700 mb-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
                {profile.nanomaterialSystems}+ nanomaterial systems
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-700">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                {profile.linkedin} — {profile.linkedinConnections}
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-700 mt-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                {profile.alumniNetwork}
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-stone-900 mb-2">Collaboration Note</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Actively seeking strategic collaborations with industry leaders, R&D organizations, and investors in energy storage, hydrogen technologies, advanced materials, sensors, and nanotechnology.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <h3 className="font-semibold text-stone-900">Downloads</h3>
                {profile.cvPdf && (
                  <a href={profile.cvPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-amber-700 hover:underline border border-amber-200 hover:border-amber-400 rounded-lg px-4 py-3 transition-colors min-h-11">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Download CV (PDF)
                  </a>
                )}
                {profile.industryPdf && (
                  <a href={profile.industryPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-amber-700 hover:underline border border-amber-200 hover:border-amber-400 rounded-lg px-4 py-3 transition-colors min-h-11">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Download Industry Profile (PDF)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-stone-200 shadow-sm shadow-stone-200/50">
            <h3 className="font-semibold text-stone-900 mb-4 text-lg">Send a Message</h3>
            <form action={`mailto:${profile.email}`} method="GET" encType="text/plain" className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="subject" placeholder="Subject" required className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-amber-400 min-h-11" />
              <input type="text" name="cc" placeholder="Your email (optional)" className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-amber-400 min-h-11" />
              <textarea name="body" placeholder="Your message..." rows={4} required className="sm:col-span-2 w-full px-4 py-3 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-amber-400 min-h-[120px]"></textarea>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-600 transition-colors min-h-11">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Send via Email
              </button>
            </form>
            <p className="text-xs text-stone-400 mt-3">This will open your default email client with the pre-filled message.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
