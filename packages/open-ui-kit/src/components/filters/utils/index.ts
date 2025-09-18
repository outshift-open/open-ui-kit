/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FilterData, FilterOptionData } from "../types/types";

export const getFilteredSubFilters = (
  filters: FilterData[],
  searchText: string,
): FilterData[] => {
  const filterMatchesSearch = (
    option: FilterOptionData,
    valueFormatter?: (value: string | number) => string,
  ) => {
    const formattedValue = valueFormatter
      ? valueFormatter(option.value)
      : option.value.toString();
    return formattedValue.toLowerCase().includes(searchText.toLowerCase());
  };

  const searchInFilter = (filter: FilterData): boolean => {
    if (
      filter.options.some((option) =>
        filterMatchesSearch(option, filter.valueFormatter),
      )
    ) {
      return true;
    }
    if (filter.filters) {
      return filter.filters.some((subFilter) => searchInFilter(subFilter));
    }
    return false;
  };

  return filters.filter(searchInFilter);
};

export const getFiltersSelectionCount = (filters: FilterData[]) => {
  let count = 0;
  filters.forEach((filter) => {
    count += filter.options.filter((option) => option.isSelected).length;

    if (filter.filters) {
      count += getFiltersSelectionCount(filter.filters);
    }
  });

  return count;
};

export const setAllOptions = (
  subOptions: FilterOptionData[],
  checked: boolean,
) => {
  return subOptions.map((option) => {
    return { ...option, isSelected: checked };
  });
};
export const setAllSubFilters = (
  subFilters: FilterData[],
  checked: boolean,
) => {
  return subFilters?.map((filter) => {
    if (filter.options.length > 0) {
      filter.options = setAllOptions(filter.options, checked);
    }

    if (filter.filters?.length) {
      filter.filters = setAllSubFilters(filter.filters, checked);
    }

    return filter;
  });
};

export const setFilterOptions = (
  filters: FilterData[],
  targetFilter: FilterData,
  checked: boolean,
) => {
  return filters?.map((filter) => {
    if (filter.name === targetFilter.name) {
      if (filter.options.length > 0) {
        filter.options = setAllOptions(filter.options, checked);
      }

      if (filter.filters) {
        filter.filters = setAllSubFilters(filter.filters, checked);
      }
    }

    return filter;
  });
};
