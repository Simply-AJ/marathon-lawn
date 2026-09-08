'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { NAV_LINKS, PHONE, PHONE_HREF } from '@/lib/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#top');

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1)).filter(Boolean);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-primary-foreground">
      <div className="mx-auto flex h-20 w-[min(1240px,calc(100%-2.5rem))] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-[14px] font-medium transition-opacity hover:opacity-100 xl:text-[15px] ${
                  isActive ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-lime transition-transform ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 whitespace-nowrap md:flex">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-forest/40 px-4 py-2.5 text-[14px] font-semibold backdrop-blur-sm transition-colors hover:bg-forest/70 xl:px-5 xl:text-[15px]"
          >
            <Phone size={16} aria-hidden="true" />
            {PHONE}
          </a>
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[14px] font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary-hover xl:px-5 xl:text-[15px]"
          >
            Get Your Free Quote
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-forest/40 backdrop-blur-sm lg:hidden"
        >
          <Menu size={22} aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-50 flex flex-col bg-forest px-6 pb-8 pt-5 lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-11 items-center justify-center rounded-full border border-white/30"
            >
              <X size={22} aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="mt-10 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 font-serif text-3xl font-semibold tracking-tight transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-3.5 font-semibold">
              <Phone size={18} aria-hidden="true" />
              Call {PHONE}
            </a>
            <Link
              href="#quote"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-semibold text-primary-foreground"
            >
              Get Your Free Quote
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
