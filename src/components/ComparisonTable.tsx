import React from 'react';

const ComparisonTable = () => {
  const comparisons = [
    {
      feature: 'Custo',
      pluma: 'Pagamento Único (acesso vitalício)',
      saas: 'Mensalidade/Anuidade recorrente',
      diy: 'Gratuito (mas custa seu TEMPO)',
    },
    {
      feature: 'Personalização',
      pluma: 'Alta (flexibilidade do Notion)',
      saas: 'Baixa ou Média',
      diy: 'Média (se souber fazer)',
    },
    {
      feature: 'Curva de Aprendizado',
      pluma: 'Baixa (intuitivo + tutoriais)',
      saas: 'Média a Alta',
      diy: 'Alta (estruturar do zero)',
    },
    {
      feature: 'Interface',
      pluma: 'Visual, limpa e agradável',
      saas: 'Geralmente funcional, menos flexível',
      diy: 'Depende da sua habilidade',
    },
    {
      feature: 'Centralização',
      pluma: 'Excelente (tudo no Notion)',
      saas: 'Boa (dentro do software)',
      diy: 'Difícil, fragmentada',
    },
    {
      feature: 'Foco no Psicólogo',
      pluma: 'Desenvolvido em conjunto com psicólogas',
      saas: 'Geral',
      diy: 'Você precisa construir tudo',
    },
    {
      feature: 'Tempo de Setup',
      pluma: 'Rápido (template pronto)',
      saas: 'Variável',
      diy: 'Alto',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Comparativo de Soluções
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-6 text-left text-lg font-semibold text-gray-700">
                  Característica
                </th>
                <th className="py-4 px-6 text-left text-lg font-semibold text-[#7959F7]">
                  Gestão Pluma (Notion)
                </th>
                <th className="py-4 px-6 text-left text-lg font-semibold text-gray-700">
                  Softwares de Gestão (SaaS)
                </th>
                <th className="py-4 px-6 text-left text-lg font-semibold text-gray-700">
                  Planilhas / Papel / DIY Notion
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr 
                  key={row.feature}
                  className={`
                    border-b border-gray-100 hover:bg-[#7959F7]/5 transition-colors duration-200
                    ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  `}
                >
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-[#7959F7]">
                    {row.pluma}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.saas}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.diy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#7959F7] text-white px-8 py-4 rounded-lg text-lg font-semibold 
            hover:bg-[#6445e0] transition-all duration-300 shadow-lg 
            hover:shadow-[#7959F7]/30">
            Quero conhecer o Gestão Pluma
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable; 