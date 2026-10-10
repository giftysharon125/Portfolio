import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/skillsData';
import { 
  CodeBracketsMascot, 
  ServerNodeMascot, 
  RobotMascot, 
  DatabaseMascot, 
  DockerContainerMascot, 
  CloudMascot, 
  TerminalMascot 
} from './CuteMascots';

export default function Skills() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const getCategoryMascot = (title) => {
    switch (title) {
      case 'Languages': return <CodeBracketsMascot size={32} />;
      case 'Backend': return <ServerNodeMascot size={32} />;
      case 'Frontend': return <CloudMascot size={32} />;
      case 'Databases': return <DatabaseMascot size={32} />;
      case 'AI / ML': return <RobotMascot size={32} />;
      case 'Cloud & DevOps': return <DockerContainerMascot size={32} />;
      case 'Tools': return <TerminalMascot size={32} />;
      default: return <CodeBracketsMascot size={32} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="os-window-card">
          <div className="os-window-header">
            <div className="os-window-path">
              <span>C:\GIFTY\skills</span>
            </div>
            <div className="os-window-controls">
              <span className="os-close-btn">x</span>
            </div>
          </div>

          <div className="os-window-body">
            <div className="section-header text-center">
              <span className="section-eyebrow">
                <Sparkles size={14} className="inline mr-1.5" />
                Technical Stack
              </span>
              <h2 className="section-title">Skills & Tools</h2>
              <p className="section-subtitle">
                Frontend frameworks, AI models, languages, and developer tools used across my project portfolio.
              </p>
            </div>

            <div className="skills-categories-grid">
              {SKILLS_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="skills-category-card">
                  <div className="cat-card-header">
                    <div className="cat-icon-wrap">{getCategoryMascot(cat.title)}</div>
                    <h3>{cat.title}</h3>
                  </div>

                  <div className="cat-skills-wrap">
                    {cat.skills.map((skill, sIdx) => {
                      const tooltipKey = `${cat.title}-${skill.name}`;
                      const isHovered = activeTooltip === tooltipKey;

                      return (
                        <div
                          key={sIdx}
                          className={`skill-pill ${isHovered ? 'hovered' : ''}`}
                          onMouseEnter={() => setActiveTooltip(tooltipKey)}
                          onMouseLeave={() => setActiveTooltip(null)}
                          tabIndex={0}
                          role="tooltip"
                          aria-label={`${skill.name}: Used in ${skill.usedIn}`}
                        >
                          <span className="skill-dot"></span>
                          <span className="skill-name">{skill.name}</span>

                          {isHovered && (
                            <div className="skill-tooltip-bubble bounce-in">
                              <div className="tooltip-title">{skill.name}</div>
                              <div className="tooltip-context">
                                <span className="used-label">Used in:</span> {skill.usedIn}
                              </div>
                              <div className="tooltip-arrow"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
