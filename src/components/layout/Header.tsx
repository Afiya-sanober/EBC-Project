import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../../types';
import { SERVICES, COMPANY_INFO } from '../../data/ebcData';
import { BrandLogo } from '../common/BrandLogo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Briefcase, 
  Megaphone, 
  Globe, 
  Cpu, 
  BarChart3, 
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, serviceSlug?: string) => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  Briefcase,
  Megaphone,
  Globe,
  Cpu,
  BarChart3
};

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (slug: string) => {
    onNavigate('services', slug);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Utility Bar with phone and target markets */}
      <div className="bg-[#142B4A] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="font-medium text-white">Target Markets:</span>
            <span>India</span>
            <span className="text-blue-400">·</span>
            <span>Dubai, UAE</span>
            <span className="text-blue-400">·</span>
            <span>Saudi Arabia</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="shrink-0">
            <BrandLogo variant="header" onClick={() => handleLinkClick('home')} />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleLinkClick('home')}
              className={`transition-colors hover:text-blue-600 cursor-pointer ${
                currentPage === 'home' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`transition-colors hover:text-blue-600 cursor-pointer ${
                currentPage === 'about' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 transition-colors hover:text-blue-600 cursor-pointer ${
                  currentPage === 'services' ? 'text-blue-600 font-bold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-3 w-80 rounded-xl bg-white shadow-xl border border-slate-200/90 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Consulting Practices
                    </span>
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {SERVICES.map((s) => {
                    const IconComponent = serviceIcons[s.iconName] || Briefcase;
                    return (
                      <button
                        key={s.id}
                        onClick={() => handleServiceSelect(s.slug)}
                        className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-blue-50/70 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {s.shortDescription}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('portfolio')}
              className={`transition-colors hover:text-blue-600 cursor-pointer ${
                currentPage === 'portfolio' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Our Portfolio
            </button>

            <button
              onClick={() => handleLinkClick('industries')}
              className={`transition-colors hover:text-blue-600 cursor-pointer ${
                currentPage === 'industries' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`transition-colors hover:text-blue-600 cursor-pointer ${
                currentPage === 'contact' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
            >
              Let's Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentPage === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentPage === 'about' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>
            
            {/* Services Mobile Section */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Our Services
                </span>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  All Services
                </button>
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-slate-200">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceSelect(s.slug)}
                    className="text-left py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('portfolio')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentPage === 'portfolio' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Our Portfolio
            </button>
            <button
              onClick={() => handleLinkClick('industries')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentPage === 'industries' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Industries We Serve
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentPage === 'contact' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>

            {/* Direct Contact CTAs in Mobile */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
              >
                Let's Talk — Start a Consultation
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 text-white rounded-lg font-semibold text-center hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+91 91003 89060)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
