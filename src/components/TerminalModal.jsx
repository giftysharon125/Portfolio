import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Sparkles, HelpCircle, CornerDownLeft, RefreshCw } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: '======================================================', type: 'system' },
    { text: '💻 GIFTY SHARON — INTERACTIVE CS TERMINAL COMPANION [v2.4]', type: 'highlight' },
    { text: '   Frontend Engineer & AI Applications Developer · ANITS', type: 'system' },
    { text: '======================================================', type: 'system' },
    { text: '👋 Welcome! Click any suggested question below or type into the prompt.', type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const SUGGESTED_QUESTIONS = [
    { label: 'Who is Gifty Sharon?', cmd: 'whoami', icon: '👩‍💻' },
    { label: 'What are your top projects?', cmd: 'projects', icon: '🚀' },
    { label: 'What is your tech stack & skills?', cmd: 'skills', icon: '⚡' },
    { label: 'Hackathon achievements & SIH?', cmd: 'hackathons', icon: '🏆' },
    { label: 'Tell me about Project Saathi', cmd: 'saathi', icon: '🛡️' },
    { label: 'Tell me about Scoopiella', cmd: 'scoopiella', icon: '🍨' },
    { label: 'Academic background & college?', cmd: 'education', icon: '🎓' },
    { label: 'LeetCode & Problem Solving?', cmd: 'leetcode', icon: '🧩' },
    { label: 'How can I contact or hire Gifty?', cmd: 'contact', icon: '📬' },
    { label: 'Show me an Easter Egg!', cmd: 'easteregg', icon: '✨' }
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const processQuery = (rawQuery) => {
    const q = rawQuery.trim().toLowerCase();
    if (!q) return;

    const newHistory = [...history, { text: `$ ${rawQuery}`, type: 'user' }];

    // Intelligent query matching for commands and natural questions
    if (q === 'whoami' || q.includes('who is') || q.includes('who are you') || q.includes('about') || q.includes('introduce')) {
      newHistory.push({
        text: '👩‍💻 Gifty Sharon — Frontend Engineer & Applied AI Developer',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Computer Science Engineering student at Anil Neerukonda Institute of Technology & Sciences (ANITS, 2024–2028).\n• Specializing in building intuitive, high-performance web applications and agentic AI systems with LangChain, vector search, and modern React.\n• Double Smart India Hackathon internal qualifier & National Hackathon Rank 7 Finalist.\n• Passionate about turning complex intelligence into accessible, human-friendly products.',
        type: 'response'
      });
    } else if (q === 'projects' || (q.includes('project') && !q.includes('saathi')) || q.includes('what have you built') || q.includes('portfolio work')) {
      newHistory.push({
        text: '🚀 Featured Engineering Projects:',
        type: 'highlight'
      });
      newHistory.push({
        text: '1. Project Saathi [Ongoing]: Emergency safety bot using WhatsApp webhooks, secret safewords & automated dead-man\'s-switch.\n2. Campus Infrastructure Decision Support Agent: National Hackathon Top 12 (Rank 7) autonomous multi-agent analytics tool.\n3. BlueSprout [SIH 2025 Qualified]: Rooftop rainwater harvesting AI assessment and catchment calculator.\n4. SmartBelt [SIH 2026 Top Performer]: Interdisciplinary IoT wearable health & fall-detection safety belt.\n5. Scoopiella: Delightful artisanal ice cream storefront with custom animations and ordering UI.\n6. Lab Manual Conversational AI Assistant: Streamlit RAG tool extracting aims, chemicals & procedures from laboratory PDFs.',
        type: 'response'
      });
    } else if (q === 'saathi' || q.includes('saathi') || q.includes('emergency')) {
      newHistory.push({
        text: '🛡️ Project Saathi — Ongoing Guardian & Emergency Safety System:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Status: Active Development (Ongoing Project)\n• Purpose: Low-friction emergency distress triggering without needing a dedicated app open.\n• Key Features: WhatsApp webhook triggers, secret emergency safewords, automated guardian SMS/WhatsApp broadcasts, and dead-man\'s-switch periodic check-in safety prompts.\n• Tech Stack: React.js, Node.js, Express, MongoDB Atlas, Twilio / WhatsApp API, LangChain.',
        type: 'response'
      });
    } else if (q === 'scoopiella' || q.includes('scoopiella') || q.includes('ice cream')) {
      newHistory.push({
        text: '🍨 Scoopiella — Joy In Every Scoop:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Overview: A responsive, playful confectionery storefront for artisanal gelato & gourmet ice cream.\n• Highlights: Custom CSS keyframe animations, signature flavors showcase (Cloudberry Bliss, Matcha Dream), and fluid ordering UI.\n• Live App: https://giftysharon125.github.io/Scoopiella/\n• GitHub: https://github.com/giftysharon125/Scoopiella',
        type: 'response'
      });
    } else if (q === 'skills' || q.includes('skill') || q.includes('tech stack') || q.includes('technologies') || q.includes('languages')) {
      newHistory.push({
        text: '⚡ Technical Skill Matrix:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Core Languages: Python, JavaScript (ES6+), C, C++, Java, HTML5, CSS3 / Modern Flex & Grid\n• Frontend Engineering: React.js, Tailwind CSS, Component Architecture, Responsive UI/UX\n• Backend & APIs: Node.js, Express.js, FastAPI, RESTful Webhooks, Twilio API\n• Applied AI & Agents: LangChain, Multi-Agent Systems, FAISS Vector Search, ChromaDB, OpenAI & Gemini APIs\n• Database: MongoDB Atlas, MySQL, Vector Embeddings\n• DevOps & Tools: Docker, Git, GitHub Actions, AWS EC2, Linux, Jenkins',
        type: 'response'
      });
    } else if (q === 'hackathons' || q === 'achievements' || q === 'awards' || q.includes('hackathon') || q.includes('award') || q.includes('sih') || q.includes('win')) {
      newHistory.push({
        text: '🏆 Competitive Hackathon Achievements:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• National Level Hackathon Finalist (Rank 7): Campus Infrastructure Decision Support Agent chosen among Top 12 teams nationally.\n• Smart India Hackathon (SIH 2026): College Top Performer for SmartBelt Wearable Safety System.\n• Smart India Hackathon (SIH 2025): College Internal Round Qualified for BlueSprout AI Rainwater Harvesting Platform.\n• Capabl Applied AI Residency Internship (2 Months, Cert: CPBL26PI014)\n• Deloitte Australia Data Analytics Simulation (Forage, Cert: erWNErRsYDm7hqfSq)',
        type: 'success'
      });
    } else if (q === 'education' || q.includes('education') || q.includes('college') || q.includes('study') || q.includes('anits') || q.includes('school')) {
      newHistory.push({
        text: '🎓 Academic Foundation:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• B.Tech in Computer Science & Engineering (2024–2028)\n  Anil Neerukonda Institute of Technology & Sciences (ANITS)\n  Focus: DSA, OOP, Operating Systems, DBMS, Frontend Engineering & Applied AI.\n\n• Senior Secondary / Junior College (2022–2024)\n  MPC Stream (Mathematics, Physics, Chemistry) — Strong quantitative and analytical foundation.\n\n• Secondary School Certificate (SSC / 10th Standard, 2022)\n  Completed with Distinction.',
        type: 'response'
      });
    } else if (q === 'leetcode' || q.includes('leetcode') || q.includes('dsa') || q.includes('coding')) {
      newHistory.push({
        text: '🧩 LeetCode & Algorithmic Problem Solving:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• LeetCode Handle: _Giftyy_\n• Profile URL: https://leetcode.com/u/_Giftyy_/\n• Core Focus: Data Structures & Algorithms (Arrays, Two Pointers, Strings, Hash Maps, Linked Lists, Trees, Graph Traversal, Binary Search).\n• Problem Solving: Writing optimized, clean code with optimal time and space complexity.',
        type: 'response'
      });
    } else if (q === 'contact' || q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      newHistory.push({
        text: '📬 Get In Touch With Gifty Sharon:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Email: giftysharon12@gmail.com\n• LinkedIn: https://www.linkedin.com/in/gifty-sharon-b1781b3ab/\n• GitHub: https://github.com/giftysharon125\n• LeetCode: https://leetcode.com/u/_Giftyy_/\n• Open for: Software Engineering Internships, Frontend Roles & Applied AI collaborations!',
        type: 'info'
      });
    } else if (q === 'status' || q.includes('status') || q.includes('currently')) {
      newHistory.push({
        text: '⚙️ Developer Status: building... 🛠️ learning... 📚 solving DSA... 🧩 shipping... 🚀',
        type: 'success'
      });
    } else if (q === 'clear' || q === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (q === 'help' || q.includes('help') || q.includes('commands')) {
      newHistory.push({
        text: '📋 Available Commands / Questions:\n  whoami      - Learn about Gifty Sharon\n  projects    - Summary of featured engineering projects\n  saathi      - In-depth look at Project Saathi\n  scoopiella  - In-depth look at Scoopiella storefront\n  skills      - Full technical stack & languages\n  hackathons  - Awards, SIH selections & hackathon rankings\n  education   - Academic degrees & ANITS journey\n  leetcode    - LeetCode profile & DSA practice\n  contact     - Direct contact info & links\n  clear       - Clear screen\n  easteregg   - Unlock a secret message',
        type: 'system'
      });
    } else if (q === 'easteregg' || q.includes('secret') || q.includes('magic')) {
      newHistory.push({
        text: '✦ Secret Unlocked: "Code is like humor. When you have to explain it, it’s bad. Keep it simple, intentional, and human." ✨',
        type: 'highlight'
      });
    } else {
      newHistory.push({
        text: `Command or question not recognized: "${rawQuery}".`,
        type: 'error'
      });
      newHistory.push({
        text: 'Tip: Click any suggested question button above or type "help" for a list of topics.',
        type: 'info'
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCommand = (e) => {
    e.preventDefault();
    processQuery(inputVal);
  };

  const handleQuestionClick = (cmd) => {
    processQuery(cmd);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="terminal-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-window-buttons">
            <span className="dot red" onClick={onClose} title="Close Terminal"></span>
            <span className="dot yellow" onClick={() => setHistory([])} title="Clear Screen"></span>
            <span className="dot green" title="Maximize"></span>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={14} className="mr-1 inline text-amber-500" />
            <span>gifty@desktop-companion:~$ interactive-cli</span>
          </div>
          <button className="terminal-close-btn" onClick={onClose} aria-label="Close terminal">
            <X size={16} />
          </button>
        </div>

        {/* Suggested Questions Shelf */}
        <div className="terminal-questions-toolbar">
          <div className="questions-toolbar-header">
            <Sparkles size={13} className="text-amber-500 inline mr-1" />
            <span>Click any question to ask instantly:</span>
          </div>
          <div className="questions-chips-scroller">
            {SUGGESTED_QUESTIONS.map((item) => (
              <button
                key={item.cmd}
                type="button"
                className="terminal-question-chip"
                onClick={() => handleQuestionClick(item.cmd)}
                title={`Ask: ${item.label}`}
              >
                <span className="chip-emoji">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="terminal-body">
          {history.map((item, idx) => (
            <div key={idx} className={`terminal-line ${item.type}`}>
              {item.text.split('\n').map((line, lIdx) => (
                <div key={lIdx}>{line}</div>
              ))}
            </div>
          ))}

          <form onSubmit={handleCommand} className="terminal-input-form">
            <span className="prompt">gifty@terminal:~$ </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question or type command (e.g. whoami, projects, skills)..."
              autoFocus
              className="terminal-input"
            />
            <button type="submit" className="terminal-send-btn" title="Run Command">
              <CornerDownLeft size={14} />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
