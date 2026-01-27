import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  id: number;
  client: string;
  category: string;
  image: string;
  summary: string;
  challenge: string; // Used for "Context"
  solution: string[]; // Used for "What we did"
  resultSummary?: string; // New field for narrative outcome
  results: {
    label: string;
    value: string;
  }[];
  gallery?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}