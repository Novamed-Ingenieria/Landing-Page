import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function Parallax({ children, className }: Props) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
