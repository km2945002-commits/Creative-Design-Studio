import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight, 
  X, 
  ExternalLink, 
  Check, 
  Sparkles, 
  Upload, 
  Plus, 
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';

interface PortfolioSectionProps {
  onOpenBrief: (serviceCategory?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBrief }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'logo' | 'business-card' | 'product' | 'banner' | 'brand-identity' | 'web-app'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [customProjects, setCustomProjects] = useState<PortfolioProject[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Custom upload form states
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'logo' | 'business-card' | 'product' | 'banner' | 'brand-identity' | 'web-app'>('logo');
  const [uploadTagline, setUploadTagline] = useState('');
  const [uploadImage, setUploadImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allProjects = [...customProjects, ...PORTFOLIO_PROJECTS];

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCustomProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle || !uploadImage) return;

    const categoryLabels: Record<string, string> = {
      'logo': 'Logo Design',
      'business-card': 'Business Card Design',
      'product': 'Product & Packaging Design',
      'banner': 'Flex & Banner Design',
      'brand-identity': 'Brand Identity',
      'web-app': 'Website & App UI Design'
    };

    const newProject: PortfolioProject = {
      id: `custom-${Date.now()}`,
      title: uploadTitle,
      client: 'Studio Client Design',
      category: uploadCategory,
      categoryLabel: categoryLabels[uploadCategory] || 'Custom Project',
      tagline: uploadTagline || 'Custom graphic design project uploaded to studio portfolio.',
      imageSrc: uploadImage,
      toolsUsed: 'CorelDRAW · Adobe Illustrator · Creative Design Studio',
      deliverables: [
        'Print-ready high-resolution master file',
        'Transparent PNG and high-quality JPG',
        'Vector and source files as agreed'
      ],
      specifications: {
        format: 'Custom Project Specification',
        finishOrStack: 'Client Uploaded Artwork',
        timeline: 'Completed'
      }
    };

    setCustomProjects([newProject, ...customProjects]);
    setIsUploadModalOpen(false);
    setUploadTitle('');
    setUploadTagline('');
    setUploadImage('');
  };

  return (
    <section id="portfolio" className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Showcase & Work Samples</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Graphic Design Portfolio
            </h2>
            <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
              Explore our creative work across websites, logo identities, business cards, packaging dielines, and grand-format flex banners.
            </p>
          </div>

          {/* User Design Upload Button */}
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-xs font-bold uppercase tracking-wider transition-all border border-neutral-700/80 inline-flex items-center gap-2 cursor-pointer shadow-md self-start md:self-auto shrink-0"
          >
            <Upload className="w-4 h-4 text-amber-400" />
            <span>Upload Your Own Design</span>
          </button>
        </div>

        {/* 6 Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
          {[
            { id: 'all', label: `All Work (${allProjects.length})` },
            { id: 'logo', label: 'Logo Design' },
            { id: 'business-card', label: 'Business Card Design' },
            { id: 'product', label: 'Product & Packaging' },
            { id: 'banner', label: 'Flex & Banner Design' },
            { id: 'brand-identity', label: 'Brand Identity' },
            { id: 'web-app', label: 'Website & App UI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-neutral-100 text-neutral-950 shadow-md font-bold'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/70 hover:border-neutral-700 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 px-3 py-1 rounded-md text-[11px] font-mono text-neutral-200">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-900">
                <span className="font-mono text-[11px] text-neutral-400">
                  {project.toolsUsed}
                </span>
                <span className="text-amber-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Project Inspection */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  {selectedProject.categoryLabel} · {selectedProject.client}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 text-xs">
                <span className="font-mono text-[11px] text-neutral-400 uppercase block font-semibold">
                  Tools & Production Stack:
                </span>
                <p className="text-white font-mono">{selectedProject.toolsUsed}</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                  Delivered Files & Specifications:
                </span>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-neutral-400">
                  Format: <span className="text-white">{selectedProject.specifications.format}</span>
                </div>
                <button
                  onClick={() => {
                    const cat = selectedProject.title;
                    setSelectedProject(null);
                    onOpenBrief(cat);
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Inquire for Similar Design</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Upload Your Own Design */}
        {isUploadModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Upload className="w-5 h-5 text-amber-400" />
                  <span>Upload Your Own Design</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Add your own design or mockup to the showcase gallery to test presentation.
                </p>
              </div>

              <form onSubmit={handleAddCustomProject} className="space-y-4 text-xs">
                {/* Project Title */}
                <div className="space-y-1">
                  <label className="font-mono uppercase text-neutral-400 block font-medium">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g. Modern Minimalist Coffee Label"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1">
                  <label className="font-mono uppercase text-neutral-400 block font-medium">
                    Category *
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="logo">Logo Design</option>
                    <option value="business-card">Business Card Design</option>
                    <option value="product">Product & Packaging Design</option>
                    <option value="banner">Flex & Banner Design</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="web-app">Website & App UI Design</option>
                  </select>
                </div>

                {/* Tagline */}
                <div className="space-y-1">
                  <label className="font-mono uppercase text-neutral-400 block font-medium">
                    Brief Description
                  </label>
                  <input
                    type="text"
                    value={uploadTagline}
                    onChange={(e) => setUploadTagline(e.target.value)}
                    placeholder="e.g. Vector logo created in CorelDRAW with gold foil finish"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* File Upload Box */}
                <div className="space-y-1.5">
                  <label className="font-mono uppercase text-neutral-400 block font-medium">
                    Upload Image File *
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {uploadImage ? (
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 group">
                      <img
                        src={uploadImage}
                        alt="Uploaded preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-xs"
                      >
                        Change Image
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-neutral-700 hover:border-amber-400 rounded-xl p-6 text-center cursor-pointer transition-colors bg-neutral-900/50 space-y-2"
                    >
                      <ImageIcon className="w-8 h-8 text-neutral-400 mx-auto" />
                      <div className="text-white font-medium">Click to select image</div>
                      <div className="text-[11px] text-neutral-400">PNG, JPG, WebP supported</div>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUploadModalOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-neutral-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!uploadTitle || !uploadImage}
                    className="px-5 py-2.5 rounded-lg font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 to-pink-400 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    Add to Showcase
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
