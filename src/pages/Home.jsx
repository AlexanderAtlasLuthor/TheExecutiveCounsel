import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Crown,
  Handshake,
  MapPinned,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import HeroNextButton from '../components/HeroNextButton';

const foundingCards = [
  {
    icon: Crown,
    title: 'Limited Founding Access',
    description: 'Applications are reviewed privately and accepted selectively so the first class sets the tone with care.',
  },
  {
    icon: MapPinned,
    title: 'South Florida Launch',
    description: 'Initial membership focus includes Miami, Fort Lauderdale, Boca Raton, and Palm Beach.',
  },
  {
    icon: UsersRound,
    title: 'Private Member Community',
    description: 'Designed for accomplished individuals seeking meaningful personal and professional relationships.',
  },
];

const experienceCards = [
  {
    icon: Handshake,
    title: 'Curated Introductions',
    description: 'Members are brought into rooms where context, reputation, and mutual relevance matter.',
  },
  {
    icon: CalendarDays,
    title: 'Signature Gatherings',
    description: 'Private receptions, dinners, and member experiences are structured for real conversation.',
  },
  {
    icon: ShieldCheck,
    title: 'Membership Standards',
    description: 'Every layer of the circle is designed around privacy, professionalism, and trust.',
  },
];

export default function Home() {
  return (
    <>
      <section className="site-hero relative flex items-center justify-center pt-12 pb-14 overflow-hidden bg-gradient-to-b from-[#012a5e] via-black to-black">
        <img
          src="/gold-circle-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute top-[40%] md:top-1/2 left-1/2 w-[26rem] sm:w-[36rem] md:w-[52rem] lg:w-[58rem] aspect-square object-contain pointer-events-none select-none"
          style={{ animation: 'heroCircleFloat 9s ease-in-out infinite', filter: 'drop-shadow(0 0 35px rgba(255, 252, 214, 0.25))' }}
        />

        <div className="absolute inset-0 hero-glass z-[1]" aria-hidden="true" />
        <div className="absolute inset-0 hero-overlay z-[2]" aria-hidden="true" />

        <div className="relative z-10 text-center max-w-3xl px-6 md:px-12 -translate-y-6 md:-translate-y-8">
          <p className="text-gold text-[0.7rem] md:text-xs tracking-[0.35em] mb-5 md:mb-6 uppercase fade-in hero-sub">✦ Private Membership Organization ✦</p>

          <h1 className="fade-in flex flex-col items-center mb-6 md:mb-7" style={{ animationDelay: '0.1s' }}>
            <img
              src="/ec-mark-transparent.png"
              alt="The Executive Circle"
              className="hero-logo-glow w-28 sm:w-36 md:w-44 h-auto"
            />
            <span className="mt-5 md:mt-6 tracking-[0.25em] text-2xl sm:text-4xl md:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              <span className="text-white">THE EXECUTIVE</span>{' '}
              <span className="gold-accent">CIRCLE</span>
            </span>
          </h1>

          <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-light text-white mb-5 md:mb-6 tracking-wide leading-snug fade-in" style={{ fontFamily: "'Playfair Display', Georgia, serif", animationDelay: '0.2s' }}>
            Where Accomplished People<br className="hidden sm:block" /> Meet Accomplished People
          </h2>

          <div className="btn-row fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/apply" className="btn-gold btn-standard rounded-sm">
              Apply for Membership
            </Link>
            <Link to="/launch" className="btn-outline btn-standard rounded-sm">
              Request an Invitation
            </Link>
          </div>
        </div>
        <HeroNextButton />
      </section>

      <BrandSection
        eyebrow="Now Accepting"
        title="Become a"
        accent="Founding Member"
        subtitle="The Executive Circle is accepting a limited number of founding membership applications. Founding members will help shape the culture, standards, and first signature experiences of the circle."
        tone="alt"
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {foundingCards.map((card, idx) => (
            <article key={card.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={card.icon} label={card.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{card.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="btn-row mt-12 fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/apply" className="btn-gold btn-standard rounded-sm">
            Apply as a Founding Member
          </Link>
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="The Experience"
        title="A Circle Built for"
        accent="Meaningful Access"
        subtitle="Every touchpoint is structured around the same idea: private review, thoughtful introductions, refined experiences, and relationships that can deepen over time."
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {experienceCards.map((card, idx) => (
            <article key={card.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={card.icon} label={card.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Private Review"
        title="Begin With a"
        accent="Membership Inquiry"
        subtitle="Applications are reviewed privately. Attendance is limited, and membership is extended only when there is clear alignment with the circle."
        actions={[
          { label: 'Begin Your Application', to: '/apply' },
          { label: 'Explore Membership', to: '/membership', variant: 'outline' },
        ]}
      />
    </>
  );
}
