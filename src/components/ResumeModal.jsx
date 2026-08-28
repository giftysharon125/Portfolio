import React from 'react';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Gifty_Sharon_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPdf = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-header-bar">
          <div className="resume-title-meta">
            <span className="resume-badge">Resume Preview</span>
            <h2>Gifty Sharon — Frontend Engineer & AI Developer</h2>
          </div>
          <div className="resume-actions">
            <button className="resume-action-btn primary" onClick={handleOpenPdf} title="Open /resume.pdf in new tab">
              <ExternalLink size={15} className="mr-1.5 inline" />
              Open PDF
            </button>
            <button className="resume-action-btn secondary" onClick={handleDownload} title="Download /resume.pdf">
              <Download size={15} className="mr-1.5 inline" />
              Download
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close resume viewer">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="resume-document-paper">
          <div className="resume-doc-header">
            <h1>GIFTY SHARON</h1>
            <p className="resume-subtitle">Frontend Engineer · AI Applications Developer</p>
            <div className="resume-contact-row">
              <span>📧 giftysharon12@gmail.com</span>
              <span>🔗 linkedin.com/in/gifty-sharon-b1781b3ab</span>
              <span>💻 github.com/giftysharon125</span>
            </div>
          </div>

          <hr className="resume-divider" />

          <div className="resume-section">
            <h3 className="resume-sec-title">
              <GraduationCap size={16} className="inline mr-2 text-purple-600" />
              EDUCATION
            </h3>
            <div className="resume-item">
              <div className="resume-item-top">
                <strong>Bachelor of Engineering in Computer Science & Engineering</strong>
                <span className="resume-date">2024 – 2028</span>
              </div>
              <p className="resume-institution">Relevant Coursework: Data Structures & Algorithms, Backend System Architecture, Object Oriented Programming, DBMS, Computer Networks, Operating Systems.</p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-sec-title">
              <Briefcase size={16} className="inline mr-2 text-purple-600" />
              TECHNICAL PROJECTS
            </h3>

            <div className="resume-item">
              <div className="resume-item-top">
                <strong>Project Saathi — Emergency Safety & Guardian System</strong>
                <span className="resume-tech-list">React, Node.js, Express, MongoDB Atlas, WhatsApp API, LangChain, FAISS</span>
              </div>
              <ul className="resume-bullet-list">
                <li>Architected an emergency application handling WhatsApp webhooks for automated distress signaling and guardian notifications.</li>
                <li>Implemented dead-man’s-switch overdue check-in logic and natural language emergency command parsing with FAISS vector store.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-top">
                <strong>Lab Manual Conversational AI Assistant</strong>
                <span className="resume-tech-list">Python, Streamlit, PyPDF2, LangChain, FAISS Vector DB</span>
              </div>
              <ul className="resume-bullet-list">
                <li>Built a PDF parsing pipeline extracting experiment aims, equipment lists, procedures, and safety instructions into structured JSON.</li>
                <li>Integrated LangChain RAG pipeline for conversational querying over multi-page laboratory manuals with precise section citations.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-top">
                <strong>DevOps CI/CD Automation Pipeline</strong>
                <span className="resume-tech-list">Docker, GitHub Actions, Jenkins, Linux (Ubuntu), AWS EC2</span>
              </div>
              <ul className="resume-bullet-list">
                <li>Configured automated push-to-deploy pipeline executing unit tests, Docker container builds, and staging EC2 server restarts.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-sec-title">
              <Code size={16} className="inline mr-2 text-purple-600" />
              TECHNICAL SKILLS
            </h3>
            <div className="resume-skills-grid">
              <div><strong>Languages:</strong> C, C++, Python, Java, JavaScript (ES6+), HTML5, CSS3</div>
              <div><strong>Backend & Web:</strong> Node.js, Express.js, FastAPI, React.js, Streamlit, RESTful APIs</div>
              <div><strong>Databases:</strong> MongoDB, MongoDB Atlas, MySQL, Firebase, Vector DBs (FAISS, ChromaDB)</div>
              <div><strong>DevOps & Cloud:</strong> AWS (S3, EC2), Docker, GitHub Actions, Jenkins, Linux (Ubuntu)</div>
              <div><strong>Developer Tools:</strong> Git, GitHub, VS Code, Android Studio, npm, Gradle</div>
            </div>
          </div>
        </div>

        <div className="resume-modal-footer-note">
          <p>💡 Tip: To attach your official PDF resume file, place your PDF document at <code>/public/resume.pdf</code> in your project repository.</p>
        </div>
      </div>
    </div>
  );
}
