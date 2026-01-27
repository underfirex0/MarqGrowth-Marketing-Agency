import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative bg-dark-800 py-24">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <RevealOnScroll className="max-w-2xl">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-brand-accent">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Capabilities designed <br />
              for <span className="text-brand-accent">maximum impact.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <Button variant="outline">Start Your Project</Button>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, index) => {
            const gridClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

            return (
              <RevealOnScroll
                key={index}
                delay={index * 100}
                className={`h-full ${gridClass}`}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-dark-900/60 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-accent/20 blur-[80px] transition-colors duration-500 group-hover:bg-brand-accent/30" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-black">
                        <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-brand-accent opacity-0 transition-opacity group-hover:opacity-100" />
                        <service.icon className="h-7 w-7 text-gray-300 transition-colors group-hover:text-black" />
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight className="h-5 w-5 text-gray-500 transition-colors group-hover:text-black" />
                      </div>
                    </div>

                    <h3 className="mb-3 font-display text-2xl font-bold text-white transition-colors group-hover:text-brand-accent">
                      {service.title}
                    </h3>

                    <p className="mb-8 border-b border-white/5 pb-6 text-sm leading-relaxed text-gray-400 lg:text-base">
                      {service.description}
                    </p>

                    <div className="mt-auto flex flex-col gap-1.5">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group/item -mx-2 flex cursor-default items-center gap-3 rounded-lg px-2 py-1.5 transition-all duration-300 hover:bg-white/5"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-300 group-hover/item:bg-brand-accent group-hover/item:shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
                          <span className="text-sm font-medium text-gray-400 transition-colors group-hover/item:text-white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
