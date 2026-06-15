---
productId: open-ui-kit-core
title: React Filters component
githubLabel: 'component: filters'
githubSource: packages/open-ui-kit/src/components/filters
---

# Filters

<p class="description">The Open UI Kit Filters component gives data-heavy pages a consistent search, chip, and drawer workflow for narrowing large result sets.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Filters combines a search field, favorite toggle, selected filter chips, clear-all behavior, and a drawer for selecting filter options.
Use it for inventory tables, findings lists, policy views, and other surfaces where users need to narrow a dataset without leaving the page.

The public entry point is `FiltersBar`.
It owns the drawer trigger and chip row, while your page owns the selected filter state.

{{"demo": "FiltersUsage.js", "bg": true}}

## Import

```tsx
import { FiltersBar } from '@open-ui-kit/core';
```

## When to use

Use Filters for datasets that need search, favorites, facets, nested options, or saved query-style controls.
They are useful for tables, card grids, asset lists, findings, policies, and dashboards.

Use a single select, checkbox group, or search field when the filtering model is simple.

## Anatomy

Filters combine search, favorite controls, chips, an optional drawer trigger, and optional right-side actions.
The drawer can group filters, support nested values, show loading state, and expose select-all behavior.
The page owns the filtered data and decides how active filters affect results.

## Select all groups

Enable `isSelectAllEnabled` on a filter group when the drawer should offer a faster path for selecting every option in that group.
Use it for known, bounded option sets such as engines, severities, statuses, or regions.

{{"demo": "FiltersSelectAll.js", "bg": true}}

## Nested filters

Use nested `filters` when options belong to a hierarchy.
This keeps broad categories scannable while still allowing deep, specific selections.

{{"demo": "FiltersNested.js", "bg": true}}

## Single select

Set `multiSelect` to `false` when a filter group represents one current state.
This is useful for mutually exclusive values such as lifecycle, risk state, or ownership.

{{"demo": "FiltersSingleSelect.js", "bg": true}}

## Right-side actions

Use `rightSideComponent` for page-level actions that should travel with the filtering controls.
Keep the action related to the current result set, such as export, save view, or create report.

{{"demo": "FiltersWithAction.js", "bg": true}}

## Behavior notes

Treat `filtersData` as application state and update visible results whenever it changes.
Use stable `filterKey` values so filters can be persisted, serialized in URLs, or reported in analytics.
Show active filters near the results so users can understand and undo the current query.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `isLoading` | `boolean` | - | Shows loading states in the filter drawer. |
| `filtersData` | `FilterData[]` | - | Filter groups, options, nested groups, and selected state. |
| `assetsData` | `AssetsData` | - | Count metadata displayed in the drawer header. |
| `onSelectedChange` | `(updatedFilters: FilterData[]) => void` | - | Called when users select, clear, or delete filter options. |
| `onSearch` | `(search: string) => void` | - | Enables the search field and receives search text. |
| `searchPlaceHolder` | `string` | `'Search by...'` | Placeholder for the search input. |
| `initialSearchValue` | `string` | `''` | Initial uncontrolled search value. |
| `searchValue` | `string` | - | Controlled search value. |
| `onFavorite` | `(favorite: boolean) => void` | - | Enables and handles the favorite toggle. |
| `initialFavoriteValue` | `boolean` | `false` | Initial uncontrolled favorite value. |
| `favoriteValue` | `boolean` | - | Controlled favorite value. |
| `rightSideComponent` | `JSX.Element` | - | Optional action rendered to the right of the filter controls. |
| `isFiltersButtonVisible` | `boolean` | `true` | Hides the filters button, chips, and drawer when set to false. |

## Filter data

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | Display label for the filter group. |
| `filterKey` | `string` | Stable key for comparing and updating a group. |
| `options` | `FilterOptionData[]` | Selectable options for the group. |
| `valueFormatter` | `(value: string \| number) => string` | Optional formatter for chip labels. |
| `multiSelect` | `boolean` | Set to `false` for mutually exclusive selection. |
| `filters` | `FilterData[]` | Nested filter groups. |
| `isSelectAllEnabled` | `boolean` | Adds select-all behavior for a group. |

## Accessibility

Keep filter names short and specific so drawer sections are easy to scan.
Use `filterKey` for stable updates when display names may change.
When filters change the surrounding result set, make sure the result count or table updates near the filter controls.

## Usage guidance

- Keep the bar near the dataset it controls.
- Preselect only filters that reflect a real default view.
- Use nested filters for hierarchy, not for decoration.
- Use single-select groups when choosing more than one option would be contradictory.
- Keep right-side actions directly related to the filtered result set.
