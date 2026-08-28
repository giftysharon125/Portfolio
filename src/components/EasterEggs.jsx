import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, X, Trophy } from 'lucide-react';

export default function EasterEggs() {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  useEffect(() => {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let sequenceIndex = 0;

    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = konamiSequence[sequenceIndex].toLowerCase();

      if (key === expectedKey) {
        sequenceIndex++;
        if (sequenceIndex === konamiSequence.length) {
          setKonamiUnlocked(true);
          sequenceIndex = 0;
          try {
            confetti({
              particleCount: 120,
              spread: 100,
              origin: { y: 0.6 }
            });
          } catch (err) {}
        }
      } else {
        sequenceIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!konamiUnlocked) return null;

  return (
    <div className="modal-backdrop" onClick={() => setKonamiUnlocked(false)}>
      <div className="konami-modal-card bounce-in" onClick={(e) => e.stopPropagation()}>
        <div className="konami-header">
          <Trophy size={36} className="text-amber-500" />
          <button className="modal-close-btn" onClick={() => setKonamiUnlocked(false)}>
            <X size={18} />
          </button>
        </div>
        <h2>Konami Code Unlocked! 🎉</h2>
        <p>
          You found the hidden developer Easter egg! ↑ ↑ ↓ ↓ ← → ← → B A
        </p>
        <div className="konami-badge-box">
          <Sparkles size={20} className="text-purple-600 mr-2 inline" />
          <span>Master Debugger & Explorer Badge</span>
        </div>
        <p className="konami-quote">
          “You clearly pay attention to detail — the exact trait needed for great software engineering.”
        </p>
        <button className="primary-cta-btn w-full mt-4" onClick={() => setKonamiUnlocked(false)}>
          Back to Portfolio 🚀
        </button>
      </div>
    </div>
  );
}
