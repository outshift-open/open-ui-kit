/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, CircularProgress } from "@mui/material";
import {
  getSpinnerIndicatorStyles,
  getSpinnerTrackStyles,
  getSpinnerWrapperStyles,
} from "../styles";
import type { SpinnerProps } from "../types";

/** Tokenized two-layer circular loading indicator. */
export const Spinner = ({
  boxProps,
  size = 40,
  sx,
  ...props
}: SpinnerProps) => {
  const { sx: boxSx, ...restBoxProps } = boxProps ?? {};

  return (
    <Box
      {...restBoxProps}
      data-slot="spinner"
      sx={[
        getSpinnerWrapperStyles(size),
        ...(Array.isArray(boxSx) ? boxSx : boxSx ? [boxSx] : []),
      ]}
    >
      <CircularProgress
        {...props}
        data-slot="spinner-track"
        size={size}
        sx={[
          (theme) => getSpinnerTrackStyles(theme),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        value={100}
        variant="determinate"
      />
      <CircularProgress
        {...props}
        data-slot="spinner-indicator"
        disableShrink
        size={size}
        sx={[
          (theme) => getSpinnerIndicatorStyles(theme),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        variant="indeterminate"
      />
    </Box>
  );
};
