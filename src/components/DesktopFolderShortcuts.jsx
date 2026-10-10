import React from 'react';

export default function DesktopFolderShortcuts({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Desktop Shortcuts */}
      <div className="desktop-folder-shortcuts left" aria-label="Desktop Left Shortcuts">
        <button 
          className="desktop-folder-btn" 
          onClick={() => scrollTo('home')}
          title="Profile / Home"
        >
          <div className="desktop-app-icon">
            <span>h</span>
          </div>
          <span className="folder-label">profile</span>
        </button>

        <button 
          className="desktop-folder-btn" 
          onClick={() => scrollTo('projects')}
          title="Works / Projects"
        >
          <div className="desktop-folder-icon">
            <svg viewBox="0 0 54 44" fill="none" className="folder-svg">
              <path d="M 4 8 C 4 5.79 5.79 4 8 4 L 20 4 C 22.2 4 24 5.79 24 8 L 24 10 L 46 10 C 48.2 10 50 11.79 50 14 L 50 36 C 50 38.2 48.2 40 46 40 L 8 40 C 5.79 40 4 38.2 4 36 Z" fill="#FDE769" stroke="#4A563A" strokeWidth="3" strokeLinejoin="round" />
              <path d="M 4 16 L 50 16 L 46 40 L 8 40 Z" fill="#FEE870" stroke="#4A563A" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="folder-label">works</span>
        </button>
      </div>

      {/* Right Desktop Shortcuts */}
      <div className="desktop-folder-shortcuts right" aria-label="Desktop Right Shortcuts">
        <button 
          className="desktop-folder-btn" 
          onClick={() => scrollTo('contact')}
          title="Contact Me"
        >
          <div className="desktop-folder-icon">
            <svg viewBox="0 0 54 44" fill="none" className="folder-svg">
              <path d="M 4 8 C 4 5.79 5.79 4 8 4 L 20 4 C 22.2 4 24 5.79 24 8 L 24 10 L 46 10 C 48.2 10 50 11.79 50 14 L 50 36 C 50 38.2 48.2 40 46 40 L 8 40 C 5.79 40 4 38.2 4 36 Z" fill="#FDE769" stroke="#4A563A" strokeWidth="3" strokeLinejoin="round" />
              <path d="M 4 16 L 50 16 L 46 40 L 8 40 Z" fill="#FEE870" stroke="#4A563A" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="folder-label">contact</span>
        </button>

        <button 
          className="desktop-folder-btn" 
          onClick={onOpenResume}
          title="Resume Document"
        >
          <div className="desktop-folder-icon">
            <svg viewBox="0 0 54 44" fill="none" className="folder-svg">
              <path d="M 4 8 C 4 5.79 5.79 4 8 4 L 20 4 C 22.2 4 24 5.79 24 8 L 24 10 L 46 10 C 48.2 10 50 11.79 50 14 L 50 36 C 50 38.2 48.2 40 46 40 L 8 40 C 5.79 40 4 38.2 4 36 Z" fill="#FDE769" stroke="#4A563A" strokeWidth="3" strokeLinejoin="round" />
              <path d="M 4 16 L 50 16 L 46 40 L 8 40 Z" fill="#FEE870" stroke="#4A563A" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="folder-label">resume</span>
        </button>
      </div>
    </>
  );
}
