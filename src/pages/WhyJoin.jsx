import React from 'react';
import {
  BadgeCheck,
  CalendarDays,
  Compass,
  Handshake,
  Landmark,
  MessagesSquare,
  Plane,
  ShieldCheck,
  UserRoundPlus,
  Wine,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';

const featureCards = [
  {
    icon: UserRoundPlus,
    title: 'Curated Introductions',
    description: 'Introductions are made with context so members meet people worth knowing, not just more people.',
  },
  {
    icon: CalendarDays,
    title: 'Exclusive Social Events',
    description: 'Gatherings are planned around atmosphere, conversation, and member-level access.',
  },
  {
    icon: Landmark,
    title: 'Executive Networking',
    description: 'Rooms are built for founders, investors, professionals, and leaders with shared standards.',
  },
  {
    icon: BadgeCheck,
    title: 'VIP Experiences',
    description: 'Members receive access to elevated experiences that feel private, polished, and selective.',
  },
  {
    icon: Wine,
    title: 'Private Dinners',
    description: 'Smaller tables create the conditions for trust, depth, and lasting personal connection.',
  },
  {
    icon: Plane,
    title: 'Luxury Travel',
    description: 'Select retreats and travel concepts extend the circle beyond a single evening.',
  },
  {
    icon: Handshake,
    title: 'Community Engagement',
    description: 'Members can connect through civic, philanthropic, and professional moments with purpose.',
  },
  {
    icon: ShieldCheck,
    title: 'Invitation-Only Access',
    description: 'Privacy and standards are protected through a selective application and review process.',
  },
];

const membershipRhythm = [
  {
    icon: Compass,
    title: 'Find Better Rooms',
    description: 'Move beyond random mixers into gatherings designed around relevance and alignment.',
  },
  {
    icon: MessagesSquare,
    title: 'Create Better Conversations',
    description: 'Smaller formats and thoughtful hosting make it easier to move past surface-level introductions.',
  },
  {
    icon: Handshake,
    title: 'Build Better Relationships',
    description: 'The circle gives members recurring opportunities to become known, trusted, and remembered.',
  },
];

export default function WhyJoin() {
  return (
    <>
      <PageBanner
        eyebrow="Why Join"
        title="More Than Networking."
        accent="More Than Social Events."
        subtitle="Every membership unlocks a world of curated experiences built around trust, access, and genuine connection."
        actions={[
          { label: 'Why Members Join', section: 'first' },
          { label: 'Choose Your Level', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="Member Value"
        title="Access With"
        accent="Purpose and Structure"
        subtitle="The Executive Circle is designed to make the room itself more valuable: who attends, why they are there, and how relationships are introduced all matter."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featureCards.map((feature, idx) => (
            <article key={feature.title} className="brand-card p-6 md:p-7 text-center fade-in min-h-72 flex flex-col items-center" style={{ animationDelay: `${idx * 0.04}s` }}>
              <IconBadge icon={feature.icon} label={feature.title} className="mb-5" />
              <h3 className="text-lg md:text-xl font-light mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="The Difference"
        title="A Membership That"
        accent="Compounds Over Time"
        subtitle="The value is not a single event. It is a repeated rhythm of selective rooms, real conversation, and relationships that can deepen with each encounter."
        tone="alt"
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {membershipRhythm.map((item, idx) => (
            <article key={item.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={item.icon} label={item.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Membership"
        title="Choose the"
        accent="Right Level of Access"
        subtitle="Each level is built for a different relationship to the circle, from essential access to elevated concierge-level involvement."
        actions={[
          { label: 'Explore Membership Levels', to: '/membership' },
          { label: 'Review Standards', to: '/standards', variant: 'outline' },
        ]}
      />
    </>
  );
}
