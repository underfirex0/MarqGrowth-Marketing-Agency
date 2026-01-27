import React, { useState } from 'react';
import { BrainCircuit, Activity, Layers, Zap, ArrowRight, Fingerprint } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const STEPS = [
  {
    id: 1,
    title: 'Strategy Before Execution',
    subtitle: "We don't guess. We engineer.",
    desc: "Most agencies rush to post. We rush to understand. We build a rigorous hypothesis based on market data, competitor weakness, and your unique leverage before spending a dime.",
    icon: BrainCircuit,
    color: 'text-blue-400',
    bgGlow: 'bg-blue-500/10'
  },
  {
    id: 2,
    title: 'Content ROI',
    subtitle: 'Attention is the new oil.',
    desc: "We don't just make noise. We create content architectures designed to capture trust, educate prospects, and dismantle objections before sales even talks to them.",
    icon: Zap,
    color: 'text-yellow-400',
    bgGlow: 'bg-yellow-500/10'
  },
  {
    id: 3,
    title: 'Design With Purpose',
    subtitle: 'Friction is the enemy.',
    desc: "Aesthetics open the door, but UX closes the deal. We design seamless, intuitive digital journeys that guide users effortlessly from Curious to Customer.",
    icon: Layers,
    color: 'text-purple-400',
    bgGlow: 'bg-purple-500/10'
  },
  {
    id: 4,
    title: 'Data Over Opinions',
    subtitle: 'Truth is in the numbers.',
    desc: "We ignore vanity metrics. We obsess over the KPIs that actually impact your P&L: CAC, LTV, Retention, and ROAS. If it doesn't make money, we cut it.",
    icon: Activity,
    color: 'text-brand-accent',
    bgGlow: 'bg-brand-accent/10'
  }
];

const Growth: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="growth"
      className="relative overflow-hidden border-t border-white/5 bg-dark-900 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="flex h-full flex-col lg:col-span-5">
            <RevealOnScroll className="mb-12">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-accent">
                Our Philosophy
              </span>
              <h2 className="mb-6 font-display text-4xl font-bold leading-[0.95] text-white md:text-5xl lg:text-6xl">
                Growth isn&apos;t magic.
                <br />
                It&apos;s <span className="text-gray-500">Engineering.</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-gray-400">
                We replaced gut feelings with systems. Here is how we approach every
                single project to ensure scalability.
              </p>
            </RevealOnScroll>

            <div className="space-y-3">
              {STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                    activeStep === idx
                      ? 'border-brand-accent/30 bg-white/5 shadow-[0_0_20px_rgba(0,0,0,0.2)]'
                      : 'border-transparent hover:border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${
                          activeStep === idx ? 'text-brand-accent' : 'text-gray-600'
                        }`}
                      >
                        0{step.id}
                      </span>
                      <h3
                        className={`font-display text-xl font-bold ${
                          activeStep === idx ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 transition-all duration-300 ${
                        activeStep === idx
                          ? 'translate-x-0 text-brand-accent opacity-100'
                          : '-translate-x-4 text-gray-600 opacity-0'
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 lg:hidden ${
                      activeStep === idx
                        ? 'mt-4 max-h-[300px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-gray-300">
                      {step.desc}
                    </p>
                  </div>

                  {activeStep === idx && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-50" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[600px] lg:sticky lg:top-24 lg:col-span-7 lg:block">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStep === idx
                    ? 'z-10 scale-100 translate-y-0 opacity-100'
                    : 'pointer-events-none z-0 scale-95 translate-y-8 opacity-0'
                }`}
              >
                <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-dark-950/50 p-12 backdrop-blur-2xl">
                  <div
                    className={`absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-[100px] opacity-20 ${step.bgGlow}`}
                  />
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

                  <step.icon className="absolute -bottom-12 -right-12 h-80 w-80 rotate-12 text-white opacity-[0.03]" />

                  <div className="relative z-10">
                    <div
                      className={`mb-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md ${step.color}`}
                    >
                      <step.icon size={40} />
                    </div>

                    <h3 className="mb-6 font-display text-4xl font-bold leading-tight text-white">
                      {step.subtitle}
                    </h3>

                    <p className="max-w-xl text-xl leading-relaxed text-gray-400">
                      {step.desc}
                    </p>

                    <div className="mt-12 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-600">
                      <Fingerprint className="h-5 w-5 text-brand-accent" />
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
