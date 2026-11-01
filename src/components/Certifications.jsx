import React, { useState } from 'react';
import { 
  Award, 
  Briefcase, 
  BarChart3, 
  Cloud, 
  Bot, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  X, 
  Download 
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/certificationsData';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase size={22} className="text-indigo-600" />;
      case 'BarChart3': return <BarChart3 size={22} className="text-emerald-600" />;
      case 'Cloud': return <Cloud size={22} className="text-amber-500" />;
      case 'Bot': return <Bot size={22} className="text-purple-600" />;
      default: return <Award size={22} className="text-amber-600" />;
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <div className="os-window-card">
          <div className="os-window-header">
            <div className="os-window-path">
              <span>C:\GIFTY\credentials\certifications</span>
            </div>
            <div className="os-window-controls">
              <span className="os-close-btn">x</span>
            </div>
          </div>

          <div className="os-window-body">
            <div className="section-header text-center">
              <span className="section-eyebrow">
                <ShieldCheck size={14} className="inline mr-1.5" />
                Verified Credentials
              </span>
              <h2 className="section-title">Certifications & Experience</h2>
              <p className="section-subtitle">
                Industry-recognized internships, cloud certifications, and job simulations in Applied AI, AWS, and Data Analytics.
              </p>
            </div>

            <div className="certifications-grid">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="cert-card-top">
                    <div className="cert-icon-wrap">
                      {getCertIcon(cert.icon)}
                    </div>
                    <div className="cert-meta-info">
                      <span className="cert-badge-pill">{cert.badge}</span>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <div className="cert-date-row">
                        <Calendar size={12} className="inline mr-1" />
                        <span>{cert.date}</span>
                        {cert.certificateId && (
                          <span className="cert-id-tag">ID: {cert.certificateId}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="cert-description">{cert.description}</p>

                  <ul className="cert-highlights-list">
                    {cert.highlights.map((point, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={14} className="cert-check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View Certificate Button */}
                  <div className="cert-actions-row">
                    <button 
                      className="view-cert-btn"
                      onClick={() => setActiveCert(cert)}
                      title={`Display ${cert.title}`}
                    >
                      <Eye size={15} className="mr-1.5" />
                      <span>View Earned Certificate</span>
                    </button>
                    {cert.fileUrl && (
                      <a 
                        href={cert.fileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cert-open-btn"
                        title="Open document in new tab"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {cert.accreditations && (
                    <div className="cert-accreditations-footer">
                      <span className="accred-label">Accreditations:</span> {cert.accreditations}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="os-window-header">
              <div className="os-window-path">
                <span>C:\GIFTY\certificates\{activeCert.id}</span>
              </div>
              <div className="os-window-controls">
                <button className="os-close-btn" onClick={() => setActiveCert(null)}>✕</button>
              </div>
            </div>

            <div className="cert-modal-body">
              <div className="cert-modal-top-bar">
                <div>
                  <h3 className="cert-modal-title">{activeCert.title}</h3>
                  <p className="cert-modal-sub">{activeCert.issuer} · {activeCert.date}</p>
                </div>
                <a 
                  href={activeCert.fileUrl} 
                  download 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-modal-download-btn"
                  title="Download Certificate"
                >
                  <Download size={15} className="mr-1.5" />
                  <span>Download</span>
                </a>
              </div>

              <div className="cert-frame-container">
                {activeCert.fileType === 'image' ? (
                  <img 
                    src={activeCert.fileUrl} 
                    alt={activeCert.title} 
                    className="cert-display-image"
                  />
                ) : (
                  <iframe 
                    src={`${activeCert.fileUrl}#toolbar=0`} 
                    title={activeCert.title} 
                    className="cert-display-iframe"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
