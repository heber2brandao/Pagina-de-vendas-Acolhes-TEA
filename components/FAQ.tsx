import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-tea-text">{question}</span>
        {isOpen ? <ChevronUp className="text-tea-blue" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-tea-text mb-12">
          Dúvidas Frequentes
        </h2>

        <div className="bg-gray-50 rounded-3xl p-6 md:p-10">
          <FAQItem 
            question="O Acolhe TEA substitui terapia presencial?" 
            answer="Não. O Acolhe TEA é uma ferramenta de apoio complementar para que os pais possam estimular os filhos em casa. Ele não substitui o diagnóstico nem o tratamento realizado por profissionais da saúde."
          />
          <FAQItem 
            question="Serve para qualquer grau de TEA?" 
            answer="Sim! No momento do cadastro, o aplicativo personaliza as atividades baseando-se no nível de suporte (1, 2 ou 3) e nas necessidades específicas que você relatar."
          />
          <FAQItem 
            question="Funciona para seletividade alimentar?" 
            answer="Sim, temos um módulo específico desenvolvido com base em Terapia Ocupacional para ajudar na aproximação e aceitação de novos alimentos de forma gradativa e sem traumas."
          />
          <FAQItem 
            question="Preciso de materiais caros para fazer as atividades?" 
            answer="Não! 95% das atividades são pensadas para usar objetos que você já tem em casa, como potes, colheres, tecidos, grãos e brinquedos simples."
          />
          <FAQItem 
            question="Como são escolhidas as atividades?" 
            answer="Nossa inteligência artificial seleciona atividades baseadas em protocolos validados internacionalmente (como o Modelo Denver de Intervenção Precoce e ABA) adequadas à idade e perfil do seu filho."
          />
        </div>
      </div>
    </section>
  );
};