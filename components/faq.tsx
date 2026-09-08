import { ChevronDown } from 'lucide-react';
import { FAQS, PHONE, PHONE_HREF } from '@/lib/site';

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">FAQ</p>
          <h2 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            Straight answers before you book.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Still have a question? Call{' '}
            <a href={PHONE_HREF} className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4">
              {PHONE}
            </a>{' '}
            and talk to the person who will actually be on your lawn.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <details key={item.q} className="faq-item group rounded-xl border border-border bg-background open:shadow-md" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-[16px] font-semibold marker:content-none">
                {item.q}
                <ChevronDown size={20} className="faq-chevron shrink-0 text-primary transition-transform" aria-hidden="true" />
              </summary>
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
