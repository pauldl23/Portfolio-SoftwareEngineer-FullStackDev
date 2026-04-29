import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BioSection from './components/BioSection';
import Section3Services from './components/Section3Services';
import SocialSidebar from './components/SocialSidebar';
import IndicatorSidebar from './components/IndicatorSidebar';
import FooterControls from './components/FooterControls';
import Section4Works from './components/Section4Works';
import Section5Skills from './components/Section5Skills';
import Section6Projects from './components/Section6Projects';
import Section7Video from './components/Section7Video';
import Section8DataScience from './components/Section8DataScience';
import Section9Contact from './components/Section9Contact';
import NavOverlay from './components/NavOverlay';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState(1);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionNum = parseInt(entry.target.getAttribute('data-section'));
          setActiveSection(sectionNum);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (scrollContainerRef.current) {
      const sections = scrollContainerRef.current.querySelectorAll(':scope > .section-wrapper');
      sections.forEach((section) => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionNum) => {
    const sectionElement = document.querySelector(`[data-section="${sectionNum}"]`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app-container ${isNavOpen ? 'nav-open' : ''}`}>
      <div className="grain-overlay"></div>
      
      {/* Dynamic Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
          background: `radial-gradient(circle 400px at center, rgba(186, 255, 41, 0.05), transparent 80%)`
        }}
      ></div>
      
      {/* UI Overlays (The Frame) */}
      <div className="ui-overlay navbar-wrap">
        <Navbar />
      </div>

      <div className="ui-overlay sidebar-left-wrap">
        <SocialSidebar onMenuOpen={() => setIsNavOpen(true)} />
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <NavOverlay 
            isOpen={isNavOpen} 
            onClose={() => setIsNavOpen(false)} 
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>

      <main className={`scroll-container ${isNavOpen ? 'blurred-content' : ''}`} ref={scrollContainerRef}>
        <div className="section-wrapper" data-section="1">
          <HeroSection />
        </div>
        <div className="section-wrapper" data-section="2">
          <BioSection />
        </div>
        <div className="section-wrapper" data-section="3">
          <Section3Services />
        </div>
        <div className="section-wrapper" data-section="4">
          <Section4Works />
        </div>
        <div className="section-wrapper" data-section="5">
          <Section5Skills />
        </div>
        <div className="section-wrapper" data-section="6">
          <Section6Projects />
        </div>
        <div className="section-wrapper" data-section="7">
          <Section8DataScience />
        </div>
        <div className="section-wrapper" data-section="8">
          <Section7Video />
        </div>
        <div className="section-wrapper" data-section="9">
          <Section9Contact />
        </div>

      </main>

      <div className="ui-overlay sidebar-right-wrap">
        <IndicatorSidebar currentSection={activeSection} totalSections={9} />
      </div>

      <div className="ui-overlay footer-wrap">
        <FooterControls />
      </div>
    </div>
  );
}

export default App;

