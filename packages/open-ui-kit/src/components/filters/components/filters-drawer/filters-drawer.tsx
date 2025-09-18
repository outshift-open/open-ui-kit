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
