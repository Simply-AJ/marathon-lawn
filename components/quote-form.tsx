'use client';

import { useActionState, useId } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Lock, Mail, MapPin, Phone, User } from 'lucide-react';
import { submitQuote, type QuoteState } from '@/app/actions/quote';

const initialState: QuoteState = { status: 'idle' };

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', icon: User, autoComplete: 'name', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, autoComplete: 'tel', required: true },
  { name: 'email', label: 'Email Address', type: 'email', icon: Mail, autoComplete: 'email', required: false },
  { name: 'zip', label: 'ZIP Code', type: 'text', icon: MapPin, autoComplete: 'postal-code', required: true, inputMode: 'numeric' as const },
] as const;

export function QuoteForm({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const [state, action, pending] = useActionState(submitQuote, initialState);
  const id = useId();
  const dark = variant === 'dark';

  return (
    <div
      className={`w-full rounded-2xl p-5 shadow-2xl sm:p-6 ${
        dark ? 'bg-forest-light text-primary-foreground ring-1 ring-white/10' : 'bg-card text-card-foreground ring-1 ring-border'
      }`}
    >
      <h2 className="font-serif text-[28px] font-semibold leading-tight tracking-tight">Get Your Free Quote</h2>
      <p className={`mt-1 text-[15px] ${dark ? 'text-white/80' : 'text-muted'}`}>Fast. Easy. No obligation.</p>

      {state.status === 'success' ? (
        <div role="status" className="mt-5 flex gap-3 rounded-xl bg-primary/15 p-4 ring-1 ring-primary/40">
          <CheckCircle2 className="mt-0.5 shrink-0 text-lime" size={22} aria-hidden="true" />
          <div>
            <p className="font-semibold">Quote request received.</p>
            <p className={`mt-1 text-sm leading-relaxed ${dark ? 'text-white/80' : 'text-muted'}`}>{state.message}</p>
          </div>
        </div>
      ) : (
        <form action={action} noValidate className="mt-5 rounded-xl bg-background p-3 text-foreground">
          <div className="flex flex-col gap-2.5">
            {fields.map(({ name, label, type, icon: Icon, autoComplete, required, ...rest }) => {
              const error = state.errors?.[name];
              const inputId = `${id}-${name}`;
              return (
                <div key={name}>
                  <label htmlFor={inputId} className="sr-only">
                    {label}
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-lg border bg-card px-3.5 transition-shadow focus-within:ring-2 focus-within:ring-ring ${
                      error ? 'border-red-500' : 'border-border'
                    }`}
                  >
                    <Icon size={18} className="shrink-0 text-muted" aria-hidden="true" />
                    <input
                      id={inputId}
                      name={name}
                      type={type}
                      required={required}
                      autoComplete={autoComplete}
                      placeholder={label}
                      defaultValue={state.values?.[name] ?? ''}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? `${inputId}-error` : undefined}
                      className="h-12 w-full bg-transparent text-[15px] outline-none placeholder:text-muted/80"
                      {...rest}
                    />
                  </div>
                  {error && (
                    <p id={`${inputId}-error`} className="mt-1 px-1 text-xs font-medium text-red-600">
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor={`${id}-company`}>Company</label>
              <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-primary text-[16px] font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary-hover disabled:cursor-wait disabled:opacity-80"
            >
              {pending ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : null}
              {pending ? 'Sending…' : 'Get My Free Quote'}
              {!pending && <ArrowRight size={18} aria-hidden="true" />}
            </button>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted">
            <Lock size={11} className="text-primary" aria-hidden="true" />
            Your information is secure and never shared.
          </p>
        </form>
      )}
    </div>
  );
}
