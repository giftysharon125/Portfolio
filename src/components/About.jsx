import React, { useState } from 'react';
import { BookOpen, Hammer, AlertTriangle, Bug, TrendingUp, Rocket, Sparkles } from 'lucide-react';
import { CoffeeMascot } from './CuteMascots';

export default function About() {
  const [activeStage, setActiveStage] = useState(1);

  const philosophyStages = [
    {
      id: 1,
      title: 'Learn',
      icon: BookOpen,
      color: '#3B82F6',
      desc: 'Absorb computer science core principles, algorithms, DBMS design, and system architecture.'
    },
    {
      id: 2,
      title: 'Build',
      icon: Hammer,
      color: '#8B5CF6',
      desc: 'Translate theoretical concepts into real software — APIs, web apps, and vector search pipelines.'
    },
    {
      id: 3,
      title: 'Break things',
      icon: AlertTriangle,
      color: '#F59E0B',
      desc: 'Push code to edge conditions, stress-test webhook concurrency, and reveal unexpected bugs.'
    },
    {
      id: 4,
      title: 'Debug',
      icon: Bug,
      color: '#EF4444',
      desc: 'Trace stack frames methodically, resolve root causes cleanly, and prevent future regressions.'
    },
    {
      id: 5,
      title: 'Improve',
      icon: TrendingUp,
      color: '#10B981',
      desc: 'Refactor database queries, streamline API payloads, and polish client user experiences.'
    },
    {
      id: 6,
      title: 'Ship',
      icon: Rocket,
      color: '#EC4899',
      desc: 'Containerize with Docker, setup CI/CD pipelines, and deploy reliable products into production.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="os-window-card">
          <div className="os-window-header">
            <div className="os-window-path">
              <span>C:\GIFTY\about</span>
            </div>
            <div className="os-window-controls">
              <span className="os-close-btn">x</span>
            </div>
          </div>

          <div className="os-window-body">
            <div className="section-header text-center">
              <span className="section-eyebrow">
                <Sparkles size={14} className="inline mr-1.5" />
                Background & Philosophy
              </span>
              <h2 className="section-title">A little about me</h2>
              <p className="section-subtitle">
                Crafting intuitive frontend interfaces, interactive web applications, and AI-powered experiences.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-narrative-card">
                <h3>Designing Frontend Apps & AI Experiences</h3>
                <p>
                  I am a <strong>Computer Science Engineering student</strong> specializing in <strong>Frontend Engineering</strong> with a deep love for building <strong>AI-powered applications</strong>.
                </p>
                <p>
                  I thrive at the intersection of design and intelligence — crafting smooth, responsive user interfaces in React & modern web frameworks while seamlessly connecting them to smart AI models like LangChain, FAISS RAG, and LLM APIs.
                </p>
                <p>
                  My goal is to join an engineering team as a Frontend / AI Software Engineer where I can build delightful, high-impact web products that users love.
                </p>

                <div className="about-mascot-footer">
                  <CoffeeMascot size={40} />
                  <div className="mascot-quote">
                    <span>"Driven by curiosity, clean code, and solving real user problems."</span>
                  </div>
                </div>
              </div>

              <div className="philosophy-card">
                <div className="philosophy-header">
                  <h3>My Development Loop</h3>
                  <span className="philosophy-hint">Click any stage to inspect mindset</span>
                </div>

                <div className="philosophy-timeline-flow">
                  {philosophyStages.map((stage, idx) => {
                    const IconComponent = stage.icon;
                    const isActive = activeStage === stage.id;

                    return (
                      <React.Fragment key={stage.id}>
                        <div 
                          className={`philosophy-stage-pill ${isActive ? 'active' : ''}`}
                          onClick={() => setActiveStage(stage.id)}
                          style={{ '--stage-accent': stage.color }}
                        >
                          <div className="stage-icon-wrap">
                            <IconComponent size={16} />
                          </div>
                          <span className="stage-title">{stage.title}</span>
                        </div>

                        {idx < philosophyStages.length - 1 && (
                          <span className="timeline-arrow">↓</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <div className="philosophy-detail-box">
                  {philosophyStages.find(s => s.id === activeStage) && (
                    <div className="detail-content fadeIn">
                      <div className="detail-header" style={{ color: philosophyStages.find(s => s.id === activeStage).color }}>
                        <strong>{activeStage}. {philosophyStages.find(s => s.id === activeStage).title}</strong>
                      </div>
                      <p>{philosophyStages.find(s => s.id === activeStage).desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
