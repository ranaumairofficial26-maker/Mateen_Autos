import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';
import '../styles/ContactPage.css';

/* ── BRANCHES DATA ────────────────────────── */
const branches = [
  {
    id: 'chauburji',
    name: 'Mateen Auto (Chauburji)',
    subtitle: 'Main Body Repair & Denting Workshop',
    tag: 'MAIN BRANCH',
    address: 'Near Chauburji Chowk, Multan Road / Bahawalpur Road, Lahore',
    phone: '+92 323 4500012',
    hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    mapUrl: 'https://maps.google.com/maps?q=Mateen%20Auto%20Workshop%20Chauburji%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directionUrl: 'https://maps.app.goo.gl/Zq3M319j6U6f7XyT6',
    specialties: ['Injection Dent Filling', 'PDR Paintless Repair', '2K Oven Paint', 'Chassis Alignment'],
  },
  {
    id: 'dha',
    name: 'Mateen Auto (DHA Phase 1 Branch)',
    subtitle: 'Luxury Detailing & Paint Protection Studio',
    tag: 'DHA PHASE 1 STUDIO',
    address: 'Link 2 Super Town, Super Town, Lahore, Punjab 54810',
    phone: '+92 323 4500012',
    hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    mapUrl: 'https://maps.google.com/maps?q=Link%202%20Super%20Town%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directionUrl: 'https://maps.google.com/?q=Link+2+Super+Town+Lahore',
    specialties: ['Self-Healing PPF Wrapping', '9H Ceramic Coating', 'Interior Steam Spa', 'Multi-Stage Detailing'],
  }
];

/* ── FAQS ─────────────────────────────────── */
const faqs = [
  {
    q: 'How does Injection Filling dent repair work?',
    a: 'Mateen Auto is the first workshop in Pakistan to introduce injection filling. It utilizes precision hydraulic injection to restore damaged panels back to factory finish without damaging original paint or excessive putty.'
  },
  {
    q: 'Do I need an appointment before visiting?',
    a: 'While walk-ins are always welcome at both Chauburji and DHA branches, we recommend booking an appointment for PPF, ceramic coating, or major bodywork to ensure prompt service.'
  },
  {
    q: 'What are the workshop timings for both branches?',
    a: 'Both our Chauburji and DHA Phase 1 branches operate Monday to Saturday from 10:00 AM to 8:00 PM.'
  },
  {
    q: 'How long does a complete paint job or PPF take?',
    a: 'Minor touchups take 1-2 days, while complete 2K oven-baked paint jobs or full vehicle PPF typically require 3-5 days for flawless curing and quality assurance.'
  }
];

/* ── WORKSHOP SERVICES (ALL 10 SERVICES - TEXT ONLY) ─ */
const workshopServices = [
  { id: 1, name: 'PPF (Paint Protection Film)', tag: 'Self-Healing Shield', icon: '🛡️', desc: 'Premium TPU film protecting against rock chips, scratches & UV.' },
  { id: 2, name: 'Car Accident Repair', tag: 'Chassis & Body Rebuild', icon: '🚗', desc: 'Complete structural realignment & factory-grade collision repair.' },
  { id: 3, name: 'Denting & Painting', tag: '2K Oven-Baked Gloss', icon: '🎨', desc: 'Computerized shade matching & micron-accurate paint spraying.' },
  { id: 4, name: 'Scratch Filling & Repair', tag: 'Micro-Touchup Art', icon: '✨', desc: 'Seamless scratch removal and deep paint defect restoration.' },
  { id: 5, name: 'Dry Denting', tag: 'Paintless PDR Mastery', icon: '🔨', desc: 'Restores panel curves without disturbing original factory paint.' },
  { id: 6, name: 'Car Coating', tag: '9H Ceramic & Graphene', icon: '💎', desc: 'Hydrophobic protection shield with multi-year mirror gloss.' },
  { id: 7, name: 'Car Detailing', tag: 'Full Interior & Exterior Spa', icon: '🧼', desc: 'Engine bay, deep leather rejuvenation & steam decontamination.' },
  { id: 8, name: '3M Compound & Polish', tag: 'Swirl Removal Finish', icon: '⚡', desc: 'Multi-stage 3M compound cutting for showroom reflection.' },
  { id: 9, name: 'Wheel Balancing', tag: 'Vibration-Free Smooth Ride', icon: '⚖️', desc: 'High-speed computerized dynamic wheel weight balancing.' },
  { id: 10, name: 'Wheel Alignment', tag: 'Laser Precision Calibration', icon: '🎯', desc: '3D laser computerized camber, caster & toe alignment.' },
];

export default function ContactPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBranchMap, setSelectedBranchMap] = useState(branches[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Chauburji (Main Branch)',
    service: 'PPF (Paint Protection Film)',
    carModel: '',
    message: '',
  });

  // Check URL query parameters for pre-selected service
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      // Find matching service or set directly
      const match = workshopServices.find(s => s.name.toLowerCase().includes(serviceParam.toLowerCase()) || serviceParam.toLowerCase().includes(s.name.toLowerCase()));
      if (match) {
        setFormData(prev => ({ ...prev, service: match.name }));
      } else {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }
  }, [location.search]);

  // Scroll reveal setup
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.cp-reveal, .cp-reveal-left, .cp-reveal-right, .au-reveal, .au-footer-col, .au-footer-bottom'
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Mateen Auto! I would like to book an appointment.\n\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'N/A'}\nBranch: ${formData.branch}\nService: ${formData.service}\nCar Model: ${formData.carModel || 'N/A'}\nMessage: ${formData.message || 'Please share available slots.'}`
    );
    window.open(`https://wa.me/923234500012?text=${text}`, '_blank');
  };

  return (
    <div className="cp-page">

      {/* ── NAVBAR & TOPBAR ───────────────────── */}
      <Navbar />

      {/* ── HERO SECTION ─────────────────────── */}
      <section className="cp-hero-section">
        <div className="container">
          <div className="cp-section-label cp-reveal">Get In Touch</div>
          <h1 className="cp-main-heading cp-reveal cp-delay-1">
            Connect With <span className="blue">Mateen Auto</span>
          </h1>
          <p className="cp-sub-heading cp-reveal cp-delay-2">
            Schedule your appointment or visit our state-of-the-art facilities in Chauburji &amp; DHA Phase 1, Lahore. We're here to restore and protect your pride and joy.
          </p>
        </div>
      </section>

      {/* ── MAIN FORM & BRANCHES GRID ────────── */}
      <section className="cp-content-section">
        <div className="container">
          <div className="cp-main-grid">

            {/* LEFT: Appointment Form */}
            <div className="cp-form-card cp-reveal-left">
              <div className="cp-form-header">
                <h2 className="cp-form-title">Book an Appointment / Inquiry</h2>
                <p className="cp-form-desc">Fill out the form below or connect with us directly on WhatsApp.</p>
              </div>

              {formSubmitted && (
                <div className="cp-success-msg">
                  ✓ Thank you! Your inquiry has been sent. Our team will contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="cp-form-row">
                  <div className="cp-input-group">
                    <label>Your Full Name <span>*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ali Ahmed"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="cp-input"
                    />
                  </div>

                  <div className="cp-input-group">
                    <label>Phone / WhatsApp <span>*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0323 4500012"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="cp-input"
                    />
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-input-group">
                    <label>Select Preferred Branch <span>*</span></label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="cp-select"
                    >
                      <option value="Chauburji (Main Branch)">Mateen Auto — Chauburji (Main Branch)</option>
                      <option value="DHA Phase 1 Branch">Mateen Autos — DHA Phase 1 Branch (Link 2 Super Town)</option>
                    </select>
                  </div>

                  <div className="cp-input-group">
                    <label>Select Required Service <span>*</span></label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="cp-select"
                    >
                      {workshopServices.map((svc) => (
                        <option key={svc.id} value={svc.name}>
                          {svc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="cp-input-group">
                  <label>Car Make, Model &amp; Year</label>
                  <input
                    type="text"
                    name="carModel"
                    placeholder="e.g. Toyota Fortuner 2023, Civic RS, Audi A6"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    className="cp-input"
                  />
                </div>

                <div className="cp-input-group">
                  <label>Message / Details of Damage or Requirement</label>
                  <textarea
                    name="message"
                    placeholder="Describe your vehicle's requirement or ask any questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="cp-textarea"
                  ></textarea>
                </div>

                <div className="cp-form-btn-row">
                  <button type="submit" className="cp-submit-btn">
                    Submit Inquiry ↗
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="cp-whatsapp-btn"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff" style={{ flexShrink: 0 }}>
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.56 14.36C16.31 14.24 15.09 13.64 14.86 13.56C14.64 13.47 14.47 13.43 14.31 13.68C14.14 13.93 13.66 14.49 13.52 14.65C13.37 14.82 13.22 14.84 12.97 14.72C12.72 14.59 11.92 14.33 10.97 13.49C10.23 12.83 9.73 12.01 9.58 11.76C9.44 11.51 9.57 11.38 9.69 11.25C9.8 11.14 9.94 10.96 10.06 10.82C10.19 10.68 10.23 10.57 10.31 10.41C10.39 10.24 10.35 10.1 10.29 9.98C10.23 9.85 9.73 8.63 9.53 8.12C9.33 7.63 9.12 7.69 8.97 7.69C8.82 7.68 8.66 7.68 8.49 7.68C8.32 7.68 8.05 7.74 7.83 7.98C7.6 8.23 6.96 8.83 6.96 10.05C6.96 11.27 7.85 12.45 7.97 12.61C8.1 12.78 9.72 15.28 12.2 16.35C12.79 16.61 13.25 16.76 13.61 16.88C14.2 17.07 14.74 17.04 15.17 16.98C15.65 16.91 16.64 16.38 16.85 15.79C17.06 15.2 17.06 14.7 16.99 14.59C16.93 14.48 16.81 14.48 16.56 14.36Z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT: Branch Info Cards */}
            <div className="cp-info-col cp-reveal-right">

              {/* Branch 1 */}
              <div className="cp-branch-box">
                <span className="cp-branch-tag-pill">MAIN BRANCH</span>
                <h3 className="cp-branch-heading">Mateen Auto (Chauburji)</h3>
                <div className="cp-branch-sub">Main Body Repair &amp; Denting Workshop</div>

                <div className="cp-branch-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Near Chauburji Chowk, Multan Road / Bahawalpur Road, Lahore</span>
                </div>

                <div className="cp-branch-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.55 2 2 0 0 1 3.6 2.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                  <span>+92 323 4500012</span>
                </div>

                <div className="cp-branch-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
                </div>

                <div className="cp-branch-btn-group">
                  <a href="tel:+923234500012" className="cp-branch-btn primary">Call Workshop</a>
                  <a href="https://maps.google.com/?q=Mateen+Auto+Chauburji+Lahore" target="_blank" rel="noreferrer" className="cp-branch-btn secondary">Directions ↗</a>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="cp-branch-box">
                <span className="cp-branch-tag-pill">DHA PHASE 1 BRANCH</span>
                <h3 className="cp-branch-heading">Mateen Autos (DHA Phase 1 Branch)</h3>
                <div className="cp-branch-sub">Car Care, PPF &amp; Detailing Center</div>

                <div className="cp-branch-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Mateen Autos Dha branch, F9RG+Q73, Link 2 Super Town, Super Town, Lahore, Pakistan</span>
                </div>

                <div className="cp-branch-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.55 2 2 0 0 1 3.6 2.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                  <span>+92 310 4253333</span>
                </div>

                <div className="cp-branch-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
                </div>

                <div className="cp-branch-btn-group">
                  <a href="tel:+923104253333" className="cp-branch-btn primary">Call Workshop</a>
                  <a href="https://maps.google.com/?q=Mateen+Autos+Dha+branch,+F9RG%2BQ73,+Link+2+Super+Town,+Super+Town,+Lahore" target="_blank" rel="noreferrer" className="cp-branch-btn secondary">Directions ↗</a>
                </div>
              </div>

              {/* Direct Support Banner */}
              <div className="cp-support-banner">
                <div className="cp-support-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="cp-support-title">Need Immediate Assistance?</div>
                  <div className="cp-support-text">Call or WhatsApp our team anytime at +92 323 4500012 for quick estimates &amp; vehicle inspection.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MAP SECTION ──────────── */}
      <section className="cp-map-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }} className="cp-reveal">
            <div className="cp-section-label">Find Us In Lahore</div>
            <h2 className="cp-main-heading" style={{ fontSize: '2rem' }}>Interactive Branch Locator</h2>
          </div>

          <div className="cp-map-tabs cp-reveal cp-delay-1">
            {branches.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`cp-map-tab ${selectedBranchMap.id === b.id ? 'active' : ''}`}
                onClick={() => setSelectedBranchMap(b)}
              >
                📍 {b.name}
              </button>
            ))}
          </div>

          <div className="cp-map-box cp-reveal cp-delay-2">
            <div className="cp-map-bar">
              <div className="cp-map-bar-left">
                <div className="cp-map-pulse"></div>
                <div>
                  <div className="cp-map-title">{selectedBranchMap.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{selectedBranchMap.address}</div>
                </div>
              </div>
              <a
                href={selectedBranchMap.directLink}
                target="_blank"
                rel="noreferrer"
                className="cp-map-link"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <div className="cp-map-frame">
              <iframe
                title={`Map showing ${selectedBranchMap.name}`}
                key={selectedBranchMap.id}
                src={selectedBranchMap.mapEmbed}
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────── */}
      <section className="cp-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="cp-reveal">
            <div className="cp-section-label">Got Questions?</div>
            <h2 className="cp-main-heading" style={{ fontSize: '2rem' }}>Frequently Asked Questions</h2>
          </div>

          <div className="cp-faq-grid">
            {faqs.map((faq, i) => (
              <div className={`cp-faq-item cp-reveal cp-delay-${(i % 2) + 1}`} key={faq.q}>
                <div className="cp-faq-question">
                  <span>Q:</span> {faq.q}
                </div>
                <p className="cp-faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────── */}
      <Footer />

    </div>
  );
}
