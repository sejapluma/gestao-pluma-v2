import React from 'react';

const CalloutBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7959F7] to-[#9747FF] opacity-90"></div>
      
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'url("/patterns/dots.svg")',
               backgroundRepeat: 'repeat',
               backgroundSize: '20px 20px',
             }}>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Não deixe pra depois a organização e tranquilidade que você merece
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CalloutBanner; 