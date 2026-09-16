import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SERVICES_DATA, getServiceById } from '../data/servicesData';
import '../styles/ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  const service = getServiceById(serviceId) || SERVICES_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${service.name} | Mateen Auto Lahore`;
  }, [serviceId, service.name]);

  const waLink = `https://wa.me/923234500012?text=${encodeURIComponent(
    `Hello Mateen Auto, I would like to inquire about ${service.name} for my car. Please provide pricing and appointment details.`
  )}`;

  const handleBook = () => {
    navigate(`/contact?service=${encodeURIComponent(service.name)}`);
    window.scrollTo(0, 0);
  };

  const relatedServices = (service.related || [])
    .map((id) => SERVICES_DATA.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <div className="sd-page">
      <Navbar />
      
      <main className="sd-main-wrapper">
        {/* ── 1. BREADCRUMBS & HERO BANNER ────────────────────── */}
        <section className="sd-hero">
          <div className="sd-hero-bg-media">
            <img src={service.img} alt="" className="sd-hero-bg-img" aria-hidden="true" />
            <div className="sd-hero-bg-overlay"></div>
            <div className="sd-hero-bg-vignette"></div>
          </div>

          <div className="sd-hero-glow sd-glow-1"></div>
          <div className="sd-hero-glow sd-glow-2"></div>

          <div className="sd-container">
            {/* Top Left Navigation: Back Button & Breadcrumbs */}
            <div className="sd-top-nav-row">
              <Link to="/services" className="sd-back-btn" title="Back to All Services">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Services</span>
              </Link>

              {/* Breadcrumbs */}
              <nav className="sd-breadcrumbs" aria-label="Breadcrumb">
                <Link to="/" className="sd-bc-link">Home</Link>
                <span className="sd-bc-sep">/</span>
                <Link to="/services" className="sd-bc-link">Services</Link>
                <span className="sd-bc-sep">/</span>
                <span className="sd-bc-current">{service.name}</span>
              </nav>
            </div>

            {/* Hero Titles */}
            <div className="sd-hero-badge-wrap">
              <span className="sd-hero-badge">
                <span className="sd-badge-dot"></span>
                {service.tag}
              </span>
              <span className="sd-hero-cat">{service.category}</span>
            </div>

            <h1 className="sd-hero-title">
              {service.name}
            </h1>

            <p className="sd-hero-tagline">
              {service.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="sd-metrics-bar">
              <div className="sd-metric-item">
                <span className="sd-metric-icon">⏱️</span>
                <div className="sd-metric-text">
                  <span className="sd-metric-label">Turnaround</span>
                  <strong className="sd-metric-val">{service.turnaround}</strong>
                </div>
              </div>

              <div className="sd-metric-item">
                <span className="sd-metric-icon">🛡️</span>
                <div className="sd-metric-text">
                  <span className="sd-metric-label">Guarantee</span>
                  <strong className="sd-metric-val">{service.warranty}</strong>
                </div>
              </div>

              <div className="sd-metric-item">
                <span className="sd-metric-icon">📍</span>
                <div className="sd-metric-text">
                  <span className="sd-metric-label">Available At</span>
                  <strong className="sd-metric-val">{service.branches}</strong>
                </div>
              </div>

              <div className="sd-metric-item">
                <span className="sd-metric-icon">⭐</span>
                <div className="sd-metric-text">
                  <span className="sd-metric-label">Client Trust</span>
                  <strong className="sd-metric-val">{service.rating}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. VISUAL SHOWCASE & DIRECT BOOKING ACTION ─────── */}
        <section className="sd-showcase-section">
          <div className="sd-container">
            <div className="sd-showcase-grid">
              
              {/* Left: Picture Showcase */}
              <div className="sd-media-col">
                <div className="sd-media-card">
                  <div className="sd-media-frame">
                    <img
                      src={service.img}
                      alt={`${service.name} by Mateen Auto`}
                      className="sd-media-img"
                    />
                    <div className="sd-media-overlay"></div>
                    <div className="sd-media-tag">
                      <span>{service.icon}</span>
                      <span>OFFICIAL MATEEN AUTO CRAFTSMANSHIP</span>
                    </div>
                  </div>

                  <div className="sd-media-features">
                    <div className="sd-mf-pill">
                      <span className="sd-mf-dot"></span>
                      <span>100% Factory Paint Safe</span>
                    </div>
                    <div className="sd-mf-pill">
                      <span className="sd-mf-dot"></span>
                      <span>Master Nadeem Supervision</span>
                    </div>
                    <div className="sd-mf-pill">
                      <span className="sd-mf-dot"></span>
                      <span>OEM-Grade Materials</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Booking & Pricing Card */}
              <div className="sd-booking-col">
                <div className="sd-booking-card">
                  <div className="sd-bcard-head">
                    <span className="sd-bcard-sub">ESTIMATE &amp; BOOKING</span>
                    <h3 className="sd-bcard-title">Book an Inspection for {service.name}</h3>
                    <p className="sd-bcard-lead">
                      {service.pricingNote}
                    </p>
                  </div>

                  <div className="sd-bcard-highlights">
                    <div className="sd-bh-item">
                      <span className="sd-bh-check">✓</span>
                      <span>Free damage analysis &amp; paint depth audit</span>
                    </div>
                    <div className="sd-bh-item">
                      <span className="sd-bh-check">✓</span>
                      <span>Same-day turnaround on selected minor repairs</span>
                    </div>
                    <div className="sd-bh-item">
                      <span className="sd-bh-check">✓</span>
                      <span>Air-conditioned VIP client waiting lounges</span>
                    </div>
                    <div className="sd-bh-item">
                      <span className="sd-bh-check">✓</span>
                      <span>Direct WhatsApp photo valuation within 15 minutes</span>
                    </div>
                  </div>

                  <div className="sd-bcard-actions">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="sd-btn-wa"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.635-.929-2.241-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509s1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.577-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.351z"/>
                        <path d="M12 2a9.93 9.93 0 0 0-8.52 4.88A9.97 9.97 0 0 0 2 12c0 1.74.45 3.39 1.24 4.84L2 22l5.31-1.21A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2a8.2 8.2 0 0 1-4.22-1.16l-.3-.18-3.14.72.84-3.06-.2-.32A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z"/>
                      </svg>
                      <span>Instant WhatsApp Valuation ↗</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleBook}
                      className="sd-btn-book"
                    >
                      <span>Book In-Person Inspection →</span>
                    </button>
                  </div>

                  <div className="sd-bcard-phones">
                    <span>Direct Hotline:</span>
                    <a href="tel:03234500012">0323 4500012</a>
                    <span>·</span>
                    <a href="tel:03004500012">0300 4500012</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. IN-DEPTH TECHNICAL OVERVIEW ──────────────────── */}
        <section className="sd-overview-section">
          <div className="sd-container">
            <div className="sd-section-header">
              <span className="sd-sec-badge">IN-DEPTH CRAFTSMANSHIP</span>
              <h2 className="sd-sec-title">
                What Sets Mateen Auto Apart in <span className="sd-grad-text">{service.name}</span>
              </h2>
            </div>

            <div className="sd-overview-body">
              {service.overview.split('\n\n').map((para, i) => (
                <p key={i} className="sd-overview-p">
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* 4 Why Choose Pillar Cards */}
            <div className="sd-why-grid">
              {service.whyChoose.map((item, idx) => (
                <div key={idx} className="sd-why-card">
                  <div className="sd-why-icon">{item.icon}</div>
                  <h4 className="sd-why-title">{item.title}</h4>
                  <p className="sd-why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. COMMON PROBLEMS & SCENARIOS SOLVED ──────────── */}
        <section className="sd-problems-section">
          <div className="sd-container">
            <div className="sd-problems-card">
              <div className="sd-problems-header">
                <span className="sd-sec-badge">SYMPTOMS &amp; SCENARIOS</span>
                <h3 className="sd-problems-title">
                  Does Your Vehicle Need <span className="sd-grad-text">{service.name}</span>?
                </h3>
                <p className="sd-problems-lead">
                  If your car exhibits any of the following common conditions, this service is specifically engineered to resolve them with factory-grade perfection.
                </p>
              </div>

              <div className="sd-problems-grid">
                {service.problemsSolved.map((prob, i) => (
                  <div key={i} className="sd-problem-item">
                    <div className="sd-prob-icon-box">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="sd-prob-text">{prob}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. STEP-BY-STEP WORKFLOW TIMELINE ───────────────── */}
        <section className="sd-process-section">
          <div className="sd-container">
            <div className="sd-section-header">
              <span className="sd-sec-badge">PRECISION WORKFLOW</span>
              <h2 className="sd-sec-title">
                Our 4-Stage Execution <span className="sd-grad-text">Protocol</span>
              </h2>
              <p className="sd-sec-sub">
                Every vehicle undergoes a disciplined, surgical multi-stage workflow to ensure zero flaws and permanent durability.
              </p>
            </div>

            <div className="sd-process-grid">
              {service.processStages.map((stage, idx) => (
                <div key={idx} className="sd-process-card">
                  <div className="sd-pcard-top">
                    <span className="sd-pcard-step">{stage.step}</span>
                    <span className="sd-pcard-stage-label">PHASE {stage.step}</span>
                  </div>
                  <h3 className="sd-pcard-title">{stage.title}</h3>
                  <p className="sd-pcard-desc">{stage.desc}</p>
                  <ul className="sd-pcard-points">
                    {stage.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span className="sd-point-dot">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FREQUENTLY ASKED QUESTIONS ACCORDION ─────────── */}
        <section className="sd-faq-section">
          <div className="sd-container">
            <div className="sd-section-header">
              <span className="sd-sec-badge">CLARITY &amp; TRANSPARENCY</span>
              <h2 className="sd-sec-title">
                Frequently Asked <span className="sd-grad-text">Questions</span>
              </h2>
              <p className="sd-sec-sub">
                Clear answers to the most common inquiries regarding {service.name}.
              </p>
            </div>

            <div className="sd-faq-accordion">
              {service.faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className={`sd-faq-item ${isOpen ? 'active' : ''}`}
                  >
                    <button
                      type="button"
                      className="sd-faq-btn"
                      onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                    >
                      <span className="sd-faq-q">{faq.q}</span>
                      <span className="sd-faq-chevron">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="sd-faq-ans-wrap">
                        <p className="sd-faq-ans">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. RELATED SERVICES SHOWCASE ───────────────────── */}
        {relatedServices.length > 0 && (
          <section className="sd-related-section">
            <div className="sd-container">
              <div className="sd-section-header">
                <span className="sd-sec-badge">EXPLORE MORE SERVICES</span>
                <h3 className="sd-sec-title">
                  Complementary Automotive <span className="sd-grad-text">Solutions</span>
                </h3>
              </div>

              <div className="sd-related-grid">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.id}`}
                    className="sd-rel-card"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <div className="sd-rel-media">
                      <img src={rel.img} alt={rel.name} className="sd-rel-img" />
                      <div className="sd-rel-overlay"></div>
                      <span className="sd-rel-tag">{rel.tag}</span>
                    </div>
                    <div className="sd-rel-content">
                      <h4 className="sd-rel-title">{rel.name}</h4>
                      <p className="sd-rel-desc">{rel.shortDesc}</p>
                      <span className="sd-rel-cta">
                        Explore Service Page ↗
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 8. BOTTOM BOOKING BANNER ───────────────────────── */}
        <section className="sd-bottom-cta">
          <div className="sd-container">
            <div className="sd-cta-box">
              <div className="sd-cta-content">
                <span className="sd-cta-badge">LIFETIME CRAFTSMANSHIP GUARANTEE</span>
                <h2 className="sd-cta-title">
                  Ready to Experience Master Craftsmanship for Your Vehicle?
                </h2>
                <p className="sd-cta-desc">
                  Visit Muhammad Nadeem and our certified master technicians at Chauburji or DHA Phase 1 Lahore. Free paint audits, honest estimates, and uncompromised precision.
                </p>
                <div className="sd-cta-actions">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="sd-btn-wa"
                  >
                    Chat on WhatsApp ↗
                  </a>
                  <button
                    type="button"
                    onClick={handleBook}
                    className="sd-btn-book"
                  >
                    Book In-Person Inspection →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
