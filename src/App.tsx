/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, Sparkles, MessageCircle } from 'lucide-react';
import { SectionId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Areas from './components/Areas';
import Abogados from './components/Abogados';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import BusinessCard from './components/BusinessCard';
import Propuesta from './components/Propuesta';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('penal');
  const [selectedPostId, setSelectedPostId] = useState<string>('');
  const [isCardOpen, setIsCardOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <Inicio 
            setActiveSection={setActiveSection} 
            setSelectedAreaId={setSelectedAreaId}
            setSelectedPostId={setSelectedPostId}
          />
        );
      case 'areas':
        return (
          <Areas 
            selectedAreaId={selectedAreaId}
            setSelectedAreaId={setSelectedAreaId}
            setActiveSection={setActiveSection}
          />
        );
      case 'abogados':
        return (
          <Abogados 
            setActiveSection={setActiveSection}
          />
        );
      case 'blog':
        return (
          <Blog 
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
            setActiveSection={setActiveSection}
            onOpenCard={() => setIsCardOpen(true)}
          />
        );
      case 'contacto':
        return (
          <Contacto />
        );
      case 'propuesta':
        return (
          <Propuesta />
        );
      default:
        return (
          <Inicio 
            setActiveSection={setActiveSection} 
            setSelectedAreaId={setSelectedAreaId}
            setSelectedPostId={setSelectedPostId}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between font-sans selection:bg-prestige-gold/25 selection:text-prestige-navy overflow-x-hidden">
      
      {/* 1. Nav Header */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenCard={() => setIsCardOpen(true)}
      />

      {/* 2. Page Content frame with fluid transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Universal Footer */}
      <Footer 
        setActiveSection={setActiveSection} 
        onOpenCard={() => setIsCardOpen(true)}
      />

      {/* 4. Floating Action Badge (Smartphone Digital Card Shortcut) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        {/* Secondary WhatsApp button */}
        <a
          id="floating-whatsapp-trigger"
          href="https://wa.me/541155554321?text=Hola%20Dr.%20Morales,%20necesito%20realizar%20una%20consulta%20legal."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          title="WhatsApp Directo"
        >
          <MessageCircle size={22} />
        </a>

        {/* Primary Digital Card trigger */}
        <button
          id="floating-card-trigger"
          onClick={() => setIsCardOpen(true)}
          className="p-3.5 bg-prestige-gold text-prestige-navy rounded-full shadow-lg hover:bg-prestige-gold-light hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group relative"
          title="Ver Tarjeta Digital"
        >
          <Smartphone size={22} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 bg-prestige-navy/95 border border-prestige-border/30 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-wider">
            Tarjeta Digital
          </span>
        </button>
      </div>

      {/* 5. Interactive Digital Business Card Overlay */}
      <AnimatePresence>
        {isCardOpen && (
          <BusinessCard onClose={() => setIsCardOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}

