import React from 'react';
import Image from 'next/image';

const SolutionBridge = () => {
  const benefits = [
    {
      id: 'calendar',
      text: 'Controle agendamentos rapidamente, sincronizado com Google Agenda',
      icon: '📅',
    },
    {
      id: 'records',
      text: 'Escreva prontuários de forma segura e organizada',
      icon: '📋',
    },
    {
      id: 'finance',
      text: 'Controle finanças e pagamentos',
      icon: '💰',
    },
    {
      id: 'access',
      text: 'Acesse de qualquer lugar, pelo computador ou celular',
      icon: '📱',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#7959F7]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            No fim do dia, você se sente exausta, não só pelo trabalho, 
            mas por tudo que envolve administração e gestão.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8">
            Agora imagine ter mais tempo pra você, pros estudos e pros seus pacientes, 
            simplificando a rotina com um sistema 100% adaptável pro seu jeito de fazer as coisas{' '}
            <span className="text-2xl">🌸</span>
          </p>

          <p className="text-lg md:text-xl text-[#7959F7] font-semibold">
            Com o Gestão Pluma, tudo fica no lugar certo, de forma segura e organizada, 
            no formato que mais faz sentido na sua rotina!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm 
                       hover:shadow-md transition-shadow border border-gray-100"
            >
              <span className="text-3xl mr-4" role="img" aria-label="ícone">
                {benefit.icon}
              </span>
              <p className="text-lg text-gray-700">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-b from-white to-[#7959F7]/5 text-4xl">
              ✨
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBridge; 