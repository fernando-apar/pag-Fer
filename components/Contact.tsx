import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const targetEmail = SOCIAL_LINKS.find(s => s.platform === 'Email')?.url.replace('mailto:', '') || 'fcstore1988@gmail.com';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          whatsapp: formState.whatsapp,
          message: formState.message,
          _subject: `Novo Contato do Site de ${formState.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', whatsapp: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-[#1a052e] to-black z-0"></div>
      
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-fc-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-fc-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Vamos criar algo <br className="hidden md:block" />
                <span className="text-gradient">único juntos?</span>
              </h2>
              
              <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tem uma ideia de projeto ou quer elevar o nível da sua presença digital? Preencha o formulário ou me chame nas redes.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 md:p-5 glass-card rounded-2xl text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${link.color}`}
                    aria-label={link.platform}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-gray-500 flex items-center gap-2">
                      <User size={14} className="text-fc-blue" /> Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder-gray-600 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-all outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-gray-500 flex items-center gap-2">
                      <Phone size={14} className="text-fc-blue" /> WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formState.whatsapp}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder-gray-600 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500 flex items-center gap-2">
                    <Mail size={14} className="text-fc-blue" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="exemplo@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder-gray-600 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-all outline-none text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500 flex items-center gap-2">
                    <MessageSquare size={14} className="text-fc-blue" /> Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Como posso ajudar seu projeto?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder-gray-600 focus:border-fc-purple focus:ring-1 focus:ring-fc-purple transition-all outline-none resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4.5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
                    status === 'success' 
                      ? 'bg-green-600' 
                      : status === 'error'
                      ? 'bg-red-600'
                      : 'bg-gradient-to-r from-fc-purple to-fc-blue hover:shadow-[0_0_25px_rgba(106,13,173,0.5)]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <Loader2 className="animate-spin" />
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={20} /> Enviado com Sucesso!
                    </>
                  ) : (
                    <>
                      Enviar Agora <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;