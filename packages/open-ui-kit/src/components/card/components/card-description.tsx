/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography, TypographyProps, useTheme } from "@mui/material";

interface CardDescriptionProps extends TypographyProps {
  children: React.ReactNode;
}

const CardDescription = ({ children, ...props }: CardDescriptionProps) => {
  const theme = useTheme();
  return (
    <Typography
      variant="body2"
      component="div"
      sx={{ color: theme.palette.vars?.baseTextDefault }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default CardDescription;
