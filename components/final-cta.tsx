import Image from 'next/image';
import { Clock, Mail, Phone } from 'lucide-react';
import { QuoteForm } from '@/components/quote-form';
import { EMAIL, PHONE, PHONE_HREF } from '@/lib/site';

export function FinalCta() {
  return (
    <section id="quote" className="relative scroll-mt-20 overflow-hidden bg-forest py-20 text-primary-foreground lg:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/images/work-results.png" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
      </div>
      <div className="relative mx-auto grid w-[min(1240px,calc(100%-2.5rem))] items-center gap-12 lg:grid-cols-[1.1fr_420px] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Get started</p>
          <h2 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight text-balance">
            Get the lawn off your weekend list.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80 text-pretty">
            Tell us where you are. You&apos;ll get a clear quote, a schedule you can count on, and the same person showing up every time.
          </p>
          <ul className="mt-8 flex flex-col gap-4 text-[16px]">
            <li>
              <a href={PHONE_HREF} className="inline-flex items-center gap-3 font-semibold transition-colors hover:text-lime">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-lime">
                  <Phone size={18} aria-hidden="true" />
                </span>
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 font-semibold transition-colors hover:text-lime">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-lime">
                  <Mail size={18} aria-hidden="true" />
                </span>
                {EMAIL}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-white/80">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-lime">
                <Clock size={18} aria-hidden="true" />
              </span>
              Monday to Saturday, 9:00 am to 5:00 pm
            </li>
          </ul>
        </div>
        <QuoteForm variant="light" />
      </div>
    </section>
  );
}
