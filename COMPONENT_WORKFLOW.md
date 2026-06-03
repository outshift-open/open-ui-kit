# Open UI Kit Component Workflow

**You are a front-end developer building this component library.** Your job is to make the implementation match the design system exactly. The CSS files you receive are the engineering specification — every property is a requirement, not a suggestion. The Figma screenshots confirm your work is correct after the fact.

Use this workflow for every new or updated UI component in `packages/open-ui-kit`.
Follow the steps in order. Do not skip the final review or compact final resume.

---

## 1. Collect source material

- Read the CSS files provided by the user for this component:
  - Light: `<ComponentName>.css`
  - Dark: `<ComponentName dark>.css`
- Read `/Users/rafaelsi/Desktop/helper.css` as a supplementary token reference.
- Read the Figma screenshots from `~/Desktop/open-ui-kit-figma/`:
  - Light: `<ComponentName>.png`
  - Dark: `<ComponentName> - Dark.png`

**Source-of-truth hierarchy:**
1. **CSS files are the primary source of truth** for all style values — tokens, colors, spacing, sizes, borders, typography, and every interactive state. Implement every property exactly as written.
2. **Figma PNGs are the final visual QA check** — after implementing from CSS, read the PNG to catch any remaining discrepancy not captured in the CSS (overall layout, composition, icon placement, proportions). If the PNG reveals a delta, fix it. If the PNG contradicts the CSS, **the CSS wins** unless the discrepancy is clearly a rendering artifact.

### 1b. Parallelise where possible

When a component has independent sub-directories (e.g. `tags/tag/` and `tags/tags/`, `stepper/desktop-stepper/` and `stepper/step/`), process them concurrently. When light and dark theme fixes are independent, make them in one pass. Batch file reads. Run lint and typecheck together (see Step 9). Goal: keep every component pass under 20 minutes.

---

## 2. Remove MUI overrides

- Check `lightThemeOptions.components` and `darkThemeOptions.components`.
- Remove component-specific MUI visual overrides, including active or commented-out override blocks for the component.
- Check `src/theme/mui/<name>.tsx`; move visual styles into the component.
- Keep only true theme-level defaults when needed.
- If the theme file becomes empty, delete it and remove imports, spreads, and exports.
- Check `src/theme/style/common.tsx` for helpers only used by this component and delete or refactor them.

---

## 3. Confirm component structure

- Reusable style helpers live in `src/components/<name>/styles/index.ts`.
- Styled element definitions live in `src/components/<name>/components/elements.tsx` when the component needs `styled()` elements.
- Component logic lives in `src/components/<name>/components/<name>.tsx`.
- Public component props and exported types live in `src/components/<name>/types/index.ts`.
- For touched components, create `types/index.ts` when public props or types currently live in the component file.
- Component files import public props and public types from `../types`.
- Keep private styled-only types inside `elements.tsx` unless they are reused publicly.
- Public exports live in `src/components/<name>/index.ts`.
- `src/components/<name>/index.ts` exports both the component and public types.
- Stories live in `src/components/<name>/stories/`.
- Tests live in `src/components/<name>/__tests__/`.
- Public component props include concise JSDoc comments that explain what each prop does and when to use it, especially non-obvious variants, states, sizes, and callbacks.
- Do not start a repo-wide type migration unless explicitly requested. Apply this structure incrementally to the components touched by the task.

---

## 4. QA light theme

**Implement from the CSS first, then verify with the PNG.**

- Read every CSS property in `<ComponentName>.css` and `helper.css`.
- For each property: resolve the token (`theme.palette.vars.*` → palette constant → hex) and verify the hex matches the CSS reference value exactly.
- Check: colors, typography (family, size, weight, line-height, letter-spacing), padding, gaps, sizes, border-radius, border color/width, shadows, margins, opacity, and all states: focus, hover, disabled, active, error.
- Pay special attention to alignment details — e.g. if CSS says `bottom: 0` for an indicator bar, the element must sit exactly on the baseline, not inside the container.
- After implementing, read `<ComponentName>.png` and confirm the result matches visually.
- Fix every mismatch found. Do not move on with open deltas.

---

## 5. QA dark theme

**Same process as Step 4, using the dark CSS and dark PNG.**

- Read every CSS property in `<ComponentName dark>.css`.
- Verify dark tokens resolve to the expected dark hex values.
- Never assume a token is correct just because the light theme works — verify independently.
- After implementing, read `<ComponentName> - Dark.png` and confirm the result matches visually.
- Fix every mismatch found. Do not move on with open deltas.

---

## 6. Clean pass

- Remove dead code, unused imports, duplicate selectors, redundant rules, and unnecessary fallbacks.
- Keep hover, focus, disabled, active, and error rules only when they represent real design states.
- Avoid hardcoded hex values in component styles unless there is no token and the reason is documented inline.

---

## 7. Align Storybook

Stories must **demonstrate the component's API and states**, not replicate the Figma canvas layout.

- One story per meaningful prop combination or state.
- Use `args` / `argTypes` for knob-driven stories where possible.
- Name stories after states and variants: `Default`, `Disabled`, `WithIcon`, `Sizes`, `ErrorState`, `Loading` — not Figma frame names.
- Use realistic but minimal content (short labels, generic text, a single icon).
- Use the Figma screenshots only as a guide for **which states and variants to cover** — not as a template for story content to copy verbatim.
- Use `DocsHeader`.
- Keep `@open-ui-kit/core` only inside documentation strings such as `importLine`.
- Use local component wrappers from `@/components/*` when they exist. Never import from `@mui/material` directly when a local wrapper exists.
- Story-only visual helpers may use palette constants if needed; production component styles must use tokens.

---

## 8. Write focused tests

- Add tests for token usage in light and dark mode.
- Add tests for variants, sizes, states, and important prop behavior.
- Add regression tests for any bug fixed during QA.
- Keep tests local to the component.

---

## 9. Run focused formatting, lint, and sanity checks

> ⚠️ **NEVER run `yarn test` without `--testPathPattern`. Running the full test suite will exhaust machine memory. Always scope to the component under test.**

- Run Prettier on the touched component files.
- Run lint and typecheck **together in one command**: `yarn lint && yarn typecheck` — one round-trip, not two.
- Run only the component test file: `yarn test --testPathPattern=<component-name>`
- Check the story file for syntax and import errors.
- If running broader checks, report unrelated failures separately and do not treat them as component failures.

---

## 10. Design check

- Read the light and dark PNGs from `~/Desktop/open-ui-kit-figma/`.
- Open the component Storybook docs page, usually:
  `http://localhost:6006/?path=/docs/components-<component-name>--docs`.
- Take a screenshot of the rendered Storybook docs or stories and use it as the implementation render for visual QA.
- Compare implementation against design visually:
  - spacing and alignment
  - text size and weight
  - border position and radius
  - focus, hover, active, disabled, and error states
  - dark mode contrast
- Fix any mismatch before moving on. The CSS values are authoritative — if a PNG appears ambiguous, trust the CSS.

---

## 11. Props override check

- Search for `{...props}`.
- Any explicit prop after `{...props}` must be intentional.
- For MUI `sx`, merge with array syntax so consumer `sx` wins:

  ```tsx
  sx={[
    internalStyles,
    ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
  ]}
  ```

- For plain style objects, spread internal values first and consumer values second.

---

## 12. Internal import check

- Component, story, and test imports must use wrappers from `src/components/` when wrappers exist.
- Examples:
  - `Button` from `@/components/button`
  - `Dialog` from `@/components/dialog`
  - `CopyButton` from `@/components/copy-button`
- Do not import directly from `@mui/material` when a local wrapper exists.
- Do not import from `@open-ui-kit/core` in stories except inside docs strings.

---

## 13. Critical final verification

- Re-read the component files top-to-bottom.
- Explicitly answer:
  - Every color: token or hardcoded?
  - Every spacing and size: matches the CSS reference?
  - Every dark value: resolves correctly?
  - Every import: local wrapper used when available?
  - Every prop spread: consumer overrides preserved?
  - Every public prop: documented clearly?
  - Every public prop or type: exported from `types/` and the component index?
  - Every story: covers a distinct state or prop variant?
- Treat "not sure" as a miss and verify before signing off.

---

## 14. Final code review

- Review the completed diff like a PR reviewer.
- Check best practices:
  - simple component API
  - no unnecessary abstractions
  - no duplicated style logic
  - no theme leakage back into MUI overrides
  - accessible labels and roles where relevant
  - stable class and selector usage
  - no Storybook-only hacks in production code
  - tests cover risky behavior, not implementation trivia
- Fix every finding before moving on. There are no deferred items.
- The component is not done until this review finds nothing to fix.

---

## 15. Compact final resume

- End with a short summary of what changed and what was verified.
- Confirm: lint ✓, typecheck ✓, tests ✓, Storybook matches Figma in both themes ✓, all states correct ✓, all code quality rules met ✓.
- Do not list remaining risks — there should be none. If any exist, go back and fix them first.

---

## Test plan defaults

- ⚠️ Run only focused component tests — never `yarn test` alone.
- Run `yarn lint && yarn typecheck` together.
- Run Prettier on touched files.
- Run story or type syntax checks when lightweight enough.
- Avoid full repo test runs unless explicitly requested.
- For visual QA: implement from CSS first, then verify against the Figma PNGs. Use `helper.css` as a supplementary token reference.
