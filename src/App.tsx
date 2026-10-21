/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { SolutionsSection } from './components/SolutionsSection';
import { MockupStudio } from './components/MockupStudio';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [briefInitialData, setBriefInitialData] = useState<{
    serviceName?: string;
    tier?: string;
    estimatedCost?: number;
    estimatedDays?: number;
    addons?: string[];
  } | null>(null);

  const handleOpenBrief = (serviceIdentifier?: string) => {
    if (serviceIdentifier) {
      const found = SERVICES_DATA.find(
        (s) => s.id === serviceIdentifier || s.name === serviceIdentifier || s.category === serviceIdentifier
      );
      setBriefInitialData({
        serviceName: found ? found.name : serviceIdentifier
      });
    } else {
      setBriefInitialData(null);
    }
    setIsBriefModalOpen(true);
  };

  const handleConfigureService = (serviceId: string) => {
    const targetElement = document.getElementById(`service-${serviceId}`) || document.getElementById('services');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090e] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar onOpenBrief={handleOpenBrief} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          services={SERVICES_DATA}
          onSelectService={handleConfigureService}
          onOpenBrief={handleOpenBrief}
        />

        {/* 2. Our Services (6 Premium Service Cards) */}
        <ServicesSection
          services={SERVICES_DATA}
          onConfigureService={handleConfigureService}
          onOpenBrief={handleOpenBrief}
        />

        {/* 3. Powered by AI & Modern Technology */}
        <TechStackSection />

        {/* 4. Website Development Solutions */}
        <SolutionsSection onOpenBrief={handleOpenBrief} />

        {/* Live Interactive Spec Studio */}
        <MockupStudio />

        {/* 5. Graphic Design Portfolio with Live User Upload */}
        <PortfolioSection onOpenBrief={handleOpenBrief} />

        {/* 6. Our Working Process (4 Steps) */}
        <ProcessSection />

        {/* 7. Why Choose Creative Design Studio? (No fake stats/reviews) */}
        <WhyChooseSection onOpenBrief={() => handleOpenBrief()} />

        {/* 8. About Us */}
        <AboutSection onOpenBrief={() => handleOpenBrief()} />

        {/* 9. Contact & Get a Quote (Direct On-Page Form & WhatsApp) */}
        <ContactSection />
      </main>

      {/* Footer with Suhan Islamabad Pakistan & km2945002@gmail.com */}
      <Footer onOpenBrief={handleOpenBrief} />

      {/* Interactive Project Quote Modal */}
      <ContactModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        initialData={briefInitialData}
      />
    </div>
  );
}
