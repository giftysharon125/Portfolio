export const PROJECTS_DATA = [
  {
    id: 'project-saathi',
    title: 'Project Saathi',
    category: 'Emergency Safety / Backend / WhatsApp / AI',
    filterCategory: 'Backend',
    secondaryFilters: ['AI', 'Web'],
    badge: 'Ongoing Project · Active Development',
    isOngoing: true,
    shortDescription: 'Ongoing emergency & guardian-support system with WhatsApp webhook integration, automated safewords, and AI emergency handling.',
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
    id: 'campus-infra-agent',
    title: 'Campus Infrastructure Decision Support Agent',
    category: 'AI Agents / Decision Intelligence / Optimization',
    filterCategory: 'AI',
    secondaryFilters: ['Backend'],
    badge: 'National Hackathon Finalist (Rank 7)',
    shortDescription: 'National-level hackathon AI agent providing automated analytics, predictive insights, and decision support for institutional campus infrastructure.',
    mascot: 'robot',
    iconName: 'Building',
    problem: 'Campus administrative authorities struggle with siloed infrastructure data, slow anomaly detection, and subjective manual allocation of institutional resources.',
    solution: 'Engineered an autonomous Multi-Agent Decision Support System that ingests real-time campus facility telemetry, predicts utilization patterns, detects facility degradation bottlenecks, and suggests optimized resource allocation strategies.',
    architecture: 'Campus Data Ingestion Pipeline -> LangChain Decision Agent Core -> Vector & SQL Knowledge Base -> Predictive Optimization Engine -> Interactive Decision Dashboard.',
    technologies: [
      'Python', 'FastAPI', 'LangChain', 'AI Agents', 'OpenAI / Gemini API', 'Vector DB', 'Data Visualization'
    ],
    highlights: [
      'Selected among Top 12 Teams Nationally (Secured 7th place)',
      'Multi-agent decision logic with autonomous reasoning loops',
      'Campus facility utilization forecasting & predictive maintenance',
      'Automated administrative recommendation report generator',
      'Interactive executive decision support interface'
    ],
    learned: 'Designing goal-driven autonomous agent workflows, handling multi-source facility datasets, and presenting high-stakes decision intelligence cleanly to administrators.',
    challenges: 'Structuring reliable tool-calling and guardrails to prevent agent hallucinations in budgetary and infrastructure capacity evaluations.',
    future: 'Integrate IoT sensor live feeds and digital twin 3D campus floor plan overlays.',
    github: 'https://github.com/giftysharon125/Campus-infrastructure-decision-support-agent.git',
    demo: 'https://campus-infrastructure-decision-support-agent-i4jdxqgc4pbpclfu7.streamlit.app/',
    featured: true
  },
  {
    id: 'bluesprout',
    title: 'BlueSprout — Rooftop Rainwater & AI Water Assessment',
    category: 'Full-Stack / AI Water Conservation / SIH 2025',
    filterCategory: 'AI',
    secondaryFilters: ['Frontend', 'Backend'],
    badge: 'SIH 2025 Internal Round Qualified',
    shortDescription: 'Smart India Hackathon 2025 web platform enabling AI-powered rooftop rainwater harvesting assessments, catchment calculation, and community water conservation tracking.',
    mascot: 'cloud',
    iconName: 'Droplets',
    problem: 'Urban communities and homeowners lack accessible tools to calculate their rooftop rainwater collection potential or determine suitable harvesting filtration setups, accelerating urban groundwater depletion.',
    solution: 'Designed and built an interactive web solution providing AI-driven rooftop image assessment, manual mathematical catchment potential calculators, and gamified conservation tracking for households and educational campuses.',
    architecture: 'Interactive Frontend UI (HTML5 / CSS3 / JavaScript) -> Rooftop Image Assessment Logic & Area Calculation Engine -> Local Rainfall & Catchment Algorithms -> Water Savings Analytics Dashboard.',
    technologies: [
      'HTML5', 'CSS3', 'JavaScript', 'AI Vision Assessment', 'FontAwesome', 'Data Analytics', 'Responsive Design'
    ],
    highlights: [
      'Smart India Hackathon 2025 Internal Round Qualified',
      'AI-powered rooftop photo upload & system recommendation module',
      'Mathematical rainwater catchment potential calculator based on roof area & local precipitation',
      'Water savings tracker visualizing conservation progress and environmental impact',
      'Interactive educational game educating communities on water conservation'
    ],
    learned: 'Building high-converting educational interfaces, translating hydrological calculation formulas into user-friendly UI sliders, and rapid team delivery during hackathon selection.',
    challenges: 'Designing intuitive calculator inputs for non-technical homeowners to estimate roof slope, area, and run-off coefficients accurately.',
    future: 'Integrate IoT rain gauge hardware telemetry and municipal water-table level APIs.',
    github: 'https://github.com/kartikey369-ind/BlueSprout-SIH25',
    demo: 'https://kartikey369-ind.github.io/BlueSprout-SIH25/',
    featured: true
  },
  {
    id: 'smart-belt',
    title: 'SmartBelt — Wearable Health & Safety System',
    category: 'IoT / Wearable Hardware / Embedded / Interdisciplinary',
    filterCategory: 'Hardware',
    secondaryFilters: ['Backend'],
    badge: 'Smart India Hackathon Top Performer',
    shortDescription: 'Interdisciplinary IoT smart wearable belt with biometric sensors, automated fall/distress detection, and emergency cloud alerting.',
    mascot: 'computer',
    iconName: 'Activity',
    problem: 'Vulnerable individuals, industrial workers, and elderly citizens face high fatality risks during unmonitored falls or medical emergencies without immediate distress signaling.',
    solution: 'Collaborated across disciplines to design SmartBelt — a smart IoT wearable equipped with accelerometer, posture, and vital tracking sensors paired with automated cloud dispatch of emergency coordinates.',
    architecture: 'Microcontroller / Embedded Sensor Nodes (ESP32/Arduino) -> Bluetooth/WiFi Telemetry Dispatch -> Cloud Alerting Server -> Emergency SMS / WhatsApp Guardian Push System.',
    technologies: [
      'IoT / Embedded Systems', 'ESP32 / Arduino', 'C / C++', 'Python / Node.js', 'Sensor Fusion', 'Emergency Alerting APIs'
    ],
    highlights: [
      'Smart India Hackathon (SIH) Internal Round Top Performer',
      'Interdisciplinary collaboration uniting hardware, firmware & software',
      'Real-time posture, motion, and sudden fall detection algorithm',
      'Automated emergency SOS trigger with GPS location broadcast',
      'Low-power sensor telemetry and companion monitoring dashboard'
    ],
    learned: 'Interdisciplinary team leadership, bridging hardware sensor constraints with reliable backend event processing and real-time alerts.',
    challenges: 'Eliminating false-positive fall detection during normal physical movements through sensor threshold tuning and filtering.',
    future: 'Develop ultra-compact PCB form factor and integrate edge AI gesture recognition.',
    github: 'https://github.com/giftysharon125/SmartBelt.git',
    demo: 'https://smartbelt-ten.vercel.app/',
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
    demo: 'https://lab-assistant-ai.streamlit.app/',
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
