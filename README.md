# Novamed Ingeniería S.A.S.

Sitio web de Novamed Ingeniería S.A.S.: software de gestión de tecnología biomédica y servicios de ingeniería biomédica para los sectores salud y veterinario.

## Stack

- **Framework:** [Astro 5](https://astro.build/)
- **UI:** React (vía `@astrojs/react`)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

## Estructura

```
/src
├── components/          # Componentes React (páginas, mockups, agenda)
│   └── mockups/         # Representaciones del software
├── layouts/             # Layout global (SEO + sistema de diseño)
├── lib/                 # Datos centralizados y utilidades
└── pages/               # Rutas Astro (inicio, plataforma, planes, servicios, nosotros, contacto)
/public
└── images/              # Logos e imágenes institucionales
```

## Páginas

- `/` — Inicio
- `/plataforma` — Plataforma
- `/planes` — Planes y precios
- `/servicios` — Servicios especializados
- `/nosotros` — Nosotros
- `/contacto` — Contacto y solicitud de demostración
- `/privacidad` — Política de privacidad

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5000
npm run build    # build de producción
npm run preview  # previsualizar el build
```
