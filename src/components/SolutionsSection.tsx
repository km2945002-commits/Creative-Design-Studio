import React, { useState } from 'react';
import { 
  Building2, 
  UtensilsCrossed, 
  ShoppingBag, 
  Stethoscope, 
  UserCheck, 
  Sparkles, 
  Layers, 
  Server, 
  Check, 
  ArrowRight,
  Cpu,
  Monitor
} from 'lucide-react';

interface WebsiteSolution {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  keyFeatures: string[];
  recommendedTech: string;
  idealFor: string;
}

interface SolutionsSectionProps {
  onOpenBrief: (serviceCategory?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenBrief }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('corporate');

  const solutions: WebsiteSolution[] = [
    {
      id: 'corporate',
      title: 'Business & Corporate Websites',
      subtitle: 'Authority, Trust & Lead Generation',
      icon: Building2,
      description: 'Polished, authoritative digital platforms designed for consultancies, corporate enterprises, service providers, and agencies looking to win client trust.',
      keyFeatures: [
        'Executive team profiles & case studies',
        'Direct inquiry forms & lead capture',
        'SEO-optimized service architecture',
        'SSL encryption & fast response times'
      ],
      recommendedTech: 'WordPress or Custom React SPA',
      idealFor: 'Law firms, financial services, consulting agencies, B2B companies'
    },
    {
      id: 'restaurant',
      title: 'Restaurant & Cafe Websites',
      subtitle: 'Digital Menus, Orders & Table Booking',
      icon: UtensilsCrossed,
      description: 'Appetizing, mobile-optimized websites featuring interactive food menus, location maps, WhatsApp ordering, and table reservation systems.',
      keyFeatures: [
        'Interactive categorized food & beverage menus',
        'Direct WhatsApp food ordering integration',
        'Google Maps location & opening hours',
        'High-resolution culinary food photography layouts'
      ],
      recommendedTech: 'WordPress + WooCommerce / Mobile-First Layout',
      idealFor: 'Cafes, fine dining restaurants, bakeries, cloud kitchens, fast food chains'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & Online Stores',
      subtitle: 'Catalogs, Cart, Checkout & Inventory',
      icon: ShoppingBag,
      description: 'High-converting online shopping platforms with product catalogs, filterable categories, shopping carts, secure checkout, and order notifications.',
      keyFeatures: [
        'Product catalog with variants (sizes, colors)',
        'Shopping cart & streamlined mobile checkout',
        'Payment gateway / Cash on Delivery (COD) setup',
        'Automated order confirmation alerts via WhatsApp/Email'
      ],
      recommendedTech: 'WordPress + WooCommerce or Headless E-Commerce',
      idealFor: 'Fashion brands, electronics retailers, cosmetic brands, consumer goods'
    },
    {
      id: 'clinic',
      title: 'Medical Store & Clinic Websites',
      subtitle: 'Healthcare Services & Appointments',
      icon: Stethoscope,
      description: 'Clean, reliable, and patient-friendly healthcare websites for clinics, diagnostic centers, dental practices, and retail medical pharmacies.',
      keyFeatures: [
        'Doctor directories & clinical department pages',
        'Online appointment booking and WhatsApp consultation',
        'Pharmacy medicine catalog / prescription inquiries',
        'Emergency contact & patient information hotline'
      ],
      recommendedTech: 'WordPress with Appointment Booking System',
      idealFor: 'Medical specialists, dental clinics, wellness centers, local pharmacies'
    },
    {
      id: 'portfolio',
      title: 'Portfolio & Personal Websites',
      subtitle: 'Showcase for Creatives & Executives',
      icon: UserCheck,
      description: 'Sophisticated personal portfolios for creative professionals, photographers, architects, engineers, and freelancers to exhibit accomplishments.',
      keyFeatures: [
        'Interactive visual project galleries & case studies',
        'Client testimonials & credential badges',
        'Downloadable CV / PDF presentation decks',
        'Direct booking link / commission inquiry form'
      ],
      recommendedTech: 'AI Website Builder or React Custom Code',
      idealFor: 'Photographers, interior designers, architects, consultants, developers'
    },
    {
      id: 'brand',
      title: 'Brand & Product Websites',
      subtitle: 'Immersive Product Storytelling',
      icon: Sparkles,
      description: 'Narrative-driven web experiences focused on a single flagship product, brand launch, or innovation showcase with cinematic imagery.',
      keyFeatures: [
        '3D interactive product visualization angles',
        'Story-driven scroll animations & video hero banners',
        'Interactive feature breakdown and comparison tables',
        'Press kit & retail wholesale distributor portals'
      ],
      recommendedTech: 'Custom Modern Web Frontend + Hostinger Cloud',
      idealFor: 'Hardware startups, luxury perfume, boutique goods, tech gadgets'
    },
    {
      id: 'landing',
      title: 'Landing Pages & Marketing Websites',
      subtitle: 'Conversion-Focused Campaign Hubs',
      icon: Layers,
      description: 'Laser-targeted, single-page sales and promotional landing pages built specifically to maximize paid ad conversions and campaign ROI.',
      keyFeatures: [
        'Compelling hero copy & immediate value proposition',
        'Lead capture forms with CRM or WhatsApp hooks',
        'Frictionless mobile one-page navigation',
        'Lighthouse 95+ score for low ad bounce rates'
      ],
      recommendedTech: 'AI Builder or Fast Static Deployment',
      idealFor: 'Marketing campaigns, webinar signups, app downloads, event promotions'
    }
  ];

  const activeSolution = solutions.find((s) => s.id === activeSolutionId) || solutions[0];

  return (
    <section id="solutions" className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-4">
            <Monitor className="w-3.5 h-3.5 text-blue-400" />
            <span>Versatile Digital Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Website Development Solutions
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Every business has unique operational needs. We engineer websites across multiple tailored formats using <strong>WordPress</strong>, <strong>AI-assisted website builders</strong>, or <strong>custom code</strong> depending entirely on your functional requirements and budget.
          </p>
        </div>

        {/* 3 Technology Delivery Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">1. WordPress CMS</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Ideal for clients who want full autonomy to edit pages, publish blog articles, add products, and manage staff without writing a single line of code.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Includes theme setup, plugins & admin training.
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">2. AI Website Builders</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Rapid, cost-effective solutions for startups and small businesses needing an eye-catching, responsive presence delivered with record turnaround.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Rapid prototyping & fast launch timeline.
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">3. Custom Code & Hostinger</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              High-performance React/TypeScript digital engineering with sub-second page transitions, tailored APIs, and Hostinger cloud deployment assistance.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Maximum speed & custom business logic.
            </div>
          </div>
        </div>

        {/* Interactive Industry Solutions Tabs & Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
              Select Website Industry Category:
            </span>
            {solutions.map((item) => {
              const Icon = item.icon;
              const isActive = activeSolutionId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSolutionId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-neutral-800 border-amber-400 text-white shadow-md'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-850 text-neutral-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[11px] opacity-70">{item.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 text-amber-400' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Solution Deep Dive Card (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-2xl border border-neutral-800 p-7 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 border-b border-neutral-800 pb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Recommended Solution Architecture
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeSolution.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  Ideal For: <strong className="text-neutral-200">{activeSolution.idealFor}</strong>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                <activeSolution.icon className="w-6 h-6" />
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {activeSolution.description}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                Standard Inclusions & Modules:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSolution.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-200 bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800/80">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase block">Recommended Platform</span>
                <strong className="text-xs text-white font-medium">{activeSolution.recommendedTech}</strong>
              </div>
              <button
                onClick={() => onOpenBrief(activeSolution.title)}
                className="px-4 py-2 bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Request This Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
