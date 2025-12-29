import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projetos <span className="text-gradient">Funcionais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Uma seleção de aplicações funcionais e trabalhos recentes que demonstram minhas habilidades técnicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-fc-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(75,0,130,0.3)] hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fc-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-fc-blue border border-fc-blue/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                    project.buttonText 
                    ? 'bg-gradient-to-r from-fc-purple to-fc-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-white/5 hover:bg-white/10 hover:text-fc-purple'
                  }`}
                >
                  {project.buttonText || 'Ver Detalhes'} 
                  {!project.buttonText && <ExternalLink size={16} />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;