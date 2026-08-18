import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Globe,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { site, faqs } from '../lib/data';

const contactItems = [
  { icon: Phone, label: 'Teléfono', value: site.phone, href: site.phoneHref },
  { icon: Mail, label: 'Correo', value: site.email, href: `mailto:${site.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Escríbenos por WhatsApp', href: site.whatsapp },
  { icon: Instagram, label: 'Instagram', value: site.instagramHandle, href: site.instagram },
  { icon: Globe, label: 'Sitio web', value: 'www.novamedingenieria.com', href: site.url },
];

function PageHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-28 text-center md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid" />
        <div className="bg-secondary/15 absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Contacto"
          title="Agenda una demostración o una reunión"
          description="Elige una fecha y una hora, registra tus datos y solicitamos tu sesión. También puedes escribirnos directamente por los canales de siempre."
        />
      </div>
    </section>
  );
}

function ContactChannelsSection() {
  return (
    <section className="px-5 py-12 md:px-8">
      <div id="canales" className="mx-auto max-w-3xl">
        <div className="space-y-4">
          <Reveal delay={0.05}>
            <h3 className="text-lg font-semibold">Canales de contacto</h3>
          </Reveal>
          <div className="space-y-3">
            {contactItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-card card-elevated-sm group flex items-center gap-4 rounded-xl p-4"
                >
                  <div className="bg-secondary/12 text-secondary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-primary truncate text-sm font-semibold">{item.value}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground/40 group-hover:text-secondary ml-auto h-4 w-4 flex-shrink-0 transition-colors" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-background-secondary border-border/50 border-t px-5 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Lo más consultado sobre la plataforma y nuestros servicios."
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.04}>
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

export default function ContactoPage() {
  return (
    <main className="bg-background">
      <PageHero />
      <ContactChannelsSection />
      <FaqSection />
    </main>
  );
}
