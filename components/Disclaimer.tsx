import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <section className="bg-amber-50 border-y border-amber-200 py-8">
      <div className="container mx-auto px-4 md:px-6 flex items-start gap-4 max-w-4xl">
        <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-amber-800 font-bold text-lg mb-1">AVISO IMPORTANTE</h4>
          <p className="text-amber-900/80 text-sm md:text-base leading-relaxed">
            O Acolhe TEA <strong>não substitui</strong> médicos, terapeutas, fonos ou qualquer profissional da saúde.
            Ele é um apoio complementar para mães e cuidadores estimularem seus filhos em casa com atividades seguras, testadas e cientificamente validadas. Sempre mantenha o acompanhamento profissional quando possível.
          </p>
        </div>
      </div>
    </section>
  );
};