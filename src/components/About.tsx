'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const services = [
    {
      title: 'Brand Identity',
      description: 'Comprehensive brand identity systems that ensure consistency across all platforms. Visual languages that speak volumes.',
    },
    {
      title: 'Web Design & Development',
      description: 'High-performance websites built with cutting-edge tech. Fast, responsive, and built to scale.',
    },
    {
      title: 'Strategy & Consulting',
      description: 'Strategic guidance aligning your digital presence with business goals. Navigate the digital landscape with confidence.',
    },
    {
      title: 'Asset Management',
      description: 'Centralized asset management ensuring brand materials are always accessible, organized, and on-brand.',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your digital assets running smoothly. Here for the long haul, not just the launch.',
    },
    {
      title: 'Digital Design',
      description: 'User-centered digital experiences combining stunning aesthetics with intuitive functionality.',
    },
  ];

  const PuzzleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.5rem' }}>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="#FF4600" strokeWidth="2" />
      <path d="M12 2V8C12 9.10457 11.1046 10 10 10H2" stroke="#FF4600" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="#FF4600" />
    </svg>
  );

  return (
    <section 
      id="about" 
      ref={containerRef}
      style={{
        backgroundColor: 'var(--color-surface-light, #F5F0EB)',
        color: 'var(--color-base, #1A1A1A)',
        padding: '8rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ marginBottom: '5rem' }}
        >
          <motion.div 
            variants={itemVariants}
            className="section-label"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(26,26,26,0.15)',
              padding: '0.5rem 1rem',
              borderRadius: '100px',
              fontFamily: 'var(--font-accent, Montserrat)',
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '3rem',
              color: 'var(--color-base, #1A1A1A)',
            }}
          >
            <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-primary, #FF4600)', borderRadius: '50%' }}></span>
            // WHAT WE DO
          </motion.div>

          <h2 
            style={{
              fontFamily: 'var(--font-heading, "Space Grotesk")',
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '60rem',
            }}
          >
            <motion.div variants={itemVariants} style={{ fontWeight: 300, color: 'var(--color-base, #1A1A1A)' }}>
              We don&apos;t just design.
            </motion.div>
            <motion.div variants={itemVariants} style={{ fontWeight: 800, color: 'var(--color-primary, #FF4600)' }}>
              We build systems that make your brand inevitable.
            </motion.div>
            <motion.div variants={itemVariants} style={{ fontWeight: 300, color: 'var(--color-base, #1A1A1A)', marginTop: '2rem' }}>
              Most businesses confuse having a website with having a presence.
            </motion.div>
            <motion.div variants={itemVariants} style={{ fontWeight: 800, color: 'var(--color-base, #1A1A1A)' }}>
              The gap between those two things is where we work.
            </motion.div>
          </h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
            marginBottom: '6rem',
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="tile-card"
              style={{
                backgroundColor: 'var(--color-base, #1A1A1A)',
                borderRadius: 'var(--radius-tile, 20px)',
                padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <PuzzleIcon />
              <h3 
                style={{
                  fontFamily: 'var(--font-heading, "Space Grotesk")',
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {service.title}
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body, "Inter")',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div 
          className="grid-2-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'end',
            borderTop: '1px solid rgba(26,26,26,0.1)',
            paddingTop: '3rem',
          }}
        >
          <div>
            <p 
              style={{
                fontFamily: 'var(--font-body, "Inter")',
                fontSize: '0.9rem',
                color: 'rgba(26,26,26,0.6)',
                lineHeight: 1.6,
                maxWidth: '35rem',
              }}
            >
              We operate at the intersection of design and technology. If your digital presence doesn&apos;t have a documented architecture with defensible goals, you&apos;re not executing a strategy — you&apos;re decorating. We build the systems. The brand compounds. The results speak.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-start' }}>
            <button
              style={{
                backgroundColor: 'var(--color-base, #1A1A1A)',
                color: 'var(--color-surface-light, #F5F0EB)',
                border: '1px solid rgba(26,26,26,0.15)',
                borderRadius: '8px',
                padding: '1rem 2rem',
                fontFamily: 'var(--font-accent, Montserrat)',
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary, #FF4600)';
                e.currentTarget.style.borderColor = 'var(--color-primary, #FF4600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-base, #1A1A1A)';
                e.currentTarget.style.borderColor = 'rgba(26,26,26,0.15)';
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
