import Reveal from './Reveal';

const clients = [
  { logo: '/clientes/electrolmedo.jpeg', alt: 'Electrolmedo' },
  { logo: '/clientes/henry salcedo.jpg', alt: 'Henry Salcedo' },
  { logo: '/clientes/medimascotas.png', alt: 'Medimascotas' },
  { logo: '/clientes/red de salud del norte.jpg', alt: 'Red de Salud del Norte' },
  { logo: '/clientes/sur salud.jpg', alt: 'Sur Salud' },
  { logo: '/clientes/tecnologia vital medica.jpg', alt: 'Tecnología Vital Médica' },
  { logo: '/clientes/world fitness.png', alt: 'World Fitness' },
];

function LogoSet() {
  return (
    <div className="flex shrink-0 gap-6 pr-6">
      {clients.map((c, i) => (
        <div
          key={i}
          className="group flex shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-brand-dark/10 bg-white px-6 py-6 shadow-[0_4px_14px_rgba(12,70,107,0.06)] transition-all duration-300 hover:border-brand-light hover:shadow-[0_14px_28px_rgba(12,70,107,0.14)]"
        >
          <img
            src={c.logo}
            alt={c.alt}
            loading="lazy"
            className="h-24 w-48 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f8] px-5 py-10 md:px-8 md:py-14">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 shadow-[0_4px_14px_rgba(12,70,107,0.45)]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 shadow-[0_-4px_14px_rgba(12,70,107,0.45)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight text-brand-deep md:text-3xl">
              Confianza que se construye
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 overflow-hidden">
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
        @keyframes slide-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
