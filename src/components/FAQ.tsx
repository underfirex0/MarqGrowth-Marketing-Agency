import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll className="grid gap-12 md:grid-cols-12">
          
          <div className="md:col-span-4 max-w-md">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-accent">
              FAQ
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
              Common <br /> Questions
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="md:col-span-8 space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`border-b border-white/10 transition-colors duration-300 ${
                  openIndex === idx ? 'border-brand-accent/50' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="group flex w-full items-center justify-between py-6 text-left"
                >
                  <span
                    className={`font-display text-xl font-medium transition-colors duration-300 ${
                      openIndex === idx
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                      openIndex === idx
                        ? 'rotate-180 border-brand-accent bg-brand-accent text-black'
                        : 'border-white/20 text-gray-400 group-hover:border-white group-hover:text-white'
                    }`}
                  >
                    {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    openIndex === idx
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FAQ;
