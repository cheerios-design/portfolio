'use client';

const LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sam-daramroei/' },
  { name: 'Instagram', url: 'https://www.instagram.com/cheerio.studio/' },
  { name: 'Email', url: 'mailto:sam.d@cheeriostudios.com' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer 
      style={{
        background: 'var(--color-surface, #242424)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
      className="w-full"
    >
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 48px',
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-center md:text-left"
      >
        {/* Brand Info (left) */}
        <div className="flex flex-col gap-2 md:items-start items-center">
          <h3 
            style={{
              fontFamily: 'var(--font-heading, "Space Grotesk")',
              fontSize: '1.4rem',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Cheerio Studios
          </h3>
          <p 
            style={{
              fontFamily: 'var(--font-accent, "Montserrat")',
              fontSize: '0.6rem',
              color: '#FF4600',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              margin: 0,
            }}
          >
            One Voice. One Visual. One Studio.
          </p>
        </div>

        {/* Social Links (center) */}
        <div className="flex justify-center items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                fontFamily: 'var(--font-accent, "Montserrat")',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.38)',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF4600')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright (right) */}
        <div className="flex md:justify-end justify-center">
          <p 
            style={{
              fontFamily: 'var(--font-body, "Inter")',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.18)',
              margin: 0,
            }}
          >
            © {year} Cheerio Studios
          </p>
        </div>
      </div>
    </footer>
  );
}
