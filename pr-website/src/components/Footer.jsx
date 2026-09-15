import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/AboutPage.css';
import '../styles/Navbar.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const footerRef = useRef(null);

  const isPurple = true;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    if (footerRef.current) {
      const reveals = footerRef.current.querySelectorAll('.au-reveal, .au-footer-col, .au-footer-bottom');
      reveals.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const id = href.replace('/#', '');
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const id = href.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const brandColor = isPurple ? '#d946ef' : '#00a8ff';

  return (
    <footer ref={footerRef} className={`au-footer ${isPurple ? 'theme-purple' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="au-footer-glow"></div>
      <div className="container">
        <div className="au-footer-top">
          {/* Col 1: Brand */}
          <div className="au-footer-col brand-col au-reveal au-delay-1">
            <a className="au-footer-logo" href="/" onClick={(e) => handleNav(e, '/')}>
              <div className="au-logo-img-wrap footer-logo-wrap">
                <img src={logoImg} alt="Mateen Auto Logo" />
              </div>
              <div className="au-logo-text">
                <span className="au-logo-name">
                  MATEEN <span>AUTO</span>
                </span>
                <span className="au-footer-tagline-sub">Complete Car Care &amp; Auto Repair Workshop</span>
              </div>
            </a>
            <p className="au-footer-about">
              Lahore's trusted car care &amp; body repair workshop for over 37 years. Pioneers of injection filling in Pakistan, specializing in precision denting, painting, PPF, and complete vehicle repair.
            </p>
            <div className="au-footer-contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.55 2 2 0 0 1 3.6 2.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              <a href="tel:+923234500012">+92 323 4500012</a>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div className="au-footer-col au-reveal au-delay-2">
            <h4 className="au-footer-heading">Pages</h4>
            <ul className="au-footer-links">
              <li><a href="/" onClick={(e) => handleNav(e, '/')}>Home</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Services</a></li>
              <li><a href="/instagram-work" onClick={(e) => handleNav(e, '/instagram-work')}>Instagram Work</a></li>
              <li><a href="/about" onClick={(e) => handleNav(e, '/about')}>About Us</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, '/contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="au-footer-col au-reveal au-delay-3">
            <h4 className="au-footer-heading">Our Services</h4>
            <ul className="au-footer-links">
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>PPF (Paint Protection Film)</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Car Accident Repair</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Denting &amp; Painting (2K)</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Dry Denting (PDR)</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>9H Ceramic &amp; Graphene</a></li>
            </ul>
          </div>

          {/* Col 4: Branches */}
          <div className="au-footer-col au-reveal au-delay-4">
            <h4 className="au-footer-heading">Our Branches</h4>
            <a
              href="https://maps.app.goo.gl/Zq3M319j6U6f7XyT6"
              target="_blank"
              rel="noreferrer"
              className="au-footer-branch-item"
              title="Open Chauburji Branch on Google Maps ↗"
            >
              <div className="au-footer-branch-badge">Main Branch • Get Directions ↗</div>
              <div className="au-footer-branch-name">Chauburji, Lahore</div>
              <div className="au-footer-branch-text">Near Chauburji Chowk, Multan Road</div>
            </a>

            <a
              href="https://maps.google.com/?q=Link+2+Super+Town+Lahore"
              target="_blank"
              rel="noreferrer"
              className="au-footer-branch-item"
              style={{ marginTop: '12px' }}
              title="Open DHA Branch on Google Maps ↗"
            >
              <div className="au-footer-branch-badge">DHA Studio • Get Directions ↗</div>
              <div className="au-footer-branch-name">DHA Branch, Lahore</div>
              <div className="au-footer-branch-text">Link 2 Super Town, Super Town, Lahore</div>
            </a>

            <div className="au-footer-timing">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>

        <div className="au-footer-bottom au-reveal">
          <div className="au-footer-copy">
            © {new Date().getFullYear()} <strong>MATEEN AUTO</strong>. All rights reserved.
          </div>
          <div className="au-footer-bottom-badge">
            FIRST IN PAKISTAN • STILL THE STANDARD
          </div>
        </div>
      </div>
    </footer>
  );
}
