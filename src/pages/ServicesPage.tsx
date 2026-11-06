import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { SERVICES, COMPANY_INFO } from '../data/ebcData';
import { 
  Briefcase, 
  Megaphone, 
  Globe, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Layout, 
  FileText,
  Sparkles,
  Database
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  initialServiceSlug?: string;
}

const serviceIcons: Record<string, React.ElementType> = {
  Briefcase,
  Megaphone,
  Globe,
  Cpu,
  BarChart3
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, initialServiceSlug }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceSlug || SERVICES[0].slug
  );

  useEffect(() => {
    if (initialServiceSlug) {
      setSelectedServiceId(initialServiceSlug);
      // scroll to the service container if needed
      const elem = document.getElementById(initialServiceSlug);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [initialServiceSlug]);

  const scrollToService = (slug: string) => {
    setSelectedServiceId(slug);
    const elem = document.getElementById(slug);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-16 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100/80 px-3 py-1 rounded-md border border-blue-200/60">
            <span>Core Capabilities & Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight max-w-4xl mx-auto leading-tight">
            Comprehensive Business & Digital Solutions
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed pt-2">
            EBC delivers targeted consulting services designed to solve core operational bottlenecks, establish authoritative online presence, and equip executive teams with intelligent insights.
          </p>

          {/* Quick Service Anchor Tabs */}
          <div className="pt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                onClick={() => scrollToService(s.slug)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedServiceId === s.slug
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DETAILED SERVICE SECTIONS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service, index) => {
            const IconComponent = serviceIcons[service.iconName] || Briefcase;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 border border-slate-200 rounded-2xl bg-white shadow-xs overflow-hidden"
              >
                {/* Service Header Strip */}
                <div className="bg-[#142B4A] text-white px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-300 font-semibold uppercase tracking-wider block">
                        Service Practice 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-4 py-2 bg-white text-[#142B4A] hover:bg-blue-50 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Consult on this Service
                  </button>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                  {/* Overview */}
                  <div className="max-w-4xl">
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                      Service Overview
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">
                      {service.fullOverview}
                    </p>
                  </div>

                  {/* 3-Column Detailed Matrix: Challenges, Solutions, Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {/* Challenges */}
                    <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-rose-800">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <h4 className="text-sm font-bold">Business Challenges Addressed</h4>
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                        {service.challengesAddressed.map((ch, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions Offered */}
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-blue-600" />
                        <h4 className="text-sm font-bold">Solutions Offered</h4>
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                        {service.solutionsOffered.map((sol, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Benefits */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-900">
                        <TrendingUp className="w-4 h-4 shrink-0 text-emerald-600" />
                        <h4 className="text-sm font-bold">Tangible Client Benefits</h4>
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                        {service.clientBenefits.map((ben, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Interactive Visual Blueprint Mockup for this Service */}
                  <div className="p-6 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Deliverable Architecture Preview
                      </span>
                      <span className="text-xs text-slate-500">
                        Tailored for SME & Corporate Operations
                      </span>
                    </div>

                    {/* Domain-specific visual components */}
                    {service.id === 'consultancy' && (
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-blue-600 block">Stage 1</span>
                          <span className="text-xs font-bold text-[#142B4A] block mt-1">Operational Audit</span>
                          <span className="text-[11px] text-slate-500 mt-1 block">Workflows & bottleneck map</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-blue-600 block">Stage 2</span>
                          <span className="text-xs font-bold text-[#142B4A] block mt-1">Strategy Blueprint</span>
                          <span className="text-[11px] text-slate-500 mt-1 block">Growth milestones & unit economics</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-blue-600 block">Stage 3</span>
                          <span className="text-xs font-bold text-[#142B4A] block mt-1">Process SOPs</span>
                          <span className="text-[11px] text-slate-500 mt-1 block">Standard operating protocols</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-blue-600 block">Stage 4</span>
                          <span className="text-xs font-bold text-[#142B4A] block mt-1">Governance Cadence</span>
                          <span className="text-[11px] text-slate-500 mt-1 block">Monthly executive reviews</span>
                        </div>
                      </div>
                    )}

                    {service.id === 'marketing' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-[#142B4A] block mb-1">Brand Authority Matrix</span>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Structured messaging positioning your brand as the preferred quality choice across local & overseas trade.
                          </p>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-[#142B4A] block mb-1">Content Calendar & Creatives</span>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Planned monthly publishing schedule with high-resolution visual designs and commercial call-to-actions.
                          </p>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <span className="text-xs font-bold text-[#142B4A] block mb-1">Inquiry Funnel Management</span>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Targeted outreach converting prospective viewers into direct WhatsApp and telephone inquiries.
                          </p>
                        </div>
                      </div>
                    )}

                    {service.id === 'webdev' && (
                      <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                          <span className="font-mono text-slate-400">https://yourbusiness.com</span>
                          <span className="text-emerald-600 font-semibold">100% Mobile Responsive · SEO Ready</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                          <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                            <span className="font-bold text-[#142B4A] block">Fast Architecture</span>
                            <span className="text-[11px] text-slate-500">Sub-second page speeds</span>
                          </div>
                          <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                            <span className="font-bold text-[#142B4A] block">Lead Capture</span>
                            <span className="text-[11px] text-slate-500">Integrated WhatsApp & Forms</span>
                          </div>
                          <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                            <span className="font-bold text-[#142B4A] block">Verified Schema</span>
                            <span className="text-[11px] text-slate-500">JSON-LD LocalBusiness SEO</span>
                          </div>
                          <div className="p-2.5 bg-slate-50 rounded border border-slate-100">
                            <span className="font-bold text-[#142B4A] block">Brand Copy</span>
                            <span className="text-[11px] text-slate-500">Persuasive corporate text</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {service.id === 'ai-solutions' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1">
                          <span className="text-xs font-bold text-blue-600">01. Triage Automation</span>
                          <span className="text-xs font-bold text-[#142B4A] block">Smart Customer Routing</span>
                          <p className="text-[11px] text-slate-600">
                            Pre-qualifying prospect requests and generating instant contextual reply drafts.
                          </p>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1">
                          <span className="text-xs font-bold text-blue-600">02. Doc Intelligence</span>
                          <span className="text-xs font-bold text-[#142B4A] block">RFQ & Invoice Parsing</span>
                          <p className="text-[11px] text-slate-600">
                            Extracting line items and supplier terms from dense PDFs in seconds.
                          </p>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1">
                          <span className="text-xs font-bold text-blue-600">03. Staff Augmentation</span>
                          <span className="text-xs font-bold text-[#142B4A] block">Internal Knowledge Library</span>
                          <p className="text-[11px] text-slate-600">
                            Giving employees instant answers to company SOPs and product catalogs.
                          </p>
                        </div>
                      </div>
                    )}

                    {service.id === 'analytics' && (
                      <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                          <div className="p-3 bg-blue-50/50 rounded border border-blue-100">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Gross Margins</span>
                            <span className="text-sm font-bold text-blue-700 block font-mono">By SKU Category</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded border border-slate-200">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Aging Ledgers</span>
                            <span className="text-sm font-bold text-slate-800 block font-mono">30 / 60 / 90 Days</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded border border-slate-200">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Lead Velocity</span>
                            <span className="text-sm font-bold text-slate-800 block font-mono">Channel Conversion</span>
                          </div>
                          <div className="p-3 bg-emerald-50/50 rounded border border-emerald-100">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Executive Summary</span>
                            <span className="text-sm font-bold text-emerald-700 block font-mono">Weekly Cockpit</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Strip */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      Advisory delivered across India, Dubai (UAE) and Saudi Arabia
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-16 bg-[#142B4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a Customized Combination of Services?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Many clients engage EBC for holistic growth combining strategy, web, and analytics. Let's design a program fitted to your exact operational scale.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white text-[#142B4A] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Contact EBC Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
