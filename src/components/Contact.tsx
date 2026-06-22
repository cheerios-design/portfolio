'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  });

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: '1px solid var(--color-border)',
    color: 'white',
    padding: '16px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-accent)',
    fontSize: '0.65rem',
    color: 'var(--color-accent)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
    fontWeight: 700,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        padding: '8rem 0',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          <motion.h2
            {...fade(0)}
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
            }}
          >
            LET&apos;S ALIGN
            <br />
            YOUR
            <br />
            BRAND.
          </motion.h2>

          <motion.p
            {...fade(0.1)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              color: 'white',
              lineHeight: 1.4,
              textTransform: 'uppercase',
              maxWidth: '90%',
            }}
          >
            Tell us where your current workflow is breaking down and we will shape a
            focused plan that unifies strategy, visuals, and execution.
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN (FORM) ── */}
        <motion.div {...fade(0.2)}>
          <div style={{ marginBottom: '32px' }}>
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.7rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Project Brief
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              The more context you share, the faster we can map your next move.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Row 1: Name & Company */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
              }}
            >
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>
              <div>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  placeholder="Your company"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Row 3: Select */}
            <div>
              <label style={labelStyle}>Biggest Pain Point</label>
              <div style={{ position: 'relative' }}>
                <select
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                >
                  <option value="" disabled selected hidden>
                    Select one...
                  </option>
                  <option value="strategy" style={{ color: 'black' }}>Brand Strategy</option>
                  <option value="content" style={{ color: 'black' }}>Content Systems</option>
                  <option value="seo" style={{ color: 'black' }}>Search Visibility</option>
                  <option value="other" style={{ color: 'black' }}>Other</option>
                </select>
                {/* Custom dropdown arrow */}
                <div
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project goals, timeline, and what is currently blocking progress."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Row 5: Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px',
                background: 'transparent',
                border: '1px solid var(--color-primary)',
                color: 'white',
                fontFamily: 'var(--font-accent)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginTop: '16px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Send Project Brief
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
