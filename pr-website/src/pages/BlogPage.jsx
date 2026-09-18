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
import coatingImg from '../assets/svc_coating.jpg';
import accidentImg from '../assets/svc_accident.jpg';

const BLOG_POSTS = [
  {
    id: 'car-denting-painting-lahore-guide',
    title: 'Car Denting & Painting in Lahore – A Complete Guide to Professional Car Body Repair',
    category: 'Denting & Painting',
    categorySlug: 'denting',
    badge: 'COMPLETE BODY REPAIR GUIDE',
    readTime: '5 Min Read',
    date: 'Sep 2026',
    author: 'Mateen Auto Master Team',
    image: paintingImg,
    summary:
      'Your car’s exterior is constantly exposed to scratches, dents, road debris, weather conditions, and accidental damage. Discover how professional denting, panel alignment, 2K painting, and scratch filling restore your vehicle’s factory perfection.',
    content: [
      {
        heading: 'What Is Car Denting?',
        text: 'Car denting is the process of repairing dents and uneven areas on a vehicle’s body panels. Depending on the type and depth of damage, professional technicians use specialized tools and repair techniques to restore the original shape of the panel. Proper dent repair requires experience because excessive pressure or incorrect techniques can create additional unevenness on the panel.'
      },
      {
        heading: 'What Is Car Painting?',
        text: 'After body damage has been repaired, the affected area may require refinishing. Professional car painting involves surface preparation, appropriate paint application, computerized color matching, and finishing. A quality paint job should blend naturally with the surrounding panels and provide a smooth, durable overall appearance.'
      },
      {
        heading: 'Why Is Professional Car Body Repair Important?',
        text: 'Professional repair helps restore: (1) The appearance of damaged panels, (2) Proper panel shape and alignment, (3) A smooth surface before painting, (4) Consistent paint finishing, and (5) The overall exterior condition and resale value of the vehicle. Using appropriate materials and repair methods achieves a durable and consistent result.'
      },
      {
        heading: 'Car Scratch Repair & Scratch Filling',
        text: 'Not every scratch requires a complete panel repaint. The appropriate repair method depends on the depth, location, and condition of the damage. Depending on the scratch, possible solutions may include: scratch filling, polishing, spot repair, surface refinishing, or complete panel repainting. At Mateen Auto, the damage is assessed before determining the suitable repair approach.'
      },
      {
        heading: 'Major Accident Repair in Lahore',
        text: 'Accident damage can involve more than visible scratches or dents. A vehicle may require panel repair, body alignment, paintwork, and exterior restoration. Mateen Auto handles minor as well as major accident repair work, with attention to the condition of the vehicle and the required restoration process.'
      },
      {
        heading: 'Why Choose Mateen Auto?',
        text: 'Mateen Auto focuses on A1-class workmanship, quality materials, professional repair techniques, and detailed finishing. Our Defence Branch and Chauburji Branch aim to maintain consistent standards across our services: Car Denting • Car Painting • Scratch Filling • Accident Repair • PPF • Polishing • Body Restoration.'
      },
      {
        heading: 'Final Thoughts',
        text: 'Whether your vehicle has a small dent, deep scratch, damaged panel, or major accident damage, choosing an experienced automotive repair workshop can make an important difference to the final finish. Mateen Auto provides professional car body repair solutions in Lahore with a focus on quality workmanship and attention to detail.'
      }
    ],
    tags: ['Car Denting', 'Car Painting', 'Scratch Filling', 'Accident Repair', 'Lahore']
  },
  {
    id: 'car-paint-protection-lahore-ppf-vs-coating-vs-polishing',
    title: '🚗 Car Paint Protection in Lahore – PPF vs Polishing vs Ceramic Coating',
    category: 'Protection & Detailing',
    categorySlug: 'protection',
    badge: 'PROTECTION & FINISH GUIDE',
    readTime: '6 Min Read',
    date: 'Sep 2026',
    author: 'Mateen Auto Detailing Division',
    image: coatingImg,
    summary:
      'Keeping your car’s original paint looking clean and glossy requires more than regular washing. Compare PPF, Ceramic Coating, and Polishing to choose the ideal protection strategy for your car and budget.',
    content: [
      {
        heading: '🛡️ What Is Car Paint Protection?',
        text: 'Car paint protection refers to different methods used to help maintain and protect a vehicle’s exterior paint from sun exposure, road dust, stone chips, minor scratches, bird droppings, and everyday driving. The most common options include: PPF (Paint Protection Film), Ceramic Coating, and Car Polishing. Although all three can improve or maintain the appearance of a vehicle, they are not the same type of service.'
      },
      {
        heading: '🔰 PPF – Paint Protection Film',
        text: 'PPF is a transparent protective film applied over selected painted surfaces of a vehicle. Its primary purpose is to provide a physical protective layer over the original paint against stone chips, road debris, light scratches, minor surface marks, and everyday wear. PPF is commonly installed on areas such as the front bumper, bonnet, fenders, side mirrors, and other high-exposure areas.'
      },
      {
        heading: '✨ Ceramic Coating',
        text: 'Ceramic coating is a liquid-applied protective coating that bonds to the vehicle\'s surface after proper preparation and curing. It is primarily used to enhance gloss, surface appearance, water-repellent properties, ease of cleaning, and protection against environmental contaminants. Note: Ceramic coating does not provide the same physical impact protection as PPF.'
      },
      {
        heading: '💎 Car Polishing',
        text: 'Polishing is performed to improve the appearance of the paint by addressing certain surface imperfections, oxidation, swirl marks, and light defects. A professional polishing process helps restore gloss, smoothness, paint clarity, and overall exterior appearance. However, polishing itself is not a physical protective film like PPF.'
      },
      {
        heading: '🔍 PPF vs Ceramic Coating vs Car Polishing Breakdown',
        text: '• PPF: Main purpose = Paint protection against physical stone chips & scratches | Physical Film = YES | Appearance Enhancement = YES.\n• Ceramic Coating: Main purpose = Surface protection, gloss & hydrophobic beading | Physical Film = NO | Appearance Enhancement = YES.\n• Car Polishing: Main purpose = Paint correction, defect removal & shine | Physical Film = NO | Appearance Enhancement = YES.'
      },
      {
        heading: '🚘 Which Paint Protection Is Right for Your Car?',
        text: 'Choose PPF if you want an additional physical layer to help protect paint from road debris, stone chips, and scratches. Consider Ceramic Coating if your priority is enhanced gloss, easier maintenance, and surface protection. Consider Car Polishing if your paint has light imperfections, dullness, swirl marks, or needs improved clarity. In some cases, these services can also be combined as part of a broader vehicle care process.'
      },
      {
        heading: '📍 Looking for Car Paint Protection in Lahore?',
        text: 'If you are searching for PPF Lahore, Paint Protection Film Lahore, ceramic coating Lahore, or professional car polishing, Mateen Auto provides automotive protection and finishing services with attention to detail across both Chauburji and DHA Phase 1 branches.'
      }
    ],
    tags: ['PPF', 'Ceramic Coating', 'Car Polishing', 'Paint Protection', 'Lahore']
  },
  {
    id: 'what-makes-mateen-auto-scratch-repair-different',
    title: '🚗 What Makes Mateen Auto’s Scratch Repair Different?',
    category: 'Signature Scratch Filling',
    categorySlug: 'scratch',
    badge: 'MATEEN AUTO EXCLUSIVE',
    readTime: '4 Min Read',
    date: 'Sep 2026',
    author: 'Muhammad Nadeem (Founder & Pioneer)',
    image: scratchImg,
    summary:
      'Explore our specialized injection-based scratch filling technique that works directly on the scratch groove to achieve a smooth, seamless, factory-like finish without repainting the entire panel.',
    content: [
      {
        heading: '🔧 What Is Injection-Based Scratch Filling?',
        text: 'Injection-based scratch filling is a specialized method in which suitable repair material is carefully introduced into the damaged scratch using professional injection equipment. Instead of treating the entire panel unnecessarily, the technician focuses on the affected area and carefully works to restore its surface.'
      },
      {
        heading: '⭐ The Step-by-Step Scratch Filling Process',
        text: 'The process includes: (1) Detailed scratch inspection and depth assessment, (2) Professional surface preparation, (3) Precise injection filling into the scratch furrow, (4) Surface leveling and planar refinement, (5) Finishing and optical polishing, and (6) Final quality inspection. The exact process depends on the depth, width, location, and condition of the scratch.'
      },
      {
        heading: 'Why Is Mateen Auto’s Scratch Repair Different?',
        text: 'Our focus is not simply to cover a scratch. We aim to restore the damaged area properly while maintaining a natural appearance. Our specialized injection-based technique provides: precise filling, controlled material application, smooth surface restoration, professional finishing, and seamless blending with the surrounding area.'
      },
      {
        heading: '🛠️ Professional Scratch Repair in Lahore',
        text: 'If you are searching for car scratch repair in Lahore, choosing the correct repair method is important. Some scratches may be improved through polishing, while deeper damage may require filling, spot repair, or refinishing. At Mateen Auto, our technicians inspect the scratch first and select the appropriate repair method according to the condition of the vehicle.'
      },
      {
        heading: '💎 Quality Materials & Professional Workmanship',
        text: 'At Mateen Auto, we focus on A1-class workmanship, quality materials, professional techniques, and attention to detail. Our goal is to achieve a clean and durable repair rather than simply providing a temporary cosmetic solution.'
      },
      {
        heading: '🚘 Beyond Scratch Repair',
        text: 'Mateen Auto also specializes in: Car Denting & Painting, Scratch Filling, Car Polishing & Detailing, Major Accident Repair, PPF (Paint Protection Film), and Body Restoration. Our Defence Branch and Chauburji Branch maintain the same focus on professional workmanship and quality finishing.'
      }
    ],
    tags: ['Scratch Filling', 'Injection Filling', 'Factory Paint', 'Car Care', 'Mateen Auto']
  },
  {
    id: 'major-accident-repair-in-lahore-complete-guide',
    title: '🚗 Major Accident Repair in Lahore – From Damaged Body Panels to Complete Restoration',
    category: 'Accident & Restoration',
    categorySlug: 'accident',
    badge: 'ACCIDENT RESTORATION GUIDE',
    readTime: '6 Min Read',
    date: 'Aug 2026',
    author: 'Mateen Auto Structural Team',
    image: accidentImg,
    summary:
      'A major car accident can leave a vehicle with extensive damage to body panels, bumpers, paintwork, and alignment. Discover how professional accident body repair and systematic restoration bring your car back to factory perfection.',
    content: [
      {
        heading: '🔧 What Is Major Accident Repair?',
        text: 'Major accident repair involves restoring a vehicle that has suffered significant collision or body damage. Depending on the condition of the vehicle, repair may include: damaged body panel repair, panel replacement where necessary, denting, scratch filling, bumper repair, paintwork and refinishing, body alignment, exterior restoration, and polishing.'
      },
      {
        heading: '🔍 Step 1: Complete Vehicle Damage Inspection',
        text: 'Before beginning repair, the damaged vehicle is carefully inspected. A professional assessment helps identify visible and affected areas such as: front or rear body damage, damaged doors and fenders, bonnet and trunk damage, bumper damage, scratches and paint damage, and panel alignment issues.'
      },
      {
        heading: '🛠️ Step 2: Professional Accident Body Repair',
        text: 'After inspection, damaged body panels are repaired using appropriate professional techniques: denting, panel repair, panel replacement, surface correction, and alignment. The objective is to restore the vehicle\'s exterior shape and achieve consistent panel alignment before refinishing.'
      },
      {
        heading: '🎨 Step 3: Surface Preparation & Painting',
        text: 'After bodywork is completed, damaged surfaces are properly prepared: Surface Preparation → Filling → Smoothing → Primer → Paint → Finishing. Proper preparation is essential for achieving a smooth and consistent final appearance.'
      },
      {
        heading: '🚘 Step 4: Complete Car Restoration',
        text: 'For vehicles with extensive accident damage, several areas are restored together: body panel restoration, paint restoration, bumper repair, panel alignment, scratch repair, polishing, and exterior detailing to bring the vehicle back to a clean, properly finished condition.'
      },
      {
        heading: '❓ Repair or Replace a Damaged Body Panel?',
        text: 'Not every damaged panel needs to be replaced. The appropriate solution depends on the severity, location, and condition of the damage. Where possible, a panel may be professionally repaired. If the damage is too severe, replacement is recommended after transparent consultation.'
      },
      {
        heading: '📍 Looking for Major Accident Repair in Lahore?',
        text: 'Mateen Auto provides professional major accident repair in Lahore, including accident body repair, denting and painting, scratch filling, and complete exterior restoration with consistent master standards across our Chauburji and Defence branches.'
      }
    ],
    tags: ['Accident Repair', 'Car Restoration', 'Chassis Alignment', 'Body Shop', 'Lahore']
  },
  {
    id: 'ppf-in-lahore-complete-paint-protection-film-guide',
    title: '🚗 PPF in Lahore – Complete Guide to Paint Protection Film for Your Car',
    category: 'Protection & PPF',
    categorySlug: 'protection',
    badge: 'ULTIMATE PPF GUIDE',
    readTime: '5 Min Read',
    date: 'Aug 2026',
    author: 'Mateen Auto PPF Division',
    image: ppfImg,
    summary:
      'Your car’s original paint is constantly exposed to road debris, stone chips, scratches, dust, weather conditions, and everyday wear. Learn how PPF acts as an invisible protective armour.',
    content: [
      {
        heading: '🛡️ What Is PPF (Paint Protection Film)?',
        text: 'PPF (Paint Protection Film) is a transparent protective film applied to selected painted surfaces of a vehicle. The purpose of PPF is to create an additional protective layer between the vehicle’s original paint and external road exposure, protecting against light scratches, stone chips, road debris, minor marks, and environmental contamination.'
      },
      {
        heading: '⭐ Why Choose PPF for Your Car?',
        text: 'Your vehicle\'s factory paint can be expensive and difficult to restore once heavily damaged. A properly installed car PPF preserves the appearance of original paint by providing an extra layer of defense. PPF is particularly useful for high-exposure areas: front bumper, bonnet, front fenders, side mirrors, door edges, and headlights.'
      },
      {
        heading: '🔍 PPF vs Regular Paint Protection',
        text: 'Wax and polish improve the appearance and shine of your vehicle, but do not provide a physical protective layer. PPF is specifically designed as a physical barrier shielding the underlying paint from everyday road wear. For long-term original paint preservation, PPF is the premier investment.'
      },
      {
        heading: '💎 Professional PPF Installation in Lahore',
        text: 'A quality PPF installation requires: thorough vehicle cleaning, proper surface preparation, accurate film positioning, careful bubble-free application, precise edge finishing, and final inspection. Professional installation prevents visible edges, lifting, or uneven appearance.'
      },
      {
        heading: '🚘 PPF at Mateen Auto',
        text: 'At Mateen Auto, we focus on professional workmanship, quality imported TPU materials, careful installation, and detailed finishing across our Defence and Chauburji branches in Lahore.'
      },
      {
        heading: '🔧 How to Maintain PPF',
        text: 'General aftercare practices include: using suitable pH-neutral car-washing products, avoiding aggressive scrubbing, following installer aftercare instructions, inspecting edges periodically, and addressing any lifting professionally.'
      },
      {
        heading: '📍 Looking for Paint Protection Film in Lahore?',
        text: 'Mateen Auto provides professional PPF installation in Lahore with a focus on quality materials and detailed workmanship. Protect your paint. Preserve your car.'
      }
    ],
    tags: ['PPF Lahore', 'Paint Protection Film', 'Self-Healing TPU', 'Car Protection', 'Mateen Auto']
  },
  {
    id: 'why-choose-mateen-auto-lahore-workshops',
    title: 'Why Choose Mateen Auto? Quality, Workmanship & 37+ Years Heritage',
    category: 'Heritage & Standards',
    categorySlug: 'heritage',
    badge: '37+ YEARS HERITAGE',
    readTime: '4 Min Read',
    date: 'Jul 2026',
    author: 'Mateen Auto Management',
    image: dryDentingImg,
    summary:
      'A1-class workmanship, imported materials, and consistent master standards across Chauburji and Defence branches. Learn why Mateen Auto is trusted by luxury car owners throughout Lahore.',
    content: [
      {
        heading: '1. Decades of Dedicated Master Craftsmanship',
        text: 'Since 1989, Mateen Auto has led the automotive bodywork and paint restoration craft in Pakistan. With over 37 years of dedication and 4,200+ vehicles restored, our work represents precision, integrity, and long-lasting durability.'
      },
      {
        heading: '2. Consistent Quality Across Both Lahore Branches',
        text: 'Whether you visit our Defence Branch or Chauburji Branch, we maintain the same professional standards, repair techniques, material quality, and finishing. Our goal is to provide a consistent Mateen Auto standard at both locations.'
      },
      {
        heading: '3. Transparent Inspection & Fair Advice',
        text: 'We never suggest full repainting when precision scratch filling, dry denting (PDR), or spot repair can preserve your original factory paint. Every vehicle receives thorough diagnostic evaluation.'
      },
      {
        heading: '4. Service & Workmanship Guarantee',
        text: 'Our work comes with a genuine service and workmanship guarantee, giving customers complete peace of mind and confidence in the final result.'
      },
      {
        heading: '5. Complete Range of Automotive Services',
        text: 'Our comprehensive services include: Car Denting • Car Painting • Scratch Filling • Accident Repair • PPF • Polishing • Detailing • Wheel Balancing & 3D Alignment • Complete Body Restoration.'
      },
      {
        heading: '6. The Mateen Auto Promise',
        text: 'Mateen Auto — Professional Scratch Filling. Seamless Finish. Quality You Can Trust.'
      }
    ],
    tags: ['Mateen Auto', 'Workmanship', 'Quality Guarantee', 'Lahore Workshop', 'Chauburji', 'DHA']
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
            MATEEN AUTO KNOWLEDGE HUB &amp; AUTOMOTIVE GUIDES
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
                placeholder="Search blogs (e.g. Denting, PPF, Scratch Filling, Accident Repair)..."
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
                🔨 Denting &amp; Painting
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'protection' ? 'active' : ''}`}
                onClick={() => setActiveCategory('protection')}
              >
                🛡️ PPF &amp; Protection
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'scratch' ? 'active' : ''}`}
                onClick={() => setActiveCategory('scratch')}
              >
                ✨ Scratch Filling
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'accident' ? 'active' : ''}`}
                onClick={() => setActiveCategory('accident')}
              >
                🚗 Accident &amp; Restoration
              </button>
              <button
                type="button"
                className={`blog-cat-btn ${activeCategory === 'heritage' ? 'active' : ''}`}
                onClick={() => setActiveCategory('heritage')}
              >
                🏆 Heritage &amp; Quality
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
              <p>Try searching for a different keyword like "Denting", "Paint", "PPF", "Scratch", or reset filters.</p>
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
                <p>Never wipe a dusty car with a dry cloth. Lahore’s airborne particulate acts like sandpaper. Always rinse first or use high-lubricity foam.</p>
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
                    <p style={{ whiteSpace: 'pre-line' }}>{sec.text}</p>
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
