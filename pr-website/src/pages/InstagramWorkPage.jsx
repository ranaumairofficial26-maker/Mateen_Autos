import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import instaHeroBg from '../assets/insta-hero-bg.jpg';
import logoImg from '../assets/logo.png';
import imgBmwClean from '../assets/bmw_after_seamless.jpg';
import imgHeroMercedes from '../assets/hero_studio_mercedes.jpg';
import imgJourneyCar from '../assets/journey-car.jpg';
import imgAccident from '../assets/svc_accident.jpg';
import imgPPF from '../assets/svc_ppf.jpg';
import imgDetailing from '../assets/svc_detailing.jpg';
import '../styles/InstagramWorkPage.css';

const INSTAGRAM_URL = 'https://www.instagram.com/mateenautoofficial/';
const FACEBOOK_URL = 'https://www.facebook.com/TheMateenAuto';

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
            SOCIAL WORK &amp;<br />
            TRANSFORMATIONS
          </h1>

          {/* Subtitle / Description */}
          <p className="iw-cinematic-desc">
            Watch daily video walkarounds, swirl removal reels, ceramic coating clips, and community updates on <strong>@mateen.auto1</strong> &amp; <strong>@TheMateenAuto</strong>.
          </p>

          {/* Action Buttons: Instagram, Facebook & Booking */}
          <div className="iw-cinematic-actions">
            {/* Instagram Button */}
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

            {/* Facebook Button */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="iw-btn-hero-fb"
            >
              <span className="iw-btn-hero-icon-box iw-icon-fb-bg">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </span>
              <div className="iw-btn-hero-text">
                <span className="iw-btn-hero-sub">OFFICIAL COMMUNITY</span>
                <span className="iw-btn-hero-main">Follow @TheMateenAuto ↗</span>
              </div>
            </a>

            {/* Book Inspection */}
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
                <span className="iw-btn-hero-sub">CHAUBURJI &amp; DHA PHASE 1</span>
                <span className="iw-btn-hero-main">Book Free Inspection →</span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* ── 1. INSTAGRAM EXPERIENCE MODULES ──────────────── */}
      <section className="iw-modules-section iw-ig-section">
        <div className="iw-modules-container">

          {/* Section Header */}
          <div className="iw-modules-header">
            <div className="iw-mod-badge iw-mod-badge--ig">
              <span className="iw-badge-dot iw-badge-dot--ig"></span>
              <span className="iw-badge-text">INSTAGRAM SHOWCASE HUB</span>
            </div>
            <h2 className="iw-modules-title">
              Visual Craftsmanship —{' '}
              <span className="iw-title-grad">Direct from Instagram</span>
            </h2>
            <p className="iw-modules-sub">
              Explore daily transformation reels, behind-the-scenes master craftsmanship, and celebrity client handovers on <strong>@mateenautoofficial</strong>.
            </p>
          </div>

          {/* 3 Instagram Modules */}
          <div className="iw-modules-grid">

            {/* IG Module 1: 4K Before & After Reels */}
            <div className="iw-module-card iw-card--magenta">
              <div className="iw-card-glow iw-glow--magenta"></div>
              <div className="iw-card-media">
                <img src={imgBmwClean} alt="4K Transformation Reels" className="iw-card-img" />
                <div className="iw-card-overlay-gradient"></div>
                <div className="iw-card-tag iw-tag--magenta">
                  <span className="iw-live-pulse"></span>
                  4K CINEMATIC REELS
                </div>
                <div className="iw-card-stat-pill">150K+ Views · Daily Reels</div>
              </div>
              <div className="iw-card-content">
                <div className="iw-card-meta-top">
                  <span className="iw-card-num iw-num--magenta">01</span>
                  <span className="iw-card-category iw-cat--magenta">PAINT RESTORATION</span>
                </div>
                <h3 className="iw-card-title">
                  Paint Correction &amp; Ceramic Walkarounds
                </h3>
                <ul className="iw-card-features">
                  <li><span className="iw-f-bullet iw-bullet--magenta">⚡</span> Real-time swirl &amp; oxidation removal</li>
                  <li><span className="iw-f-bullet iw-bullet--magenta">💧</span> 9H Graphene hydrophobic water-beading</li>
                  <li><span className="iw-f-bullet iw-bullet--magenta">💎</span> Deep wet-look mirror reflection handovers</li>
                </ul>
                <div className="iw-card-action">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="iw-mod-btn iw-btn--magenta">
                    <span>Watch Reels on Instagram</span>
                    <span className="iw-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* IG Module 2: Behind-The-Scenes Stories */}
            <div className="iw-module-card iw-card--rose">
              <div className="iw-card-glow iw-glow--rose"></div>
              <div className="iw-card-media">
                <img src={imgHeroMercedes} alt="Workshop Craftsmanship Stories" className="iw-card-img" />
                <div className="iw-card-overlay-gradient"></div>
                <div className="iw-card-tag iw-tag--rose">
                  <span className="iw-live-pulse iw-pulse--rose"></span>
                  LIVE FROM WORKSHOP
                </div>
                <div className="iw-card-stat-pill">Daily Stories · Lahore</div>
              </div>
              <div className="iw-card-content">
                <div className="iw-card-meta-top">
                  <span className="iw-card-num iw-num--rose">02</span>
                  <span className="iw-card-category iw-cat--rose">WORKSHOP PROCESS</span>
                </div>
                <h3 className="iw-card-title">
                  Raw Craftsmanship &amp; Process Transparency
                </h3>
                <ul className="iw-card-features">
                  <li><span className="iw-f-bullet iw-bullet--rose">🔨</span> Master paintless dry denting (PDR) in action</li>
                  <li><span className="iw-f-bullet iw-bullet--rose">🎨</span> 2K oven-baked spray booth timelapses</li>
                  <li><span className="iw-f-bullet iw-bullet--rose">🛡️</span> Precision edge-wrapped PPF installation</li>
                </ul>
                <div className="iw-card-action">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="iw-mod-btn iw-btn--rose">
                    <span>View Live Stories</span>
                    <span className="iw-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* IG Module 3: VIP Handovers & Feedback */}
            <div className="iw-module-card iw-card--purple">
              <div className="iw-card-glow iw-glow--purple"></div>
              <div className="iw-card-media">
                <img src={imgJourneyCar} alt="VIP Client Handovers" className="iw-card-img" />
                <div className="iw-card-overlay-gradient"></div>
                <div className="iw-card-tag iw-tag--purple">
                  <span className="iw-live-pulse iw-pulse--purple"></span>
                  100% SATISFACTION
                </div>
                <div className="iw-card-stat-pill">10,000+ Happy Clients</div>
              </div>
              <div className="iw-card-content">
                <div className="iw-card-meta-top">
                  <span className="iw-card-num iw-num--purple">03</span>
                  <span className="iw-card-category iw-cat--purple">VIP CLIENTS</span>
                </div>
                <h3 className="iw-card-title">
                  Notable Client Handovers &amp; Testimonials
                </h3>
                <ul className="iw-card-features">
                  <li><span className="iw-f-bullet iw-bullet--purple">🤝</span> Notable clients &amp; influencer handovers</li>
                  <li><span className="iw-f-bullet iw-bullet--purple">🏆</span> 37+ years trusted master reputation</li>
                  <li><span className="iw-f-bullet iw-bullet--purple">⭐</span> 5-star verified customer satisfaction</li>
                </ul>
                <div className="iw-card-action">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="iw-mod-btn iw-btn--purple">
                    <span>Explore Client Highlights</span>
                    <span className="iw-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Instagram Follow Bar */}
          <div className="iw-channel-bar iw-bar--ig">
            <div className="iw-channel-left">
              <div className="iw-channel-icon-box iw-cicon--ig">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="iw-channel-text">
                <strong>Follow @mateenautoofficial on Instagram</strong>
                <span>Never miss a single transformation, reel or live update.</span>
              </div>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="iw-channel-cta-btn iw-cta--ig">
              Follow on Instagram ↗
            </a>
          </div>

        </div>
      </section>

      {/* ── 2. FACEBOOK COMMUNITY HUB MODULES ────────────── */}
      <section className="iw-modules-section iw-fb-section">
        <div className="iw-modules-container">

          {/* Section Header */}
          <div className="iw-modules-header">
            <div className="iw-mod-badge iw-mod-badge--fb">
              <span className="iw-badge-dot iw-badge-dot--fb"></span>
              <span className="iw-badge-text">OFFICIAL FACEBOOK COMMUNITY</span>
            </div>
            <h2 className="iw-modules-title">
              Community Hub —{' '}
              <span className="iw-fb-title-grad">Direct from Facebook</span>
            </h2>
            <p className="iw-modules-sub">
              Detailed project albums, verified customer reviews, and direct consultation for car owners across Lahore &amp; beyond on <strong>@TheMateenAuto</strong>.
            </p>
          </div>

          {/* 3 Facebook Modules */}
          <div className="iw-modules-grid">

            {/* FB Module 1: Transformation Albums */}
            <div className="iw-module-card iw-card--blue">
              <div className="iw-card-glow iw-glow--blue"></div>
              <div className="iw-card-media">
                <img src={imgAccident} alt="Facebook Project Albums" className="iw-card-img" />
                <div className="iw-card-overlay-gradient"></div>
                <div className="iw-card-tag iw-tag--blue">
                  <span className="iw-live-pulse iw-pulse--blue"></span>
                  DETAILED ALBUMS
                </div>
                <div className="iw-card-stat-pill">500+ Project Albums</div>
              </div>
              <div className="iw-card-content">
                <div className="iw-card-meta-top">
                  <span className="iw-card-num iw-num--blue">01</span>
                  <span className="iw-card-category iw-cat--blue">CASE STUDIES</span>
                </div>
                <h3 className="iw-card-title">
                  Full Vehicle Rebuild &amp; Restoration Albums
                </h3>
                <ul className="iw-card-features">
                  <li><span className="iw-f-bullet iw-bullet--blue">📋</span> Multi-angle intake &amp; step-by-step progress</li>
                  <li><span className="iw-f-bullet iw-bullet--blue">🚗</span> Complete collision body &amp; frame alignment</li>
                  <li><span className="iw-f-bullet iw-bullet--blue">🔍</span> Ultra-macro paint finish &amp; texture shots</li>
                </ul>
                <div className="iw-card-action">
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="iw-mod-btn iw-btn--blue">
                    <span>Browse Project Albums</span>
                    <span className="iw-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FB Module 2: Verified Client Reviews */}
            <div className="iw-module-card iw-card--cyan">
              <div className="iw-card-glow iw-glow--cyan"></div>
              <div className="iw-card-media">
                <img src={imgPPF} alt="Customer Recommendations" className="iw-card-img" />
                <div className="iw-card-overlay-gradient"></div>
                <div className="iw-card-tag iw-tag--cyan">
                  <span className="iw-live-pulse iw-pulse--cyan"></span>
                  RECOMMENDED 4.9★
                </div>
                <div className="iw-card-stat-pill">1,000+ Recommendations</div>
              </div>
              <div className="iw-card-content">
                <div className="iw-card-meta-top">
                  <span className="iw-card-num iw-num--cyan">02</span>
                  <span className="iw-card-category iw-cat--cyan">VERIFIED REVIEWS</span>
                </div>
                <h3 className="iw-card-title">
                  Real Client Recommendations &amp; Feedback
                </h3>
                <ul className="iw-card-features">
                  <li><span className="iw-f-bullet iw-bullet--cyan">💬</span> Honest reviews from Chauburji &amp; DHA branches</li>
                  <li><span className="iw-f-bullet iw-bullet--cyan">🛡️</span> Long-term durability feedback on PPF &amp; coatings</li>
                  <li><span className="iw-f-bullet iw-bullet--cyan">🥇</span> Ranked #1 for honest craftsmanship in Lahore</li>
                </ul>
                <div className="iw-card-action">
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="iw-mod-btn iw-btn--cyan">
                    <span>Read Verified Reviews</span>
                    <span className="iw-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FB Module 3: Direct Consultation Hub */}
            <div className="iw-module-card iw-card--azure">
              <div className="iw-card-glow iw-glow--azure"></div>
              <div className="iw-card-media">
                <img src={imgDetailing} alt="Direct Messenger Estimates" className="iw-card-img" />
                <div className="iw-card-overlay-gradient"></div>
                <div className="iw-card-tag iw-tag--azure">
                  <span className="iw-live-pulse iw-pulse--azure"></span>
                  INSTANT ESTIMATES
                </div>
                <div className="iw-card-stat-pill">Fast Messenger Response</div>
              </div>
              <div className="iw-card-content">
                <div className="iw-card-meta-top">
                  <span className="iw-card-num iw-num--azure">03</span>
                  <span className="iw-card-category iw-cat--azure">MESSENGER HUB</span>
                </div>
                <h3 className="iw-card-title">
                  Online Estimates &amp; Direct Consultation
                </h3>
                <ul className="iw-card-features">
                  <li><span className="iw-f-bullet iw-bullet--azure">⚡</span> Send your car damage photos for free valuation</li>
                  <li><span className="iw-f-bullet iw-bullet--azure">📅</span> Priority inspection booking at our workshops</li>
                  <li><span className="iw-f-bullet iw-bullet--azure">🏷️</span> Exclusive discounts for Facebook followers</li>
                </ul>
                <div className="iw-card-action">
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="iw-mod-btn iw-btn--azure">
                    <span>Chat on Messenger</span>
                    <span className="iw-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Facebook Follow Bar */}
          <div className="iw-channel-bar iw-bar--fb">
            <div className="iw-channel-left">
              <div className="iw-channel-icon-box iw-cicon--fb">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="iw-channel-text">
                <strong>Join 10,000+ Followers on Facebook @TheMateenAuto</strong>
                <span>Direct damage valuation, customer reviews, photo albums &amp; community discussions.</span>
              </div>
            </div>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="iw-channel-cta-btn iw-cta--fb">
              Follow on Facebook ↗
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}




