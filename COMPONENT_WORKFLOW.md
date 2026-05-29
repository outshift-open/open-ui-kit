# Open UI Kit Component Workflow

Use this workflow for every new or updated UI component in `packages/open-ui-kit`.
Follow the steps in order. Do not skip the final review or compact final resume.

## 1. Collect source material

- Read `/Users/rafaelsi/Desktop/helper.css`.
- Check for design exports in `~/Downloads/`:
  - Light: `<ComponentName>.png`
  - Dark: `<ComponentName> - Dark.png`
- If Figma MCP is available, pull metadata, screenshot, and design context from the Figma node.
- If Figma MCP is blocked or rate-limited, use `helper.css` plus exported PNGs as the source of truth.

## 2. Remove MUI overrides

- Check `lightThemeOptions.components` and `darkThemeOptions.components`.
- Remove active or commented-out override blocks for the component.
- Check `src/theme/mui/<name>.tsx`; move visual styles into the component.
- Keep only true theme-level defaults when needed.
- If the theme file becomes empty, delete it and remove imports, spreads, and exports.
- Check `src/theme/style/common.tsx` for helpers only used by this component and delete or refactor them.

## 3. Confirm component structure

- Component styles live in `src/components/<name>/components/elements.tsx`.
- Component logic lives in `src/components/<name>/components/<name>.tsx`.
- Public exports live in `src/components/<name>/index.ts`.
- Stories live in `src/components/<name>/stories/`.
- Tests live in `src/components/<name>/__tests__/`.
- Public component props include useful JSDoc comments that explain what each prop does and when to use it.

## 4. QA light theme

- Compare every CSS property in `elements.tsx` against `helper.css`.
- Resolve every token: token to palette constant to hex.
- Check colors, typography, padding, gaps, sizes, border radius, borders, shadows, margins, opacity, and focus, hover, disabled, active, and error states.

## 5. QA dark theme

- Repeat the same full-property check against dark theme tokens.
- Verify dark colors resolve to the expected dark values.
- Never assume a token is correct just because the light theme works.

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

- Read the light and dark PNGs from `~/Downloads/`.
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
- Report findings first if any exist, ordered by severity with file and line references.
- If no issues are found, say that clearly and mention remaining test or design risks.

## 15. Compact final resume

- End with a short summary of what changed, what was verified, and any remaining risks.
- Keep it compact: mention only the files or areas that matter, focused checks that passed, and blockers that need follow-up.
- Do not repeat the full workflow checklist unless the user asks for it.

## Test plan defaults

- Run only the focused component tests.
- Run Prettier on touched files and focused lint checks where practical.
- Run story or type syntax checks when lightweight enough.
- Avoid full repo test runs unless explicitly requested.
- For visual QA, compare against exported PNGs and `helper.css`.
