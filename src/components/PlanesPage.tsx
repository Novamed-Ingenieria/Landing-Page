import { ArrowRight, Check, Minus, HelpCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';
import { plans, comparisonFeatures, faqs } from '../lib/data';
import { cn } from '../lib/utils';

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-28 text-center md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid" />
        <div className="bg-secondary/15 absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl space-y-5">
        <SectionHeader
          eyebrow="Planes y precios"
          title="Una solución para cada escala de operación"
          description="Precios públicos y transparentes. Elige el plan que se adapta al tamaño de tu institución y a la cantidad de activos que gestionas."
        />
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/demo" size="lg">
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="px-5 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={cn(
                  'bg-card relative flex h-full flex-col rounded-2xl p-7',
                  plan.popular
                    ? 'border-secondary border-2 shadow-[var(--elevation-3)]'
                    : 'card-elevated-sm',
                )}
              >
                {plan.popular && (
                  <span className="bg-secondary text-secondary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold">
                    Más popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold">{plan.name}</h3>
                <p className="text-muted-foreground mt-1 text-xs">{plan.tagline}</p>

                <div className="mt-5 mb-6">
                  <p className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-xs"> {plan.period}</span>
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {plan.assets} · {plan.users}
                  </p>
                </div>

                <ul className="mb-6 flex-1 space-y-2.5 text-sm">
                  {plan.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className={cn(plan.highlight.includes(f) && 'font-medium text-foreground')}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.features.length > 6 && (
                    <li className="text-muted-foreground pl-6 text-xs">
                      + {plan.features.length - 6} más
                    </li>
                  )}
                </ul>

                <Button
                  href="/demo"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.popular ? 'Solicitar demo' : 'Elegir ' + plan.name}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="text-muted-foreground mt-10 text-center text-sm">
            ¿Dudas sobre cuál elegir? Agenda una demostración y te ayudamos a identificar el plan
            indicado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  const hasFeature = (plan: (typeof plans)[number], feature: string) =>
    plan.features.includes(feature);

  return (
    <section className="bg-background-secondary border-border/50 border-y px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Comparativa"
          title="Compara funcionalidades entre planes"
          description="Priorizamos las funcionalidades realmente diferenciadoras para que elijas con claridad."
        />

        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/70 bg-card shadow-[var(--elevation-2)]">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-border/60 border-b">
                  <th className="px-5 py-4 text-left font-semibold">Funcionalidad</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-4 py-4 text-center font-semibold">
                      <span className="block">{plan.name}</span>
                      <span className="text-muted-foreground mt-0.5 block text-xs font-normal">
                        {plan.price}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr
                    key={feature}
                    className={cn('border-border/50', idx % 2 === 0 && 'bg-muted/30')}
                  >
                    <td className="px-5 py-3 font-medium">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="px-4 py-3 text-center">
                        {hasFeature(plan, feature) ? (
                          <Check className="text-secondary mx-auto h-4 w-4" />
                        ) : (
                          <Minus className="text-muted-foreground/40 mx-auto h-4 w-4" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Value() {
  return (
    <section className="section-tint px-5 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Valor"
          title="Un plan según tu necesidad, no solo según el precio"
          description="Cada plan está pensado para una escala de operación: desde un consultorio que inicia su gestión hasta una IPS con miles de activos. El valor está en la información organizada, no en comparar cifras."
        />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Lo más consultado sobre planes y demostraciones."
        />
        <div className="space-y-3">
          {faqs.slice(0, 5).map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className="bg-card card-elevated-sm group rounded-xl p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  {faq.question}
                  <HelpCircle className="text-secondary h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanesCta() {
  return (
    <section className="section-dark relative overflow-hidden px-5 py-24 text-center md:px-8">
      <div className="relative mx-auto max-w-3xl space-y-6">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            Empieza con una demostración guiada
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-xl text-lg text-white/70">
            Conoce la plataforma en directo y resuelve tus dudas antes de decidir.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/demo" variant="secondary" size="lg">
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/servicios" variant="outline-dark" size="lg">
              Conocer servicios
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function PlanesPage() {
  return (
    <main className="bg-background">
      <PageHero />
      <Pricing />
      <Comparison />
      <Value />
      <FaqSection />
      <PlanesCta />
    </main>
  );
}
