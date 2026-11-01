import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import EngineeringWorkflow from './components/EngineeringWorkflow';
import DeveloperJourney from './components/DeveloperJourney';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage';
import TerminalModal from './components/TerminalModal';
import EasterEggs from './components/EasterEggs';
import DesktopFolderShortcuts from './components/DesktopFolderShortcuts';
import SocialBannerStrip from './components/SocialBannerStrip';
import './styles/index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFullResume, setShowFullResume] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync with browser hash routing for direct sharing #resume
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#resume') {
        setShowFullResume(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setShowFullResume(false);
      }
    };

    if (window.location.hash === '#resume') {
      setShowFullResume(true);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openResume = () => {
    window.location.hash = 'resume';
    setShowFullResume(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeResume = () => {
    window.location.hash = '';
    setShowFullResume(false);
  };

  if (showFullResume) {
    return (
      <div className="portfolio-app-root">
        <ResumePage onBack={closeResume} />
      </div>
    );
  }

  return (
    <div className="portfolio-app-root">
      <Navbar
        onOpenResume={openResume}
        onOpenTerminal={() => setTerminalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <DesktopFolderShortcuts onOpenResume={openResume} />

      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <SocialBannerStrip onOpenTerminal={() => setTerminalOpen(true)} />
        
        <About />
        <SocialBannerStrip onOpenTerminal={() => setTerminalOpen(true)} />

        <Projects />
        <SocialBannerStrip onOpenTerminal={() => setTerminalOpen(true)} />

        <Achievements />

        <Certifications />

        <Skills />
        <EngineeringWorkflow />
        <DeveloperJourney />
        <GitHubSection />

        <Contact />
      </main>

      <Footer />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <EasterEggs />
    </div>
  );
}
