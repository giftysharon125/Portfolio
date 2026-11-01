import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Code, 
  Server, 
  Bot, 
  Container, 
  Briefcase, 
  Sparkles, 
  Trophy,
  ChevronLeft,
  ChevronRight,
  Compass
} from 'lucide-react';
import { JOURNEY_TIMELINE } from '../data/journeyData';
import JourneyRobotMascot from './JourneyRobotMascot';

export default function DeveloperJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const rowRefs = useRef([]);

  const getTimelineIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={18} className="text-purple-600" />;
      case 'Trophy': return <Trophy size={18} className="text-amber-500" />;
      case 'Code': return <Code size={18} className="text-blue-600" />;
      case 'Server': return <Server size={18} className="text-emerald-600" />;
      case 'Bot': return <Bot size={18} className="text-amber-600" />;
      case 'Container': return <Container size={18} className="text-cyan-600" />;
      case 'Briefcase': return <Briefcase size={18} className="text-pink-600" />;
      default: return <Sparkles size={18} className="text-purple-600" />;
    }
  };

  // Scroll detection to update active step automatically as user reads down the timeline
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-step-index'), 10);
          if (!isNaN(index)) {
            setActiveStep(index);
          }
        }
      });
    }, observerOptions);

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
    const targetEl = rowRefs.current[index];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const nextStep = () => {
    const next = Math.min(JOURNEY_TIMELINE.length - 1, activeStep + 1);
    handleStepClick(next);
  };

  const prevStep = () => {
    const prev = Math.max(0, activeStep - 1);
    handleStepClick(prev);
  };

  return (
    <section id="journey" className="journey-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-eyebrow">
            <Sparkles size={14} className="inline mr-1.5" />
            Milestones & Growth
          </span>
          <h2 className="section-title">My Developer Journey</h2>
          <p className="section-subtitle">
            Follow the journey along with our robotic companion — from foundational algorithms to hackathon victories, applied AI, and production systems.
          </p>

          {/* Mini Robotic Tour Controller */}
          <div className="journey-tour-bar">
            <div className="tour-badge">
              <Compass size={14} className="mr-1.5 text-amber-600 inline" />
              <span>Robot Companion Tour</span>
            </div>

            <div className="tour-step-counter">
              <span>Milestone {activeStep + 1} of {JOURNEY_TIMELINE.length}:</span>
              <strong> {JOURNEY_TIMELINE[activeStep].title}</strong>
            </div>

            <div className="tour-nav-btns">
              <button 
                className="tour-btn"
                onClick={prevStep} 
                disabled={activeStep === 0}
                title="Previous Milestone"
                aria-label="Previous Milestone"
              >
                <ChevronLeft size={16} />
                <span>Prev</span>
              </button>

              <button 
                className="tour-btn primary"
                onClick={nextStep} 
                disabled={activeStep === JOURNEY_TIMELINE.length - 1}
                title="Next Milestone"
                aria-label="Next Milestone"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="vertical-timeline-wrap">
          <div className="timeline-spine"></div>

          {JOURNEY_TIMELINE.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isActive = activeStep === idx;

            return (
              <div 
                key={idx} 
                ref={(el) => (rowRefs.current[idx] = el)}
                data-step-index={idx}
                className={`timeline-row ${isEven ? 'left' : 'right'} ${isActive ? 'active-journey-step' : ''}`}
                onClick={() => handleStepClick(idx)}
              >
                <div className={`timeline-node-icon ${isActive ? 'active-node' : ''}`}>
                  {getTimelineIcon(item.icon)}
                </div>

                {/* Robotic Companion positioned at active step */}
                {isActive && (
                  <div className="timeline-robot-anchor">
                    <JourneyRobotMascot 
                      currentStep={idx}
                      currentTitle={item.title}
                      isLeft={!isEven}
                    />
                  </div>
                )}

                <div className={`timeline-card ${isActive ? 'expanded-step-card' : ''}`}>
                  <div className="card-meta">
                    <span className="year-pill">{item.year}</span>
                    <span className="badge-pill">{item.badge}</span>
                    {isActive && (
                      <span className="active-robot-indicator">
                        <span className="pulse-dot-mini"></span>
                        Robot Here
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-role">{item.role}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
