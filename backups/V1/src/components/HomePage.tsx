import { motion } from 'framer-motion';
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
import Button from './Button';
import ClientsSection from './ClientsSection';
import { platformFunctions, services } from '../lib/data';

const icons = { network: Workflow, qr: QrCode, alert: BellRing, wrench: Wrench, shield: ShieldCheck };

function SectionIntro({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return <Reveal className="max-w-2xl"><div className="flex items-start gap-4"><span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${dark ? 'bg-brand-light' : 'bg-green-deep'}`} /><div><p className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${dark ? 'text-brand-light' : 'text-green-deep'}`}>{eyebrow}</p><h2 className={`text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl ${dark ? 'text-white' : 'text-brand-deep'}`}>{title}</h2><p className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${dark ? 'text-white/65' : 'text-slate-600'}`}>{description}</p></div></div></Reveal>;
}

function Hero() {
  return <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 text-brand-deep md:px-8 md:pb-24 md:pt-40"><div className="page-grid page-grid-blue" /><div className="absolute -right-28 -top-32 h-[620px] w-[620px] rounded-full bg-brand-light/10 blur-3xl" /><div className="absolute bottom-[-12rem] left-[-8rem] h-[420px] w-[420px] rounded-full border-[70px] border-brand-light/20" /><div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-brand-dark/10 via-brand-light/60 to-brand-dark/15 shadow-[0_-5px_16px_rgba(12,70,107,0.12)]" /><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"><div className="relative z-10"><Reveal mount><p className="mb-6 inline-flex items-center gap-2.5 rounded-md border border-brand-blue/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-deep shadow-[0_2px_8px_rgba(12,70,107,0.08)]">Gestión integral para tu institución</p></Reveal><Reveal mount delay={0.08}><h1 className="font-sans max-w-3xl text-5xl font-bold uppercase leading-[1.08] tracking-[-0.04em] text-graphite md:text-6xl xl:text-7xl"><span className="block whitespace-nowrap">Toda tu</span><span className="block whitespace-nowrap">gestión.</span><span className="block whitespace-nowrap bg-gradient-to-r from-brand-blue via-brand-light to-brand-mist bg-clip-text text-transparent">Una sola</span><span className="block whitespace-nowrap bg-gradient-to-r from-brand-blue via-brand-light to-brand-mist bg-clip-text text-transparent">plataforma.</span></h1></Reveal><Reveal mount delay={0.16}><p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">Centraliza la información, organiza tus procesos y gestiona el cumplimiento de tu institución desde un solo lugar.</p></Reveal><div className="mt-8 flex flex-wrap items-center gap-3"><Button href="/demo" size="lg" className="rounded-xl bg-brand-dark px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(12,70,107,0.3)] hover:bg-brand-dark/90">Solicitar demostración</Button><Button href="/plataforma" variant="outline" size="lg" className="rounded-xl border-brand-dark/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-brand-deep hover:border-brand-dark/40">Conocer plataforma</Button></div></div><HeroDashboard /></div></section>;
}

function HeroDashboard() {
  return <div className="relative mx-auto min-h-[390px] w-full max-w-[610px] md:min-h-[500px]"><div className="absolute -top-16 left-1/2 h-[430px] w-[430px] -translate-x-1/2 rounded-full border-[55px] border-brand-light/15" /><motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative z-10 pt-8 md:pt-10"><div className="rounded-[2rem] border-2 border-white bg-white/80 p-1.5 shadow-[0_22px_50px_rgba(12,70,107,0.2)] ring-1 ring-brand-dark/10"><video src="/videos/Demo.mp4" poster="/images/primer-imagen.png" autoPlay muted loop playsInline controls preload="metadata" className="block w-full rounded-[1.5rem] border border-brand-dark/10 bg-white" /></div></motion.div></div>;
}

function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-brand-dark/20 bg-gradient-to-br from-brand-deep via-brand-dark to-[#062f49] px-5 py-10 text-white md:px-8 md:py-12">
      <div className="page-grid page-grid-blue opacity-40" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
            Gestiona, controla y cumple desde un solo lugar.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            Inventario, hojas de vida, mantenimiento, calibración, cronogramas, órdenes de trabajo y cumplimiento
            normativo, conectados para darte una visión clara y actualizada de tu tecnología biomédica.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const cardStyles = [
  { accent: 'brand-blue', border: 'border-t-brand-blue', iconBg: 'bg-brand-blue/10', iconText: 'text-brand-blue', hoverBg: 'hover:bg-brand-blue/[0.04]' },
  { accent: 'indigo', border: 'border-t-indigo', iconBg: 'bg-indigo/10', iconText: 'text-indigo', hoverBg: 'hover:bg-indigo/[0.04]' },
  { accent: 'warn', border: 'border-t-warn', iconBg: 'bg-warn/10', iconText: 'text-warn', hoverBg: 'hover:bg-warn/[0.04]' },
  { accent: 'alert', border: 'border-t-alert', iconBg: 'bg-alert/10', iconText: 'text-alert', hoverBg: 'hover:bg-alert/[0.04]' },
  { accent: 'emerald', border: 'border-t-emerald', iconBg: 'bg-emerald/10', iconText: 'text-emerald', hoverBg: 'hover:bg-emerald/[0.04]' },
];

function FunctionsSection() {
  return (
    <section id="funciones" className="relative overflow-hidden bg-[#f7f8f8] px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-dark/10 via-brand-light/60 to-brand-dark/15 shadow-[0_5px_16px_rgba(12,70,107,0.12)]" />
      <div className="page-grid page-grid-blue opacity-40" />
      <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-light/8 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full border-[50px] border-brand-blue/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="LA PLATAFORMA"
              title="Una plataforma para conectar toda la gestión de tus equipos."
              description="Centraliza información, procesos y cumplimiento en un solo lugar."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformFunctions.map((fn, i) => {
              const Icon = icons[fn.icon as keyof typeof icons] ?? Workflow;
              const s = cardStyles[i] ?? cardStyles[0];
              return (
                <Reveal key={fn.id} delay={i * 0.06}>
                  <a
                    href="/plataforma"
                    className={`group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-brand-dark/10 border-t-[3px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(12,70,107,0.12)] text-brand-deep ${s.border} ${s.hoverBg}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg} ${s.iconText}`}><Icon className="h-5 w-5" /></div>
                      <ArrowUpRight className="h-5 w-5 text-brand-deep/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{fn.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-deep/60">{fn.short}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
            <Reveal delay={0.3}>
              <a
                href="/plataforma"
                className="group flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-white/10 bg-brand-deep p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(12,70,107,0.2)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white"><ArrowRight className="h-5 w-5" /></div>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Explorar todo</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">Descubre todas las funcionalidades disponibles en la plataforma.</p>
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
    <section className="relative overflow-hidden border-y border-brand-dark/20 bg-brand-deep px-5 py-20 md:px-8 md:py-28">
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
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-sm font-bold text-white backdrop-blur-sm">
                    0{i + 1}
                  </span>
                  <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold text-white drop-shadow-lg">
                    {service.name}
                  </h3>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-white/60">{service.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-brand-light">
                    Conocer más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
          <div className="mt-12 text-center">
            <a
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/80 transition-colors hover:text-white"
            >
              Conoce todos nuestros servicios <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-18">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand-dark to-[#062f49] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-18px_40px_rgba(0,0,0,0.16)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-light/20 via-brand-light to-brand-light/20 shadow-[0_4px_14px_rgba(105,190,214,0.45)]" />
        <div className="page-grid page-grid-blue opacity-35" />
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-brand-light/10" />
        <div className="absolute -left-16 bottom-0 h-[260px] w-[260px] rounded-full bg-brand-light/12 blur-3xl" />
        <div className="relative px-7 py-10 md:px-14 md:py-12">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-light">Da el siguiente paso</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">Tu tecnología merece una gestión más clara.</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/65">Agenda una demostración y descubre cómo conectar la operación de tu institución.</p>
              <ul className="mt-5 space-y-2">
                {['Recorre la plataforma con un experto','Resuelve dudas de inventario, mantenimiento y cumplimiento','Recibe una propuesta ajustada a tu institución'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />{item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold text-white/40">Sin compromiso · Respuesta en menos de 24 h</p>
            </div>
            <Button
              href="/demo"
              className="shrink-0 rounded-xl bg-white px-8 py-4 text-sm font-bold text-brand-deep shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:text-white hover:shadow-[0_12px_32px_rgba(105,190,214,0.35)]"
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
