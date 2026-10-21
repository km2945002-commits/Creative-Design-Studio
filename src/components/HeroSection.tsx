import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Monitor, 
  Sparkles, 
  CreditCard, 
  Box, 
  Flag, 
  Palette, 
  ChevronRight, 
  Laptop, 
  Smartphone, 
  CheckCircle2,
  MessageCircle,
  FileText
} from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface HeroSectionProps {
  services: ServiceItem[];
  onSelectService: (serviceId: string) => void;
  onOpenBrief: (serviceId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  services,
  onSelectService,
  onOpenBrief
}) => {
  const [activeMockupTab, setActiveMockupTab] = useState<'laptop' | 'mobile' | 'logo' | 'cards' | 'packaging' | 'banner'>('laptop');

  const pillars = [
    { id: 'web-apps', name: 'Web & App Design', icon: Monitor },
    { id: 'logo-design', name: 'Logo Design', icon: Sparkles },
    { id: 'business-cards', name: 'Business Card Design', icon: CreditCard },
    { id: 'products-packaging', name: 'Products & Packaging', icon: Box },
    { id: 'flex-banner', name: 'Flex & Banner Design', icon: Flag },
    { id: 'brand-identity', name: 'Brand Identity', icon: Palette }
  ];

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-neutral-800 bg-[#08090e]">
      {/* Vibrant purple-blue-pink-orange glow accents */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-amber-500/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-gradient-to-b from-blue-600/15 to-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Editorial Subtitle Kicker */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-wider uppercase font-semibold text-neutral-400 mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 font-bold">
            Creative Design Studio
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>Suhan Islamabad, Pakistan</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Taking New Commissions
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Value Prop & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Creative Ideas. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">
                Smart AI. Powerful Digital Experiences.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              We transform your ideas into professional websites, apps, logos, and brand identities using modern AI tools, WordPress, Hostinger, CorelDRAW, and Adobe Illustrator. We help businesses build a powerful digital presence with creative design and smart technology.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBrief()}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity rounded-xl shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-700/80 rounded-xl hover:bg-neutral-800 hover:text-white transition-all inline-flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>

              <a
                href="https://wa.me/923199774681"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +92 319 9774681</span>
              </a>
            </div>

            {/* Pillars of Execution Bar */}
            <div className="pt-6 border-t border-neutral-800/80">
              <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-3 font-medium">
                Pillars of Execution:
              </span>
              <div className="flex flex-wrap gap-2">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => {
                        onSelectService(pillar.id);
                        const target = document.getElementById('services');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700"
                    >
                      <span className="font-mono text-[11px] text-amber-400 font-semibold">
                        {idx + 1}.
                      </span>
                      <Icon className="w-3.5 h-3.5" />
                      <span className="whitespace-nowrap">{pillar.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Multi-Device & Print Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/70 shadow-2xl backdrop-blur-md">
              {/* Showcase Category Switcher Tabs */}
              <div className="flex items-center gap-1 p-2 bg-neutral-950/80 border-b border-neutral-800 overflow-x-auto text-[11px]">
                <button
                  onClick={() => setActiveMockupTab('laptop')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeMockupTab === 'laptop'
                      ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Laptop Web</span>
                </button>

                <button
                  onClick={() => setActiveMockupTab('mobile')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeMockupTab === 'mobile'
                      ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile App</span>
                </button>

                <button
                  onClick={() => setActiveMockupTab('logo')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeMockupTab === 'logo'
                      ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Logo Mark</span>
                </button>

                <button
                  onClick={() => setActiveMockupTab('cards')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeMockupTab === 'cards'
                      ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>

                <button
                  onClick={() => setActiveMockupTab('packaging')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeMockupTab === 'packaging'
                      ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>Packaging</span>
                </button>

                <button
                  onClick={() => setActiveMockupTab('banner')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeMockupTab === 'banner'
                      ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>Flex</span>
                </button>
              </div>

              {/* Viewport Simulation Area */}
              <div className="p-5 min-h-[300px] flex items-center justify-center bg-neutral-950/60">
                {activeMockupTab === 'laptop' && (
                  <div className="w-full space-y-2">
                    {/* Realistic Laptop Screen Frame */}
                    <div className="rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl overflow-hidden">
                      <div className="px-3 py-1.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="font-mono text-neutral-400">https://creativedesign.studio</span>
                        <span className="text-emerald-400 font-mono text-[9px]">WordPress · Hostinger</span>
                      </div>
                      <div className="relative aspect-[16/9] bg-[#1a1728] overflow-hidden group">
                        <img
                          src="/assets/aistudio/Creative_Design_Lab_35e325dd.jpg"
                          alt="Creative Design Studio Website"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent flex items-end p-3">
                          <span className="text-white text-xs font-bold">Responsive E-Commerce & Corporate Website</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1 font-mono">
                      <span>Stack: WordPress / AI / Hostinger</span>
                      <span className="text-emerald-400">Fast Speed 0.7s</span>
                    </div>
                  </div>
                )}

                {activeMockupTab === 'mobile' && (
                  <div className="max-w-[240px] w-full mx-auto space-y-2">
                    {/* Realistic Smartphone Frame */}
                    <div className="rounded-[28px] p-2 bg-neutral-900 border-2 border-neutral-700 shadow-2xl">
                      <div className="rounded-[22px] overflow-hidden bg-neutral-950 border border-neutral-800">
                        <div className="h-5 bg-neutral-900 flex items-center justify-center">
                          <span className="w-16 h-3 rounded-full bg-neutral-950" />
                        </div>
                        <div className="aspect-[9/16] bg-[#1a1728] relative">
                          <img
                            src="/assets/aistudio/Creative_Design_Lab_35e325dd.jpg"
                            alt="Mobile Application Mockup"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-neutral-900/90 backdrop-blur-md border border-neutral-700 text-left">
                            <span className="text-[10px] uppercase font-mono text-amber-400 block">Mobile UI/UX</span>
                            <strong className="text-white text-xs block">Touch-Optimized Layout</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-[11px] text-neutral-400 font-mono">
                      Native iOS & Android Screen Calibrated
                    </div>
                  </div>
                )}

                {activeMockupTab === 'logo' && (
                  <div className="w-full space-y-3">
                    <div className="aspect-[16/10] rounded-xl border border-neutral-800 bg-[#161424] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                      <img
                        src="/assets/aistudio/Creative_Design_Lab_35e325dd.jpg"
                        alt="CorelDRAW Vector Logo Design"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                      <span>Engine: CorelDRAW & Adobe Illustrator</span>
                      <span className="text-amber-400">Master Vector (.CDR / .AI)</span>
                    </div>
                  </div>
                )}

                {activeMockupTab === 'cards' && (
                  <div className="w-full space-y-3">
                    <div className="aspect-[1.75/1] rounded-xl border border-neutral-700/80 bg-neutral-900 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-neutral-950 text-[10px]">
                            CD
                          </div>
                          <span className="text-xs font-bold text-white tracking-wider">CREATIVE DESIGN STUDIO</span>
                        </div>
                        <span className="text-[10px] font-mono text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded">
                          300 DPI CMYK
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-white">Mortaza Khan</div>
                        <div className="text-[11px] text-neutral-400">Creative Lead & Digital Architect</div>
                        <div className="text-[10px] font-mono text-neutral-400 pt-1">
                          Suhan Islamabad, Pakistan · +92 319 9774681
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                      <span>Print Standard: Front & Back + Bleeds</span>
                      <span className="text-purple-400">Ready to Print</span>
                    </div>
                  </div>
                )}

                {activeMockupTab === 'packaging' && (
                  <div className="w-full space-y-3">
                    <div className="aspect-[16/10] rounded-xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="w-24 h-32 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-700 flex flex-col items-center justify-between p-3 shadow-xl">
                        <div className="w-4 h-1 rounded-full bg-amber-400/60" />
                        <div className="text-[10px] font-bold text-white uppercase tracking-tighter">
                          CREATIVE LABS<br />BOX MOCKUP
                        </div>
                        <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
                      </div>
                      <span className="text-xs font-semibold text-white mt-3">Product Box & Label Dieline Simulation</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                      <span>Dieline Cut & Crease Guides</span>
                      <span className="text-pink-400">3D Mockup Included</span>
                    </div>
                  </div>
                )}

                {activeMockupTab === 'banner' && (
                  <div className="w-full space-y-3">
                    <div className="aspect-[2.4/1] rounded-xl border border-neutral-700 bg-neutral-900 p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">
                          OUTDOOR GRAND-FORMAT FLEX BANNER
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full border border-amber-400" />
                          <span className="w-2 h-2 rounded-full border border-amber-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-white tracking-tight uppercase">
                          GROW YOUR BUSINESS DIGITALLY
                        </h4>
                        <p className="text-[11px] text-neutral-300">
                          Websites · Apps · Logos · Business Cards · Flex Signage
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
                        <span>Grommet Guides · CMYK Inks</span>
                        <span>Call/WhatsApp: +92 319 9774681</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                      <span>CorelDRAW Large-Format Specs</span>
                      <span className="text-emerald-400">Print-Ready PDF/TIFF</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-400">
                  Interactive Preview: <strong className="text-white capitalize">{activeMockupTab} Spec</strong>
                </span>
                <button
                  onClick={() => onOpenBrief(activeMockupTab)}
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Inquire for This Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
