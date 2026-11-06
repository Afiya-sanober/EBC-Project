import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'large';
  onClick?: () => void;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header', onClick, className = '' }) => {
  if (variant === 'header') {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center gap-2.5 text-left group transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm ${className}`}
        aria-label="Elite Business Consultancy Home"
      >
        <span className="flex items-center justify-center w-9 h-9 rounded bg-[#142B4A] text-white font-bold text-base tracking-wider shadow-xs border border-blue-600/30">
          EBC
        </span>
        <span className="flex flex-col">
          <span className="text-[15px] font-bold text-[#142B4A] tracking-tight leading-tight">
            Elite Business Consultancy
          </span>
          <span className="text-[10px] uppercase font-semibold text-blue-600 tracking-wider">
            Strategy · Digital · AI
          </span>
        </span>
      </button>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-10 h-10 rounded bg-white text-[#142B4A] font-bold text-lg tracking-wider shadow-sm">
            EBC
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight leading-tight">
              Elite Business Consultancy
            </span>
            <span className="text-xs text-blue-300 font-medium tracking-wide">
              Empowering Businesses · Driving Growth
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 rounded-lg bg-[#142B4A] text-white font-bold text-xl flex items-center justify-center shadow-md border border-blue-500/20">
        EBC
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#142B4A] tracking-tight">
          Elite Business Consultancy
        </h2>
        <p className="text-xs font-medium text-slate-500">
          Empowering Businesses • Driving Growth • Creating Digital Impact
        </p>
      </div>
    </div>
  );
};
