import React from 'react';
import { TrendingUp, UserX, HeartCrack } from 'lucide-react';

export const EmpathySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F0FDF4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-slate-800">
            O custo de cuidar não deveria custar a sua paz.
          </h2>
          <div className="w-20 h-1 bg-tea-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-lg hover:border-tea-red transition-colors relative group">
            <div className="absolute -top-6 left-8 bg-white p-3 rounded-2xl border border-green-100 shadow-sm group-hover:border-tea-red transition-colors">
              <TrendingUp className="w-8 h-8 text-tea-red" />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-3 text-tea-red">Custos Insustentáveis</h3>
            <p className="text-gray-600 leading-relaxed">
              O custo médio mensal de terapias particulares pode ultrapassar <strong>R$ 2.000 a R$ 4.000</strong>. Um valor impossível para a realidade da maioria das famílias brasileiras.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-lg hover:border-tea-yellow transition-colors relative group">
            <div className="absolute -top-6 left-8 bg-white p-3 rounded-2xl border border-green-100 shadow-sm group-hover:border-tea-yellow transition-colors">
              <UserX className="w-8 h-8 text-tea-yellow" />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-3 text-tea-yellow">Abandono do Sistema</h3>
            <p className="text-gray-600 leading-relaxed">
              Filas intermináveis no SUS e planos de saúde que negam cobertura. A sensação é de estar gritando por ajuda e ninguém ouvir.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-lg hover:border-tea-blue transition-colors relative group">
            <div className="absolute -top-6 left-8 bg-white p-3 rounded-2xl border border-green-100 shadow-sm group-hover:border-tea-blue transition-colors">
              <HeartCrack className="w-8 h-8 text-tea-blue" />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-3 text-tea-blue">BPC/LOAS Negado</h3>
            <p className="text-gray-600 leading-relaxed">
              Muitas mães contam com o benefício para pagar o tratamento, mas ele é frequentemente negado, gerando frustração, culpa e desespero.
            </p>
          </div>
        </div>

        <div className="text-center bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl">
          <p className="text-xl md:text-2xl font-medium text-white">
            "Você não falhou. O sistema falhou com você. <br className="hidden md:block" />
            E nós estamos aqui para acolher, apoiar e ajudar."
          </p>
        </div>
      </div>
    </section>
  );
};