import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fc-purple to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-fc-blue mx-auto rounded-full"></div>
          </div>

          <div className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden group">
            {/* Glow effect behind card */}
            <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-fc-purple/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-48 md:w-64 h-48 md:h-64 bg-fc-blue/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-5 gap-10 md:gap-16 items-start">
              <div className="lg:col-span-2">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  Sou um apaixonado por tecnologia e design. Com anos de experiência em desenvolvimento web, foco em criar interfaces que não são apenas funcionais, mas visualmente impactantes.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Minha jornada começou com curiosidade e evoluiu para uma carreira dedicada à excelência no código e na experiência do usuário.
                </p>
                
                <div className="mt-8 p-4 rounded-xl bg-fc-blue/5 border border-fc-blue/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fc-blue/20 flex items-center justify-center text-fc-blue font-bold">FC</div>
                    <div>
                        <p className="text-white font-bold text-sm">Fernando Cardoso</p>
                        <p className="text-gray-500 text-xs">Desenvolvedor Front-end</p>
                    </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                   Minhas Habilidades
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {SKILLS.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-fc-purple/50 transition-all flex flex-col gap-3 group/skill"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-fc-blue group-hover/skill:text-fc-purple transition-colors">
                              {skill.icon}
                          </span>
                          <span className="font-medium text-gray-200 text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-fc-purple to-fc-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;