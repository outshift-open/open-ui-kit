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
