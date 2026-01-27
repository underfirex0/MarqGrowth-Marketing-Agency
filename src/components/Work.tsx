import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../constants';
import {
  ArrowUpRight,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CaseStudy } from '../types';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Work: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = selectedStudy ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedStudy]);

  /* Scroll state */
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollTo({
      left: dir === 'left' ? el.scrollLeft - amount : el.scrollLeft + amount,
      behavior: 'smooth',
    });
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedStudy(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section id="work" className="relative overflow-hidden bg-dark-950 py-32">
      {/* Ambient */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gold-glow/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <RevealOnScroll className="max-w-3xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-accent">
              Case Studies
            </span>
            <h2 className="font-display text-5xl font-bold text-white md:text-7xl">
              Our recent <br />
              <span className="text-gray-400">projects.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all ${
                canScrollLeft
                  ? 'cursor-pointer text-white hover:border-brand-accent hover:bg-brand-accent hover:text-dark-900'
                  : 'cursor-not-allowed text-gray-500 opacity-30'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all ${
                canScrollRight
                  ? 'cursor-pointer text-white hover:border-brand-accent hover:bg-brand-accent hover:text-dark-900'
                  : 'cursor-not-allowed text-gray-500 opacity-30'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </RevealOnScroll>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          className="-mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-12 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="group relative min-w-[85vw] cursor-pointer snap-center md:min-w-[650px]"
              onClick={() => setSelectedStudy(study)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 bg-dark-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={study.image}
                  alt={study.client}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                  <div className="transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <div className="mb-4 flex items-end justify-between">
                      <div>
                        <span className="mb-2 inline-block rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
                          {study.category}
                        </span>
                        <h3 className="font-display text-4xl font-bold text-white md:text-5xl">
                          {study.client}
                        </h3>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-dark-900">
                        <ArrowUpRight className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="min-w-[1px] md:min-w-[50px]" />
        </div>

        {/* Progress */}
        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full bg-brand-accent shadow-[0_0_10px_rgba(204,255,0,0.5)] transition-all"
            style={{
              width: scrollContainerRef.current
                ? `${
                    ((scrollContainerRef.current.scrollLeft +
                      scrollContainerRef.current.clientWidth) /
                      scrollContainerRef.current.scrollWidth) *
                    100
                  }%`
                : '20%',
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
            onClick={handleClose}
          />

          <div
            className={`relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-dark-900 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-transform ${
              isClosing ? 'translate-y-10 scale-95' : 'translate-y-0 scale-100'
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition-all hover:bg-white hover:text-black"
            >
              <X size={24} />
            </button>

            <div className="relative h-[35vh] overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              <img
                src={selectedStudy.image}
                alt={selectedStudy.client}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="-mt-12 relative z-20 px-8 py-12 md:px-16">
              <div className="mb-12">
                <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-brand-accent">
                  {selectedStudy.category}
                </span>
                <h2 className="font-display mb-2 text-5xl font-bold text-white md:text-6xl">
                  {selectedStudy.client}
                </h2>
                <div className="mt-6 h-1 w-20 rounded-full bg-brand-accent/50 shadow-[0_0_15px_rgba(204,255,0,0.4)]" />
              </div>

              <div className="space-y-12">
                <Section title="Context">
                  <p className="text-lg leading-relaxed text-gray-300">
                    {selectedStudy.challenge}
                  </p>
                </Section>

                <Section title="What we did" bordered>
                  <ul className="flex flex-col gap-3">
                    {selectedStudy.solution.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-lg font-medium text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_5px_rgba(204,255,0,0.8)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="Result" bordered>
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    {selectedStudy.resultSummary ??
                      'Delivering measurable impact and sustainable growth.'}
                  </p>

                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {selectedStudy.results.map((res, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-brand-accent/30"
                      >
                        <span className="mb-1 block text-2xl font-bold text-white md:text-3xl">
                          {res.value}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-gray-500">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Section>

                <div className="flex flex-col items-center border-t border-white/5 pt-16 text-center">
                  <Button
                    variant="primary"
                    className="w-full px-8 py-4 text-lg md:w-auto"
                    onClick={() => {
                      handleClose();
                      document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Let’s do this for your business{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
}> = ({ title, children, bordered }) => (
  <div
    className={`grid gap-4 md:grid-cols-4 md:gap-8 ${
      bordered ? 'border-t border-white/5 pt-12' : ''
    }`}
  >
    <h3 className="font-display text-xl font-bold text-gray-500 md:text-right">
      {title}
    </h3>
    <div className="md:col-span-3">{children}</div>
  </div>
);

export default Work;
