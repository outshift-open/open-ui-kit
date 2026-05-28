/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { DialogTitleProps, Typography, useTheme } from "@mui/material";

export const DialogTitle = ({ children, ...props }: DialogTitleProps) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h5"
      {...props}
      sx={[
        { padding: 0, color: theme.palette.vars.baseTextStrong },
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
      ]}
    >
      {children}
    </Typography>
  );
};
