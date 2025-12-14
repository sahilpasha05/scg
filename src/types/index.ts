import { type ReactNode } from 'react';

export const PageView = {
  HOME: 'HOME',
  ABOUT: 'ABOUT',
  SERVICES: 'SERVICES',
  CORE_STRENGTHS: 'CORE_STRENGTHS',
  TEAM: 'TEAM',
  TESTIMONIALS: 'TESTIMONIALS',
  CONTACT: 'CONTACT',
  PRIVACY: 'PRIVACY'
} as const;

export type PageView = typeof PageView[keyof typeof PageView];

export interface NavItem {
  label: string;
  view: PageView;
}

export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  image: string;
  bio?:  string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  image?:  string;
}

export interface Testimonial {
  name: string;
  role: string;
  societyName: string;
  units?:  number;
  content: string;
}

export interface StrengthItem {
  title: string;
  description: string;
  icon: ReactNode;
}