'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { GALLERY } from '@/lib/site';

export function WorkStrip() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, step]);

  const current = index === null ? null : GALLERY[index];

  return (
    <div id="work" className="mt-14 scroll-mt-24 pb-10">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {GALLERY.map((item, i) => (
          <li key={item.label}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className={`group w-full text-left ${i > 3 ? 'hidden sm:block' : ''} ${i === 3 ? 'hidden sm:block' : ''}`}
            >
              <span
                className={`relative block aspect-[4/3] overflow-hidden rounded-xl ring-2 transition-all group-hover:ring-lime ${
                  item.video ? 'ring-white/90' : 'ring-white/10'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.video && (
                  <span className="absolute inset-0 flex items-center justify-center bg-forest/20">
                    <span className="flex size-14 items-center justify-center rounded-full border-2 border-white/90 bg-forest/40 text-white backdrop-blur-sm">
                      <Play size={22} className="ml-1 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                )}
              </span>
              <span className="mt-2.5 block text-center text-[13px] font-semibold text-white/95">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative mx-auto aspect-[3/2] max-h-[72vh] overflow-hidden rounded-2xl ring-1 ring-white/15">
              <Image key={current.src} src={current.src} alt={current.alt} fill sizes="90vw" className="object-cover" priority />
              <button
                type="button"
                onClick={close}
                className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full bg-forest/70 text-white ring-1 ring-white/30 transition-colors hover:bg-primary"
              >
                <X size={22} aria-hidden="true" />
                <span className="sr-only">Close gallery</span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <p className="font-serif text-xl font-semibold">{current.label}</p>
              <p className="text-sm text-white/70">
                {index! + 1} / {GALLERY.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-forest/70 text-white ring-1 ring-white/30 transition-colors hover:bg-primary"
            >
              <ChevronLeft size={24} aria-hidden="true" />
              <span className="sr-only">Previous photo</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-forest/70 text-white ring-1 ring-white/30 transition-colors hover:bg-primary"
            >
              <ChevronRight size={24} aria-hidden="true" />
              <span className="sr-only">Next photo</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
