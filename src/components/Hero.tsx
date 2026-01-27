import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight, TrendingUp, Zap, Globe, Activity, ChevronDown } from 'lucide-react';

/* ================= FLOATING CARD ================= */
const FloatingCard: React.FC<{ 
  className?: string; 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  delay?: number;
  color?: string;
}> = ({
  className = '',
  icon: Icon,
  label,
  value,
  delay = 0,
  color = 'text-brand-accent'
}) => (
  <div
    className={`hidden lg:flex absolute p-4 rounded-2xl bg-dark-900/40 backdrop-blur-md border border-white/10 items-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-float-slow z-20 hover:border-brand-accent/30 hover:bg-dark-900/60 transition-all duration-500 group pointer-events-auto cursor-default ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-500`}>
      <Icon size={24} />
    </div>
    <div>
      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
        {label}
      </div>
      <div className="text-white font-display font-bold text-lg leading-none">
        {value}
      </div>
    </div>
  </div>
);

/* ================= HERO ================= */
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24"
    >
      {/* BACKGROUND BASE */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* CYBER GRID */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[100vh] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)] opacity-20 animate-pulse-slow origin-bottom" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/80" />
      </div>

      {/* CENTRAL GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen pointer-events-none" />

      {/* NOISE */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-30 mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
        {/* FLOATING CARDS */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingCard
            className="top-[8%] left-[-6%]"
            icon={TrendingUp}
            label="Client Growth"
            value="+245% Avg."
            delay={0}
          />

          <FloatingCard
            className="top-[48%] left-[-10%] opacity-60 scale-90 blur-[1px]"
            icon={Activity}
            label="Strategy"
            value="Data-Driven"
            delay={1}
            color="text-blue-400"
          />

          <FloatingCard
            className="top-[22%] right-[-6%] opacity-80 scale-95"
            icon={Globe}
            label="Reach"
            value="Global Scale"
            delay={3}
            color="text-purple-400"
          />

          <FloatingCard
            className="bottom-[12%] right-[-4%]"
            icon={Zap}
            label="Deployment"
            value="48 Hours"
            delay={2}
            color="text-yellow-400"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mt-16 md:mt-0">
          {/* BADGE */}
          <RevealOnScroll>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-brand-accent/30 transition-all duration-300 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
              </span>
              <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">
                The New Standard of Growth
              </span>
            </div>
          </RevealOnScroll>

          {/* HEADLINE */}
          <RevealOnScroll delay={100}>
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-10 tracking-tighter select-none">
              <span className="block hover:scale-105 transition-transform duration-700 origin-bottom">
                WE BUILD
              </span>

              <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] hover:[-webkit-text-stroke:1px_rgba(204,255,0,0.8)] hover:text-white/5 transition-all duration-500">
                LEGACIES
              </span>

              <span className="block text-brand-accent drop-shadow-[0_0_25px_rgba(163,230,53,0.4)]">
                THAT WIN.
              </span>
            </h1>
          </RevealOnScroll>

          {/* SUBTEXT */}
          <RevealOnScroll delay={200}>
            <p className="text-lg md:text-2xl text-gray-400 mb-14 max-w-3xl leading-relaxed font-light">
              We are the <span className="text-white font-medium">anti-agency</span>. No fluff. No vanity metrics.
              Just engineered <span className="text-white font-medium border-b border-brand-accent/50 pb-0.5">dominance</span> for brands ready to scale.
            </p>
          </RevealOnScroll>

          {/* CTAs */}
          <RevealOnScroll delay={300} className="w-full">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="primary"
                className="h-16 px-12 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.6)] hover:-translate-y-1 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Evolution
              </Button>

              <Button
                variant="outline"
                className="h-16 px-12 text-lg w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-accent/50 hover:-translate-y-1 transition-all duration-300 group"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          <ChevronDown className="w-4 h-4 text-brand-accent" />
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
