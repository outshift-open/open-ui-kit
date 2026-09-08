# Icon Migration Tracker

Follow-up log for migrating icons into `packages/open-ui-kit/src/icons/` from the Figma
source of truth described in [`figma-icon-migration-guide.md`](./figma-icon-migration-guide.md).

This table exists so migration progress survives across sessions and Figma MCP rate-limit
resets — at any point we can tell exactly which icons are done, in progress, or still pending.

## Status legend

| Status | Meaning |
| --- | --- |
| `pending` | Selected as a candidate, not yet approved |
| `approved` | Approved by maintainer, not yet pulled from Figma |
| `migrated` | New icon lives in `icons/`, legacy original marked `@deprecated` |
| `needs-check` | Candidate match is uncertain, needs visual verification via Figma before approval |
| `no-equivalent` | No suitable OUK icon found; left as-is, out of scope |
| `n/a` | Not applicable (already an OUK icon, or an external/browser asset) |

## Batch 1

Reference icons being replaced with Figma-sourced OUK icons, and their proposed mapping.

| # | Reference icon | Proposed OUK icon | Figma node-id | Legacy file (`custom-icons/`) | New file (`icons/`) | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `SmartToy` | `agent-icon` | `7066:465` | `agent.tsx` | `ui/agentic-services/agent.tsx` | migrated |
| 2 | `AssignmentTurnedIn` | `verified-icon` | `1796:4522` | `verified.tsx` | `ui/check/verified.tsx` | migrated |
| 3 | `CheckCircle` | `check-circle-icon` | `474:6480` | `check-circle.tsx` | `ui/check/check-circle.tsx` | migrated |
| 4 | `Visibility` | `visibility-icon` | `43:7922` | `visibility.tsx` | `ui/visibility/visibility.tsx` | migrated |
| 5 | `LockOpen` | `lock-off-icon` | `43:7936` | `lock-off.tsx` | `ui/visibility/lock-off.tsx` | migrated |
| 6 | `Lock` | `lock-icon` | `43:7933` | `lock.tsx` | `ui/visibility/lock.tsx` | migrated |
| 7 | `DescriptionOutlined` | `documentation-icon` | `678:3916` | `documentation.tsx` | `ui/content/documentation.tsx` | migrated |
| 8 | `DarkMode` | `dark-mode-icon` | `7487:3313` | `dark-mode.tsx` | `ui/profile/dark-mode.tsx` | migrated |
| 9 | `LightMode` | `light-mode-icon` | `7487:3357` | `light-mode.tsx` | `ui/profile/light-mode.tsx` | migrated |
| 10 | `HelpOutline` | `help-icon` | `401:4660` | `help.tsx` | `ui/question/help.tsx` | migrated |
| 11 | `Close` | `close-icon` | `61:4514` | `close.tsx` | `ui/close/close.tsx` | migrated |
| 12 | `Person` | `person-outline-icon` | `43:7902` | `person-outline.tsx` | `ui/profile/person-outline.tsx` | migrated |
| 13 | `Send` | `send-icon` | `625:17148` | `send.tsx` | `ui/content/send.tsx` | migrated |
| 14 | `KeyboardArrowDown` | `keyboard-arrow-down-icon` | `2:3754` | `keyboard-arrow-down.tsx` | `ui/arrows/keyboard-arrow-down.tsx` | migrated |
| 15 | `DeleteOutline` | `delete-icon` | `60:4485` | `delete.tsx` | `ui/edit-install/delete.tsx` | migrated |
| 16 | `ExpandMore` | `expand-icon` | `973:14841` | `expand.tsx` | `ui/arrows/expand.tsx` | migrated |
| 17 | `ExpandLess` | `collapse-icon` | `973:14839` | `collapse.tsx` | `ui/arrows/collapse.tsx` | migrated |
| 18 | `FitScreen` | `close-fullscreen-icon` (inward arrows) | `2:3706` | `close-full-screen.tsx` | `ui/arrows/close-fullscreen.tsx` | migrated |
| 19 | GitHub (branded icon pair) | `github-icon` (Content variant) | `6366:4548` | `git-hub.tsx` | `ui/content/github.tsx` | migrated |
| 20 | `Calculate` | `payments-icon` | `6407:4281` | `payments.tsx` | `ui/profile/payments.tsx` | migrated |

Already migrated in a prior session (reference point, not part of Batch 1):

| # | Icon | Figma node-id | Legacy file | New file | Status |
| --- | --- | --- | --- | --- | --- |
| 0 | `ArrowDown` | `2:3721` | `arrow-down.tsx` (deprecated) | `icons/ui/arrows/arrow-down.tsx` | migrated |

## Out of scope (no generic OUK equivalent found)

| Reference icon | Kind | Reason |
| --- | --- | --- |
| `Air` | MUI | Node-face role icon (weather MCP). No weather/cloud glyph fits: `cloudtrail-icon` and `cloud-configuration-icon` are the only cloud-adjacent hits, but read as "infra/cloud config," not weather. Kept on MUI. |
| `LocalShipping` | MUI | Node-face role icon (shipper). No package/delivery/truck/cargo glyph found; only unrelated MITRE ATT&CK security icons matched. Kept on MUI. |
| `ZoomIn` | MUI | Literal graph-zoom control, staying on MUI in the reference project by decision — no change needed here. |
| `ZoomOut` | MUI | Same as `ZoomIn`. |
| Node-face illustration (supervisor role) | Branded | Custom multi-role illustration, not a generic glyph |
| Node-face illustration (grader role) | Branded | Custom illustration, not a generic glyph |
| Directory side-control icon pair | Branded | No matching glyph found; likely stays a branded asset |
| Header wordmark | Branded | Product wordmark, not an icon |
| Chat avatar mark | Branded | Brand mark, not a generic icon |
| Dashboard-link mark | Branded | Third-party product mark, not a generic icon |

## Not applicable

| Item | Reason |
| --- | --- |
| `Spinner` | Already sourced from `@open-ui-kit/core` |
| Favicon | External browser asset, outside icon library scope |

## Full Figma icon-set migration (all 319 icons)

Per the follow-up request to migrate **every** icon in Figma's "Icons" section
(`node-id=35-3245`, 31 category frames, 319 icon symbols total) — not just the Batch 1
replacements above — into `icons/`, grouped by category, exported from `Icons.*`, added to
Storybook, with every remaining `custom-icons/` export flagged `@deprecated`.

This is tracked here by Figma category so progress survives across sessions. "Migrated"
counts only icons actually exported from `packages/open-ui-kit/src/icons/index.ts` and present
in `iconography/icon-categories.ts`.

| Figma category (group) | Total icons | Migrated | Status |
| --- | ---: | ---: | --- |
| Design (General) | 1 | 0 | not started — placeholder/template symbol only, likely skip |
| Arrows (General) | 50 | 50 | **done** |
| Time (General) | 11 | 11 | **done** |
| Profile (General) | 14 | 14 | **done** |
| Visibility (General) | 6 | 6 | **done** |
| Edit & install (General) | 10 | 10 | **done** |
| Close (General) | 6 | 6 | **done** |
| Messaging (General) | 1 | 1 | **done** |
| Check (General) | 7 | 7 | **done** |
| Alerts (General) | 6 | 6 | **done** |
| Info (General) | 2 | 2 | **done** |
| Question (General) | 1 | 1 | **done** |
| Plus & Minus (General) | 9 | 9 | **done** |
| Image & Media (General) | 17 | 17 | **done** |
| Notification (General) | 5 | 5 | **done** |
| Menu, Search, Filter & Sort (General) | 18 | 18 | **done** |
| Content (General) | 36 | 35 | **done** (`hand-cursor-icon` skipped — raster PNG asset, not a vector icon; see note) |
| Agentic Services (Feature) | 1 | 1 | **done** |
| Left Nav (Feature) | 11 | 11 | **done** |
| Policies (Feature) | 4 | 4 | **done** |
| Health & Safety (Feature) | 10 | 10 | **done** |
| Network (Feature) | 3 | 3 | **done** |
| API (Feature) | 4 | 4 | **done** |
| Data (Feature) | 10 | 10 | **done** |
| Bug (Feature) | 4 | 4 | **done** |
| Mitre (Feature) | 13 | 13 | **done** |
| Integrations (Feature) | 16 | 0 | not started |
| Security Posture & AP Categories (Feature) | 13 | 0 | not started |
| Code & build (Feature) | 19 | 0 | not started |
| Asset inventory (Feature) | 6 | 6 | **done** |
| Scanners (Feature) | 4 | 0 | not started — likely duplicates of Bug/Data/API instances, needs confirmation |
| **Total (unique icons)** | **~319** | **264** | **~83%** |

Note: per-category counts were corrected as exact node-ids were pulled from Figma for each
one (Check is 7, not 9; Plus & Minus is 9, not 10; Left Nav is 11, not 13; Mitre is 13, not 14;
Image & Media is 17, not 18 — earlier estimates in this table were rough). Security Posture &
AP Categories, Code & build, Integrations, and Scanners counts are still provisional pending
migration. The 319 total is a distinct-symbol count across the whole "Icons" section.

`hand-cursor-icon` (in Content) is a rasterized PNG asset embedded in the Figma file (an
imported clip-art cursor graphic, not a vector layer), so it cannot be represented as a
`currentColor` monochrome SVG component consistent with every other icon in this set. It has
been intentionally skipped; the legacy `custom-icons/` equivalent (if any) remains untouched
and un-deprecated for this specific glyph.

Icons with multiple Figma vector layers needed different handling depending on shape:
- **Background decoration to discard**: several icons (`close-circle-outline`, `block`,
  `warning`, `error-circle-outline`, `minus-circle-outline`, `plus-circle-outline`) export a
  plain background circle/shape as a separate layer alongside the real glyph. Since both
  layers share the icon's full viewBox, the background layer is safely dropped and only the
  meaningful `#3C4551`-filled layer is kept (consistent with the earlier `check-circle-icon`
  precedent).
- **Genuinely composed multi-layer icons** (`settings-icon`, `settings-outline-icon`,
  `not-equal-icon`): `download_assets` crops each vector layer to its own local bounding box
  with no shared offset, making them impossible to safely recombine. For these, `get_design_context`
  was used instead — it returns one flattened SVG with all layers already composited at
  correct absolute coordinates.

Repeatable pipeline proven and used for every category above (see `scripts/.tmp-gen-icons.mjs`
and `scripts/.tmp-relink-deprecated.mjs`, both untracked/temporary — kept in the working tree
only until the full migration is complete, then deleted):

1. `download_assets` (or `get_design_context` for layered/multi-path icons) per icon node-id.
2. Generate the `.tsx` component under `icons/ui/<category>/` from the resulting SVG.
3. Add the export to `icons/index.ts`.
4. Add the icon to its category/group in `iconography/icon-categories.ts` (Storybook grouping).
5. If a same-named (or clearly corresponding) icon exists in `custom-icons/`, relink its
   `@deprecated` tag from the generic "no direct replacement yet" message to a specific
   `Use \`X\` from \`Icons\`` pointer.
6. `yarn workspace @open-ui-kit/core format && typecheck && lint`.

All ~907 remaining `custom-icons/` exports without a migrated counterpart are already tagged
`@deprecated` with the generic message: *"Superseded by the Figma-migrated icon set (`Icons`),
no direct replacement identified yet — remains available via `LegacyIcons.X`."* Those get
relinked to a specific pointer automatically as their category is migrated (step 5 above).

Continuing autonomously, category by category, per the confirmed migration pace — no
per-icon approval needed. This table is the durable checkpoint if the session or Figma rate
limit resets before the full 319 are done.

## Deprecation approach for replaced legacy icons

When a `custom-icons/` file is superseded by a new Figma-sourced icon in `icons/`:

1. Add an `@deprecated` JSDoc tag to the legacy component pointing at its replacement.
2. Keep the legacy file exported as-is from `custom-icons/index.ts` (no rename needed) —
   it remains reachable via the `LegacyIcons` namespace export in the package root
   (`LegacyIcons.X`), while the new version is reachable via `Icons.X`.
3. Do not rename the legacy file/export unless the plain name is needed for something else or
   clarity specifically calls for it — the `Icons` / `LegacyIcons` namespaces already prevent
   collisions, so a rename (e.g. `ArrowDown` → `ArrowDownLegacy`) is not required for that
   purpose alone.
