import React from 'react';
import VisitorCounter from './VisitorCounter';

export default function HeroBanner() {
  return (
    <section className="relative pt-6 sm:pt-8 pb-3 text-center space-y-3.5">
      
      {/* 1. Basmala Calligraphy in Elegant Top Pill (Matching Screenshot 130506) */}
      <div className="flex justify-center">
        <div className="relative inline-flex items-center justify-center px-10 sm:px-16 py-3 sm:py-3.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-800/70 shadow-[0_4px_25px_rgba(147,51,234,0.08),0_1px_4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)] backdrop-blur-md overflow-hidden">
          {/* Soft inner ambient glow behind text */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/70 via-purple-50/20 to-transparent dark:from-purple-900/40 dark:via-purple-950/20 dark:to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <p 
            className="relative font-amiri text-2xl sm:text-3xl md:text-4xl text-[#3b0764] dark:text-purple-100 font-normal select-none tracking-wide leading-relaxed"
            style={{ textShadow: '0 0 16px rgba(168, 85, 247, 0.22)' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </div>

      {/* 2. Main Title in Large Bold Typography */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 font-inter leading-tight select-none">
          Infection OSCE
        </h1>
      </div>

      {/* 3. Subtitle: د. عمر عبدالعاطي • Dr. Omar Abdel-Aty */}
      <div className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 select-none">
        <span>د. عمر عبدالعاطي</span>
        <span className="text-purple-400">•</span>
        <span className="font-inter text-purple-700 dark:text-purple-300">Dr. Omar Abdel-Aty</span>
      </div>

      {/* 4. Visitor Counter Badge Placed in Hero (Matching Screenshot 121803) */}
      <div className="pt-1">
        <VisitorCounter />
      </div>

    </section>
  );
}
