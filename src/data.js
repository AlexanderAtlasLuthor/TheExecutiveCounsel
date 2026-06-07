// Shared content for The Executive Counsel site.
// Centralized so every page renders from a single source of truth.

export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Why Join', path: '/why-join' },
  { name: 'Membership', path: '/membership' },
  { name: 'Events', path: '/events' },
  { name: 'Launch Reception', path: '/launch' },
  { name: 'Sponsorship', path: '/sponsorship' },
  { name: 'Standards', path: '/standards' },
  { name: 'Vision', path: '/vision' },
  { name: 'Apply', path: '/apply' },
];

export const membershipTiers = [
  {
    id: 'silver',
    name: 'Silver',
    price: '495',
    tagline: 'Essential Membership',
    features: [
      'Access to 4 exclusive events annually',
      'Member directory access',
      'Priority event invitations',
      'Digital member credential',
      'Quarterly communications',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '1,495',
    tagline: 'Premium Access',
    features: [
      'All Silver benefits',
      'Unlimited event access',
      'VIP seating at events',
      'Two complimentary guest passes',
      'Priority introductions',
      'Exclusive networking calls',
    ],
    featured: true,
    label: 'Most Popular',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '4,995',
    tagline: 'Elite Leadership',
    features: [
      'All Gold benefits',
      'Dedicated concierge service',
      'Private curated member dinners',
      'VIP reception access',
      'Executive advisory access',
      'Founder-level recognition',
      'Exclusive investor & executive events',
    ],
    label: 'Concierge Access',
  },
];

export const features = [
  { icon: '◆', title: 'Curated Introductions' },
  { icon: '◇', title: 'Exclusive Social Events' },
  { icon: '▲', title: 'Executive Networking' },
  { icon: '●', title: 'VIP Experiences' },
  { icon: '◈', title: 'Private Dinners' },
  { icon: '▬', title: 'Luxury Travel' },
  { icon: '⬥', title: 'Community Engagement' },
  { icon: '○', title: 'Invitation-Only Access' },
];

export const events = [
  {
    title: 'Executive Counsel Soirée',
    frequency: 'Monthly',
    description: 'An elegant evening of cocktails, networking, and curated introductions for accomplished professionals.',
    icon: '◇',
  },
  {
    title: 'Black Tie Connections Gala',
    frequency: 'Quarterly',
    description: 'A formal gala featuring live entertainment, philanthropy, and executive-level networking.',
    icon: '▲',
  },
  {
    title: 'Founders & Leaders Dinner',
    frequency: 'Invitation Only',
    description: 'An intimate dinner experience for CEOs, business owners, investors, and industry leaders.',
    icon: '◆',
  },
  {
    title: 'Executive Weekend Retreats',
    frequency: 'Quarterly',
    description: 'Luxury travel experiences designed to strengthen relationships among members.',
    icon: '⬥',
  },
];

export const sponsorships = [
  {
    tier: 'Presenting Sponsor',
    price: '$25,000',
    benefits: [
      'Event naming rights',
      'Speaking opportunity',
      'Premium logo placement',
      'VIP table for 10',
      'Membership package',
      'Featured in all marketing',
    ],
  },
  {
    tier: 'Platinum Sponsor',
    price: '$10,000',
    benefits: [
      'VIP table for 8',
      'Promotional materials placement',
      'Event recognition',
      'Website inclusion',
    ],
  },
  {
    tier: 'Gold Sponsor',
    price: '$5,000',
    benefits: [
      'VIP seating',
      'Event signage',
      'Marketing recognition',
    ],
  },
  {
    tier: 'Silver Sponsor',
    price: '$2,500',
    benefits: [
      'Event recognition',
      'Marketing materials',
      'Two tickets',
    ],
  },
];

export const idealSponsors = [
  'Wealth Management Firms',
  'Luxury Automobile Dealerships',
  'Private Aviation Companies',
  'Law Firms',
  'Accounting Firms',
  'Luxury Real Estate Brokerages',
  'Medical Practices',
  'Insurance Agencies',
];

export const visionCities = [
  'Miami', 'Fort Lauderdale', 'Boca Raton', 'Naples', 'Tampa', 'Orlando', 'Jacksonville',
];

export const memberTypes = [
  'CEOs & Entrepreneurs',
  'Executives & Investors',
  'Attorneys & Physicians',
  'Business Owners',
  'Retired Professionals',
  'Community Leaders',
];

export const standardsSteps = [
  'Professional Profile Review',
  'Identity Verification',
  'Background Screening',
  'Professional References',
  'Committee Interview',
  'Values Alignment',
];
