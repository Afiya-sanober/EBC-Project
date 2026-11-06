import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { SEOHelmet } from './components/common/SEOHelmet';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetServiceSlug, setTargetServiceSlug] = useState<string | undefined>(undefined);

  // Sync with browser URL / hash for clean navigation & bookmarking
  useEffect(() => {
    const syncFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page') as PageId | null;
      const serviceParam = urlParams.get('service');
      const hash = window.location.hash.replace('#', '') as PageId | '';

      const validPages: PageId[] = ['home', 'about', 'services', 'portfolio', 'industries', 'contact'];

      if (pageParam && validPages.includes(pageParam)) {
        setCurrentPage(pageParam);
        if (serviceParam) {
          setTargetServiceSlug(serviceParam);
        }
      } else if (hash && validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const handleNavigate = (page: PageId, serviceSlug?: string) => {
    setCurrentPage(page);
    setTargetServiceSlug(serviceSlug);

    // Update query string without reloading
    const newUrl = new URL(window.location.href);
    if (page === 'home') {
      newUrl.searchParams.delete('page');
      newUrl.searchParams.delete('service');
    } else {
      newUrl.searchParams.set('page', page);
      if (serviceSlug) {
        newUrl.searchParams.set('service', serviceSlug);
      } else {
        newUrl.searchParams.delete('service');
      }
    }
    window.history.pushState({}, '', newUrl.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
      {/* SEO Document Title & Meta Updater */}
      <SEOHelmet page={currentPage} />

      {/* Header with Navigation and Dropdown */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} initialServiceSlug={targetServiceSlug} />
        )}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
        {currentPage === 'industries' && <IndustriesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Direct WhatsApp Consultation Trigger */}
      <WhatsAppFloating />
    </div>
  );
}
