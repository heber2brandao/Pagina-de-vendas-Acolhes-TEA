import React from 'react';
import { Check } from 'lucide-react';

const PlanFeature = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 mb-3 text-gray-600">
    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-green-600" />
    </div>
    <span className="text-sm">{text}</span>
  </li>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tea-text mb-4">
            Apoio acessível para TODAS as mães.
          </h2>
          <p className="text-gray-600">
            Menos de R$ 1,20 por dia para transformar o desenvolvimento do seu filho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* Monthly Plan */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 order-2 md:order-1">
            <h3 className="text-xl font-bold text-gray-500 mb-2">Plano Mensal</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-sm text-gray-500">R$</span>
              <span className="text-4xl font-bold text-tea-text">34,90</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="mb-8">
              <PlanFeature text="Acesso total às atividades" />
              <PlanFeature text="Rotina personalizada" />
              <PlanFeature text="Cancelamento fácil" />
            </ul>
            <a 
              href="https://pay.cakto.com.br/t9798gu_661456" 
              className="block w-full py-3 rounded-xl border-2 border-tea-blue text-tea-blue font-bold hover:bg-tea-blue hover:text-white transition-colors text-center"
            >
              Assinar Mensal
            </a>
          </div>

          {/* Annual Plan - Highlighted */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-tea-green relative order-1 md:order-2 transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tea-green text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              MAIS ESCOLHIDO
            </div>
            <h3 className="text-xl font-bold text-tea-green mb-2">Plano Anual</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-sm text-gray-500">R$</span>
              <span className="text-5xl font-bold text-tea-text">347</span>
              <span className="text-gray-500">/ano</span>
            </div>
            <p className="text-green-600 text-sm font-bold mb-6">Economize 2 meses de assinatura</p>
            
            <ul className="mb-8">
              <PlanFeature text="Tudo do plano mensal" />
              <PlanFeature text="Economia garantida" />
              <PlanFeature text="Suporte prioritário" />
              <li className="flex items-center gap-3 mb-3 text-tea-text font-bold bg-yellow-50 p-2 rounded-lg -mx-2">
                <div className="w-5 h-5 rounded-full bg-tea-yellow flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm">Bônus: Guia de Rotina Sensorial</span>
              </li>
            </ul>
            <a 
              href="https://pay.cakto.com.br/hhg4gri_661453" 
              className="block w-full py-4 rounded-xl bg-tea-green text-white font-bold text-lg shadow-lg hover:bg-green-600 transition-all hover:scale-[1.02] text-center"
            >
              Quero Economizar Agora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};