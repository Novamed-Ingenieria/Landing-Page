import Reveal from './Reveal';

const clients = [
  { logo: '/clientes/Electrolmedo.jpeg', alt: 'Electrolmedo' },
  { logo: '/clientes/Henrysalcedo.jpg', alt: 'Henry Salcedo' },
  { logo: '/clientes/Medimascotas.png', alt: 'Medimascotas' },
  { logo: '/clientes/Redsaludnorte.jpg', alt: 'Red de Salud del Norte' },
  { logo: '/clientes/Sursalud.jpg', alt: 'Sur Salud' },
  { logo: '/clientes/Tecnologiavital.jpg', alt: 'Tecnología Vital Médica' },
  { logo: '/clientes/Worldfitness.png', alt: 'World Fitness' },
];

function LogoSet() {
  return (
    <div className="flex shrink-0 gap-5 pr-5">
      {clients.map((c, i) => (
        <div
          key={i}
          className="group flex h-24 w-44 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-brand-dark/10 bg-white px-5 shadow-[0_4px_14px_rgba(12,70,107,0.06)] transition-all duration-300 hover:border-brand-light/40 hover:shadow-[0_16px_32px_rgba(12,70,107,0.12)]"
        >
          <img
            src={c.logo}
            alt={c.alt}
            width={176}
            height={96}
            loading="lazy"
            className="h-full w-full object-contain opacity-75 transition-all duration-300 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 py-16 md:px-8 md:py-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 shadow-[0_4px_14px_rgba(12,70,107,0.45)]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 shadow-[0_-4px_14px_rgba(12,70,107,0.45)]" />
      <div className="absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand-light/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              Ellos confían en nosotros
            </p>
            <h2 className="text-3xl font-bold uppercase leading-[1.08] tracking-[-0.03em] text-brand-deep md:text-4xl">
              Confianza que se construye
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden">
            <div className="logos-track flex w-max">
              <LogoSet />
              <LogoSet />
              <LogoSet />
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .logos-track {
          animation: slide-right 35s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
        @keyframes slide-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logos-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
