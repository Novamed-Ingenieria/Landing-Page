import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-dark';
type Size = 'md' | 'lg';

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--elevation-2)] hover:shadow-[var(--elevation-3)] hover:-translate-y-px',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[var(--elevation-2)] hover:shadow-[var(--elevation-3)] hover:-translate-y-px',
  outline:
    'border border-primary/25 text-primary hover:border-primary/50 hover:bg-primary/5',
  'outline-dark':
    'border border-white/30 text-white hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: Props) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}
