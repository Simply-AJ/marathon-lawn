import { ArrowRight, MapPin, Star } from 'lucide-react';
import { FACEBOOK_URL, GOOGLE_REVIEWS_URL, SERVICE_AREA } from '@/lib/site';

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 text-star ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="size-7" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6C12.3 13.2 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.8-.4-4H24v8.1h12.7c-.3 2.1-1.7 5.3-4.8 7.4l7.4 5.7c4.4-4.1 7.2-10.1 7.2-17.2z" />
      <path fill="#FBBC05" d="M10.4 28.8A14.5 14.5 0 0 1 9.5 24c0-1.7.3-3.3.8-4.8l-7.8-6A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.8-6z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2 1.4-4.8 2.4-8.5 2.4-6.3 0-11.7-4.2-13.6-10.1l-7.8 6C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function FacebookF() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
      <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22h3.4z" />
    </svg>
  );
}

const avatars = ['bg-[#c98b5a]', 'bg-[#8a6a4b]', 'bg-[#d9a679]', 'bg-[#6f5a45]'];

export function ProofBar() {
  const itemClass = 'group flex items-center gap-4 px-6 py-6 lg:py-7';
  return (
    <section aria-label="Reviews and service area" className="border-b border-border bg-card">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        <div className={itemClass}>
          <div className="flex -space-x-2.5" aria-hidden="true">
            {avatars.map((bg, i) => (
              <span key={i} className={`size-9 rounded-full ring-2 ring-card ${bg}`} />
            ))}
          </div>
          <div>
            <Stars />
            <p className="mt-1 text-[15px] font-semibold leading-tight">5.0 from 82+ reviews</p>
            <p className="text-xs text-muted">Real customers. Real results.</p>
          </div>
        </div>

        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className={itemClass}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background">
            <GoogleG />
          </span>
          <div className="flex-1">
            <p className="text-[15px] font-semibold leading-tight">Read Our Reviews</p>
            <p className="text-xs text-muted">See what homeowners are saying</p>
          </div>
          <ArrowRight size={18} className="text-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>

        <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className={itemClass}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
            <FacebookF />
          </span>
          <div className="flex-1">
            <p className="text-[15px] font-semibold leading-tight">Follow Us on Facebook</p>
            <p className="text-xs text-muted">Project updates and seasonal tips</p>
          </div>
          <ArrowRight size={18} className="text-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>

        <a href="#about" className={itemClass}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary">
            <MapPin size={22} aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p className="text-[15px] font-semibold leading-tight">Proudly Serving</p>
            <p className="text-xs text-muted">{SERVICE_AREA}</p>
          </div>
          <ArrowRight size={18} className="text-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
