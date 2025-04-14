import React from 'react';
import Image from 'next/image';
import { 
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const TargetAudience = () => {
  const profiles = [
    {
      id: 'beginner',
      description: 'Está iniciando a carreira e não sabe por onde começar a estruturar seus atendimentos',
      icon: SparklesIcon,
    },
    {
      id: 'growing',
      description: 'Já atende há um tempo, mas se perde na gestão e não consegue crescer por causa da bagunça',
      icon: ChartBarIcon,
    },
    {
      id: 'solo',
      description: 'Faz tudo sozinha e se desdobra em 10 pra dar conta de financeiro, atendimentos, documentos, marketing…',
      icon: UserGroupIcon,
    },
    {
      id: 'visionary',
      description: 'Tem visão de futuro e sabe que precisa de organização e processos pra ter prosperidade com a clínica',
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <section className="py-20 bg-[#7959F7]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-3xl font-medium text-[#7959F7] mb-2">
            Produzido com carinho para psicólogas que:
          </h2>
          <div className="w-24 h-1 bg-[#7959F7]/30 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Coluna da esquerda - Lista de perfis */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
            {profiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <div
                  key={profile.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                           border border-[#7959F7]/10 flex items-start gap-6 group max-w-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#7959F7]/10 flex items-center justify-center
                                transform transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-[#7959F7]" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed flex-1">
                    {profile.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Coluna da direita - Imagem */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full min-h-[600px] lg:min-h-[800px] -mt-24">
              <Image
                src="/images/tablet-diag.png"
                alt="Gestão Pluma no tablet"
                fill
                className="object-contain scale-125"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 italic">
            Se você se identificou com alguma dessas situações, 
            o Gestão Pluma foi feito pensando em você ♥︎
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience; 