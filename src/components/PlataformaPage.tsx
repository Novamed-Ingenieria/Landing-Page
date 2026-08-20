import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  QrCode,
  BellRing,
  Wrench,
  ShieldCheck,
  Check,
  LayoutDashboard,
  Boxes,
  FileText,
  TrendingUp,
  FolderOpen,
  ScanLine,
  ClipboardList,
  BarChart3,
  Plug,
  X,
  AlertTriangle,
  Clock,
  FileWarning,
  Search,
  CheckCircle,
  Zap,
  TrendingDown,
  Shield,
  Database,
  Activity,
} from 'lucide-react';
import TraceMockup from './mockups/TraceMockup';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';

const pillars = [
  {
    id: 'operativa',
    icon: ClipboardList,
    label: 'Gestión Operativa',
    title: 'De solicitudes dispersas a una operación ordenada.',
    desc: 'Centraliza la gestión, accede a la información desde cualquier lugar y toma decisiones con indicadores en tiempo real.',
    points: ['Portal único de solicitudes QR', 'Órdenes de trabajo con seguimiento', 'Planificador preventivo', 'Indicadores en tiempo real'],
    note: { title: 'Operación en tiempo real', desc: 'Cada solicitud, orden y actividad conectada en un solo flujo.' },
    metrics: [
      { value: '1', label: 'Portal QR', color: 'text-brand-blue', bg: 'bg-brand-blue/5' },
      { value: '100%', label: 'Órdenes trazadas', color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { value: '24/7', label: 'Indicadores en vivo', color: 'text-amber-600', bg: 'bg-amber-50' },
    ],
  },
  {
    id: 'activos',
    icon: Boxes,
    label: 'Control de Activos',
    title: 'Cada equipo como un activo digital con identidad propia.',
    desc: 'Convierte cada equipo biomédico en un activo digital donde toda su información está centralizada, actualizada y disponible 24/7.',
    points: ['Inventario centralizado', 'Hojas de vida por equipo', 'Código QR en cada activo', 'Historial completo y consultable'],
    note: { title: 'Cada equipo, un activo digital', desc: 'Inventario y hojas de vida siempre actualizados.' },
    metrics: [
      { value: '100%', label: 'Inventario en línea', color: 'text-brand-blue', bg: 'bg-brand-blue/5' },
      { value: 'QR', label: 'Por activo', color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { value: '24/7', label: 'Historial disponible', color: 'text-amber-600', bg: 'bg-amber-50' },
    ],
  },
  {
    id: 'cumplimiento',
    icon: ShieldCheck,
    label: 'Cumplimiento y Seguridad',
    title: 'De una gestión reactiva a una cultura de prevención.',
    desc: 'Anticipa riesgos, fortalece la seguridad del paciente y facilita el cumplimiento en auditorías de habilitación.',
    points: ['Gestión documental organizada', 'Alertas de vencimientos', 'Historial auditable', 'Respaldo en auditorías'],
    note: { title: 'Cumplimiento demostrable', desc: 'Documentación organizada y alertas antes de cada vencimiento.' },
    metrics: [
      { value: '0', label: 'Multas', color: 'text-brand-blue', bg: 'bg-brand-blue/5' },
      { value: '100%', label: 'Documentación', color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { value: 'Alertas', label: 'Vencimientos', color: 'text-amber-600', bg: 'bg-amber-50' },
    ],
  },
  {
    id: 'gerencial',
    icon: BarChart3,
    label: 'Inteligencia Gerencial',
    title: 'Convierte los datos técnicos en decisiones ejecutivas.',
    desc: 'Accede a indicadores claros, prioriza inversiones y posiciona tu área de mantenimiento como un actor estratégico.',
    points: ['Dashboards de gestión', 'Indicadores de cumplimiento', 'Decisiones basadas en evidencia', 'Control de costos y repuestos'],
    note: { title: 'Decisiones con evidencia', desc: 'Indicadores claros para priorizar y controlar costos.' },
    metrics: [
      { value: 'KPIs', label: 'En tiempo real', color: 'text-brand-blue', bg: 'bg-brand-blue/5' },
      { value: '100%', label: 'Visibilidad', color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { value: 'CO$', label: 'Control de costos', color: 'text-amber-600', bg: 'bg-amber-50' },
    ],
  },
];

const pillarTones = ['green', 'warn', 'alert', 'green'];

function TabsSection() {
  const [active, setActive] = useState(0);
  const current = pillars[active];
  return (
    <section className="relative overflow-hidden bg-gray-200 px-5 py-16 md:px-8 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid page-grid-green opacity-30" />
        <div className="absolute right-[-5%] top-[5%] h-[350px] w-[350px] rounded-full bg-green/10 blur-3xl" />
        <div className="absolute bottom-[-8%] left-[-5%] h-[300px] w-[300px] rounded-full bg-brand-blue/[0.07] blur-3xl" />
        <div className="absolute left-[40%] top-[-10%] h-[250px] w-[250px] rounded-full bg-[#C2472E]/[0.05] blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] h-[200px] w-[200px] rounded-full bg-indigo-500/[0.05] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          title="Todas las soluciones para tu tecnología."
          description="Cuatro pilares que se conectan entre sí para que la información fluya de la operación a la decisión."
        />
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Pilares de la plataforma">
          {pillars.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`panel-${p.id}`}
              id={`tab-${p.id}`}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-md active:scale-[0.98] ${
                i === active
                  ? 'border-green-deep bg-green-deep text-white shadow-lg shadow-green-deep/20'
                  : 'border-brand-dark/15 bg-white text-brand-deep hover:border-green/40 hover:bg-green/5'
              }`}
            >
              <p.icon className="h-4 w-4" />
              {p.label}
            </button>
          ))}
        </div>
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
            className="mt-6 grid gap-6 rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-[0_18px_40px_rgba(12,70,107,0.10)] md:grid-cols-[1.1fr_0.9fr] md:p-8"
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-deep text-white">
              <current.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 max-w-md text-2xl font-bold leading-snug text-brand-deep md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {current.desc}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {current.points.map((point, j) => (
                <p key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      pillarTones[j % pillarTones.length] === 'green'
                        ? 'bg-green'
                        : pillarTones[j % pillarTones.length] === 'warn'
                          ? 'bg-warn'
                          : 'bg-alert'
                    }`}
                  />
                  {point}
                </p>
              ))}
            </div>
            <Button
              href="/demo"
              className="mt-6 w-fit rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
            >
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-green-soft" />
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-[0_18px_40px_rgba(12,70,107,0.12)]">
              <div>
                <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-deep text-white">
                    <current.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-brand-deep">{current.label}</p>
                  <span className="ml-auto flex items-center gap-1.5 rounded-full bg-green-soft px-2.5 py-1 text-[10px] font-bold text-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-green" />Activo
                  </span>
                </div>
                <div className="mt-5 rounded-xl bg-surface-muted p-4 text-xs">
                  <p className="font-bold text-brand-deep">{current.note.title}</p>
                  <p className="mt-1 text-muted-foreground">{current.note.desc}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {current.metrics.map((m) => (
                  <div key={m.label} className={`rounded-lg py-2 text-center ${m.bg}`}>
                    <p className={`text-sm font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const platforms = ['API REST', 'ERP', 'HIS', 'Excel / CSV'];
  return (
    <section className="border-t border-brand-dark/15 bg-white px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-deep">Integraciones</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-brand-deep md:text-4xl">
          Tu sistema administrativo, sin trabajo duplicado.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Conecta Novamed Ingeniería con tu ERP, HIS o plataforma actual a través de API y elimina los silos de información.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((p) => (
            <span key={p} className="flex items-center gap-2 rounded-full border border-green/30 bg-green-soft px-5 py-2.5 text-sm font-bold text-green-deep">
              <Plug className="h-4 w-4" />
              {p}
            </span>
          ))}
        </div>
        <Button href="/demo" variant="outline" className="mt-9 w-fit rounded-xl border-green/30 px-6 py-3 text-green-deep hover:border-green/60 hover:bg-green-soft">
          Conocer integraciones <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

const views = [
  { label: 'Dashboard', icon: LayoutDashboard, color: 'text-brand-light', bg: 'bg-brand-light/20' },
  { label: 'Inventario', icon: Boxes, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { label: 'Hoja de vida', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/20' },
  { label: 'Vista de equipo', icon: ScanLine, color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
  { label: 'Códigos QR', icon: QrCode, color: 'text-brand-light', bg: 'bg-brand-light/20' },
  { label: 'Orden de trabajo', icon: Wrench, color: 'text-red-400', bg: 'bg-red-500/20' },
  { label: 'Indicadores', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { label: 'Gestión documental', icon: FolderOpen, color: 'text-amber-400', bg: 'bg-amber-500/20' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useState(null);

  useState(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  });

  return <span>{count}{suffix}</span>;
}

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid page-grid-blue opacity-40" />
        <div className="absolute right-[-8%] top-[-14%] h-[520px] w-[520px] rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[380px] w-[380px] rounded-full border-[60px] border-brand-light/25" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.07] blur-3xl" />
        <div className="absolute right-[15%] top-[20%] h-[200px] w-[200px] rounded-full bg-accent-indigo/[0.06] blur-3xl" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2 animate-glow-slide bg-gradient-to-r from-brand-dark/20 via-brand-light/80 to-brand-dark/20 shadow-[0_-5px_20px_rgba(12,70,107,0.18)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="space-y-6">
          <Reveal delay={0.08}>
            <h1 className="text-4xl leading-[1.1] font-bold md:text-5xl">
              Trazabilidad conectada para la tecnología de tu institución
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Novamed Ingeniería no es un simple sistema de inventario. Es una plataforma que conecta la
              información de tus equipos: inventario, hojas de vida, cronogramas, documentación y
              seguimiento, en un solo lugar.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/demo" size="lg" className="uppercase tracking-wider">
                Solicitar demostración <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/planes" variant="outline" size="lg" className="uppercase tracking-wider">
                Ver planes
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <ShieldCheck className="h-5 w-5 text-[#C2472E]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">Resolución 3100</p>
                  <p className="text-[10px] text-muted-foreground">Habilitación en salud · 2019</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <FileText className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">Decreto 4725</p>
                  <p className="text-[10px] text-muted-foreground">Dispositivos médicos · 2005</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                  <Activity className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">Resolución 4816</p>
                  <p className="text-[10px] text-muted-foreground">Tecnovigilancia · 2008</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <img
            src="/plataforma/Dashboard.png"
            alt="Dashboard de dotación - Novamed Ingeniería"
            className="w-full rounded-2xl shadow-[0_28px_56px_rgba(12,70,107,0.16)]"
            loading="eager"
          />
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-brand-blue p-4 text-center shadow-md shadow-brand-blue/20">
              <p className="text-2xl font-bold text-white"><AnimatedCounter value={500} suffix="+" /></p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Equipos gestionados</p>
            </div>
            <div className="rounded-xl bg-emerald-500 p-4 text-center shadow-md shadow-emerald-500/20">
              <p className="text-2xl font-bold text-white"><AnimatedCounter value={99} suffix=".9%" /></p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Disponibilidad</p>
            </div>
            <div className="rounded-xl bg-[#C2472E] p-4 text-center shadow-md shadow-[#C2472E]/20">
              <p className="text-2xl font-bold text-white"><AnimatedCounter value={3} suffix="x" /></p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Más rápido</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const traditional = [
    { icon: FileWarning, text: 'Hojas de vida en Excel o papel' },
    { icon: Clock, text: 'Búsqueda manual de información' },
    { icon: AlertTriangle, text: 'Pérdida de documentación' },
    { icon: Search, text: 'Sin trazabilidad de cambios' },
    { icon: FileWarning, text: 'Dificultad en auditorías' },
  ];

  const withPlatform = [
    { icon: Database, text: 'Hojas de vida digitales centralizadas' },
    { icon: Zap, text: 'Acceso instantáneo con QR' },
    { icon: Shield, text: 'Documentación respaldada en la nube' },
    { icon: TrendingUp, text: 'Trazabilidad completa automática' },
    { icon: CheckCircle, text: 'Auditorías preparadas en segundos' },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-400 via-brand-blue to-emerald-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-[0%] top-[10%] h-[380px] w-[380px] rounded-full bg-red-400/[0.08] blur-3xl" />
        <div className="absolute right-[0%] top-[15%] h-[380px] w-[380px] rounded-full bg-emerald-400/[0.09] blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-blue/[0.06] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold leading-tight text-brand-deep md:text-4xl">
              Gestión tradicional vs. Novamed Ingeniería
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Compara cómo gestionas hoy la tecnología de tu institución con lo que logras al operar con Novamed Ingeniería.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-red-200 bg-white p-8 shadow-[0_18px_40px_rgba(12,70,107,0.08)]">
              <div className="mb-6 flex items-center gap-3 border-b border-red-100 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-500">
                  <X className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-red-600">Gestión tradicional</p>
                  <p className="text-xs text-muted-foreground">Sin Novamed Ingeniería</p>
                </div>
              </div>
              <div className="space-y-3">
                {traditional.map((item) => (
                  <div key={item.text} className="flex items-center gap-4 rounded-xl bg-red-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-red-700">{item.text}</span>
                    <X className="ml-auto h-5 w-5 shrink-0 text-red-400" />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-red-500/10 p-4">
                <p className="text-center text-sm font-bold text-red-600">
                  Pérdida de tiempo, errores costosos y riesgo en auditorías
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-emerald-200 bg-white p-8 shadow-[0_18px_40px_rgba(12,70,107,0.08)]">
              <div className="mb-6 flex items-center gap-3 border-b border-emerald-100 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-emerald-600">Con Novamed Ingeniería</p>
                  <p className="text-xs text-muted-foreground">Todo conectado y automatizado</p>
                </div>
              </div>
              <div className="space-y-3">
                {withPlatform.map((item) => (
                  <div key={item.text} className="flex items-center gap-4 rounded-xl bg-emerald-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-emerald-700">{item.text}</span>
                    <CheckCircle className="ml-auto h-5 w-5 shrink-0 text-emerald-500" />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-emerald-500/10 p-4">
                <p className="text-center text-sm font-bold text-emerald-600">
                  Todo centralizado, automatizado y listo para auditorías
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Button href="/demo" size="lg" className="uppercase tracking-wider">
              Descubre la diferencia <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrazabilidadSection() {
  const checks = [
    { text: 'Elimina la duplicidad entre documentos', color: 'text-emerald-500' },
    { text: 'Reduce el trabajo manual de actualizar todo por separado', color: 'text-brand-blue' },
    { text: 'Un historial coherente para cada equipo', color: 'text-indigo-500' },
  ];
  return (
    <section id="trazabilidad" className="relative overflow-hidden bg-brand-blue/[0.06] px-5 py-20 md:px-8 md:py-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid page-grid-blue opacity-30" />
        <div className="absolute left-[-6%] top-[10%] h-[340px] w-[340px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[-10%] h-[300px] w-[300px] rounded-full bg-indigo-400/[0.08] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Trazabilidad conectada"
              title="Actualiza una vez y mantén conectada la trazabilidad"
              description="Cuando cambia la ubicación, el estado o un dato de un equipo, la información relacionada permanece sincronizada: inventario, hoja de vida, cronograma y registros."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4">
                {checks.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Check className={`${item.color} mt-0.5 h-5 w-5 flex-shrink-0`} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} x={20}>
            <TraceMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QrSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { icon: QrCode, title: 'Escanea', desc: 'Apunta la cámara al código QR del equipo', color: 'bg-indigo-500' },
    { icon: FileText, title: 'Visualiza', desc: 'Accede a hoja de vida, manuales, reportes', color: 'bg-brand-blue' },
    { icon: BellRing, title: 'Reporta', desc: 'Registra novedades al instante', color: 'bg-amber-500' },
    { icon: Wrench, title: 'Resuelve', desc: 'Genera orden de trabajo automáticamente', color: 'bg-emerald-500' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="qr" className="relative overflow-hidden bg-background-secondary px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 via-brand-blue to-emerald-400" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-400 via-brand-blue to-emerald-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-[-6%] top-[12%] h-[360px] w-[360px] rounded-full bg-indigo-400/[0.08] blur-3xl" />
        <div className="absolute right-[-6%] top-[25%] h-[340px] w-[340px] rounded-full bg-emerald-400/[0.08] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-[300px] w-[300px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[25%] bottom-[15%] h-[220px] w-[220px] rounded-full bg-amber-400/[0.06] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal x={-20} className="order-2 lg:order-1">
            <div className="relative">
              <div className="flex items-stretch gap-4">
                <img
                  src="/plataforma/Qr.png"
                  alt="Equipo etiquetado con código QR"
                  className="h-[320px] w-1/2 rounded-2xl border border-border/70 bg-white object-contain shadow-[0_18px_40px_rgba(12,70,107,0.12)]"
                  loading="lazy"
                />
                <img
                  src="/plataforma/Hubqr.jpeg"
                  alt="Escaneo QR en el hub de Novamed"
                  className="h-[320px] w-1/2 rounded-2xl border border-border/70 bg-white object-contain shadow-[0_18px_40px_rgba(12,70,107,0.12)]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 shadow-lg shadow-indigo-500/25">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  <span className="text-xs font-bold text-white">Escaneando...</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Identificación mediante QR"
              title="La información del equipo, al alcance de un escaneo"
              description="Cada equipo con su código QR. Escanéalo y accede de inmediato a su hoja de vida, reportes, manuales e información de calibración o verificación cuando corresponda."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4">
                {steps.map((step, i) => (
                  <div
                    key={step.title}
                    className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-300 ${
                      i === activeStep
                        ? 'bg-white shadow-md'
                        : 'bg-transparent'
                    }`}
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      i === activeStep
                        ? `${step.color} text-white shadow-lg`
                        : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${
                        i === activeStep ? 'text-brand-deep' : 'text-muted-foreground'
                      }`}>{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                    {i === activeStep && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function NovedadesSection() {
  const flow = [
    { label: 'Usuario', color: 'bg-brand-blue text-white' },
    { label: 'Equipo', color: 'bg-indigo-500 text-white' },
    { label: 'Reporte', color: 'bg-amber-500 text-white' },
    { label: 'Responsable', color: 'bg-emerald-500 text-white' },
  ];
  return (
    <section id="novedades" className="section-tint relative overflow-hidden px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400" />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Reporte de novedades"
              title="Cada novedad llega a quien debe atenderla"
              description="Desde la información asociada al equipo, reporta novedades del paciente, médicas, de mantenimiento u otras incidencias, y dirígelas al responsable correspondiente de la institución."
            />
            <Reveal delay={0.1}>
              <p className="text-sm text-muted-foreground">
                La plataforma conecta la novedad con el equipo y con la persona encargada de
                atenderla, para que nada quede sin seguimiento.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} x={20}>
            <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--elevation-3)]">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                  <BellRing className="h-4 w-4 text-amber-600" />
                </div>
                <span className="text-sm font-semibold text-brand-deep">Nueva novedad</span>
              </div>
              <div className="flex flex-wrap items-center gap-y-3">
                {flow.map((step, i) => (
                  <span key={step.label} className="flex items-center">
                    <span className={`rounded-lg px-3 py-2 text-xs font-semibold ${step.color}`}>
                      {step.label}
                    </span>
                    {i < flow.length - 1 && <ArrowRight className="text-brand-blue mx-2 h-4 w-4" />}
                  </span>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-amber-50 p-3">
                <p className="text-xs font-medium text-amber-700">⚡ Notificación en tiempo real al responsable</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OrdenesSection() {
  const steps = [
    { label: 'Actividad', color: 'bg-brand-blue text-white' },
    { label: 'Asignación', color: 'bg-indigo-500 text-white' },
    { label: 'Responsable', color: 'bg-amber-500 text-white' },
    { label: 'Seguimiento', color: 'bg-brand-blue text-white' },
    { label: 'Cierre', color: 'bg-emerald-500 text-white' },
  ];
  return (
    <section id="ordenes" className="relative overflow-hidden bg-background-secondary px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-brand-blue to-indigo-400" />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal x={-20} className="order-2 lg:order-1">
            <img
              src="/plataforma/Orden.png"
              alt="Orden de trabajo en la plataforma Novamed"
              className="w-full rounded-2xl border border-border/70 bg-white object-contain shadow-[0_18px_40px_rgba(12,70,107,0.12)]"
              loading="lazy"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Órdenes de trabajo"
              title="De la actividad al cierre, con seguimiento"
              description="La plataforma no solo almacena información: también ayuda a gestionar las actividades relacionadas con tu tecnología. Convierte una novedad en una orden de trabajo, asígnale un responsable y dale seguimiento hasta el cierre."
            />
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {steps.map((s, i) => (
                  <span
                    key={s.label}
                    className={`rounded-full px-4 py-2 text-xs font-bold shadow-sm ${s.color}`}
                  >
                    {i + 1}. {s.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CumplimientoSection() {
  const items = [
    { label: 'Gestión de tecnología', color: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' },
    { label: 'Trazabilidad', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { label: 'Documentación', color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { label: 'Inventario', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { label: 'Seguimiento', color: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' },
    { label: 'Auditoría', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { label: 'Habilitación', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  ];
  return (
    <section id="cumplimiento" className="section-soft relative overflow-hidden px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 via-amber-400 to-emerald-400" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Control y cumplimiento"
              title="Organiza la información y los procesos de tu institución"
              description="La plataforma ayuda a organizar la información y los procesos relacionados con la gestión de tecnología, la trazabilidad, la documentación, el seguimiento y la auditoría para los procesos de habilitación."
            />
            <Reveal delay={0.1}>
              <p className="text-sm text-muted-foreground">
                El enfoque actual se centra principalmente en el estándar de dotación, con una
                arquitectura preparada para evolucionar hacia una mayor cobertura de los estándares
                del sector salud.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} x={20}>
            <div className="rounded-2xl border border-border/70 bg-white p-7 shadow-[var(--elevation-3)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-deep">Cumplimiento total</p>
                  <p className="text-xs text-muted-foreground">Listo para cualquier auditoría</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item.label}
                    className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium ${item.color}`}
                  >
                    <Check className="h-4 w-4" /> {item.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ImpactDashboard() {
  const metrics = [
    { label: 'Reducción tiempo respuesta', value: '73%', icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
    { label: 'Trazabilidad completa', value: '100%', icon: TrendingUp, color: 'text-brand-light', bg: 'bg-brand-light/20' },
    { label: 'Multas por incumplimiento', value: '0', icon: Shield, color: 'text-amber-400', bg: 'bg-amber-500/20' },
    { label: 'Documentación organizada', value: '100%', icon: Database, color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
  ];

  return (
    <section className="section-dark grain-overlay relative overflow-hidden px-5 py-16 md:px-8 md:py-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid page-grid-blue opacity-20" />
        <div className="absolute left-[-6%] top-[8%] h-[380px] w-[380px] rounded-full bg-emerald-500/[0.10] blur-3xl" />
        <div className="absolute right-[-6%] top-[5%] h-[360px] w-[360px] rounded-full bg-indigo-500/[0.10] blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] h-[320px] w-[320px] rounded-full bg-brand-light/[0.09] blur-3xl" />
        <div className="absolute bottom-[30%] right-[20%] h-[280px] w-[280px] rounded-full bg-amber-500/[0.08] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-8 text-center">
            <span className="bg-white/10 text-white/90 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Resultados comprobados
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Impacto real en tu operación
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all hover:bg-white/10">
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${metric.bg}`}>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <SectionHeader
          dark
          eyebrow="Visualizaciones"
          title="Módulos diseñados para cada tarea"
        />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {views.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.05}>
              <div className="bg-white/5 border-white/10 hover:bg-white/10 flex items-center gap-3 rounded-xl border p-3 transition-colors">
                <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${v.bg}`}>
                  <v.icon className={`h-5 w-5 ${v.color}`} />
                </div>
                <span className="text-sm font-medium text-white/85">{v.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlataformaCta() {
  const [spotsLeft, setSpotsLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 1) return 5;
        return prev - 1;
      });
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 py-24 text-center md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-[-5%] top-[20%] h-[280px] w-[280px] rounded-full bg-amber-400/[0.08] blur-3xl" />
        <div className="absolute right-[-5%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute bottom-[10%] left-[35%] h-[240px] w-[240px] rounded-full bg-emerald-400/[0.07] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl space-y-6">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            <span className="text-xs font-bold text-amber-700">Últimos {spotsLeft} cupos disponibles este mes</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-3xl font-bold text-brand-deep md:text-4xl">
            Conoce cómo la plataforma se adapta a tu institución
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Agenda una demostración guiada de 30 minutos y resuelve tus dudas en directo.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/demo" size="lg" className="uppercase tracking-wider">
              Agendar demo ahora <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/planes" variant="outline" size="lg" className="uppercase tracking-wider">
              Ver planes
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>30 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>100% personalizada</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function PlataformaPage() {
  return (
    <main className="bg-background">
      <PageHero />
      <TabsSection />
      <ComparisonSection />
      <TrazabilidadSection />
      <QrSection />
      <NovedadesSection />
      <OrdenesSection />
      <CumplimientoSection />
      <ImpactDashboard />
      <PlataformaCta />
    </main>
  );
}
