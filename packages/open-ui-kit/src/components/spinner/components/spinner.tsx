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
} from "@mui/material";

export interface SpinnerProps extends CircularProgressProps {
  boxProps?: BoxProps;
}

export const Spinner = ({ boxProps, ...props }: SpinnerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: props?.size,
        height: props?.size,
        ...boxProps?.sx,
      }}
      {...boxProps}
    >
      <CircularProgress
        sx={{
          ...props.sx,
          opacity: 0.2,
        }}
        size={40}
        {...props}
        value={100}
        variant="determinate"
      />
      <CircularProgress
        sx={{
          ...props.sx,
          animationDuration: "1s",
          position: "absolute",
          left: 0,
          top: typeof props?.size === "number" && props.size < 17 ? 2 : 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
            strokeDasharray: "31.4, 94.2",
          },
        }}
        size={40}
        {...props}
        disableShrink
        variant="indeterminate"
      />
    </Box>
  );
};
