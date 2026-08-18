import { Phone, Mail, Instagram, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import { site } from '../lib/data';

const platformLinks = [
  { href: '/plataforma', label: 'Funciones' },
  { href: '/plataforma#trazabilidad', label: 'Trazabilidad conectada' },
  { href: '/plataforma#qr', label: 'Identificación QR' },
  { href: '/planes', label: 'Planes y precios' },
];

const companyLinks = [
  { href: '/servicios', label: 'Servicios especializados' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/privacidad', label: 'Política de privacidad' },
];

export default function Footer() {
  return (
    <footer className="section-dark relative overflow-hidden pb-10 pt-20">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <img src="/images/logo-blanco.png" alt="Novamed Ingeniería S.A.S." className="h-11 w-auto object-contain" />
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Plataforma de gestión de tecnología biomédica y servicios de
              ingeniería. Centralizamos la información y la trazabilidad de tus
              equipos y brindamos soporte técnico especializado para los sectores
              salud y veterinario.
            </p>
            <a
                href="/demo"
                className="bg-secondary text-secondary-foreground inline-flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
            >
              Solicitar demostración <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4 md:col-span-3">
            <h4 className="text-sm font-semibold text-white">Plataforma</h4>
            <ul className="space-y-2.5 text-sm">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:col-span-4">
            <h4 className="text-sm font-semibold text-white">Compañía</h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
            <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Instagram className="h-4 w-4" /> {site.instagramHandle}
            </a>
            <a
              href={site.url}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Globe className="h-4 w-4" /> www.novamedingenieria.com
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName} Todos los derechos
            reservados.
          </p>
          <p>Gestión tecnológica orientada a la seguridad del paciente.</p>
        </div>
      </div>
    </footer>
  );
}
