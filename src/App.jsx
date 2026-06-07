import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check, Menu, X } from 'lucide-react';

export default function ExecutiveCounsel() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    company: '',
    role: '',
    membershipLevel: 'gold',
    interestType: 'membership',
    message: '',
  });

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'Membership', href: '#membership' },
    { name: 'Events', href: '#events' },
    { name: 'Launch Reception', href: '#launch' },
    { name: 'Sponsorship', href: '#sponsorship' },
    { name: 'Standards', href: '#standards' },
    { name: 'Apply', href: '#apply' },
  ];

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        profession: '',
        company: '',
        role: '',
        membershipLevel: 'gold',
        interestType: 'membership',
        message: '',
      });
    }, 5000);
  };

  const membershipTiers = [
    {
      id: 'silver',
      name: 'Silver',
      price: '495',
      tagline: 'Essential Membership',
      features: [
        'Access to 4 exclusive events annually',
        'Member directory access',
        'Priority event invitations',
        'Digital member credential',
        'Quarterly communications',
      ],
    },
    {
      id: 'gold',
      name: 'Gold',
      price: '1,495',
      tagline: 'Premium Access',
      features: [
        'All Silver benefits',
        'Unlimited event access',
        'VIP seating at events',
        'Two complimentary guest passes',
        'Priority introductions',
        'Exclusive networking calls',
      ],
      featured: true,
      label: 'Most Popular',
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '4,995',
      tagline: 'Elite Leadership',
      features: [
        'All Gold benefits',
        'Dedicated concierge service',
        'Private curated member dinners',
        'VIP reception access',
        'Executive advisory access',
        'Exclusive investor events',
      ],
      label: 'Concierge Access',
    },
  ];

  const features = [
    { icon: '◆', title: 'Curated Introductions' },
    { icon: '◇', title: 'Exclusive Social Events' },
    { icon: '▲', title: 'Executive Networking' },
    { icon: '●', title: 'VIP Experiences' },
    { icon: '◈', title: 'Private Dinners' },
    { icon: '▬', title: 'Luxury Travel' },
    { icon: '⬥', title: 'Community Engagement' },
    { icon: '○', title: 'Invitation-Only Access' },
  ];

  const events = [
    {
      title: 'Executive Counsel Soirée',
      frequency: 'Monthly',
      description: 'An elegant evening of cocktails, networking, and curated introductions for accomplished professionals.',
      icon: '◇',
    },
    {
      title: 'Black Tie Connections Gala',
      frequency: 'Quarterly',
      description: 'A formal gala featuring live entertainment, philanthropy, and executive-level networking.',
      icon: '▲',
    },
    {
      title: 'Founders & Leaders Dinner',
      frequency: 'Invitation Only',
      description: 'An intimate dinner experience for CEOs, business owners, investors, and industry leaders.',
      icon: '◆',
    },
    {
      title: 'Executive Weekend Retreats',
      frequency: 'Quarterly',
      description: 'Luxury travel experiences designed to strengthen relationships among members.',
      icon: '⬥',
    },
  ];

  const sponsorships = [
    {
      tier: 'Presenting Sponsor',
      price: '$25,000',
      benefits: [
        'Event naming rights',
        'Speaking opportunity',
        'Premium logo placement',
        'VIP table for 10',
        'Membership package',
        'Featured in all marketing',
      ],
    },
    {
      tier: 'Platinum Sponsor',
      price: '$10,000',
      benefits: [
        'VIP table for 8',
        'Promotional materials placement',
        'Event recognition',
        'Website inclusion',
      ],
    },
    {
      tier: 'Gold Sponsor',
      price: '$5,000',
      benefits: [
        'VIP seating',
        'Event signage',
        'Marketing recognition',
      ],
    },
    {
      tier: 'Silver Sponsor',
      price: '$2,500',
      benefits: [
        'Event recognition',
        'Marketing materials',
        'Two tickets',
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Georgia', serif" }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #0a0a0a;
          color: #ffffff;
        }

        .gold-text { color: #d4af37; }
        .gold-accent {
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gold-border { border-color: #d4af37; }

        .btn-gold {
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
          color: #0a0a0a;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
          cursor: pointer;
        }

        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
        }

        .btn-outline {
          border: 2px solid #d4af37;
          color: #d4af37;
          background: transparent;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: all 0.3s;
          cursor: pointer;
        }

        .btn-outline:hover {
          background: #d4af37;
          color: #0a0a0a;
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
        }

        .membership-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(37, 37, 37, 0.7) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .membership-card:hover {
          border-color: #d4af37;
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(212, 175, 55, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .membership-card.featured {
          border: 2px solid #d4af37;
          transform: scale(1.05);
          background: linear-gradient(135deg, rgba(30, 25, 15, 0.8) 0%, rgba(40, 37, 25, 0.8) 100%);
        }

        .membership-card.featured:hover {
          transform: scale(1.08) translateY(-8px);
          box-shadow: 0 40px 80px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.5) 0%, rgba(37, 37, 37, 0.5) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s;
          min-h-40;
        }

        .feature-card:hover {
          border-color: #d4af37;
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .event-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(37, 37, 37, 0.6) 100%);
          backdrop-filter: blur(10px);
          border-left: 4px solid #d4af37;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          border-right: 1px solid rgba(212, 175, 55, 0.2);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s;
        }

        .event-card:hover {
          transform: translateX(10px);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-left-color: #f4d03f;
        }

        .founding-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(37, 37, 37, 0.6) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s;
        }

        .founding-card:hover {
          border-color: #d4af37;
          transform: translateY(-4px);
          box-shadow: 0 15px 50px rgba(212, 175, 55, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .sponsor-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(37, 37, 37, 0.6) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s;
        }

        .sponsor-card:hover {
          border-color: #d4af37;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .input-field {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          font-size: 1rem;
          transition: all 0.3s;
          font-family: inherit;
        }

        .input-field:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
          background: rgba(212, 175, 55, 0.1);
        }

        .fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-message {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(37, 37, 37, 0.7) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid #d4af37;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          animation: slideDown 0.4s ease-out;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.95));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 40;
          animation: slideInDown 0.3s ease-out;
          overflow-y: auto;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-black via-black to-transparent bg-opacity-90 border-b border-amber-700 border-opacity-30 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-6 flex justify-between items-center h-20 md:h-24">
          <button onClick={() => scrollToSection('#home')} className="cursor-pointer hover:opacity-80 transition">
            <div className="text-lg md:text-3xl font-bold tracking-widest">
              <span className="gold-text">
                <span className="hidden md:inline">THE EXECUTIVE COUNSEL</span>
                <span className="md:hidden text-2xl">TEC</span>
              </span>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 xl:gap-8 items-center text-sm">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-gold transition-colors duration-300 tracking-wide whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#apply')}
              className="btn-gold px-6 py-2 text-xs md:text-sm tracking-widest whitespace-nowrap"
            >
              APPLY NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gold p-2 hover:opacity-70 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay lg:hidden">
            <div className="px-6 md:px-8 py-12 space-y-8 max-h-screen overflow-y-auto">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-xl md:text-2xl tracking-widest font-light hover:text-gold transition-colors duration-300 text-gray-200"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-8 border-t border-gold border-opacity-40">
                <button 
                  onClick={() => scrollToSection('#apply')}
                  className="btn-gold w-full py-4 text-sm tracking-widest font-semibold"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)`
        }} />

        <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
          <p className="text-gold text-xs md:text-sm tracking-widest mb-6 md:mb-8 uppercase fade-in">✦ PRIVATE MEMBERSHIP ORGANIZATION ✦</p>

          <h1 className="text-5xl md:text-7xl font-light mb-6 md:mb-8 leading-tight fade-in" style={{ letterSpacing: '0.05em', animationDelay: '0.1s' }}>
            The Executive<br />
            <span className="gold-accent">Counsel</span>
          </h1>

          <p className="text-xl md:text-3xl font-light text-gray-300 mb-6 md:mb-10 tracking-wide fade-in" style={{ animationDelay: '0.2s' }}>
            Where Accomplished People Meet Accomplished People
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed fade-in" style={{ animationDelay: '0.3s' }}>
            A private invitation-only membership counsel for executives, entrepreneurs, investors, professionals, and community leaders seeking meaningful personal and professional connections.
          </p>

          <p className="text-xs md:text-sm text-gray-500 italic mb-10 md:mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
            Applications are reviewed privately. Attendance is limited. Membership is not guaranteed.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={() => scrollToSection('#apply')}
              className="btn-gold px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest"
            >
              APPLY FOR MEMBERSHIP
            </button>
            <button 
              onClick={() => scrollToSection('#launch')}
              className="btn-outline px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest"
            >
              REQUEST AN INVITATION
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-12 w-32 md:w-48 h-32 md:h-48 border-2 gold-border border-opacity-10 rounded-full" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-40 left-12 w-24 md:w-40 h-24 md:h-40 border-2 gold-border border-opacity-5 rounded-full" style={{ animation: 'float 10s ease-in-out infinite 1s' }} />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="fade-in">
              <p className="text-gold text-xs md:text-sm tracking-widest mb-4 md:mb-6 uppercase">✦ ABOUT US ✦</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8 leading-tight">
                A Private Counsel for<br />
                <span className="gold-accent">Accomplished Individuals</span>
              </h2>
              <div className="divider mb-6 md:mb-8"></div>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                The Executive Counsel was created for successful people who have outgrown traditional networking events, casual mixers, and online introductions. Our counsel brings together accomplished individuals in a sophisticated, private, and highly curated environment where meaningful relationships can develop naturally.
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 leading-relaxed">
                We believe in the power of meaningful connections built on trust, shared values, and mutual respect among peers who have achieved real success.
              </p>

              <div className="space-y-3 md:space-y-4">
                {['CEOs & Entrepreneurs', 'Executives & Investors', 'Attorneys & Physicians', 'Community Leaders'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center border-2 gold-border border-opacity-30 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.5) 0%, rgba(37, 37, 37, 0.5) 100%)', backdropFilter: 'blur(10px)' }}>
                <div className="text-center">
                  <div className="text-7xl md:text-8xl gold-text font-light mb-4">◆</div>
                  <p className="text-xs md:text-sm tracking-widest gold-text">CURATED CONNECTIONS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ NOW ACCEPTING ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              Become a<br />
              <span className="gold-accent">Founding Member</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The Executive Counsel is now accepting a limited number of founding membership applications in South Florida. Founding members will help shape the culture, standards, and first signature experiences of the counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-12">
            {[
              {
                icon: '▲',
                title: 'Limited Founding Access',
                description: 'Applications are reviewed privately and accepted selectively.'
              },
              {
                icon: '◆',
                title: 'South Florida Launch',
                description: 'Initial membership focus includes Miami, Fort Lauderdale, Boca Raton, and Palm Beach.'
              },
              {
                icon: '○',
                title: 'Private Member Community',
                description: 'Designed for accomplished individuals seeking meaningful personal and professional relationships.'
              },
            ].map((card, idx) => (
              <div key={idx} className="founding-card p-8 md:p-10 text-center fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl md:text-6xl gold-text mb-6 font-light">{card.icon}</div>
                <h3 className="text-xl md:text-2xl font-light mb-4">{card.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => scrollToSection('#apply')}
              className="btn-gold px-10 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-widest"
            >
              APPLY AS A FOUNDING MEMBER
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ WHY JOIN ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              More Than Networking.<br />
              <span className="gold-accent">More Than Social Events.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card p-6 md:p-8 text-center fade-in flex flex-col items-center justify-center" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="text-4xl md:text-5xl gold-text mb-4 font-light">{feature.icon}</div>
                <h3 className="text-base md:text-lg font-light">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 md:py-32 px-6 md:px-12 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ MEMBERSHIP LEVELS ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              Choose Your<br />
              <span className="gold-accent">Level of Access</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {membershipTiers.map((tier, idx) => (
              <div
                key={tier.id}
                className={`membership-card p-8 md:p-10 flex flex-col h-full fade-in ${tier.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tier.label && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-2 text-xs font-bold tracking-widest rounded-full ${
                    tier.featured ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black' : 'bg-gold text-black'
                  }`}>
                    {tier.label}
                  </div>
                )}

                <div className="text-4xl md:text-5xl mb-4 gold-text font-light">{"◆●★"[idx]}</div>
                <h3 className="text-3xl md:text-4xl font-light mb-2">{tier.name}</h3>
                <p className="text-sm gold-text tracking-widest mb-6">{tier.tagline}</p>

                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-light">${tier.price}</span>
                  <span className="text-gray-500 text-xs md:text-sm tracking-widest">/YEAR</span>
                </div>

                <div className="divider mb-8"></div>

                <button 
                  onClick={() => scrollToSection('#apply')}
                  className={`w-full py-3 md:py-4 mb-8 font-semibold tracking-widest text-sm transition-all ${
                    tier.featured ? 'btn-gold' : 'btn-outline'
                  }`}
                >
                  APPLY FOR {tier.name.toUpperCase()}
                </button>

                <div className="space-y-3 md:space-y-4 flex-grow">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ SIGNATURE EXPERIENCES ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              Exclusive<br />
              <span className="gold-accent">Events & Gatherings</span>
            </h2>
          </div>

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
        </div>
      </section>

      {/* Launch Reception Section */}
      <section id="launch" className="py-20 md:py-32 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto fade-in">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 gold-border border-opacity-30 p-8 md:p-12 rounded-lg">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ INAUGURAL RECEPTION ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              The Executive Counsel<br />
              <span className="gold-accent">Inaugural Reception</span>
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed">
              Join us for the exclusive inaugural launch of The Executive Counsel in South Florida. This invitation-only reception will bring together a curated guest list of entrepreneurs, executives, professionals, investors, and community leaders.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-10">
              <div>
                <p className="text-gold text-xs tracking-widest mb-4">EVENT DETAILS</p>
                <div className="space-y-3 text-gray-300 text-base">
                  <p>✦ <span className="font-semibold">100 Invited Guests</span></p>
                  <p>✦ <span className="font-semibold">Business Elegant</span> Dress Code</p>
                  <p>✦ <span className="font-semibold">$199</span> Ticket Price</p>
                  <p>✦ <span className="font-semibold">South Florida</span> Location</p>
                </div>
              </div>
              <div>
                <p className="text-gold text-xs tracking-widest mb-4">PROGRAM</p>
                <div className="space-y-3 text-gray-300 text-base">
                  <p>✦ Cocktail Reception</p>
                  <p>✦ Curated Introductions</p>
                  <p>✦ Live Music</p>
                  <p>✦ Membership Presentation</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm italic mb-8">Attendance is limited and subject to invitation approval.</p>

            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#apply')}
                className="btn-gold px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest flex-1"
              >
                REQUEST LAUNCH INVITATION
              </button>
              <button 
                onClick={() => scrollToSection('#sponsorship')}
                className="btn-outline px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest flex-1"
              >
                SPONSOR A TABLE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 fade-in">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ PARTNERSHIP OPPORTUNITIES ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              Sponsorship<br />
              <span className="gold-accent">& Partnership Tiers</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
              The Executive Counsel offers premium sponsorship opportunities for brands and firms seeking to connect with affluent professionals and business leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
            {sponsorships.map((sponsor, idx) => (
              <div key={idx} className="sponsor-card p-8 md:p-10 fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-2xl md:text-3xl font-light mb-2">{sponsor.tier}</h3>
                <p className="text-2xl md:text-3xl gold-accent font-light mb-6">{sponsor.price}</p>
                <div className="space-y-3">
                  {sponsor.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => scrollToSection('#apply')}
              className="btn-gold px-10 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-widest"
            >
              REQUEST SPONSORSHIP PACKAGE
            </button>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section id="standards" className="py-20 md:py-32 px-6 md:px-12 bg-gray-950">
        <div className="max-w-5xl mx-auto fade-in">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ MEMBERSHIP STANDARDS ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">
              Designed for Quality,<br />
              <span className="gold-accent">Privacy & Exclusivity</span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed text-center">
            Membership is application-based and reviewed by our Membership Committee. The Executive Counsel is intentionally curated to preserve privacy, quality, professionalism, and trust among members.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 border-l-4 gold-border mb-8 md:mb-10">
            <p className="text-lg md:text-xl italic text-gray-300">
              "Membership is earned through character, achievement, and contribution."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {['Professional Profile Review', 'Identity Verification', 'Background Screening', 'Professional References', 'Committee Interview', 'Values Alignment'].map((req, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold bg-opacity-20 border border-gold rounded-full flex items-center justify-center flex-shrink-0 text-gold text-sm font-semibold">
                  {idx + 1}
                </div>
                <span className="text-gray-300 text-base md:text-lg pt-1">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto fade-in">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gold text-xs md:text-sm tracking-widest mb-4 uppercase">✦ MEMBERSHIP APPLICATION ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Apply for<br />
              <span className="gold-accent">Membership</span>
            </h2>
          </div>

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
                  <label className="block text-sm gold-text tracking-widest mb-3">INTEREST TYPE</label>
                  <select
                    name="interestType"
                    value={formData.interestType}
                    onChange={handleFormChange}
                    className="input-field w-full"
                  >
                    <option value="membership">Membership</option>
                    <option value="launch">Launch Event Invitation</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="dinner">Private Dinner</option>
                  </select>
                </div>
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

              <button type="submit" className="btn-gold w-full py-4 text-sm md:text-base tracking-widest font-semibold">
                SUBMIT MEMBERSHIP INQUIRY
              </button>

              <p className="text-center text-gray-500 text-xs tracking-widest">
                Private membership counsel. Invitation and application required.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-700 border-opacity-20 py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <p className="gold-text text-sm font-bold tracking-widest mb-4">THE EXECUTIVE COUNSEL</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Where accomplished people meet accomplished people.
              </p>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">ORGANIZATION</p>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => scrollToSection('#home')} className="block hover:text-gold transition-colors cursor-pointer">Home</button>
                <button onClick={() => scrollToSection('#about')} className="block hover:text-gold transition-colors cursor-pointer">About</button>
                <button onClick={() => scrollToSection('#membership')} className="block hover:text-gold transition-colors cursor-pointer">Membership</button>
              </div>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">EXPERIENCES</p>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => scrollToSection('#events')} className="block hover:text-gold transition-colors cursor-pointer">Events</button>
                <button onClick={() => scrollToSection('#launch')} className="block hover:text-gold transition-colors cursor-pointer">Reception</button>
              </div>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">OPPORTUNITIES</p>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => scrollToSection('#sponsorship')} className="block hover:text-gold transition-colors cursor-pointer">Sponsorship</button>
                <button onClick={() => scrollToSection('#apply')} className="block hover:text-gold transition-colors cursor-pointer">Apply</button>
              </div>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">CONTACT</p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gold" />
                  <span>(305) 555-0123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gold" />
                  <span>membership@executivecounsel.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="divider mb-8"></div>

          <div className="text-center text-gray-600 text-xs tracking-widest">
            <p>© 2024 THE EXECUTIVE COUNSEL. ALL RIGHTS RESERVED.</p>
            <p className="mt-2">Private membership counsel. Invitation and application required.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
