
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Advisory from './pages/Advisory';
import Services from './pages/Services';
import Partnerships from './pages/Pricing';
import AnalogVillage from './pages/AnalogVillage';
import Liquidity from './pages/Liquidity';
import About from './pages/About';
import Impact from './pages/Impact';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalCTA from './components/GlobalCTA';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-offwhite">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/analog-village" element={<AnalogVillage />} />
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <GlobalCTA />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
