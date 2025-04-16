import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const socialLinks = [
    {
      id: 'instagram',
      icon: '/icons/instagram.svg',
      href: '#',
      label: 'Instagram da Pluma'
    },
    {
      id: 'pinterest',
      icon: '/icons/pinterest.svg',
      href: '#',
      label: 'Pinterest da Pluma'
    },
    {
      id: 'whatsapp',
      icon: '/icons/whatsapp.svg',
      href: '#',
      label: 'WhatsApp da Pluma'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/InGI2c8jH8928jRjcjyPJ1', '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sobre a Pluma
          </h2>
          <div className="w-24 h-1 bg-[#7959F7] mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-lg leading-relaxed">
            Somos uma empresa com a missão de ajudar psicólogas a realizarem seu propósito: cuidar de pessoas. 
            Acreditamos que a tecnologia tem o poder transformador de simplificar rotinas e devolver a qualidade 
            de vida para profissionais que cumprem um papel tão fundamental. Queremos que você tenha tempo e 
            tranquilidade para o que realmente importa: você, seus estudos e seus pacientes.
          </p>

          <p className="text-lg leading-relaxed">
            Mais de 48% dos psicólogos clínicos brasileiros apresentam indícios de burnout e{' '}
            <strong>1 em cada 3</strong> pensa em desistir da carreira por causa da sobrecarga, 
            queremos mudar esse cenário através da inovação e da colaboração.
          </p>

          <p className="text-xl font-medium text-[#7959F7] italic text-center mt-8">
            Pluma: tecnologia que impulsiona o melhor do cuidado humano.
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={link.label}
            >
              <div className="w-12 h-12 rounded-full bg-[#7959F7]/10 flex items-center justify-center 
                             transition-all duration-300 group-hover:bg-[#7959F7] group-hover:shadow-lg">
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-6 h-6 opacity-75 transition-opacity duration-300 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </a>
          ))}
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="mt-8 w-full sm:w-auto"
          variant="primary"
          size="lg"
        >
          Entrar no grupo do WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default AboutSection; 