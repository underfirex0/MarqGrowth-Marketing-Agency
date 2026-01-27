import React, { useRef, useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';

const LOGOS = [
  'FoxHub',
  'HexLab',
  'Muzica',
  'Radiyal',
  'Kanba',
  'Aven',
  'Atica',
  'Treva',
  'Circle',
  'Niva',
  'Zot',
  'Viro',
  'Luma',
  'Opex'
];

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);

  const DISPLAY_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  useEffect(() => {
    if (scrollRef.current) {
      const oneSetWidth = scrollRef.current.scrollWidth / 4;
      scrollRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const animate = () => {
      if (!isDragging) {
        el.scrollLeft += 0.4;
      }

      const maxScroll = el.scrollWidth;
      const oneSetWidth = maxScroll / 4;

      if (el.scrollLeft >= oneSetWidth * 3) {
        el.scrollLeft -= oneSetWidth;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += oneSetWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-dark-950 py-12">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-8 flex justify-center">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-white/90">
            Trusted by industry leaders
          </p>
        </RevealOnScroll>

        <div
          ref={scrollRef}
          className={`no-scrollbar flex select-none overflow-x-hidden mask-fade-sides ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div className="flex items-center gap-20 py-4 pr-20">
            {DISPLAY_LOGOS.map((logo, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-3xl font-bold text-white/20 transition-colors duration-300 hover:text-white"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
