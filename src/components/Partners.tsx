import React, { useRef, useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';

const LOGOS = [
  'FoxHub', 'HexLab', 'Muzica', 'Radiyal', 'Kanba', 'Aven', 'Atica', 'Treva',
  'Circle', 'Niva', 'Zot', 'Viro', 'Luma', 'Opex'
];

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Quadruple the logos for seamless infinite scroll and buffer
  const DISPLAY_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  // Initialize scroll position
  useEffect(() => {
    if (scrollRef.current) {
        const oneSetWidth = scrollRef.current.scrollWidth / 4;
        scrollRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  // Animation Loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const animate = () => {
      if (!isDragging) {
        // Slow auto-scroll speed
        scrollContainer.scrollLeft += 0.5;
      }
      
      // Infinite Loop Logic
      const maxScroll = scrollContainer.scrollWidth;
      const oneSetWidth = maxScroll / 4;

      if (scrollContainer.scrollLeft >= oneSetWidth * 3) {
         scrollContainer.scrollLeft -= oneSetWidth;
      } else if (scrollContainer.scrollLeft <= 0) {
         scrollContainer.scrollLeft += oneSetWidth;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging]);

  // Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-12 bg-dark-950 border-y border-white/5 relative overflow-hidden">
      
      {/* --- BACKGROUND INTEGRATION (MATCHING HERO) --- */}
      {/* Pure Deep Background */}
      <div className="absolute inset-0 bg-dark-950"></div>
      
      {/* Noise Texture only - kept simple */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Simple White Title */}
        <RevealOnScroll className="flex justify-center mb-8">
          <p className="text-sm font-medium text-white tracking-[0.2em] uppercase text-center opacity-90">
            Trusted by industry leaders
          </p>
        </RevealOnScroll>
        
        <div 
          ref={scrollRef}
          className={`flex overflow-x-hidden select-none mask-fade-sides no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-20 py-4 items-center pr-20">
            {DISPLAY_LOGOS.map((logo, i) => (
               <span 
                  key={i} 
                  className="text-3xl font-display font-bold text-white/20 hover:text-white transition-colors duration-300 whitespace-nowrap"
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