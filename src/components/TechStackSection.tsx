import React from 'react';
import { 
  Sparkles, 
  Globe, 
  Server, 
  PenTool, 
  Palette, 
  Image as ImageIcon, 
  Code2, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface TechTool {
  name: string;
  category: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  description: string;
  workflowUse: string[];
}

export const TechStackSection: React.FC = () => {
  const tools: TechTool[] = [
    {
      name: 'AI Website Builders',
      category: 'Web Design & Prototyping',
      icon: Sparkles,
      badge: 'AI Powered',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      description: 'AI-assisted website creation and design that rapidly accelerates layout generation, wireframing, and interactive design.',
      workflowUse: [
        'Rapid UI layout generation & wireframing',
        'Intelligent color palette & section exploration',
        'Mobile-friendly responsive baseline scaffolding'
      ]
    },
    {
      name: 'WordPress',
      category: 'Content Management & E-Commerce',
      icon: Globe,
      badge: 'CMS Platform',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      description: 'Professional business websites, blogs, and e-commerce stores with intuitive content management for clients.',
      workflowUse: [
        'Custom business & corporate websites',
        'E-commerce & online store development',
        'Client-friendly content editing & blog setup'
      ]
    },
    {
      name: 'Hostinger',
      category: 'Cloud Hosting & Domain Setup',
      icon: Server,
      badge: 'Infrastructure',
      badgeColor: 'border-pink-500/40 text-pink-400 bg-pink-500/10',
      description: 'Domain registration, web hosting, website deployment, and business email setup where supported by the selected plan.',
      workflowUse: [
        'Custom domain registration & DNS linkage',
        'High-speed SSD cloud server deployment',
        'Free SSL encryption & professional business email'
      ]
    },
    {
      name: 'CorelDRAW',
      category: 'Precision Vector & Print Design',
      icon: PenTool,
      badge: 'Print Production',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      description: 'Professional vector graphics, logos, business cards, flex banners, and large-format print design.',
      workflowUse: [
        'Scalable vector logos with mathematical precision',
        'Print-ready business cards with 3mm bleed margins',
        'Grand-scale outdoor flex banners & event signboards'
      ]
    },
    {
      name: 'Adobe Illustrator',
      category: 'Vector Graphics & Illustration',
      icon: Palette,
      badge: 'Brand Standard',
      badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-500/10',
      description: 'Vector graphics, branding, typography systems, and professional digital illustrations.',
      workflowUse: [
        'Complete brand identity manuals & typography sheets',
        'Packaging dielines and custom product labels',
        'Resolution-independent SVG, EPS, and PDF exports'
      ]
    },
    {
      name: 'AI Image & Content Tools',
      category: 'Creative Visual Exploration',
      icon: ImageIcon,
      badge: 'AI Creative',
      badgeColor: 'border-fuchsia-500/40 text-fuchsia-400 bg-fuchsia-500/10',
      description: 'Creative concepts, visual assets, website content, and marketing materials to bring ideas to life quickly.',
      workflowUse: [
        'High-resolution conceptual product visuals',
        'Contextual stock imagery & promotional backdrops',
        'Marketing headlines & tailored website copy'
      ]
    },
    {
      name: 'AI Coding Assistants',
      category: 'Engineering & Code Optimization',
      icon: Code2,
      badge: 'Development',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      description: 'Website development, code generation, debugging, and performance optimization for clean execution.',
      workflowUse: [
        'Modern React, TypeScript, and responsive CSS generation',
        'Code debugging & speed optimization (Core Web Vitals)',
        'SEO schema markup & accessibility compliance checks'
      ]
    }
  ];

  return (
    <section id="ai-tech" className="py-24 bg-neutral-950 border-b border-neutral-800/80 relative overflow-hidden">
      {/* Subtle purple-blue-pink ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-900/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Workflow & Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Powered by AI & Modern Technology
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            We clearly distinguish the professional tools we use in our creative workflow from the tangible services we deliver. By pairing modern AI tools with industry-standard platforms like WordPress, Hostinger, CorelDRAW, and Adobe Illustrator, our studio produces faster turnaround times, surgical vector precision, and production-grade stability.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-amber-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2 font-medium">
                    How We Use It:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {tool.workflowUse.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Difference Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-blue-950/40 to-neutral-900 border border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300">
              Tools vs Deliverables Guarantee
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              You receive 100% finished, human-perfected, and print-tested project deliverables.
            </h4>
            <p className="text-xs text-neutral-400 max-w-2xl">
              AI accelerates our ideation and layout testing, but every line of code, typography curve, and print dieline is refined and verified by our creative team before handover.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity whitespace-nowrap inline-flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Start With Our Stack</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
