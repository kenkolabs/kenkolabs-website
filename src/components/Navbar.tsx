'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHOP_URL = 'https://kenkolabs-shop.fourthwall.com/';

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Shop', href: SHOP_URL, external: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-wrap flex items-center justify-between" style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}>
        <a href="#" className="flex items-center gap-2 group">
          <span className="mono text-lg font-bold text-white">
            kenko<span className="text-violet-400">labs</span>
          </span>
          <span className="mono text-violet-400 text-xs opacity-60 group-hover:opacity-100 transition-opacity">
            _
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="mono text-sm text-[#6b6b80] hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              {link.external && (
                <span className="text-[10px] opacity-50 ml-0.5" aria-hidden>
                  ↗
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="mono text-sm px-4 py-2 rounded-lg border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400/60 transition-all duration-200"
          >
            hire me →
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-6"
        >
          <span className={`h-px bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-px bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d14]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div style={{ padding: '1rem 2rem 1.5rem' }} className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mono text-base text-[#6b6b80] hover:text-white transition-colors"
                  style={{ padding: '0.85rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {link.label}
                  {link.external && <span className="opacity-50 ml-1">↗</span>}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mono text-base text-violet-300 hover:text-violet-200 transition-colors"
                style={{ padding: '0.85rem 0', marginTop: '0.25rem' }}
              >
                hire me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
