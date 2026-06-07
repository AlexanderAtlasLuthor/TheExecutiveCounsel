import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { membershipTiers } from '../data';

export default function Membership() {
  return (
    <>
      <PageBanner
        eyebrow="Membership Levels"
        title="Choose Your"
        accent="Level of Access"
        subtitle="Three tiers of membership, each designed to match your ambitions for connection, access, and influence."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 pt-6">
            {membershipTiers.map((tier, idx) => (
              <div
                key={tier.id}
                className={`membership-card p-8 md:p-10 flex flex-col h-full fade-in ${tier.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tier.label && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-2 text-xs font-bold tracking-widest rounded-full ${
                    tier.featured ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black' : 'bg-gold text-black'
                  }`}>
                    {tier.label}
                  </div>
                )}

                <div className="text-4xl md:text-5xl mb-4 gold-text font-light">{"◆●★"[idx]}</div>
                <h3 className="text-3xl md:text-4xl font-light mb-2">{tier.name}</h3>
                <p className="text-sm gold-text tracking-widest mb-6">{tier.tagline}</p>

                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-light">${tier.price}</span>
                  <span className="text-gray-500 text-xs md:text-sm tracking-widest">/YEAR</span>
                </div>

                <div className="divider mb-8"></div>

                <Link
                  to="/apply"
                  className={`w-full py-3 md:py-4 mb-8 font-semibold tracking-widest text-sm text-center rounded-sm transition-all ${
                    tier.featured ? 'btn-gold' : 'btn-outline'
                  }`}
                >
                  APPLY FOR {tier.name.toUpperCase()}
                </Link>

                <div className="space-y-3 md:space-y-4 flex-grow">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
