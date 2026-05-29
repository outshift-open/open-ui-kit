/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const menuComponent = (theme: Theme): Components => {
  return {
    MuiMenu: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
          padding: "8px 0px",
          borderRadius: "8px",
          border: `2px solid ${theme.palette.vars.controlBorderActive}`,
          boxShadow: "0px 2px 5px rgba(200, 213, 245, 0.4)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body1,
          color: theme.palette.vars.baseTextDefault,
          padding: "8px 16px",
          minHeight: "40px",
          gap: "8px",
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
          "&:hover": {
            backgroundColor: theme.palette.vars.controlBackgroundMedium,
          },
          "&.Mui-selected": {
            backgroundColor: theme.palette.vars.controlBackgroundWeak,
            color: theme.palette.vars.interactivePrimaryDefaultDefault,
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.vars.controlBackgroundMedium,
          },
          "&.Mui-disabled": {
            color: theme.palette.vars.baseTextDisabled,
            opacity: 1,
          },
          "&.MuiMenuItem-destructive": {
            color: theme.palette.vars.negativeTextDefault,
            "&:hover": {
              backgroundColor: theme.palette.vars.controlBackgroundMedium,
            },
          },
          "&.MuiMenuItem-sizeMedium": {
            ...theme.typography.body2,
            padding: "6px 16px",
            minHeight: "32px",
          },
          "&.MuiMenuItem-sizeSmall": {
            ...theme.typography.caption,
            padding: "4px 12px",
            minHeight: "24px",
          },
        },
      },
      variants: [
        {
          props: { size: "medium" } as object,
          style: {
            ...theme.typography.body2,
            padding: "6px 16px",
            minHeight: "32px",
          },
        },
        {
          props: { size: "small" } as object,
          style: {
            ...theme.typography.caption,
            padding: "4px 12px",
            minHeight: "24px",
          },
        },
      ],
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          ...theme.typography.captionMedium,
          color: theme.palette.vars.baseTextWeak,
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
          padding: "8px 16px",
          lineHeight: "32px",
          letterSpacing: "0.4px",
        },
      },
    },
  };
};
