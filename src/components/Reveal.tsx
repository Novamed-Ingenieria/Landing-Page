import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  className?: string;
  once?: boolean;
  mount?: boolean;
};

export default function Reveal({
  children,
  className,
}: Props) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
