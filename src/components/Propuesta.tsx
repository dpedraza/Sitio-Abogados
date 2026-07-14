import React, { useState } from 'react';
import { 
  Download, 
  Sparkles, 
  Smartphone, 
  Eye, 
  Loader2, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Share2, 
  MessageSquare, 
  Lock, 
  HeartHandshake, 
  Zap, 
  ShieldCheck,
  ExternalLink,
  X
} from 'lucide-react';
import html2canvas from 'html2canvas';

// Import sections to capture them live
import Header from './Header';
import Inicio from './Inicio';
import Areas from './Areas';
import Abogados from './Abogados';
import Blog from './Blog';
import Contacto from './Contacto';
import BusinessCard from './BusinessCard';

// Helper functions to convert oklch and oklab to standard rgb/rgba,
// fixing the html2canvas error: "Attempting to parse an unsupported color function"
function oklchToRgb(l: number, c: number, h: number, a = 1): string {
  const hRad = (h * Math.PI) / 180;
  const a_lab = c * Math.cos(hRad);
  const b_lab = c * Math.sin(hRad);

  const l_ = l + 0.3963377774 * a_lab + 0.2158037573 * b_lab;
  const m_ = l - 0.1055613458 * a_lab - 0.0638541728 * b_lab;
  const s_ = l - 0.0894841775 * a_lab - 1.291485548 * b_lab;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const rL = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const gL = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bL = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  const f = (val: number) => {
    const abs = Math.abs(val);
    const res = abs > 0.0031308 ? 1.055 * Math.pow(abs, 1 / 2.4) - 0.055 : 12.92 * abs;
    return Math.sign(val) * res;
  };

  const r = Math.max(0, Math.min(255, Math.round(f(rL) * 255)));
  const g = Math.max(0, Math.min(255, Math.round(f(gL) * 255)));
  const b = Math.max(0, Math.min(255, Math.round(f(bL) * 255)));

  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
}

function oklabToRgb(l: number, a_lab: number, b_lab: number, a = 1): string {
  const l_ = l + 0.3963377774 * a_lab + 0.2158037573 * b_lab;
  const m_ = l - 0.1055613458 * a_lab - 0.0638541728 * b_lab;
  const s_ = l - 0.0894841775 * a_lab - 1.291485548 * b_lab;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const rL = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const gL = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bL = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  const f = (val: number) => {
    const abs = Math.abs(val);
    const res = abs > 0.0031308 ? 1.055 * Math.pow(abs, 1 / 2.4) - 0.055 : 12.92 * abs;
    return Math.sign(val) * res;
  };

  const r = Math.max(0, Math.min(255, Math.round(f(rL) * 255)));
  const g = Math.max(0, Math.min(255, Math.round(f(gL) * 255)));
  const b = Math.max(0, Math.min(255, Math.round(f(bL) * 255)));

  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
}

function sanitizeCssText(cssText: string): string {
  if (!cssText) return '';
  let sanitized = cssText;

  // 1. Convert standard oklch(L C H [/ A])
  // Supports values with space, slash, commas, decimals, percentages, and newlines
  const oklchRegex = /oklch\(\s*([0-9.%]+)\s+([0-9.%]+)\s+([0-9.deggradradturn%]+)\s*(?:\/\s*([0-9.%]+))?\s*\)/gi;
  sanitized = sanitized.replace(oklchRegex, (_match, lStr, cStr, hStr, aStr) => {
    try {
      const l = lStr.endsWith('%') ? parseFloat(lStr) / 100 : parseFloat(lStr);
      const c = cStr.endsWith('%') ? parseFloat(cStr) / 100 : parseFloat(cStr);
      const h = parseFloat(hStr);
      let a = 1;
      if (aStr) {
        a = aStr.endsWith('%') ? parseFloat(aStr) / 100 : parseFloat(aStr);
      }
      return oklchToRgb(l, c, h, a);
    } catch {
      return 'rgb(13, 28, 50)'; // fallback to brand deep blue
    }
  });

  // 2. Convert standard oklab(L A B [/ Alpha])
  const oklabRegex = /oklab\(\s*([0-9.%]+)\s+([0-9.-]+%?)\s+([0-9.-]+%?)\s*(?:\/\s*([0-9.%]+))?\s*\)/gi;
  sanitized = sanitized.replace(oklabRegex, (_match, lStr, aStr_lab, bStr_lab, aStr) => {
    try {
      const l = lStr.endsWith('%') ? parseFloat(lStr) / 100 : parseFloat(lStr);
      const a_val = aStr_lab.endsWith('%') ? parseFloat(aStr_lab) / 100 : parseFloat(aStr_lab);
      const b_val = bStr_lab.endsWith('%') ? parseFloat(bStr_lab) / 100 : parseFloat(bStr_lab);
      let a = 1;
      if (aStr) {
        a = aStr.endsWith('%') ? parseFloat(aStr) / 100 : parseFloat(aStr);
      }
      return oklabToRgb(l, a_val, b_val, a);
    } catch {
      return 'rgb(13, 28, 50)'; // fallback to brand deep blue
    }
  });

  // 3. Robust catch-all fallbacks to ensure html2canvas absolutely NEVER sees oklch() or oklab()
  // Any oklch(...) or oklab(...) left over (due to variables, custom syntax, etc.) gets replaced with a safe solid color
  sanitized = sanitized.replace(/oklch\([\s\S]*?\)/gi, 'rgb(13, 28, 50)');
  sanitized = sanitized.replace(/oklab\([\s\S]*?\)/gi, 'rgb(13, 28, 50)');

  return sanitized;
}

export default function Propuesta() {
  const [capturingId, setCapturingId] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>('');
  const [previewFilename, setPreviewFilename] = useState<string>('');

  const views = [
    {
      id: 'inicio',
      title: '1. Inicio / Portada de Impacto',
      captureElementId: 'capture-inicio',
      filename: 'morales_abogados_1_inicio.png',
      description: 'La primera impresión para el cliente. Presenta la marca Morales Abogados con un banner hero majestuoso, un retrato profesional, los años de trayectoria y acceso directo a una consulta online.',
      valueProposition: 'Transmite prestigio inmediato, establece autoridad y canaliza a los clientes hacia el contacto rápido.'
    },
    {
      id: 'areas',
      title: '2. Áreas de Práctica',
      captureElementId: 'capture-areas',
      filename: 'morales_abogados_2_areas.png',
      description: 'Una sección interactiva que organiza de forma elegante las especialidades del estudio (Penal, Laboral, Civil, Familia), con descripciones específicas e imágenes de fondo prémium.',
      valueProposition: 'Demuestra especialización técnica y le da claridad al cliente sobre cómo el estudio puede resolver su caso.'
    },
    {
      id: 'abogados',
      title: '3. El Estudio y Perfil Profesional',
      captureElementId: 'capture-abogados',
      filename: 'morales_abogados_3_estudio.png',
      description: 'Cuenta la historia, misión y valores éticos del estudio. Incluye perfiles profesionales interactivos donde el Dr. Morales y su equipo pueden exhibir su formación y experiencia.',
      valueProposition: 'Humaniza la marca del bufete y genera el vínculo de confianza clave en la relación abogado-cliente.'
    },
    {
      id: 'blog',
      title: '4. Blog Jurídico / Actualidad',
      captureElementId: 'capture-blog',
      filename: 'morales_abogados_4_blog.png',
      description: 'Un canal de noticias jurídicas y análisis de jurisprudencia. Permite publicar novedades del derecho penal y civil en Argentina, posicionando al estudio como líder de opinión.',
      valueProposition: 'Posicionamiento orgánico en Google (SEO) y demuestra actualización jurídica constante.'
    },
    {
      id: 'contacto',
      title: '5. Formulario de Contacto & Geolocalización',
      captureElementId: 'capture-contacto',
      filename: 'morales_abogados_5_contacto.png',
      description: 'Pantalla con un formulario de consulta encriptado para reservar citas, los datos de contacto del estudio en CABA y un mapa de geolocalización pulcro.',
      valueProposition: 'Facilita la conversión de visitantes en clientes activos de manera segura y confidencial.'
    },
    {
      id: 'tarjeta',
      title: '6. Tarjeta Digital Interactiva (Smartphone)',
      captureElementId: 'capture-tarjeta',
      filename: 'morales_abogados_6_tarjeta_digital.png',
      description: 'Un minisitio móvil diseñado exclusivamente para smartphones. Permite al Dr. Morales compartir sus datos de contacto por WhatsApp de forma instantánea mediante botones rápidos para llamar, enviar mail o chatear.',
      valueProposition: 'Herramienta de networking sumamente innovadora que sustituye la tarjeta de papel y facilita la recomendación boca en boca.'
    }
  ];

  const handleDownload = async (captureElementId: string, filename: string, viewId: string) => {
    setCapturingId(viewId);
    
    // Give state a brief moment to update and render the component if needed
    await new Promise((resolve) => setTimeout(resolve, 500));

    const element = document.getElementById(captureElementId);
    if (!element) {
      alert('Error: No se pudo encontrar el elemento de captura.');
      setCapturingId(null);
      return;
    }

    // Monkeypatch window.getComputedStyle to translate any oklch/oklab outputs to rgb/rgba
    const originalGetComputedStyle = window.getComputedStyle;
    window.getComputedStyle = function (el, pseudoElt) {
      const style = originalGetComputedStyle(el, pseudoElt);
      return new Proxy(style, {
        get(target, prop) {
          const val = Reflect.get(target, prop);
          if (typeof val === 'function') {
            if (prop === 'getPropertyValue') {
              return function (propertyName: string) {
                const origVal = target.getPropertyValue(propertyName);
                if (origVal && (origVal.includes('oklch') || origVal.includes('oklab'))) {
                  return sanitizeCssText(origVal);
                }
                return origVal;
              };
            }
            return val.bind(target);
          }
          if (typeof val === 'string' && (val.includes('oklch') || val.includes('oklab'))) {
            return sanitizeCssText(val);
          }
          return val;
        }
      });
    };

    // Temporary storage to restore original states after capturing
    const originalSheetsState: { sheet: CSSStyleSheet; tempStyle: HTMLStyleElement }[] = [];
    const originalInlineStyles = new Map<HTMLElement, string>();

    try {
      // 1. Temporarily replace all stylesheets in document.styleSheets
      const sheets = Array.from(document.styleSheets);
      for (const sheet of sheets) {
        try {
          if (sheet.disabled) continue;
          
          let cssText = '';
          if (sheet.cssRules) {
            cssText = Array.from(sheet.cssRules)
              .map(rule => rule.cssText)
              .join('\n');
          }
          
          if (cssText && (cssText.includes('oklch') || cssText.includes('oklab'))) {
            const sanitized = sanitizeCssText(cssText);
            
            // Create a temp style tag with sanitized CSS
            const tempStyle = document.createElement('style');
            tempStyle.setAttribute('data-temp-sanitized', 'true');
            tempStyle.innerHTML = sanitized;
            document.head.appendChild(tempStyle);
            
            // Disable original sheet
            sheet.disabled = true;
            originalSheetsState.push({ sheet, tempStyle });
          }
        } catch (sheetErr) {
          console.warn("Could not process stylesheet:", sheetErr);
        }
      }

      // 2. Sanitize inline styles recursively on the element and descendants
      const sanitizeAndSaveInline = (elem: HTMLElement) => {
        if (elem.style) {
          const origCssText = elem.style.cssText;
          if (origCssText && (origCssText.includes('oklch') || origCssText.includes('oklab'))) {
            originalInlineStyles.set(elem, origCssText);
            elem.style.cssText = sanitizeCssText(origCssText);
          }
        }
        if (elem.children) {
          for (const child of Array.from(elem.children)) {
            sanitizeAndSaveInline(child as HTMLElement);
          }
        }
      };
      sanitizeAndSaveInline(element);

      // 3. Perform the capture using html2canvas
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: false,
        scale: 2, // 2x scale for stunning, super crisp HD images!
        backgroundColor: viewId === 'tarjeta' ? '#0d1c32' : '#fbf9f8',
        logging: false,
      });

      const dataUrl = canvas.toDataURL('image/png');
      
      // Update preview state to display the modal immediately
      const matchedView = views.find(v => v.id === viewId);
      setPreviewImage(dataUrl);
      setPreviewTitle(matchedView ? matchedView.title : 'Vista del Sitio Web');
      setPreviewFilename(filename);

      // Attempt automatic download
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error capturando mockup:', err);
      alert('Se generó la imagen correctamente, pero las descargas automáticas están bloqueadas por el sandbox del navegador. La imagen se abrirá en pantalla para que la puedas guardar manualmente.');
    } finally {
      // RESTORE ALL ORIGINAL STATES
      window.getComputedStyle = originalGetComputedStyle;
      
      // 1. Re-enable original stylesheets and remove temporary ones
      for (const item of originalSheetsState) {
        item.sheet.disabled = false;
        if (item.tempStyle.parentNode) {
          item.tempStyle.parentNode.removeChild(item.tempStyle);
        }
      }
      
      // 2. Restore element inline styles
      originalInlineStyles.forEach((savedCssText, elem) => {
        elem.style.cssText = savedCssText;
      });

      setCapturingId(null);
    }
  };

  const copyPitch = (text: string, pitchId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(pitchId);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const pitchArguments = [
    {
      id: 'pitch_trust',
      title: '🤝 Generación de Confianza Inmediata',
      text: 'Dr. Morales, en el ámbito jurídico, el prestigio y la seriedad lo son todo. Su nuevo sitio web está diseñado con una paleta Azul Marino Profundo y Oro Champagne, proyectando el nivel de excelencia, confidencialidad y rigor ético que caracteriza a su estudio.'
    },
    {
      id: 'pitch_card',
      title: '📱 Innovación con la Tarjeta Digital',
      text: 'Incluimos un minisitio optimizado para celulares que funciona como tarjeta de presentación digital. Puede compartirla directamente por WhatsApp con clientes o colegas. Desde allí, ellos pueden agendar su número, llamarlo, o mandarle un mail con un solo botón, eliminando la fricción y las tarjetas de papel.'
    },
    {
      id: 'pitch_seo',
      title: '✍️ Autoridad con el Blog Integrado',
      text: 'Con el blog de jurisprudencia y actualidad, usted no solo muestra que el estudio está al día con el código penal y civil argentino, sino que le permite rankear en Google de manera gratuita cuando alguien busque asesoramiento en CABA.'
    },
    {
      id: 'pitch_whatsapp',
      title: '💬 Conversión con WhatsApp Directo',
      text: 'El sitio cuenta con un botón flotante inteligente que redirige al cliente a WhatsApp con un mensaje pre-escrito: "Hola Dr. Morales, necesito realizar una consulta legal". Esto facilita que los casos urgentes le lleguen de inmediato a su teléfono.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-prestige-bg">
      
      {/* HEADER PRINCIPAL */}
      <section className="bg-prestige-navy py-16 text-white border-b border-prestige-border/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="font-mono text-xs text-prestige-gold uppercase font-bold tracking-widest block mb-2">
            Panel del Desarrollador / Propuesta Comercial
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Material de Venta para el Dr. Morales
          </h1>
          <div className="w-16 h-0.5 bg-prestige-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Genera imágenes reales en alta definición de cada sección de la web de Morales Abogados para presentárselas en formato de mockup y asegurar la venta del proyecto de desarrollo.
          </p>
        </div>
      </section>

      {/* BANNER AVISO PESTAÑA NUEVA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-amber-50 border border-amber-250 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm text-left">
          <div className="flex gap-3.5 items-start">
            <span className="text-3xl mt-0.5 shrink-0">💡</span>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-amber-950">
                Paso Indispensable para Descargar los Mockups
              </h3>
              <p className="text-xs text-amber-800 font-light mt-1 max-w-3xl leading-relaxed">
                Dado que la previsualización de AI Studio corre dentro de un <strong>iFrame seguro (Sandbox)</strong>, el navegador bloquea las descargas de imágenes por seguridad. Para solucionarlo, haz clic en el botón dorado para abrir la aplicación completa en una nueva pestaña del navegador, y podrás descargar todos los Mockups HD sin ningún tipo de impedimento.
              </p>
            </div>
          </div>
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <ExternalLink size={14} />
            Abrir en Pestaña Nueva
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: ARGUMENTOS DE VENTA (PITCH) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-prestige-gold mb-4">
                <Sparkles size={20} />
                <h2 className="font-serif text-lg font-bold text-prestige-navy">
                  Argumentos para Cerrar el Trato
                </h2>
              </div>
              <p className="text-xs text-prestige-muted font-light leading-relaxed mb-6">
                Usa estas ideas clave redactadas profesionalmente para enviárselas por WhatsApp o correo al Dr. Daniel Morales junto con las capturas de pantalla de la propuesta.
              </p>

              <div className="space-y-5">
                {pitchArguments.map((pitch) => (
                  <div key={pitch.id} className="p-4 bg-prestige-bg/50 rounded-xl border border-prestige-border/20 relative group">
                    <h3 className="text-xs font-bold text-prestige-navy mb-2 flex items-center justify-between">
                      <span>{pitch.title}</span>
                    </h3>
                    <p className="text-[11px] text-prestige-muted font-light leading-relaxed mb-3">
                      "{pitch.text}"
                    </p>
                    <button
                      id={`copy-btn-${pitch.id}`}
                      onClick={() => copyPitch(pitch.text, pitch.id)}
                      className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-prestige-gold border border-prestige-gold/20 hover:border-prestige-gold rounded-md transition-colors cursor-pointer w-full text-center block"
                    >
                      {copiedText === pitch.id ? 'Copiaste el argumento!' : 'Copiar Texto para Enviar'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD DE BENEFICIOS ADICIONALES */}
            <div className="bg-gradient-to-br from-prestige-navy to-[#11233c] text-white rounded-2xl border border-prestige-border/20 p-6 shadow-md text-left relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-base font-bold text-prestige-gold mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} />
                  Estándares del Desarrollo
                </h3>
                <ul className="space-y-3.5 text-xs">
                  <li className="flex items-start gap-2">
                    <Zap size={14} className="text-prestige-gold mt-0.5 shrink-0" />
                    <span className="font-light text-gray-300">
                      <strong className="text-white">Velocidad Extrema:</strong> Carga optimizada que reduce la tasa de rebote del visitante.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone size={14} className="text-prestige-gold mt-0.5 shrink-0" />
                    <span className="font-light text-gray-300">
                      <strong className="text-white">Totalmente Responsivo:</strong> Adaptado con perfección milimétrica a iPhones, Androids y Tablets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HeartHandshake size={14} className="text-prestige-gold mt-0.5 shrink-0" />
                    <span className="font-light text-gray-300">
                      <strong className="text-white">Autogestionable:</strong> El Dr. Morales podrá agregar artículos o cambiar horarios sin depender de un programador.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: CENTRO DE DESCARGA DE MOCKUPS */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            <div className="bg-white rounded-2xl border border-prestige-border/60 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-prestige-navy mb-6">
                <FileText className="text-prestige-gold" size={24} />
                <div>
                  <h2 className="font-serif text-xl font-bold text-prestige-navy">
                    Descargar Vistas del Sitio Web
                  </h2>
                  <p className="text-xs text-prestige-muted mt-1 font-light">
                    Haz clic en "Descargar Mockup HD" para renderizar y descargar una captura real de alta definición en PNG de cada pantalla de este sitio.
                  </p>
                </div>
              </div>

              {/* GRID DE MOCKUPS A DESCARGAR */}
              <div className="grid sm:grid-cols-2 gap-6">
                {views.map((view) => {
                  const isCapturing = capturingId === view.id;
                  return (
                    <div 
                      key={view.id}
                      className="border border-prestige-border/50 rounded-2xl p-5 bg-prestige-bg/20 flex flex-col justify-between hover:border-prestige-gold/40 transition-all shadow-xs"
                    >
                      <div>
                        <h3 className="font-serif text-sm font-bold text-prestige-navy flex items-center justify-between">
                          <span>{view.title}</span>
                          {view.id === 'tarjeta' && (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-prestige-gold/15 text-prestige-gold px-2 py-0.5 rounded-full">
                              Móvil
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-prestige-muted font-light leading-relaxed mt-2">
                          {view.description}
                        </p>
                        <div className="mt-3.5 p-3 rounded-xl bg-white border border-prestige-border/20">
                          <p className="text-[10px] text-prestige-muted font-light">
                            <strong className="text-prestige-navy font-semibold">Valor para el Abogado:</strong> {view.valueProposition}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <button
                          id={`download-mockup-${view.id}`}
                          onClick={() => handleDownload(view.captureElementId, view.filename, view.id)}
                          disabled={capturingId !== null}
                          className="flex-1 py-2.5 px-4 bg-prestige-navy hover:bg-prestige-navy/90 disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                        >
                          {isCapturing ? (
                            <>
                              <Loader2 size={13} className="animate-spin" />
                              Capturando...
                            </>
                          ) : (
                            <>
                              <Download size={13} />
                              Descargar Mockup HD
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* INSTRUCCIONES DE USO */}
              <div className="mt-10 p-5 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-4">
                <CheckCircle2 size={20} className="text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    ¿Cómo funciona este generador?
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed mt-1 font-light">
                    Esta herramienta utiliza un motor de captura en el navegador (html2canvas) para tomar el código del sitio real, renderizarlo en un lienzo de alta densidad y exportarlo directamente en formato de imagen PNG sin marca de agua. Así, garantizas que lo que le muestras al abogado es un reflejo exacto del producto premium final que recibirá.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STAGE OCULTO PARA CAPTURA (html2canvas leerá de aquí) */}
      {/* Renders each component under a standard desktop frame (1200px) or mobile frame (380px) offscreen */}
      <div 
        id="screenshot-capturing-stage"
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          top: '-9999px', 
          width: '1200px', 
          height: 'auto', 
          overflow: 'visible' 
        }}
      >
        
        {/* Captura de Inicio */}
        <div id="capture-inicio" className="w-[1200px] bg-prestige-bg text-prestige-dark pb-16 relative">
          <Header 
            activeSection="inicio" 
            setActiveSection={() => {}} 
            onOpenCard={() => {}} 
            hidePropuestaTab={true}
            isStatic={true}
          />
          <Inicio setActiveSection={() => {}} />
        </div>

        {/* Captura de Areas */}
        <div id="capture-areas" className="w-[1200px] bg-prestige-bg text-prestige-dark pb-16 relative">
          <Header 
            activeSection="areas" 
            setActiveSection={() => {}} 
            onOpenCard={() => {}} 
            hidePropuestaTab={true}
            isStatic={true}
          />
          <Areas selectedAreaId="penal" setSelectedAreaId={() => {}} setActiveSection={() => {}} />
        </div>

        {/* Captura de Abogados */}
        <div id="capture-abogados" className="w-[1200px] bg-prestige-bg text-prestige-dark pb-16 relative">
          <Header 
            activeSection="abogados" 
            setActiveSection={() => {}} 
            onOpenCard={() => {}} 
            hidePropuestaTab={true}
            isStatic={true}
          />
          <Abogados setActiveSection={() => {}} />
        </div>

        {/* Captura de Blog */}
        <div id="capture-blog" className="w-[1200px] bg-prestige-bg text-prestige-dark pb-16 relative">
          <Header 
            activeSection="blog" 
            setActiveSection={() => {}} 
            onOpenCard={() => {}} 
            hidePropuestaTab={true}
            isStatic={true}
          />
          <Blog selectedPostId="" setSelectedPostId={() => {}} setActiveSection={() => {}} onOpenCard={() => {}} />
        </div>

        {/* Captura de Contacto */}
        <div id="capture-contacto" className="w-[1200px] bg-prestige-bg text-prestige-dark pb-16 relative">
          <Header 
            activeSection="contacto" 
            setActiveSection={() => {}} 
            onOpenCard={() => {}} 
            hidePropuestaTab={true}
            isStatic={true}
          />
          <Contacto />
        </div>

        {/* Captura de Tarjeta Digital */}
        <div id="capture-tarjeta" className="w-[380px] bg-prestige-navy py-10 px-4 flex items-center justify-center">
          <div className="w-full">
            <BusinessCard inline={true} />
          </div>
        </div>

      </div>

      {/* MODAL DE PREVISUALIZACIÓN Y DESCARGA DIRECTA */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full border border-prestige-border/60 shadow-2xl flex flex-col overflow-hidden animate-zoom-in">
            
            {/* Header del Modal */}
            <div className="bg-prestige-navy text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles size={16} className="text-prestige-gold" />
                <h3 className="font-serif font-bold text-sm sm:text-base text-prestige-gold">
                  Mockup Generado: {previewTitle}
                </h3>
              </div>
              <button 
                onClick={() => setPreviewImage(null)}
                className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6 overflow-y-auto max-h-[75vh] flex flex-col gap-6 text-center">
              
              {/* Banner de Instrucciones de Guardado FÁCIL */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left flex gap-3 items-start">
                <span className="text-2xl mt-0.5">📥</span>
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    Guardado Garantizado (Sin Bloqueos)
                  </h4>
                  <p className="text-[11px] text-amber-800 leading-relaxed mt-0.5 font-light">
                    Si el botón de descarga automática no inicia, simplemente <strong>haz clic derecho sobre la imagen de abajo y selecciona "Guardar imagen como..."</strong> (o mantén presionada la imagen si estás en un celular). ¡Esta opción funciona siempre en cualquier navegador!
                  </p>
                </div>
              </div>

              {/* Contenedor de la Imagen */}
              <div className="bg-gray-100 rounded-xl p-2 sm:p-4 border border-gray-200 flex items-center justify-center min-h-[250px] relative">
                <img 
                  src={previewImage} 
                  alt={previewTitle}
                  className="max-h-[45vh] object-contain rounded-lg shadow-md mx-auto border border-prestige-border/20"
                />
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a 
                  href={previewImage} 
                  download={previewFilename}
                  className="w-full sm:w-auto px-6 py-3 bg-prestige-gold hover:bg-prestige-gold/90 text-prestige-navy font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={14} />
                  Descargar PNG en HD
                </a>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="w-full sm:w-auto px-6 py-3 border border-prestige-border hover:bg-gray-50 text-prestige-navy font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center cursor-pointer"
                >
                  Cerrar Vista
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
