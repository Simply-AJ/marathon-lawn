import Link from 'next/link';
import { ArrowRight, Droplet, Leaf, Sprout, Tractor } from 'lucide-react';
import { SERVICES } from '@/lib/site';

const icons = { lawn: Tractor, landscape: Sprout, seasonal: Leaf, additional: Droplet } as const;

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-forest py-20 text-primary-foreground lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(143,220,92,0.12),transparent_55%)]" aria-hidden="true" />
      <div className="relative mx-auto w-[min(1240px,calc(100%-2.5rem))]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Our services</p>
            <h2 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
              Complete Lawn &amp; Property Care
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/80">
              Everything you need to keep your property looking its best, all season long.
            </p>
          </div>
          <Link
            href="#pricing"
            className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-white/35 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-white/10 md:self-auto"
          >
            View All Services
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title}>
                <Link
                  href="#quote"
                  className="group flex h-full flex-col gap-5 rounded-2xl border border-white/12 bg-forest-light/60 p-6 transition-colors hover:border-lime/50 hover:bg-forest-light"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-forest text-lime ring-1 ring-lime/30">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold leading-tight">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/75">{s.text}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                    <span className="font-semibold text-lime">{s.price}</span>
                    <span className="inline-flex items-center gap-1.5 text-white/80 transition-colors group-hover:text-white">
                      Get a quote
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
