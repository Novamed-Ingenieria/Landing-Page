import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  Users,
  HardDrive,
  Sparkles,
  Building2,
  Rocket,
  Crown,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Button from './Button';
import { plans, comparisonCategories, faqs } from '../lib/data';
import { cn } from '../lib/utils';

const planIcons: Record<string, typeof Sparkles> = {
  lite: Sparkles,
  basic: Building2,
  pro: Rocket,
  enterprise: Crown,
};

const planAccent = {
  lite: {
    border: 'border-t-brand-blue',
    iconBg: 'bg-brand-blue/10',
    iconColor: 'text-brand-blue',
    check: 'text-brand-blue',
  },
  basic: {
    border: 'border-t-white',
    iconBg: 'bg-white/15',
    iconColor: 'text-white',
    check: 'text-emerald',
  },
  pro: {
    border: 'border-t-indigo',
    iconBg: 'bg-indigo/10',
    iconColor: 'text-indigo',
    check: 'text-indigo',
  },
  enterprise: {
    border: 'border-t-emerald',
    iconBg: 'bg-emerald/10',
    iconColor: 'text-emerald',
    check: 'text-emerald',
  },
};

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-28 text-center md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid-blue" />
        <div className="absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-light/15 blur-3xl" />
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
          {plans.map((plan, i) => {
            const accent = planAccent[plan.id as keyof typeof planAccent];
            const Icon = planIcons[plan.id];

            if (plan.popular) {
              return (
                <Reveal key={plan.name} delay={i * 0.08}>
                  <div
                    className={cn(
                      'relative flex h-full flex-col rounded-2xl p-7',
                      'bg-gradient-to-br from-brand-deep via-brand-dark to-brand-abyss',
                      'text-white',
                      'shadow-[0_20px_50px_-12px_rgba(12,70,107,0.35)]',
                      'border-t-[3px] border-t-white',
                      'inset-shadow-2xs',
                    )}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <div className="absolute -top-10 left-1/2 h-28 w-40 -translate-x-1/2 rounded-full bg-brand-light/10 blur-3xl" />

                    <span className="bg-white text-brand-deep absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold shadow-md">
                      Más popular
                    </span>

                    <div className="bg-white/15 mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <p className="mt-1 text-xs text-white/60">{plan.tagline}</p>

                    <div className="mt-5 mb-4">
                      <p className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                        <span className="text-xs text-white/50">{plan.period}</span>
                      </p>
                    </div>

                    <div className="mb-5 flex items-center gap-4 border-b border-white/10 pb-5 text-xs">
                      <span className="flex items-center gap-1.5 text-white/70">
                        <Users className="h-3.5 w-3.5" /> {plan.users}
                      </span>
                      <span className="flex items-center gap-1.5 text-white/70">
                        <HardDrive className="h-3.5 w-3.5" /> {plan.assets}
                      </span>
                    </div>

                    <ul className="mb-6 flex-1 space-y-2.5 text-sm">
                      {plan.cardFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald" />
                          <span
                            className={cn(
                              plan.highlight.includes(f)
                                ? 'font-semibold text-white'
                                : 'text-white/80',
                            )}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button href="/demo" variant="secondary" className="w-full">
                      Solicitar demo
                    </Button>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={plan.name} delay={i * 0.08}>
                <div
                  className={cn(
                    'bg-card relative flex h-full flex-col rounded-2xl p-7',
                    'card-elevated-sm',
                    'border-t-[3px]',
                    accent.border,
                  )}
                >
                  <div
                    className={cn(
                      'mb-4 flex h-11 w-11 items-center justify-center rounded-xl',
                      accent.iconBg,
                    )}
                  >
                    <Icon className={cn('h-5 w-5', accent.iconColor)} />
                  </div>

                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground mt-1 text-xs">{plan.tagline}</p>

                  <div className="mt-5 mb-4">
                    <p className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold tracking-tight text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-xs">{plan.period}</span>
                    </p>
                  </div>

                  <div className="mb-5 flex items-center gap-4 border-b border-border/50 pb-5 text-xs">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" /> {plan.users}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <HardDrive className="h-3.5 w-3.5" /> {plan.assets}
                    </span>
                  </div>

                  <ul className="mb-6 flex-1 space-y-2.5 text-sm">
                    {plan.cardFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check
                          className={cn('mt-0.5 h-4 w-4 flex-shrink-0', accent.check)}
                        />
                        <span
                          className={cn(
                            plan.highlight.includes(f)
                              ? 'font-medium text-foreground'
                              : 'text-muted-foreground',
                          )}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button href="/demo" variant="outline" className="w-full">
                    Elegir {plan.name}
                  </Button>
                </div>
              </Reveal>
            );
          })}
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

  const checkColors: Record<string, string> = {
    lite: 'bg-brand-blue/10 text-brand-blue',
    basic: 'bg-brand-blue/10 text-brand-blue',
    pro: 'bg-indigo/10 text-indigo',
    enterprise: 'bg-emerald/10 text-emerald',
  };

  return (
    <section className="border-border/50 border-y bg-background-secondary px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Comparativa"
          title="Compara funcionalidades entre planes"
          description="Priorizamos las funcionalidades realmente diferenciadoras para que elijas con claridad."
        />

        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border/70 bg-card shadow-[var(--elevation-2)]">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-brand-deep via-brand-dark to-brand-deep">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Funcionalidad
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={cn(
                        'px-4 py-4 text-center text-sm font-semibold',
                        plan.popular ? 'bg-brand-light/20 text-white' : 'text-white',
                      )}
                    >
                      <span className="block">{plan.name}</span>
                      <span
                        className={cn(
                          'mt-0.5 block text-xs font-normal',
                          plan.popular ? 'text-white/70' : 'text-white/50',
                        )}
                      >
                        {plan.price}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.flatMap((category) => [
                  <tr
                    key={`cat-${category.name}`}
                    className="border-border/30 border-b bg-brand-blue/5"
                  >
                    <td
                      colSpan={plans.length + 1}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-blue"
                    >
                      {category.name}
                    </td>
                  </tr>,
                  ...category.features.map((feature) => (
                    <tr
                      key={feature}
                      className="border-border/30 border-b last:border-b-0"
                    >
                      <td className="px-6 py-3 font-medium text-foreground">{feature}</td>
                      {plans.map((plan) => (
                        <td
                          key={plan.name}
                          className={cn(
                            'px-4 py-3 text-center',
                            plan.popular && 'bg-brand-blue/5',
                          )}
                        >
                          {'featureValues' in plan && (plan as any).featureValues?.[feature] ? (
                            <span className="text-xs font-medium text-foreground">
                              {(plan as any).featureValues[feature]}
                            </span>
                          ) : hasFeature(plan, feature) ? (
                            <span
                              className={cn(
                                'inline-flex h-6 w-6 items-center justify-center rounded-full',
                                checkColors[plan.id],
                              )}
                            >
                              <Check className="h-3.5 w-3.5" />
                            </span>
                          ) : (
                            <Minus className="text-muted-foreground/30 mx-auto h-4 w-4" />
                          )}
                        </td>
                      ))}
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PilaresVisuales() {
  const pillars = [
    {
      number: '01',
      title: 'Empiezas a organizar',
      desc: 'Centraliza inventario, hojas de vida y documentación de tus equipos en un solo lugar.',
    },
    {
      number: '02',
      title: 'Estandarizas procesos',
      desc: 'Define cronogramas, alertas de vencimientos y flujos de trabajo para toda tu operación.',
    },
    {
      number: '03',
      title: 'Escalas tu gestión',
      desc: 'Accede a indicadores, kit documental y soporte priorizado a medida que tu institución crece.',
    },
  ];

  return (
    <section className="section-tint px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Valor"
          title="Un plan según tu necesidad, no solo según el precio"
          description="Cada plan está pensado para una escala de operación. El valor está en la información organizada, no en comparar cifras."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-elevated-sm bg-card h-full rounded-2xl p-8 text-center">
                <span className="font-heading text-brand-blue text-3xl font-bold">
                  {p.number}
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

function FaqSection() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Lo más consultado sobre planes y demostraciones."
        />
        <div className="mt-10 space-y-3">
          {faqs.slice(0, 5).map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className="group rounded-xl border border-border/50 border-l-[3px] border-l-brand-blue bg-card shadow-sm transition-shadow hover:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-foreground">
                  {faq.question}
                  <span className="text-brand-blue flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 transition-transform group-open:rotate-180">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="text-muted-foreground px-5 pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </p>
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
    <section className="relative overflow-hidden px-5 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand-dark to-brand-abyss p-10 text-center shadow-[0_20px_50px_-12px_rgba(12,70,107,0.35)] inset-shadow-2xs md:p-14">
            <div className="page-grid-blue pointer-events-none absolute inset-0" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-light/40 to-transparent" />
            <div className="absolute -top-14 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-brand-light/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full border border-brand-light/10" />

            <div className="relative space-y-6">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Empieza con una demostración guiada
              </h2>
              <p className="mx-auto max-w-xl text-lg text-white/70">
                Conoce la plataforma en directo y resuelve tus dudas antes de decidir.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/demo" variant="secondary" size="lg">
                  Solicitar demostración <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/servicios" variant="outline-dark" size="lg">
                  Conocer servicios
                </Button>
              </div>
            </div>
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
      <PilaresVisuales />
      <FaqSection />
      <PlanesCta />
    </main>
  );
}
