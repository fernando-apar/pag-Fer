import React from 'react';
import { Project, NavItem, SocialLink, Skill } from './types';
import { Github, Linkedin, Mail, Phone, Code2, Database, Layout, Smartphone, Instagram } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 95, icon: <Code2 className="w-5 h-5" /> },
  { name: 'ReactJS / Next.js', level: 90, icon: <Layout className="w-5 h-5" /> },
  { name: 'TypeScript', level: 85, icon: <Code2 className="w-5 h-5" /> },
  { name: 'Tailwind CSS', level: 95, icon: <Layout className="w-5 h-5" /> },
  { name: 'Vue.js', level: 75, icon: <Code2 className="w-5 h-5" /> },
  { name: 'Node.js', level: 70, icon: <Database className="w-5 h-5" /> },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Neon',
    description: 'Plataforma de vendas completa com dashboard, tema dark e pagamentos integrados via Stripe.',
    image: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Stripe', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Dashboard Financeiro',
    description: 'Aplicação para gestão de finanças pessoais com gráficos interativos usando D3.js e Recharts.',
    image: 'https://picsum.photos/seed/project2/600/400',
    tags: ['TypeScript', 'Recharts', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: 'App de Clima Futurista',
    description: 'Visualização de dados meteorológicos em tempo real com animações complexas e geolocalização.',
    image: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Vue.js', 'OpenWeather', 'GSAP'],
    link: '#',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/fernando-apar',
    icon: <Github className="w-6 h-6" />,
    color: 'hover:text-purple-400'
  },
  {
    platform: 'Email',
    url: 'mailto:contato@fccode.com',
    icon: <Mail className="w-6 h-6" />,
    color: 'hover:text-white'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram className="w-6 h-6" />,
    color: 'hover:text-pink-500'
  },
];