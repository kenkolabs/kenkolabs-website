'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-spacing relative bg-[#050508]">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/15 to-transparent pointer-events-none" />

      <div className="section-wrap text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1.25rem' }}>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-400/40 max-w-xs" />
            <span className="mono text-xs text-violet-400 tracking-widest uppercase">04 / contact</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-400/40 max-w-xs" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white"
          style={{ marginBottom: '1.75rem' }}
        >
          got a project in{' '}
          <span className="gradient-text">mind?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6b6b80] text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ marginBottom: '3rem' }}
        >
          kenkolabs takes on select freelance projects and collaborations. if you have something worth building, let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ marginBottom: '4rem' }}
        >
          <a
            href="mailto:kenjiduggan@gmail.com"
            className="group flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 rounded-xl font-medium text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-800/60 hover:-translate-y-0.5"
            style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
          >
            say hello
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://x.com/KenjiDuggan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl font-medium text-[#6b6b80] hover:text-white border border-white/8 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
          >
            dm on x
          </a>
        </motion.div>

        {/* Social links row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-8 border-t border-white/6"
          style={{ paddingTop: '2.5rem' }}
        >
          {[
            {
              label: 'github',
              href: 'https://github.com/KenjiDuggan',
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
            },
            {
              label: 'twitter / x',
              href: 'https://x.com/KenjiDuggan',
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
            },
            {
              label: 'website',
              href: 'https://www.kenjiduggan.ca',
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
            },
            {
              label: 'shop',
              href: 'https://kenkolabs-shop.fourthwall.com/',
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', color: '#6b6b80', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b6b80'}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
