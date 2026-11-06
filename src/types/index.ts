export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'industries' | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  challengesAddressed: string[];
  solutionsOffered: string[];
  clientBenefits: string[];
  iconName: string;
  highlights: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  clientType: string;
  shortDescription: string;
  deliverables: string[];
  solutionOverview: string;
  outcomeTakeaway: string;
  badge: 'Sample Showcase' | 'Demo Concept' | 'Client Blueprint';
  visualType: 'pos' | 'ecommerce' | 'tech' | 'beauty' | 'lms' | 'travel' | 'social' | 'web' | 'pitch' | 'analytics';
}

export interface IndustryItem {
  id: string;
  name: string;
  subtitle: string;
  challenges: string[];
  ebcServices: string[];
  improvements: string[];
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  country: string;
  serviceInterestedIn: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  companyName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  country?: string;
  serviceInterestedIn?: string;
  message?: string;
}
