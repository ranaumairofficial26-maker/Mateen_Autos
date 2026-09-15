import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import instaHeroBg from '../assets/insta-hero-bg.jpg';
import '../styles/InstagramWorkPage.css';

const INSTAGRAM_URL = 'https://www.instagram.com/mateenautoofficial/';

export default function InstagramWorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="iw-page">
      <Navbar />

      {/* ── CINEMATIC INSTAGRAM SHOWCASE HERO ──────── */}
      <section className="iw-cinematic-hero">
        <div className="iw-cinematic-container">

          {/* Instagram Glyph Camera Icon */}
          <div className="iw-insta-icon-wrap" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>

          {/* Bold Header */}
          <h1 className="iw-cinematic-title">
            INSTAGRAM WORK &amp;<br />
            TRANSFORMATIONS
          </h1>

          {/* Subtitle / Description */}
          <p className="iw-cinematic-desc">
            Watch daily video walkarounds, swirl removal reels, ceramic and graphene hydrophobic
            water bead clips, and client handovers on <strong>@mateen.auto1</strong>.
          </p>

          {/* Dual Action Buttons */}
          <div className="iw-cinematic-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="iw-btn-hero-insta"
            >
              <span className="iw-btn-hero-icon-box iw-icon-insta-bg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <div className="iw-btn-hero-text">
                <span className="iw-btn-hero-sub">OFFICIAL REELS &amp; STORIES</span>
                <span className="iw-btn-hero-main">Follow @mateen.auto1 ↗</span>
              </div>
            </a>

            <a
              href="/contact"
              className="iw-btn-hero-book"
            >
              <span className="iw-btn-hero-icon-box iw-icon-book-bg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <div className="iw-btn-hero-text">
                <span className="iw-btn-hero-sub">CHAUBURJI &amp; DHA PHASE 5</span>
                <span className="iw-btn-hero-main">Book Free Inspection →</span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* ── FEATURED REELS SECTION ──────────────── */}
      <section className="iw-reels-section">
        <div className="iw-reels-container">

          {/* Section Header */}
          <div className="iw-reels-header">
            <div className="iw-reels-label">
              <span className="iw-label-dot"></span>
              <span className="iw-label-text">Featured Posts</span>
              <span className="iw-label-dot"></span>
            </div>
            <h2 className="iw-reels-title">
              Our Work —{' '}
              <span className="iw-title-grad">Direct from Instagram</span>
            </h2>
            <p className="iw-reels-sub">
              Real results, real clients. Watch our latest reels and transformations — embedded live from our Instagram.
            </p>
          </div>

          {/* 3 Embed Cards */}
          <div className="iw-reels-grid">

            {/* Card 1 — Rehan Tariq */}
            <div className="iw-reel-card">
              <div className="iw-reel-embed-wrap">
                <iframe
                  src="https://www.instagram.com/p/DaVS8scPXcN/embed/"
                  className="iw-reel-iframe"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  title="Instagram Reel — Rehan Tariq"
                />
              </div>
              <div className="iw-reel-footer">
                <div className="iw-reel-num">01</div>
                <div className="iw-reel-info">
                  <span className="iw-reel-meta-type">🎬 Reel</span>
                  <span className="iw-reel-meta-name">Rehan Tariq</span>
                </div>
                <a href="https://www.instagram.com/p/DaVS8scPXcN/" target="_blank" rel="noreferrer" className="iw-reel-link">
                  Open Post ↗
                </a>
              </div>
            </div>

            {/* Card 2 — Rehan Tariq */}
            <div className="iw-reel-card">
              <div className="iw-reel-embed-wrap">
                <iframe
                  src="https://www.instagram.com/p/DaQM31LPUAY/embed/"
                  className="iw-reel-iframe"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  title="Instagram Reel — Rehan Tariq 2"
                />
              </div>
              <div className="iw-reel-footer">
                <div className="iw-reel-num">02</div>
                <div className="iw-reel-info">
                  <span className="iw-reel-meta-type">🎬 Reel</span>
                  <span className="iw-reel-meta-name">Rehan Tariq</span>
                </div>
                <a href="https://www.instagram.com/p/DaQM31LPUAY/" target="_blank" rel="noreferrer" className="iw-reel-link">
                  Open Post ↗
                </a>
              </div>
            </div>

            {/* Card 3 — Before & After */}
            <div className="iw-reel-card iw-reel-card--special">
              <div className="iw-reel-embed-wrap">
                <iframe
                  src="https://www.instagram.com/p/DZ9o1YWP7_f/embed/"
                  className="iw-reel-iframe"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  title="Instagram Before & After"
                />
              </div>
              <div className="iw-reel-footer iw-reel-footer--special">
                <div className="iw-reel-num iw-reel-num--purple">03</div>
                <div className="iw-reel-info">
                  <span className="iw-reel-meta-type">✨ Transformation</span>
                  <span className="iw-reel-meta-name iw-meta-purple">Before &amp; After</span>
                </div>
                <a href="https://www.instagram.com/p/DZ9o1YWP7_f/" target="_blank" rel="noreferrer" className="iw-reel-link iw-reel-link--purple">
                  Open Post ↗
                </a>
              </div>
            </div>

          </div>

          {/* Follow CTA */}
          <div className="iw-reels-cta">
            <div className="iw-reels-cta-text">Want to see more of our work?</div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="iw-reels-follow-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Follow @mateenautoofficial on Instagram
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}




