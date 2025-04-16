import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const ProductFeatures = () => {
  const videoUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/videos/video.mp4'
    : '/videos/video.mp4';

  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      
      const element = lineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visiblePercentage = Math.max(
        0,
        Math.min(
          100,
          ((windowHeight - rect.top) / (windowHeight + rect.height)) * 100
        )
      );

      element.style.height = `${visiblePercentage}%`;
      element.style.opacity = `${visiblePercentage / 100}`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      id: 'dashboard',
      title: 'Painel inicial',
      description: 'Central de pacientes, agenda da semana, recebimentos e pagamentos pendentes, lembretes importantes e sua playlist preferida pra te acompanhar no dia de trabalho',
      icon: '🎯',
    },
    {
      id: 'profile',
      title: 'Perfil do paciente',
      description: 'Centralize as informações de cada paciente em um perfil individual: preencha a ficha de anamnese, guarde prontuários, personalize com fotos, cores e particularidades de cada um.',
      icon: '👤',
    },
    {
      id: 'patients',
      title: 'Central de pacientes',
      description: 'Cadastre seus pacientes com fichas pré-definidas, rápido e prático, com todas as informações que você precisa. Acompanhe pagamentos, frequência e crie suas etiquetas!',
      icon: '👥',
    },
    {
      id: 'office',
      title: 'Escritório',
      description: 'Arquive todos os documentos importantes, separados por categorias como: contabilidade, normativas, regulamentos, contratos… Crie suas próprias etiquetas e gerencie do seu jeito!',
      icon: '📁',
    },
    {
      id: 'treasury',
      title: 'Tesouraria',
      description: 'Painel completo pra organizar suas finanças de uma vez por todas. Acompanhe recebimentos, contas a pagar, controle de gastos e fluxo de caixa. Todas as ferramentas que você precisa pra cuidar da sua saúde financeira, ter mais previsibilidade e atingir suas metas de crescimento',
      icon: '💰',
    },
    {
      id: 'templates',
      title: 'Modelos pré-definidos',
      description: 'Templates editáveis de Ficha de Anamnese, Registro de sessão, Prontuário, tudo prontinho pra padronizar seus registros com facilidade',
      icon: '📋',
    },
  ];

  const horizontalFeatures = [
    {
      id: 'calendar',
      title: 'Calendário',
      description: 'Visão completa do mês, incluindo sessões agendadas, prazos importantes, compromissos, eventos e reuniões. Monte e acompanhe seu planejamento em um lugar só!',
      icon: '📅',
    },
    {
      id: 'study',
      title: 'Sala de estudos',
      description: 'Monitore seu progresso em formações e especializações, escreva os conteúdos das aulas no Caderno Virtual, guarde certificados na Pasta de Diplomas, adicione cursos à Lista de Desejos e registre aprendizados importantes para consultar quando precisar!',
      icon: '📚',
    },
    {
      id: 'library',
      title: 'Biblioteca',
      description: 'Acompanhe suas leituras em andamento, anote os livros que quer ler no futuro pra não se perder na lista, escreva citações e comentários, dê nota pra cada leitura e organize sua estante por gênero, autor, tema ou o que preferir',
      icon: '📖',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por dentro do produto
          </h2>
          <p className="text-xl text-gray-600">
            Vem ver por dentro o sistema que vai te trazer de volta mais tempo e liberdade:
          </p>
        </div>

        <div className="mb-20">
          <div className="relative w-full max-w-5xl mx-auto">
            <video 
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
              poster="/images/video-thumb.png"
            >
              <source src={videoUrl} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        <div className="relative space-y-24 mb-32">
          {/* Linha vertical animada */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-[#7959F7]/30 to-[#7959F7] transform-gpu transition-all duration-300"
              style={{ height: '0%', opacity: 0 }}
            />
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                        items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                              transition-all duration-300 transform hover:-translate-y-1
                              border border-[#7959F7]/10 group`}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-[#7959F7]/10 flex items-center justify-center
                                  group-hover:bg-[#7959F7]/20 transition-colors duration-300">
                        <span className="text-3xl" role="img" aria-label={feature.title}>
                          {feature.icon}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                {feature.id === 'patients' ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/images/pacientes.png"
                      alt="Central de pacientes"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : feature.id === 'dashboard' ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/images/inicial.png"
                      alt="Painel inicial"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : feature.id === 'profile' ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/images/perfil.png"
                      alt="Perfil do paciente"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : feature.id === 'office' ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/images/escritorio.png"
                      alt="Escritório"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : feature.id === 'treasury' ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/images/tesouraria.png"
                      alt="Tesouraria"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : feature.id === 'templates' ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/images/anamnese.png"
                      alt="Modelos pré-definidos"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className={`w-32 h-32 rounded-full bg-[#7959F7]/5 
                                ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Seção horizontal de 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {horizontalFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-1
                        border border-[#7959F7]/10 group"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#7959F7]/10 flex items-center justify-center
                              group-hover:bg-[#7959F7]/20 transition-colors duration-300">
                    <span className="text-3xl" role="img" aria-label={feature.title}>
                      {feature.icon}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={scrollToPricing}
            className="bg-[#7959F7] text-white px-8 py-4 rounded-lg text-lg font-semibold 
            hover:bg-[#6445e0] transition-all duration-300 shadow-lg 
            hover:shadow-[#7959F7]/30">
            Quero organizar minha clínica
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures; 