import { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import DashboardMockup from './mockups/DashboardMockup';
import TraceMockup from './mockups/TraceMockup';
import QrMockup from './mockups/QrMockup';
import WorkOrderMockup from './mockups/WorkOrderMockup';
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
  },
  {
    id: 'activos',
    icon: Boxes,
    label: 'Control de Activos',
    title: 'Cada equipo como un activo digital con identidad propia.',
    desc: 'Convierte cada equipo biomédico en un activo digital donde toda su información está centralizada, actualizada y disponible 24/7.',
    points: ['Inventario centralizado', 'Hojas de vida por equipo', 'Código QR en cada activo', 'Historial completo y consultable'],
  },
  {
    id: 'cumplimiento',
    icon: ShieldCheck,
    label: 'Cumplimiento y Seguridad',
    title: 'De una gestión reactiva a una cultura de prevención.',
    desc: 'Anticipa riesgos, fortalece la seguridad del paciente y facilita el cumplimiento en auditorías de habilitación.',
    points: ['Gestión documental organizada', 'Alertas de vencimientos', 'Historial auditable', 'Respaldo en auditorías'],
  },
  {
    id: 'gerencial',
    icon: BarChart3,
    label: 'Inteligencia Gerencial',
    title: 'Convierte los datos técnicos en decisiones ejecutivas.',
    desc: 'Accede a indicadores claros, prioriza inversiones y posiciona tu área de mantenimiento como un actor estratégico.',
    points: ['Dashboards de gestión', 'Indicadores de cumplimiento', 'Decisiones basadas en evidencia', 'Control de costos y repuestos'],
  },
];

const pillarTones = ['green', 'warn', 'alert', 'green'];

function TabsSection() {
  const [active, setActive] = useState(0);
  const current = pillars[active];
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="page-grid page-grid-green" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Una sola plataforma"
          title="Todas las soluciones para tu tecnología."
          description="Cuatro pilares que se conectan entre sí para que la información fluya de la operación a la decisión."
        />
        <div className="mt-12 flex flex-wrap gap-2">
          {pillars.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors ${
                i === active
                  ? 'border-green-deep bg-green-deep text-white'
                  : 'border-brand-dark/15 bg-white text-brand-deep hover:border-green/40'
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
            className="mt-8 grid gap-6 rounded-3xl border border-brand-dark/10 bg-surface-muted p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-deep text-white">
              <current.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 max-w-md text-2xl font-bold leading-snug text-brand-deep md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {current.desc}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
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
              className="mt-8 w-fit rounded-xl bg-green px-6 py-3 text-brand-deep hover:bg-green-deep hover:text-white"
            >
              Agendar demostración <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-green-soft" />
            <div className="relative rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-[0_18px_40px_rgba(12,70,107,0.12)]">
              <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-4">
                <current.icon className="h-5 w-5 text-green-deep" />
                <p className="text-sm font-bold text-brand-deep">{current.label}</p>
                <span className="ml-auto flex items-center gap-1.5 rounded-full bg-green-soft px-2.5 py-1 text-[10px] font-bold text-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />Activo
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {current.points.map((point, j) => (
                  <li key={point} className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-muted-foreground">{point}</span>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        pillarTones[j % pillarTones.length] === 'green'
                          ? 'bg-green'
                          : pillarTones[j % pillarTones.length] === 'warn'
                            ? 'bg-warn'
                            : 'bg-alert'
                      }`}
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl bg-surface-muted p-4 text-xs">
                <p className="font-bold text-brand-deep">Todo sincronizado</p>
                <p className="mt-1 text-muted-foreground">Un cambio en un módulo se refleja en los demás.</p>
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
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Inventario', icon: Boxes },
  { label: 'Hoja de vida', icon: FileText },
  { label: 'Vista de equipo', icon: ScanLine },
  { label: 'Códigos QR', icon: QrCode },
  { label: 'Orden de trabajo', icon: Wrench },
  { label: 'Indicadores', icon: TrendingUp },
  { label: 'Gestión documental', icon: FolderOpen },
];

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid" />
        <div className="bg-secondary/15 absolute right-[-6%] top-[-10%] h-[480px] w-[480px] rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="space-y-6">
          <Reveal>
            <span className="bg-secondary/12 text-secondary inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              La plataforma
            </span>
          </Reveal>
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
              <Button href="/demo" size="lg">
                Solicitar demostración <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/planes" variant="outline" size="lg">
                Ver planes
              </Button>
            </div>
          </Reveal>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function TrazabilidadSection() {
  return (
    <section id="trazabilidad" className="section-soft relative overflow-hidden px-5 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Trazabilidad conectada"
              title="Actualiza una vez y mantén conectada la trazabilidad"
              description="Cuando cambia la ubicación, el estado o un dato de un equipo, la información relacionada permanece sincronizada: inventario, hoja de vida, cronograma y registros."
            />
            <Reveal delay={0.1}>
              <div className="space-y-3">
                {[
                  'Elimina la duplicidad entre documentos',
                  'Reduce el trabajo manual de actualizar todo por separado',
                  'Un historial coherente para cada equipo',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
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
  return (
    <section id="qr" className="bg-background-secondary px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal x={-20} className="order-2 lg:order-1">
            <QrMockup />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Identificación mediante QR"
              title="La información del equipo, al alcance de un escaneo"
              description="Cada equipo con su código QR. Escanéalo y accede de inmediato a su hoja de vida, reportes, manuales e información de calibración o verificación cuando corresponda."
            />
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {['Hoja de vida', 'Reportes', 'Manuales', 'Información de verificación'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function NovedadesSection() {
  const flow = ['Usuario', 'Equipo', 'Reporte', 'Responsable'];
  return (
    <section id="novedades" className="section-tint relative overflow-hidden px-5 py-24 md:px-8">
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
            <div className="bg-card rounded-2xl border border-border/70 p-6 shadow-[var(--elevation-3)]">
              <div className="mb-5 flex items-center gap-2">
                <BellRing className="text-secondary h-5 w-5" />
                <span className="text-sm font-semibold">Nueva novedad</span>
              </div>
              <div className="flex flex-wrap items-center gap-y-3">
                {flow.map((step, i) => (
                  <span key={step} className="flex items-center">
                    <span
                      className={`rounded-lg px-3 py-2 text-xs font-semibold ${
                        i === 0
                          ? 'bg-primary text-primary-foreground'
                          : i === flow.length - 1
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-muted text-foreground'
                      }`}
                    >
                      {step}
                    </span>
                    {i < flow.length - 1 && <ArrowRight className="text-secondary mx-2 h-4 w-4" />}
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

function OrdenesSection() {
  return (
    <section id="ordenes" className="bg-background-secondary px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal x={-20} className="order-2 lg:order-1">
            <WorkOrderMockup />
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
                {['Actividad', 'Asignación', 'Responsable', 'Seguimiento', 'Cierre'].map((s) => (
                  <span
                    key={s}
                    className="text-muted-foreground border-border rounded-full border bg-background px-3 py-1.5 text-xs font-medium"
                  >
                    {s}
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
    'Gestión de tecnología',
    'Trazabilidad',
    'Documentación',
    'Inventario',
    'Seguimiento',
    'Auditoría',
    'Habilitación',
  ];
  return (
    <section id="cumplimiento" className="section-soft relative overflow-hidden px-5 py-24 md:px-8">
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
            <div className="bg-card card-elevated-sm rounded-2xl p-7">
              <div className="bg-secondary/10 text-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-primary border-primary/20 bg-primary/5 flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium"
                  >
                    <Check className="h-4 w-4" /> {item}
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

function Views() {
  return (
    <section className="section-dark relative overflow-hidden px-5 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          dark
          eyebrow="Visualizaciones"
          title="Módulos diseñados para cada tarea"
          description="La plataforma se organiza en vistas especializadas que se conectan entre sí. Estas imágenes son representaciones conceptuales del producto."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {views.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.05}>
              <div className="bg-white/5 border-white/10 hover:bg-white/10 flex items-center gap-3 rounded-xl border p-4 transition-colors">
                <v.icon className="text-secondary h-5 w-5 flex-shrink-0" />
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
  return (
    <section className="section-dark relative overflow-hidden px-5 py-24 text-center md:px-8">
      <div className="relative mx-auto max-w-3xl space-y-6">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            Conoce cómo la plataforma se adapta a tu institución
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-xl text-lg text-white/70">
            Agenda una demostración guiada y resuelve tus dudas en directo.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/demo" variant="secondary" size="lg">
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/planes" variant="outline-dark" size="lg">
              Ver planes
            </Button>
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
      <TrazabilidadSection />
      <QrSection />
      <NovedadesSection />
      <OrdenesSection />
      <CumplimientoSection />
      <IntegrationsSection />
      <Views />
      <PlataformaCta />
    </main>
  );
}
