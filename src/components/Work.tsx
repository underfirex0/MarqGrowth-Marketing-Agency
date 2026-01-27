import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudy } from '../types';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Work: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedStudy]);

  // Handle Scroll Check
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of view
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Handle Close
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedStudy(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section id="work" className="py-32 relative bg-dark-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-glow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <RevealOnScroll className="max-w-3xl">
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block text-glow-sm">Case Studies</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white">
              Our recent <br/><span className="text-gray-400">projects.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                !canScrollLeft 
                  ? 'opacity-30 cursor-not-allowed text-gray-500' 
                  : 'hover:bg-brand-accent hover:text-dark-900 hover:border-brand-accent text-white cursor-pointer box-glow-hover'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                !canScrollRight 
                  ? 'opacity-30 cursor-not-allowed text-gray-500' 
                  : 'hover:bg-brand-accent hover:text-dark-900 hover:border-brand-accent text-white cursor-pointer box-glow-hover'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </RevealOnScroll>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-6 px-6 md:mx-0 md:px-0"
        >
          {CASE_STUDIES.map((study, idx) => (
            <div 
              key={study.id} 
              className="min-w-[85vw] md:min-w-[650px] snap-center group relative cursor-pointer"
              onClick={() => setSelectedStudy(study)}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] bg-dark-800 border border-white/10 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl">
                {/* Image */}
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                         <span className="text-brand-accent font-bold tracking-wider text-xs uppercase mb-2 inline-block px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 backdrop-blur-md">{study.category}</span>
                         <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{study.client}</h3>
                      </div>
                      
                      {/* Floating Action Button */}
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:text-dark-900 group-hover:border-brand-accent transition-all duration-300">
                         <ArrowUpRight className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Padding for last item visibility */}
          <div className="min-w-[1px] md:min-w-[50px]"></div>
        </div>
        
        {/* Progress Indicator */}
        <div className="w-full h-1 bg-white/5 rounded-full mt-8 overflow-hidden">
           <div 
             className="h-full bg-brand-accent transition-all duration-300 shadow-[0_0_10px_rgba(204,255,0,0.5)]" 
             style={{ 
               width: scrollContainerRef.current 
                ? `${((scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth) / scrollContainerRef.current.scrollWidth) * 100}%` 
                : '20%' 
             }}
           ></div>
        </div>

      </div>

      {/* Full Screen Modal */}
      {selectedStudy && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
            onClick={handleClose}
          ></div>

          {/* Modal Content */}
          <div 
            className={`relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-dark-900 rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isClosing ? 'scale-95 translate-y-10' : 'scale-100 translate-y-0'}`}
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 hover:bg-white text-white hover:text-black backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/10 group"
            >
              <X size={24} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Header Image */}
            <div className="relative h-[35vh] shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
              <img 
                src={selectedStudy.image} 
                alt={selectedStudy.client} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Content Body - Editorial Style */}
            <div className="px-8 md:px-16 py-12 -mt-12 relative z-20">
              
              {/* Title Block */}
              <div className="mb-12">
                 <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-3 block">{selectedStudy.category}</span>
                 <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-2">{selectedStudy.client}</h2>
                 <div className="w-20 h-1 bg-brand-accent/50 mt-6 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.4)]"></div>
              </div>

              {/* Narrative Sections */}
              <div className="space-y-12">
                
                {/* Context */}
                <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                  <h3 className="text-white font-bold text-xl md:text-right font-display text-gray-500">Context</h3>
                  <div className="md:col-span-3">
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedStudy.challenge}</p>
                  </div>
                </div>

                {/* What We Did */}
                <div className="grid md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-12">
                  <h3 className="text-white font-bold text-xl md:text-right font-display text-gray-500">What we did</h3>
                  <div className="md:col-span-3">
                    <ul className="flex flex-col gap-3">
                      {selectedStudy.solution.map((item, i) => (
                        <li key={i} className="text-white text-lg font-medium flex items-center gap-3">
                           <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_5px_rgba(204,255,0,0.8)]"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Result */}
                <div className="grid md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-12">
                  <h3 className="text-white font-bold text-xl md:text-right font-display text-gray-500">Result</h3>
                  <div className="md:col-span-3">
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {selectedStudy.resultSummary || "Delivering measurable impact and sustainable growth through strategic execution."}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {selectedStudy.results.map((res, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-brand-accent/30 transition-colors">
                           <span className="block text-2xl md:text-3xl font-bold text-white mb-1">{res.value}</span>
                           <span className="text-xs text-gray-500 uppercase tracking-wider">{res.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-16 border-t border-white/5 flex flex-col items-center text-center">
                   <Button 
                      variant="primary" 
                      className="text-lg px-8 py-4 w-full md:w-auto"
                      onClick={() => {
                        handleClose();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Let’s do this for your business <ArrowRight className="ml-2 w-5 h-5" />
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

export default Work;