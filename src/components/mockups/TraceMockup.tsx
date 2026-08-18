import { motion } from 'framer-motion';
import { MapPin, RefreshCw, CheckCircle2 } from 'lucide-react';

const linked = ['Inventario', 'Hoja de vida', 'Cronograma', 'Registros'];

const states = [
  { label: 'Óptimo', dot: 'bg-green', pill: 'bg-green-soft text-green' },
  { label: 'Preventivo', dot: 'bg-warn', pill: 'bg-warn-soft text-warn' },
  { label: 'Crítico', dot: 'bg-alert', pill: 'bg-alert-soft text-alert' },
];

export default function TraceMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-card overflow-hidden rounded-2xl border border-border/70 shadow-[var(--elevation-4)]">
        <div className="border-border/60 flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-alert" />
          <span className="h-2.5 w-2.5 rounded-full bg-warn" />
          <span className="h-2.5 w-2.5 rounded-full bg-green" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            Hoja de vida · Equipo
          </span>
        </div>

        <div className="space-y-4 p-5">
          {/* equipment header */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold">Monitor de signos vitales</p>
              <p className="text-xs text-muted-foreground">Equipo 0172 · Soporte vital</p>
            </div>
            <span className="ml-auto rounded-full bg-green-soft px-2.5 py-1 text-[10px] font-semibold text-green">
              En uso
            </span>
          </div>

          {/* the single change */}
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-foreground">Ubicación</span>
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-green flex items-center gap-1 text-[10px] font-semibold"
              >
                <RefreshCw className="h-3 w-3" /> Actualizado
              </motion.span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="text-muted-foreground line-through">Urgencias</span>
              <span className="text-secondary">→</span>
              <span className="font-semibold text-foreground">Hospitalización</span>
            </div>
          </div>

          {/* connected records */}
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Se sincroniza automáticamente
            </p>
            <div className="grid grid-cols-2 gap-2">
              {linked.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-background/60 px-3 py-2.5"
                >
                  <span className="text-xs font-medium">{item}</span>
                  <CheckCircle2 className="text-green h-4 w-4" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* status legend */}
          <div className="flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-4">
            {states.map((s) => (
              <span
                key={s.label}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${s.pill}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
