# Open UI Kit Component Workflow

Use this workflow for every new or updated UI component in `packages/open-ui-kit`.
Follow the steps in order. Do not skip the final review or compact final resume.

## 1. Collect source material

- Read the CSS files provided by the user for this component:
  - Light: `<ComponentName>.css`
  - Dark: `<ComponentName dark>.css`
  These are the primary token reference for this component.
- Read `/Users/rafaelsi/Desktop/helper.css` as a supplementary token reference.
- Read the Figma screenshots from `~/Desktop/open-ui-kit-figma/`:
  - Light: `<ComponentName>.png`
  - Dark: `<ComponentName> - Dark.png`
- The PNGs are the visual source of truth. The user-provided CSS files are the token source of truth.
- If Figma MCP is available, pull metadata, screenshot, and design context from the Figma node.

## 2. Remove MUI overrides

- Check `lightThemeOptions.components` and `darkThemeOptions.components`.
- Remove component-specific MUI visual overrides, including active or commented-out override blocks for the component.
- Check `src/theme/mui/<name>.tsx`; move visual styles into the component.
- Keep only true theme-level defaults when needed.
- If the theme file becomes empty, delete it and remove imports, spreads, and exports.
- Check `src/theme/style/common.tsx` for helpers only used by this component and delete or refactor them.

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

## 4. QA light theme

- Compare every CSS property in the component against the user-provided CSS and `helper.css`.
- Resolve every token: token → palette constant → hex. Verify the hex matches the reference.
- Check: colors, typography, padding, gaps, sizes, border radius, borders, shadows, margins, opacity, and all states: focus, hover, disabled, active, error.
- Fix every mismatch found. Do not move on with open deltas.

## 5. QA dark theme

- Repeat the same full-property check for dark theme tokens against the user-provided CSS and `helper.css`.
- Verify dark colors resolve to the expected dark values.
- Never assume a token is correct just because the light theme works.
- Fix every mismatch found. Do not move on with open deltas.

## 6. Clean pass

- Remove dead code, unused imports, duplicate selectors, redundant rules, and unnecessary fallbacks.
- Keep hover, focus, disabled, active, and error rules only when they represent real design states.
- Avoid hardcoded hex values in component styles unless there is no token and the reason is documented.

## 7. Align Storybook

- Story names must match Figma labels.
- Stories must cover every variant and state shown in the design.
- Story content must use the real text, icons, chips, badges, data, and component composition from the design.
- Use `DocsHeader`.
- Keep `@open-ui-kit/core` only inside documentation strings such as `importLine`.
- Use local component wrappers from `@/components/*` when they exist.
- Story-only visual labels or helper styles may use Figma colors if needed; production component styles should use tokens or palette constants.

## 8. Write focused tests

- Add tests for token usage in light and dark mode.
- Add tests for variants, sizes, states, and important prop behavior.
- Add regression tests for any bug fixed during QA.
- Keep tests local to the component.

## 9. Run focused formatting, lint, and sanity checks

- Run Prettier on the touched component files.
- Run a focused lint check on the touched component files when the repo tooling supports it.
- Run only the component test file.
- Do not run the entire test suite.
- Check the story file for syntax and import errors.
- If running broader checks, report unrelated failures separately and do not treat them as component failures.

## 10. Design check

- Read the light and dark PNGs from `~/Desktop/open-ui-kit-figma/`.
- Open the component Storybook docs page, usually:
  `http://localhost:6006/?path=/docs/components-<component-name>--docs`.
- Take a screenshot of the rendered Storybook docs or stories and use it as the implementation render for visual QA.
- Compare implementation against design visually:
  - spacing
  - alignment
  - text size and weight
  - border position
  - focus, hover, active, disabled, and error states
  - dark mode contrast
- Fix any mismatch before moving on.

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

## 12. Internal import check

- Component, story, and test imports must use wrappers from `src/components/` when wrappers exist.
- Examples:
  - `Button` from `@/components/button`
  - `Dialog` from `@/components/dialog`
  - `CopyButton` from `@/components/copy-button`
- Do not import directly from `@mui/material` when a local wrapper exists.
- Do not import from `@open-ui-kit/core` in stories except inside docs strings.

## 13. Critical final verification

- Re-read the component files top-to-bottom.
- Explicitly answer:
  - Every color: token or hardcoded?
  - Every spacing and size: matches `helper.css`?
  - Every dark value: resolves correctly?
  - Every import: local wrapper used when available?
  - Every prop spread: consumer overrides preserved?
  - Every public prop: documented clearly?
  - Every public prop or type: exported from `types/` and the component index?
  - Every story: matches the design examples?
- Treat "not sure" as a miss and verify before signing off.

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

## 15. Compact final resume

- End with a short summary of what changed and what was verified.
- Confirm: lint ✓, typecheck ✓, tests ✓, Storybook matches Figma in both themes ✓, all states correct ✓, all code quality rules met ✓.
- Do not list remaining risks — there should be none. If any exist, go back and fix them first.

## Test plan defaults

- Run only the focused component tests.
- Run Prettier on touched files and focused lint checks where practical.
- Run story or type syntax checks when lightweight enough.
- Avoid full repo test runs unless explicitly requested.
- For visual QA, compare the Storybook screenshot against the exported PNGs in `~/Desktop/open-ui-kit-figma/` and the user-provided CSS. Use `helper.css` as a supplementary token reference.
