# Open UI Kit — Component QA Plan

## Purpose

Visual and functional QA of every component in the library against the official Figma designs.
The source of truth for all visual decisions is the screenshots in `~/Downloads/` (light + dark variants).
Where no Figma screenshot exists for a component, the existing library style tokens are authoritative.

> **Scope exclusions:** Charts (`src/charts/`), Templates (`src/templates/`), and Foundations are out of scope for this QA pass.

---

## Ground Rules

### Visual fidelity
1. **Figma screenshots in `~/Downloads/` are the one and only source of truth.** Every pixel decision — color, spacing, border radius, typography, icon size, shadow — must match the Figma PNG. When in doubt, the Figma wins, not the current implementation.
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
11. **Do NOT use `helper.css`.** Use `~/Desktop/test.css` for any CSS reference file.

---

## Figma Screenshot Inventory

All files live in `~/Downloads/`. Format: `<Component>.png` (light), `<Component> - Dark.png` (dark).

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
STEP 1 — VISUAL (light mode)
  a. Open Storybook story at http://localhost:6006/?path=/docs/components-<name>--docs
  b. Set theme to light mode
  c. Screenshot the canvas
  d. Open ~/Downloads/<Component>.png (Figma light reference)
  e. Compare pixel-by-pixel:
     - Background color (exact token match)
     - Text color, font family, size, weight, line-height, letter-spacing
     - Border color, width, radius (all four corners)
     - Padding, margin, gap, spacing between elements
     - Icon size, color, alignment
     - Shadow / elevation depth
     - Focus ring color and width
     - Placeholder text color
     - Scrollbar styling (if applicable)

STEP 2 — VISUAL (dark mode)
  a. Switch Storybook to dark mode
  b. Screenshot the canvas
  c. Open ~/Downloads/<Component> - Dark.png (Figma dark reference)
  d. Repeat all checks from Step 1e

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
  - Responsive layout does not break at narrow container widths
  - Tooltips / popovers appear at correct position (check all arrow positions)
  - Overflow text truncates with tooltip as expected
  - Forms: required validation, error state display, accessible error messages

STEP 5 — ACCESSIBILITY
  - All interactive elements are keyboard-reachable
  - Focus order is logical
  - Buttons and inputs have accessible names (aria-label or visible label)
  - Color is not the sole means of conveying state (icon or text also present)
  - Screen reader: role and state announced correctly (use browser a11y tree)

STEP 6 — CODE QUALITY
  a. Open component source file(s)
  b. Verify all colors use theme.palette.vars.* — no hard-coded hex
  c. Verify sx array merge pattern (consumer sx always wins)
  d. No empty functions without eslint-disable comment
  e. No unused imports or variables
  f. Props forwarded correctly; aria-label on icon-only elements
  g. Run: yarn lint            → must exit 0, 0 warnings
  h. Run: yarn typecheck       → must exit 0
  i. Run: yarn test --testPathPattern=<component-name>  → all tests pass

STEP 7 — LOG RESULT
  - If all checks pass → mark [x] in the queue below
  - If any check fails → open a bug entry in the Bug Log section
```

---

## Component QA Queue

Work through components in this order (highest usage / most complex first).

### Tier 1 — Core interactive components

- [ ] **Button** — `~/Downloads/Button.png` / `Button - Dark.png`
  - States: default, hover, focus, active, disabled
  - Variants: primary, secondary, ghost, danger
  - Sizes: small, medium, large

- [ ] **Input Field** — `~/Downloads/Input Field.png` / `Input Field - Dark.png`
  - States: default, hover, focus, error, disabled
  - Label, helper text, error text typography
  - Border tokens: `controlBorderDefault/Hover/Active/Negative/Disabled`

- [ ] **Search Input** — `~/Downloads/Search input.png` / `Search input - dark.png`
  - Clear button presence/absence
  - Focus ring
  - Placeholder color

- [ ] **Select** — `~/Downloads/Select.png` / `Select - Dark.png`
  - Closed state, open dropdown
  - States: default, hover, active, disabled, error
  - Border tokens

- [ ] **Checkbox** — `~/Downloads/Checkbox.png` / `Checkbox - Dark.png`
  - States: unchecked, checked, indeterminate, disabled
  - Label typography alignment

- [ ] **Radio Button** — `~/Downloads/Radio button.png` / `Radio button - Dark.png`
  - States: unselected, selected, disabled
  - Label alignment via FormControlLabel

- [ ] **Toggle** — `~/Downloads/Toggle.png` / `Toggle - Dark.png`
  - On/off states, disabled state
  - Track and thumb colors

- [ ] **Slider** — `~/Downloads/Slider.png` / `Slider - Dark.png`
  - Track, thumb, value label
  - States: default, hover, active, disabled

- [ ] **Tabs** — `~/Downloads/Tabs.png` / `Tabs - Dark.png`
  - Active, inactive, hover, disabled tab
  - Indicator color and thickness

- [ ] **Accordion** — `~/Downloads/Accordion.png` / `Accordion - Dark.png`
  - Collapsed / expanded states
  - Chevron rotation
  - Border and divider

### Tier 2 — Overlay / modal components

- [ ] **Dialog** — `~/Downloads/Dialog.png` / `Dialog - Dark.png`
  - Title, body, actions layout
  - Close button
  - Backdrop opacity

- [ ] **Popover** — `~/Downloads/Popover.png` / `Popover - Dark.png`
  - Arrow triangle at all 6 positions
  - Paper background token
  - Shadow
  - Close button (when showCloseButton=true)
  - Title / body / actions slots

- [ ] **Tooltip** — `~/Downloads/Tooltip.png` / `Tooltip - Dark.png`
  - Background and text colors
  - Arrow
  - Max-width truncation

- [ ] **Menu** — `~/Downloads/Menu.png` / `Menu - Dark.png`
  - Item hover state
  - Dividers
  - Disabled item

- [ ] **Nested Menu** — `~/Downloads/Nested Menu.png` / `Nested Menu - Dark.png`
  - Submenu trigger, placement
  - Active parent highlight

- [ ] **Side Drawer** — `~/Downloads/Side Drawer.png` / `Side Drawer - dark.png`
  - Header, content, footer layout
  - Close button
  - Backdrop

- [ ] **Toast** — `~/Downloads/Toast.png` / `Toast - Dark.png`
  - Variants: success, warning, error, info
  - Close button
  - Auto-dismiss

### Tier 3 — Display / layout components

- [ ] **Card** — `~/Downloads/Cards.png` / `Cards - Dark.png`
  - Background, border-radius, shadow
  - Header / content / actions slots

- [ ] **Banner** — `~/Downloads/Banner.png` / `Banner - Dark.png`
  - Variants: info, warning, error, success
  - Dismiss button

- [ ] **Badge & Notification** — `~/Downloads/Badge & Notification.png` / `Badge & Notification - Dark.png`
  - Dot vs count variants
  - Position (top-right, etc.)
  - Colors per severity

- [ ] **Avatar** — `~/Downloads/Avatar.png` / `Avatar - Dark.png`
  - Sizes
  - Fallback initials
  - Image variant

- [ ] **Breadcrumbs** — `~/Downloads/Breadcrumb.png` / `Breadcrumb - Dark.png`
  - Separator color
  - Active vs inactive link color
  - Truncation

- [ ] **Divider** — `~/Downloads/Divider.png` / `Divider - Dark.png`
  - Horizontal / vertical
  - Color token

- [ ] **Link** — `~/Downloads/Link.png` / `Link (1).png`
  - Default, hover, visited, disabled
  - Underline behavior

- [ ] **Tags** — `~/Downloads/Tag.png` / `Tag - Dark.png`
  - Sizes, colors per variant
  - Removable (close button) state

- [ ] **Pagination** — `~/Downloads/Pagination.png` / `Pagination - Dark.png`
  - Active page highlight
  - Prev/next disabled states
  - Icon color token `controlIconDefault`

- [ ] **Stepper** — `~/Downloads/Stepper.png` / `Stepper - Dark.png`
  - Active, completed, upcoming step styles
  - Connector line

- [ ] **Empty State** — `~/Downloads/Empty State.png` / `Empty State - Dark.png`
  - Illustration
  - Variants: info, error, no-data
  - CTA button

- [ ] **Loading States** — `~/Downloads/Loading States.png` / `Loading States (1).png`
  - Spinner colors
  - Skeleton wave animation
  - Overlay variant

### Tier 4 — Complex / composite components

- [ ] **Table** — `~/Downloads/Tables.png` / `Tables - Dark.png`
  - Header background
  - Row hover
  - Sorted column highlight
  - Striped rows (if applicable)
  - Pagination integration

- [ ] **Filters** — `~/Downloads/Filters.png` / `Filters - Dark.png`
  - Filter bar layout
  - Search input integration
  - Applied filter chips
  - Filter drawer

- [ ] **Navigation** — `~/Downloads/Navigation.png` / `Navigation - Dark.png`
  - Active item highlight
  - Collapsed sidebar state
  - Icon alignment

- [ ] **Header** — `~/Downloads/Header - Product Light.png` / `Header - Product Dark.png`
  - Logo placement
  - Action buttons
  - Background token

- [ ] **Footer** — *(light missing)* / `~/Downloads/Footer - Product Dark.png`
  - Links layout
  - Background token

- [ ] **Activity Timeline** — `~/Downloads/Activity timeline.png` / `Activity timeline - Dark.png`
  - Icon per event type
  - Connector line
  - Timestamp typography

- [ ] **Anchor Link Menu** — `~/Downloads/Anchor link menu.png` / `Anchor link menu - Dark.png`
  - Active section highlight
  - Scroll-spy behavior

- [ ] **Key Value Pairs** — `~/Downloads/Key value pairs.png` / `Key value pairs - dark.png`
  - Label / value layout
  - Alignment variants

- [ ] **Message** — `~/Downloads/Message.png` / `Message - Dark.png`
  - Variants: info, warning, error, success
  - Icon alignment
  - Dismiss

- [ ] **Date & Time Picker** — `~/Downloads/Date & time picker.png` / `Date & time picker - Dark.png`
  - Calendar grid layout
  - Selected date highlight
  - Disabled dates
  - Time picker (if applicable)

- [ ] **Upload** — `~/Downloads/Upload.png` / `Upload - Dark.png`
  - Drag-and-drop zone
  - File list item
  - Progress / error states

- [ ] **Code Block** — `~/Downloads/Code block.png` / `Code block - Dark.png`
  - Syntax highlight colors
  - Copy button
  - Line numbers

- [ ] **Picker** — `~/Downloads/Picker.png` / `Picker - Dark.png`
  - PickerItem states: default, hover, selected, disabled
  - 3 sizes (small / medium / large)
  - 2 layouts (vertical / horizontal)
  - Border colors: hover `lightOrange200`, selected `lightOrange800`

- [ ] **View Switcher** — `~/Downloads/View switcher.png` / `View switcher - Dark.png`
  - Active/inactive states
  - Icon and label alignment

- [ ] **Floating Button** — `~/Downloads/Floating button.png` / `Floating button - Dark.png`
  - FAB shadow
  - Icon centering
  - Hover / active states

- [ ] **Backdrop** — `~/Downloads/_backdrop.png`
  - Opacity
  - Z-index layering

### Tier 5 — No Figma reference (token-style audit only)

For these components: verify token usage in source, check story renders without visual errors in both themes.

- [ ] **Copy Button** — check icon, tooltip, success state
- [ ] **Elevation** — check shadow scale story
- [ ] **Gradients** — check gradient story renders
- [ ] **Icon** — SvgIcon sizing, color token inheritance
- [ ] **Indicator Badge** — dot color, position
- [ ] **List** — `List`, `ListItem`, `ListItemButton` hover state, divider
- [ ] **Loading Error State** — spinner/skeleton/custom loading variants, error state, empty state, render function children
- [ ] **Overflow Tooltip** — overflow trigger, start/end truncation, no tooltip when not overflowing
- [ ] **Path Display** — truncation, tooltip on overflow
- [ ] **Scroll Area** — scrollbar visibility, custom scrollbar color token
- [ ] **Severity Badge / Label / Bar** — color per severity level
- [ ] **Skeleton** — wave animation, shape variants
- [ ] **Spinner** — size variants, color token
- [ ] **Typography** — all variants (h1–h6, body1/2, caption, overline) match design scale
- [ ] **Widget** — card-like container, token compliance

---

## Bug Report Format

When a delta is found, log it here with this format:

```
### [Component] [Theme] — <short title>

- **Story:** <story name in Storybook>
- **Figma ref:** ~/Downloads/<file>.png
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

# Lint — must exit 0, zero warnings (--max-warnings=0 enforced)
yarn lint
yarn lint:fix           # auto-fix what's fixable

# TypeScript — must exit 0
yarn typecheck

# Run a single component's tests (NEVER run all at once — kills the machine)
yarn test --testPathPattern=<component-name>
# Example:
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

A component passes QA when:
- [ ] Light mode screenshot matches Figma within acceptable tolerance (no color, spacing, or state deviations)
- [ ] Dark mode screenshot matches Figma (or library token style if no dark Figma exists)
- [ ] All interactive states present and correct
- [ ] All colors sourced from `theme.palette.vars.*` tokens (no hard-coded hex)
- [ ] No TypeScript errors (`yarn typecheck`)
- [ ] No lint errors (`yarn lint`)
- [ ] Unit tests pass (`yarn test --testPathPattern=<component>`)
- [ ] Story renders without console errors in both themes
