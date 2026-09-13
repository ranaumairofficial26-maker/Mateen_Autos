import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import founderImg from '../assets/founder.jpg';
import journeyCarImg from '../assets/journey-car.jpg';
import logoImg from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

/* ── NAV LINKS ────────────────────────────── */
const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'INSTAGRAM WORK', href: '/#portfolio' },
  { label: 'ABOUT US', href: '/about', active: true },
];

const stats = [
  { number: '37+',     from: 0,    to: 37,   suffix: '+', label: 'Years of\nExcellence' },
  { number: '1000+',   from: 1000, to: 1999, suffix: '+', label: 'Happy\nClients' },
  { number: 'PREMIUM', from: null, to: null, suffix: '',  label: 'Detailing\nServices' },
  { number: '100%',    from: 100,  to: 99,   suffix: '%', label: 'Satisfaction\nFocused' },
];

/* ── ANIMATED STAT COMPONENT ────────────── */
function AnimatedStat({ stat }) {
  const [display, setDisplay] = useState(stat.number);
  const rafRef = useRef(null);

  const animate = useCallback(() => {
    if (stat.from === null) return; // skip PREMIUM
    const duration = 800;
    const start = performance.now();
    const from = stat.from;
    const to = stat.to;
    const diff = to - from; // negative if counting down

    const count = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      const current = Math.round(from + ease * diff);
      setDisplay(current + stat.suffix);
      if (progress < 1) rafRef.current = requestAnimationFrame(count);
      else setDisplay(to + stat.suffix);
    };
    rafRef.current = requestAnimationFrame(count);
  }, [stat]);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setDisplay(stat.number);
  }, [stat]);

  return (
    <div
      className="au-stat"
      onMouseEnter={animate}
      onMouseLeave={reset}
      style={{ cursor: 'default', userSelect: 'none' }}
    >
      <div className="au-stat-number" style={{ transition: 'color 0.2s' }}>
        {display}
      </div>
      <div className="au-stat-label" style={{ whiteSpace: 'pre-line' }}>
        {stat.label}
      </div>
    </div>
  );
}

/* ── JOURNEY ─────────────────────────────── */
const journey = [
  {
    icon: '🎨',
    year: '1987',
    event: 'Denting & Painting Mastery',
    desc: 'Started with passionate, high-precision traditional car denting and 2K oven paint refinishing in Lahore.',
  },
  {
    icon: '💉',
    year: '2000',
    event: 'First in Pakistan: Injection Filling',
    desc: 'Pioneered signature hydraulic injection filling in Pakistan for flawless, factory-finish dent restoration.',
  },
  {
    icon: '🚗',
    year: '2017',
    event: 'Complete Auto Care Facility',
    desc: 'Evolved into a comprehensive full-service car care workshop covering complete vehicle bodywork and care.',
  },
  {
    icon: '🛡️',
    year: '2026',
    event: 'Premium PPF & Surface Armour',
    desc: 'Launched high-grade Paint Protection Film (PPF), graphene ceramic shields & ultimate surface protection.',
  },
];

/* ── BRANCHES DATA ───────────────────────── */
const branches = [
  {
    id: 'chauburji',
    name: 'Mateen Auto (Chauburji)',
    subtitle: 'Main Body Repair & Denting Workshop',
    tag: 'MAIN BRANCH',
    address: 'Near Chauburji Chowk, Multan Road / Bahawalpur Road, Lahore',
    phone: '+92 323 4500012',
    hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    services: 'Injection Filling, Denting & Painting, Frame Alignment, Restorations',
    mapEmbed: 'https://maps.google.com/maps?q=Mateen%20Auto%20Chauburji%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directLink: 'https://maps.google.com/?q=Mateen+Auto+Chauburji+Lahore',
  },
  {
    id: 'dha',
    name: 'Mateen Autos (DHA Branch)',
    subtitle: 'Car Care, PPF & Detailing Center',
    tag: 'DHA BRANCH',
    address: 'Mateen Autos Dha branch, F9RG+Q73, Link 2 Super Town, Super Town, Lahore, Pakistan',
    phone: '+92 310 4253333',
    hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    services: 'Paint Protection Film (PPF), Ceramic Coating, Paint Correction, Interior Spa',
    mapEmbed: 'https://maps.google.com/maps?q=Mateen%20Autos%20Dha%20branch%2C%20F9RG%2BQ73%2C%20Link%202%20Super%20Town%2C%20Super%20Town%2C%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directLink: 'https://maps.google.com/?q=Mateen+Autos+Dha+branch,+F9RG%2BQ73,+Link+2+Super+Town,+Super+Town,+Lahore',
  },
];

export default function AboutPage() {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  // Scroll to top and observe scroll reveal elements
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    const elements = document.querySelectorAll(
      '.au-reveal, .au-reveal-left, .au-reveal-right, .au-reveal-scale, .au-timeline-item, .au-branch-card, .au-footer-col'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = href.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <div className="au-page">

      {/* ── NAVBAR & TOPBAR ───────────────────── */}
      <Navbar />

      {/* ── ABOUT HERO SECTION ───────────────── */}
      <section className="au-hero-section">
        <div className="au-grid-bg"></div>

        <div className="container">
          <div className="au-hero-inner">

            {/* LEFT: Text */}
            <div className="au-hero-left au-reveal-left">
              <div className="au-section-label">About Nadeem</div>

              <h1 className="au-main-heading">
                37 Years of Perfecting
                <span className="blue">Every Panel.</span>
              </h1>

              {/* Tagline overlay */}
              <div style={{
                display: 'inline-block',
                marginBottom: '20px',
                padding: '12px 16px',
                border: '1px solid rgba(217, 70, 239, 0.3)',
                borderRadius: '6px',
                background: 'rgba(217, 70, 239, 0.08)',
              }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  FIRST IN PAKISTAN.
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#f0abfc', fontWeight: 700, textTransform: 'uppercase' }}>
                  STILL THE STANDARD.
                </div>
              </div>

              <p className="au-body-text">
                With over 37 years of hands-on experience, Nadeem Denting &amp; Painting has been
                Lahore's trusted name in professional car denting, painting and injection filling —
                proudly the first workshop in Pakistan to introduce injection filling for flawless,
                factory-finish dent repair. From minor scratches to major panel damage, our expert
                craftsmanship restores every vehicle to its original shine, combining decades of
                precision with genuine care for every car that comes through our doors.
              </p>

              {/* Stats - hover to animate */}
              <div className="au-stats">
                {stats.map((stat, i) => (
                  <div key={stat.label} style={{ display: 'flex', alignItems: 'stretch', gap: '16px' }}>
                    <AnimatedStat stat={stat} />
                    {i < stats.length - 1 && <div className="au-stat-divider"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Founder image */}
            <div className="au-hero-right au-reveal-right">
              {/* Decorative vertical text */}
              <div style={{
                position: 'absolute',
                right: '-10px',
                top: '50%',
                transform: 'translateY(-50%) rotate(90deg)',
                fontSize: '8px',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                color: 'rgba(0,168,255,0.35)',
                whiteSpace: 'nowrap',
                zIndex: 5,
              }}>
                DETAILS&nbsp;&nbsp;CREATE&nbsp;&nbsp;A&nbsp;&nbsp;HIGHER&nbsp;&nbsp;STANDARD
              </div>

              <div className="au-founder-wrap">
                {/* Founder image - user's actual photo */}
                <img
                  src={founderImg}
                  alt="Nadeem – Founder & CEO"
                  className="au-founder-img"
                />

                {/* Signature */}
                <div className="au-founder-caption">
                  <div className="au-founder-sig">Nadeem</div>
                  <div className="au-founder-title">Founder & CEO</div>
                  <div className="au-founder-company">Mateen Auto</div>
                </div>
              </div>

            </div>
          </div>

          {/* Centered Page Quote */}
          <div className="au-quote au-reveal">
            <p className="au-quote-text">
              "It's not just about cars, it's about the people who love them."
            </p>
            <div className="au-quote-author">— NADEEM</div>
            <div className="au-quote-role">Founder, Mateen Auto</div>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY SECTION ──────────────── */}
      <section className="au-journey-section">
        <div className="container">
          <div className="au-journey-header au-reveal">
            <div className="au-section-label" style={{ justifyContent: 'center' }}>
              Our Journey
            </div>
            <h2 className="au-journey-title">A Story of Passion, Trust and Growth</h2>
            <p className="au-journey-subtitle">Decades of craftsmanship, innovation and unmatched automotive care in Pakistan.</p>
          </div>

          <div className="au-journey-inner">
            {/* Left car image */}
            <div className="au-journey-car au-reveal-left">
              <img
                src={journeyCarImg}
                alt="Mateen Auto Workshop & Craftsmanship"
              />
              <div className="au-journey-car-badge">
                <span>MATEEN AUTO</span>
                <strong>WORKSHOP STUDIO</strong>
              </div>
            </div>

            {/* Timeline grid */}
            <div className="au-timeline">
              {journey.map((item, i) => (
                <div className={`au-timeline-item au-reveal au-delay-${(i % 4) + 1}`} key={item.year}>
                  <span className="au-timeline-icon">{item.icon}</span>
                  <div className="au-timeline-year">{item.year}</div>
                  <div className="au-timeline-event">{item.event}</div>
                  <p className="au-timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right tagline */}
            <div className="au-journey-tagline au-reveal-right">
              <div className="au-journey-tagline-text">
                More Than<br />
                <span>Just a Detail</span>
              </div>
              <div className="au-journey-tagline-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR LOCATIONS SECTION ────────────── */}
      <section className="au-locations-section" id="locations">
        <div className="container">
          <div className="au-journey-header au-reveal">
            <div className="au-section-label" style={{ justifyContent: 'center' }}>
              Our Workshops
            </div>
            <h2 className="au-journey-title">Visit Our Locations</h2>
            <p className="au-journey-subtitle">
              Serving you across two premier locations in Lahore: Chauburji &amp; DHA
            </p>
          </div>

          <div className="au-locations-inner">
            {/* LEFT: Location Cards */}
            <div className="au-locations-cards au-reveal-left">
              {branches.map((branch) => {
                const isActive = selectedBranch.id === branch.id;
                return (
                  <div
                    key={branch.id}
                    className={`au-branch-card ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedBranch(branch)}
                  >
                    <div className="au-branch-header">
                      <div>
                        <span className="au-branch-tag">{branch.tag}</span>
                        <h3 className="au-branch-name">{branch.name}</h3>
                        <div className="au-branch-sub">{branch.subtitle}</div>
                      </div>
                      <div className={`au-branch-radio ${isActive ? 'active' : ''}`}>
                        {isActive && <div className="au-branch-radio-dot"></div>}
                      </div>
                    </div>

                    <div className="au-branch-details">
                      <div className="au-branch-detail-row">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" strokeWidth="2">
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{branch.address}</span>
                      </div>

                      <div className="au-branch-detail-row">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.55 2 2 0 0 1 3.6 2.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                        </svg>
                        <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="au-branch-phone">
                          {branch.phone}
                        </a>
                      </div>

                      <div className="au-branch-detail-row">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>{branch.hours}</span>
                      </div>

                      <div className="au-branch-detail-row services">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7b2fff" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <span>{branch.services}</span>
                      </div>
                    </div>

                    <div className="au-branch-actions">
                      <button
                        type="button"
                        className={`au-branch-btn-select ${isActive ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedBranch(branch);
                        }}
                      >
                        {isActive ? '✓ Showing On Map' : 'Select Branch'}
                      </button>

                      <a
                        href={branch.directLink}
                        target="_blank"
                        rel="noreferrer"
                        className="au-branch-btn-directions"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Get Directions</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Interactive Map */}
            <div className="au-locations-map-wrap au-reveal-right">
              <div className="au-map-header">
                <div className="au-map-title-bar">
                  <div className="au-map-pulse-dot"></div>
                  <div>
                    <div className="au-map-branch-name">{selectedBranch.name}</div>
                    <div className="au-map-branch-addr">{selectedBranch.address}</div>
                  </div>
                </div>
                <a
                  href={selectedBranch.directLink}
                  target="_blank"
                  rel="noreferrer"
                  className="au-map-open-btn"
                >
                  Open in Maps ↗
                </a>
              </div>

              <div className="au-map-frame-container">
                <iframe
                  title={`Map showing ${selectedBranch.name}`}
                  key={selectedBranch.id}
                  src={selectedBranch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────── */}
      <Footer />

    </div>
  );
}
