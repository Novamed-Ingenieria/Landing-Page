import { motion, useReducedMotion } from 'framer-motion';
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
  delay = 0,
  y = 32,
  x = 0,
  scale = 0.96,
  blur = 8,
  className,
  once = true,
  mount = false,
}: Props) {
  const prefersReduced = useReducedMotion();

  const target = prefersReduced
    ? { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' };

  const initial = prefersReduced
    ? { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 0, y, x, scale, filter: `blur(${blur}px)` };

  return (
    <motion.div
      initial={initial}
      {...(mount
        ? { animate: target }
        : { whileInView: target })}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: prefersReduced ? 0 : 0.8,
        delay: prefersReduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
