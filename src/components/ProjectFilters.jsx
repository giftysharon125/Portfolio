import React from 'react';

export default function ProjectFilters({ activeFilter, onFilterChange, counts }) {
  const filterOptions = [
    { id: 'All', label: 'All Projects' },
    { id: 'Backend', label: 'Backend' },
    { id: 'AI', label: 'AI & ML' },
    { id: 'DevOps', label: 'DevOps & Cloud' },
  ];

  return (
    <div className="project-filters-bar" role="tablist" aria-label="Project Category Filters">
      {filterOptions.map((opt) => {
        const count = counts[opt.id] || 0;
        const isActive = activeFilter === opt.id;

        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            className={`filter-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onFilterChange(opt.id)}
          >
            <span>{opt.label}</span>
            <span className="filter-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
