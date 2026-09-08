import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="#top" className={`flex items-center gap-3 ${className}`} aria-label="Marathon Lawn Care & Services home">
      <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-lime to-primary text-forest shadow-[0_0_0_3px_rgba(143,220,92,0.25)]">
        <Leaf size={22} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[22px] font-bold tracking-tight">MARATHON</span>
        <span className="text-[10px] font-semibold tracking-[0.18em] opacity-80">LAWN CARE &amp; SERVICES</span>
      </span>
    </Link>
  );
}
