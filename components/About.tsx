import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fc-purple to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-fc-blue mx-auto rounded-full"></div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            {/* Glow effect behind card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-fc-purple/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-fc-blue/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Sou um apaixonado por tecnologia e design. Com anos de experiência em desenvolvimento web, foco em criar interfaces que não são apenas funcionais, mas visualmente impactantes.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Minha jornada começou com curiosidade e evoluiu para uma carreira dedicada à excelência no código e na experiência do usuário.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {SKILLS.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-fc-purple/50 transition-colors flex items-center justify-between group/skill"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-fc-blue group-hover/skill:text-fc-purple transition-colors">
                            {skill.icon}
                        </span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
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