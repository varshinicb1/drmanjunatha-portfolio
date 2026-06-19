'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Academics', href: '#academics' },
  { label: 'Research', href: '#research' },
  { label: 'Admin & Leadership', href: '#admin-leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm shadow-stone-200/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="text-lg font-bold text-stone-900 bebas-neue-regular tracking-wide">Dr. Manjunatha C</a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-stone-600 hover:text-amber-700 transition-colors uppercase tracking-wider font-medium">{l.label}</a>
          ))}
        </div>

        <button className="md:hidden flex flex-col items-center justify-center gap-1.5 p-3 min-w-11 min-h-11" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} bg-white/95 backdrop-blur-md border-t border-stone-200`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg text-stone-700 hover:text-amber-700 transition-colors">{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
