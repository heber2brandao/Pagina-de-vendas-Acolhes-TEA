import React from 'react';
import { Brain, Utensils, Sparkles, Activity, Puzzle, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-50">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color}`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-tea-text mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-tea-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-white/20 text-white font-bold tracking-wider uppercase text-xs px-3 py-1 rounded-full mb-4 inline-block backdrop-blur-sm">Metodologia Científica</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Atividades validadas por pesquisas de Harvard, Oxford e Stanford.
          </h2>
          <p className="text-blue-100 text-lg">
            Você aplica em casa. De forma simples, segura, divertida e acessível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard 
            icon={Activity} 
            title="Terapia Ocupacional" 
            description="Exercícios práticos para melhorar a coordenação motora fina e grossa no dia a dia."
            color="bg-tea-blue"
          />
          <FeatureCard 
            icon={Sparkles} 
            title="Estímulos de Fono" 
            description="Atividades lúdicas para incentivar a fala, comunicação e expressão do seu filho."
            color="bg-tea-yellow"
          />
          <FeatureCard 
            icon={Brain} 
            title="Treinos Cognitivos" 
            description="Jogos e tarefas desenhados para desenvolver foco, memória e raciocínio lógico."
            color="bg-tea-red"
          />
          <FeatureCard 
            icon={Puzzle} 
            title="Rotina Sensorial" 
            description="Estratégias para regulação emocional e processamento sensorial (auditivo, tátil, visual)."
            color="bg-purple-500"
          />
          <FeatureCard 
            icon={Utensils} 
            title="Seletividade Alimentar" 
            description="Passo a passo para introduzir novos alimentos e texturas sem traumas."
            color="bg-tea-green"
          />
          <FeatureCard 
            icon={CheckCircle} 
            title="Acompanhamento" 
            description="Testes simples e gráficos visuais para você ver a evolução do seu filho mês a mês."
            color="bg-orange-500"
          />
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-tea-text mb-2">Rotinas personalizadas por idade e nível de suporte</h3>
            <p className="text-gray-600">
              O Acolhe TEA cria um plano único para o seu filho. Todas as atividades possuem instruções em vídeo ou texto simples, passo a passo.
            </p>
          </div>
          <button className="bg-tea-text text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
            Ver exemplo de atividade
          </button>
        </div>
      </div>
    </section>
  );
};