import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: '💻 Gifty Sharon CLI v1.0 — Ready.', type: 'highlight' },
    { text: 'Click a question below or type your query.', type: 'system' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const SUGGESTED_QUESTIONS = [
    { label: 'About Me', cmd: 'whoami', icon: '👩‍💻' },
    { label: 'Skills', cmd: 'skills', icon: '⚡' },
    { label: 'Top Projects', cmd: 'projects', icon: '🚀' },
    { label: 'Hackathons', cmd: 'hackathons', icon: '🏆' },
    { label: 'Contact', cmd: 'contact', icon: '📬' }
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

    if (q === 'whoami' || q.includes('who') || q.includes('about')) {
      newHistory.push({
        text: '👩‍💻 Gifty Sharon — Frontend & AI Developer studying CSE at ANITS.',
        type: 'highlight'
      });
      newHistory.push({
        text: 'Building responsive React interfaces, intelligent AI agent workflows, and human-friendly software.',
        type: 'response'
      });
    } else if (q === 'projects' || q.includes('project') || q.includes('work')) {
      newHistory.push({
        text: '🚀 Top Projects:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Project Saathi — WhatsApp emergency safety system (Ongoing)\n• Campus Infra Agent — National Hackathon Rank 7 AI agent\n• BlueSprout — SIH 2025 AI rainwater harvesting platform\n• SmartBelt — SIH 2026 IoT wearable safety system\n• Scoopiella — Responsive artisanal ice cream storefront',
        type: 'response'
      });
    } else if (q === 'skills' || q.includes('skill') || q.includes('stack')) {
      newHistory.push({
        text: '⚡ Core Tech Stack:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind\n• Backend & AI: Node.js, Express, FastAPI, LangChain, FAISS, Gemini/OpenAI\n• Tools & Cloud: Docker, Git, GitHub Actions, AWS EC2, Linux',
        type: 'response'
      });
    } else if (q === 'hackathons' || q.includes('hackathon') || q.includes('award') || q.includes('sih')) {
      newHistory.push({
        text: '🏆 Key Achievements:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• National Hackathon Rank 7 Finalist (Top 12 in India)\n• SIH 2026 College Top Performer — SmartBelt\n• SIH 2025 Internal Round Qualified — BlueSprout\n• Applied AI Residency Internship (Capabl) & Deloitte Analytics Sim',
        type: 'success'
      });
    } else if (q === 'contact' || q.includes('contact') || q.includes('email') || q.includes('hire')) {
      newHistory.push({
        text: '📬 Contact Info:',
        type: 'highlight'
      });
      newHistory.push({
        text: '• Email: giftysharon12@gmail.com\n• LinkedIn: in/gifty-sharon-b1781b3ab\n• GitHub: github.com/giftysharon125\n• LeetCode: leetcode.com/u/_Giftyy_',
        type: 'info'
      });
    } else if (q === 'saathi') {
      newHistory.push({
        text: '🛡️ Project Saathi: Ongoing emergency & guardian alert system via WhatsApp webhooks with safewords & automated safety check-ins.',
        type: 'response'
      });
    } else if (q === 'clear' || q === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (q === 'help') {
      newHistory.push({
        text: 'Commands: whoami, projects, skills, hackathons, contact, clear',
        type: 'system'
      });
    } else {
      newHistory.push({
        text: `Command not recognized: "${rawQuery}". Click a suggested question above or type "help".`,
        type: 'error'
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCommand = (e) => {
    e.preventDefault();
    processQuery(inputVal);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="terminal-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-window-buttons">
            <span className="dot red" onClick={onClose} title="Close"></span>
            <span className="dot yellow" onClick={() => setHistory([])} title="Clear Screen"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={14} className="mr-1 inline text-amber-500" />
            <span>gifty@terminal:~$</span>
          </div>
          <button className="terminal-close-btn" onClick={onClose} aria-label="Close terminal">
            <X size={16} />
          </button>
        </div>

        {/* Concise Questions Toolbar */}
        <div className="terminal-questions-toolbar">
          <div className="questions-chips-scroller">
            {SUGGESTED_QUESTIONS.map((item) => (
              <button
                key={item.cmd}
                type="button"
                className="terminal-question-chip"
                onClick={() => processQuery(item.cmd)}
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
            <span className="prompt">$ </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question (e.g. whoami, skills, projects)..."
              autoFocus
              className="terminal-input"
            />
            <button type="submit" className="terminal-send-btn" title="Run">
              <CornerDownLeft size={14} />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
