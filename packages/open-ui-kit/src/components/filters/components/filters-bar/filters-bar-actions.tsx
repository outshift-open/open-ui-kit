/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getStyles } from "./styles";
import { Button } from "@/components/button";
import { SearchInput } from "@/components/search-input";
import { Filter, Star, StarOutline } from "@/custom-icons";
import type { FiltersBarActionsProps } from "../../types";

export const FiltersBarActions = ({
  onFiltersButtonClick,
  activeFiltersCount,
  onSearch,
  searchPlaceHolder,
  favorite = false,
  onFavorite,
  initialSearchValue = "",
  searchValue,
  inputProps,
  rightSideComponent,
  isFiltersButtonVisible = true,
}: FiltersBarActionsProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [search, setSearch] = useState(initialSearchValue);

  const onSearchSubmit = (value = search) => onSearch?.(value);

  const isSearchDisabled = !onSearch;

  useEffect(() => {
    if (searchValue !== undefined) setSearch(searchValue);
  }, [searchValue]);

  return (
    <Stack direction="row" sx={styles.actionsRow}>
      {isFiltersButtonVisible && (
        <Button
          size="large"
          variant="secondary"
          startIcon={<Filter />}
          onClick={onFiltersButtonClick}
          sx={styles.filterButton}
        >
          Filters
          <Box width="8px" />
          <Box
            sx={
              activeFiltersCount && activeFiltersCount > 0
                ? undefined
                : styles.inactiveCount
            }
          >
            {activeFiltersCount}
          </Box>
        </Button>
      )}
      {onFavorite && (
        <Button
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          size="large"
          variant="secondary"
          onClick={() => onFavorite(!favorite)}
          sx={styles.favoriteButton}
        >
          {favorite ? <Star /> : <StarOutline />}
        </Button>
      )}
      <Stack direction="row" sx={styles.searchStack}>
        <SearchInput
          inputProps={
            inputProps?.props ? inputProps.props : { startAdornment: <></> }
          }
          placeholder={searchPlaceHolder}
          sx={styles.searchInput}
          value={search}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              onSearchSubmit();
            }
          }}
          disabled={isSearchDisabled}
          onClear={() => onSearchSubmit("")}
          onChangeCallback={(value) => {
            setSearch(value);
            onSearch?.(value);
          }}
          extendEndAdornment={
            inputProps?.extendEndAdornment
              ? inputProps.extendEndAdornment
              : undefined
          }
        />
      </Stack>
      {rightSideComponent && rightSideComponent}
    </Stack>
  );
};
