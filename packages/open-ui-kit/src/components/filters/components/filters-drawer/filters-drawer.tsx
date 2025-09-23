/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Button, Drawer, Stack } from "@mui/material";
import { AssetsData, FilterData } from "../../types/types";
import { styles } from "./styles";
import { useDebounce } from "use-debounce";
import { useCallback, useState } from "react";
import { getFilteredSubFilters, getFiltersSelectionCount } from "../../utils";
import { FilterDrawerHeader } from "./filter-drawer-header";
import { EmptySearchResult } from "./empty-search-result";
import { Undo } from "@/custom-icons";
import { FilterAccordion } from "./filter-accordion";

export interface FiltersDrawerProps {
  isOpen: boolean;
  isLoading: boolean;
  filters: Array<FilterData>;
  searchText?: string;
  assetsData: AssetsData;
  onSelectedChange: (updatedFilters: Array<FilterData>) => void;
  handleClose: () => void;
  handleClearAll: () => void;
}

export const FiltersDrawer = ({
  isOpen,
  isLoading,
  filters,
  assetsData,
  onSelectedChange,
  handleClose,
  handleClearAll,
}: FiltersDrawerProps) => {
  const [search, setSearch] = useState("");
  const [searchDebounced] = useDebounce(search, 170);

  const getFilterSelectionCount = useCallback((filter: FilterData) => {
    let count = 0;
    count += filter.options.filter((option) => option.isSelected).length;

    if (filter.filters) {
      count += getFiltersSelectionCount(filter.filters);
    }

    return count;
  }, []);

  const onClose = () => {
    setSearch("");
    handleClose();
  };

  const handleOnFilterChange = (updatedFilter: FilterData) => {
    onSelectedChange(
      filters.map((f) =>
        (f.filterKey || f.name) ===
        (updatedFilter.filterKey || updatedFilter.name)
          ? updatedFilter
          : f,
      ),
    );
  };

  const filtersSelectionCount = getFiltersSelectionCount(filters);

  const filtersBySearch = getFilteredSubFilters(filters, searchDebounced);

  return (
    <Drawer anchor={"right"} open={isOpen} onClose={onClose}>
      <FilterDrawerHeader
        onCloseDrawer={onClose}
        assetsData={assetsData}
        activeFiltersCount={filtersSelectionCount}
        onSearch={(value) => setSearch(value)}
        isLoading={isLoading}
      />
      <Stack flex={1} overflow="auto" sx={styles.drawerBody}>
        {filtersBySearch.length === 0 ? (
          <EmptySearchResult searchValue={searchDebounced} />
        ) : (
          filtersBySearch.map((filter) => (
            <FilterAccordion
              key={filter.filterKey || filter.name}
              activeFiltersCount={getFilterSelectionCount(filter)}
              isLoading={isLoading}
              searchText={searchDebounced}
              filter={filter}
              onFilterChange={handleOnFilterChange}
            />
          ))
        )}
      </Stack>
      <Button
        size="medium"
        startIcon={<Undo />}
        sx={styles.clearAll}
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </Drawer>
  );
};
