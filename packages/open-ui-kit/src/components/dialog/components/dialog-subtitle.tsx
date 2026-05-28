/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { DialogTitleProps, Typography, useTheme } from "@mui/material";

export const DialogSubtitle = ({ children, ...props }: DialogTitleProps) => {
  const theme = useTheme();
  return (
    <Typography
      variant="subtitle1"
      {...props}
      sx={[
        { padding: 0, color: theme.palette.vars.baseTextDefault },
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
      ]}
    >
      {children}
    </Typography>
  );
};
