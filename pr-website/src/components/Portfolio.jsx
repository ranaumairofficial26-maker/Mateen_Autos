import { useState } from 'react';
import '../styles/Sections.css';

const categories = ['All', 'Media Relations', 'Corporate PR', 'Crisis Management', 'Digital PR', 'Personal Branding'];

const portfolioItems = [
  {
    id: 1,
    title: 'Global Tech Launch Campaign',
    category: 'Digital PR',
    result: '+500M Media Impressions',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'CEO Thought Leadership',
    category: 'Personal Branding',
    result: '200+ Speaking Invitations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'Crisis Reputation Rescue',
    category: 'Crisis Management',
    result: 'Full Reputation Restored',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Fashion Brand Media Blitz',
    category: 'Media Relations',
    result: '1,200+ Media Placements',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Corporate ESG Campaign',
    category: 'Corporate PR',
    result: '95% Positive Sentiment',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80',
    featured: false,
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Our Success Stories</h2>
          </div>
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-filter ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                id={`portfolio-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item ${item.featured && index === 0 ? 'featured' : ''}`}
              id={`portfolio-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-item-image"
              />
              <div className="portfolio-item-overlay">
                <span className="portfolio-item-category">{item.category}</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-result">
                  <strong style={{ color: 'var(--color-gold)' }}>Result: </strong>
                  {item.result}
                </p>
              </div>
              <div className="portfolio-item-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
