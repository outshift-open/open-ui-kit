# Design token alignment — change summary

Branch: `gauge-chart/gradient`
Package: `packages/open-ui-kit`
Figma source: [Outshift Spark Component Library](https://www.figma.com/design/o6t5UKJGaw75ZAiLfijAxq/Outshift-Spark-Component-Library)

Work done: audited several components against the Figma token set, corrected the
tokens that were wrong, and fixed a Storybook CSS bug that was making the Docs
tab display the wrong colors for every component.

All values below were read from the Figma variable definitions or verified by
rendering the component and reading its computed style — not inferred from the
source alone. Two of the changes exist specifically because the source code
looked correct but rendered incorrectly.

## Two kinds of change in this branch

It is worth separating these, because they carry different risk and want
different review attention.

**Spec alignment (sections 1–3).** The code did what it said it did; it simply
pointed at the wrong token, or shipped stale artwork. These are low-risk, and
the thing to review is whether the chosen token is the *right* one — the diff
itself is obviously correct.

**Latent rendering bugs (sections 4–5).** In these the source code read as
correct, and a reviewer grepping for the token would have concluded everything
was fine — but the browser rendered something else. Neither would have been
caught by reading the code, and section 5 in particular had been quietly
corrupting the way the team verifies token work. These deserve the closer look.

The distinction also explains why several of the checks below render the
component and read `getComputedStyle` rather than asserting on a style object:
after section 4, asserting that a style function *returns* the right token was
no longer sufficient evidence that the token reaches the screen.

---

## 1. Header — profile dropdown background

**Token:** `baseBackgroundMedium` → `controlBackgroundWeak`
**Figma row:** Control / Background / Weak

The Profile / Log out dropdown paper and its menu items were painted with
`baseBackgroundMedium`. Figma specifies Control/Background/Weak for this surface.

### Why this was needed

The two tokens are not interchangeable — they belong to different scales.
`baseBackgroundMedium` is the *base* surface scale, shared with SideDrawer,
Toast, CodeBlock gutters and chart tooltips. `controlBackgroundWeak` is the
*control* surface scale. A dropdown is a control, so it should track the control
scale: if the control palette is ever retuned, the dropdown should move with the
other controls rather than with drawers and toasts.

Beyond the semantics, the two resolve to visibly different colors — in midnight
`#0a141f` versus `#1e293b` — so the dropdown was rendering noticeably darker than
the design. Leaving it on the base token would also have made the mismatch
invisible to future audits, since the code looked deliberate.

| File | Change |
| --- | --- |
| `src/components/header/styles/index.ts` | `getStoryMenuPaperStyles` and `getStoryMenuItemStyles` background |
| `src/components/header/__tests__/header.test.tsx` | Two assertions that pinned the old token |

Resolved values for the new token:

| Theme | Value |
| --- | --- |
| Light | `#f5f8fd` (Surface Light/100) |
| Dark | `#0d274d` (Surface Dark/500) |
| Midnight | `#1e293b` (Dark Navy/100) |
| IoC | `rgba(255,255,255,0.09)` (deliberate deviation, see note in `ioc-vars.ts:93`) |

In midnight the dropdown moves from `#0a141f` to `#1e293b`, so it now reads
slightly lighter against the page.

> **Follow-up:** the item hover state still uses `baseBackgroundHover`
> (`#0f1623` in midnight), which is now *darker* than the resting background —
> previously hover was lighter. If that inversion is unintended, the consistent
> fix is switching hover to `controlBackgroundHover`.

---

## 2. FloatingButton — primary variant background

**Token:** primary variant now uses `baseBackgroundWeak`; secondary is unchanged.

Both variants shared `controlBackgroundDefault`. The background is now selected
per variant, mirroring how the border color was already chosen.

### Why this was needed

The `variant` prop was only half-implemented. It already switched the border
color between primary and secondary, but the background was a single hard-wired
token, so the two variants were distinguishable by outline alone. Figma gives the
primary variant Base/Background/Weak, i.e. a distinct fill — the component could
not express that at all.

The fix follows the shape of the code that was already there rather than adding a
new mechanism: a `backgroundColor` constant chosen by variant, directly parallel
to the existing `borderColor` constant. That keeps the two variant-dependent
values side by side, so the next person adding a variant sees both.

| File | Change |
| --- | --- |
| `src/components/floating-button/styles/index.ts` | Added `backgroundColor` branch on `variant` |
| `src/components/floating-button/__tests__/floating-button.test.tsx` | Primary-variant assertion |

```ts
const backgroundColor =
  variant === "primary"
    ? theme.palette.vars.baseBackgroundWeak
    : theme.palette.vars.controlBackgroundDefault;
```

Midnight renders the primary (blue-bordered) button at `#1e293b`. Hover, active
and disabled behavior are untouched.

---

## 3. Footer — AGNTCY brand icon

The icon did not match the Figma component. The mark was re-exported from Figma
node `179577-1004`, where it is flattened into a single "powered by AGNTCY"
group — the AGNTCY path was extracted and the viewBox cropped to its measured
bounds.

### Why this was needed

Two separate problems, one visual and one structural.

The **artwork was stale**: the committed path was an older AGNTCY lockup with
different letterforms and proportions from the one in the current Figma
component. No amount of resizing would have reconciled them — the geometry had to
be replaced.

The **color was untokenized**: the story rendered `<AgntcyBrand>` with no color,
so the icon inherited ambient `currentColor` from the surrounding footer text and
came out grey. Figma fills the mark with the primary blue. Because the icon
declares `fill="currentColor"`, the color is a property of whoever renders it, so
this had to be fixed at the call site rather than in the icon.

Extracting the path was not a straight export: the Figma node is a flattened
group containing both the "powered by" text and the mark, so the mark's own
bounds had to be computed from the path data (x 72.613→138) to crop the viewBox.
That is why the viewBox has a non-zero origin rather than the usual `0 0 …`.

| File | Change |
| --- | --- |
| `src/custom-icons/brand-logos.tsx` | `AgntcyBrand` path replaced; viewBox `0 0 105 24` → `72.613 0 65.387 14.882` |
| `src/components/footer/stories/footer.stories.tsx` | Size `64×16` → `66×15`; color now tokenized |

The icon keeps the file's existing `fill="currentColor"` convention so it themes
like the other brand logos. The story colors it with
`interactivePrimaryDefaultDefault`, which resolves to `#558bff` in midnight —
exactly the fill Figma uses for the mark — while following each theme's primary
color elsewhere.

> **Decision point:** if the logo is meant to be `#558bff` in *every* theme (a
> fixed brand color rather than a themed one), hard-code `electricBlue500`
> instead of the token.

---

## 4. Dialog — description text color

**File:** `src/components/dialog/components/elements.tsx`

`StyledDialogContentText` already declared `color: baseTextDefault`, but that
color was not winning at render time. MUI's `DialogContentText` injects
`color="textSecondary"` as a Typography system prop, and system-prop styles are
emitted *after* the styled override.

That happens to be harmless in dark and midnight, where
`palette.text.secondary === baseTextDefault`. In **light** and **IoC** the two
values differ, so the dialog description was rendering the wrong color.

The fix wraps the declaration in a doubled `&&` selector so it outranks the
injected style in every theme:

```ts
// MUI injects color="textSecondary" as a system prop whose styles are
// emitted after this override; the doubled selector outranks it.
"&&": {
  color: theme.palette.vars.baseTextDefault,
},
```

Verified with a throwaway rendered test asserting the computed color equals
`baseTextDefault` in the light theme (where the values diverge). No visual change
in midnight.

### Why this was needed

The code was making a promise it did not keep. `elements.tsx` plainly declared
`color: baseTextDefault`, so anyone auditing dialog colors — by reading the file
or grepping for the token — would have concluded the component was correct and
moved on. It was not: in light and IoC the dialog description rendered
`palette.text.secondary` instead.

That makes it worse than an ordinary wrong-color bug. A visibly wrong color gets
reported; this one was invisible in the two dark themes the team looks at most,
and actively defended by source code that read as correct. It would have survived
any number of token audits.

It also set the standard of proof for the rest of this branch. Before finding
this, checking that a style function returned the right token seemed like
sufficient verification. After it, the checks in sections 5 and in "Audited — no
change required" all render the component and read `getComputedStyle`, because
returning the right token and painting the right color turned out to be different
claims.

---

## 5. Storybook Docs CSS was repainting real components

**File:** `.storybook/css/preview.css`

This one is not a component bug — it made the **Docs tab misreport the colors of
every component in the kit**, which is what surfaced it (midnight breadcrumbs
appeared blue instead of `#e8e9ea`).

Four rules targeted bare HTML elements under `.sbdocs-content` with
`!important`. Storybook renders stories *inline* inside that container, so the
rules were repainting the rendered components, not just the surrounding prose.

Each selector now carries a `:not(.sb-unstyled *)` guard. `.sb-unstyled` is the
class Storybook already applies to every inline story wrapper for exactly this
purpose, so this follows the framework's own convention.

### Why this was needed

This is the most consequential fix in the branch, because it was not breaking a
component — it was breaking the instrument the team uses to check components.

The Docs tab is where token work gets verified. While these rules were in place,
the Docs tab was showing Storybook's own chrome colors on top of the real
components, so it could not be trusted for exactly the task it was being used
for. Every "does this token look right?" judgement made in Docs was potentially
answering a question about Storybook's CSS instead.

The reach was wide. Because MUI renders `Typography` `body1`/`body2`/default as a
`<p>`, the muted-text rule covered ordinary body text across roughly 39 component
files — including `DialogContentText`, meaning the dialog fix in section 4 would
still have *appeared* wrong in Docs afterwards. Two independent bugs were
stacking on the same element, and only fixing both makes the component readable.

The specific trigger was noticing midnight breadcrumbs rendering `#558BFF` when
the token resolves to `#e8e9ea`. Rendering `Breadcrumbs` under `midnightTheme`
returned the correct `rgb(232, 233, 234)`, which ruled out the component and
pointed at the environment.

`!important` on a bare-element selector is what made it unfixable from the
component side: no Emotion class could outrank it, so no amount of correcting
component styles would have helped. The guard was applied at the source rather
than by escalating specificity in components, which would have spread the problem
across the kit.

Rules that were leaking, and what they overrode inside stories:

| Selector | Impact |
| --- | --- |
| `.sbdocs-content a` | Every link — Breadcrumbs, Footer, Link |
| `.sbdocs-content p`, `li` | Any `<p>`/`<li>`. MUI `Typography` renders `body1`/`body2`/default as `<p>`, so ~39 component files were affected — including `DialogContentText` |
| `.sbdocs-content h1`–`h4` | Real headings, plus forcing Sharp Sans and `letter-spacing: 0` |
| `.sbdocs-content p code`, `li code` | Code inside those elements |

The forced link color is theme-dependent (`preview.ts:88`); in midnight it is
`#558BFF`, which is why breadcrumbs looked blue.

**Scope of the fix:** it only *narrows* selectors, so it can never add styling —
docs prose is unaffected. Inside story previews, elements now show their real
token colors. The Canvas tab was never affected (no `.sbdocs-content` ancestor),
so Canvas and Docs should now agree; a disagreement between the two tabs is a
useful signal of a genuine bug.

`Typography variant="caption"` renders a `<span>` and was never in these
selectors — the Footer copyright text, for example, was always correct.

---

## Audited — no change required

Two items were investigated and found already correct. Recording them so they
are not "fixed" into a regression later — in both cases there is a plausible
wrong answer sitting right next to the right one, and a future reader without
this note could easily talk themselves into it.

**Breadcrumb link text** already uses `interactiveSecondaryDefaultDefault`,
resolved through `Link`'s `customizeColor` callback. Confirmed by rendering the
component and reading the computed color (`#062242` in light). The separator
chevron and collapsed "…" trigger use the same token; the collapsed dropdown's
menu items intentionally use `baseTextDefault`.

**`interactiveSecondaryDefaultDefault` already matches the Agntcy Light / Agntcy
Dark columns** in light and dark. Read directly from the Figma variable
(`Tokens` collection, library "Outshift Spark Foundations"):

| Figma mode | Alias → value | Codebase |
| --- | --- | --- |
| **Agntcy Light** | Surface Dark/600 → `#062242` | light: `surfaceDarkPalette[600]` ✅ |
| **Agntcy Dark** | Surface Light/300 → `#e8eefb` | dark: `surfaceLightPalette[300]` ✅ |
| Light | Surface Dark/500 → `#0d274d` | not used |
| Dark | Surface Light/300 → `#e8eefb` | not used |
| Agntcy Midnight | Grey/50 → `#e8e9ea` | midnight: `greyPalette[50]` ✅ |
| IoC | Surface Light/300 → `#e8eefb` | ioc: `iocBluePalette[500]` = `#2B82F6` ⚠️ |

Note that the plain "Light" column is a *different* color from Agntcy Light. The
codebase deliberately follows the Agntcy columns; changing light to `#0d274d`
would move away from the intended spec.

The hover / active / disabled states of the same family also match Agntcy
Light/Dark exactly.

---

## Open questions for design

1. **Midnight disabled state is brighter than the resting state.**
   `interactiveSecondaryDefaultDisabled` is Grey/0 (`#ffffff`) while resting is
   Grey/50 (`#e8e9ea`), so disabled links appear *more* prominent than enabled
   ones. This was confirmed in the Figma token set — the code mirrors it
   faithfully, so it is a design-side question, not a code bug. Every other
   theme dims disabled with alpha.

2. **IoC diverges from Figma on the `interactiveSecondary` family.** Figma
   specifies Surface Light/300 (`#e8eefb`); the code uses `iocBluePalette[500]`
   (`#2B82F6`). This resembles the deliberate IoC deviation documented in
   `ioc-vars.ts:93`, but this one carries no explanatory comment. Either align it
   to Figma or add a comment recording why it differs.

3. **Header dropdown hover** — see the follow-up note in section 1.

---

## Verification

| Suite | Result |
| --- | --- |
| `header.test.tsx` | 19 passed |
| `footer.test.tsx` | 9 passed |
| `floating-button` | 12 passed |
| `dialog.test.tsx` | 7 passed |
| `tsc --noEmit` | clean |
| `prettier --check` on `preview.css` | clean |

Storybook selector guards were verified by building the Docs DOM structure in
jsdom and running the old and new selectors against it: the old selectors matched
docs content *and* story content, the new ones match only docs content.

Tests run with Node 22 (`~/.nvm/versions/node/v22.23.1`). The default `node`
v20.9.0 on this machine is too old for the repo's Vitest/Rolldown toolchain, and
this package's suite is Jest — `npx jest --config=jest.config.js`.

Temporary verification tests written during this work were deleted after use;
none remain in the tree.
