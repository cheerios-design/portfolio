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
  manifest: '/favicons/manifest.json',
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicons/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicons/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicons/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/favicons/ms-icon-144x144.png',
    'theme-color': '#ffffff',
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
      </head>
      <body style={{ background: '#242834' }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
