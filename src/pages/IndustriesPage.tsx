import React, { useState } from 'react';
import { PageId } from '../types';
import { INDUSTRIES, COMPANY_INFO } from '../data/ebcData';
import { 
  ShoppingBag, 
  Factory, 
  Truck, 
  Utensils, 
  GraduationCap, 
  Building2, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: PageId, serviceSlug?: string) => void;
}

const industryIcons: Record<string, React.ElementType> = {
  ShoppingBag,
  Factory,
  Truck,
  Utensils,
  GraduationCap,
  Building2
};

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].id);

  return (
    <div className="space-y-0">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-16 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100/80 px-3 py-1 rounded-md border border-blue-200/60">
            <span>Industry-Specific Expertise</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight max-w-4xl mx-auto leading-tight">
            Industries We Serve
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed pt-2">
            Every sector operates under distinct commercial pressures, customer expectations, and operational dynamics. EBC applies proven consulting frameworks adapted to the specific nuances of your trade.
          </p>

          {/* Quick industry selector badges */}
          <div className="pt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="px-3.5 py-2 text-xs font-semibold bg-white text-slate-700 border border-slate-200 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all shadow-2xs"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DEDICATED INDUSTRY SECTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {INDUSTRIES.map((ind, index) => {
            const IconComponent = industryIcons[ind.iconName] || Building2;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-28 border border-slate-200 rounded-2xl bg-white shadow-xs overflow-hidden"
              >
                {/* Header Banner */}
                <div className="bg-[#142B4A] text-white px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-300 font-semibold uppercase tracking-wider block">
                        Sector Focus 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-4 py-2 bg-white text-[#142B4A] hover:bg-blue-50 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Consult for {ind.name.split(' ')[0]}
                  </button>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                  {/* Subtitle / Context */}
                  <div className="border-l-3 border-blue-600 pl-4 py-1">
                    <p className="text-sm font-semibold text-slate-700">
                      Target Environment: {ind.subtitle}
                    </p>
                  </div>

                  {/* 3-Column Detailed Sector Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Common Challenges */}
                    <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-amber-900">
                        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-700" />
                        <h3 className="text-sm font-bold">Common Sector Challenges</h3>
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                        {ind.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant EBC Services */}
                    <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-blue-600" />
                        <h3 className="text-sm font-bold">Relevant EBC Solutions</h3>
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                        {ind.ebcServices.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Potential Business Improvements */}
                    <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-900">
                        <TrendingUp className="w-4 h-4 shrink-0 text-emerald-600" />
                        <h3 className="text-sm font-bold">Potential Business Improvements</h3>
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                        {ind.improvements.map((imp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Advisory tailored for regional enterprises in India & GCC markets
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Request Industry Diagnostic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 bg-[#142B4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Don't See Your Specific Industry Listed?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our strategic and digital consulting principles apply across diverse commercial models. Contact our Senior Consultant to discuss your industry's specific challenges.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white text-[#142B4A] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Start an Industry Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
