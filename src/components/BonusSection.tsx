import React from 'react';
import { 
  PlayCircleIcon,
  SparklesIcon,
  PaintBrushIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const BonusSection = () => {
  const bonuses = [
    {
      id: 'tutorials',
      title: 'Tutoriais detalhados',
      description: 'Tutoriais pra te ajudar a configurar e personalizar, mesmo que você não tenha habilidades com a plataforma',
      icon: PlayCircleIcon,
    },
    {
      id: 'tips',
      title: 'Dicas e truques',
      description: 'Dicas e truques do Notion pra deixar sua organização ainda mais prática e ágil',
      icon: SparklesIcon,
    },
    {
      id: 'pack',
      title: 'Pack de personalização',
      description: 'Pack de capas, ícones e imagens pra personalizar o template com o seu estilo',
      icon: PaintBrushIcon,
    },
    {
      id: 'community',
      title: 'Comunidade exclusiva',
      description: 'Acesso à comunidade de Psicólogas Empreendedoras',
      icon: UserGroupIcon,
    },
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradiente de fundo especial */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7959F7]/20 via-white to-[#7959F7]/10" />
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#7959F7]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7959F7]/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#7959F7]/10 rounded-full text-[#7959F7] font-medium mb-4">
            Presentes especiais pra você
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bônus
          </h2>
          <p className="text-xl text-gray-600">
            Cada detalhe pensado pra você
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
                         border-2 border-[#7959F7]/10 hover:border-[#7959F7]/30 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7959F7] to-[#6445e0] 
                                flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {bonus.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-[#7959F7] to-[#6445e0] text-white px-8 py-4 rounded-lg 
            text-lg font-semibold hover:shadow-xl transition-all duration-300 
            hover:shadow-[#7959F7]/30 transform hover:-translate-y-1">
            Quero organizar minha clínica
          </button>
        </div>
      </div>
    </section>
  );
};

export default BonusSection; 