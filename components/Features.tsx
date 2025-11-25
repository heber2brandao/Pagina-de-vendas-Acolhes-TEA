import React from 'react';
import { Brain, Utensils, Sparkles, Activity, Puzzle, CheckCircle, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <div className="bg-white p-8 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform`}>
      <Icon className={`w-7 h-7 ${colorClass.replace('bg-', 'text-').replace('/10', '')}`} />
    </div>
    <h3 className="text-xl font-bold text-tea-text mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-tea-gray">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-tea-darkBlue font-bold tracking-wider uppercase text-xs mb-2 block">Metodologia</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-tea-text leading-tight">
              Atividades validadas por <br/>
              <span className="text-slate-400">Harvard, Oxford e Stanford.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base">
            Desenvolvemos uma jornada completa, simples e segura para você aplicar em casa, sem precisar de materiais caros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard 
            icon={Activity} 
            title="Terapia Ocupacional" 
            description="Exercícios práticos para melhorar a coordenação motora fina e grossa no dia a dia."
            colorClass="bg-blue-500 text-blue-500"
          />
          <FeatureCard 
            icon={Sparkles} 
            title="Estímulos de Fono" 
            description="Atividades lúdicas para incentivar a fala, comunicação e expressão do seu filho."
            colorClass="bg-yellow-500 text-yellow-500"
          />
          <FeatureCard 
            icon={Brain} 
            title="Treinos Cognitivos" 
            description="Jogos e tarefas desenhados para desenvolver foco, memória e raciocínio lógico."
            colorClass="bg-red-500 text-red-500"
          />
          <FeatureCard 
            icon={Puzzle} 
            title="Rotina Sensorial" 
            description="Estratégias para regulação emocional e processamento sensorial."
            colorClass="bg-purple-500 text-purple-500"
          />
          <FeatureCard 
            icon={Utensils} 
            title="Seletividade Alimentar" 
            description="Passo a passo para introduzir novos alimentos e texturas sem traumas."
            colorClass="bg-green-500 text-green-500"
          />
          <FeatureCard 
            icon={CheckCircle} 
            title="Acompanhamento" 
            description="Gráficos visuais para você ver a evolução do seu filho mês a mês."
            colorClass="bg-orange-500 text-orange-500"
          />
        </div>

      </div>
    </section>
  );
};