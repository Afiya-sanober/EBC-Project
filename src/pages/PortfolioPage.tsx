import React, { useState } from 'react';
import { PageId, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, COMPANY_INFO } from '../data/ebcData';
import { 
  Filter, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Info,
  Smartphone,
  Store,
  UtensilsCrossed,
  Sparkle,
  GraduationCap,
  Compass,
  Share2,
  Monitor,
  Presentation,
  Cpu
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
}

const CATEGORIES = [
  'All Showcases',
  'Restaurant and Food Business',
  'Retail and Supermarket',
  'Mobile and Electronics',
  'Salon and Beauty',
  'Education',
  'Travel Services',
  'Social Media Marketing',
  'Website Design',
  'Business Presentations',
  'AI and Business Analytics'
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Showcases');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeCategory === 'All Showcases'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  // Category Icon Resolver for visual representation
  const renderVisualMockup = (item: PortfolioItem) => {
    switch (item.visualType) {
      case 'pos':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-amber-800 bg-white/80 px-2 py-0.5 rounded border border-amber-200">
                Digital Menu & Catering
              </span>
              <UtensilsCrossed className="w-4 h-4 text-amber-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-amber-200/80 space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                <span>Chef Specialties · Banquet Hall</span>
                <span className="text-emerald-600 font-mono">Direct Bookings</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-4/5" />
              </div>
              <span className="text-[10px] text-slate-500 block">WhatsApp Pre-filled Event Inquiry System</span>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-blue-900 bg-white/80 px-2 py-0.5 rounded border border-blue-200">
                Executive BI Model
              </span>
              <Cpu className="w-4 h-4 text-blue-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-blue-200 space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                <span>SKU Velocity & Gross Margin</span>
                <span className="text-blue-600 font-mono">Real-Time</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[10px] text-center">
                <div className="bg-blue-50 p-1 rounded font-mono text-blue-800">FMCG: +18%</div>
                <div className="bg-indigo-50 p-1 rounded font-mono text-indigo-800">Non-Food: +12%</div>
                <div className="bg-emerald-50 p-1 rounded font-mono text-emerald-800">Reorder: Auto</div>
              </div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-100 to-sky-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-sky-900 bg-white/80 px-2 py-0.5 rounded border border-sky-200">
                Consumer Electronics Catalog
              </span>
              <Smartphone className="w-4 h-4 text-sky-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-sky-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">Smart Device Comparator & EMI</span>
              <p className="text-[10px] text-slate-600">Omni-channel showroom stock verification + WhatsApp reservation</p>
            </div>
          </div>
        );

      case 'beauty':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-rose-900 bg-white/80 px-2 py-0.5 rounded border border-rose-200">
                Luxury Aesthetics Brand
              </span>
              <Sparkle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-rose-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">Bridal Portfolio & Tariff Suite</span>
              <p className="text-[10px] text-slate-600">High-end service positioning commanding premium treatment rates</p>
            </div>
          </div>
        );

      case 'lms':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-violet-50 to-purple-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-purple-900 bg-white/80 px-2 py-0.5 rounded border border-purple-200">
                Skill Academy Portal
              </span>
              <GraduationCap className="w-4 h-4 text-purple-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-purple-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">Curriculum Syllabus & Admissions</span>
              <p className="text-[10px] text-slate-600">Student counseling workflow with lead conversion tracking</p>
            </div>
          </div>
        );

      case 'travel':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-teal-50 to-emerald-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-teal-900 bg-white/80 px-2 py-0.5 rounded border border-teal-200">
                Bespoke Travel Showcase
              </span>
              <Compass className="w-4 h-4 text-teal-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-teal-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">Itinerary Builder & Group RFQ</span>
              <p className="text-[10px] text-slate-600">Direct flight & luxury package inquiry bypassing heavy OTA commissions</p>
            </div>
          </div>
        );

      case 'social':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-indigo-900 bg-white/80 px-2 py-0.5 rounded border border-indigo-200">
                Multi-Channel Social
              </span>
              <Share2 className="w-4 h-4 text-indigo-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-indigo-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">B2B Content Calendar & Creatives</span>
              <p className="text-[10px] text-slate-600">30+ authority-building visuals driving corporate procurement inquiries</p>
            </div>
          </div>
        );

      case 'web':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-cyan-50 to-blue-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-cyan-900 bg-white/80 px-2 py-0.5 rounded border border-cyan-200">
                Enterprise Corporate Web
              </span>
              <Monitor className="w-4 h-4 text-cyan-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-cyan-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">Industrial Equipment Catalog</span>
              <p className="text-[10px] text-slate-600">Fast responsive layout, specs PDF downloads, international RFQ form</p>
            </div>
          </div>
        );

      case 'pitch':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-50 to-yellow-100 flex flex-col justify-between p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-amber-900 bg-white/80 px-2 py-0.5 rounded border border-amber-200">
                Boardroom Pitch Architecture
              </span>
              <Presentation className="w-4 h-4 text-amber-700" />
            </div>
            <div className="bg-white/95 rounded-lg p-3 shadow-xs border border-amber-200 space-y-1">
              <span className="text-xs font-bold text-slate-800 block">Executive Deck & Unit Economics</span>
              <p className="text-[10px] text-slate-600">24-slide deck with financial models for investors and partners</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-slate-100 flex items-center justify-center p-4 border-b border-slate-200">
            <Layers className="w-8 h-8 text-slate-400" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-16 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100/80 px-3 py-1 rounded-md border border-blue-200/60">
            <span>Project Demonstrations & Concept Showcases</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight max-w-4xl mx-auto leading-tight">
            Our Portfolio & Deliverable Concepts
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed pt-2">
            Explore functional blueprints, visual design systems, and digital frameworks demonstrating how EBC structures solutions across different commercial domains.
          </p>

          {/* Compliance Notice: Clearly labelled sample projects */}
          <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-xs mt-4">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Transparency Note:</strong> All portfolio items below represent curated conceptual blueprints and sample frameworks illustrating EBC capabilities. Real client engagements are safeguarded under strict commercial non-disclosure agreements.
            </span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#142B4A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO CARDS GRID */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Mockup Preview */}
                  {renderVisualMockup(item)}

                  {/* Content Container */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-600 font-semibold uppercase tracking-wider text-[11px]">
                        {item.category}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-[10px] font-mono px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#142B4A] group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.shortDescription}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-700 block mb-1">Key Deliverables:</span>
                      <ul className="space-y-1 text-[11px] text-slate-500">
                        {item.deliverables.slice(0, 2).map((deliv, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold">·</span>
                            <span className="line-clamp-1">{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {item.clientType}
                  </span>
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECT DETAIL MODAL / DRAWER */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                <span>{selectedProject.category}</span>
                <span>·</span>
                <span className="text-slate-500">{selectedProject.badge}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#142B4A]">
                {selectedProject.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Target Sector: {selectedProject.clientType}
              </p>
            </div>

            {/* Solution Overview */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Solution Blueprint
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProject.solutionOverview}
              </p>
            </div>

            {/* Deliverables List */}
            <div>
              <h4 className="text-xs font-bold text-[#142B4A] uppercase tracking-wider mb-2">
                Delivered Framework Assets
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedProject.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaway */}
            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl space-y-1">
              <span className="text-xs font-bold text-blue-900 block">Strategic Value Takeaway</span>
              <p className="text-xs text-blue-800 leading-relaxed">
                {selectedProject.outcomeTakeaway}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Customizable for your enterprise scale
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('contact');
                  }}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  Discuss Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. PORTFOLIO BOTTOM CTA */}
      <section className="py-16 bg-[#142B4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a Project in Mind? Let's Discuss.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you are launching a new enterprise or modernizing existing operations, EBC provides the strategic blueprint and digital assets you need.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white text-[#142B4A] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Contact EBC Today
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
