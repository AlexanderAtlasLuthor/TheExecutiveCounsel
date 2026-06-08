import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Mail, Phone, Globe, Instagram, Menu, X } from 'lucide-react';
import { navigationLinks } from '../data';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="bg-[#00183B] text-white min-h-screen font-sans" style={{ fontFamily: "'Montserrat', 'Lato', system-ui, sans-serif" }}>
      <ScrollToTop />

      {/* Sticky Navigation */}
      <nav className="site-header fixed top-0 w-full z-50">
        <div className="max-w-[1700px] mx-auto px-5 md:px-8 2xl:px-12 flex justify-between items-center gap-6 h-20 md:h-24">
          <Link
            to="/"
            aria-label="The Executive Circle — Home"
            className="cursor-pointer flex items-center shrink-0"
          >
            <img
              src="/ec-mark-transparent.png"
              alt="The Executive Circle"
              className="header-mark h-12 md:h-14 w-auto"
            />
            <span className="header-wordmark ml-3 text-sm md:text-lg font-semibold tracking-[0.2em] whitespace-nowrap">
              <span className="text-white">EXECUTIVE</span>{' '}
              <span className="text-gold">CIRCLE</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex gap-x-4 2xl:gap-x-7 items-center shrink-0">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
            <span className="nav-rule" aria-hidden="true" />
            <Link
              to="/apply"
              className="btn-gold px-5 py-2.5 text-xs tracking-[0.16em] whitespace-nowrap rounded-sm"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-gold p-2 hover:opacity-70 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        <div className="header-divider" aria-hidden="true" />
      </nav>

      {/* Mobile Menu — rendered outside <nav> so the header's backdrop-filter
          does not trap this fixed overlay behind the page content. */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay xl:hidden">
          <div className="px-6 md:px-8 py-12 space-y-8 max-h-screen overflow-y-auto">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block w-full text-left text-xl md:text-2xl tracking-widest font-light transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-gray-200 hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-8 border-t border-gold border-opacity-40">
              <Link
                to="/apply"
                className="btn-gold block w-full py-4 text-sm tracking-widest font-semibold text-center rounded-sm"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Routed page content */}
      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gold border-opacity-20 py-12 md:py-16 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <p className="gold-text text-sm font-bold tracking-widest mb-4">THE EXECUTIVE CIRCLE</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Where accomplished people meet accomplished people.
              </p>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">ORGANIZATION</p>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/" className="block hover:text-gold transition-colors">Home</Link>
                <Link to="/about" className="block hover:text-gold transition-colors">About</Link>
                <Link to="/membership" className="block hover:text-gold transition-colors">Membership</Link>
              </div>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">EXPERIENCES</p>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/events" className="block hover:text-gold transition-colors">Events</Link>
                <Link to="/launch" className="block hover:text-gold transition-colors">Reception</Link>
              </div>
            </div>
            <div>
              <p className="gold-text text-xs font-bold tracking-widest mb-4">OPPORTUNITIES</p>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/sponsorship" className="block hover:text-gold transition-colors">Sponsorship</Link>
                <Link to="/apply" className="block hover:text-gold transition-colors">Apply</Link>
              </div>
            </div>
            <div className="min-w-0">
              <p className="gold-text text-xs font-bold tracking-widest mb-4">CONTACT</p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span>(305) 555-0123</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 min-w-0">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <span className="min-w-0 break-all">Membership@ExecutiveCircle.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Globe size={16} className="text-gold flex-shrink-0" />
                  <span>ExecutiveCircle.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Instagram size={16} className="text-gold flex-shrink-0" />
                  <span>@ExecutiveCircle</span>
                </div>
              </div>
            </div>
          </div>

          <div className="divider mb-8"></div>

          <div className="text-center text-gray-600 text-xs tracking-widest">
            <p>© 2026 THE EXECUTIVE CIRCLE. ALL RIGHTS RESERVED.</p>
            <p className="mt-2">Private membership circle. Invitation and application required.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
