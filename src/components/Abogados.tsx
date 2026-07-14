import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Mail, 
  ChevronRight, 
  Compass, 
  Star, 
  ShieldAlert, 
  X,
  FileCheck2,
  CalendarCheck2
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember, SectionId } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface AbogadosProps {
  setActiveSection: (section: SectionId) => void;
}

export default function Abogados({ setActiveSection }: AbogadosProps) {
  const [selectedAttorney, setSelectedAttorney] = useState<TeamMember | null>(null);

  const pillars = [
    {
      title: 'Nuestra Misión',
      desc: 'Proveer un patrocinio jurídico estratégico e innovador de excelencia, superando las expectativas de nuestros clientes individuales y corporativos con rigor legal y empatía.',
      icon: <Compass className="text-prestige-gold" size={24} />
    },
    {
      title: 'Nuestra Visión',
      desc: 'Ser el estudio de abogados referente en la República Argentina en cuanto a calidad de servicio, discreción indiscutible y resolución ágil de litigios de alta complejidad.',
      icon: <Star className="text-prestige-gold" size={24} />
    },
    {
      title: 'Valores Rectores',
      desc: 'Honestidad absoluta, secreto profesional inquebrantable, actualización constante y un compromiso social profundo con la justicia civil, penal y social.',
      icon: <FileCheck2 className="text-prestige-gold" size={24} />
    }
  ];

  const handleContactClick = (email: string) => {
    setSelectedAttorney(null);
    setActiveSection('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      
      {/* 1. INSTITUTION STATEMENT BANNER */}
      <section className="bg-gradient-to-r from-prestige-navy via-[#10243d] to-[#0a1829] text-white py-16 text-center relative overflow-hidden border-b border-prestige-border/20">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-2">
            Nuestra Institución
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Excelencia Jurídica con Compromiso y Discreción.
          </h1>
          <div className="w-16 h-0.5 bg-prestige-gold mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. HISTORY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 text-left">
              <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-2">
                Nuestra Historia
              </span>
              <h2 className="font-serif text-3xl font-bold text-prestige-navy tracking-tight mb-6">
                Fundamentos de una Trayectoria Distinguida
              </h2>
              <div className="space-y-4 text-sm text-prestige-muted font-light leading-relaxed">
                <p>
                  El Estudio Morales Abogados fue fundado con la firme premisa de proveer servicios jurídicos del más alto nivel académico y práctico. Desde el inicio, nos hemos diferenciado por un enfoque personalizado, donde cada cliente recibe soluciones diseñadas a la medida de su conflicto.
                </p>
                <p>
                  A lo largo de los años, el estudio ha crecido incorporando especialistas destacados en diversas disciplinas del derecho penal, civil, familiar y laboral. Esta sinergia interdisciplinar nos permite abordar problemáticas complejas desde múltiples aristas estratégicas, logrando altas tasas de éxito tanto en mediaciones extrajudiciales como en estrados judiciales.
                </p>
                <p>
                  Nos distinguimos por actuar con absoluta reserva y prudencia, resguardando en todo momento los intereses patrimoniales, comerciales y personales de nuestros patrocinados en todo el territorio nacional.
                </p>
              </div>
            </div>

            {/* Right Photo Frame Column */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-prestige-border/50 shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Estudio Morales biblioteca vintage" 
                  className="w-full h-full object-cover grayscale transition-all duration-750 hover:grayscale-0 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISIÓN, VISIÓN, VALORES BENTO SECTION */}
      <section className="py-20 bg-prestige-bg border-y border-prestige-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-prestige-border/50 shadow-sm text-left flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-prestige-gold-pale/65 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-prestige-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-prestige-muted font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM MEMBERS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-2">
              Cuerpo Profesional
            </span>
            <h2 className="font-serif text-3xl font-bold text-prestige-navy tracking-tight">
              Nuestro Equipo de Abogados
            </h2>
            <div className="w-16 h-0.5 bg-prestige-gold mx-auto mt-4 mb-6"></div>
            <p className="text-sm text-prestige-muted font-light">
              Un staff interdisciplinario comprometido con la rigurosidad estratégica, la ética profesional y la solvencia argumentativa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((attorney) => (
              <div 
                key={attorney.id}
                id={`attorney-card-${attorney.id}`}
                className="bg-prestige-bg/40 rounded-2xl overflow-hidden border border-prestige-border/50 flex flex-col justify-between group text-left"
              >
                {/* Photo frame */}
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative">
                  <img 
                    src={attorney.image} 
                    alt={attorney.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-prestige-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button 
                      id={`attorney-quick-view-${attorney.id}`}
                      onClick={() => setSelectedAttorney(attorney)}
                      className="w-full py-3 bg-prestige-gold hover:bg-prestige-gold-light text-prestige-navy font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Ver Perfil Profesional
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Brief details card */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-prestige-navy">
                    {attorney.name}
                  </h3>
                  <p className="text-xs font-mono text-prestige-gold uppercase tracking-wider mt-1">
                    {attorney.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-medium">
                    Especialidad: {attorney.specialty}
                  </p>
                  <p className="text-xs text-prestige-muted font-light leading-relaxed mt-3 line-clamp-3">
                    {attorney.description}
                  </p>
                  
                  <button
                    id={`attorney-inline-view-${attorney.id}`}
                    onClick={() => setSelectedAttorney(attorney)}
                    className="mt-5 text-xs font-bold text-prestige-gold hover:text-prestige-navy flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Saber más sobre {attorney.name.split(' ')[1]}
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ATTORNEY DETAILED PROFILE MODAL */}
      <AnimatePresence>
        {selectedAttorney && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              id="attorney-profile-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full border border-prestige-border/60 font-sans text-prestige-dark relative max-h-[90vh] flex flex-col"
            >
              {/* Top Banner close action */}
              <button 
                id="close-profile-modal-btn"
                onClick={() => setSelectedAttorney(null)}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/10 hover:bg-black/20 text-prestige-navy transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                <div className="grid sm:grid-cols-12 gap-6 items-start text-left">
                  
                  {/* Avatar left column */}
                  <div className="sm:col-span-4 flex flex-col items-center">
                    <div className="w-36 h-44 rounded-xl overflow-hidden shadow-md bg-prestige-bg border border-prestige-border/50">
                      <img 
                        src={selectedAttorney.image} 
                        alt={selectedAttorney.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs font-mono text-prestige-gold font-bold mt-3 uppercase tracking-wider text-center">
                      {selectedAttorney.role}
                    </p>
                  </div>

                  {/* Profile details right column */}
                  <div className="sm:col-span-8">
                    <h3 className="text-2xl font-serif font-bold text-prestige-navy">
                      {selectedAttorney.name}
                    </h3>
                    <p className="text-xs text-prestige-gold-light font-semibold uppercase tracking-wider mt-1">
                      {selectedAttorney.specialty}
                    </p>
                    
                    <div className="w-12 h-0.5 bg-prestige-gold my-4"></div>

                    <p className="text-xs text-prestige-muted font-light leading-relaxed mb-6">
                      {selectedAttorney.description}
                    </p>

                    {selectedAttorney.education && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-prestige-navy uppercase tracking-wider flex items-center gap-2 mb-3">
                          <BookOpen size={14} className="text-prestige-gold" />
                          Formación y Trayectoria:
                        </h4>
                        <ul className="space-y-2">
                          {selectedAttorney.education.map((edu, idx) => (
                            <li key={idx} className="text-xs text-prestige-dark font-light flex items-start gap-2">
                              <span className="text-prestige-gold select-none">•</span>
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 mt-6">
                      <a
                        id="attorney-direct-mail"
                        href={`mailto:${selectedAttorney.contactEmail}`}
                        className="flex-1 py-3 px-4 rounded-xl border border-prestige-gold/40 text-prestige-navy hover:bg-prestige-bg font-semibold text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Mail size={14} />
                        Enviar Correo
                      </a>
                      
                      <button
                        id="attorney-schedule-consult"
                        onClick={() => handleContactClick(selectedAttorney.contactEmail || '')}
                        className="flex-1 py-3 px-4 rounded-xl bg-prestige-navy hover:bg-prestige-navy/90 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CalendarCheck2 size={14} className="text-prestige-gold" />
                        Agendar Cita
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
