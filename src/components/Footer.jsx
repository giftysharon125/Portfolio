import React from 'react';
import { Heart, Code, Terminal, ArrowUp } from 'lucide-react';
import { CoffeeMascot } from './CuteMascots';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-mascot-row">
            <CoffeeMascot size={32} />
            <div className="footer-speech-bubble">
              <span>See you in the next build! 👋</span>
            </div>
          </div>
          <p className="footer-tagline">
            Built with curiosity, caffeine & a little bit of debugging. ☕
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-copyright">
            © 2026 Gifty Sharon. All rights reserved.
          </p>
          <div className="footer-dev-icons">
            <Code size={14} title="Clean Code" />
            <span>•</span>
            <Terminal size={14} title="CLI & DevOps" />
            <span>•</span>
            <Heart size={14} title="Built with Care" />
          </div>
        </div>

        <div className="footer-right">
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            title="Back to Top"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} className="ml-1.5 inline" />
          </button>
        </div>
      </div>
    </footer>
  );
}
