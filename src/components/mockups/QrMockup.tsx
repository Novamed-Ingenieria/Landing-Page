import { ScanLine, FileText, BookOpen, Gauge, ClipboardList } from 'lucide-react';

function QrGlyph({ className = '' }: { className?: string }) {
  const cells = [
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  ];
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true">
      {cells.map((row, y) =>
        row.map((v, x) =>
          v ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
        ),
      )}
    </svg>
  );
}

const access = [
  { label: 'Hoja de vida', icon: FileText },
  { label: 'Reportes', icon: ClipboardList },
  { label: 'Manuales', icon: BookOpen },
  { label: 'Verificación', icon: Gauge },
];

export default function QrMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-card flex items-stretch gap-5 rounded-2xl border border-border/70 p-5 shadow-[var(--elevation-4)] md:p-6">
        {/* equipment + QR tag */}
        <div className="hidden flex-1 flex-col justify-between rounded-xl border border-border/60 bg-background/50 p-4 sm:flex">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="bg-secondary/12 text-secondary flex h-8 w-8 items-center justify-center rounded-lg">
              <ScanLine className="h-4 w-4" />
            </span>
            Equipo etiquetado
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <div className="text-primary mb-2 flex items-center gap-2">
                <QrGlyph className="h-20 w-20 fill-current" />
              </div>
              <p className="text-center text-[10px] font-semibold text-muted-foreground">
                Monitor · 0172
              </p>
            </div>
          </div>
          <p className="text-center text-[11px] text-muted-foreground">
            Cada equipo con su código QR
          </p>
        </div>

        {/* phone */}
        <div className="w-56 shrink-0 rounded-[1.75rem] border border-border bg-background p-2 shadow-lg">
          <div className="rounded-[1.4rem] bg-background-secondary overflow-hidden">
            <div className="bg-primary px-4 py-3 text-white">
              <p className="text-[10px] text-white/70">Escaneo completado</p>
              <p className="text-xs font-semibold">Monitor de signos vitales</p>
            </div>
            <div className="space-y-1.5 p-3">
              {access.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-lg border border-border/60 px-3 py-2"
                >
                  <item.icon className="text-secondary h-3.5 w-3.5" />
                  <span className="text-[11px] font-medium">{item.label}</span>
                  <span className="text-primary ml-auto text-[10px]">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
