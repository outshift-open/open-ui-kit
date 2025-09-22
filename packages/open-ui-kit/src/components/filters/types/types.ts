/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FilterOptionData {
  value: string | number;
  isSelected: boolean;
  optionKey?: string;
}

export interface FilterData {
  name: string;
  filterKey?: string;
  options: Array<FilterOptionData>;
  valueFormatter?: (value: string | number) => string;
  /** True by default. Set it to false if you want to disallow multi select in a filter group. */
  multiSelect?: boolean;
  /** list of sub-filters */
  filters?: Array<FilterData>;
  isSelectAllEnabled?: boolean;
}

export interface AssetsData {
  count: number;
  selectedCount?: number;
  name: string;
}
