import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function CuteComputer({ placement = 'hero', onOpenTerminal }) {
  const [speechBubble, setSpeechBubble] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const codePhrases = [
    '> whoami',
    '> python -m saathi',
    '> run_infra_agent()',
    '> git commit -m "feat" 🚀',
    '> ask --questions'
  ];

  useEffect(() => {
    let currentPhrase = codePhrases[textIndex % codePhrases.length];
    let charIndex = 0;
    setTypedText('');

    const typingInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextIndex(prev => prev + 1);
        }, 2200);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3600);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseEnter = () => {
    if (!speechBubble) {
      const greetings = [
        "Click me to open Command Terminal! >_",
        "Ask me anything about Gifty! 💻",
        "Click to run CLI commands & questions!",
        "Psst! Click to ask whoami & projects ✨"
      ];
      setSpeechBubble(greetings[Math.floor(Math.random() * greetings.length)]);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setSpeechBubble(null);
    }, 2000);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setSpeechBubble("Opening Command Terminal... 💻");
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ['#748560', '#D96B27', '#FDE769', '#5A694A']
      });
    } catch (err) {}

    if (onOpenTerminal) {
      setTimeout(() => {
        onOpenTerminal();
      }, 250);
    }
  };

  return (
    <div 
      className={`cute-computer-container ${placement}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title="Click me to open interactive Command Terminal!"
      tabIndex={0}
      role="button"
      aria-label="Gifty's CS Computer Mascot Companion — Click to open Command Terminal"
    >
      {speechBubble && (
        <div className="speech-bubble-pop bounce-in">
          <span>{speechBubble}</span>
          <div className="bubble-arrow"></div>
        </div>
      )}

      <div className="cute-computer-wrapper">
        <svg viewBox="0 0 200 185" width="100%" height="100%" className="computer-svg">
          <defs>
            {/* Screen Inner Dark Gradient */}
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E2619" />
              <stop offset="100%" stopColor="#12170F" />
            </linearGradient>

            {/* Sage Green & Cream Chassis Gradient matching the Retro Theme */}
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF8F0" />
              <stop offset="100%" stopColor="#E2E8D8" />
            </linearGradient>

            {/* Stand Gradient */}
            <linearGradient id="standGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#95A87E" />
              <stop offset="100%" stopColor="#748560" />
            </linearGradient>

            {/* Keyboard Key Gradient */}
            <linearGradient id="keyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EDEAE0" />
            </linearGradient>

            <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#4A563A" floodOpacity="0.25"/>
            </filter>

            <clipPath id="terminalClip">
              <rect x="40" y="56" width="120" height="46" rx="4" />
            </clipPath>
          </defs>

          {/* Computer Outer Monitor Body in Warm Retro Cream/Sage */}
          <rect x="25" y="15" width="150" height="110" rx="16" fill="url(#bodyGrad)" stroke="#4A563A" strokeWidth="3" filter="url(#softGlow)" />

          {/* Inner Screen Bezel */}
          <rect x="35" y="25" width="130" height="85" rx="10" fill="url(#screenGrad)" stroke="#4A563A" strokeWidth="2" />

          {/* Cute Face (Eyes and Smile) */}
          <g className="cute-face">
            {isBlinking ? (
              <line x1="55" y1="42" x2="65" y2="42" stroke="#B3C0A9" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <g>
                <circle cx="60" cy="42" r="4.5" fill="#FAF8F0" />
                <circle cx="58.5" cy="40.5" r="1.5" fill="#4A563A" />
                <circle cx="61" cy="40" r="1" fill="#FFFFFF" />
              </g>
            )}

            {isBlinking ? (
              <line x1="135" y1="42" x2="145" y2="42" stroke="#B3C0A9" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <g>
                <circle cx="140" cy="42" r="4.5" fill="#FAF8F0" />
                <circle cx="138.5" cy="40.5" r="1.5" fill="#4A563A" />
                <circle cx="141" cy="40" r="1" fill="#FFFFFF" />
              </g>
            )}

            {/* Rosy Cheeks in Terracotta */}
            <circle cx="50" cy="46" r="3.5" fill="#D96B27" opacity="0.65" />
            <circle cx="150" cy="46" r="3.5" fill="#D96B27" opacity="0.65" />

            {/* Little Smile */}
            <path d="M 95 44 Q 100 49 105 44" fill="none" stroke="#FAF8F0" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Terminal Display */}
          <g className="screen-content">
            <rect x="40" y="56" width="120" height="46" rx="4" fill="#141811" stroke="#37412E" strokeWidth="1" />
            <g clipPath="url(#terminalClip)">
              <text x="44" y="73" fill="#A6E3A1" fontFamily="Fira Code, monospace" fontSize="9" fontWeight="600">
                {typedText}
                <tspan fill="#FDE769" className="cursor-blink">|</tspan>
              </text>
              <text x="44" y="91" fill="#8E9C83" fontFamily="Fira Code, monospace" fontSize="7.5">
                gifty@anits:~$ [click to ask]
              </text>
            </g>
          </g>

          {/* Monitor Neck / Stand in Sage Green */}
          <path d="M 85 125 L 115 125 L 120 138 L 80 138 Z" fill="url(#standGrad)" stroke="#4A563A" strokeWidth="2" />
          
          {/* Base Stand with Retro Shadow */}
          <rect x="20" y="138" width="160" height="14" rx="6" fill="url(#bodyGrad)" stroke="#4A563A" strokeWidth="2.5" />
          
          {/* Floppy Slot / 3.5" Drive */}
          <rect x="80" y="141" width="40" height="5" rx="2" fill="#748560" stroke="#4A563A" strokeWidth="1" />
          {/* Floppy Disk Peaking Out */}
          <rect x="92" y="139" width="16" height="4" rx="1" fill="#D96B27" />

          {/* Power LED Indicator */}
          <circle cx="168" cy="145" r="2.5" fill="#10B981" className="led-pulse" />

          {/* Retro Mechanical Keyboard in Front */}
          <g className="retro-keyboard" transform="translate(25, 154)">
            <rect x="0" y="0" width="150" height="24" rx="4" fill="#FAF8F0" stroke="#4A563A" strokeWidth="2" />
            {/* Keycap Rows */}
            <rect x="5" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="20" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="35" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="50" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="65" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="80" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="95" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="110" y="4" width="12" height="6" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="125" y="4" width="20" height="6" rx="1.5" fill="#D96B27" stroke="#4A563A" strokeWidth="0.8" />

            {/* Bottom Row with Spacebar */}
            <rect x="5" y="13" width="18" height="7" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="26" y="13" width="14" height="7" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="43" y="13" width="60" height="7" rx="2" fill="#748560" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="106" y="13" width="18" height="7" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
            <rect x="127" y="13" width="18" height="7" rx="1.5" fill="url(#keyGrad)" stroke="#4A563A" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}
