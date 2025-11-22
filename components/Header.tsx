import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-tea-blue p-2 rounded-lg">
            <Heart className="text-white w-6 h-6 fill-current" />
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-tea-blue' : 'text-slate-800'}`}>
            Acolhe <span className="text-tea-yellow">TEA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#pricing" className="text-tea-text font-semibold hover:text-tea-blue transition-colors">
            Planos
          </a>
          <a href="#how-it-works" className="text-tea-text font-semibold hover:text-tea-blue transition-colors">
            Como funciona
          </a>
          <button className="px-5 py-2.5 rounded-full border-2 border-tea-blue text-tea-blue font-bold hover:bg-tea-blue hover:text-white transition-all">
            Entrar
          </button>
          <a 
            href="#pricing"
            className="px-6 py-2.5 rounded-full bg-tea-green text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all animate-pulse"
          >
            Começar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-tea-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 border-t border-gray-100">
          <a href="#pricing" className="text-lg font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>Planos</a>
          <a href="#how-it-works" className="text-lg font-semibold text-center py-2" onClick={() => setIsMenuOpen(false)}>Como funciona</a>
          <a 
            href="https://pay.cakto.com.br/t9798gu_661456"
            className="w-full py-3 rounded-xl bg-tea-blue text-white font-bold text-center block"
          >
            Assinar por R$ 34,90/mês
          </a>
        </div>
      )}
    </header>
  );
};