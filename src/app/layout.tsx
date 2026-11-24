import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { site } from '@/lib/site';
import './globals.css';

const xenon = localFont({
  src: [
    { path: './fonts/monaspace-xenon-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/monaspace-xenon-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/monaspace-xenon-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-xenon',
  fallback: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, type: 'website' },
  twitter: { card: 'summary_large_image' },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#2d353b' },
    { media: '(prefers-color-scheme: light)', color: '#fdf6e3' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={xenon.variable}>
      <body>{children}</body>
    </html>
  );
}
