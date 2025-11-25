import React from 'react';
import { 
  Heart, 
  Calendar, 
  Clock, 
  Apple, 
  MessageCircle, 
  Sparkles, 
  Home, 
  BarChart2, 
  BookOpen, 
  Settings, 
  ChevronRight,
  Star,
  Battery,
  Wifi,
  Signal,
  HeartHandshake,
  CheckCircle2,
  Smile
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-tea-gray">
      {/* Soft vector shapes background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100/40 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Minimalist Logo Area */}
        <div className="flex justify-center md:justify-start mb-12">
           <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-2xl shadow-sm">
                <HeartHandshake className="w-10 h-10 text-tea-darkBlue" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-tea-text flex items-baseline">
                <span className="text-tea-darkBlue">Acolhe</span>
                <span className="text-tea-green ml-1">TEA</span>
              </h1>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content - Left Aligned */}
          <div className="lg:w-5/12 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm font-bold text-tea-darkBlue shadow-sm mb-8">
              <Smile className="w-4 h-4" />
              <span>Apoio real para mães atípicas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-tea-text leading-tight mb-6">
              O desenvolvimento do seu filho, <br/>
              <span className="text-tea-darkBlue relative inline-block">
                dentro de casa.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-tea-green/30 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              Terapias caras e benefícios negados não definem o futuro dele. 
              Tenha acesso a atividades validadas cientificamente para estimular a evolução do seu filho todos os dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://pay.cakto.com.br/t9798gu_661456" 
                className="px-8 py-4 rounded-2xl bg-tea-darkBlue text-white font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-600 hover:shadow-blue-300 transition-all text-center transform hover:-translate-y-1"
              >
                Começar Hoje
              </a>
              <a 
                href="https://pay.cakto.com.br/hhg4gri_661453" 
                className="px-8 py-4 rounded-2xl bg-white border-2 border-tea-green text-tea-green font-bold text-lg hover:bg-tea-green hover:text-white transition-all text-center"
              >
                Plano Anual
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-green" /> Sem fidelidade
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-green" /> Compra segura
              </span>
            </div>
          </div>

          {/* Visual Composition - Right Aligned */}
          <div className="lg:w-7/12 relative flex justify-center items-center">
            
            {/* Soft decorative background circle */}
            <div className="absolute w-[120%] h-[120%] bg-white rounded-full opacity-60 blur-2xl -z-10"></div>

            {/* Floating UI Elements "Orbiting" the Phone */}
            
            {/* Panel 1: Progress */}
            <div className="absolute -left-4 top-20 bg-white p-4 rounded-2xl shadow-lg shadow-slate-200/50 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-xl">
                  <BarChart2 className="w-5 h-5 text-tea-green" />
                </div>
                <div>
                  <div className="h-1.5 w-16 bg-slate-100 rounded-full mb-1">
                    <div className="h-1.5 w-12 bg-tea-green rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600">Evolução Diária</span>
                </div>
              </div>
            </div>

            {/* Panel 2: Activity */}
            <div className="absolute -right-8 bottom-32 bg-white p-4 rounded-2xl shadow-lg shadow-slate-200/50 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-xl">
                  <MessageCircle className="w-5 h-5 text-tea-darkBlue" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Nova Palavra!</span>
                  <span className="text-[10px] text-slate-400">Há 5 min</span>
                </div>
              </div>
            </div>

             {/* Phone Container */}
            <div className="relative z-10 bg-white rounded-[3rem] shadow-2xl shadow-slate-300/50 border-[6px] border-white mx-auto w-[280px] md:w-[300px] h-[600px] overflow-hidden">
              
              {/* Phone Content */}
              <div className="bg-slate-50 h-full flex flex-col relative">
                
                {/* Status Bar */}
                <div className="bg-white px-6 py-4 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400">9:41</span>
                  <div className="flex gap-1 text-slate-300">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                {/* Header */}
                <div className="bg-white px-6 pb-4">
                  <h3 className="font-bold text-slate-700 text-lg mb-1">Olá, Mamãe</h3>
                  <p className="text-xs text-slate-400">Vamos estimular hoje?</p>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Highlight Card */}
                  <div className="bg-tea-darkBlue rounded-3xl p-5 text-white shadow-lg shadow-blue-200">
                    <div className="flex items-center gap-2 mb-2 opacity-90">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-bold">Sugestão do dia</span>
                    </div>
                    <h4 className="font-bold text-lg leading-tight mb-2">Brincando com sons</h4>
                    <div className="flex items-center gap-2 text-blue-100 text-xs">
                      <Clock className="w-3 h-3" /> 10 min
                    </div>
                  </div>

                  {/* List */}
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                        <Apple className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-slate-700 text-sm">Hora do Lanche</h5>
                        <p className="text-[10px] text-slate-400">Exploração sensorial</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-500">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-slate-700 text-sm">História Visual</h5>
                        <p className="text-[10px] text-slate-400">Atenção compartilhada</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="mt-auto bg-white px-6 py-4 flex justify-between border-t border-slate-50">
                  <Home className="w-6 h-6 text-tea-darkBlue" />
                  <BarChart2 className="w-6 h-6 text-slate-300" />
                  <Settings className="w-6 h-6 text-slate-300" />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};