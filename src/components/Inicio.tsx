import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  Briefcase, 
  FileText, 
  Users, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldAlert 
} from 'lucide-react';
import { motion } from 'motion/react';
import { SectionId, PracticeArea } from '../types';
import { PRACTICE_AREAS, BLOG_POSTS } from '../data';

interface InicioProps {
  setActiveSection: (section: SectionId) => void;
  setSelectedAreaId?: (id: string) => void;
  setSelectedPostId?: (id: string) => void;
}

export default function Inicio({ setActiveSection, setSelectedAreaId, setSelectedPostId }: InicioProps) {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale size={32} className="text-prestige-gold" />;
      case 'Briefcase': return <Briefcase size={32} className="text-prestige-gold" />;
      case 'FileText': return <FileText size={32} className="text-prestige-gold" />;
      case 'Users': return <Users size={32} className="text-prestige-gold" />;
      default: return <Scale size={32} className="text-prestige-gold" />;
    }
  };

  const handleAreaClick = (areaId: string) => {
    if (setSelectedAreaId) setSelectedAreaId(areaId);
    setActiveSection('areas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (postId: string) => {
    if (setSelectedPostId) setSelectedPostId(postId);
    setActiveSection('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-prestige-navy via-prestige-navy to-[#06101f] text-white py-20 lg:py-32">
        {/* Subtle Decorative Background Lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e8e3d5_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-prestige-gold/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prestige-gold/10 border border-prestige-gold/20 text-prestige-gold text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <CheckCircle2 size={13} />
                Abogados de Confianza en Argentina
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                Dr. Daniel Morales <br />
                <span className="text-prestige-gold font-light italic text-3xl sm:text-4xl lg:text-5xl">Abogado</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl font-light leading-relaxed"
              >
                Excelencia y Compromiso en cada Problema Jurídico. Brindamos representación legal estratégica con la máxima discreción y profesionalismo.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button
                  id="hero-cta-consult"
                  onClick={() => setActiveSection('contacto')}
                  className="px-8 py-3.5 rounded-xl bg-prestige-gold hover:bg-prestige-gold-light text-prestige-navy font-bold text-sm tracking-wide uppercase transition-colors shadow-lg cursor-pointer"
                >
                  Consulta Online
                </button>
                <button
                  id="hero-cta-areas"
                  onClick={() => setActiveSection('areas')}
                  className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm tracking-wide uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Ver Áreas de Práctica
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-prestige-border/20 shadow-2xl"
              >
                {/* Image backdrop */}
                <div className="aspect-[4/3] sm:aspect-square bg-prestige-navy/80">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600" 
                    alt="Morales Abogados Estudio" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating trust badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-prestige-navy/90 backdrop-blur-md p-4 rounded-xl border border-prestige-border/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-prestige-gold text-prestige-navy font-serif font-bold text-lg">
                    15+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Años de Trayectoria</p>
                    <p className="text-[11px] text-gray-300">Resolviendo litigios complejos</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. AREAS DE PRACTICA SECTION */}
      <section className="py-20 bg-prestige-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-2">
              Soluciones Legales Integrales
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-prestige-navy tracking-tight">
              Nuestras Áreas de Práctica
            </h2>
            <div className="w-16 h-0.5 bg-prestige-gold mx-auto mt-4 mb-6"></div>
            <p className="text-sm text-prestige-muted font-light leading-relaxed">
              Brindamos patrocinio y asesoramiento preventivo de excelencia. Nos enfocamos en proteger sus intereses con dinamismo, honestidad y resultados concretos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.map((area, index) => (
              <motion.div
                key={area.id}
                id={`practice-card-${area.id}`}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-prestige-border/50 text-left flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group"
                onClick={() => handleAreaClick(area.id)}
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-prestige-gold-pale/60 flex items-center justify-center mb-6 group-hover:bg-prestige-gold/15 transition-all duration-300">
                    {getIcon(area.icon)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-prestige-navy group-hover:text-prestige-gold transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-xs text-prestige-muted font-light leading-relaxed mt-3">
                    {area.description}
                  </p>
                </div>
                
                <span className="text-xs font-semibold text-prestige-gold flex items-center gap-1.5 mt-6 group-hover:text-prestige-navy transition-colors duration-300">
                  Saber más
                  <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUST BANNER WITH HIGHLIGHTS */}
      <section className="py-14 bg-white border-y border-prestige-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-prestige-border/60">
            
            <div className="text-center md:px-6 py-4 md:py-0">
              <h4 className="font-serif text-2xl font-bold text-prestige-navy">Atención Personalizada</h4>
              <p className="text-xs text-prestige-muted mt-2 font-light">Trato directo y confidencial con los socios del bufete en cada etapa.</p>
            </div>
            
            <div className="text-center md:px-6 py-4 md:py-0">
              <h4 className="font-serif text-2xl font-bold text-prestige-navy">Estrategia Preventiva</h4>
              <p className="text-xs text-prestige-muted mt-2 font-light">Buscamos resolver el conflicto antes de que escale al plano judicial.</p>
            </div>
            
            <div className="text-center md:px-6 py-4 md:py-0">
              <h4 className="font-serif text-2xl font-bold text-prestige-navy">Transparencia Total</h4>
              <p className="text-xs text-prestige-muted mt-2 font-light">Información clara y presupuestos previsibles sin sorpresas.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. RECENT ARTICLES / BLOG */}
      <section className="py-20 bg-prestige-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-2">
                Actualidad Jurídica
              </span>
              <h2 className="font-serif text-3xl font-bold text-prestige-navy tracking-tight">
                Jurisprudencia Argentina &amp; Enfoques
              </h2>
            </div>
            <button
              id="view-all-blog-btn"
              onClick={() => setActiveSection('blog')}
              className="text-sm font-semibold text-prestige-gold hover:text-prestige-navy transition-colors flex items-center gap-1.5 mt-4 sm:mt-0 cursor-pointer"
            >
              Ver todas las publicaciones
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article 
                key={post.id}
                id={`recent-post-card-${post.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-prestige-border/50 shadow-sm flex flex-col justify-between group"
              >
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-prestige-navy/90 text-white font-semibold text-[10px] uppercase tracking-wider rounded-md backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 text-[11px] font-mono mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-prestige-navy group-hover:text-prestige-gold transition-colors duration-300 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-prestige-muted font-light leading-relaxed mt-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-6">
                    <span className="text-[11px] font-mono font-medium text-gray-500">
                      Por {post.author}
                    </span>
                    <button
                      id={`read-recent-post-${post.id}`}
                      onClick={() => handlePostClick(post.id)}
                      className="text-xs font-semibold text-prestige-gold hover:text-prestige-navy flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      Leer Artículo
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECT CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#12243d] to-prestige-navy text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-3">
            Atención Inmediata
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            ¿Necesita Asesoramiento Legal Inmediato?
          </h2>
          <p className="mt-4 text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Póngase en contacto con nosotros hoy mismo. Evaluaremos las alternativas legales de su caso de forma personalizada y bajo estricta reserva.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              id="cta-whatsapp-link"
              href="https://wa.me/541155554321?text=Hola%20Dr.%20Morales,%20necesito%20realizar%20una%20consulta%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-bold text-sm tracking-wide uppercase transition-colors shadow-lg shadow-emerald-950/20 cursor-pointer"
            >
              <MessageSquare size={18} />
              WhatsApp Directo
            </a>
            
            <button
              id="cta-email-link"
              onClick={() => setActiveSection('contacto')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-prestige-gold hover:bg-prestige-gold-light text-prestige-navy font-bold text-sm tracking-wide uppercase transition-colors shadow-lg cursor-pointer"
            >
              <Mail size={18} />
              Enviar Correo
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-left text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-prestige-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white">Dirección</p>
                <p className="text-[11px] font-light mt-0.5">Av. Corrientes 1400, CABA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-prestige-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white">Teléfono</p>
                <p className="text-[11px] font-light mt-0.5">+54 11 5555-4321</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="text-prestige-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white">E-mail</p>
                <p className="text-[11px] font-light mt-0.5">dmorales.juridico@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={18} className="text-prestige-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white">Horarios</p>
                <p className="text-[11px] font-light mt-0.5">Lun a Vie 9:00 - 19:00</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
