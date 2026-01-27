import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 w-full -translate-x-1/2 text-center opacity-[0.03] select-none">
        <span className="font-display text-[20vw] font-bold leading-none text-white">
          VORTEX
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 flex flex-col items-center justify-center text-center">
          <h2 className="mb-8 font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-brand-accent">Let&apos;s build it.</span>
          </h2>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-colors duration-300 hover:bg-brand-accent"
          >
            Start a Project
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>

        <div className="mb-20 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-4">
          <div>
            <a href="#" className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent font-bold text-dark-900">
                V
              </div>
              <span className="font-display text-xl font-bold text-white">
                Vortex<span className="text-brand-accent">.</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Refining digital presence for brands that dare to lead.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-display font-bold text-white">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display font-bold text-white">Services</h4>
            <ul className="space-y-3">
              {['Web Design', 'Development', 'SEO', 'Branding', 'Marketing'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition-colors hover:text-brand-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display font-bold text-white">Socials</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-gray-600">
            © 2024 Vortex Agency. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase text-white/50 transition-colors hover:text-brand-accent"
          >
            Back to Top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
