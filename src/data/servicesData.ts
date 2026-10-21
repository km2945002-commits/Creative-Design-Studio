export interface ServiceItem {
  id: string;
  name: string;
  shortTag: string;
  category: 'web-app' | 'logo' | 'business-card' | 'product' | 'banner' | 'brand-identity';
  tagline: string;
  description: string;
  heroHighlight: string;
  deliverables: string[];
  techOrMaterials: string[];
  estimatedTurnaround: string;
  startingPrice: string;
  features: {
    title: string;
    description: string;
  }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-apps',
    name: 'Websites & Apps Design',
    shortTag: 'Web & Mobile',
    category: 'web-app',
    tagline: 'Modern, responsive websites and app interfaces using AI-powered tools, WordPress, and Hostinger.',
    description: 'We design modern, responsive websites and app interfaces using AI-powered design tools, WordPress, and modern web technologies. We create business websites, restaurant websites, e-commerce stores, company websites, clinics, and online shops.',
    heroHighlight: 'AI-assisted design, WordPress customization, Hostinger hosting, and mobile-first responsive architecture.',
    deliverables: [
      'AI-assisted website design and development',
      'WordPress website setup and customization',
      'Business, restaurant, company, and e-commerce websites',
      'Mobile-responsive website layouts',
      'Website pages, menus, forms, and contact sections',
      'Plugin installation and configuration as required',
      'Domain and hosting setup using Hostinger',
      'Basic SEO and website performance optimization',
      'Website testing, launch, and handover'
    ],
    techOrMaterials: ['WordPress', 'Hostinger', 'AI Website Builders', 'React 19 & Next.js', 'Mobile Responsive', 'SEO Optimization'],
    estimatedTurnaround: '4 to 8 Weeks',
    startingPrice: 'PKR 250,000',
    features: [
      {
        title: 'WordPress & AI-Assisted Architecture',
        description: 'Clean theme customization, page builder flexibility, and AI-accelerated layout design tailored to your industry.'
      },
      {
        title: 'Hostinger Hosting Setup',
        description: 'Assistance with domain connection, SSL security certificate, business email setup, and server configuration.'
      },
      {
        title: 'Responsive & Fast Loading',
        description: 'Calibrated for lightning speed on smartphones, tablets, laptops, and desktop computers.'
      }
    ]
  },
  {
    id: 'logo-design',
    name: 'Logo Design',
    shortTag: 'Logo Identity',
    category: 'logo',
    tagline: 'Professional, memorable, and unique logos using CorelDRAW, Adobe Illustrator, and AI tools.',
    description: 'We create professional, memorable, and unique logos using CorelDRAW, Adobe Illustrator, and AI-assisted creative tools to establish a strong brand identity.',
    heroHighlight: 'Precision vector logo marks, geometric monograms, wordmarks, and resolution-independent masters.',
    deliverables: [
      'Custom logo design',
      'Brand color palette',
      'Typography selection',
      'Logo variations (Primary, Horizontal, Icon Mark)',
      'High-resolution PNG/JPG files',
      'Print-ready PDF',
      'Editable CorelDRAW source files as agreed'
    ],
    techOrMaterials: ['CorelDRAW', 'Adobe Illustrator', 'AI Creative Tools', 'Vector Bezier Curves', 'CMYK & RGB Calibration'],
    estimatedTurnaround: '5 to 7 Days',
    startingPrice: 'PKR 45,000',
    features: [
      {
        title: 'CorelDRAW Vector Precision',
        description: 'Sharp mathematical vectors that never pixelate, scalable from social avatars to giant billboards.'
      },
      {
        title: 'Brand-Focused Typography',
        description: 'Pairings of modern fonts, letter-spacing, and hierarchy that convey trust and authority.'
      },
      {
        title: 'Complete Master Package',
        description: 'Delivered in transparent PNG, vector SVG, print PDF, and editable CorelDRAW / AI files.'
      }
    ]
  },
  {
    id: 'business-cards',
    name: 'Business Card Design',
    shortTag: 'Print & Cards',
    category: 'business-card',
    tagline: 'Premium business cards, corporate stationery, and letterheads ready for professional printing.',
    description: 'We design premium business cards, corporate stationery, letterheads, and professional print-ready designs using CorelDRAW and Adobe Illustrator.',
    heroHighlight: 'Front & back custom layouts, print bleeds, logo integration, and high-resolution master files.',
    deliverables: [
      'Custom business card design',
      'Front and back layouts',
      'Logo and brand integration',
      'Print-ready files with standard press bleeds',
      'High-resolution PDF/JPG/PNG formats',
      'Source files as agreed'
    ],
    techOrMaterials: ['CorelDRAW', 'Adobe Illustrator', 'Print Press Bleeds (3mm)', 'CMYK Color Standards', 'High-Res PDF/X'],
    estimatedTurnaround: '3 to 5 Days',
    startingPrice: 'PKR 35,000',
    features: [
      {
        title: 'Print-Ready Standardization',
        description: 'Pre-set with 300 DPI resolution, CMYK color profiles, cut-lines, and press bleeds.'
      },
      {
        title: 'Corporate Identity Consistency',
        description: 'Aligned with your logo, color codes, phone numbers, WhatsApp, and social handles.'
      },
      {
        title: 'Flexible Source Formats',
        description: 'Provided in editable CorelDRAW (.CDR) or Illustrator (.AI) plus instant print PDFs.'
      }
    ]
  },
  {
    id: 'products-packaging',
    name: 'Products & Packaging Design',
    shortTag: 'Packaging & Labels',
    category: 'product',
    tagline: 'Attractive product labels, packaging layouts, and photorealistic mockups using CorelDRAW & AI.',
    description: 'We create attractive product labels, packaging, product mockups, and promotional visuals using CorelDRAW, Adobe Illustrator, and AI design tools.',
    heroHighlight: 'Custom product packaging dielines, regulatory bottle labels, box layouts, and 3D mockups.',
    deliverables: [
      'Custom product design',
      'Packaging layouts',
      'Labels and stickers',
      'Product mockups',
      'Brand color integration',
      'Print-ready PDF files',
      'High-resolution PNG/JPG formats',
      'Editable source files as agreed'
    ],
    techOrMaterials: ['CorelDRAW', 'Adobe Illustrator', 'AI Image Tools', 'Dieline Measurements', 'Barcode Placement'],
    estimatedTurnaround: '7 to 10 Days',
    startingPrice: 'PKR 85,000',
    features: [
      {
        title: 'Shelf & E-Commerce Impact',
        description: 'Visual styling designed to capture consumer attention on physical retail shelves and online catalogs.'
      },
      {
        title: 'Accurate Packaging Dielines',
        description: 'Precision cut-and-fold guidelines tailored to your box, pouch, bottle, or jar specs.'
      },
      {
        title: 'Realistic 3D Mockup Presentation',
        description: 'High-definition digital mockups ready for social media advertising and product presentations.'
      }
    ]
  },
  {
    id: 'flex-banner',
    name: 'Flex & Banner Design',
    shortTag: 'Large-Format Print',
    category: 'banner',
    tagline: 'Professional flex banners, promotional posters, and large-format print graphics.',
    description: 'We design professional flex banners, advertising banners, posters, promotional materials, and print-ready graphics using CorelDRAW and Adobe Illustrator.',
    heroHighlight: 'Outdoor PVC flex banners, trade show roll-ups, shop signboards, and event backdrops.',
    deliverables: [
      'Custom flex and banner designs',
      'Promotional layouts',
      'Brand logo integration',
      'Print-ready high-resolution files',
      'PDF/JPG/PNG formats',
      'Editable CorelDRAW source files as agreed'
    ],
    techOrMaterials: ['CorelDRAW', 'Adobe Illustrator', 'Large-Format Resolution Calibration', 'CMYK Solvent Ink Profiles', 'Grommet Guides'],
    estimatedTurnaround: '2 to 4 Days',
    startingPrice: 'PKR 30,000',
    features: [
      {
        title: 'Long-Distance Readability',
        description: 'High-contrast typography, bold headlines, and vibrant visuals visible from far distances.'
      },
      {
        title: 'Large-Format Print Specs',
        description: 'Calibrated file resolutions suitable for grand printing on vinyl, canvas, PVC, or backlit flex.'
      },
      {
        title: 'Promotional Versatility',
        description: 'Designs tailored for shop front fascias, roadside displays, exhibitions, or special events.'
      }
    ]
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Design',
    shortTag: 'Full Brand System',
    category: 'brand-identity',
    tagline: 'Complete brand systems with logos, color palettes, typography, stationery, and guidelines.',
    description: 'We develop complete brand identity systems, including logos, color palettes, typography, business cards, stationery, social media graphics, and brand guidelines.',
    heroHighlight: 'End-to-end visual branding ensuring absolute consistency across digital and print touchpoints.',
    deliverables: [
      'Comprehensive brand identity manual',
      'Primary, secondary, and sub-mark logos',
      'Color palette guidelines with CMYK, RGB, and HEX codes',
      'Font pairings and typographic rules',
      'Business card and letterhead layouts',
      'Social media profile and banner templates',
      'Full suite of vector, print, and digital master files'
    ],
    techOrMaterials: ['CorelDRAW', 'Adobe Illustrator', 'Brand Style Guides', 'Design Systems', 'Digital & Print Assets'],
    estimatedTurnaround: '1 to 2 Weeks',
    startingPrice: 'PKR 75,000',
    features: [
      {
        title: 'Unified Brand Cohesion',
        description: 'Ensure every customer touchpoint reflects the same professional tone, color harmony, and quality.'
      },
      {
        title: 'Clear Usage Guidelines',
        description: 'Practical brand guidelines showing how to use colors, fonts, and logos correctly on any media.'
      },
      {
        title: 'Social & Print Ready Assets',
        description: 'Ready-to-use templates for Instagram, Facebook, LinkedIn, WhatsApp, and office stationery.'
      }
    ]
  }
];
