import React from 'react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { Mail, Terminal } from 'lucide-react';

export default function SocialBannerStrip({ onOpenTerminal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="social-banner-strip" aria-label="Social & Quick Tools Banner">
      <a 
        href="https://www.linkedin.com/in/gifty-sharon-b1781b3ab/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-pill-btn linkedin"
        title="LinkedIn Profile"
      >
        <LinkedinIcon size={20} />
      </a>

      <a 
        href="https://github.com/giftysharon125" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-pill-btn github"
        title="GitHub Profile"
      >
        <GithubIcon size={20} />
      </a>

      <button 
        className="social-pill-btn email"
        onClick={() => scrollTo('contact')}
        title="Contact Form"
      >
        <Mail size={19} />
      </button>

      <button 
        className="social-pill-btn terminal"
        onClick={onOpenTerminal}
        title="Interactive Terminal ($ whoami)"
      >
        <Terminal size={19} />
      </button>
    </div>
  );
}
