/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Box,
  BoxProps,
  CircularProgress,
  circularProgressClasses,
  CircularProgressProps,
  type Theme,
} from "@mui/material";

export interface SpinnerProps extends CircularProgressProps {
  /** Props forwarded to the wrapping Box element. */
  boxProps?: BoxProps;
}

export const Spinner = ({
  boxProps,
  size = 40,
  sx,
  ...props
}: SpinnerProps) => {
  const { sx: boxSx, ...restBoxProps } = boxProps ?? {};
  const colorSx = (theme: Theme) => ({
    [`&.MuiCircularProgress-colorPrimary .${circularProgressClasses.circle}`]: {
      color: theme.palette.vars.interactivePrimaryDefaultDefault,
    },
    [`&.MuiCircularProgress-colorSecondary .${circularProgressClasses.circle}`]:
      {
        color: theme.palette.vars.interactiveSecondaryDefaultDefault,
      },
  });

  return (
    <Box
      sx={[
        { position: "relative", width: size, height: size },
        ...(Array.isArray(boxSx) ? boxSx : boxSx ? [boxSx] : []),
      ]}
      {...restBoxProps}
    >
      <CircularProgress
        sx={[
          colorSx,
          { opacity: 0.2 },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        size={size}
        value={100}
        variant="determinate"
        {...props}
      />
      <CircularProgress
        sx={[
          colorSx,
          {
            animationDuration: "1s",
            position: "absolute",
            left: 0,
            top: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
              strokeDasharray: "31.4, 94.2",
            },
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        size={size}
        disableShrink
        variant="indeterminate"
        {...props}
      />
    </Box>
  );
};
