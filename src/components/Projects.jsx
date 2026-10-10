import React, { useState, useMemo } from 'react';
import { Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import MiniProjects from './MiniProjects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categoryCounts = useMemo(() => {
    const counts = { All: PROJECTS_DATA.length };
    PROJECTS_DATA.forEach(p => {
      const primary = p.filterCategory;
      counts[primary] = (counts[primary] || 0) + 1;

      if (p.secondaryFilters) {
        p.secondaryFilters.forEach(sec => {
          if (sec !== primary) {
            counts[sec] = (counts[sec] || 0) + 1;
          }
        });
      }
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS_DATA;

    return PROJECTS_DATA.filter(p => {
      return p.filterCategory === activeFilter || 
             (p.secondaryFilters && p.secondaryFilters.includes(activeFilter));
    });
  }, [activeFilter]);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="os-window-card">
          <div className="os-window-header">
            <div className="os-window-path">
              <span>C:\GIFTY\works</span>
            </div>
            <div className="os-window-controls">
              <span className="os-close-btn">x</span>
            </div>
          </div>

          <div className="os-window-body">
            <div className="section-header text-center">
              <span className="section-eyebrow">
                <Layers size={14} className="inline mr-1.5" />
                Software Portfolio
              </span>
              <h2 className="section-title">Featured Engineering Projects</h2>
              <p className="section-subtitle">
                Interactive web applications, AI document assistants, emergency systems, and mini builds.
              </p>
            </div>

            <ProjectFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              counts={categoryCounts}
            />

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectProject={setSelectedProject}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="empty-projects-state">
                <p>No projects found matching category "{activeFilter}".</p>
                <button className="primary-cta-btn mt-3" onClick={() => setActiveFilter('All')}>
                  View All Projects
                </button>
              </div>
            )}

            <MiniProjects />
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
