import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = '';
      NAV_LINKS.forEach(link => {
        const el = document.getElementById(link.href.substring(1));
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 160 && r.bottom >= 160) current = link.href.substring(1);
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      setIsOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* FULL WIDTH WRAPPER (THIS WAS MISSING) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'py-3' : 'py-6'}`}
      >
        {/* CENTERING LAYER */}
        <div className="w-full flex justify-center px-4 lg:px-8">
          {/* PILL CONTAINER */}
          <div
            className={`
              w-full max-w-6xl
              flex items-center justify-between
              transition-all duration-500
              ${scrolled
                ? 'bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 py-3'
                : 'bg-transparent px-6 py-2'}
            `}
          >
            {/* LOGO */}
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="flex items-center gap-3 group"
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
                  <path d="M8 30 C18 30,18 18,28 18" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M26 15 L32 18 L27 22" fill="url(#logoGradient)" />
                  <path d="M12 18 C20 18,20 8,30 8" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
                  <path d="M28 5 L34 8 L29 12" fill="url(#logoGradient)" />
                </svg>
              </div>

              <span className={`font-display font-extrabold text-xl text-white transition-all
                ${scrolled ? 'hidden md:block' : 'block'}`}>
                MARQGROWTH
              </span>
            </a>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex">
              <ul className="flex gap-2">
                {NAV_LINKS.map(link => {
                  const active = activeSection === link.href.substring(1);
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollTo(e, link.href)}
                        className={`
                          px-5 py-2 rounded-full text-sm transition-all
                          ${active
                            ? 'bg-white text-dark-900 font-bold shadow-[0_0_15px_rgba(255,255,255,0.35)]'
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
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                className={`hidden md:inline-flex text-xs px-6 ${scrolled ? 'h-10' : 'h-11'}`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let’s Talk <ArrowUpRight className="ml-1 w-3 h-3" />
              </Button>

              <button
                className="md:hidden p-2 bg-white/5 border border-white/10 rounded-full text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl transition-all duration-500
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 hover:to-brand-accent"
              style={{ transitionDelay: `${i * 60}ms` }}
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
