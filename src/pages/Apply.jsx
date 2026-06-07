import React, { useState } from 'react';
import {
  CalendarDays,
  ClipboardCheck,
  Crown,
  ShieldCheck,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { BrandSection, IconBadge } from '../components/BrandSection';

const emptyForm = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  profession: '',
  company: '',
  role: '',
  membershipLevel: 'gold',
  attendInaugural: '',
  interestSponsorship: '',
  message: '',
};

const reviewNotes = [
  {
    icon: ClipboardCheck,
    title: 'Private Review',
    description: 'Applications are reviewed privately by the membership team.',
  },
  {
    icon: ShieldCheck,
    title: 'Selective Access',
    description: 'Membership and event attendance are not guaranteed.',
  },
  {
    icon: CalendarDays,
    title: 'Launch Interest',
    description: 'You may also request consideration for the inaugural reception.',
  },
];

export default function Apply() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData(emptyForm);
    }, 5000);
  };

  return (
    <>
      <PageBanner
        eyebrow="Membership Application"
        title="Apply for"
        accent="Membership"
        subtitle="Applications are reviewed privately. Attendance is limited. Membership is not guaranteed."
      />

      <BrandSection
        eyebrow="Private Inquiry"
        title="Begin the"
        accent="Review Process"
        subtitle="Share your professional background, preferred membership level, and interest in launch or sponsorship opportunities."
        innerClassName="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-[1fr_0.42fr] gap-8 md:gap-10 items-start">
          <div className="brand-card p-6 md:p-10 fade-in">
            {formSubmitted ? (
              <div className="success-message">
                <IconBadge icon={Crown} label="Thank you" className="mb-5" />
                <h3 className="text-2xl md:text-3xl font-light mb-4">Thank You</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Your inquiry has been received. A representative from The Executive Counsel will review your submission and contact you if selected for the next step.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-7">
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <input
                    type="text"
                    name="profession"
                    placeholder="Profession / Industry"
                    value={formData.profession}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="role"
                  placeholder="Current Role / Title"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="input-field w-full"
                  required
                />

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm gold-text tracking-widest mb-3">PREFERRED MEMBERSHIP LEVEL</label>
                    <select
                      name="membershipLevel"
                      value={formData.membershipLevel}
                      onChange={handleFormChange}
                      className="input-field w-full"
                    >
                      <option value="silver">Silver - $495/year</option>
                      <option value="gold">Gold - $1,495/year</option>
                      <option value="platinum">Platinum - $4,995/year</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm gold-text tracking-widest mb-3">INTERESTED IN THE INAUGURAL EVENT?</label>
                    <select
                      name="attendInaugural"
                      value={formData.attendInaugural}
                      onChange={handleFormChange}
                      className="input-field w-full"
                      required
                    >
                      <option value="" disabled>Please select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="maybe">Tell me more</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm gold-text tracking-widest mb-3">INTERESTED IN SPONSORSHIP OPPORTUNITIES?</label>
                  <select
                    name="interestSponsorship"
                    value={formData.interestSponsorship}
                    onChange={handleFormChange}
                    className="input-field w-full"
                    required
                  >
                    <option value="" disabled>Please select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="maybe">Tell me more</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm gold-text tracking-widest mb-3">WHY WOULD YOU LIKE TO JOIN?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about yourself and why you would like to join The Executive Counsel..."
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="6"
                    className="input-field w-full resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-gold btn-standard w-full min-w-0 rounded-sm font-semibold">
                  Submit Membership Inquiry
                </button>

                <p className="text-center text-gray-500 text-xs tracking-widest">
                  Private membership counsel. Invitation and application required.
                </p>
              </form>
            )}
          </div>

          <aside className="grid gap-5 fade-in" style={{ animationDelay: '0.15s' }}>
            {reviewNotes.map((note) => (
              <article key={note.title} className="brand-card p-6 md:p-7 text-center">
                <IconBadge icon={note.icon} label={note.title} className="mb-5" />
                <h3 className="text-lg md:text-xl font-light mb-3">{note.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{note.description}</p>
              </article>
            ))}

            <div className="quote-panel p-6 md:p-7">
              <p className="text-gold text-xs tracking-[0.24em] uppercase mb-4">Membership Note</p>
              <p className="text-gray-300 leading-relaxed">
                The strongest applications communicate professional background, community alignment, and a clear reason for joining the founding member community.
              </p>
            </div>
          </aside>
        </div>
      </BrandSection>
    </>
  );
}
