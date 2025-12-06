import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projetos <span className="text-gradient">Funcionais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção de aplicações funcionais e trabalhos recentes que demonstram minhas habilidades técnicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-fc-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(75,0,130,0.3)] hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                   {/* Optional: Add GitHub Link if available */}
                   {/* <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-fc-purple transition-colors">
                      <Github size={18} />
                   </button> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fc-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-fc-blue border border-fc-blue/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
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