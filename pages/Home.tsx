import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  return (
    <div className="fade-in pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] py-24 md:py-36 bg-brand-offwhite border-b border-brand-stone overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Community development"
            className="w-full h-full object-cover opacity-40 grayscale-[0.3] contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-offwhite/90 via-brand-offwhite/85 to-brand-sage/40 mix-blend-multiply z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <Reveal as="div" className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-charcoal leading-tight mb-6">
              Community Wealth Infrastructure for South DeKalb
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/85 leading-relaxed font-light max-w-2xl">
              Sage Futures is a South DeKalb–based 501(c)(3) Community Development Corporation advancing sustainable development through capital readiness, governance infrastructure, and equitable development partnerships.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-brand-sage text-white px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-brass transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Partner With Us
              </Link>
              <Link
                to="/programs"
                className="border border-brand-sage text-brand-sage px-10 py-5 text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-sage hover:text-white transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Our Work
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute right-0 bottom-0 w-1/4 h-full bg-brand-stone/20 hidden lg:block -skew-x-[20deg] origin-top translate-x-24 z-10" aria-hidden="true" />
      </section>

      {/* Mission Snapshot */}
      <section className="py-24 bg-white border-b border-brand-stone/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Reveal as="div" className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass">Mission Snapshot</p>
            <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
              Sage Futures advances long-term community wealth stability in South DeKalb County through sustainable development, capital alignment, and non-extractive economic strategy.
            </p>
            <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
              We focus on building durable systems of land stewardship, financial readiness, and development coordination that strengthen underserved communities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage mb-4">Our Focus Areas</h2>
          </Reveal>
          <Reveal as="div" className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
              <h3 className="text-lg font-serif text-brand-charcoal mb-3">Sustainable Housing &amp; Adaptive Reuse</h3>
              <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
                Supporting land stewardship and development coordination that preserves community assets and enables responsible reuse of existing structures.
              </p>
            </div>
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
              <h3 className="text-lg font-serif text-brand-charcoal mb-3">Community Capital Readiness</h3>
              <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
                Preparing small businesses, families, and development initiatives to access aligned funding pathways and build financial positioning.
              </p>
            </div>
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
              <h3 className="text-lg font-serif text-brand-charcoal mb-3">Enterprise &amp; Workforce Infrastructure</h3>
              <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
                Strengthening governance and collective infrastructure through training, relational coordination models, and institutional capacity.
              </p>
            </div>
            <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
              <h3 className="text-lg font-serif text-brand-charcoal mb-3">Intergenerational Asset Stability</h3>
              <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
                Building systems that support asset retention, long-term stewardship, and continuity across generations in South DeKalb communities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Demonstrated Capacity */}
      <section className="py-24 bg-white border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-sage">Demonstrated Capacity</h2>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Sage Futures has delivered:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-brand-charcoal/80 space-y-3">
              <li>Community-based sustainability programs</li>
              <li>Governance and collective infrastructure training</li>
              <li>Capital readiness and funding advisory support</li>
              <li>Strategic development advisement for emerging initiatives</li>
            </ul>
            <p className="text-base md:text-lg text-brand-charcoal/75 leading-relaxed">
              Through these engagements, we have strengthened financial positioning, institutional clarity, and long-term sustainability for partners in South DeKalb and Metro Atlanta.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-12 bg-brand-offwhite border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs md:text-sm text-brand-charcoal/60 leading-relaxed italic">
            This work is informed by Empress Evolutionary Economics (EEE), a sustainability-centered framework developed by Nia Harper.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
