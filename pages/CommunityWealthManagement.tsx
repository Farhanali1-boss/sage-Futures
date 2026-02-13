import React from "react";
import Reveal from "../components/Reveal";

const CommunityWealthManagement: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Community Wealth Management</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Community Wealth Management is the coordinated stewardship of land, capital, infrastructure, and relationships to ensure long-term stability and prosperity in South DeKalb County.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Pillars</h2>
          <ul className="space-y-3 text-base md:text-lg text-brand-charcoal/80 list-disc list-inside max-w-3xl">
            <li>Sustainable development</li>
            <li>Capital alignment</li>
            <li>Asset retention</li>
            <li>Governance coordination</li>
            <li>Ecological integration</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default CommunityWealthManagement;
