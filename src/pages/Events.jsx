import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { events } from '../data';

export default function Events() {
  return (
    <>
      <PageBanner
        eyebrow="Signature Experiences"
        title="Exclusive"
        accent="Events & Gatherings"
        subtitle="From intimate dinners to black-tie galas, every gathering is crafted for accomplished members."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="event-card p-6 md:p-8 fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl md:text-4xl gold-text mb-4 font-light">{event.icon}</div>
                <h3 className="text-xl md:text-2xl font-light mb-2">{event.title}</h3>
                <p className="text-xs md:text-sm gold-text tracking-widest mb-4">{event.frequency}</p>
                <p className="text-base md:text-lg text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/launch"
              className="btn-gold inline-block px-10 md:px-12 py-3.5 md:py-4 text-sm tracking-widest rounded-sm"
            >
              SEE THE INAUGURAL RECEPTION
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
