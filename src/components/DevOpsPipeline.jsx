import React, { useState } from 'react';
import { Code, Hammer, TestTube, Container, Rocket, CheckCircle } from 'lucide-react';

export default function DevOpsPipeline() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 'code',
      label: 'Code',
      icon: Code,
      color: '#3B82F6',
      log: 'git commit -m "feat: updated auth service"\nTriggered webhook via GitHub Actions push event'
    },
    {
      id: 'build',
      label: 'Build',
      icon: Hammer,
      color: '#8B5CF6',
      log: 'npm run build\nBundling React & Node microservices... Success [0.4s]'
    },
    {
      id: 'test',
      label: 'Test',
      icon: TestTube,
      color: '#10B981',
      log: 'pytest & jest runner\nExecuting 42 unit & API integration tests... 100% Passed ✨'
    },
    {
      id: 'docker',
      label: 'Docker',
      icon: Container,
      color: '#F59E0B',
      log: 'docker build -t giftysharon125/cicd-demo:latest .\nPushed multi-stage image tag to DockerHub'
    },
    {
      id: 'deploy',
      label: 'Deploy',
      icon: Rocket,
      color: '#EC4899',
      log: 'ssh deploy@ec2-instance "docker pull & systemctl restart"\nStaging Live Health Check: 200 OK 🚀'
    }
  ];

  return (
    <div className="devops-pipeline-widget">
      <div className="pipeline-title">
        <span>CI/CD Pipeline Flow</span>
        <span className="pipeline-status">
          <CheckCircle size={13} className="inline mr-1 text-emerald-500" /> Live Automated
        </span>
      </div>

      <div className="pipeline-steps-grid">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const isActive = activeStep === step.id;

          return (
            <React.Fragment key={step.id}>
              <div 
                className={`pipeline-node ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                style={{ '--node-color': step.color }}
              >
                <div className="node-icon">
                  <IconComp size={15} />
                </div>
                <span className="node-label">{step.label}</span>
              </div>

              {idx < steps.length - 1 && (
                <div className="pipeline-arrow" aria-hidden="true">
                  <span>→</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="pipeline-log-preview">
        {activeStep ? (
          <div className="log-content fadeIn">
            <span className="log-step-tag" style={{ color: steps.find(s => s.id === activeStep)?.color }}>
              [{steps.find(s => s.id === activeStep)?.label}]
            </span>
            <pre>{steps.find(s => s.id === activeStep)?.log}</pre>
          </div>
        ) : (
          <div className="log-placeholder">
            <span>Hover or tap any stage (Code, Build, Test, Docker, Deploy) to inspect logs</span>
          </div>
        )}
      </div>
    </div>
  );
}
