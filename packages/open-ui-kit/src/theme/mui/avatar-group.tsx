/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const avatarGroupComponent = (theme: Theme): Components => {
  return {
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            border: `2px solid ${theme.palette.vars.baseBackgroundWeak}`,
          },
        },
      },
    },
  };
};
