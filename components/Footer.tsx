import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fc-purple to-transparent animate-pulse-glow"></div>
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} – <span className="text-white font-bold">F.C code</span>. Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-xs mt-2">
            Desenvolvido com React, Tailwind & Paixão 💜
        </p>
      </div>
    </footer>
  );
};

export default Footer;