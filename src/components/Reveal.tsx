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
  y = 24,
  x = 0,
  scale,
  blur = 8,
  className,
  once = true,
  mount = false,
}: Props) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  if (mount) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: y * 0.5, x, scale, filter: `blur(${blur}px)` }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
