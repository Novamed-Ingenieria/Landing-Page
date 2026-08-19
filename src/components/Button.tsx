import { motion, useReducedMotion } from 'framer-motion';
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
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[var(--elevation-2)]',
  secondary:
    'bg-secondary text-secondary-foreground shadow-[var(--elevation-2)]',
  outline:
    'border border-primary/25 text-primary',
  'outline-dark':
    'border border-white/30 text-white',
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
  const prefersReduced = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      whileHover={prefersReduced ? undefined : { y: -2, boxShadow: 'var(--elevation-3)' }}
      whileTap={prefersReduced ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.a>
  );
}
