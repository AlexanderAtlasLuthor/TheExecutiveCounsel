import React from 'react';
import {
  BadgeCheck,
  BadgeDollarSign,
  GlassWater,
  MapPin,
  Music,
  Presentation,
  Sparkles,
  Ticket,
  UsersRound,
  Wine,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';

const details = [
  { icon: MapPin, label: 'Luxury Venue', value: 'South Florida' },
  { icon: UsersRound, label: 'Guest List', value: '100 Invited Guests' },
  { icon: BadgeCheck, label: 'Dress Code', value: 'Business Elegant' },
  { icon: Ticket, label: 'Ticket Price', value: '$199' },
  { icon: BadgeDollarSign, label: 'VIP Tables', value: '$2,500 Sponsor Tables' },
  { icon: MapPin, label: 'Target Cities', value: 'Miami, Fort Lauderdale, Boca Raton' },
];

const program = [
  { icon: GlassWater, title: 'Cocktail Reception', description: 'A polished arrival experience with a curated guest mix.' },
  { icon: Sparkles, title: 'Curated Introductions', description: 'Hosted connection moments that help the right people meet.' },
  { icon: Music, title: 'Live Music', description: 'An elegant atmosphere designed for conversation and energy.' },
  { icon: Wine, title: 'Champagne Toast', description: 'A formal welcome to the founding class and launch guests.' },
  { icon: Presentation, title: 'Membership Presentation', description: 'A concise look at the circle, standards, and founding opportunity.' },
];

export default function LaunchReception() {
  return (
    <>
      <PageBanner
        eyebrow="Inaugural Reception"
        title="The Executive Circle"
        accent="Inaugural Reception"
        subtitle="An invitation-only launch bringing together a curated guest list of South Florida's accomplished leaders."
        actions={[
          { label: 'Reception Details', section: 'first' },
          { label: 'Request Access', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="Launch Overview"
        title="A First Room"
        accent="With Lasting Intention"
        subtitle="The inaugural reception introduces The Executive Circle through the same principles that will define membership: privacy, polish, selectivity, and meaningful connection."
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-10 items-stretch">
          <article className="brand-card p-8 md:p-12 fade-in h-full flex flex-col justify-center">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Join us for the exclusive inaugural launch of The Executive Circle in South Florida. This invitation-only reception will bring together entrepreneurs, executives, professionals, investors, and community leaders in a refined private setting.
            </p>
            <p className="text-gray-500 text-sm italic">
              Attendance is limited and subject to invitation approval.
            </p>
          </article>

          <div className="grid sm:grid-cols-2 gap-5">
            {details.map((detail, idx) => (
              <article key={`${detail.label}-${detail.value}`} className="brand-card p-6 fade-in min-h-40" style={{ animationDelay: `${idx * 0.05}s` }}>
                <IconBadge icon={detail.icon} label={detail.label} className="mb-5" />
                <p className="text-gold text-xs tracking-[0.24em] uppercase mb-2">{detail.label}</p>
                <p className="text-gray-200 text-lg font-light">{detail.value}</p>
              </article>
            ))}
          </div>
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Reception Program"
        title="A Polished"
        accent="Evening Flow"
        subtitle="The program is paced to create arrival energy, meaningful introductions, and a clear sense of what the circle is becoming."
        tone="alt"
      >
        <div className="grid lg:grid-cols-5 gap-5 md:gap-6">
          {program.map((item, idx) => (
            <article key={item.title} className="brand-card p-6 md:p-7 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.06}s` }}>
              <IconBadge icon={item.icon} label={item.title} className="mb-5" />
              <p className="gold-text text-xs tracking-[0.2em] uppercase mb-3">0{idx + 1}</p>
              <h3 className="text-lg md:text-xl font-light mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Limited Attendance"
        title="Request Access to the"
        accent="Inaugural Reception"
        subtitle="Guests may request invitation consideration or explore sponsor table opportunities for the launch."
        actions={[
          { label: 'Request Launch Invitation', to: '/apply' },
          { label: 'Sponsor a Table', to: '/sponsorship', variant: 'outline' },
        ]}
      />
    </>
  );
}
