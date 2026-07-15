# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato sigue las pautas de [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto adopta [Versionado Semántico](https://semver.org/lang/es/).

## [Sin publicar]

### Corregido

- CI de GitHub Pages: se elevó Node de 20 a 22 en `deploy.yml`. pnpm 11 requiere
  Node.js ≥ 22.13 (usa el módulo `node:sqlite`), por lo que el despliegue fallaba
  con `ERR_UNKNOWN_BUILTIN_MODULE`. Alineado también `engines.node` a `>=22.13`.

## [0.1.0] - 2026-07-15

### Añadido

- **Migración a pnpm 11** como gestor de paquetes del proyecto.
  - Campo `packageManager` (`pnpm@11.5.0`) y `engines.node` (`>=20`) en `package.json`.
  - `pnpm-lock.yaml` generado a partir del lockfile de npm existente.
  - `pnpm-workspace.yaml` con la lista `allowBuilds` que autoriza los scripts de
    instalación necesarios (`esbuild`, `protobufjs`); pnpm ≥10 los bloquea por defecto.
- `CLAUDE.md` con guía de arquitectura y comandos para futuras sesiones de Claude Code.
- `CHANGELOG.md` (este archivo).

### Cambiado

- **CI (`.github/workflows/deploy.yml`)** migrado a pnpm:
  - Añadido el paso `pnpm/action-setup@v4` antes de `actions/setup-node`.
  - `cache: npm` → `cache: pnpm`.
  - `npm ci || npm install` → `pnpm install --frozen-lockfile`.
  - `npm run build` → `pnpm build`.
- **`README.md`** reescrito de forma profesional acorde al contenido del sitio:
  - Comandos y requisitos actualizados a pnpm.
  - Añadidas secciones de características, tecnologías, estructura y despliegue.

### Eliminado

- `package-lock.json` (reemplazado por `pnpm-lock.yaml`).
- Imagen de banner genérica de Google AI Studio al inicio del `README.md`.
- Instrucciones de `GEMINI_API_KEY` del `README.md`: no hay integración de IA activa
  en el código actual.

[0.1.0]: https://github.com/dpedraza/Sitio-Abogados/releases/tag/v0.1.0
