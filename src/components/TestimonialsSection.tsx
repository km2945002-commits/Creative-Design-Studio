import React from 'react';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'Creative Design rebuilt our e-commerce web platform and responsive mobile app from the ground up. In the six months following launch, our mobile checkout completion rate increased by 142% and page load times dropped below 0.8 seconds.',
      author: 'Marcus Vance',
      role: 'Chief Brand Officer',
      company: 'Nova Apparel & Lifestyle Group',
      discipline: 'Websites & Apps Develop',
      impact: '+142% Mobile Checkout Rate'
    },
    {
      quote: 'Our partners frequently present at private banking summits across Geneva, London, and New York. The 700gsm cotton cards with gilded edges and embedded contactless NFC create an immediate reaction of respect from ultra-high-net-worth clients.',
      author: 'James Whittaker',
      role: 'Founder & Senior Partner',
      company: 'Aurélien Wealth Management',
      discipline: 'Business Card Design',
      impact: '700gsm Luxury Cotton + NFC'
    },
    {
      quote: 'The Aurora brand identity manual and vector system solved a massive architectural scaling challenge for us. The mark looks breathtaking etched into brushed steel door fixtures as well as on construction site billboards 40 feet wide.',
      author: 'Eleanor Vance',
      role: 'Principal Architect',
      company: 'Aurora Architecture Studio',
      discipline: 'Logos Design',
      impact: 'Unified 48-Page Identity Manual'
    },
    {
      quote: 'Our Parisian organic cosmetic line required packaging that satisfied stringent European regulatory declarations while standing out on luxury department store shelves. Their 3D renders helped us secure over $840,000 in retail buyer pre-orders.',
      author: 'Dr. Sophie Laurent',
      role: 'Founding Formulator',
      company: 'Aura Botanicals Paris',
      discipline: 'Products & Packaging',
      impact: '$840,000 Pre-Orders Secured'
    },
    {
      quote: 'We commissioned a 12-meter outdoor flex banner and 14 exhibition roll-ups for our international architectural symposium. The color calibration and razor-sharp resolution made our keynote stage look world-class to 8,500 delegates.',
      author: 'Klaus Reinhardt',
      role: 'Operations Director',
      company: 'ArchInno Global Summit',
      discipline: 'Flex & Banner Design',
      impact: '8,500 Delegates Welcomed'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-neutral-900/30 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Client Evidence & Verifiable Outcomes</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Real Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Trusted by Ambitious Brands Worldwide
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
            Read direct feedback from executives, founders, and creative directors who rely on Creative Design for their brand assets and digital flagships.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90">
                    {item.discipline}
                  </span>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-serif italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <div>
                  <div className="text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[11px] text-neutral-400">
                    {item.role}, <span className="text-neutral-300">{item.company}</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded inline-block">
                  Result: {item.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
