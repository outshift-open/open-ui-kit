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
