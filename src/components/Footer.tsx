import React from 'react';
import { SectionId } from '../types';
import { Scale, Mail, Phone, MapPin, MessageSquare, Instagram } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: SectionId) => void;
  onOpenCard: () => void;
}

export default function Footer({ setActiveSection, onOpenCard }: FooterProps) {
  
  const handleNavClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091526] text-white border-t border-prestige-border/20 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 text-left">
          
          {/* Column 1: Branding */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => handleNavClick('inicio')}>
              <span className="font-serif text-2xl font-bold tracking-tight">MORALES</span>
              <span className="h-5 w-[1px] bg-prestige-gold/50"></span>
              <span className="font-sans text-xs font-semibold tracking-widest text-prestige-gold uppercase pt-0.5">ABOGADOS</span>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm mb-6">
              Estudio jurídico de excelencia fundado en el compromiso ético, el rigor intelectual y el asesoramiento preventivo estratégico. Protegemos su libertad, su familia y su patrimonio.
            </p>
            
            {/* Social Icons (using strict lucide imports) */}
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com/danielmorales_abogado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-prestige-gold/20 hover:text-prestige-gold text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                title="Sígannos en Instagram"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="https://wa.me/541155554321?text=Consulta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-prestige-gold/20 hover:text-prestige-gold text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                title="Chat de WhatsApp"
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-prestige-gold mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-xs">
               {[
                { id: 'inicio', label: 'Inicio / Principal' },
                { id: 'areas', label: 'Áreas de Práctica' },
                { id: 'abogados', label: 'Nuestro Equipo' },
                { id: 'blog', label: 'Publicaciones y Blog' },
                { id: 'contacto', label: 'Contacto y Citas' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => handleNavClick(link.id as SectionId)}
                    className="text-gray-400 hover:text-prestige-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  id="footer-card-btn"
                  onClick={onOpenCard}
                  className="text-gray-400 hover:text-prestige-gold font-medium transition-colors cursor-pointer text-left"
                >
                  Tarjeta Digital de Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick Info */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-prestige-gold mb-4">
              Estudio CABA
            </h3>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-prestige-gold shrink-0 mt-0.5" />
                <span className="font-light">Av. Corrientes 1400, Piso 6, Ciudad Autónoma de Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-prestige-gold shrink-0" />
                <span className="font-light">+54 11 5555-4321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-prestige-gold shrink-0" />
                <span className="font-light">dmorales.juridico@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Morales Abogados. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Matrículas CPACF Tomo 140 Folio 321</span>
            <span>•</span>
            <span className="hover:text-prestige-gold transition-colors cursor-pointer" onClick={onOpenCard}>Tarjeta Digital</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
