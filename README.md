# Mendoza Abogados — Sitio Web y Tarjeta Digital

Sitio web institucional de página única para el estudio jurídico **Daniel Mendoza Abogados**. Presenta las áreas de práctica, el equipo profesional, un blog de novedades legales y una tarjeta de presentación digital interactiva.

> Proyecto de demostración. La firma, los profesionales y los datos de contacto son ficticios.

## Características

- **Navegación de página única** basada en estado, con transiciones fluidas entre secciones (`motion`).
- **Áreas de práctica**: Derecho Penal, Laboral, Civil y Comercial, y de Familia.
- **Equipo profesional y blog** con contenido centralizado y tipado.
- **Tarjeta digital interactiva** accesible desde un botón flotante, con acceso directo a WhatsApp.
- **Herramienta de propuesta** interna que exporta una vista previa del sitio a imagen PNG (`html2canvas`).
- Diseño responsivo con una paleta de marca personalizada ("prestige").

## Tecnologías

- **React 19** + **TypeScript**
- **Vite 6** como bundler y servidor de desarrollo
- **Tailwind CSS v4** (configurado por CSS mediante `@theme`)
- **motion** (Framer Motion) para animaciones
- **lucide-react** para iconografía
- **html2canvas** para la exportación a imagen

## Requisitos previos

- Node.js 22.13 o superior (requerido por pnpm 11)
- [pnpm](https://pnpm.io/) 11 (gestor de paquetes del proyecto). Con Corepack:
  `corepack enable && corepack prepare pnpm@11.5.0 --activate`

## Puesta en marcha

1. Instalar dependencias:
   ```bash
   pnpm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
   La aplicación queda disponible en `http://localhost:3000`.

## Scripts disponibles

| Script          | Descripción                                              |
| --------------- | -------------------------------------------------------- |
| `pnpm dev`      | Servidor de desarrollo (puerto 3000).                    |
| `pnpm build`    | Compilación de producción en `dist/`.                    |
| `pnpm preview`  | Previsualiza localmente la compilación de producción.    |
| `pnpm lint`     | Verificación de tipos con TypeScript (`tsc --noEmit`).   |
| `pnpm clean`    | Elimina `dist/` y `server.js`.                           |

## Estructura del proyecto

```
src/
├── App.tsx            # Estado de navegación y ensamblado de secciones
├── data.ts            # Contenido del sitio (áreas, equipo, blog)
├── types.ts           # Interfaces y tipos compartidos
├── index.css          # Tema de Tailwind v4 y paleta de marca
└── components/        # Secciones y componentes de UI
```

El contenido editorial (áreas de práctica, equipo y publicaciones del blog) se
gestiona en `src/data.ts`. Los colores y tipografías de marca se definen en el
bloque `@theme` de `src/index.css`.

## Despliegue

El sitio se publica automáticamente en **GitHub Pages** al hacer *push* a la rama
`main`, mediante el flujo de trabajo en `.github/workflows/deploy.yml`. La
compilación utiliza la ruta base `/Sitio-Abogados/`; si cambia el nombre del
repositorio o la ruta de publicación, actualizá el valor `base` en
`vite.config.ts`.
