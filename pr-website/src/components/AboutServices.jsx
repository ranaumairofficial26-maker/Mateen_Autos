import { useRef, useEffect, useState } from 'react';
import '../styles/Sections.css';

// Counter animation hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && countRef.current) {
          let start = 0;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, countRef];
}

const values = [
  { icon: '🎯', title: 'Strategic Approach', desc: 'Data-driven PR strategies tailored to your unique goals and target audience.' },
  { icon: '🌐', title: 'Global Network', desc: 'Connected to 500+ media outlets and journalists across 40+ countries.' },
  { icon: '⚡', title: 'Rapid Response', desc: '24/7 crisis management team ready to protect your reputation instantly.' },
  { icon: '📊', title: 'Measurable Results', desc: 'Transparent reporting with clear KPIs and ROI metrics every month.' },
];

const services = [
  {
    icon: '📡',
    title: 'Media Relations',
    desc: 'Building powerful connections with top-tier journalists, editors, and media outlets to get your story told.',
    features: ['Press Release Distribution', 'Media Pitching', 'Journalist Relationships', 'Editorial Coverage'],
  },
  {
    icon: '🏢',
    title: 'Corporate Communications',
    desc: 'Crafting and managing internal/external communications that strengthen your corporate identity.',
    features: ['Annual Reports', 'Stakeholder Management', 'Internal Communications', 'Executive Profiling'],
  },
  {
    icon: '🚨',
    title: 'Crisis Management',
    desc: 'Protecting your brand when it matters most with swift, strategic crisis response and reputation repair.',
    features: ['24/7 Response Team', 'Crisis Strategy Planning', 'Media Monitoring', 'Reputation Recovery'],
  },
  {
    icon: '📱',
    title: 'Digital PR',
    desc: 'Amplifying your brand presence across digital channels with targeted online PR campaigns.',
    features: ['Social Media Strategy', 'Influencer Relations', 'Online Reputation', 'SEO PR Content'],
  },
  {
    icon: '🎤',
    title: 'Event & Launch PR',
    desc: 'Creating buzz-worthy product launches and events that generate massive media coverage.',
    features: ['Launch Strategy', 'Press Events', 'Media Invites', 'Post-Event Coverage'],
  },
  {
    icon: '👑',
    title: 'Personal Branding',
    desc: 'Positioning executives and celebrities as industry thought leaders and media personalities.',
    features: ['Executive Visibility', 'Speaking Engagements', 'Thought Leadership', 'Brand Identity'],
  },
];

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Visual */}
          <div className="about-visual">
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80&auto=format"
                alt="Our PR team collaborating"
                className="about-image-main"
              />
              <div className="about-image-overlay"></div>
            </div>
            <div className="about-badge">
              <div className="about-badge-number">15+</div>
              <div className="about-badge-text">Years of Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              We Tell Stories That<br />
              <em>Move the World</em>
            </h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">
              Founded in 2009, Prestige PR has been at the forefront of shaping brand narratives.
              We blend creative storytelling with strategic insight to deliver campaigns that resonate,
              inspire, and produce lasting impact across every industry.
            </p>

            <div className="about-values">
              {values.map((v) => (
                <div className="about-value-card" key={v.title}>
                  <span className="about-value-icon">{v.icon}</span>
                  <div className="about-value-title">{v.title}</div>
                  <div className="about-value-desc">{v.desc}</div>
                </div>
              ))}
            </div>

            <div className="about-team-teaser">
              <div className="about-team-avatars">
                {['S', 'A', 'M', 'L', 'K'].map((letter) => (
                  <div className="about-team-avatar" key={letter}>{letter}</div>
                ))}
              </div>
              <div className="about-team-text">
                <span className="about-team-count">80+ Expert Team Members</span>
                <span className="about-team-sub">Strategists · Writers · Creatives · Analysts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-label">Our Services</div>
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            Comprehensive PR solutions designed to elevate your brand,
            manage your reputation, and drive measurable business outcomes.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={service.title} id={`service-card-${index + 1}`}>
              <div className="service-card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li className="service-feature-item" key={f}>{f}</li>
                ))}
              </ul>
              <span className="service-link">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
