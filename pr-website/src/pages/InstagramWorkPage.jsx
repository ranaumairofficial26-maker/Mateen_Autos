import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import instaHeroBg from '../assets/insta-hero-bg.jpg';
import '../styles/InstagramWorkPage.css';

const INSTAGRAM_URL = 'https://www.instagram.com/mateen.auto1?stkn=emkwZDd1OHpna3Ew';

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

      <Footer />
    </div>
  );
}



