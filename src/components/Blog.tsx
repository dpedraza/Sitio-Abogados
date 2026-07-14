import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Bookmark, 
  ChevronRight, 
  Smartphone,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost, SectionId } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface BlogProps {
  selectedPostId: string;
  setSelectedPostId: (id: string) => void;
  setActiveSection: (section: SectionId) => void;
  onOpenCard: () => void;
}

export default function Blog({ selectedPostId, setSelectedPostId, setActiveSection, onOpenCard }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Synchronize state when selectedPostId is set from parent (e.g., clicking on Home page)
  useEffect(() => {
    if (selectedPostId) {
      const post = BLOG_POSTS.find(p => p.id === selectedPostId);
      if (post) {
        setReadingPost(post);
      }
    } else {
      setReadingPost(null);
    }
  }, [selectedPostId]);

  // Extract unique categories
  const categories = ['Todos', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostSelect = (post: BlogPost) => {
    setSelectedPostId(post.id);
    setReadingPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPostId('');
    setReadingPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 min-h-screen">
      
      {/* Page Header banner */}
      <section className="bg-prestige-navy py-12 text-white border-b border-prestige-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-1">
            Jurisprudencia &amp; Artículos
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Publicaciones Jurídicas
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-300 font-light max-w-2xl">
            Un espacio de divulgación donde nuestro equipo analiza decretos, reformas legislativas y criterios jurisprudenciales vigentes en la Argentina.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 bg-prestige-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            {readingPost ? (
              
              /* ================== READING MODE ================== */
              <motion.div
                key="reading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 items-start text-left"
              >
                {/* Back button and post content */}
                <div className="lg:col-span-8 bg-white rounded-2xl border border-prestige-border/60 p-6 sm:p-10 shadow-sm">
                  
                  <button
                    id="back-to-blog-btn"
                    onClick={handleBackToList}
                    className="mb-8 flex items-center gap-2 text-xs font-bold text-prestige-gold hover:text-prestige-navy transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <ArrowLeft size={14} />
                    Volver al Listado de Publicaciones
                  </button>

                  <div className="aspect-[21/9] w-full rounded-xl overflow-hidden mb-8 bg-gray-100">
                    <img 
                      src={readingPost.image} 
                      alt={readingPost.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <span className="px-3 py-1 bg-prestige-gold-pale text-prestige-gold text-xs font-bold uppercase tracking-wider rounded">
                    {readingPost.category}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-prestige-navy tracking-tight mt-4 mb-4">
                    {readingPost.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-mono border-y border-gray-100 py-3 mb-8">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-prestige-gold" />
                      <span>{readingPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-prestige-gold" />
                      <span>Tiempo de lectura: {readingPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-prestige-gold" />
                      <span>Autor: {readingPost.author}</span>
                    </div>
                  </div>

                  {/* Dynamic Markdown/Text Body */}
                  <div className="prose prose-sm prose-prestige max-w-none text-sm text-prestige-dark leading-relaxed font-light space-y-6">
                    {readingPost.content?.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="font-serif text-lg font-bold text-prestige-navy mt-6 mb-3">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('*Recomendación Profesional:*')) {
                        return (
                          <div key={index} className="p-4 rounded-xl bg-amber-50/50 border border-prestige-gold/20 italic text-prestige-navy/90 font-medium">
                            {paragraph}
                          </div>
                        );
                      }
                      return (
                        <p key={index} className="whitespace-pre-line">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Share/Action button below post */}
                  <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-prestige-gold" />
                      <span className="text-xs text-prestige-muted font-light">Análisis profesional emitido bajo reserva técnica.</span>
                    </div>
                    <button
                      id="reading-consult-cta"
                      onClick={() => setActiveSection('contacto')}
                      className="px-6 py-3 rounded-xl bg-prestige-navy hover:bg-prestige-navy/90 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                    >
                      Realizar Consulta sobre este tema
                    </button>
                  </div>

                </div>

                {/* Sidebar inside reading mode */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Related Article Shortcut Card */}
                  <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 text-left shadow-sm">
                    <h3 className="font-serif text-sm font-bold text-prestige-navy mb-4 border-b border-gray-100 pb-2">
                      Otras Publicaciones
                    </h3>
                    <div className="flex flex-col gap-4">
                      {BLOG_POSTS.filter(p => p.id !== readingPost.id).slice(0, 2).map(post => (
                        <div 
                          key={post.id} 
                          onClick={() => handlePostSelect(post)}
                          className="group cursor-pointer flex gap-3 items-start"
                        >
                          <div className="w-16 h-12 bg-gray-100 rounded overflow-hidden shrink-0">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-serif font-bold text-prestige-navy group-hover:text-prestige-gold line-clamp-2 transition-colors">
                              {post.title}
                            </h4>
                            <span className="text-[10px] font-mono text-gray-400 mt-1 block">{post.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium sidebar Card */}
                  <div className="bg-gradient-to-br from-prestige-navy to-[#06101f] text-white rounded-2xl border border-prestige-border/30 p-6 text-left shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-prestige-gold/10 rounded-full blur-xl"></div>
                    <span className="text-xs font-mono text-prestige-gold uppercase tracking-widest block font-semibold mb-2">
                      Estudio Morales
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-snug">
                      Asesoramiento Jurídico Estratégico
                    </h3>
                    <p className="text-xs text-gray-300 font-light mt-2 leading-relaxed">
                      Si se encuentra ante una contingencia o requiere planificar un encuadre legal seguro, póngase en contacto con nuestro equipo de socios.
                    </p>
                    <button
                      id="sidebar-card-cta"
                      onClick={() => setActiveSection('contacto')}
                      className="w-full py-3 bg-prestige-gold hover:bg-prestige-gold-light text-prestige-navy font-bold text-xs uppercase tracking-wider rounded-xl mt-6 transition-all cursor-pointer"
                    >
                      Consultar Ahora
                    </button>
                  </div>
                </div>

              </motion.div>
            ) : (
              
              /* ================== LIST MODE ================== */
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 items-start text-left"
              >
                
                {/* Main list of posts */}
                <div className="lg:col-span-8 space-y-6">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <article
                        key={post.id}
                        id={`post-list-item-${post.id}`}
                        className="bg-white rounded-2xl overflow-hidden border border-prestige-border/60 shadow-sm flex flex-col sm:flex-row group"
                      >
                        {/* Post image */}
                        <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto bg-gray-100 overflow-hidden relative min-h-[180px]">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-4 left-4 px-2.5 py-1 bg-prestige-navy/95 text-white font-semibold text-[9px] uppercase tracking-wider rounded backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>

                        {/* Post body excerpt */}
                        <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 text-gray-400 text-[10px] font-mono mb-2">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            
                            <h3 
                              onClick={() => handlePostSelect(post)}
                              className="font-serif text-lg font-bold text-prestige-navy group-hover:text-prestige-gold transition-colors duration-300 cursor-pointer leading-snug"
                            >
                              {post.title}
                            </h3>
                            
                            <p className="text-xs text-prestige-muted font-light leading-relaxed mt-3 line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-6">
                            <span className="text-[10px] font-mono text-gray-500">
                              Por {post.author}
                            </span>
                            <button
                              id={`read-more-post-${post.id}`}
                              onClick={() => handlePostSelect(post)}
                              className="text-xs font-bold text-prestige-gold hover:text-prestige-navy flex items-center gap-1.5 cursor-pointer transition-colors"
                            >
                              Leer Artículo Completo
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="bg-white rounded-2xl border border-prestige-border/60 p-12 text-center text-prestige-muted">
                      <p className="text-base font-serif font-bold text-prestige-navy mb-2">
                        No se encontraron publicaciones
                      </p>
                      <p className="text-xs font-light">
                        Pruebe ajustando los términos de búsqueda o seleccionando otra categoría.
                      </p>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Search box widget */}
                  <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 text-left shadow-sm">
                    <h3 className="font-serif text-sm font-bold text-prestige-navy mb-3">
                      Buscador Jurídico
                    </h3>
                    <div className="relative">
                      <input 
                        id="blog-search-input"
                        type="text"
                        placeholder="Buscar publicaciones..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-prestige-bg pl-10 pr-4 py-2.5 rounded-xl border border-prestige-border/60 text-xs font-sans placeholder-gray-400 focus:outline-none focus:border-prestige-gold focus:bg-white transition-all"
                      />
                      <Search size={14} className="text-gray-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Categories widget */}
                  <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 text-left shadow-sm">
                    <h3 className="font-serif text-sm font-bold text-prestige-navy mb-3">
                      Categorías
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {categories.map((cat) => {
                        const count = cat === 'Todos' 
                          ? BLOG_POSTS.length 
                          : BLOG_POSTS.filter(p => p.category === cat).length;
                        const isCatActive = selectedCategory === cat;
                        return (
                          <button
                            key={cat}
                            id={`category-filter-${cat.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setSelectedCategory(cat)}
                            className={`flex items-center justify-between py-2 px-3 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                              isCatActive 
                                ? 'bg-prestige-navy text-white font-semibold' 
                                : 'bg-transparent text-prestige-navy hover:bg-prestige-bg'
                            }`}
                          >
                            <span>{cat}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                              isCatActive ? 'bg-prestige-gold/20 text-prestige-gold-pale' : 'bg-gray-100 text-gray-500'
                            }`}>
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Digital Card Promo widget */}
                  <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 text-left shadow-sm">
                    <h3 className="font-serif text-sm font-bold text-prestige-navy mb-2">
                      Tarjeta de Contacto
                    </h3>
                    <p className="text-[11px] text-prestige-muted font-light leading-relaxed mb-4">
                      Acceda a la tarjeta digital interactiva del Dr. Morales para agendar el contacto directamente en su dispositivo móvil.
                    </p>
                    <button
                      id="blog-sidebar-card-btn"
                      onClick={onOpenCard}
                      className="w-full py-2.5 rounded-xl border border-prestige-gold hover:bg-prestige-gold-pale/30 text-prestige-gold text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Smartphone size={14} />
                      Ver Tarjeta Digital
                    </button>
                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
