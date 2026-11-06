import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, SERVICES } from '../../data/ebcData';
import { BrandLogo } from '../common/BrandLogo';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Globe2, 
  ArrowUpRight, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ShieldCheck 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, serviceSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, slug?: string) => {
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142B4A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand, Markets & Fast Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Identity & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-md pt-2">
              Elite Business Consultancy combines practical growth strategies, high-impact digital marketing, modern web solutions, AI-assisted workflows, and executive analytics to empower enterprises across India, Dubai, and Saudi Arabia.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block mb-2">
                Active Advisory Markets
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {COMPANY_INFO.targetMarkets.map((m) => (
                  <span
                    key={m.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-slate-200"
                  >
                    <Globe2 className="w-3 h-3 text-blue-400" />
                    <span>{m.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Our Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Showcase Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Industries We Serve</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Consulting Practices */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services', s.slug)}
                    className="hover:text-white transition-colors text-left text-slate-300 hover:underline cursor-pointer text-xs sm:text-sm line-clamp-1"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Verified Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-blue-300 font-medium block">Lead Consultant</span>
                <span className="text-white font-semibold">{COMPANY_INFO.consultant.name}</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  {COMPANY_INFO.location.display}
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600/90 text-white rounded text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: Social Media Placeholders & Trust Badges */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Local Business Registration · Telangana, India</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Social Connect (Placeholders):</span>
            <div className="flex items-center gap-2">
              <span
                title="LinkedIn (Configurable by EBC)"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-not-allowed"
              >
                <Linkedin className="w-4 h-4" />
              </span>
              <span
                title="X / Twitter (Configurable by EBC)"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-not-allowed"
              >
                <Twitter className="w-4 h-4" />
              </span>
              <span
                title="Instagram (Configurable by EBC)"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-not-allowed"
              >
                <Instagram className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Elite Business Consultancy. All Rights Reserved.
          </div>
          <div className="text-center md:text-right text-slate-400">
            Official communications are handled directly by Senior Business Consultant M. Maqsood Husain.
          </div>
        </div>
      </div>
    </footer>
  );
};
