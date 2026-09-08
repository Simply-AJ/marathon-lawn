'use client';

import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Leaf, Mail, MapPin, Phone, ShieldCheck, UserRound } from 'lucide-react';

const phone = '(952) 395-6574';
const maps = 'https://www.google.com/maps/search/?api=1&query=Marathon%20Lawn%20%28952%29%20395-6574';
const facebook = 'https://www.facebook.com/search/top?q=Marathon%20Lawn';

const realImages = [
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/6652F19E-322E-412A-B2B7-DF6EDE3625C2.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1200,cg:true',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/B8B63D30-6550-4BF1-A5AC-00748B50C2CD.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1200,h:1600,cg:true',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/A8F7A59E-B9F2-4D29-93D5-96BC0D6B01DC.png/:/rs=w:1200,cg:true,m',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/2AD18D65-0417-40F1-86E8-50074DB5CA87.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1200,cg:true',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/409D34DD-077B-4A8B-B203-644F23E1D388.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1200,cg:true',
];

const gallery = realImages.map((src, i) => ({ src, label: ['Marathon Lawn work', 'Property care', 'Lawn maintenance', 'Seasonal service', 'Professional service'][i] }));

const services = [
  { title: 'Lawn Care', price: '$50/week', text: 'Weekly or bi-weekly mowing, trimming, edging and cleanup.' },
  { title: 'Property Services', price: 'From $75', text: 'Planting, bed cleanup, decorative rock work, edging and small shrub removal.' },
  { title: 'Seasonal Cleanups', price: 'From $125', text: 'Spring and fall cleanup, leaf removal, bed cleanouts and debris pickup.' },
  { title: 'Additional Services', price: 'From $75', text: 'Pressure washing, sprinkler services and gutter cleaning.' },
];

const faqs = [
  ['How is lawn care priced?', 'Pricing is based on time spent on your property, not an estimate of lawn size. Small lawns up to 30 minutes are $50 weekly or $60 bi-weekly. Standard lawns from 30 to 60 minutes are $60 weekly or $75 bi-weekly.'],
  ['Do I need to be home?', 'No. As long as the crew can access the property and the lawn is clear, you do not need to be home.'],
  ['How do I pay?', 'Marathon Lawn accepts cash, check, Zelle, Venmo and Cash App.'],
  ['What happens if it rains?', 'Service is moved when weather makes mowing impractical and rescheduled for the next available day.'],
  ['Are you insured?', 'Yes. Marathon Lawn is fully insured.'],
  ['Do I need a service agreement?', 'A service agreement is required for recurring lawn care, but it is not a long-term commitment.'],
];

function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="quote-card" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <p className="eyebrow">Free instant quote</p><h2 className="display quote-title">Tell us where you need help.</h2><p className="quote-copy">Fast. Simple. No obligation.</p>
      {sent ? <div className="success-box"><Check size={20} /><div><strong>Quote request ready.</strong><p>Thanks. Call {phone} to finish scheduling your free quote.</p></div></div> : <div className="quote-fields"><input required name="name" placeholder="Full name" /><input required name="phone" type="tel" placeholder="Phone number" /><input name="email" type="email" placeholder="Email address" /><input required name="zip" inputMode="numeric" placeholder="ZIP code" /><button className="btn btn-primary" type="submit">Get My Free Quote <ArrowRight size={18} /></button><span className="secure-copy">Your information is used to start your quote conversation.</span></div>}
    </form>
  );
}

export default function Home() {
  return <main id="top">
    <section className="hero">
      <div className="hero-media" aria-hidden="true"><div className="hero-image" /><div className="hero-shade" /><div className="hero-glow" /></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marathon Lawn Care & Services home"><span className="brand-mark"><Leaf size={24} /></span><span><strong>MARATHON</strong><small>LAWN CARE & SERVICES</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a className="active" href="#top">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#work">Our Work</a><a href="#faq">FAQs</a><a href="#quote">Contact</a></nav>
        <div className="header-actions"><a className="phone-link" href={`tel:${phone.replace(/[^0-9+]/g, '')}`}><Phone size={17} /> {phone}</a><a className="btn btn-primary header-cta" href="#quote">Get Your Free Quote <ArrowRight size={17} /></a></div>
      </header>
      <div className="hero-inner container">
        <div className="hero-copy"><p className="hero-location">SCOTT COUNTY & DAKOTA COUNTY, MINNESOTA</p><h1 className="display">A Lawn You'll Love.<br /><span>Without the Hassle.</span></h1><p className="hero-description">Reliable, owner-operated lawn care with upfront pricing, no surprise fees, and the same person every time. You get your weekends back. We'll handle the rest.</p><div className="trust-points"><div><span><UserRound size={21} /></span><b>Owner Operated</b><small>Same person every time</small></div><div><span><ShieldCheck size={21} /></span><b>Fully Insured</b><small>Your property is protected</small></div><div><span><Leaf size={21} /></span><b>Commercial-Grade Equipment</b><small>A cleaner, better cut</small></div></div><div className="hero-actions"><a className="btn btn-primary" href="#quote">Get Your Free Quote <ArrowRight size={19} /></a><a className="btn btn-outline" href={`tel:${phone.replace(/[^0-9+]/g, '')}`}><Phone size={18} /> Call {phone}</a></div></div>
        <div className="hero-form-wrap"><QuoteForm /><div className="hand-note">Real work.<br />Real results.</div></div>
      </div>
      <div className="work-strip container" id="work">{gallery.map((item, i) => <a className={`work-thumb ${i === 0 ? 'selected' : ''}`} href="#services" key={item.label}><img src={item.src} alt={item.label} loading={i === 0 ? 'eager' : 'lazy'} /><span>{item.label}</span>{i === 0 && <span className="play-dot">▶</span>}</a>)}</div>
    </section>

    <section className="proof-bar"><div className="container proof-grid"><div className="rating"><div className="avatar-stack"><span>W</span><span>M</span><span>J</span><span>C</span></div><div><div className="stars">★★★★★</div><strong>Real customer results</strong><small>Reviews are being added</small></div></div><a href={maps} target="_blank" rel="noreferrer"><span className="proof-icon google">G</span><div><strong>Find Us on Google</strong><small>Open the Google Maps search</small></div><ArrowRight size={18} /></a><a href={facebook} target="_blank" rel="noreferrer"><span className="proof-icon fb"><Mail size={20} /></span><div><strong>Stay Connected</strong><small>Find Marathon Lawn online</small></div><ArrowRight size={18} /></a><div><span className="proof-icon location"><MapPin size={20} /></span><div><strong>Proudly Serving</strong><small>Scott County & Dakota County, MN</small></div><ArrowRight size={18} /></div></div></section>

    <section className="weekends section"><div className="container weekends-grid"><div><p className="eyebrow">TAKE BACK YOUR WEEKENDS</p><h2 className="display section-title">A Healthier, Happier Lawn Starts Here.</h2><p className="section-copy">From weekly mowing to seasonal cleanups and property care, Marathon Lawn keeps your property looking its best without the stress.</p><ul className="check-list"><li><Check size={18} />Upfront, time-based pricing</li><li><Check size={18} />Same person, every time</li><li><Check size={18} />Professional, detail-oriented service</li><li><Check size={18} />Fully insured for your peace of mind</li></ul><a className="btn btn-primary" href="#quote">Get Your Free Quote <ArrowRight size={18} /></a></div><div className="before-after"><div className="ba-before"><img src={realImages[1]} alt="Marathon Lawn property before care" /><span>Before</span></div><div className="ba-after"><img src={realImages[0]} alt="Marathon Lawn completed property care" /><span>After</span></div><div className="ba-handle">↔</div><div className="review-card"><div className="stars">★★★★★</div><p>“Professional, reliable and my lawn has never looked better.”</p><small>— Review placeholder</small></div></div></div></section>

    <section id="services" className="services-section section"><div className="container"><div className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2 className="display section-title">Complete Lawn & Property Care</h2><p className="section-copy">Everything you need to keep your property looking its best, all season long.</p></div><a className="btn btn-outline" href="#quote">View All Services <ArrowRight size={18} /></a></div><div className="service-grid">{services.map((s, i) => <article className="service-card" key={s.title}><span className="service-number">0{i + 1}</span><h3>{s.title}</h3><strong>{s.price}</strong><p>{s.text}</p><a href="#quote">Get a Quote for This <ArrowRight size={16} /></a></article>)}</div></div></section>

    <section id="pricing" className="pricing section"><div className="container pricing-grid"><div><p className="eyebrow">LAWN CARE PRICING</p><h2 className="display section-title">Know your price before we start.</h2><p className="section-copy">Pricing is based on time on the property. Weekly service is the best value if you want your lawn handled without thinking about it.</p><a className="text-link" href="#quote">Get a quote for your lawn <ArrowRight size={17} /></a></div><div className="price-table"><div className="price-head"><span>Lawn</span><span>Weekly</span><span>Bi-weekly</span></div><div className="price-row"><div><b>Small</b><small>30 min or less</small></div><b>$50</b><b>$60</b></div><div className="price-row featured"><div><b>Standard</b><small>30–60 min</small></div><b>$60</b><b>$75</b></div><p><b>Every mow includes:</b> mowing, trimming, edging sidewalks as needed, and blowing hard surfaces clean.</p></div></div></section>

    <section id="faq" className="faq section"><div className="container faq-grid"><div><p className="eyebrow">FAQ</p><h2 className="display section-title">Straight answers before you book.</h2></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></div></section>

    <section id="quote" className="final-cta section"><div className="container final-grid"><div><p className="eyebrow">GET STARTED</p><h2 className="display section-title">Get the lawn off your weekend list.</h2><p className="section-copy">Tell Marathon Lawn where you are. We'll help you get a clear quote and a schedule you can count on.</p><div className="contact-lines"><a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a><a href="mailto:Wayne@MarathonLawn.com">Wayne@MarathonLawn.com</a><span>Open today, 9:00 am–5:00 pm</span></div></div><QuoteForm /></div></section>

    <footer><div className="container footer-grid"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Leaf size={24} /></span><span><strong>MARATHON</strong><small>LAWN CARE & SERVICES</small></span></a><p>Owner-operated lawn care for Scott County & Dakota County, Minnesota.</p><div><a href={maps} target="_blank" rel="noreferrer">Google Maps</a><a href="mailto:Wayne@MarathonLawn.com">Email</a></div><a className="footer-phone" href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a></div></footer>
    <a className="mobile-sticky-cta" href="#quote">Get Your Free Quote <ArrowRight size={18} /></a>
  </main>;
}
