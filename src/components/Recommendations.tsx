'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

const IconBattery = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="12" width="24" height="16" rx="3" stroke="#d97706" strokeWidth="1.8" fill="#fef3c7"/>
    <rect x="32" y="17" width="3" height="6" rx="1" stroke="#d97706" strokeWidth="1.5" fill="#fbbf24"/>
    <rect x="11" y="15" width="6" height="10" rx="1" fill="#34d399" opacity="0.8"/>
    <rect x="18" y="15" width="5" height="10" rx="1" fill="#fbbf24" opacity="0.8"/>
    <rect x="24" y="15" width="3" height="10" rx="1" fill="#f87171" opacity="0.8"/>
    <text x="14" y="35" fontSize="3" fill="#d97706" fontWeight="bold" fontFamily="monospace">+</text>
    <text x="27" y="35" fontSize="3" fill="#d97706" fontWeight="bold" fontFamily="monospace">-</text>
  </svg>
);

const IconEnergyConversion = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="15" stroke="#d97706" strokeWidth="1.5" fill="#fef3c7" opacity="0.5"/>
    <polygon points="22,8 14,22 21,22 18,32 28,18 21,18" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    <circle cx="13" cy="28" r="3" fill="#93c5fd" stroke="#3b82f6" strokeWidth="0.8" opacity="0.7"/>
    <text x="10" y="30" fontSize="3" fill="#2563eb" fontWeight="bold">H₂</text>
    <circle cx="27" cy="10" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="0.8" opacity="0.7"/>
    <text x="24" y="12" fontSize="3" fill="#dc2626" fontWeight="bold">O₂</text>
  </svg>
);

const IconNanoSynthesis = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <path d="M8 30 L8 10 Q8 8 10 8 L30 8 Q32 8 32 10 L32 20 L20 20 L20 30 Z" stroke="#d97706" strokeWidth="1.5" fill="#fef3c7"/>
    <circle cx="22" cy="15" r="3" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" opacity="0.9"/>
    <circle cx="16" cy="12" r="2" fill="#34d399" stroke="#10b981" strokeWidth="0.8" opacity="0.9"/>
    <circle cx="24" cy="22" r="2.5" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.9"/>
    <circle cx="18" cy="20" r="1.5" fill="#f87171" stroke="#ef4444" strokeWidth="0.6" opacity="0.9"/>
    <line x1="10" y1="6" x2="10" y2="4" stroke="#d97706" strokeWidth="1" strokeLinecap="round"/>
    <line x1="30" y1="6" x2="30" y2="4" stroke="#d97706" strokeWidth="1" strokeLinecap="round"/>
    <path d="M6 10 L4 10 M6 14 L4 14 M6 18 L4 18" stroke="#d97706" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
);

const IconElectroSensor = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="22" width="28" height="4" rx="1" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    <rect x="6" y="26" width="28" height="3" rx="1" fill="#92400e" stroke="#d97706" strokeWidth="0.8"/>
    <line x1="16" y1="14" x2="16" y2="22" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="24" y1="14" x2="24" y2="22" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="20" y1="10" x2="20" y2="14" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="20" cy="8" r="2.5" fill="#34d399" stroke="#10b981" strokeWidth="0.8" opacity="0.9"/>
    <circle cx="14" cy="10" r="1.5" fill="#fca5a5" stroke="#ef4444" strokeWidth="0.6" opacity="0.7"/>
    <circle cx="26" cy="10" r="1.5" fill="#93c5fd" stroke="#3b82f6" strokeWidth="0.6" opacity="0.7"/>
    <line x1="10" y1="30" x2="10" y2="36" stroke="#d97706" strokeWidth="1" strokeLinecap="round"/>
    <line x1="30" y1="30" x2="30" y2="36" stroke="#d97706" strokeWidth="1" strokeLinecap="round"/>
    <rect x="8" y="34" width="4" height="2" rx="0.5" fill="#d97706" opacity="0.6"/>
    <rect x="28" y="34" width="4" height="2" rx="0.5" fill="#d97706" opacity="0.6"/>
  </svg>
);

const IconGasSensor = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="20" width="28" height="10" rx="2" stroke="#d97706" strokeWidth="1.5" fill="#fef3c7"/>
    <rect x="10" y="23" width="20" height="4" rx="1" fill="#fbbf24" opacity="0.6"/>
    <line x1="12" y1="25" x2="16" y2="25" stroke="#d97706" strokeWidth="0.8"/>
    <line x1="18" y1="25" x2="22" y2="25" stroke="#d97706" strokeWidth="0.8"/>
    <line x1="24" y1="25" x2="28" y2="25" stroke="#d97706" strokeWidth="0.8"/>
    <line x1="20" y1="12" x2="20" y2="20" stroke="#d97706" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="14" cy="10" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="0.8" opacity="0.8"/>
    <circle cx="26" cy="9" r="2.5" fill="#93c5fd" stroke="#3b82f6" strokeWidth="0.8" opacity="0.8"/>
    <circle cx="20" cy="6" r="2" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.8"/>
    <path d="M6 30 L4 34" stroke="#d97706" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M34 30 L36 34" stroke="#d97706" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
);

const IconPhotocatalysis = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <path d="M20 4 L22 10 L28 10 L23 14 L25 20 L20 16 L15 20 L17 14 L12 10 L18 10 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    <path d="M12 30 Q20 22 28 30" stroke="#d97706" strokeWidth="1.5" fill="#fef3c7" opacity="0.5"/>
    <circle cx="20" cy="28" r="3" fill="#34d399" stroke="#10b981" strokeWidth="0.8" opacity="0.9"/>
    <circle cx="14" cy="32" r="2" fill="#fca5a5" stroke="#ef4444" strokeWidth="0.6" opacity="0.7"/>
    <circle cx="26" cy="32" r="2" fill="#93c5fd" stroke="#3b82f6" strokeWidth="0.6" opacity="0.7"/>
    <line x1="14" y1="6" x2="14" y2="10" stroke="#d97706" strokeWidth="0.6" strokeLinecap="round"/>
    <line x1="26" y1="6" x2="26" y2="10" stroke="#d97706" strokeWidth="0.6" strokeLinecap="round"/>
    <line x1="20" y1="36" x2="20" y2="40" stroke="#d97706" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  battery: <IconBattery />,
  zap: <IconEnergyConversion />,
  atom: <IconNanoSynthesis />,
  activity: <IconElectroSensor />,
  wind: <IconGasSensor />,
  sun: <IconPhotocatalysis />,
};

export default function Recommendations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#research-heading, .research-card', { opacity: 1 });
      gsap.from('#research-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '#research-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.research-card', {
        y: 30, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '#research-grid', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 sm:py-14 md:py-20" id="research">
      <div className="max-w-6xl mx-auto px-6">
        <div id="research-heading" className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Expertise</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">Research Areas</h2>
        </div>

        <div id="research-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.researchAreas.map((area, i) => (
            <div key={i} className="research-card bg-stone-100 rounded-xl p-7 border border-stone-200 shadow-sm shadow-stone-200/50 hover:shadow-md hover:border-amber-300 transition-all duration-300">
              <div className="mb-4">{iconMap[area.icon]}</div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{area.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
