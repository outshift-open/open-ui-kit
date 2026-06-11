/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Typography, useTheme } from "@mui/material";
import { getStyles } from "./styles";

interface EmptySearchResultProps {
  searchValue: string;
}

export const EmptySearchResult = ({
  searchValue,
}: EmptySearchResultProps): JSX.Element => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Typography
      variant="body2"
      align="center"
      sx={styles.emptySearchTypography}
    >
      Oops! We couldn&apos;t find any results that match your search:
      <br />
      <Box component="span" sx={styles.emptySearchInput}>
        &quot;{searchValue}&quot;
      </Box>
      <br />
      Please try again with different filters.
    </Typography>
  );
};
