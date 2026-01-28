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

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled ? 'py-3' : 'py-6'}`}
      >
        <div
          className={`
            mx-auto flex items-center justify-between transition-all duration-500
            max-w-7xl px-6 lg:px-10
            ${scrolled
              ? 'bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-transparent'}
          `}
        >
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group relative z-50"
          >
            <div className="w-9 h-9">
              <svg
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_10px_rgba(204,255,0,0.4)] group-hover:scale-110 transition-transform"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#84cc16" />
                    <stop offset="100%" stopColor="#ccff00" />
                  </linearGradient>
                </defs>
                <circle cx="8" cy="30" r="4" fill="url(#logoGradient)" />
                <path d="M8 30 C18 30,18 18,28 18" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 15 L32 18 L27 22" fill="url(#logoGradient)" />
                <path d="M12 18 C20 18,20 8,30 8" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 5 L34 8 L29 12" fill="url(#logoGradient)" />
              </svg>
            </div>

            <span
              className={`font-display font-extrabold text-xl tracking-wide text-white transition-colors
              ${scrolled ? 'hidden md:block' : 'block'}`}
            >
              MARQGROWTH
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-2">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`
                        px-5 py-2 rounded-full text-sm font-medium transition-all
                        ${isActive
                          ? 'bg-white text-dark-900 shadow-[0_0_15px_rgba(255,255,255,0.3)] font-bold'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'}
                      `}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 relative z-50">
            <Button
              variant="primary"
              className={`hidden md:inline-flex px-6 text-xs ${scrolled ? 'h-10' : 'h-11'}`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let’s Talk <ArrowUpRight className="ml-1 w-3 h-3" />
            </Button>

            <button
              className="md:hidden p-2 bg-white/5 rounded-full border border-white/10 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl transition-all duration-500
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 hover:to-brand-accent transition-all"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="w-full max-w-xs h-px bg-white/10 my-4" />
          <Button variant="primary" className="w-full max-w-xs py-4 text-lg">
            Let’s Talk
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
