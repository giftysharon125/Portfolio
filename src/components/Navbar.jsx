import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Terminal } from 'lucide-react';
import CuteComputer from './CuteComputer';

export default function Navbar({ onOpenResume, onOpenTerminal, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'workflow', label: 'How I Build' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled-blur' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollTo('home')}>
          <div className="brand-mascot-icon">
            <CuteComputer placement="nav" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Gifty Sharon</span>
            <span className="brand-tag">Frontend Engineer & AI</span>
          </div>
        </div>

        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button 
            className="action-icon-btn"
            onClick={onOpenTerminal}
            title="Open Interactive Terminal ($ whoami)"
            aria-label="Open Interactive Terminal"
          >
            <Terminal size={18} />
          </button>

          <button 
            className="action-icon-btn"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className="resume-nav-btn"
            onClick={onOpenResume}
          >
            <FileText size={15} className="mr-1.5 inline" />
            Resume
          </button>

          <button 
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay fadeIn">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <div className="mobile-menu-divider" />
            <button 
              className="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <FileText size={16} className="mr-2 inline" />
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
