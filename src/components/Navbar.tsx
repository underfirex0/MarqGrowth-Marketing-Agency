import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = '';
      NAV_LINKS.forEach(link => {
        const id = link.href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      setIsOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'max-w-5xl rounded-full border border-white/10 bg-dark-900/70 px-4 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'max-w-7xl bg-transparent px-6 lg:px-8'
          }`}
        >
          <a
            href="#home"
            onClick={e => scrollToSection(e, '#home')}
            className="relative z-50 flex items-center gap-3"
          >
            <div className="h-9 w-9">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full drop-shadow-[0_0_10px_rgba(204,255,0,0.4)]"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#84cc16" />
                    <stop offset="100%" stopColor="#ccff00" />
                  </linearGradient>
                </defs>
                <circle cx="8" cy="30" r="4" fill="url(#logoGradient)" />
                <path
                  d="M8 30 C 18 30, 18 18, 28 18"
                  stroke="url(#logoGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path d="M26 15 L 32 18 L 27 22" fill="url(#logoGradient)" />
                <path
                  d="M12 18 C 20 18, 20 8, 30 8"
                  stroke="url(#logoGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path d="M28 5 L 34 8 L 29 12" fill="url(#logoGradient)" />
              </svg>
            </div>

            <span
              className={`font-display text-xl font-extrabold tracking-wide text-white transition-colors ${
                scrolled ? 'hidden md:block' : 'block'
              }`}
            >
              MARQGROWTH
            </span>
          </a>

          <div className="hidden md:flex items-center">
            <ul
              className={`flex items-center gap-1 ${
                scrolled ? 'rounded-full border border-white/5 bg-white/5 px-2 py-1' : ''
              }`}
            >
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={e => scrollToSection(e, link.href)}
                      className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-white text-dark-900 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative z-50 flex items-center gap-4">
            <Button
              variant="primary"
              className="hidden md:inline-flex px-6 py-2.5 text-xs"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let&apos;s Talk <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>

            <button
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-transform active:scale-95 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 p-6">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => scrollToSection(e, link.href)}
              className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 transition-all hover:to-brand-accent"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="my-4 h-px w-full max-w-xs bg-white/10" />
          <Button
            variant="primary"
            className="w-full max-w-xs py-4 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
