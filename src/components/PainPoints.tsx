import React, { useEffect, useRef } from 'react';
import { FolderIcon, ClockIcon, DocumentTextIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const PainPoints = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      
      const element = lineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula a porcentagem visível da linha
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
    handleScroll(); // Chama uma vez para inicializar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pains = [
    {
      id: 'disorganized',
      text: 'Já sentiu aquela agonia de procurar uma informação importante entre pastas, planilhas e arquivos espalhados?',
      icon: FolderIcon,
      position: 'left',
    },
    {
      id: 'paper',
      text: 'Vive folheando agendas, blocos, cadernos e folhas de papel espalhadas',
      icon: DocumentTextIcon,
      position: 'right',
    },
    {
      id: 'manual',
      text: 'Gasta horas e horas elaborando prontuários e fichas de pacientes manualmente',
      icon: ClockIcon,
      position: 'left',
    },
    {
      id: 'financial',
      text: 'Sofre com o financeiro bagunçado, lidando com inadimplências e atrasos',
      icon: BanknotesIcon,
      position: 'right',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Quer continuar sentindo isso?
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-[#7959F7]/30 to-[#7959F7] transform-gpu transition-all duration-300"
              style={{ height: '0%', opacity: 0 }}
            />
          </div>
          
          <div className="space-y-16">
            {pains.map((pain) => {
              const Icon = pain.icon;
              return (
                <div
                  key={pain.id}
                  className={`flex flex-col ${pain.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} 
                            items-center gap-8 md:gap-16`}
                >
                  <div className="w-full md:w-1/2">
                    <div className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl 
                                  transition-all duration-300 transform hover:-translate-y-1
                                  border border-[#7959F7]/10 group
                                  ${pain.position === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-[#7959F7]/10 flex items-center justify-center
                                      group-hover:bg-[#7959F7]/20 transition-colors duration-300">
                            <Icon className="w-8 h-8 text-[#7959F7]" />
                          </div>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed flex-1">
                          {pain.text}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className={`w-32 h-32 rounded-full bg-[#7959F7]/5 
                                  ${pain.position === 'right' ? 'md:mr-auto' : 'md:ml-auto'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 