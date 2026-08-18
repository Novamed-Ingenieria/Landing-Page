import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { site } from '../lib/data';

const sections = [
  {
    title: 'Datos que recopilamos',
    text: 'Recopilamos la información que nos proporcionas al contactarnos o al solicitar una demostración: nombre, correo electrónico, teléfono y los datos de tu institución. No solicitamos información de pago a través de este sitio web.',
  },
  {
    title: 'Cómo usamos tus datos',
    text: 'Usamos tus datos únicamente para atender tus solicitudes de demostración, prestar el servicio y mejorar nuestra comunicación. No vendemos ni compartimos tu información con terceros.',
  },
  {
    title: 'Almacenamiento y seguridad',
    text: 'La información y los documentos de tu institución se almacenan de forma segura con acceso restringido por roles. Implementamos cifrado en las transmisiones y seguimos buenas prácticas de seguridad para proteger tu información.',
  },
  {
    title: 'Tus derechos',
    text: 'Puedes solicitar la actualización o eliminación de tu información en cualquier momento escribiéndonos a los canales de contacto.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="page-grid" />
          <div className="bg-secondary/15 absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Legal"
            title="Política de privacidad"
            description="Cómo tratamos y protegemos la información que compartes con nosotros."
          />
          <div className="mt-10 space-y-5">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="bg-card card-elevated-sm rounded-xl p-6">
                  <h2 className="mb-2 text-lg font-semibold">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={sections.length * 0.05}>
              <p className="text-muted-foreground text-sm">
                Si tienes inquietudes sobre tu privacidad, escríbenos a{' '}
                <a href={`mailto:${site.email}`} className="text-primary font-medium hover:underline">
                  {site.email}
                </a>{' '}
                o llámanos al{' '}
                <a href={site.phoneHref} className="text-primary font-medium hover:underline">
                  {site.phone}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
