import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { Download, Brain, Cpu, Sparkles } from 'lucide-react';

const Ebook: React.FC = () => {
  return (
    <section id="ebook" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-16 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] mask-fade-sides"></div>

          <div className="relative grid gap-16 lg:grid-cols-2 items-center">
            <RevealOnScroll className="order-2 lg:order-1 max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent">
                <Sparkles size={12} />
                The Manifesto
              </div>

              <h2 className="mb-6 font-display text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                AI <span className="mx-1 font-light italic text-gray-600">x</span> HUMAN
                <span className="mt-4 block text-2xl md:text-3xl font-normal text-brand-accent">
                  The New Mind of Marketing
                </span>
              </h2>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300">
                In an era of infinite content, <span className="font-medium text-white">thinking</span> is the only differentiator left.
                This guide defines the convergence of algorithmic precision and human intuition.
                <br />
                <br />
                <span className="font-mono text-sm text-gray-500">Vol. 01 — Philosophy & Tactics</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-1">
                  <Brain className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter email to unlock"
                    className="w-full rounded-full border border-white/10 bg-dark-950/50 py-4 pl-12 pr-6 text-white outline-none transition-all placeholder:text-gray-600 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  />
                </div>
                <Button variant="primary" icon className="py-4">
                  Get Free Copy
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-white/5 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-8 w-8 overflow-hidden rounded-full border border-dark-900 bg-gray-800">
                      <img
                        src={`https://picsum.photos/50/50?random=${i + 30}`}
                        alt="Reader"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  <strong className="text-white">2,000+</strong> marketers reading.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 md:w-80 aspect-[3/4] cursor-pointer">
                <div className="absolute inset-0 rounded-r-xl rounded-l-sm border border-white/20 bg-dark-950 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/80"></div>

                  <div className="relative z-10 flex h-full flex-col justify-between p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] font-bold text-white">
                        V.
                      </div>
                      <Cpu className="h-6 w-6 text-brand-accent opacity-50" />
                    </div>

                    <div className="relative py-10 text-center">
                      <h3 className="mb-2 text-5xl font-display font-bold tracking-tighter text-white">
                        AI<span className="text-brand-accent">x</span>
                      </h3>
                      <h3 className="text-4xl font-display font-bold tracking-widest text-white opacity-80">
                        HUMAN
                      </h3>
                    </div>

                    <div className="flex items-end justify-between border-t border-white/10 pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500">The New Mind</p>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500">Of Marketing</p>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-brand-accent">
                        <Download size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 h-[120%] w-[120%] translate-x-[-10%] translate-y-[-10%] rounded-full bg-brand-accent/20 blur-[60px] opacity-40"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
