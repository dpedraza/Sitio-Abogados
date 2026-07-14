import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Mail, PhoneCall } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  onOpenCard: () => void;
  hidePropuestaTab?: boolean;
  isStatic?: boolean;
}

export default function Header({ 
  activeSection, 
  setActiveSection, 
  onOpenCard,
  hidePropuestaTab = false,
  isStatic = false
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseNavItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'areas', label: 'Áreas' },
    { id: 'abogados', label: 'El Estudio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'propuesta', label: '✨ Propuesta & Mockups' },
  ] as const;

  const navItems = hidePropuestaTab
    ? baseNavItems.filter((item) => item.id !== 'propuesta')
    : baseNavItems;

  const handleNavClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`${isStatic ? 'absolute top-0 left-0 right-0 bg-white border-b border-prestige-border/80 py-4 shadow-sm' : 'fixed top-0 left-0 right-0 z-40 transition-all duration-300'} ${
        !isStatic && (isScrolled 
          ? 'bg-prestige-surface/90 backdrop-blur-md shadow-sm border-b border-prestige-border/40 py-3' 
          : 'bg-transparent py-5')
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            className="flex flex-col cursor-pointer group"
            onClick={() => handleNavClick('inicio')}
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-prestige-navy transition-colors group-hover:text-prestige-gold">
                MORALES
              </span>
              <span className="h-4 w-[1px] bg-prestige-gold/50"></span>
              <span className="font-sans text-xs font-semibold tracking-widest text-prestige-gold uppercase pt-0.5">
                ABOGADOS
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-prestige-muted -mt-0.5 group-hover:text-prestige-gold transition-colors">
              Excelencia &amp; Compromiso
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`${isStatic ? 'flex' : 'hidden md:flex'} items-center gap-6 lg:gap-8`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer hover:text-prestige-gold ${
                  activeSection === item.id 
                    ? 'text-prestige-gold' 
                    : 'text-prestige-navy/85'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-prestige-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className={`${isStatic ? 'flex' : 'hidden md:flex'} items-center gap-3 lg:gap-4`}>
            <button
              id="header-digital-card-btn"
              onClick={onOpenCard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-prestige-gold/30 hover:border-prestige-gold text-xs font-semibold text-prestige-gold tracking-wide transition-colors cursor-pointer"
              title="Ver Tarjeta Digital Interactiva"
            >
              <Smartphone size={13} />
              Tarjeta Digital
            </button>
            
            <button
              id="header-consultation-btn"
              onClick={() => handleNavClick('contacto')}
              className="px-4 py-2 rounded-lg bg-prestige-navy hover:bg-prestige-navy/90 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow cursor-pointer border border-transparent hover:border-prestige-gold/20"
            >
              Consulta Online
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className={`${isStatic ? 'hidden' : 'flex md:hidden'} items-center gap-3`}>
            <button
              id="header-mobile-card-btn"
              onClick={onOpenCard}
              className="p-1.5 rounded-lg border border-prestige-gold/30 text-prestige-gold transition-colors"
              title="Tarjeta Digital"
            >
              <Smartphone size={16} />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-prestige-navy hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-prestige-surface border-b border-prestige-border/60 py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-semibold py-2 border-b border-gray-100/60 last:border-0 ${
                  activeSection === item.id ? 'text-prestige-gold pl-2 border-l-2 border-l-prestige-gold' : 'text-prestige-navy'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                id="drawer-digital-card-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCard();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-prestige-gold text-sm font-semibold text-prestige-gold transition-colors cursor-pointer"
              >
                <Smartphone size={16} />
                Ver Tarjeta Digital
              </button>
              <button
                id="drawer-consultation-btn"
                onClick={() => handleNavClick('contacto')}
                className="py-2.5 px-4 rounded-lg bg-prestige-navy hover:bg-prestige-navy/90 text-white text-sm font-semibold text-center uppercase tracking-wider transition-all cursor-pointer"
              >
                Consulta Online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
