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

export default function ClientsSection() {
  return (
    <section className="border-y border-brand-dark/10 bg-white px-5 py-14 md:px-8 md:py-18">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Instituciones que confían en Novamed Ingeniería
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((c) => (
              <img
                key={c.alt}
                src={c.logo}
                alt={c.alt}
                loading="lazy"
                className="h-10 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-12"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
