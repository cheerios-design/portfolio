'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import profileOrigin from '../../public/SamProfile_origin.png';
import profileInverted from '../../public/SamProfile_inverted.png';

const NAV_LINKS = [
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });
  const photoRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-animate circle on mobile: 3s move, 2s pause
  useEffect(() => {
    if (!isMobile) return;

    let startTime = Date.now();
    let animationFrame: number;

    const animateCircle = () => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radiusX = rect.width * 0.35;
      const radiusY = rect.height * 0.35;
      
      const now = Date.now();
      const elapsed = (now - startTime) % 5000; // 5 second total cycle

      if (elapsed <= 3000) {
        // Moving phase (3 seconds)
        const progress = elapsed / 3000;
        const angle = progress * Math.PI * 2;
        
        setCursor({
          x: centerX + Math.cos(angle) * radiusX,
          y: centerY + Math.sin(angle) * radiusY,
          active: true,
        });
      } else {
        // Paused phase (2 seconds)
        // Keep active true so it stays visible where it paused
      }

      animationFrame = requestAnimationFrame(animateCircle);
    };

    animationFrame = requestAnimationFrame(animateCircle);

    return () => cancelAnimationFrame(animationFrame);
  }, [isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setCursor((prev) => ({ ...prev, active: false }));
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '720px',
        background: 'var(--color-base)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        isolation: 'isolate',
      }}
    >
      {/* ── hero_image_background ── */}
      <div
        id="hero_image_background"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(320px, 100%, 545px)',
          height: '100%',
          backgroundColor: '#f8f0e4',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* ── NAV ── */}
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 'clamp(20px, 4vw, 32px) clamp(24px, 5vw, 48px)', zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Logo Dot */}
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }} />
          <span style={{
            fontFamily: 'var(--font-accent)', fontSize: '0.8rem',
            color: isMenuOpen ? 'black' : 'white', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}>
            Sam Daramroei
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hide-on-mobile" style={{ gap: '36px' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-accent)', fontSize: '0.68rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="show-on-mobile"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none', border: 'none', color: isMenuOpen ? 'black' : 'white', cursor: 'pointer',
            padding: '8px', zIndex: 60, display: 'flex', flexDirection: 'column', gap: '4px',
          }}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            style={{ width: '24px', height: '2px', background: 'currentColor', originX: 0.5 }}
          />
          <motion.div
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            style={{ width: '24px', height: '2px', background: 'currentColor' }}
          />
          <motion.div
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            style={{ width: '24px', height: '2px', background: 'currentColor', originX: 0.5 }}
          />
        </button>
      </motion.nav>

      {/* ── FULLSCREEN MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'var(--color-accent)', zIndex: 45,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: '48px',
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 8vw, 4rem)',
                  color: 'black',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHOTO (CENTERED) ── */}
      <motion.div
        ref={photoRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => !isMobile && setCursor((prev) => ({ ...prev, active: true }))}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(300px, 80%, 600px)',
          height: isMobile ? '70%' : '85%',
          cursor: isMobile ? 'default' : 'crosshair',
          zIndex: 10,
        }}
      >
        <Image
          src={profileOrigin}
          alt="Sam Daramroei"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
        />

        <Image
          src={profileInverted}
          alt="Sam Daramroei (inverted)"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 50vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom center',
            clipPath: `circle(${isMobile ? '100px' : '150px'} at ${cursor.x}px ${cursor.y}px)`,
            opacity: cursor.active ? 1 : 0,
            transition: isMobile ? 'none' : 'opacity 0.25s ease',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0, height: '15%',
            background: 'linear-gradient(to top, var(--color-base) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* ── LEFT CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          position: 'absolute',
          left: isMobile ? '24px' : '48px',
          top: isMobile ? '15%' : 'auto',
          zIndex: 20,
          maxWidth: '340px',
          pointerEvents: 'none',
        }}
      >
        <h2 style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 'bolder',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          lineHeight: 1.15,
          color: 'white',
          letterSpacing: '-0.02em',
        }}>
          Content Systems &amp; Marketing <span style={{ color: 'var(--color-primary)' }}>Architecture</span>
        </h2>
      </motion.div>

      {/* ── RIGHT CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hide-on-mobile"
        style={{
          position: 'absolute',
          right: '48px',
          zIndex: 20,
          maxWidth: '280px',
          flexDirection: 'column',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
          marginBottom: '32px',
        }}>
          Hi, I&apos;m Sam Daramroei—building digital systems and narrative strategies that convert attention into measurable impact.
        </p>

        <a
          href="#work"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            background: 'var(--color-primary)', color: 'white',
            padding: '12px 24px 12px 12px', borderRadius: '100px',
            fontFamily: 'var(--font-accent)', fontSize: '0.75rem',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
            transition: 'transform 0.2s ease',
            width: 'fit-content',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={{
            background: 'white', color: 'var(--color-primary)',
            width: '32px', height: '32px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            →
          </div>
          View My Work
        </a>
      </motion.div>

      {/* ── MASSIVE BOTTOM NAME ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          bottom: '-0.5vh',
          left: 0, right: 0,
          textAlign: 'center',
          zIndex: 30,
          pointerEvents: 'none',
        }}
      >
        <h1 style={{
          fontSize: 'clamp(3.5rem, 15vw, 15rem)',
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-accent)',
          margin: 0,
          lineHeight: 0.8,
          letterSpacing: '-0.04em',
          textTransform: 'none',
          mixBlendMode: 'difference',
        }}>
          Sam Daramroei
        </h1>
      </motion.div>
    </section>
  );
}
