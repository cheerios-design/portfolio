'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* Each sentence is its own animated unit */
const HEADLINE = [
  { text: "I don't create content.", fontWeight: '200', color: 'white' },
  { text: 'I build systems that make visibility inevitable.', fontWeight: '800', color: 'var(--color-primary)' },
  { text: 'Most brands confuse posting with strategy.', fontWeight: '200', color: 'white' },
  { text: 'The gap between those two things is where I work.', fontWeight: '800', color: 'var(--color-accent)' },
];

const SENTENCE_VARIANTS = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const BLOCK_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.64 + i * 0.14, // start after the last sentence
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{ background: 'var(--color-surface)', padding: '8rem 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        {/* Section label */}
        <motion.div
          className="section-label"
          custom={0}
          variants={BLOCK_VARIANTS}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ '--delay-override': '0' } as React.CSSProperties}
        >
          <span>Mandate</span>
        </motion.div>

        {/* ── Headline: sentence-by-sentence reveal ── */}
        <div
          role="heading"
          aria-level={2}
          style={{
            fontSize: 'clamp(2.2rem, 4.8vw, 5.2rem)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase',
            letterSpacing: '-0.025em',
            lineHeight: 1.12,
            marginBottom: '5rem',
          }}
        >
          {HEADLINE.map((sentence, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={SENTENCE_VARIANTS}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                display: 'block',
                color: sentence.color,
                fontWeight: sentence.fontWeight,
              }}
            >
              {sentence.text}
            </motion.span>
          ))}
        </div>

        {/* ── Two-column bottom ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Body copy */}
          <motion.p
            custom={0}
            variants={BLOCK_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.48)', lineHeight: 1.9,
              borderLeft: '2px solid var(--color-primary)',
              paddingLeft: '24px',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            I operate at the intersection of technical infrastructure and narrative strategy.
            If your content plan doesn&apos;t have a documented architecture with defensible KPIs,
            you&apos;re not executing a strategy—you&apos;re decorating.
            I build the frameworks. The content compounds. The results are measurable,
            scalable, and built to outlast any single campaign.
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={1}
            variants={BLOCK_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <a
              href="#work"
              id="cta-view-systems"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-accent)', fontSize: '0.68rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.22)',
                padding: '15px 34px', color: 'white',
                fontWeight: 600,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)';
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
            >
              View the Systems
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
