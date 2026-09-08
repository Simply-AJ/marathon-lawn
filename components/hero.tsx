import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, Leaf, Phone, ShieldCheck, UserRound } from 'lucide-react';
import { QuoteForm } from '@/components/quote-form';
import { WorkStrip } from '@/components/work-strip';
import { PHONE, PHONE_HREF } from '@/lib/site';

const trustPoints = [
  { icon: UserRound, title: 'Owner Operated', text: 'Same person every time' },
  { icon: ShieldCheck, title: 'Fully Insured', text: 'Your property is protected' },
  { icon: Leaf, title: 'Commercial-Grade Equipment', text: 'A cleaner, better cut' },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-primary-foreground">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-blower.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-transparent to-forest" />
      </div>

      <div className="relative mx-auto w-[min(1240px,calc(100%-2.5rem))] pt-32 lg:pt-40">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_380px] lg:gap-12 xl:grid-cols-[1fr_400px] xl:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/85">Scott County &amp; Dakota County, Minnesota</p>
            <h1 className="mt-5 font-serif text-[clamp(2.75rem,5.3vw,4.9rem)] font-semibold leading-[0.98] tracking-tight">
              A Lawn You&apos;ll Love.
              <br />
              <span className="text-lime">Without the Hassle.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 text-pretty">
              Reliable, owner-operated lawn care with upfront pricing, no surprise fees, and the same person every time. You get your
              weekends back — we&apos;ll handle the rest.
            </p>

            <ul className="mt-9 grid gap-6 sm:grid-cols-3">
              {trustPoints.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-lime/50 bg-forest/60 text-lime">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold leading-tight">{title}</p>
                    <p className="mt-1 text-sm leading-snug text-white/75">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-[16px] font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-colors hover:bg-primary-hover"
              >
                <FileText size={18} aria-hidden="true" />
                Get Your Free Quote
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-forest/40 px-7 py-4 text-[16px] font-semibold backdrop-blur-sm transition-colors hover:bg-forest/70"
              >
                <Phone size={18} aria-hidden="true" />
                Call {PHONE}
              </a>
            </div>
          </div>

          <div className="relative lg:pt-2">
            <p
              aria-hidden="true"
              className="absolute -left-40 top-24 hidden -rotate-12 font-serif text-2xl italic leading-tight text-white/95 xl:block"
            >
              Real work.
              <br />
              Real results.
              <svg width="48" height="60" viewBox="0 0 48 60" fill="none" className="mt-2 ml-8 text-white/90">
                <path d="M6 4c14 10 26 26 30 50" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M26 46l10 8 4-13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
            <QuoteForm />
          </div>
        </div>

        <WorkStrip />
      </div>
    </section>
  );
}
