export const WORKFLOW_STEPS = [
  {
    id: 'step-1',
    number: '01',
    title: 'Understand the problem',
    shortDesc: 'Deep dive into user requirements, edge cases, and systemic constraints.',
    detail: 'Before writing a single line of code, I break down the real-world problem. Whether it is emergency safewords in Project Saathi or PDF document parsing in Lab Assistant, clarity on requirements avoids wasted cycles later.',
    iconName: 'HelpCircle'
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Design the solution',
    shortDesc: 'Architect database schemas, API routes, data flows, and component layouts.',
    detail: 'I sketch backend data schemas, API contracts, and component interfaces. I choose appropriate databases (MongoDB vs SQL) and vector indexing strategies (FAISS/ChromaDB) based on latency and query requirements.',
    iconName: 'Compass'
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Build',
    shortDesc: 'Write clean, modular, typed, and well-documented code.',
    detail: 'I implement features incrementally in clean git branches. I focus on clear naming, single-responsibility functions, modular handlers, and clean error handling without swallowing exceptions.',
    iconName: 'Hammer'
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Test',
    shortDesc: 'Execute unit checks, API integration tests, and simulated failovers.',
    detail: 'Code isn\'t complete until verified. I test REST endpoints with edge-case payloads, verify webhook signature handling under simulated network dropouts, and validate UI accessibility across devices.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Debug',
    shortDesc: 'Trace root causes methodically using stack logs, network inspect, and breakpoints.',
    quote: 'I don\'t consider an error the end of the process. I trace it, understand why it happened, fix the root cause, and test again.',
    detail: 'When things break, I analyze empirical logs rather than trial-and-error guessing. I trace upstream parameters, inspect network frames, and eliminate underlying root causes to prevent regressions.',
    iconName: 'Bug'
  },
  {
    id: 'step-6',
    number: '06',
    title: 'Deploy',
    shortDesc: 'Containerize apps, configure CI/CD pipelines, and publish to production.',
    detail: 'I package applications using multi-stage Docker builds and configure GitHub Actions pipelines to run linting and tests before automated deployment to cloud instances like AWS EC2.',
    iconName: 'Rocket'
  },
  {
    id: 'step-7',
    number: '07',
    title: 'Improve',
    shortDesc: 'Gather metrics, refactor bottlenecks, and iterate continuously.',
    detail: 'Post-launch performance review. I profile slow database queries, optimize vector retrieval embeddings, reduce client bundle sizes, and refine user experience based on real interactions.',
    iconName: 'TrendingUp'
  }
];
