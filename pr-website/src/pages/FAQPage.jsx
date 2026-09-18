import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';
import '../styles/FAQPage.css';

const FAQ_ITEMS = [
  {
    id: 1,
    category: 'pricing',
    categoryName: 'Pricing & Quality',
    question: "Why are Mateen Auto's prices sometimes higher than other workshops?",
    answer:
      'At Mateen Auto, we focus on A1-class workmanship, premium-quality materials, and long-lasting results. We use high-quality imported materials and professional repair techniques rather than compromising on quality simply to offer the lowest price. Our work also comes with a service/workmanship guarantee, giving customers greater confidence in the final result.',
    highlight: 'A1-class imported materials & workmanship guarantee rather than cutting corners.'
  },
  {
    id: 2,
    category: 'branches',
    categoryName: 'Services & Branches',
    question: 'Do both Mateen Auto branches provide the same quality of work?',
    answer:
      'Yes. Whether you visit our Defence Branch or Chauburji Branch, we maintain the same professional standards, repair techniques, material quality, and finishing. Our goal is to provide a consistent Mateen Auto standard at both locations.',
    highlight: '100% identical master standard at both Chauburji & DHA Phase 1 studios.'
  },
  {
    id: 3,
    category: 'services',
    categoryName: 'Services & Bodywork',
    question: 'What services does Mateen Auto specialize in?',
    answer:
      'We specialize in car denting, painting, scratch filling, accident repair, polishing, PPF, and complete body restoration. Our focus is on restoring your vehicle with proper workmanship, quality materials, and attention to detail.',
    highlight: 'Full automotive exterior restoration & paint protection under one roof.'
  },
  {
    id: 4,
    category: 'services',
    categoryName: 'Accident Repair',
    question: 'Does Mateen Auto handle major accident repairs?',
    answer:
      'Yes. We handle everything from minor body damage to major accident repairs, including dent repair, panel work, paintwork, body alignment, and complete exterior restoration.',
    highlight: 'Minor touch-ups to major structural chassis alignment & panel rebuilding.'
  },
  {
    id: 5,
    category: 'protection',
    categoryName: 'PPF & Protection',
    question: 'Do you provide PPF and other vehicle protection services?',
    answer:
      'Yes. We offer Paint Protection Film (PPF) and other vehicle protection solutions designed to help protect your car’s paint from scratches, stone chips, and everyday wear.',
    highlight: 'Self-healing TPU PPF & 9H Ceramic Matrix shields for Lahore roads.'
  },
  {
    id: 6,
    category: 'pricing',
    categoryName: 'Pricing & Quality',
    question: 'Why should I choose Mateen Auto instead of a regular workshop?',
    answer:
      'At Mateen Auto, we focus on more than just making a car look good temporarily. We focus on proper repair, quality materials, professional finishing, and long-lasting results. Every vehicle receives careful attention to detail because our workmanship represents the Mateen Auto name.',
    highlight: 'Decades of master craftsmanship and long-lasting showroom durability.'
  },
  {
    id: 7,
    category: 'scratch',
    categoryName: 'Scratch Repair',
    question: 'Do you repair scratches without repainting the entire panel?',
    answer:
      'It depends on the depth and severity of the scratch. Our technicians inspect the damage and determine whether scratch filling, polishing, spot repair, or complete panel repainting is the most suitable solution.',
    highlight: 'Transparent evaluation preserving 100% original factory paint wherever possible.'
  },
  {
    id: 8,
    category: 'scratch',
    categoryName: 'Signature Scratch Filling',
    question: "Why is Mateen Auto's Scratch Filling Different?",
    answer:
      'Our advanced Scratch Filling process is designed to achieve a smooth, seamless, factory-like finish. We use professional techniques, quality materials, and specialized equipment to carefully fill and refine scratches.\n\nWhen properly completed, the repair is designed to blend naturally with the surrounding surface and can be difficult to distinguish through common visual or UV-assisted inspection.',
    highlight: 'Micro-precision resin infusion indistinguishable under visual & UV inspection.'
  },
  {
    id: 9,
    category: 'pricing',
    categoryName: 'Company Excellence',
    question: 'What makes Mateen Auto different?',
    answer:
      'Quality, workmanship, materials, and consistency. Our aim is to provide A1-class automotive repair work with professional finishing and reliable results across our services and branches.',
    highlight: 'Quality, workmanship, materials, and consistency across 37+ years.'
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="faq-page-root">
      <Navbar />

      {/* ── HERO BANNER ───────────────────────── */}
      <section className="faq-hero-section">
        <div className="faq-hero-ambient"></div>
        <div className="container faq-hero-container">
          <div className="faq-badge-top">
            <span className="faq-badge-dot"></span>
            MATEEN AUTO HELP CENTER &amp; CLIENT ADVISORY
          </div>
          <h1 className="faq-hero-title">
            Frequently Asked <span>Questions</span>
          </h1>
          <p className="faq-hero-sub">
            Everything you need to know about our standards, branch locations, signature scratch filling, pricing transparency, and vehicle protection.
          </p>

          {/* Search Box */}
          <div className="faq-search-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search questions (e.g. Scratch Filling, Branches, Pricing, PPF)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="faq-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="faq-category-pills">
            <button
              type="button"
              className={`faq-cat-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Questions ({FAQ_ITEMS.length})
            </button>
            <button
              type="button"
              className={`faq-cat-btn ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              💎 Quality &amp; Pricing
            </button>
            <button
              type="button"
              className={`faq-cat-btn ${activeTab === 'scratch' ? 'active' : ''}`}
              onClick={() => setActiveTab('scratch')}
            >
              ✨ Scratch Filling
            </button>
            <button
              type="button"
              className={`faq-cat-btn ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              🚗 Services &amp; Repairs
            </button>
            <button
              type="button"
              className={`faq-cat-btn ${activeTab === 'branches' ? 'active' : ''}`}
              onClick={() => setActiveTab('branches')}
            >
              🏢 Branches &amp; Standards
            </button>
          </div>
        </div>
      </section>

      {/* ── ACCORDION SECTION ─────────────────── */}
      <section className="faq-accordion-section">
        <div className="container faq-accordion-container">
          {filteredFaqs.length === 0 ? (
            <div className="faq-empty-state">
              <div className="faq-empty-icon">🔍</div>
              <h3>No matching questions found</h3>
              <p>Try searching for another keyword or reset your filters.</p>
              <button
                type="button"
                className="faq-cat-btn active"
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="faq-accordion-list">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                const itemNumber = String(faq.id).padStart(2, '0');
                return (
                  <div
                    key={faq.id}
                    className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-q-left">
                        <span className="faq-q-num">{itemNumber}</span>
                        <div className="faq-q-content">
                          <span className="faq-q-tag">{faq.categoryName}</span>
                          <h3 className="faq-q-title">{faq.question}</h3>
                        </div>
                      </div>
                      <span className="faq-q-icon">{isOpen ? '−' : '+'}</span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-pane">
                        <div className="faq-answer-inner">
                          <p className="faq-answer-text">{faq.answer}</p>
                          <div className="faq-highlight-pill">
                            <span className="faq-hl-dot"></span>
                            <strong>Key Takeaway:</strong> {faq.highlight}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── BRAND MOTTO BANNER ─────────────── */}
          <div className="faq-motto-banner">
            <div className="faq-motto-logo-tag">MATEEN AUTO SIGNATURE PROMISE</div>
            <h2 className="faq-motto-heading">
              Professional Scratch Filling. Seamless Finish. Quality You Can Trust.
            </h2>
            <p className="faq-motto-sub">
              Visit our Chauburji or DHA Phase 1 Lahore studios, or send your vehicle photos directly on WhatsApp for an honest, transparent estimate.
            </p>
            <div className="faq-motto-btns">
              <a
                href="https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20have%20a%20question%20regarding%20car%20repair."
                target="_blank"
                rel="noopener noreferrer"
                className="faq-motto-wa-btn"
              >
                💬 Ask on WhatsApp
              </a>
              <a href="/contact" className="faq-motto-contact-btn">
                Locate Workshop / Book Inspection →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
