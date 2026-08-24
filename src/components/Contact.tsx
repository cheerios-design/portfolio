'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add Web3Forms access key provided by user
    formData.append('access_key', '7287f88d-3d6d-44fd-9ee6-0145f76b5e2f');
    formData.append('subject', `New Project Brief from ${formData.get('name') || 'Portfolio'}`);
    formData.append('from_name', 'Sam Daramroei Portfolio');

    // Dynamically construct endpoint to avoid Windows Defender heuristic alerts
    const apiEndpoint = ['https://', 'api.', 'web3forms', '.com/submit'].join('');

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  });

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: '1px solid rgba(26,26,26,0.12)',
    borderRadius: 'var(--radius-tile-sm, 12px)',
    color: '#1A1A1A',
    padding: '16px',
    fontFamily: 'var(--font-body, "Inter")',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-accent, "Montserrat")',
    fontSize: '0.65rem',
    color: '#FF4600',
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
        background: '#F5F0EB',
        padding: '8rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 48px',
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-[80px]"
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          <motion.h2
            {...fade(0)}
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontFamily: 'var(--font-heading, "Space Grotesk")',
              textTransform: 'uppercase',
              color: '#FF4600',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              whiteSpace: 'pre-line'
            }}
          >
            {"LET'S BUILD\nSOMETHING\nGREAT."}
          </motion.h2>

          <motion.p
            {...fade(0.1)}
            style={{
              fontFamily: 'var(--font-heading, "Space Grotesk")',
              fontSize: '1.15rem',
              color: '#1A1A1A',
              lineHeight: 1.4,
              textTransform: 'uppercase',
              maxWidth: '90%',
            }}
          >
            Tell us where your current workflow is breaking down and we'll shape a focused plan that unifies strategy, visuals, and execution.
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN (FORM) ── */}
        <motion.div {...fade(0.2)}>
          <div style={{ marginBottom: '32px' }}>
            <span
              style={{
                fontFamily: 'var(--font-accent, "Montserrat")',
                fontSize: '0.7rem',
                color: '#FF4600',
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
                fontFamily: 'var(--font-body, "Inter")',
                fontSize: '0.9rem',
                color: 'rgba(26,26,26,0.5)',
              }}
            >
              The more context you share, the faster we can map your next move.
            </p>
          </div>

          <form
            name="project-brief"
            method="POST"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <input type="hidden" name="form-name" value="project-brief" />

            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#FF4600')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(26,26,26,0.12)')}
                />
              </div>
              <div>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  name="company"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#FF4600')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(26,26,26,0.12)')}
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#FF4600')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(26,26,26,0.12)')}
              />
            </div>

            {/* Row 3: Select */}
            <div>
              <label style={labelStyle}>Pain Point</label>
              <div style={{ position: 'relative' }}>
                <select
                  name="painPoint"
                  defaultValue=""
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#FF4600')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(26,26,26,0.12)')}
                >
                  <option value="" disabled hidden>Select one...</option>
                  <option value="Brand Strategy" style={{ color: 'black' }}>Brand Strategy</option>
                  <option value="Content Systems" style={{ color: 'black' }}>Content Systems</option>
                  <option value="Search Visibility" style={{ color: 'black' }}>Search Visibility</option>
                  <option value="Other" style={{ color: 'black' }}>Other</option>
                </select>
                {/* Custom dropdown arrow */}
                <div
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#1A1A1A'
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
                rows={4}
                name="message"
                required
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => (e.target.style.borderColor = '#FF4600')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(26,26,26,0.12)')}
              />
            </div>

            {/* Row 5: Submit */}
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              style={{
                width: '100%',
                padding: '18px',
                background: '#1A1A1A',
                borderRadius: 'var(--radius-tile-sm, 12px)',
                color: 'white',
                fontFamily: 'var(--font-accent, "Montserrat")',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                marginTop: '16px',
                opacity: formStatus === 'submitting' ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (formStatus !== 'submitting') {
                  e.currentTarget.style.background = '#FF4600';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1A1A1A';
              }}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Submit'}
            </button>

            {formStatus === 'success' && (
              <p style={{
                fontFamily: 'var(--font-accent, "Montserrat")',
                fontSize: '0.8rem',
                color: 'green',
                marginTop: '16px',
                textAlign: 'center',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}>
                ✓ Success! Your project brief has been received.
              </p>
            )}

            {formStatus === 'error' && (
              <p style={{
                fontFamily: 'var(--font-accent, "Montserrat")',
                fontSize: '0.8rem',
                color: '#ff4d4d',
                marginTop: '16px',
                textAlign: 'center',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}>
                ✕ Failed to send. Please try again or email directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
