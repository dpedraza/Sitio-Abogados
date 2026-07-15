# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

The package manager is **pnpm 11** (pinned via `packageManager` in `package.json`). Do not use `npm`/`yarn` — it would create a competing lockfile. All commands run from this directory (`Sitio-Abogados/`), which holds `package.json`.

- `pnpm install` — install dependencies
- `pnpm dev` — start Vite dev server on port 3000, host 0.0.0.0
- `pnpm build` — production build to `dist/`
- `pnpm preview` — serve the production build locally
- `pnpm lint` — type-check only (`tsc --noEmit`); there is no ESLint or test runner
- `pnpm clean` — remove `dist/` and `server.js`

There are no tests in this project.

### pnpm dependency build scripts

pnpm ≥10 blocks dependency install scripts by default. The allow-list lives in `pnpm-workspace.yaml` under `allowBuilds` (note: pnpm 11 no longer reads a `pnpm` field in `package.json`). `esbuild` **must** stay allowed — it installs the native binary Vite needs; without it the build fails. If a new dependency's postinstall gets blocked, pnpm prints `ERR_PNPM_IGNORED_BUILDS`; decide per package in that file.

## Architecture

Single-page React 19 marketing site for a fictional law firm ("Daniel Mendoza Abogados"), written in Spanish. Built with Vite 6, Tailwind CSS v4, and `motion` (Framer Motion) for transitions. All content is static.

**Navigation is state-driven, not routed.** There is no router. `App.tsx` holds an `activeSection` state (`SectionId` union in `src/types.ts`) and a `switch` in `renderSection()` swaps the visible component. `AnimatePresence` keyed on `activeSection` animates section changes. To add a "page": add its id to the `SectionId` union, create the component, and wire a `case` into the switch. Navigation happens by passing `setActiveSection` down to children — child components trigger navigation by calling it, rather than via links.

Cross-section selection state also lives in `App.tsx` and is threaded through props: `selectedAreaId` (which practice area to show in `Areas`), `selectedPostId` (which blog post in `Blog`), and `isCardOpen` (the digital business card overlay).

**Content lives in `src/data.ts`** as typed arrays (`PRACTICE_AREAS`, `TEAM_MEMBERS`, blog posts), shaped by the interfaces in `src/types.ts`. Icons are stored as `lucide-react` icon-name strings and resolved dynamically in the components. Edit copy here, not in components.

**Theme is defined in CSS, not `tailwind.config`.** Tailwind v4 is configured via the `@theme` block in `src/index.css`. The `prestige-*` color palette (e.g. `prestige-navy`, `prestige-gold`) and the `font-sans`/`font-serif` families come from CSS variables there — add or change design tokens in that block, and they become Tailwind utility classes automatically.

`@` is aliased to the project root (`vite.config.ts` + `tsconfig.json` `paths`).

### The Propuesta ("proposal") tool — `src/components/Propuesta.tsx`

An internal sales tool, not part of the public site. It uses `html2canvas` to capture rendered DOM into a downloadable PNG for showing the client a preview. Because `html2canvas` cannot parse modern CSS `oklch()`/`oklab()` color functions (which Tailwind v4 emits), this file contains deliberate workarounds that force colors to hex/rgb before capture. Preserve that color-sanitizing logic when editing — removing it breaks PNG export.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages. **The build sets `base: '/Sitio-Abogados/'`** (see `vite.config.ts`) so asset paths resolve under the GitHub Pages project subpath; dev uses `base: '/'`. If the repo/Pages path changes, update `base` accordingly.

## Notes

- `@google/genai`, `express`, `dotenv`, and `@types/express` are declared in `package.json` but not currently imported anywhere in `src/`. The `.env.example` / `GEMINI_API_KEY` / `metadata.json` Gemini references are AI Studio scaffolding — there is no live AI integration in the current code.
