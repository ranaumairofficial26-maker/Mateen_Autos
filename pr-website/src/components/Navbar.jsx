import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/AboutPage.css';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '#services' },
  { label: 'INSTAGRAM WORK', href: '/' },
  { label: 'ABOUT US', href: '/about' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('INSTAGRAM WORK');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveTab('ABOUT US');
    } else if (location.pathname === '/contact') {
      setActiveTab('CONTACT US');
    } else {
      setActiveTab('INSTAGRAM WORK');
    }
  }, [location.pathname]);

  const handleNav = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveTab(link.label);

    if (link.href === '#services') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
            <a className="au-logo" href="/" onClick={(e) => handleNav(e, { label: 'INSTAGRAM WORK', href: '/' })}>
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

            {/* Contact Button */}
            <a
              href="/contact"
              className={`au-contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, { label: 'CONTACT US', href: '/contact' })}
              id="au-contact-btn"
            >
              <span>CONTACT US</span>
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
          className={activeTab === 'CONTACT US' ? 'active' : ''}
          onClick={(e) => handleNav(e, { label: 'CONTACT US', href: '/contact' })}
          style={{ color: isPurple ? '#d946ef' : '#00a8ff', marginTop: '10px' }}
        >
          CONTACT US →
        </a>
      </div>
    </>
  );
}
