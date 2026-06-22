'use client';

const LINKS = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/sam-daramroei/' },
  { label: 'Instagram', href: 'https://www.instagram.com/who.stole.my.cheerios/' },
  { label: 'Email',     href: 'mailto:sam.d@cheeriostudios.com' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="footer-pad"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '4rem 48px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '24px',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'white',
              marginBottom: '4px',
            }}
          >
            Sam Daramroei
          </h2>
          <span style={{
            fontFamily: 'var(--font-accent)', fontSize: '0.6rem',
            color: 'var(--color-accent)', letterSpacing: '0.22em',
            textTransform: 'uppercase', fontWeight: 700,
          }}>
            Content Systems. Marketing Architecture.
          </span>
        </div>

        <div style={{ display: 'flex', gap: '36px' }}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                fontFamily: 'var(--font-accent)', fontSize: '0.65rem',
                letterSpacing: '0.18em', color: 'rgba(255,255,255,0.38)',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.18)',
        }}>
          © {new Date().getFullYear()} Sam Daramroei
        </p>
      </div>
    </footer>
  );
}
