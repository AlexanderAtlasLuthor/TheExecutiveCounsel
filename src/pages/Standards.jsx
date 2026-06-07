import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { standardsSteps } from '../data';

export default function Standards() {
  return (
    <>
      <PageBanner
        eyebrow="Membership Standards"
        title="Designed for Quality,"
        accent="Privacy & Exclusivity"
        subtitle="Membership is application-based and reviewed by our Membership Committee to preserve trust among members."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto fade-in">
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed text-center">
            Membership is application-based and reviewed by our Membership Committee. The Executive Counsel is intentionally curated to preserve privacy, quality, professionalism, and trust among members.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 border-l-4 gold-border mb-12 md:mb-16">
            <p className="text-lg md:text-xl italic text-gray-300">
              "Membership is earned through character, achievement, and contribution."
            </p>
          </div>

          <p className="text-gold text-xs md:text-sm tracking-widest mb-8 uppercase text-center">The Review Process</p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {standardsSteps.map((req, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold bg-opacity-20 border border-gold rounded-full flex items-center justify-center flex-shrink-0 text-gold text-sm font-semibold">
                  {idx + 1}
                </div>
                <span className="text-gray-300 text-base md:text-lg pt-1">{req}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/apply"
              className="btn-gold inline-block px-10 md:px-12 py-3.5 md:py-4 text-sm tracking-widest rounded-sm"
            >
              SUBMIT YOUR APPLICATION
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
