import React from 'react';
import { ArrowRight, MessageSquare, Terminal, Sparkles } from 'lucide-react';
import CuteComputer from './CuteComputer';
import { 
  CoffeeMascot, 
  DatabaseMascot, 
  CloudMascot, 
  RobotMascot, 
  TerminalMascot, 
  CodeBracketsMascot 
} from './CuteMascots';

export default function Hero({ onOpenTerminal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="floating-developer-universe" aria-hidden="true">
        <div className="floating-item item-1" title="Coffee Mascot ☕">
          <CoffeeMascot size={40} tooltip="Fueling code line by line! ☕" />
        </div>
        <div className="floating-item item-2" title="Terminal Mascot 💻">
          <TerminalMascot size={42} />
        </div>
        <div className="floating-item item-3" title="Sleeping Database 💾">
          <DatabaseMascot size={42} />
        </div>
        <div className="floating-item item-4" title="Happy Cloud ☁️">
          <CloudMascot size={44} />
        </div>
        <div className="floating-item item-5" title="Cute AI Robot 🤖">
          <RobotMascot size={42} />
        </div>
        <div className="floating-item item-6" title="Code Brackets {}">
          <CodeBracketsMascot size={40} />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Seeking Software Engineering Internships</span>
            <Sparkles size={14} className="ml-1 text-purple-600 inline" />
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">Gifty Sharon</span>.
          </h1>

          <h2 className="hero-subheading">
            Frontend Engineer & AI Developer · CSE Student
          </h2>

          <p className="hero-statement">
            “I craft beautiful, interactive frontend experiences and love building smart AI applications.”
          </p>

          <p className="hero-description">
            I'm a Frontend Engineer passionate about building delightful web interfaces, interactive applications, and AI-driven experiences that turn complex intelligence into seamless user products.
          </p>

          <div className="hero-cta-group">
            <button className="primary-cta-btn" onClick={() => scrollTo('projects')}>
              <span>View My Work</span>
              <ArrowRight size={18} className="ml-2 inline" />
            </button>

            <button className="secondary-cta-btn" onClick={() => scrollTo('contact')}>
              <MessageSquare size={16} className="mr-2 inline" />
              <span>Let's Connect</span>
            </button>

            <button className="terminal-cta-btn" onClick={onOpenTerminal} title="Open Terminal Easter Egg">
              <Terminal size={16} className="mr-1.5 inline" />
              <span>$ whoami</span>
            </button>
          </div>
        </div>

        <div className="hero-mascot-universe">
          <div className="hero-computer-card">
            <CuteComputer placement="hero" />
            <div className="computer-card-footer">
              <span className="mascot-tag">Gifty's Mascot Companion</span>
              <span className="mascot-status">Click computer to say hi! 👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
