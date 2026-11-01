import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function CurlyCompanion({ placement = 'hero' }) {
  const [speechBubble, setSpeechBubble] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [typedPhrase, setTypedPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  const developerThoughts = [
    '> npm run dev ✨',
    '> designing_fluid_ui 🎨',
    '> tuning_ai_agents 🤖',
    '> solving_hard_problems 💡'
  ];

  // Typing effect on companion status badge
  useEffect(() => {
    let current = developerThoughts[phraseIndex % developerThoughts.length];
    let charIdx = 0;
    setTypedPhrase('');

    const typing = setInterval(() => {
      if (charIdx <= current.length) {
        setTypedPhrase(current.substring(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setPhraseIndex(prev => prev + 1);
        }, 2400);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [phraseIndex]);

  // Periodic natural blinking
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3600);
    return () => clearInterval(blinkTimer);
  }, []);

  const handleMouseEnter = () => {
    if (!speechBubble) {
      const messages = [
        "Hi! Welcome to my portfolio! 💫",
        "Curly hair & clean code 🌿",
        "Frontend Engineering × Applied AI ✨",
        "Building purposeful software 🚀"
      ];
      setSpeechBubble(messages[Math.floor(Math.random() * messages.length)]);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setSpeechBubble(null);
    }, 1800);
  };

  const handleClick = (e) => {
    setSpeechBubble("Let's build something delightful together! 🎉");
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ['#748560', '#D96B27', '#FDE769', '#4A563A', '#FAF8F0']
      });
    } catch (err) {}
  };

  return (
    <div 
      className={`curly-companion-container ${placement}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title="Click me to say hi!"
      tabIndex={0}
      role="button"
      aria-label="Gifty's Curly Hair Developer Companion"
    >
      {speechBubble && (
        <div className="speech-bubble-pop bounce-in">
          <span>{speechBubble}</span>
          <div className="bubble-arrow"></div>
        </div>
      )}

      <div className="curly-companion-wrapper">
        <svg viewBox="0 0 240 260" width="100%" height="100%" className="curly-companion-svg">
          <defs>
            <linearGradient id="compBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF8F0" />
              <stop offset="100%" stopColor="#E2EAD6" />
            </linearGradient>

            <linearGradient id="compHairBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#352018" />
              <stop offset="100%" stopColor="#1A0F0A" />
            </linearGradient>

            <linearGradient id="compHairLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E3827" />
              <stop offset="100%" stopColor="#382117" />
            </linearGradient>

            <linearGradient id="compSkin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F9CEA9" />
              <stop offset="100%" stopColor="#EAB78D" />
            </linearGradient>

            <linearGradient id="compSweater" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B8D67" />
              <stop offset="100%" stopColor="#576646" />
            </linearGradient>

            <filter id="softGlowComp" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#27331C" floodOpacity="0.22"/>
            </filter>
          </defs>

          {/* Retro Pedestal Shadow */}
          <ellipse cx="120" cy="246" rx="90" ry="10" fill="#3D4B30" opacity="0.18" />

          {/* ================= BACK VOLUMINOUS CURLS ================= */}
          <g fill="url(#compHairBase)">
            {/* Left Curls */}
            <circle cx="68" cy="80" r="28" />
            <circle cx="50" cy="110" r="30" />
            <circle cx="48" cy="144" r="28" />
            <circle cx="60" cy="176" r="26" />
            <circle cx="78" cy="200" r="22" />

            {/* Top Crown Curls */}
            <circle cx="88" cy="56" r="28" />
            <circle cx="120" cy="45" r="30" />
            <circle cx="152" cy="56" r="28" />

            {/* Right Curls */}
            <circle cx="172" cy="80" r="28" />
            <circle cx="190" cy="110" r="30" />
            <circle cx="192" cy="144" r="28" />
            <circle cx="180" cy="176" r="26" />
            <circle cx="162" cy="200" r="22" />
          </g>

          {/* Highlight Texture layer on curls */}
          <g fill="url(#compHairLight)" opacity="0.8">
            <circle cx="74" cy="74" r="20" />
            <circle cx="58" cy="106" r="21" />
            <circle cx="56" cy="140" r="20" />
            <circle cx="120" cy="40" r="22" />
            <circle cx="166" cy="74" r="20" />
            <circle cx="182" cy="106" r="21" />
            <circle cx="184" cy="140" r="20" />
          </g>

          {/* Torso & Sage Green Cardigan / Sweater */}
          <path d="M 64 250 C 64 205 85 180 120 180 C 155 180 176 205 176 250 Z" fill="url(#compSweater)" stroke="#4A563A" strokeWidth="3.5" />
          
          {/* Terracotta Inner Collar */}
          <path d="M 108 180 L 120 204 L 132 180 Z" fill="#D96B27" stroke="#4A563A" strokeWidth="2" />
          <path d="M 98 180 L 120 216 L 112 250 L 95 250 Z" fill="#FAF8F0" />
          <path d="M 142 180 L 120 216 L 128 250 L 145 250 Z" fill="#FAF8F0" />

          {/* Neck */}
          <rect x="110" y="152" width="20" height="34" rx="4" fill="url(#compSkin)" stroke="#4A563A" strokeWidth="3" />

          {/* Face Structure */}
          <ellipse cx="120" cy="116" rx="46" ry="50" fill="url(#compSkin)" stroke="#4A563A" strokeWidth="3.5" />

          {/* Cute Ears with Tiny Gold Hoops */}
          <circle cx="74" cy="118" r="9" fill="url(#compSkin)" stroke="#4A563A" strokeWidth="2.5" />
          <circle cx="166" cy="118" r="9" fill="url(#compSkin)" stroke="#4A563A" strokeWidth="2.5" />
          <circle cx="73" cy="126" r="3.5" fill="none" stroke="#FDE769" strokeWidth="1.8" />
          <circle cx="167" cy="126" r="3.5" fill="none" stroke="#FDE769" strokeWidth="1.8" />

          {/* ================= FRONT CURLS & BANGS ================= */}
          <g fill="url(#compHairBase)">
            {/* Front cheek-framing bouncy curls */}
            <circle cx="78" cy="94" r="16" />
            <circle cx="72" cy="114" r="14" />
            <circle cx="76" cy="132" r="13" />

            <circle cx="162" cy="94" r="16" />
            <circle cx="168" cy="114" r="14" />
            <circle cx="164" cy="132" r="13" />

            {/* Top bouncy fringe curls */}
            <circle cx="92" cy="74" r="16" />
            <circle cx="108" cy="70" r="17" />
            <circle cx="124" cy="69" r="17" />
            <circle cx="144" cy="74" r="16" />

            {/* Cute forehead curls */}
            <circle cx="102" cy="85" r="11" />
            <circle cx="120" cy="84" r="12" />
            <circle cx="138" cy="85" r="11" />
          </g>

          {/* Swirl Ringlet Accent Lines */}
          <g fill="none" stroke="#5E3827" strokeWidth="2" strokeLinecap="round">
            <path d="M 88 70 Q 96 62 102 72" />
            <path d="M 112 65 Q 120 57 126 68" />
            <path d="M 136 65 Q 144 57 148 70" />
            <path d="M 64 92 Q 72 88 76 98" />
            <path d="M 174 92 Q 166 88 162 98" />
          </g>

          {/* Eyebrows */}
          <path d="M 88 100 Q 98 94 107 98" stroke="#22140E" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M 152 100 Q 142 94 133 98" stroke="#22140E" strokeWidth="2.4" strokeLinecap="round" fill="none" />

          {/* Cute Round Tortoiseshell Glasses */}
          <g stroke="#3E2418" strokeWidth="2.8" fill="none">
            <circle cx="100" cy="113" r="14.5" fill="#FFFFFF" fillOpacity="0.32" />
            <circle cx="140" cy="113" r="14.5" fill="#FFFFFF" fillOpacity="0.32" />
            <path d="M 114.5 112 Q 120 109 125.5 112" />
            <path d="M 85.5 112 L 76 109" />
            <path d="M 154.5 112 L 164 109" />
          </g>

          {/* Eyes (With Natural Blinking) */}
          {isBlinking ? (
            <g stroke="#180F0B" strokeWidth="2.8" strokeLinecap="round">
              <path d="M 94 114 Q 100 119 106 114" />
              <path d="M 134 114 Q 140 119 146 114" />
            </g>
          ) : (
            <g fill="#180F0B">
              <ellipse cx="100" cy="113" rx="4.2" ry="5.2" />
              <ellipse cx="140" cy="113" rx="4.2" ry="5.2" />
              <circle cx="98.5" cy="110.5" r="1.6" fill="#FFFFFF" />
              <circle cx="138.5" cy="110.5" r="1.6" fill="#FFFFFF" />
            </g>
          )}

          {/* Rosy Cheeks in Terracotta */}
          <ellipse cx="87" cy="125" rx="6.5" ry="4" fill="#D96B27" opacity="0.45" />
          <ellipse cx="153" cy="125" rx="6.5" ry="4" fill="#D96B27" opacity="0.45" />

          {/* Nose */}
          <path d="M 120 115 Q 122 121 118 122" stroke="#C98B60" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Happy Smile */}
          <path d="M 112 131 Q 120 139 128 131" stroke="#4A563A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* ================= COMPACT RETRO LAPTOP IN HANDS ================= */}
          <g transform="translate(68, 206)">
            {/* Screen lid angled forward */}
            <rect x="12" y="0" width="80" height="34" rx="4" fill="#242B1F" stroke="#4A563A" strokeWidth="2.2" />
            {/* Terminal text inside laptop */}
            <text x="18" y="14" fill="#A6E3A1" fontFamily="'Fira Code', monospace" fontSize="6.5" fontWeight="bold">
              {typedPhrase}
              <tspan fill="#FDE769">_</tspan>
            </text>
            <text x="18" y="26" fill="#748560" fontFamily="'Fira Code', monospace" fontSize="5.5">
              gifty@dev:~$
            </text>

            {/* Laptop Base Keyboard */}
            <path d="M 4 34 L 100 34 L 94 45 L 10 45 Z" fill="#FAF8F0" stroke="#4A563A" strokeWidth="2" />
            <rect x="42" y="37" width="20" height="4" rx="1.5" fill="#748560" />

            {/* Cute Character Hands on keyboard */}
            <ellipse cx="26" cy="38" rx="7" ry="5" fill="url(#compSkin)" stroke="#4A563A" strokeWidth="1.8" />
            <ellipse cx="78" cy="38" rx="7" ry="5" fill="url(#compSkin)" stroke="#4A563A" strokeWidth="1.8" />
          </g>

          {/* Power / Status Green LED Indicator */}
          <circle cx="166" cy="242" r="2.8" fill="#10B981" className="led-pulse" />
        </svg>
      </div>
    </div>
  );
}
