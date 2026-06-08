import React from 'react';
import HeroNextButton from './HeroNextButton';

// Smoothly scroll from the hero to one of the page's content sections.
// `which` = 'first' targets the first section after the hero,
// 'last' targets the final section (the page's call-to-action).
function scrollToPageSection(event, which) {
  const hero = event.currentTarget.closest('.site-hero');
  if (!hero) return;

  const target =
    which === 'last' ? hero.parentElement?.lastElementChild : hero.nextElementSibling;
  if (!target || target === hero) return;

  const headerHeight =
    document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

// Consistent styled header band for every inner page.
export default function PageBanner({ eyebrow, title, accent, subtitle }) {
  return (
    <section className="page-banner site-hero relative overflow-hidden px-6 md:px-12 py-12 md:py-14 text-center">
      <img
        src="/gold-circle-hero.png"
        alt=""
        aria-hidden="true"
        className="page-banner-ring absolute top-[43%] md:top-1/2 left-1/2 w-[28rem] sm:w-[36rem] md:w-[48rem] lg:w-[54rem] aspect-square object-contain pointer-events-none select-none"
        style={{ animation: 'heroCircleFloat 9s ease-in-out infinite' }}
      />
      <div className="absolute inset-0 hero-glass z-[1]" aria-hidden="true" />
      <div className="absolute inset-0 hero-overlay z-[2]" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto fade-in">
        {/* Mobile only: shared tagline to match the home hero. */}
        <p className="hero-sub sm:hidden text-gold text-[0.7rem] tracking-[0.35em] mb-5 uppercase">
          ✦ Private Membership Organization ✦
        </p>

        {eyebrow && (
          <p className="hero-sub text-gold text-[0.7rem] md:text-xs tracking-[0.35em] mb-6 uppercase">✦ {eyebrow} ✦</p>
        )}
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
          {title}
          {accent && (
            <>
              <br />
              <span className="gold-accent">{accent}</span>
            </>
          )}
        </h1>
        <div className="divider mt-8 mb-2 max-w-xs mx-auto" />
        {subtitle && (
          <p className="hero-sub text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            {subtitle}
          </p>
        )}

        {/* Mobile only: two buttons (like the home hero) that scroll to
            sections of this page. */}
        <div className="btn-row sm:hidden mt-8 fade-in">
          <button
            type="button"
            onClick={(event) => scrollToPageSection(event, 'first')}
            className="btn-gold btn-standard rounded-sm"
          >
            Explore This Page
          </button>
          <button
            type="button"
            onClick={(event) => scrollToPageSection(event, 'last')}
            className="btn-outline btn-standard rounded-sm"
          >
            Get Started
          </button>
        </div>
      </div>
      <HeroNextButton />
    </section>
  );
}
