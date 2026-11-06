import { ServiceItem, PortfolioItem, IndustryItem } from '../types';

export const COMPANY_INFO = {
  name: 'Elite Business Consultancy',
  shortName: 'EBC',
  tagline: 'Empowering Businesses • Driving Growth • Creating Digital Impact',
  consultant: {
    name: 'M. Maqsood Husain',
    title: 'Senior Business Consultant',
    bio: 'Guiding entrepreneurs, SMEs, and commercial enterprises through strategic business modeling, digital presence elevation, AI-assisted operations, and executive reporting.',
    location: 'Ramaiah Bowli, Mahbubnagar, Telangana, India',
    focusAreas: [
      'Strategic Business Planning & Operational Streamlining',
      'Digital Footprint & High-Impact Marketing',
      'Modern Corporate Web Architecture',
      'AI-Powered Workflow Automation',
      'Data Analytics & Executive Dashboards'
    ]
  },
  phone: '+91 91003 89060',
  phoneFormatted: '+91 91003 89060',
  phoneRaw: '919100389060',
  whatsappUrl: 'https://wa.me/919100389060',
  location: {
    address: 'Ramaiah Bowli',
    city: 'Mahbubnagar',
    state: 'Telangana',
    country: 'India',
    display: 'Ramaiah Bowli, Mahbubnagar, Telangana, India'
  },
  targetMarkets: [
    { name: 'India', region: 'Domestic & Regional Hubs' },
    { name: 'Dubai, UAE', region: 'GCC Commercial Center' },
    { name: 'Saudi Arabia', region: 'Regional Enterprise Hub' }
  ],
  targetCustomers: [
    'Startups & Emerging Ventures',
    'Small Businesses & Family Firms',
    'Medium-Sized Enterprises (SMEs)',
    'Manufacturing & Industrial Plants',
    'Trading & Distribution Networks',
    'Retailers & Multi-Outlet Chains',
    'Professional & Service-Based Practices'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultancy',
    slug: 'business-consultancy',
    title: 'Business Consultancy',
    shortDescription: 'Practical business guidance, growth planning, strategic support and operational improvement.',
    fullOverview: 'Elite Business Consultancy partners with business owners and executive leadership to diagnose organizational bottlenecks, design sustainable growth roadmaps, and refine operational workflows for long-term viability.',
    challengesAddressed: [
      'Stagnant business growth and unclear market positioning',
      'Inefficient operational procedures and workflow redundancies',
      'Lack of structured business planning and execution frameworks',
      'Difficulties scaling across new territories and competitive landscapes'
    ],
    solutionsOffered: [
      'Comprehensive business model review and diagnostic assessments',
      'Structured short-term and multi-year strategic growth roadmaps',
      'Process mapping, SOP development, and resource optimization',
      'Advisory guidance for market entry across India and Gulf markets'
    ],
    clientBenefits: [
      'Clear strategic vision aligned with measurable business objectives',
      'Elimination of process bottlenecks and administrative waste',
      'Informed managerial decision-making backed by structured counsel',
      'Enhanced operational resilience and scalable organizational practices'
    ],
    iconName: 'Briefcase',
    highlights: ['Strategic Growth Roadmaps', 'Operational Audits', 'Process Optimization', 'Market Expansion']
  },
  {
    id: 'marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Digital marketing strategies, social media management, promotional creatives, brand visibility and online engagement.',
    fullOverview: 'We design targeted digital marketing systems that establish authority, captivate high-intent audiences, and position your brand across digital touchpoints without relying on vanity metrics.',
    challengesAddressed: [
      'Low brand awareness and minimal qualified inbound inquiry flow',
      'Inconsistent social media messaging and unprofessional visual branding',
      'Ad spend wasted on poorly targeted or unstructured marketing campaigns',
      'Difficulty engaging prospective business buyers and repeat customers'
    ],
    solutionsOffered: [
      'Multi-channel digital marketing strategy and content architectures',
      'Professional social media calendar planning and creative direction',
      'High-impact promotional campaign creatives and brand positioning assets',
      'Audience segmentation, local SEO elevation, and targeted digital outreach'
    ],
    clientBenefits: [
      'Elevated brand perception and distinguished market authority',
      'Consistent, cohesive messaging across social and commercial channels',
      'Targeted reach connecting your solutions with active business prospects',
      'Enhanced customer recall and sustainable online brand engagement'
    ],
    iconName: 'Megaphone',
    highlights: ['Multi-Channel Strategy', 'Brand Identity Assets', 'Social Campaign Architecture', 'Audience Growth']
  },
  {
    id: 'webdev',
    slug: 'website-design-development',
    title: 'Website Design and Development',
    shortDescription: 'Professional business websites that establish credibility, communicate services and generate enquiries.',
    fullOverview: 'A modern corporate website is your primary international business storefront. EBC engineers lightning-fast, responsive web experiences tailored to present your service capabilities and convert visitors into qualified business leads.',
    challengesAddressed: [
      'Outdated, non-responsive websites that fail on mobile devices',
      'Slow page load times and confusing navigation structures',
      'Websites that lack clear service clarity and commercial inquiry forms',
      'Absence of technical SEO standards, meta tags, and structured schemas'
    ],
    solutionsOffered: [
      'Custom modern web architecture with responsive mobile-first layouts',
      'Clear, persuasive corporate copywriting and structured service offerings',
      'High-conversion direct WhatsApp and contact inquiry integrations',
      'Search engine optimization (SEO), metadata configuration, and fast hosting'
    ],
    clientBenefits: [
      'Impeccable first impression for domestic and international clients',
      'Seamless experience across desktop, tablet, and smartphone screens',
      'Clear communication of your core value proposition and service offerings',
      'Frictionless lead capture pathways directly connected to your team'
    ],
    iconName: 'Globe',
    highlights: ['Modern Responsive Code', 'Technical SEO & Metadata', 'Inquiry Generation Systems', 'Fast Performance']
  },
  {
    id: 'ai-solutions',
    slug: 'ai-powered-business-solutions',
    title: 'AI-Powered Business Solutions',
    shortDescription: 'AI-assisted business solutions, workflow improvement, automation opportunities and intelligent business support.',
    fullOverview: 'We demystify artificial intelligence for traditional enterprises and fast-moving ventures, introducing pragmatic AI tools and automated pipelines that free your team from tedious administrative overhead.',
    challengesAddressed: [
      'Repetitive manual tasks consuming disproportionate employee hours',
      'Slow response times to customer inquiries and sales inquiries',
      'Difficulty summarizing large internal documents or customer records',
      'Uncertainty about where and how to integrate practical AI into operations'
    ],
    solutionsOffered: [
      'Operational AI readiness audits and high-impact use-case identification',
      'Intelligent document processing and automated summarization workflows',
      'Custom customer inquiry response automation and smart routing',
      'Practical team training on productivity-enhancing generative AI tools'
    ],
    clientBenefits: [
      'Substantial reduction in manual document handling and administrative strain',
      'Rapid turnaround times for routine client and internal communications',
      'Empowered teams equipped with actionable, practical AI capabilities',
      'Modernized organizational culture primed for technological change'
    ],
    iconName: 'Cpu',
    highlights: ['Workflow Automation', 'Intelligent Inquiries', 'Productivity Enhancement', 'AI Readiness Audits']
  },
  {
    id: 'analytics',
    slug: 'business-analytics-reporting',
    title: 'Business Analytics and Reporting',
    shortDescription: 'Data-driven insights, business dashboards, performance reporting and analytical support to help businesses make informed decisions.',
    fullOverview: 'Transform disconnected spreadsheets and sales figures into clear, actionable visual intelligence. EBC builds custom executive dashboards and reporting frameworks that illuminate revenue drivers, margins, and operational performance.',
    challengesAddressed: [
      'Fragmented data scattered across disconnected spreadsheets and ledgers',
      'Lack of visibility into real-time key performance indicators (KPIs)',
      'Leadership spending days compiling monthly operational figures manually',
      'Uncertainty regarding which service lines or products generate true margins'
    ],
    solutionsOffered: [
      'Executive dashboard architecture and automated Excel/BI reporting models',
      'Core KPI definition, tracking mechanisms, and executive scorecards',
      'Sales performance, inventory turnover, and operational cost analytics',
      'Visual reporting templates designed for swift C-level interpretation'
    ],
    clientBenefits: [
      'Immediate visual clarity into operational health and commercial metrics',
      'Elimination of manual spreadsheet reconciliation and calculation errors',
      'Evidence-based decision making replaces gut instincts and guesswork',
      'Proactive identification of margin leaks and high-potential profit centers'
    ],
    iconName: 'BarChart3',
    highlights: ['Executive BI Dashboards', 'KPI Scorecard Design', 'Margin & Cost Analysis', 'Automated Reporting Models']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Business-Focused Approach',
    description: 'We prioritize tangible operational clarity, commercial viability, and business fundamentals over transient industry fads.'
  },
  {
    title: 'Practical & Customized Solutions',
    description: 'Every recommendation is designed around your specific team size, sector realities, and operational scale—no cookie-cutter templates.'
  },
  {
    title: 'Digital-First Thinking',
    description: 'We position your enterprise with modern digital infrastructure that communicates credibility to clients across India, Dubai, and Saudi Arabia.'
  },
  {
    title: 'Technology-Driven Support',
    description: 'From modern web architectures to AI-assisted workflows and business analytics, we bring contemporary capabilities to growing enterprises.'
  },
  {
    title: 'Focus on Measurable Improvements',
    description: 'We focus on clear milestones, operational velocity, process streamlining, and actionable visibility you can track with confidence.'
  },
  {
    title: 'Commitment to Understanding Client Requirements',
    description: 'We invest dedicated time up front to diagnose your operational bottlenecks, customer expectations, and commercial aspirations.'
  }
];

export const OUR_APPROACH = [
  {
    step: '01',
    name: 'Understand',
    summary: "Understand the client's business, goals and challenges.",
    detail: 'We initiate every partnership with structured diagnostic sessions to evaluate existing operational procedures, commercial objectives, digital presence, and specific bottlenecks.'
  },
  {
    step: '02',
    name: 'Strategize',
    summary: 'Identify suitable solutions and create a practical plan.',
    detail: 'We synthesize findings into a phased, realistic roadmap detailing recommended business interventions, technical solutions, timeline milestones, and resource requirements.'
  },
  {
    step: '03',
    name: 'Implement',
    summary: 'Deliver the agreed business and digital solutions.',
    detail: 'Working directly with your leadership, we execute the agreed initiatives—whether configuring digital marketing assets, developing web systems, or introducing analytics dashboards.'
  },
  {
    step: '04',
    name: 'Improve',
    summary: 'Review progress and identify opportunities for improvement.',
    detail: 'We review outcomes against operational checkpoints, refine implementations based on real-world feedback, and identify continuous enhancement opportunities.'
  }
];

export const INDUSTRIES = [
  {
    id: 'retail',
    name: 'Retail and Supermarkets',
    subtitle: 'High-turnover consumer retail, departmental outlets, and supermarket chains',
    challenges: [
      'Managing high SKU volumes across inventory and point-of-sale systems',
      'Attracting neighborhood foot traffic amid stiff online competition',
      'Tracking daily margins and slow-moving stock across departments',
      'Maintaining customer loyalty without expensive mass advertising'
    ],
    ebcServices: [
      'Retail inventory analytics and gross margin tracking dashboards',
      'Local store digital presence optimization and geo-targeted promotions',
      'Customer engagement workflows and WhatsApp notification setups',
      'Store layout and operational process streamlining consultations'
    ],
    improvements: [
      'Enhanced inventory turn rates and decreased deadstock write-offs',
      'Stronger local brand visibility and frequent repeat footfall',
      'Clear departmental profit-and-loss visibility for management'
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    subtitle: 'Fabrication units, industrial processors, OEM parts makers, and assembly facilities',
    challenges: [
      'Communicating technical capabilities to domestic and overseas enterprise buyers',
      'Downtime tracking, batch efficiency monitoring, and material wastage',
      'Outdated digital representation that fails to inspire buyer confidence',
      'Siloed shop-floor data preventing executive performance reviews'
    ],
    ebcServices: [
      'Corporate industrial web design with comprehensive equipment catalogs',
      'Plant KPI scorecards tracking production velocity, scrap, and machine utilization',
      'B2B brand positioning collateral for procurement committees and tenders',
      'Standardized operational SOP creation and supervisory workflows'
    ],
    improvements: [
      'Credible institutional presentation attracting qualified B2B RFQs',
      'Transparent weekly production and wastage reporting for executives',
      'Structured operational guidelines reducing training time for new personnel'
    ],
    iconName: 'Factory'
  },
  {
    id: 'trading',
    name: 'Trading and Distribution',
    subtitle: 'Wholesalers, regional distributors, import/export houses, and supply networks',
    challenges: [
      'Cash-flow lags and receivables aging across credit-based wholesale accounts',
      'Complex pricing tiers, volume rebates, and territory dispatch logistics',
      'Slow client communication regarding stock availability and price sheets',
      'Expanding dealer networks across cross-border Gulf and Indian corridors'
    ],
    ebcServices: [
      'Receivables aging and working capital analysis dashboards',
      'Digital B2B wholesale product catalogs with instant WhatsApp ordering links',
      'Dealer onboarding and communication management frameworks',
      'Strategic advisory for cross-market expansion into UAE and Saudi Arabia'
    ],
    improvements: [
      'Accelerated collections through automated aging alerts and structured terms',
      'Rapid catalog distribution reducing manual phone quote inquiries',
      'Scalable distribution channels with disciplined territory oversight'
    ],
    iconName: 'Truck'
  },
  {
    id: 'food',
    name: 'Food and Hospitality',
    subtitle: 'Restaurants, cafés, cloud kitchens, catering firms, and dining venues',
    challenges: [
      'Heavy reliance on third-party aggregators charging excessive commissions',
      'Managing fluctuating food costs, recipe yields, and perishable waste',
      'Inconsistent visual presentation across social media and review channels',
      'Capturing customer data for recurring banquet and catering bookings'
    ],
    ebcServices: [
      'Direct digital menus, table reservation, and event catering web portals',
      'High-impact social media promotional creative design and food photography strategy',
      'Recipe cost-margin modeling and daily sales reporting templates',
      'Direct WhatsApp order and event inquiry channels bypassing high commissions'
    ],
    improvements: [
      'Increased direct customer bookings and higher banquet enquiry conversions',
      'Disciplined food-cost monitoring protecting kitchen gross margins',
      'Distinctive visual brand identity across digital discovery channels'
    ],
    iconName: 'Utensils'
  },
  {
    id: 'education',
    name: 'Education and Training',
    subtitle: 'Private academies, vocational institutes, coaching centers, and skill bootcamps',
    challenges: [
      'High student acquisition costs during seasonal enrollment cycles',
      'Demonstrating curriculum rigor and instructor credibility online',
      'Administrative burden managing student admissions and fee reconciliation',
      'Student lead leakages between initial inquiry and finalized enrollment'
    ],
    ebcServices: [
      'Admissions-focused academic web portals with course syllabus downloads',
      'Seasonal digital marketing campaigns tailored to student and parent segments',
      'Inquiry pipeline tracking dashboards from lead capture to registration',
      'AI-assisted inquiry chatbots and automated WhatsApp course info packs'
    ],
    improvements: [
      'Higher lead-to-enrollment conversion through rapid response workflows',
      'Professional institution positioning inspiring confidence in prospective learners',
      'Streamlined admissions tracking eliminating lost prospect follow-ups'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'professional',
    name: 'Professional Services',
    subtitle: 'Legal advisors, audit firms, architects, engineering consultancies, and clinics',
    challenges: [
      'Differentiating specialized advisory services from low-cost competitors',
      'Reliance on word-of-mouth with no scalable inbound referral mechanism',
      'Communicating technical value without overwhelming non-specialist clients',
      'Tracking billable utilization and practice profitability'
    ],
    ebcServices: [
      'Executive corporate websites highlighting practice areas, case briefs, and credentials',
      'Thought leadership content planning and professional brand positioning',
      'Client intake forms, consultation booking workflows, and WhatsApp bridges',
      'Practice management analytics tracking project profitability and billable hours'
    ],
    improvements: [
      'Premium market positioning commanding sustainable advisory fees',
      'Continuous inbound inquiries from qualified corporate decision-makers',
      'Clear visibility into practice profitability across diverse engagement types'
    ],
    iconName: 'Building2'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Gourmet Bistro & Catering Web Portal',
    category: 'Restaurant and Food Business',
    categorySlug: 'restaurant',
    clientType: 'Multi-Cuisine Dining & Corporate Catering',
    shortDescription: 'Modern digital menu, corporate catering enquiry system, and direct WhatsApp reservation pipeline.',
    deliverables: [
      'High-resolution digital menu architecture with seasonal filters',
      'Corporate banquet and event catering proposal inquiry form',
      'Direct WhatsApp booking trigger with date/guest count pre-formatting',
      'Recipe cost modeling spreadsheet template for back-of-house staff'
    ],
    solutionOverview: 'Engineered an intuitive mobile-first web presence showcasing chef specialties, banquet hall floor plans, and dining ambiance, directing high-ticket catering requests straight to the manager.',
    outcomeTakeaway: 'Demonstrates how hospitality operators can capture direct event inquiries without surrendering 25%+ commissions to aggregators.',
    badge: 'Sample Showcase',
    visualType: 'pos'
  },
  {
    id: 'port-2',
    title: 'Hypermarket Departmental Stock & Margin Dashboard',
    category: 'Retail and Supermarket',
    categorySlug: 'retail',
    clientType: 'Independent Supermarket & Departmental Store',
    shortDescription: 'Comprehensive weekly sales, SKU velocity, and departmental gross profit margin analytical dashboard.',
    deliverables: [
      'Excel/PowerBI automated executive reporting model',
      'Departmental turnover analysis (FMCG, Fresh, Non-Food, Staples)',
      'Fast vs slow-moving stock matrix with reorder point indicators',
      'Visual summary scorecard for weekly store manager meetings'
    ],
    solutionOverview: 'Designed an executive reporting system that aggregates daily POS ledger exports into an executive cockpit, highlighting margin leakages and supplier rebate fulfillment.',
    outcomeTakeaway: 'Illustrates how independent supermarkets can gain enterprise-level inventory visibility with zero costly ERP subscriptions.',
    badge: 'Sample Showcase',
    visualType: 'analytics'
  },
  {
    id: 'port-3',
    title: 'Smart Gadget & Mobile Tech Showroom Concept',
    category: 'Mobile and Electronics',
    categorySlug: 'mobile',
    clientType: 'Multi-Brand Consumer Electronics Retailer',
    shortDescription: 'Device catalog, warranty registration verification, and EMI inquiry system for high-value electronics.',
    deliverables: [
      'Interactive device specification comparator and live pricing board',
      'Customer trade-in valuation estimator and inquiry generator',
      'WhatsApp direct sales consultation bridge for premium smartphone lines',
      'Local promotional banner suite for seasonal festive campaigns'
    ],
    solutionOverview: 'Created a sleek, tech-forward digital showroom allowing customers to compare smartphone specs, verify current store stock, and initiate installment financing queries via WhatsApp.',
    outcomeTakeaway: 'Highlights how electronics retailers can combine digital discovery with physical showroom footfall.',
    badge: 'Sample Showcase',
    visualType: 'tech'
  },
  {
    id: 'port-4',
    title: 'Luxury Aesthetics & Wellness Salon Identity',
    category: 'Salon and Beauty',
    categorySlug: 'salon',
    clientType: 'Premium Hair, Skin & Bridal Salon',
    shortDescription: 'Elegant service tariff catalog, bridal package brochure, and appointment booking workflow.',
    deliverables: [
      'Refined visual brand identity assets and service price card layout',
      'Bridal makeup portfolio presentation and package builder',
      'Direct WhatsApp appointment slot scheduler',
      'Seasonal package promotional creatives for social media'
    ],
    solutionOverview: 'Curated a serene, high-end digital presence with gold and soft navy accents, featuring treatment descriptions, stylist portfolios, and frictionless bridal package inquiries.',
    outcomeTakeaway: 'Shows how wellness and beauty brands can elevate their service perception to charge premium treatment rates.',
    badge: 'Sample Showcase',
    visualType: 'beauty'
  },
  {
    id: 'port-5',
    title: 'Skill Development & Tech Academy Portal',
    category: 'Education',
    categorySlug: 'education',
    clientType: 'Professional IT Certification & Career Institute',
    shortDescription: 'Course syllabus repository, batch schedule viewer, and student admissions enrollment funnel.',
    deliverables: [
      'Modular course catalog with curriculum breakdown and downloadable syllabi',
      'Student counseling booking workflow with automated inquiry routing',
      'Faculty credential showcases and alumni project spotlight gallery',
      'Lead management spreadsheet with stage-by-stage status tracking'
    ],
    solutionOverview: 'Built a structured academic portal focusing on course transparency, placement track records, and rapid student counseling coordination.',
    outcomeTakeaway: 'Proves how educational institutions can drive qualified student registrations through credibility and clear curriculum information.',
    badge: 'Sample Showcase',
    visualType: 'lms'
  },
  {
    id: 'port-6',
    title: 'Bespoke Corporate & Holiday Travel Itinerary Platform',
    category: 'Travel Services',
    categorySlug: 'travel',
    clientType: 'Inbound / Outbound Tour & Corporate Travel Agency',
    shortDescription: 'Custom destination package showcases, visa assistance information, and group quote generator.',
    deliverables: [
      'Destination package cards with day-by-day itineraries and inclusions',
      'Corporate travel RFP enquiry form for group flight and hotel bookings',
      'Instant WhatsApp trip planner consultation trigger',
      'Seasonal holiday promotional flyers for email and social broadcasting'
    ],
    solutionOverview: 'Engineered an inspiring travel showcase with clear pricing tiers, itinerary highlights, and direct inquiry pathways for families and corporate delegations.',
    outcomeTakeaway: 'Demonstrates how boutique travel operators can compete with massive travel aggregators through tailored service packages.',
    badge: 'Sample Showcase',
    visualType: 'travel'
  },
  {
    id: 'port-7',
    title: 'Integrated Multi-Channel Social Growth Campaign',
    category: 'Social Media Marketing',
    categorySlug: 'social',
    clientType: 'B2B Equipment & Office Furnishing Distributor',
    shortDescription: 'Strategic content calendar, thought leadership creatives, and targeted B2B lead generation campaign.',
    deliverables: [
      '90-day multi-channel social media publication calendar',
      '30+ professionally branded carousel and static visual assets',
      'Product application spotlight posts targeting corporate facility managers',
      'Engagement tracking and lead attribution review template'
    ],
    solutionOverview: 'Developed an authority-building social marketing campaign addressing ergonomic health, workplace productivity, and volume procurement incentives.',
    outcomeTakeaway: 'Shows the power of informative, value-first content in driving corporate procurement inquiries rather than generic promotional spam.',
    badge: 'Sample Showcase',
    visualType: 'social'
  },
  {
    id: 'port-8',
    title: 'Industrial Equipment Manufacturer Corporate Website',
    category: 'Website Design',
    categorySlug: 'web',
    clientType: 'Heavy Machinery & Fabrication Engineering Plant',
    shortDescription: 'Modern corporate web presence with interactive machinery catalog and international RFQ system.',
    deliverables: [
      'Custom responsive corporate website with sub-second page performance',
      'Machinery technical specifications sheet with downloadable PDF blueprints',
      'International RFQ submission portal with country code detection',
      'Technical SEO audit with verified schema markup and meta tags'
    ],
    solutionOverview: 'Designed an authoritative industrial corporate website built to instill trust with engineering consultants, procurement officers, and international distributors in the GCC and India.',
    outcomeTakeaway: 'Exemplifies enterprise web design standards for heavy industry, ensuring high credibility and global reach.',
    badge: 'Sample Showcase',
    visualType: 'web'
  },
  {
    id: 'port-9',
    title: 'Commercial Investor Pitch Deck & Business Plan',
    category: 'Business Presentations',
    categorySlug: 'pitch',
    clientType: 'FinTech Startup & B2B Logistics Enterprise',
    shortDescription: 'High-impact executive slide deck, financial unit economics model, and growth narrative.',
    deliverables: [
      '24-slide professional executive presentation deck in clean corporate styling',
      'Visualized financial unit economics and 3-year cash flow projections',
      'Competitive landscape matrix and market penetration strategy slides',
      'Executive one-page investment memorandum summary'
    ],
    solutionOverview: 'Synthesized complex business operations, addressable market data, and proprietary distribution advantages into an articulate, executive-ready presentation.',
    outcomeTakeaway: 'Reveals how crisp visual storytelling and solid financial modeling elevate credibility in high-stakes boardroom meetings.',
    badge: 'Sample Showcase',
    visualType: 'pitch'
  },
  {
    id: 'port-10',
    title: 'AI Document Summarization & Customer Response Pipeline',
    category: 'AI and Business Analytics',
    categorySlug: 'ai',
    clientType: 'Regional Distribution & Trading Firm',
    shortDescription: 'Automated inquiry parsing, order summary generation, and KPI tracking prototype.',
    deliverables: [
      'Automated email/WhatsApp inquiry categorization workflow',
      'Supplier price sheet parsing prototype extracting line-item deltas',
      'Daily executive briefing dashboard summarizing key commercial activities',
      'Employee prompt library for routine administrative documentation'
    ],
    solutionOverview: 'Configured a pragmatic AI-assisted pipeline that ingests wholesale customer RFQs, extracts item quantities, verifies price lists, and drafts ready-to-send quotes for sales reps.',
    outcomeTakeaway: 'Demonstrates tangible AI adoption that saves 15+ administrative hours per week without requiring complex software engineering.',
    badge: 'Sample Showcase',
    visualType: 'analytics'
  }
];

export const VALUES = [
  {
    title: 'Integrity',
    description: 'We believe in candid, honest business counsel. We never over-promise or recommend unnecessary technological overhead.'
  },
  {
    title: 'Professionalism',
    description: 'Every interaction, document, design asset, and analytical report adheres to international corporate standards.'
  },
  {
    title: 'Innovation',
    description: 'We continuously identify pragmatic modern tools—from AI-assisted workflows to responsive web standards—that give our clients an edge.'
  },
  {
    title: 'Client-Focused Solutions',
    description: 'We reject one-size-fits-all playbooks. Every intervention is engineered around your specific sector and operational realities.'
  },
  {
    title: 'Continuous Improvement',
    description: 'Sustainable business growth is an ongoing cycle of measurement, refinement, and execution. We stay committed to iterative progress.'
  }
];

export const LEADERSHIP_PROFILE = {
  name: 'M. Maqsood Husain',
  designation: 'Senior Business Consultant',
  location: 'Mahbubnagar, Telangana, India',
  phone: '+91 91003 89060',
  whatsappUrl: 'https://wa.me/919100389060',
  summary: 'M. Maqsood Husain leads Elite Business Consultancy as Senior Business Consultant, partnering with enterprises, retail operators, manufacturers, and growing startups. His consulting practice bridges foundational business strategy with modern digital execution, equipping organizations across India, Dubai, and Saudi Arabia with structured systems, impactful digital presence, and analytical clarity.',
  advisoryPrinciples: [
    'Diagnosis Before Prescription: Understanding ground-level operational challenges before proposing solutions',
    'Simplicity in Execution: Implementing practical workflows that teams can actually sustain',
    'Digital Enablement: Leveraging modern web and AI tools to augment human potential',
    'Financial Realism: Aligning every growth initiative with cash flow and margin discipline'
  ]
};
