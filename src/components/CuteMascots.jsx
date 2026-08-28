import React, { useState } from 'react';

// 1. Coffee Cup Mascot with Rising Steam
export function CoffeeMascot({ size = 44, tooltip = "Fueling code since line 1 ☕" }) {
  return (
    <div className="mascot-wrapper coffee-mascot" title={tooltip}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <g className="steam-group">
          <path d="M 22 20 Q 20 14 24 8" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" fill="none" className="steam-line s1" />
          <path d="M 32 22 Q 34 16 30 10" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" fill="none" className="steam-line s2" />
          <path d="M 42 20 Q 40 14 44 8" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" fill="none" className="steam-line s3" />
        </g>
        
        <rect x="16" y="24" width="32" height="30" rx="6" fill="#FBF9F5" stroke="#7C3AED" strokeWidth="3" />
        <path d="M 48 30 C 56 30 56 44 48 44" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
        
        <circle cx="26" cy="38" r="2" fill="#334155" />
        <circle cx="38" cy="38" r="2" fill="#334155" />
        <circle cx="23" cy="41" r="2" fill="#F472B6" opacity="0.6" />
        <circle cx="41" cy="41" r="2" fill="#F472B6" opacity="0.6" />
        <path d="M 30 42 Q 32 45 34 42" stroke="#334155" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 2. Database Mascot (Sleeping cylinder that wakes up on hover)
export function DatabaseMascot({ size = 44 }) {
  const [isAwake, setIsAwake] = useState(false);

  return (
    <div 
      className="mascot-wrapper database-mascot"
      onMouseEnter={() => setIsAwake(true)}
      onMouseLeave={() => setIsAwake(false)}
      title={isAwake ? "Database awake & indexing!" : "Database sleeping zZz..."}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        {!isAwake && (
          <text x="44" y="16" fill="#A78BFA" fontSize="12" fontWeight="bold" className="zzz-float">
            zZz
          </text>
        )}

        <ellipse cx="32" cy="18" rx="20" ry="8" fill="#EDE9FE" stroke="#6D28D9" strokeWidth="2.5" />
        <path d="M 12 18 V 32 C 12 37 52 37 52 32 V 18" fill="#F5F3FF" stroke="#6D28D9" strokeWidth="2.5" />
        <path d="M 12 32 V 46 C 12 51 52 51 52 46 V 32" fill="#F5F3FF" stroke="#6D28D9" strokeWidth="2.5" />
        
        {isAwake ? (
          <g>
            <circle cx="26" cy="30" r="2.5" fill="#1E293B" />
            <circle cx="38" cy="30" r="2.5" fill="#1E293B" />
            <path d="M 29 34 Q 32 37 35 34" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        ) : (
          <g>
            <path d="M 23 30 Q 26 28 29 30" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 35 30 Q 38 28 41 30" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="32" cy="35" r="1.5" fill="#64748B" />
          </g>
        )}
      </svg>
    </div>
  );
}

// 3. Squishable Bug Mascot (Click to squash & fix bug!)
export function BugMascot() {
  const [squashed, setSquashed] = useState(false);

  const handleSquash = () => {
    setSquashed(true);
    setTimeout(() => setSquashed(false), 3000);
  };

  return (
    <div 
      className="mascot-wrapper bug-mascot" 
      onClick={handleSquash} 
      title={squashed ? "Bug squashed! ✓" : "Click to squash this bug!"}
      style={{ cursor: 'pointer', display: 'inline-block' }}
    >
      {squashed ? (
        <span className="bug-fixed-badge bounce-in">
          Bug squashed! ✓
        </span>
      ) : (
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="bug-wiggle">
          <path d="M 26 20 Q 20 12 14 14" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 38 20 Q 44 12 50 14" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          
          <path d="M 12 28 L 22 32 M 52 28 L 42 32" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 10 40 L 22 40 M 54 40 L 42 40" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 14 52 L 24 46 M 50 52 L 40 46" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          
          <circle cx="32" cy="24" r="9" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2.5" />
          <ellipse cx="32" cy="42" rx="13" ry="15" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2.5" />
          
          <circle cx="28" cy="23" r="2" fill="#991B1B" />
          <circle cx="36" cy="23" r="2" fill="#991B1B" />
        </svg>
      )}
    </div>
  );
}

// 4. PDF / Document Mascot (With reading glasses)
export function PdfDocMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper pdf-mascot" title="Lab Manual & PDF Parsing Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect x="16" y="10" width="32" height="44" rx="4" fill="#F8FAFC" stroke="#F97316" strokeWidth="2.5" />
        <path d="M 36 10 L 48 22 H 36 V 10 Z" fill="#FFEDD5" stroke="#F97316" strokeWidth="2" />
        
        <circle cx="26" cy="30" r="4.5" fill="none" stroke="#C2410C" strokeWidth="2" />
        <circle cx="38" cy="30" r="4.5" fill="none" stroke="#C2410C" strokeWidth="2" />
        <line x1="30.5" y1="30" x2="33.5" y2="30" stroke="#C2410C" strokeWidth="2" />
        
        <line x1="22" y1="40" x2="42" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="46" x2="36" y2="46" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 5. Server Node Mascot
export function ServerNodeMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper server-mascot" title="Campus Network Server Node">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect x="12" y="14" width="40" height="16" rx="4" fill="#F1F5F9" stroke="#0284C7" strokeWidth="2.5" />
        <rect x="12" y="34" width="40" height="16" rx="4" fill="#F1F5F9" stroke="#0284C7" strokeWidth="2.5" />
        
        <circle cx="20" cy="22" r="2.5" fill="#10B981" className="led-pulse" />
        <circle cx="28" cy="22" r="2.5" fill="#0EA5E9" />
        <circle cx="20" cy="42" r="2.5" fill="#10B981" className="led-pulse" />
        <circle cx="28" cy="42" r="2.5" fill="#F59E0B" />
        
        <rect x="38" y="20" width="8" height="4" rx="1" fill="#94A3B8" />
        <rect x="38" y="40" width="8" height="4" rx="1" fill="#94A3B8" />
      </svg>
    </div>
  );
}

// 6. Cute Robot AI Mascot (Blinking antenna & happy eyes)
export function RobotMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper robot-mascot" title="AI Assistant Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="6" x2="32" y2="16" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="6" r="3" fill="#EC4899" className="led-pulse" />
        
        <rect x="16" y="16" width="32" height="26" rx="6" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2.5" />
        <rect x="20" y="20" width="24" height="18" rx="4" fill="#1E1E2E" />
        
        <circle cx="26" cy="28" r="2.5" fill="#A6E3A1" />
        <circle cx="38" cy="28" r="2.5" fill="#A6E3A1" />
        <path d="M 29 33 Q 32 36 35 33" stroke="#A6E3A1" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        
        <rect x="22" y="44" width="20" height="12" rx="3" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
        <path d="M 12 28 Q 16 32 16 38" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 52 28 Q 48 32 48 38" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// 7. Happy Cloud Mascot
export function CloudMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper cloud-mascot" title="Cloud & API Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path d="M 16 42 H 48 C 54 42 58 37 58 31 C 58 25 53 21 47 21 C 45 15 39 10 32 10 C 24 10 18 16 17 23 C 11 23 6 28 6 34 C 6 40 10 42 16 42 Z" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5" />
        
        <circle cx="24" cy="30" r="2" fill="#0369A1" />
        <circle cx="40" cy="30" r="2" fill="#0369A1" />
        <circle cx="20" cy="33" r="2" fill="#F472B6" opacity="0.6" />
        <circle cx="44" cy="33" r="2" fill="#F472B6" opacity="0.6" />
        <path d="M 29 34 Q 32 37 35 34" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// 8. Phone / WhatsApp Mascot (For Project Saathi)
export function PhoneWhatsappMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper phone-mascot" title="Project Saathi WhatsApp Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect x="18" y="10" width="28" height="46" rx="6" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
        <rect x="22" y="16" width="20" height="32" rx="3" fill="#15803D" />
        
        <circle cx="28" cy="26" r="2" fill="#FFFFFF" />
        <circle cx="36" cy="26" r="2" fill="#FFFFFF" />
        <path d="M 29 32 Q 32 35 35 32" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        
        <path d="M 32 36 L 37 38 V 42 C 37 45 32 47 32 47 C 32 47 27 45 27 42 V 38 L 32 36 Z" fill="#DCFCE7" stroke="#15803D" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// 9. Docker Container Mascot (For DevOps CI/CD)
export function DockerContainerMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper container-mascot" title="DevOps Container Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect x="14" y="18" width="36" height="32" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
        <rect x="12" y="14" width="40" height="6" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
        
        <circle cx="26" cy="30" r="2.5" fill="#78350F" />
        <circle cx="38" cy="30" r="2.5" fill="#78350F" />
        <circle cx="22" cy="33" r="2" fill="#F472B6" opacity="0.6" />
        <circle cx="42" cy="33" r="2" fill="#F472B6" opacity="0.6" />
        <path d="M 29 36 Q 32 39 35 36" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
        
        <path d="M 22 14 C 22 8 42 8 42 14 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      </svg>
    </div>
  );
}

// 10. Cute Terminal Window Mascot
export function TerminalMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper terminal-mascot" title="Terminal CLI Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect x="12" y="14" width="40" height="36" rx="6" fill="#1E1E2E" stroke="#7C3AED" strokeWidth="2.5" />
        <rect x="12" y="14" width="40" height="10" rx="4" fill="#181825" />
        <circle cx="18" cy="19" r="1.5" fill="#F38BA8" />
        <circle cx="23" cy="19" r="1.5" fill="#F9E2AF" />
        <circle cx="28" cy="19" r="1.5" fill="#A6E3A1" />
        
        <text x="18" y="36" fill="#A6E3A1" fontFamily="Fira Code, monospace" fontSize="11" fontWeight="bold">
          &gt;_
        </text>
        
        <circle cx="38" cy="33" r="2" fill="#CDD6F4" />
        <circle cx="44" cy="33" r="2" fill="#CDD6F4" />
        <path d="M 39 38 Q 41 40 43 38" stroke="#CDD6F4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// 11. Code Brackets Mascot
export function CodeBracketsMascot({ size = 44 }) {
  return (
    <div className="mascot-wrapper brackets-mascot" title="Code Brackets Mascot">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <text x="10" y="42" fill="#7C3AED" fontFamily="Fira Code, monospace" fontSize="26" fontWeight="bold">
          {'{'}
        </text>
        <text x="38" y="42" fill="#7C3AED" fontFamily="Fira Code, monospace" fontSize="26" fontWeight="bold">
          {'}'}
        </text>
        
        <circle cx="28" cy="28" r="2" fill="#F97316" />
        <circle cx="36" cy="28" r="2" fill="#F97316" />
        <path d="M 30 33 Q 32 35 34 33" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
