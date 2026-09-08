import Link from 'next/link';
import { Logo } from '@/components/logo';
import { EMAIL, FACEBOOK_URL, GOOGLE_REVIEWS_URL, NAV_LINKS, PHONE, PHONE_HREF, SERVICE_AREA } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-forest py-12 text-primary-foreground">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Owner-operated lawn care for {SERVICE_AREA}. Upfront pricing, the same person every time, and a lawn you&apos;ll love.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">Contact</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <a href={PHONE_HREF} className="font-semibold transition-colors hover:text-lime">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-white/80 transition-colors hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="text-white/80 transition-colors hover:text-white">
                Google Reviews
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-white/80 transition-colors hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-[min(1240px,calc(100%-2.5rem))] flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Marathon Lawn Care &amp; Services. All rights reserved.</p>
        <p>Fully insured. Serving {SERVICE_AREA}.</p>
      </div>
    </footer>
  );
}
