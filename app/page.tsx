'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Leaf, MapPin, Menu, Phone, ShieldCheck, UserRound, X } from 'lucide-react'

const phone = '(952) 395-6574'
const phoneHref = 'tel:+19523956574'
const googleUrl = 'https://maps.app.goo.gl/3dXZ9345C2K9wy6KA'
const facebookUrl = 'https://www.facebook.com/marathonlcs/'

// Supplied Marathon Lawn photography only. No external image hosts.
const workImages = [
  '/marathon/hero-person.jpg',
  '/marathon/before.jpg',
  '/marathon/after.jpg',
  '/marathon/hero-person.jpg',
]

const faqs = [
  ['How does your pricing work?', 'Pricing is based on time spent on the property, not lawn size. Small lawns up to 30 minutes are $50 weekly or $60 bi-weekly. Standard lawns from 30 to 60 minutes are $60 weekly or $75 bi-weekly.'],
  ['Do you offer one-time services?', 'Seasonal cleanups and additional services are available. Landscape add-ons are available to existing lawn care customers.'],
  ['What areas do you serve?', 'Marathon Lawn serves homeowners across Scott County and Dakota County, Minnesota.'],
  ['Are you insured?', 'Yes. Marathon Lawn is fully insured.'],
  ['How do I get started?', 'Request your free quote online or call (952) 395-6574.'],
  ['Do I need to be home?', 'No. As long as the property can be accessed and the lawn is clear, you do not need to be present.'],
]

function Brand(){return <a className="ml-brand" href="#top" aria-label="Marathon Lawn home"><span className="ml-brand-mark"><Leaf size={22}/></span><span><strong>MARATHON</strong><small>LAWN CARE &amp; SERVICES</small></span></a>}

function QuoteForm(){
  const [sent,setSent]=useState(false)
  if(sent) return <div className="ml-quote"><p className="ml-eyebrow">REQUEST RECEIVED</p><h2 className="ml-display">We&apos;ll take it from here.</h2><p>Thanks for reaching out. Call {phone} to finish your quote conversation.</p><a className="ml-btn ml-btn-dark" href={phoneHref}>Call Marathon Lawn <Phone size={16}/></a></div>
  return <form className="ml-quote" onSubmit={e=>{e.preventDefault();setSent(true)}}><p className="ml-eyebrow">GET YOUR FREE QUOTE</p><h2 className="ml-display">Fast. Easy. No obligation.</h2><p>Tell us where you need help and we&apos;ll take it from there.</p><div className="ml-fields"><input required placeholder="Full Name" aria-label="Full Name"/><input required type="tel" placeholder="Phone Number" aria-label="Phone Number"/><input type="email" placeholder="Email Address" aria-label="Email Address"/><input required inputMode="numeric" placeholder="ZIP Code" aria-label="ZIP Code"/><button className="ml-btn ml-btn-primary" type="submit">Get My Free Quote <ArrowRight size={17}/></button><span className="ml-secure">Your information is used to start your quote conversation.</span></div></form>
}

export default function Home(){
  const [menu,setMenu]=useState(false)
  const close=()=>setMenu(false)
  return <main id="top" className="ml-page">
    <section className="ml-hero">
      <div className="ml-hero-media" aria-hidden="true"/>
      <header className="ml-header ml-container">
        <Brand/>
        <nav className="ml-nav" aria-label="Main navigation"><a href="#top">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#work">Our Work</a><a href="#about">About Us</a><a href="#faq">FAQs</a><a href="#quote">Contact</a></nav>
        <div className="ml-header-actions"><a className="ml-phone" href={phoneHref}><Phone size={14}/> {phone}</a><a className="ml-btn ml-btn-primary" href="#quote">Get Your Free Quote <ArrowRight size={15}/></a><button className="ml-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X size={20}/>:<Menu size={20}/>}</button></div>
      </header>
      {menu&&<nav className="ml-mobile-nav ml-container"><a onClick={close} href="#top">Home</a><a onClick={close} href="#services">Services</a><a onClick={close} href="#pricing">Pricing</a><a onClick={close} href="#work">Our Work</a><a onClick={close} href="#about">About Us</a><a onClick={close} href="#faq">FAQs</a><a onClick={close} href="#quote">Contact</a></nav>}
      <div className="ml-hero-grid ml-container">
        <div><p className="ml-location">SCOTT COUNTY &amp; DAKOTA COUNTY, MINNESOTA</p><h1 className="ml-display">A Lawn You&apos;ll Love.<br/><span>Without the Hassle.</span></h1><p className="ml-lead">Reliable, owner-operated lawn care with upfront pricing, no surprise fees, and the same person every time. You get your weekends back. We&apos;ll handle the rest.</p><div className="ml-trust"><div className="ml-trust-item"><span className="ml-trust-icon"><UserRound size={17}/></span><b>Owner Operated</b><small>Same person every time</small></div><div className="ml-trust-item"><span className="ml-trust-icon"><ShieldCheck size={17}/></span><b>Fully Insured</b><small>Your property is protected</small></div><div className="ml-trust-item"><span className="ml-trust-icon"><Leaf size={17}/></span><b>Commercial-Grade Equipment</b><small>A cleaner, better cut</small></div></div><div className="ml-hero-actions"><a className="ml-btn ml-btn-primary" href="#quote">Get Your Free Quote <ArrowRight size={17}/></a><a className="ml-btn ml-btn-outline" href={phoneHref}><Phone size={16}/> Call {phone}</a></div></div>
        <div id="quote"><QuoteForm/></div>
      </div>
      <div id="work" className="ml-work ml-container">{workImages.concat(workImages.slice(0,2)).map((src,i)=><a className={`ml-work-card ${i===0?'selected':''}`} href="#services" key={i}><img src={src} alt="Marathon Lawn project"/><span>{['See Our Work in Action','Clean Landscape Beds','Tree & Shrub Care','Seasonal Cleanups','Beautiful Results','Reliable Service'][i]}</span></a>)}</div>
    </section>

    <section className="ml-proof"><div className="ml-proof-grid ml-container"><div className="ml-proof-item"><div className="ml-stars">★★★★★</div><div><strong>Customer results</strong><small>Real work. Real results.</small></div></div><a className="ml-proof-item" href={googleUrl} target="_blank" rel="noreferrer"><span className="ml-proof-icon">G</span><div><strong>Read Our Reviews</strong><small>See what homeowners are saying →</small></div></a><a className="ml-proof-item" href={facebookUrl} target="_blank" rel="noreferrer"><span className="ml-proof-icon">f</span><div><strong>Follow Us on Facebook</strong><small>Project updates and seasonal tips →</small></div></a><div className="ml-proof-item"><span className="ml-proof-icon"><MapPin size={18}/></span><div><strong>Proudly Serving</strong><small>Scott County &amp; Dakota County, MN</small></div></div></div></section>

    <section id="about" className="ml-section"><div className="ml-container ml-split"><div><p className="ml-eyebrow">TAKE BACK YOUR WEEKENDS</p><h2 className="ml-display">A Healthier, Happier Lawn Starts Here.</h2><p className="ml-copy">From weekly mowing to seasonal cleanups and landscape enhancements, Marathon Lawn delivers reliable, professional service that keeps your property looking its best without the stress.</p><ul className="ml-checks"><li><Check/>Upfront, time-based pricing</li><li><Check/>Same person, every time</li><li><Check/>Professional, detail-oriented service</li><li><Check/>Fully insured for your peace of mind</li></ul><a className="ml-btn ml-btn-dark" href="#quote">Get Your Free Quote <ArrowRight size={17}/></a></div><div className="ml-before-after"><div className="ml-before"><img src="/marathon/before.jpg" alt="Property before lawn care"/><span className="ml-label">Before</span></div><div className="ml-after"><img src="/marathon/after.jpg" alt="Property after lawn care"/><span className="ml-label">After</span></div><div className="ml-handle">↔</div><div className="ml-review"><div className="ml-stars">★★★★★</div><p>“Professional, reliable and my lawn has never looked better.”</p><small>— Marathon Lawn customer</small></div></div></div></section>

    <section id="services" className="ml-section ml-services"><div className="ml-container"><div className="ml-section-head"><div><p className="ml-eyebrow">OUR SERVICES</p><h2 className="ml-display">Complete Lawn &amp; Property Care</h2><p className="ml-copy">Everything you need to keep your property looking its best, all season long.</p></div><a className="ml-btn ml-btn-outline" href="#pricing">View Pricing <ArrowRight size={16}/></a></div><div className="ml-service-grid">{[['Lawn Care','/marathon/hero-person.jpg','From $50/week','Mowing, trimming, edging and cleanup for a consistently sharp lawn.'],['Landscape Add-Ons','/marathon/before.jpg','From $75','Planting, bed cleanup, rock work, edging and small shrub removal.'],['Seasonal Cleanups','/marathon/after.jpg','From $125','Spring and fall cleanup, leaf removal, bed cleanouts and debris pickup.'],['Additional Services','/marathon/hero-person.jpg','From $75','Pressure washing, sprinkler services and gutter cleaning.']].map(([title,img,price,text])=><article className="ml-service" key={title}><div className="ml-service-img"><img src={img} alt=""/></div><div className="ml-service-body"><h3>{title}</h3><p>{text}</p><a href="#quote">{price} <ArrowRight size={14}/></a></div></article>)}</div></div></section>

    <section id="pricing" className="ml-section ml-pricing"><div className="ml-container ml-pricing-grid"><div><p className="ml-eyebrow">SIMPLE, UPFRONT PRICING</p><h2 className="ml-display">Know your price before we start.</h2><p className="ml-copy">Pricing is based on time on the property, not lawn size. Weekly service keeps your lawn on a reliable schedule.</p><a className="ml-btn ml-btn-dark" href="#quote">Get a quote for your lawn <ArrowRight size={16}/></a></div><div className="ml-price-box"><div className="ml-price-head"><span>Lawn</span><span>Weekly</span><span>Bi-weekly</span></div><div className="ml-price-row featured"><div><b>Small</b><small>30 min or less</small></div><b>$50</b><b>$60</b></div><div className="ml-price-row"><div><b>Standard</b><small>30–60 min</small></div><b>$60</b><b>$75</b></div><div className="ml-price-note"><b>Every mow includes:</b> mowing, trimming, edging sidewalks as needed, and blowing hard surfaces clean.</div></div></div></section>

    <section className="ml-section ml-how"><div className="ml-container ml-how-grid"><div><p className="ml-eyebrow">HOW IT WORKS</p><h2 className="ml-display">A simple process. A consistently great-looking lawn.</h2></div><div className="ml-steps"><div className="ml-step"><span>1</span><div><b>Request a Quote</b><small>Fill out our quick form or give us a call.</small></div></div><div className="ml-step"><span>2</span><div><b>Get Scheduled</b><small>We&apos;ll confirm your service and get you on the calendar.</small></div></div><div className="ml-step"><span>3</span><div><b>We Take Care of the Rest</b><small>Same person. Every time. You enjoy the results.</small></div></div></div><div className="ml-matters"><img src="/marathon/after.jpg" alt="Well-kept lawn"/><div className="ml-matters-copy"><strong>More Time for<br/>What Matters</strong><small>Let us handle the lawn, so you can get back to the things you love.</small></div></div></div></section>

    <section id="faq" className="ml-section ml-faq"><div className="ml-container ml-faq-grid"><div><p className="ml-eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 className="ml-display">Straight answers before you book.</h2></div><div className="ml-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={17}/></summary><p>{a}</p></details>)}</div></div></section>

    <section className="ml-section ml-final"><div className="ml-container ml-final-grid"><div><p className="ml-eyebrow">READY TO TAKE YOUR WEEKENDS BACK?</p><h2 className="ml-display">Let&apos;s get your lawn handled.</h2><p className="ml-copy">Reliable service, clear pricing and a lawn you&apos;ll be proud to come home to.</p></div><div className="ml-contact"><a className="ml-btn ml-btn-dark" href="#quote">Get Your Free Quote <ArrowRight size={17}/></a><a href={phoneHref}><Phone size={15}/> {phone}</a><span>Wayne@MarathonLawn.com</span></div></div></section>

    <footer className="ml-footer"><div className="ml-container ml-footer-grid"><div><Brand/><p>Owner-operated lawn care and property services for Scott County and Dakota County, Minnesota.</p></div><div className="ml-footer-links"><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#work">Our Work</a><a href="#faq">FAQs</a></div><div className="ml-footer-links"><a href={phoneHref}>{phone}</a><a href="mailto:Wayne@MarathonLawn.com">Wayne@MarathonLawn.com</a><a href={googleUrl} target="_blank" rel="noreferrer">Google Reviews</a></div><a className="ml-btn ml-btn-primary" href="#quote">Get Your Free Quote</a></div></footer>
  </main>
}
