import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#15110a] via-black to-black">
        {/* Single centered gold circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] sm:w-[26rem] md:w-[38rem] aspect-square border gold-border border-opacity-20 rounded-full pointer-events-none"
          style={{ animation: 'float 9s ease-in-out infinite' }}
          aria-hidden="true"
        />

        {/* Contrast & glow overlay */}
        <div className="absolute inset-0 hero-overlay z-[1]" aria-hidden="true" />

        <div className="relative z-10 text-center max-w-3xl px-6 md:px-12">
          <p className="text-gold text-[0.7rem] md:text-xs tracking-[0.35em] mb-7 md:mb-9 uppercase fade-in hero-sub">✦ Private Membership Organization ✦</p>

          <h1 className="fade-in flex justify-center mb-8 md:mb-10" style={{ animationDelay: '0.1s' }}>
            <img
              src="/herologo-transparent.png"
              alt="The Executive Counsel"
              className="hero-logo-glow w-60 sm:w-72 md:w-[26rem] h-auto"
            />
          </h1>

          <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 md:mb-8 tracking-wide leading-snug fade-in" style={{ fontFamily: "'Playfair Display', Georgia, serif", animationDelay: '0.2s' }}>
            Where Accomplished People<br className="hidden sm:block" /> Meet Accomplished People
          </h2>

          <p className="hero-sub text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-7 md:mb-9 leading-relaxed font-light fade-in" style={{ animationDelay: '0.3s' }}>
            A private, invitation-only membership counsel for executives, entrepreneurs, investors, professionals, and community leaders seeking meaningful personal and professional connections.
          </p>

          <p className="hero-sub text-xs md:text-sm text-gray-400 italic mb-9 md:mb-11 fade-in" style={{ animationDelay: '0.4s' }}>
            Applications are reviewed privately. Attendance is limited. Membership is not guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.5s' }}>
            <Link
              to="/apply"
              className="btn-gold px-8 md:px-10 py-3.5 md:py-4 text-sm tracking-[0.15em] rounded-sm"
            >
              APPLY FOR MEMBERSHIP
            </Link>
            <Link
              to="/launch"
              className="btn-outline px-8 md:px-10 py-3.5 md:py-4 text-sm tracking-[0.15em] rounded-sm"
            >
              REQUEST AN INVITATION
            </Link>
          </div>
        </div>
      </section>

      {/* Founding Members Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ NOW ACCEPTING ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              Become a<br />
              <span className="gold-accent">Founding Member</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The Executive Counsel is now accepting a limited number of founding membership applications in South Florida. Founding members will help shape the culture, standards, and first signature experiences of the counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-12">
            {[
              {
                icon: '▲',
                title: 'Limited Founding Access',
                description: 'Applications are reviewed privately and accepted selectively.'
              },
              {
                icon: '◆',
                title: 'South Florida Launch',
                description: 'Initial membership focus includes Miami, Fort Lauderdale, Boca Raton, and Palm Beach.'
              },
              {
                icon: '○',
                title: 'Private Member Community',
                description: 'Designed for accomplished individuals seeking meaningful personal and professional relationships.'
              },
            ].map((card, idx) => (
              <div key={idx} className="founding-card p-8 md:p-10 text-center fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl md:text-6xl gold-text mb-6 font-light">{card.icon}</div>
                <h3 className="text-xl md:text-2xl font-light mb-4">{card.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/apply"
              className="btn-gold inline-block px-10 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-widest rounded-sm"
            >
              APPLY AS A FOUNDING MEMBER
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
