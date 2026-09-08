import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import { BeforeAfterSlider } from '@/components/before-after-slider';

const points = [
  'Upfront, time-based pricing (no upcharge games)',
  'Same person, every time',
  'Professional, detail-oriented service',
  'Fully insured for your peace of mind',
];

export function Transformation() {
  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Take back your weekends</p>
          <h2 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            A Healthier, Happier Lawn Starts Here.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted text-pretty">
            From weekly mowing to seasonal cleanups and landscape enhancements, Marathon Lawn delivers reliable, professional service
            that keeps your property looking its best — without the stress.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[16px] font-medium">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="#quote"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-[16px] font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-colors hover:bg-primary-hover"
          >
            Get Your Free Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="relative pb-16 sm:pb-12">
          <BeforeAfterSlider />
          <figure className="absolute -bottom-2 right-0 w-[min(100%,16.5rem)] rounded-2xl bg-card p-5 text-card-foreground shadow-2xl ring-1 ring-border sm:-bottom-6 sm:right-4 2xl:-right-8">
            <div className="flex gap-0.5 text-star" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-2.5 text-[14px] font-medium leading-snug">
              “What a difference! Professional, reliable and my lawn has never looked better.”
            </blockquote>
            <figcaption className="mt-2 text-xs text-primary">— Local Homeowner</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
