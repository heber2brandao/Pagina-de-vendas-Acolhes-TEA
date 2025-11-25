import React from 'react';
import { HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          <HeartHandshake className="w-6 h-6 text-tea-darkBlue" />
          <span className="text-xl font-bold text-tea-text">Acolhe TEA</span>
        </div>
        <p className="text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} Acolhe TEA. Feito com carinho.
        </p>
      </div>
    </footer>
  );
};