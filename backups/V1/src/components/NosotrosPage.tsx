import { ArrowRight, Target, Eye, Sparkles, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';

const values = [
  'Calidad del servicio',
  'Mejora permanente',
  'Acompañamiento cercano',
  'Conocimiento técnico especializado',
];

const stats = [
  { value: '+5', label: 'años de experiencia en ingeniería biomédica' },
  { value: 'Cali', label: 'Colombia — sede principal' },
  { value: 'IPS', label: 'clínicas, consultorios y centros veterinarios' },
];

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-28 text-center md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid" />
        <div className="bg-secondary/15 absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Nosotros"
          title="Ingeniería y tecnología al servicio de la salud"
          description="Somos una empresa colombiana dedicada a la gestión y soporte técnico de tecnologías aplicadas principalmente a los sectores salud y veterinario."
        />
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="bg-card card-elevated-sm h-full rounded-2xl p-8">
              <div className="bg-primary/10 text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold">Misión</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Brindar soluciones integrales de gestión de la tecnología, garantizando el correcto
                funcionamiento, la fiabilidad y la eficiencia de dispositivos médicos y veterinarios
                a través de servicios técnicos especializados, capacitación, asesoría,
                comercialización de tecnología y desarrollo de plataformas para la gestión integral.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="bg-card card-elevated-sm h-full rounded-2xl p-8">
              <div className="bg-primary/10 text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold">Visión</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Ser reconocidos en Colombia como una empresa líder en la prestación de servicios de
                gestión integral de tecnología, por la excelencia, la innovación y la generación de
                valor en cada proyecto, impactando positivamente en la seguridad del paciente y la
                eficiencia de las instituciones.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="section-dark relative overflow-hidden px-5 py-24 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              dark
              align="left"
              eyebrow="Quiénes somos"
              title="Un equipo que respalda la operación de tus equipos"
              description="Desarrollamos soluciones confiables y eficientes que respaldan la operación segura y continua de los equipos, con un enfoque centrado en la calidad del servicio y el acompañamiento cercano."
            />
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v} className="flex items-center gap-2.5 text-sm text-white/85">
                    <Check className="text-secondary h-4 w-4 flex-shrink-0" /> {v}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-white md:text-3xl">{s.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} x={20}>
            <div className="bg-white/5 border-white/10 rounded-2xl border p-8">
              <div className="bg-secondary/20 text-secondary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Propuesta de valor</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Combinamos una plataforma para gestionar la información y la trazabilidad de tu
                tecnología con capacidades técnicas de ingeniería biomédica: mantenimiento,
                verificación metrológica y comercialización. Un mismo aliado para gestionar y
                respaldar tu tecnología.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NosotrosCta() {
  return (
    <section className="px-5 py-24 text-center md:px-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">Hablemos de tu institución</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground text-lg">
            Agenda una demostración o una reunión y conoce cómo podemos apoyarte.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/demo" size="lg">
              Agendar cita <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/plataforma" variant="outline" size="lg">
              Conocer la plataforma
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function NosotrosPage() {
  return (
    <main className="bg-background">
      <PageHero />
      <MissionVision />
      <WhoWeAre />
      <NosotrosCta />
    </main>
  );
}
