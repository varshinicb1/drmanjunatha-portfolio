'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import AcademicActivities from '@/components/AcademicActivities';
import Recommendations from '@/components/Recommendations';
import ResearchGuidance from '@/components/ResearchGuidance';
import Publications from '@/components/Publications';

import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import CoverShowcase from '@/components/CoverShowcase';
import AdminLeadership from '@/components/AdminLeadership';
import SectionPillar from '@/components/SectionPillar';
import GetInTouch from '@/components/GetInTouch';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const NanoBackground = dynamic(() => import('@/components/NanoBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <SmoothScroll>
        <NanoBackground />
        <div id="main-content" className="relative" style={{ isolation: 'isolate', zIndex: 10 }}>
          <Hero />
          <div className="section-divider" />

          {/* ─── Pillar 1: Academics ─── */}
          <SectionPillar num="01" id="academics" title="Academics" subtitle="Teaching career, education, conferences, workshops, and faculty development programs." />
          <Education />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <AcademicActivities />
          <div className="section-divider" />

          {/* ─── Pillar 2: Research ─── */}
          <SectionPillar num="02" id="research" title="Research" subtitle="Research areas, publications, patents, funded projects, guided projects, and awards." />
          <CoverShowcase />
          <div className="section-divider" />
          <Recommendations />
          <div className="section-divider" />
          <ResearchGuidance />
          <div className="section-divider" />
          <Publications />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Awards />
          <div className="section-divider" />

          {/* ─── Pillar 3: Administration & Leadership ─── */}
          <SectionPillar num="03" title="Administration &amp; Leadership" subtitle="Centre leadership, academic services, industry consultancy, and professional memberships." />
          <AdminLeadership />

          <GetInTouch />
          <div className="section-divider" />
          <Contact />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
