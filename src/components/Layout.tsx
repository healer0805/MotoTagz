import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faEnvelope,
  faPhone,
  faMobileScreen,
  faShieldAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faApple,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';

const navItems = [
  { to: '/about', label: 'About Us' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/blog', label: 'Blog' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-black/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto gap-6 h-28 px-4 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="flex flex-col items-start no-underline text-inherit"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="logo.jfif"
              alt="MotoTagz"
              className="block h-24 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop: nav links + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex list-none m-0 p-0 gap-7 flex-wrap text-[16.5px]">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `no-underline text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors font-medium ${isActive ? '!text-[var(--primary-color)]' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Download MotoTagz App
            </a>
          </div>

          {/* Mobile: bars button */}
          <button
            type="button"
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" aria-hidden />
          </button>
        </nav>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-black/10 px-4 sm:px-6 py-6">
            <ul className="flex flex-col list-none m-0 p-0 gap-4">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block no-underline text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors font-medium py-1 ${isActive ? '!text-[var(--primary-color)]' : ''}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="mt-6 block w-full text-center bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all font-semibold shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Download MotoTagz App
            </a>
          </div>
        )}
      </header>
      <Outlet />
      <footer id="global-footer" className="code-section bg-[var(--dark-background-color)] text-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <a href="/" className="inline-block mb-6">
                <img src="/logo.png" alt="MotoTagz LLC" className="h-28 py-2 w-auto object-contain" />
              </a>
              <p className="text-gray-300 leading-relaxed mb-6">
                First-of-its-kind motorcycle crash detection and emergency response
                app. Protecting riders when they need it most.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} aria-hidden />
                </a>
                <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} aria-hidden />
                </a>
                <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} aria-hidden />
                </a>
                <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} aria-hidden />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--accent-color)]">Quick Links</h3>
              <ul className="space-y-3 list-none p-0 m-0">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> About Us
                  </a>
                </li>
                <li>
                  <a href="/features" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Features
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> How It Works
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--accent-color)]">Resources</h3>
              <ul className="space-y-3 list-none p-0 m-0">
                <li>
                  <a href="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Contact Us
                  </a>
                </li>
                <li>
                  <a href="/testimonials" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Testimonials
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 no-underline">
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[var(--accent-color)]" aria-hidden /> Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[var(--accent-color)]">Get In Touch</h3>
              <ul className="space-y-4 list-none p-0 m-0">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[var(--accent-color)] mt-1 shrink-0" aria-hidden />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:info@mototagzllc.org" className="text-gray-300 hover:text-white transition-colors no-underline">info@mototagzllc.org</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-[var(--accent-color)] mt-1 shrink-0" aria-hidden />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <a href="tel:+16785928267" className="text-gray-300 hover:text-white transition-colors no-underline">678-592-8267</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMobileScreen} className="text-[var(--accent-color)] mt-1 shrink-0" aria-hidden />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Download</div>
                    <div className="flex gap-2 mt-2">
                      <a href="#" className="bg-white/10 px-3 py-1 rounded text-xs hover:bg-white/20 transition-all no-underline text-white inline-flex items-center gap-1">
                        <FontAwesomeIcon icon={faApple} aria-hidden /> iOS
                      </a>
                      <a href="#" className="bg-white/10 px-3 py-1 rounded text-xs hover:bg-white/20 transition-all no-underline text-white inline-flex items-center gap-1">
                        <FontAwesomeIcon icon={faAndroid} aria-hidden /> Android
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left m-0">
                © 2026 MotoTagz LLC. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FontAwesomeIcon icon={faShieldAlt} className="text-[var(--accent-color)]" aria-hidden />
                <span>Protecting riders since 2024</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
