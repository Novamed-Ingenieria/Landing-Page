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
  Flame,
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

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-gray-200 px-5 pb-14 pt-24 md:px-8 md:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <SectionHeader
            title="Planes y precios para cada escala de operación"
            description="Elige el plan que se adapta al tamaño de tu institución y a la cantidad de activos que gestionas."
          />
          <Reveal>
            <div className="mx-auto inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand-blue/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-deep shadow-sm">
              <Flame className="h-4 w-4 text-orange-500" />
              Desde $36.900/mes
              <span className="text-brand-light">·</span>
              Sin permanencia
              <span className="text-brand-light">·</span>
              Demostración gratuita
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const accent = planAccent[plan.id as keyof typeof planAccent];
            const Icon = planIcons[plan.id];

            if (plan.popular) {
              return (
                <Reveal key={plan.name} delay={i * 0.08}>
                  <div className="relative h-full">
                    <div
                      className={cn(
                        'bg-card relative flex h-full flex-col rounded-2xl p-7',
                        'card-elevated-sm',
                        'border-2 border-amber-300',
                        'border-t-[3px] border-t-amber-400',
                      )}
                    >
                      <span className="absolute -top-3.5 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-[0_4px_16px_rgba(234,88,12,0.5)]">
                        <Flame className="h-3.5 w-3.5" />
                        Más popular
                      </span>

                      <div className="bg-amber-100 mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
                        <Icon className="h-5 w-5 text-amber-600" />
                      </div>

                      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                      <p className="text-muted-foreground mt-1 text-xs">{plan.tagline}</p>

                      <div className="mt-5 mb-4">
                        <p className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold tracking-tight text-foreground">{plan.price}</span>
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
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
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

                      <Button
                        href="/demo"
                        className="w-full bg-amber-400 text-brand-deep hover:bg-amber-500"
                      >
                        Solicitar demostración
                      </Button>
                    </div>
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
                    Solicitar demostración
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="text-muted-foreground mt-10 text-center text-sm">
            ¿Dudas sobre cuál elegir? Solicita una demostración y te ayudamos a encontrar el plan
            ideal para tu institución.
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
    <section className="relative overflow-hidden bg-surface-alt px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-[-6%] top-[15%] h-[340px] w-[340px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[-6%] top-[30%] h-[320px] w-[320px] rounded-full bg-indigo-400/[0.08] blur-3xl" />
        <div className="absolute bottom-[-8%] left-[30%] h-[300px] w-[300px] rounded-full bg-emerald-400/[0.08] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          title="Compara funcionalidades entre planes"
          description="Priorizamos las funcionalidades realmente diferenciadoras para que elijas con claridad."
        />

        <Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border/70 bg-card shadow-[var(--elevation-2)]">
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
                <tr className="border-border/30 border-b bg-brand-blue/5">
                  <td
                    colSpan={plans.length + 1}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-blue"
                  >
                    Capacidad del plan
                  </td>
                </tr>
                <tr className="border-border/30 border-b">
                  <td className="px-6 py-3 font-medium text-foreground">Usuarios</td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn('px-4 py-3 text-center', plan.popular && 'bg-brand-blue/5')}
                    >
                      <span className="text-xs font-medium text-foreground">{plan.users}</span>
                    </td>
                  ))}
                </tr>
                <tr className="border-border/30 border-b">
                  <td className="px-6 py-3 font-medium text-foreground">Activos</td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn('px-4 py-3 text-center', plan.popular && 'bg-brand-blue/5')}
                    >
                      <span className="text-xs font-medium text-foreground">{plan.assets}</span>
                    </td>
                  ))}
                </tr>
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
                      className="border-border/30 border-b transition-colors last:border-b-0 hover:bg-brand-blue/[0.03]"
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
                          {'featureValues' in plan && plan.featureValues && plan.featureValues[feature] ? (
                            <span className="text-xs font-medium text-foreground">
                              {plan.featureValues[feature]}
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
      bg: 'bg-brand-blue',
      shadow: 'shadow-[0_18px_40px_rgba(12,70,107,0.3)]',
    },
    {
      number: '02',
      title: 'Estandarizas procesos',
      desc: 'Define cronogramas, alertas de vencimientos y flujos de trabajo para toda tu operación.',
      bg: 'bg-indigo',
      shadow: 'shadow-[0_18px_40px_rgba(99,102,241,0.3)]',
    },
    {
      number: '03',
      title: 'Escalas tu gestión',
      desc: 'Accede a indicadores, kit documental y soporte priorizado a medida que tu institución crece.',
      bg: 'bg-emerald',
      shadow: 'shadow-[0_18px_40px_rgba(16,185,129,0.3)]',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-indigo-400 to-emerald-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh" />
        <div className="absolute left-[-6%] top-[15%] h-[320px] w-[320px] rounded-full bg-brand-light/[0.10] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-emerald-400/[0.08] blur-3xl" />
        <div className="absolute left-[40%] top-[-8%] h-[260px] w-[260px] rounded-full bg-indigo-400/[0.08] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          title="Un plan según tu necesidad, no solo según el precio"
          description="Cada plan está pensado para una escala de operación. El valor está en la información organizada, no en comparar cifras."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className={cn('h-full rounded-2xl p-8 text-center', p.bg, p.shadow)}>
                <span className="font-heading mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white">
                  {p.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/85">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqColors = [
    { border: 'border-t-brand-blue', badge: 'bg-brand-blue/10 text-brand-blue' },
    { border: 'border-t-indigo', badge: 'bg-indigo/10 text-indigo' },
    { border: 'border-t-emerald', badge: 'bg-emerald/10 text-emerald' },
    { border: 'border-t-amber-400', badge: 'bg-amber-100 text-amber-600' },
    { border: 'border-t-red-400', badge: 'bg-red-100 text-red-500' },
    { border: 'border-t-brand-light', badge: 'bg-brand-light/10 text-brand-light' },
    { border: 'border-t-indigo', badge: 'bg-indigo/10 text-indigo' },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-muted px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue via-brand-light to-indigo-400" />
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh opacity-30" />
        <div className="absolute left-[-6%] top-[20%] h-[300px] w-[300px] rounded-full bg-brand-light/[0.08] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[15%] h-[280px] w-[280px] rounded-full bg-emerald-400/[0.07] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Lo más consultado sobre planes y demostraciones."
        />
        <div className="mt-10 grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className={cn('group rounded-xl border border-border/50 border-t-[3px] bg-card shadow-sm transition-shadow hover:shadow-md', faqColors[i % faqColors.length].border)}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-sm font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <span className={cn('flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-transform group-open:rotate-180', faqColors[i % faqColors.length].badge)}>
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

export default function PlanesPage() {
  return (
    <main className="bg-background">
      <Pricing />
      <Comparison />
      <PilaresVisuales />
      <FaqSection />
    </main>
  );
}
