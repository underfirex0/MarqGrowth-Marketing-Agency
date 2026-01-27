import React from 'react';
import {
  Target,
  Zap,
  LayoutDashboard,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-dark-900 py-32">
      {/* Animated Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] animate-blob rounded-full bg-brand-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] animate-blob rounded-full bg-blue-600/5 blur-[100px] animation-delay-2000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Column */}
          <div className="relative">
            <RevealOnScroll>
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-accent">
                Why Us?
              </span>

              <h2 className="font-display mb-8 text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
                Why smart <br />
                brands <br />
                choose{' '}
                <span className="relative inline-block text-brand-accent">
                  MarqGrowth.
                </span>
              </h2>

              <p className="mb-10 max-w-lg border-l-2 border-white/10 pl-6 text-lg leading-relaxed text-gray-400">
                We bridge the gap between &quot;creative agency&quot; and
                &quot;consultancy.&quot; No fluff, just engineered growth systems
                designed to scale your revenue.
              </p>

              <div className="flex flex-col gap-6">
                <div className="group flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-black shadow-[0_0_15px_rgba(204,255,0,0.5)] transition-transform group-hover:scale-110">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Risk-Free Guarantee
                    </h4>
                    <p className="text-sm text-gray-500">
                      We don&apos;t win unless you do.
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-accent/30 bg-dark-800 text-brand-accent transition-all group-hover:bg-brand-accent group-hover:text-black">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Rapid Deployment
                    </h4>
                    <p className="text-sm text-gray-500">
                      Strategies live in days, not months.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="relative min-h-[500px]">
            <div className="absolute left-0 top-0 w-[48%] space-y-6 animate-float-slow">
              <Card
                icon={Target}
                title="Outcome Obsessed"
                desc="We don't report on vanity metrics. We report on revenue, retention, and real growth."
              />
              <Card
                icon={LayoutDashboard}
                title="Radical Clarity"
                desc="No black boxes. You get 24/7 access to live dashboards showing exactly where every dollar goes."
                variant="dark"
              />
            </div>

            <div className="absolute right-0 top-12 w-[48%] space-y-6 animate-float-slower">
              <Card
                icon={Zap}
                title="Velocity Mode"
                desc="We move fast. Strategies launched in days, optimized in hours. We adapt as the market shifts."
                variant="dark"
              />
              <Card
                icon={HeartHandshake}
                title="Extension of You"
                desc="We’re not just a vendor. We work in your Slack, join your standups, and fight for your brand."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{
  icon: React.ElementType;
  title: string;
  desc: string;
  variant?: 'default' | 'dark';
}> = ({ icon: Icon, title, desc, variant = 'default' }) => (
  <div
    className={`group cursor-default rounded-3xl border p-6 backdrop-blur-md transition-all duration-500 hover:scale-[1.02]
      ${
        variant === 'default'
          ? 'border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]'
          : 'border-white/5 bg-dark-950/80 hover:border-white/20'
      }`}
  >
    <div className="mb-4 flex items-start justify-between">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors
          ${
            variant === 'default'
              ? 'bg-brand-accent text-black'
              : 'bg-white/5 text-brand-accent'
          }`}
      >
        <Icon size={24} />
      </div>
      <ArrowRight className="h-5 w-5 -rotate-45 text-gray-500 transition-all duration-300 group-hover:rotate-0 group-hover:text-brand-accent" />
    </div>

    <h3 className="mb-2 font-display text-xl font-bold text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
  </div>
);

export default WhyChooseUs;
