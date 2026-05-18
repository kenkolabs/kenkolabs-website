'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Poop {
  id: number;
  x: number;
}

// Dark lilac grey with blue puppy eyes
const C = {
  coat:    '#5a5d72', // dark lilac grey main coat
  shadow:  '#42455a', // deeper shadows / underside
  deep:    '#303348', // darkest areas
  earBack: '#4a4d62', // back of ear
  earInner:'#b89ec8', // pinkish-lavender inner ear
  nose:    '#18161f', // near-black purple-grey nose
  nostril: '#0d0b14',
  iris:    '#4a6e9a', // slate-blue puppy eyes
  pupil:   '#0a0f18',
  muzzle:  '#4e5168', // muzzle patch
  mouth:   '#3e4258',
  wrinkle: '#4a4d65',
};

function DogSVG({ isPooping, isWalking }: { isPooping: boolean; isWalking: boolean }) {
  return (
    <svg
      viewBox="0 0 110 100"
      width="110"
      height="100"
      style={{
        transform: isPooping ? 'scaleY(0.88) translateY(6px)' : 'scaleY(1) translateY(0)',
        transition: 'transform 0.2s ease',
        filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))',
      }}
    >
      {/* Ground shadow */}
      <ellipse cx="55" cy="96" rx="38" ry="5" fill="rgba(0,0,0,0.3)" />

      {/* Body */}
      <rect x="18" y="42" width="62" height="42" rx="18" fill={C.coat} />
      {/* Body underside shading */}
      <rect x="22" y="68" width="54" height="16" rx="10" fill={C.shadow} opacity="0.5" />

      {/* Stubby tail */}
      <ellipse cx="83" cy="48" rx="10" ry="7" fill={C.shadow} transform="rotate(-15 83 48)" />
      <ellipse cx="89" cy="43" rx="6" ry="5" fill={C.coat} transform="rotate(-25 89 43)" />


      {/* Neck */}
      <rect x="24" y="28" width="32" height="22" rx="12" fill={C.coat} />
      <rect x="28" y="38" width="24" height="12" rx="6" fill={C.shadow} opacity="0.4" />

      {/* Head */}
      <rect x="6" y="6" width="58" height="46" rx="18" fill={C.coat} />

      {/* Left bat ear — outer */}
      <polygon points="8,22 -5,0 26,12" fill={C.earBack} />
      {/* Left bat ear — inner */}
      <polygon points="10,22 1,5 22,14" fill={C.earInner} opacity="0.85" />

      {/* Right bat ear — outer */}
      <polygon points="52,20 65,0 58,16" fill={C.earBack} />
      {/* Right bat ear — inner */}
      <polygon points="52,20 61,4 57,16" fill={C.earInner} opacity="0.85" />

      {/* Eyes — whites */}
      <circle cx="22" cy="24" r="7" fill="white" />
      <circle cx="42" cy="24" r="7" fill="white" />
      {/* Irises — slate blue puppy eyes */}
      <circle cx="23" cy="25" r="5" fill={C.iris} />
      <circle cx="43" cy="25" r="5" fill={C.iris} />
      {/* Pupils */}
      <circle cx="24" cy="26" r="2.5" fill={C.pupil} />
      <circle cx="44" cy="26" r="2.5" fill={C.pupil} />
      {/* Eye shine */}
      <circle cx="25" cy="23" r="1.5" fill="white" />
      <circle cx="45" cy="23" r="1.5" fill="white" />

      {/* Strain lines when pooping */}
      {isPooping && (
        <>
          <line x1="16" y1="17" x2="28" y2="20" stroke={C.deep} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="17" x2="50" y2="20" stroke={C.deep} strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}

      {/* Muzzle patch */}
      <ellipse cx="28" cy="38" rx="16" ry="12" fill={C.muzzle} />
      {/* Nose */}
      <ellipse cx="28" cy="35" rx="11" ry="8" fill={C.nose} />
      {/* Nostrils */}
      <ellipse cx="23" cy="36" rx="3.5" ry="3" fill={C.nostril} />
      <ellipse cx="33" cy="36" rx="3.5" ry="3" fill={C.nostril} />
      {/* Nose highlight */}
      <ellipse cx="25" cy="31" rx="3" ry="2" fill={C.iris} opacity="0.35" />

      {/* Mouth */}
      {isPooping ? (
        <path d="M18,46 Q28,42 38,46" stroke={C.mouth} strokeWidth="2" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M18,45 Q28,50 38,45" stroke={C.mouth} strokeWidth="2" fill="none" strokeLinecap="round" />
      )}

      {/* Forehead wrinkle */}
      <path d="M10,36 Q14,30 12,21" stroke={C.wrinkle} strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Cheek wrinkle */}
      <path d="M14,44 Q10,40 12,36" stroke={C.wrinkle} strokeWidth="1" fill="none" opacity="0.5" />

      {/* Front legs */}
      <rect
        x="26" y="76" width="14" height="22" rx="7"
        fill={C.shadow}
        style={{ transformOrigin: '33px 76px', animation: isWalking ? 'legSwing 0.3s ease-in-out' : 'none' }}
      />
      <rect
        x="46" y="76" width="14" height="22" rx="7"
        fill={C.shadow}
        style={{ transformOrigin: '53px 76px', animation: isWalking ? 'legSwingAlt 0.3s ease-in-out' : 'none' }}
      />

      {/* Paw pads */}
      <ellipse cx="33" cy="97" rx="6" ry="3.5" fill={C.deep} />
      <ellipse cx="53" cy="97" rx="6" ry="3.5" fill={C.deep} />
    </svg>
  );
}

export default function FrenchBulldogSection() {
  const [position, setPosition] = useState(120);
  const [facing, setFacing] = useState<'right' | 'left'>('left');
  const [isPooping, setIsPooping] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [poops, setPoops] = useState<Poop[]>([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const poopIdRef = useRef(0);
  const walkTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getMaxX = () => Math.max(40, (containerRef.current?.offsetWidth ?? 700) - 130);

  const moveLeft = useCallback(() => {
    setFacing('left');
    setIsWalking(true);
    setPosition((p) => Math.max(10, p - 50));
    if (walkTimeout.current) clearTimeout(walkTimeout.current);
    walkTimeout.current = setTimeout(() => setIsWalking(false), 300);
  }, []);

  const moveRight = useCallback(() => {
    setFacing('right');
    setIsWalking(true);
    setPosition((p) => Math.min(getMaxX(), p + 50));
    if (walkTimeout.current) clearTimeout(walkTimeout.current);
    walkTimeout.current = setTimeout(() => setIsWalking(false), 300);
  }, []);

  const doPoop = useCallback(() => {
    if (isPooping) return;
    setIsPooping(true);
    setTimeout(() => {
      const poopX = facing === 'right' ? position - 10 : position + 90;
      setPoops((prev) => {
        const next = [...prev, { id: ++poopIdRef.current, x: poopX }];
        return next.slice(-10);
      });
      setTimeout(() => setIsPooping(false), 400);
    }, 700);
  }, [isPooping, position, facing]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); moveLeft(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); moveRight(); }
      if (e.key === ' ' || e.key === 'p' || e.key === 'P') { e.preventDefault(); doPoop(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [moveLeft, moveRight, doPoop]);

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: 0, background: '#16162a' }}>
      <div className="section-wrap text-center mb-8">
        <p className="mono text-xs text-[#6b6b80] tracking-widest uppercase mb-1">
          bonus feature
        </p>
        <p className="text-[#6b6b80] text-sm">
          meet the kenkolabs mascot 🐾
        </p>
      </div>

      {/* Floating instructions */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute top-8 left-1/2 z-20"
            style={{ transform: 'translateX(-50%)' }}
          >
            <div
              className="flex flex-wrap justify-center gap-2 px-4"
              style={{ maxWidth: '380px' }}
            >
              {[
                { key: '← →', label: 'walk' },
                { key: 'P / Space', label: 'poop' },
              ].map((hint) => (
                <div
                  key={hint.key}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                  style={{ padding: '0.35rem 0.85rem' }}
                >
                  <span
                    className="mono text-xs font-bold text-violet-300 rounded"
                    style={{ background: 'rgba(124,58,237,0.2)', padding: '2px 7px' }}
                  >
                    {hint.key}
                  </span>
                  <span className="mono text-xs text-[#9a9ab0]">{hint.label}</span>
                </div>
              ))}
              <button
                onClick={() => setShowInstructions(false)}
                className="mono text-xs text-[#6b6b80] hover:text-white transition-colors"
                style={{ padding: '0 0.5rem' }}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '180px' }}
      >
        {/* Ground */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '48px',
            background: 'linear-gradient(to bottom, #1e1e36, #16162a)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        />

        {/* Poop items */}
        {poops.map((poop) => (
          <motion.div
            key={poop.id}
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '44px',
              left: `${poop.x}px`,
              fontSize: '24px',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            💩
          </motion.div>
        ))}

        {/* Dog */}
        <motion.div
          animate={{ x: position, scaleX: facing === 'right' ? -1 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          style={{
            position: 'absolute',
            bottom: '44px',
            left: 0,
            width: '110px',
          }}
        >
          <DogSVG isPooping={isPooping} isWalking={isWalking} />
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 py-5" style={{ background: '#16162a' }}>
        <button
          onMouseDown={moveLeft}
          className="mono text-sm font-bold rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 hover:border-violet-500/40 text-white transition-all active:scale-95"
          style={{ padding: '0.6rem 1.2rem' }}
          aria-label="Move left"
        >
          ←
        </button>
        <button
          onMouseDown={doPoop}
          className="mono text-sm font-bold rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all active:scale-95"
          style={{ padding: '0.6rem 1.4rem' }}
          aria-label="Poop"
        >
          💩 poop
        </button>
        <button
          onMouseDown={moveRight}
          className="mono text-sm font-bold rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 hover:border-violet-500/40 text-white transition-all active:scale-95"
          style={{ padding: '0.6rem 1.2rem' }}
          aria-label="Move right"
        >
          →
        </button>
        <button
          onMouseDown={() => setPoops([])}
          className="mono text-xs text-[#6b6b80] hover:text-rose-400 transition-colors"
          style={{ marginLeft: '0.5rem' }}
          aria-label="Clean up"
        >
          🧹 clean
        </button>
      </div>

      <style>{`
        @keyframes legSwing {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes legSwingAlt {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-20deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
