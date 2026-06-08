import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CalendarDays,
  Check,
  Crown,
  Gem,
  Handshake,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import { membershipTiers } from '../data';

const tierIcons = {
  silver: Award,
  gold: Crown,
  platinum: Gem,
};

const universalBenefits = [
  {
    icon: ShieldCheck,
    title: 'Private Review',
    description: 'Every member enters through an application-based review process.',
  },
  {
    icon: CalendarDays,
    title: 'Member Events',
    description: 'Access to the counsel calendar begins with selective member gatherings.',
  },
  {
    icon: UsersRound,
    title: 'Curated Community',
    description: 'The room is shaped by professional achievement, character, and discretion.',
  },
  {
    icon: Handshake,
    title: 'Relationship Focus',
    description: 'Membership is built around meaningful connection, not transactional networking.',
  },
];

export default function Membership() {
  return (
    <>
      <PageBanner
        eyebrow="Membership Levels"
        title="Choose Your"
        accent="Level of Access"
        subtitle="Three tiers of membership, each designed to match your ambitions for connection, access, and influence."
        actions={[
          { label: 'View Membership Levels', section: 'first' },
          { label: 'Request Review', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="Annual Membership"
        title="Select the"
        accent="Right Counsel Tier"
        subtitle="Every level is structured with the same core standard: a private community, curated experiences, and a room of accomplished peers."
      >
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {membershipTiers.map((tier, idx) => {
            const TierIcon = tierIcons[tier.id] || Award;
            return (
              <article
                key={tier.id}
                className={`membership-card p-8 md:p-10 flex flex-col h-full fade-in ${tier.featured ? 'featured pt-12' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tier.label && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-2 text-xs font-bold tracking-widest rounded-full ${
                    tier.featured ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black' : 'bg-gold text-black'
                  }`}>
                    {tier.label}
                  </div>
                )}

                <div className="text-center">
                  <IconBadge icon={TierIcon} label={tier.name} className="mb-6" />
                  <h3 className="text-3xl md:text-4xl font-light mb-2">{tier.name}</h3>
                  <p className="text-sm gold-text tracking-widest mb-7 uppercase">{tier.tagline}</p>

                  <div className="mb-8">
                    <span className="text-4xl md:text-5xl font-light">${tier.price}</span>
                    <span className="text-gray-500 text-xs md:text-sm tracking-widest">/YEAR</span>
                  </div>
                </div>

                <div className="divider mb-8" />

                <Link
                  to="/apply"
                  className={`btn-standard w-full min-w-0 mb-8 rounded-sm ${tier.featured ? 'btn-gold' : 'btn-outline'}`}
                >
                  Apply for {tier.name}
                </Link>

                <div className="space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Included Standard"
        title="Every Tier Begins With"
        accent="The Same Foundation"
        subtitle="Membership level changes access and involvement, but the underlying standard remains consistent across the counsel."
        tone="alt"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {universalBenefits.map((benefit, idx) => (
            <article key={benefit.title} className="brand-card p-6 md:p-7 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.07}s` }}>
              <IconBadge icon={benefit.icon} label={benefit.title} className="mb-5" />
              <h3 className="text-lg md:text-xl font-light mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Application"
        title="Request Private"
        accent="Membership Review"
        subtitle="A membership inquiry begins the private review process. Selection is not automatic and availability may be limited."
        actions={[
          { label: 'Submit Application', to: '/apply' },
          { label: 'Why Join', to: '/why-join', variant: 'outline' },
        ]}
      />
    </>
  );
}
