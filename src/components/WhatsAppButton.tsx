import { MessageCircle } from 'lucide-react';
import { site } from '../lib/data';

export default function WhatsAppButton() {
  return (
    <a
      href={`${site.whatsapp}?text=${encodeURIComponent('Hola, me interesa conocer más sobre la plataforma de Novamed Ingeniería.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
