import React from 'react';
import {
  Award,
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import { memberTypes } from '../data';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Private by Design',
    description: 'Members enter a curated environment where discretion, trust, and reputation are treated as standards.',
  },
  {
    icon: UsersRound,
    title: 'Peer-Level Rooms',
    description: 'The counsel is shaped for leaders, builders, professionals, and investors with shared ambition.',
  },
  {
    icon: Sparkles,
    title: 'Natural Connection',
    description: 'Experiences are structured so meaningful relationships can develop without forced networking.',
  },
];

const memberIcons = [
  BriefcaseBusiness,
  Landmark,
  Scale,
  Building2,
  Award,
  HeartHandshake,
];

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="A Private Counsel for"
        accent="Accomplished Individuals"
        subtitle="A sophisticated, private, and highly curated environment where meaningful relationships develop naturally."
        actions={[
          { label: 'Meet the Counsel', section: 'first' },
          { label: 'Apply to Join', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="The Counsel"
        title="More Than a Network"
        accent="A Trusted Community"
        subtitle="The Executive Counsel was created for successful people who have outgrown traditional networking events, casual mixers, and online introductions."
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch">
          <article className="brand-card p-8 md:p-12 fade-in h-full">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              The counsel brings together accomplished individuals in a refined setting where introductions are intentional and relationships can mature with context. It is built for people who value substance, privacy, and the quiet confidence of a better room.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We believe meaningful connection is built on trust, shared values, and mutual respect among peers who have achieved real success.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {['Private', 'Curated', 'Selective'].map((item) => (
                <div key={item} className="brand-stat border border-gold/25 rounded-sm bg-gold/5">
                  <p className="gold-text text-xs tracking-[0.22em] uppercase">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            {principles.map((principle, idx) => (
              <article key={principle.title} className="brand-card p-6 md:p-8 fade-in" style={{ animationDelay: `${idx * 0.08}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 text-center sm:text-left">
                  <IconBadge icon={principle.icon} label={principle.title} />
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-3">{principle.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Member Profile"
        title="Who Belongs"
        accent="In the Room"
        subtitle="The counsel is intentionally broad in profession and narrow in standard: accomplished people with character, discretion, and a desire to contribute."
        tone="alt"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {memberTypes.map((item, idx) => {
            const Icon = memberIcons[idx % memberIcons.length];
            return (
              <article key={item} className="brand-card p-6 md:p-7 text-center fade-in min-h-44 flex flex-col items-center justify-center" style={{ animationDelay: `${idx * 0.05}s` }}>
                <IconBadge icon={Icon} label={item} className="mb-5" />
                <h3 className="text-lg md:text-xl font-light">{item}</h3>
              </article>
            );
          })}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Founding Class"
        title="Help Shape the"
        accent="First Member Community"
        subtitle="Founding members will influence the culture, standards, and first signature experiences of The Executive Counsel."
        actions={[
          { label: 'Begin Your Application', to: '/apply' },
          { label: 'View Standards', to: '/standards', variant: 'outline' },
        ]}
      />
    </>
  );
}
