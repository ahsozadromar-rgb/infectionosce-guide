import React from 'react';

// Uniform medium-sized icons evenly spaced in non-overlapping alternating lanes
// All sizes use valid responsive Tailwind classes so they look consistent on all devices
const icons = [
  { name: 'brainstorm', src: '/assets/brainstorm.png', top: '4%', left: '5%', anim: 'animate-float-1', delay: '0s' },
  { name: 'virus-top', src: '/assets/virus.png', top: '11%', right: '6%', anim: 'animate-float-2', delay: '0.4s' },
  { name: 'heart', src: '/assets/heart.png', top: '20%', left: '8%', anim: 'animate-float-3', delay: '0.8s' },
  { name: 'coronavirus-top', src: '/assets/coronavirus.png', top: '28%', right: '10%', anim: 'animate-float-1', delay: '1.2s' },
  { name: 'medical-checkup', src: '/assets/medical-checkup.png', top: '37%', left: '4%', anim: 'animate-float-2', delay: '1.6s' },
  { name: 'lungs', src: '/assets/lungs.png', top: '46%', right: '5%', anim: 'animate-float-3', delay: '0.5s' },
  { name: 'virus-mid', src: '/assets/virus.png', top: '55%', left: '9%', anim: 'animate-float-1', delay: '2.1s' },
  { name: 'stethoscope', src: '/assets/stethoscope.png', top: '64%', right: '8%', anim: 'animate-float-2', delay: '0.9s' },
  { name: 'broken-bone', src: '/assets/broken-bone.png', top: '73%', left: '5%', anim: 'animate-float-3', delay: '1.4s' },
  { name: 'protection', src: '/assets/protection.png', top: '81%', right: '7%', anim: 'animate-float-1', delay: '0.7s' },
  { name: 'coronavirus-lower', src: '/assets/coronavirus.png', top: '89%', left: '10%', anim: 'animate-float-2', delay: '1.8s' },
  { name: 'heart-bottom', src: '/assets/heart.png', top: '94%', right: '12%', anim: 'animate-float-3', delay: '1.1s' },
];

export default function BackgroundIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden min-h-full" aria-hidden="true">
      
      {/* Signature Watermarks */}
      <img
        src="/assets/signature.png"
        alt=""
        className="pointer-events-none absolute top-4 right-4 w-24 sm:w-36 opacity-[0.07] dark:opacity-[0.13] select-none dark:invert"
        style={{ zIndex: 1 }}
      />
      <img
        src="/assets/signature.png"
        alt=""
        className="pointer-events-none absolute bottom-6 left-4 w-24 sm:w-36 opacity-[0.07] dark:opacity-[0.13] select-none dark:invert"
        style={{ zIndex: 1 }}
      />

      {/* Uniform Medium Floating Medical Icons - Non-Overlapping */}
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-[0.08] dark:opacity-[0.13] transition-opacity duration-300 ${icon.anim}`}
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            animationDelay: icon.delay,
            filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.4))'
          }}
        >
          <img
            src={icon.src}
            alt=""
            className="w-full h-full object-contain select-none"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
