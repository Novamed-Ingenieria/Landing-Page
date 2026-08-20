import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';

const values = [
  'Calidad del servicio',
  'Mejora permanente',
  'Acompañamiento cercano',
  'Conocimiento técnico especializado',
];

const valueDots = ['bg-emerald-400', 'bg-brand-light', 'bg-amber-400', 'bg-indigo-400'];

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 text-center md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-light/15 blur-3xl" />
        <div className="absolute left-[-6%] bottom-[10%] h-[320px] w-[320px] rounded-full bg-indigo-400/[0.08] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-emerald-400/[0.08] blur-3xl" />
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
    <section className="relative overflow-hidden bg-gray-200 px-5 py-16 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-indigo-400 to-emerald-400" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-indigo-400 to-emerald-400" />
      <div aria-hidden="true" className="page-grid-mesh pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="bg-card h-full rounded-2xl border-t-[3px] border-t-brand-blue p-8 shadow-[var(--elevation-3)] md:p-10">
              <h2 className="text-xl font-bold text-brand-blue">Misión</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Brindar soluciones integrales de gestión de la tecnología, garantizando el correcto
                funcionamiento, la fiabilidad y la eficiencia de dispositivos médicos y veterinarios
                a través de servicios técnicos especializados, capacitación, asesoría,
                comercialización de tecnología y desarrollo de plataformas para la gestión integral.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="bg-card h-full rounded-2xl border-t-[3px] border-t-indigo p-8 shadow-[var(--elevation-3)] md:p-10">
              <h2 className="text-xl font-bold text-indigo">Visión</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
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
    <section className="section-dark grain-overlay relative overflow-hidden px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-400" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-[20%] h-[280px] w-[280px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[-5%] bottom-[15%] h-[280px] w-[280px] rounded-full bg-emerald-400/[0.07] blur-3xl" />
      </div>
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
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {values.map((v, i) => (
                  <div key={v} className="flex items-center gap-2.5 text-sm text-white/85">
                    <span className={`h-2 w-2 flex-shrink-0 rounded-full ${valueDots[i]}`} />
                    {v}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} x={20}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
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
    <section className="relative overflow-hidden bg-surface-alt px-5 py-24 text-center md:px-8">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh opacity-30" />
        <div className="absolute left-[-6%] top-[20%] h-[280px] w-[280px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[15%] h-[260px] w-[260px] rounded-full bg-emerald-400/[0.07] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-2xl space-y-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-brand-deep md:text-4xl">Hablemos de tu institución</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground">
            Agenda una demostración o una reunión y conoce cómo podemos apoyarte.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contacto" size="lg">
              Contáctanos <ArrowRight className="h-4 w-4" />
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
