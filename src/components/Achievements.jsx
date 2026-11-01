import React from 'react';
import { Trophy, Award, ExternalLink, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/achievementsData';
import { GithubIcon } from './SocialIcons';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <div className="os-window-card">
          <div className="os-window-header">
            <div className="os-window-path">
              <span>C:\GIFTY\achievements</span>
            </div>
            <div className="os-window-controls">
              <span className="os-close-btn">x</span>
            </div>
          </div>

          <div className="os-window-body">
            <div className="section-header text-center">
              <span className="section-eyebrow">
                <Trophy size={14} className="inline mr-1.5" />
                Hackathons & Recognitions
              </span>
              <h2 className="section-title">Honors & Achievements</h2>
              <p className="section-subtitle">
                Competitive engineering milestones, hackathon placements, and interdisciplinary team solutions.
              </p>
            </div>

            <div className="achievements-grid">
              {ACHIEVEMENTS_DATA.map((item) => (
                <div key={item.id} className="achievement-card">
                  <div className="achievement-header-row">
                    <div className="achievement-icon-wrap">
                      {item.icon === 'Trophy' ? (
                        <Trophy size={24} className="text-amber-500" />
                      ) : (
                        <Award size={24} className="text-emerald-600" />
                      )}
                    </div>
                    <div>
                      <span className="achievement-badge">{item.badge}</span>
                      <h3 className="achievement-title">{item.title}</h3>
                      <p className="achievement-event">{item.event}</p>
                    </div>
                  </div>

                  <p className="achievement-summary">{item.summary}</p>

                  <div className="achievement-role-box">
                    <span className="role-label">Role:</span>
                    <span className="role-text">{item.role}</span>
                  </div>

                  <ul className="achievement-points">
                    {item.takeaways.map((point, pIdx) => (
                      <li key={pIdx}>
                        <span className="point-bullet">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="achievement-footer">
                    <span className="project-tag">Project: <strong>{item.projectRef}</strong></span>
                    <div className="achievement-links-group" style={{ display: 'flex', gap: '8px' }}>
                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-link-btn"
                          title="View Live Platform"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-link-btn"
                          title="View Hackathon Repository"
                        >
                          <GithubIcon size={16} />
                          <span>View Code</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
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
