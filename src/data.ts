import { PracticeArea, TeamMember, BlogPost } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'penal',
    title: 'Derecho Penal',
    description: 'Defensa penal estratégica, representación en juicios, excarcelaciones y asesoramiento en delitos complejos.',
    icon: 'Scale',
    detailedDescription: 'Nuestro equipo de especialistas en Derecho Penal brinda asistencia técnica de la más alta calidad y discreción, desde las primeras etapas de la investigación penal hasta el debate oral y la instancia de recursos ante tribunales superiores.',
    keyPoints: [
      'Defensa técnica en delitos económicos, tributarios y de cuello blanco.',
      'Representación de particulares y empresas como Querellantes.',
      'Excarcelaciones, eximiciones de prisión y morigeraciones de la prisión preventiva.',
      'Asistencia en audiencias de juicio oral, recursos de Casación y extraordinarios.'
    ]
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    description: 'Defensa de derechos de trabajadores, despidos, indemnizaciones, accidentes de trabajo y conciliaciones.',
    icon: 'Briefcase',
    detailedDescription: 'Protegemos los intereses de trabajadores y PyMEs en el ámbito de las relaciones de trabajo, buscando soluciones rápidas mediante conciliación obligatoria o litigando con firmeza ante la justicia laboral.',
    keyPoints: [
      'Reclamos por despidos directos, indirectos, trabajo no registrado y diferencias salariales.',
      'Accidentes de trabajo, enfermedades profesionales y reclamos ante la ART.',
      'Asesoramiento preventivo para empresas, redacción de contratos de trabajo y convenios.',
      'Asistencia en SECLO, Ministerio de Trabajo y juicios laborales.'
    ]
  },
  {
    id: 'civil',
    title: 'Derecho Civil y Comercial',
    description: 'Contratos, sucesiones, daños y perjuicios, reclamos de seguros y asesoría contractual integral.',
    icon: 'FileText',
    detailedDescription: 'Ofrecemos asesoría y patrocinio en toda clase de conflictos civiles y de contratación. Nos encargamos de resguardar el patrimonio familiar e institucional mediante estrategias legales efectivas.',
    keyPoints: [
      'Redacción y revisión de contratos de compraventa, locación, fideicomisos y mutuos.',
      'Juicios de daños y perjuicios, accidentes de tránsito y reclamos ante aseguradoras.',
      'Planificación sucesoria, sucesiones ab-intestato y testamentarias.',
      'Juicios de desalojo, usucapión, posesión y resolución de disputas de propiedad.'
    ]
  },
  {
    id: 'familia',
    title: 'Derecho de Familia',
    description: 'Divorcios, alimentos, régimen de comunicación, responsabilidad parental y división de bienes.',
    icon: 'Users',
    detailedDescription: 'Abordamos las problemáticas familiares con la sensibilidad, empatía y discreción que cada caso amerita. Buscamos conciliar y proteger el interés superior del niño antes de avanzar en litigios judiciales severos.',
    keyPoints: [
      'Trámites de divorcio unilateral o por mutuo acuerdo.',
      'Establecimiento de cuota alimentaria, incidentes de aumento o reducción de alimentos.',
      'Regímenes de comunicación y cuidado personal de los hijos.',
      'Acuerdos de división de la sociedad conyugal y liquidación de bienes.'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'daniel-morales',
    name: 'Dr. Daniel Morales',
    role: 'Abogado Fundador / Socio Director',
    specialty: 'Derecho Penal & Litigación Estratégica',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&h=500',
    description: 'Graduado con honores en la Universidad de Buenos Aires. Especialista en Derecho Penal y Procesal Penal, con más de 15 años de trayectoria liderando defensas en casos de alta complejidad pública y corporativa. Ex asesor parlamentario en comisiones de legislación penal y disertante en seminarios nacionales.',
    education: [
      'Abogado - Universidad de Buenos Aires (UBA) - Diploma de Honor',
      'Posgrado en Derecho Penal Empresario - Universidad Torcuato Di Tella',
      'Maestría en Litigación Oral - Southwestern Law School (USA)'
    ],
    contactEmail: 'dmorales.juridico@gmail.com'
  },
  {
    id: 'victoria-aranda',
    name: 'Dra. Victoria Aranda',
    role: 'Asociada Senior',
    specialty: 'Derecho Laboral & Relaciones del Trabajo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5O4uoTNMsWNZOoOLFciFtruGsZa85G_z0a6rZXvMv-ikRfBgwbC9jLsSOjQ5kOyjOfwb3sbz-C3cU5EYL_AgQlr706XoYw6g-RsAGGL9E0AHNwkPj9vM433_O73DaKAQ7WpDMLgD3jq0VB22F92fAmxH_EGKCeTfXEdB5SKrpazkjrGh5Mip8rvic93Srn8EUacfrj7y2z3BdTut5xXyrwvNRxjPU4IfYakP8oYqY0kL3TvBofFqrww',
    description: 'Abogada con vasta experiencia en el ámbito de las relaciones de trabajo, tanto en la representación de trabajadores individuales como en el asesoramiento corporativo para la prevención de contingencias de PyMEs. Lidera las mediaciones laborales y negociaciones ante organismos gubernamentales.',
    education: [
      'Abogada - Universidad de Buenos Aires (UBA)',
      'Especialización en Derecho del Trabajo y la Seguridad Social - UBA',
      'Diplomatura en Derecho Laboral Digital - Universidad Austral'
    ],
    contactEmail: 'varanda.juridico@gmail.com'
  },
  {
    id: 'julian-sastre',
    name: 'Dr. Julián Sastre',
    role: 'Asociado',
    specialty: 'Derecho Civil & Planificación Sucesoria',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV4THpMpZUoFwc6b0pYt9eR6ySqGRoQAks2WnsyMYcIlQ_9l1V5ED7b-xvdmgvIMJSd6t2f5tTup_T-4GJnFNarInzHuk_WvEjpi5QXrSIVvpGJTvJwe5aZIRzgRzxr0P6INLsqWCNGM7r-PsmAiRAWwgTGJ2QaPbG5l6yW4q_rpbsQ-fqqaA7jFlhLDisEowUXxIA_MVTV0WfbeAV4mrLUo0GCVfqEMHfiH2ipzDtNGq5u9lH_aEGGg',
    description: 'Dedicado enteramente a la resolución integral de litigios contractuales, sucesorios y de responsabilidad civil. Se destaca por un enfoque metódico y orientado a resultados, priorizando el resguardo patrimonial y la mediación pre-judicial para evitar demoras procesales innecesarias.',
    education: [
      'Abogado - Universidad de Belgrano (UB)',
      'Especialización en Planificación Sucesoria y Fideicomisos - Universidad Austral',
      'Curso Superior de Responsabilidad Civil Contractual - Universidad de Salamanca (España)'
    ],
    contactEmail: 'jsastre.juridico@gmail.com'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'reformas-codigo-civil',
    title: 'Reformas Recientes en el Código Civil Argentino',
    category: 'Actualidad Jurídica',
    date: '12 Oct 2026',
    readTime: '5 min',
    excerpt: 'Un análisis detallado sobre las últimas modificaciones normativas y su impacto directo en las obligaciones contractuales vigentes, alquileres y sucesiones...',
    content: `Las recientes modificaciones legislativas en la República Argentina han planteado un escenario de debate y actualización obligada tanto para profesionales del derecho como para ciudadanos y empresas. 
    
En este artículo analizaremos los puntos centrales de estas reformas, enfocándonos en la validez y ejecución de contratos comerciales, la flexibilidad en contratos de locación urbana, y la simplificación de plazos en los procesos sucesorios ab-intestato.

### 1. El Principio de Autonomía de la Voluntad en los Contratos
Las nuevas directrices otorgan un mayor margen de negociación a las partes contratantes, disminuyendo la intervención de los tribunales en la renegociación de cláusulas, salvo casos manifiestos de abuso del derecho o imprevisión extrema. Esto dota de mayor previsibilidad a las transacciones comerciales, pero a su vez exige una redacción contractual extremadamente rigurosa para evitar vacíos legales.

### 2. Flexibilización en la Locación de Inmuebles
La derogación y ajuste de normativas previas sobre alquileres restablece la libertad de contratación en cuanto a plazos mínimos, moneda de pago (admitiendo el curso legal de moneda extranjera por mutuo acuerdo) y fórmulas de actualización. Consideramos que esta medida dinamizará la oferta del mercado de alquileres, si bien requerirá un cuidadoso equilibrio en las tratativas iniciales.

### 3. Agilización de las Declaratorias de Herederos
La simplificación administrativa de ciertas etapas del proceso sucesorio permite reducir sensiblemente los tiempos procesales, siempre y cuando exista conformidad absoluta entre los coherederos. La digitalización judicial en fueros civiles ha sido clave en este aspecto.

*Recomendación Profesional:* Ante este panorama dinámico, resulta indispensable realizar una auditoría legal sobre los contratos que su empresa mantenga vigentes y readecuar las políticas de contratación para maximizar las ventajas que ofrece la nueva estructura normativa.`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL0Qf-y6O6eNyG1PXgzkO8228KsAnxEm0M_uu_aBB5dLhl4KEMPM2548OrGMpCtdgkQyzSNp8tSD-0knakVz5WgN998nn0UTSNVcMa6yNPJnGfckKmU034Qb0MynWb_78V1Cuv0Ab7lM3-hCAmhxgGxyhNcBEP_EClpbAOOFkcg-Kc_CZbKq8bzbVQA8xi-tdQl6lD6wL6AiGY3iVrD0GwUbQ16S0wASPsTb7dJ0l3829Zea9p5ShXqg',
    author: 'Dr. Daniel Morales'
  },
  {
    id: 'derechos-laborales-teletrabajo',
    title: 'Derechos Laborales ante Nuevas Modalidades de Teletrabajo',
    category: 'Derecho Laboral',
    date: '08 Oct 2026',
    readTime: '4 min',
    excerpt: 'Guía práctica sobre la regulación del trabajo a distancia, la desconexión digital, compensaciones de gastos de conectividad y las responsabilidades mutuas de empleador y empleado...',
    content: `La consolidación del teletrabajo como modalidad habitual ha generado un sinnúmero de consultas jurídicas relativas a los límites de la jornada laboral y las compensaciones de gastos. La Ley de Teletrabajo en Argentina establece pautas claras que tanto empleadores como empleados suelen ignorar.

### El Derecho a la Desconexión Digital
Es uno de los pilares de la regulación: el empleado tiene derecho a no responder comunicaciones fuera de su horario laboral sin ser sancionado. La ley prohíbe explícitamente remitir tareas u órdenes fuera de la jornada convenida, resguardando la salud psicofísica del trabajador.

### Reversibilidad de la Modalidad
Salvo pacto contrario en el ingreso del trabajador, el consentimiento para teletrabajar es reversible. El empleado puede solicitar volver a la modalidad presencial en las dependencias de la empresa, y el empleador debe proveer las condiciones necesarias en un plazo razonable, salvo causa grave justificada.

### Provisión de Herramientas y Compensación de Gastos
La provisión de la computadora, silla ergonómica y el pago de una compensación por los gastos de conectividad y electricidad son obligatorios. Estos pagos tienen carácter no remunerativo, lo que significa que no tributan cargas sociales, pero deben quedar documentados debidamente para evitar reclamos por diferencias salariales en el futuro.`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZIprKvGoXgiDuuniRewa8LxkPJsfm4LgyZJI6HHcdHjReGWQ8yXAo91ZIvVLKKRwttJFj6Nol_FXXKrQFZYovNKXEZhBUb3YyNRoBXsLmZeEcHSyM7tSOaLFoRw1B_rLvfLmfHBr5QVvWbmo_CSyhd71MwbS70n9B32vpxajbFyasNujpDzXQUUNYgFdKDckTYgZLlW-d4JU86EjemEpTXIH_3AqR1frKNDnheFmSZTctaBaM14zmw',
    author: 'Dra. Victoria Aranda'
  },
  {
    id: 'proceso-sucesorio-claves',
    title: 'El Proceso de Sucesiones: Claves para Evitar Conflictos Familiares',
    category: 'Derecho Civil',
    date: '28 Sep 2026',
    readTime: '6 min',
    excerpt: 'Cómo planificar y tramitar una herencia de manera eficiente, reduciendo costos judiciales y fiscales, y resguardando la armonía de los vínculos afectivos familiares...',
    content: `Afrontar el fallecimiento de un ser querido es sumamente doloroso, y la posterior necesidad de ordenar el patrimonio familiar suele ser un foco de tensiones. Una correcta planificación y un asesoramiento empático y riguroso pueden marcar la diferencia entre una sucesión ordenada y un litigio familiar interminable.

### 1. Planificación Sucesoria: El Testamento y el Fideicomiso
En nuestro país, la legítima hereditaria resguarda una porción mayoritaria de la herencia para los herederos forzosos (hijos, cónyuge, padres). No obstante, es perfectamente viable testar sobre la porción disponible (un tercio del total) para favorecer a personas específicas o causas de interés. Asimismo, la conformación de fideicomisos familiares se presenta como una alternativa sumamente sólida para asegurar la continuidad de empresas familiares sin parálisis operativas.

### 2. Sucesión de Mutuo Acuerdo vs. Sucesión Litigiosa
Cuando todos los herederos están de acuerdo en la distribución de bienes, el trámite judicial es ágil. Se inicia la demanda sucesoria, se publican edictos y se dicta la Declaratoria de Herederos. Posteriormente, se acuerda una partición privada que el juez homologa. Sin embargo, ante la más mínima discordia, el juez nombrará un perito inventariador y partidor, lo que incrementará sustancialmente las tasas de justicia y los honorarios profesionales, licuando parte del patrimonio heredado.

### 3. La Importancia de los Informes Dominiales Previos
Antes de inscribir los bienes, es crucial verificar el estado jurídico de los mismos mediante informes de dominio e inhibición ante el Registro de la Propiedad Inmueble. De este modo, se evitan sorpresas desagradables relativas a embargos o hipotecas no saldadas que pudieran entorpecer el proceso de inscripción o la posterior venta por tracto abreviado.`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXA8bN_c6y3C6Q-zKvpujArJM7CR1ZPrXV7wi3CwzojrLNU8EU1Pf4FoD-tRSOHflRhlQ63z9kG-kc_qSanw8Vn3gm6XusAdOHxTykgzGp-CzS2CRzgeYLZA33zTe4KQmChGV1ylzfrX5EZrqUQbdgCTVrvTy2W5483VWU9HwoyiAQaWjLtxD9q9ZcoQivJarr3VsGvFD6wOLpo5zYc2v67Yn_vWVBk6bqSc-vHC6iMCSWaii8-Evrw',
    author: 'Dr. Julián Sastre'
  },
  {
    id: 'responsabilidad-medica-accidentes',
    title: 'Nuevos Criterios de Indemnización en Daños y Perjuicios',
    category: 'Derecho Civil',
    date: '15 Sep 2026',
    readTime: '5 min',
    excerpt: 'Análisis jurisprudencial sobre la tasación judicial del daño moral, incapacidad sobreviniente y la actualización de montos ante procesos inflacionarios severos...',
    content: `Los juicios por accidentes de tránsito y mala praxis médica han experimentado un cambio rotundo en la forma de computar las indemnizaciones debido a las altas tasas de depreciación monetaria. 

### Fórmulas Matemáticas de Tasación
Los tribunales de diversas jurisdicciones aplican con mayor rigurosidad fórmulas matemáticas financieras (como Méndez, Vuoto o Marshall) para determinar el valor de la incapacidad física o psíquica sobreviniente, en reemplazo de estimaciones arbitrarias del pasado. Esto brinda mayor objetividad, pero exige que los dictámenes periciales médicos estén blindados técnicamente.

### La Reparación del Daño Moral
El daño moral o extrapatrimonial ya no se considera un mero porcentaje del daño patrimonial, sino una indemnización autónoma que resarce la alteración del proyecto de vida y los padecimientos anímicos. Los jueces analizan de forma casuística las limitaciones recreativas, familiares y de esparcimiento que la víctima padece tras el siniestro.`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSoNgSdLNQOwyHUJNVwe8GJ5EQgEHl6ybTM3JBDBc1v5tRt5Z3eJ0baL0PU42RTCpmjgqLElNAEhtU3S01426iSn82eW1GUswf22T4Jaz9CojYLHsM2Pjbtha7hFFYtd136nV26e5b5k8_oP5GUUZNfaoP11CH-0GaKBIaGwXuaWpExhN3x4mJd6ApxIM0lvzEJvQxPCJ7FXYaigbDXWcIMnJwttOlD5qMO1ymky5BjxOiTS36qYocMw',
    author: 'Dr. Julián Sastre'
  }
];
