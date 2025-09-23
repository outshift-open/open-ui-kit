/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const cardComponent = (theme: Theme): Components => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "16px 16px 16px 16px",
          borderRadius: "8px",
          backgroundImage: "none",
          backgroundColor: theme.palette.vars?.baseBackgroundWeak,
          boxSizing: "border-box",
          "&:hover": {
            backgroundColor: theme.palette.vars?.baseBackgroundWeak,
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "&:hover": {
            outline: `1px solid ${theme.palette.vars?.controlBorderHover}`,
            "& .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          },
          "&:focus-visible": {
            outline: `1px solid ${theme.palette.vars?.controlBorderActive}`,
            "& .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "0",
          ...theme.typography.body1Semibold,
          color: theme.palette.vars?.baseTextDefault,
        },
        title: {
          ...theme.typography.body1Semibold,
          color: theme.palette.vars?.baseTextDefault,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0",
          "&:last-child": {
            paddingBottom: "0",
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0",
          marginTop: "12px",
        },
      },
    },
  };
};
