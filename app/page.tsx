use client

import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react'

const phone = '(952) 395-6574'
const phoneHref = 'tel:+19523956574'
const email = 'Wayne@MarathonLawn.com'
const googleUrl = 'https://maps.app.goo.gl/3dXZ9345C2K9wy6KA'
const facebookUrl = 'https://www.facebook.com/marathonlcs/'

const images = [
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/6652F19E-322E-412A-B2B7-DF6EDE3625C2.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1600,cg:true',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/B8B63D30-6550-4BF1-A5AC-00748B50C2CD.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1600,h:1200,cg:true',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/A8F7A59E-B9F2-4D29-93D5-96BC0D6B01DC.png/:/rs=w:1600,cg:true,m',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/2AD18D65-0417-40F1-86E8-50074DB5CA87.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1600,cg:true',
  'https://img1.wsimg.com/isteam/ip/981a2dd6-0aff-4b3f-8ada-e5e843f9eead/409D34DD-077B-4A8B-B203-644F23E1D388.png/:/cr=t:0%,l:0%,w:100%,h:100%/rs=w:1600,cg:true',
  'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85',
]

const gallery = [
  ['See Our Work in Action', images[0], true],
  ['Clean Landscape Beds', images[1], false],
  ['Tree & Shrub Care', images[2], false],
  ['Seasonal Cleanups', images[3], false],
  ['Beautiful Results', images[4], false],
  ['Reliable Service', images[5], false],
] as const

const services = [
  { title: 'Lawn Care', price: 'From $50/week', image: images[0], text: 'Mowing, trimming, edging and cleanup for a consistently sharp lawn.' },
  { title: 'Landscape Add-Ons', price: 'From $75', image: images[1], text: 'Planting, bed cleanup, rock work, edging and small shrub removal.' },
  { title: 'Seasonal Cleanups', price: 'From $125', image: images[3], text: 'Spring and fall cleanup, leaf removal, bed cleanouts and debris pickup.' },
  { title: 'Additional Services', price: 'From $75', image: images[2], text: 'Pressure washing, sprinkler services and gutter cleaning.' },
]

const faqs = [
  ['How does your pricing work?', 'Pricing is based on time spent on the property, not lawn size. Small lawns up to 30 minutes are $50 weekly or $60 bi-weekly. Standard lawns from 30 to 60 minutes are $60 weekly or $75 bi-weekly.'],
  ['Do you offer one-time services?', 'Seasonal cleanups and additional services are available. Landscape add-ons are available to existing lawn care customers.'],
  ['What areas do you serve?', 'Marathon Lawn serves homeowners across Scott County and Dakota County, Minnesota.'],
  ['Are you insured?', 'Yes. Marathon Lawn is fully insured.'],
  ['How do I get started?', 'Request your free quote online or call (952) 395-6574.'],
  ['Do I need to be home?', 'No. As long as the property can be accessed and the lawn is clear, you do not need to be present.'],
]

function QuoteForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="quote-card" onSubmit={handleSubmit}>
      <p className="eyebrow">GET YOUR FREE QUOTE</p>
      <h2 className="display quote-title">Fast. Easy. No obligation.</h2>
      <p className="quote-copy">Tell us where you need help and we&apos;ll take it from there.</p>

      {sent ? (
        <div className="success-box">
          <Check size={21} />
          <div>
            <strong>Thanks. Your request is ready.</strong>
            <p>Call {phone} to finish your quote conversation.</p>
          </div>
        </div>
      ) : (
        <div className="quote-fields">
          <label><span>Full Name</span><input required name="name" autoComplete="name" placeholder="Full Name" /></label>
          <label><span>Phone Number</span><input required name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" /></label>
          <label><span>Email Address</span><input name="email" type="email" autoComplete="email" placeholder="Email Address" /></label>
          <label><span>ZIP Code</span><input required name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="ZIP Code" /></label>
          <button className="btn btn-primary quote-submit" type="submit">Get My Free Quote <ArrowRight size={18} /></button>
          <span className="secure-copy">Your information is used to start your quote conversation.</span>
        </div>
      )}
    </form>
  )
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Marathon Lawn Care & Services home">
      <span className="brand-mark" aria-hidden="true"><Leaf size={25} /></span>
      <span><strong>MARATHON</strong><small>LAWN CARE &amp; SERVICES</small></span>
    </a>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img className="hero-photo" src={images[0]} alt="" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-glow" />
        </div>

        <header className="site-header">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="active" href="#top">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#work">Our Work</a><a href="#about">About Us</a><a href="#faq">FAQs</a><a href="#quote">Contact</a>
          </nav>
          <div className="header-actions">
            <a className="phone-link" href={phoneHref}><Phone size={16} /> {phone}</a>
            <a className="btn btn-primary header-cta" href="#quote">Get Your Free Quote <ArrowRight size={16} /></a>
            <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
          </div>
        </header>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#top" onClick={closeMenu}>Home</a><a href="#services" onClick={closeMenu}>Services</a><a href="#pricing" onClick={closeMenu}>Pricing</a><a href="#work" onClick={closeMenu}>Our Work</a><a href="#about" onClick={closeMenu}>About Us</a><a href="#faq" onClick={closeMenu}>FAQs</a><a href="#quote" onClick={closeMenu}>Contact</a><a href={phoneHref}>Call {phone}</a>
          </nav>
        )}

        <div className="hero-inner container">
          <div className="hero-copy">
            <p className="hero-location">SCOTT COUNTY &amp; DAKOTA COUNTY, MINNESOTA</p>
            <h1 className="display">A Lawn You&apos;ll Love.<br /><span>Without the Hassle.</span></h1>
            <p className="hero-description">Reliable, owner-operated lawn care with upfront pricing, no surprise fees, and the same person every time. You get your weekends back. We&apos;ll handle the rest.</p>
            <div className="trust-points">
              <div><span><UserRound size={20} /></span><b>Owner Operated</b><small>Same person every time</small></div>
              <div><span><ShieldCheck size={20} /></span><b>Fully Insured</b><small>Your property is protected</small></div>
              <div><span><Leaf size={20} /></span><b>Commercial-Grade Equipment</b><small>A cleaner, better cut</small></div>
            </div>
            <div className="hero-actions"><a className="btn btn-primary" href="#quote">Get Your Free Quote <ArrowRight size={18} /></a><a className="btn btn-outline" href={phoneHref}><Phone size={17} /> Call {phone}</a></div>
          </div>
          <div className="hero-form-wrap"><QuoteForm /><div className="hand-note" aria-hidden="true">Real work.<br />Real results.<span>↘</span></div></div>
        </div>

        <div className="work-strip container" id="work">
          {gallery.map(([label, src, selected]) => (
            <a className={`work-thumb ${selected ? 'selected' : ''}`} href="#services" key={label}>
              <img src={src} alt={label} loading={selected ? 'eager' : 'lazy'} /><span className="work-thumb-overlay" /><span className="work-thumb-label">{label}</span>{selected && <span className="play-dot"><Play size={17} fill="currentColor" /></span>}
            </a>
          ))}
        </div>
      </section>

      <section className="proof-bar">
        <div className="container proof-grid">
          <div className="rating"><div className="avatar-stack" aria-hidden="true"><span>W</span><span>M</span><span>J</span><span>C</span></div><div><div className="stars">★★★★★</div><strong>Customer results</strong><small>Real work. Real results.</small></div></div>
          <a href={googleUrl} target="_blank" rel="noreferrer"><span className="proof-icon google">G</span><div><strong>Read Our Reviews</strong><small>See what homeowners are saying →</small></div></a>
          <a href={facebookUrl} target="_blank" rel="noreferrer"><span className="proof-icon fb"><Facebook size={20} /></span><div><strong>Follow Us on Facebook</strong><small>Project updates and seasonal tips →</small></div></a>
          <div><span className="proof-icon location"><MapPin size={19} /></span><div><strong>Proudly Serving</strong><small>Scott County &amp; Dakota County, MN</small></div></div>
        </div>
      </section>

      <section className="weekends section" id="about">
        <div className="container weekends-grid">
          <div>
            <p className="eyebrow">TAKE BACK YOUR WEEKENDS</p>
            <h2 className="display section-title">A Healthier, Happier Lawn Starts Here.</h2>
            <p className="section-copy">From weekly mowing to seasonal cleanups and landscape enhancements, Marathon Lawn delivers reliable, professional service that keeps your property looking its best without the stress.</p>
            <ul className="check-list"><li><Check size={18} />Upfront, time-based pricing</li><li><Check size={18} />Same person, every time</li><li><Check size={18} />Professional, detail-oriented service</li><li><Check size={18} />Fully insured for your peace of mind</li></ul>
            <a className="btn btn-primary" href="#quote">Get Your Free Quote <ArrowRight size={18} /></a>
          </div>
          <div className="before-after" aria-label="Before and after lawn care example">
            <div className="ba-before"><img src={images[1]} alt="Property before care" /><span>Before</span></div>
            <div className="ba-after"><img src={images[0]} alt="Property after care" /><span>After</span></div>
            <div className="ba-handle">↔</div>
            <div className="review-card"><div className="stars">★★★★★</div><p>“Professional, reliable and my lawn has never looked better.”</p><small>— Customer review placeholder</small></div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2 className="display section-title">Complete Lawn &amp; Property Care</h2><p className="section-copy">Everything you need to keep your property looking its best, all season long.</p></div><a className="btn btn-outline light-outline" href="#pricing">View Pricing <ArrowRight size={17} /></a></div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} alt="" loading="lazy" /></div><div className="service-content"><span className="service-icon"><Leaf size={19} /></span><h3>{service.title}</h3><p>{service.text}</p><a href="#quote">{service.price} <ArrowRight size={15} /></a></div></article>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing section">
        <div className="container pricing-grid">
          <div><p className="eyebrow">SIMPLE, UPFRONT PRICING</p><h2 className="display section-title">Know your price before we start.</h2><p className="section-copy">Pricing is based on time on the property, not lawn size. Weekly service keeps your lawn on a reliable schedule.</p><a className="text-link" href="#quote">Get a quote for your lawn <ArrowRight size={17} /></a></div>
          <div className="price-table"><div className="price-head"><span>Lawn</span><span>Weekly</span><span>Bi-weekly</span></div><div className="price-row featured"><div><b>Small</b><small>30 min or less</small></div><b>$50</b><b>$60</b></div><div className="price-row"><div><b>Standard</b><small>30–60 min</small></div><b>$60</b><b>$75</b></div><div className="price-note"><b>Every mow includes:</b> mowing, trimming, edging sidewalks as needed, and blowing hard surfaces clean.</div><div className="price-add-on"><span>Quick add-ons</span><b>$15 flat</b><small>During scheduled mow, about 15 minutes</small></div></div>
        </div>
      </section>

      <section className="how section">
        <div className="container how-grid">
          <div><p className="eyebrow">HOW IT WORKS</p><h2 className="display section-title">A simple process. A consistently great-looking lawn.</h2></div>
          <div className="steps"><div><span>1</span><b>Request a Quote</b><small>Fill out our quick form or give us a call.</small></div><div><span>2</span><b>Get Scheduled</b><small>We&apos;ll confirm your service and get you on the calendar.</small></div><div><span>3</span><b>We Take Care of the Rest</b><small>Same person. Every time. You enjoy the results.</small></div></div>
          <div className="matters-card"><img src={images[5]} alt="Family enjoying a well-kept lawn" loading="lazy" /><div><strong>More Time for<br />What Matters</strong><small>Let us handle the lawn, so you can get back to the things you love.</small></div></div>
        </div>
      </section>

      <section id="faq" className="faq section">
        <div className="container faq-grid"><div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 className="display section-title">Straight answers before you book.</h2><p className="section-copy">Quick answers to common questions about service, pricing and scheduling.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section id="quote" className="final-cta section">
        <div className="container final-grid"><div><p className="eyebrow">READY FOR A BETTER LAWN?</p><h2 className="display section-title">Get Your Free Quote Today</h2><p className="section-copy">Fast. Easy. No obligation. Tell us where you are and what you need.</p><div className="contact-lines"><a href={phoneHref}><Phone size={17} /> {phone}</a><a href={`mailto:${email}`}><Mail size={17} /> {email}</a><span><MapPin size={17} /> Scott County &amp; Dakota County, MN</span></div></div><QuoteForm /></div>
      </section>

      <footer>
        <div className="container footer-grid"><div><Brand /><p>Professional. Reliable. Local.</p></div><div className="footer-links"><strong>Quick Links</strong><a href="#top">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#work">Our Work</a><a href="#about">About Us</a><a href="#faq">FAQs</a></div><div className="footer-links"><strong>Contact</strong><a href={phoneHref}>{phone}</a><a href={`mailto:${email}`}>{email}</a><span>Open today, 9:00 am–5:00 pm</span></div><div className="footer-links"><strong>Follow Us</strong><a href={facebookUrl} target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook</a><a href={googleUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> Google Business</a><a className="btn btn-primary footer-cta" href="#quote">Get Your Free Quote <ArrowRight size={16} /></a></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Marathon Lawn. All rights reserved.</span><span>Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms of Service</span></div>
      </footer>

      <a className="mobile-sticky-cta" href="#quote">Get Your Free Quote <ArrowRight size={18} /></a>
    </main>
  )
}
