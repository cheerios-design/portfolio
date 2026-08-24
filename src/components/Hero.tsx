'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'var(--color-base, #1A1A1A)',
        color: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* 1. Background Decorative Tiles (Interlocking) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        {/* Top Right Cluster */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', transform: 'rotate(-5deg)', opacity: 0.08 }}>
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="20" width="280" height="120" rx="20" fill="var(--color-primary, #FF4600)" />
            <rect x="40" y="100" width="200" height="100" rx="20" fill="var(--color-primary, #FF4600)" />
            <rect x="150" y="160" width="120" height="80" rx="20" fill="var(--color-primary, #FF4600)" />
          </svg>
        </div>
        
        {/* Bottom Left Cluster */}
        <div style={{ position: 'absolute', bottom: '15%', left: '-5%', transform: 'rotate(10deg)', opacity: 0.06 }}>
          <svg width="350" height="250" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="220" height="100" rx="20" fill="var(--color-primary, #FF4600)" />
            <rect x="80" y="90" width="180" height="90" rx="20" fill="var(--color-primary, #FF4600)" />
            <rect x="120" y="150" width="100" height="80" rx="20" fill="var(--color-primary, #FF4600)" />
          </svg>
        </div>
      </div>

      {/* 2. Navigation Bar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 5%',
          width: '100%'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/assets/logos/svgs/colored_main_logo.svg" 
            alt="Cheerio Studios" 
            style={{ height: '36px', width: 'auto' }}
          />
          <span 
            style={{ 
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              fontSize: '1.1rem',
              color: 'white'
            }}
          >
            Cheerio Studios
          </span>
        </div>

        {isMobile ? (
          <button 
            onClick={() => setIsMenuOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}
            aria-label="Open Menu"
          >
            <span style={{ width: '24px', height: '2px', backgroundColor: 'white', display: 'block' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: 'white', display: 'block' }} />
            <span style={{ width: '16px', height: '2px', backgroundColor: 'white', display: 'block', alignSelf: 'flex-end' }} />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                style={{
                  fontFamily: 'var(--font-accent, "Montserrat", system-ui, sans-serif)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'var(--color-primary, #FF4600)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '5%',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
              aria-label="Close Menu"
            >
              ×
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    textTransform: 'uppercase'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Hero Content */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 5%',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px', width: '100%' }}
        >
          <motion.div 
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-accent, "Montserrat", system-ui, sans-serif)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--color-primary, #FF4600)',
              marginBottom: '1.5rem'
            }}
          >
            Digital Creative Studio
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 0 1.5rem 0',
              whiteSpace: 'pre-line'
            }}
          >
            {`WE BUILD\nDIGITAL\nPRESENCE`}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-body, "Inter", system-ui, sans-serif)',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '500px',
              margin: '0 0 2.5rem 0'
            }}
          >
            From concept to execution — one studio, one vision, every pixel intentional.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-primary, #FF4600)',
                color: '#FFFFFF',
                padding: '14px 32px',
                borderRadius: '100px',
                fontFamily: 'var(--font-accent, "Montserrat", system-ui, sans-serif)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Desktop Interactive Decor */}
        {!isMobile && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              right: '5%',
              top: '40%',
              transform: 'translateY(-50%)',
              width: '400px',
              height: '500px',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.rect 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                x="50" y="50" width="260" height="180" rx="var(--radius-tile, 20)" 
                fill="var(--color-primary, #FF4600)" fillOpacity="0.15" 
              />
              <motion.rect 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                x="150" y="160" width="220" height="200" rx="var(--radius-tile, 20)" 
                fill="var(--color-primary, #FF4600)" fillOpacity="0.25" 
              />
              <motion.rect 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                x="80" y="280" width="160" height="120" rx="var(--radius-tile, 20)" 
                fill="var(--color-primary, #FF4600)" fillOpacity="0.4" 
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* 4. Bottom Watermark */}
      <div 
        style={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          lineHeight: 0.8,
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <span 
          style={{
            fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
            fontWeight: 900,
            fontSize: 'clamp(4rem, 15vw, 14rem)',
            color: 'rgba(255,255,255,0.03)',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap'
          }}
        >
          Cheerio
        </span>
      </div>
    </section>
  );
}
