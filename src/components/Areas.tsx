import React, { useEffect } from 'react';
import { 
  Scale, 
  Briefcase, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_AREAS } from '../data';
import { PracticeArea, SectionId } from '../types';

interface AreasProps {
  selectedAreaId: string;
  setSelectedAreaId: (id: string) => void;
  setActiveSection: (section: SectionId) => void;
}

export default function Areas({ selectedAreaId, setSelectedAreaId, setActiveSection }: AreasProps) {
  
  const currentArea = PRACTICE_AREAS.find(a => a.id === selectedAreaId) || PRACTICE_AREAS[0];

  const getIcon = (iconName: string, active: boolean) => {
    const size = 20;
    const colorClass = active ? 'text-prestige-gold' : 'text-prestige-navy/70';
    switch (iconName) {
      case 'Scale': return <Scale size={size} className={colorClass} />;
      case 'Briefcase': return <Briefcase size={size} className={colorClass} />;
      case 'FileText': return <FileText size={size} className={colorClass} />;
      case 'Users': return <Users size={size} className={colorClass} />;
      default: return <Scale size={size} className={colorClass} />;
    }
  };

  // Specific high-quality background images for each area to make it look super premium
  const getAreaImage = (id: string) => {
    switch (id) {
      case 'penal':
        return 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL0Qf-y6O6eNyG1PXgzkO8228KsAnxEm0M_uu_aBB5dLhl4KEMPM2548OrGMpCtdgkQyzSNp8tSD-0knakVz5WgN998nn0UTSNVcMa6yNPJnGfckKmU034Qb0MynWb_78V1Cuv0Ab7lM3-hCAmhxgGxyhNcBEP_EClpbAOOFkcg-Kc_CZbKq8bzbVQA8xi-tdQl6lD6wL6AiGY3iVrD0GwUbQ16S0wASPsTb7dJ0l3829Zea9p5ShXqg'; // Gavel
      case 'laboral':
        return 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZIprKvGoXgiDuuniRewa8LxkPJsfm4LgyZJI6HHcdHjReGWQ8yXAo91ZIvVLKKRwttJFj6Nol_FXXKrQFZYovNKXEZhBUb3YyNRoBXsLmZeEcHSyM7tSOaLFoRw1B_rLvfLmfHBr5QVvWbmo_CSyhd71MwbS70n9B32vpxajbFyasNujpDzXQUUNYgFdKDckTYgZLlW-d4JU86EjemEpTXIH_3AqR1frKNDnheFmSZTctaBaM14zmw'; // fountain pen
      case 'civil':
        return 'https://lh3.googleusercontent.com/aida-public/AB6AXuApLrHxYQmeFOgm43gQT0Nc-fxEZJG6Dtx50qZ4Bq8nG5bka0UcSXI-F4Wqh_yuFyzWvVfMeTPV-G21qlMsJ11YzRhfBWNAjQKA5gundtf98VNm0D0RbJgEcuE-74h2okFr7EEeC_j8KXjbobsi064gEIVURqWzbAXejcQB31M8gqA9ba2axii330fDoksQ3iBzpo4Adhi4D46rulhji625fO7Y_eKngTy8whb9o_tA1MWzwScKU8csfA'; // Law library shelves
      case 'familia':
        return 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXA8bN_c6y3C6Q-zKvpujArJM7CR1ZPrXV7wi3CwzojrLNU8EU1Pf4FoD-tRSOHflRhlQ63z9kG-kc_qSanw8Vn3gm6XusAdOHxTykgzGp-CzS2CRzgeYLZA33zTe4KQmChGV1ylzfrX5EZrqUQbdgCTVrvTy2W5483VWU9HwoyiAQaWjLtxD9q9ZcoQivJarr3VsGvFD6wOLpo5zYc2v67Yn_vWVBk6bqSc-vHC6iMCSWaii8-Evrw'; // Courthouse facade
      default:
        return 'https://lh3.googleusercontent.com/aida-public/AB6AXuApLrHxYQmeFOgm43gQT0Nc-fxEZJG6Dtx50qZ4Bq8nG5bka0UcSXI-F4Wqh_yuFyzWvVfMeTPV-G21qlMsJ11YzRhfBWNAjQKA5gundtf98VNm0D0RbJgEcuE-74h2okFr7EEeC_j8KXjbobsi064gEIVURqWzbAXejcQB31M8gqA9ba2axii330fDoksQ3iBzpo4Adhi4D46rulhji625fO7Y_eKngTy8whb9o_tA1MWzwScKU8csfA';
    }
  };

  const handleCtaClick = () => {
    setActiveSection('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 min-h-screen">
      
      {/* Page Header banner */}
      <section className="bg-prestige-navy py-12 text-white border-b border-prestige-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-1">
            Nuestros Servicios
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Nuestras Áreas de Práctica
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-300 font-light max-w-2xl">
            Soluciones jurídicas estratégicas y a medida para proteger su patrimonio, su libertad y sus derechos.
          </p>
        </div>
      </section>

      {/* Main layout: Sidebar selector + Details Pane */}
      <section className="py-12 bg-prestige-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar practice area selector */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-prestige-border/60 p-3 sm:p-4 shadow-sm">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-prestige-muted px-4 mb-4">
                Seleccione un Área
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {PRACTICE_AREAS.map((area) => {
                  const isActive = area.id === selectedAreaId;
                  return (
                    <button
                      key={area.id}
                      id={`sidebar-select-${area.id}`}
                      onClick={() => setSelectedAreaId(area.id)}
                      className={`w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl text-left transition-all cursor-pointer font-sans ${
                        isActive 
                          ? 'bg-prestige-navy text-white shadow-sm' 
                          : 'bg-transparent text-prestige-navy hover:bg-prestige-bg'
                      }`}
                    >
                      <div className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isActive ? 'bg-prestige-gold/20' : 'bg-prestige-gold-pale/50'
                      }`}>
                        {getIcon(area.icon, isActive)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-prestige-navy'}`}>
                          {area.title}
                        </p>
                        <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-gray-300' : 'text-prestige-muted'}`}>
                          {area.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Quality Cert Badge */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-3 px-4 text-left">
                <ShieldCheck className="text-prestige-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-xs font-bold text-prestige-navy">Patrocinio de Confianza</p>
                  <p className="text-[10px] text-prestige-muted leading-relaxed mt-0.5 font-light">
                    Cada caso es supervisado directamente por el socio fundador para asegurar el máximo estándar estratégico.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Pane */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-prestige-border/60 overflow-hidden shadow-sm flex flex-col">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentArea.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  {/* Aspect banner image with category badge */}
                  <div className="aspect-[16/9] sm:aspect-[21/9] w-full bg-prestige-navy/80 overflow-hidden relative">
                    <img 
                      src={getAreaImage(currentArea.id)} 
                      alt={currentArea.title} 
                      className="w-full h-full object-cover opacity-85"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left">
                      <span className="px-2.5 py-1 bg-prestige-gold text-prestige-navy text-[10px] font-bold uppercase tracking-widest rounded mb-2 inline-block">
                        Especialización
                      </span>
                      <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight">
                        Servicios en {currentArea.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-8 text-left">
                    <p className="text-xs sm:text-sm text-prestige-dark font-light leading-relaxed mb-6">
                      {currentArea.detailedDescription}
                    </p>

                    <h3 className="font-serif text-sm sm:text-base font-bold text-prestige-navy mb-4 flex items-center gap-2">
                      <Award size={18} className="text-prestige-gold" />
                      Áreas Específicas de Asistencia:
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {currentArea.keyPoints?.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 bg-prestige-bg/50 p-3 sm:p-3.5 rounded-xl border border-prestige-border/20">
                          <CheckCircle size={16} className="text-prestige-gold shrink-0 mt-0.5" />
                          <p className="text-xs text-prestige-dark font-medium leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA container */}
                    <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-prestige-gold-pale/35 rounded-2xl border border-prestige-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <h4 className="font-serif text-sm font-bold text-prestige-navy">
                          ¿Requiere asistencia especializada en {currentArea.title}?
                        </h4>
                        <p className="text-xs text-prestige-muted mt-1 font-light">
                          Haga su consulta de forma discreta hoy mismo con nuestro equipo.
                        </p>
                      </div>
                      <button
                        id={`area-cta-btn-${currentArea.id}`}
                        onClick={handleCtaClick}
                        className="w-full sm:w-auto px-6 py-3 bg-prestige-navy hover:bg-prestige-navy/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                      >
                        Agendar Consulta
                        <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
