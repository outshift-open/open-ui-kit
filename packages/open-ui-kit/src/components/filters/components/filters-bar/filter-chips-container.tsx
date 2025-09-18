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

import { useCallback, useEffect, useState } from "react";
import { FilterData } from "../../types/types";
import { FilterChip } from "./filter-chip";

interface FilterChipsContainerProps {
  filters: FilterData[];
  handleDelete: (filter: FilterData) => void;
}

interface SelectedFilterOptions {
  filter: FilterData;
  optionValues: string[];
}

export const FilterChipsContainer = ({
  filters,
  handleDelete,
}: FilterChipsContainerProps) => {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    SelectedFilterOptions[]
  >([]);

  const getAllSelectedOptionsByFilter = useCallback(
    (filter: FilterData): string[] => {
      let selectedOptions = filter.options
        .filter((option) => option.isSelected)
        .map((option) =>
          filter.valueFormatter
            ? filter.valueFormatter(option.value)
            : option.value.toString(),
        );

      if (filter.filters) {
        filter.filters.forEach((subFilter) => {
          selectedOptions = selectedOptions.concat(
            getAllSelectedOptionsByFilter(subFilter),
          );
        });
      }

      return selectedOptions;
    },
    [],
  );

  useEffect(() => {
    const selectedFilters: SelectedFilterOptions[] = [];

    filters.forEach((filter) =>
      selectedFilters.push({
        filter,
        optionValues: getAllSelectedOptionsByFilter(filter),
      }),
    );

    setSelectedFilterOptions(selectedFilters);
  }, [filters, getAllSelectedOptionsByFilter]);

  return (
    <>
      {selectedFilterOptions.map(({ filter, optionValues }) => (
        <FilterChip
          key={filter.name}
          handleDelete={handleDelete}
          filter={filter}
          optionValues={optionValues}
        />
      ))}
    </>
  );
};
