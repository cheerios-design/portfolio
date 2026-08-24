'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: 1, num: '01',
    title: 'Elite Exteriors',
    link: 'https://www.elitexteriorsva.com/blog',
    caseStudy: '/pages/elite-exteriors',
    subtitle: 'Purposeful Copywriting & Inbound Storytelling',
    copy: 'Building trust starts with helping. Researched homeowner concerns and structured an educational content system. Wrote search-optimized, empathetic articles that answered real questions and guided readers naturally toward services.',
    deliverables: ['Inbound Blog Articles', 'Editorial Planning', 'Reader-Focused SEO', 'Layout Coordination', 'Conversion Copywriting', 'Trust-Building Strategy'],
  },
  {
    id: 2, num: '02',
    title: 'Rising Generation',
    link: 'https://www.instagram.com/risinggeneurope/',
    caseStudy: '/pages/rising-generation',
    subtitle: 'Global Community Engagement & Cross-Cultural Storytelling',
    copy: 'Connecting diverse audiences requires authentic perspectives. Conducted interviews and designed social media campaigns that unified chapter communication and drove registration for global events.',
    deliverables: ['Student & Mentor Interviews', 'Multi-Cultural Content', 'Global Engagement', 'Newsletter Campaigns', 'Social Storytelling', 'Team Collaboration'],
  },
  {
    id: 3, num: '03',
    title: 'BAIBÜ Cinema & DMS',
    link: 'https://www.instagram.com/aibusinema/',
    caseStudy: '/pages/baibu-cinema',
    subtitle: 'Creative Brand Storytelling & Multichannel Publishing',
    copy: 'Visual identity is the bridge between a project and its community. Crafted brand guidelines, writing reviews and design-led updates, turning a campus club into a thriving media hub.',
    deliverables: ['Brand Identity Guidelines', 'Cohesive Layout Design', 'Cinema Review Writing', 'Visual Standards', 'Multichannel Publishing', 'Student Engagement'],
  },
];

const PuzzleTileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 13 4 15 4C17 4 18 5 18 7V9C18 9 20 8 22 10C24 12 24 14 22 16C20 18 18 17 18 17V19C18 21 17 22 15 22H13C13 22 14 24 12 24C10 24 11 22 11 22H9C7 22 6 21 6 19V17C6 17 4 18 2 16C0 14 0 12 2 10C4 8 6 9 6 9V7C6 5 7 4 9 4C11 4 12 2 12 2Z" fill="var(--color-primary, #FF4600)"/>
  </svg>
);

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative w-full overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12"
      style={{
        backgroundColor: 'var(--color-surface, #242424)',
        borderRadius: 'var(--radius-tile, 20px)',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(24px, 4vw, 48px)'
      }}
    >
      <div 
        className="absolute top-4 right-6 pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-heading, "Space Grotesk")',
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 800,
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.08)',
          margin: 0
        }}
      >
        {project.num}
      </div>

      <div className="flex-1 flex flex-col justify-start z-10 relative">
        <span 
          className="uppercase mb-4"
          style={{
            fontFamily: 'var(--font-accent, "Montserrat")',
            fontSize: '0.62rem',
            color: 'var(--color-primary, #FF4600)',
            letterSpacing: '0.22em',
            fontWeight: 600
          }}
        >
          {project.subtitle}
        </span>
        
        <h3 
          className="mb-6"
          style={{
            fontFamily: 'var(--font-heading, "Space Grotesk")',
            fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)',
            color: '#FFFFFF',
            fontWeight: 700,
            lineHeight: 1.1
          }}
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            {project.title}
          </a>
        </h3>
        
        <p 
          className="mb-8 max-w-xl"
          style={{
            fontFamily: 'var(--font-body, "Inter")',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6
          }}
        >
          {project.copy}
        </p>

        <a 
          href={project.caseStudy}
          className="inline-block mt-auto uppercase hover:opacity-80 transition-opacity"
          style={{
            fontFamily: 'var(--font-accent, "Montserrat")',
            fontSize: '0.7rem',
            color: 'var(--color-primary, #FF4600)',
            fontWeight: 600,
            letterSpacing: '0.1em'
          }}
        >
          Case Study &gt;
        </a>
      </div>

      <div className="flex-1 w-full md:w-auto md:max-w-md z-10 mt-8 md:mt-0 flex flex-col justify-center">
        <div className="flex flex-col">
          {project.deliverables.map((item: string, i: number) => (
            <div 
              key={i} 
              className="flex items-center justify-between py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-body, "Inter")',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                {item}
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-accent, "Montserrat")',
                  fontSize: '0.6rem',
                  color: 'rgba(255,255,255,0.2)',
                  fontWeight: 500
                }}
              >
                {(i + 1).toString().padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsGrid() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: 'var(--color-base, #1A1A1A)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span 
              className="section-label block mb-6 uppercase"
              style={{
                fontFamily: 'var(--font-accent, "Montserrat")',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.15em'
              }}
            >
              // PROOF OF SYSTEM
            </span>
            <h2 
              className="uppercase m-0"
              style={{
                fontFamily: 'var(--font-heading, "Space Grotesk")',
                fontSize: 'clamp(2.8rem, 6vw, 7rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 0.9,
                letterSpacing: '-0.02em'
              }}
            >
              Selected Work
            </h2>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <PuzzleTileIcon />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <React.Fragment key={project.id}>
              <ProjectCard project={project} index={idx} />
              {idx < PROJECTS.length - 1 && (
                <div className="w-full flex justify-center py-2 opacity-50 md:hidden">
                  <PuzzleTileIcon />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
