import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  buttonText?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
  color: string;
}