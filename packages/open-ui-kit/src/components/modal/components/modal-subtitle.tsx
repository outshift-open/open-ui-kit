/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { DialogTitleProps, Typography } from "@mui/material";

export const ModalSubtitle = ({ children, ...props }: DialogTitleProps) => {
  return (
    <Typography variant="subtitle1" {...props} sx={{ padding: "0 0 16px 0" }}>
      {children}
    </Typography>
  );
};
