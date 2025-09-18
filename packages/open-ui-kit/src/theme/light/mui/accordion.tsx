/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { accordionSummaryClasses, Components, Theme } from "@mui/material";
import { lightBluePalette } from "../light-color-palette";

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
