
import React from "react";
import Reveal from "../components/Reveal";
import founderImage from "../images/founder.jpg";

const About: React.FC = () => {
  return (
    <div className="fade-in pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal as="section" className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal">About Sage Futures</h1>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed">
            Sage Futures is a 501(c)(3) community development corporation centering sustainable lifestyles and development in the Black community.
          </p>
        </Reveal>

        <Reveal as="section" className="space-y-10" delayMs={160}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-brass">Meet Our Founder</h2>
          <div className="grid gap-8 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-start">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-brand-brass/20" aria-hidden="true" />
              <img
                src={founderImage}
                alt="Nia Harper"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal">Nia Harper</h3>
              <p>
                Nia Harper has always had a passion for social and economic justice. She has used this passion to direct her career choices. As an economic developer, she has 15 years of policy, workforce and strategic business development experience combined, Nia has worked in leadership roles that call on her knowledge in entrepreneurship, project management and strategic partnerships in both the private and public sectors, including the federal government, prominent law firms, university systems, and large non-profit organizations all aimed at improving underserved communities in wealth creation and maintenance.
              </p>
              <p>
                Ms. Harper is also an entrepreneur whose consulting services focus on solutions for community financial self-sufficiency and the successful scaling of black family owned businesses (New Paradigm Workforce Solutions, LLC) and black woman-owned small businesses for job creation; she understands the positive impact that the creation of viable wealth building options can have on empowering a community.
              </p>
              <p>
                The culmination of her experience, talents, education, and her passion led Nia to join FUSE Corps and support Invest Atlanta in creating programs and policies that influence wealth creation in Black and Brown households, businesses, and communities in the SouthWest Atlanta area where she resides. Recently, Nia served as a Sustainability Ambassador for the City of Atlanta; where she learned and provided recommendations for long term strategic initiatives with inclusive and eco-friendly solutions to citywide challenges.
              </p>
              <p>
                Nia is a founding member of Sage Futures Community Development Corporation that has a mission to lead development using sustainability to rebuild, innovate, and reskill for a balanced lifestyle in black communities. Nia is also a proud member of the illustrious Zeta Phi Beta Sorority, Incorporated. As a Mother of three magnificent daughters, it is important to note that of all the titles held, Nia wears the title of Mother most proudly and is constantly motivated to make the world a better place for the generations that follow.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
