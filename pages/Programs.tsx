import React from "react";
import { Reveal } from "../components/Reveal";

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Programs</h1>
          <p className="text-base md:text-lg text-brand-charcoal/75 max-w-3xl leading-relaxed">
            Community-based initiatives supporting long-term wealth stability and environmental resilience in South DeKalb.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-10" delayMs={80}>
          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">Goddesses Garden</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed max-w-3xl">
              A community initiative advancing land stewardship, environmental education, and sustainable food systems in South DeKalb.
            </p>
          </div>

          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">WOW Kids</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed max-w-3xl">
              Youth-focused programming building environmental awareness, intergenerational connection, and community asset stewardship among young people in South DeKalb.
            </p>
          </div>

          <div className="bg-white p-8 border border-brand-stone/30 shadow-sm">
            <h2 className="text-lg font-serif text-brand-charcoal mb-3">EcoBator</h2>
            <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed max-w-3xl">
              Supporting emerging initiatives in sustainability, enterprise development, and community-based innovation within South DeKalb County.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Programs;
