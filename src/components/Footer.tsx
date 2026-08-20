import { site } from '../lib/data';

const legalLinks = [
  { href: '/privacidad', label: 'Política de privacidad' },
  { href: '/terminos', label: 'Términos y condiciones' },
  { href: '/tratamiento-de-datos', label: 'Tratamiento de datos' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-brand-abyss via-brand-dark to-brand-deep grain-overlay shadow-[inset_0_8px_24px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-light/30 to-transparent blur-[1px]" />
      <div className="page-grid page-grid-blue opacity-20" />
      <div className="absolute -right-24 -top-20 h-[260px] w-[260px] rounded-full bg-brand-light/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-[180px] w-[180px] rounded-full border-[30px] border-brand-light/8" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-light/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-xs text-white/50 md:flex-row md:gap-4">
          <p className="font-medium">&copy; {new Date().getFullYear()} {site.legalName}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="py-2 transition-colors duration-200 hover:text-white/80">
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-medium">{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
