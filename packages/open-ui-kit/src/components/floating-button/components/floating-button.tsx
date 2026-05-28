/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";
import { Button } from "@/components/button";
import type { ButtonProps } from "@/components/button";

export type FloatingButtonVariant = "primary" | "secondary";
export type FloatingButtonSize = "medium" | "small";

export interface FloatingButtonProps
  extends Omit<ButtonProps, "variant" | "size"> {
  variant?: FloatingButtonVariant;
  size?: FloatingButtonSize;
}

export const FloatingButton = ({
  variant = "primary",
  size = "medium",
  children,
  sx,
  ...props
}: FloatingButtonProps) => {
  const theme = useTheme();

  // medium → large in StyledButton sizing (40px), small → medium (32px)
  const muiSize = size === "medium" ? "large" : "medium";

  const borderColor =
    variant === "primary"
      ? theme.palette.vars.interactivePrimaryDefaultDefault
      : theme.palette.vars.controlBorderDefault;

  return (
    <Button
      variant="outlined"
      size={muiSize}
      {...props}
      sx={[
        {
          borderRadius: "100px",
          boxShadow: theme.shadows[4],
          background: `${theme.palette.vars.controlBackgroundDefault} !important`,
          color: `${theme.palette.vars.baseTextStrong} !important`,
          border: `2px solid ${borderColor} !important`,
          "&:hover": {
            boxShadow: theme.shadows[4],
            border: `2px solid ${borderColor} !important`,
          },
          "&:active": {
            boxShadow: theme.shadows[4],
            border: `2px solid ${borderColor} !important`,
          },
          "&.Mui-disabled": {
            boxShadow: "none",
            opacity: 0.4,
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Button>
  );
};
