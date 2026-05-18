'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const FEATURES = [
  'Item feed with category filtering, cover photos, and real-time availability status',
  'End-to-end borrow request flow: request submission, owner approval/decline, and due-date tracking',
  'Neighborhood hub with threaded posts, upvotes, and anonymous posting',
  'Onboarding flow with building assignment and profile setup',
  'Push-ready notification architecture and real-time subscriptions via Supabase Realtime',
];

const STACK = [
  'React Native',
  'Expo Router',
  'TypeScript',
  'Supabase',
  'Postgres',
  'Auth',
  'Storage',
  'Realtime',
  'EAS Build',
  'App Store Connect',
];

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="projects" className="section-spacing relative bg-[#07070d]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-violet-400/30 to-transparent" />

      <div className="section-wrap">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
            <span className="mono text-xs text-violet-400 tracking-widest uppercase">01 / projects</span>
            <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(167,139,250,0.4), transparent)', maxWidth: '12rem' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ marginBottom: '1rem' }}>
            what i&apos;m <span className="gradient-text">building</span>
          </h2>
        </motion.div>

        {/* Featured card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            background: 'var(--surface)',
            border: '1px solid',
            borderColor: hovered ? 'rgba(124,58,237,0.45)' : 'rgba(255,255,255,0.07)',
            boxShadow: hovered
              ? '0 0 60px rgba(124,58,237,0.18), 0 24px 48px rgba(0,0,0,0.5)'
              : '0 4px 24px rgba(0,0,0,0.3)',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            position: 'relative',
          }}
        >
          {/* Shimmer top line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.7), transparent)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }} />

          {/* Gradient wash */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', padding: '2.5rem' }}>
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <img
                  src="https://www.kommon.life/icon.png"
                  alt="Kommon"
                  width={44}
                  height={44}
                  style={{ borderRadius: '12px', flexShrink: 0, display: 'block' }}
                />
                <div>
                  <h3 className="mono" style={{ fontSize: '1.375rem', fontWeight: 700, color: 'white', letterSpacing: '-0.01em' }}>
                    Kommon
                  </h3>
                      <a
                    href="https://www.kommon.life"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{ fontSize: '0.7rem', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px', textDecoration: 'none', opacity: 0.8 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
                  >
                    kommon.life ↗
                  </a>
                </div>
              </div>
              <span className="mono" style={{
                fontSize: '0.7rem', padding: '0.3rem 0.85rem', borderRadius: '999px',
                border: '1px solid rgba(251,191,36,0.25)',
                background: 'rgba(251,191,36,0.08)',
                color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                under app store review
              </span>
            </div>

            {/* Description */}
            <p style={{ color: '#9a9ab0', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '52rem' }}>
              Kommon is a hyperlocal iOS app that turns apartment buildings into sharing communities — letting residents lend, give away, or sell everyday items to their neighbors without leaving the building.
            </p>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.75rem' }} />

            {/* What I built */}
            <div style={{ marginBottom: '2rem' }}>
              <p className="mono" style={{ fontSize: '0.7rem', color: '#6b6b80', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
                what i built
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={cardInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                  >
                    <span style={{ color: '#7c3aed', marginTop: '0.35rem', flexShrink: 0, fontSize: '0.5rem' }}>◆</span>
                    <span style={{ color: '#8a8a9a', fontSize: '0.9rem', lineHeight: 1.6 }}>{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.75rem' }} />

            {/* Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <p className="mono" style={{ fontSize: '0.7rem', color: '#6b6b80', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>
                stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {STACK.map((tag) => (
                  <span
                    key={tag}
                    className="mono"
                    style={{
                      fontSize: '0.75rem', color: '#9a9ab0',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      padding: '0.3rem 0.75rem', borderRadius: '6px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.kommon.life"
              target="_blank"
              rel="noopener noreferrer"
              className="mono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.875rem', fontWeight: 600,
                color: 'white', textDecoration: 'none',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.7), rgba(6,182,212,0.5))',
                border: '1px solid rgba(124,58,237,0.4)',
                padding: '0.65rem 1.4rem', borderRadius: '10px',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              visit kommon.life ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
