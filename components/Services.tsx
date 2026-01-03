import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Database, MessageCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const whatsappLink = "https://wa.me/5514997887983?text=quero%20fazer%20meu%20orcamento";

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-fc-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-fc-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planos & <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Escolha a solução ideal para o seu momento. Do simples ao complexo, com a qualidade F.C code.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 md:mb-24">
          
          {/* Card: Site Estático */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-10 border border-white/5 hover:border-fc-blue/50 transition-all duration-500 relative group flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fc-blue to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 md:p-4 rounded-2xl bg-fc-blue/10 text-fc-blue transition-transform group-hover:scale-110">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Site Estático</h3>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-500 line-through text-sm mb-1">De R$ 499,00</p>
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-fc-blue font-bold">R$</span>
                <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">149,99</span>
              </div>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-mono">Pagamento único</p>
            </div>

            <ul className="space-y-4 flex-grow">
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><Check size={12} className="text-green-400" /></div> Design Responsivo
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><Check size={12} className="text-green-400" /></div> Alta Performance
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center"><Check size={12} className="text-yellow-400" /></div> 2 Ajustes Inclusos
              </li>
              <li className="flex items-center gap-3 text-gray-400/60 text-sm md:text-base">
                <X size={18} /> Sem suporte contínuo
              </li>
            </ul>
          </motion.div>

          {/* Card: Sistema Completo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-10 border border-fc-purple/30 hover:border-fc-purple transition-all duration-500 relative group overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fc-purple/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 bg-fc-purple text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest z-20">
              PREMIUM
            </div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 md:p-4 rounded-2xl bg-fc-purple/20 text-fc-purple transition-transform group-hover:scale-110">
                <Database size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Sistema Completo</h3>
            </div>
            
            <div className="mb-8 relative z-10">
              <p className="text-gray-500 line-through text-sm mb-1">De R$ 1.999,99</p>
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-fc-purple font-bold">R$</span>
                <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">999,99</span>
              </div>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-mono">Investimento único</p>
            </div>

            <ul className="space-y-4 relative z-10 flex-grow">
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-fc-purple/30 flex items-center justify-center"><Check size={12} className="text-fc-purple" /></div> Banco de Dados Integrado
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><Check size={12} className="text-green-400" /></div> Suporte Vitalício
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><Check size={12} className="text-green-400" /></div> Ajustes Vitalícios
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <div className="shrink-0 w-5 h-5 rounded-full bg-fc-purple/30 flex items-center justify-center"><Check size={12} className="text-fc-purple" /></div> Login & Autenticação
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-12 border border-white/10 relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fc-blue/5 via-transparent to-fc-purple/5"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Qual a diferença real?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

              <div className="text-center md:text-right md:pr-10">
                <h4 className="text-xl font-bold text-fc-blue mb-4 flex items-center justify-center md:justify-end gap-3">
                  Site Estático <Zap size={22} className="shrink-0" />
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                  Perfeito para portfólios e landing pages. O conteúdo é fixo e extremamente otimizado. Segurança máxima e custo zero de manutenção. Requer desenvolvedor para alterações de conteúdo.
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-fc-blue/10 text-fc-blue text-xs font-mono uppercase tracking-wider">
                  Foco: Divulgação & Performance
                </div>
              </div>

              <div className="text-center md:text-left md:pl-10">
                <h4 className="text-xl font-bold text-fc-purple mb-4 flex items-center justify-center md:justify-start gap-3">
                  <Database size={22} className="shrink-0" /> Com Banco de Dados
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                  Uma ferramenta de gestão ativa. Inclui painel para você mesmo gerenciar seu estoque, textos ou clientes. Ideal para quem precisa de autonomia total e escalabilidade de dados.
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-fc-purple/10 text-fc-purple text-xs font-mono uppercase tracking-wider">
                  Foco: Negócios & Autonomia
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center pt-8 border-t border-white/5">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-all group cursor-pointer text-sm md:text-base font-medium"
              >
                Ficou alguma dúvida? Fale comigo <ArrowRight className="group-hover:translate-x-1 transition-transform text-fc-blue" size={20} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;