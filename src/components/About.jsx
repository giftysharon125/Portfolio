import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  School, 
  Building2, 
  Calendar,
  CheckCircle2,
  Code2,
  Sparkle,
  Compass,
  User,
  Heart
} from 'lucide-react';
import { CoffeeMascot } from './CuteMascots';
import CuteComputer from './CuteComputer';

export default function About() {
  const educationHistory = [
    {
      id: 'btech',
      level: 'Undergraduate Degree',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Anil Neerukonda Institute of Technology and Sciences (ANITS)',
      period: '2024 – 2028',
      status: 'Currently Pursuing',
      badge: 'B.Tech CSE · ANITS',
      icon: GraduationCap,
      highlights: [
        'Anil Neerukonda Institute of Technology and Sciences (ANITS).',
        'Specializing in Frontend Engineering, Applied AI & Multi-Agent Systems.',
        'Core Academic Foundation: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Networks, and Operating Systems.',
        'Double Smart India Hackathon (SIH) Internal Qualifier (SIH 2025 BlueSprout & SIH 2026 SmartBelt Top Performer) & National Hackathon Rank 7 Finalist.'
      ]
    },
    {
      id: 'junior-college',
      level: 'Senior Secondary / Intermediate (11th & 12th)',
      degree: 'Junior College (MPC Stream — Mathematics, Physics, Chemistry)',
      institution: 'Junior College',
      period: '2022 – 2024',
      status: 'Completed',
      badge: 'Junior College (MPC)',
      icon: Building2,
      highlights: [
        'Major focus in Advanced Mathematics, Physics, and Chemistry (MPC stream).',
        'Built a strong quantitative foundation, analytical reasoning, and algorithmic problem-solving aptitude.',
        'Active participant in regional science exhibitions and computer programming seminars.'
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
        'Graduated with academic distinction, maintaining top percentile grades in Mathematics & Science.',
        'First introduced to computers, basic programming concepts, and algorithmic logic.',
        'Co-curricular leadership in school technology clubs and cultural events.'
      ]
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
                Background & Academic Journey
              </span>
              <h2 className="section-title">A little about me</h2>
              <p className="section-subtitle">
                Designing intuitive frontend interfaces, engineering smart AI workflows, and building interdisciplinary technology.
              </p>
            </div>

            {/* Narrative with Profile Visual Card matching reference aesthetic */}
            <div className="about-showcase-container">
              <div className="about-showcase-card">
                {/* Profile Portrait Visual in Retro Frame */}
                <div className="about-portrait-wrap">
                  <div className="about-portrait-frame">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Gifty Sharon — Frontend & AI Engineer" 
                      className="about-portrait-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/profile-curly.svg';
                      }}
                    />
                  </div>
                  <div className="about-portrait-badge">
                    <span className="badge-pulse-dot"></span>
                    <span>Frontend & AI Engineer</span>
                  </div>
                </div>

                {/* Narrative Text */}
                <div className="about-showcase-content">
                  <div className="narrative-badge">
                    <span>Frontend Engineering × Intelligent AI</span>
                  </div>
                  <h3>Engineering With Curiosity, Design & Purpose</h3>
                  <p>
                    I am a <strong>Computer Science Engineering student</strong> at <strong>Anil Neerukonda Institute of Technology and Sciences (ANITS)</strong> specializing in <strong>Frontend Engineering</strong> with a deep passion for building <strong>Applied AI Applications</strong>.
                  </p>
                  <p>
                    I thrive at the intersection of design and intelligence — building user experiences that feel fluid, responsive, and natural in modern React ecosystems, while architecting smart backend pipelines with LangChain, FAISS vector search, and autonomous multi-agent frameworks.
                  </p>
                  <p>
                    Whether it is designing an emergency safety system with WhatsApp webhooks (Project Saathi), engineering an autonomous campus infrastructure decision support agent that ranked 7th nationally, or building an interdisciplinary IoT wearable for Smart India Hackathon, I love taking complex real-world challenges and transforming them into accessible, human-centered software.
                  </p>

                  <div className="about-mascot-footer">
                    <CoffeeMascot size={42} />
                    <div className="mascot-quote">
                      <span>"Driven by curiosity, clean code, and solving real user problems."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Education Journey (Schooling, Junior College, B.Tech) */}
            <div className="education-timeline-section">
              <div className="education-sec-header">
                <div className="edu-badge-tag">Academic Foundation</div>
                <h3>Education Pathway</h3>
                <p>My continuous learning foundation from high school to junior college and undergraduate engineering.</p>
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
