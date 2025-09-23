/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Button, Stack } from "@mui/material";
import { FilterData, AssetsData, FilterOptionData } from "../../types/types";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import {
  getFiltersSelectionCount,
  setAllSubFilters,
  setFilterOptions,
} from "../../utils";
import {
  FiltersBarActions,
  FiltersBarActionsProps,
} from "./filters-bar-actions";
import { FilterChipsContainer } from "./filter-chips-container";
import { FiltersDrawer } from "../filters-drawer/filters-drawer";

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
  isLoading: boolean;
  filtersData: Array<FilterData>;
  assetsData: AssetsData;
  onSelectedChange: (updatedFilters: Array<FilterData>) => void;
  initialFavoriteValue?: boolean;
  favoriteValue?: boolean;
  rightSideComponent?: JSX.Element;
}

export const FiltersBar = ({
  filtersData: filters,
  assetsData,
  onSelectedChange,
  isLoading,
  onSearch,
  searchPlaceHolder = "Search by...",
  initialFavoriteValue = false,
  onFavorite,
  initialSearchValue = "",
  favoriteValue,
  onFiltersButtonClick,
  searchValue,
  inputProps,
  rightSideComponent,
  isFiltersButtonVisible = true,
}: FiltersBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [favorite, setFavorite] = useState(initialFavoriteValue);

  const filtersSelectionCount = getFiltersSelectionCount(filters);

  useEffect(() => {
    if (favoriteValue !== undefined) {
      setFavorite(favoriteValue);
    }
  }, [favoriteValue]);

  const handleClearAll = () => {
    onSelectedChange(setAllSubFilters(filters, false));
  };

  const handleChipDelete = (clearedFilter: FilterData) => {
    onSelectedChange(setFilterOptions(filters, clearedFilter, false));
  };

  const handleFavorite = (f: boolean) => {
    if (onFavorite) onFavorite(f);
    setFavorite(f);
  };

  return (
    <Stack marginTop="16px" spacing={1.5}>
      <FiltersBarActions
        onFiltersButtonClick={() => {
          onFiltersButtonClick && onFiltersButtonClick();
          setIsOpen(true);
        }}
        activeFiltersCount={filtersSelectionCount}
        onSearch={onSearch}
        searchPlaceHolder={searchPlaceHolder}
        favorite={favorite}
        onFavorite={onFavorite && handleFavorite}
        initialSearchValue={initialSearchValue}
        searchValue={searchValue}
        inputProps={inputProps}
        rightSideComponent={rightSideComponent}
        isFiltersButtonVisible={isFiltersButtonVisible}
      />
      {isFiltersButtonVisible ? (
        <>
          <Stack alignItems="center" direction="row" sx={styles.chipsStack}>
            <FilterChipsContainer
              filters={filters}
              handleDelete={handleChipDelete}
            />
            {filtersSelectionCount ? (
              <Button
                size="small"
                variant="tertariary"
                onClick={handleClearAll}
                aria-label="Clear Filters"
              >
                Clear Filters
              </Button>
            ) : null}
          </Stack>
          <FiltersDrawer
            isLoading={isLoading}
            isOpen={isOpen}
            filters={filters}
            assetsData={assetsData}
            onSelectedChange={onSelectedChange}
            handleClose={() => setIsOpen(false)}
            handleClearAll={handleClearAll}
          />
        </>
      ) : (
        <Stack height="4px" />
      )}
    </Stack>
  );
};

export type { FilterData, AssetsData, FilterOptionData };
