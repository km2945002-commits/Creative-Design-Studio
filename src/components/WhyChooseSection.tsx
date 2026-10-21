import React from 'react';
import { 
  Sparkles, 
  PenTool, 
  Monitor, 
  Globe, 
  Server, 
  Printer, 
  BadgePercent, 
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface WhyChooseProps {
  onOpenBrief: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseProps> = ({ onOpenBrief }) => {
  const differentiators = [
    {
      title: 'AI-Powered Creative Workflow',
      icon: Sparkles,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
      description: 'We leverage AI tools to rapidly generate layout concepts, explore creative variations, and accelerate project execution without cutting corners.'
    },
    {
      title: 'Professional Graphic Design',
      icon: PenTool,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-500/10 border-pink-500/20',
      description: 'High-standard visual aesthetics crafted with care, emphasizing balanced proportions, refined typography, and purposeful color harmony.'
    },
    {
      title: 'Modern Responsive Websites',
      icon: Monitor,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      description: 'Every layout is engineered to look sharp, load fast, and operate smoothly across mobile phones, tablets, laptops, and desktop screens.'
    },
    {
      title: 'WordPress Website Development',
      icon: Globe,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      description: 'Flexible, customized WordPress solutions that allow you to manage your own content, blog posts, and products easily after handover.'
    },
    {
      title: 'Hostinger Hosting & Deployment Assistance',
      icon: Server,
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20',
      description: 'Step-by-step guidance connecting custom domains, SSL certificates, business email accounts, and fast cloud hosting on Hostinger.'
    },
    {
      title: 'CorelDRAW Print-Ready Designs',
      icon: Printer,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      description: 'Mathematical vector precision with exact CMYK color profiles, 3mm press bleed margins, and crop marks for seamless physical printing.'
    },
    {
      title: 'Affordable Project Packages',
      icon: BadgePercent,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      description: 'Transparent, upfront pricing in PKR with zero hidden costs. Tailored scope packages to fit startups, local shops, and established businesses.'
    },
    {
      title: 'Clear Communication & Timely Delivery',
      icon: Clock,
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10 border-orange-500/20',
      description: 'Direct contact via WhatsApp and email, transparent milestone updates, and committed delivery schedules with no endless delays.'
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Commitments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Choose Creative Design Studio?
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            We focus on honest craftsmanship, clear deliverables, and modern technology. Here are the core pillars that guide our work with every client.
          </p>
        </div>

        {/* 8 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${item.bgColor} group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">
              Ready to bring your digital or print idea to life?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Get in touch for a transparent price quote and project discussion.
            </p>
          </div>
          <button
            onClick={onOpenBrief}
            className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 whitespace-nowrap"
          >
            <span>Get a Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
