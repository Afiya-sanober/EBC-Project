import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/ebcData';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Quick Tooltip */}
      {showTooltip && (
        <div className="relative bg-white border border-slate-200 shadow-xl rounded-xl p-3 max-w-xs text-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200 hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-[#142B4A] mb-0.5">Need Business Advice?</div>
          <p className="text-slate-600 pr-3">
            Chat directly with Senior Consultant M. Maqsood Husain on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Elite Business Consultancy on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="font-semibold text-xs tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
