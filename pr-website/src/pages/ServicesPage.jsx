import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ServicesPage.css';

// ── Service Images
import imgPPF            from '../assets/svc_ppf.jpg';
import imgAccident       from '../assets/svc_accident.jpg';
import imgDenting        from '../assets/svc_denting_painting.jpg';
import imgScratch        from '../assets/svc_scratch.jpg';
import imgDryDenting     from '../assets/svc_dry_denting.jpg';
import imgCoating        from '../assets/svc_coating.jpg';
import imgDetailing      from '../assets/svc_detailing.jpg';
import imgPolish         from '../assets/svc_compound_polish.jpg';
import imgBalancing      from '../assets/svc_wheel_balancing.jpg';
import imgAlignment      from '../assets/svc_wheel_alignment.jpg';

const ALL_SERVICES = [
  {
    id: 'ppf',
    name: 'PPF — Paint Protection Film',
    tag: 'Self-Healing Shield',
    icon: '🛡️',
    category: 'Protection',
    img: imgPPF,
    desc: 'A premium ultra-clear TPU film applied over your car\'s paint to act as an invisible armour. It absorbs stone chips, deep scratches, bird droppings, UV rays, and acid rain — keeping your original paint factory-fresh.',
    features: [
      'Shields paint from chips, scratches & UV damage',
      'Self-healing surface — minor marks disappear with heat',
      'Available in gloss or matte finish',
      '5 to 10-year protection warranty',
    ],
  },
  {
    id: 'accident-repair',
    name: 'Car Accident Repair',
    tag: 'Full Body Rebuild',
    icon: '🚗',
    category: 'Body & Paint',
    img: imgAccident,
    desc: 'Complete restoration of collision-damaged vehicles — from crumpled panels and broken bumpers to frame misalignment and structural damage. We bring your car back to its original factory safety standards.',
    features: [
      'Full body panel straightening & replacement',
      'Computerized frame & chassis alignment',
      'Factory-grade structural safety restoration',
      'Multi-stage quality inspection before delivery',
    ],
  },
  {
    id: 'denting-painting',
    name: 'Denting & Painting',
    tag: '2K Oven-Baked Finish',
    icon: '🎨',
    category: 'Body & Paint',
    img: imgDenting,
    desc: 'Professional dent repair combined with high-quality 2K oven-baked painting in a climate-controlled spray booth. We use computerized color matching to achieve a seamless, factory-level mirror finish.',
    features: [
      'Precise dent removal before painting',
      'PPG 2K polyurethane oven-baked paint',
      'Dust-free climate-controlled spray booth',
      'Computerized digital color matching',
    ],
  },
  {
    id: 'scratch-repair',
    name: 'Scratch Filling & Repair',
    tag: 'Signature Specialty',
    icon: '✨',
    category: 'Body & Paint',
    img: imgScratch,
    desc: 'One of Mateen Auto\'s signature specialties. We repair surface scratches, key marks, and paint damage with precision micro-feathering and scratch-filling techniques — without repainting the entire panel.',
    features: [
      'Surface scratches & key marks repaired',
      'Micro clear-coat leveling for invisible blending',
      'Original factory paint preserved',
      'Cost-effective — no full panel repaint needed',
    ],
  },
  {
    id: 'dry-denting',
    name: 'Dry Denting (Paintless PDR)',
    tag: 'Paintless PDR',
    icon: '🔨',
    category: 'Body & Paint',
    img: imgDryDenting,
    desc: 'A non-invasive technique where dents are pushed out from behind the panel using specialized rods and tools — without any painting or fillers. Your original factory paint stays 100% intact.',
    features: [
      'No painting or body filler required',
      '100% original factory paint preserved',
      'Repairs door dings, hail damage & minor dents',
      'Fast turnaround — often same day',
    ],
  },
  {
    id: 'car-coating',
    name: 'Car Coating (Ceramic & Graphene)',
    tag: '9H Nano Shield',
    icon: '💎',
    category: 'Protection',
    img: imgCoating,
    desc: 'A liquid nano-coating bonded permanently to your car\'s paint, creating an ultra-hard 9H glass shield. Water, dirt, and contaminants bead off instantly — your car stays cleaner for longer with a deep wet-look gloss.',
    features: [
      '9H hardness — harder than regular paint',
      'Water & dirt bead off effortlessly',
      'Deep mirror-gloss liquid shine finish',
      '3 to 5-year protection lifespan',
    ],
  },
  {
    id: 'car-detailing',
    name: 'Car Detailing (Interior & Exterior)',
    tag: 'Full Car Spa',
    icon: '🧼',
    category: 'Detailing',
    img: imgDetailing,
    desc: 'A thorough inside-out car cleaning and restoration service. We steam-clean seats, condition leather, degrease the engine bay, polish exterior surfaces, and eliminate bacteria and bad odors from the interior.',
    features: [
      'High-pressure steam interior sanitization',
      'Leather seat conditioning & UV protection',
      'Engine bay degreasing & dressing',
      'Anti-bacterial odor elimination',
    ],
  },
  {
    id: 'compound-polish',
    name: '3M Compound & Polish',
    tag: 'Swirl & Oxidation Fix',
    icon: '⚡',
    category: 'Detailing',
    img: imgPolish,
    desc: 'Using 3M\'s professional orbital compounding system to remove swirl marks, buffer scratches, oxidation, and paint hazing. Your car\'s paint is left with a deep, wet, mirror-like reflection.',
    features: [
      'Removes swirl marks & spider-web scratches',
      'Eliminates paint oxidation & haziness',
      'Restores deep wet-look paint reflection',
      'Clearcoat thickness preserved throughout',
    ],
  },
  {
    id: 'wheel-balancing',
    name: 'Wheel Balancing',
    tag: 'Smooth Vibration-Free Ride',
    icon: '⚖️',
    category: 'Wheels & Geometry',
    img: imgBalancing,
    desc: 'Computerized high-speed dynamic balancing that detects weight imbalances in your wheels and tires. Eliminates steering wobble, highway vibrations, and uneven tire wear — giving you a silky smooth ride.',
    features: [
      'Dynamic high-speed spin test on machine',
      'Laser-precision counterweight placement',
      'Eliminates steering wheel shake & vibration',
      'Extends tire lifespan significantly',
    ],
  },
  {
    id: 'wheel-alignment',
    name: 'Wheel Alignment',
    tag: 'Laser Precision Calibration',
    icon: '🎯',
    category: 'Wheels & Geometry',
    img: imgAlignment,
    desc: 'Computerized 3D laser alignment measures your wheels\' camber, caster, and toe angles against factory specifications. Corrects pulling, uneven tire wear, and wandering — restoring razor-sharp steering control.',
    features: [
      'Measures camber, caster & toe to factory specs',
      '3D laser camera for sub-millimeter accuracy',
      'Corrects car pulling to one side',
      'Prevents uneven & premature tire wear',
    ],
  },
];

const CATEGORIES = ['All Services', 'Body & Paint', 'Protection', 'Detailing', 'Wheels & Geometry'];
const INITIAL_VISIBLE = 6; // show first 6 (3+3), rest hidden behind "Show More"

export default function ServicesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  const filteredServices = activeCategory === 'All Services'
    ? ALL_SERVICES
    : ALL_SERVICES.filter((svc) => svc.category === activeCategory);

  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredServices.length > INITIAL_VISIBLE && !showAll;
  const hiddenCount = filteredServices.length - INITIAL_VISIBLE;

  const getWaLink = (serviceName) => {
    const text = encodeURIComponent(`Hello Mateen Auto, I want to know more about ${serviceName}.`);
    return `https://wa.me/923234500012?text=${text}`;
  };

  const handleBook = (serviceName) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="sp-page">
      <Navbar />

      {/* ── HERO BANNER */}
      <section className="sp-hero">
        <div className="sp-hero-glow-1"></div>
        <div className="sp-hero-glow-2"></div>
        <div className="sp-hero-container">
          <div className="sp-pill-tag">
            <span></span>
            MATEEN AUTO — EXPERIENCE SINCE 1989
          </div>
          <h1 className="sp-hero-title">
            OUR SERVICES &amp; <span>CAPABILITIES</span>
          </h1>
          <p className="sp-hero-desc">
            From Scratch Filling and Dry Denting to Accident Repair, PPF, Ceramic Coating, and Complete Car Care —
            professional automotive solutions at Chauburji &amp; DHA Lahore.
          </p>

          {/* Category Filter Bar */}
          <div className="sp-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`sp-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID */}
      <section className="sp-main-section">
        <div className="sp-grid-container">

          {/* Cards Grid — 3 columns */}
          <div className="sp-services-grid-new">
            {visibleServices.map((svc, idx) => {
              // Last card centered if it's the only one in its row (odd)
              const isLast = idx === visibleServices.length - 1;
              const isOddTotal = visibleServices.length % 3 !== 0;
              const isCenterLast = isLast && isOddTotal;
              return (
                <div
                  key={svc.id}
                  className={`sp-card-new${isCenterLast ? ' sp-card-center-last' : ''}`}
                >
                  {/* Service Image */}
                  <div className="sp-card-img-wrap">
                    <img src={svc.img} alt={svc.name} className="sp-card-img" loading="lazy" />
                    <div className="sp-card-img-overlay"></div>
                    <span className="sp-card-img-tag">{svc.tag}</span>
                  </div>

                  {/* Card Body */}
                  <div className="sp-card-body">
                    <div className="sp-card-name-row">
                      <span className="sp-card-icon">{svc.icon}</span>
                      <h3 className="sp-card-name">{svc.name}</h3>
                    </div>

                    <p className="sp-card-desc-new">{svc.desc}</p>

                    {/* Features */}
                    <ul className="sp-card-features-new">
                      {svc.features.map((feat, i) => (
                        <li key={i} className="sp-feat-item">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="sp-card-actions-new">
                      <button
                        type="button"
                        className="sp-btn-book-new"
                        onClick={() => handleBook(svc.name)}
                      >
                        Book This Service →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {hasMore && (
            <div className="sp-show-more-wrap">
              <button
                type="button"
                className="sp-show-more-btn"
                onClick={() => setShowAll(true)}
              >
                <span>Show More Services</span>
                <span className="sp-show-more-count">+{hiddenCount} more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          )}

          {/* Show Less (when all visible) */}
          {showAll && filteredServices.length > INITIAL_VISIBLE && (
            <div className="sp-show-more-wrap">
              <button
                type="button"
                className="sp-show-more-btn sp-show-less-btn"
                onClick={() => { setShowAll(false); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
              >
                <span>Show Less</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── WORKSHOP STANDARDS PILLARS */}
      <section className="sp-pillars-section">
        <div className="container">
          <div className="sp-pillars-header">
            <div className="sp-pill-tag" style={{ margin: '0 auto 12px' }}>
              <span></span>
              WHY CHOOSE MATEEN AUTO
            </div>
            <h2 className="sp-pillars-title">UNCOMPROMISING PRECISION STANDARDS</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13.5px', margin: 0 }}>
              Combining experience since 1989 with international expertise from USA & Dubai, and professional certifications with MG & Audi.
            </p>
          </div>

          <div className="sp-pillars-grid">
            <div className="sp-pillar-box">
              <div className="sp-pillar-icon">🏆</div>
              <h4 className="sp-pillar-name">Experience Since 1989</h4>
              <p className="sp-pillar-desc">Over 37 years of hands-on automotive repair expertise under master craftsman Mr. Nadeem.</p>
            </div>
            <div className="sp-pillar-box">
              <div className="sp-pillar-icon">🌍</div>
              <h4 className="sp-pillar-name">International Experience</h4>
              <p className="sp-pillar-desc">Professional experience in USA & Dubai with certificates associated with MG and Audi.</p>
            </div>
            <div className="sp-pillar-box">
              <div className="sp-pillar-icon">✨</div>
              <h4 className="sp-pillar-name">Scratch Filling Specialists</h4>
              <p className="sp-pillar-desc">Signature specialty — precise scratch repair and filling trusted by customers across Lahore.</p>
            </div>
            <div className="sp-pillar-box">
              <div className="sp-pillar-icon">🛡️</div>
              <h4 className="sp-pillar-name">Complete Under One Roof</h4>
              <p className="sp-pillar-desc">PPF, Coating, Denting, Painting, Detailing, Wheel Balancing & Alignment — all at Mateen Auto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA */}
      <section className="sp-cta-section">
        <div className="sp-cta-card">
          <h2 className="sp-cta-title">Need a Quote for Your Car?</h2>
          <p className="sp-cta-desc">
            Send your car photos or damage details on WhatsApp for an instant expert evaluation from Mr. Nadeem,
            or visit us at Chauburji or DHA Lahore.
          </p>
          <div className="sp-cta-actions">
            <a href="/contact" className="sp-cta-btn-primary">
              Book Free Inspection →
            </a>
            <a
              href="https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20want%20a%20quote%20for%20my%20car."
              target="_blank"
              rel="noreferrer"
              className="sp-cta-btn-wa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us (+92 323 4500012)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
