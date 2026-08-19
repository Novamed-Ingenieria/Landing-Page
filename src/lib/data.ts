export const site = {
  legalName: 'Novamed Ingeniería S.A.S.',
  url: 'https://www.novamedingenieria.com',
  appUrl: 'https://app.novamedingenieria.com',
  phone: '+57 322 694 2370',
  phoneHref: 'tel:+573226942370',
  whatsapp: 'https://wa.me/573226942370',
  email: 'novamedingenieria@gmail.com',
  instagram: 'https://www.instagram.com/novamedingenieria',
  instagramHandle: '@novamedingenieria',
};

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/plataforma', label: 'Plataforma' },
  { href: '/planes', label: 'Planes' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export const plans = [
  {
    id: 'lite',
    name: 'Lite',
    price: '$36.900',
    period: '/ mes',
    tagline: 'Para consultorios y profesionales independientes.',
    users: '1 usuario',
    assets: 'Hasta 20 activos',
    popular: false,
    features: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR',
      'Dashboard',
      'Cronograma',
      'Indicadores de gestión',
      'Alertas de vencimientos',
      'Configuración inicial',
      'Capacitación virtual',
      'Acompañamiento en implementación',
      'Kit documental',
    ],
    featureValues: { 'Capacitación virtual': '1 sesión' },
    cardFeatures: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR y dashboard',
      'Cronograma, indicadores y alertas',
      '1 sesión de capacitación',
    ],
    highlight: [],
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '$69.900',
    period: '/ mes',
    tagline: 'Para consultorios pequeños y centros con pocos equipos.',
    users: '3 usuarios',
    assets: 'Hasta 150 activos',
    popular: true,
    features: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR',
      'Dashboard',
      'Cronograma',
      'Indicadores de gestión',
      'Alertas de vencimientos',
      'Configuración inicial',
      'Capacitación virtual',
      'Acompañamiento en implementación',
      'Kit documental',
      'Programa de mantenimiento preventivo',
      'Programa de verificaciones metrológicas',
    ],
    featureValues: { 'Capacitación virtual': '2 sesiones' },
    cardFeatures: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR y dashboard',
      'Cronograma, indicadores y alertas',
      '2 sesiones de capacitación',
      'Programa de mantenimiento preventivo',
      'Programa de verificaciones metrológicas',
    ],
    highlight: ['Programa de mantenimiento preventivo', 'Programa de verificaciones metrológicas'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$149.900',
    period: '/ mes',
    tagline: 'Para clínicas e IPS en crecimiento.',
    users: '6 usuarios',
    assets: 'Hasta 500 activos',
    popular: false,
    features: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR',
      'Dashboard',
      'Cronograma',
      'Indicadores de gestión',
      'Alertas de vencimientos',
      'Configuración inicial',
      'Capacitación virtual',
      'Acompañamiento en implementación',
      'Soporte priorizado',
      'Kit documental',
      'Programa de mantenimiento preventivo',
      'Programa de verificaciones metrológicas',
      'Procedimiento de mantenimiento preventivo',
      'Procedimiento de mantenimiento correctivo',
      'Procedimiento de verificaciones metrológicas',
    ],
    featureValues: { 'Capacitación virtual': '3 sesiones' },
    cardFeatures: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR y dashboard',
      'Cronograma, indicadores y alertas',
      'Soporte priorizado',
      '3 sesiones de capacitación',
      'Procedimientos de mantenimiento y verificaciones',
    ],
    highlight: ['Soporte priorizado', 'Procedimientos de mantenimiento y verificaciones'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$299.900',
    period: '/ mes',
    tagline: 'Para instituciones de gran escala.',
    users: '10 usuarios',
    assets: 'Hasta 2.000 activos',
    popular: false,
    features: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR',
      'Dashboard',
      'Cronograma',
      'Indicadores de gestión',
      'Alertas de vencimientos',
      'Configuración inicial',
      'Capacitación virtual',
      'Acompañamiento en implementación',
      'Soporte priorizado',
      'Kit documental',
      'Programa de mantenimiento preventivo',
      'Programa de verificaciones metrológicas',
      'Procedimiento de mantenimiento preventivo',
      'Procedimiento de mantenimiento correctivo',
      'Procedimiento de verificaciones metrológicas',
      'Personalización de documentos',
    ],
    featureValues: { 'Capacitación virtual': 'Personalizada' },
    cardFeatures: [
      'Inventario de equipos',
      'Hojas de vida',
      'Gestión documental',
      'Códigos QR y dashboard',
      'Cronograma, indicadores y alertas',
      'Soporte priorizado',
      'Kit documental completo',
      'Capacitación personalizada',
      'Personalización de documentos',
    ],
    highlight: ['Kit documental completo', 'Personalización de documentos'],
  },
];

export const comparisonCategories = [
  {
    name: 'Gestión de información',
    features: ['Inventario de equipos', 'Hojas de vida', 'Gestión documental', 'Códigos QR', 'Dashboard'],
  },
  {
    name: 'Seguimiento y control',
    features: ['Cronograma', 'Indicadores de gestión', 'Alertas de vencimientos'],
  },
  {
    name: 'Servicio y soporte',
    features: ['Configuración inicial', 'Capacitación virtual', 'Acompañamiento en implementación', 'Soporte priorizado'],
  },
  {
    name: 'Kit documental',
    features: [
      'Plan de mantenimiento',
      'Matriz de priorización',
      'Ficha técnica de indicadores',
      'Programa de mantenimiento preventivo',
      'Programa de verificaciones metrológicas',
      'Procedimiento de mantenimiento preventivo',
      'Procedimiento de mantenimiento correctivo',
      'Procedimiento de verificaciones metrológicas',
      'Personalización de documentos',
    ],
  },
];

type PlatformFunction = {
  id: string;
  icon: string;
  title: string;
  short: string;
};

export const platformFunctions: PlatformFunction[] = [
  {
    id: 'trazabilidad',
    icon: 'network',
    title: 'Trazabilidad conectada',
    short: 'Actualiza la información una vez y mantenla disponible en toda la plataforma.',
  },
  {
    id: 'qr',
    icon: 'qr',
    title: 'Identificación mediante QR',
    short: 'Accede rápidamente a la información de cada equipo desde cualquier lugar.',
  },
  {
    id: 'novedades',
    icon: 'alert',
    title: 'Reporte de novedades',
    short: 'Registra novedades y mantén informado al responsable correspondiente.',
  },
  {
    id: 'ordenes',
    icon: 'wrench',
    title: 'Órdenes de trabajo',
    short: 'Asigna, realiza seguimiento y cierra las actividades relacionadas con tus equipos.',
  },
  {
    id: 'cumplimiento',
    icon: 'shield',
    title: 'Control y cumplimiento',
    short: 'Organiza procesos, trazabilidad y documentación para facilitar el cumplimiento.',
  },
];

export const services = [
  {
    name: 'Mantenimiento',
    short: 'Preventivo, correctivo y predictivo para mantener tus equipos en condiciones óptimas.',
    description:
      'Mantenimiento de equipos biomédicos orientado a preservar su correcto funcionamiento y disponibilidad, con registro de cada intervención.',
    image: '/images/Mantenimiento.jpg',
    items: [
      'Mantenimiento preventivo',
      'Mantenimiento correctivo',
      'Mantenimiento predictivo',
      'Registro técnico de cada intervención',
    ],
  },
  {
    name: 'Metrología',
    short: 'Servicios de medición y verificación para asegurar resultados confiables y trazables.',
    description:
      'Servicios de verificación de variables para asegurar la confiabilidad de los equipos de medición y uso clínico.',
    image: '/images/Metrologia.jpg',
    items: [
      'Presión',
      'Temperatura',
      'Humedad',
      'Peso',
      'Flujo',
      'Volumen',
      'Velocidad angular',
      'Energía',
      'Longitud',
      'Saturación de oxígeno',
    ],
  },
  {
    name: 'Comercialización',
    short: 'Equipos biomédicos, accesorios y tecnología para las necesidades de tu institución.',
    description:
      'Comercialización de dispositivos, accesorios y repuestos para equipos de diagnóstico, soporte vital, laboratorio e imagenología.',
    image: '/images/Comercializacion.jpg',
    items: [
      'Dispositivos médicos',
      'Accesorios',
      'Repuestos especializados',
      'Acompañamiento en la selección',
    ],
  },
];

export const faqs = [
  {
    question: '¿Qué es la plataforma de Novamed Ingeniería?',
    answer:
      'Es una plataforma para la gestión de tecnología biomédica: centraliza el inventario, las hojas de vida, los cronogramas, la gestión documental y los indicadores de tus equipos, conectando su trazabilidad en un solo lugar.',
  },
  {
    question: '¿Qué incluye una demostración?',
    answer:
      'Un recorrido guiado por la plataforma según las necesidades de tu institución: inventario, trazabilidad, QR, órdenes de trabajo y control documental. Sin compromiso.',
  },
  {
    question: '¿Los precios son públicos?',
    answer:
      'Sí. Puedes revisar todos los planes y sus precios en la página de Planes. No es necesario registrarse para conocerlos.',
  },
  {
    question: '¿La plataforma reemplaza el mantenimiento de los equipos?',
    answer:
      'No. La plataforma gestiona la información y la trazabilidad de la tecnología. El mantenimiento, la verificación metrológica y la comercialización son servicios técnicos que Novamed Ingeniería ofrece de forma complementaria.',
  },
  {
    question: '¿Cómo accedo a la información de un equipo?',
    answer:
      'Cada equipo puede contar con un código QR. Al escanearlo accedes a su hoja de vida, reportes, manuales e información relevante desde cualquier dispositivo.',
  },
  {
    question: '¿En qué sectores trabaja Novamed Ingeniería?',
    answer:
      'Principalmente en los sectores salud y veterinario: IPS, clínicas, consultorios, laboratorios, centros veterinarios y profesionales que gestionan tecnología biomédica.',
  },
  {
    question: '¿Cómo solicito una demostración?',
    answer:
      'Usa la agenda en la página de Demo, escríbenos por WhatsApp al +57 322 694 2370 o al correo novamedingenieria@gmail.com.',
  },
];
