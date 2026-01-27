import React, { useState } from 'react';
import {
  BrainCircuit,
  Activity,
  Layers,
  Zap,
  ArrowRight,
  Fingerprint,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const STEPS = [
  {
    id: 1,
    title: 'Strategy Before Execution',
    subtitle: "We don't guess. We engineer.",
    desc: "Most agencies rush to post. We rush to understand. We build a rigorous hypothesis based on market data, competitor weakness, and your unique leverage before spending a dime.",
    icon: BrainCircuit,
    color: 'text-blue-400',
    bgGlow: 'bg-blue-500/10',
  },
  {
    id: 2,
    title: 'Content ROI',
    subtitle: 'Attention is the new oil.',
    desc: "We don't just make noise. We create content architectures designed to capture trust, educate prospects, and dismantle objections before sales even talks to them.",
    icon: Zap,
    color: 'text-yellow-400',
    bgGlow: 'bg-yellow-500/10',
  },
  {
    id: 3,
    title: 'Design With Purpose',
    subtitle: 'Friction is the enemy.',
    desc: "Aesthetics open the door, but UX closes the deal. We design seamless, intuitive digital journeys that guide users effortlessly from Curious to Customer.",
    icon: Layers,
    color: 'text-purple-400',
    bgGlow: 'bg-purple-500/10',
  },
  {
    id: 4,
    title: 'Data Over Opinions',
    subtitle: 'Truth is in the numbers.',
    desc: "We ignore vanity metrics. We obsess over the KPIs that actually impact your P&L: CAC, LTV, Retention, and ROAS. If it doesn't make money, we cut it.",
    icon: Activity,
    color: 'text-brand-accent',
    bgGlow: 'bg-brand-accent/10',
  },
];

const Growth: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="growth"
      className="relative py-24 md:py-32 bg-dark-900 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-1/2 left-0 w-[520px] h-[520px] bg-brand-accent/5 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />

      {/* ✅ SAME MARGINS AS HERO / EBOOK */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col">
            <RevealOnScroll className="mb-12">
              <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block text-glow-sm">
                Our Philosophy
              </span>

              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-6">
                Growth isn&apos;t magic.
                <br />
                It&apos;s <span className="text-gray-500">Engineering.</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                We replaced gut feelings with systems. Here is how we approach
                every single project to ensure scalability.
              </p>
            </RevealOnScroll>

            <div className="space-y-3">
              {STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                    activeStep === idx
                      ? 'bg-white/5 border-brand-accent/30 shadow-[0_0_20px_rgba(0,0,0,0.25)]'
                      : 'border-transparent hover:bg-white/5 hover:border-white/5'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                          activeStep === idx
                            ? 'text-brand-accent'
                            : 'text-gray-600'
                        }`}
                      >
                        0{step.id}
                      </span>

                      <h3
                        className={`text-xl font-display font-bold transition-colors ${
                          activeStep === idx
                            ? 'text-white'
                            : 'text-gray-500'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeStep === idx
                          ? 'opacity-100 translate-x-0 text-brand-accent'
                          : 'opacity-0 -translate-x-4 text-gray-600'
                      }`}
                    />
                  </div>

                  {/* Mobile accordion */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                      activeStep === idx
                        ? 'max-h-[320px] opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                      {step.desc}
                    </p>
                  </div>

                  {/* Active glow */}
                  {activeStep === idx && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-60 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN – STICKY VISUALIZER */}
          <div className="hidden lg:block lg:col-span-7 relative h-[620px] sticky top-24">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeStep === idx
                    ? 'opacity-100 translate-y-0 scale-100 z-10'
                    : 'opacity-0 translate-y-8 scale-95 z-0 pointer-events-none'
                }`}
              >
                <div className="relative h-full w-full bg-dark-950/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 flex flex-col justify-center overflow-hidden group">

                  {/* Background FX */}
                  <div
                    className={`absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[110px] opacity-20 ${step.bgGlow}`}
                  />
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

                  {/* Decorative icon */}
                  <step.icon className="absolute -bottom-12 -right-12 w-80 h-80 opacity-[0.035] text-white rotate-12 transition-transform duration-1000 group-hover:rotate-0" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:scale-110 ${step.color}`}
                    >
                      <step.icon size={40} />
                    </div>

                    <h3 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                      {step.subtitle}
                    </h3>

                    <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                      {step.desc}
                    </p>

                    <div className="mt-12 flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-gray-600">
                      <Fingerprint className="w-5 h-5 text-brand-accent" />
                      MARQGROWTH METHODOLOGY
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Growth;
