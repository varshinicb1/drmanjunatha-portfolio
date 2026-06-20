'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

function fmtViews(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'K';
  return String(n);
}

export default function YouTubeVideos() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.yt-heading, .yt-card', { opacity: 1 });
      gsap.from('.yt-heading', {
        y: 40, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.yt-heading', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.from('.yt-card', {
        y: 20, duration: 0.3, stagger: 0.04, ease: 'power2.out',
        scrollTrigger: { trigger: '#yt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="youtube">
      <div className="max-w-6xl mx-auto px-6">
        <div className="yt-heading mb-10">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Teaching & Research</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">YouTube Videos</h2>
          <p className="text-stone-700 mt-3 max-w-2xl">Lecture series, lab demonstrations, and research explanations from Dr. Manjunatha C.</p>
        </div>

        <div id="yt-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {profile.youtubeVideos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-card block bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-300 transition-colors"
            >
              <div className="relative aspect-video bg-stone-200">
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono">{v.duration}</span>
              </div>
              <div className="p-3">
                <p className="text-sm text-stone-800 leading-snug line-clamp-2">{v.title}</p>
                <p className="text-xs text-stone-500 mt-1.5">{fmtViews(v.views)} views</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@DrMANJUNATHACHANNEGOWDA/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700 underline underline-offset-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C.5 7.5.5 12 .5 12s0 4.5.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.8.5 9.3.5 9.3.5s7.5 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.3.5-5.8.5-5.8s0-4.5-.5-5.8zM9.5 15.5V8.5l6.2 3.5-6.2 3.5z"/></svg>
            View all videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
