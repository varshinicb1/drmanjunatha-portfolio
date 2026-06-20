'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function YouTubeVideos() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

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

  const videos = showAll ? profile.youtubeVideos : profile.youtubeVideos.slice(0, 12);

  return (
    <section ref={ref} className="w-full bg-stone-100 py-10 sm:py-14 md:py-20" id="youtube">
      <div className="max-w-6xl mx-auto px-6">
        <div className="yt-heading mb-10">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Teaching & Research</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl bebas-neue-regular text-stone-900 mt-1">YouTube Videos</h2>
          <p className="text-stone-700 mt-3 max-w-2xl">Lecture series, lab demonstrations, and research explanations from Dr. Manjunatha C.</p>
        </div>

        {/* Player modal */}
        {playing && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setPlaying(null)}>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setPlaying(null)} className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/60 rounded-full text-white flex items-center justify-center text-lg hover:bg-black/80">&times;</button>
              <iframe
                src={`https://www.youtube.com/embed/${playing}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              />
            </div>
          </div>
        )}

        <div id="yt-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((v) => (
            <div
              key={v.id}
              className="yt-card group cursor-pointer bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-300 transition-colors"
              onClick={() => setPlaying(v.id)}
            >
              <div className="relative aspect-video bg-stone-200">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono">{v.duration}</span>
              </div>
              <div className="p-3">
                <p className="text-sm text-stone-800 leading-snug line-clamp-2">{v.title}</p>
              </div>
            </div>
          ))}
        </div>

        {profile.youtubeVideos.length > 12 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-amber-700 hover:text-amber-800 font-semibold bg-white px-6 py-3 rounded-xl border border-amber-200 hover:bg-amber-50 transition-all"
            >
              {showAll ? 'Show Less' : `Show All ${profile.youtubeVideos.length} Videos`}
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
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
