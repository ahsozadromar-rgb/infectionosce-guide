import React from 'react';

export default function DoctorFixedAvatar() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 right-0 z-0 select-none overflow-hidden"
    >
      <div className="relative w-[210px] sm:w-[270px] md:w-[320px] lg:w-[360px] xl:w-[400px] 2xl:w-[430px] max-h-[60vh] sm:max-h-[65vh] flex items-end justify-end opacity-85 dark:opacity-80 transition-all">
        {/* Clean natural Doctor Image - Scaled harmoniously for widescreen/desktop */}
        <img
          src="/assets/doctor.png"
          alt="د. عمر عبدالعاطي"
          className="w-full h-auto max-h-[60vh] sm:max-h-[65vh] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          loading="eager"
        />
      </div>
    </div>
  );
}
