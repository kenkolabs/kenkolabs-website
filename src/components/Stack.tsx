'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STACK = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Ruby', 'Python', 'Go', 'SQL'] },
  { category: 'Frontend', items: ['React', 'React Native', 'Vue / Nuxt', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Ruby on Rails', 'Node.js', 'Express', 'GraphQL', 'Kafka'] },
  { category: 'Cloud & Data', items: ['AWS', 'GCP BigQuery', 'Docker', 'Airflow', 'PostgreSQL', 'MongoDB', 'Redis'] },
];

const TOOLS = [
  'TypeScript', 'React', 'Ruby on Rails', 'Node.js', 'Vue.js',
  'AWS', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB',
  'Redis', 'Kafka', 'GraphQL', 'React Native', 'Expo',
  'Next.js', 'Tailwind CSS', 'Python', 'Go', 'Airflow',
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stack" className="section-spacing relative bg-[#050508]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="section-wrap" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
            <span className="mono text-xs text-cyan-400 tracking-widest uppercase">02 / stack</span>
            <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ marginBottom: '1.25rem' }}>
            tools & <span className="gradient-text">technologies</span>
          </h2>
          <p className="text-[#6b6b80] text-lg max-w-xl">
            my current toolkit. always adding, always learning, always shipping.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '1.25rem', marginBottom: '3.5rem' }}>
          {STACK.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-xl glow-border bg-[var(--surface)]"
              style={{ padding: '1.5rem' }}
            >
              <div className="mono text-xs text-cyan-400 tracking-widest uppercase" style={{ marginBottom: '1.25rem' }}>
                {group.category}
              </div>
              <div className="flex flex-col" style={{ gap: '0.65rem' }}>
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-[#9a9ab0]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl border border-white/6 bg-[var(--surface)]"
          style={{ padding: '1.5rem 0' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: [0, -50 * TOOLS.length] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap"
            style={{ gap: '2rem' }}
          >
            {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, i) => (
              <span key={i} className="mono text-sm text-[#6b6b80] flex items-center shrink-0" style={{ gap: '0.6rem' }}>
                <span className="text-violet-400/40">◆</span>
                {tool}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
