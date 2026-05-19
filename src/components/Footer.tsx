'use client';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#050508]">
      <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="mono text-sm font-bold text-white">
          kenko<span className="text-violet-400">labs</span>
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://kenkolabs-shop.fourthwall.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-xs text-[#6b6b80] hover:text-violet-400 transition-colors"
          >
            shop ↗
          </a>
          <span className="mono text-xs text-[#6b6b80]">
            © kenkolabs {new Date().getFullYear()}
          </span>
        </div>
        <a
          href="#"
          className="mono text-xs text-[#6b6b80] hover:text-violet-400 transition-colors"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
