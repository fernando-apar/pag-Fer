import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // ------------------------------------------------------------------
    // CONFIGURAÇÃO DO EMAILJS (Para envio automático e silencioso)
    // 1. Crie conta gratuita em https://www.emailjs.com/
    // 2. Crie um Email Service (ex: Gmail)
    // 3. Crie um Email Template com as variáveis: {{name}}, {{email}}, {{whatsapp}}, {{message}}
    // 4. Copie os IDs abaixo e substitua os valores:
    // ------------------------------------------------------------------
    const SERVICE_ID = 'YOUR_SERVICE_ID'; 
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 
    
    // Email de destino para o modo Fallback (caso não configure o EmailJS)
    // Substitua pelo seu email real para testar o modo manual
    const FALLBACK_EMAIL = 'fernando.aparicio@exemplo.com'; 

    // MODO FALLBACK: Se as chaves ainda forem as padrões, abrimos o cliente de email
    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
        console.warn("EmailJS não configurado. Usando modo mailto.");
        setTimeout(() => {
            const subject = `Novo Contato do Portfólio: ${formState.name}`;
            const body = `Nome: ${formState.name}\nEmail: ${formState.email}\nWhatsApp: ${formState.whatsapp}\n\nMensagem:\n${formState.message}`;
            
            // Tenta pegar o email das constantes ou usa o definido acima
            const targetEmail = SOCIAL_LINKS.find(s => s.platform === 'Email')?.url.replace('mailto:', '') || FALLBACK_EMAIL;
            
            // Abre o cliente de email padrão
            window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            setStatus('success');
            setFormState({ name: '', email: '', whatsapp: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
        return;
    }

    // MODO AUTOMÁTICO: Envio via EmailJS
    if (formRef.current) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_KEY,
        })
        .then(() => {
            setStatus('success');
            setFormState({ name: '', email: '', whatsapp: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, (error) => {
            console.error('FAILED...', error.text);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        });
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                    : status === 'error'
                    ? 'bg-red-500'
                    : 'bg-gradient-to-r from-fc-purple to-fc-blue hover:shadow-[0_0_20px_rgba(106,13,173,0.5)]'
                }`}
              >
                {status === 'submitting' ? (
                  <Loader2 className="animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle /> Mensagem Enviada!
                  </>
                ) : status === 'error' ? (
                  <>
                     <AlertCircle /> Erro ao Enviar
                  </>
                ) : (
                  <>
                    Enviar Mensagem <Send size={20} />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-2">
                      Houve um erro ao enviar. Tente novamente ou me chame no WhatsApp.
                  </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;