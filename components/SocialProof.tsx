import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const Testimonial = ({ quote, author, role, location }: { quote: string, author: string, role: string, location: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-tea-lightBlue/10 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <Quote className="w-6 h-6 text-tea-blue/20 fill-current" />
    </div>
    <p className="text-gray-700 text-base italic mb-6 flex-grow leading-relaxed">"{quote}"</p>
    <div className="border-t border-gray-100 pt-4">
      <div className="flex justify-between items-end mb-1">
        <p className="font-bold text-tea-text text-sm">{author}</p>
        <div className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{location}</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 font-medium">{role}</p>
    </div>
  </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-tea-blue relative overflow-hidden">
       {/* Decorative background elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
       <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Histórias reais de quem vive <br className="hidden md:block"/> a mesma luta que você
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Junte-se a milhares de famílias que transformaram o desenvolvimento de seus filhos com amor e as ferramentas certas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial 
            quote="Luto há anos para conseguir o LOAS e nada… O dinheiro sempre foi curto. Com o Acolhe TEA consegui estimular meu filho dentro de casa com coisas que eu já tinha. Gratidão eterna!"
            author="Mariana Souza"
            role="Mãe do Pedro, 4 anos"
            location="São Paulo - SP"
          />
          <Testimonial 
            quote="O particular é impossível de pagar na minha cidade, pediram 600 reais a sessão. Esse app mudou nossa vida. As atividades de fono ajudaram ele a soltar as primeiras palavras."
            author="Carla Dias"
            role="Mãe do Lucas, 3 anos"
            location="Rio de Janeiro - RJ"
          />
          <Testimonial 
            quote="Meu filho evoluiu muito com a rotina sensorial. Antes ele tinha muitas crises, hoje conseguimos controlar melhor. Finalmente sinto que não estou mais sozinha nessa jornada."
            author="Patrícia Lima"
            role="Mãe da Bia, 6 anos"
            location="Belo Horizonte - MG"
          />
          {/* New Testimonials */}
          <Testimonial 
            quote="Eu me sentia perdida logo após o diagnóstico. O aplicativo me deu um norte e a segurança de saber que estou fazendo o melhor por ele todos os dias."
            author="Fernanda Alves"
            role="Mãe do Davi, 2 anos"
            location="Salvador - BA"
          />
          <Testimonial 
            quote="É incrível como atividades simples conectam a gente. Ontem ele me pediu para brincar, coisa que nunca fazia antes! Estou emocionada."
            author="Renata Guedes"
            role="Mãe da Sofia, 5 anos"
            location="Curitiba - PR"
          />
          <Testimonial 
            quote="Não tenho condições de pagar terapia todo dia. O Acolhe TEA é minha salvação para manter os estímulos em casa sem gastar o que não tenho."
            author="Tatiane Mendes"
            role="Mãe do Pedro, 3 anos"
            location="Recife - PE"
          />
        </div>

        <div className="mt-12 text-center">
           <button className="bg-white text-tea-blue hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1">
             Quero fazer parte dessa comunidade
           </button>
        </div>

      </div>
    </section>
  );
};