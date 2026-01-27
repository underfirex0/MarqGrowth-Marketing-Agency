import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Team: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-dark-900 py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-accent">
              Our Squad
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Meet experts behind your <br />
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                growth business.
              </span>
            </h2>
          </div>

          <p className="hidden max-w-md border-l border-white/10 pl-6 text-lg text-gray-400 md:block">
            A multidisciplinary team of strategists, designers, and engineers
            obsessed with ROI.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="group relative cursor-default">
                <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-dark-800 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-accent/50 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0" />

                  <div className="absolute bottom-4 right-4 flex translate-y-8 flex-col gap-3 opacity-0 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent hover:text-black"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent hover:text-black"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="pl-2">
                  <h3 className="mb-1 flex items-center gap-2 font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-brand-accent">
                    {member.name}
                    <ArrowUpRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 transition-colors group-hover:text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
