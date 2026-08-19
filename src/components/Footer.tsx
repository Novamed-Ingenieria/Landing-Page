import { site } from '../lib/data';

const legalLinks = [
  { href: '/privacidad', label: 'Política de privacidad' },
  { href: '/terminos', label: 'Términos y condiciones' },
  { href: '/tratamiento-de-datos', label: 'Tratamiento de datos' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-brand-abyss via-brand-dark to-brand-deep">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/40 to-transparent" />
      <div className="page-grid page-grid-blue opacity-20" />
      <div className="absolute -right-24 -top-20 h-[260px] w-[260px] rounded-full bg-brand-light/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-[180px] w-[180px] rounded-full border-[30px] border-brand-light/8" />

      <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.legalName}</p>
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="py-2 transition-colors hover:text-white/80">
                {link.label}
              </a>
            ))}
          </div>
          <p>{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
