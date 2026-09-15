import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoImg from '../assets/logo.png';
import instaHeroBg from '../assets/insta-hero-bg.jpg';
import avatarRehan from '../assets/avatar_rehan_tariq.jpg';
import avatarYasir from '../assets/avatar_yasir_shami.jpg';
import avatarBaba from '../assets/avatar_baba_op.jpg';
import '../styles/HomePage.css';
import '../styles/InstagramWorkPage.css';

const INSTAGRAM_URL = 'https://www.instagram.com/mateenautoofficial/';

// ── Service & Transformation Images from assets
import imgHeroStudio   from '../assets/hero_studio_mercedes.jpg';
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

  // Hero image subtle scroll zoom (smoothly zooms in up to ~10% on scroll)
  const [heroScrollZoom, setHeroScrollZoom] = useState(1);

  useEffect(() => {
    const handleHeroScroll = () => {
      const scroll = window.scrollY;
      const zoom = 1 + Math.min(0.10, Math.max(0, (scroll / 400) * 0.10));
      setHeroScrollZoom(zoom);
    };
    window.addEventListener('scroll', handleHeroScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleHeroScroll);
  }, []);

  const currentTransform = {
    id: 'bmw-studio',
    title: 'Studio Paint Restoration & 9H Ceramic Coating',
    car: 'BMW 5-Series M Sport — Deep Obsidian Gloss',
    badge: 'Flagship Studio Showcase',
    beforeImg: imgBmwDirty,
    afterImg: imgBmwClean,
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

      {/* ── 1. CINEMATIC FULL-BLEED HERO SECTION (REFERENCE STYLE) ── */}
      <section className="hp-hero-cinematic-section">
        {/* Full-bleed Studio Mercedes Backdrop with Smooth Scroll Zoom & Seamless Gradient Blend */}
        <div className="hp-hero-backdrop-media">
          <img
            src={imgHeroStudio}
            alt="Mateen Auto Studio Detailing - Mercedes E-Class"
            className="hp-hero-backdrop-img"
            style={{
              transform: `scale(${heroScrollZoom})`
            }}
          />
          <div className="hp-hero-backdrop-overlay"></div>
        </div>

        <div className="hp-container hp-hero-cinematic-content">
          <div className="hp-hero-cinematic-left">
            
            {/* Top Location Pill Badge (Reference Match with Shield & Live Dot) */}
            <div className="hp-hero-badge-cinematic">
              <svg className="hp-badge-shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="hp-badge-dot-live"></span>
              <span className="hp-badge-text-cinematic">
                CHAUBURJI &amp; DHA PHASE 5, LAHORE, PAKISTAN
              </span>
            </div>

            {/* Bold Impactful Headline */}
            <h1 className="hp-hero-title-cinematic">
              MORE THAN DETAILING.<br />
              <span className="hp-grad-animated">SHOWROOM PERFECTION.</span>
            </h1>

            {/* Concise Elite Copy */}
            <p className="hp-hero-desc-cinematic">
              Lahore's flagship automotive studio. Ceramic matrix armour, graphene nano-shields, self-healing TPU PPF wraps, and concours-level mirror gloss for luxury vehicles.
            </p>

            {/* Action Buttons Row (WhatsApp, Build Package, Protection Quiz) */}
            <div className="hp-hero-actions-cinematic">
              <a
                href="https://wa.me/923234500012?text=Hello%20Mateen%20Auto,%20I%20want%20to%20get%20an%20instant%20quote%20for%20detailing."
                target="_blank"
                rel="noreferrer"
                className="hp-btn-cinematic-whatsapp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.879-.443-1.488-.617-2.455-2.12-2.53-2.22-.075-.1-.611-.813-.611-1.55 0-.737.387-1.1.523-1.25.136-.15.297-.188.397-.188.1 0 .2.002.287.006.09.004.21-.034.328.25.122.294.417 1.018.454 1.093.037.075.062.163.012.262-.05.1-.075.163-.15.25-.075.088-.158.196-.226.264-.075.075-.153.156-.066.305.087.15.388.64.832 1.035.571.508 1.053.666 1.203.74.15.075.238.063.325-.038.088-.1.375-.438.475-.588.1-.15.2-.125.338-.075.137.05.875.412 1.025.487.15.075.25.112.288.175.038.063.038.363-.106.768z" />
                </svg>
                <span>INSTANT WHATSAPP QUOTE</span>
              </a>

              <Link to="/contact" className="hp-btn-cinematic-book">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="4" y1="21" x2="4" y2="14"/>
                  <line x1="4" y1="10" x2="4" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12" y2="3"/>
                  <line x1="20" y1="21" x2="20" y2="16"/>
                  <line x1="20" y1="12" x2="20" y2="3"/>
                  <line x1="1" y1="14" x2="7" y2="14"/>
                  <line x1="9" y1="8" x2="15" y2="8"/>
                  <line x1="17" y1="16" x2="23" y2="16"/>
                </svg>
                <span>BUILD YOUR PACKAGE</span>
              </Link>

              <Link to="/services" className="hp-btn-cinematic-quiz">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2l2.4 5.3 5.6.8-4 4.1 1 5.8-5-2.8-5 2.8 1-5.8-4-4.1 5.6-.8z"/>
                </svg>
                <span>FIND YOUR PROTECTION QUIZ</span>
              </Link>
            </div>

            {/* Scroll To Explore Micro Indicator */}
            <div className="hp-hero-scroll-hint">
              <span>SCROLL TO EXPLORE</span>
              <div className="hp-scroll-hint-bar"></div>
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
                  {/* Dual-Layer Real Dynamic Before & After Slider */}
                  <div className="hp-dual-img-wrap">
                    {/* AFTER Image (Clean & Glossy BMW - Base Layer) */}
                    <div className="hp-compare-after">
                      <img
                        src={currentTransform.afterImg}
                        alt="After Detail - Showroom Gloss"
                        className="hp-compare-img"
                      />
                    </div>

                    {/* BEFORE Image (Dirty & Muddy BMW - Clipped dynamically by cursor) */}
                    <div
                      className="hp-compare-before"
                      style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                    >
                      <img
                        src={currentTransform.beforeImg}
                        alt="Before Detail - Heavy Grime"
                        className="hp-compare-img"
                      />
                    </div>

                    {/* Draggable Divider Handle Line */}
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

      {/* ── 5. INSTAGRAM SHOWCASE & WORK HIGHLIGHTS (UNDER SERVICES) ── */}
      <section className="hp-insta-showcase-section">
        <div
          className="hp-insta-backdrop"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(5, 1, 10, 0.85) 0%, rgba(5, 1, 10, 0.65) 45%, rgba(5, 1, 10, 0.92) 100%), url(${instaHeroBg})`
          }}
        >
          <div className="hp-container">
            <div className="iw-cinematic-container">

              {/* Instagram Glyph Camera Icon */}
              <div className="iw-insta-icon-wrap" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>

              {/* Bold Title */}
              <h2 className="iw-cinematic-title">
                INSTAGRAM WORK &amp;<br />
                TRANSFORMATIONS
              </h2>

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

                <Link
                  to="/contact"
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
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS (TRUSTED BY CAR OWNERS) ─ */}
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
                <div className="hp-author-avatar">
                  <img src={avatarRehan} alt="Rehan Tariq" className="hp-author-avatar-img" />
                </div>
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
                <div className="hp-author-avatar">
                  <img src={avatarYasir} alt="Yasir Shami" className="hp-author-avatar-img" />
                </div>
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
                <div className="hp-author-avatar">
                  <img src={avatarBaba} alt="Baba OP (Asad)" className="hp-author-avatar-img" />
                </div>
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
