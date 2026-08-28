export const PROJECTS_DATA = [
  {
    id: 'project-saathi',
    title: 'Project Saathi',
    category: 'Emergency Safety / Backend / WhatsApp / AI',
    filterCategory: 'Backend',
    secondaryFilters: ['AI', 'Web'],
    badge: 'Backend Architecture',
    shortDescription: 'Emergency & guardian-support system with WhatsApp webhook integration, automated safewords, and AI emergency handling.',
    mascot: 'computer',
    iconName: 'ShieldAlert',
    problem: 'Traditional emergency apps require manual multi-step user interaction during critical moments when users might have limited access or mobility.',
    solution: 'Designed an emergency workflow system using WhatsApp as a primary low-friction channel, triggering instant guardian notifications, automated location tracking, and dead-man\'s-switch overdue check-ins.',
    architecture: 'Express.js backend receiving real-time webhooks from Twilio/WhatsApp API -> Async queue handler -> MongoDB Atlas for user state -> LangChain + Vector store for natural language command parsing.',
    technologies: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB Atlas',
      'Twilio / WhatsApp API', 'Firebase Storage / AWS S3',
      'Gemini / OpenAI APIs', 'LangChain', 'FAISS / ChromaDB'
    ],
    highlights: [
      'WhatsApp Webhook Event Handling & Emergency Parser',
      'Emergency Safeword & Secret Distress Signal Triggers',
      'Dead-Man\'s-Switch Overdue Check-in System',
      'Guardian Interactive Alert Workflows',
      'Natural-Language Location & Incident Logging',
      'Database-first Utility Queries & Optimized Indexing'
    ],
    learned: 'Building resilient webhook handlers, managing stateless multi-user emergency workflows, and handling low-latency fallback logic during API degradation.',
    challenges: 'Ensuring zero message loss during Twilio webhook surges and crafting predictable fallback handlers when OpenAI/Gemini latency increases.',
    future: 'Add offline SMS mesh fallback and automated voice call escalation via Twilio Voice API.',
    github: 'https://github.com/giftysharon125/project-saathi',
    featured: true
  },
  {
    id: 'lab-manual-ai',
    title: 'Lab Manual Conversational AI Assistant',
    category: 'AI Engineering / Document Processing / Backend',
    filterCategory: 'AI',
    secondaryFilters: ['Backend'],
    badge: 'Document Parsing AI',
    shortDescription: 'Intelligent laboratory manual assistant extracting experiment specs, safety guidelines, equipment lists, and procedures.',
    mascot: 'pdfDoc',
    iconName: 'FileText',
    problem: 'Engineering students waste significant time scouring multi-page PDF lab manuals to extract equipment lists, safety precautions, and specific step-by-step procedures.',
    solution: 'Built a Python document processing pipeline that parses complex PDF structures into structured experiment schema and enables interactive natural language Q&A.',
    architecture: 'PyPDF2 / PDFPlumber text extraction engine -> Regex structure parser -> Chunking & embedding with OpenAI/Gemini models -> FAISS Vector DB indexing -> Streamlit conversational UI.',
    technologies: [
      'Python', 'Streamlit', 'PyPDF2', 'LangChain', 'FAISS', 'Regex / Document Parsing'
    ],
    highlights: [
      'Automated Experiment & Aim Detection from Raw PDFs',
      'Structured Equipment & Chemical Reagent Extraction',
      'Step-by-step Procedure & Safety Warning Parser',
      'Context-aware Conversational Querying using FAISS RAG',
      'Precise Page & Section Citation Responses'
    ],
    learned: 'Handling unstructured PDF layout anomalies, chunking strategies for multi-step technical instructions, and optimizing vector retrieval confidence.',
    challenges: 'Parsing complex tabular lab data and formatted math formulas cleanly out of scanned or custom-formatted PDFs.',
    future: 'Support interactive circuit diagram analysis and automatic lab report draft generation.',
    github: 'https://github.com/shadrakbabu/lab-assistant-ai.git',
    featured: true
  },
  {
    id: 'devops-cicd-demo',
    title: 'DevOps CI/CD Automation Pipeline',
    category: 'DevOps / Backend / Cloud',
    filterCategory: 'DevOps',
    secondaryFilters: ['Backend'],
    badge: 'Infrastructure & Pipelines',
    shortDescription: 'Automated CI/CD demonstration showcasing Docker containerization, Jenkins pipelines, and AWS EC2 deployment automation.',
    mascot: 'pipeline',
    iconName: 'GitMerge',
    problem: 'Manual deployment processes lead to inconsistent environments, unexpected production breaks, and delayed release cycles.',
    solution: 'Designed and deployed an automated build-test-containerize-deploy pipeline that runs tests on push, builds verified Docker containers, and deploys to cloud servers.',
    architecture: 'Git Push Event -> Webhook -> Jenkins / GitHub Actions -> Unit Tests & Linter -> Docker Image Build -> DockerHub Push -> EC2 Staging Auto-deploy.',
    technologies: [
      'Docker', 'GitHub Actions', 'Jenkins', 'Linux (Ubuntu)', 'Node.js', 'DockerHub', 'AWS / EC2'
    ],
    highlights: [
      'Multi-stage Dockerfile Optimization (Small footprint builds)',
      'Automated Integration Testing & Static Analysis Triggers',
      'Docker Image Tagging & Registry Push Workflows',
      'Zero-downtime Blue/Green Deployment Simulation',
      'Interactive Visual Pipeline Stage Tracker'
    ],
    learned: 'Mastering Docker layer caching, configuring secure SSH credentials in GitHub Actions secrets, and managing Linux systemd services on AWS.',
    challenges: 'Resolving environment discrepancy issues between local macOS/Windows environments and Ubuntu EC2 build agents.',
    future: 'Integrate Kubernetes (k8s) manifest deployments and Helm chart packaging.',
    github: 'https://github.com/giftysharon125/Devops-CI-CD.git',
    featured: true
  }
];

export const MINI_PROJECTS = [
  {
    id: 'scoopiella',
    title: 'Scoopiella — Cute Ice Cream Shop 🍦',
    tech: 'HTML5 / CSS3 / JavaScript',
    desc: 'Delightful editorial website for an artisanal ice cream parlour featuring custom sundae building & flavor menus.',
    icon: 'IceCream',
    link: 'https://github.com/giftysharon125/Scoopiella'
  },
  {
    id: 'memory-game',
    title: 'Mascot & Tech Memory Game 🎮',
    tech: 'JavaScript / CSS Animations',
    desc: 'Playful card matching game featuring developer mascots, flip animations, move counters, and high score tracking.',
    icon: 'Gamepad2',
    link: 'https://github.com/giftysharon125/CodeMatch.git'
  }
];
