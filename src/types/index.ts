// ── Global type definitions ─────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;          // Unsplash URL
  mainImage: string;          // section image URL
  subServices: SubService[];
  craftingTitle: string;
  craftingBody: string;
  metaDescription: string;
  icon: string;               // lucide icon name
}

export interface SubService {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
