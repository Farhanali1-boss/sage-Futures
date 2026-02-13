import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import EcosystemPuzzle from "../components/EcosystemPuzzle";

const PROGRAMS = [
  {
    title: "Capital Readiness",
    sublabel: "Liquidity",
    description: "Preparing small businesses, families, and development initiatives to access aligned funding pathways. Services include loan packaging, capital stack development, grant alignment, and lender navigation.",
    link: "/community-capital",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Capital and financial readiness",
  },
  {
    title: "Asset Stewardship",
    sublabel: "Unfinished Business",
    description: "Strategic advisory and technical assistance for institutions working through legacy constraints, misalignment, and systems repair. Governance strengthening and institutional alignment.",
    link: "/training-advisory",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Governance and institutional capacity",
  },
  {
    title: "Sustainable Land Use",
    sublabel: "Goddesses Garden",
    description: "Land stewardship, environmental education, and sustainable food systems in South DeKalb. Community gardens advancing resilience and connection to place.",
    link: "/programs",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Community garden",
  },
  {
    title: "Youth Pipeline",
    sublabel: "WOW Kids",
    description: "Youth-focused programming building environmental awareness, intergenerational connection, and community asset stewardship among young people in South DeKalb.",
    link: "/programs",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Youth and community",
  },
  {
    title: "Enterprise Incubation",
    sublabel: "EcoBator",
    description: "Supporting emerging initiatives in sustainability, enterprise development, and community-based innovation within South DeKalb County.",
    link: "/programs",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Enterprise and innovation",
  },
  {
    title: "Training Infrastructure",
    sublabel: "Triple U + Village",
    description: "Governance and collective infrastructure training, relational coordination models, Village Workshops, and strategic funding alignment for mission-aligned organizations.",
    link: "/training-advisory",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Community collaboration and training",
  },
];

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Programs</h1>
          <p className="text-base md:text-lg text-brand-charcoal/75 max-w-3xl leading-relaxed">
            Six interconnected initiatives supporting long-term wealth stability and environmental resilience in South DeKalb.
          </p>
        </Reveal>

        <Reveal as="section" delayMs={80}>
          <EcosystemPuzzle />
        </Reveal>

        <Reveal as="section" className="space-y-12" delayMs={120}>
          <h2 className="text-xl md:text-2xl font-serif text-brand-sage">Program Details</h2>
          <div className="space-y-12">
            {PROGRAMS.map((program, i) => (
              <div key={program.sublabel} className="bg-white border border-brand-stone/30 shadow-sm overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`relative h-48 md:h-64 md:min-h-[256px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={program.image}
                      alt={program.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-brass mb-1">{program.sublabel}</p>
                    <h3 className="text-lg font-serif text-brand-charcoal mb-3">{program.title}</h3>
                    <p className="text-sm md:text-base text-brand-charcoal/75 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <Link
                      to={program.link}
                      className="text-brand-sage font-semibold text-sm uppercase tracking-widest hover:text-brand-brass transition-colors w-fit"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Programs;
