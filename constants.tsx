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
    title: 'Gestão de Finanças',
    description: 'Controle completo de gastos e receitas com visualização gráfica intuitiva e moderna.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop',
    tags: ['React', 'Finance', 'Dashboard'],
    link: 'https://fcfinancas.netlify.app/',
    buttonText: 'App de Finanças Pessoais'
  },
  {
    id: 2,
    title: 'Oráculo da Sorte',
    description: 'Transforme probabilidades em prêmios com este gerador de números para loterias.',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Lógica', 'CSS'],
    link: 'https://numerodasortemega.netlify.app/',
    buttonText: 'App Oraculo da Sorte'
  },
  {
    id: 3,
    title: 'Borges Climatização',
    description: 'Soluções profissionais para instalação e manutenção de ar condicionado e climatização.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    tags: ['Landing Page', 'Serviços', 'Institucional'],
    link: 'https://borges.netlify.app/',
    buttonText: 'Instalação de Ar Borges'
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
    url: 'mailto:cardoso.apcr@gmail.com',
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