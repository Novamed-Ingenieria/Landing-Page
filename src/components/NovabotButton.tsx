import { site } from '../lib/data';

export default function NovabotButton() {
  return (
    <a
      href={`${site.whatsapp}?text=${encodeURIComponent('Hola, me interesa conocer más sobre la plataforma de Novamed Ingeniería.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Novabot - Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
    >
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-lg bg-brand-deep px-3 py-2 text-center text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        ¡Contáctanos!
      </span>
      <img src="/icons/Novabot.png" alt="Novabot" className="h-35 w-35 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
    </a>
  );
}
