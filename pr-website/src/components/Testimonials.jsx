import '../styles/Sections2.css';

const testimonials = [
  {
    id: 1,
    text: 'Prestige PR transformed our brand from a regional player to a globally recognized name in just 18 months. Their strategic approach and media connections are unmatched.',
    author: 'James Harrington',
    role: 'CEO, TechVision Global',
    initial: 'J',
    stars: 5,
    featured: true,
  },
  {
    id: 2,
    text: 'When we faced a crisis that could have destroyed us, Prestige PR\'s team was there within hours. They not only contained the damage but turned the narrative around completely.',
    author: 'Elena Rodriguez',
    role: 'VP Communications, FinEdge Corp',
    initial: 'E',
    stars: 5,
    featured: false,
  },
  {
    id: 3,
    text: 'Our product launch generated 3x the media coverage we expected. Prestige PR\'s relationships with top-tier journalists are simply extraordinary.',
    author: 'Michael Park',
    role: 'Founder, Luxe Cosmetics',
    initial: 'M',
    stars: 5,
    featured: false,
  },
];

const clients = ['Forbes', 'TechCrunch', 'Bloomberg', 'CNN', 'Reuters', 'Wall Street Journal', 'BBC', 'Vogue'];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials-bg">
        <div className="testimonials-bg-orb"></div>
      </div>

      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the brands we've helped
            reach new heights.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div
              className={`testimonial-card ${t.featured ? 'featured' : ''}`}
              key={t.id}
              id={`testimonial-${t.id}`}
            >
              <div className="testimonial-quote-icon">"</div>
              <div className="testimonial-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <span className="star" key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">{t.author}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '60px',
        }}>
          <p style={{
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--color-white-40)',
            marginBottom: '32px',
          }}>
            Featured In & Worked With
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            alignItems: 'center',
          }}>
            {clients.map((client) => (
              <span
                key={client}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--color-white-20)',
                  letterSpacing: '1px',
                  transition: 'color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-white-60)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-white-20)'}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
