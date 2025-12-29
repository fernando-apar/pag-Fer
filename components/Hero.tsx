import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Olá, eu sou Fernando Cardoso";
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingDone(true);
    }
  }, [text]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background Gradient & Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a052e] z-0"></div>
      <ParticleBackground />

      {/* Social Sidebar - Hidden on mobile, visible from MD up */}
      <div className="hidden md:flex flex-col absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 gap-6 z-20">
         {SOCIAL_LINKS.map((link, index) => (
             <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className={`text-gray-400 hover:scale-110 transition-all duration-300 ${link.color}`}
            >
                {link.icon}
            </motion.a>
         ))}
         <motion.div
            initial={{ height: 0 }}
            animate={{ height: '60px' }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="w-px bg-gradient-to-b from-transparent via-fc-purple to-transparent mx-auto opacity-50"
         />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-fc-purple/50 rounded-full bg-fc-purple/10 backdrop-blur-sm">
            <span className="text-xs md:text-sm font-mono text-fc-blue">🚀 Bem-vindo ao meu universo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 min-h-[120px] sm:min-h-[144px] leading-[1.1]">
            {text}
            <span className="animate-pulse text-fc-purple">|</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingDone ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Desenvolvedor <span className="text-gradient font-bold">Front-end</span> & Criador de Experiências Digitais. 
              Transformo ideias complexas em interfaces elegantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-fc-purple to-fc-blue rounded-lg text-white font-bold hover:shadow-[0_0_20px_rgba(106,13,173,0.5)] transition-all cursor-pointer text-center"
              >
                Entrar em contato
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-bold hover:bg-white/10 transition-all cursor-pointer text-center"
              >
                Ver Projetos
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={(e) => scrollToSection(e, '#about')}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;