/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SearchInputProps } from "@/components/search-input";

export interface FilterOptionData {
  /** Raw option value shown in the filter menu or formatted with `valueFormatter`. */
  value: string | number;
  /** Whether this option is currently selected. */
  isSelected: boolean;
  /** Optional stable key when `value` is not unique enough for integration state. */
  optionKey?: string;
}

export interface FilterData {
  /** Filter group label shown in the filter menu and applied chips. */
  name: string;
  /** Optional stable key for matching updates across nested filter groups. */
  filterKey?: string;
  /** Options displayed inside this filter group. */
  options: Array<FilterOptionData>;
  /** Formats option values before display and search matching. */
  valueFormatter?: (value: string | number) => string;
  /** True by default. Set false to make the group single-select. */
  multiSelect?: boolean;
  /** Nested filter groups shown below this filter group. */
  filters?: Array<FilterData>;
  /** Enables a select-all checkbox for this group and its children. */
  isSelectAllEnabled?: boolean;
}

export interface AssetsData {
  /** Total result count represented by the current filter set. */
  count: number;
  /** Optional count of results currently selected by active filters. */
  selectedCount?: number;
  /** Entity label appended to result summaries, for example `assets`. */
  name: string;
}

export interface FiltersBarActionsProps {
  /** Opens the filter drawer. */
  onFiltersButtonClick?: () => void;
  /** Number of selected filter options displayed in the Filters button. */
  activeFiltersCount?: number;
  /** Called whenever the search field value changes, and when Enter submits the current value. */
  onSearch?: (search: string) => void;
  /** Placeholder for the search field. */
  searchPlaceHolder?: string;
  /** Controlled favorite state for the optional favorite toggle. */
  favorite?: boolean;
  /** Called when the favorite toggle changes. */
  onFavorite?: (favorite: boolean) => void;
  /** Initial uncontrolled search value. */
  initialSearchValue?: string;
  /** Controlled search value. */
  searchValue?: string;
  /** Extra props/adornments forwarded to the search field input. */
  inputProps?: {
    props: SearchInputProps["inputProps"];
    extendEndAdornment?: JSX.Element;
  };
  /** Optional action area rendered at the far right of the filter bar. */
  rightSideComponent?: JSX.Element;
  /** Hides the Filters button, chips, and drawer when false. */
  isFiltersButtonVisible?: boolean;
}

export interface FiltersBarProps
  extends Pick<
      FiltersBarActionsProps,
      | "onFavorite"
      | "onSearch"
      | "searchPlaceHolder"
      | "initialSearchValue"
      | "searchValue"
      | "inputProps"
      | "isFiltersButtonVisible"
    >,
    Partial<Pick<FiltersBarActionsProps, "onFiltersButtonClick">> {
  /** Shows loading placeholders inside the drawer filter list. */
  isLoading: boolean;
  /** Filter groups displayed by the bar, chips, and drawer. */
  filtersData: Array<FilterData>;
  /** Result summary data shown in the drawer header. */
  assetsData: AssetsData;
  /** Called with the full updated filter tree after a selection changes. */
  onSelectedChange: (updatedFilters: Array<FilterData>) => void;
  /** Initial uncontrolled value for the favorite toggle. */
  initialFavoriteValue?: boolean;
  /** Controlled value for the favorite toggle. */
  favoriteValue?: boolean;
  /** Optional action area rendered at the far right of the filter bar. */
  rightSideComponent?: JSX.Element;
}

export interface FiltersDrawerProps {
  /** Opens the drawer when true. */
  isOpen: boolean;
  /** Shows loading placeholders in filter groups. */
  isLoading: boolean;
  /** Filter tree rendered in the drawer. */
  filters: Array<FilterData>;
  /** Optional external search text. */
  searchText?: string;
  /** Result summary data shown in the drawer header. */
  assetsData: AssetsData;
  /** Called with the full updated filter tree after a selection changes. */
  onSelectedChange: (updatedFilters: Array<FilterData>) => void;
  /** Closes the drawer. */
  handleClose: () => void;
  /** Clears all selected filter options. */
  handleClearAll: () => void;
}
