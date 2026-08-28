import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function CuteComputer({ placement = 'hero' }) {
  const [speechBubble, setSpeechBubble] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const codePhrases = [
    '> hello_world();',
    '> building_saathi_bot...',
    '> parsing_lab_manuals...',
    '> shipping_cicd_pipeline 🚀'
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
    }, 75);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseEnter = () => {
    if (!speechBubble) {
      const greetings = [
        "Oh! You found me! ✨",
        "Ready to explore Gifty's work?",
        "Hi! I'm Gifty's little computer 💻"
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
    setSpeechBubble("Let's build something useful! 🚀");
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { x, y },
        colors: ['#8B5CF6', '#F97316', '#38BDF8', '#10B981']
      });
    } catch (err) {}
  };

  return (
    <div 
      className={`cute-computer-container ${placement}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title="Click me!"
      tabIndex={0}
      role="button"
      aria-label="Gifty's Little Computer Mascot"
    >
      {speechBubble && (
        <div className="speech-bubble-pop bounce-in">
          <span>{speechBubble}</span>
          <div className="bubble-arrow"></div>
        </div>
      )}

      <div className="cute-computer-wrapper">
        <svg viewBox="0 0 200 170" width="100%" height="100%" className="computer-svg">
          <defs>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E2E" />
              <stop offset="100%" stopColor="#11111B" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5F3FF" />
              <stop offset="100%" stopColor="#E9D5FF" />
            </linearGradient>
            <linearGradient id="standGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DDD6FE" />
              <stop offset="100%" stopColor="#C4B5FD" />
            </linearGradient>
            <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#8B5CF6" floodOpacity="0.15"/>
            </filter>

            <clipPath id="terminalClip">
              <rect x="40" y="56" width="120" height="46" rx="4" />
            </clipPath>
          </defs>

          <rect x="25" y="15" width="150" height="110" rx="16" fill="url(#bodyGrad)" stroke="#C4B5FD" strokeWidth="3" filter="url(#softGlow)" />

          <rect x="35" y="25" width="130" height="85" rx="10" fill="url(#screenGrad)" stroke="#313244" strokeWidth="2" />

          <g className="cute-face">
            {isBlinking ? (
              <line x1="55" y1="42" x2="65" y2="42" stroke="#A6ADC8" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <g>
                <circle cx="60" cy="42" r="4.5" fill="#CCD0DA" />
                <circle cx="58.5" cy="40.5" r="1.5" fill="#FFFFFF" />
              </g>
            )}

            {isBlinking ? (
              <line x1="135" y1="42" x2="145" y2="42" stroke="#A6ADC8" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <g>
                <circle cx="140" cy="42" r="4.5" fill="#CCD0DA" />
                <circle cx="138.5" cy="40.5" r="1.5" fill="#FFFFFF" />
              </g>
            )}

            <circle cx="50" cy="46" r="3.5" fill="#F38BA8" opacity="0.6" />
            <circle cx="150" cy="46" r="3.5" fill="#F38BA8" opacity="0.6" />

            <path d="M 95 44 Q 100 49 105 44" fill="none" stroke="#F5E0DC" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          <g className="screen-content">
            <rect x="40" y="56" width="120" height="46" rx="4" fill="#181825" />
            <g clipPath="url(#terminalClip)">
              <text x="44" y="73" fill="#A6E3A1" fontFamily="Fira Code, monospace" fontSize="9" fontWeight="500">
                {typedText}
                <tspan fill="#89B4FA" className="cursor-blink">|</tspan>
              </text>
              <text x="44" y="91" fill="#6C7086" fontFamily="Fira Code, monospace" fontSize="7.5">
                giftysharon125@studio:~$
              </text>
            </g>
          </g>

          <path d="M 85 125 L 115 125 L 120 138 L 80 138 Z" fill="url(#standGrad)" stroke="#C4B5FD" strokeWidth="1.5" />
          
          <rect x="20" y="138" width="160" height="14" rx="6" fill="url(#bodyGrad)" stroke="#C4B5FD" strokeWidth="2" />
          
          <rect x="86" y="141" width="28" height="5" rx="2" fill="#DDD6FE" />

          <circle cx="168" cy="145" r="2" fill="#A6E3A1" className="led-pulse" />
        </svg>
      </div>
    </div>
  );
}
