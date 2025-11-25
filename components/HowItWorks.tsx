import React from 'react';
import { Smartphone, Settings, Calendar, TrendingUp } from 'lucide-react';

const Step = ({ number, icon: Icon, title, description }: { number: string, icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:scale-105 transition-transform duration-300 relative">
      <Icon className="w-8 h-8 text-tea-darkBlue" />
      <span className="absolute -bottom-3 bg-tea-text text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
        {number}
      </span>
    </div>
    <h3 className="text-lg font-bold text-tea-text mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{description}</p>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-tea-gray border-b border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-tea-text">
            Como funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <Step 
            number="1" 
            icon={Smartphone} 
            title="Baixe" 
            description="Instale o aplicativo e crie o perfil do seu filho." 
          />
          <Step 
            number="2" 
            icon={Settings} 
            title="Personalize" 
            description="Defina o nível de suporte e dificuldades." 
          />
          <Step 
            number="3" 
            icon={Calendar} 
            title="Pratique" 
            description="Receba sua rotina diária de atividades." 
          />
          <Step 
            number="4" 
            icon={TrendingUp} 
            title="Evolua" 
            description="Acompanhe cada conquista no gráfico." 
          />
        </div>
      </div>
    </section>
  );
};