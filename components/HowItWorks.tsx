import React from 'react';
import { Smartphone, Settings, Calendar, TrendingUp } from 'lucide-react';

const Step = ({ number, icon: Icon, title, description }: { number: string, icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center relative z-10">
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-tea-lightBlue mb-6 relative">
      <Icon className="w-8 h-8 text-tea-blue" />
      <span className="absolute -top-2 -right-2 w-8 h-8 bg-tea-yellow rounded-full flex items-center justify-center font-bold text-tea-text text-sm shadow-sm">
        {number}
      </span>
    </div>
    <h3 className="text-lg font-bold text-tea-text mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-tea-text mb-16">
          Como o aplicativo funciona?
        </h2>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-0"></div>

          <Step 
            number="1" 
            icon={Smartphone} 
            title="Cadastro Simples" 
            description="Você baixa o app e cadastra o perfil do seu filho em poucos minutos." 
          />
          <Step 
            number="2" 
            icon={Settings} 
            title="Personalização" 
            description="Indique o grau de suporte e as principais dificuldades (fala, motor, sensorial)." 
          />
          <Step 
            number="3" 
            icon={Calendar} 
            title="Rotina Diária" 
            description="Receba todo dia uma lista de atividades guiadas para fazer em casa." 
          />
          <Step 
            number="4" 
            icon={TrendingUp} 
            title="Evolução" 
            description="Marque o progresso e veja novos estímulos sugeridos semanalmente." 
          />
        </div>
      </div>
    </section>
  );
};