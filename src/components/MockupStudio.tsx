import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  CreditCard,
  Sparkles,
  Box,
  Flag,
  RotateCw,
  Eye,
  Sliders,
  Check,
  Download,
  Share2,
  Maximize2
} from 'lucide-react';

export const MockupStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'card' | 'logo' | 'product' | 'banner'>('web');

  // Web & App Visualizer State
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [simulatedAppTab, setSimulatedAppTab] = useState<'home' | 'analytics' | 'shop'>('home');
  const [appTheme, setAppTheme] = useState<'dark' | 'light'>('dark');

  // Business Card Visualizer State
  const [cardStock, setCardStock] = useState<'cotton' | 'obsidian' | 'emerald'>('obsidian');
  const [foilFinish, setFoilFinish] = useState<'gold' | 'copper' | 'silver' | 'deboss'>('gold');
  const [cardName, setCardName] = useState('Alexander Sterling');
  const [cardTitle, setCardTitle] = useState('Managing Partner');
  const [cardCompany, setCardCompany] = useState('Creative Design Studio');
  const [nfcActive, setNfcActive] = useState(true);

  // Logo Design Visualizer State
  const [logoName, setLogoName] = useState('CREATIVE DESIGN');
  const [logoSubtitle, setLogoSubtitle] = useState('STUDIO & LABS');
  const [logoStyle, setLogoStyle] = useState<'monogram' | 'geometric' | 'serif' | 'minimal'>('monogram');
  const [logoSurface, setLogoSurface] = useState<'dark' | 'light' | 'appicon' | 'plaque'>('dark');

  // Product Packaging Visualizer State
  const [productType, setProductType] = useState<'dropper' | 'box' | 'canister'>('dropper');
  const [productBrandName, setProductBrandName] = useState('AURA BOTANICALS');
  const [productVariant, setProductVariant] = useState('HYDRATION & GLOW NO. 1');
  const [finishSheen, setFinishSheen] = useState<'matte' | 'gloss' | 'amber'>('amber');

  // Flex Banner Visualizer State
  const [bannerType, setBannerType] = useState<'billboard' | 'rollup' | 'social'>('rollup');
  const [showGrommets, setShowGrommets] = useState(true);
  const [showBleedLines, setShowBleedLines] = useState(true);
  const [bannerHeadline, setBannerHeadline] = useState('ARCHITECTURAL INNOVATION 2026');
  const [bannerSubline, setBannerSubline] = useState('Redefining The Future Skyline · Global Symposium');

  return (
    <section id="mockup-studio" className="py-20 bg-neutral-900/50 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Live Interactive Spec Studio</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Real-Time Simulation</span>
          </div>

          <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
            <span>Build websites, edit layouts visually, and preview changes live.</span>
            <span className="block mt-1 text-neutral-300">
              Live website and Apps design, Brand identity, Products Design, Flex/Banner Design and preview
            </span>
          </p>
        </div>

        {/* Studio Discipline Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-neutral-800">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'web'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Websites & Apps Develop</span>
          </button>

          <button
            onClick={() => setActiveTab('card')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'card'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Business Card Design</span>
          </button>

          <button
            onClick={() => setActiveTab('logo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'logo'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Logos Design</span>
          </button>

          <button
            onClick={() => setActiveTab('product')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'product'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>Products & Packaging</span>
          </button>

          <button
            onClick={() => setActiveTab('banner')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'banner'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <Flag className="w-4 h-4" />
            <span>Flex & Banner Signage</span>
          </button>
        </div>

        {/* WORKSPACE AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visualizer Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 min-h-[500px] flex flex-col justify-between relative overflow-hidden shadow-2xl">


            {/* TAB 1: WEBSITES & APPS DEVELOP */}
            {activeTab === 'web' && (
              <div className="flex-1 flex flex-col items-center justify-center py-4">
                <div
                  className={`w-full transition-all duration-300 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl ${
                    deviceView === 'desktop'
                      ? 'max-w-2xl'
                      : deviceView === 'tablet'
                      ? 'max-w-md'
                      : 'max-w-xs'
                  } ${appTheme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'}`}
                >
                  {/* Browser / App Header */}
                  <div
                    className={`px-4 py-2.5 border-b flex items-center justify-between text-xs ${
                      appTheme === 'dark'
                        ? 'bg-neutral-950/80 border-neutral-800 text-neutral-400'
                        : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                      <div className="w-2 h-2 rounded-full bg-green-400/80" />
                    </div>
                    <span className="font-mono text-[10px] truncate max-w-[200px]">
                      https://app.creativedesign.studio/nova
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">0.72s (Cached)</span>
                  </div>

                  {/* Simulated App Content */}
                  <div className="relative overflow-hidden aspect-[16/9] w-full bg-[#1c1927]">
                    <img
                      src="/assets/aistudio/Creative_Design_Lab_35e325dd.jpg"
                      alt="Creative Labs - Making Potential Possible"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BUSINESS CARD DESIGN */}
            {activeTab === 'card' && (
              <div className="flex-1 flex flex-col items-center justify-center py-6">
                <div
                  className={`relative w-full max-w-md aspect-[1.75/1] rounded-xl p-8 flex flex-col justify-between transition-all duration-500 shadow-2xl border ${
                    cardStock === 'cotton'
                      ? 'bg-[#f7f5f0] text-neutral-900 border-[#e5e0d4]'
                      : cardStock === 'obsidian'
                      ? 'bg-[#0f1012] text-neutral-100 border-neutral-800'
                      : 'bg-[#0a2318] text-[#f0fdf4] border-emerald-950'
                  }`}
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Card Stock Texture Watermark & Edge Indicator */}
                  <div className="absolute top-3 right-4 flex items-center gap-2">
                    {nfcActive && (
                      <div className="flex items-center gap-1 text-[10px] font-mono tracking-wider opacity-60">
                        <span>NFC TAP READY</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Foil Header / Monogram */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`font-serif tracking-widest text-lg font-bold transition-all ${
                        foilFinish === 'gold'
                          ? 'text-amber-300 drop-shadow-[0_1px_2px_rgba(217,119,6,0.6)]'
                          : foilFinish === 'copper'
                          ? 'text-rose-400 drop-shadow-[0_1px_2px_rgba(225,29,72,0.6)]'
                          : foilFinish === 'silver'
                          ? 'text-slate-200 drop-shadow-[0_1px_3px_rgba(255,255,255,0.7)]'
                          : 'text-neutral-500/70 font-normal tracking-wider'
                      }`}
                    >
                      {cardCompany.toUpperCase()}
                    </div>
                    <div className="w-7 h-7 rounded-full border border-current opacity-40 flex items-center justify-center text-[10px] font-mono">
                      CD
                    </div>
                  </div>

                  {/* Card Contact Center Details */}
                  <div className="space-y-1">
                    <div
                      className={`text-xl sm:text-2xl font-bold tracking-tight font-serif ${
                        foilFinish === 'gold'
                          ? 'text-amber-200'
                          : foilFinish === 'copper'
                          ? 'text-rose-300'
                          : foilFinish === 'silver'
                          ? 'text-slate-100'
                          : cardStock === 'cotton' ? 'text-neutral-800' : 'text-neutral-200'
                      }`}
                    >
                      {cardName || 'Alexander Sterling'}
                    </div>
                    <div className="text-xs tracking-widest uppercase opacity-75 font-mono">
                      {cardTitle || 'Managing Partner'}
                    </div>
                  </div>

                  {/* Card Contact Footprint */}
                  <div className="flex items-center justify-between text-[11px] opacity-75 border-t border-current/20 pt-3 font-mono">
                    <span>+1 (800) 492-3810</span>
                    <span aria-hidden="true">·</span>
                    <span>studio@creativedesign.com</span>
                    <span aria-hidden="true">·</span>
                    <span>LONDON / NEW YORK</span>
                  </div>
                </div>

                <div className="mt-4 text-center text-xs text-neutral-400">
                  <span>Selected: </span>
                  <strong className="text-neutral-200">
                    {cardStock === 'cotton' ? '600gsm Cotton Warm White' : cardStock === 'obsidian' ? '700gsm Obsidian Duplex' : '650gsm Forest Suede'}
                  </strong>
                  <span> with </span>
                  <strong className="text-amber-400">
                    {foilFinish.toUpperCase()} HOT FOIL FINISH
                  </strong>
                </div>
              </div>
            )}

            {/* TAB 3: LOGO DESIGN */}
            {activeTab === 'logo' && (
              <div className="flex-1 flex flex-col items-center justify-center py-6">
                <div
                  className={`w-full max-w-lg aspect-[1.8/1] rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 border ${
                    logoSurface === 'dark'
                      ? 'bg-neutral-900 border-neutral-800 text-white'
                      : logoSurface === 'light'
                      ? 'bg-[#f8f6f0] border-neutral-300 text-neutral-950'
                      : logoSurface === 'appicon'
                      ? 'bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-700 text-amber-300'
                      : 'bg-[#2b241c] border-amber-900/60 text-[#dfc39a]'
                  }`}
                >
                  {/* Logo Symbol Based on Selected Style */}
                  <div className="mb-4">
                    {logoStyle === 'monogram' && (
                      <div className="w-16 h-16 rounded-2xl border-2 border-current flex items-center justify-center text-2xl font-bold font-serif tracking-tighter">
                        CD
                      </div>
                    )}
                    {logoStyle === 'geometric' && (
                      <div className="w-16 h-16 grid grid-cols-2 gap-1 p-2 border border-current/40 rounded-lg">
                        <div className="bg-current rounded-sm opacity-90" />
                        <div className="border border-current rounded-sm opacity-50" />
                        <div className="border border-current rounded-sm opacity-50" />
                        <div className="bg-current rounded-sm opacity-90" />
                      </div>
                    )}
                    {logoStyle === 'serif' && (
                      <div className="text-4xl font-serif italic font-bold tracking-tight">
                        &
                      </div>
                    )}
                    {logoStyle === 'minimal' && (
                      <div className="w-16 h-4 border-b-2 border-t-2 border-current" />
                    )}
                  </div>

                  {/* Primary Wordmark */}
                  <h3
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-center ${
                      logoStyle === 'serif' ? 'font-serif' : 'font-sans'
                    }`}
                  >
                    {logoName || 'CREATIVE DESIGN'}
                  </h3>

                  {/* Subtitle / Descriptor */}
                  <p className="text-xs uppercase tracking-[0.25em] opacity-75 mt-1 font-mono">
                    {logoSubtitle || 'STUDIO & LABS'}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-neutral-400">
                  <span>Scalable Vector Master (SVG · AI · EPS)</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">Grid Aligned 100%</span>
                </div>
              </div>
            )}

            {/* TAB 4: PRODUCTS & PACKAGING DESIGN */}
            {activeTab === 'product' && (
              <div className="flex-1 flex flex-col items-center justify-center py-4">
                <div className="w-full max-w-md relative aspect-[1.5/1] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
                  <img
                    src="/src/assets/images/product_packaging_mockup_1792475190943.jpg"
                    alt="Product Packaging Design Preview"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">
                      3D Structural Packaging Master
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {productBrandName} · {productVariant}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-neutral-300 mt-2 font-mono">
                      <span>30ml Dropper Dieline</span>
                      <span aria-hidden="true">·</span>
                      <span>FSC Certified Cotton Board</span>
                      <span aria-hidden="true">·</span>
                      <span>Blind Deboss</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center text-xs text-neutral-400">
                  <span>Regulatory Panels, Barcode (UPC/EAN) & Dielines included with all packaging packages.</span>
                </div>
              </div>
            )}

            {/* TAB 5: FLEX & BANNER DESIGN */}
            {activeTab === 'banner' && (
              <div className="flex-1 flex flex-col items-center justify-center py-4">
                <div
                  className={`w-full transition-all duration-300 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 relative shadow-2xl ${
                    bannerType === 'billboard'
                      ? 'max-w-2xl aspect-[2.4/1]'
                      : bannerType === 'rollup'
                      ? 'max-w-xs aspect-[1/2]'
                      : 'max-w-xl aspect-[16/9]'
                  }`}
                >
                  <img
                    src="/src/assets/images/banner_flex_signage_1792475191382.jpg"
                    alt="Flex banner display"
                    className="w-full h-full object-cover"
                  />

                  {/* Bleed Guidelines Overlay */}
                  {showBleedLines && (
                    <div className="absolute inset-3 border border-dashed border-red-500/70 pointer-events-none flex items-start justify-end p-1">
                      <span className="text-[9px] font-mono text-red-400 bg-black/70 px-1 rounded">
                        50mm Safe Bleed Margin
                      </span>
                    </div>
                  )}

                  {/* Grommets / Brass Eyelets Simulation */}
                  {showGrommets && (
                    <>
                      <div className="absolute top-2 left-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                    </>
                  )}

                  {/* Banner Content Scrim */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400">
                      {bannerType === 'billboard' ? '12m x 6m Outdoor Frontlit PVC' : bannerType === 'rollup' ? '850mm x 2000mm Roll-Up Stand' : 'Digital Event Companion'}
                    </span>
                    <div className="text-sm font-extrabold text-white mt-0.5 leading-tight">
                      {bannerHeadline}
                    </div>
                    <div className="text-[11px] text-neutral-300 mt-1 line-clamp-1">
                      {bannerSubline}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-neutral-400">
                  <span>Calibrated for 510gsm Weatherproof PVC & Solvent Ink Printing</span>
                </div>
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px]">
                MODE: {activeTab === 'web' ? 'RESPONSIVE VIEWPORT' : activeTab === 'card' ? '3D FOIL SIMULATOR' : activeTab === 'logo' ? 'VECTOR IDENTITY LAB' : activeTab === 'product' ? 'STRUCTURAL 3D PACK' : 'PRINT BLEED & SCALE'}
              </span>
              <a
                href="#estimator"
                className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Configure Specs in Pricing Calculator →
              </a>
            </div>
          </div>

          {/* Interactive Controls Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-neutral-900/80 rounded-2xl border border-neutral-800 p-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 text-sm font-bold text-white">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Interactive Controls</span>
            </div>

            {/* CONTROLS FOR TAB 1: WEBSITES & APPS */}
            {activeTab === 'web' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Viewport Form Factor
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setDeviceView('desktop')}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                        deviceView === 'desktop'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setDeviceView('tablet')}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                        deviceView === 'tablet'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Tablet className="w-4 h-4" />
                      <span>Tablet</span>
                    </button>
                    <button
                      onClick={() => setDeviceView('mobile')}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                        deviceView === 'mobile'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Interface Theme
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setAppTheme('dark')}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                        appTheme === 'dark'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Obsidian Dark
                    </button>
                    <button
                      onClick={() => setAppTheme('light')}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                        appTheme === 'light'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Editorial White
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 space-y-2 text-xs text-neutral-400">
                  <div className="flex justify-between">
                    <span>Performance Rating:</span>
                    <strong className="text-emerald-400">99 / 100 Grade A</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Stack Architecture:</span>
                    <strong className="text-white">React 19 + TypeScript</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobile First:</span>
                    <strong className="text-white">Yes, Adaptive PWA</strong>
                  </div>
                </div>
              </div>
            )}

            {/* CONTROLS FOR TAB 2: BUSINESS CARDS */}
            {activeTab === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Paper Stock Weight
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setCardStock('cotton')}
                      className={`py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${
                        cardStock === 'cotton'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      600g Cotton
                    </button>
                    <button
                      onClick={() => setCardStock('obsidian')}
                      className={`py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${
                        cardStock === 'obsidian'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      700g Obsidian
                    </button>
                    <button
                      onClick={() => setCardStock('emerald')}
                      className={`py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${
                        cardStock === 'emerald'
                          ? 'border-amber-400 bg-neutral-800 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      650g Suede
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Hot Foil Stamping Finish
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setFoilFinish('gold')}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                        foilFinish === 'gold' ? 'border-amber-400 bg-neutral-800 text-amber-300' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Kurz Gold Foil
                    </button>
                    <button
                      onClick={() => setFoilFinish('copper')}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                        foilFinish === 'copper' ? 'border-amber-400 bg-neutral-800 text-rose-300' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Rose Copper
                    </button>
                    <button
                      onClick={() => setFoilFinish('silver')}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                        foilFinish === 'silver' ? 'border-amber-400 bg-neutral-800 text-slate-200' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Silver Chrome
                    </button>
                    <button
                      onClick={() => setFoilFinish('deboss')}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                        foilFinish === 'deboss' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Blind Deboss
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    placeholder="Enter cardholder name..."
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    placeholder="Enter title..."
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
                  <span className="text-xs text-neutral-300">Contactless NFC Chip</span>
                  <button
                    onClick={() => setNfcActive(!nfcActive)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      nfcActive ? 'bg-emerald-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {nfcActive ? 'Enabled (vCard Sync)' : 'Disabled'}
                  </button>
                </div>
              </div>
            )}

            {/* CONTROLS FOR TAB 3: LOGO DESIGN */}
            {activeTab === 'logo' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    value={logoName}
                    onChange={(e) => setLogoName(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Tagline / Category
                  </label>
                  <input
                    type="text"
                    value={logoSubtitle}
                    onChange={(e) => setLogoSubtitle(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Logo Architecture Style
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setLogoStyle('monogram')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        logoStyle === 'monogram' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Monogram Mark
                    </button>
                    <button
                      onClick={() => setLogoStyle('geometric')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        logoStyle === 'geometric' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Geometric Seal
                    </button>
                    <button
                      onClick={() => setLogoStyle('serif')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        logoStyle === 'serif' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Editorial Serif
                    </button>
                    <button
                      onClick={() => setLogoStyle('minimal')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        logoStyle === 'minimal' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Architectural Bar
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Surface Environment
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setLogoSurface('dark')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        logoSurface === 'dark' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Obsidian Slate
                    </button>
                    <button
                      onClick={() => setLogoSurface('light')}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        logoSurface === 'light' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Warm Stationery
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* CONTROLS FOR TAB 4: PRODUCTS & PACKAGING */}
            {activeTab === 'product' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Product Title
                  </label>
                  <input
                    type="text"
                    value={productBrandName}
                    onChange={(e) => setProductBrandName(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Formula / Variant Line
                  </label>
                  <input
                    type="text"
                    value={productVariant}
                    onChange={(e) => setProductVariant(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2 border-t border-neutral-800 space-y-2 text-xs text-neutral-400">
                  <div className="flex justify-between">
                    <span>Structural Dieline:</span>
                    <strong className="text-white">Custom CAD Cut & Crease</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Regulatory Sizing:</span>
                    <strong className="text-emerald-400">FDA & EU Cosmetics</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>3D Renders:</span>
                    <strong className="text-amber-400">300 DPI Studio Lit</strong>
                  </div>
                </div>
              </div>
            )}

            {/* CONTROLS FOR TAB 5: FLEX & BANNER */}
            {activeTab === 'banner' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-2 uppercase tracking-wider">
                    Banner Display Format
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setBannerType('rollup')}
                      className={`py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${
                        bannerType === 'rollup' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Roll-Up Stand
                    </button>
                    <button
                      onClick={() => setBannerType('billboard')}
                      className={`py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${
                        bannerType === 'billboard' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Billboard Flex
                    </button>
                    <button
                      onClick={() => setBannerType('social')}
                      className={`py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${
                        bannerType === 'social' ? 'border-amber-400 bg-neutral-800 text-white' : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}
                    >
                      Digital Banner
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1 uppercase tracking-wider">
                    Banner Headline
                  </label>
                  <input
                    type="text"
                    value={bannerHeadline}
                    onChange={(e) => setBannerHeadline(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300">Show Safe Bleed Box</span>
                    <button
                      onClick={() => setShowBleedLines(!showBleedLines)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium cursor-pointer ${
                        showBleedLines ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {showBleedLines ? 'Visible' : 'Hidden'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300">Reinforced Eyelets</span>
                    <button
                      onClick={() => setShowGrommets(!showGrommets)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium cursor-pointer ${
                        showGrommets ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {showGrommets ? 'Mounted' : 'Off'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
