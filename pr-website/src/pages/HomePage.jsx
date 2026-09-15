import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

// ── Service & Transformation Images from assets
import imgBmwClean       from '../assets/bmw_after_seamless.jpg';
import imgBmwDirty       from '../assets/bmw_before_seamless.jpg';
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
    desc: 'A premium ultra-clear TPU film applied over your car\'s paint to act as an invisible armour against stone chips, deep scratches, UV rays, and acid rain.',
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
    desc: 'Complete restoration of collision-damaged vehicles — from crumpled panels and broken bumpers to frame misalignment and structural chassis repair.',
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
    desc: 'Professional dent repair combined with high-grade 2K polyurethane oven-baked painting in a climate-controlled spray booth with digital color matching.',
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
    desc: 'One of Mateen Auto\'s signature specialties. We repair surface scratches and key marks with precision scratch-filling without repainting the entire panel.',
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
    desc: 'A non-invasive technique where dents are pushed out from behind the panel using specialized rods — keeping your original factory paint 100% intact.',
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
    desc: 'A liquid nano-coating bonded permanently to your paint, creating an ultra-hard 9H glass shield where water and dirt bead off with deep wet-look gloss.',
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
    desc: 'A thorough inside-out car spa restoration. We steam-clean seats, condition leather, degrease the engine bay, and eliminate bacteria and bad odors.',
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
    desc: 'Using 3M\'s professional orbital compounding system to remove swirl marks, buffer scratches, oxidation, and restore deep wet-look paint reflection.',
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
    tag: 'High-Speed Stability',
    icon: '⚙️',
    category: 'Mechanical & Care',
    img: imgBalancing,
    desc: 'Computerized dynamic wheel balancing to eliminate steering vibrations at high speeds, prevent uneven tire wear, and ensure maximum road safety.',
    features: [
      'Precision computerized balance calibration',
      'Eliminates high-speed steering wheel shake',
      'Extends tyre tread lifespan significantly',
      'Protects suspension and wheel bearings',
    ],
  },
  {
    id: 'wheel-alignment',
    name: '3D Wheel Alignment',
    tag: 'Laser Precision',
    icon: '🎯',
    category: 'Mechanical & Care',
    img: imgAlignment,
    desc: 'Computerized 3D laser wheel alignment for exact camber, caster, and toe settings according to manufacturer specifications for laser-straight driving.',
    features: [
      'Computerized 3D laser sensor technology',
      'Eliminates vehicle pulling to left or right',
      'Improves fuel efficiency & handling',
      'Full digital before & after report provided',
    ],
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  // Before / After interactive slider state
  const [sliderPos, setSliderPos] = useState(50);

  // Services display state (6 initial, full 10 on Show More)
  const [showAllServices, setShowAllServices] = useState(false);
  const INITIAL_COUNT = 6;
  const visibleServices = showAllServices ? ALL_SERVICES : ALL_SERVICES.slice(0, INITIAL_COUNT);
  const hiddenCount = ALL_SERVICES.length - INITIAL_COUNT;

  const currentTransform = {
    id: 'bmw-studio',
    title: 'Studio Paint Restoration & 9H Ceramic Coating',
    car: 'BMW 5-Series M Sport — Deep Obsidian Gloss',
    badge: 'Flagship Studio Showcase',
    img: imgBeforeAfter,
    highlights: [
      { icon: '🧼', title: 'Heavy Mud & Grime Decontamination', desc: 'Full iron fallout, road tar & deep road grime eliminated' },
      { icon: '✨', title: 'Multi-Stage Swirl Correction', desc: 'Spider-web scratches & paint haziness 100% corrected' },
      { icon: '💎', title: '9H Nano Ceramic Glass Shield', desc: 'Ultra-hydrophobic permanent wet-look mirror gloss' },
      { icon: '🛡️', title: '100% Factory Paint Preserved', desc: 'Original clear coat protected against UV & acid rain' }
    ]
  };

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  const handleBook = (serviceName) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hp-root">
      <Navbar />

      {/* ── 1. HERO SECTION ──────────────────────── */}
      <section className="hp-hero-section">
        <div className="hp-hero-bg-glow"></div>
        <div className="hp-container">
          <div className="hp-hero-grid">

            {/* Left Content */}
            <div className="hp-hero-left">
              <div className="hp-hero-badge">
                <span className="hp-badge-dot"></span>
                PREMIUM CAR DETAILING STUDIO
              </div>

              <h1 className="hp-hero-title">
                MORE THAN<br />
                <span className="hp-grad-text">A CAR WASH</span>
              </h1>

              <p className="hp-hero-desc">
                Professional detailing and protection services to keep your vehicle looking its best — inside and out.
              </p>

              <div className="hp-hero-actions">
                <Link to="/contact" className="hp-btn-primary">
                  <span>Book a Service</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/services" className="hp-btn-outline">
                  Our Services
                </Link>
              </div>

              {/* 3 Value Pillars */}
              <div className="hp-hero-pillars">
                <div className="hp-pillar-item">
                  <div className="hp-pillar-icon">💎</div>
                  <div className="hp-pillar-text">
                    <strong>Premium</strong>
                    <span>Products</span>
                  </div>
                </div>
                <div className="hp-pillar-divider"></div>
                <div className="hp-pillar-item">
                  <div className="hp-pillar-icon">👥</div>
                  <div className="hp-pillar-text">
                    <strong>Expert</strong>
                    <span>Team</span>
                  </div>
                </div>
                <div className="hp-pillar-divider"></div>
                <div className="hp-pillar-item">
                  <div className="hp-pillar-icon">🛡️</div>
                  <div className="hp-pillar-text">
                    <strong>Long-Lasting</strong>
                    <span>Protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Studio Car Visual */}
            <div className="hp-hero-right">
              <div className="hp-hero-visual-card">
                {/* Neon MATEEN AUTO Wall Sign */}
                <div className="hp-neon-wall-sign">
                  <div className="hp-neon-car-icon">🏎️</div>
                  <div className="hp-neon-brand">MATEEN AUTO</div>
                </div>

                {/* Vertical Tagline Pill */}
                <div className="hp-vertical-tagline">
                  <span>DETAIL</span> • <span>PROTECT</span> • <span>ENHANCE</span> • <span>PRESERVE</span>
                </div>

                {/* Hero Car Showcase Image */}
                <div className="hp-hero-car-wrap">
                  <img
                    src={imgPPF}
                    alt="Mateen Auto Studio Detailing"
                    className="hp-hero-car-img"
                  />
                  <div className="hp-hero-car-overlay"></div>
                </div>

                {/* Studio Ambient Neon Bars */}
                <div className="hp-neon-bar top-neon"></div>
                <div className="hp-neon-bar bottom-neon"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CARS & BRANDS WE SERVICE (COMPACT SLIDER BOX) ── */}
      <section className="hp-brands-section">
        <div className="hp-container">
          <div className="hp-brands-box">
            <div className="hp-brands-box-header">
              <span className="hp-brands-box-dot"></span>
              <h3 className="hp-brands-box-title">
                Cars &amp; <span className="hp-grad-text">Brands We Service</span>
              </h3>
              <div className="hp-brands-box-line"></div>
            </div>

            <div className="hp-brands-slider-wrap">
              <div className="hp-brands-track">
                {/* Loop 1 */}
                <div className="hp-brands-track-inner">
                  {/* Mercedes-Benz */}
                  <div className="hp-logo-item" title="Mercedes-Benz">
                    <svg viewBox="0 0 100 100" width="46" height="46" fill="none">
                      <circle cx="50" cy="50" r="46" stroke="url(#hp-merc-grad)" strokeWidth="5" />
                      <circle cx="50" cy="50" r="41" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <path d="M50 8 L55 46 L86 68 L50 54 L14 68 L45 46 Z" fill="url(#hp-merc-star)" />
                      <defs>
                        <linearGradient id="hp-merc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#94a3b8" />
                          <stop offset="100%" stopColor="#cbd5e1" />
                        </linearGradient>
                        <linearGradient id="hp-merc-star" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* BMW */}
                  <div className="hp-logo-item" title="BMW">
                    <svg viewBox="0 0 100 100" width="46" height="46">
                      <circle cx="50" cy="50" r="47" fill="#000000" stroke="#cbd5e1" strokeWidth="3" />
                      <circle cx="50" cy="50" r="32" fill="#000000" stroke="#ffffff" strokeWidth="2" />
                      <path d="M50 18 A32 32 0 0 1 82 50 L50 50 Z" fill="#0066b1" />
                      <path d="M50 82 A32 32 0 0 1 18 50 L50 50 Z" fill="#0066b1" />
                      <path d="M50 18 A32 32 0 0 0 18 50 L50 50 Z" fill="#ffffff" />
                      <path d="M50 82 A32 32 0 0 0 82 50 L50 50 Z" fill="#ffffff" />
                      <text x="28" y="24" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif">B</text>
                      <text x="45" y="15" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif">M</text>
                      <text x="64" y="24" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif">W</text>
                    </svg>
                  </div>

                  {/* Audi */}
                  <div className="hp-logo-item" title="Audi">
                    <svg viewBox="0 0 160 70" width="76" height="35" fill="none">
                      <circle cx="32" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <circle cx="58" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <circle cx="84" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <circle cx="110" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <defs>
                        <linearGradient id="hp-audi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Porsche */}
                  <div className="hp-logo-item" title="Porsche">
                    <svg viewBox="0 0 90 105" width="40" height="46">
                      <path d="M12 10 Q45 5 78 10 L74 65 Q45 100 45 100 Q45 100 16 65 Z" fill="#d4af37" stroke="#fbbf24" strokeWidth="2.5" />
                      <path d="M18 16 Q45 12 72 16 L69 62 Q45 92 45 92 Q45 92 21 62 Z" fill="#111111" />
                      <path d="M22 28 L45 28 L45 55 L22 45 Z" fill="#dc2626" />
                      <path d="M45 28 L68 28 L68 45 L45 55 Z" fill="#dc2626" />
                      <path d="M35 34 Q45 30 55 34 L53 58 Q45 74 45 74 Q45 74 37 58 Z" fill="#d4af37" stroke="#111" strokeWidth="1" />
                      <text x="45" y="24" fill="#fbbf24" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">PORSCHE</text>
                    </svg>
                  </div>

                  {/* Range Rover */}
                  <div className="hp-logo-item" title="Land Rover / Range Rover">
                    <svg viewBox="0 0 150 80" width="70" height="38">
                      <ellipse cx="75" cy="40" rx="70" ry="35" fill="#005a2b" stroke="#e2e8f0" strokeWidth="3.5" />
                      <ellipse cx="75" cy="40" rx="63" ry="29" fill="none" stroke="#22c55e" strokeWidth="1" />
                      <text x="75" y="36" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1.5">LAND</text>
                      <text x="75" y="54" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1.5">ROVER</text>
                    </svg>
                  </div>

                  {/* Lexus */}
                  <div className="hp-logo-item" title="Lexus">
                    <svg viewBox="0 0 130 85" width="62" height="42" fill="none">
                      <ellipse cx="65" cy="42" rx="58" ry="36" stroke="url(#hp-lex-grad)" strokeWidth="6" />
                      <path d="M36 24 L78 24 L52 56 L94 56" stroke="url(#hp-lex-grad)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="hp-lex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="60%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Ferrari */}
                  <div className="hp-logo-item" title="Ferrari">
                    <svg viewBox="0 0 80 110" width="36" height="48">
                      <path d="M8 8 L72 8 L72 70 Q40 105 40 105 Q40 105 8 70 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                      <rect x="8" y="8" width="21" height="9" fill="#16a34a" />
                      <rect x="29" y="8" width="22" height="9" fill="#ffffff" />
                      <rect x="51" y="8" width="21" height="9" fill="#dc2626" />
                      <path d="M44 30 Q47 26 50 28 Q48 34 44 38 Q48 46 54 48 Q49 52 44 48 Q42 58 48 72 L42 70 Q38 56 36 48 Q32 50 28 46 Q35 42 38 34 Q39 30 44 30 Z" fill="#111111" />
                      <text x="40" y="86" fill="#111111" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic">S F</text>
                    </svg>
                  </div>

                  {/* Bentley */}
                  <div className="hp-logo-item" title="Bentley">
                    <svg viewBox="0 0 160 80" width="75" height="38">
                      <path d="M70 42 C40 20 10 28 5 40 C20 48 50 48 70 42 Z" fill="url(#hp-bentley-wings)" />
                      <path d="M90 42 C120 20 150 28 155 40 C140 48 110 48 90 42 Z" fill="url(#hp-bentley-wings)" />
                      <ellipse cx="80" cy="42" rx="18" ry="18" fill="#111111" stroke="#cbd5e1" strokeWidth="3" />
                      <text x="80" y="49" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="Georgia, serif">B</text>
                      <defs>
                        <linearGradient id="hp-bentley-wings" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Toyota */}
                  <div className="hp-logo-item" title="Toyota">
                    <svg viewBox="0 0 130 90" width="60" height="42" fill="none">
                      <ellipse cx="65" cy="45" rx="60" ry="38" stroke="url(#hp-toyota-grad)" strokeWidth="6" />
                      <ellipse cx="65" cy="36" rx="28" ry="16" stroke="url(#hp-toyota-grad)" strokeWidth="6" />
                      <ellipse cx="65" cy="46" rx="14" ry="34" stroke="url(#hp-toyota-grad)" strokeWidth="6" />
                      <defs>
                        <linearGradient id="hp-toyota-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#dc2626" />
                          <stop offset="100%" stopColor="#991b1b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Honda */}
                  <div className="hp-logo-item" title="Honda">
                    <svg viewBox="0 0 110 95" width="50" height="44" fill="none">
                      <rect x="10" y="10" width="90" height="75" rx="16" stroke="url(#hp-honda-grad)" strokeWidth="5.5" />
                      <path d="M28 24 L36 72 L46 72 L47 48 L63 48 L64 72 L74 72 L82 24 L69 24 L66 40 L44 40 L41 24 Z" fill="url(#hp-honda-grad)" />
                      <defs>
                        <linearGradient id="hp-honda-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#e2e8f0" />
                          <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* MG */}
                  <div className="hp-logo-item" title="MG Motors">
                    <svg viewBox="0 0 100 100" width="46" height="46">
                      <polygon points="30,8 70,8 92,30 92,70 70,92 30,92 8,70 8,30" fill="#991b1b" stroke="#facc15" strokeWidth="4" />
                      <polygon points="32,14 68,14 86,32 86,68 68,86 32,86 14,68 14,32" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="50" y="62" fill="#ffffff" fontSize="32" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">MG</text>
                    </svg>
                  </div>
                </div>

                {/* Loop 2 (Duplicate for continuous marquee) */}
                <div className="hp-brands-track-inner" aria-hidden="true">
                  <div className="hp-logo-item" title="Mercedes-Benz">
                    <svg viewBox="0 0 100 100" width="46" height="46" fill="none">
                      <circle cx="50" cy="50" r="46" stroke="url(#hp-merc-grad)" strokeWidth="5" />
                      <path d="M50 8 L55 46 L86 68 L50 54 L14 68 L45 46 Z" fill="url(#hp-merc-star)" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="BMW">
                    <svg viewBox="0 0 100 100" width="46" height="46">
                      <circle cx="50" cy="50" r="47" fill="#000000" stroke="#cbd5e1" strokeWidth="3" />
                      <circle cx="50" cy="50" r="32" fill="#000000" stroke="#ffffff" strokeWidth="2" />
                      <path d="M50 18 A32 32 0 0 1 82 50 L50 50 Z" fill="#0066b1" />
                      <path d="M50 82 A32 32 0 0 1 18 50 L50 50 Z" fill="#0066b1" />
                      <path d="M50 18 A32 32 0 0 0 18 50 L50 50 Z" fill="#ffffff" />
                      <path d="M50 82 A32 32 0 0 0 82 50 L50 50 Z" fill="#ffffff" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Audi">
                    <svg viewBox="0 0 160 70" width="76" height="35" fill="none">
                      <circle cx="32" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <circle cx="58" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <circle cx="84" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                      <circle cx="110" cy="35" r="22" stroke="url(#hp-audi-grad)" strokeWidth="5.5" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Porsche">
                    <svg viewBox="0 0 90 105" width="40" height="46">
                      <path d="M12 10 Q45 5 78 10 L74 65 Q45 100 45 100 Q45 100 16 65 Z" fill="#d4af37" stroke="#fbbf24" strokeWidth="2.5" />
                      <path d="M18 16 Q45 12 72 16 L69 62 Q45 92 45 92 Q45 92 21 62 Z" fill="#111111" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Range Rover">
                    <svg viewBox="0 0 150 80" width="70" height="38">
                      <ellipse cx="75" cy="40" rx="70" ry="35" fill="#005a2b" stroke="#e2e8f0" strokeWidth="3.5" />
                      <text x="75" y="36" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1.5">LAND</text>
                      <text x="75" y="54" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1.5">ROVER</text>
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Lexus">
                    <svg viewBox="0 0 130 85" width="62" height="42" fill="none">
                      <ellipse cx="65" cy="42" rx="58" ry="36" stroke="url(#hp-lex-grad)" strokeWidth="6" />
                      <path d="M36 24 L78 24 L52 56 L94 56" stroke="url(#hp-lex-grad)" strokeWidth="6.5" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Ferrari">
                    <svg viewBox="0 0 80 110" width="36" height="48">
                      <path d="M8 8 L72 8 L72 70 Q40 105 40 105 Q40 105 8 70 Z" fill="#facc15" />
                      <text x="40" y="86" fill="#111111" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">S F</text>
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Bentley">
                    <svg viewBox="0 0 160 80" width="75" height="38">
                      <path d="M70 42 C40 20 10 28 5 40 C20 48 50 48 70 42 Z" fill="url(#hp-bentley-wings)" />
                      <path d="M90 42 C120 20 150 28 155 40 C140 48 110 48 90 42 Z" fill="url(#hp-bentley-wings)" />
                      <ellipse cx="80" cy="42" rx="18" ry="18" fill="#111111" stroke="#cbd5e1" strokeWidth="3" />
                      <text x="80" y="49" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="Georgia, serif">B</text>
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Toyota">
                    <svg viewBox="0 0 130 90" width="60" height="42" fill="none">
                      <ellipse cx="65" cy="45" rx="60" ry="38" stroke="url(#hp-toyota-grad)" strokeWidth="6" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="Honda">
                    <svg viewBox="0 0 110 95" width="50" height="44" fill="none">
                      <rect x="10" y="10" width="90" height="75" rx="16" stroke="url(#hp-honda-grad)" strokeWidth="5.5" />
                      <path d="M28 24 L36 72 L46 72 L47 48 L63 48 L64 72 L74 72 L82 24 L69 24 L66 40 L44 40 L41 24 Z" fill="url(#hp-honda-grad)" />
                    </svg>
                  </div>
                  <div className="hp-logo-item" title="MG Motors">
                    <svg viewBox="0 0 100 100" width="46" height="46">
                      <polygon points="30,8 70,8 92,30 92,70 70,92 30,92 8,70 8,30" fill="#991b1b" stroke="#facc15" strokeWidth="4" />
                      <text x="50" y="62" fill="#ffffff" fontSize="32" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">MG</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. BEFORE & AFTER TRANSFORMATION (PLACED ABOVE SERVICES) ── */}
      <section className="hp-transform-section">
        <div className="hp-container">
          <div className="hp-transform-layout">

            {/* Left Column: High-Level Content & Transformation Highlights */}
            <div className="hp-transform-left">
              <div className="hp-section-tag">— REAL VEHICLE TRANSFORMATIONS</div>
              <h2 className="hp-section-title">
                BEFORE <span className="hp-grad-text">&amp; AFTER</span>
              </h2>
              <p className="hp-transform-desc">
                Witness the dramatic shift from heavy road grime, dried mud, and paint oxidation to flawless 9H nano ceramic mirror gloss.
              </p>

              {/* Transformation Highlights ("Level Ka Content") */}
              <div className="hp-transform-highlights-box">
                <div className="hp-hl-header">
                  <span className="hp-hl-dot"></span>
                  <span className="hp-hl-title">{currentTransform.title}</span>
                </div>
                <div className="hp-hl-grid">
                  {currentTransform.highlights.map((hl, i) => (
                    <div key={i} className="hp-hl-card">
                      <div className="hp-hl-icon">{hl.icon}</div>
                      <div className="hp-hl-info">
                        <strong className="hp-hl-card-title">{hl.title}</strong>
                        <span className="hp-hl-card-desc">{hl.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="hp-transform-action-row">
                <button
                  type="button"
                  className="hp-btn-primary hp-btn-transform-book"
                  onClick={() => handleBook(currentTransform.title)}
                >
                  <span>Book This Transformation</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="hp-transform-hint">
                  <span>↔ Drag cursor across image</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Mouse Slider Box */}
            <div className="hp-transform-right">
              <div className="hp-compare-wrapper">
                <div
                  className="hp-compare-box"
                  onMouseMove={handleSliderMove}
                  onTouchMove={handleSliderMove}
                >
                  {/* Flagship BMW Studio Showcase */}
                  <div className="hp-showcase-img-wrap">
                    <img
                      src={currentTransform.img}
                      alt={currentTransform.car}
                      className="hp-showcase-img"
                    />
                    {/* Interactive Divider Line tracking cursor */}
                    <div
                      className="hp-compare-handle"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="hp-handle-line"></div>
                      <div className="hp-handle-button">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15 19l-7-7 7-7v14z" />
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 5l7 7-7 7V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner Tags */}
                  <span className="hp-compare-tag hp-tag-before">
                    <span className="hp-tag-dot red"></span> BEFORE
                  </span>
                  <span className="hp-compare-tag hp-tag-after">
                    <span className="hp-tag-dot green"></span> AFTER
                  </span>

                  {/* Studio Neon Logo Accent */}
                  <div className="hp-compare-neon-badge">
                    <span>MATEEN AUTO STUDIO</span>
                  </div>
                </div>

                {/* Dynamic Status Pill underneath showing real-time cursor condition */}
                <div className="hp-compare-live-status">
                  <div className={`hp-status-indicator ${sliderPos < 50 ? 'is-before' : 'is-after'}`}>
                    <span className="hp-status-dot"></span>
                    <span className="hp-status-text">
                      {sliderPos < 50
                        ? `Viewing BEFORE State (${sliderPos}%) — Heavy Road Mud, Dried Grime & Unwashed Finish`
                        : `Viewing AFTER State (${sliderPos}%) — 9H Ceramic Mirror Gloss & Showroom Finish`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. COMPLETE SERVICES GRID (PLACED BELOW BEFORE & AFTER) ── */}
      <section className="hp-services-section">
        <div className="hp-container">
          <div className="hp-section-head-row">
            <div>
              <div className="hp-section-tag">— OUR SERVICES</div>
              <h2 className="hp-section-title">
                Complete Care for <span className="hp-grad-text">Every Journey</span>
              </h2>
            </div>
            <Link to="/services" className="hp-view-all-link">
              View All Services →
            </Link>
          </div>

          {/* 3-Column Rich Services Grid */}
          <div className="hp-services-grid-rich">
            {visibleServices.map((svc, idx) => {
              const isLast = idx === visibleServices.length - 1;
              const isOddTotal = visibleServices.length % 3 !== 0;
              const isCenterLast = isLast && isOddTotal;
              return (
                <div
                  key={svc.id}
                  className={`hp-svc-card-rich${isCenterLast ? ' hp-card-center-last' : ''}`}
                >
                  {/* Service Image */}
                  <div className="hp-card-img-wrap">
                    <img src={svc.img} alt={svc.name} className="hp-card-img" loading="lazy" />
                    <div className="hp-card-img-overlay"></div>
                    <span className="hp-card-img-tag">{svc.tag}</span>
                  </div>

                  {/* Card Body */}
                  <div className="hp-card-body">
                    <div className="hp-card-name-row">
                      <span className="hp-card-icon">{svc.icon}</span>
                      <h3 className="hp-card-name">{svc.name}</h3>
                    </div>

                    <p className="hp-card-desc-rich">{svc.desc}</p>

                    {/* Features List */}
                    <ul className="hp-card-features-rich">
                      {svc.features.map((feat, i) => (
                        <li key={i} className="hp-feat-item">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <div className="hp-card-actions-rich">
                      <button
                        type="button"
                        className="hp-btn-book-service"
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

          {/* Show More / Show Less Button */}
          {!showAllServices && (
            <div className="hp-show-more-wrap">
              <button
                type="button"
                className="hp-show-more-btn"
                onClick={() => setShowAllServices(true)}
              >
                <span>Show More Services</span>
                <span className="hp-show-more-count">+{hiddenCount} more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          )}

          {showAllServices && (
            <div className="hp-show-more-wrap">
              <button
                type="button"
                className="hp-show-more-btn hp-show-less-btn"
                onClick={() => {
                  setShowAllServices(false);
                  const el = document.querySelector('.hp-services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
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

      {/* ── 5. TESTIMONIALS (TRUSTED BY CAR OWNERS) ─ */}
      <section className="hp-reviews-section">
        <div className="hp-container">
          <div className="hp-section-head-row">
            <div>
              <div className="hp-section-tag">— TESTIMONIALS</div>
              <h2 className="hp-section-title">
                What Our <span className="hp-grad-text">Clients Say</span>
              </h2>
            </div>
            <Link to="/about" className="hp-view-all-link">
              View All Reviews →
            </Link>
          </div>

          <div className="hp-reviews-grid">

            {/* Review 1 - Rehan Tariq */}
            <div className="hp-review-card">
              <div className="hp-review-quote-icon">“</div>
              <p className="hp-review-text">
                Amazing service! Got ceramic coating and paint correction done. My car looks absolutely brand new with incredible deep gloss. Highly recommended!
              </p>
              <div className="hp-review-stars">★★★★★</div>
              <div className="hp-review-author">
                <div className="hp-author-avatar">RT</div>
                <div className="hp-author-info">
                  <div className="hp-author-name">Rehan Tariq</div>
                  <div className="hp-author-badge">Verified Client</div>
                </div>
              </div>
            </div>

            {/* Review 2 - Yasir Shami */}
            <div className="hp-review-card">
              <div className="hp-review-quote-icon">“</div>
              <p className="hp-review-text">
                Professional team, outstanding craftsmanship, and genuine attention to detail. Mr. Nadeem and his crew at Mateen Auto are true masters of car restoration.
              </p>
              <div className="hp-review-stars">★★★★★</div>
              <div className="hp-review-author">
                <div className="hp-author-avatar hp-avatar-purple">YS</div>
                <div className="hp-author-info">
                  <div className="hp-author-name">Yasir Shami</div>
                  <div className="hp-author-badge">Verified Client</div>
                </div>
              </div>
            </div>

            {/* Review 3 - Baba OP (Asad) */}
            <div className="hp-review-card">
              <div className="hp-review-quote-icon">“</div>
              <p className="hp-review-text">
                Best car detailing and paint restoration service in town. Got full denting, scratch repair and 3M polish — 100% factory finish. Highly satisfied!
              </p>
              <div className="hp-review-stars">★★★★★</div>
              <div className="hp-review-author">
                <div className="hp-author-avatar hp-avatar-blue">BO</div>
                <div className="hp-author-info">
                  <div className="hp-author-name">Baba OP (Asad)</div>
                  <div className="hp-author-badge">Verified Client</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM CTA (READY TO GIVE YOUR CAR CARE?) ── */}
      <section className="hp-cta-section">
        <div className="hp-container">
          <div className="hp-cta-card">
            <div className="hp-cta-content">
              <div className="hp-cta-tag">LET'S BRING BACK THE SHINE</div>
              <h2 className="hp-cta-title">
                READY TO GIVE YOUR CAR<br />
                THE CARE IT DESERVES?
              </h2>
              <p className="hp-cta-desc">
                Book your service today and experience the Mateen Auto difference.
              </p>
            </div>

            <div className="hp-cta-actions">
              <Link to="/contact" className="hp-btn-primary hp-btn-cta">
                <span>Get a Quote</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20want%20to%20get%20a%20quote%20for%20car%20detailing."
                target="_blank"
                rel="noreferrer"
                className="hp-btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
