import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const rows = [
  { name: 'Small lawn', time: '30 minutes or less', weekly: '$50', biweekly: '$60' },
  { name: 'Standard lawn', time: '30 to 60 minutes', weekly: '$60', biweekly: '$75', featured: true },
];

const includes = ['Mowing', 'Trimming', 'Edging sidewalks as needed', 'Blowing hard surfaces clean'];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Lawn care pricing</p>
          <h2 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            Know your price before we start.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted text-pretty">
            Pricing is based on time on the property, not a guess at square footage. Weekly service is the best value if you want your
            lawn handled without thinking about it.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[15px] font-medium">
                <Check size={18} className="shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="#quote" className="mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-0.5 font-semibold text-foreground transition-colors hover:text-primary">
            Get a quote for your lawn
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-border">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-forest px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
            <span>Lawn</span>
            <span className="text-right">Weekly</span>
            <span className="text-right">Bi-weekly</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.name}
              className={`grid grid-cols-[1.4fr_1fr_1fr] items-center border-t border-border px-6 py-5 ${r.featured ? 'bg-primary/8' : ''}`}
            >
              <div>
                <p className="flex items-center gap-2 font-semibold">
                  {r.name}
                  {r.featured && <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">Most common</span>}
                </p>
                <p className="text-sm text-muted">{r.time}</p>
              </div>
              <p className="text-right font-serif text-2xl font-semibold">{r.weekly}</p>
              <p className="text-right font-serif text-2xl font-semibold">{r.biweekly}</p>
            </div>
          ))}
          <p className="border-t border-border bg-background px-6 py-4 text-sm leading-relaxed text-muted">
            Seasonal cleanups start at $125 and landscape or additional services start at $75. Every quote is confirmed before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
