import {
  LayoutDashboard,
  Boxes,
  CalendarDays,
  FileText,
  QrCode,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  TrendingUp,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const stats = [
  { label: 'Equipos activos', value: '284', icon: Boxes, delta: '+12 este mes', tone: 'primary' },
  { label: 'Verificaciones al día', value: '96%', icon: CheckCircle2, delta: 'sin retrasos', tone: 'green' },
  { label: 'Alertas activas', value: '3', icon: Activity, delta: '2 requieren acción', tone: 'alert' },
];

const rows = [
  { name: 'Monitor de signos vitales', dept: 'Urgencias', status: 'Óptimo', tone: 'green' },
  { name: 'Desfibrilador bifásico', dept: 'Soporte vital', status: 'Vencimiento próximo', tone: 'warn' },
  { name: 'Electrobisturí', dept: 'Cirugía', status: 'En verificación', tone: 'warn' },
  { name: 'Bomba de infusión', dept: 'Hospitalización', status: 'Mantenimiento atrasado', tone: 'alert' },
];

const statIcon = {
  primary: 'text-primary',
  green: 'text-green',
  warn: 'text-warn',
  alert: 'text-alert',
};

const statDelta = {
  primary: 'text-secondary',
  green: 'text-green',
  warn: 'text-warn',
  alert: 'text-alert',
};

const statusPill = {
  green: 'bg-green-soft text-green',
  warn: 'bg-warn-soft text-warn',
  alert: 'bg-alert-soft text-alert',
};

const nav = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Inventario', icon: Boxes },
  { label: 'Cronograma', icon: CalendarDays },
  { label: 'Documentos', icon: FileText },
  { label: 'Códigos QR', icon: QrCode },
];

export default function DashboardMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-card overflow-hidden rounded-2xl border border-border/70 shadow-[var(--elevation-4)]">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-alert" />
          <span className="h-2.5 w-2.5 rounded-full bg-warn" />
          <span className="h-2.5 w-2.5 rounded-full bg-green" />
          <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground sm:flex">
            <Search className="h-3 w-3" /> app.novamedingenieria.com
          </span>
          <span className="ml-auto hidden rounded-full bg-background p-1.5 sm:block">
            <Bell className="text-muted-foreground h-3.5 w-3.5" />
          </span>
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="hidden w-44 flex-col gap-0.5 border-r border-border/60 bg-background/40 p-3 md:flex">
            <span className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Gestión
            </span>
            {nav.map((item) => (
              <span
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                  item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-3.5 w-3.5" /> {item.label}
              </span>
            ))}
            <span className="mt-auto flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground">
              <Settings className="h-3.5 w-3.5" /> Configuración
            </span>
          </div>

          {/* main */}
          <div className="flex-1 space-y-4 p-4 md:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading text-sm font-semibold">Panel de gestión</p>
                <p className="text-xs text-muted-foreground">Resumen de tu tecnología biomédica</p>
              </div>
              <span className="bg-secondary/10 text-secondary rounded-full px-3 py-1 text-xs font-semibold">
                Al día
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border/60 bg-background/60 p-3"
                >
                  <s.icon
                    className={`mb-2 h-4 w-4 ${statIcon[s.tone as 'primary' | 'green' | 'warn' | 'alert']}`}
                  />
                  <p className="font-heading text-lg font-bold leading-none md:text-xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{s.label}</p>
                  <p className={`mt-1 flex items-center gap-0.5 text-[10px] font-medium ${statDelta[s.tone as 'primary' | 'green' | 'warn' | 'alert']}`}>
                    <ArrowUpRight className="h-2.5 w-2.5" /> {s.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-border/60">
              <div className="bg-muted/50 flex items-center justify-between border-b border-border/60 px-3 py-2">
                <span className="text-xs font-semibold">Inventario</span>
                <span className="text-primary flex items-center gap-1 text-[10px] font-semibold">
                  <TrendingUp className="h-3 w-3" /> Ver indicadores
                </span>
              </div>
              {rows.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between border-b border-border/40 px-3 py-2 text-xs last:border-0"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{row.name}</p>
                    <p className="text-[10px] text-muted-foreground">{row.dept}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      statusPill[row.tone as 'green' | 'warn' | 'alert']
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
