import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import founderImg from '../assets/mateen-auto-nadeem-CEO.jpg.jpeg';
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
  { number: '37+',   from: 0,   to: 37,   suffix: '+', label: 'Years of\nExperience' },
  { number: '1000+', from: 900, to: 1999, suffix: '+', label: 'Happy\nClients' },
  { number: 'GLOBAL', from: null, to: null, suffix: '', label: 'International\nExperience' },
  { number: '100%',  from: 100, to: 99,   suffix: '%', label: 'Satisfaction\nFocused' },
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
    icon: '🔧',
    year: '1989',
    event: 'Automotive Career Begins',
    desc: 'Mr. Nadeem entered the automotive repair field, mastering denting, painting and scratch filling with hands-on precision.',
  },
  {
    icon: '✈️',
    year: '2000s',
    event: 'International Experience — USA & Dubai',
    desc: 'Gained professional exposure in the USA and Dubai, earning certificates associated with MG and Audi brand standards.',
  },
  {
    icon: '🏢',
    year: '2008',
    event: 'Mateen Auto Established in Lahore',
    desc: 'Founded Mateen Auto in Lahore, building a strong reputation through skilled workmanship, quality service and customer trust.',
  },
  {
    icon: '🛡️',
    year: '2026',
    event: 'Premium PPF & Complete Car Care',
    desc: 'Expanded into high-grade PPF, graphene ceramic coating, detailing, wheel balancing & alignment — complete car care under one roof.',
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
              <div className="au-section-label">About Mateen Auto</div>

              <h1 className="au-main-heading">
                Automotive Excellence
                <span className="blue">Since 1989.</span>
              </h1>

              {/* Tagline overlay */}
              <div style={{
                display: 'inline-block',
                marginBottom: '20px',
                padding: '12px 16px',
                border: '1px solid rgba(0, 168, 255, 0.3)',
                borderRadius: '6px',
                background: 'rgba(0, 168, 255, 0.06)',
              }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  EXPERIENCE SINCE 1989 ·
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#00a8ff', fontWeight: 700, textTransform: 'uppercase' }}>
                  SERVING LAHORE SINCE 2008.
                </div>
              </div>

              <p className="au-body-text">
                <strong>Mateen Auto</strong> is a trusted automotive body repair and car care company based in Lahore, Pakistan.
                Founded by <strong>Mr. Nadeem</strong>, our professional journey began in <strong>1989</strong> and we have been
                serving Lahore since <strong>2008</strong>. With hands-on international experience from the <strong>USA and Dubai</strong> —
                including professional certifications with <strong>MG and Audi</strong> — we combine decades of craftsmanship
                with modern techniques in Denting, Painting, Scratch Filling, PPF, Coating, Detailing,
                Accident Repair, and Complete Car Care Solutions.
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

      {/* ── OUR MISSION SECTION ───────────────── */}
      <section className="au-mission-section">
        <div className="container">
          <div className="au-journey-header au-reveal">
            <div className="au-section-label" style={{ justifyContent: 'center', fontSize: '22px', letterSpacing: '4px' }}>
              Our Mission
            </div>
            <h2 className="au-journey-title">Excellence in Every Detail</h2>
            <p className="au-journey-subtitle">A commitment built over 37 years of professional experience across Pakistan, USA & Dubai.</p>
          </div>

          <div className="au-mission-inner">
            <div className="au-mission-points au-reveal">

              {/* Point 1 */}
              <div className="au-mpoint">
                <div className="au-mpoint-badge">
                  <span className="au-mpoint-icon">🎯</span>
                </div>
                <div className="au-mpoint-body">
                  <div className="au-mpoint-title">Our <span className="au-mpoint-grad">Purpose</span></div>
                  <p className="au-mpoint-text">
                    At Mateen Auto, our mission is to provide{' '}
                    <span className="au-mhi-blue">reliable, professional, and high-quality</span>{' '}
                    automotive body repair and car care services — while delivering the{' '}
                    <span className="au-mhi-blue">highest level of customer satisfaction</span>{' '}
                    on every single job.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="au-mpoint">
                <div className="au-mpoint-badge au-mpoint-badge--purple">
                  <span className="au-mpoint-icon">🌍</span>
                </div>
                <div className="au-mpoint-body">
                  <div className="au-mpoint-title">Our <span className="au-mpoint-grad--purple">Legacy</span></div>
                  <p className="au-mpoint-text">
                    With experience dating back to{' '}
                    <span className="au-mhi-purple">1989</span>{' '}
                    and a strong presence in Lahore since{' '}
                    <span className="au-mhi-purple">2008</span>,
                    we are committed to combining{' '}
                    <span className="au-mhi-purple">traditional craftsmanship</span>{' '}
                    with modern techniques and international experience from the{' '}
                    <span className="au-mhi-purple">USA and Dubai</span>.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="au-mpoint">
                <div className="au-mpoint-badge au-mpoint-badge--teal">
                  <span className="au-mpoint-icon">🔩</span>
                </div>
                <div className="au-mpoint-body">
                  <div className="au-mpoint-title">Our <span className="au-mpoint-grad--teal">Goal</span></div>
                  <p className="au-mpoint-text">
                    Our goal is to make{' '}
                    <span className="au-mhi-teal">Scratch Filling, Dry Denting, Denting &amp; Painting,
                    Accident Repair, PPF, Coating, Detailing</span>{' '}
                    and <span className="au-mhi-teal">Complete Car Care</span>{' '}
                    more professional, precise, and accessible for every customer in Lahore and beyond.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="au-mpoint">
                <div className="au-mpoint-badge au-mpoint-badge--gold">
                  <span className="au-mpoint-icon">⭐</span>
                </div>
                <div className="au-mpoint-body">
                  <div className="au-mpoint-title">Our <span className="au-mpoint-grad--gold">Promise</span></div>
                  <p className="au-mpoint-text">
                    We believe every vehicle deserves{' '}
                    <span className="au-mhi-gold">expert care, attention to detail, and a quality finish</span>.
                    That is why we continuously focus on{' '}
                    <span className="au-mhi-gold">quality workmanship, honest service,
                    professional standards,</span>{' '}
                    and lasting <span className="au-mhi-gold">customer trust</span>.
                  </p>
                </div>
              </div>

            </div>


            <div className="au-mission-cards">
              <div className="au-mission-card au-reveal-scale au-delay-1">
                <div className="au-mission-card-icon">🔧</div>
                <div className="au-mission-card-title">Quality Workmanship</div>
                <div className="au-mission-card-text">Expert care and precision on every vehicle — from minor scratches to full accident repair.</div>
              </div>
              <div className="au-mission-card au-reveal-scale au-delay-2">
                <div className="au-mission-card-icon">🤝</div>
                <div className="au-mission-card-title">Honest Service</div>
                <div className="au-mission-card-text">Transparent, professional standards built on customer trust since 1989.</div>
              </div>
              <div className="au-mission-card au-reveal-scale au-delay-3">
                <div className="au-mission-card-icon">🌍</div>
                <div className="au-mission-card-title">International Standards</div>
                <div className="au-mission-card-text">Techniques refined through professional experience in Pakistan, USA & Dubai.</div>
              </div>
              <div className="au-mission-card au-reveal-scale au-delay-4">
                <div className="au-mission-card-icon">🛡️</div>
                <div className="au-mission-card-title">Complete Car Care</div>
                <div className="au-mission-card-text">PPF, Coating, Detailing, Wheel Balancing & Alignment — everything under one roof.</div>
              </div>
            </div>

            <div className="au-mission-tagline-box au-reveal">
              <div className="au-mission-quote">
                &ldquo;To protect your car, restore its beauty, and deliver workmanship you can trust.&rdquo;
              </div>
              <div className="au-mission-quote-sub">Mateen Auto — Experience Since 1989. Excellence in Every Detail.</div>
            </div>
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
