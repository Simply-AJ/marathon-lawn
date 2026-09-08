'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-forest shadow-2xl sm:aspect-[5/4] lg:aspect-[4/3]">
      <Image src="/images/after.png" alt="The same front yard after Marathon Lawn care: thick green lawn with crisp mowing lines" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src="/images/before.png" alt="A neglected front yard before service: patchy brown grass covered in leaves" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" style={{ left: `calc(${position}% - 1px)` }} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-primary text-white shadow-xl"
        style={{ left: `${position}%` }}
      >
        <ChevronLeft size={18} strokeWidth={3} />
        <ChevronRight size={18} strokeWidth={3} className="-ml-1.5" />
      </div>

      <label htmlFor={id} className="sr-only">
        Drag to compare before and after
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-valuetext={`${Math.round(position)}% before, ${Math.round(100 - position)}% after`}
        className="ba-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline-none"
      />

      <span className="pointer-events-none absolute bottom-5 left-5 rounded-full bg-forest/90 px-4 py-2 text-sm font-semibold text-white">Before</span>
      <span className="pointer-events-none absolute bottom-5 right-5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">After</span>
    </div>
  );
}
