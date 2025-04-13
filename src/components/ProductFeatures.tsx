import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      id: 'dashboard',
      title: 'Painel inicial',
      description: 'Central de pacientes, agenda da semana, recebimentos e pagamentos pendentes, lembretes importantes e sua playlist preferida pra te acompanhar no dia de trabalho',
      icon: '🎯',
    },
    {
      id: 'calendar',
      title: 'Calendário',
      description: 'Visão completa do mês, incluindo sessões agendadas, prazos importantes, compromissos, eventos e reuniões. Monte e acompanhe seu planejamento em um lugar só!',
      icon: '📅',
    },
    {
      id: 'patients',
      title: 'Central de pacientes',
      description: 'Cadastre seus pacientes com fichas pré-definidas, rápido e prático, com todas as informações que você precisa. Acompanhe pagamentos, frequência e crie suas etiquetas!',
      icon: '👥',
    },
    {
      id: 'profile',
      title: 'Perfil do paciente',
      description: 'Centralize as informações de cada paciente em um perfil individual: preencha a ficha de anamnese, guarde prontuários, personalize com fotos, cores e particularidades de cada um.',
      icon: '👤',
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
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/images/video-thumbnail.jpg"
            >
              <source src="/videos/product-demo.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 
                       border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3" role="img" aria-label={feature.title}>
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#7959F7] text-white px-8 py-4 rounded-lg text-lg font-semibold 
            hover:bg-[#6445e0] transition-all duration-300 shadow-lg 
            hover:shadow-[#7959F7]/30">
            Quero conhecer o sistema
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures; 