/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";
import { Button } from "@/components/button";
import { getFloatingButtonStyles } from "../styles";
import type { FloatingButtonProps } from "../types";

export const FloatingButton = ({
  variant = "primary",
  size = "medium",
  children,
  sx,
  ...props
}: FloatingButtonProps) => {
  const theme = useTheme();

  const muiSize = size === "medium" ? "large" : "medium";

  return (
    <Button
      variant="outlined"
      size={muiSize}
      {...props}
      sx={[
        getFloatingButtonStyles(theme, variant),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Button>
  );
};
