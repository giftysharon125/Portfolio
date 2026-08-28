import React from 'react';
import { GraduationCap, Code, Server, Bot, Container, Briefcase, Sparkles } from 'lucide-react';
import { JOURNEY_TIMELINE } from '../data/journeyData';

export default function DeveloperJourney() {
  const getTimelineIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={18} className="text-purple-600" />;
      case 'Code': return <Code size={18} className="text-blue-600" />;
      case 'Server': return <Server size={18} className="text-emerald-600" />;
      case 'Bot': return <Bot size={18} className="text-amber-600" />;
      case 'Container': return <Container size={18} className="text-cyan-600" />;
      case 'Briefcase': return <Briefcase size={18} className="text-pink-600" />;
      default: return <Sparkles size={18} className="text-purple-600" />;
    }
  };

  return (
    <section id="journey" className="journey-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-eyebrow">
            <Sparkles size={14} className="inline mr-1.5" />
            Milestones & Growth
          </span>
          <h2 className="section-title">My Developer Journey</h2>
          <p className="section-subtitle">
            From learning algorithms to building production backend microservices and AI pipelines.
          </p>
        </div>

        <div className="vertical-timeline-wrap">
          <div className="timeline-spine"></div>

          {JOURNEY_TIMELINE.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className={`timeline-row ${isEven ? 'left' : 'right'}`}>
                <div className="timeline-node-icon">
                  {getTimelineIcon(item.icon)}
                </div>

                <div className="timeline-card">
                  <div className="card-meta">
                    <span className="year-pill">{item.year}</span>
                    <span className="badge-pill">{item.badge}</span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-role">{item.role}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
