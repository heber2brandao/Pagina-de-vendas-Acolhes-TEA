import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Heart className="text-tea-blue w-6 h-6 fill-current" />
            <span className="text-2xl font-bold">
              Acolhe <span className="text-tea-yellow">TEA</span>
            </span>
          </div>
          <div className="text-slate-400 text-sm text-center md:text-right">
            <p>Feito com amor para famílias atípicas.</p>
            <p className="mt-1">© {new Date().getFullYear()} Acolhe TEA. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};