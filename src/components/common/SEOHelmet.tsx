import React, { useEffect } from 'react';
import { PageId } from '../../types';

interface SEOProps {
  page: PageId;
  title?: string;
  description?: string;
}

const PAGE_METADATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Elite Business Consultancy (EBC) — Business Strategy, Marketing, Websites & AI',
    description: 'Elite Business Consultancy empowers businesses with practical growth strategies, digital marketing, professional website development, AI solutions, and business analytics.'
  },
  about: {
    title: 'About Us — Elite Business Consultancy (EBC) | Leadership & Vision',
    description: 'Learn about Elite Business Consultancy, our mission, core values, and leadership by Senior Business Consultant M. Maqsood Husain serving India, UAE & Saudi Arabia.'
  },
  services: {
    title: 'Services — Elite Business Consultancy (EBC) | Strategy, Web, AI & Analytics',
    description: 'Explore our 5 core services: Business Consultancy, Digital Marketing, Website Design & Development, AI-Powered Business Solutions, and Business Analytics.'
  },
  portfolio: {
    title: 'Our Portfolio — Elite Business Consultancy (EBC) | Concept Showcases',
    description: 'Explore sample showcases and project concept blueprints across retail, manufacturing, restaurants, education, mobile tech, salon, travel, web, and AI analytics.'
  },
  industries: {
    title: 'Industries We Serve — Elite Business Consultancy (EBC) | Sector Expertise',
    description: 'How EBC delivers tailored strategic, digital, and analytical solutions for Retail, Manufacturing, Trading & Distribution, Food & Hospitality, Education, and Professional Services.'
  },
  contact: {
    title: 'Contact Us — Elite Business Consultancy (EBC) | Mahbubnagar, Telangana',
    description: 'Connect with Senior Business Consultant M. Maqsood Husain. Direct WhatsApp and phone inquiries for business consulting across India, Dubai, and Saudi Arabia.'
  }
};

export const SEOHelmet: React.FC<SEOProps> = ({ page, title, description }) => {
  useEffect(() => {
    const meta = PAGE_METADATA[page];
    const finalTitle = title || meta.title;
    const finalDesc = description || meta.description;

    document.title = finalTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDesc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', finalDesc);
    }
  }, [page, title, description]);

  return null;
};
