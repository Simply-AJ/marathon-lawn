import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marathon Lawn | Weekly Lawn Care in Scott & Dakota County, MN',
  description: 'Weekly lawn mowing in Scott & Dakota County, MN. Upfront pricing based on time, not lawn size.',
  metadataBase: new URL('https://marathonlawn.com'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
