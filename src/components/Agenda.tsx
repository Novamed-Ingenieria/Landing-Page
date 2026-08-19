import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Check,
  Building2,
  MessageSquare,
  Phone,
  Mail,
  CalendarCheck,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cn } from '../lib/utils';

type Step = 1 | 2 | 3 | 4;

const timeSlots = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
];

const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

function buildDays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

const weekdayShort = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

function formatDate(d: Date) {
  return `${weekdayShort[d.getDay()]}, ${d.getDate()} de ${monthNames[d.getMonth()]}`;
}

const stepsMeta: { key: Step; label: string }[] = [
  { key: 1, label: 'Fecha' },
  { key: 2, label: 'Hora' },
  { key: 3, label: 'Datos' },
  { key: 4, label: 'Confirmación' },
];

export default function Agenda() {
  const days = useMemo(() => buildDays(10), []);
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    interest: 'demo',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const pk = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
    if (pk) emailjs.init(pk);
  }, []);

  const unavailable = (dayIndex: number, slotIndex: number) =>
    (dayIndex * 3 + slotIndex) % 5 === 0 || (dayIndex + slotIndex) % 7 === 0;

  const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
    if (!serviceId || !templateId || serviceId === 'tu_service_id') {
      setSubmitted(true);
      return;
    }
    setSending(true);
    setError(null);
    try {
      await emailjs.send(serviceId, templateId, {
        to_email: 'solicitudesnovamed@gmail.com',
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        institution: form.institution,
        interest:
          form.interest === 'demo'
            ? 'Demostración de la plataforma'
            : form.interest === 'servicios'
              ? 'Servicios técnicos'
              : 'Ambos',
        message: form.message,
        date: selectedDay ? formatDate(selectedDay) : '',
        time: selectedTime ?? '',
      });
      setSubmitted(true);
    } catch {
      setError('Ocurrió un error al enviar. Intenta escribirnos por WhatsApp o correo.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-card overflow-hidden rounded-2xl border border-border/70 shadow-[var(--elevation-3)]">
      {/* progress header */}
      <div className="border-border/60 flex items-center justify-between border-b bg-muted/40 px-5 py-4 md:px-7">
        <div className="flex items-center gap-2">
          <CalendarDays className="text-secondary h-5 w-5" />
          <span className="font-heading text-sm font-semibold">Agenda una sesión</span>
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          {stepsMeta.map((s, i) => (
            <div key={s.key} className="flex items-center gap-1">
              {i > 0 && <span className="mx-1 h-px w-4 bg-border" />}
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold',
                  step >= s.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {step > s.key ? <Check className="h-3.5 w-3.5" /> : s.key}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold">Elige una fecha</h3>
              <p className="text-muted-foreground mt-1 text-sm">Días hábiles disponibles.</p>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {days.map((day, i) => (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      setStep(2);
                    }}
                    aria-label={`${weekdayShort[day.getDay()]} ${day.getDate()} de ${monthNames[day.getMonth()]}`}
                    className={cn(
                      'cursor-pointer rounded-xl border px-3 py-3 text-center transition-all',
                      selectedDay?.toDateString() === day.toDateString()
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background hover:border-secondary/50',
                    )}
                  >
                    <span className="block text-[10px] font-medium uppercase opacity-70">
                      {weekdayShort[day.getDay()]}
                    </span>
                    <span className="font-heading text-lg font-bold">{day.getDate()}</span>
                    <span className="block text-[10px] opacity-70">{monthNames[day.getMonth()]}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && selectedDay && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold">Elige una hora</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {formatDate(selectedDay)} · horario Colombia
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {timeSlots.map((slot, i) => {
                    const idx = days.findIndex((d) => d.toDateString() === selectedDay.toDateString());
                    const isUnavailable = unavailable(idx, i);
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={isUnavailable}
                        aria-label={`${slot} ${isUnavailable ? '(no disponible)' : ''}`}
                        onClick={() => {
                          setSelectedTime(slot);
                          setStep(3);
                        }}
                        className={cn(
                          'rounded-lg border px-3 py-2 text-sm font-medium transition-all',
                          isUnavailable
                            ? 'cursor-not-allowed border-transparent bg-muted text-muted-foreground/40 line-through'
                            : selectedTime === slot
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-background hover:border-secondary/50',
                        )}
                      >
                        {slot}
                      </button>
                    );
                  })}
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-muted-foreground hover:text-primary mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Cambiar fecha
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.form
              key="step-3"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <h3 className="text-lg font-semibold">Tus datos</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {selectedDay && selectedTime
                  ? `Sesión: ${formatDate(selectedDay)} · ${selectedTime}`
                  : 'Completa tu información de contacto.'}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="agenda-name" className="text-sm font-medium">Nombre completo</label>
                  <div className="relative">
                    <User className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                    <input
                      id="agenda-name"
                      required
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="Tu nombre"
                      className="border-border bg-background focus:border-secondary w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="agenda-email" className="text-sm font-medium">Correo electrónico</label>
                  <div className="relative">
                    <Mail className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                    <input
                      id="agenda-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="nombre@institucion.com"
                      className="border-border bg-background focus:border-secondary w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="agenda-phone" className="text-sm font-medium">Teléfono</label>
                  <div className="relative">
                    <Phone className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                    <input
                      id="agenda-phone"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="+57 300 000 0000"
                      className="border-border bg-background focus:border-secondary w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="agenda-institution" className="text-sm font-medium">Institución</label>
                  <div className="relative">
                    <Building2 className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                    <input
                      id="agenda-institution"
                      value={form.institution}
                      onChange={(e) => set('institution', e.target.value)}
                      placeholder="Nombre de la institución"
                      className="border-border bg-background focus:border-secondary w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <span className="text-sm font-medium">¿Qué te interesa?</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'demo', label: 'Demostración de la plataforma' },
                      { value: 'servicios', label: 'Servicios técnicos' },
                      { value: 'ambos', label: 'Ambos' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => set('interest', opt.value)}
                        className={cn(
                          'cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                          form.interest === opt.value
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background hover:border-secondary/50',
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="agenda-message" className="text-sm font-medium">Mensaje (opcional)</label>
                  <div className="relative">
                    <MessageSquare className="text-muted-foreground pointer-events-none absolute left-3 top-3 h-4 w-4" />
                    <textarea
                      id="agenda-message"
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      rows={3}
                      placeholder="Cuéntanos brevemente sobre tu institución y tu tecnología."
                      className="border-border bg-background focus:border-secondary w-full resize-none rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-muted-foreground hover:text-primary inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Atrás
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      Confirmar solicitud <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              {error && (
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-alert/30 bg-alert-soft px-4 py-3 text-xs text-alert">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" /> {error}
                </div>
              )}
            </motion.form>
          )}

          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="bg-secondary/12 text-secondary mx-auto flex h-14 w-14 items-center justify-center rounded-full">
                <CalendarCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-bold">
                {submitted ? 'Solicitud confirmada' : 'Revisa tu solicitud'}
              </h3>
              <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
                {submitted
                  ? 'Hemos registrado tu solicitud. Nuestro equipo la confirmará a la brevedad por correo o WhatsApp.'
                  : 'Confirma que los datos son correctos.'}
              </p>

              {selectedDay && selectedTime && (
                <div className="mx-auto mt-6 max-w-sm rounded-xl border border-border/60 bg-background/60 p-4 text-left text-sm">
                  <div className="flex items-center gap-2 font-semibold">
                    <Clock className="text-secondary h-4 w-4" />
                    {formatDate(selectedDay)} · {selectedTime}
                  </div>
                  <div className="text-muted-foreground mt-3 space-y-1.5">
                    {form.name && (
                      <p>
                        <span className="font-medium text-foreground">Nombre:</span> {form.name}
                      </p>
                    )}
                    {form.email && (
                      <p>
                        <span className="font-medium text-foreground">Correo:</span> {form.email}
                      </p>
                    )}
                    {form.institution && (
                      <p>
                        <span className="font-medium text-foreground">Institución:</span>{' '}
                        {form.institution}
                      </p>
                    )}
                    <p>
                      <span className="font-medium text-foreground">Interés:</span>{' '}
                      {form.interest === 'demo'
                        ? 'Demostración'
                        : form.interest === 'servicios'
                          ? 'Servicios técnicos'
                          : 'Ambos'}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {!submitted && (
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
                  >
                    Enviar solicitud <ArrowRight className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setSubmitted(false);
                    setSelectedDay(null);
                    setSelectedTime(null);
                  }}
                  className="text-muted-foreground hover:text-primary inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> {submitted ? 'Agendar otra sesión' : 'Volver a editar'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
