import type { Metadata } from 'next'
import './globals.css'
import './reference.css'
import './services-lock.css'
import './pricing-lock.css'
import './how-lock.css'
import './faq-lock.css'
import './final-cta-lock.css'
import './footer-lock.css'
import './mobile-lock.css'
import './visual-qa.css'
import './source-reference-lock.css'

const siteUrl = 'https://marathonlawn.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Marathon Lawn | Weekly Lawn Care in Scott & Dakota County, MN',
  description: 'Weekly lawn mowing in Scott & Dakota County, MN. Upfront pricing based on time, not lawn size.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Marathon Lawn | Weekly Lawn Care in Scott & Dakota County, MN',
    description: 'Reliable, owner-operated lawn care with upfront pricing and the same person every time.',
    url: siteUrl,
    siteName: 'Marathon Lawn',
    type: 'website',
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Marathon Lawn',
  description: 'Owner-operated lawn care and property services for Scott County and Dakota County, Minnesota.',
  url: siteUrl,
  telephone: '+1-952-395-6574',
  email: 'Wayne@MarathonLawn.com',
  areaServed: ['Scott County, Minnesota', 'Dakota County, Minnesota'],
  sameAs: ['https://www.facebook.com/marathonlcs/'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </body>
    </html>
  )
}
