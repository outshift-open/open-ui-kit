/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Select as MuiSelect, useTheme } from "@mui/material";
import { getSelectStyles } from "../styles";
import type { SelectProps } from "../types";

export type { SelectProps };

export const Select = <T = unknown,>({
  variant = "outlined",
  sx,
  ...props
}: SelectProps<T>) => {
  const theme = useTheme();

  return (
    <MuiSelect<T>
      variant={variant}
      {...props}
      sx={[
        getSelectStyles(theme),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
};
