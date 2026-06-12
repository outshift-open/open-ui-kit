/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Backdrop as MuiBackdrop } from "@mui/material";
import type { BackdropProps } from "../types";
import { getBackdropStyles } from "../styles";

export const Backdrop = ({ sx, ...props }: BackdropProps) => {
  return (
    <MuiBackdrop
      sx={[getBackdropStyles(), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...props}
    />
  );
};
