import React from 'react';
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  ScaleIcon,
  BuildingOfficeIcon,
  PaintBrushIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Benefits = () => {
  const benefits = [
    {
      id: 'time',
      title: 'Mais tempo',
      description: 'Pra cuidar de você, dos seus pacientes, da sua vida.',
      icon: ClockIcon,
    },
    {
      id: 'peace',
      title: 'Tranquilidade',
      description: 'Tudo organizado, seguro, sem preocupações.',
      icon: ShieldCheckIcon,
    },
    {
      id: 'efficiency',
      title: 'Eficiência',
      description: 'Foque no que realmente importa, sem stress com burocracias.',
      icon: BoltIcon,
    },
    {
      id: 'compliance',
      title: 'Conformidade',
      description: 'Tudo baseado em resoluções e normativas, evite riscos legais.',
      icon: ScaleIcon,
    },
    {
      id: 'professionalism',
      title: 'Profissionalismo',
      description: 'Crescer exige organização e disciplina, pare de se enxergar como autônoma e assuma a posição de empreendedora',
      icon: BuildingOfficeIcon,
    },
    {
      id: 'customizable',
      title: 'Personalizável',
      description: 'Quer mudar o visual trocando cores, imagens e estilo? Reorganizar os blocos e páginas? Tudo é possível no Notion!',
      icon: PaintBrushIcon,
    },
    {
      id: 'support',
      title: 'Suporte',
      description: 'Estamos aqui pra te apoiar em cada passo. ♥︎',
      icon: HeartIcon,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#7959F7]/5 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios
          </h2>
          <div className="w-20 h-1 bg-[#7959F7] mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Frame decorativo */}
          <div className="absolute -left-4 -right-4 -top-4 -bottom-4 border-2 border-[#7959F7]/20 rounded-3xl" />
          <div className="absolute -left-2 -right-2 -top-2 -bottom-2 border-2 border-[#7959F7]/10 rounded-2xl" />
          
          <div className="bg-white rounded-xl p-8 shadow-lg relative">
            <div className="space-y-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.id}
                    className="flex items-start gap-6 p-4 rounded-xl hover:bg-[#7959F7]/5 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7959F7] to-[#6445e0] 
                        flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#7959F7] text-white px-8 py-4 rounded-lg text-lg font-semibold 
            hover:bg-[#6445e0] transition-all duration-300 shadow-lg 
            hover:shadow-[#7959F7]/30">
            Quero organizar minha clínica
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 