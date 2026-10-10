import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EngineeringWorkflow from './components/EngineeringWorkflow';
import DeveloperJourney from './components/DeveloperJourney';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import TerminalModal from './components/TerminalModal';
import EasterEggs from './components/EasterEggs';
import DesktopFolderShortcuts from './components/DesktopFolderShortcuts';
import SocialBannerStrip from './components/SocialBannerStrip';
import './styles/index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="portfolio-app-root">
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <DesktopFolderShortcuts onOpenResume={() => setResumeOpen(true)} />

      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <SocialBannerStrip onOpenTerminal={() => setTerminalOpen(true)} />
        
        <About />
        <SocialBannerStrip onOpenTerminal={() => setTerminalOpen(true)} />

        <Projects />
        <SocialBannerStrip onOpenTerminal={() => setTerminalOpen(true)} />

        <Skills />
        <EngineeringWorkflow />
        <DeveloperJourney />
        <GitHubSection />

        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <EasterEggs />
    </div>
  );
}
