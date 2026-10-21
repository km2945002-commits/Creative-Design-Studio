export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'web-app' | 'logo' | 'business-card' | 'product' | 'banner' | 'brand-identity';
  categoryLabel: string;
  tagline: string;
  imageSrc: string;
  toolsUsed: string;
  deliverables: string[];
  specifications: {
    format: string;
    finishOrStack: string;
    timeline: string;
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'creative-labs-web',
    title: 'CreativeLabs Responsive Web & App Platform',
    client: 'CreativeLabs Global',
    category: 'web-app',
    categoryLabel: 'Website & App UI Design',
    tagline: 'Modern, responsive website and web application built with AI-assisted layout, WordPress, and Hostinger cloud deployment.',
    imageSrc: '/assets/aistudio/Creative_Design_Lab_35e325dd.jpg',
    toolsUsed: 'WordPress · Hostinger · React 19 · AI UI Tools',
    deliverables: [
      'Interactive responsive desktop & smartphone layouts',
      'WordPress CMS customization with clean admin dashboard',
      'Hostinger domain setup, SSL security & email configuration',
      'SEO schema markup and 0.72s page transition speeds'
    ],
    specifications: {
      format: 'Responsive Web Platform & PWA',
      finishOrStack: 'WordPress · Hostinger · Mobile Responsive',
      timeline: '4 Weeks'
    }
  },
  {
    id: 'apex-crest-logo',
    title: 'Apex Dynamics Geometric Monogram & Logo Mark',
    client: 'Apex Industrial Technologies',
    category: 'logo',
    categoryLabel: 'Logo Design',
    tagline: 'Precision vector logo created in CorelDRAW featuring geometric balance, optical kerning, and complete color separations.',
    imageSrc: '/assets/aistudio/Creative_Design_Lab_35e325dd.jpg',
    toolsUsed: 'CorelDRAW 2024 · Adobe Illustrator · Vector Bezier Math',
    deliverables: [
      'Primary, horizontal, and compact icon mark variations',
      'Pantone coated & uncoated spot color calibrations',
      'High-resolution transparent PNG and print PDF/X-1a files',
      'Editable master CorelDRAW vector files (.CDR / .AI)'
    ],
    specifications: {
      format: 'Vector Bezier Master Package',
      finishOrStack: 'CorelDRAW · Adobe Illustrator · SVG / EPS / CDR',
      timeline: '5 Days'
    }
  },
  {
    id: 'executive-black-cards',
    title: 'Executive Corporate Business Cards & Stationery',
    client: 'Khyber Strategic Capital',
    category: 'business-card',
    categoryLabel: 'Business Card Design',
    tagline: 'Ultra-clean double-sided executive cards with 3mm press bleeds, gold foil callouts, and CorelDRAW print layouts.',
    imageSrc: '/assets/aistudio/Creative_Design_Lab_35e325dd.jpg',
    toolsUsed: 'CorelDRAW · Adobe Illustrator · CMYK Press Bleeds',
    deliverables: [
      'Double-sided print-ready PDF/X files with crop & bleed marks',
      'Foil mask separation layer and matte finish callouts',
      'High-resolution JPG/PNG proofs for client review',
      'Full typography and vector logo layout source files'
    ],
    specifications: {
      format: 'Standard 3.5" x 2" with 3mm Bleeds',
      finishOrStack: '300 DPI CMYK · CorelDRAW Master',
      timeline: '3 Days'
    }
  },
  {
    id: 'lumina-botanical-packaging',
    title: 'Lumina Herbal Skincare Bottle & Box Packaging',
    client: 'Lumina Wellness Labs',
    category: 'product',
    categoryLabel: 'Product & Packaging Design',
    tagline: 'Structural folding carton dielines, luxury bottle labels, and 3D product mockup visuals.',
    imageSrc: '/assets/aistudio/Creative_Design_Lab_35e325dd.jpg',
    toolsUsed: 'CorelDRAW · Adobe Illustrator · 3D Mockup Tools',
    deliverables: [
      'Production-ready structural dieline with cut and crease guides',
      'Front, back, and side regulatory label layouts',
      '3D photorealistic product presentation mockups',
      'Layered CorelDRAW (.CDR) and Illustrator (.AI) source archives'
    ],
    specifications: {
      format: 'Custom Dieline + 3D Product Mockups',
      finishOrStack: 'Soft-Touch Matte · Spot Foil · Barcode Tested',
      timeline: '8 Days'
    }
  },
  {
    id: 'grand-highway-flex',
    title: 'Metro Expressway Grand-Scale Outdoor Flex Banner',
    client: 'Capital Urban Real Estate',
    category: 'banner',
    categoryLabel: 'Flex & Banner Design',
    tagline: 'High-contrast outdoor PVC vinyl advertising banner engineered in CorelDRAW for maximum long-distance impact.',
    imageSrc: '/assets/aistudio/Creative_Design_Lab_35e325dd.jpg',
    toolsUsed: 'CorelDRAW · Large-Format DPI Calibration · Solvent Inks',
    deliverables: [
      'Grand-scale print master TIFF & PDF at 150 DPI calibrated scale',
      'Brass eyelet and pole-pocket placement template guide',
      'Digital companion social media banners (1:1 & 16:9)',
      'Editable CorelDRAW source files'
    ],
    specifications: {
      format: '20ft x 10ft Outdoor Frontlit Flex',
      finishOrStack: 'UV Solvent Inks · Weatherproof Hemming',
      timeline: '3 Days'
    }
  },
  {
    id: 'vanguard-brand-system',
    title: 'Vanguard Complete Corporate Brand Identity System',
    client: 'Vanguard Logistics & Fleet',
    category: 'brand-identity',
    categoryLabel: 'Brand Identity',
    tagline: 'Full-spectrum visual identity system unifying logos, color codes, typography, letterheads, social assets, and brand rules.',
    imageSrc: '/assets/aistudio/Creative_Design_Lab_35e325dd.jpg',
    toolsUsed: 'CorelDRAW · Adobe Illustrator · Brand Guidelines Manual',
    deliverables: [
      '30-page brand guidelines manual covering all logo usages',
      'Primary, secondary, and badge logo lockups',
      'CMYK, RGB, and HEX color code standards',
      'Corporate letterhead, envelope, and email signature templates'
    ],
    specifications: {
      format: 'Complete Brand Identity Manual & Asset Kit',
      finishOrStack: 'Vector Suite + Brand Book PDF',
      timeline: '10 Days'
    }
  }
];
