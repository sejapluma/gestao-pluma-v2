import React from 'react';

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8">
          <span className="block mb-2">
            Mais tempo pros seus pacientes,
          </span>
          <span className="block text-[#7959F7]">
            menos estresse com papelada
          </span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Um sistema completo no Notion pra organizar prontuários, planilha 
          financeira, agenda, documentos e tudo que você precisa pra administrar 
          sua própria clínica com leveza ❤️
        </p>

        <div className="mt-10">
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center px-8 py-4 bg-[#7959F7] text-white font-semibold 
                     rounded-full shadow-lg hover:bg-[#6947E5] transform hover:-translate-y-1 
                     transition-all duration-200"
          >
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 