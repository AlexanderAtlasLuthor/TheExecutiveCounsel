import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { sponsorships, idealSponsors } from '../data';

export default function Sponsorship() {
  return (
    <>
      <PageBanner
        eyebrow="Partnership Opportunities"
        title="Sponsorship"
        accent="& Partnership Tiers"
        subtitle="Premium opportunities for brands and firms seeking to connect with affluent professionals, executives, investors, and community leaders."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-6 uppercase text-center">Ideal Sponsors</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {idealSponsors.map((s, idx) => (
                <span key={idx} className="border border-gold border-opacity-30 rounded-full px-4 md:px-5 py-2 text-sm text-gray-300 bg-gold/5">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
            {sponsorships.map((sponsor, idx) => (
              <div key={idx} className="sponsor-card p-8 md:p-10 fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-2xl md:text-3xl font-light mb-2">{sponsor.tier}</h3>
                <p className="text-2xl md:text-3xl gold-accent font-light mb-6">{sponsor.price}</p>
                <div className="space-y-3">
                  {sponsor.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/apply"
              className="btn-gold inline-block px-10 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-widest rounded-sm"
            >
              BECOME A SPONSOR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
