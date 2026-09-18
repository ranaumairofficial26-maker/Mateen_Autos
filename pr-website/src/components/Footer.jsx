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

            {/* Official Social Media Channels */}
            <div className="au-footer-social-row">
              <a
                href="https://www.instagram.com/mateenautoofficial/"
                target="_blank"
                rel="noreferrer"
                className="au-footer-social-btn au-soc-insta"
                title="Follow Mateen Auto on Instagram (@mateen.auto1)"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/TheMateenAuto"
                target="_blank"
                rel="noreferrer"
                className="au-footer-social-btn au-soc-fb"
                title="Join 33,000+ Community on Facebook (@TheMateenAuto)"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@mateen.auto1"
                target="_blank"
                rel="noreferrer"
                className="au-footer-social-btn au-soc-yt"
                title="Subscribe to Mateen Auto on YouTube (@mateen.auto1)"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@mateenautoofficial"
                target="_blank"
                rel="noreferrer"
                className="au-footer-social-btn au-soc-tt"
                title="Follow Mateen Auto on TikTok (@mateenautoofficial)"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.96-4.46V8.67a8.21 8.21 0 0 0 4.81 1.5v-3.48a4.85 4.85 0 0 1-1-.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div className="au-footer-col au-reveal au-delay-2">
            <h4 className="au-footer-heading">Pages</h4>
            <ul className="au-footer-links">
              <li><a href="/" onClick={(e) => handleNav(e, '/')}>Home</a></li>
              <li><a href="/about" onClick={(e) => handleNav(e, '/about')}>About Us</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Services</a></li>
              <li><a href="/instagram-work" onClick={(e) => handleNav(e, '/instagram-work')}>Social Links</a></li>
              <li><a href="/blogs" onClick={(e) => handleNav(e, '/blogs')}>Blogs &amp; Insights</a></li>
              <li><a href="/faq" onClick={(e) => handleNav(e, '/faq')}>Frequently Asked Questions (FAQ)</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, '/contact')}>Connect With Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="au-footer-col au-reveal au-delay-3">
            <h4 className="au-footer-heading">Our Services</h4>
            <ul className="au-footer-links">
              <li><a href="/services/scratch-repair" onClick={(e) => handleNav(e, '/services/scratch-repair')}>Scratch Filling &amp; Repair</a></li>
              <li><a href="/services/dry-denting" onClick={(e) => handleNav(e, '/services/dry-denting')}>Dry Denting (PDR)</a></li>
              <li><a href="/services/accident-repair" onClick={(e) => handleNav(e, '/services/accident-repair')}>Car Accident Repair</a></li>
              <li><a href="/services/ppf" onClick={(e) => handleNav(e, '/services/ppf')}>PPF (Paint Protection Film)</a></li>
              <li><a href="/services/denting-painting" onClick={(e) => handleNav(e, '/services/denting-painting')}>Denting &amp; Painting (2K)</a></li>
              <li><a href="/services/car-coating" onClick={(e) => handleNav(e, '/services/car-coating')}>Ceramic &amp; Graphene Coating</a></li>
              <li><a href="/services/car-detailing" onClick={(e) => handleNav(e, '/services/car-detailing')}>Car Detailing &amp; Interior Spa</a></li>
              <li><a href="/services/compound-polish" onClick={(e) => handleNav(e, '/services/compound-polish')}>3M Compound &amp; Paint Polish</a></li>
              <li><a href="/services/wheel-balancing-alignment" onClick={(e) => handleNav(e, '/services/wheel-balancing-alignment')}>Wheel Balancing &amp; Alignment</a></li>
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
