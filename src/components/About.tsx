'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LINES = [
  { prefix: '$ ', text: 'whoami', color: 'text-cyan-400' },
  { prefix: '> ', text: 'kenji duggan — montreal-based swe', color: 'text-white' },
  { prefix: '$ ', text: 'cat experience.txt', color: 'text-cyan-400' },
  { prefix: '> ', text: 'autodesk (2025-now) · shopify (2022-24)', color: 'text-white' },
  { prefix: '> ', text: 'ubisoft (2020) · cforp (2021)', color: 'text-white' },
  { prefix: '$ ', text: 'cat hobbies.txt', color: 'text-cyan-400' },
  { prefix: '> ', text: 'bjj 🥋  judo  board games  anime', color: 'text-white' },
  { prefix: '$ ', text: 'echo $STATUS', color: 'text-cyan-400' },
  { prefix: '> ', text: 'open to collabs & freelance ✓', color: 'text-emerald-400' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-spacing relative bg-[#07070d]">
      <div className="section-wrap" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
            <span className="mono text-xs text-emerald-400 tracking-widest uppercase">03 / about</span>
            <span className="flex-1 h-px bg-gradient-to-r from-emerald-400/40 to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            the <span className="gradient-text">human</span> behind the code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '3rem' }}>
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p className="text-[#9a9ab0] text-lg leading-relaxed">
              Software engineer at Autodesk by day, indie builder by night.
              kenkolabs is my corner of the internet where side projects turn into
              real products — and hopefully, real income streams.
            </p>
            <p className="text-[#6b6b80] text-base leading-relaxed">
              I care about the craft: clean code, thoughtful UX, and shipping things
              that actually work. When I&apos;m not writing code, I&apos;m on the mats training
              Brazilian jiu-jitsu or judo, deep in a board game, or catching up on anime.
            </p>
            <p className="text-[#6b6b80] text-base leading-relaxed">
              Pretty chill overall. Always building something, always learning — just doing it
              at my own pace.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.75rem' }}>
              {[
                {
                  href: 'https://github.com/KenjiDuggan',
                  label: 'github',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://x.com/KenjiDuggan',
                  label: 'twitter / x',
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.kenjiduggan.ca',
                  label: 'website',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://kenkolabs-shop.fourthwall.com/',
                  label: 'shop',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  ),
                },
                {
                  href: 'mailto:kenjiduggan@gmail.com',
                  label: 'email',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="mono"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.7rem 1.25rem',
                    fontSize: '0.875rem', fontWeight: 500,
                    color: '#a78bfa', textDecoration: 'none',
                    border: '1px solid rgba(124,58,237,0.2)',
                    borderRadius: '10px',
                    background: 'rgba(124,58,237,0.06)',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
                    e.currentTarget.style.background = 'rgba(124,58,237,0.14)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#a78bfa';
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)';
                    e.currentTarget.style.background = 'rgba(124,58,237,0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Terminal side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/8 bg-[#080810]"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d18] border-b border-white/6">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="mono text-xs text-[#6b6b80] ml-3">kenji@kenkolabs ~</span>
            </div>
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="mono text-sm flex gap-1"
                >
                  <span className="text-violet-400 shrink-0">{line.prefix}</span>
                  <span className={line.color}>{line.text}</span>
                </motion.div>
              ))}
              <div className="mono text-sm flex gap-1" style={{ marginTop: '1rem' }}>
                <span className="text-violet-400">$ </span>
                <span className="text-white">_<span className="animate-blink">█</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
