import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: 'Gifty Sharon CLI [Version 1.0.0]', type: 'system' },
    { text: 'Type "help" or "whoami" to start exploring.', type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${inputVal}`, type: 'user' }];

    switch (cmd) {
      case 'whoami':
        newHistory.push({
          text: 'Gifty Sharon — Frontend Engineer & AI Developer.',
          type: 'response'
        });
        newHistory.push({
          text: 'Focus: Crafting delightful, interactive web applications powered by intelligent AI models.',
          type: 'response'
        });
        break;

      case 'status':
        newHistory.push({
          text: 'Current Status: building... 🛠️ learning... 📚 debugging... 🐛 shipping... 🚀',
          type: 'success'
        });
        break;

      case 'projects':
        newHistory.push({
          text: 'Featured Projects:\n1. Project Saathi (Emergency Safety WhatsApp Bot)\n2. Lab Manual Conversational AI Assistant\n3. DevOps CI/CD Automation Pipeline',
          type: 'response'
        });
        break;

      case 'skills':
        newHistory.push({
          text: 'Languages: C, C++, Python, Java, JavaScript, HTML/CSS\nBackend: Node.js, Express.js, FastAPI\nAI/ML: LangChain, FAISS, ChromaDB, Gemini/OpenAI\nDevOps: Docker, GitHub Actions, Jenkins, AWS EC2, Linux',
          type: 'response'
        });
        break;

      case 'contact':
        newHistory.push({
          text: 'Email: giftysharon12@gmail.com\nLinkedIn: linkedin.com/in/gifty-sharon-b1781b3ab\nGitHub: github.com/giftysharon125',
          type: 'info'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        newHistory.push({
          text: 'Available Commands:\n  whoami     - About Gifty Sharon\n  status     - Current developer state\n  projects   - Summary of software projects\n  skills     - Technical skill stack\n  contact    - How to connect\n  clear      - Clear terminal history\n  easteregg  - Unlock secret message',
          type: 'system'
        });
        break;

      case 'easteregg':
      case 'sudo':
        newHistory.push({
          text: '✦ Secret Unlocked: "Good software is like a magic trick — simple to use, complex to craft." ✨',
          type: 'highlight'
        });
        break;

      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of available commands.`,
          type: 'error'
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="terminal-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-window-buttons">
            <span className="dot red" onClick={onClose}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={14} className="mr-1 inline" />
            <span>giftysharon125@developer-universe:~</span>
          </div>
          <button className="terminal-close-btn" onClick={onClose} aria-label="Close terminal">
            <X size={16} />
          </button>
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
              placeholder="Type command (e.g. whoami, status, help)..."
              autoFocus
              className="terminal-input"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
