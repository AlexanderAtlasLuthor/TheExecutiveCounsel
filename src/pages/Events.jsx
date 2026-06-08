import React from 'react';
import {
  CalendarRange,
  Crown,
  Handshake,
  Music,
  Plane,
  Utensils,
  UsersRound,
  Wine,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, CTASection, IconBadge } from '../components/BrandSection';
import { events } from '../data';

const eventIcons = [Wine, Crown, Utensils, Plane];

const eventPrinciples = [
  {
    icon: UsersRound,
    title: 'Curated Guest Mix',
    description: 'Attendance is shaped intentionally so the room feels relevant, balanced, and peer-level.',
  },
  {
    icon: Handshake,
    title: 'Hosted Introductions',
    description: 'Members are not left to drift. Introductions are guided with context and discretion.',
  },
  {
    icon: Music,
    title: 'Elevated Atmosphere',
    description: 'The environment is refined enough to feel memorable, but comfortable enough for real conversation.',
  },
];

export default function Events() {
  return (
    <>
      <PageBanner
        eyebrow="Signature Experiences"
        title="Exclusive"
        accent="Events & Gatherings"
        subtitle="From intimate dinners to black-tie galas, every gathering is crafted for accomplished members."
        actions={[
          { label: 'See the Experiences', section: 'first' },
          { label: 'Request an Invitation', section: 'last' },
        ]}
      />

      <BrandSection
        eyebrow="Experience Calendar"
        title="Gatherings With"
        accent="Purpose and Polish"
        subtitle="Each event format is designed to create connection in a different way: larger social rooms, intimate dinners, member celebrations, and destination experiences."
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, idx) => {
            const EventIcon = eventIcons[idx % eventIcons.length];
            return (
              <article key={event.title} className="event-card p-7 md:p-9 fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 text-center sm:text-left">
                  <IconBadge icon={EventIcon} label={event.title} />
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-2">{event.title}</h3>
                    <p className="text-xs md:text-sm gold-text tracking-widest mb-4 uppercase">{event.frequency}</p>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="Event Standard"
        title="What Makes the"
        accent="Room Different"
        subtitle="The Executive Counsel event model is built around the details that make people want to stay in the room and return to the next one."
        tone="alt"
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {eventPrinciples.map((principle, idx) => (
            <article key={principle.title} className="brand-card p-8 md:p-10 text-center fade-in h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
              <IconBadge icon={principle.icon} label={principle.title} className="mb-7" />
              <h3 className="text-xl md:text-2xl font-light mb-4">{principle.title}</h3>
              <p className="text-gray-400 leading-relaxed">{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="brand-card p-8 md:p-10 mt-8 md:mt-10 text-center fade-in">
          <IconBadge icon={CalendarRange} label="Event cadence" className="mb-6" />
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4">Member Rhythm</p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            The calendar is intended to feel recurring without becoming routine: enough consistency to build relationships, enough variety to keep every gathering distinct.
          </p>
        </div>
      </BrandSection>

      <CTASection
        eyebrow="Inaugural Reception"
        title="Start With the"
        accent="Launch Experience"
        subtitle="The inaugural reception introduces the counsel to South Florida through a curated, invitation-only guest list."
        actions={[
          { label: 'See the Reception', to: '/launch' },
          { label: 'Request Membership', to: '/apply', variant: 'outline' },
        ]}
      />
    </>
  );
}
