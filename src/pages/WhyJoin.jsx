import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { features } from '../data';

export default function WhyJoin() {
  return (
    <>
      <PageBanner
        eyebrow="Why Join"
        title="More Than Networking."
        accent="More Than Social Events."
        subtitle="Every membership unlocks a world of curated experiences built around trust, access, and genuine connection."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card p-6 md:p-8 text-center fade-in flex flex-col items-center justify-center min-h-40" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="text-4xl md:text-5xl gold-text mb-4 font-light">{feature.icon}</div>
                <h3 className="text-base md:text-lg font-light">{feature.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/membership"
              className="btn-outline inline-block px-10 md:px-12 py-3.5 md:py-4 text-sm tracking-widest rounded-sm"
            >
              EXPLORE MEMBERSHIP LEVELS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
