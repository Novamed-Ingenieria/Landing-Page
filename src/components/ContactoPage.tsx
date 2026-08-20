import { Phone, Mail, MessageCircle, Instagram, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { site } from '../lib/data';

function WhatsAppCard() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full overflow-hidden rounded-2xl bg-emerald p-6 text-white shadow-[0_12px_40px_-8px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-8px_rgba(16,185,129,0.45)]"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-125" />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-bold">Escríbenos por WhatsApp</h3>
          <p className="mt-1.5 text-sm text-white/80">
            El canal más rápido para resolver dudas y agendar una reunión.
          </p>
        </div>
        <div>
          <p className="text-xs text-white/70">Respuesta en menos de 24 h · Lun–Vie 8:00–5:00</p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-emerald shadow-sm transition-all group-hover:bg-white/90">
            Abrir chat <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </a>
  );
}

function ChannelCard({
  ch,
}: {
  ch: { icon: typeof Phone; label: string; value: string; href: string; external?: boolean; iconColor: string; bg: string };
}) {
  return (
    <a
      href={ch.href}
      target={ch.external ? '_blank' : undefined}
      rel={ch.external ? 'noopener noreferrer' : undefined}
      className="group flex h-full items-center gap-3 rounded-xl border border-border/50 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${ch.bg}`}>
        <ch.icon className={`h-4.5 w-4.5 ${ch.iconColor}`} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{ch.label}</p>
        <p className="truncate text-sm font-semibold text-foreground">{ch.value}</p>
      </div>
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

function ContactSection() {
  const channels = [
    { icon: Phone, label: 'Teléfono', value: site.phone, href: site.phoneHref, iconColor: 'text-green', bg: 'bg-green/10' },
    { icon: Mail, label: 'Correo', value: site.email, href: `mailto:${site.email}`, iconColor: 'text-brand-blue', bg: 'bg-brand-blue/10' },
    { icon: Instagram, label: 'Instagram', value: site.instagramHandle, href: site.instagram, external: true, iconColor: 'text-instagram', bg: 'bg-instagram/10' },
    { icon: Globe, label: 'Web', value: 'novamedingenieria.com', href: site.url, external: true, iconColor: 'text-indigo', bg: 'bg-indigo/10' },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 via-brand-blue to-indigo-400" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid-mesh opacity-30" />
        <div className="absolute left-[-6%] top-[10%] h-[320px] w-[320px] rounded-full bg-brand-light/[0.08] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-emerald-400/[0.07] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionHeader
            eyebrow="Contacto"
            title="Estamos para ayudarte"
            description="Elige el canal que prefieras y cuéntanos cómo podemos apoyar la gestión de tu tecnología. Atendemos a todo el país desde Cali."
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <WhatsAppCard />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {channels.map((ch, i) => (
              <Reveal key={ch.label} delay={i * 0.05}>
                <ChannelCard ch={ch} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactoPage() {
  return (
    <main className="bg-background">
      <ContactSection />
    </main>
  );
}
