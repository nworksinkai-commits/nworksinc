
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string, category?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#0F172A]">
      
      {/* Background Image - Bright Nairobi Context */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1625760844485-2c80528e9688?auto=format&fit=crop&q=80&w=2000" 
            alt="Nairobi City Skyline Day" 
            className="w-full h-full object-cover animate-pulse-slow transition-transform duration-[10s] hover:scale-105"
            style={{ animationDuration: '20s' }}
        />
        {/* Gradient Overlay for text readability without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Yellow Stripes */}
      <div className="absolute -right-20 top-0 h-full w-[300px] hidden lg:flex flex-col justify-center gap-12 opacity-30 pointer-events-none rotate-12 z-0 mix-blend-overlay">
         <div className="w-full h-12 bg-yellow-400 blur-sm"></div>
         <div className="w-full h-8 bg-yellow-400 translate-x-12 blur-sm"></div>
         <div className="w-full h-4 bg-yellow-400 translate-x-24 blur-sm"></div>
      </div>
      
      {/* Sharp Yellow Accents */}
      <div className="absolute right-0 top-0 h-full w-[200px] hidden lg:flex flex-col justify-center gap-8 opacity-20 z-0 pointer-events-none rotate-12 translate-x-32">
         <div className="w-full h-2 bg-yellow-500"></div>
         <div className="w-full h-2 bg-yellow-500 translate-x-8"></div>
         <div className="w-full h-2 bg-yellow-500 translate-x-16"></div>
         <div className="w-full h-2 bg-yellow-500 translate-x-8"></div>
         <div className="w-full h-2 bg-yellow-500"></div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500 z-20 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-6 md:px-24 max-w-[1800px] mx-auto">
        <div className="animate-fade-in-up w-full md:max-w-4xl">
          <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#38BDF8] mb-6 drop-shadow-md flex items-center gap-3">
            <span className="w-8 h-[2px] bg-yellow-500 inline-block"></span>
            nworksinc
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 drop-shadow-xl leading-tight">
            Design. <span className="text-[#38BDF8]">Innovate.</span> <br/> Experience.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-slate-100 font-medium leading-relaxed mb-12 drop-shadow-md">
             Creating unique designs and experiences while ensuring financial growth in Kenya. <br/>
             From hardware supply to creative branding, we deliver excellence.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <button 
                onClick={(e) => onNavClick(e, 'products', 'All')}
                className="group relative px-10 py-4 bg-[#0284C7] text-white rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#0369A1] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
                <span className="relative z-10">Explore Services</span>
            </button>
            <button 
                onClick={(e) => onNavClick(e, 'products', 'Merchandise')}
                className="group relative px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
                <span className="relative z-10">Shop Merch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white drop-shadow-md z-30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
