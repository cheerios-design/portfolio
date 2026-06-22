'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'Elite Exteriors',
    link: 'https://www.elitexteriorsva.com/blog',
    caseStudy: '/pages/elite-exteriors',
    subtitle: 'Purposeful Copywriting & Inbound Storytelling',
    copy: 'Building trust starts with helping. Researched homeowner concerns and structured an educational content system of blog posts. Wrote search-optimized, empathetic articles that answered real questions and guided readers naturally toward inspection services. Not advertising. Resource building.',
    deliverables: [
      'Inbound Blog Articles',
      'Editorial Planning',
      'Reader-Focused SEO',
      'Layout Coordination',
      'Conversion Copywriting',
      'Trust-Building Strategy',
    ],
  },
  {
    id: 2,
    num: '02',
    title: 'Rising Generation',
    link: 'https://www.instagram.com/risinggeneurope/',
    caseStudy: '/pages/rising-generation',
    subtitle: 'Global Community Engagement & Cross-Cultural Storytelling',
    copy: 'Connecting diverse audiences requires authentic perspectives. Conducted interviews with international students and mentors to share their personal journeys. Designed social media campaigns and newsletter templates that unified chapter communication and drove registration for global events.',
    deliverables: [
      'Student & Mentor Interviews',
      'Multi-Cultural Content',
      'Global Engagement',
      'Newsletter Campaigns',
      'Social Storytelling',
      'Team Collaboration',
    ],
  },
  {
    id: 3,
    num: '03',
    title: 'BAIBÜ Cinema & DMS',
    link: 'https://www.instagram.com/aibusinema/',
    caseStudy: '/pages/baibu-cinema',
    subtitle: 'Creative Brand Storytelling & Multichannel Publishing',
    copy: 'Visual identity is the bridge between a project and its community. Crafted a friendly brand guidelines system, writing student reviews and design-led updates. Coordinated visual layouts with design teams to distribute content across social platforms, turning a small campus club into a thriving media hub.',
    deliverables: [
      'Brand Identity Guidelines',
      'Cohesive Layout Design',
      'Cinema Review Writing',
      'Visual Standards',
      'Multichannel Publishing',
      'Student Engagement',
    ],
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '72px',
        paddingBottom: '72px',
      }}
    >
      <div
        className="grid-project"
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr 1fr',
          gap: '56px',
          alignItems: 'start',
        }}
      >
        {/* ── Outlined number ── */}
        <div
          aria-hidden
          style={{
            fontSize: 'clamp(4.5rem, 9vw, 11rem)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            letterSpacing: '-0.05em',
            lineHeight: 0.88,
            userSelect: 'none',
            paddingTop: '8px',
          }}
        >
          {project.num}
        </div>

        {/* ── Title + description ── */}
        <div>
          <p style={{
            fontFamily: 'var(--font-accent)', fontSize: '0.62rem',
            color: 'var(--color-accent)', letterSpacing: '0.22em',
            textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700,

          }}>
            {project.subtitle}
          </p>

          <h3 style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 3rem)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase',
            color: 'white',
            marginBottom: '22px',
            lineHeight: 1.08,
          }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
            >
              {project.title}
            </a>
          </h3>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.45)', lineHeight: 1.85,
            maxWidth: '400px',
          }}>
            {project.copy}
          </p>

          <a
            href={project.caseStudy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-accent)',
              fontSize: '0.7rem',
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              marginTop: '18px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-primary)'}
          >
            Case Study &gt;
          </a>
        </div>

        {/* ── Deliverables list ── */}
        <div>
          {project.deliverables.map((item, i) => (
            <div
              key={item}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '13px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.62)',
              }}>
                {item}
              </span>
              <span style={{
                fontFamily: 'var(--font-accent)', fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.18)', letterSpacing: '0.1em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="work"
      className="section-pad"
      style={{ background: 'var(--color-base)', padding: '8rem 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        {/* Section header */}
        <div ref={ref}>
          <div className="section-label">
            <span>Proof of System</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 7rem)',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '16px',
            }}
          >
            Deployed Work
          </motion.h2>
        </div>

        {/* Project rows */}
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
