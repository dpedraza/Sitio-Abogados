import React, { useState } from 'react';
import { 
  Phone, 
  Share2, 
  Clock, 
  Briefcase, 
  Mail, 
  Instagram, 
  MessageCircle, 
  Check, 
  Copy,
  ArrowLeft,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BusinessCardProps {
  onClose?: () => void;
  inline?: boolean;
}

export default function BusinessCard({ onClose, inline = false }: BusinessCardProps) {
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const phone = '+541155554321';
  const email = 'dmorales.juridico@gmail.com';
  const insta = 'danielmorales_abogado';
  const whatsappUrl = 'https://wa.me/541155554321?text=Hola%20Dr.%20Morales,%20necesito%20realizar%20una%20consulta%20legal.';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (onClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  const cardContent = (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-sm w-full border border-prestige-border/60 mx-auto font-sans text-prestige-dark relative">
      {/* Background Banner Accent */}
      <div className="h-24 sm:h-28 bg-prestige-navy relative">
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-prestige-gold-pale/80 uppercase tracking-widest">
          Estudio Morales &amp; Asoc.
        </div>
        {onClose && (
          <button 
            id="close-card-btn"
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all cursor-pointer z-20"
            title="Cerrar Tarjeta"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Profile Picture */}
      <div className="px-4 sm:px-6 -mt-12 sm:-mt-14 relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white overflow-hidden shadow-md bg-prestige-bg">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&h=500" 
            alt="Dr. Daniel Morales"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Name and Title */}
        <h3 className="text-lg sm:text-xl font-serif font-semibold mt-2.5 sm:mt-3 text-center text-prestige-navy leading-tight">
          Daniel Millar ~ Daniel Morales
        </h3>
        <p className="text-xs sm:text-sm font-mono text-prestige-gold font-medium mt-1 uppercase tracking-wider">
          Abogado
        </p>
      </div>

      {/* Direct Quick Actions */}
      <div className="px-4 sm:px-6 mt-4 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
        <a 
          id="card-call-link"
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 bg-prestige-navy hover:bg-prestige-navy/90 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-sm cursor-pointer"
        >
          <Phone size={14} className="sm:w-4 sm:h-4" />
          Llamar
        </a>
        <button 
          id="card-share-btn"
          onClick={handleShare}
          className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 bg-prestige-gold-pale hover:bg-prestige-gold-pale/80 text-prestige-gold rounded-xl text-xs sm:text-sm font-medium transition-colors border border-prestige-gold/20 cursor-pointer"
        >
          {copiedLink ? <Check size={14} className="sm:w-4 sm:h-4" /> : <Share2 size={14} className="sm:w-4 sm:h-4" />}
          {copiedLink ? 'Copiado' : 'Compartir'}
        </button>
      </div>

      {/* Interactive Detail Fields */}
      <div className="px-4 sm:px-6 py-4 sm:py-6 mt-3 sm:mt-4 border-t border-gray-100 flex flex-col gap-3 sm:gap-4">
        {/* Status indicator */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-1.5 sm:p-2 rounded-lg bg-red-50 text-red-600 mt-0.5 shrink-0">
            <Clock size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xs sm:text-sm text-gray-800">Sábado Cerrado</span>
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500 inline-block animate-pulse"></span>
            </div>
            <span className="text-[11px] sm:text-xs text-gray-500 block">Horario de atención: Lun a Vie 09:00 - 19:00</span>
          </div>
        </div>

        {/* Business Category */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-1.5 sm:p-2 rounded-lg bg-amber-50 text-prestige-gold mt-0.5 shrink-0">
            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div className="flex-1">
            <span className="font-medium text-xs sm:text-sm text-gray-800 block">Servicio Legal</span>
            <span className="text-[11px] sm:text-xs text-gray-500">Asesoramiento profesional integral</span>
          </div>
        </div>

        {/* Email Address with Copy action */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600 mt-0.5 shrink-0">
            <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-medium text-xs sm:text-sm text-gray-800 block truncate">{email}</span>
            <button 
              id="copy-email-card-btn"
              onClick={handleCopyEmail}
              className="text-[11px] sm:text-xs text-prestige-gold hover:text-prestige-navy flex items-center gap-1 font-medium transition-colors cursor-pointer mt-0.5"
            >
              {copied ? (
                <>
                  <Check size={10} className="sm:w-3 sm:h-3" /> Correo copiado
                </>
              ) : (
                <>
                  <Copy size={10} className="sm:w-3 sm:h-3" /> Copiar dirección
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instagram Profile */}
        <a 
          id="card-insta-link"
          href={`https://instagram.com/${insta}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 sm:gap-4 group cursor-pointer"
        >
          <div className="p-1.5 sm:p-2 rounded-lg bg-pink-50 text-pink-600 mt-0.5 shrink-0 group-hover:bg-pink-100 transition-colors">
            <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div className="flex-1">
            <span className="font-medium text-xs sm:text-sm text-gray-800 block group-hover:text-pink-600 transition-colors">
              Instagram @danielmorales_abogado
            </span>
            <span className="text-[11px] sm:text-xs text-gray-500">Síganos para novedades y publicaciones</span>
          </div>
        </a>

        {/* WhatsApp Business Card */}
        <a 
          id="card-whatsapp-link"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-2xl border border-emerald-100 bg-emerald-50/40 hover:bg-emerald-50 transition-colors group cursor-pointer"
        >
          <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-500 text-white mt-0.5 shrink-0">
            <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div className="flex-1">
            <span className="font-semibold text-[10px] sm:text-xs text-emerald-800 uppercase tracking-wider block">
              WhatsApp Business
            </span>
            <span className="font-medium text-xs sm:text-sm text-gray-800 block">
              Cuenta de Empresa
            </span>
            <span className="text-[11px] sm:text-xs text-emerald-600 font-medium block mt-0.5 flex items-center gap-1">
              Iniciar chat directo &rarr;
            </span>
          </div>
        </a>
      </div>

      {/* Footer Branding */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 text-center text-[10px] sm:text-[11px] text-gray-400 font-mono border-t border-gray-100">
        Diseño Exclusivo • Morales Abogados
      </div>
    </div>
  );

  if (inline) {
    return cardContent;
  }

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm overflow-y-auto flex justify-center py-6 px-4"
    >
      <motion.div 
        id="business-card-modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative max-w-sm w-full my-auto"
      >
        {cardContent}
      </motion.div>
    </div>
  );
}
