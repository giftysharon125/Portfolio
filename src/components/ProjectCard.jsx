import React from 'react';
import { ExternalLink, ArrowUpRight, ShieldAlert, FileText, GitMerge } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { 
  PdfDocMascot, 
  PhoneWhatsappMascot, 
  DockerContainerMascot 
} from './CuteMascots';
import DevOpsPipeline from './DevOpsPipeline';

export default function ProjectCard({ project, onSelectProject }) {
  const renderProjectMascot = (id) => {
    switch(id) {
      case 'project-saathi':
        return <PhoneWhatsappMascot size={40} />;
      case 'lab-manual-ai':
        return <PdfDocMascot size={40} />;
      case 'devops-cicd-demo':
        return <DockerContainerMascot size={40} />;
      default:
        return <PdfDocMascot size={40} />;
    }
  };

  const getIcon = (name) => {
    switch(name) {
      case 'ShieldAlert': return <ShieldAlert size={20} className="text-purple-600" />;
      case 'FileText': return <FileText size={20} className="text-amber-600" />;
      case 'GitMerge': return <GitMerge size={20} className="text-blue-600" />;
      default: return <FileText size={20} className="text-purple-600" />;
    }
  };

  return (
    <div className="project-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <div className="card-icon-box">
            {getIcon(project.iconName)}
          </div>
          <div>
            <h3 className="card-title">{project.title}</h3>
            <span className="card-category">{project.category}</span>
          </div>
        </div>

        <div className="card-mascot-corner">
          {renderProjectMascot(project.id)}
        </div>
      </div>

      <p className="card-description">{project.shortDescription}</p>

      {project.id === 'devops-cicd-demo' && (
        <div className="card-pipeline-preview">
          <DevOpsPipeline />
        </div>
      )}

      <div className="card-key-highlights">
        <div className="highlight-row">
          <span className="highlight-label">Problem Solved:</span>
          <span className="highlight-text">{project.problem}</span>
        </div>
        <div className="highlight-row mt-1.5">
          <span className="highlight-label">Key Contribution:</span>
          <span className="highlight-text">{project.highlights[0]}</span>
        </div>
      </div>

      <div className="card-tech-wrap">
        {project.technologies.slice(0, 5).map((tech, idx) => (
          <span key={idx} className="tech-badge">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="tech-badge count">+{project.technologies.length - 5} more</span>
        )}
      </div>

      <div className="card-footer-actions">
        <button 
          className="details-btn"
          onClick={() => onSelectProject(project)}
        >
          <span>View Details</span>
          <ArrowUpRight size={15} className="ml-1 inline" />
        </button>

        <div className="external-links-group">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link-btn"
              title="View GitHub Repository"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <GithubIcon size={17} />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link-btn"
              title="View Live Demo"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
