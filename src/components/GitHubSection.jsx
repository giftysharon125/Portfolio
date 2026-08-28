import React from 'react';
import { GitCommit, GitBranch, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function GitHubSection() {
  const githubProfileUrl = "https://github.com/giftysharon125";

  return (
    <section className="github-section">
      <div className="section-container">
        <div className="github-card">
          <div className="github-card-left">
            <div className="github-icon-badge">
              <GithubIcon size={36} className="text-purple-600" />
            </div>
            <div>
              <span className="github-eyebrow">Version Control & Open Source</span>
              <h2>Where the code lives</h2>
              <p>
                Explore my repositories, API microservices, project commit history, and public code contributions on GitHub.
              </p>
            </div>
          </div>

          <div className="github-stats-summary">
            <div className="stat-pill">
              <GitCommit size={16} className="mr-1.5 text-purple-500" />
              <span>500+ Commits</span>
            </div>
            <div className="stat-pill">
              <GitBranch size={16} className="mr-1.5 text-blue-500" />
              <span>Project Repositories</span>
            </div>
            <div className="stat-pill">
              <Code2 size={16} className="mr-1.5 text-emerald-500" />
              <span>Backend & AI Systems</span>
            </div>
          </div>

          <div className="github-action-wrap">
            <a 
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              <GithubIcon size={18} className="mr-2" />
              <span>Visit @giftysharon125 on GitHub</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
