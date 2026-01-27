import { 
  Rocket, 
  Search, 
  Palette, 
  BarChart3, 
  Video, 
  MessageSquare,
  Globe,
  Zap,
  Monitor,
  Megaphone
} from 'lucide-react';
import { NavLink, Stat, Service, CaseStudy, TeamMember, FAQItem, PricingTier } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { label: 'Projects Delivered', value: '950+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Combined Experience', value: '12+' },
];

export const ABOUT_STATS: Stat[] = [
  { value: '10+', label: 'Years Experience', description: 'Helping businesses grow through strategic marketing.' },
  { value: '250+', label: 'Projects Done', description: 'Delivered impactful marketing campaigns globally.' },
  { value: '98%', label: 'Client Satisfaction', description: 'Trusted by startups and growing brands.' },
  { value: '24/7', label: 'Support', description: 'Always there when you need us most.' },
];

export const SERVICES: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'We build brands people recognize, remember, and trust.',
    features: ['Visual Strategy', 'Brand Positioning', 'Identity Systems', 'Tone of Voice']
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description: 'Websites designed to guide users, tell a story, and convert.',
    features: ['High-Converting UX', 'Mobile-First Design', 'Speed Optimization', 'CMS Solutions']
  },
  {
    icon: BarChart3,
    title: 'SEO & Performance',
    description: 'Visibility built for long-term growth, not quick tricks.',
    features: ['Technical Audits', 'Content Architecture', 'Authority Building', 'Data Analytics']
  },
  {
    icon: Megaphone,
    title: 'Paid Media & Video',
    description: 'Campaigns that respect attention and deliver ROI.',
    features: ['Meta & LinkedIn Ads', 'Creative Production', 'Retargeting Funnels', 'ROI Tracking']
  },
  {
    icon: MessageSquare,
    title: 'Content & Social Strategy',
    description: 'Content that positions your brand as a reference, not noise.',
    features: ['Thought Leadership', 'Community Growth', 'Multi-Channel Strategy', 'Engagement']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: 'Aura Digital',
    category: 'Web Design & Experience',
    // Image showing laptop/screens for web design context
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', 
    summary: 'A complete digital overhaul for a leading tech consultancy firm.',
    challenge: 'Aura had a legacy site that failed to convert enterprise leads. They needed a high-performance web experience that screamed innovation.',
    solution: [
      'WebGL Interactions',
      'Next.js Headless Build',
      '3D Asset Integration'
    ],
    resultSummary: 'We built a fluid, immersive web experience that redefined their industry standard.',
    results: [
      { label: 'Conversion', value: '+140%' },
      { label: 'Time on Site', value: '3.5m' },
      { label: 'Site Speed', value: '99/100' }
    ],
    gallery: []
  },
  {
    id: 2,
    client: 'NexSys Analytics',
    category: 'SaaS Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    summary: 'A complete brand overhaul for a Series B data analytics platform.',
    challenge: 'NexSys had powerful tech but a boring website that failed to explain their value to Enterprise buyers.',
    solution: [
      '3D Visual Identity',
      'Next.js Development',
      'Interactive Product Demos'
    ],
    resultSummary: 'A website that looks as advanced as the software it sells.',
    results: [
      { label: 'Demo Requests', value: '+300%' },
      { label: 'Bounce Rate', value: '25%' },
      { label: 'Avg. Session', value: '4m' }
    ],
    gallery: []
  },
  {
    id: 3,
    client: 'Urbano Living',
    category: 'Real Estate Growth',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
    summary: 'Generating high-quality leads for a luxury real estate developer.',
    challenge: 'The client needed to sell out a new luxury condo development before construction finished.',
    solution: [
      'Hyper-Local SEO',
      'Google Ads (PPC)',
      'Virtual Tour Landing Pages'
    ],
    resultSummary: 'Sold out 85% of units within 6 months via digital channels.',
    results: [
      { label: 'Qualified Leads', value: '1,500+' },
      { label: 'Cost Per Lead', value: '$45' },
      { label: 'Sales Value', value: '$85M' }
    ]
  },
  {
    id: 4,
    client: 'FinFlow App',
    category: 'Fintech App Launch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    summary: 'Go-to-market strategy for a personal finance application.',
    challenge: 'Launching in a saturated market required a viral loop and aggressive user acquisition strategy.',
    solution: [
      'Influencer Marketing',
      'App Store Optimization (ASO)',
      'TikTok Ads'
    ],
    resultSummary: 'Top 10 Finance App on iOS App Store within 3 months.',
    results: [
      { label: 'Downloads', value: '500k+' },
      { label: 'Active Users', value: '65%' },
      { label: 'CPI', value: '$1.20' }
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Marwane Benmchich',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Creative',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop',
    socials: { linkedin: '#' }
  },
  {
    name: 'David Chen',
    role: 'Lead Strategist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop',
    socials: { linkedin: '#' }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do you start a project?",
    answer: "We begin with a discovery phase to understand your goals, followed by a strategic roadmap tailored to your specific needs."
  },
  {
    question: "Do you handle ongoing maintenance?",
    answer: "Yes, we offer monthly retainer packages to ensure your digital assets remain secure, updated, and performing optimally."
  },
  {
    question: "What makes you different from competitors?",
    answer: "We don't just deliver services; we partner with you for growth. Our data-driven approach ensures measurable ROI."
  },
  {
    question: "How long until I see results?",
    answer: "Timelines vary by service. SEO typically takes 3-6 months, while paid ads and social campaigns can show results within weeks."
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'Launch',
    price: '$2,900',
    period: '/mo',
    description: 'Essential growth tools for startups establishing their digital footprint.',
    features: [
      'Visual Identity System',
      'Basic SEO Audit & Setup',
      'Social Media Templates',
      'Monthly Performance Report',
      'Email Support'
    ],
    highlighted: false
  },
  {
    name: 'Scale',
    price: '$5,900',
    period: '/mo',
    description: 'Comprehensive strategies for brands ready to capture market share.',
    features: [
      'Advanced SEO & Content Strategy',
      'Paid Media Management (Ads)',
      'Conversion Rate Optimization',
      'Bi-weekly Strategy Calls',
      'Slack Access'
    ],
    highlighted: true
  },
  {
    name: 'Dominance',
    price: 'Custom',
    period: '',
    description: 'Bespoke digital transformation for market leaders.',
    features: [
      'Dedicated Growth Squad',
      'Full-Stack Development',
      'Omnichannel Campaigns',
      'Custom Data Dashboards',
      '24/7 Priority Support'
    ],
    highlighted: false
  }
];