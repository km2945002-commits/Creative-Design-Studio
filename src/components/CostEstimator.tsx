import React, { useState } from 'react';
import { Sliders, Check, ArrowRight, ShieldCheck, Clock, Layers } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface CostEstimatorProps {
  services: ServiceItem[];
  preselectedServiceId?: string;
  onProceedToBrief: (specs: {
    serviceName: string;
    tier: string;
    estimatedCost: number;
    estimatedDays: number;
    addons: string[];
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  services,
  preselectedServiceId,
  onProceedToBrief
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || 'web-apps'
  );
  const [tier, setTier] = useState<'essential' | 'professional' | 'marquee'>('professional');

  // Addons
  const [rushDelivery, setRushDelivery] = useState(false);
  const [fullSourceFiles, setFullSourceFiles] = useState(true);
  const [physicalProofRun, setPhysicalProofRun] = useState(false);
  const [extendedRevisions, setExtendedRevisions] = useState(false);

  // Base pricing logic by service in PKR
  const basePrices: Record<string, { essential: number; professional: number; marquee: number; days: number }> = {
    'web-apps': { essential: 180000, professional: 250000, marquee: 480000, days: 28 },
    'business-cards': { essential: 35000, professional: 55000, marquee: 95000, days: 5 },
    'logos-design': { essential: 55000, professional: 95000, marquee: 180000, days: 7 },
    'products-design': { essential: 85000, professional: 140000, marquee: 260000, days: 10 },
    'flex-banner-design': { essential: 30000, professional: 50000, marquee: 95000, days: 4 }
  };

  const currentServiceConfig = basePrices[selectedServiceId] || basePrices['web-apps'];
  const baseCost = currentServiceConfig[tier];

  // Calculate Addon Costs in PKR
  const rushCost = rushDelivery ? Math.round(baseCost * 0.25) : 0;
  const sourceCost = fullSourceFiles ? 25000 : 0;
  const proofCost = physicalProofRun ? 35000 : 0;
  const revisionsCost = extendedRevisions ? 20000 : 0;

  const totalCost = baseCost + rushCost + sourceCost + proofCost + revisionsCost;
  const totalDays = rushDelivery
    ? Math.max(2, Math.round(currentServiceConfig.days * 0.6))
    : currentServiceConfig.days;

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];

  const handleStartBrief = () => {
    const addonsList: string[] = [];
    if (rushDelivery) addonsList.push('48hr Expedited Priority');
    if (fullSourceFiles) addonsList.push('Full Unflattened Source Vectors / Git Repo');
    if (physicalProofRun) addonsList.push('Physical Calibration Press Proof');
    if (extendedRevisions) addonsList.push('Unlimited Iterative Revision Rounds');

    onProceedToBrief({
      serviceName: activeService.name,
      tier: tier.toUpperCase(),
      estimatedCost: totalCost,
      estimatedDays: totalDays,
      addons: addonsList
    });
  };

  return (
    <section id="estimator" className="py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Transparent Project Calculator</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Zero Hidden Fees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Configure Your Production Specifications
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
            Select your discipline, service tier, and production add-ons to calculate instant budget allocations and delivery timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configuration Options (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-neutral-900/40 p-6 sm:p-8 rounded-2xl border border-neutral-800">
            {/* Step 1: Discipline Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                1. Select Service Pillar
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedServiceId === svc.id
                        ? 'border-amber-400 bg-neutral-850 text-white shadow-md'
                        : 'border-neutral-800 bg-neutral-950/70 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{svc.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{svc.shortTag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope Tier */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                2. Project Tier & Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setTier('essential')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    tier === 'essential'
                      ? 'border-amber-400 bg-neutral-850 text-white'
                      : 'border-neutral-800 bg-neutral-950/70 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Tier 01</div>
                  <div className="text-sm font-bold text-white mt-1">Essential</div>
                  <div className="text-xs text-neutral-400 mt-1">Core deliverables for focused launches</div>
                </button>

                <button
                  onClick={() => setTier('professional')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    tier === 'professional'
                      ? 'border-amber-400 bg-neutral-850 text-white ring-1 ring-amber-400/30'
                      : 'border-neutral-800 bg-neutral-950/70 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400">Recommended</div>
                  <div className="text-sm font-bold text-white mt-1">Professional</div>
                  <div className="text-xs text-neutral-400 mt-1">Complete system + production proofing</div>
                </button>

                <button
                  onClick={() => setTier('marquee')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    tier === 'marquee'
                      ? 'border-amber-400 bg-neutral-850 text-white'
                      : 'border-neutral-800 bg-neutral-950/70 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Tier 03</div>
                  <div className="text-sm font-bold text-white mt-1">Marquee Studio</div>
                  <div className="text-xs text-neutral-400 mt-1">Flagship scale, full rights & priority</div>
                </button>
              </div>
            </div>

            {/* Step 3: Production Add-ons */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                3. Optional Production Enhancements
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-neutral-950/60 cursor-pointer hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={rushDelivery}
                      onChange={(e) => setRushDelivery(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-400 focus:ring-amber-400 bg-neutral-900 border-neutral-700"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">48hr Fast-Track Proofing</div>
                      <div className="text-[11px] text-neutral-400">Compress production turnaround by 40%</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-300 tabular-nums">
                    +{Math.round(baseCost * 0.25) > 0 ? `PKR ${Math.round(baseCost * 0.25).toLocaleString()}` : 'PKR 0'}
                  </span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-neutral-950/60 cursor-pointer hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={fullSourceFiles}
                      onChange={(e) => setFullSourceFiles(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-400 focus:ring-amber-400 bg-neutral-900 border-neutral-700"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Unflattened Source Files (.AI / .FIG / Git Repo)</div>
                      <div className="text-[11px] text-neutral-400">100% intellectual property & master files</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-300 tabular-nums">+PKR 25,000</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-neutral-950/60 cursor-pointer hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={physicalProofRun}
                      onChange={(e) => setPhysicalProofRun(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-400 focus:ring-amber-400 bg-neutral-900 border-neutral-700"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Physical Color Swatch & Press Proof Run</div>
                      <div className="text-[11px] text-neutral-400">Hardcopy print proof couriered to your desk</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-300 tabular-nums">+PKR 35,000</span>
                </label>
              </div>
            </div>
          </div>

          {/* Pricing Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-6 shadow-2xl sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Estimate Breakdown
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {activeService.name}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono uppercase">
                {tier}
              </span>
            </div>

            {/* Calculated Pricing Display */}
            <div className="space-y-1">
              <span className="text-xs text-neutral-400 font-mono">Estimated Investment</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                PKR {totalCost.toLocaleString()}
              </div>
              <p className="text-xs text-neutral-400 pt-1">
                All taxes & standard delivery assets included.
              </p>
            </div>

            {/* Timeline & Inclusions */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Production Timeline:</span>
                </span>
                <strong className="text-white font-mono tabular-nums">
                  ~{totalDays} Business Days
                </strong>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Deliverables Count:</span>
                </span>
                <strong className="text-white font-mono tabular-nums">
                  {activeService.deliverables.length} Assets & Formats
                </strong>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Quality Guarantee:</span>
                </span>
                <strong className="text-emerald-400 font-mono">
                  100% Press & Code Verified
                </strong>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleStartBrief}
              className="w-full py-3.5 bg-neutral-100 hover:bg-white text-neutral-950 font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg hover:shadow-white/10 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Transfer to Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[11px] text-neutral-400">
              No deposit required to configure. Initial discovery consult is free.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
