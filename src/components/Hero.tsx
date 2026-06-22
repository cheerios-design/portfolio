'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, active: false }));
  };

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
          left: '49.5%',
          transform: 'translateX(-50%)',
          width: '545px',
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
          padding: '32px 48px', zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Logo Dot */}
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }} />
          <span style={{
            fontFamily: 'var(--font-accent)', fontSize: '0.8rem',
            color: 'white', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em'
          }}>
            Sam Daramroei
          </span>
        </div>

        <div style={{ display: 'flex', gap: '36px' }}>
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
      </motion.nav>

      {/* ── PHOTO (CENTERED) ── */}
      <motion.div
        ref={photoRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setCursor((prev) => ({ ...prev, active: true }))}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '30%',
          transform: 'translateX(-50%)',
          width: 'min(50%, 600px)',
          height: '85%',
          cursor: 'crosshair',
          zIndex: 10,
        }}
      >
        {/* Normal image */}
        <Image
          src={profileOrigin}
          alt="Sam Daramroei"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 50vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom center',
          }}
        />

        {/* Inverted image — swaps in on hover via clip-path */}
        <Image
          src={profileInverted}
          alt="Sam Daramroei (inverted)"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 50vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom center',
            clipPath: `circle(150px at ${cursor.x}px ${cursor.y}px)`,
            opacity: cursor.active ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        />

        {/* Bottom Fade Gradient to blend bottom edge into background */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '15%',
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
          left: '48px',
          zIndex: 20,
          maxWidth: '340px',
          pointerEvents: 'none',
        }}
      >


        <h2 style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 'bolder',
          fontSize: '2.4rem',
          lineHeight: 1.15,
          color: 'white',
          letterSpacing: '-0.02em',

        }}>
          Content Systems &amp; Marketing <span style={{ color: 'var(--color-primary)', }}>Architecture</span>
        </h2>
      </motion.div>

      {/* ── RIGHT CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          position: 'absolute',
          right: '48px',
          zIndex: 20,
          maxWidth: '280px',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.6,
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
          fontSize: 'clamp(3rem, 10vw, 15rem)',
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
