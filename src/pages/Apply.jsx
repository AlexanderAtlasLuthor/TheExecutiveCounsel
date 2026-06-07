import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';

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

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto fade-in">
          {formSubmitted ? (
            <div className="success-message">
              <div className="text-4xl gold-text mb-4">✓</div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">Thank You</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your inquiry has been received. A representative from The Executive Counsel will review your submission and contact you if selected for the next step.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
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

              <div className="grid md:grid-cols-2 gap-6">
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

              <div className="grid md:grid-cols-2 gap-6">
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

              <div className="grid md:grid-cols-2 gap-6">
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

              <button type="submit" className="btn-gold w-full py-4 text-sm md:text-base tracking-widest font-semibold rounded-sm">
                SUBMIT MEMBERSHIP INQUIRY
              </button>

              <p className="text-center text-gray-500 text-xs tracking-widest">
                Private membership counsel. Invitation and application required.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
