# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Nick Petalas (petalas.dev), built with Vite, TypeScript, and Tailwind CSS. It's deployed to GitHub Pages.

## Essential Commands

### Development
```bash
npm run dev      # Start Vite dev server on http://localhost:5173
npm run preview  # Preview production build locally
```

### Build & Deploy
```bash
npm run build    # TypeScript check + Vite production build
npm run deploy   # Build and deploy to GitHub Pages (deploy-branch)
```

### Code Quality
```bash
npm run lint     # Check code formatting with Prettier
npm run format   # Auto-format code with Prettier
```

## Architecture

The site follows a **component-based architecture** where each section is a self-contained module:

```
src/
├── main.ts          # Entry point - orchestrates all components
├── nav.ts           # Navigation with theme toggle
├── intro.ts         # About section
├── employment.ts    # Work experience timeline
├── projects.ts      # Projects showcase
├── contact.ts       # Contact links
├── footer.ts        # Footer
└── icons/           # SVG icons as TypeScript modules
```

### Key Patterns
1. **Component Pattern**: Each section exports a `setup[Component]` function that takes an HTML element and renders content
2. **Data Co-location**: Static data (employment history, projects) is defined within each component module
3. **Type Safety**: Interfaces define data structures (Position, Project)
4. **Icon System**: Icons are TypeScript modules returning SVG strings

### Styling
- **Tailwind CSS v4** with PostCSS for utility-first styling
- **Catppuccin color scheme** (Mocha dark, Latte light) defined in style.css
- Dark mode toggle stored in localStorage as "darkMode"
- Responsive breakpoints: md (768px), lg (1024px), xl (1280px)

### Deployment
The site deploys to GitHub Pages via:
1. Push to master branch triggers GitHub Actions workflow
2. Builds with Vite, adds CNAME file for petalas.dev domain
3. Deploys to deploy-branch using gh-pages

## Important Notes
- No testing framework is currently set up
- All data is static - no API calls or dynamic content
- The index.html loads main.ts as the entry point
- TypeScript strict mode is enabled - ensure type safety