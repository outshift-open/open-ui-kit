# Open UI Kit — Component QA Plan

## Purpose

**You are a front-end developer building this component library.** Your job is to make the implementation match the design system exactly. The CSS files are your engineering specification — every property is a requirement. The Figma screenshots confirm your work after the fact.

Visual and functional QA of every component in the library against the official Figma designs.
The CSS files (`<Component>.css` / `<Component dark>.css`) are the primary source of truth for all style values.
The Figma screenshots are the final visual QA check.
Where no Figma screenshot exists for a component, the existing library style tokens are authoritative.

> **How the loop works:**
> 1. Codex runs through the queue autonomously — no interaction needed between components
> 2. For Tier 0 Foundations: CSS and screenshots are already in `~/Desktop/open-ui-kit-figma/` — Codex reads them directly
> 3. For Tier 1+: Codex looks for `<ComponentName>.css` and `<ComponentName dark>.css` in `~/Desktop/open-ui-kit-figma/`
> 4. Every bug, delta, and risk found must be fixed before moving on. No deferred items. One pass, fully done.
> 5. Codex only pauses and asks the user when: a required CSS file or screenshot is missing, or a decision requires human judgement
>
> **Only stop and ask the user when:**
> - A required CSS file or Figma PNG is missing — state exactly which file and wait
> - A fix requires a design decision that cannot be inferred from the CSS or Figma screenshots
> - Never ask for confirmation to proceed, never ask "should I continue?" — just keep going

> **Scope exclusions:** Charts (`src/charts/`) and Templates (`src/templates/`) are out of scope.

---

## Ground Rules

### Visual fidelity
1. **CSS files are the primary source of truth.** The `<Component>.css` and `<Component dark>.css` files define every style value — colors, spacing, border-radius, typography, icon sizes, shadows, and all interactive states. Implement from the CSS exactly. Resolve every token to hex and verify it matches. When in doubt, the CSS wins.
   **Figma screenshots are the final visual QA check.** After implementing from CSS, read the PNG to catch any remaining discrepancy (layout, composition, proportions). If the PNG reveals a delta, fix it. If a PNG contradicts the CSS, **the CSS wins** unless it is clearly a rendering artifact.
   > *Example:* If the CSS says `bottom: 0` for a tab indicator bar, the bar must sit flush with the baseline — trust the CSS value, do not rely on a casual reading of the PNG.
2. **Both themes are mandatory.** Every component must be verified in light mode AND dark mode. A component is not done until both pass.
3. **Compare in Storybook.** Start Storybook (`yarn storybook` → `http://localhost:6006`). Use the docs URL pattern: `http://localhost:6006/?path=/docs/components-<name>--docs`. Screenshot the canvas and diff against the Figma PNG side-by-side.
4. **Check every state shown in Figma.** Default, hover, focus, active, disabled, error/negative, loading, empty, selected, indeterminate — if the Figma shows it, it must be verified.
5. **Check every variant and size.** All prop combinations shown in Figma (size: small/medium/large, variant: primary/secondary/ghost/danger, etc.) must match.

### Code quality — run after every fix
6. **Lint must pass clean.** Run `yarn lint` after any change. Zero errors, zero warnings allowed (the project uses `--max-warnings=0`).
7. **TypeScript must pass clean.** Run `yarn typecheck` after any change.
8. **Token compliance.** All colors must come from `theme.palette.vars.*` tokens. No hard-coded hex values (`#abc123`), no raw MUI palette references (`theme.palette.primary.main`). Verify in source code.
9. **No MUI direct component imports in stories.** Components must be imported from `src/` wrappers, never from `@mui/material` directly (e.g. use `@/components/button`, not `@mui/material/Button`).
10. **Best practices checklist per component source file:**
    - No inline styles where a token/sx prop suffices
    - `sx` prop accepts array merge: `sx={[internalStyles, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}` so consumer `sx` always wins
    - No empty functions `() => {}` without an eslint-disable comment
    - No unused imports
    - No `any` types without justification
    - Props forwarded via `...rest` where appropriate
    - `aria-label` on icon-only interactive elements
11. **CSS files are provided by the user per component** as `<ComponentName>.css` (light) and `<ComponentName dark>.css` (dark). Use `/Users/rafaelsi/Desktop/helper.css` as a supplementary token reference.
12. **Stories demonstrate the component API, not the Figma layout.** Each story covers one meaningful prop state or variant. Use `args`/`argTypes` for knob-driven controls. Name stories after states and variants: `Default`, `Disabled`, `Error`, `WithIcon`, `Sizes` — not Figma frame names. Use the Figma PNG only as a guide for which states to cover, not as content to copy verbatim. Use realistic but minimal content.

---

## Figma Screenshot Inventory

All files live in `~/Desktop/open-ui-kit-figma/`. Format: `<Component>.png` (light), `<Component> - Dark.png` (dark).

| Component | Light PNG | Dark PNG |
|---|---|---|
| Accordion | `Accordion.png` | `Accordion - Dark.png` |
| Activity Timeline | `Activity timeline.png` | `Activity timeline - Dark.png` |
| Anchor Link Menu | `Anchor link menu.png` | `Anchor link menu - Dark.png` |
| Avatar | `Avatar.png` | `Avatar - Dark.png` |
| Badge & Notification | `Badge & Notification.png` | `Badge & Notification - Dark.png` |
| Banner | `Banner.png` | `Banner - Dark.png` |
| Breadcrumbs | `Breadcrumb.png` | `Breadcrumb - Dark.png` |
| Button | `Button.png` | `Button - Dark.png` |
| Card | `Cards.png` | `Cards - Dark.png` |
| Checkbox | `Checkbox.png` | `Checkbox - Dark.png` |
| Code Block | `Code block.png` | `Code block - Dark.png` |
| Date & Time Picker | `Date & time picker.png` | `Date & time picker - Dark.png` |
| Dialog | `Dialog.png` | `Dialog - Dark.png` |
| Divider | `Divider.png` | `Divider - Dark.png` |
| Empty State | `Empty State.png` | `Empty State - Dark.png` |
| Filters | `Filters.png` | `Filters - Dark.png` |
| Floating Button | `Floating button.png` | `Floating button - Dark.png` |
| Footer | *(light missing)* | `Footer - Product Dark.png` |
| Header | `Header - Product Light.png` | `Header - Product Dark.png` |
| Input Field | `Input Field.png` | `Input Field - Dark.png` |
| Key Value Pairs | `Key value pairs.png` | `Key value pairs - dark.png` |
| Link | `Link.png` / `Link (1).png` | *(dark missing)* |
| Loading States | `Loading States.png` / `Loading States (1).png` | *(dark missing)* |
| Menu | `Menu.png` | `Menu - Dark.png` |
| Message | `Message.png` | `Message - Dark.png` |
| Navigation | `Navigation.png` | `Navigation - Dark.png` |
| Nested Menu | `Nested Menu.png` | `Nested Menu - Dark.png` |
| Pagination | `Pagination.png` | `Pagination - Dark.png` |
| Picker | `Picker.png` | `Picker - Dark.png` |
| Popover | `Popover.png` | `Popover - Dark.png` |
| Radio Button | `Radio button.png` | `Radio button - Dark.png` |
| Search Input | `Search input.png` | `Search input - dark.png` |
| Select | `Select.png` | `Select - Dark.png` |
| Side Drawer | `Side Drawer.png` | `Side Drawer - dark.png` |
| Slider | `Slider.png` | `Slider - Dark.png` |
| Stepper | `Stepper.png` | `Stepper - Dark.png` |
| Table | `Tables.png` | `Tables - Dark.png` |
| Tabs | `Tabs.png` | `Tabs - Dark.png` |
| Tags | `Tag.png` | `Tag - Dark.png` |
| Toast | `Toast.png` | `Toast - Dark.png` |
| Toggle | `Toggle.png` | `Toggle - Dark.png` |
| Tooltip | `Tooltip.png` | `Tooltip - Dark.png` |
| Upload | `Upload.png` | `Upload - Dark.png` |
| View Switcher | `View switcher.png` | `View switcher - Dark.png` |
| Backdrop | `_backdrop.png` | *(dark missing)* |

**No Figma screenshot — use library token style as reference:**
`copy-button`, `elevation`, `gradients`, `icon`, `indicator-badge`, `list`, `loading-error-state`,
`overflow-tooltip`, `path-display`, `scroll-area`, `severity-badge`, `severity-badge-label`,
`severity-bar`, `skeleton`, `spinner`, `typography`, `widget`

---

## Per-Component QA Checklist

For each component, complete every item. Mark `[x]` when done, `[!]` when a bug is found (describe inline).

### Inspection Protocol (run for every component)

```
⚠️  BEFORE STARTING: verify all required files exist.
  - If a Figma PNG is listed for this component and is missing → STOP. Tell the user which file is
    missing and wait. Do not proceed without it.
  - If a CSS file is expected and has not been provided → STOP. Ask the user for it and wait.
  - Only continue once every required file is confirmed present.

⚡ PARALLELISE WHERE SAFE.
  When a component has independent sub-directories (e.g. tags/tag/ and tags/tags/), process them
  concurrently. Read CSS and PNG files in parallel. Run `yarn lint && yarn typecheck` as one command.
  Goal: keep each component pass under 20 minutes.

STEP 1 — CSS IMPLEMENTATION (primary — do this before opening Storybook)
  a. Read <ComponentName>.css — this is the specification. Implement every property exactly.
  b. Read <ComponentName dark>.css — implement every dark-theme property.
  c. Read helper.css for supplementary token resolution.
  d. Resolve every token: theme.palette.vars.* → palette constant → hex. Verify the hex matches.
  e. Check: colors, typography (family, size, weight, line-height, letter-spacing), padding, gaps,
     sizes, border-radius, border color/width, shadows, margins, opacity, and all states:
     focus, hover, disabled, active, error.
  f. Pay attention to alignment — e.g. if CSS says `bottom: 0` for an indicator, the element must
     sit exactly on the baseline. Trust the CSS value, not a visual impression.
  g. Fix every delta before proceeding to Step 2.

STEP 2 — VISUAL QA (final check — after CSS implementation is complete)
  a. Open Storybook at http://localhost:6006/?path=/docs/components-<name>--docs
  b. Set theme to light mode; screenshot the canvas
  c. Read ~/Desktop/open-ui-kit-figma/<Component>.png (Figma light reference)
  d. Compare — if anything in the screenshot differs from the implementation, fix it
  e. Switch to dark mode; screenshot the canvas
  f. Read ~/Desktop/open-ui-kit-figma/<Component> - Dark.png (Figma dark reference)
  g. Compare and fix any remaining delta
  h. CSS values are authoritative — if a PNG appears ambiguous, trust the CSS
  Pixel-by-pixel check list:
     - Background color (exact token match)
     - Text color, font family, size, weight, line-height, letter-spacing
     - Border color, width, radius (all four corners)
     - Padding, margin, gap, spacing between elements
     - Icon size, color, alignment
     - Shadow / elevation depth
     - Focus ring color and width
     - Placeholder text color
     - Scrollbar styling (if applicable)

STEP 3 — STATE COVERAGE
  For every state shown in the Figma screenshots, verify in Storybook:
  - Default / rest
  - Hover (use DevTools :hover force-state if needed)
  - Focus / focus-visible
  - Active / pressed
  - Disabled (visual muting + pointer-events:none)
  - Error / negative / destructive
  - Loading / skeleton
  - Selected / checked / indeterminate
  - Empty state (if applicable)

STEP 4 — FUNCTIONALITY
  - Click, keyboard (Tab, Enter, Space, Escape, Arrow keys) all work correctly
  - onChange / onClose / onSelect / other callbacks fire with correct arguments
  - Controlled and uncontrolled modes work (if both are supported)
  - Animations/transitions are smooth and match Figma motion intent
  - Tooltips / popovers appear at correct position (check all arrow positions)
  - Overflow text truncates with tooltip as expected
  - Forms: required validation, error state display, accessible error messages

STEP 4b — RESPONSIVENESS
  The library breakpoints are defined in src/theme/style/common.tsx:
    xs: 0px | sm: 600px | md: 1024px | lg: 1440px | xl: 1920px | xxl: 2560px

  Resize the Storybook canvas / browser window and verify at these widths:
  - xs/mobile:  360px  (below sm breakpoint)
  - sm/tablet:  600px  (sm breakpoint)
  - md/desktop: 1024px (md breakpoint)
  - lg/wide:    1440px (lg breakpoint)
  Check:
  - No content overflows its container or gets clipped
  - No horizontal scrollbar appears unexpectedly
  - Layout reflows correctly (stacked vs side-by-side, truncation, wrapping)
  - Touch targets are at least 44×44px on mobile widths
  - Text remains legible — no font size below 12px
  - Components that have mobile/desktop variants (e.g. stepper) switch at the correct breakpoint
  - Fix any layout break before moving on

STEP 5 — ACCESSIBILITY
  - All interactive elements are keyboard-reachable
  - Focus order is logical
  - Buttons and inputs have accessible names (aria-label or visible label)
  - Color is not the sole means of conveying state (icon or text also present)
  - Screen reader: role and state announced correctly (use browser a11y tree)

STEP 6 — CODE QUALITY
  a. Open ALL files in the component directory recursively — including every sub-directory
     (e.g. tags/tag/, tags/tags/, stepper/desktop-stepper/, stepper/step/, etc.).
     Every sub-component is in scope for this QA pass.
  b. Verify all colors use theme.palette.vars.* — no hard-coded hex
  c. Verify sx array merge pattern (consumer sx always wins)
  d. No empty functions without eslint-disable comment
  e. Check src/theme/mui/ for a matching override file (e.g. src/theme/mui/button.tsx for button).
     If one exists: move any visual styleOverrides into the local component, then delete them from
     the MUI override file. If the file is empty after removal, delete it and remove its
     import/spread from src/theme/mui/index.ts. Only theme-level defaultProps are acceptable
     in MUI overrides — visual styles belong in the component.
  e. No unused imports or variables
  f. Props forwarded correctly; aria-label on icon-only elements
  g. Run: yarn lint && yarn typecheck   → both must exit 0, 0 warnings (one command, one round-trip)
  h. ⚠️  Run ONLY: yarn test --testPathPattern=<component-name>  → all tests pass
     NEVER run `yarn test` without --testPathPattern — it will exhaust machine memory.

STEP 7 — FIX EVERYTHING, THEN MARK DONE
  - Every delta, bug, and risk found in steps 1–6 MUST be fixed before this component is done.
  - No deferred items. No "remaining risks". Fix it now.
  - If a fix requires CSS values not yet provided, ask the user before proceeding.
  - Once all checks pass with zero issues → mark [x] in the queue.
  - A component is done when: lint exit 0, typecheck exit 0, all tests pass,
    Storybook matches Figma in both themes, all states correct, all code quality
    rules met. Nothing less.
```

---

## Component QA Queue

**Workflow per item — fully autonomous, one pass, fully done:**
1. Codex picks up the next item from the queue
2. Codex looks for the CSS files in `~/Desktop/open-ui-kit-figma/` — if missing, stops and asks the user, otherwise proceeds immediately
3. Codex runs the full QA + fix cycle (`COMPONENT_WORKFLOW.md`) — fixes every issue found, no exceptions
4. Codex confirms the component is 100% clean: lint ✓, typecheck ✓, tests ✓, Storybook matches Figma ✓
5. Moves to the next item automatically — no permission needed

**Only pause and ask the user when a required file is missing or a design decision cannot be inferred.**

Mark `[x]` when 100% done. There is no `[!]` — everything gets fixed in the same pass.

---

### Tier 0 — Foundations (start here)

CSS files and screenshots for Foundations are already in `~/Desktop/open-ui-kit-figma/`. Codex reads them directly — no need for the user to provide them. Apply the full inspection protocol and `COMPONENT_WORKFLOW.md` fix steps. Also covers all `src/` directories outside `components/` that are in scope.

- [x] **Colors** — `src/theme/style/color-palette.ts` + `src/colors/` + `theme.palette.vars.*`
  - CSS: `~/Desktop/open-ui-kit-figma/colors.css`
  - Screenshots: `~/Desktop/open-ui-kit-figma/Outshift Palette.png` / `Styles.png`
  - All palette constants resolve to correct hex in both themes
  - All `theme.palette.vars.*` tokens wired in light and dark `themeOptions`
  - No orphaned constants (defined but never referenced as tokens)
  - `src/colors/color-palette-section.tsx` and `colors.mdx` render correctly
  - Story covers the full color ramp for each palette group in both themes

- [x] **Elevation** — `src/components/elevation/`
  - CSS: `~/Desktop/open-ui-kit-figma/styles.css`
  - Screenshots: `~/Desktop/open-ui-kit-figma/Styles.png`
  - Shadow scale matches design system elevation levels
  - Each level renders correctly in light and dark mode
  - Shadow values via tokens — no hard-coded values
  - Story covers all levels

- [x] **Gradients** — `src/components/gradients/` + `src/colors/gradient-section.tsx`
  - CSS: `~/Desktop/open-ui-kit-figma/graphics.css`
  - Screenshots: `~/Desktop/open-ui-kit-figma/Graphics.png`
  - All gradient definitions use palette constants or tokens — no hard-coded hex
  - `src/colors/gradients.mdx` renders correctly
  - Story renders each gradient in both themes without errors

- [x] **Iconography** — `src/custom-icons/` (885 icons) + `src/icons/` + `src/components/icon/`
  - CSS: `~/Desktop/open-ui-kit-figma/icons.css`
  - Screenshots: `~/Desktop/open-ui-kit-figma/Icons.png` / `Icons.svg` / `Graphics.png`
  - Every icon in `src/custom-icons/` must use `fill="currentColor"` — no hard-coded hex fills
  - Every icon forwards `SvgIconProps` via `{...props}` so consumers can override size and color
  - Icon sizing via `fontSize` prop inheritance, not fixed px width/height
  - All custom icons exported from `src/custom-icons/index.ts` (or equivalent barrel)
  - All custom icons importable from the library's public barrel
  - `src/icons/icon-gallery.tsx` and `icons.mdx` render the full gallery without errors
  - Story covers: size variants (small/medium/large), color inheritance via `sx` and `color` prop, both themes

- [x] **Typography** — `src/typography/` + `src/fonts/` + `src/components/typography/`
  - CSS: `~/Desktop/open-ui-kit-figma/typography.css`
  - Screenshots: `~/Desktop/open-ui-kit-figma/Typography Styles - Venture Theme.png`
  - Font files in `src/fonts/` (Inter + SharpSans) load correctly — no 404s in browser network tab
  - All MUI `Typography` variant props exposed: `h1`–`h6`, `body1`, `body2`, `subtitle1`, `subtitle2`, `caption`, `overline`, `button`
  - Font family, size, weight, line-height, letter-spacing match the type scale in the CSS
  - `src/typography/typography-row.tsx` and `typography.mdx` render correctly
  - Component exported from the public barrel
  - `sx` array merge pattern applied
  - Story covers every variant in both light and dark mode

- [x] **Theme** — `src/theme/` (light, dark, MUI overrides, style tokens)
  - CSS: `~/Desktop/open-ui-kit-figma/colors.css` + `styles.css` (supplementary)
  - `src/theme/light/` and `src/theme/dark/` — all `themeOptions` wired correctly
  - `src/theme/style/` — all token files (`color-palette.ts`, `common.tsx`, `gradients.ts`, etc.) are consistent and up to date
  - `src/theme-provider/` — ThemeProvider wraps correctly, mode toggle works
  - **`src/theme/mui/` — audit every file. The goal is zero visual overrides here.**
    Current files: `backdrop.tsx`, `button.tsx`, `circular-progress.tsx`, `input.tsx`, `list.tsx`,
    `radio.tsx`, `skeleton.tsx`, `snack-bar.tsx`, `switch.tsx`, `tab.tsx`, `tabs.tsx`, `tooltip.tsx`
    For each file ask: does the component have a local wrapper in `src/components/`?
    - YES → move the visual styles into the local wrapper, delete them from the MUI override file.
      If the MUI file becomes empty (or only has `defaultProps` that are truly theme-level), delete it
      and remove its import/spread from `index.ts`.
    - NO → keep the override but flag it for future component migration.
    Only `defaultProps` that set library-wide defaults (e.g. `disableRipple: true`) are acceptable
    in MUI overrides. Visual `styleOverrides` belong in component files.

- [x] **Illustrations** — `src/custom-illustrations/`
  - All illustration components render without errors in both themes
  - SVG fills use `currentColor` or explicit theme tokens — no hard-coded hex
  - All illustrations are importable from their `index.ts`
  - Illustrations used in `empty-state` match the Figma empty-state screenshots

- [x] **Common / Shared** — `src/common/` + `src/types/`
  - `src/common/constants.ts`, `types.ts`, `utils/` — no unused exports, no stale types
  - All shared types and utilities used across components are correctly typed
  - `yarn typecheck` passes with no errors originating from these files

---

### Tier 1 — Core interactive

- [x] **accordion** — `Accordion.png` / `Accordion - Dark.png`
  - Collapsed / expanded states, chevron rotation, border and divider

- [x] **button** — `Button.png` / `Button - Dark.png`
  - Variants: primary, secondary, ghost, danger; sizes: small/medium/large
  - States: default, hover, focus, active, disabled, loading

- [x] **checkbox** — `Checkbox.png` / `Checkbox - Dark.png`
  - States: unchecked, checked, indeterminate, disabled; label alignment

- [x] **input-field** — `Input Field.png` / `Input Field - Dark.png`
  - States: default, hover, focus, error, disabled
  - Label, helper text, error text; border tokens

- [x] **radio** — `Radio button.png` / `Radio button - Dark.png`
  - States: unselected, selected, disabled; label via FormControlLabel

- [x] **search-input** — `Search input.png` / `Search input - dark.png`
  - Clear button, focus ring, placeholder color

- [x] **select** — `Select.png` / `Select - Dark.png`
  - Closed and open states; default, hover, active, disabled, error

- [x] **slider** — `Slider.png` / `Slider - Dark.png`
  - Track, thumb, value label; default, hover, active, disabled; range variant

- [x] **tabs** — `Tabs.png` / `Tabs - Dark.png`
  - Main / subTab / toggleTab; default, hover, selected, disabled, loading; indicator

- [x] **toggle** — `Toggle.png` / `Toggle - Dark.png`
  - On/off, disabled, hover; track and thumb color tokens

---

### Tier 2 — Overlay / modal

- [x] **actions-dialog** — `Dialog.png` / `Dialog - Dark.png`
  - Title, body, actions layout; close button; sizes

- [x] **dialog** — `Dialog.png` / `Dialog - Dark.png`
  - Title, body, actions layout; close button; backdrop opacity

- [x] **menu** — `Menu.png` / `Menu - Dark.png`
  - Item hover, dividers, disabled item; shadow token (dark-aware); sizes

- [x] **nested-menu** — `Nested Menu.png` / `Nested Menu - Dark.png`
  - Full tree: parent, child, grandchild; submenu trigger; shadow token (dark-aware)

- [x] **popover** — `Popover.png` / `Popover - Dark.png`
  - Arrow at all 6 positions; paper background token; shadow; close button; title/body/actions slots

- [x] **side-drawer** — `Side Drawer.png` / `Side Drawer - dark.png`
  - Header, content, footer layout; close, favorite, nav buttons; severity bar

- [x] **toast** — `Toast.png` / `Toast - Dark.png`
  - Variants: default, success, error, warning, info; close button; action button

- [x] **tooltip** — `Tooltip.png` / `Tooltip - Dark.png`
  - Background and text colors; arrow; all placement positions

---

### Tier 3 — Display / layout

- [x] **avatar** — `Avatar.png` / `Avatar - Dark.png`
  - Sizes, fallback initials, image variant

- [x] **backdrop** — `_backdrop.png` *(light-only QA; no dark CSS/PNG exists)*
  - Opacity, z-index layering

- [x] **badge** — `Badge & Notification.png` / `Badge & Notification - Dark.png`
  - Dot vs count variants; position; colors per severity

- [x] **banner** — `Banner.png` / `Banner - Dark.png`
  - Variants: info, warning, error, success; dismiss button

- [x] **breadcrumbs** — `Breadcrumb.png` / `Breadcrumb - Dark.png`
  - Separator, active vs inactive link, truncation

- [x] **card** — `Cards.png` / `Cards - Dark.png`
  - Background, border-radius, shadow; header/content/actions slots

- [x] **copy-button** — *(no Figma PNG — token audit + story check)*
  - Icon, tooltip, success state; token compliance

- [x] **divider** — `Divider.png` / `Divider - Dark.png`
  - Horizontal / vertical; color token

- [x] **empty-state** — `Empty State.png` / `Empty State - Dark.png`
  - Illustration; variants: info, error, no-data; CTA button

- [x] **indicator-badge** — *(no Figma PNG — token audit + story check)*
  - Dot color, position; token compliance

- [x] **link** — `Link.png` / `Link (1).png` *(dark missing)*
  - Default, hover, visited, disabled; underline behavior

- [x] **loading-states** — `Loading States.png` / `Loading States (1).png` *(dark missing)*
  - Spinner colors, skeleton wave animation, overlay variant

- [x] **message** — `Message.png` / `Message - Dark.png`
  - Variants: info, warning, error, success; icon alignment; dismiss

- [x] **pagination** — `Pagination.png` / `Pagination - Dark.png`
  - Active page highlight; prev/next disabled; icon color token `controlIconDefault`

- [x] **severity-badge** — *(no Figma PNG — token audit + story check)*
  - Color per severity level; token compliance

- [x] **severity-badge-label** — *(no Figma PNG — token audit + story check)*
  - Color per severity level; token compliance

- [x] **severity-bar** — *(no Figma PNG — token audit + story check)*
  - Color per severity level; token compliance

- [x] **stepper** — `Stepper.png` / `Stepper - Dark.png`
  - Sub-components: `desktop-stepper/`, `mobile-stepper/`, `step/`, `step-label/` — all in scope
  - Active, completed, upcoming step styles; connector line; desktop vs mobile layouts

- [x] **tags** — `Tag.png` / `Tag - Dark.png`
  - Sub-components: `tags/tag/` (single Tag) and `tags/tags/` (Tag collection with overflow)
  - Sizes, colors per variant; removable close button; overflow truncation in tags/tags/

---

### Tier 4 — Utility / behaviour

- [x] **list** — *(no Figma PNG — token audit + story check)*
  - `List`, `ListItem`, `ListItemButton` hover state; divider; token compliance

- [x] **loading-error-state** — *(no Figma PNG — token audit + story check)*
  - Spinner / skeleton / custom loading; error state; empty state; render function children

- [x] **overflow-tooltip** — *(no Figma PNG — token audit + story check)*
  - Overflow trigger; start/end truncation; no tooltip when not overflowing

- [x] **path-display** — *(no Figma PNG — token audit + story check)*
  - Truncation, tooltip on overflow; token compliance

- [x] **picker** — `Picker.png` / `Picker - Dark.png`
  - States: default, hover, selected, disabled
  - 3 sizes (small/medium/large); 2 layouts (vertical/horizontal)
  - Hover border: `lightOrange200`; selected border: `lightOrange800`

- [x] **scroll-area** — *(no Figma PNG — token audit + story check)*
  - Scrollbar visibility; custom scrollbar color token

- [x] **skeleton** — *(no Figma PNG — token audit + story check)*
  - Wave animation; shape variants; token compliance

- [x] **spinner** — *(no Figma PNG — token audit + story check)*
  - Size variants; color token; token compliance

- [x] **view-switcher** — `View switcher.png` / `View switcher - Dark.png`
  - Active/inactive states; icon and label alignment

---

### Tier 5 — Complex / composite

- [ ] **activity-timeline** — `Activity timeline.png` / `Activity timeline - Dark.png`
  - Icon per event type; connector line; timestamp typography

- [ ] **anchor-link-menu** — `Anchor link menu.png` / `Anchor link menu - Dark.png`
  - Active section highlight; scroll-spy behavior

- [ ] **code-block** — `Code block.png` / `Code block - Dark.png`
  - Syntax highlight colors; copy button; line numbers

- [ ] **date-time** — `Date & time picker.png` / `Date & time picker - Dark.png`
  - Calendar grid, selected date, disabled dates, time picker

- [ ] **filters** — `Filters.png` / `Filters - Dark.png`
  - Filter bar layout; search input integration; applied filter chips; filter drawer

- [ ] **floating-button** — `Floating button.png` / `Floating button - Dark.png`
  - FAB shadow; icon centering; hover/active states

- [ ] **footer** — *(light missing)* / `Footer - Product Dark.png`
  - Links layout; background token

- [ ] **header** — `Header - Product Light.png` / `Header - Product Dark.png`
  - Logo placement; action buttons; background token

- [ ] **key-value-pairs** — `Key value pairs.png` / `Key value pairs - dark.png`
  - Label/value layout; alignment variants

- [ ] **navigation** — `Navigation.png` / `Navigation - Dark.png`
  - Active item highlight; collapsed sidebar state; icon alignment

- [ ] **table** — `Tables.png` / `Tables - Dark.png`
  - Header background; row hover; sorted column; striped rows; pagination integration

- [ ] **upload** — `Upload.png` / `Upload - Dark.png`
  - Drag-and-drop zone; file list item; progress/error states

---

## Bug Report Format

When a delta is found, log it here with this format:

```
### [Component] [Theme] — <short title>

- **Story:** <story name in Storybook>
- **Figma ref:** ~/Desktop/open-ui-kit-figma/<file>.png
- **Expected:** <what Figma shows>
- **Actual:** <what Storybook shows>
- **Root cause:** <token name / hard-coded value / wrong variant>
- **Fix:** <what needs to change>
```

---

## Bug Log

*(Fill in as issues are found)*

---

## Commands Reference

```bash
# Start Storybook (keep running throughout QA)
yarn storybook          # http://localhost:6006
# Direct docs URL: http://localhost:6006/?path=/docs/components-<kebab-name>--docs

# Lint + typecheck — run together, one round-trip
yarn lint && yarn typecheck

# Auto-fix lint issues
yarn lint:fix

# ⚠️  ALWAYS scope tests — NEVER run `yarn test` alone (kills the machine)
yarn test --testPathPattern=<component-name>
# Examples:
yarn test --testPathPattern=radio-button
yarn test --testPathPattern=side-drawer

# Format
yarn format
```

## Code Quality Standards (applied to every component)

These must all be true before a component is marked done:

| Standard | How to verify |
|---|---|
| All colors via `theme.palette.vars.*` | Read source, search for `#` hex literals |
| `sx` array merge pattern | Consumer `sx` must override internal styles |
| No empty functions without disable comment | `yarn lint` |
| No unused imports | `yarn lint` |
| No `any` without justification | `yarn typecheck` |
| `aria-label` on icon-only buttons | DevTools accessibility panel |
| Props forwarded via `...rest` | Read component signature |
| No direct `@mui/material` imports in stories | Search story imports |
| Storybook story has `actions: { argTypesRegex: null }` | Read story meta |
| Tests cover: render, states, token modes, key interactions | Read test file |

---

## Definition of Done

A component passes QA when **all** of the following are true:
- [ ] Light mode Storybook screenshot matches Figma — no color, spacing, or state deviations
- [ ] Dark mode Storybook screenshot matches Figma (or library token style if no dark Figma exists)
- [ ] All interactive states present and correct (hover, focus, active, disabled, error, loading, selected)
- [ ] All variants and sizes shown in Figma are present and correct
- [ ] **Responsive** — layout is correct at 320px, 768px, and 1280px; no overflow, no broken layout, touch targets ≥ 44px on mobile
- [ ] All colors sourced from `theme.palette.vars.*` tokens (no hard-coded hex)
- [ ] `sx` array merge pattern used — consumer `sx` always wins
- [ ] All sub-directories inside the component folder inspected and fixed
- [ ] `yarn lint` → exit 0, zero warnings
- [ ] `yarn typecheck` → exit 0
- [ ] `yarn test --testPathPattern=<component>` → all tests pass
- [ ] Story renders without console errors in both light and dark themes
- [ ] `COMPONENT_WORKFLOW.md` steps 13–15 completed (final verification, code review, resume)
