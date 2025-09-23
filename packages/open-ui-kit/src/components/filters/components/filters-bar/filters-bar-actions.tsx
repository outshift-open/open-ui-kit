/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  FilterList,
  SearchOutlined,
  StarOutline,
  StarOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { greyPalette } from "@/theme/color-palette";
import { SearchField } from "@/components";

export interface FiltersBarActionsProps {
  onFiltersButtonClick?: () => void;
  activeFiltersCount?: number;
  onSearch?: (search: string) => void;
  searchPlaceHolder?: string;
  favorite?: boolean;
  onFavorite?: (favorite: boolean) => void;
  initialSearchValue?: string;
  searchValue?: string;
  inputProps?: {
    props: {
      startAdornment?: JSX.Element;
      endAdornment?: JSX.Element;
    };
    extendEndAdornment?: JSX.Element;
  };
  rightSideComponent?: JSX.Element;
  isFiltersButtonVisible?: boolean;
}

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
  const [search, setSearch] = useState(initialSearchValue);

  const onSearchSubmit = (value = search) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  const isSearchDisabled = !onSearch;

  useEffect(() => {
    if (searchValue !== undefined) setSearch(searchValue);
  }, [searchValue]);

  return (
    <Stack direction="row" columnGap="12px" height="40px">
      {isFiltersButtonVisible && (
        <Button
          size="large"
          variant="secondary"
          startIcon={<FilterList />}
          onClick={onFiltersButtonClick}
        >
          Filters
          <Box width="8px" />
          <Box
            sx={{
              color:
                activeFiltersCount && activeFiltersCount > 0
                  ? "inherit"
                  : greyPalette[200],
            }}
          >
            {activeFiltersCount}
          </Box>
        </Button>
      )}
      {onFavorite && (
        <Button
          size="large"
          variant="secondary"
          onClick={() => onFavorite(!favorite)}
        >
          {favorite ? <StarOutlined /> : <StarOutline />}
        </Button>
      )}
      <Stack direction="row" sx={styles.searchStack}>
        <SearchField
          fullWidth
          InputProps={
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
          onChangeCallback={setSearch}
          extendEndAdornment={
            inputProps?.extendEndAdornment
              ? inputProps.extendEndAdornment
              : undefined
          }
        />
        <Button
          disabled={isSearchDisabled}
          sx={styles.searchButton}
          variant="secondary"
          size="large"
          startIcon={<SearchOutlined />}
          onClick={() => onSearchSubmit()}
        >
          Search
        </Button>
      </Stack>
      {rightSideComponent && rightSideComponent}
    </Stack>
  );
};
