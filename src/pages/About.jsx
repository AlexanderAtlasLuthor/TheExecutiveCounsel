import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { memberTypes } from '../data';

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="A Private Counsel for"
        accent="Accomplished Individuals"
        subtitle="A sophisticated, private, and highly curated environment where meaningful relationships develop naturally."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 leading-tight">
                More Than a Network —<br />
                <span className="gold-accent">A Trusted Community</span>
              </h2>
              <div className="divider mb-6 md:mb-8"></div>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                The Executive Counsel was created for successful people who have outgrown traditional networking events, casual mixers, and online introductions. Our counsel brings together accomplished individuals in a sophisticated, private, and highly curated environment where meaningful relationships can develop naturally.
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 leading-relaxed">
                We believe in the power of meaningful connections built on trust, shared values, and mutual respect among peers who have achieved real success.
              </p>

              <div className="space-y-3 md:space-y-4">
                {memberTypes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/apply"
                className="btn-gold inline-block mt-10 px-9 md:px-10 py-3.5 md:py-4 text-sm tracking-widest rounded-sm"
              >
                BEGIN YOUR APPLICATION
              </Link>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-96 rounded-lg flex items-center justify-center border-2 gold-border border-opacity-30 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.5) 0%, rgba(37, 37, 37, 0.5) 100%)', backdropFilter: 'blur(10px)' }}>
                <div className="text-center">
                  <div className="text-7xl md:text-8xl gold-text font-light mb-4">◆</div>
                  <p className="text-xs md:text-sm tracking-widest gold-text">CURATED CONNECTIONS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
