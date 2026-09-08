import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { ProofBar } from '@/components/proof-bar';
import { Transformation } from '@/components/transformation';
import { Services } from '@/components/services';
import { Pricing } from '@/components/pricing';
import { Faq } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <Transformation />
        <Services />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <Link
        href="#quote"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-primary-foreground shadow-2xl shadow-forest/40 md:hidden"
      >
        Get Your Free Quote
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </>
  );
}
