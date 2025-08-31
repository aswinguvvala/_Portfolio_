"use client";

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Data Science themed gradient orbs - static for performance */}
      <div className="absolute -top-40 -left-80 w-96 h-96 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full mix-blend-multiply filter blur-xl" />
      
      <div className="absolute -top-40 -right-80 w-96 h-96 bg-gradient-to-l from-blue-500/8 to-indigo-500/8 rounded-full mix-blend-multiply filter blur-xl" />
      

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black-100/95 to-black-100" />
      
      {/* Neural network inspired grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Secondary grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.008)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default GradientBackground;