import { ArrowRight, Wrench, Gauge, Package, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';
import { services } from '../lib/data';

const serviceIcons = [Wrench, Gauge, Package];

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 text-center md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid" />
        <div className="bg-secondary/15 absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl space-y-6">
        <SectionHeader
          eyebrow="Servicios especializados"
          title="Ingeniería biomédica y servicio técnico"
          description="Además de la plataforma, Novamed Ingeniería presta servicios técnicos especializados para respaldar la gestión y la operación de tu tecnología."
        />
      </div>
    </section>
  );
}

function ServicesDetail() {
  return (
    <section className="px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {services.map((s, i) => {
          const Icon = serviceIcons[i] ?? Wrench;
          return (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="bg-card card-elevated-sm grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2">
                <div className={`p-8 md:p-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-primary/10 text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">{s.name}</h2>
                  <p className="text-secondary mt-1 text-sm font-semibold">{s.short}</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{s.description}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="text-secondary h-4 w-4 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative min-h-[240px] ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={s.image}
                    alt={s.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Metrology() {
  return (
    <section className="bg-background-secondary border-border/50 border-y px-5 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Verificación metrológica"
          title="Variables que verificamos"
          description="Aseguramos la confiabilidad de los equipos de medición y de uso clínico mediante la verificación de variables clave."
        />
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2.5">
            {services[1].items.map((v) => (
              <span
                key={v}
                className="text-primary border-primary/20 bg-primary/5 rounded-full border px-4 py-2 text-sm font-medium"
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Ecosystem() {
  const pillars = [
    { title: 'Plataforma', desc: 'Gestión de la información y la trazabilidad' },
    { title: 'Ingeniería biomédica', desc: 'Conocimiento técnico especializado' },
    { title: 'Servicio técnico', desc: 'Mantenimiento y verificación metrológica' },
  ];
  return (
    <section className="section-tint px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Un ecosistema integrado"
          title="Plataforma + ingeniería biomédica + servicio técnico"
          description="Novamed Ingeniería puede gestionar la información y la trazabilidad con la plataforma y, además, prestar los servicios técnicos relacionados con esa tecnología."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-elevated-sm bg-card h-full rounded-2xl p-8 text-center">
                <span className="font-heading text-primary text-3xl font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiciosCta() {
  return (
    <section className="section-dark relative overflow-hidden px-5 py-24 text-center md:px-8">
      <div className="relative mx-auto max-w-3xl space-y-6">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Necesitas soporte para tus equipos?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-xl text-lg text-white/70">
            Cuéntanos qué necesitas y te acompañamos con una propuesta a la medida.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/demo" variant="secondary" size="lg">
              Agendar cita <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/plataforma" variant="outline-dark" size="lg">
              Conocer la plataforma
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServiciosPage() {
  return (
    <main className="bg-background">
      <PageHero />
      <ServicesDetail />
      <Metrology />
      <Ecosystem />
      <ServiciosCta />
    </main>
  );
}
