import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers, BookOpen, Lightbulb } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import DevOpsPipeline from './DevOpsPipeline';
import { 
  PdfDocMascot, 
  PhoneWhatsappMascot, 
  DockerContainerMascot 
} from './CuteMascots';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const renderProjectMascot = (id) => {
    switch(id) {
      case 'project-saathi':
        return <PhoneWhatsappMascot size={56} />;
      case 'lab-manual-ai':
        return <PdfDocMascot size={56} />;
      case 'devops-cicd-demo':
        return <DockerContainerMascot size={56} />;
      default:
        return <PdfDocMascot size={56} />;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <div className="header-meta">
            <span className="category-pill">{project.category}</span>
            <span className="badge-pill">{project.badge}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close detail modal">
            <X size={20} />
          </button>
        </div>

        <div className="project-modal-title-row">
          <div>
            <h2>{project.title}</h2>
            <p className="short-summary">{project.shortDescription}</p>
          </div>
          <div className="modal-mascot-box">
            {renderProjectMascot(project.id)}
          </div>
        </div>

        {project.id === 'devops-cicd-demo' && (
          <div className="modal-pipeline-wrapper">
            <DevOpsPipeline />
          </div>
        )}

        <div className="project-modal-body">
          <div className="modal-section-grid">
            <div className="modal-box problem-box">
              <div className="box-header text-amber-600">
                <AlertCircle size={18} className="mr-1.5" />
                <h3>Problem Solved</h3>
              </div>
              <p>{project.problem}</p>
            </div>

            <div className="modal-box solution-box">
              <div className="box-header text-emerald-600">
                <CheckCircle2 size={18} className="mr-1.5" />
                <h3>Engineering Solution</h3>
              </div>
              <p>{project.solution}</p>
            </div>
          </div>

          {project.architecture && (
            <div className="modal-box arch-box">
              <div className="box-header text-purple-600">
                <Layers size={18} className="mr-1.5" />
                <h3>System Architecture & Data Flow</h3>
              </div>
              <div className="architecture-code-block">
                <code>{project.architecture}</code>
              </div>
            </div>
          )}

          <div className="modal-box highlights-box">
            <div className="box-header text-indigo-600">
              <Sparkles size={18} className="mr-1.5" />
              <h3>Key Technical Features & Contributions</h3>
            </div>
            <ul className="highlights-list">
              {project.highlights.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet-star">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-box tech-box">
            <h3>Technologies & Tools</h3>
            <div className="tech-badge-wrap">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="modal-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section-grid">
            <div className="modal-box learned-box">
              <div className="box-header text-blue-600">
                <BookOpen size={18} className="mr-1.5" />
                <h3>What I Learned</h3>
              </div>
              <p>{project.learned}</p>
            </div>

            <div className="modal-box challenges-box">
              <div className="box-header text-orange-600">
                <Lightbulb size={18} className="mr-1.5" />
                <h3>Challenges & Trade-offs</h3>
              </div>
              <p>{project.challenges}</p>
            </div>
          </div>

          {project.future && (
            <div className="modal-box future-box">
              <h3>Future Enhancements</h3>
              <p>{project.future}</p>
            </div>
          )}
        </div>

        <div className="project-modal-footer">
          <div className="footer-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-btn github-btn"
              >
                <GithubIcon size={16} className="mr-2" />
                View Code on GitHub
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-btn demo-btn"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
          <button className="modal-btn secondary-btn" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
