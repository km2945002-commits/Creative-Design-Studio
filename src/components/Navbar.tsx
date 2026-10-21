import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBrief: (prefilledService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'AI & Tech', href: '#ai-tech' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-amber-400 text-neutral-950 flex items-center justify-center font-extrabold text-xs tracking-tighter group-hover:scale-105 transition-transform shadow-md">
              CDS
            </div>
            <span className="font-extrabold">Creative Design <span className="text-amber-400">Studio</span></span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923199774681"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>+92 319 9774681</span>
            </a>

            <button
              onClick={() => onOpenBrief()}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-md active:scale-95 inline-flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-20 z-30 bg-neutral-950/95 border-b border-neutral-800 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <a
                href="https://wa.me/923199774681"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +92 319 9774681</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrief();
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 to-pink-400 rounded-xl"
              >
                Get a Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
