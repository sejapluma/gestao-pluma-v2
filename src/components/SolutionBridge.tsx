import React from 'react';
import { CalendarIcon, DocumentTextIcon, BanknotesIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const SolutionBridge = () => {
  const features = [
    {
      id: 'calendar',
      text: 'Controle agendamentos rapidamente, sincronizado com Google Agenda',
      icon: CalendarIcon,
    },
    {
      id: 'records',
      text: 'Escreva prontuários de forma segura e organizada',
      icon: DocumentTextIcon,
    },
    {
      id: 'finance',
      text: 'Controle finanças e pagamentos',
      icon: BanknotesIcon,
    },
    {
      id: 'access',
      text: 'Acesse de qualquer lugar, pelo computador ou celular',
      icon: DevicePhoneMobileIcon,
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
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Agora imagine ter mais tempo pra você, pros estudos e pros seus pacientes, 
            simplificando a rotina com um sistema 100% adaptável pro seu jeito de fazer as coisas{' '}
            <span className="text-2xl">🌸</span>
          </p>

          <p className="text-lg md:text-xl text-[#7959F7] font-bold">
            Com o Gestão Pluma, tudo fica no lugar certo, de forma segura e organizada, 
            no formato que mais faz sentido na sua rotina!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 
                         flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-[#7959F7]/10 flex items-center justify-center mb-4
                             group-hover:bg-[#7959F7]/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#7959F7]" />
                </div>
                <p className="text-gray-700">
                  {feature.text}
                </p>
              </div>
            );
          })}
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