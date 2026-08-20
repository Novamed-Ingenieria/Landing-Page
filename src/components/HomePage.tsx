import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  CircleCheck,
  QrCode,
  ShieldCheck,
  Workflow,
  Wrench,
} from 'lucide-react';
import Reveal from './Reveal';
import Parallax from './Parallax';
import Button from './Button';
import ClientsSection from './ClientsSection';
import { platformFunctions, services } from '../lib/data';

const icons = { network: Workflow, qr: QrCode, alert: BellRing, wrench: Wrench, shield: ShieldCheck };

function SectionIntro({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return <Reveal className="max-w-2xl"><div className="flex items-start gap-4"><span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${dark ? 'bg-brand-light' : 'bg-green-deep'}`} /><div><p className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${dark ? 'text-brand-light' : 'text-green-deep'}`}>{eyebrow}</p><h2 className={`text-3xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl ${dark ? 'text-white' : 'text-brand-deep'}`}>{title}</h2><p className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${dark ? 'text-white/65' : 'text-muted-foreground'}`}>{description}</p></div></div></Reveal>;
}

function Hero() {
  return <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 text-brand-deep md:px-8 md:pb-24 md:pt-40"><div className="page-grid page-grid-blue" /><Parallax speed={-0.15} className="absolute -right-28 -top-32"><div className="h-[620px] w-[620px] rounded-full bg-brand-light/10 blur-3xl" /></Parallax><Parallax speed={0.1} className="absolute bottom-[-12rem] left-[-8rem]"><div className="h-[420px] w-[420px] rounded-full border-[70px] border-brand-light/20" /></Parallax>      <div className="absolute inset-x-0 bottom-0 h-2 animate-glow-slide bg-gradient-to-r from-brand-dark/10 via-brand-light/60 to-brand-dark/10 shadow-[0_-5px_16px_rgba(12,70,107,0.12)]" /><div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]"><div className="relative z-10"><Reveal mount><p className="mb-6 inline-flex items-center gap-2.5 rounded-md border border-brand-blue/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-deep shadow-[0_2px_8px_rgba(12,70,107,0.08)]">Gestión integral para tu institución</p></Reveal><Reveal mount delay={0.08}><h1 className="font-sans max-w-3xl text-5xl font-bold uppercase leading-[1.08] tracking-[-0.03em] text-graphite md:text-6xl lg:text-[3.4rem] xl:text-7xl"><span className="block">Toda tu</span><span className="block">gestión.</span><span className="block text-brand-blue">Una sola</span><span className="block text-brand-blue">plataforma.</span></h1></Reveal><Reveal mount delay={0.16}><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">Centraliza la información, organiza tus procesos y gestiona el cumplimiento de tu institución desde un solo lugar.</p></Reveal><div className="mt-8 flex flex-wrap items-center gap-3"><Button href="/demo" size="lg" className="rounded-xl bg-brand-dark px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(12,70,107,0.3)] hover:bg-brand-dark/90">Solicitar demostración</Button><Button href="/plataforma" variant="outline" size="lg" className="rounded-xl border-brand-blue/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-brand-deep hover:border-brand-blue/60 hover:bg-brand-blue/5">Conocer plataforma</Button></div></div><HeroDashboard /></div></section>;
}

function HeroDashboard() {
  const prefersReduced = useReducedMotion();
  return <div className="relative mx-auto min-h-[390px] w-full max-w-[610px] md:min-h-[500px]"><Parallax speed={-0.05} className="absolute -top-16 left-1/2 -translate-x-1/2"><div className="h-[430px] w-[430px] rounded-full border-[55px] border-brand-light/15" /></Parallax><motion.div initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 30, filter: 'blur(12px)' }} animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 pt-8 md:pt-10"><div className="rounded-[2rem] border-2 border-white bg-white/80 p-1.5 shadow-[0_22px_50px_rgba(12,70,107,0.2)] ring-1 ring-brand-dark/10"><img src="/images/Tarjeta.jpg" alt="Plataforma Novamed Ingeniería" className="block w-full rounded-[1.5rem] border border-brand-dark/10 bg-white object-cover" /></div></motion.div></div>;
}

function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-brand-dark/20 bg-gradient-to-br from-brand-deep via-brand-dark to-brand-abyss px-5 py-14 text-white md:px-8 md:py-[72px] grain-overlay">
      <div className="page-grid page-grid-blue opacity-40" />
      <div className="absolute -right-24 -top-20 h-[280px] w-[280px] animate-dot-pulse rounded-full bg-brand-light/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 h-[200px] w-[200px] rounded-full border-[35px] border-brand-light/8" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold uppercase leading-[1.08] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
            Gestiona, controla y cumple desde un solo lugar.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-white/70 md:text-lg">
            Inventario, hojas de vida, mantenimiento, calibración, cronogramas, órdenes de trabajo y cumplimiento
            normativo, conectados para darte una visión clara y actualizada de tu tecnología biomédica.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const cardStyles = [
  { iconBg: 'bg-brand-blue', iconText: 'text-white', hoverShadow: '0 16px 40px rgba(25,123,157,0.18)', hoverBorder: 'border-brand-blue/30', cardBg: 'bg-brand-blue/[0.12]' },
  { iconBg: 'bg-indigo', iconText: 'text-white', hoverShadow: '0 16px 40px rgba(99,102,241,0.18)', hoverBorder: 'border-indigo/30', cardBg: 'bg-indigo/[0.12]' },
  { iconBg: 'bg-amber-500', iconText: 'text-white', hoverShadow: '0 16px 40px rgba(245,158,11,0.18)', hoverBorder: 'border-amber-500/30', cardBg: 'bg-amber-500/[0.12]' },
  { iconBg: 'bg-alert', iconText: 'text-white', hoverShadow: '0 16px 40px rgba(194,71,46,0.18)', hoverBorder: 'border-alert/30', cardBg: 'bg-alert/[0.12]' },
  { iconBg: 'bg-emerald', iconText: 'text-white', hoverShadow: '0 16px 40px rgba(16,185,129,0.18)', hoverBorder: 'border-emerald/30', cardBg: 'bg-emerald/[0.12]' },
];

function FunctionsSection() {
  return (
    <section id="funciones" className="relative overflow-hidden bg-surface-alt px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-dark/10 via-brand-light/60 to-brand-dark/15 shadow-[0_5px_16px_rgba(12,70,107,0.12)]" />
      <div className="page-grid page-grid-blue opacity-40" />
      <Parallax speed={-0.08} className="absolute -right-32 top-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-brand-light/8 blur-3xl" />
      </Parallax>
      <Parallax speed={0.06} className="absolute -left-20 bottom-0">
        <div className="h-[300px] w-[300px] rounded-full border-[50px] border-brand-blue/10" />
      </Parallax>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="LA PLATAFORMA"
              title="Una plataforma para conectar toda la gestión de tus equipos."
              description="Centraliza información, procesos y cumplimiento en un solo lugar."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {platformFunctions.map((fn, i) => {
              const Icon = icons[fn.icon as keyof typeof icons] ?? Workflow;
              const s = cardStyles[i] ?? cardStyles[0];
              return (
                <Reveal key={fn.id} delay={i * 0.06}>
                  <a
                    href="/plataforma"
                    className={`fn-card group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-brand-dark/10 bg-white p-7 text-brand-deep ${s.cardBg}`}
                    style={{ ['--hover-shadow' as string]: s.hoverShadow, ['--hover-border' as string]: s.hoverBorder }}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${s.iconBg} ${s.iconText}`}><Icon className="h-6 w-6" /></div>
                      <span className="text-xs font-bold text-brand-deep/20">0{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-snug">{fn.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-brand-deep/55">{fn.short}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
            <Reveal delay={0.3}>
              <a
                href="/plataforma"
                className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl border-2 border-dashed border-brand-dark/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-brand-blue/[0.03]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110"><ArrowRight className="h-6 w-6" /></div>
                  <ArrowUpRight className="h-5 w-5 text-brand-blue/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-snug text-brand-deep">Explorar todas las funciones</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-deep/55">Descubre todas las funcionalidades disponibles en la plataforma.</p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden border-y border-brand-dark/20 bg-brand-deep px-5 py-20 md:px-8 md:py-28 grain-overlay">
      <div className="page-grid page-grid-blue opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          dark
          eyebrow="Servicios especializados"
          title="Ingeniería para mantener tu operación en marcha."
          description="Complementamos nuestra plataforma con servicios especializados para mantener tus equipos disponibles, confiables y bajo control."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.1}>
                <a
                  href="/servicios"
                  className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0e3d5c] transition-all duration-300 hover:border-white/20 hover:bg-[#114568] hover:shadow-[0_24px_56px_rgba(0,0,0,0.5)]"
                >
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={260}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-sm font-bold text-white backdrop-blur-sm">
                    0{i + 1}
                  </span>
                  <h3 className="absolute bottom-6 left-5 right-5 text-2xl font-bold leading-snug text-white drop-shadow-lg">
                    {service.name}
                  </h3>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-white">{service.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-brand-light">
                    Conocer más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
          <div className="mt-14 text-center">
            <a
              href="/servicios"
              className="group inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-white/80 transition-colors hover:text-white"
            >
                             Conocer todos nuestros servicios <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-14 md:px-8 md:py-20">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand-dark to-brand-abyss shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-18px_40px_rgba(0,0,0,0.16)] grain-overlay">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-light/20 via-brand-light to-brand-light/20 shadow-[0_4px_14px_rgba(105,190,214,0.45)]" />
        <div className="page-grid page-grid-blue opacity-35" />
        <Parallax speed={-0.1} className="absolute -right-20 -top-32">
          <div className="h-80 w-80 rounded-full border-[45px] border-brand-light/10" />
        </Parallax>
        <Parallax speed={0.08} className="absolute -left-16 bottom-0">
          <div className="h-[260px] w-[260px] rounded-full bg-brand-light/12 blur-3xl" />
        </Parallax>
        <div className="relative px-7 py-14 md:px-14 md:py-14">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-light">Da el siguiente paso</p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-[1.08] tracking-[-0.03em] text-white md:text-5xl">Tu tecnología merece una gestión más clara.</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">Agenda una demostración y descubre cómo conectar la operación de tu institución.</p>
              <ul className="mt-6 space-y-3">
                {['Recorre la plataforma con un experto','Resuelve dudas de inventario, mantenimiento y cumplimiento','Recibe una propuesta ajustada a tu institución'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-light" />{item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-semibold text-white/40">Sin compromiso · Respuesta en menos de 24 h</p>
            </div>
            <Button
              href="/demo"
              className="shrink-0 rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-deep shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:text-white hover:shadow-[0_12px_32px_rgba(105,190,214,0.35)]"
            >
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <main className="bg-white"><Hero /><TrustBar /><FunctionsSection /><ServicesSection /><ClientsSection /><FinalCta /></main>;
}
