import React, { useState } from 'react';
import { Folder, Terminal, Zap, ExternalLink, ChevronDown, ChevronUp, Droplet, Sparkles, Gamepad2 } from 'lucide-react';
import { MINI_PROJECTS } from '../data/projectsData';

export default function MiniProjects() {
  const [isExpanded, setIsExpanded] = useState(true);

  const getMiniIcon = (iconName) => {
    switch (iconName) {
      case 'Droplet': return <Droplet size={18} className="text-cyan-500" />;
      case 'IceCream': return <Sparkles size={18} className="text-pink-500" />;
      case 'Gamepad2': return <Gamepad2 size={18} className="text-purple-600" />;
      case 'Terminal': return <Terminal size={18} className="text-purple-600" />;
      case 'Zap': return <Zap size={18} className="text-emerald-600" />;
      default: return <Folder size={18} className="text-indigo-600" />;
    }
  };

  return (
    <div className="mini-projects-container">
      <div 
        className="mini-projects-header" 
        onClick={() => setIsExpanded(!isExpanded)}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
      >
        <div className="header-left">
          <div className="folder-icon-badge">
            <Folder size={20} className="text-purple-600" />
          </div>
          <div>
            <h3>Tiny Builds & Experiments</h3>
            <p>Mini utilities, scripts, and playground projects from my engineering desk</p>
          </div>
        </div>

        <div className="toggle-btn">
          <span>{isExpanded ? 'Collapse Desk' : 'Open Desk'}</span>
          {isExpanded ? <ChevronUp size={18} className="ml-1" /> : <ChevronDown size={18} className="ml-1" />}
        </div>
      </div>

      {isExpanded && (
        <div className="mini-projects-grid fadeIn">
          {MINI_PROJECTS.map((item) => (
            <div key={item.id} className="mini-card">
              <div className="mini-card-top">
                <div className="mini-icon">{getMiniIcon(item.icon)}</div>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mini-link-btn"
                  title="View Repository"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <h4 className="mini-title">{item.title}</h4>
              <span className="mini-tech-badge">{item.tech}</span>
              <p className="mini-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
