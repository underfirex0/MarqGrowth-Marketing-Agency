import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight, TrendingUp, Zap, Globe, Activity, ChevronDown } from 'lucide-react';

const FloatingCard: React.FC<{
  className?: string;
  icon: React.ElementType;
  label: string;
  value: string;
  delay?: number;
  color?: string;
}> = ({ className = '', icon: Icon, label, value, delay = 0, color = 'text-brand-accent' }) => (
  <div
    className={`pointer-events-auto absolute z-20 hidden cursor-default items-center gap-4 rounded-2xl border border-white/10 bg-dark-900/50 p-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-brand-accent/30 hover:bg-dark-900/70 lg:flex ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${color}`}
    >
      <Icon size={22} />
    </div>
    <div>
      <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </div>
      <div className="font-display text-lg font-bold leading-none text-white">
        {value}
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-24"
    >
      <div className="absolute inset-0 bg-dark-950" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[100vh] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [transform:perspective(1000px)_rotateX(60deg)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/80" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[100px] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

      <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <FloatingCard
            className="left-0 top-[12%]"
            icon={TrendingUp}
            label="Client Growth"
            value="+245% Avg."
          />
          <FloatingCard
            className="bottom-[18%] right-[2%]"
            icon={Zap}
            label="Deployment"
            value="48 Hours"
            delay={2}
            color="text-yellow-400"
          />
          <FloatingCard
            className="left-[-5%] top-[45%] scale-90 opacity-60"
            icon={Activity}
            label="Strategy"
            value="Data-Driven"
            delay={1}
            color="text-blue-400"
          />
          <FloatingCard
            className="right-0 top-[25%]"
            icon={Globe}
            label="Reach"
            value="Global Scale"
            delay={3}
            color="text-purple-400"
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center text-center md:mt-0">
          <RevealOnScroll>
            <div className="mb-8 inline-flex cursor-default items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                The New Standard of Growth
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h1 className="mb-8 select-none font-display text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-9xl">
              <span className="block">WE BUILD</span>
              <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
                LEGACIES
              </span>
              <span className="block text-brand-accent drop-shadow-[0_0_25px_rgba(163,230,53,0.4)]">
                THAT WIN.
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-2xl">
              We are the <span className="font-medium text-white">anti-agency</span>. No
              fluff. No vanity metrics. Just engineered{' '}
              <span className="border-b border-brand-accent/50 font-medium text-white">
                dominance
              </span>{' '}
              for brands ready to scale.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300} className="w-full">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                variant="primary"
                className="h-16 w-full px-12 text-lg sm:w-auto"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Start Your Evolution
              </Button>
              <Button
                variant="outline"
                className="h-16 w-full px-12 text-lg sm:w-auto"
                onClick={() =>
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex animate-bounce flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-brand-accent" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
    </section>
  );
};

export default Hero;
