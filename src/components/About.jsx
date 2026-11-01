import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  School, 
  Building2, 
  Calendar,
  CheckCircle2,
  Code2,
  Cpu,
  Brain,
  Rocket,
  Compass,
  Laptop
} from 'lucide-react';
import { CoffeeMascot } from './CuteMascots';

export default function About() {
  const educationHistory = [
    {
      id: 'btech',
      level: 'Undergraduate Degree',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Engineering College',
      period: '2024 – 2028',
      status: 'Currently Pursuing',
      badge: 'B.Tech CSE',
      icon: GraduationCap,
      highlights: [
        'Specializing in Frontend Engineering & Applied AI Systems.',
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

  const corePillars = [
    {
      icon: Code2,
      title: 'Frontend Craftsmanship',
      desc: 'Crafting responsive, delightful interfaces in React with micro-interactions, clean state management, and modern CSS architectures.'
    },
    {
      icon: Brain,
      title: 'Practical AI & RAG',
      desc: 'Integrating real intelligence using LangChain, FAISS vector embeddings, and LLM APIs to turn messy data into intuitive decision support.'
    },
    {
      icon: Cpu,
      title: 'Interdisciplinary IoT',
      desc: 'Connecting software with hardware — bridging ESP32 microcontrollers, embedded sensor telemetry, and cloud emergency notification pipelines.'
    },
    {
      icon: Rocket,
      title: 'Hackathon Competitor',
      desc: 'Double SIH internal qualifier (2025 & 2026) and Top 12 National Finalist (Rank 7) out of nationwide engineering teams.'
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

            {/* Narrative & Core Pillars Row */}
            <div className="about-enhanced-grid">
              <div className="about-narrative-card">
                <h3>Engineering With Curiosity & Purpose</h3>
                <p>
                  I am a <strong>Computer Science Engineering student</strong> specializing in <strong>Frontend Engineering</strong> with a strong passion for developing <strong>AI-powered applications</strong>.
                </p>
                <p>
                  I thrive at the intersection of design and intelligence — building user experiences that feel fluid, responsive, and natural in modern React ecosystems, while architecting smart backend pipelines with LangChain, FAISS vector search, and multi-agent frameworks.
                </p>
                <p>
                  Whether it is designing an emergency safety system with WhatsApp webhooks (Project Saathi), engineering an autonomous campus infrastructure decision agent that ranked 7th nationally, or building an interdisciplinary IoT wearable for Smart India Hackathon, I love turning complex challenges into simple, human-centered software.
                </p>

                <div className="about-mascot-footer">
                  <CoffeeMascot size={40} />
                  <div className="mascot-quote">
                    <span>"Driven by curiosity, clean code, and solving real user problems."</span>
                  </div>
                </div>
              </div>

              {/* What Drives Me / Pillars */}
              <div className="about-pillars-card">
                <div className="pillars-header">
                  <h3>What Drives My Work</h3>
                  <span className="pillars-tag">Engineering Values</span>
                </div>

                <div className="pillars-list">
                  {corePillars.map((pillar, idx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div key={idx} className="pillar-item">
                        <div className="pillar-icon-box">
                          <PillarIcon size={20} className="text-amber-600" />
                        </div>
                        <div className="pillar-text">
                          <h4>{pillar.title}</h4>
                          <p>{pillar.desc}</p>
                        </div>
                      </div>
                    );
                  })}
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
