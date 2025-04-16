import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheckIcon,
  ClockIcon,
  CreditCardIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { trackBeginCheckout, trackContact } from '../services/GoogleAnalytics';
import { trackInitiateCheckout, trackContact as trackPixelContact } from '../services/MetaPixel';

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

  const handleCtaClick = () => {
    trackBeginCheckout();
    trackInitiateCheckout();
    window.location.href = 'https://payment.ticto.app/O0F419757';
  };

  const handleWhatsAppClick = () => {
    trackContact();
    trackPixelContact();
    window.location.href = 'https://chat.whatsapp.com/InGI2c8jH8928jRjcjyPJ1';
  };

  return (
    <section id="pricing" className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#7959F7]/30 to-transparent" />
      </div>

      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Coluna da imagem (3/4) */}
          <div className="lg:w-3/4">
            <div className="relative w-full min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/mock-devices.png"
                alt="Gestão Pluma em diferentes dispositivos"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          </div>

          {/* Coluna do pricing (1/4) */}
          <div className="lg:w-1/4 lg:min-w-[280px] -ml-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#7959F7]/10 h-full flex flex-col">
              <div className="p-4 lg:p-5 flex-grow">
                {/* Cabeçalho */}
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 bg-[#7959F7]/10 rounded-full text-[#7959F7] font-medium mb-3">
                    Oferta Especial
                  </span>
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <span className="text-gray-500 line-through text-xl">De R$347</span>
                    <div className="flex items-baseline justify-center">
                      <span className="text-gray-900 font-bold text-2xl">por</span>
                      <span className="text-[#7959F7] font-bold text-5xl ml-2">R$97</span>
                    </div>
                  </div>
                </div>

                {/* Lista de benefícios */}
                <div className="space-y-3">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.id} className="flex items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-xl bg-[#7959F7]/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[#7959F7]" />
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{benefit.text}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Botão CTA */}
                <div className="mt-8">
                  <button
                    onClick={handleCtaClick}
                    className="w-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#7959F7] to-[#6244D9] rounded-lg hover:from-[#6244D9] hover:to-[#513CC7] transition-all duration-200 shadow-lg transform hover:scale-105"
                  >
                    Quero organizar minha clínica
                  </button>
                </div>

                {/* Footer com selos de segurança */}
                <div className="mt-8 bg-gray-50 p-3 flex items-center justify-center gap-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-gray-600">
                    <ShieldCheckIcon className="w-5 h-5" />
                    <span className="text-sm">Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <LockClosedIcon className="w-5 h-5" />
                    <span className="text-sm">LGPD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Texto informativo separado */}
      <div className="max-w-xl mx-auto text-center mt-16 px-4">
        <p className="text-gray-600">
          Ao clicar no botão acima,<br />
          você será direcionada para o checkout seguro da nossa plataforma parceira Ticto.
        </p>
      </div>
    </section>
  );
};

export default PricingSection; 