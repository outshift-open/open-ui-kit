# Branch summary: Storybook fixes (by topic)

Compared to **`main`** (merge-base `e443f8e8eba20607d92e8f81b4dcbf06882a24a1`). This file tracks **committed** history on the branch and **current uncommitted** workspace changes.

---

## Dependencies and versions

- **Storybook** — **`10.3.5`** (`storybook`, `@storybook/react-vite`, `@storybook/addon-docs`, `@storybook/addon-themes`, `@storybook/addon-vitest`).
- **ESLint** — `eslint-plugin-storybook` aligned to **10.3.5**.
- **`yarn.lock`** — May show large churn when dependencies move; regenerate with the repo’s Yarn version after edits.

---

## Theme, breakpoints, and layout (library)

- **Single breakpoint source** — `packages/open-ui-kit/src/theme/common.tsx` exports shared `breakpoints` (`xs` … `xxl` with numeric values).
- **Type augmentation** — `packages/open-ui-kit/src/types/theme.ts` extends `BreakpointOverrides` so tokens match the theme (e.g. **`xs`** / **`sm`** where needed).
- **Layout / templates** — Stories under `templates/` follow the same CSF import rules as components.

---

## Storybook application config (`.storybook/main.ts`)

- **Addon path resolution** — `getAbsolutePath` walks up from `require.resolve(packageName)` until a `package.json` **`name`** matches (packages with restrictive **`exports`** may not expose `./package.json`).
- **Addons** — Themes, docs, Vitest integration (`@storybook/addon-vitest`).
- **Framework** — `@storybook/react-vite`.
- **TypeScript** — `typescript.check: true` so Storybook runs typechecking; **`react-docgen-typescript`** with `tsconfigPath: ./tsconfig.storybook.json` for docgen and `.storybook` inclusion.
- **Vite** — `vite-tsconfig-paths` uses `tsconfig.storybook.json`; `@` → `src` alias.

---

## Storybook preview, UI chrome, and decorators

- **Types** — `Preview` from **`@storybook/react-vite`**.
- **MUI** — `withThemeFromJSXProvider` (`@storybook/addon-themes`) with **`ThemeProvider`**, **`CssBaseline`**, **`lightTheme` / `darkTheme`** from the library.
- **Screenshots** — **`@prantlf/storycap`** (`withScreenshot`).
- **Frozen dates** — **`./mock-date-decorator`** (inlined `Decorator` using `mockdate`; replaces a separate `storybook-mock-date-decorator` dependency for Storybook 10 peer ranges).
- **Docs shell** — `docs-header` lives as **`.storybook/components/docs-header.stories.tsx`**; older **`docs-header.stories-src.tsx`** removed in favor of that filename.

---

## Stories, MDX, and imports

- **CSF** — `Meta` / `StoryObj` (and similar) from **`@storybook/react-vite`** across component, chart, and template stories.
- **MDX** — `.storybook/stories/*.mdx` updated for current addon-docs usage.
- **Interaction helpers** — `fn` from **`storybook/test`** where needed.

### Import migration cheat sheet

| Before (legacy)        | After (this branch)              |
|------------------------|----------------------------------|
| `@storybook/react`     | `@storybook/react-vite`          |
| `@storybook/test` (`fn`) | `storybook/test`              |
| `storybook-mock-date-decorator` (package) | Local `./mock-date-decorator` |

---

## Package scripts (tooling)

When present in `packages/open-ui-kit/package.json`:

- **`typecheck`** — `tsc --noEmit` for `tsconfig.json` and `tsconfig.storybook.json`.
- **`lint`** — ESLint over `src`, `.storybook`, and Vitest config/shims (`vitest.config.ts`, `vitest.shims.d.ts`).

Root may expose **`yarn typecheck`** via Turbo if configured.

---

## Uncommitted workspace (current)

**~76 files** touched vs `HEAD` (see `git diff --stat`). Grouped by topic:

| Topic | What changed |
|--------|----------------|
| **Storybook shell** | `main.ts`, `preview.ts`, MDX under `.storybook/stories/`, delete `docs-header.stories-src.tsx`, add `docs-header.stories.tsx`, add `mock-date-decorator.ts`. |
| **Charts** | `common/types.ts`, `chart-type-components.ts` (untracked), `charts/index.ts`, bar/donut/gauge/horizontal-bar/line/chart-widget/bar-graph + line tooltip/styles. |
| **Table** | `table/styles/index.ts`, `components/table.tsx`, `types/index.ts`, `table.stories.tsx`. |
| **Stories (bulk)** | Most `*.stories.tsx` under `src/components`, `src/templates` — CSF import / small fixes. |
| **Components (misc)** | e.g. `code-block`, `date-time/styles`, `autocomplete-tree/styles`, `favorite-button`, `list/list.stories.tsx` (e.g. **GridLegacy** for MUI v7). |
| **Theme** | `src/theme/common.tsx`, `src/types/theme.ts`. |
| **This doc** | `branch-storybook-fixes-summary.md` (untracked until committed). |

Suggested commit grouping (optional): (1) mass story + MDX + preview, (2) charts + types, (3) table types, (4) theme + misc components, (5) Storybook main + docs header + mock-date.

To re-sync after commits: `git diff main...HEAD --stat`.

---

*Merge-base with `main`: `e443f8e8eba20607d92e8f81b4dcbf06882a24a1`. Current `HEAD`: `795846c` (when this file was last updated).*
