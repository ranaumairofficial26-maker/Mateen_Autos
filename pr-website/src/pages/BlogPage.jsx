import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';
import '../styles/BlogPage.css';

// Import images for blogs
import dryDentingImg from '../assets/svc_dry_denting.jpg';
import paintingImg from '../assets/svc_denting_painting.jpg';
import ppfImg from '../assets/svc_ppf.jpg';
import scratchImg from '../assets/svc_scratch.jpg';

const BLOG_POSTS = [
  {
    id: 'dry-denting-vs-traditional-denting',
    title: 'Dry Denting (PDR) vs Traditional Painting: How to Save 100% Factory Car Value',
    category: 'Denting & Bodywork',
    categorySlug: 'denting',
    badge: 'MUST READ FOR CAR OWNERS',
    readTime: '4 Min Read',
    date: 'Sep 2026',
    author: 'Mateen Auto Master Team',
    image: dryDentingImg,
    summary:
      'Paintless Dry Denting (PDR) is the gold standard for removing dings, hail damage, and body dents without repainting. Discover why preserving factory paint protects up to Rs. 200,000+ in vehicle resale value in Pakistan.',
    content: [
      {
        heading: '1. What is Paintless Dry Denting (PDR)?',
        text: 'Paintless Dry Denting is a specialized technique where master technicians manipulate damaged metal panels from behind using custom precision rods, LED shadow boards, and glue-pulling systems. Because no body filler (poteen) or repainting is used, your vehicle retains 100% original factory paint thickness (microns).'
      },
      {
        heading: '2. Why Original Paint Matters in Pakistan’s Market',
        text: 'In the Pakistani automotive market, repainted or touched-up panels (often called "gari shower hai ya touch-up") can drop your car resale value by 10% to 25%. PDR ensures your car passes all digital paint gauge meters as 100% genuine factory original.'
      },
      {
        heading: '3. When Can PDR Be Used vs 2K Painting?',
        text: 'Dry Denting is ideal when the original paint surface is unbroken, without deep metal tearing or sharp creased seams. If the paint has cracked down to bare metal, our 2K German Oven Baking paint system is recommended for an invisible, flawless factory finish.'
      },
      {
        heading: '4. Mateen Auto Advantage',
        text: 'With 37+ years of experience and Pakistan-pioneered precision tools, our master craftsmen restore complex aluminum and high-tensile steel panels with zero paint loss in just a few hours.'
      }
    ],
    tags: ['Dry Denting', 'PDR', 'Resale Value', 'Car Bodywork']
  },
  {
    id: '2k-oven-baking-vs-local-paint',
    title: 'Why 2K Computerized Oven Baked Paint Outperforms Standard Local Spraying',
    category: 'Paint & Restoration',
    categorySlug: 'paint',
    badge: 'FACTORY FINISH INSIGHT',
    readTime: '5 Min Read',
    date: 'Aug 2026',
    author: 'Nadeem (Founder & Master Painter)',
    image: paintingImg,
    summary:
      'Ever wondered why ordinary street repaint fades, turns yellow, or peels after 6 months? Learn how 2K polyurethane clear coats and pressurized dust-free baking booths create an indistinguishable mirror finish.',
    content: [
      {
        heading: '1. The Problem with Open-Air Local Paint Jobs',
        text: 'Traditional roadside workshops spray paint in open or semi-enclosed sheds. Airborne dust particles settle on the wet clear coat, resulting in orange peel texture, dull spots, and premature clear-coat failure under Pakistan’s harsh sunlight.'
      },
      {
        heading: '2. Computerized Spectrophotometer Color Matching',
        text: 'Every car paint code has subtle batch variations caused by UV exposure. At Mateen Auto, we use computerized optical color scanners to blend pigments down to 0.01g precision, ensuring 100% panel-to-panel color harmony.'
      },
      {
        heading: '3. Controlled 65°C Italian Baking Booth',
        text: 'Our pressurized downdraft baking booth cures the 2K poly-acrylic resins at optimal 60°C–65°C temperatures. This forms a hardened molecular bond that resists stone chips, bird droppings, acid rain, and car wash swirls.'
      },
      {
        heading: '4. Long-Term Durability & Guarantee',
        text: 'A genuine 2K oven baked finish will last 5 to 10+ years without discoloration, giving your restored vehicle that showroom deep liquid gloss.'
      }
    ],
    tags: ['Car Painting', '2K Clear Coat', 'Oven Baking', 'Color Match']
  },
  {
    id: 'ppf-vs-ceramic-coating-guide',
    title: 'PPF (Paint Protection Film) vs Ceramic Coating: Which One Does Your Car Need?',
    category: 'Protection & PPF',
    categorySlug: 'protection',
    badge: 'ULTIMATE BUYER GUIDE',
    readTime: '6 Min Read',
    date: 'Aug 2026',
    author: 'Mateen Auto Detailing Division',
    image: ppfImg,
    summary:
      'Confused between self-healing TPU PPF wraps and 9H Ceramic Matrix Coatings? Here is an honest, expert comparison for driving on Lahore’s Ring Road, Motorways, and urban traffic.',
    content: [
      {
        heading: '1. TPU Self-Healing PPF: Physical Armor Shield',
        text: 'Paint Protection Film is a 180–200 micron thick transparent thermoplastic urethane layer applied over high-impact panels (bumper, bonnet, fenders, doors). When stone chips strike at 120 km/h or accidental scratches occur, the TPU absorbs the shock and self-heals under engine heat or direct sunlight.'
      },
      {
        heading: '2. 9H Ceramic Matrix Coating: Hydrophobic Mirror Gloss',
        text: 'Ceramic coating is a liquid nano-polymer that chemically bonds with the clear coat. It provides intense hydrophobic water beading, UV sun protection, and chemical resistance, making vehicle washing effortless and keeping the paint deeply reflective.'
      },
      {
        heading: '3. The Verdict: Which One Should You Choose?',
        text: 'If your priority is preventing physical stone chips, scratch marks, and keys scratches on new luxury cars, TPU PPF is unmatched. If you want maximum gloss, easy cleaning, and chemical shield on daily drivers, 9H Ceramic or Graphene Coating is the smart investment. Many clients choose Front-End PPF + Full Body Ceramic for the ultimate hybrid protection.'
      },
      {
        heading: '4. Professional Installation Matters',
        text: 'Poorly installed PPF can bubble or yellow. Mateen Auto uses pre-cut computerized templates and certified installers to deliver seamless tucked-edge installations.'
      }
    ],
    tags: ['PPF', 'Ceramic Coating', 'Scratch Defense', 'Paint Protection']
  },
  {
    id: 'injection-filling-scratch-repair',
    title: 'Pakistan-Pioneered Injection Filling: Fix Scratches Without Panel Repainting',
    category: 'Denting & Bodywork',
    categorySlug: 'denting',
    badge: 'MATEEN AUTO EXCLUSIVE',
    readTime: '3 Min Read',
    date: 'Jul 2026',
    author: 'Nadeem (Founder)',
    image: scratchImg,
    summary:
      'Invented & perfected right here at Mateen Auto: learn how precision microscopic injection filling repairs deep key scratches without repainting the entire door or fender.',
    content: [
      {
        heading: '1. What is Injection Scratch Filling?',
        text: 'Unlike local workshops that demand full door repainting for a single key scratch, injection filling applies pure matched pigment and resin directly inside the scratch groove using medical-grade micro-applicators.'
      },
      {
        heading: '2. Preserving 99% Original Factory Paint',
        text: 'Because only the narrow scratch cavity is filled and cured, 99% of your door remains factory original. Once wet-sanded and machine polished, the scratch becomes virtually invisible to the naked eye.'
      },
      {
        heading: '3. Fast Turnaround & High Savings',
        text: 'Injection repair takes just 1 to 2 days compared to traditional multi-day repainting, saving you time and retaining genuine car status.'
      }
    ],
    tags: ['Injection Filling', 'Scratch Repair', 'Original Paint', 'Lahore']
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.categorySlug === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page-root">
      <Navbar />

      {/* ── HERO BANNER ───────────────────────── */}
      <section className="blog-hero-section">
        <div className="blog-hero-ambient"></div>
        <div className="container blog-hero-container">
          <div className="blog-badge-top">
            <span className="blog-badge-dot"></span>
            MATEEN AUTO KNOWLEDGE HUB &amp; AUTOMOTIVE INSIGHTS
          </div>
          <h1 className="blog-hero-title">
            Automotive Care, <span>Denting &amp; Painting</span> Master Guides
          </h1>
          <p className="blog-hero-sub">
            Expert insights from 37+ years of master craftsmanship in Lahore. Learn how to preserve your vehicle's factory paint, avoid costly bodywork mistakes, and choose the right protection.
          </p>

          {/* Search & Filter Controls */}
          <div className="blog-filter-bar">
            <div className="blog-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search blogs (e.g. Dry Denting, PPF, 2K Paint, Scratches)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="blog-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="blog-category-pills">
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Guides ({BLOG_POSTS.length})
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'denting' ? 'active' : ''}`}
                onClick={() => setActiveCategory('denting')}
              >
                🔨 Denting &amp; Bodywork
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'paint' ? 'active' : ''}`}
                onClick={() => setActiveCategory('paint')}
              >
                🎨 Paint &amp; 2K Baking
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'protection' ? 'active' : ''}`}
                onClick={() => setActiveCategory('protection')}
              >
                🛡️ PPF &amp; Ceramic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED HERO ARTICLE (IF ALL POSTS) ── */}
      {activeCategory === 'all' && !searchQuery && (
        <section className="blog-featured-section">
          <div className="container">
            <div className="blog-featured-card" onClick={() => setSelectedPost(BLOG_POSTS[0])}>
              <div className="blog-featured-media">
                <img
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="blog-featured-badge">{BLOG_POSTS[0].badge}</div>
              </div>
              <div className="blog-featured-content">
                <div className="blog-meta-row">
                  <span className="blog-cat-tag">{BLOG_POSTS[0].category}</span>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-read-time">{BLOG_POSTS[0].readTime}</span>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-date">{BLOG_POSTS[0].date}</span>
                </div>
                <h2 className="blog-featured-title">{BLOG_POSTS[0].title}</h2>
                <p className="blog-featured-excerpt">{BLOG_POSTS[0].summary}</p>
                <div className="blog-card-footer">
                  <div className="blog-author-info">
                    <span className="blog-author-avatar">MA</span>
                    <span className="blog-author-name">{BLOG_POSTS[0].author}</span>
                  </div>
                  <button type="button" className="blog-read-btn">
                    Read Complete Guide →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BLOG CARDS GRID ───────────────────── */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-section-header">
            <h2 className="blog-section-title">
              {activeCategory === 'all' ? 'Latest Master Articles' : `${activeCategory.toUpperCase()} ARTICLES`}
            </h2>
            <span className="blog-results-count">Showing {filteredPosts.length} article(s)</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="blog-empty-state">
              <div className="blog-empty-icon">🔍</div>
              <h3>No matching articles found</h3>
              <p>Try searching for a different keyword like "PDR", "Paint", "PPF", or reset filters.</p>
              <button
                type="button"
                className="blog-cat-btn active"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="blog-card"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="blog-card-media">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="blog-card-badge">{post.category}</span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-meta-row">
                      <span className="blog-read-time">⏱️ {post.readTime}</span>
                      <span className="blog-meta-dot">•</span>
                      <span className="blog-date">{post.date}</span>
                    </div>

                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.summary}</p>

                    <div className="blog-tags-row">
                      {post.tags.map((tag) => (
                        <span key={tag} className="blog-tag-pill">#{tag}</span>
                      ))}
                    </div>

                    <div className="blog-card-action">
                      <span className="blog-action-text">Read Full Article</span>
                      <span className="blog-action-arrow">→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── GARAGE PRO TIPS BANNER ────────────── */}
      <section className="blog-protips-section">
        <div className="container">
          <div className="blog-protips-box">
            <div className="blog-protips-header">
              <div className="blog-protips-badge">💡 MATEEN AUTO GARAGE RULES</div>
              <h3>4 Golden Rules to Keep Your Car Looking Brand New in Lahore</h3>
            </div>
            <div className="blog-protips-grid">
              <div className="blog-protip-item">
                <div className="blog-protip-num">01</div>
                <h4>Never Dry Wipe Dust</h4>
                <p>Never wipe a dusty car with dry cloth. Lahore’s airborne particulate acts like sandpaper. Always rinse first or use high-lubricity foam.</p>
              </div>
              <div className="blog-protip-item">
                <div className="blog-protip-num">02</div>
                <h4>Address Dents Promptly with PDR</h4>
                <p>Don't let small parking dings sit until they stretch the metal sheet. Immediate dry denting restores 100% original shape without paint work.</p>
              </div>
              <div className="blog-protip-item">
                <div className="blog-protip-num">03</div>
                <h4>High-Impact PPF Armor</h4>
                <p>If you commute on Ring Road or Motorway, protect the front bumper, hood, and side mirrors with TPU PPF to stop stone chipping permanently.</p>
              </div>
              <div className="blog-protip-item">
                <div className="blog-protip-num">04</div>
                <h4>Insist on 2K Oven Baking</h4>
                <p>Never settle for open-shed touch-ups. Insist on 2K computerized paint cured at 65°C to prevent clear-coat peeling and yellowing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION CTA ───────────────────── */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-card">
            <div className="blog-cta-content">
              <h2>Have a Dent, Scratch, or Need Full Car Restoration?</h2>
              <p>
                Send photos of your vehicle on WhatsApp for a fast, honest estimate or visit our Chauburji / DHA Lahore studios for free expert evaluation.
              </p>
              <div className="blog-cta-btns">
                <a
                  href="https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20read%20your%20blog%20and%20want%20an%20estimate%20for%20my%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-cta-wa-btn"
                >
                  💬 WhatsApp Photos for Quote
                </a>
                <a href="/contact" className="blog-cta-contact-btn">
                  Visit Workshop / Contact Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL ARTICLE MODAL ────────────────── */}
      {selectedPost && (
        <div className="blog-modal-backdrop" onClick={() => setSelectedPost(null)}>
          <div
            className="blog-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="blog-modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close article modal"
            >
              ✕
            </button>

            <div className="blog-modal-header">
              <div className="blog-meta-row">
                <span className="blog-cat-tag">{selectedPost.category}</span>
                <span className="blog-meta-dot">•</span>
                <span className="blog-read-time">{selectedPost.readTime}</span>
                <span className="blog-meta-dot">•</span>
                <span className="blog-date">{selectedPost.date}</span>
              </div>
              <h2 className="blog-modal-title">{selectedPost.title}</h2>
              <div className="blog-modal-author">
                <span className="blog-author-avatar">MA</span>
                <div>
                  <div className="blog-author-name">{selectedPost.author}</div>
                  <div className="blog-author-role">Automotive Restoration &amp; Paint Specialists</div>
                </div>
              </div>
            </div>

            <div className="blog-modal-image-wrap">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                loading="lazy"
              />
            </div>

            <div className="blog-modal-body">
              <p className="blog-modal-lead">{selectedPost.summary}</p>

              <div className="blog-modal-sections">
                {selectedPost.content.map((sec, idx) => (
                  <div key={idx} className="blog-modal-section-item">
                    <h3>{sec.heading}</h3>
                    <p>{sec.text}</p>
                  </div>
                ))}
              </div>

              <div className="blog-modal-tags">
                <strong>Topics:</strong>
                {selectedPost.tags.map((t) => (
                  <span key={t} className="blog-tag-pill">#{t}</span>
                ))}
              </div>

              <div className="blog-modal-cta-box">
                <h4>Need this service for your vehicle?</h4>
                <p>Talk directly with our master technicians in Lahore for free inspection and transparent pricing.</p>
                <a
                  href={`https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20am%20inquiring%20about%20${encodeURIComponent(selectedPost.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-cta-wa-btn"
                  style={{ display: 'inline-flex', marginTop: '12px' }}
                >
                  💬 Get Instant Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
