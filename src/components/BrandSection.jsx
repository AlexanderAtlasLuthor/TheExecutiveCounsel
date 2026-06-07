import React from 'react';
import { Link } from 'react-router-dom';

export function SectionHeader({ eyebrow, title, accent, subtitle, className = '' }) {
  return (
    <div className={`section-header fade-in ${className}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {title && (
        <h2 className="section-title">
          {title}
          {accent && (
            <>
              <br />
              <span className="gold-accent">{accent}</span>
            </>
          )}
        </h2>
      )}
      <div className="divider mt-7 max-w-xs mx-auto" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export function BrandSection({
  eyebrow,
  title,
  accent,
  subtitle,
  children,
  tone = 'default',
  className = '',
  innerClassName = 'max-w-7xl mx-auto',
}) {
  const toneClass = {
    default: '',
    alt: 'brand-section-alt',
    deep: 'brand-section-deep',
  }[tone] || '';

  return (
    <section className={`brand-section ${toneClass} ${className}`}>
      <div className={`relative z-10 ${innerClassName}`}>
        {(eyebrow || title || subtitle) && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            accent={accent}
            subtitle={subtitle}
          />
        )}
        {children}
      </div>
    </section>
  );
}

export function IconBadge({ icon: Icon, label, className = '' }) {
  return (
    <div className={`icon-badge ${className}`} aria-hidden={label ? undefined : true}>
      <Icon size={28} strokeWidth={1.6} />
      {label && <span className="sr-only">{label}</span>}
    </div>
  );
}

export function CTASection({ eyebrow, title, accent, subtitle, actions = [] }) {
  return (
    <BrandSection
      eyebrow={eyebrow}
      title={title}
      accent={accent}
      subtitle={subtitle}
      tone="deep"
      className="brand-section-cta"
      innerClassName="max-w-5xl mx-auto"
    >
      <div className="btn-row fade-in">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.to}
            className={`btn-standard rounded-sm ${action.variant === 'outline' ? 'btn-outline' : 'btn-gold'}`}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </BrandSection>
  );
}
