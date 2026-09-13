import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const stats = [
  { number: '500+', label: 'Clients Served' },
  { number: '98%', label: 'Success Rate' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Awards Won' },
];

export default function Hero() {
  const barsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bars = barsRef.current?.querySelectorAll('.hero-bar');
          bars?.forEach((bar, i) => {
            bar.style.animationDelay = `${i * 0.1}s`;
          });
        }
      },
      { threshold: 0.5 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Award-Winning PR Agency
            </div>

            <h1 className="hero-title">
              Craft Your{' '}
              <span className="hero-title-highlight">Powerful</span>
              <br />
              <span className="hero-title-outline">Narrative</span>
            </h1>

            <p className="hero-description">
              We shape perceptions, build reputations, and elevate brands to unprecedented heights.
              Your story, told brilliantly — across every platform, to every audience.
            </p>

            <div className="hero-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                id="hero-cta-btn"
              >
                Start Your Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#portfolio"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                id="hero-portfolio-btn"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-number">{stat.number}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-card-header">
                <div className="hero-card-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="hero-card-label">Brand Growth Analytics</span>
              </div>

              {/* Chart */}
              <div className="hero-chart" ref={barsRef}>
                {[...Array(6)].map((_, i) => (
                  <div className="hero-bar" key={i}>
                    <div className="hero-bar-fill"></div>
                  </div>
                ))}
              </div>
              <div className="hero-chart-base"></div>
              <div className="hero-chart-label">
                Brand Visibility Growth — Q1 to Q6 2024
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="hero-floating-card hero-float-1">
              <div className="hero-floating-card-icon">🏆</div>
              <div className="hero-floating-card-text">
                <span className="hero-floating-card-title">Campaign Success</span>
                <span className="hero-floating-card-sub">+340% Media Reach</span>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="hero-floating-card hero-float-2">
              <div className="hero-floating-card-icon">📈</div>
              <div className="hero-floating-card-text">
                <span className="hero-floating-card-title">Brand Sentiment</span>
                <span className="hero-floating-card-sub">98% Positive Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" onClick={scrollToAbout}>
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
