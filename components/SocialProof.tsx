import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = ({ quote, author, role, location, color }: { quote: string, author: string, role: string, location: string, color: string }) => (
  <div className={`p-8 rounded-4xl h-full flex flex-col justify-between ${color}`}>
    <div>
      <Quote className="w-8 h-8 text-black/10 mb-6" />
      <p className="text-slate-700 font-medium text-lg mb-6 leading-relaxed">"{quote}"</p>
    </div>
    <div>
      <p className="font-bold text-slate-800">{author}</p>
      <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mt-1">{location}</p>
    </div>
  </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-tea-text mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-slate-500 text-lg">
            Famílias reais que encontraram no Acolhe TEA o apoio que precisavam.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial 
            quote="Eu chorei hoje... fiz o exercício de atenção compartilhada e ele ME OLHOU e sorriu. Obrigada, Acolhe TEA!"
            author="Mãe do Edu"
            role="Mãe atípica"
            location="São Paulo - SP"
            color="bg-blue-50"
          />
          <Testimonial 
            quote="A rotina para trabalhar a seletividade alimentar tem sido incrível. Meu filho provou duas novas frutas essa semana!"
            author="Camila R."
            role="Mãe do Noah"
            location="Rio de Janeiro - RJ"
            color="bg-green-50"
          />
          <Testimonial 
            quote="Gente, comecei as atividades de fono do app e meu filho tá tentando imitar sons pela primeira vez."
            author="Mãe do Lucas"
            role="Mãe atípica"
            location="Belo Horizonte - MG"
            color="bg-yellow-50"
          />
          <Testimonial 
            quote="O app me mostrou como estimular coordenação motora com coisas que tenho em casa. Mudou tudo."
            author="Mãe da Laura"
            role="Mãe atípica"
            location="Salvador - BA"
            color="bg-slate-50"
          />
          <Testimonial 
            quote="O app montou tudo pra mim só com a idade e o grau dele. Agora sei o que fazer todo dia e o Theo tá mais calmo."
            author="Mãe do Theo"
            role="Mãe atípica"
            location="Porto Alegre - RS"
            color="bg-purple-50"
          />
          <Testimonial 
            quote="Eu nunca imaginei ter acesso a atividades validadas por Harvard e Oxford. E o melhor: tudo explicado de um jeito simples."
            author="Mãe do Enzo"
            role="Mãe atípica"
            location="Brasília - DF"
            color="bg-orange-50"
          />
        </div>

      </div>
    </section>
  );
};