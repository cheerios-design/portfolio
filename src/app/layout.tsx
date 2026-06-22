import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Sam Daramroei — Content Creator & Marketing Strategist',
  description:
    'Digital portfolio of Sam Daramroei. Content creator and technical strategist specializing in SEO optimization, global community management, and design-led marketing solutions.',
  keywords: [
    'Sam Daramroei',
    'content creator',
    'marketing strategist',
    'SEO',
    'community management',
    'brand identity',
    'digital marketing',
  ],
  openGraph: {
    title: 'Sam Daramroei — Content Creator & Marketing Strategist',
    description:
      'Digital portfolio of Sam Daramroei. Content creator and technical strategist specializing in SEO optimization, global community management, and design-led marketing solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Adobe Fonts — Dazzle Unicase */}
        <link rel="stylesheet" href="https://use.typekit.net/mim0jxc.css" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#242834' }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
