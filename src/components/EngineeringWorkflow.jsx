import React, { useState } from 'react';
import { HelpCircle, Compass, Hammer, CheckCircle2, Bug, Rocket, TrendingUp, Cpu } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/workflowData';

export default function EngineeringWorkflow() {
  const [selectedStep, setSelectedStep] = useState('step-5');

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'HelpCircle': return <HelpCircle size={20} className="text-blue-600" />;
      case 'Compass': return <Compass size={20} className="text-purple-600" />;
      case 'Hammer': return <Hammer size={20} className="text-indigo-600" />;
      case 'CheckCircle2': return <CheckCircle2 size={20} className="text-emerald-600" />;
      case 'Bug': return <Bug size={20} className="text-red-600" />;
      case 'Rocket': return <Rocket size={20} className="text-pink-600" />;
      case 'TrendingUp': return <TrendingUp size={20} className="text-amber-600" />;
      default: return <Cpu size={20} className="text-purple-600" />;
    }
  };

  const currentStep = WORKFLOW_STEPS.find(s => s.id === selectedStep) || WORKFLOW_STEPS[0];

  return (
    <section id="workflow" className="workflow-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-eyebrow">
            <Cpu size={14} className="inline mr-1.5" />
            Engineering Mindset
          </span>
          <h2 className="section-title">How I Build</h2>
          <p className="section-subtitle">
            A structured software engineering process focused on system reliability, root-cause resolution, and continuous delivery.
          </p>
        </div>

        <div className="workflow-stepper-bar">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = selectedStep === step.id;

            return (
              <React.Fragment key={step.id}>
                <div 
                  className={`stepper-node ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedStep(step.id)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                >
                  <div className="node-number">{step.number}</div>
                  <div className="node-icon">{getStepIcon(step.iconName)}</div>
                  <span className="node-title">{step.title}</span>
                </div>

                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="stepper-line">
                    <span className="line-dot"></span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="workflow-explanation-card fadeIn">
          <div className="card-top-row">
            <div className="card-badge-box">
              <span className="step-num-pill">Step {currentStep.number}</span>
              <h3>{currentStep.title}</h3>
            </div>
            <div className="step-icon-large">
              {getStepIcon(currentStep.iconName)}
            </div>
          </div>

          <p className="step-summary">{currentStep.shortDesc}</p>

          {currentStep.quote && (
            <div className="workflow-quote-box">
              <p>“{currentStep.quote}”</p>
            </div>
          )}

          <div className="step-detail-paragraph">
            <p>{currentStep.detail}</p>
          </div>

          <div className="workflow-card-footer">
            <span>Click any step above to explore my complete software methodology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
