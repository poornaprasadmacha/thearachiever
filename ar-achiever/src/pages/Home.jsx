import React from 'react';
import Philosophy from '../components/Philosophy';

export default function Homepage() {
  const services = [
    {
      id: "01",
      title: "Competitions",
      desc: "Showcase your design philosophy. Compete with global minds to test your creativity, spatial skills, and practical execution.",
      tag: "Design Briefs"
    },
    {
      id: "02",
      title: "Interactive Quizzes",
      desc: "Fast-paced, highly visual assessments designed to reinforce architectural history, structures, and material specifications.",
      tag: "Live Gamified"
    },
    {
      id: "03",
      title: "Archiverse",
      desc: "Step into the future. Explore the structural frameworks, virtual worlds, and universe creations built for digital spaces.",
      tag: "Virtual Reality"
    },
    {
      id: "04",
      title: "Premium Courses",
      desc: "Bridge the gap between theoretical academia and industry execution with tech-driven architectural modules.",
      tag: "Practical Learning"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faead9] text-[#2c2621] font-sans selection:bg-amber-100 selection:text-amber-900 antialiased overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Text Content - Symmetrical 7-column block */}
      <div className="w-full lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-8 text-left">
        <div className="flex items-center space-x-3 border-l-2 border-amber-600 pl-3">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8c7e72] font-semibold">  
          The Ar Achiever // Academy &amp; Labs
        </span>
        </div>
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-normal tracking-tight text-[#1a1512] leading-[1.15]">
          Bridging the gap between <br />
          <span className="font-light italic text-[#6b5f55]">Theory</span> and <span className="text-amber-600 font-medium">Execution.</span>
        </h1>
        <p className="text-[#5c5047] text-base sm:text-lg max-w-xl font-light leading-relaxed">
          An advanced pedagogical platform built for next-generation architects. Master spatial design mechanics, engage in global structural challenges, and build immersive realities within the digital frontier.
        </p>
      <div className="flex flex-wrap items-center gap-4 pt-4">
      <a 
        href="#services" 
        className="group inline-flex items-center justify-center px-7 py-4 bg-[#1a1512] text-[#faf6f0] font-medium uppercase tracking-widest text-[11px] transition-all duration-300 hover:bg-amber-600 hover:text-[#1a1512] shadow-sm tracking-wider"
      >
      Enter Ecosystem
      <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
      </a>
      <a 
        href="#explore" 
        className="inline-flex items-center justify-center px-7 py-4 border border-[#d6cbbe] hover:border-[#1a1512] text-[#4a3e35] hover:text-[#1a1512] font-medium uppercase tracking-widest text-[11px] transition-all duration-300 tracking-wider"
      >
      Launch Archiverse
      </a>
      </div>
    </div>         

          {/* Hero Right Content - Modular Philosophy Section Placement */}
          <div className="w-full lg:col-span-5 flex justify-center lg:justify-end overflow-hidden py-4">
            <Philosophy />
          </div>

        </div>
    </section>

      {/* SERVICES / BENTO GRID SECTION */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 space-y-12 lg:space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-[#e8dfd3] pb-6">
          <div className="space-y-2 text-left">
            <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-amber-700 font-semibold">Core Architecture Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1a1512] tracking-tight">What We Build & Deliver</h2>
          </div>
          <div className="lg:max-w-md text-left">
            <p className="text-[#5c5047] font-light text-sm sm:text-base leading-relaxed">
              From gamified assessment frameworks to high-tier creative design hackathons, explore how we redefine digital architecture learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#f4eee3]/50 p-8 lg:p-10 flex flex-col justify-between items-start text-left transition-all duration-300 hover:bg-[#f4eee3] hover:border border-transparent hover:border-[#e8dfd3]"
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-1 bg-[#faf6f0] text-amber-800 font-medium tracking-wider  border border-[#e8dfd3]">
                  {item.tag}
                </span>
                <span className="text-2xl font-serif font-light text-[#d6cbbe] group-hover:text-amber-600/40 transition-colors duration-300">
                  {item.id}
                </span>
              </div>
              
              <div className="mt-10 lg:mt-14 space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-serif text-[#1a1512] font-normal tracking-wide group-hover:text-amber-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#5c5047] text-sm sm:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 w-full border-t border-[#e8dfd3]/60 flex justify-end">
                <span className="text-[11px] uppercase tracking-widest text-amber-700 font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1 cursor-pointer">
                  Explore Hub <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}