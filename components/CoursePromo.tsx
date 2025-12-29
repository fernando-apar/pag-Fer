import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, TrendingUp, Wallet, CheckCircle2, ArrowRight, ShoppingCart, BookOpen, FileCode, Layers } from 'lucide-react';

const CoursePromo: React.FC = () => {
  const salesLink = "https://go.hotmart.com/A96870117J";
  const checkoutLink = "https://go.hotmart.com/A96870117J?dp=1";
  const freeGuideLink = "https://go.hotmart.com/A96870117J?ap=0672";
  const htmlGuideLink = "https://go.hotmart.com/A96870117J?ap=f019";

  const salaryData = [
    { level: 'Desenvolvedor Junior', salary: 'R$ 3.500 - 5.500', color: 'text-blue-400' },
    { level: 'Desenvolvedor Pleno', salary: 'R$ 7.000 - 12.000', color: 'text-fc-purple' },
    { level: 'Desenvolvedor Sênior', salary: 'R$ 15.000+', color: 'text-green-400' },
  ];

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  ];

  return (
    <section id="course" className="py-20 md:py-32 bg-[#020202] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-fc-purple/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-[0_0_50px_rgba(106,13,173,0.15)]">
            
            {/* Content Section */}
            <div className="p-6 sm:p-10 md:p-14 lg:w-3/5 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-2 text-fc-blue font-mono text-xs md:text-sm mb-6">
                <GraduationCap size={18} />
                <span className="tracking-widest uppercase">Oportunidade de Carreira</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Domine o <span className="text-gradient">Fullstack</span> e acelere sua carreira
              </h2>
              
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                Aprenda a arquitetar soluções que o mercado disputa. O setor de tecnologia oferece abundância real e crescimento exponencial para quem domina as ferramentas certas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-500 shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-gray-300 text-sm">Altos salários iniciais.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-500 shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-gray-300 text-sm">Método prático focado em projetos.</p>
                </div>
              </div>

              {/* Responsive Action Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={salesLink} target="_blank" rel="noopener noreferrer" className="py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm">
                  Conheça o Curso <ArrowRight size={16} />
                </a>
                <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-fc-purple to-fc-blue text-white font-bold flex items-center justify-center gap-2 animate-pulse-glow transition-all text-sm">
                  <ShoppingCart size={16} /> Matricular Agora
                </a>
                <a href={freeGuideLink} target="_blank" rel="noopener noreferrer" className="py-3.5 px-4 rounded-xl bg-fc-blue/10 border border-fc-blue/20 text-fc-blue font-bold flex items-center justify-center gap-2 hover:bg-fc-blue/20 transition-all text-sm">
                  <BookOpen size={16} /> Guia Grátis Fullstack
                </a>
                <a href={htmlGuideLink} target="_blank" rel="noopener noreferrer" className="py-3.5 px-4 rounded-xl bg-fc-purple/10 border border-fc-purple/20 text-fc-purple font-bold flex items-center justify-center gap-2 hover:bg-fc-purple/20 transition-all text-sm">
                  <FileCode size={16} /> Guia Prático HTML
                </a>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="p-6 sm:p-10 md:p-14 lg:w-2/5 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-fc-purple font-bold mb-8">
                  <TrendingUp size={24} />
                  <h3 className="text-xl uppercase tracking-wider text-sm">Estimativa Salarial</h3>
                </div>
                
                <div className="space-y-4 mb-10">
                  {salaryData.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/5 group hover:border-fc-purple/30 transition-all">
                      <span className="text-[10px] text-gray-500 font-mono block mb-1 uppercase tracking-widest">{item.level}</span>
                      <span className={`text-xl font-bold ${item.color}`}>{item.salary}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2 text-gray-400 font-bold mb-6">
                    <Layers size={18} />
                    <h4 className="text-xs uppercase tracking-widest">Stack Tecnológica</h4>
                  </div>
                  
                  {/* Dense grid for tech stack icons */}
                  <div className="grid grid-cols-5 gap-3 md:gap-4">
                    {techStack.map((tech) => (
                      <div key={tech.name} className="relative group/icon flex justify-center">
                        <div className="w-9 h-9 md:w-11 md:h-11 p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:border-fc-blue/40 hover:bg-white/10 transition-all">
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className={`w-full h-full object-contain filter ${(tech.name === 'Next.js' || tech.name === 'Express') ? 'invert' : ''}`} 
                          />
                        </div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-fc-blue opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-20">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-4 rounded-xl bg-gradient-to-br from-fc-blue/10 to-transparent border border-fc-blue/20 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-fc-blue/20 text-fc-blue">
                  <Wallet size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase leading-none mb-1">Foco em</p>
                  <p className="text-white text-xs font-bold">Autonomia Global</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursePromo;