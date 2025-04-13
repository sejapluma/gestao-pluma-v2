import React from 'react';

const PainPoints = () => {
  const pains = [
    {
      id: 'disorganized',
      text: 'Já sentiu aquela agonia de procurar uma informação importante entre pastas, planilhas e arquivos espalhados?',
      icon: '📁',
    },
    {
      id: 'paper',
      text: 'Vive folheando agendas, blocos, cadernos e folhas de papel espalhadas',
      icon: '📝',
    },
    {
      id: 'manual',
      text: 'Gasta horas e horas elaborando prontuários e fichas de pacientes manualmente',
      icon: '⏰',
    },
    {
      id: 'financial',
      text: 'Sofre com o financeiro bagunçado, lidando com inadimplências e atrasos',
      icon: '💸',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Quer continuar sentindo isso?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {pains.map((pain) => (
            <div
              key={pain.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow 
                        border border-gray-100 flex items-start space-x-4"
            >
              <span className="text-3xl" role="img" aria-label="ícone">
                {pain.icon}
              </span>
              <p className="text-lg text-gray-700 flex-1">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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

export default PainPoints; 