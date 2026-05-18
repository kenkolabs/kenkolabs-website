'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

const TYPED_STRINGS = [
  'design. build. ship.',
  'from idea to app store.',
  'clean code. thoughtful UX.',
  'products that actually work.',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setStringIndex((s) => (s + 1) % TYPED_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Radial glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-3xl" />
      </div>

      <div className="section-wrap relative z-10 text-center" style={{ paddingTop: '6rem', paddingBottom: '7rem' }}>
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-2" style={{ marginBottom: '2.5rem' }}>
          <span className="mono text-xs text-violet-400 tracking-widest uppercase">kenkolabs</span>
          <span className="w-8 h-px bg-violet-400/50" />
          <span className="mono text-xs text-[#6b6b80] tracking-widest uppercase">product studio</span>
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="mono text-xs text-emerald-400">open for work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
          style={{ marginBottom: '2rem' }}
        >
          <span className="text-white">we turn ideas into </span>
          <span className="gradient-text">products</span>
          <span className="text-white">.</span>
        </motion.h1>

        {/* Typed text */}
        <motion.div
          {...fadeUp(0.3)}
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#6b6b80] h-12 flex items-center justify-center"
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="text-white/70">{typedText}</span>
          <span className="animate-blink text-violet-400 ml-0.5">|</span>
        </motion.div>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-base md:text-lg text-[#6b6b80] max-w-2xl mx-auto leading-relaxed"
          style={{ marginBottom: '3rem' }}
        >
          <span className="text-violet-300 font-medium">kenkolabs</span> is a boutique product studio — building web apps, mobile products, and digital experiences with a focus on craft, performance, and shipping things that work.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
        >
          <a
            href="#projects"
            className="group"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 2.25rem',
              background: '#7c3aed',
              borderRadius: '14px',
              fontWeight: 600, fontSize: '1.05rem',
              color: 'white', textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(124,58,237,0.35)',
              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#6d28d9'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(124,58,237,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.35)'; }}
          >
            view our work
            <span style={{ transition: 'transform 0.2s' }} className="group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 2.25rem',
              borderRadius: '14px',
              fontWeight: 600, fontSize: '1.05rem',
              color: '#b0b0c8', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              transition: 'color 0.2s, border-color 0.2s, transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#b0b0c8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            start a project
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          style={{ marginTop: '5rem' }}
        >
          {[
            { value: '4+', label: 'years shipping' },
            { value: '2', label: 'companies built for' },
            { value: '100%', label: 'open for projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mono text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="mono text-xs text-[#6b6b80] mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="mono text-xs text-[#6b6b80] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-violet-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
