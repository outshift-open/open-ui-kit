/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { accordionSummaryClasses, Components, Theme } from "@mui/material";
import { lightBluePalette } from "../color-palette";

export const accordionComponent = (theme: Theme): Components => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: "0px",
          background: "transparent",
          boxShadow: "none",
          color: theme.palette.vars.baseTextStrong,
          "::before": {
            display: "none",
          },
          "&.Mui-expanded": {
            marginTop: "0px",
          },
          "&.Mui-disabled": {
            background: "transparent",
            color: theme.palette.vars.baseTextDisabled,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0px 0px",
          minHeight: "unset",
          gap: "4px",
          outlineOffset: "2px",
          "&.Mui-expanded": {
            minHeight: "unset",
          },
          "&:focus": {
            backgroundColor: "transparent",
            borderRadius: "4px",
            boxShadow: `0 0 0 2px ${lightBluePalette[900]}`,
            outlineOffset: "4px",
          },
          [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
            {
              transform: "rotate(90deg)",
            },
        },
        content: {
          margin: "0px",
          marginLeft: "0px",
          gap: "16px",
          "&.Mui-expanded": {
            margin: "0px",
          },
        },
        expandIconWrapper: {
          height: "20px",
          width: "20px",
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
  };
};
