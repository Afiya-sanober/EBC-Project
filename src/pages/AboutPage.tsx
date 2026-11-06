import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, VALUES, LEADERSHIP_PROFILE } from '../data/ebcData';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Globe2,
  CheckCircle2,
  UserCheck
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-16 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100/80 px-3 py-1 rounded-md border border-blue-200/60">
            <span>About Elite Business Consultancy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight max-w-4xl mx-auto leading-tight">
            Building Better Businesses Through Strategy, Technology and Innovation.
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed pt-2">
            Elite Business Consultancy supports businesses through business consulting, digital marketing, website solutions, AI-powered business solutions and business analytics.
          </p>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW & CORE PILLARS */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A]">
                Practical Business Acumen Meets Modern Digital Tools
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Elite Business Consultancy (EBC) was established to provide business owners, startup founders, and SME operators with structured, accessible, and high-impact advisory support.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Rather than offering disconnected services, EBC bridges the gap between commercial strategy and technological implementation. Whether an organization requires process streamlining, an authoritative corporate web presence, targeted social media marketing, or executive reporting dashboards, we deliver coherent, synchronized solutions.
              </p>

              <div className="pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-bold text-blue-600 block mb-1">Target Markets</span>
                    <span className="text-xs text-slate-700 leading-relaxed">
                      Advisory support for enterprises across India, Dubai (UAE), and Saudi Arabia.
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-bold text-blue-600 block mb-1">Client Centricity</span>
                    <span className="text-xs text-slate-700 leading-relaxed">
                      Tailored interventions adapted to retail, manufacturing, trading, and service firms.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="lg:col-span-6 space-y-6">
              {/* Mission Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-7 relative hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Our Purpose
                    </span>
                    <h3 className="text-xl font-bold text-[#142B4A]">
                      Our Mission
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To help businesses identify opportunities, overcome challenges and grow through practical strategies and innovative digital solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-7 relative hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#142B4A] text-white flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Long-Term Aspiration
                    </span>
                    <h3 className="text-xl font-bold text-[#142B4A]">
                      Our Vision
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To become a trusted business consultancy partner for organizations seeking sustainable growth and digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A]">
              Our Guiding Values
            </h2>
            <p className="text-sm text-slate-600">
              The fundamental standards that govern every client interaction, advisory recommendation, and project deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold text-blue-600 font-mono">
                    0{idx + 1}.
                  </div>
                  <h3 className="text-base font-bold text-[#142B4A]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Leadership & Advisory Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A]">
              Meet Our Senior Business Consultant
            </h2>
            <p className="text-sm text-slate-600">
              Professional business leadership delivering strategic direction and practical execution.
            </p>
          </div>

          {/* Profile Card */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Photo Slot Container */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300/80 p-2 shadow-inner flex flex-col items-center justify-center text-slate-500 overflow-hidden group">
                  {/* Executive Placeholder Icon & Badge */}
                  <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <UserCheck className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Executive Profile Photo Slot
                  </span>
                  <span className="text-[11px] text-slate-500 max-w-[180px] mt-1">
                    Space reserved for verified executive portrait
                  </span>
                  <div className="absolute bottom-2 bg-white/90 backdrop-blur-xs text-[10px] font-mono text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                    M. Maqsood Husain
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <div className="text-lg font-bold text-[#142B4A]">
                    {LEADERSHIP_PROFILE.name}
                  </div>
                  <div className="text-xs font-semibold text-blue-600">
                    {LEADERSHIP_PROFILE.designation}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center justify-center gap-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{LEADERSHIP_PROFILE.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Advisory Focus */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#142B4A]">
                    Strategic & Digital Advisory Practice
                  </h3>
                  <p className="text-xs font-medium text-blue-600 mt-0.5">
                    Guiding Enterprises Across Telangana, India, Dubai & Saudi Arabia
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {LEADERSHIP_PROFILE.summary}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-[#142B4A] uppercase tracking-wider block mb-2">
                    Core Advisory Principles:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {LEADERSHIP_PROFILE.advisoryPrinciples.map((prin) => (
                      <li key={prin} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{prin}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Connect Buttons */}
                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={LEADERSHIP_PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct: +91 91003 89060</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REGIONAL REACH & MARKETS */}
      <section className="py-16 bg-[#EFF6FF]/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-xs space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Market Presence</span>
              <h4 className="text-lg font-bold text-[#142B4A]">India (HQ & Hub)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Headquartered at Ramaiah Bowli, Mahbubnagar, Telangana. Serving emerging ventures, SMEs, and manufacturing facilities across regional growth corridors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-xs space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Advisory Market</span>
              <h4 className="text-lg font-bold text-[#142B4A]">Dubai, UAE</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consulting cross-border trade operators, service agencies, and retail businesses tapping into the GCC commercial ecosystem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-xs space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Advisory Market</span>
              <h4 className="text-lg font-bold text-[#142B4A]">Saudi Arabia</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supporting enterprises, distributors, and supply chains participating in regional industrial diversification and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-[#142B4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Discuss Your Business Strategy With EBC
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a diagnostic conversation to review your current operations and identify the right roadmap for sustainable growth.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Initiate Consultation Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
