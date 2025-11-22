import React from 'react';
import { 
  ShieldCheck, 
  AlertCircle, 
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
  HeartHandshake
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-gradient-to-b from-tea-lightBlue to-white">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-tea-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-tea-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header / Logo Area - Main Element */}
        <div className="flex flex-col items-center lg:items-start mb-10 md:mb-16">
           <div className="flex flex-col items-center lg:items-start">
              {/* Icon: Two hands clasping in heart shape */}
              <div className="relative mb-3">
                <HeartHandshake className="w-20 h-20 md:w-24 md:h-24 text-tea-blue" strokeWidth={1.5} />
                <div className="absolute -right-2 -top-1">
                  <Heart className="w-6 h-6 text-tea-red fill-tea-red animate-pulse" />
                </div>
              </div>
              
              {/* Text: Acolhe TEA with Autism Colors */}
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight flex items-baseline drop-shadow-sm">
                <span className="text-tea-red">A</span>
                <span className="text-tea-yellow">c</span>
                <span className="text-tea-blue">o</span>
                <span className="text-tea-green">l</span>
                <span className="text-tea-red">h</span>
                <span className="text-tea-yellow">e</span>
                <span className="w-3"></span>
                <span className="text-tea-blue">T</span>
                <span className="text-tea-green">E</span>
                <span className="text-tea-red">A</span>
              </h1>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-red-100 text-tea-red px-4 py-2 rounded-full text-sm font-bold mb-6">
              <AlertCircle className="w-4 h-4" />
              Não enfrente isso sozinha
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-tea-text leading-tight mb-6">
              Terapias caras. <br/>
              <span className="text-tea-red">LOAS negado.</span> <br/>
              O apoio que você precisa está aqui.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              No Brasil, milhares de mães atípicas vivem o mesmo drama: o plano não cobre terapias, o particular é caro demais, e até o BPC/LOAS é negado.
              <br/><br/>
              O <strong>Acolhe TEA</strong> nasceu para dar apoio, esperança e ferramentas reais para ajudar seu filho a evoluir dentro de casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://pay.cakto.com.br/t9798gu_661456" 
                className="px-8 py-4 rounded-2xl bg-tea-blue text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-center"
              >
                Assinar por R$ 34,90/mês
              </a>
              <a 
                href="https://pay.cakto.com.br/hhg4gri_661453" 
                className="px-8 py-4 rounded-2xl bg-white border-2 border-tea-green text-tea-green font-bold text-lg hover:bg-tea-green hover:text-white transition-all text-center"
              >
                Plano Anual (Economize)
              </a>
            </div>
            
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-tea-green" />
              Cancelamento fácil a qualquer momento
            </p>
          </div>

          {/* Visual/Image - Phone Mockup */}
          <div className="lg:w-1/2 relative flex justify-center">
            
            {/* Phone Container */}
            <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl border-8 border-white mx-auto w-[280px] md:w-[320px] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 overflow-hidden">
              
              {/* Phone Screen */}
              <div className="bg-gray-50 h-full min-h-[580px] flex flex-col relative">
                
                {/* Status Bar */}
                <div className="bg-white px-5 py-3 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-800">9:41</span>
                  <div className="flex gap-1.5 text-gray-800">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                {/* App Header Chips */}
                <div className="bg-white pb-4 px-4 flex gap-3 overflow-x-hidden whitespace-nowrap shadow-sm z-10">
                  <div className="flex items-center gap-1.5 bg-red-100 text-red-600 px-3 py-1.5 rounded-full text-[10px] font-bold">
                    <Heart className="w-3 h-3 fill-current" /> Autocuidado
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-100 text-green-600 px-3 py-1.5 rounded-full text-[10px] font-bold">
                    <Star className="w-3 h-3 fill-current" /> Grau 2
                  </div>
                  <div className="flex items-center gap-1.5 bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full text-[10px] font-bold">
                    <Apple className="w-3 h-3 fill-current" /> Alim...
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 p-4 space-y-4 overflow-y-hidden">
                  
                  {/* Section Header */}
                  <div className="flex justify-between items-end">
                    <h3 className="font-bold text-slate-800 text-lg">Rotina de Hoje</h3>
                    <div className="flex items-center gap-1 text-tea-green text-xs font-bold cursor-pointer hover:text-green-700">
                      <Calendar className="w-3.5 h-3.5" />
                      Ver calendário
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="space-y-3">
                    
                    {/* Card 1: Alimentação */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <div className="relative">
                            <Apple className="w-6 h-6 text-red-500 fill-red-500" />
                            <div className="absolute -bottom-1 -right-1 bg-yellow-400 w-2.5 h-2.5 rounded-full border-2 border-white"></div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-green-600 tracking-wide uppercase block mb-1">Alimentação</span>
                          <h4 className="font-bold text-slate-800 text-sm leading-tight mb-2 truncate">Exploração Lúdica de Alimentos</h4>
                          <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            <span>15 min</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 mt-3" />
                      </div>
                    </div>

                    {/* Card 2: Comunicação */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                           <MessageCircle className="w-6 h-6 text-blue-500 fill-blue-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-green-600 tracking-wide uppercase block mb-1">Comunicação</span>
                          <h4 className="font-bold text-slate-800 text-sm leading-tight mb-2">A "Escolha Forçada"</h4>
                          <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            <span>5 min</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 mt-3" />
                      </div>
                    </div>

                    {/* Card 3: Sensorial */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                           <Sparkles className="w-6 h-6 text-purple-500 fill-purple-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-green-600 tracking-wide uppercase block mb-1">Sensorial</span>
                          <h4 className="font-bold text-slate-800 text-sm leading-tight mb-2">Garrafa da Calma (Visual)</h4>
                          <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            <span>15 min</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 mt-3" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center absolute bottom-0 w-full">
                   <div className="flex flex-col items-center gap-1 text-green-600 cursor-pointer">
                      <Home className="w-5 h-5" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold">Rotina</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 cursor-pointer transition-colors">
                      <BarChart2 className="w-5 h-5" />
                      <span className="text-[10px] font-medium">Evolução</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 cursor-pointer transition-colors">
                      <BookOpen className="w-5 h-5" />
                      <span className="text-[10px] font-medium">Aprender</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 cursor-pointer transition-colors">
                      <Settings className="w-5 h-5" />
                      <span className="text-[10px] font-medium">Ajustes</span>
                   </div>
                </div>
                
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-32 -right-4 md:-right-8 bg-white p-3 rounded-xl shadow-lg animate-bounce z-20 border border-green-50 hidden sm:block">
               <div className="flex items-center gap-3">
                  <div className="bg-tea-green/10 p-2 rounded-full">
                      <Heart className="w-5 h-5 text-tea-green fill-current" />
                  </div>
                  <div>
                      <p className="text-tea-text font-bold text-xs">Você não está sozinha!</p>
                      <p className="text-[10px] text-gray-500">Comunidade ativa</p>
                  </div>
               </div>
            </div>

            {/* Background Circle behind phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-tea-blue/20 to-tea-yellow/20 rounded-full -z-10 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};