import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    area: 'Seleccione un Área de Consulta',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const areasConsulta = [
    'Seleccione un Área de Consulta',
    'Derecho Penal',
    'Derecho Laboral',
    'Derecho Civil y Comercial',
    'Derecho de Familia',
    'Otro Asunto Jurídico'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono || formData.area === 'Seleccione un Área de Consulta' || !formData.mensaje) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request to server
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        area: 'Seleccione un Área de Consulta',
        mensaje: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen">
      
      {/* Page Header banner */}
      <section className="bg-prestige-navy py-12 text-white border-b border-prestige-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-1">
            Asesoría Profesional
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Agende su Consulta Profesional
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-300 font-light max-w-2xl">
            Tome contacto con nosotros de manera segura y confidencial. Responderemos a su inquietud a la mayor brevedad posible.
          </p>
        </div>
      </section>

      {/* Main Grid: Info/Map + Contact Form */}
      <section className="py-12 bg-prestige-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Contact details & Static Map */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Contact info card */}
              <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 sm:p-8 shadow-sm space-y-6">
                <h2 className="font-serif text-lg font-bold text-prestige-navy border-b border-gray-100 pb-3">
                  Información de Contacto
                </h2>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-prestige-gold-pale text-prestige-gold mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-prestige-navy tracking-wider">Ubicación Central</h3>
                    <p className="text-sm font-medium text-gray-800 mt-1">Av. Corrientes 1400, CABA</p>
                    <p className="text-xs text-prestige-muted font-light mt-0.5">República Argentina (CP C1042AAZ)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-prestige-gold-pale text-prestige-gold mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-prestige-navy tracking-wider">Atención Telefónica</h3>
                    <p className="text-sm font-medium text-gray-800 mt-1">+54 11 5555-4321</p>
                    <p className="text-xs text-prestige-muted font-light mt-0.5">Lunes a Viernes de 09:00 a 19:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-prestige-gold-pale text-prestige-gold mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-prestige-navy tracking-wider">Correo Electrónico</h3>
                    <p className="text-sm font-medium text-gray-800 mt-1">dmorales.juridico@gmail.com</p>
                    <p className="text-xs text-prestige-muted font-light mt-0.5">Se garantiza estricto secreto profesional</p>
                  </div>
                </div>
              </div>

              {/* Map block card */}
              <div className="bg-white rounded-2xl border border-prestige-border/60 overflow-hidden shadow-sm">
                <div className="aspect-[16/10] bg-gray-100 relative">
                  <iframe 
                    title="Mapa de Ubicación Morales Abogados"
                    src="https://maps.google.com/maps?q=Av.%20Corrientes%201400,%20CABA,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-full border-0 grayscale opacity-90 contrast-[1.1]"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* Floating address badge on map */}
                  <div className="absolute bottom-4 left-4 bg-prestige-navy/95 text-white p-3 rounded-lg text-left shadow-md border border-prestige-border/20 backdrop-blur-sm pointer-events-none">
                    <p className="text-[10px] font-bold text-prestige-gold uppercase tracking-wider">Sede CABA</p>
                    <p className="text-[11px] font-light mt-0.5">Av. Corrientes 1400 (Próximo a Tribunales)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 sm:p-8 text-left shadow-sm">
                
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.div
                      key="form-fields"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="font-serif text-lg font-bold text-prestige-navy mb-2">
                        Formulario de Consulta
                      </h2>
                      <p className="text-xs text-prestige-muted font-light mb-6">
                        Complete los datos requeridos. Su consulta será evaluada de inmediato por un profesional especializado de nuestro equipo bajo estricto secreto profesional.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                        
                        {/* Name field */}
                        <div>
                          <label className="text-[11px] font-semibold text-prestige-navy uppercase tracking-wider block mb-1.5">
                            Nombre Completo <span className="text-red-500">*</span>
                          </label>
                          <input 
                            id="input-form-nombre"
                            type="text"
                            name="nombre"
                            required
                            placeholder="Ej. Juan Pérez"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="w-full bg-prestige-bg px-4 py-3 rounded-xl border border-prestige-border/60 text-xs text-prestige-dark focus:outline-none focus:border-prestige-gold focus:bg-white transition-all placeholder-gray-400"
                          />
                        </div>

                        {/* Two-columns Email and Phone */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[11px] font-semibold text-prestige-navy uppercase tracking-wider block mb-1.5">
                              Correo Electrónico <span className="text-red-500">*</span>
                            </label>
                            <input 
                              id="input-form-email"
                              type="email"
                              name="email"
                              required
                              placeholder="Ej. juan@correo.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-prestige-bg px-4 py-3 rounded-xl border border-prestige-border/60 text-xs text-prestige-dark focus:outline-none focus:border-prestige-gold focus:bg-white transition-all placeholder-gray-400"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] font-semibold text-prestige-navy uppercase tracking-wider block mb-1.5">
                              Teléfono de Contacto <span className="text-red-500">*</span>
                            </label>
                            <input 
                              id="input-form-telefono"
                              type="tel"
                              name="telefono"
                              required
                              placeholder="Ej. +54 9 11 1234-5678"
                              value={formData.telefono}
                              onChange={handleInputChange}
                              className="w-full bg-prestige-bg px-4 py-3 rounded-xl border border-prestige-border/60 text-xs text-prestige-dark focus:outline-none focus:border-prestige-gold focus:bg-white transition-all placeholder-gray-400"
                            />
                          </div>
                        </div>

                        {/* Dropdown area selection */}
                        <div>
                          <label className="text-[11px] font-semibold text-prestige-navy uppercase tracking-wider block mb-1.5">
                            Área de Consulta <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="input-form-area"
                            name="area"
                            required
                            value={formData.area}
                            onChange={handleInputChange}
                            className="w-full bg-prestige-bg px-4 py-3 rounded-xl border border-prestige-border/60 text-xs text-prestige-dark focus:outline-none focus:border-prestige-gold focus:bg-white transition-all cursor-pointer"
                          >
                            {areasConsulta.map((area, idx) => (
                              <option 
                                key={idx} 
                                value={area}
                                disabled={idx === 0}
                              >
                                {area}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Consultation detail text area */}
                        <div>
                          <label className="text-[11px] font-semibold text-prestige-navy uppercase tracking-wider block mb-1.5">
                            Detalle de su Consulta / Mensaje <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="input-form-mensaje"
                            name="mensaje"
                            required
                            rows={5}
                            placeholder="Describa brevemente el problema jurídico para poder brindarle el asesoramiento adecuado..."
                            value={formData.mensaje}
                            onChange={handleInputChange}
                            className="w-full bg-prestige-bg px-4 py-3 rounded-xl border border-prestige-border/60 text-xs text-prestige-dark focus:outline-none focus:border-prestige-gold focus:bg-white transition-all resize-none placeholder-gray-400"
                          ></textarea>
                        </div>

                        {/* Confidentiality notice */}
                        <div className="flex items-start gap-2 py-2">
                          <ShieldCheck size={16} className="text-prestige-gold shrink-0 mt-0.5" />
                          <p className="text-[10px] text-prestige-muted font-light leading-relaxed">
                            Los datos ingresados son confidenciales y se encuentran amparados bajo la Ley Nacional de Secreto Profesional y Protección de Datos Personales N° 25.326.
                          </p>
                        </div>

                        {/* Submit Button */}
                        <button
                          id="submit-consultation-btn"
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 rounded-xl bg-prestige-navy text-white hover:bg-[#091526] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                            isSubmitting ? 'opacity-80 cursor-wait' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                              Procesando Consulta...
                            </>
                          ) : (
                            <>
                              <Send size={13} className="text-prestige-gold" />
                              Enviar Consulta Profesional
                            </>
                          )}
                        </button>

                      </form>
                    </motion.div>
                  ) : (
                    
                    /* ================== SUCCESS STATE ================== */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6">
                        <CheckCircle size={36} />
                      </div>

                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-prestige-navy mb-3">
                        ¡Consulta Recibida con Éxito!
                      </h2>
                      
                      <div className="max-w-md mx-auto">
                        <p className="text-xs text-prestige-muted font-light leading-relaxed mb-6">
                          Estimado/a cliente, los detalles de su caso han sido cargados de manera encriptada y segura en nuestro servidor. 
                        </p>
                        <div className="p-4 rounded-xl bg-prestige-bg border border-prestige-border/50 flex items-start gap-3 text-left mb-8">
                          <Calendar size={18} className="text-prestige-gold shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold text-prestige-navy">Siguiente Paso:</p>
                            <p className="text-[11px] text-prestige-muted mt-0.5 font-light leading-relaxed">
                              En un plazo menor a 2 horas hábiles, uno de nuestros abogados asociados le enviará un correo o le realizará una llamada telefónica informativa para coordinar la primera entrevista profesional.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        id="new-consultation-btn"
                        onClick={() => setSubmitSuccess(false)}
                        className="px-6 py-2.5 rounded-xl border border-prestige-gold text-prestige-gold text-xs font-semibold uppercase tracking-wider hover:bg-prestige-gold-pale/30 transition-all cursor-pointer"
                      >
                        Enviar Otro Mensaje
                      </button>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
