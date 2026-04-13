# Nisha Portfolio

A React + Vite + Tailwind CSS portfolio scaffold created inside `react-node-fullstack/portfolio`.

## Setup

1. Navigate to the folder:
   ```bash
   cd react-node-fullstack/portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project structure

- `index.html` - entry HTML file.
- `src/main.tsx` - application bootstrap.
- `src/App.tsx` - top-level page composition.
- `src/components/layout/SectionWrapper.tsx` - reusable section container.
- `src/components/ui/` - shared UI primitives (`Card`, `Badge`).
- `src/components/sections/` - portfolio sections: hero, about, experience, projects, interests.
- `src/index.css` - Tailwind entry styles.
- `tailwind.config.ts` - Tailwind configuration.
- `vite.config.ts` - Vite configuration.

## Architecture principles

- Keep sections small and composable.
- Separate layout wrappers from content.
- Use shared UI primitives for consistent styling.
- Keep styling in Tailwind classes for fast iteration and predictable design.

## Best practices

- Build features as isolated components with clear responsibilities.
- Prefer small presentational components and avoid prop drilling.
- Use `SectionWrapper` for consistent section spacing and headers.
- Keep the project scalable by grouping features under `components/sections`.
- Keep shared visuals under `components/ui` so they can be reused across pages.

## Edge cases to consider

- Mobile layout: ensure components stack cleanly on small screens.
- Text contrast: verify readability in both light and dark surfaces.
- Content overflow: avoid long text blocks by using cards and spacing.
- Accessibility: use semantic HTML and ensure focusable elements are keyboard-friendly.
- Future growth: add a `data` layer if content grows beyond hard-coded sections.

## Thinking like an architect

1. Start with the goal: a professional portfolio that is easy to maintain.
2. Define the content model: hero, summary, experience, projects, interests.
3. Organize by responsibility: layout, UI primitives, and section content.
4. Keep the first version small, then add complexity in a controlled way.
5. Build reusable pieces early so new sections can be added without duplication.
