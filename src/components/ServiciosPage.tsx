import { ArrowRight, Wrench, Gauge, Package, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';
import { services } from '../lib/data';
import { cn } from '../lib/utils';

const serviceIcons = [Wrench, Gauge, Package];

const serviceAccents = [
  { iconBg: 'bg-brand-blue/10', iconColor: 'text-brand-blue', check: 'text-brand-blue', border: 'border-t-brand-blue' },
  { iconBg: 'bg-indigo/10', iconColor: 'text-indigo', check: 'text-indigo', border: 'border-t-indigo' },
  { iconBg: 'bg-emerald/10', iconColor: 'text-emerald', check: 'text-emerald', border: 'border-t-emerald' },
];

function ServicesDetail() {
  return (
    <section className="relative overflow-hidden bg-gray-200 px-5 pb-16 pt-28 md:px-8 md:pt-36">
      <div aria-hidden="true" className="page-grid-mesh pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-light/15 blur-3xl" />
      <div className="absolute left-[-6%] bottom-[10%] h-[320px] w-[320px] rounded-full bg-indigo-400/[0.08] blur-3xl" />
      <div className="absolute right-[-6%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-emerald-400/[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionHeader
            eyebrow="Servicios especializados"
            title="Ingeniería biomédica y servicio técnico"
            description="Una línea de negocio especializada en ingeniería biomédica: mantenimiento, verificación metrológica y comercialización de equipos para mantener tu tecnología operativa y confiable."
          />
        </div>
        <div className="space-y-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] ?? Wrench;
            const accent = serviceAccents[i] ?? serviceAccents[0];
            return (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className={cn('bg-card grid grid-cols-1 overflow-hidden rounded-2xl border-t-[3px] shadow-[var(--elevation-3)] md:grid-cols-2', accent.border)}>
                  <div className={`p-8 md:p-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className={cn('mb-5 flex h-12 w-12 items-center justify-center rounded-xl', accent.iconBg)}>
                      <Icon className={cn('h-6 w-6', accent.iconColor)} />
                    </div>
                    <h2 className="text-2xl font-bold">{s.name}</h2>
                    <p className={cn('mt-1 text-sm font-semibold', accent.iconColor)}>{s.short}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <Check className={cn('h-4 w-4 flex-shrink-0', accent.check)} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative min-h-[240px] ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <img
                      src={s.image}
                      alt={s.name}
                      width={640}
                      height={240}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const pillars = [
    { title: 'Plataforma', desc: 'Gestión de la información y la trazabilidad', card: 'bg-brand-blue/10', numBg: 'bg-white/70', numColor: 'text-brand-blue' },
    { title: 'Ingeniería biomédica', desc: 'Conocimiento técnico especializado', card: 'bg-indigo/10', numBg: 'bg-white/70', numColor: 'text-indigo' },
    { title: 'Servicio técnico', desc: 'Mantenimiento y verificación metrológica', card: 'bg-emerald/10', numBg: 'bg-white/70', numColor: 'text-emerald' },
  ];
  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-indigo-400 to-emerald-400" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-[-6%] top-[15%] h-[300px] w-[300px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[10%] h-[280px] w-[280px] rounded-full bg-emerald-400/[0.08] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Un ecosistema integrado"
          title="Plataforma + ingeniería biomédica + servicio técnico"
          description="Tres líneas de negocio: la plataforma gestiona la información y la trazabilidad; los servicios de ingeniería biomédica y técnico respaldan la operación de tu tecnología."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className={cn('h-full rounded-2xl border border-brand-dark/5 p-8 text-center shadow-sm', p.card)}>
                <span className={cn('font-heading mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold', p.numBg, p.numColor)}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiciosPage() {
  return (
    <main className="bg-background">
      <ServicesDetail />
      <Ecosystem />
    </main>
  );
}
