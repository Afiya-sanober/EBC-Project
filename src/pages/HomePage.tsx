import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES, WHY_CHOOSE_US, OUR_APPROACH, INDUSTRIES } from '../data/ebcData';
import { 
  ArrowRight, 
  Briefcase, 
  Megaphone, 
  Globe, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare, 
  Layers, 
  Compass, 
  TrendingUp, 
  Shield, 
  ShoppingBag, 
  Factory, 
  Truck, 
  Utensils, 
  GraduationCap, 
  Building2 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, serviceSlug?: string) => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  Briefcase,
  Megaphone,
  Globe,
  Cpu,
  BarChart3
};

const industryIcons: Record<string, React.ElementType> = {
  ShoppingBag,
  Factory,
  Truck,
  Utensils,
  GraduationCap,
  Building2
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeStrategyPillar, setActiveStrategyPillar] = useState<'strategy' | 'digital' | 'ai' | 'analytics'>('strategy');

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-50/70 via-white to-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100 overflow-hidden">
        {/* Subtle geometric structural accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-slate-100/60 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Regional Authority Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100/80 px-3.5 py-1.5 rounded-md border border-blue-200/60">
                <span>Business Advisory</span>
                <span className="text-blue-400">·</span>
                <span>India · Dubai · Saudi Arabia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight leading-[1.15] text-balance">
                Empowering Businesses for a Smarter Digital Future.
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                From business consulting and digital marketing to AI-powered solutions and business analytics, EBC helps businesses build stronger foundations, improve efficiency and grow with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-sm font-semibold text-[#142B4A] bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>Talk to Our Consultant</span>
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500 block">Leadership</span>
                  <span className="text-sm font-bold text-[#142B4A] block">{COMPANY_INFO.consultant.name}</span>
                  <span className="text-xs text-slate-500">Senior Consultant</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500 block">Consulting Hub</span>
                  <span className="text-sm font-bold text-[#142B4A] block">Telangana, India</span>
                  <span className="text-xs text-slate-500">Ramaiah Bowli, Mahbubnagar</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500 block">Direct Chat</span>
                  <span className="text-sm font-bold text-emerald-700 block">Active Support</span>
                  <span className="text-xs text-slate-500">+91 91003 89060</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Business Strategy & Digital Transformation Interactive Visual */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
                {/* Visual Header */}
                <div className="bg-[#142B4A] px-5 py-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                    <span className="text-xs font-bold tracking-wider uppercase text-blue-200">
                      EBC Strategic Framework
                    </span>
                  </div>
                  <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-200 font-mono">
                    India · GCC
                  </span>
                </div>

                {/* Interactive Pillar Selector */}
                <div className="p-5 bg-slate-50/70 border-b border-slate-200">
                  <div className="grid grid-cols-4 gap-1 p-1 bg-slate-200/70 rounded-lg text-xs font-semibold">
                    <button
                      onClick={() => setActiveStrategyPillar('strategy')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeStrategyPillar === 'strategy'
                          ? 'bg-white text-blue-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Strategy
                    </button>
                    <button
                      onClick={() => setActiveStrategyPillar('digital')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeStrategyPillar === 'digital'
                          ? 'bg-white text-blue-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Digital
                    </button>
                    <button
                      onClick={() => setActiveStrategyPillar('ai')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeStrategyPillar === 'ai'
                          ? 'bg-white text-blue-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      AI Workflows
                    </button>
                    <button
                      onClick={() => setActiveStrategyPillar('analytics')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeStrategyPillar === 'analytics'
                          ? 'bg-white text-blue-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Analytics
                    </button>
                  </div>
                </div>

                {/* Pillar Content Showcase */}
                <div className="p-6 space-y-4">
                  {activeStrategyPillar === 'strategy' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#142B4A]">
                            Structured Business Planning & Growth
                          </h4>
                          <p className="text-xs text-slate-500">
                            Clear organizational roadmaps & operational efficiency
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Detailed diagnostic assessment of bottlenecks</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Process mapping & SOP development for teams</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Cross-market expansion guidance (India & GCC)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStrategyPillar === 'digital' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#142B4A]">
                            Digital Marketing & Web Presence
                          </h4>
                          <p className="text-xs text-slate-500">
                            High-conversion websites and focused brand campaigns
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Responsive, fast corporate web architectures</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Targeted social media planning & brand creatives</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Direct lead capture and WhatsApp enquiry setups</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStrategyPillar === 'ai' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#142B4A]">
                            AI-Assisted Workflow Automation
                          </h4>
                          <p className="text-xs text-slate-500">
                            Pragmatic AI tools eliminating administrative overhead
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Automated inquiry parsing & quotation drafting</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Document summarization & report synthesis</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Productivity workshops for non-technical staff</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStrategyPillar === 'analytics' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#142B4A]">
                            Executive Dashboards & KPI Tracking
                          </h4>
                          <p className="text-xs text-slate-500">
                            Data-driven visibility replacing guesswork
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Automated Excel/BI reporting models & scorecards</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Gross margin & working capital analysis</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Weekly executive briefing templates</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Micro action bar */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">
                      Tailored to SME & Enterprise Scale
                    </span>
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      Detailed Breakdown <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST AND INTRODUCTION SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Strategic Partnership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#142B4A] tracking-tight">
              Your Partner in Business Growth and Digital Transformation.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Every business has unique challenges and opportunities. At Elite Business Consultancy, we focus on understanding business requirements and providing practical solutions that support growth, improve digital visibility and enable smarter decision-making.
            </p>
          </div>

          {/* Customer Focus Strips */}
          <div className="mt-14 pt-10 border-t border-slate-100">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Partnering with Diverse Organizations Across Industry Verticals
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {COMPANY_INFO.targetCustomers.map((cust) => (
                <span
                  key={cust}
                  className="px-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:border-blue-300 transition-colors"
                >
                  {cust}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (5 Professional Service Cards) */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A]">
              Specialized Consulting Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              End-to-end consulting services tailored to strengthen business foundations, modernize digital assets, and deliver actionable operational clarity.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, idx) => {
              const IconComp = serviceIcons[s.iconName] || Briefcase;
              const isLarge = idx === 0 || idx === 1; // Asymmetric bento touch
              return (
                <div
                  key={s.id}
                  className={`bg-white rounded-xl border border-slate-200 p-7 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all flex flex-col justify-between group ${
                    idx === 0 ? 'lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#142B4A] group-hover:text-blue-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {s.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2">
                      <ul className="space-y-1.5">
                        {s.highlights.slice(0, 3).map((hl) => (
                          <li key={hl} className="text-xs text-slate-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate('services', s.slug)}
                      className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Quick Consultation Callout Card */}
            <div className="bg-gradient-to-br from-[#142B4A] to-[#1e3a63] text-white rounded-xl p-7 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-blue-300 font-bold">
                  Bespoke Engagements
                </span>
                <h3 className="text-xl font-bold text-white">
                  Have a Unique Business Requirement?
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  We formulate customized consulting frameworks combining cross-functional services for unique regional or industry challenges.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 px-4 bg-white text-[#142B4A] hover:bg-blue-50 rounded-lg text-xs font-bold transition-colors text-center cursor-pointer"
                >
                  Request Consultation Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE EBC? */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Our Distinctive Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#142B4A] tracking-tight">
                Why Businesses Choose EBC
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe consulting should be grounded in practical realities. We work side-by-side with business owners to build resilient operations, implement useful technologies, and eliminate unnecessary complexity.
              </p>

              <div className="pt-4">
                <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-blue-900">
                    Direct Advisory Leadership
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clients work directly with Senior Consultant M. Maqsood Husain, ensuring personalized attention, strategic continuity, and executive accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Points Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_CHOOSE_US.map((item, i) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-2 hover:border-blue-300 transition-colors"
                  >
                    <div className="text-xs font-bold text-blue-600 font-mono">
                      0{i + 1}.
                    </div>
                    <h3 className="text-sm font-bold text-[#142B4A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH (4-Step Process) */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A]">
              Our Four-Step Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              A structured, transparent consulting engagement model designed to deliver measurable progress at every phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUR_APPROACH.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-2xl font-extrabold text-blue-600 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#142B4A]">
                    {step.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-900/80 leading-relaxed">
                    {step.summary}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Tailored Industry Knowledge
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] mt-1">
                Industries We Serve
              </h2>
            </div>
            <button
              onClick={() => onNavigate('industries')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Industry Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => {
              const IconComponent = industryIcons[ind.iconName] || Building2;
              return (
                <div
                  key={ind.id}
                  className="p-6 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-blue-400/80 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#142B4A] group-hover:text-blue-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {ind.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/80">
                    <button
                      onClick={() => onNavigate('industries')}
                      className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Challenges & Solutions</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-[#142B4A] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Take Your Business Forward?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your business goals and explore the right solutions for your next stage of growth.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-sm font-bold text-[#142B4A] bg-white rounded-lg hover:bg-slate-100 transition-all shadow-md cursor-pointer"
            >
              Contact EBC Today
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Discussion</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            Consultation led by Senior Business Consultant M. Maqsood Husain · Mahbubnagar, Telangana
          </div>
        </div>
      </section>
    </div>
  );
};
