import React from 'react';
import { 
  ShieldCheckIcon,
  ClockIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';

const PricingSection = () => {
  const benefits = [
    {
      id: 'payment',
      text: 'Pagamento único, sem mensalidades, pra facilitar sua vida.',
      icon: CreditCardIcon,
    },
    {
      id: 'guarantee',
      text: 'Garantia de 15 dias: se não se adaptar, devolvemos seu dinheiro, sem stress.',
      icon: ClockIcon,
    },
    {
      id: 'security',
      text: 'Selos de segurança: Pagamento seguro, conformidade LGPD',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#7959F7]/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#7959F7]/10">
          <div className="p-8 md:p-12">
            {/* Cabeçalho */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-[#7959F7]/10 rounded-full text-[#7959F7] font-medium mb-4">
                Oferta Especial
              </span>
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="text-gray-500 line-through text-2xl">De R$347</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-900 font-bold text-3xl">por</span>
                  <span className="text-[#7959F7] font-bold text-6xl ml-2">R$97</span>
                </div>
              </div>
            </div>

            {/* Lista de benefícios */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.id} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#7959F7]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#7959F7]" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg">{benefit.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Botão CTA */}
            <div className="text-center">
              <a
                href="https://payment.ticto.app/O5114D5AA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#7959F7] text-white font-semibold 
                         rounded-full shadow-lg hover:bg-[#6947E5] transform hover:-translate-y-1 
                         transition-all duration-200"
              >
                Quero organizar minha clínica
              </a>
            </div>
          </div>

          {/* Footer com selos de segurança */}
          <div className="bg-gray-50 p-6 flex items-center justify-center gap-6 border-t border-gray-100">
            <img src="/images/secure-payment.png" alt="Pagamento Seguro" className="h-12 opacity-75" />
            <img src="/images/lgpd-compliant.png" alt="Conformidade LGPD" className="h-12 opacity-75" />
          </div>
        </div>

        {/* Garantia destacada */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Ao clicar no botão acima, você será direcionada para o checkout seguro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 