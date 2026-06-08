import React from 'react';
import {
  BadgeDollarSign,
  Building2,
  Check,
  Crown,
  Gem,
  Handshake,
  Megaphone,
  Table2,
  UsersRound,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import { sponsorships, idealSponsors } from '../data';

const sponsorIcons = [Crown, Gem, BadgeDollarSign, Table2];

const audienceCards = [
  {
    icon: UsersRound,
    title: 'Affluent Member Access',
    description: 'Connect with executives, investors, entrepreneurs, professionals, and community leaders.',
  },
  {
    icon: Megaphone,
    title: 'Premium Visibility',
    description: 'Position your brand inside refined member experiences rather than broad, low-context advertising.',
  },
  {
    icon: Handshake,
    title: 'Relationship-Led Value',
    description: 'Sponsorship is designed around direct access, recognition, and high-quality association.',
  },
];

export default function Sponsorship() {
  return (
    <>
      <PageBanner
        eyebrow="Partnership Opportunities"
        title="Sponsorship"
        accent="& Partnership Tiers"
        subtitle="Premium opportunities for brands and firms seeking to connect with affluent professionals, executives, investors, and community leaders."
        actions={[
          { label: 'View Partnership Tiers', section: 'first' },
          { label: 'Discuss Sponsorship', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="Ideal Partners"
        title="Brands That Belong"
        accent="In the Room"
        subtitle="The best sponsors serve the same audience The Executive Circle brings together: accomplished people with discerning standards and meaningful purchasing influence."
      >
        <div className="brand-card p-8 md:p-10 fade-in mb-8 md:mb-10">
          <IconBadge icon={Building2} label="Ideal sponsors" className="mb-6 mx-auto" />
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {idealSponsors.map((sponsor) => (
              <span key={sponsor} className="brand-pill text-sm">
                {sponsor}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audienceCards.map((card, idx) => (
            <article key={card.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={card.icon} label={card.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Sponsor Tiers"
        title="Choose the"
        accent="Right Partnership Level"
        subtitle="Each tier is designed to give sponsors clear visibility, refined access, and an appropriate level of recognition within the circle experience."
        tone="alt"
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {sponsorships.map((sponsor, idx) => {
            const SponsorIcon = sponsorIcons[idx % sponsorIcons.length];
            return (
              <article key={sponsor.tier} className="sponsor-card p-8 md:p-10 fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 text-center sm:text-left">
                  <IconBadge icon={SponsorIcon} label={sponsor.tier} />
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{sponsor.tier}</h3>
                    <p className="text-2xl md:text-3xl gold-accent font-light mb-6">{sponsor.price}</p>
                    <div className="space-y-3">
                      {sponsor.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Partnership Review"
        title="Discuss a"
        accent="Sponsorship Fit"
        subtitle="Sponsors are selected for alignment with the circle, the member audience, and the tone of the experience."
        actions={[
          { label: 'Become a Sponsor', to: '/apply' },
          { label: 'View Launch Reception', to: '/launch', variant: 'outline' },
        ]}
      />
    </>
  );
}
