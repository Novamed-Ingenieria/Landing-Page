import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import Agenda from './Agenda';

export default function DemoPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden px-5 pb-12 pt-28 text-center md:px-8 md:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="page-grid" />
          <div className="bg-secondary/15 absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Solicitar demostración"
            title="Agenda una sesión para conocer Novamed Ingeniería"
            description="Elige una fecha y una hora. Te mostraremos la plataforma y las soluciones técnicas según las necesidades de tu institución."
          />
        </div>
      </section>

      <section id="agenda" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Agenda />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
