/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
