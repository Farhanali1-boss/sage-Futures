import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const CommunityCapital: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Community Capital &amp; Infrastructure</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures is strengthening community capital readiness in South DeKalb County by preparing small businesses, families, and development initiatives to access aligned funding pathways.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-6" delayMs={80}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Capital Readiness &amp; Intermediation</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Liquidity, our capital enablement initiative, supports readiness, strategy, and alignment when capital is part of the solution.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed">Funding is never guaranteed. Participation is optional.</p>
          <h3 className="text-base font-serif text-brand-charcoal mt-6">Services include:</h3>
          <ul className="list-disc list-inside text-base text-brand-charcoal/80 space-y-2">
            <li>Loan packaging support</li>
            <li>Capital stack development</li>
            <li>Grant alignment strategy</li>
            <li>Lender navigation</li>
          </ul>
          <div className="pt-4">
            <Link
              to="/contact?subject=Liquidity%20Support"
              className="inline-block bg-brand-sage text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-brass transition-all duration-300"
            >
              Inquire About Liquidity Support
            </Link>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-4 pt-8 border-t border-brand-stone/30" delayMs={160}>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Over the next three years, Sage Futures is strengthening its operational and governance capacity to expand community capital infrastructure in South DeKalb County.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default CommunityCapital;
