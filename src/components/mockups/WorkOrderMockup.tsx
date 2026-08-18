import { CheckCircle2, Circle, Loader2, User, Wrench } from 'lucide-react';

const steps = [
  { label: 'Novedad', status: 'done' as const },
  { label: 'Asignación', status: 'done' as const },
  { label: 'Seguimiento', status: 'current' as const },
  { label: 'Cierre', status: 'pending' as const },
];

export default function WorkOrderMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-card overflow-hidden rounded-2xl border border-border/70 shadow-[var(--elevation-4)]">
        <div className="border-border/60 flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-alert" />
          <span className="h-2.5 w-2.5 rounded-full bg-warn" />
          <span className="h-2.5 w-2.5 rounded-full bg-green" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">Orden de trabajo #OT-114</span>
        </div>

        <div className="space-y-5 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
              <Wrench className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading truncate text-sm font-semibold">
                Mantenimiento preventivo — Desfibrilador
              </p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" /> Asignada a: Ingeniería biomédica
              </p>
            </div>
            <span className="bg-warn-soft shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold text-warn">
              En proceso
            </span>
          </div>

          {/* pipeline */}
          <div className="flex items-center">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-1.5">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      step.status === 'done'
                        ? 'bg-green-soft text-green'
                        : step.status === 'current'
                          ? 'bg-secondary/15 text-secondary'
                          : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.status === 'done' ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : step.status === 'current' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-medium text-muted-foreground">
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 rounded-full ${
                      step.status === 'done' ? 'bg-green' : 'bg-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
