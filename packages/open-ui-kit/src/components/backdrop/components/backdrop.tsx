/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Backdrop as MuiBackdrop } from "@mui/material";
import { surfaceDarkPalette } from "@/theme/style/color-palette";
import type { BackdropProps } from "../types";

export const Backdrop = ({ sx, ...props }: BackdropProps) => {
  return (
    <MuiBackdrop
      sx={[
        {
          backgroundColor: `${surfaceDarkPalette[900]}80`,
          "&.MuiBackdrop-invisible": {
            backgroundColor: "transparent",
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    />
  );
};
