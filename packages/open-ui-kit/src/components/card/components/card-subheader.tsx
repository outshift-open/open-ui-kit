/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography, TypographyProps, useTheme } from "@mui/material";

interface CardSubheaderProps extends TypographyProps {
  children: React.ReactNode;
}

const CardSubheader = ({ children, ...props }: CardSubheaderProps) => {
  const theme = useTheme();
  return (
    <Typography
      variant="captionMedium"
      component="div"
      sx={{ color: theme.palette.vars?.baseTextMedium }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default CardSubheader;
