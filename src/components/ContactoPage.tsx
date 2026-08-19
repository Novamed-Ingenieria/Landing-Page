import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Globe,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import { site } from '../lib/data';

function PageHero() {
  return (
    <section className="section-dark relative overflow-hidden px-5 pb-14 pt-28 md:px-8 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="page-grid page-grid-blue opacity-30" />
        <div className="absolute -right-20 -top-32 h-[400px] w-[400px] rounded-full bg-brand-light/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-5xl">
            Contacto
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/65 md:text-lg">
            Escríbenos o agenda una demostración. Atendemos a todo el país desde Cali.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.whatsapp} variant="secondary" size="lg">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
            <Button href="#canales" variant="outline-dark" size="lg">
              Otros canales
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppCard() {
  return (
    <Reveal>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl bg-emerald p-6 text-white shadow-[0_12px_40px_-8px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-8px_rgba(16,185,129,0.45)] md:p-8"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
        <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-125" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold md:text-xl">Escríbenos por WhatsApp</h3>
              <p className="text-xs text-white/70">Respuesta en menos de 24 h · Lun–Vie 8:00–5:00</p>
            </div>
          </div>
          <span className="hidden shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-emerald shadow-sm transition-all group-hover:bg-white/90 sm:inline-flex">
            Abrir <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

function ChannelCard({
  ch,
  index,
}: {
  ch: { icon: typeof Phone; label: string; value: string; href: string; external?: boolean; iconColor: string; bg: string };
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.04}>
      <a
        href={ch.href}
        target={ch.external ? '_blank' : undefined}
        rel={ch.external ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`group flex items-center gap-3.5 rounded-xl border border-border/50 ${ch.bg} p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
      >
        <motion.div
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${ch.bg}`}
        >
          <ch.icon className={`h-4.5 w-4.5 ${ch.iconColor}`} />
        </motion.div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{ch.label}</p>
          <p className="truncate text-sm font-semibold text-foreground">{ch.value}</p>
        </div>
        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
      </a>
    </Reveal>
  );
}

function OtherChannels() {
  const channels = [
    { icon: Phone, label: 'Teléfono', value: site.phone, href: site.phoneHref, iconColor: 'text-green', bg: 'bg-green/10' },
    { icon: Mail, label: 'Correo', value: site.email, href: `mailto:${site.email}`, iconColor: 'text-brand-blue', bg: 'bg-brand-blue/10' },
    { icon: Instagram, label: 'Instagram', value: site.instagramHandle, href: site.instagram, external: true, iconColor: 'text-instagram', bg: 'bg-instagram/10' },
    { icon: Globe, label: 'Web', value: 'novamedingenieria.com', href: site.url, external: true, iconColor: 'text-indigo', bg: 'bg-indigo/10' },
  ];

  return (
    <section id="canales" className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {channels.map((ch, i) => (
            <ChannelCard key={ch.label} ch={ch} index={i} />
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
      <div className="mx-auto max-w-3xl px-5 pt-10 md:px-8">
        <WhatsAppCard />
      </div>
      <OtherChannels />
    </main>
  );
}
