import React, { useState, useEffect } from 'react';

export default function JourneyRobotMascot({ currentStep = 0, currentTitle = '', isLeft = false }) {
  const [isWaving, setIsWaving] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    setIsWaving(true);
    const waveTimer = setTimeout(() => setIsWaving(false), 900);
    return () => clearTimeout(waveTimer);
  }, [currentStep]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3200);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={`journey-robot-mascot-container ${isLeft ? 'on-left' : 'on-right'}`}>
      <div className="journey-robot-bubble">
        <span className="bubble-step-badge">Milestone #{currentStep + 1}</span>
        <span className="bubble-text">{currentTitle}</span>
        <div className="bubble-pointer"></div>
      </div>

      <div className={`journey-robot-figure ${isWaving ? 'waving-anim' : ''}`}>
        <svg viewBox="0 0 100 110" width="70" height="77" className="journey-robot-svg">
          <defs>
            <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF8F0" />
              <stop offset="100%" stopColor="#E2E8D8" />
            </linearGradient>

            <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8A9D76" />
              <stop offset="100%" stopColor="#677855" />
            </linearGradient>

            <linearGradient id="robotThruster" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D96B27" />
              <stop offset="100%" stopColor="#FDE769" />
            </linearGradient>

            <filter id="robotShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#27331C" floodOpacity="0.25"/>
            </filter>
          </defs>

          {/* Jetpack Thruster Flame */}
          <path d="M 44 88 Q 50 106 56 88 Z" fill="url(#robotThruster)" className="thruster-flame" />
          <ellipse cx="50" cy="88" rx="6" ry="2" fill="#D96B27" />

          {/* Body Chassis */}
          <g filter="url(#robotShadow)">
            <rect x="30" y="48" width="40" height="36" rx="8" fill="url(#robotBodyGrad)" stroke="#4A563A" strokeWidth="2.5" />
            
            {/* Chest Dial / Screen */}
            <rect x="38" y="55" width="24" height="14" rx="4" fill="#1C2317" stroke="#4A563A" strokeWidth="1.5" />
            <circle cx="44" cy="62" r="2" fill="#A6E3A1" className="led-pulse" />
            <line x1="50" y1="59" x2="58" y2="59" stroke="#748560" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="50" y1="64" x2="56" y2="64" stroke="#D96B27" strokeWidth="1.5" strokeLinecap="round" />

            {/* Left Arm */}
            <path d="M 30 56 Q 20 62 24 72" fill="none" stroke="#4A563A" strokeWidth="3" strokeLinecap="round" />
            <circle cx="24" cy="72" r="3.5" fill="#FAF8F0" stroke="#4A563A" strokeWidth="1.5" />

            {/* Right Arm (Waving) */}
            <path d={isWaving ? "M 70 56 Q 80 44 84 36" : "M 70 56 Q 80 62 76 72"} fill="none" stroke="#4A563A" strokeWidth="3" strokeLinecap="round" />
            <circle cx={isWaving ? "84" : "76"} cy={isWaving ? "36" : "72"} r="3.5" fill="#FAF8F0" stroke="#4A563A" strokeWidth="1.5" />

            {/* Neck Joint */}
            <rect x="46" y="42" width="8" height="6" fill="#748560" stroke="#4A563A" strokeWidth="1.5" />

            {/* Head Dome in Sage Green */}
            <rect x="22" y="14" width="56" height="30" rx="9" fill="url(#robotHeadGrad)" stroke="#4A563A" strokeWidth="2.5" />
            
            {/* Screen Visor Face */}
            <rect x="28" y="20" width="44" height="18" rx="5" fill="#161C12" stroke="#3D4B33" strokeWidth="1.2" />

            {/* Digital Eyes with Blinking */}
            {isBlinking ? (
              <g stroke="#A6E3A1" strokeWidth="2" strokeLinecap="round">
                <line x1="36" y1="29" x2="44" y2="29" />
                <line x1="56" y1="29" x2="64" y2="29" />
              </g>
            ) : (
              <g fill="#A6E3A1">
                <circle cx="40" cy="29" r="3.5" />
                <circle cx="60" cy="29" r="3.5" />
                <circle cx="39" cy="28" r="1.2" fill="#FFFFFF" />
                <circle cx="59" cy="28" r="1.2" fill="#FFFFFF" />
              </g>
            )}

            {/* Antenna & Glowing Signal Bulb */}
            <line x1="50" y1="14" x2="50" y2="4" stroke="#4A563A" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="4" r="3.5" fill="#D96B27" stroke="#4A563A" strokeWidth="1.2" className="antenna-glow" />

            {/* Ear Bolts / Screws */}
            <rect x="18" y="24" width="4" height="10" rx="1.5" fill="#D96B27" stroke="#4A563A" strokeWidth="1" />
            <rect x="78" y="24" width="4" height="10" rx="1.5" fill="#D96B27" stroke="#4A563A" strokeWidth="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}
