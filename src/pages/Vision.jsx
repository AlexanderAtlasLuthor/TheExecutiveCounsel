import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { visionCities } from '../data';

export default function Vision() {
  return (
    <>
      <PageBanner
        eyebrow="Our Vision"
        title="Building South Florida's Premier"
        accent="Executive Membership Community"
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Our long-term vision is to build a recurring-membership community of successful professionals throughout Florida, beginning in South Florida and expanding into Miami, Fort Lauderdale, Boca Raton, Naples, Tampa, Orlando, and Jacksonville.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-10 md:mb-12 leading-relaxed">
            The goal is not simply to host events. The goal is to build a trusted, high-value community where accomplished individuals can form meaningful personal, professional, and business relationships.
          </p>

          <p className="text-gold text-xs md:text-sm tracking-widest mb-6 uppercase">Expansion Roadmap</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
            {visionCities.map((city, idx) => (
              <span key={idx} className="border border-gold border-opacity-30 rounded-full px-4 md:px-5 py-2 text-sm text-gray-300 bg-gold/5 tracking-wide">
                {city}
              </span>
            ))}
          </div>

          <Link
            to="/apply"
            className="btn-gold inline-block px-10 md:px-12 py-3.5 md:py-4 text-sm tracking-widest rounded-sm"
          >
            BE PART OF THE FOUNDING CLASS
          </Link>
        </div>
      </section>
    </>
  );
}
