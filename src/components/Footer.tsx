'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    gsap.set('#footer-text', { opacity: 1 });
    gsap.from('#footer-text', {
      y: 10, opacity: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '#footer-text', start: 'top 90%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <>
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-amber-700 text-white shadow-lg flex items-center justify-center hover:bg-amber-600 transition-all" aria-label="Scroll to top">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      )}
      <section className="bg-white text-black border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-stone-200 h-full flex flex-col justify-end py-10 md:pr-8">
            <p className="text-md leading-7 mt-4 text-stone-500">
              {profile.fullName} is an Associate Professor at RV College of Engineering, specializing in nanomaterials synthesis, electrochemical energy storage, and sensor applications.
            </p>
          </div>
          <div className="w-full md:w-1/4 py-10 md:pr-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <h1 className="text-sm uppercase font-semibold text-stone-900">Quick Links</h1>
            <ul className="text-md uppercase text-stone-500">
              {['Home', 'Research', 'Publications', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link} className="mt-1">
                  <a href={link === 'Home' ? '/' : `#${link.toLowerCase()}`} className="hover:text-amber-700 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 py-10 md:pr-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <h1 className="text-sm uppercase font-semibold text-stone-900">Contact</h1>
            <div className="text-md text-stone-500">
              <p className="font-bold uppercase mb-2 text-xs text-stone-700">Email</p>
              <a href={`mailto:${profile.email}`} className="hover:text-amber-700 transition-colors text-sm">{profile.email}</a>
              <p className="font-bold uppercase mt-4 mb-2 text-xs text-stone-700">Location</p>
              <p className="text-sm">{profile.address}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 py-10 flex flex-col justify-between">
            <h1 className="text-sm uppercase font-semibold text-stone-900">Institution</h1>
            <div className="text-md text-stone-500">
              <p className="font-medium">{profile.institution}</p>
              <p className="text-sm text-stone-700 mt-1">{profile.department}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black flex justify-center items-center py-4 border-t border-stone-200">
        <p className="text-xs text-stone-400 tracking-wider" id="footer-text">
          &copy; {new Date().getFullYear()} Dr. Manjunatha Channegowda
        </p>
      </section>
    </>
  );
}
