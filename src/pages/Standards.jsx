import React from 'react';
import {
  BadgeCheck,
  FileSearch,
  HeartHandshake,
  MessagesSquare,
  Scale,
  ShieldCheck,
  UserCheck,
  UsersRound,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import { standardsSteps } from '../data';

const stepIcons = [FileSearch, UserCheck, ShieldCheck, UsersRound, MessagesSquare, HeartHandshake];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Privacy',
    description: 'Members should feel confident that the room respects discretion and professional boundaries.',
  },
  {
    icon: Scale,
    title: 'Quality',
    description: 'Selection protects the value of membership by prioritizing character, achievement, and contribution.',
  },
  {
    icon: BadgeCheck,
    title: 'Trust',
    description: 'The circle is strongest when members know the room has been carefully reviewed.',
  },
];

export default function Standards() {
  return (
    <>
      <PageBanner
        eyebrow="Membership Standards"
        title="Designed for Quality,"
        accent="Privacy & Exclusivity"
        subtitle="Membership is application-based and reviewed by our Membership Committee to preserve trust among members."
        actions={[
          { label: 'View the Standards', section: 'first' },
          { label: 'Apply for Review', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="The Standard"
        title="Membership Is"
        accent="Earned With Alignment"
        subtitle="The Executive Circle is intentionally curated to preserve privacy, quality, professionalism, and trust among members."
      >
        <div className="quote-panel p-8 md:p-12 fade-in max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed">
            "Membership is earned through character, achievement, and contribution."
          </p>
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Review Process"
        title="A Clear Path"
        accent="To Private Review"
        subtitle="The process is designed to protect the room while giving qualified candidates a professional, respectful path to consideration."
        tone="alt"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {standardsSteps.map((step, idx) => {
            const StepIcon = stepIcons[idx % stepIcons.length];
            return (
              <article key={step} className="brand-card p-7 md:p-8 fade-in h-full" style={{ animationDelay: `${idx * 0.07}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 text-center sm:text-left">
                  <IconBadge icon={StepIcon} label={step} />
                  <div>
                    <p className="gold-text text-xs tracking-[0.22em] uppercase mb-3">Step 0{idx + 1}</p>
                    <h3 className="text-lg md:text-xl font-light">{step}</h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Selection Principles"
        title="Exclusivity With"
        accent="A Clear Purpose"
        subtitle="Selectivity is not about being inaccessible. It is about protecting the quality of the room for every member who enters it."
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, idx) => (
            <article key={principle.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={principle.icon} label={principle.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{principle.title}</h3>
              <p className="text-gray-400 leading-relaxed">{principle.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Application"
        title="Submit for"
        accent="Membership Consideration"
        subtitle="Candidates may begin with a private inquiry. The review process determines alignment and availability."
        actions={[
          { label: 'Submit Your Application', to: '/apply' },
          { label: 'Explore Membership', to: '/membership', variant: 'outline' },
        ]}
      />
    </>
  );
}
