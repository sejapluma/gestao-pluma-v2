import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheckIcon,
  ClockIcon,
  CreditCardIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { trackBeginCheckout } from '../services/GoogleAnalytics';
import { trackInitiateCheckout } from '../services/MetaPixel';
import { ga } from '../services/GoogleAnalytics';
import { fbPixel } from '../services/MetaPixel';

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
    ga.trackContact();
    fbPixel.trackContact();
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
                <div className="mt-4">
                  <button
                    onClick={handleCtaClick}
                    className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#7959F7] to-[#6244D9] rounded-lg hover:from-[#6244D9] hover:to-[#513CC7] transition-all duration-200 shadow-lg"
                  >
                    Quero organizar minha clínica
                  </button>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleWhatsAppClick}
                    className="mt-8 w-full bg-[#25D366] text-white px-6 py-4 rounded-lg font-medium
                              hover:bg-[#20BD5A] transform hover:scale-105 transition-all duration-200
                              flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04.962-1.04 2.351c0 1.39 1.013 2.729 1.155 2.927.142.198 2.006 3.2 4.97 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Falar no WhatsApp
                  </button>
                </div>
              </div>

              {/* Footer com selos de segurança */}
              <div className="bg-gray-50 p-3 flex items-center justify-center gap-4 border-t border-gray-100">
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

            {/* Garantia destacada */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Ao clicar no botão acima,<br />
                você será direcionada para o checkout seguro da nossa plataforma parceira Ticto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 