import React from 'react';
import {
  Building2,
  CalendarRange,
  Compass,
  Crown,
  MapPinned,
  UsersRound,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import { visionCities } from '../data';

const visionPillars = [
  {
    icon: UsersRound,
    title: 'Recurring Membership',
    description: 'A community members can return to consistently, not a one-time event series.',
  },
  {
    icon: Building2,
    title: 'Regional Depth',
    description: 'A South Florida foundation with the discipline to expand without diluting quality.',
  },
  {
    icon: Crown,
    title: 'Premier Standard',
    description: 'An elevated member experience shaped by privacy, polish, and selective access.',
  },
];

const roadmap = [
  {
    icon: Compass,
    phase: 'Phase One',
    title: 'South Florida Foundation',
    description: 'Build the founding class across Miami, Fort Lauderdale, Boca Raton, and Palm Beach.',
  },
  {
    icon: CalendarRange,
    phase: 'Phase Two',
    title: 'Signature Calendar',
    description: 'Establish recurring receptions, dinners, and member experiences that define the counsel.',
  },
  {
    icon: MapPinned,
    phase: 'Phase Three',
    title: 'Florida Expansion',
    description: 'Extend the model into additional Florida markets while preserving the membership standard.',
  },
];

export default function Vision() {
  return (
    <>
      <PageBanner
        eyebrow="Our Vision"
        title="Building South Florida's Premier"
        accent="Executive Membership Community"
        subtitle="The long-term goal is a trusted, recurring membership community where accomplished people can form meaningful personal, professional, and business relationships."
        actions={[
          { label: 'Explore the Vision', section: 'first' },
          { label: 'Join the Founding Class', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="Long-Term Vision"
        title="A Community Built"
        accent="Beyond the Event"
        subtitle="The goal is not simply to host events. The goal is to build a trusted, high-value community where members are known by reputation, contribution, and shared standard."
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {visionPillars.map((pillar, idx) => (
            <article key={pillar.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={pillar.icon} label={pillar.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Expansion Roadmap"
        title="From South Florida"
        accent="To a Broader Network"
        subtitle="Expansion will be measured and standards-led, beginning in South Florida and growing only where the counsel can preserve quality."
        tone="alt"
      >
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {roadmap.map((item, idx) => (
            <article key={item.phase} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={item.icon} label={item.phase} className="mb-7" />
              <p className="gold-text text-xs tracking-[0.24em] uppercase mb-3">{item.phase}</p>
              <h3 className="text-xl md:text-2xl font-light mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="brand-card p-8 md:p-10 text-center fade-in">
          <IconBadge icon={MapPinned} label="Expansion cities" className="mb-6" />
          <p className="text-gold text-xs md:text-sm tracking-[0.25em] mb-6 uppercase">Expansion Cities</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {visionCities.map((city) => (
              <span key={city} className="brand-pill text-sm tracking-wide">
                {city}
              </span>
            ))}
          </div>
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Founding Class"
        title="Be Part of the"
        accent="First Chapter"
        subtitle="Founding members help shape the culture before the counsel expands into a broader Florida network."
        actions={[
          { label: 'Be Part of the Founding Class', to: '/apply' },
          { label: 'View Events', to: '/events', variant: 'outline' },
        ]}
      />
    </>
  );
}
