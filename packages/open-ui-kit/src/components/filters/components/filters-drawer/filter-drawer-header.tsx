/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { styles } from "./styles";
import { AssetsData } from "../../types/types";
import { CloseOutlined } from "@mui/icons-material";
import { SearchField } from "@/components";

interface FilterDrawerHeaderProps {
  activeFiltersCount: number;
  assetsData: AssetsData;
  isLoading?: boolean;
  onCloseDrawer: () => void;
  onSearch: (value: string) => void;
}

export const FilterDrawerHeader = ({
  activeFiltersCount,
  assetsData: { count, selectedCount, name },
  isLoading,
  onCloseDrawer,
  onSearch,
}: FilterDrawerHeaderProps) => {
  const buildSummaryText = () => {
    return activeFiltersCount ? (
      <Stack direction="row" alignItems="baseline">
        <Typography variant="body2" sx={styles.activeFiltersDesc}>
          {activeFiltersCount} Active Filter{activeFiltersCount !== 1 && "s"}:
        </Typography>
        <Box mr={1} />
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          {selectedCount} / {count} {name}
        </Typography>
      </Stack>
    ) : (
      count && (
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          Total {count} {name}
        </Typography>
      )
    );
  };

  return (
    <>
      <Stack sx={styles.drawerHeader}>
        <Stack sx={styles.drawerTitle} flexDirection="row">
          <Typography variant="h5">Filters</Typography>
          <IconButton onClick={onCloseDrawer}>
            <CloseOutlined />
          </IconButton>
        </Stack>
        {buildSummaryText()}
        <SearchField
          disabled={isLoading}
          sx={styles.searchField}
          placeholder="Search Filter"
          onChangeCallback={(value) => {
            onSearch(value);
          }}
        />
      </Stack>
    </>
  );
};
