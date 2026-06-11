/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getStyles } from "./styles";
import { Button } from "@/components/button";
import type { FilterData, FiltersBarProps } from "../../types";
import {
  getFiltersSelectionCount,
  setAllSubFilters,
  setFilterOptions,
} from "../../utils";
import { FiltersBarActions } from "./filters-bar-actions";
import { FilterChipsContainer } from "./filter-chips-container";
import { FiltersDrawer } from "../filters-drawer/filters-drawer";

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
  const theme = useTheme();
  const styles = getStyles(theme);
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
    <Stack sx={styles.root}>
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
          <Stack direction="row" sx={styles.chipsStack}>
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
