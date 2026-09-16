import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/AboutPage.css';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'SOCIAL LINKS', href: '/instagram-work' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveTab('ABOUT US');
    } else if (location.pathname.startsWith('/services')) {
      setActiveTab('SERVICES');
    } else if (location.pathname === '/instagram-work' || location.pathname === '/social-links') {
      setActiveTab('SOCIAL LINKS');
    } else if (location.pathname === '/contact') {
      setActiveTab('CONNECT WITH US');
    } else {
      setActiveTab('HOME');
    }
  }, [location.pathname]);

  const handleNav = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveTab(link.label);
    navigate(link.href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPurple = true;

  return (
    <>
      {/* ── TOP INFO BAR ─────────────────────── */}
      <div className={`au-topbar ${isPurple ? 'theme-purple' : ''}`}>
        <div className="container">
          <div className="au-topbar-inner">
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div className="au-topbar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Chauburji, Lahore, Pakistan
              </div>
              <div className="au-topbar-divider"></div>
              <div className="au-topbar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                Mon – Sat: 10:00 AM – 08:00 PM
              </div>
            </div>
            <div className="au-topbar-right">
              <div className="au-topbar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.55 2 2 0 0 1 3.6 2.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                Call Us: +92 323 4500012
              </div>
              <div className="au-topbar-divider"></div>
              <div className="au-topbar-item au-topbar-tag">
                Complete Car Care &amp; Auto Repair Workshop
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ───────────────────────────── */}
      <nav className={`au-navbar ${isPurple ? 'theme-purple' : ''}`}>
        <div className="container">
          <div className="au-navbar-inner">

            {/* Logo */}
            <a className="au-logo" href="/" onClick={(e) => handleNav(e, { label: 'HOME', href: '/' })}>
              <div className="au-logo-img-wrap">
                <img src={logoImg} alt="Mateen Auto Logo" />
              </div>
              <div className="au-logo-text">
                <span className="au-logo-name">
                  MATEEN <span>AUTO</span>
                </span>
              </div>
            </a>

            {/* Nav Links */}
            <ul className="au-nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={activeTab === link.label ? 'active' : ''}
                    onClick={(e) => handleNav(e, link)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Connect With Us Button at Right End */}
            <a
              href="/contact"
              className={`au-contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, { label: 'CONNECT WITH US', href: '/contact' })}
              id="au-contact-btn"
            >
              <span>CONNECT WITH US</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className={`au-mobile-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU DRAWER ────────────────── */}
      <div className={`au-mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={activeTab === link.label ? 'active' : ''}
            onClick={(e) => handleNav(e, link)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/contact"
          className={activeTab === 'CONNECT WITH US' ? 'active' : ''}
          onClick={(e) => handleNav(e, { label: 'CONNECT WITH US', href: '/contact' })}
          style={{ color: isPurple ? '#d946ef' : '#00a8ff', marginTop: '10px' }}
        >
          CONNECT WITH US →
        </a>
        <a
          href="https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20want%20to%20get%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '16px',
            padding: '12px 28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          💬 WHATSAPP QUOTE
        </a>
      </div>
    </>
  );
}
