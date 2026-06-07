import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function LaunchReception() {
  return (
    <>
      <PageBanner
        eyebrow="Inaugural Reception"
        title="The Executive Counsel"
        accent="Inaugural Reception"
        subtitle="An invitation-only launch bringing together a curated guest list of South Florida's accomplished leaders."
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto fade-in">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 gold-border border-opacity-30 p-8 md:p-12 rounded-lg">
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed">
              Join us for the exclusive inaugural launch of The Executive Counsel in South Florida. This invitation-only reception will bring together a curated guest list of entrepreneurs, executives, professionals, investors, and community leaders.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-10">
              <div>
                <p className="text-gold text-xs tracking-widest mb-4">EVENT DETAILS</p>
                <div className="space-y-3 text-gray-300 text-base">
                  <p>✦ <span className="font-semibold">Luxury Venue</span>, South Florida</p>
                  <p>✦ <span className="font-semibold">100 Invited Guests</span></p>
                  <p>✦ <span className="font-semibold">Business Elegant</span> Dress Code</p>
                  <p>✦ <span className="font-semibold">$199</span> Ticket Price</p>
                  <p>✦ <span className="font-semibold">$2,500</span> VIP Sponsor Tables</p>
                </div>
                <p className="text-gold text-xs tracking-widest mt-6 mb-3">TARGET CITIES</p>
                <p className="text-gray-300 text-base">Miami &middot; Fort Lauderdale &middot; Boca Raton</p>
              </div>
              <div>
                <p className="text-gold text-xs tracking-widest mb-4">PROGRAM</p>
                <div className="space-y-3 text-gray-300 text-base">
                  <p>✦ Cocktail Reception</p>
                  <p>✦ Curated Introductions</p>
                  <p>✦ Live Music</p>
                  <p>✦ Champagne Toast</p>
                  <p>✦ Membership Presentation</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm italic mb-8">Attendance is limited and subject to invitation approval.</p>

            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/apply"
                className="btn-gold px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest flex-1 text-center rounded-sm"
              >
                REQUEST LAUNCH INVITATION
              </Link>
              <Link
                to="/sponsorship"
                className="btn-outline px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest flex-1 text-center rounded-sm"
              >
                SPONSOR A TABLE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
