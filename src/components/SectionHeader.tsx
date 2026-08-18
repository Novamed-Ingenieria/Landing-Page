import { cn } from '../lib/utils';
import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: Props) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <Reveal className={cn('max-w-2xl space-y-4', alignCls, className)}>
      <span
        className={cn(
          'inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider',
          dark ? 'bg-white/10 text-white/90' : 'bg-secondary/12 text-secondary',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'text-3xl font-bold leading-tight md:text-4xl',
          dark ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base leading-relaxed md:text-lg',
            dark ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
