import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '../lib/data';
import { cn } from '../lib/utils';

export default function Navbar({ currentPath = '/' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], [0.92, 0.98]);
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    [
      '0 16px 32px rgba(12,70,107,0.08), 0 4px 10px rgba(12,70,107,0.06)',
      '0 20px 40px rgba(12,70,107,0.16), 0 6px 12px rgba(12,70,107,0.1)',
    ],
  );
  const navBorderOpacity = useTransform(scrollY, [0, 60], [0, 0.15]);
  const navBorderBottom = useTransform(
    navBorderOpacity,
    (v) => `1px solid rgba(12, 70, 107, ${v})`,
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href.split('#')[0]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <motion.nav
          style={{
            backgroundColor: useTransform(navBg, (v) => `rgba(255,255,255,${v})`),
            boxShadow: navShadow,
            borderBottom: navBorderBottom,
          }}
          className={cn(
            'mx-auto flex items-center justify-between transition-all duration-300 ease-out',
            'h-[72px] px-5 md:h-20 md:px-6',
            'max-w-6xl rounded-2xl backdrop-blur-xl'
          )}
        >
          <a href="/" className="flex items-center" aria-label="Novamed Ingeniería S.A.S. — Ir al inicio">
            <img src="/images/Logo.png" alt="Novamed Ingeniería S.A.S." width="872" height="286" className="h-11 w-auto object-contain md:h-14" />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200',
                  isActive(link.href) ? 'text-primary' : 'text-foreground/70 hover:text-primary',
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="bg-secondary absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={site.appUrl}
              className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-[var(--elevation-2)] transition-[transform,box-shadow,background-color] hover:shadow-[var(--elevation-3)]"
            >
              Iniciar sesión
            </a>
            <a
              href="/demo"
              className="border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 animate-demo-pulse active:scale-[0.97] inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border px-4 py-3 text-xs font-semibold uppercase tracking-wide transition-[transform,background-color,border-color,color]"
            >
                    Solicitar demo
            </a>
          </div>

          <button
            type="button"
            className="bg-muted text-foreground flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-muted/80 lg:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-border/70 bg-background-secondary/98 shadow-[var(--elevation-4)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col p-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors',
                      isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/70 hover:bg-muted hover:text-primary',
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-3 flex flex-col gap-2 border-t border-border/50 pt-3">
                  <a
                    href={site.appUrl}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-wide"
                  >
                    Iniciar sesión
                  </a>
                  <a
                    href="/demo"
                    className="border-primary/30 text-primary hover:bg-primary/5 inline-flex items-center justify-center rounded-lg border px-4 py-3 text-xs font-semibold uppercase tracking-wide"
                  >
              Solicitar demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
