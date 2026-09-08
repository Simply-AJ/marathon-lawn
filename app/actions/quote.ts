'use server';

export type QuoteState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: Partial<Record<'name' | 'phone' | 'email' | 'zip', string>>;
  values?: Record<string, string>;
};

const clean = (v: FormDataEntryValue | null) => (typeof v === 'string' ? v.trim().slice(0, 200) : '');

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const values = {
    name: clean(formData.get('name')),
    phone: clean(formData.get('phone')),
    email: clean(formData.get('email')),
    zip: clean(formData.get('zip')),
  };

  // Honeypot: real users never see or fill this field.
  if (clean(formData.get('company'))) {
    return { status: 'success', message: 'Thanks! We will be in touch shortly.' };
  }

  const errors: QuoteState['errors'] = {};
  if (values.name.length < 2) errors.name = 'Please enter your full name.';
  if (values.phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a 10-digit phone number.';
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!/^\d{5}$/.test(values.zip)) errors.zip = 'Enter a 5-digit ZIP code.';

  if (Object.keys(errors).length) {
    return { status: 'error', errors, values, message: 'Please fix the highlighted fields.' };
  }

  console.log('New quote request', { ...values, receivedAt: new Date().toISOString() });

  return {
    status: 'success',
    message: `Thanks, ${values.name.split(' ')[0]}! Wayne will reach out at ${values.phone} to schedule your free quote.`,
  };
}
