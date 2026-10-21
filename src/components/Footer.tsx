import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBrief: (serviceCategory?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrief }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      {/* Top Banner CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 py-14 border-b border-neutral-850">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Have an upcoming website, branding, or print project?
            </h3>
            <p className="text-neutral-400 text-sm max-w-xl">
              From responsive WordPress websites on Hostinger to precision CorelDRAW business cards, packaging, and grand-format banners.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center lg:justify-end gap-3">
            <button
              onClick={() => onOpenBrief()}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 text-neutral-950 font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer hover:opacity-95"
            >
              <span>Get a Project Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3 text-lg font-bold tracking-tight text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-neutral-950 flex items-center justify-center font-extrabold text-xs tracking-tighter">
              CDS
            </div>
            <span>Creative Design Studio</span>
          </div>

          <p className="text-neutral-300 leading-relaxed text-xs max-w-sm">
            Creative Design is multdisciplinary company develop modern websites and mobile apps, design professional business cards and logos, create attractive product designs, and deliver eye-catching flex and banner designs to make your business stand out.
          </p>

          <div className="space-y-2 text-neutral-300 font-mono text-[11px] pt-1">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Suhan Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-pink-400 shrink-0" />
              <a href="mailto:km2945002@gmail.com" className="hover:text-amber-300 transition-colors">
                km2945002@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="https://wa.me/923199774681" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                +92 319 9774681 (WhatsApp Available)
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Digital Services */}
        <div className="space-y-3">
          <h4 className="font-mono uppercase text-[11px] tracking-wider text-white font-semibold">
            Digital Services
          </h4>
          <ul className="space-y-2 text-neutral-400 text-xs">
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Websites & Apps Design
              </a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-white transition-colors">
                WordPress & E-Commerce
              </a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-white transition-colors">
                Hostinger Deployment
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Logo Design
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Brand Identity Systems
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Print & Graphic Production */}
        <div className="space-y-3">
          <h4 className="font-mono uppercase text-[11px] tracking-wider text-white font-semibold">
            Print & Physical
          </h4>
          <ul className="space-y-2 text-neutral-400 text-xs">
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Business Card Design
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Products & Packaging
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Flex & Banner Design
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                CorelDRAW Vector Masters
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                300 DPI CMYK Bleeds
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="font-mono uppercase text-[11px] tracking-wider text-white font-semibold">
            Studio
          </h4>
          <ul className="space-y-2 text-neutral-400 text-xs">
            <li>
              <a href="#ai-tech" className="hover:text-white transition-colors">
                AI & Tech Stack
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white transition-colors">
                Graphic Portfolio
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-white transition-colors">
                Working Process
              </a>
            </li>
            <li>
              <a href="#why-choose" className="hover:text-white transition-colors">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About Our Studio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact & Quote
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Colophon Strip */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-[11px]">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Creative Design Studio. All rights reserved.</span>
          <span className="text-neutral-700">·</span>
          <span>Suhan Islamabad, Pakistan</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/923199774681"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Inquiry</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
