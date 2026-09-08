import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Marathon Lawn Care & Services | Scott & Dakota County, MN',
  description:
    'Owner-operated lawn care in Scott County and Dakota County, Minnesota. Upfront, time-based pricing, the same person every time, and a fast free quote. Weekly mowing, seasonal cleanups, and landscape care.',
  metadataBase: new URL('https://marathonlawn.com'),
  openGraph: {
    title: 'A Lawn You’ll Love. Without the Hassle. | Marathon Lawn',
    description:
      'Reliable, owner-operated lawn care with upfront pricing and no surprise fees. Serving Scott & Dakota County, MN.',
    images: ['/images/hero-blower.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0b2317',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} bg-background`}>
      <body>{children}</body>
    </html>
  );
}
