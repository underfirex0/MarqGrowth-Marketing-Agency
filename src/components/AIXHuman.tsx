import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const AIXHuman: React.FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-3xl">
          <div className="relative py-8 md:border-l border-white/10 md:pl-12 lg:pl-16">
            <div className="absolute top-0 left-0 w-12 h-1 bg-brand-accent md:hidden"></div>
            <div className="absolute top-8 -left-[1px] w-1 h-24 bg-brand-accent hidden md:block"></div>

            <span className="mb-10 block text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
              A Framework for Modern Marketing
            </span>

            <h2 className="mb-12 font-display font-bold tracking-tight text-white leading-tight text-5xl md:text-7xl">
              AI
              <span className="px-1 font-serif font-light italic text-brand-accent">X</span>
              HUMAN
              <span className="mt-4 block font-sans text-xl md:text-3xl font-normal tracking-normal text-gray-500">
                The New Mind of Marketing
              </span>
            </h2>

            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-300 font-sans">
              <p>
                Marketing is no longer just creativity.
                <br />
                And it’s no longer just data.
              </p>

              <p className="font-normal text-white">
                AIXHUMAN is the space where artificial intelligence meets human intuition — where systems, psychology, emotion, and meaning work together.
              </p>

              <p>
                This framework guides how we think, design, and grow brands in a world shaped by algorithms, attention, and choice.
              </p>
            </div>

            <div className="mt-16 w-full border-t border-dashed border-white/10 pt-10">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                <span className="h-2 w-2 rounded-full bg-brand-accent"></span>
                This thinking shapes every strategy we build at Vortex.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AIXHuman;
