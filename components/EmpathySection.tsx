import React from 'react';
import { TrendingUp, UserX, HeartCrack } from 'lucide-react';

export const EmpathySection: React.FC = () => {
  return (
    <section className="py-24 bg-white rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-tea-text">
            O custo de cuidar não <br/> deveria custar a sua paz.
          </h2>
          <p className="text-slate-500 text-lg">
            Sabemos que a realidade financeira e emocional é um desafio diário.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-slate-50 p-8 rounded-4xl hover:bg-red-50 transition-colors duration-300 group">
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-tea-red" />
            </div>
            <h3 className="text-lg font-bold text-tea-text mb-3">Custos Altos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              O custo médio mensal de terapias particulares pode ultrapassar R$ 4.000. Um valor impossível para muitos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-8 rounded-4xl hover:bg-yellow-50 transition-colors duration-300 group">
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <UserX className="w-6 h-6 text-tea-yellow" />
            </div>
            <h3 className="text-lg font-bold text-tea-text mb-3">Filas no SUS</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Filas intermináveis e planos que negam cobertura. A sensação de abandono é real.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-8 rounded-4xl hover:bg-blue-50 transition-colors duration-300 group">
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <HeartCrack className="w-6 h-6 text-tea-darkBlue" />
            </div>
            <h3 className="text-lg font-bold text-tea-text mb-3">LOAS Negado</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              O benefício é frequentemente negado, gerando mais frustração e ansiedade para a família.
            </p>
          </div>
        </div>

        <div className="bg-tea-darkBlue rounded-4xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-50"></div>
          <p className="relative z-10 text-xl md:text-2xl font-semibold leading-relaxed">
            "Você não falhou. O sistema falhou com você. <br/>
            Nós estamos aqui para acolher, apoiar e ajudar."
          </p>
        </div>
      </div>
    </section>
  );
};