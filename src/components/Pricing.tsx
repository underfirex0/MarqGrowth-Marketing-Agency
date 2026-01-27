import React from 'react';
import { PRICING } from '../constants';
import { Check, Star } from 'lucide-react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-dark-900 py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gold-glow/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-accent">
            Investment
          </span>
          <h2 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            Transparent <br />
            <span className="text-gray-500">Pricing.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Choose the perfect plan to accelerate your digital growth.
          </p>
        </RevealOnScroll>

        <div className="grid items-center gap-8 md:grid-cols-3">
          {PRICING.map((tier, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[2.5rem] border p-8 transition-all duration-500 ${
                  tier.highlighted
                    ? 'z-10 scale-105 border-brand-accent bg-dark-900/80 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(204,255,0,0.15)]'
                    : 'border-white/5 bg-dark-950/50 hover:border-white/20 hover:bg-dark-800'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-dark-900 shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`mb-2 font-display text-xl font-bold ${
                      tier.highlighted ? 'text-brand-accent' : 'text-white'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p className="min-h-[40px] text-sm leading-relaxed text-gray-400">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl font-bold ${
                      tier.highlighted ? 'text-white' : 'text-gray-200'
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="font-medium text-gray-500">
                      {tier.period}
                    </span>
                  )}
                </div>

                <div className="mb-10 flex flex-grow flex-col gap-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlighted
                            ? 'bg-brand-accent text-black shadow-[0_0_10px_rgba(204,255,0,0.3)]'
                            : 'bg-white/10 text-gray-400'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  className={`w-full ${
                    tier.highlighted
                      ? 'shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                      : ''
                  }`}
                >
                  Choose {tier.name}
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
