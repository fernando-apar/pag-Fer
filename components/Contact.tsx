import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, User, Mail, Phone, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', whatsapp: '', message: '' });
      
      // Reset status after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Inverted Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-fc-purple-dark to-black z-0"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fc-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fc-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos criar algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fc-blue to-fc-purple">
                incrível juntos?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Tem uma ideia de projeto ou quer elevar o nível da sua presença digital? Preencha o formulário ou me chame nas redes.
            </p>

            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all mb-12"
            >
              <MessageCircle size={24} />
              Falar comigo no WhatsApp
            </motion.a>

            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 glass-card rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${link.color}`}
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="glass-card p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={16} className="text-fc-blue" /> Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-colors outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={16} className="text-fc-blue" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-colors outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Phone size={16} className="text-fc-blue" /> WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formState.whatsapp}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-colors outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <MessageSquare size={16} className="text-fc-blue" /> Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Como posso te ajudar?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-colors outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success' 
                    ? 'bg-green-500' 
                    : 'bg-gradient-to-r from-fc-purple to-fc-blue hover:shadow-[0_0_20px_rgba(106,13,173,0.5)]'
                }`}
              >
                {status === 'submitting' ? (
                  <Loader2 className="animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle /> Mensagem Enviada!
                  </>
                ) : (
                  <>
                    Enviar Mensagem <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;