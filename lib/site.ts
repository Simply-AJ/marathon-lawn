export const PHONE = '(952) 395-6574';
export const PHONE_HREF = 'tel:+19523956574';
export const EMAIL = 'Wayne@MarathonLawn.com';
export const SERVICE_AREA = 'Scott County & Dakota County, MN';
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Marathon%20Lawn%20Care%20%26%20Services%20Minnesota';
export const FACEBOOK_URL = 'https://www.facebook.com/search/top?q=Marathon%20Lawn%20Care';

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#quote' },
] as const;

export const GALLERY = [
  { src: '/images/work-mowing.png', label: 'See Our Work in Action', alt: 'Freshly mowed front lawn with crisp stripes under mature shade trees', video: true },
  { src: '/images/work-beds.png', label: 'Clean Landscape Beds', alt: 'Landscape bed with fresh black mulch and trimmed boxwoods along a paver walkway' },
  { src: '/images/work-shrubs.png', label: 'Tree & Shrub Care', alt: 'Landscaper trimming a tall row of arborvitae with a pole hedge trimmer' },
  { src: '/images/work-cleanup.png', label: 'Seasonal Cleanups', alt: 'Large pile of raked autumn leaves in front of a suburban home' },
  { src: '/images/work-results.png', label: 'Beautiful Results', alt: 'Landscaped front yard with a curved paver walkway and layered shrubs' },
  { src: '/images/work-chainsaw.png', label: 'Reliable Service', alt: 'Gloved hands using a chainsaw to cut a tree branch' },
];

export const SERVICES = [
  {
    icon: 'lawn',
    title: 'Lawn Care',
    text: 'Mowing, trimming, edging and clean-up',
    price: '$50/week',
    detail: 'Weekly or bi-weekly mowing, trimming, edging sidewalks and blowing hard surfaces clean.',
  },
  {
    icon: 'landscape',
    title: 'Landscape Add-Ons',
    text: 'Planting, bed cleanup, rock work & more',
    price: 'From $75',
    detail: 'Planting, bed cleanup, decorative rock work, edging and small shrub removal.',
  },
  {
    icon: 'seasonal',
    title: 'Seasonal Cleanups',
    text: 'Spring & fall cleanups, leaf removal',
    price: 'From $125',
    detail: 'Spring and fall cleanup, leaf removal, bed cleanouts and debris pickup.',
  },
  {
    icon: 'additional',
    title: 'Additional Services',
    text: 'Pressure washing, sprinklers, gutter cleaning',
    price: 'From $75',
    detail: 'Pressure washing, sprinkler start-up and shut-down, and gutter cleaning.',
  },
] as const;

export const FAQS = [
  {
    q: 'How is lawn care priced?',
    a: 'Pricing is based on time spent on your property, not a guess at lawn size. Small lawns (up to 30 minutes) are $50 weekly or $60 bi-weekly. Standard lawns (30 to 60 minutes) are $60 weekly or $75 bi-weekly.',
  },
  {
    q: 'Do I need to be home?',
    a: 'No. As long as we can access the property and the lawn is clear of toys, hoses and pet waste, you do not need to be home.',
  },
  { q: 'How do I pay?', a: 'Marathon Lawn accepts cash, check, Zelle, Venmo and Cash App. Invoices are sent after each visit.' },
  {
    q: 'What happens if it rains?',
    a: 'Service moves when weather makes mowing impractical and is rescheduled for the next available dry day. You will always get a heads-up.',
  },
  { q: 'Are you insured?', a: 'Yes. Marathon Lawn is fully insured, so your property is protected every visit.' },
  {
    q: 'Do I need a service agreement?',
    a: 'A simple service agreement is required for recurring lawn care so we both know what to expect, but it is not a long-term commitment.',
  },
];
