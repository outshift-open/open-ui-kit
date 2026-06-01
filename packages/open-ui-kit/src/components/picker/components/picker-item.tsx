/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, ButtonBase, useTheme } from "@mui/material";
import { getPickerItemStyles } from "../styles";
import type { PickerItemProps } from "../types";

export type { PickerItemProps };

export const PickerItem = ({
  icon,
  label,
  size = "medium",
  display = "vertical",
  selected = false,
  disabled = false,
  sx,
  ...props
}: PickerItemProps) => {
  const theme = useTheme();

  return (
    <ButtonBase
      disabled={disabled}
      {...props}
      sx={[
        getPickerItemStyles(theme, size, display, selected, disabled),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box className="picker-icon" aria-hidden>
        {icon}
      </Box>
      <Box component="span" className="picker-label">
        {label}
      </Box>
    </ButtonBase>
  );
};
