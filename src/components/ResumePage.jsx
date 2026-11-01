import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import CuteComputer from './CuteComputer';
import { 
  PythonLogo, 
  JavaLogo, 
  ReactLogo, 
  JavaScriptLogo, 
  CppLogo, 
  DockerLogo, 
  NodeLogo, 
  GitLogo, 
  MongoLogo, 
  VSCodeLogo, 
  LangChainLogo 
} from './TechLogos';

export default function ResumePage({ onBack }) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Gifty_Sharon_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Real Skill Badges with SVG Logos inspired by the reference (Ai, Ps, Pr, etc.)
  const toolLogos = [
    { name: 'Python', component: <PythonLogo size={28} />, bg: '#EEF3F8', border: '#3776AB' },
    { name: 'Java', component: <JavaLogo size={28} />, bg: '#FDF3EE', border: '#E76F00' },
    { name: 'React', component: <ReactLogo size={28} />, bg: '#EAF7FD', border: '#087EA4' },
    { name: 'JavaScript', component: <JavaScriptLogo size={28} />, bg: '#FEFBE8', border: '#EAB308' },
    { name: 'C++', component: <CppLogo size={28} />, bg: '#EBF2FA', border: '#00599C' },
    { name: 'LangChain', component: <LangChainLogo size={28} />, bg: '#E8F5EE', border: '#10B981' },
    { name: 'Docker', component: <DockerLogo size={28} />, bg: '#EBF5FC', border: '#2496ED' },
    { name: 'Node.js', component: <NodeLogo size={28} />, bg: '#EFF8EF', border: '#339933' },
    { name: 'MongoDB', component: <MongoLogo size={28} />, bg: '#EFF8EF', border: '#47A248' },
    { name: 'Git', component: <GitLogo size={28} />, bg: '#FDF1EF', border: '#F05032' },
    { name: 'VS Code', component: <VSCodeLogo size={28} />, bg: '#EDF5FA', border: '#007ACC' }
  ];

  const languages = [
    { name: 'English', level: 95, label: 'Professional / Fluent' },
    { name: 'Telugu', level: 100, label: 'Native / Bilingual' },
    { name: 'Hindi', level: 80, label: 'Working Proficiency' }
  ];

  return (
    <div className="resume-page-view">
      {/* Top Floating Control Bar */}
      <div className="resume-page-navbar">
        <div className="resume-nav-inner">
          <button className="resume-back-btn" onClick={onBack} title="Back to Portfolio">
            <ArrowLeft size={18} className="mr-1.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="resume-nav-actions">
            <button className="resume-ctrl-btn" onClick={handlePrint} title="Print or Save as PDF">
              <Printer size={16} className="mr-1.5" />
              <span>Print / Save PDF</span>
            </button>

            <button className="resume-ctrl-btn primary" onClick={handleDownload} title="Download resume.pdf">
              <Download size={16} className="mr-1.5" />
              <span>Download Official PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="resume-sheet-container">
        {/* Retro Header OS Tab */}
        <div className="os-window-header" style={{ borderRadius: '16px 16px 0 0' }}>
          <div className="os-window-path">
            <span>C:\GIFTY\documents\resume.md</span>
          </div>
          <div className="os-window-controls">
            <button className="os-close-btn" onClick={onBack} title="Return">✕</button>
          </div>
        </div>

        {/* Physical Sheet Container Styled following Retro Yellow-Pill Aesthetic */}
        <div className="retro-resume-sheet">
          {/* Top Profile Card */}
          <div className="retro-profile-block">
            <div className="retro-avatar-box">
              <div className="retro-avatar-circle">
                <CuteComputer placement="hero" />
              </div>
            </div>

            <div className="retro-profile-intro">
              <h1 className="retro-candidate-name">Gifty Sharon</h1>
              <p className="retro-candidate-title">Frontend Engineer & AI Applications Developer</p>
              <p className="retro-bio-paragraph">
                Computer Science Engineering student passionate about engineering responsive web interfaces, interactive frontend architectures, and autonomous AI-driven systems. Proven competitor in national hackathons (Rank 7 National Finalist) and Smart India Hackathon internal top performer. Dedicated to crafting software that marries delightful UI with robust intelligence.
              </p>

              {/* Contact Pill Row */}
              <div className="retro-contact-pill-row">
                <a href="mailto:giftysharon12@gmail.com" className="retro-contact-pill">
                  <span className="pill-icon-badge mail">@</span>
                  <span>giftysharon12@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/gifty-sharon-b1781b3ab/" target="_blank" rel="noopener noreferrer" className="retro-contact-pill">
                  <span className="pill-icon-badge linkedin">in</span>
                  <span>linkedin.com/in/gifty-sharon-b1781b3ab</span>
                </a>

                <a href="https://github.com/giftysharon125" target="_blank" rel="noopener noreferrer" className="retro-contact-pill">
                  <span className="pill-icon-badge github">git</span>
                  <span>github.com/giftysharon125</span>
                </a>

                <div className="retro-contact-pill">
                  <span className="pill-icon-badge location">📍</span>
                  <span>India · Open to Remote & Relocation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Structured Resume Content */}
          <div className="retro-resume-columns">
            {/* Left Column: Achievements, Experience, Projects */}
            <div className="retro-col-main">
              {/* ACHIEVEMENTS & HONORS */}
              <div className="retro-section-group">
                <div className="retro-yellow-header-pill">
                  <span>ACHIEVEMENTS & HONORS</span>
                </div>

                <div className="retro-timeline-list">
                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-date-tag">2024</span>
                        <span className="retro-rank-tag">Rank 7 Nationally</span>
                      </div>
                      <h3 className="retro-entry-title">National Level Hackathon — Top 12 Finalist</h3>
                      <p className="retro-entry-subtitle">Autonomous Campus Infrastructure Decision Support Agent</p>
                      <ul className="retro-entry-points">
                        <li>Selected among the top 12 teams nationwide out of competitive teams across India.</li>
                        <li>Secured 7th place with an autonomous AI Decision Support Agent handling facility loads, anomaly detection, and optimization analytics.</li>
                        <li>Praised for clean multi-agent architecture and intuitive executive dashboard.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-date-tag">2026</span>
                        <span className="retro-rank-tag">SIH 2026 Top Performer</span>
                      </div>
                      <h3 className="retro-entry-title">Smart India Hackathon (SIH 2026) — College Top Performer</h3>
                      <p className="retro-entry-subtitle">SmartBelt Wearable IoT Fall & Safety Distress System</p>
                      <ul className="retro-entry-points">
                        <li>Qualified internal selection as Top Performers in our college with an interdisciplinary team.</li>
                        <li>Engineered sensor telemetry, emergency trigger logic, and automated SMS/WhatsApp guardian notification dispatch.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-date-tag">2025</span>
                        <span className="retro-rank-tag">SIH 2025 Qualified</span>
                      </div>
                      <h3 className="retro-entry-title">Smart India Hackathon (SIH 2025) — Internal Round Qualified</h3>
                      <p className="retro-entry-subtitle">BlueSprout Rooftop Rainwater & AI Water Assessment Platform</p>
                      <ul className="retro-entry-points">
                        <li>Qualified internal college selection round for Smart India Hackathon 2025 with the BlueSprout platform.</li>
                        <li>Built responsive web application featuring AI rooftop rainwater potential assessment, catchment calculations, and community savings tracking.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* TECHNICAL PROJECTS */}
              <div className="retro-section-group">
                <div className="retro-yellow-header-pill">
                  <span>FEATURED PROJECTS</span>
                </div>

                <div className="retro-timeline-list">
                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-tech-tag">React · Node · LangChain · FAISS · Twilio</span>
                      </div>
                      <h3 className="retro-entry-title">Project Saathi — Emergency Safety & Guardian System</h3>
                      <ul className="retro-entry-points">
                        <li>Architected emergency workflow handling WhatsApp webhooks for automated distress signaling and location broadcasting.</li>
                        <li>Implemented dead-man's-switch overdue check-in logic and natural language command parsing using LangChain and FAISS vector store.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-tech-tag">Python · FastAPI · Multi-Agent · Vector DB</span>
                      </div>
                      <h3 className="retro-entry-title">Campus Infrastructure Decision Support Agent</h3>
                      <ul className="retro-entry-points">
                        <li>Designed goal-directed autonomous agents aggregating infrastructure telemetry to forecast equipment degradation.</li>
                        <li>Delivered automated institutional recommendation reports and predictive resource allocation models.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-tech-tag">HTML5 · CSS3 · JavaScript · AI Vision · Data Analytics</span>
                      </div>
                      <h3 className="retro-entry-title">BlueSprout — Rooftop Rainwater & AI Water Assessment</h3>
                      <ul className="retro-entry-points">
                        <li>Smart India Hackathon 2025 internal round qualified project for rooftop water conservation.</li>
                        <li>Built AI rooftop image recommendation module, manual catchment potential calculator, and water savings tracking dashboard.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-tech-tag">IoT Embedded · C/C++ · Python · Cloud Push</span>
                      </div>
                      <h3 className="retro-entry-title">SmartBelt — Interdisciplinary Wearable Safety System</h3>
                      <ul className="retro-entry-points">
                        <li>Engineered wearable smart belt combining posture/accelerometer sensor fusion with real-time fall detection algorithms.</li>
                        <li>Integrated emergency cloud alert pipeline communicating coordinates instantaneously to designated guardians.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-tech-tag">Python · Streamlit · LangChain · PyPDF2 · FAISS</span>
                      </div>
                      <h3 className="retro-entry-title">Lab Manual Conversational AI Assistant</h3>
                      <ul className="retro-entry-points">
                        <li>Engineered document processing pipeline extracting experiment aims, reagent lists, and procedures from technical lab PDFs into structured schema.</li>
                        <li>Integrated conversational RAG over multi-page laboratory manuals with precise section and page citations.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="retro-entry-card">
                    <div className="retro-bullet-dot"></div>
                    <div className="retro-entry-content">
                      <div className="retro-entry-meta">
                        <span className="retro-tech-tag">Docker · GitHub Actions · Jenkins · AWS EC2</span>
                      </div>
                      <h3 className="retro-entry-title">DevOps CI/CD Automation Pipeline</h3>
                      <ul className="retro-entry-points">
                        <li>Configured automated push-to-deploy pipeline executing unit tests, linter checks, Docker container builds, and EC2 staging restarts.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Education, Real Logo Badges, Skills, Languages */}
            <div className="retro-col-side">
              {/* EDUCATION (Schooling, Junior College, B.Tech) */}
              <div className="retro-section-group">
                <div className="retro-yellow-header-pill">
                  <span>EDUCATION</span>
                </div>

                <div className="retro-side-entry">
                  <div className="retro-bullet-dot"></div>
                  <div className="retro-side-content">
                    <span className="retro-date-tag">2024 – 2028 (Currently Pursuing)</span>
                    <h4 className="retro-school-name">B.Tech in Computer Science & Engineering</h4>
                    <p className="retro-school-inst">Engineering College</p>
                    <p className="retro-school-details">Specializing in Frontend Engineering, AI Applications, and Data Structures & Algorithms.</p>
                  </div>
                </div>

                <div className="retro-side-entry">
                  <div className="retro-bullet-dot"></div>
                  <div className="retro-side-content">
                    <span className="retro-date-tag">2022 – 2024</span>
                    <h4 className="retro-school-name">Junior College / Intermediate (11th & 12th)</h4>
                    <p className="retro-school-inst">Junior College (MPC Stream)</p>
                    <p className="retro-school-details">Majors: Mathematics, Physics & Chemistry. Rigorous analytical reasoning and problem-solving foundation.</p>
                  </div>
                </div>

                <div className="retro-side-entry">
                  <div className="retro-bullet-dot"></div>
                  <div className="retro-side-content">
                    <span className="retro-date-tag">Graduated 2022</span>
                    <h4 className="retro-school-name">Secondary School Certificate (10th Standard)</h4>
                    <p className="retro-school-inst">High School</p>
                    <p className="retro-school-details">Completed with Distinction; foundational mathematics, science, and initial introduction to computer programming.</p>
                  </div>
                </div>
              </div>

              {/* TOOLS & SKILLS WITH REAL LOGOS (Python, Java, React, JS, C++, Docker, etc.) */}
              <div className="retro-section-group">
                <div className="retro-yellow-header-pill">
                  <span>SKILLS & TOOLS</span>
                </div>

                <div className="retro-real-logos-grid">
                  {toolLogos.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="retro-real-logo-card"
                      style={{ backgroundColor: tool.bg, borderColor: tool.border }}
                      title={tool.name}
                    >
                      <div className="real-logo-icon">
                        {tool.component}
                      </div>
                      <span className="real-logo-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CORE COMPETENCIES */}
              <div className="retro-section-group">
                <div className="retro-yellow-header-pill">
                  <span>CORE COMPETENCIES</span>
                </div>

                <div className="retro-skills-cloud">
                  <span className="skill-chip">React.js & Modern Frontend</span>
                  <span className="skill-chip">AI Agents & LangChain</span>
                  <span className="skill-chip">FAISS Vector Search & RAG</span>
                  <span className="skill-chip">JavaScript (ES6+)</span>
                  <span className="skill-chip">Python & FastAPI</span>
                  <span className="skill-chip">Java & C / C++</span>
                  <span className="skill-chip">Node.js & Express.js</span>
                  <span className="skill-chip">MongoDB & MySQL</span>
                  <span className="skill-chip">Docker & CI/CD Pipelines</span>
                  <span className="skill-chip">Interdisciplinary IoT Systems</span>
                  <span className="skill-chip">REST APIs & Webhooks</span>
                  <span className="skill-chip">UI / UX Design & Figma</span>
                </div>
              </div>

              {/* LANGUAGES */}
              <div className="retro-section-group">
                <div className="retro-yellow-header-pill">
                  <span>LANGUAGES</span>
                </div>

                <div className="retro-languages-wrap">
                  {languages.map((lang, lIdx) => (
                    <div key={lIdx} className="lang-bar-row">
                      <div className="lang-info">
                        <span className="lang-name">{lang.name}</span>
                        <span className="lang-desc">{lang.label}</span>
                      </div>
                      <div className="lang-track">
                        <div className="lang-fill" style={{ width: `${lang.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
