import React from 'react';

// Consistent styled header band for every inner page.
export default function PageBanner({ eyebrow, title, accent, subtitle }) {
  return (
    <section className="page-banner relative overflow-hidden px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16 text-center">
      <div
        className="absolute top-10 right-10 w-40 md:w-60 h-40 md:h-60 border gold-border border-opacity-[0.07] rounded-full pointer-events-none"
        style={{ animation: 'float 9s ease-in-out infinite' }}
      />
      <div className="relative z-10 max-w-4xl mx-auto fade-in">
        {eyebrow && (
          <p className="text-gold text-xs md:text-sm tracking-[0.3em] mb-5 uppercase">✦ {eyebrow} ✦</p>
        )}
        <h1 className="text-4xl md:text-6xl font-light leading-tight">
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
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
