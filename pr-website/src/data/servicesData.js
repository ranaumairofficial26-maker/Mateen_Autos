import imgScratch from '../assets/svc_scratch.jpg';
import imgDryDenting from '../assets/svc_dry_denting.jpg';
import imgAccident from '../assets/svc_accident.jpg';
import imgPPF from '../assets/svc_ppf.jpg';
import imgDenting from '../assets/svc_denting_painting.jpg';
import imgCoating from '../assets/svc_coating.jpg';
import imgDetailing from '../assets/svc_detailing.jpg';
import imgPolish from '../assets/svc_compound_polish.jpg';
import imgWheelCare from '../assets/svc_wheel_alignment.jpg';

export const SERVICES_DATA = [
  {
    id: 'scratch-repair',
    name: 'Scratch Filling & Repair',
    tagline: 'Preserve Original Factory Paint With Invisible Micro-Leveling',
    tag: 'Signature Specialty',
    icon: '✨',
    category: 'Body & Paint',
    img: imgScratch,
    rating: '5.0 (4,200+ Cars Restored)',
    turnaround: '2 to 3 Days',
    warranty: 'Permanent Repair Guarantee',
    branches: 'Chauburji & DHA Phase 1, Lahore',
    pricingNote: 'Free On-Site & WhatsApp Photo Damage Evaluation',
    shortDesc: 'One of Mateen Auto\'s signature specialties. We repair surface scratches, key marks, and paint damage with precision micro-feathering and scratch-filling techniques — preserving your original factory paint without repainting the entire panel.',
    
    overview: `
      Scratch filling is the hallmark craft that defines Mateen Auto across Lahore and throughout Pakistan. Traditional local workshops often advise customers to repaint an entire door, fender, or bumper for even a small key scratch or bumper scrape. That practice instantly destroys the vehicle\'s original factory paint gauge reading, causes irreversible shade mismatches, and can decrease the vehicle's resale value by hundreds of thousands of rupees.
      
      Under the master guidance of Muhammad Nadeem, Mateen Auto pioneered specialized micro-filling and feather-edge leveling techniques. Utilizing precision clear-coat resins, computerized PPG color matching, and multi-stage micro-abrasive compounding, we isolate only the damaged groove and fill it back to level. The surrounding original factory clear coat remains 100% genuine and untouched.
    `,

    whyChoose: [
      {
        icon: '🛡️',
        title: 'Original Factory Paint 100% Preserved',
        desc: 'No full panel repainting. Your digital paint thickness gauge readings stay factory-spec, preserving maximum car resale market value.'
      },
      {
        icon: '🎨',
        title: 'Computerized Digital Color Formulation',
        desc: 'Exact metallic flake, pearl count, and pigment density matching to guarantee an invisible transition under natural daylight and street lighting.'
      },
      {
        icon: '⚡',
        title: '2 to 3 Days Precision Quality',
        desc: 'Every scratch is carefully layered, infrared-cured, and optical block sanded within 2 to 3 days for a seamless factory-level finish.'
      },
      {
        icon: '💎',
        title: 'Permanent High-Gloss UV Curing',
        desc: 'Our specialized clear-coat fillers bond molecularly to the existing paint and will never wash off, peel, or fade during routine car washing.'
      }
    ],

    problemsSolved: [
      'Vandalism key marks and deep scratches along door panels',
      'Shopping trolley, bike handlebar, and parking lot scrapes',
      'Clear coat micro-grooves and stone chips on bonnet and fenders',
      'Surface paint rubs against walls, pillars, or car bumpers',
      'Bird dropping chemical etching and stubborn acid marks'
    ],

    processStages: [
      {
        step: '01',
        title: 'Diagnostic Assessment & Paint Depth Profiling',
        desc: 'We measure the clear coat thickness using ultrasonic digital gauges and inspect whether the scratch has penetrated the primer layer or remains within the clear coat.',
        points: ['Microscopic scratch depth analysis', 'Paint code verification via VIN tag', 'Contaminant removal & surface degreasing']
      },
      {
        step: '02',
        title: 'Micro-Feathering & Substrate Preparation',
        desc: 'The sharp edges of the scratch are meticulously feathered down using 2500–3000 grit ultra-fine micro-abrasives to eliminate optical refraction shadows.',
        points: ['Feathering groove edges', 'De-waxing and chemical prep wipe', 'Precision perimeter masking']
      },
      {
        step: '03',
        title: 'Pigment Injection & Micro-Resin Infusion',
        desc: 'Matching OEM basecoat pigment and specialized UV-stable acrylic resin are layered into the scratch furrow with fine micro-applicator tips until slightly proud of the surface.',
        points: ['Micro-pipette resin injection', 'Multi-layer progressive infill', 'Controlled infrared (IR) heat curing']
      },
      {
        step: '04',
        title: 'Planar Wet Sanding & Optical Mirror Buffing',
        desc: 'The cured resin is leveled dead flat with the surrounding clear coat using flat backing blocks, followed by 3M rotary machine compounding for an invisible mirror finish.',
        points: ['Dead-flat block wet sanding', '3M dual-action mirror finishing', 'Hydrophobic ceramic sealant application']
      }
    ],

    faqs: [
      {
        q: 'Will the filled scratch wash off during high-pressure car washes?',
        a: 'No, absolutely not. Our filling material is not temporary wax or polish; it is a permanent automotive-grade acrylic clear resin that molecularly cross-links with your vehicle\'s existing paint. It withstands pressure washes, shampoos, and high heat indefinitely.'
      },
      {
        q: 'How does scratch filling protect my car\'s market resale value?',
        a: 'In Pakistan, buyers and inspection services (like PakWheels) use digital paint thickness gauges. Repainted panels measure 250–500+ microns, flagging the car as repainted or accident-involved. Scratch filling keeps the panel at genuine factory 80–120 microns, safeguarding your vehicle\'s market value.'
      },
      {
        q: 'Can every single scratch be completely hidden?',
        a: 'Scratches within the clear coat and color coat can typically be made 90% to 98% invisible to the naked eye. Extremely wide gouges that have torn into the bare sheet metal can still be filled and protected from rust, and our technicians will honestly advise you during initial free inspection.'
      },
      {
        q: 'How long does the scratch repair take at Mateen Auto?',
        a: 'Most scratch filling and micro-leveling jobs take 2 to 3 days depending on the depth and number of damaged panels.'
      }
    ],

    related: ['dry-denting', 'compound-polish', 'car-coating']
  },

  {
    id: 'dry-denting',
    name: 'Dry Denting (PDR)',
    tagline: 'Dent Removal Without Paint or Body Fillers — 100% Genuine',
    tag: 'Paintless PDR Precision',
    icon: '🔨',
    category: 'Body & Paint',
    img: imgDryDenting,
    rating: '5.0 (5,000+ Dents Removed)',
    turnaround: '1 to 3 Days',
    warranty: '100% Original Factory Metal & Paint',
    branches: 'Chauburji & DHA Phase 1, Lahore',
    pricingNote: 'Send photos on WhatsApp for an immediate free estimate',
    shortDesc: 'A non-invasive technique where dents are pushed out from behind the panel using specialized rods and precision tools — without any painting or fillers. Your original factory paint stays 100% intact.',

    overview: `
      Paintless Dry Denting (PDR) is considered the highest form of bodywork art. It restores deformed vehicle sheet metal back to its original factory contours without sanding, applying synthetic body fillers (pootin), or spraying paint.
      
      At Mateen Auto, our master craftsmen bring over 37 years of metalworking mastery, enhanced with modern PDR techniques learned from Dubai and the USA. Using specialized LED line boards and surgical-grade spring steel rods, we read the microscopic reflection of light across the panel and massage the metal back into its exact factory position with zero paint disruption.
    `,

    whyChoose: [
      {
        icon: '💎',
        title: 'Zero Paint & Zero Body Fillers',
        desc: 'No bondo, no putty, and no spray guns. The original factory paint remains completely intact without any chemical or physical degradation.'
      },
      {
        icon: '📐',
        title: 'Body Line & Sharp Crease Restoration',
        desc: 'Where ordinary workshops say "this cannot be dry dented", our master craftsmen successfully pop out dents along sharp styling body lines.'
      },
      {
        icon: '⏱️',
        title: 'Fast Turnaround in 1 to 3 Days',
        desc: 'Depending on the depth, location, and number of dents, dry denting is meticulously completed within 1 to 3 days with zero paint disturbance.'
      },
      {
        icon: '💵',
        title: 'Retains 100% Total Genuine Resale Value',
        desc: 'Car dealers and inspectors cannot detect any bodywork because the panel remains original factory sheet metal and paint.'
      }
    ],

    problemsSolved: [
      'Parking lot door dings from adjacent car doors',
      'Motorcycle handlebar and bumper impact dents',
      'Hail damage and falling fruit / object depressions',
      'Bonnet pressure dents caused by pressing down to close',
      'Wheel arch and quarter panel curved surface depressions'
    ],

    processStages: [
      {
        step: '01',
        title: 'LED Reflection Line Board Inspection',
        desc: 'Specialized high-contrast LED optical line boards project parallel lines onto the panel. Distortions in the lines reveal the exact depth, apex, and boundaries of the dent.',
        points: ['Optical reflection mapping', 'Access point identification', 'Clear coat elasticity assessment']
      },
      {
        step: '02',
        title: 'Internal Cavity Access & Tool Insertion',
        desc: 'Using existing access points (window channels, inner door cavities, or tail light wells), custom spring steel PDR rods are positioned behind the dent.',
        points: ['Zero unnecessary drilling', 'Precision lever pivot positioning', 'Interior trim protection']
      },
      {
        step: '03',
        title: 'Micro-Push Metal Manipulation',
        desc: 'The technician uses controlled micro-pushes from behind while tapping down tension crowns on the outside with specialized Teflon knockdowns.',
        points: ['Simultaneous push-and-tap technique', 'Relieving metal stress points', 'Progressive contour reshaping']
      },
      {
        step: '04',
        title: 'Surface Micro-Leveling & High-Gloss Polish',
        desc: 'The panel is re-scanned under parallel lighting to ensure 100% straight lines, followed by a light machine polish to eliminate any micro-friction marks.',
        points: ['Cross-angle line board verification', '3M optical finish polish', 'Final inspection handover']
      }
    ],

    faqs: [
      {
        q: 'Will the paint crack or peel during dry denting?',
        a: 'Modern automotive factory paints are highly elastic and flexible. Our craftsmen carefully heat the panel if necessary to soften the clearcoat before massaging the metal, ensuring the paint does not crack.'
      },
      {
        q: 'Can dry denting fix dents on sharp body crease lines?',
        a: 'Yes. While many local denters refuse body line dents, Mateen Auto specializes in complex body-line PDR using high-carbon tipped rods and specialized glue-pulling lifters.'
      },
      {
        q: 'What if there is no rear access behind the panel?',
        a: 'When internal access is blocked (such as double-walled roof rails or boxed sills), we utilize professional German glue-pulling systems from the front side without scratching or lifting the paint.'
      },
      {
        q: 'How much does dry denting cost compared to repainting?',
        a: 'Dry denting is typically significantly more economical than repainting an entire panel, while delivering far superior results by preserving your genuine factory finish.'
      }
    ],

    related: ['scratch-repair', 'accident-repair', 'ppf']
  },

  {
    id: 'accident-repair',
    name: 'Car Accident Repair',
    tagline: 'Frame Alignment, Chassis Rebuilding & Factory Safety Restoration',
    tag: 'Heavy Collision Specialists',
    icon: '🚗',
    category: 'Body & Paint',
    img: imgAccident,
    rating: '4.9 (1,800+ Vehicles Restored)',
    turnaround: '12 to 15 Days',
    warranty: 'Structural Integrity & Alignment Guarantee',
    branches: 'Chauburji Master Facility & DHA Center',
    pricingNote: 'Detailed insurance & private itemized repair estimates',
    shortDesc: 'Complete restoration of collision-damaged vehicles — from crumpled panels and broken bumpers to frame misalignment and structural damage. We bring your car back to its original factory safety standards.',

    overview: `
      An accident is stressful, but repairing the vehicle to factory structural specifications requires deep mechanical engineering knowledge, precision hydraulic pulling equipment, and uncompromised craftsmanship. A poorly repaired collision vehicle suffers from chronic steering pulls, uneven tire wear, panel gaps that let water leak in, and catastrophic failure in future impacts.
      
      At Mateen Auto, our collision restoration center is equipped with heavy-duty laser frame alignment benches, hydraulic pulling towers, computer measurement systems, and factory-specification spot welding equipment. We rebuild your vehicle from the inner unibody skeleton outward to ensure total occupant safety and millimeter-accurate panel alignments.
    `,

    whyChoose: [
      {
        icon: '📐',
        title: 'Laser-Guided Chassis & Unibody Alignment',
        desc: 'Hydraulic pulling towers and computerized measurement systems pull chassis rails and aprons back to original manufacturer tolerances.'
      },
      {
        icon: '🛡️',
        title: 'Factory Safety Spec & Crumple Zone Integrity',
        desc: 'We adhere strictly to OEM crumple zone standards so your vehicle provides full crash protection in the future.'
      },
      {
        icon: '🔍',
        title: 'Flawless Factory-Spec Panel Gaps',
        desc: 'Bonnet, headlights, bumpers, and doors align with exact uniform factory millimeter margins — zero uneven overhangs.'
      },
      {
        icon: '📑',
        title: 'Insurance Claim & Survey Assistance',
        desc: 'We facilitate vehicle insurance surveys, providing comprehensive damage reports, photo documentation, and itemized billing.'
      }
    ],

    problemsSolved: [
      'Frontal crashes with bent chassis legs, aprons, and radiator supports',
      'Side t-bone impacts requiring door pillars (A/B/C pillar) reconstruction',
      'Rear-end collision trunk floor, quarter panel, and bumper damage',
      'Suspension mounting point shift and steering rack realignment',
      'Broken fiberglass, ABS plastic bumpers, and headlight bracket reconstruction'
    ],

    processStages: [
      {
        step: '01',
        title: 'Complete Teardown & 3D Structural Diagnosis',
        desc: 'Damaged outer panels, cooling systems, and trim are methodically dismantled to inspect hidden structural frame members and unibody distortion.',
        points: ['Mechanical & electrical harness disconnect', 'Laser chassis datum point measurement', 'Comprehensive damage estimate preparation']
      },
      {
        step: '02',
        title: 'Hydraulic Frame Pulling & Laser Realignment',
        desc: 'The car is locked onto our heavy-duty pulling bench. Multi-directional hydraulic vector pulling reverses the collision forces until datum points match OEM specs.',
        points: ['Multi-angle vector hydraulic pulling', 'Chassis leg & firewall straightening', 'Suspension geometry calibration']
      },
      {
        step: '03',
        title: 'Panel Replacement, Fitment & Factory Spot Welding',
        desc: 'OEM or high-grade replacement sheet metal panels are trial-fitted, checked for uniform gaps, and fused using inverter spot welders that mimic factory robot welds.',
        points: ['Dry trial assembly of all panels', 'Inverter resistance spot welding', 'Cavity wax rust-proofing treatment']
      },
      {
        step: '04',
        title: '2K Oven-Bake Painting & Final Road Testing',
        desc: 'Panels are prepped and sprayed in our dust-free heated booth, followed by mechanical reassembly, fluid checks, 3D wheel alignment, and dynamic road testing.',
        points: ['PPG 2K polyurethane oven baking', '3D computerized wheel alignment', 'Multi-point safety & road test certification']
      }
    ],

    faqs: [
      {
        q: 'Will my car drive straight on the highway after a heavy accident?',
        a: 'Yes, 100%. Because we measure and align the chassis on laser pulling benches before reassembling the suspension, your car will maintain high-speed highway stability without pulling to one side or causing uneven tire wear.'
      },
      {
        q: 'Can you help with my comprehensive car insurance claim?',
        a: 'Yes. We frequently work with leading insurance companies in Pakistan (EFU, Adamjee, Jubilee, TPL, etc.). We assist with surveyor inspections, write detailed estimates, and streamline approvals.'
      },
      {
        q: 'Do you use genuine OEM parts for accident rebuilds?',
        a: 'Yes, we source authentic OEM parts (fenders, bumpers, headlights, radiators, airbags) or top-grade certified imports based on customer requirements and budget.'
      },
      {
        q: 'How long does a full accident repair take?',
        a: 'Accident repairs, including unibody frame laser realignment, panel replacement, and 2K heated oven painting, typically take 12 to 15 days to ensure uncompromised structural safety and a flawless factory finish.'
      }
    ],

    related: ['denting-painting', 'wheel-balancing-alignment', 'ppf']
  },

  {
    id: 'ppf',
    name: 'PPF (Paint Protection Film)',
    tagline: 'Self-Healing 8.5 Mil TPU Armor Against Scratches & Road Hazards',
    tag: 'Ultra-Gloss TPU Armor',
    icon: '🛡️',
    category: 'Protection',
    img: imgPPF,
    rating: '5.0 (1,200+ Vehicles Protected)',
    turnaround: '1 to 2 Days',
    warranty: '5 to 10-Year Nationwide Warranty',
    branches: 'Climate-Controlled Cleanrooms at DHA & Chauburji',
    pricingNote: 'Custom packages: Front Bumper, Full Front, or Complete Body',
    shortDesc: 'A premium ultra-clear TPU film applied over your car\'s paint to act as an invisible armour. It absorbs stone chips, deep scratches, bird droppings, UV rays, and acid rain — keeping your original paint factory-fresh.',

    overview: `
      In Pakistan's harsh driving conditions — flying gravel on motorways, aggressive rickshaw scratches in city traffic, bird droppings, and intense UV sun degradation — modern water-based automotive paints deteriorate rapidly.
      
      Mateen Auto offers cutting-edge 8.5 Mil Thermoplastic Polyurethane (TPU) Paint Protection Film (PPF). Engineered with an elastomeric self-healing topcoat, microscopic scratches and swirl marks disappear automatically when exposed to ambient heat or warm sunlight. Applied inside our dust-controlled cleanrooms with wrapped edges, our PPF is virtually undetectable while providing unbreakable physical armor.
    `,

    whyChoose: [
      {
        icon: '✨',
        title: 'Instant Heat-Activated Self-Healing',
        desc: 'Light scratches, brush marks, and wash swirls automatically heal and vanish when the vehicle is parked in the sun or rinsed with warm water.'
      },
      {
        icon: '🛡️',
        title: 'Highway Stone Chip & Gravel Defense',
        desc: 'The thick 8.5 mil elastic TPU layer absorbs the kinetic energy of high-speed flying stones, leaving your factory paint untouched underneath.'
      },
      {
        icon: '🔍',
        title: 'Wrapped Edges for Invisible Installation',
        desc: 'We tuck and wrap all film edges around door lips, bonnet edges, and headlights so there are no ugly visible cut lines or dirt accumulation.'
      },
      {
        icon: '☀️',
        title: 'Anti-Yellowing & 10-Year UV Stability',
        desc: 'Optical-grade aliphatic TPU resists yellowing, oxidation, and clearcoat degradation, backed by our 5 to 10-year warranty.'
      }
    ],

    problemsSolved: [
      'High-speed motorway gravel pitting and front bumper stone chips',
      'Key scratches and tight-parking brush marks on doors',
      'Bird droppings and bug splatter acid etching',
      'Swirl marks caused by careless local car wash boys',
      'Sun fading, clearcoat peeling, and paint oxidation'
    ],

    processStages: [
      {
        step: '01',
        title: 'Surgical Decontamination & Multi-Stage Paint Correction',
        desc: 'The vehicle undergoes snow foam washing, iron fallout decontamination, and a multi-stage 3M compound polish to remove all existing swirls before sealing.',
        points: ['pH-neutral multi-bucket decontamination', 'Clay bar tar & fallout removal', 'Swirl-free optical paint correction']
      },
      {
        step: '02',
        title: 'Precision Software Pre-Cutting & Cleanroom Prep',
        desc: 'Film templates are pre-modeled or precision-measured to allow extra margin for edge wrapping, eliminating blade contact on your vehicle\'s paint.',
        points: ['Dust-evacuated climate-controlled bay', 'Anti-static panel preparation', 'Specialized slip solution formulation']
      },
      {
        step: '03',
        title: 'Wet Application & Edge-Wrapping Technique',
        desc: 'Our certified film masters position the TPU film with microscopic precision, squeegeeing out all moisture and tucking edges into door crevices and panel gaps.',
        points: ['Zero stretch distortion techniques', 'Deep edge wrapping around all panel lips', 'Bubble & moisture vacuum squeegee extraction']
      },
      {
        step: '04',
        title: 'Infrared Edge Curing & Hydrophobic Topcoat Seal',
        desc: 'Edges are heat-tacked with digital temperature guns to lock adhesive down, followed by a dedicated ceramic booster coat over the film for maximum water beading.',
        points: ['IR heat gun edge activation', 'PPF ceramic booster sealant applied', '12-hour curing & final quality signoff']
      }
    ],

    faqs: [
      {
        q: 'Can PPF be removed in the future without damaging the paint?',
        a: 'Yes, 100%. Our premium TPU films use semi-permanent acrylic adhesives designed to remove cleanly without leaving residue or pulling factory paint, even after 5 to 7 years.'
      },
      {
        q: 'What is the difference between Ceramic Coating and PPF?',
        a: 'Ceramic coating is a liquid nano-layer that provides high gloss, chemical resistance, and ease of cleaning, but it cannot stop physical stone chips. PPF is a thick physical barrier (8.5 mil) that stops stones, keys, and physical abrasions.'
      },
      {
        q: 'How does the self-healing feature actually work?',
        a: 'The top layer of TPU film is composed of elastomeric polymers that possess a shape memory. When scratched, the molecules are displaced; applying heat (such as direct sunlight or hot water) causes them to return to their original smooth state.'
      },
      {
        q: 'What areas of the car should I protect with PPF?',
        a: 'At minimum, we recommend the Full Front Package (Bumper, Bonnet, Fenders, Side Mirrors, Headlights) which absorbs 80% of road damage. For total peace of mind, full body wraps are available.'
      }
    ],

    related: ['car-coating', 'compound-polish', 'scratch-repair']
  },

  {
    id: 'denting-painting',
    name: 'Denting & Painting',
    tagline: '2K Polyurethane Oven-Baked Paint & Digital Color Matching',
    tag: 'Factory Mirror Refinishing',
    icon: '🎨',
    category: 'Body & Paint',
    img: imgDenting,
    rating: '4.9 (6,000+ Panels Painted)',
    turnaround: '2 to 3 Days',
    warranty: '3-Year Paint Shine & Adhesion Warranty',
    branches: 'Chauburji & DHA Phase 1 Centers',
    pricingNote: 'Per-panel and full-body respray packages available',
    shortDesc: 'Professional dent repair combined with high-quality 2K oven-baked painting in a climate-controlled spray booth. We use computerized color matching to achieve a seamless, factory-level mirror finish.',

    overview: `
      Achieving a paint job that is indistinguishable from a brand-new German or Japanese factory finish requires exceptional conditions: zero airborne dust, computerized pigment formulation, premium 2K polyurethane clears, and heated oven baking.
      
      At Mateen Auto, our paint facility features a state-of-the-art down-draft heated spray booth. We use world-leading PPG 2K paint systems and digital spectrophotometers to match exact color variance, metallic flake dispersion, and clear coat orange-peel texture. Every repaired panel matches adjacent factory panels seamlessly under sunlight, shade, and halogen inspection lamps.
    `,

    whyChoose: [
      {
        icon: '🌡️',
        title: '60°C Down-Draft Heated Spray Booth',
        desc: 'Air is triple-filtered to eliminate dust specks, and baked at 60°C for deep molecular curing and long-term gloss retention.'
      },
      {
        icon: '🎨',
        title: 'PPG Computerized Digital Color Matching',
        desc: 'Spectrophotometer scanning accurately reads aged or fresh paint tones to formulate exact OEM metallic, pearl, and tri-coat finishes.'
      },
      {
        icon: '🛡️',
        title: 'Anti-Rust Epoxy Primer & Quality Fillers',
        desc: 'We use ultra-fine flexible European polyester fillers and anti-corrosion primers so paint never bubbles or cracks years down the line.'
      },
      {
        icon: '💎',
        title: '3-Year Gloss & Clear Coat Warranty',
        desc: 'Guaranteed against clearcoat peeling, fading, clouding, or color shifting under Pakistan\'s harsh summer climate.'
      }
    ],

    problemsSolved: [
      'Deep sheet metal accident crumples and collision damage',
      'Severely scraped doors and cracked plastic/fiberglass bumpers',
      'Faded, oxidized, or peeled clear coats on roofs and bonnets',
      'Rust bubble formations and corroded wheel arches',
      'Mismatched paint from substandard previous repair shops'
    ],

    processStages: [
      {
        step: '01',
        title: 'Precision Dent Straightening & Panel Truing',
        desc: 'Before any paint work begins, the metal is expertly worked with traditional hammers and dollies until the surface contour is 95% straight.',
        points: ['Minimum body filler application', 'Panel edge gap alignment', 'Weld seam rust-proofing']
      },
      {
        step: '02',
        title: 'Epoxy Primer & Guide-Coat Block Sanding',
        desc: 'Anti-corrosion epoxy primer is applied, followed by black guide coat and progressive dry block sanding to guarantee a razor-straight foundation.',
        points: ['Dual-action orbital dry sanding', 'Guide-coat highlight detection', 'Micro-filler pinhole elimination']
      },
      {
        step: '03',
        title: 'Computer Color Formulation & Cleanroom Spraying',
        desc: 'In our down-draft booth, basecoat color is applied using HVLP spray guns, followed by 2 coats of premium PPG high-solids polyurethane clearcoat.',
        points: ['Spectrophotometer color match', 'HVLP atomized paint transfer', 'High-solids 2K gloss clearcoat']
      },
      {
        step: '04',
        title: 'Oven Baking & Optical Texture Buffing',
        desc: 'The booth enters a 45-minute 60°C baking cycle to crosslink the clear coat, followed by nib sanding and 3M compounding to match the factory orange peel.',
        points: ['60°C controlled thermostatic bake', 'Micro-dust nib leveling', '3M dual-action mirror finishing']
      }
    ],

    faqs: [
      {
        q: 'Will the newly painted panel look different from the rest of the car?',
        a: 'No. We use digital spectrophotometers and blend our basecoats into adjacent panels when necessary to ensure an undetectable 100% color match from every viewing angle.'
      },
      {
        q: 'Why is oven-baked 2K paint superior to open-air painting?',
        a: 'Open-air painting results in dust specks, pinholes, and uneven drying. 2K polyurethane paint requires heat to cross-link chemically into an ultra-hard, UV-resistant shield that will not fade or peel.'
      },
      {
        q: 'How long should I wait before washing or waxing a freshly painted car?',
        a: 'Because our paint is oven-baked, it is fully cured upon delivery. However, we advise waiting 7 to 10 days before applying aggressive pressure washers or waxes to allow full outgassing.'
      },
      {
        q: 'What warranty do you provide on paintwork?',
        a: 'We provide a 3-year warranty covering clear coat peeling, chalking, bubbling, and premature fading.'
      }
    ],

    related: ['scratch-repair', 'accident-repair', 'compound-polish']
  },

  {
    id: 'car-coating',
    name: 'Ceramic & Graphene Coating',
    tagline: '9H Nano-Glass Shield Delivering Deep Hydrophobic Mirror Gloss',
    tag: '9H Nano Shield',
    icon: '💎',
    category: 'Protection',
    img: imgCoating,
    rating: '5.0 (2,500+ Cars Coated)',
    turnaround: '2 to 3 Days',
    warranty: '3 to 5-Year Protection Warranty',
    branches: 'Dedicated Coating Studios at DHA & Chauburji',
    pricingNote: 'Includes full multi-stage paint correction before coating',
    shortDesc: 'A liquid nano-coating bonded permanently to your car\'s paint, creating an ultra-hard 9H glass shield. Water, dirt, and contaminants bead off instantly — your car stays cleaner for longer with a deep wet-look gloss.',

    overview: `
      Waxing your car is a thing of the past; car waxes melt away in the 45°C Lahore heat within two weeks. Nano-Ceramic and Graphene Coatings are advanced liquid polymers containing pure Silicon Dioxide (SiO2) and Reduced Graphene Oxide (rGO) that form semi-permanent chemical bonds with your car's clear coat.
      
      At Mateen Auto, coating is an art form. We never coat over imperfect paint; our certified detailers perform extensive multi-stage paint correction first to eliminate swirl marks and water spots. Once the nano-coating is cured under infrared lamps, your vehicle gains a 9H diamond-hard glass shield with extreme hydrophobic water-beading and an astonishing deep wet-look reflection.
    `,

    whyChoose: [
      {
        icon: '💎',
        title: '9H Pencil Hardness Armor',
        desc: 'Significantly harder than factory clear coats, providing resistance against micro-swirls, wash marring, and chemical staining.'
      },
      {
        icon: '💧',
        title: 'Extreme Hydrophobic Lotus-Leaf Effect',
        desc: 'Water contact angle exceeding 115° causes rainwater, road sludge, and mud to bead up and roll off effortlessly.'
      },
      {
        icon: '🛡️',
        title: 'Graphene Anti-Water Spotting Formula',
        desc: 'Our premium Graphene matrix dissipates surface heat quickly, preventing hard water mineral spot etching during hot sunny days.'
      },
      {
        icon: '✨',
        title: 'Deep "Wet Look" Candy Mirror Reflection',
        desc: 'Enhances depth, clarity, and metallic flake pop, giving your car a showroom shine that lasts for years without regular waxing.'
      }
    ],

    problemsSolved: [
      'Paint fading and oxidation caused by harsh UV radiation',
      'Water spot mineral etching from sprinkler and bore water',
      'Road grime, exhaust soot, and industrial fallout sticking to paint',
      'Frequent washing needed due to dust accumulation',
      'Dull, hazy clear coats lacking optical depth and reflection'
    ],

    processStages: [
      {
        step: '01',
        title: 'Intensive 21-Stage Exterior Decontamination',
        desc: 'The car receives an iron fallout dissolving wash, tar remover, and clay bar treatment to pull all embedded microscopic contaminants out of the paint pores.',
        points: ['Ferrous iron fallout chemical purge', 'Fine clay bar exfoliation', 'Tire & trim deep degreasing']
      },
      {
        step: '02',
        title: 'Multi-Stage Optical Paint Correction',
        desc: 'Using digital paint depth gauges, our detailers machine compound and jeweling-polish the clear coat to eliminate 90%+ of all swirls, scratches, and holograms.',
        points: ['Micro-depth gauge safety inspection', '3M multi-stage compounding', 'Ultra-fine jeweling polish']
      },
      {
        step: '03',
        title: 'Isopropanol Alcohol (IPA) Panel Prep Wipe',
        desc: 'All polishing oils, fillers, and residues are wiped down with virgin IPA solution to expose pure clearcoat so the nano-coating can chemically bond.',
        points: ['Zero residue alcohol wipe down', 'Cleanroom air filtration check', 'High-CRI LED inspection under 3 light spectrums']
      },
      {
        step: '04',
        title: 'Cross-Hatch Nano Application & IR Curing',
        desc: 'The 9H coating is applied panel by panel in cross-hatch strokes, leveled with plush microfibers, and baked under shortwave infrared heat lamps.',
        points: ['Cross-hatch precision layer application', 'Infrared (IR) lamp heat cross-linking', 'Hydrophobic glass & rim coating included']
      }
    ],

    faqs: [
      {
        q: 'What is the main difference between Ceramic and Graphene?',
        a: 'Graphene is an advanced evolution of ceramic coating. It has higher thermal conductivity (stays cooler under the sun), reducing water spotting by up to 90%, and boasts higher flexibility, slickness, and chemical resistance (pH 2–12).'
      },
      {
        q: 'Will ceramic coating prevent stone chips on the highway?',
        a: 'No. Coatings are only 2 to 3 microns thick, providing chemical and scratch resistance, but not physical stone impact protection. For stone chip protection, we recommend PPF on high-impact areas.'
      },
      {
        q: 'How should I wash my car after it is ceramic coated?',
        a: 'Washing becomes effortless! Simply rinse with water and use a pH-neutral shampoo with a soft microfiber wash mitt. No waxing or polishing is ever needed.'
      },
      {
        q: 'How long does the 9H coating last at Mateen Auto?',
        a: 'Depending on the package selected, our coatings last 3 to 5 years. We also provide annual maintenance checkups and top-up booster applications to maintain peak hydrophobic performance.'
      }
    ],

    related: ['compound-polish', 'car-detailing', 'ppf']
  },

  {
    id: 'car-detailing',
    name: 'Car Detailing Spa',
    tagline: 'Complete 360° Interior Steam Sanitization & Exterior Deep Spa',
    tag: 'Full Car Spa Rejuvenation',
    icon: '🧼',
    category: 'Detailing',
    img: imgDetailing,
    rating: '5.0 (3,800+ Detailings Completed)',
    turnaround: '2 to 3 Days',
    warranty: '100% Satisfaction & Odor-Free Guarantee',
    branches: 'Chauburji & DHA Phase 1 Centers',
    pricingNote: 'Sedan, SUV, and Luxury Crossover packages available',
    shortDesc: 'A thorough inside-out car cleaning and restoration service. We steam-clean seats, condition leather, degrease the engine bay, polish exterior surfaces, and eliminate bacteria and bad odors from the interior.',

    overview: `
      Driving in city traffic turns vehicle interiors into magnets for dust, allergens, bacteria, and grime deep inside fabric fibers and leather grain. An ordinary service station wash simply smears dirt with dirty rags, scratching your paint and dampening seats with foul-smelling dirty water.
      
      Mateen Auto\'s Executive Detailing is a comprehensive automotive spa. We utilize high-temperature dry steam extraction at 160°C to sanitize and pull dirt from fabrics without soaking them, organic pH-balanced leather balms to restore supple softness, ozone generator odor elimination, and engine bay steam degreasing with non-greasy matte protective dressings.
    `,

    whyChoose: [
      {
        icon: '💨',
        title: '160°C High-Pressure Dry Vapor Steam',
        desc: 'Kills 99.9% of bacteria, dust mites, and viral pathogens in seats, carpets, and air conditioning ducts without leaving wet soggy cushions.'
      },
      {
        icon: '🪑',
        title: 'Leather Cleansing & Matte UV Nourishment',
        desc: 'Removes body oils and jean dye transfer while feeding genuine leather essential oils, leaving a factory matte non-slippery finish.'
      },
      {
        icon: '⚙️',
        title: 'Engine Bay Steam Degreasing & Dressing',
        desc: 'Safely removes road grease and baked-on dirt from sensitive engine components, sealed with heat-resistant satin protective dressing.'
      },
      {
        icon: '🌿',
        title: 'Ozone Odor Purge & AC Duct Disinfection',
        desc: 'Permanently neutralizes smoke, pet, dampness, and food odors at molecular level rather than masking them with cheap perfumes.'
      }
    ],

    problemsSolved: [
      'Stained velvet and fabric seats from spilled coffee, tea, and food',
      'Sticky, oily, or cracking leather steering wheels and seats',
      'Foul mildew air conditioning smell upon switching on the blower',
      'Muddy, grit-filled carpets and jammed seat rail mechanisms',
      'Greasy, dusty engine bays that make mechanical inspection difficult'
    ],

    processStages: [
      {
        step: '01',
        title: 'Deep Vacuuming & High-Pressure Air Blowout',
        desc: 'Using pneumatic Tornador guns and commercial HEPA vacuums, we extract deeply embedded sand, pet hair, and debris from seat seams and floor carpets.',
        points: ['Pneumatic crevice blow out', 'Multi-level HEPA vacuum extraction', 'Trunk floor & spare tire bay cleaning']
      },
      {
        step: '02',
        title: 'Dry Vapor Steam Extraction & Stain Removal',
        desc: '160°C commercial steam machines break down stubborn grease, stains, and spills on upholstery, roof headliners, and door cards.',
        points: ['Gentle headliner adhesive-safe cleaning', 'Fabric seat injection-extraction', 'AC vent steam purge']
      },
      {
        step: '03',
        title: 'Leather Scrubbing, Conditioning & Plastic Dressing',
        desc: 'Leather surfaces are scrubbed with horsehair brushes and fed organic UV balms, while dashboard and consoles are dressed with anti-static satin coats.',
        points: ['Horsehair brush leather detailing', 'Matte finish anti-UV dashboard dressing', 'Pedal box and scuff plate restoration']
      },
      {
        step: '04',
        title: 'Exterior Foam Wash, Engine Bay Spa & Ozone Purge',
        desc: 'The engine bay is dry-steamed and dressed, the exterior receives a 2-bucket foam wash and rim polish, and the cabin receives an Ozone gas sterilization cycle.',
        points: ['Engine bay steam detailing & dressing', 'Exterior gloss wash & tire dressing', 'Medical-grade Ozone sterilization cycle']
      }
    ],

    faqs: [
      {
        q: 'Will my car seats be wet after the interior detailing?',
        a: 'No. Unlike roadside washes that soak seats with garden hoses, we use commercial dry vapor steam extraction which leaves seats dry and ready to use within 30 to 45 minutes.'
      },
      {
        q: 'Is engine bay cleaning safe for modern sensors and ECUs?',
        a: 'Yes, absolutely. We use low-moisture dry steam and protect all sensitive alternator and fuse box electronics before applying specialized non-conductive dielectric dressings.'
      },
      {
        q: 'Can detailing remove cigarette smoke or strong AC odors?',
        a: 'Yes. Our medical-grade Ozone (O3) treatment breaks down odor molecules inside the AC evaporator and fabric pores, destroying odors permanently rather than masking them.'
      },
      {
        q: 'How often should I have my car professionally detailed?',
        a: 'For personal daily drivers in Lahore, we recommend a full executive detailing every 4 to 6 months to maintain interior hygiene and preserve vehicle condition.'
      }
    ],

    related: ['compound-polish', 'car-coating', 'scratch-repair']
  },

  {
    id: 'compound-polish',
    name: '3M Compound & Polish',
    tagline: 'Optical Swirl & Scratch Elimination for Deep Mirror Reflection',
    tag: 'Optical Paint Correction',
    icon: '⚡',
    category: 'Detailing',
    img: imgPolish,
    rating: '4.9 (4,500+ Cars Corrected)',
    turnaround: '2 to 3 Days',
    warranty: 'Optical Swirl-Free Guarantee',
    branches: 'Chauburji & DHA Phase 1 Centers',
    pricingNote: 'Multi-stage paint correction customized to paint thickness',
    shortDesc: 'Using 3M\'s professional orbital compounding system to remove swirl marks, buffer scratches, oxidation, and paint hazing. Your car\'s paint is left with a deep, wet, mirror-like reflection.',

    overview: `
      Have you ever looked at your car under direct sunlight or petrol pump halogen lights and seen thousands of circular spiderweb scratches and milky hazing? That is "swirl damage", usually caused by dusty rags, dirty wash water, or unskilled roadside buffing with aggressive wool pads.
      
      Mateen Auto\'s Paint Correction is precision optical surgery for your car\'s clear coat. Using professional Dual-Action (DA) orbital machines and genuine 3M Perfect-It rubbing compounds, we gently shave away microscopic fractions of a micron to level out scratches without compromising your factory clear coat thickness. The result is pure, deep, crystal-clear mirror reflection.
    `,

    whyChoose: [
      {
        icon: '🔍',
        title: 'Micro-Safe Paint Gauge Inspection',
        desc: 'We measure paint thickness across every panel before buffing, ensuring your factory clearcoat is completely safe from burn-through.'
      },
      {
        icon: '✨',
        title: 'Zero Holograms or Buffer Trails',
        desc: 'Using modern random-orbital dual-action machines and German foam pads, we guarantee zero buffer trails or holographic haze.'
      },
      {
        icon: '🛡️',
        title: 'Genuine 3M Perfect-It Compound System',
        desc: 'We use genuine imported 3M compounds with diminishing abrasives — no cheap silicones that temporarily hide scratches and wash off next week.'
      },
      {
        icon: '💎',
        title: 'Synthetic Sealant Shield Included',
        desc: 'Every compound polish is sealed with a high-grade synthetic polymer sealant to lock in the gloss and protect against immediate re-swirling.'
      }
    ],

    problemsSolved: [
      'Circular spiderweb swirls caused by local car wash rags',
      'Buffer trails, holograms, and burn marks from cheap buffing shops',
      'Surface oxidation making red, black, and blue paint look dull and white',
      'Tree sap and light bird dropping acid etching marks',
      'Paint overspray and water spots embedded on the clearcoat'
    ],

    processStages: [
      {
        step: '01',
        title: 'Decontamination & Digital Gauge Mapping',
        desc: 'The car is washed, clay-barred to remove industrial fallout, and digital thickness gauges measure the clearcoat across bonnet, roof, and doors.',
        points: ['Chemical iron & tar purge', 'Synthetic clay bar wipe', 'Panel-by-panel paint thickness log']
      },
      {
        step: '02',
        title: 'Stage 1: Heavy Defect Cutting (Compound)',
        desc: 'Using 3M fast-cut compound and micro-abrasive foam pads, heavy swirls, oxidation, and surface scratches are safely leveled out.',
        points: ['Targeted scratch leveling', 'Heat-controlled machine speed', 'Delicate edge & rubber trim masking']
      },
      {
        step: '03',
        title: 'Stage 2: Refining & Swirl Removal Polish',
        desc: 'A secondary refining polish breaks down micro-marring from the compounding stage, clarifying the paint for maximum transparency.',
        points: ['Diminishing micro-abrasive polish', 'Elimination of compound haze', 'Color depth & metallic flake restoration']
      },
      {
        step: '04',
        title: 'Stage 3: Jeweling Ultra-Fine Finish & Sealant',
        desc: 'An ultra-fine finishing polish delivers high optical gloss, followed by an application of 3M synthetic polymer sealant or carnauba wax.',
        points: ['Jeweling foam pad high-gloss finish', 'IPA inspection wipe to verify zero fillers', 'Polymer sealant UV protection coat']
      }
    ],

    faqs: [
      {
        q: 'Does compounding reduce my car\'s clear coat thickness drastically?',
        a: 'Not with our precision dual-action orbital technique. We remove only 1 to 2 microns of clearcoat (factory clearcoat is typically 30 to 45 microns thick). We verify thickness before and after to ensure total paint safety.'
      },
      {
        q: 'Why do swirls reappear after getting a cheap roadside polish?',
        a: 'Cheap roadside polishes use heavy silicone and oil glazes that simply fill in the scratches temporarily. After 2 or 3 washes, the fillers wash away and the scratches reappear. Mateen Auto actually levels the scratch permanently.'
      },
      {
        q: 'How long does a full compound and polish take?',
        a: 'A proper multi-stage paint correction and sealant application takes 2 to 3 days depending on paint hardness and the severity of existing swirls.'
      },
      {
        q: 'Should I get ceramic coating after paint correction?',
        a: 'Yes, that is the ideal pairing! Paint correction perfects the paint, and ceramic coating locks in that flawless mirror gloss for years.'
      }
    ],

    related: ['car-coating', 'car-detailing', 'scratch-repair']
  },

  {
    id: 'wheel-balancing-alignment',
    name: 'Wheel Balancing & Alignment',
    tagline: 'High-Speed Dynamic Balancing & 3D Laser Geometry Calibration',
    tag: 'Laser Precision Balancing',
    icon: '⚖️',
    category: 'Wheels & Geometry',
    img: imgWheelCare,
    rating: '5.0 (7,000+ Vehicles Serviced)',
    turnaround: '2 to 3 Days',
    warranty: 'Steering Drift & Vibration-Free Guarantee',
    branches: 'Chauburji & DHA Phase 1 Centers',
    pricingNote: 'Computerized diagnostic alignment report provided with every job',
    shortDesc: 'Comprehensive computerized wheel care under one roof. Dynamic high-speed spin balancing eliminates steering wobble and vibrations, while 3D laser alignment precisely calibrates camber, caster, and toe angles for razor-sharp steering and extended tire lifespan.',

    overview: `
      Steering wheel wobble at 80–120 km/h on the motorway? Car drifting toward the left side of the road? Irregular tire tread wear eating away at your expensive brand-new tires? These issues ruin your driving pleasure, compromise wet-braking safety, and waste thousands of rupees in fuel and premature tire replacement.
      
      At Mateen Auto, our wheel care center features high-definition 3D camera alignment rigs and dynamic spin balancers. We mount high-resolution target reflectors to all four wheels, measuring Camber, Caster, Toe-in/Toe-out, and Thrust Angle against OEM manufacturer digital databases for precision millimeter calibration.
    `,

    whyChoose: [
      {
        icon: '🎯',
        title: '3D High-Definition Camera Sensors',
        desc: 'Advanced optical target sensors calculate alignment angles to within 0.01 degrees against factory OEM database specifications.'
      },
      {
        icon: '⚡',
        title: 'High-Speed Dynamic Spin Balancing',
        desc: 'Pinpoints internal and external unbalance down to the single gram, eliminating steering wheel vibrations at motorway speeds.'
      },
      {
        icon: '🛞',
        title: 'Extends Tire Tread Lifespan by 30%',
        desc: 'Prevents expensive inner or outer shoulder tire scrubbing, ensuring uniform contact patch across all four tires.'
      },
      {
        icon: '⛽',
        title: 'Improves Fuel Mileage & Steering Feel',
        desc: 'Eliminates rolling resistance from misaligned wheels, delivering smoother coasting and lower petrol consumption.'
      }
    ],

    problemsSolved: [
      'Steering wheel vibrating or shaking at 80 km/h to 120 km/h',
      'Vehicle continuously pulling or drifting to the left or right',
      'Uneven tire wear (feathering, inner shoulder cupping, outer tread wear)',
      'Crooked steering wheel when the car is traveling straight',
      'Suspension looseness after hitting potholes or speed breakers'
    ],

    processStages: [
      {
        step: '01',
        title: 'Tire Pressure & Suspension Play Diagnostic',
        desc: 'Before placing the vehicle on the alignment rack, we set cold tire pressures to manufacturer specs and inspect tie rods, ball joints, and bushings for wear.',
        points: ['Digital tire pressure equalization', 'Steering rack & tie-rod play inspection', 'Tire tread depth and irregular wear analysis']
      },
      {
        step: '02',
        title: 'Dynamic High-Speed Spin Wheel Balancing',
        desc: 'Wheels are demounted and spun on computer balancers. Digital sensors compute the exact gram balance required and technicians place zinc/lead weights.',
        points: ['Rim radial runout inspection', 'Dual-plane dynamic unbalance detection', 'Clean adhesive & clip-on weight placement']
      },
      {
        step: '03',
        title: '3D Optical Camera Target Clamping',
        desc: 'Zero-scratch clamps attach high-contrast 3D reflective targets to all 4 wheels. The vehicle is rolled forward to calculate live geometric angles.',
        points: ['Non-scratch rim clamps', 'Live runout compensation sweep', 'Live comparison against OEM vehicle database']
      },
      {
        step: '04',
        title: 'Precision Camber, Caster & Toe Adjustment',
        desc: 'Our suspension technicians adjust tie-rod sleeves and eccentric camber bolts while monitoring live real-time computer screens until all values turn green.',
        points: ['Sub-millimeter toe angle adjustment', 'Thrust angle centering with steering wheel lock', 'Before-and-After printed computerized report']
      }
    ],

    faqs: [
      {
        q: 'What is the difference between wheel alignment and wheel balancing?',
        a: 'Wheel balancing ensures the weight of the tire and rim is evenly distributed around its axle (preventing steering vibration at high speeds). Wheel alignment adjusts the angles of the suspension so the tires point perfectly straight and contact the road evenly.'
      },
      {
        q: 'How often should I get wheel balancing and alignment done?',
        a: 'Given Lahore\'s road conditions, speed breakers, and potholes, we recommend wheel balancing and alignment every 8,000 to 10,000 kilometers, or whenever you install new tires or hit a deep pothole.'
      },
      {
        q: 'Why does my car still pull to the left even on a flat road?',
        a: 'This is usually caused by incorrect caster or camber angles, unequal tire pressures, or radial tire pull. Our 3D alignment system diagnoses and corrects the root cause immediately.'
      },
      {
        q: 'Do you provide a computerized report of the alignment?',
        a: 'Yes, every customer receives a printed Before-and-After alignment sheet showing initial misalignments in red and final factory calibrations in green.'
      }
    ],

    related: ['accident-repair', 'dry-denting', 'car-detailing']
  }
];

export function getServiceById(id) {
  return SERVICES_DATA.find((svc) => svc.id === id);
}
