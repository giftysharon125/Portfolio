import React, { useState } from 'react';
import { 
  BookOpen, 
  Hammer, 
  AlertTriangle, 
  Bug, 
  TrendingUp, 
  Rocket, 
  Sparkles, 
  GraduationCap, 
  School, 
  Building2, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { CoffeeMascot } from './CuteMascots';

export default function About() {
  const [activeStage, setActiveStage] = useState(1);

  const educationHistory = [
    {
      id: 'btech',
      level: 'Undergraduate Degree',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Engineering College',
      period: '2024 – 2028',
      status: 'Current Pursuing',
      badge: 'B.Tech CSE',
      icon: GraduationCap,
      highlights: [
        'Specializing in Frontend Engineering & Intelligent AI Systems',
        'Core Courses: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks',
        'Smart India Hackathon (SIH) Internal Top Performer & National Hackathon Rank 7 Finalist'
      ]
    },
    {
      id: 'junior-college',
      level: 'Senior Secondary / Intermediate (11th & 12th)',
      degree: 'Junior College (MPC — Mathematics, Physics, Chemistry)',
      institution: 'Junior College',
      period: '2022 – 2024',
      status: 'Completed',
      badge: 'Junior College / Intermediate',
      icon: Building2,
      highlights: [
        'Major focus in Advanced Mathematics, Physics, and Chemistry (MPC stream)',
        'Built rigorous problem-solving foundation, analytical reasoning, and quantitative aptitude',
        'Active participant in regional science exhibitions and computer programming seminars'
      ]
    },
    {
      id: 'schooling',
      level: 'Secondary School Education (10th Standard)',
      degree: 'Secondary School Certificate (SSC / High School)',
      institution: 'High School',
      period: 'Graduated 2022',
      status: 'Completed with Distinction',
      badge: 'High School / SSC',
      icon: School,
      highlights: [
        'Strong academic distinction with consistent high grades in Mathematics & Science',
        'First introduced to computers, basic coding concepts, and logic building',
        'Co-curricular leadership in school technology clubs and cultural events'
      ]
    }
  ];

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
                Background, Education & Philosophy
              </span>
              <h2 className="section-title">A little about me</h2>
              <p className="section-subtitle">
                Crafting intuitive frontend interfaces, interactive web applications, and AI-powered experiences.
              </p>
            </div>

            {/* Narrative & Philosophy Grid */}
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
                  From building emergency safety assistants to autonomous campus decision support agents and interdisciplinary wearable IoT prototypes, I take pride in taking real human problems and solving them through clean, thoughtful code.
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

            {/* Academic Education Journey */}
            <div className="education-timeline-section">
              <div className="education-sec-header">
                <div className="edu-badge-tag">Academic Pathway</div>
                <h3>Education & Academic Foundation</h3>
                <p>My continuous learning journey from foundational schooling to junior college and undergraduate engineering.</p>
              </div>

              <div className="education-cards-grid">
                {educationHistory.map((edu) => {
                  const IconComp = edu.icon;
                  return (
                    <div key={edu.id} className="education-box-card">
                      <div className="edu-card-top">
                        <div className="edu-icon-wrap">
                          <IconComp size={22} className="text-amber-600" />
                        </div>
                        <div className="edu-header-text">
                          <span className="edu-badge-pill">{edu.badge}</span>
                          <h4 className="edu-degree-title">{edu.degree}</h4>
                          <div className="edu-sub-meta">
                            <span className="edu-period"><Calendar size={13} className="inline mr-1" />{edu.period}</span>
                            <span className="edu-status">• {edu.status}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="edu-highlights-list">
                        {edu.highlights.map((item, hIdx) => (
                          <li key={hIdx}>
                            <CheckCircle2 size={14} className="edu-check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
