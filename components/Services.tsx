import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Database, MessageCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const whatsappLink = "https://wa.me/5514997887983?text=quero%20fazer%20meu%20orcamento";

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-fc-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fc-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planos & <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Escolha a solução ideal para o seu momento. Do simples ao complexo, com a qualidade F.C code.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Card: Site Estático */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card rounded-2xl p-8 border border-white/5 hover:border-fc-blue/50 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fc-blue to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-fc-blue/10 text-fc-blue">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Site Estático</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-400 line-through text-sm">De R$ 499,00</p>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-fc-blue font-bold">R$</span>
                <span className="text-5xl font-bold text-white">149,99</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Pagamento único</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-green-400" /> Design Responsivo
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-green-400" /> Alta Performance
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-yellow-400" /> 2 Ajustes Inclusos
              </li>
              <li className="flex items-center gap-3 text-gray-400/60">
                <X size={18} /> Sem suporte contínuo
              </li>
              <li className="flex items-center gap-3 text-gray-400/60">
                <X size={18} /> Sem painel administrativo
              </li>
            </ul>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 bg-white/5 hover:bg-fc-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-[1.02]"
            >
              <MessageCircle size={20} /> Entre em contato
            </a>
          </motion.div>

          {/* Card: Site com Banco de Dados */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card rounded-2xl p-8 border border-fc-purple/30 hover:border-fc-purple transition-all duration-300 relative group overflow-hidden"
          >
            {/* Animated Gradient Background for Premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-fc-purple/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 bg-fc-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              MAIS COMPLETO
            </div>

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="p-3 rounded-lg bg-fc-purple/20 text-fc-purple">
                <Database size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Sistema Completo</h3>
            </div>
            
            <div className="mb-6 relative z-10">
              <p className="text-gray-400 line-through text-sm">De R$ 1.999,99</p>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-fc-purple font-bold">R$</span>
                <span className="text-5xl font-bold text-white">999,99</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Investimento único</p>
            </div>

            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-fc-purple" /> Banco de Dados Integrado
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-fc-purple" /> Painel Administrativo
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <Check size={18} className="text-green-400" /> Ajustes Vitalícios
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <Check size={18} className="text-green-400" /> Suporte Vitalício
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-fc-purple" /> Login & Autenticação
              </li>
            </ul>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 bg-gradient-to-r from-fc-purple to-fc-indigo hover:shadow-[0_0_30px_rgba(106,13,173,0.6)] transition-all duration-300 relative z-10 group-hover:scale-[1.02]"
            >
              <MessageCircle size={20} /> Entre em contato
            </a>
          </motion.div>
        </div>

        {/* Comparison Section (Large Card) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fc-blue/5 via-transparent to-fc-purple/5"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Qual a diferença?
            </h3>

            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              {/* Divider for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

              {/* Static Definition */}
              <div className="text-center md:text-right md:pr-8">
                <h4 className="text-xl font-bold text-fc-blue mb-3 flex items-center justify-center md:justify-end gap-2">
                  Site Estático <Zap size={20} />
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Perfeito para portfólios, landing pages de produtos e sites institucionais. O conteúdo é fixo no código. É extremamente rápido, seguro e barato de manter, mas requer um programador para alterar textos ou imagens.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-fc-blue/10 text-fc-blue text-xs font-mono">
                  Ideal para divulgação
                </div>
              </div>

              {/* Dynamic Definition */}
              <div className="text-center md:text-left md:pl-8">
                <h4 className="text-xl font-bold text-fc-purple mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Database size={20} /> Com Banco de Dados
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Uma aplicação "viva". Permite cadastro de usuários, login, salvamento de informações e painéis onde você mesmo altera o conteúdo (como preços ou textos) sem mexer no código.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-fc-purple/10 text-fc-purple text-xs font-mono">
                  Ideal para negócios
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-fc-blue transition-colors group cursor-pointer"
              >
                Ainda com dúvida? Me chame no WhatsApp <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;