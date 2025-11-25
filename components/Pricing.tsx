import React from 'react';
import { Check } from 'lucide-react';

const PlanFeature = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 mb-4">
    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-green-600" />
    </div>
    <span className="text-slate-600 text-sm font-medium">{text}</span>
  </li>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-tea-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-tea-text mb-4">
            Planos Acessíveis
          </h2>
          <p className="text-slate-500 text-lg">
            Investimento simbólico para um futuro cheio de conquistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="bg-white p-8 md:p-10 rounded-4xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-wider">Mensal</h3>
            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-extrabold text-tea-text">R$ 34,90</span>
            </div>
            <ul className="mb-8 text-left w-full max-w-xs space-y-2">
              <PlanFeature text="Acesso total às atividades" />
              <PlanFeature text="Rotina personalizada" />
              <PlanFeature text="Sem fidelidade" />
            </ul>
            <a 
              href="https://pay.cakto.com.br/t9798gu_661456" 
              className="w-full py-4 rounded-2xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
            >
              Assinar Mensal
            </a>
          </div>

          {/* Annual Plan */}
          <div className="bg-white p-8 md:p-10 rounded-4xl shadow-xl border-2 border-tea-green/20 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-2 bg-tea-green"></div>
            <h3 className="text-lg font-bold text-tea-green mb-6 uppercase tracking-wider">Anual (Melhor Valor)</h3>
            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-extrabold text-tea-text">R$ 347</span>
            </div>
            <p className="text-green-500 text-sm font-bold mb-8 bg-green-50 px-3 py-1 rounded-full">Economia de 2 meses</p>
            
            <ul className="mb-8 text-left w-full max-w-xs space-y-2">
              <PlanFeature text="Tudo do plano mensal" />
              <PlanFeature text="Suporte prioritário" />
              <PlanFeature text="Bônus: Guia Sensorial" />
            </ul>
            <a 
              href="https://pay.cakto.com.br/hhg4gri_661453" 
              className="w-full py-4 rounded-2xl bg-tea-green text-white font-bold shadow-lg shadow-green-200 hover:bg-green-500 transition-all hover:-translate-y-1"
            >
              Quero Economizar
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};