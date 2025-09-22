/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const switchComponent = (theme: Theme): Components => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 40,
          height: 20,
          padding: 0,
          borderRadius: 16,
          display: "flex",
          "&:active": {
            "& .MuiSwitch-thumb": {
              width: 14,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              transform: "translateX(9px)",
            },
          },
          "& .MuiSwitch-switchBase": {
            padding: 2,
            transform: "translateX(2px)",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: theme.palette.vars.controlBackgroundWeak,
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                  theme.palette.vars.interactivePrimaryDefaultActive,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            marginTop: "1px",
            width: 14,
            height: 14,
            borderRadius: 20,
            backgroundColor: theme.palette.vars.controlBackgroundWeak,
            transition: theme.transitions.create(["width"], {
              duration: 350,
            }),
          },
          "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
            opacity: 1,
            boxSizing: "border-box",
            backgroundColor: theme.palette.vars.controlIconStrong,
          },
          "&:hover": {
            "& .MuiSwitch-track": {
              backgroundColor: theme.palette.vars.controlIconMedium,
            },
          },
          ".Mui-disabled + .MuiSwitch-track": {
            backgroundColor: theme.palette.vars.controlIconDisabled,
            opacity: `1 !important`,
            "&:hover": {
              backgroundColor: theme.palette.vars.controlIconDisabled,
            },
          },
        },
      },
    },
  };
};
