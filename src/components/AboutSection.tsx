import React from 'react';
import { Sparkles, MapPin, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBrief: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBrief }) => {
  return (
    <section id="about" className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[350px] bg-purple-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-500/10 border border-pink-500/30 text-pink-300">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>About Creative Design Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Ideas. Our Creativity. Smarter Solutions.
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Creative Design Studio combines AI-powered tools, modern web technologies, and professional graphic design software to deliver creative solutions for businesses and brands. From website development and app design to logos, packaging, business cards, and advertising banners, we help turn ideas into professional digital and print experiences.
            </p>

            {/* Core Values / Working Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dual Creative Mastery</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Equally proficient in digital software engineering (React, WordPress, Hostinger) and physical print production (CorelDRAW vector, CMYK press).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Transparent Partnerships</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Honest timelines, clear deliverable packages in PKR, direct communication, and handover of all agreed master and source files.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBrief}
                className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-colors"
              >
                <span>Get Contact Details</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Card & Contact Badge (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-7 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-extrabold text-neutral-950 text-sm shadow-md">
                    CDS
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Creative Design Studio</h3>
                    <span className="text-xs text-neutral-400">Digital Agency & Print Studio</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Open for Commissions
                </span>
              </div>

              {/* Verified Studio Location & Contact */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">Studio Base</span>
                    <strong className="text-white text-xs">Suhan Islamabad, Pakistan</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <Mail className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">Inquiries Email</span>
                    <a href="mailto:km2945002@gmail.com" className="text-white hover:text-amber-300 font-medium transition-colors">
                      km2945002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">Direct WhatsApp & Mobile</span>
                    <a href="https://wa.me/923199774681" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-300 font-medium transition-colors">
                      +92 319 9774681
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed font-mono">
                Serving businesses, clinics, restaurants, and retail brands across Pakistan and globally with digital and print-ready creative solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
