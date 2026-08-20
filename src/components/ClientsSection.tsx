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
    <div className="flex shrink-0 gap-6 pr-6">
      {clients.map((c, i) => (
        <div
          key={i}
          className="group flex h-28 w-48 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-brand-dark/10 bg-white px-6 shadow-sm transition-all duration-300 hover:border-brand-light/40 hover:shadow-lg hover:scale-[1.02]"
        >
          <img
            src={c.logo}
            alt={c.alt}
            width={192}
            height={112}
            loading="lazy"
            className="h-full w-full object-contain transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt px-5 py-12 md:px-8 md:py-16">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 shadow-[0_4px_14px_rgba(12,70,107,0.45)]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 shadow-[0_-4px_14px_rgba(12,70,107,0.45)]" />
      <div className="absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand-light/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-brand-blue">
              Ellos confian en nosotros
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative overflow-hidden">
            <div className="carousel-fade-left carousel-fade-right absolute inset-0 z-10" />
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
