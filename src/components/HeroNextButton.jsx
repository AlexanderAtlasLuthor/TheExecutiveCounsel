import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroNextButton() {
  const scrollToNextSection = (event) => {
    const hero = event.currentTarget.closest('.site-hero');
    const nextSection = hero?.nextElementSibling;
    if (!nextSection) return;

    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
    const targetTop = nextSection.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className="hero-next-button"
      aria-label="Scroll to next section"
      onClick={scrollToNextSection}
    >
      <ChevronDown size={26} strokeWidth={1.5} />
    </button>
  );
}
