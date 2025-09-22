/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TooltipProps } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { tooltipStyles } from "./styles";

export const BarGraphTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  const theme = useTheme();

  if (!active || !payload?.length) {
    return null;
  }
  return (
    <Box sx={tooltipStyles(theme).mainContainer}>
      <Box sx={tooltipStyles(theme).categoriesContainer}>
        {payload.map((category) => (
          <Typography
            key={category.name}
            component="span"
            variant="caption"
            sx={tooltipStyles(theme).categoryEntry(category.color)}
          >
            {category.name?.replace("barData.", "")}: {category.value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
