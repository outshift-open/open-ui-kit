/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Switch, useTheme } from "@mui/material";
import { getToggleStyles } from "../styles";
import type { ToggleProps } from "../types";

export const Toggle = ({ sx, ...props }: ToggleProps) => {
  const theme = useTheme();

  return (
    <Switch
      disableRipple
      sx={[
        getToggleStyles(theme),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    />
  );
};
