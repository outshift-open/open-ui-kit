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
          borderRadius: 100,
          display: "flex",
          "&:active": {
            "& .MuiSwitch-thumb": {
              width: 14,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              transform: "translateX(20px)",
            },
          },
          "& .MuiSwitch-switchBase": {
            padding: 3,
            transform: "translateX(3px)",
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
            width: 14,
            height: 14,
            borderRadius: 100,
            backgroundColor: theme.palette.vars.controlBackgroundWeak,
            boxShadow: "none",
            transition: theme.transitions.create(["width"], {
              duration: 200,
            }),
          },
          "& .MuiSwitch-track": {
            borderRadius: 100,
            opacity: 1,
            boxSizing: "border-box",
            backgroundColor: theme.palette.vars.controlIconStrong,
          },
          "&:hover:not(:has(.Mui-disabled))": {
            "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
              backgroundColor: theme.palette.vars.controlIconMedium,
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor:
                theme.palette.vars.interactivePrimaryDefaultHover,
            },
          },
          "&:has(.Mui-disabled)": {
            opacity: 0.5,
            "& .MuiSwitch-track": {
              opacity: "1 !important",
              backgroundColor: theme.palette.vars.controlIconDisabled,
            },
          },
        },
      },
    },
  };
};
