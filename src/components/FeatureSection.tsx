import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Coluna de texto */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Se você é psicóloga autônoma ou empreendedora, sabe como o dia a dia pode ser pesado, né? 
                Agendamentos, prontuários, finanças, recibos e notas fiscais... tudo isso pode acabar com 
                a sua energia e tirar o foco do que realmente importa: seus pacientes.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Mas e se a gente pudesse simplificar toda a parte administrativa em um lugar só, 
                lindo, prático e personalizável pra ficar do seu jeitinho?
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Com o Gestão Pluma, você organiza sua clínica de um jeito rápido e fácil, 
                com modelos pré-configurados pra preencher <span className="text-pink-500">♥︎</span>
              </p>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/image-1.png"
                alt="Interface do Gestão Pluma"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 